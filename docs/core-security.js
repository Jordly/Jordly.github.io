// core-security.js — XSS防护、密码加密、错误捕获、数据备份
// 提取自 app.js 第 29-124 行 · 2026-08-06

// ===== XSS 防护：HTML 转义函数 =====
function escHtml(s) {
  return (s == null ? '' : String(s)).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ===== 密码加密：PBKDF2 哈希（加盐+10万次迭代，Web Crypto API，无需外部库）=====
function hashPassword(password) {
  if (!password) return Promise.resolve('');
  var encoder = new TextEncoder();
  var data = encoder.encode(password);
  var salt = crypto.getRandomValues(new Uint8Array(16));
  return crypto.subtle.importKey('raw', data, 'PBKDF2', false, ['deriveBits'])
    .then(function(key) {
      return crypto.subtle.deriveBits(
        { name: 'PBKDF2', salt: salt, iterations: 100000, hash: 'SHA-256' },
        key, 256
      );
    })
    .then(function(bits) {
      var hashArray = Array.from(new Uint8Array(bits));
      var hashHex = hashArray.map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
      var saltHex = Array.from(salt).map(function(b) { return b.toString(16).padStart(2, '0'); }).join('');
      return '$PBK2$' + saltHex + '$' + hashHex;
    });
}

// ===== 全局错误捕获 + 环形运行日志 =====
var RUNTIME_LOG = [];
var RUNTIME_LOG_MAX = 500;
try { var saved = localStorage.getItem('chansee_runtime_logs'); if (saved) RUNTIME_LOG = JSON.parse(saved); } catch(e) { RUNTIME_LOG = []; }

function addRuntimeLog(type, msg, detail) {
  var entry = { time: new Date().toISOString(), type: type, msg: msg, detail: detail || '' };
  RUNTIME_LOG.push(entry);
  if (RUNTIME_LOG.length > RUNTIME_LOG_MAX) RUNTIME_LOG = RUNTIME_LOG.slice(-RUNTIME_LOG_MAX);
  try { localStorage.setItem('chansee_runtime_logs', JSON.stringify(RUNTIME_LOG)); } catch(e) {}
}

window.onerror = function(msg, url, line, col, error) {
  var detail = '位置: ' + (url || '') + ':' + line + ':' + (col || 0);
  if (error && error.stack) detail += '\n堆栈: ' + String(error.stack).substring(0, 500);
  addRuntimeLog('error', String(msg || '').substring(0, 200), detail);
  return false;
};

window.addEventListener('unhandledrejection', function(e) {
  var detail = '';
  if (e && e.reason) {
    detail = String(e.reason);
    if (e.reason.stack) detail += '\n堆栈: ' + String(e.reason.stack).substring(0, 500);
  }
  addRuntimeLog('error', '未处理的 Promise 异常', detail);
});

addRuntimeLog('info', '系统启动', '版本 20260723');

// ===== 一键备份全部数据 =====
function backupAllData() {
  try {
    var backup = {};
    var keyCount = 0;
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key && key.indexOf('chansee_') === 0) {
        try { backup[key] = JSON.parse(localStorage.getItem(key)); } catch(e) { backup[key] = localStorage.getItem(key); }
        keyCount++;
      }
    }
    var blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    var now = new Date();
    a.download = 'CS-CloudHub-备份-' + now.getFullYear() + ('0'+(now.getMonth()+1)).slice(-2) + ('0'+now.getDate()).slice(-2) + '-' + ('0'+now.getHours()).slice(-2) + ('0'+now.getMinutes()).slice(-2) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    localStorage.setItem('chansee_last_backup', now.toISOString());
    addRuntimeLog('info', '数据已备份', '共导出 ' + keyCount + ' 个数据集合');
    if (typeof showToast === 'function') showToast('✅ 备份成功！已导出 ' + keyCount + ' 个数据集合，请妥善保管下载的文件。', 'success');
  } catch(e) {
    addRuntimeLog('error', '备份失败', String(e));
    if (typeof showToast === 'function') showToast('❌ 备份失败：' + e.message, 'error');
  }
}

function getBackupWarning() {
  try {
    var lastBackup = localStorage.getItem('chansee_last_backup');
    if (!lastBackup) return '⚠️ 尚未创建过备份，建议立即备份以防数据丢失！';
    var days = (Date.now() - new Date(lastBackup).getTime()) / 86400000;
    if (days > 7) return '⚠️ 上次备份距今已 ' + Math.floor(days) + ' 天，建议立即备份！';
  } catch(e) {}
  return '';
}
