// ===== 腾讯云开发 CloudBase 同步层（Web SDK 版）=====
// 使用官方 @cloudbase/js-sdk 直接连接云数据库
// 不经过 HTTP 网关，不受浏览器 CORS 限制

(function() {
  var ENV_ID = 'cscloudhub-d0g983jba5ad192ca';
  var app = null;
  var db = null;
  var _ready = false;
  var _initError = null;
  var statusEl = null;
  var _cb_syncing = false;
  var _dirtyTimer = null;

  // ===== 工具函数 =====

  function log() {
    var args = Array.prototype.slice.call(arguments);
    args[0] = '[CloudBase] ' + args[0];
    console.log.apply(console, args);
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

    var icon = '\u2601\uFE0F';
    var bg = '#f0fdf4';
    var color = '#16a34a';

    if (type === 'loading') { icon = '\u23F3'; bg = '#f0f9ff'; color = '#0369a1'; }
    else if (type === 'error') { icon = '\u26A0\uFE0F'; bg = '#fef2f2'; color = '#dc2626'; }
    else if (type === 'offline') { icon = '\uD83D\uDD34'; bg = '#fefce8'; color = '#d97706'; }

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

  // ===== 初始化 SDK =====

  function initSDK() {
    return new Promise(function(resolve) {
      // 第1步：检查 SDK 是否加载成功
      if (typeof cloudbase === 'undefined' || !cloudbase.init) {
        _initError = 'SDK未加载（CDN被墙或网络不通）';
        console.error('[CloudBase] 错误: ' + _initError);
        console.error('[CloudBase] 提示: 请检查网络，或联系开发者更换CDN源');
        resolve(false);
        return;
      }
      console.log('[CloudBase] 第1步OK: SDK加载成功');

      // 第2步：初始化应用
      try {
        app = cloudbase.init({ env: ENV_ID });
        db = app.database();
        console.log('[CloudBase] 第2步OK: 应用初始化成功, 环境=' + ENV_ID);
      } catch(e) {
        _initError = '初始化失败: ' + e.message;
        console.error('[CloudBase] 第2步失败: ' + _initError);
        resolve(false);
        return;
      }

      // 第3步：匿名登录
      var auth = app.auth();
      auth.signInAnonymously().then(function() {
        _ready = true;
        console.log('[CloudBase] 第3步OK: 匿名登录成功');
        resolve(true);
      }).catch(function(err) {
        _initError = '匿名登录失败(' + err.name + '): ' + err.message;
        console.error('[CloudBase] 第3步失败: ' + _initError);
        console.error('[CloudBase] 提示: 请到腾讯云控制台→环境设置→登录方式，确认"匿名登录"已开启');
        resolve(false);
      });
    });
  }

  // ===== 数据库操作（直接用 SDK）=====

  function loadFromDB(collection, isOptional) {
    return new Promise(function(resolve, reject) {
      if (!_ready || !db) {
        if (isOptional) { resolve([]); } else { reject(new Error('SDK未初始化')); }
        return;
      }
      db.collection(collection).orderBy('updateTime', 'desc').limit(1000).get()
        .then(function(res) {
          var data = res.data || [];
          log('从云端加载 ' + collection + ': ' + data.length + ' 条');
          resolve(data);
        })
        .catch(function(err) {
          log('加载 ' + collection + ' 失败: ' + err.message);
          if (isOptional) { resolve([]); } else { reject(err); }
        });
    });
  }

  function saveToDB(collection, data, isOptional) {
    return new Promise(function(resolve) {
      if (!_ready || !db) {
        resolve({ ok: false, error: 'SDK未初始化' });
        return;
      }
      if (!data || data.length === 0) {
        resolve({ ok: true, error: null });
        return;
      }

      // 多条记录集合：逐条保存
      var promises = data.map(function(item) {
        if (item._id) {
          return db.collection(collection).doc(item._id).update(item)
            .catch(function() { return db.collection(collection).add(item); });
        } else {
          return db.collection(collection).add(Object.assign({}, item, { updatedAt: new Date() }));
        }
      });

      Promise.all(promises)
        .then(function() {
          log('保存 ' + collection + ' 成功 (' + data.length + ' 条)');
          resolve({ ok: true, error: null });
        })
        .catch(function(err) {
          log('保存 ' + collection + ' 失败: ' + err.message);
          if (isOptional) { resolve({ ok: true, error: null }); }
          else { resolve({ ok: false, error: err.message }); }
        });
    });
  }

  // ===== 加载所有数据 =====

  function loadAll() {
    return new Promise(function(resolve) {
      initSDK().then(function(ok) {
        if (!ok) {
          showStatus('\u26A0\uFE0F 云端连接失败: ' + (_initError || '未知'), 'error');
          resolve('failed');
          return;
        }

        showStatus('\u23F3 正在同步云端数据...', 'loading');
        log('开始从云端加载所有数据...');
        _cb_syncing = true;

        Promise.all([
          loadFromDB('projects'),
          loadFromDB('users'),
          loadFromDB('goals'),
          loadFromDB('assessments', true),
          loadFromDB('knowledge', true),
          loadFromDB('risk_alerts', true),
          loadFromDB('login_logs', true),
          loadFromDB('staff_config', true),
          loadFromDB('workload_data', true),
          loadFromDB('kpi_history', true),
          loadFromDB('data_change_log', true),
          loadFromDB('data_permissions', true)
        ]).then(function(results) {
          var map = [
            ['chansee_projects', results[0]],
            ['chansee_users', results[1]],
            ['chansee_goals', results[2]],
            ['chansee_assessments', results[3]],
            ['chansee_knowledge', results[4]],
            ['chansee_risk_alerts', results[5]],
            ['chansee_login_logs', results[6]],
            ['chansee_staff_config', results[7]],
            ['chansee_workload_data', results[8]],
            ['chansee_kpi_history', results[9]],
            ['chansee_data_change_log', results[10]],
            ['chansee_data_permissions', results[11]]
          ];
          var loaded = false;

          map.forEach(function(pair) {
            var key = pair[0], val = pair[1];
            if (val && val.length > 0) {
              localStorage.setItem(key, JSON.stringify(val));
              loaded = true;
              log('已写入 localStorage: ' + key + ' (' + val.length + ' 条)');
            }
          });

          _cb_syncing = false;

          if (loaded) {
            showStatus('\u2601\uFE0F 云端数据已同步 \u2705', 'success');
            resolve('loaded');
          } else {
            showStatus('云端暂无数据（首次使用）', 'offline');
            resolve('empty');
          }
        }).catch(function(err) {
          _cb_syncing = false;
          log('云端加载异常: ' + err.message);
          showStatus('\u26A0\uFE0F 同步失败，数据保存在本地', 'error');
          resolve('failed');
        });
      });
    });
  }

  // ===== 保存所有数据 =====

  function saveAll(callback) {
    callback = callback || function() {};

    if (!_ready || !db) {
      callback(false);
      return;
    }

    showStatus('\u23F3 正在同步到云端...', 'loading');

    var dataMap = {};
    var keys = [
      'chansee_projects','chansee_users','chansee_goals',
      'chansee_assessments','chansee_knowledge','chansee_risk_alerts',
      'chansee_login_logs','chansee_staff_config','chansee_workload_data',
      'chansee_kpi_history','chansee_data_change_log','chansee_data_permissions'
    ];
    keys.forEach(function(k) {
      try { dataMap[k] = JSON.parse(localStorage.getItem(k) || '[]'); } catch(e) { dataMap[k] = []; }
    });

    var optionalIdx = [3,4,5,6,7,8,9,10,11]; // assessments到data_permissions是可选集合

    Promise.all([
      saveToDB('projects', dataMap.chansee_projects),
      saveToDB('users', dataMap.chansee_users),
      saveToDB('goals', dataMap.chansee_goals),
      saveToDB('assessments', dataMap.chansee_assessments, true),
      saveToDB('knowledge', dataMap.chansee_knowledge, true),
      saveToDB('risk_alerts', dataMap.chansee_risk_alerts, true),
      saveToDB('login_logs', dataMap.chansee_login_logs, true),
      saveToDB('staff_config', dataMap.chansee_staff_config, true),
      saveToDB('workload_data', dataMap.chansee_workload_data, true),
      saveToDB('kpi_history', dataMap.chansee_kpi_history, true),
      saveToDB('data_change_log', dataMap.chansee_data_change_log, true),
      saveToDB('data_permissions', dataMap.chansee_data_permissions, true)
    ]).then(function(results) {
      var coreOk = results[0].ok && results[1].ok && results[2].ok;

      if (coreOk) {
        showStatus('\u2601\uFE0F 云端同步成功 \u2705', 'success');
        log('云端保存完成');
        callback(true);
      } else {
        showStatus('\u26A0\uFE0F 核心数据同步失败', 'error');
        callback(false);
      }
    });
  }

  // ===== 拦截 localStorage.setItem 自动保存 =====

  var _originalSetItem = localStorage.setItem.bind(localStorage);

  function markDirty(key) {
    if (!_ready) return;
    log('数据已变更: ' + key + '，准备同步...');
    clearTimeout(_dirtyTimer);
    _dirtyTimer = setTimeout(function() {
      log('执行自动保存...');
      saveAll(function(ok) { log('自动保存完成: ' + (ok ? '成功' : '失败')); });
    }, 2000);
  }

  localStorage.setItem = function(key, value) {
    _originalSetItem.call(localStorage, key, value);
    if (_ready && !_cb_syncing && (
      key.indexOf('chansee_') === 0
    )) {
      markDirty(key);
    }
  };

  // ===== 公开 API =====

  window.CloudBaseSync = {
    init: function() { return initSDK(); },
    loadAll: loadAll,
    saveAll: saveAll,
    markDirty: markDirty,
    isReady: function() { return _ready; },
    getInitError: function() { return _initError; }
  };

  // ===== 页面加载时自动同步 =====

  function onPageLoad() {
    // 防止无限刷新：用 sessionStorage
    if (sessionStorage.getItem('cb_loaded') === '1') {
      log('本会话已加载过云端数据，跳过自动加载');

      // 检测本地数据是否丢失（用户清了缓存）
      var hasUsers = false, hasProjects = false;
      try { hasUsers = !!(JSON.parse(localStorage.getItem('chansee_users') || '[]')).length; } catch(e) {}
      try { hasProjects = !!(JSON.parse(localStorage.getItem('chansee_projects') || '[]')).length; } catch(e) {}

      if (!hasUsers || !hasProjects) {
        log('检测到本地数据丢失，从云端恢复...');
        loadAll().then(function(s) {
          if (s === 'loaded') {
            showStatus('数据已从云端恢复 \u2705', 'success');
          }
        });
      }
      return;
    }

    loadAll().then(function(status) {
      if (status === 'loaded') {
        sessionStorage.setItem('cb_loaded', '1');
        showStatus('数据已同步，正在刷新...', 'loading');
        setTimeout(function() { location.reload(); }, 1200);
      } else if (status === 'empty') {
        log('云端暂无数据（首次使用），跳过刷新');
        sessionStorage.setItem('cb_loaded', '1');
      } else {
        log('云端加载失败，下次将重试');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onPageLoad);
  } else {
    onPageLoad();
  }

})();
