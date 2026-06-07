// ===== 腾讯云开发 CloudBase 同步层 =====
// 环境ID: cscloudhub-d0g983jba5ad192ca
// 依赖：必须在 index.html 中先加载 CloudBase SDK (tcb.js)

(function() {
  // CloudBase SDK 已经通过 index.html 的 script 标签加载
  // window.cloudbase 或 window.tcb 可用

  var cloudbaseApp = null;
  var cloudbaseDB = null;
  var cloudbaseReady = false;
  var initPromise = null;

  // 初始化 CloudBase 并匿名登录
  function initCloudBase() {
    if (initPromise) return initPromise;

    initPromise = new Promise(function(resolve) {
      // 检查 SDK 是否可用
      var SDK = window.cloudbase || window.tcb;
      if (!SDK) {
        console.error('[CloudBase] SDK 未加载，请检查 index.html 中是否引入了 tcb.js');
        resolve(false);
        return;
      }

      try {
        cloudbaseApp = SDK.init({ env: 'cscloudhub-d0g983jba5ad192ca' });
        cloudbaseDB = cloudbaseApp.database();
        console.log('[CloudBase] SDK 初始化成功');
      } catch(e) {
        console.error('[CloudBase] SDK 初始化失败:', e);
        resolve(false);
        return;
      }

      // 匿名登录
      cloudbaseApp.auth().signInAnonymously().then(function() {
        cloudbaseReady = true;
        console.log('[CloudBase] 匿名登录成功');
        resolve(true);
      }).catch(function(err) {
        console.warn('[CloudBase] 匿名登录失败，将尝试只读模式:', err.message);
        // 某些操作可能不需要登录（如读取公开数据）
        cloudbaseReady = true;
        resolve(true);
      });
    });

    return initPromise;
  }

  // 从 CloudBase 加载集合数据（返回数组）
  // 集合中的每个文档都有一个 _id 字段
  function loadCollectionFromCloud(collectionName, callback) {
    if (!cloudbaseReady || !cloudbaseDB) {
      console.warn('[CloudBase] 未就绪，无法加载', collectionName);
      callback([]);
      return;
    }

    cloudbaseDB.collection(collectionName).get().then(function(res) {
      // res.data 是文档数组，每个文档有 _id 字段
      // 我们需要提取出真正的业务数据（通常在每个文档的 data 字段，或者文档本身就是数据）
      // 根据之前的设计，每个文档存储一条记录，文档的 _id 就是项目/用户的 ID
      // 但为了简化，我们让每个集合只有一个文档，字段为 data: [数组]
      // 这里先尝试读取 doc('singleton')，如果没有，再读取所有文档

      // 方案：每个集合只有一个文档，_id = 'singleton'，字段 data = 数组
      cloudbaseDB.collection(collectionName).doc('singleton').get().then(function(res2) {
        if (res2.data && res2.data.data && Array.isArray(res2.data.data)) {
          console.log('[CloudBase] 加载', collectionName, '成功，共', res2.data.data.length, '条');
          callback(res2.data.data);
        } else {
          // 如果没有 singleton 文档，尝试读取所有文档并合并
          var allData = [];
          if (res.data && res.data.length > 0) {
            res.data.forEach(function(doc) {
              if (doc.data && Array.isArray(doc.data)) {
                allData = allData.concat(doc.data);
              } else if (doc._id !== 'singleton') {
                // 文档本身就是一条记录
                allData.push(doc);
              }
            });
          }
          console.log('[CloudBase] 加载', collectionName, '成功（兼容模式），共', allData.length, '条');
          callback(allData);
        }
      }).catch(function() {
        // singleton 文档不存在，返回空数组
        console.log('[CloudBase]', collectionName, '集合为空或 singleton 文档不存在');
        callback([]);
      });
    }).catch(function(err) {
      console.error('[CloudBase] 加载', collectionName, '失败:', err.message);
      callback([]);
    });
  }

  // 保存数组数据到 CloudBase（每个集合只有一个 singleton 文档）
  function saveCollectionToCloud(collectionName, dataArray, callback) {
    callback = callback || function() {};
    if (!cloudbaseReady || !cloudbaseDB) {
      console.warn('[CloudBase] 未就绪，无法保存', collectionName);
      callback(false);
      return;
    }

    // 先尝试更新 singleton 文档
    cloudbaseDB.collection(collectionName).doc('singleton').set({
      data: dataArray,
      updateTime: new Date()
    }).then(function() {
      console.log('[CloudBase] 保存', collectionName, '成功，共', dataArray.length, '条');
      callback(true);
    }).catch(function(err) {
      // 如果 singleton 文档不存在，先创建
      if (err.message && err.message.indexOf('document not exist') !== -1) {
        cloudbaseDB.collection(collectionName).add({
          _id: 'singleton',
          data: dataArray,
          updateTime: new Date()
        }).then(function() {
          console.log('[CloudBase] 创建并保存', collectionName, '成功，共', dataArray.length, '条');
          callback(true);
        }).catch(function(err2) {
          console.error('[CloudBase] 创建', collectionName, '失败:', err2.message);
          callback(false);
        });
      } else {
        console.error('[CloudBase] 保存', collectionName, '失败:', err.message);
        callback(false);
      }
    });
  }

  // 从 CloudBase 加载所有数据到 localStorage
  function loadAllFromCloud(callback) {
    callback = callback || function() {};
    if (!cloudbaseReady) {
      console.warn('[CloudBase] 未就绪，无法从云端加载数据');
      callback(false);
      return;
    }

    console.log('[CloudBase] 开始从云端加载所有数据...');
    var pending = 3;
    var success = 0;

    function checkDone() {
      pending--;
      if (pending <= 0) {
        console.log('[CloudBase] 所有数据加载完成，成功', success, '个集合');
        callback(success > 0);
      }
    }

    // 加载 projects
    loadCollectionFromCloud('projects', function(data) {
      if (data && data.length > 0) {
        localStorage.setItem('chansee_projects', JSON.stringify(data));
        success++;
      }
      checkDone();
    });

    // 加载 users
    loadCollectionFromCloud('users', function(data) {
      if (data && data.length > 0) {
        localStorage.setItem('chansee_users', JSON.stringify(data));
        success++;
      }
      checkDone();
    });

    // 加载 goals
    loadCollectionFromCloud('goals', function(data) {
      if (data && data.length > 0) {
        localStorage.setItem('chansee_goals', JSON.stringify(data));
        success++;
      }
      checkDone();
    });
  }

  // 保存所有数据到 CloudBase
  function saveAllToCloud(callback) {
    callback = callback || function() {};
    if (!cloudbaseReady) {
      console.warn('[CloudBase] 未就绪，无法保存到云端');
      callback(false);
      return;
    }

    console.log('[CloudBase] 开始保存所有数据到云端...');
    var pending = 3;
    var success = 0;

    function checkDone() {
      pending--;
      if (pending <= 0) {
        console.log('[CloudBase] 所有数据保存完成，成功', success, '个集合');
        callback(success === 3);
      }
    }

    // 保存 projects
    try {
      var projects = JSON.parse(localStorage.getItem('chansee_projects') || '[]');
      saveCollectionToCloud('projects', projects, function(ok) {
        if (ok) success++;
        checkDone();
      });
    } catch(e) {
      checkDone();
    }

    // 保存 users
    try {
      var users = JSON.parse(localStorage.getItem('chansee_users') || '[]');
      saveCollectionToCloud('users', users, function(ok) {
        if (ok) success++;
        checkDone();
      });
    } catch(e) {
      checkDone();
    }

    // 保存 goals
    try {
      var goals = JSON.parse(localStorage.getItem('chansee_goals') || '[]');
      saveCollectionToCloud('goals', goals, function(ok) {
        if (ok) success++;
        checkDone();
      });
    } catch(e) {
      checkDone();
    }
  }

  // 公开 API
  window.CloudBaseSync = {
    init: initCloudBase,
    isReady: function() { return cloudbaseReady; },
    loadAll: loadAllFromCloud,
    saveAll: saveAllToCloud,
    // 兼容旧接口
    loadFromCloud: loadAllFromCloud,
    saveToCloud: function(collectionName, data, cb) {
      saveCollectionToCloud(collectionName, data, cb);
      // 同时保存其他集合
      saveAllToCloud();
    }
  };

  // 页面加载时自动初始化 CloudBase，然后加载云端数据到 localStorage
  // 注意：必须在 app.js 读取 localStorage 之前完成！
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initAndLoad();
    });
  } else {
    initAndLoad();
  }

  function initAndLoad() {
    // 避免无限刷新：如果已经加载过云端数据，不再刷新
    if (localStorage.getItem('cloudbase_loaded') === 'true') {
      console.log('[CloudBase] 云端数据已加载过，跳过刷新');
      return;
    }

    initCloudBase().then(function(success) {
      if (!success) {
        console.warn('[CloudBase] 初始化失败，将使用本地数据');
        return;
      }
      loadAllFromCloud(function(ok) {
        console.log('[CloudBase] 云端数据加载完成，准备刷新页面');
        localStorage.setItem('cloudbase_loaded', 'true');
        // 刷新页面，让 app.js 重新从 localStorage 读取数据
        setTimeout(function() {
          location.reload();
        }, 500);
      });
    });
  }
})();
