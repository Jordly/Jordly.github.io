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
        // 网络/CORS错误 — 静默失败，不重试、不打日志、不弹提示
        // 腾讯云平台端CORS拦截时，频繁重试只会刷屏报错
        resolve({ code: -1, message: '请求失败' });
      });
    });
  }

  // ===== 读取 =====

  function loadOne(name, isOptional) {
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
          // 加载失败 — 静默跳过
          if (isOptional) {
            resolve([]);
          } else {
            reject(new Error(errMsg));
          }
        }
      }).catch(function(err) {
        if (isOptional) {
          resolve([]);
        } else {
          // 核心集合加载失败 — 静默跳过，用本地数据
          resolve(null);
        }
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

      // assessments、knowledge、risk_alerts、login_logs、staff_config、workload_data、kpi_history、data_change_log、data_permissions 为可选集合：
      // 如果云数据库里还没有这些集合，加载失败不阻止整体流程
      Promise.all([
        loadOne('projects', false),
        loadOne('users', false),
        loadOne('goals', false),
        loadOne('assessments', true),
        loadOne('knowledge', true),
        loadOne('risk_alerts', true),
        loadOne('login_logs', true),
        loadOne('staff_config', true),
        loadOne('workload_data', true),
        loadOne('kpi_history', true),
        loadOne('data_change_log', true),
        loadOne('data_permissions', true)
      ]).then(function(results) {
        var projects = results[0];
        var users = results[1];
        var goals = results[2];
        var assess = results[3];
        var knowledge = results[4];
        var risks = results[5];
        var loginLogs = results[6];
        var staffConfig = results[7];
        var workloadData = results[8];
        var kpiHistory = results[9];
        var dataChangeLog = results[10];
        var dataPermissions = results[11];
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
        if (assess && assess.length > 0) {
          localStorage.setItem('chansee_assessments', JSON.stringify(assess));
          loaded = true;
          log('已写入 localStorage: assess (' + assess.length + ' 条)');
        }
        if (knowledge && knowledge.length > 0) {
          localStorage.setItem('chansee_knowledge', JSON.stringify(knowledge));
          loaded = true;
          log('已写入 localStorage: knowledge (' + knowledge.length + ' 条)');
        }
        if (risks && risks.length > 0) {
          localStorage.setItem('chansee_risk_alerts', JSON.stringify(risks));
          loaded = true;
          log('已写入 localStorage: risk_alerts (' + risks.length + ' 条)');
        }
        if (loginLogs && loginLogs.length > 0) {
          localStorage.setItem('chansee_login_logs', JSON.stringify(loginLogs));
          loaded = true;
          log('已写入 localStorage: login_logs (' + loginLogs.length + ' 条)');
        }

        _cb_syncing = false;  // 恢复拦截器
        log('云端加载完成，loaded=' + loaded);
        if (loaded) {
          showStatus('云端数据已同步 ✅', 'success');
          resolve('loaded');
        } else {
          // 云端暂无数据 — 静默
          resolve('empty');
        }
      }).catch(function(err) {
        // 云端加载全部失败 — 静默跳过，用本地数据
        _cb_syncing = false;
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
        resolve({ ok: false, error: null });
      });
    });
  }

  function saveAll(callback) {
    callback = callback || function() {};

    if (!API_BASE) {
      callback(false);
      return;
    }

    // 静默尝试保存，不显示加载状态避免打扰用户

    var projects = [];
    var users = [];
    var goals = [];
    var assess = [];
    var knowledge = [];
    var risks = [];
    var loginLogs = [];
    var staffConfig = [];
    var workloadData = [];
    var kpiHistory = [];
    var dataChangeLog = [];
    var dataPermissions = [];

    try { projects = JSON.parse(localStorage.getItem('chansee_projects') || '[]'); } catch(e) {}
    try { users = JSON.parse(localStorage.getItem('chansee_users') || '[]'); } catch(e) {}
    try { goals = JSON.parse(localStorage.getItem('chansee_goals') || '[]'); } catch(e) {}
    try { assess = JSON.parse(localStorage.getItem('chansee_assessments') || '[]'); } catch(e) {}
    try { knowledge = JSON.parse(localStorage.getItem('chansee_knowledge') || '[]'); } catch(e) {}
    try { risks = JSON.parse(localStorage.getItem('chansee_risk_alerts') || '[]'); } catch(e) {}
    try { loginLogs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]'); } catch(e) {}
    try { staffConfig = JSON.parse(localStorage.getItem('chansee_staff_config') || '[]'); } catch(e) {}
    try { workloadData = JSON.parse(localStorage.getItem('chansee_workload_data') || '[]'); } catch(e) {}
    try { kpiHistory = JSON.parse(localStorage.getItem('chansee_kpi_history') || '[]'); } catch(e) {}
    try { dataChangeLog = JSON.parse(localStorage.getItem('chansee_data_change_log') || '[]'); } catch(e) {}
    try { dataPermissions = JSON.parse(localStorage.getItem('chansee_data_permissions') || '[]'); } catch(e) {}

    // assessments、knowledge、risk_alerts、login_logs、staff_config、workload_data、kpi_history、data_change_log、data_permissions 为可选集合：
    // 如果云数据库里还没有创建这些集合，保存失败也不影响整体结果
    Promise.all([
      saveOne('projects', projects),
      saveOne('users', users),
      saveOne('goals', goals),
      saveOne('assessments', assess),
      saveOne('knowledge', knowledge),
      saveOne('risk_alerts', risks),
      saveOne('login_logs', loginLogs),
      saveOne('staff_config', staffConfig, true),
      saveOne('workload_data', workloadData, true),
      saveOne('kpi_history', kpiHistory, true),
      saveOne('data_change_log', dataChangeLog, true),
      saveOne('data_permissions', dataPermissions, true)
    ]).then(function(results) {
      var coreOk = results[0].ok && results[1].ok && results[2].ok;
      var optionalErrors = [];
      if (!results[3].ok) optionalErrors.push('assessments:' + results[3].error);
      if (!results[4].ok) optionalErrors.push('knowledge:' + results[4].error);
      if (!results[5].ok) optionalErrors.push('risk_alerts:' + results[5].error);
      if (!results[6].ok) optionalErrors.push('login_logs:' + results[6].error);
      if (!results[7].ok) optionalErrors.push('staff_config:' + results[7].error);
      if (!results[8].ok) optionalErrors.push('workload_data:' + results[8].error);
      if (!results[9].ok) optionalErrors.push('kpi_history:' + results[9].error);
      if (!results[10].ok) optionalErrors.push('data_change_log:' + results[10].error);
      if (!results[11].ok) optionalErrors.push('data_permissions:' + results[11].error);

      if (coreOk) {
        if (optionalErrors.length > 0) {
          log('可选集合保存失败（已忽略）: ' + optionalErrors.join('; '));
        }
        showStatus('云端同步成功 ✅', 'success');
        log('云端保存完成');
        verifyCloudData(projects, users, goals);
        callback(true);
      } else {
        // 核心集合保存失败 — 静默，不打扰用户
        callback(false);
      }
    });
  }

  // 验证云端数据（后台静默验证，只记录日志）
  function verifyCloudData(localProjects, localUsers, localGoals) {
    log('正在后台验证云端数据...');
    Promise.all([
      loadOne('projects'),
      loadOne('users'),
      loadOne('goals')
    ]).then(function(results) {
      var cloudProjects = results[0] || [];
      var cloudUsers = results[1] || [];
      var cloudGoals = results[2] || [];

      log('=== 数据验证详情 ===');
      log('Projects: 本地=' + localProjects.length + ' 云端=' + cloudProjects.length);
      log('Users: 本地=' + localUsers.length + ' 云端=' + cloudUsers.length);
      log('Goals: 本地=' + localGoals.length + ' 云端=' + cloudGoals.length);

      if (localProjects.length !== cloudProjects.length ||
          localUsers.length !== cloudUsers.length ||
          localGoals.length !== cloudGoals.length) {
        log('警告：云端数据数量与本地不一致，但保存请求已返回成功');
      } else {
        log('验证通过：云端数据数量与本地一致');
      }
    }).catch(function(err) {
      log('验证请求失败: ' + err.message);
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
      key === 'chansee_goals' ||
      key === 'chansee_assessments' ||
      key === 'chansee_knowledge' ||
      key === 'chansee_risk_alerts' ||
      key === 'chansee_login_logs' ||
      key === 'chansee_staff_config' ||
      key === 'chansee_workload_data' ||
      key === 'chansee_kpi_history' ||
      key === 'chansee_data_change_log' ||
      key === 'chansee_data_permissions'
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
      return;
    }

    // 防止无限刷新：用 sessionStorage
    // 但只有上次成功加载过才跳过，失败时必须重试
    if (sessionStorage.getItem('cb_loaded') === '1') {
      log('本会话已成功加载过云端数据，跳过自动加载');
      // 检查 localStorage 中的关键数据是否还在
      // （用户可能按 Ctrl+Shift+Del 清除了 Cookie 和 localStorage）
      var hasUsers = false, hasProjects = false;
      try { hasUsers = !!(JSON.parse(localStorage.getItem('chansee_users') || '[]')).length; } catch(e) {}
      try { hasProjects = !!(JSON.parse(localStorage.getItem('chansee_projects') || '[]')).length; } catch(e) {}

      if (!hasUsers || !hasProjects) {
        log('检测到本地数据丢失（users:' + hasUsers + ', projects:' + hasProjects + '），从云端恢复...');
        loadAll().then(function() {
          log('数据恢复完成');
          showStatus('数据已从云端恢复 ✅', 'success');
        });
      } else {
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
      }
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
