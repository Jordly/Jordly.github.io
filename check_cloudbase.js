const https = require('https');

const API_BASE = 'https://cscloudhub-d0g983jba5ad192ca-1440977102.ap-shanghai.app.tcloudbase.com/api';
const AUTH_TOKEN = 'cscloudhub-2026-secret-key';

function cloudRequest(action, collection, data) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      action: action,
      collection: collection,
      data: data,
      token: AUTH_TOKEN
    });
    
    const url = new URL(API_BASE);
    const options = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    };
    
    const req = https.request(options, (res) => {
      let rawData = '';
      res.on('data', (chunk) => rawData += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(rawData));
        } catch(e) {
          resolve({ code: -1, message: '解析失败', raw: rawData });
        }
      });
    });
    
    req.on('error', (err) => reject(err));
    req.write(body);
    req.end();
  });
}

// 检查 projects 集合
cloudRequest('load', 'projects', null)
  .then(result => {
    console.log('=== 云端 projects 数据 ===');
    if (result.code === 0 && Array.isArray(result.data)) {
      console.log('共 ' + result.data.length + ' 个项目');
      result.data.forEach(p => {
        console.log('  - ' + p.id + ': ' + p.name);
      });
      
      // 查找 "111111"
      const found = result.data.find(p => p.name === '111111' || p.id === '111111');
      if (found) {
        console.log('\n✅ 找到项目 "111111":', JSON.stringify(found, null, 2));
      } else {
        console.log('\n❌ 未找到项目 "111111"');
      }
    } else {
      console.log('加载失败:', result);
    }
  })
  .catch(err => {
    console.error('请求异常:', err.message);
  });
