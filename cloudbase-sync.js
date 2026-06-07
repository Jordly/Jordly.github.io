// ===== 腾讯云开发 CloudBase 同步层（彻底修复版）=====
// 环境ID: cscloudhub-d0g983jba5ad192ca
// 修复：匿名登录失败不再标记就绪 / 保存自动重试 / 可见状态提示

(function() {
  var ENV_ID = 'cscloudhub-d0g983jba5ad192ca';
  var sdkApp = null;
  var sdkDB = null;
  var isAuthed = false;
  var initPromise = null;
  var statusEl = null;

  // ===== 工具函数 =====

  function log(msg) {
    var args = Array.prototype.slice.call(arguments);
    args[0] = '[CloudBase] ' + args[0];
    if (args[0].indexOf('失败') !== -1 || args[0].indexOf('错误') !== -1 || args[0].indexOf('未') !== -1) {
      console.warn.apply(console, args);
    } else {
      console.log.apply(console, args);
    }
  }

  function showStatus(text, type) {
    // type: 'loading' | 'success' | 'error' | 'offline'
    if (!statusEl) {
      statusEl = document.createElement('div');
      statusEl.id = 'cloudbase-status';
      statusEl.style.cssText = 'position:fixed;top:50px;right:16px;z-index:9999;' +
        'padding:6px 14px;border-radius:20px;font-size:12px;font-weight:500;' +
        'display:flex;align-items:center;gap:6px;' +
        'box-shadow:0 2px 8px rgba(0,0,0,0.12);transition:all 0.3s;pointer-events:none;';
      document.body.appendChild(statusEl);
    }

    var icon = '☁️';
    var bg = '#f0fdf4';
    var color = '#16a34a';

    if (type === 'loading') { icon = '⏳'; bg = '#f0f9ff'; color = '#0369a1'; }
    else if (type === 'error') { icon = '⚠️'; bg = '#fef2f2'; color = '#dc2626'; }
    else if (type === 'offline') { icon = '📴'; bg = '#fefce8'; color = '#d97706'; }

    statusEl.innerHTML = icon + ' <span>' + text + '</span>';
    statusEl.style.background = bg;
    statusEl.style.color = color;
    statusEl.style.display = 'flex';
    statusEl.style.opacity = '1';

    clearTimeout(statusEl._hideTimer);
    if (type !== 'loading') {
      statusEl._hideTimer = setTimeout(function() {
        statusEl.style.opacity = '0';
        setTimeout(function() {
          if (statusEl.style.opacity === '0') statusEl.style.display = 'none';
        }, 300);
      }, 4000);
    }
  }

  // ===== 初始化 =====

  function init() {
    if (initPromise) return initPromise;

    initPromise = new Promise(function(resolve) {
      var SDK = window.cloudbase || window.tcb;
      if (!SDK) {
        log('SDK 未加载');
        showStatus('云端离线（SDK未加载）', 'offline');
        resolve(false);
        return;
      }

      try {
        sdkApp = SDK.init({ env: ENV_ID });
        sdkDB = sdkApp.database();
        log('SDK 初始化成功');
      } catch(e) {
        log('SDK 初始化异常: ' + e.message);
        showStatus('云端离线（初始化失败）', 'offline');
        resolve(false);
        return;
      }

      sdkApp.auth().signInAnonymously().then(function() {
        isAuthed = true;
        log('匿名登录成功');
        showStatus('云端已连接', 'success');
        resolve(true);
      }).catch(function(err) {
        isAuthed = false;  // 修复：登录失败不再标记为就绪
        log('匿名登录失败: ' + err.message);
        showStatus('云端离线（请开启匿名登录）', 'offline');
        resolve(false);
      });
    });

    return initPromise;
  }

  // ===== 读取 =====

  function loadOne(name) {
    return new Promise(function(resolve) {
      if (!sdkDB || !isAuthed) { resolve(null); return; }

      log('正在加载 ' + name + '...');
      sdkDB.collection(name).doc('singleton').get().then(function(res) {
        if (res.data && res.data.data && Array.isArray(res.data.data)) {
          log('加载 ' + name + ' 成功，共 ' + res.data.data.length + ' 条');
          resolve(res.data.data);
        } else {
          log('加载 ' + name + '：空数据');
          resolve([]);
        }
      }).catch(function(err) {
        log('加载 ' + name + ' 失败: ' + err.message);
        resolve(null);  // null 表示加载失败
      });
    });
  }

  function loadAll() {
    return new Promise(function(resolve) {
      init().then(function(success) {
        if (!success) { resolve(false); return; }

        log('开始从云端加载所有数据...');
        Promise.all([
          loadOne('projects'),
          loadOne('users'),
          loadOne('goals')
        ]).then(function(results) {
          var projects = results[0];
          var users = results[1];
          var goals = results[2];
          var loaded = false;

          if (projects && projects.length > 0) {
            localStorage.setItem('chansee_projects', JSON.stringify(projects));
            loaded = true;
            log('已写入 localStorage: projects (' + projects.length + ' 条)');
          }
          if (users && users.length > 0) {
            localStorage.setItem('chansee_users', JSON.stringify(users));
            loaded = true;
            log('已写入 localStorage: users (' + users.length + ' 条)');
          }
          if (goals && goals.length > 0) {
            localStorage.setItem('chansee_goals', JSON.stringify(goals));
            loaded = true;
            log('已写入 localStorage: goals (' + goals.length + ' 条)');
          }

          log('云端加载完成，loaded=' + loaded);
          resolve(loaded);
        });
      });
    });
  }

  // ===== 保存 =====

  function saveOne(name, data, retryCount) {
    retryCount = retryCount || 0;

    return new Promise(function(resolve) {
      if (!sdkDB || !isAuthed) {
        if (retryCount < 3) {
          log('未就绪，1秒后重试保存 ' + name + ' (' + (retryCount + 1) + '/3)');
          setTimeout(function() {
            saveOne(name, data, retryCount + 1).then(resolve);
          }, 1000);
          return;
        }
        log('未就绪，放弃保存 ' + name);
        resolve(false);
        return;
      }

      log('正在保存 ' + name + ' (' + data.length + ' 条)...');
      sdkDB.collection(name).doc('singleton').set({
        data: data,
        updateTime: new Date()
      }).then(function() {
        log('保存 ' + name + ' 成功');
        resolve(true);
      }).catch(function(err) {
        log('保存 ' + name + ' 失败: ' + err.message);
        if (retryCount < 3) {
          log('1秒后重试保存 ' + name + ' (' + (retryCount + 1) + '/3)...');
          setTimeout(function() {
            saveOne(name, data, retryCount + 1).then(resolve);
          }, 1000);
        } else {
          log('放弃保存 ' + name + '（已重试3次）');
          resolve(false);
        }
      });
    });
  }

  function saveAll(callback) {
    callback = callback || function() {};

    init().then(function(success) {
      if (!success) {
        showStatus('云端未连接，数据仅保存在本地', 'error');
        callback(false);
        return;
      }

      showStatus('正在同步到云端...', 'loading');

      var projects = [];
      var users = [];
      var goals = [];

      try { projects = JSON.parse(localStorage.getItem('chansee_projects') || '[]'); } catch(e) {}
      try { users = JSON.parse(localStorage.getItem('chansee_users') || '[]'); } catch(e) {}
      try { goals = JSON.parse(localStorage.getItem('chansee_goals') || '[]'); } catch(e) {}

      Promise.all([
        saveOne('projects', projects),
        saveOne('users', users),
        saveOne('goals', goals)
      ]).then(function(results) {
        var ok = results[0] || results[1] || results[2];  // 至少一个成功就算成功
        if (ok) {
          showStatus('云端同步成功', 'success');
        } else {
          showStatus('云端同步失败', 'error');
        }
        log('云端保存完成');
        callback(ok);
      });
    });
  }

  // ===== 公开 API =====

  window.CloudBaseSync = {
    init: init,
    loadAll: loadAll,
    saveAll: saveAll,
    isReady: function() { return isAuthed; },
    // 兼容旧接口（app.js 中调用的是 saveToCloud）
    saveToCloud: function(name, data, cb) {
      log('saveToCloud() 已弃用，改用 saveAll()');
      return saveAll(cb);
    },
    loadFromCloud: function(callback) {
      loadAll().then(function(ok) {
        if (callback) callback(ok);
      });
    }
  };

  // ===== 页面加载时自动同步 =====

  function onPageLoad() {
    // 防止无限刷新：用 sessionStorage（页面刷新后仍然存在，但清除浏览器数据后会消失）
    if (sessionStorage.getItem('cb_loaded')) {
      log('本会话已加载过云端数据，跳过自动加载');
      // 后台检查云端是否有更新
      init().then(function(success) {
        if (success) {
          log('后台检查云端更新...');
          loadOne('projects').then(function(data) {
            if (data && data.length > 0) {
              var local = [];
              try { local = JSON.parse(localStorage.getItem('chansee_projects') || '[]'); } catch(e) {}
              if (JSON.stringify(data) !== JSON.stringify(local)) {
                log('检测到云端数据有更新，将刷新页面...');
                localStorage.setItem('chansee_projects', JSON.stringify(data));
                setTimeout(function() { location.reload(); }, 500);
              }
            }
          });
        }
      });
      return;
    }

    showStatus('正在连接云端...', 'loading');

    loadAll().then(function(loaded) {
      if (loaded) {
        sessionStorage.setItem('cb_loaded', '1');
        showStatus('数据已同步，正在刷新...', 'loading');
        setTimeout(function() {
          location.reload();
        }, 1200);
      } else {
        // 检查 CloudBase 是否可用
        init().then(function(success) {
          if (success) {
            // CloudBase 可用但云端无数据（首次使用）
            sessionStorage.setItem('cb_loaded', '1');
            showStatus('云端无数据（可能是首次使用）', 'offline');
          } else {
            // CloudBase 不可用
            showStatus('云端离线，将使用本地数据', 'offline');
            // 不设置 sessionStorage 标志，下次刷新会重试
          }
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onPageLoad);
  } else {
    onPageLoad();
  }

})();
