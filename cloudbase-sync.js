// ===== 腾讯云开发 CloudBase 同步层（HTTP 云函数版）=====
// 通过云函数 HTTP 接口绕过安全域名限制
// 无需 CloudBase SDK，纯 fetch API 调用

(function() {
  // ============================================================
  // ⚠️ 重要：创建云函数后，请把 HTTP 触发器地址填入这里
  // 格式类似：https://xxx.ap-shanghai.tcb.qcloud.com/csCloudHubAPI
  // ============================================================
  var API_BASE = 'https://cscloudhub-d0g983jba5ad192ca-1440977102.ap-shanghai.app.tcloudbase.com/api';

  var AUTH_TOKEN = 'cscloudhub-2026-secret-key';
  var statusEl = null;
  var _cb_syncing = false;  // 防止加载数据时触发保存
  var _dirtyTimer = null;   // 防抖定时器

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

    return new Promise(function(resolve, reject) {
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

      log('HTTP 请求: ' + action + ' ' + collection + ' (尝试 ' + (retryCount + 1) + '/3)');

      fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
      }).then(function(res) {
        return res.json();
      }).then(function(result) {
        log('HTTP 响应:', result);
        if (result.code === 0) {
          resolve(result);
        } else {
          // 业务错误，重试
          if (retryCount < 2) {
            setTimeout(function() {
              cloudRequest(action, collection, data, retryCount + 1).then(resolve).catch(reject);
            }, 1500);
          } else {
            resolve(result);  // 重试3次后返回错误
          }
        }
      }).catch(function(err) {
        log('HTTP 请求异常 (' + (retryCount + 1) + '/3): ' + err.message);
        if (retryCount < 2) {
          setTimeout(function() {
            cloudRequest(action, collection, data, retryCount + 1).then(resolve).catch(reject);
          }, 1500);
        } else {
          resolve({ code: -1, message: '请求失败: ' + err.message });
        }
      });
    });
  }

  // ===== 读取 =====

  function loadOne(name) {
    return new Promise(function(resolve, reject) {
      if (!API_BASE) { resolve([]); return; }

      log('正在从云端加载 ' + name + '...');
      cloudRequest('load', name).then(function(res) {
        if (res.code === 0 && Array.isArray(res.data)) {
          log('加载 ' + name + ' 成功，共 ' + res.data.length + ' 条');
          resolve(res.data);
        } else if (res.code === 0) {
          resolve([]);
        } else {
          log('加载 ' + name + ' 失败: ' + (res.message || '未知错误'));
          reject(new Error(res.message || '加载失败'));
        }
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  function loadAll() {
    return new Promise(function(resolve) {
      if (!API_BASE) {
        log('API_BASE 未配置，跳过云端加载');
        resolve('empty');
        return;
      }

      showStatus('正在连接云端...', 'loading');
      log('开始从云端加载所有数据...');
      _cb_syncing = true;  // 阻止 setItem 拦截器触发保存

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

        _cb_syncing = false;  // 恢复拦截器
        log('云端加载完成，loaded=' + loaded);
        if (loaded) {
          showStatus('云端数据已同步 ✅', 'success');
          resolve('loaded');
        } else {
          showStatus('云端暂无数据', 'offline');
          resolve('empty');
        }
      }).catch(function(err) {
        _cb_syncing = false;  // 恢复拦截器
        log('云端加载异常: ' + err.message);
        showStatus('云端同步失败，数据仅保存在本地', 'error');
        resolve('failed');
      });
    });
  }

  // ===== 保存 =====

  function saveOne(name, data) {
    return new Promise(function(resolve) {
      if (!API_BASE) {
        log('API_BASE 未配置，跳过保存');
        resolve({ ok: false, error: 'API_BASE 未配置' });
        return;
      }

      log('正在保存 ' + name + ' (' + data.length + ' 条)...');

      // cloudRequest 内部已处理重试，这里不再重复重试
      cloudRequest('save', name, data).then(function(res) {
        if (res.code === 0) {
          log('保存 ' + name + ' 成功');
          resolve({ ok: true, error: null });
        } else {
          var errMsg = res.message || '未知错误';
          log('保存 ' + name + ' 失败: ' + errMsg);
          resolve({ ok: false, error: errMsg });
        }
      }).catch(function(err) {
        log('保存 ' + name + ' 请求异常: ' + err.message);
        resolve({ ok: false, error: err.message });
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
      var ok = results[0].ok && results[1].ok && results[2].ok;
      if (ok) {
        // ✅ 保存成功，立即验证云端数据是否一致
        log('保存成功，开始验证云端数据...');
        verifyCloudData(projects, users, goals, function(verifyOk) {
          if (verifyOk) {
            showStatus('云端同步成功 ✅', 'success');
            log('验证通过：云端数据与本地一致');
          } else {
            showStatus('同步异常：云端数据不一致，请重试', 'error');
            log('验证失败：云端数据与本地不一致');
          }
          callback(ok);
        });
      } else {
        var errors = [];
        if (!results[0].ok) errors.push('projects:' + results[0].error);
        if (!results[1].ok) errors.push('users:' + results[1].error);
        if (!results[2].ok) errors.push('goals:' + results[2].error);
        showStatus('同步失败: ' + errors.join('; '), 'error');
        log('云端保存失败，errors=' + errors.join('; '));
        callback(ok);
      }
    });
  }

  // 验证云端数据是否与本地一致
  function verifyCloudData(localProjects, localUsers, localGoals, callback) {
    log('正在验证云端数据...');
    Promise.all([
      loadOne('projects'),
      loadOne('users'),
      loadOne('goals')
    ]).then(function(results) {
      var cloudProjects = results[0] || [];
      var cloudUsers = results[1] || [];
      var cloudGoals = results[2] || [];

      var projectsMatch = JSON.stringify(cloudProjects) === JSON.stringify(localProjects);
      var usersMatch = JSON.stringify(cloudUsers) === JSON.stringify(localUsers);
      var goalsMatch = JSON.stringify(cloudGoals) === JSON.stringify(localGoals);

      // 详细的诊断日志
      log('=== 数据验证详情 ===');
      log('Projects: 本地=' + localProjects.length + ' 云端=' + cloudProjects.length + ' 一致=' + projectsMatch);
      log('Users: 本地=' + localUsers.length + ' 云端=' + cloudUsers.length + ' 一致=' + usersMatch);
      log('Goals: 本地=' + localGoals.length + ' 云端=' + cloudGoals.length + ' 一致=' + goalsMatch);

      // 如果项目数不一致，显示具体差异
      if (localProjects.length !== cloudProjects.length) {
        log('警告：项目数量不一致！');
      }

      callback(projectsMatch && usersMatch && goalsMatch);
    }).catch(function(err) {
      log('验证失败: ' + err.message);
      callback(false);
    });
  }

  // ===== 自动保存：拦截 localStorage.setItem() =====

  var _originalSetItem = localStorage.setItem.bind(localStorage);

  // 标记数据已变更（防抖，2秒后自动保存）
  function markDirty(key) {
    if (!API_BASE) return;
    log('数据已变更: ' + key + '，准备同步到云端...');
    clearTimeout(_dirtyTimer);
    _dirtyTimer = setTimeout(function() {
      log('执行自动保存...');
      saveAll(function(ok) {
        log('自动保存完成: ' + (ok ? '成功' : '失败'));
      });
    }, 2000);
  }

  // 拦截 localStorage.setItem()
  localStorage.setItem = function(key, value) {
    _originalSetItem.call(localStorage, key, value);
    // 如果是关键数据且不是正在从云端加载，则触发自动保存
    if (!_cb_syncing && (
      key === 'chansee_projects' ||
      key === 'chansee_users' ||
      key === 'chansee_goals'
    )) {
      markDirty(key);
    }
  };

  // ===== 公开 API =====

  window.CloudBaseSync = {
    init: function() { return Promise.resolve(!!API_BASE); },
    loadAll: loadAll,
    saveAll: saveAll,
    markDirty: markDirty,
    isReady: function() { return !!API_BASE; },
    saveToCloud: function(name, data, cb) {
      log('saveToCloud() 已弃用，改用 saveAll()');
      return saveAll(cb);
    },
    loadFromCloud: function(callback) {
      loadAll().then(function(status) {
        if (callback) callback(status === 'loaded');
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
    // 但只有上次成功加载过才跳过，失败时必须重试
    if (sessionStorage.getItem('cb_loaded') === '1') {
      log('本会话已成功加载过云端数据，跳过自动加载');
      // 后台检查云端是否有更新（静默检查，不刷新页面）
      loadOne('projects').then(function(data) {
        if (data && data.length > 0) {
          var local = [];
          try { local = JSON.parse(localStorage.getItem('chansee_projects') || '[]'); } catch(e) {}
          if (JSON.stringify(data) !== JSON.stringify(local)) {
            log('检测到云端数据有更新，正在后台同步...');
            loadAll().then(function(ok) {
              if (ok) {
                showStatus('云端数据已更新，正在刷新...', 'loading');
                setTimeout(function() { location.reload(); }, 800);
              }
            });
          }
        }
      }).catch(function() {});
      return;
    }

    showStatus('正在连接云端...', 'loading');

    loadAll().then(function(status) {
      if (status === 'loaded') {
        // ✅ 成功加载数据，设置标志并刷新
        sessionStorage.setItem('cb_loaded', '1');
        showStatus('数据已同步，正在刷新...', 'loading');
        setTimeout(function() {
          location.reload();
        }, 1200);
      } else if (status === 'empty') {
        // 云端暂无数据，这是正常的（如新环境或清理数据后），不显示错误
        log('云端暂无数据，跳过刷新');
      } else {
        // ❌ 真正的请求失败，不设置标志，下次刷新会重试
        log('云端加载失败，未设置 cb_loaded 标志，下次将重试');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onPageLoad);
  } else {
    onPageLoad();
  }

})();
