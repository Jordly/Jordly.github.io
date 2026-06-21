const http = require('http');
const cloudbase = require('@cloudbase/node-sdk');

const ENV_ID = 'cscloudhub-d0g983jba5ad192ca';
const AUTH_TOKEN = 'cscloudhub-2026-secret-key';

let dbInstance = null;

function getDB() {
  if (!dbInstance) {
    const app = cloudbase.init({ env: ENV_ID });
    dbInstance = app.database();
  }
  return dbInstance;
}

async function processRequest(body) {
  try {
    const { action, collection, data, token } = body;

    if (token !== AUTH_TOKEN) {
      return { code: -2, message: 'Invalid token' };
    }

    const db = getDB();

    // ===== 多条记录集合（login_logs、staff_config、workload_data、kpi_history、data_change_log、data_permissions）=====
    const multiRecordCollections = ['login_logs', 'staff_config', 'workload_data', 'kpi_history', 'data_change_log', 'data_permissions'];
    
    if (multiRecordCollections.includes(collection)) {
      if (action === 'load') {
        try {
          const res = await db.collection(collection)
            .orderBy('updatedAt', 'desc')
            .limit(1000)
            .get();
          return { code: 0, data: res.data || [] };
        } catch (e) {
          return { code: 0, data: [] };
        }
      }

      if (action === 'save') {
        try {
          // data 是数组，逐条保存到云端
          for (const item of data) {
            try {
              // 先尝试更新（如果 _id 已存在）
              await db.collection(collection).doc(item._id).update(item);
            } catch (e) {
              // 文档不存在，创建新文档
              await db.collection(collection).add(item);
            }
          }
          return { code: 0, message: '保存成功' };
        } catch (e) {
          return { code: -1, message: '保存失败: ' + e.message };
        }
      }
    }

    // ===== 原有逻辑：其他集合（单条记录）=====
    if (action === 'load') {
      try {
        // 查询所有文档，按 updateTime 降序取最新一条
        const res = await db.collection(collection)
          .orderBy('updateTime', 'desc')
          .limit(1)
          .get();
        if (res.data && res.data.length > 0 && res.data[0].data) {
          return { code: 0, data: res.data[0].data };
        }
        return { code: 0, data: [] };
      } catch (e) {
        // 集合不存在或查询失败，返回空数组
        return { code: 0, data: [] };
      }
    }

    if (action === 'save') {
      try {
        // 先尝试更新（如果文档存在）
        await db.collection(collection).doc('singleton').update({
          data: data,
          updateTime: new Date()
        });
        return { code: 0, message: '保存成功' };
      } catch (e) {
        // 文档不存在，创建新文档（不指定 _id，让系统自动生成）
        try {
          await db.collection(collection).add({
            data: data,
            updateTime: new Date()
          });
          return { code: 0, message: '保存成功' };
        } catch (addErr) {
          return { code: -1, message: '保存失败: ' + addErr.message };
        }
      }
    }

    return { code: -1, message: '未知操作' };
  } catch (e) {
    return { code: -1, message: e.message };
  }
}

// HTTP 服务（HTTP 函数用）
const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.writeHead(405);
    res.end(JSON.stringify({ code: -1, message: 'Method not allowed' }));
    return;
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    try {
      const data = JSON.parse(body);
      const result = await processRequest(data);
      res.writeHead(result.code === 0 ? 200 : (result.code === -2 ? 403 : 500), {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(result));
    } catch (e) {
      res.writeHead(500);
      res.end(JSON.stringify({ code: -1, message: e.message }));
    }
  });
});

// 事件函数入口
exports.main = async (event, context) => {
  return processRequest(event);
};

exports.main_handler = async (event, context) => {
  // 处理 CORS 预检请求（OPTIONS）
  if (event.httpMethod === 'OPTIONS') {
    return {
      isBase64Encoded: false,
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
      },
      body: JSON.stringify({ code: 0 })
    };
  }

  if (event.body) {
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const result = await processRequest(body);
    return {
      isBase64Encoded: false,
      statusCode: result.code === 0 ? 200 : (result.code === -2 ? 403 : 500),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(result)
    };
  }
  return processRequest(event);
};

// 启动 HTTP 服务
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
