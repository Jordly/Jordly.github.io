// ===== 腾讯云开发 CloudBase 同步层（HTTP 云函数版）=====
// 通过云函数 HTTP 接口绕过安全域名限制
// 无需 CloudBase SDK，纯 fetch API 调用

(function() {
  // ============================================================
  // ⚠️ 重要：创建云函数后，请把 HTTP 触发器地址填入这里
  // 格式类似：https://xxx.ap-shanghai.tcb.qcloud.com/csCloudHubAPI
  // ============================================================
  var API_BASE = 'https://cscloudhub-d0g983jba5ad192ca-1440977102.ap-shanghai.apptcloudbase.com/api';

  var AUTH_TOKEN = 'cscloudhub-2026-secret-key';
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

  // ===== HTTP 请求 =====

  function cloudRequest(action, collection, data, retryCount) {
    retryCount = retryCount || 0;

    return new Promise(function(resolve) {
      if (!API_BASE) {
        log('API_BASE 未配置，跳过 HTTP 请求');
        resolve({ code: -1, message: 'API_BASE 未配置' });
        return;
      }

      var body = JSON.stringify({
        action: action,
        collection: collection,
        data: data,
        token: AUTH_TOKEN
      });

      log('HTTP 请求: ' + action + ' ' + collection);

      fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
      }).then(function(res) {
        return res.json();
      }).then(function(result) {
        log('HTTP 响应:', result);
        resolve(result);
      }).catch(function(err) {
        log('HTTP 请求失败 (' + (retryCount + 1) + '/3): ' + err.message);
        if (retryCount < 2) {
          setTimeout(function() {
            cloudRequest(action, collection, data, retryCount + 1).then(resolve);
          }, 1500);
        } else {
          resolve({ code: -1, message: '请求失败: ' + err.message });
        }
      });
    });
  }

  // ===== 读取 =====

  function loadOne(name) {
    return new Promise(function(resolve) {
      if (!API_BASE) { resolve(null); return; }

      log('正在从云端加载 ' + name + '...');
      cloudRequest('load', name).then(function(res) {
        if (res.code === 0 && Array.isArray(res.data)) {
          log('加载 ' + name + ' 成功，共 ' + res.data.length + ' 条');
          resolve(res.data);
        } else {
          log('加载 ' + name + '：' + (res.message || '空数据'));
          resolve([]);
        }
      });
    });
  }

  function loadAll() {
    return new Promise(function(resolve) {
      if (!API_BASE) {
        log('API_BASE 未配置，跳过云端加载');
        resolve(false);
        return;
      }

      showStatus('正在连接云端...', 'loading');
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
        if (loaded) {
          showStatus('云端数据已同步 ✅', 'success');
        } else {
          showStatus('云端无数据', 'offline');
        }
        resolve(loaded);
      });
    });
  }

  // ===== 保存 =====

  function saveOne(name, data, retryCount) {
    retryCount = retryCount || 0;

    return new Promise(function(resolve) {
      if (!API_BASE) {
        log('API_BASE 未配置，跳过保存');
        resolve(false);
        return;
      }

      log('正在保存 ' + name + ' (' + data.length + ' 条)...');
      cloudRequest('save', name, data).then(function(res) {
        if (res.code === 0) {
          log('保存 ' + name + ' 成功');
          resolve(true);
        } else {
          log('保存 ' + name + ' 失败: ' + (res.message || '未知错误'));
          if (retryCount < 2) {
            setTimeout(function() {
              saveOne(name, data, retryCount + 1).then(resolve);
            }, 1500);
          } else {
            log('放弃保存 ' + name + '（已重试3次）');
            resolve(false);
          }
        }
      });
    });
  }

  function saveAll(callback) {
    callback = callback || function() {};

    if (!API_BASE) {
      showStatus('云端未配置，数据仅保存在本地', 'error');
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
  }

  // ===== 公开 API =====

  window.CloudBaseSync = {
    init: function() { return Promise.resolve(!!API_BASE); },
    loadAll: loadAll,
    saveAll: saveAll,
    isReady: function() { return !!API_BASE; },
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
    if (!API_BASE) {
      showStatus('云端未配置（等待云函数地址）', 'offline');
      log('API_BASE 为空，跳过云端同步。请创建云函数后填入 HTTP 触发器地址');
      return;
    }

    // 防止无限刷新：用 sessionStorage
    if (sessionStorage.getItem('cb_loaded')) {
      log('本会话已加载过云端数据，跳过自动加载');
      // 后台检查云端是否有更新
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
        sessionStorage.setItem('cb_loaded', '1');
        showStatus('云端无数据（首次使用）', 'offline');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onPageLoad);
  } else {
    onPageLoad();
  }

})();
