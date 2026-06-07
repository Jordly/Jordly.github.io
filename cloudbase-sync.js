// ===== 腾讯云开发 CloudBase 同步层 =====
// 环境ID: cscloudhub-d0g983jba5ad192ca
// 使用 CDN 加载 CloudBase Web SDK

(function() {
  // 等待 CloudBase SDK 加载
  function waitForSDK(callback) {
    if (window.cloudbase) { callback(window.cloudbase); return; }
    if (window.tcb) { window.cloudbase = window.tcb; callback(window.tcb); return; }
    var script = document.createElement('script');
    script.src = 'https://imgcache.qq.com/open/qcloud/tcbjs/jdk.3.0.0.min.js';
    script.onload = function() {
      window.cloudbase = window.tcb || window.cloudbase;
      callback(window.cloudbase);
    };
    script.onerror = function() {
      console.error('[CloudBase] SDK 加载失败');
      callback(null);
    };
    document.head.appendChild(script);
  }

  // 初始化 CloudBase
  var cloudbaseApp = null;
  var cloudbaseDB = null;
  var cloudbaseReady = false;
  var cloudbaseQueue = [];

  function initCloudBase(callback) {
    callback = callback || function() {};
    waitForSDK(function(SDK) {
      if (!SDK) { callback(false); return; }
      try {
        cloudbaseApp = SDK.init({
          env: 'cscloudhub-d0g983jba5ad192ca'
        });
        cloudbaseDB = cloudbaseApp.database();
        // 匿名登录
        cloudbaseApp.auth().signInAnonymously().then(function() {
          cloudbaseReady = true;
          console.log('[CloudBase] 初始化成功，已匿名登录');
          // 执行队列中的任务
          cloudbaseQueue.forEach(function(fn) { fn(); });
          cloudbaseQueue = [];
          callback(true);
        }).catch(function(err) {
          console.error('[CloudBase] 匿名登录失败:', err);
          // 仍尝试使用（某些操作可能不需要登录）
          cloudbaseReady = true;
          callback(true);
        });
      } catch(e) {
        console.error('[CloudBase] 初始化失败:', e);
        callback(false);
      }
    });
  }

  // 从 CloudBase 加载数据到 localStorage
  function loadFromCloudBase(callback) {
    callback = callback || function() {};
    if (!cloudbaseReady) {
      cloudbaseQueue.push(function() { loadFromCloudBase(callback); });
      return;
    }
    if (!cloudbaseDB) { callback(false); return; }

    console.log('[CloudBase] 开始从云端加载数据...');
    var pending = 3;
    var done = 0;
    var errors = [];

    function checkDone() {
      done++;
      if (done >= pending) {
        if (errors.length > 0) {
          console.warn('[CloudBase] 加载完成，有错误:', errors);
        } else {
          console.log('[CloudBase] 所有数据已从云端加载');
        }
        callback(errors.length === 0);
      }
    }

    // 加载 projects
    cloudbaseDB.collection('projects').doc('data').get().then(function(res) {
      if (res.data && res.data.data && Array.isArray(res.data.data)) {
        localStorage.setItem('chansee_projects', JSON.stringify(res.data.data));
        console.log('[CloudBase] 已加载 projects:', res.data.data.length, '条');
      }
      checkDone();
    }).catch(function(err) {
      errors.push('projects: ' + err.message);
      checkDone();
    });

    // 加载 users
    cloudbaseDB.collection('users').doc('data').get().then(function(res) {
      if (res.data && res.data.data && Array.isArray(res.data.data)) {
        localStorage.setItem('chansee_users', JSON.stringify(res.data.data));
        console.log('[CloudBase] 已加载 users:', res.data.data.length, '条');
      }
      checkDone();
    }).catch(function(err) {
      errors.push('users: ' + err.message);
      checkDone();
    });

    // 加载 goals
    cloudbaseDB.collection('goals').doc('data').get().then(function(res) {
      if (res.data && res.data.data && Array.isArray(res.data.data)) {
        localStorage.setItem('chansee_goals', JSON.stringify(res.data.data));
        console.log('[CloudBase] 已加载 goals:', res.data.data.length, '条');
      }
      checkDone();
    }).catch(function(err) {
      errors.push('goals: ' + err.message);
      checkDone();
    });
  }

  // 保存数据到 CloudBase
  function saveToCloudBase(collectionName, data, callback) {
    callback = callback || function() {};
    if (!cloudbaseReady) {
      cloudbaseQueue.push(function() { saveToCloudBase(collectionName, data, callback); });
      return;
    }
    if (!cloudbaseDB) { callback(false); return; }

    cloudbaseDB.collection(collectionName).doc('data').set({
      data: data,
      updateTime: new Date()
    }).then(function() {
      console.log('[CloudBase] ' + collectionName + ' 已保存到云端,', data.length, '条');
      callback(true);
    }).catch(function(err) {
      console.error('[CloudBase] 保存 ' + collectionName + ' 失败:', err);
      callback(false);
    });
  }

  // 公开 API
  window.CloudBaseSync = {
    init: initCloudBase,
    loadFromCloud: loadFromCloudBase,
    saveToCloud: saveToCloudBase,
    isReady: function() { return cloudbaseReady; }
  };

  // 页面加载时自动初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initCloudBase(function(success) {
        if (success) {
          loadFromCloudBase(function(ok) {
            console.log('[CloudBase] 初始化 + 加载完成, 开始初始化应用...');
            // 触发应用初始化（如果 app.js 已加载）
            if (window.initAfterCloudBase) window.initAfterCloudBase();
          });
        }
      });
    });
  } else {
    initCloudBase(function(success) {
      if (success) {
        loadFromCloudBase(function() {
          if (window.initAfterCloudBase) window.initAfterCloudBase();
        });
      }
    });
  }
})();
