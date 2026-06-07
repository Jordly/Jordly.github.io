// ===== 腾讯云开发 CloudBase 同步层（V2 SDK 版）=====
// 环境ID: cscloudhub-d0g983jba5ad192ca
// SDK 版本: 2.28.6 (static.cloudbase.net/cloudbase-js-sdk)
// 全局对象: window.cloudbase

(function() {
  var ENV_ID = 'cscloudhub-d0g983jba5ad192ca';
  var sdkApp = null;
  var sdkDB = null;
  var isAuthed = false;
  var initPromise = null;
  var statusEl = null;

  // ===== 工具函数 =====

  function log() {
    var args = Array.prototype.slice.call(arguments);
    args[0] = '[CloudBase] ' + args[0];
    if (typeof args[0] === 'string' &&
        (args[0].indexOf('失败') !== -1 || args[0].indexOf('错误') !== -1 || args[0].indexOf('未') !== -1)) {
      console.warn.apply(console, args);
    } else {
      console.log.apply(console, args);
    }
  }

  function showStatus(text, type) {
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
    else if (type === 'offline') { icon = '🔴'; bg = '#fefce8'; color = '#d97706'; }

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
      var SDK = window.cloudbase;
      if (!SDK) {
        log('SDK 未加载（window.cloudbase 不存在），请检查 script 标签');
        showStatus('云端离线（SDK未加载）', 'offline');
        resolve(false);
        return;
      }

      try {
        sdkApp = SDK.init({ env: ENV_ID });
        sdkDB = sdkApp.database();
        log('SDK 初始化成功（V2）');
      } catch(e) {
        log('SDK 初始化异常: ' + e.message);
        showStatus('云端离线（初始化失败）', 'offline');
        resolve(false);
        return;
      }

      sdkApp.auth().signInAnonymously()
        .then(function() {
          isAuthed = true;
          log('匿名登录成功（V2）');
          showStatus('云端已连接 ✅', 'success');
          resolve(true);
        })
        .catch(function(err) {
          isAuthed = false;
          var errMsg = err && err.message ? err.message : JSON.stringify(err);
          log('匿名登录失败:', errMsg);
          showStatus('云端离线（请开启匿名登录）', 'offline');
          resolve(false);
        });
    });

    return initPromise;
  }

  // ===== 读取 =====

  function loadOne(name) {
    return new Promise(function(resolve) {
      if (!sdkDB || !isAuthed) {
        log('loadOne(' + name + '): sdkDB=' + !!sdkDB + ', isAuthed=' + isAuthed);
        resolve(null);
        return;
      }

      log('正在加载 ' + name + '...');
      sdkDB.collection(name).doc('singleton').get()
        .then(function(res) {
          log('loadOne(' + name + ') 原始响应:', res);
          // V2 响应格式: res.data = { _id: 'singleton', data: [...], updateTime: ... }
          var doc = res.data;
          if (doc && doc.data && Array.isArray(doc.data) && doc.data.length > 0) {
            log('加载 ' + name + ' 成功，共 ' + doc.data.length + ' 条');
            resolve(doc.data);
          } else {
            log('加载 ' + name + '：文档不存在或 data 为空，将返回 []');
            resolve([]);
          }
        })
        .catch(function(err) {
          var errMsg = err && err.message ? err.message : JSON.stringify(err);
          log('加载 ' + name + ' 失败: ' + errMsg);
          resolve(null);
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
          log('saveOne(' + name + ') 未就绪，1秒后重试 (' + (retryCount + 1) + '/3)');
          setTimeout(function() {
            saveOne(name, data, retryCount + 1).then(resolve);
          }, 1000);
          return;
        }
        log('saveOne(' + name + ') 未就绪，放弃保存');
        resolve(false);
        return;
      }

      log('正在保存 ' + name + ' (' + data.length + ' 条)...');
      sdkDB.collection(name).doc('singleton').set({
        data: data,
        updateTime: new Date()
      })
        .then(function(res) {
          log('保存 ' + name + ' 成功');
          resolve(true);
        })
        .catch(function(err) {
          var errMsg = err && err.message ? err.message : JSON.stringify(err);
          log('保存 ' + name + ' 失败: ' + errMsg);
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
        var ok = results[0] || results[1] || results[2];
        if (ok) {
          showStatus('云端同步成功 ✅', 'success');
        } else {
          showStatus('云端同步失败 ❌', 'error');
        }
        log('云端保存完成，ok=' + ok);
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
    // 防止无限刷新：用 sessionStorage
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
