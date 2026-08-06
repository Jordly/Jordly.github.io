// modules/profile.js — 个人基础设置模块
/* ═══════════════════ 个人基础设置 ═══════════════════ */
function renderProfile(){
  const rowStyle = 'display:flex;align-items:center;padding:14px 0;border-bottom:1px solid #f1f5f9;';
  const labelStyle = 'width:90px;font-size:14px;color:#334155;flex-shrink:0;';
  const valueStyle = 'flex:1;font-size:14px;color:#1e293b;';
  const linkStyle = 'color:#3b82f6;font-size:13px;cursor:pointer;margin-left:12px;flex-shrink:0;transition:opacity .2s;';
  const linkHover = `onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'"`;

  const u = currentUser || {};
  const userInDb = USERS.find(x => x.id === u.id) || {};
  const avatar = u.avatar || userInDb.avatar || "";
  const nickname = u.nickname || userInDb.nickname || u.name || "未设置";
  const position = u.position || userInDb.position || u.role || "未设置";
  const birthday = u.birthday || userInDb.birthday || "";
  const phone = u.phone || userInDb.phone || "--";
  const email = u.email || userInDb.email || "--";
  const wechatBound = u.wechatBound || userInDb.wechatBound || true;
  const keepStatus = u.keepStatus || userInDb.keepStatus || false;

  let html = `<div class="page-header"><h2>👤 个人基础设置</h2></div>`;

  html += `<div style="display:flex;gap:20px;flex-wrap:wrap;">`;

  // 左侧区域
  html += `<div style="flex:1;min-width:360px;max-width:680px;">`;

  // 基础信息卡片
  html += `<div class="card profile-card">
    <div class="profile-card-title">
      <span class="profile-card-icon">📝</span>基础信息
    </div>

    <!-- 个人头像 -->
    <div style="${rowStyle}">
      <div style="${labelStyle}" class="profile-field-label">个人头像</div>
      <div style="display:flex;align-items:center;flex:1;gap:16px;">
        <div id="profile-avatar-preview" class="profile-avatar-preview"
          style="${avatar ? 'background-image:url('+avatar+');color:transparent;' : ''}">
          ${avatar ? '' : '👤'}
        </div>
        <div>
          <span style="${linkStyle}" ${linkHover} onclick="document.getElementById('profile-avatar-input').click()">更换头像</span>
          <input type="file" id="profile-avatar-input" style="display:none;" accept="image/jpeg,image/jpg,image/png,image/gif" onchange="handleAvatarUpload(this)">
          <div style="font-size:12px;color:#94a3b8;margin-top:4px;">支持 jpg、png、gif，最大 5M</div>
        </div>
      </div>
    </div>

    <!-- 昵称 -->
    <div style="${rowStyle}" id="profile-nickname-row">
      <div style="${labelStyle}" class="profile-field-label">昵称</div>
      <div style="${valueStyle}" id="profile-nickname-value">${nickname}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfileNickname()">修改</span>
    </div>

    <!-- 生日 -->
    <div style="${rowStyle}" id="profile-birthday-row">
      <div style="${labelStyle}" class="profile-field-label">生日</div>
      <div style="${valueStyle}" id="profile-birthday-value">${birthday || "--"}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfileBirthday()">修改</span>
    </div>

    <!-- 职位 -->
    <div style="${rowStyle}" id="profile-position-row">
      <div style="${labelStyle}" class="profile-field-label">职位</div>
      <div style="${valueStyle}" id="profile-position-value">${position}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfilePosition()">修改</span>
    </div>

    <!-- 职场 -->
    <div style="${rowStyle}" id="profile-brand-row">
      <div style="${labelStyle}" class="profile-field-label">职场</div>
      <div style="${valueStyle}" id="profile-brand-value">${(u.workplace || userInDb.workplace || "Chanseen CloudHub").replace(/,/g,'/')}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfileBrand()">修改</span>
    </div>

    <!-- 手机号 -->
    <div style="${rowStyle}" id="profile-phone-row">
      <div style="${labelStyle}" class="profile-field-label">手机号</div>
      <div style="${valueStyle}" id="profile-phone-value">${phone}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfilePhone()">修改</span>
    </div>

    <!-- 邮箱 -->
    <div style="${rowStyle}" id="profile-email-row">
      <div style="${labelStyle}" class="profile-field-label">邮箱</div>
      <div style="${valueStyle}" id="profile-email-value">${email}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfileEmail()">修改</span>
    </div>

    <!-- 微信 -->
    <div style="${rowStyle}">
      <div style="${labelStyle}" class="profile-field-label">微信</div>
      <div style="${valueStyle}">${wechatBound ? '已绑定' : '未绑定'}</div>
      <span style="${linkStyle}" ${linkHover} onclick="toggleWechatBind()">${wechatBound ? '解绑' : '绑定'}</span>
    </div>

    <!-- 登录密码 -->
    <div style="${rowStyle}border-bottom:none;">
      <div style="${labelStyle}" class="profile-field-label">登录密码</div>
      <div style="${valueStyle}">********</div>
      <span style="${linkStyle}" ${linkHover} onclick="showChangePasswordModal()">修改</span>
    </div>
  </div>`;

  // 更多操作卡片
  html += `<div class="card profile-card" style="margin-top:16px;">
    <div class="profile-card-title">
      <span class="profile-card-icon">⚙️</span>更多操作
    </div>

    <!-- 离开团队 -->
    <div style="${rowStyle}border-bottom:none;flex-direction:column;align-items:flex-start;gap:10px;padding-bottom:0;">
      <div style="display:flex;align-items:center;gap:8px;width:100%;">
        <div style="${labelStyle}" class="profile-field-label">离开团队</div>
        <div style="flex:1;"></div>
      </div>
      <div style="font-size:13px;color:#ef4444;background:#fef2f2;padding:10px 14px;border-radius:6px;width:100%;border:1px solid #fecaca;">
        ⚠️ 一旦离开团队，您在此团队的一切记录将无法查看！
      </div>
      <div style="display:flex;gap:12px;margin-top:4px;">
        <button class="btn profile-btn-danger" onclick="leaveTeam()">离开团队</button>
        <button class="btn profile-btn-plain" onclick="alert('移交工作功能请联系管理员处理')">移交工作</button>
      </div>
    </div>
  </div>`;

  // 备份与恢复卡片
  html += `<div class="card profile-card" style="margin-top:16px;">
    <div class="profile-card-title">
      <span class="profile-card-icon">💾</span>备份与恢复
    </div>
    <div style="font-size:13px;color:#64748b;margin-bottom:12px;">定期备份数据到本地文件，清理浏览器数据前请务必备份！</div>
    <div style="display:flex;gap:10px;">
      <button class="btn btn-primary" onclick="backupAllData()" style="flex:1;">💾 一键备份</button>
      <button class="btn" onclick="triggerRestore()" style="flex:1;">♻️ 恢复数据</button>
    </div>
  </div>`;
  html += `</div>`; // 左侧结束

  // 右侧区域
  html += `<div style="flex:1;min-width:300px;max-width:420px;display:flex;flex-direction:column;gap:16px;">`;

  // 账户安全等级
  const safeScore = (phone !== "--" ? 25 : 0) + (email !== "--" ? 25 : 0) + (wechatBound ? 20 : 0) + 30;
  const safeColor = safeScore >= 80 ? '#22c55e' : safeScore >= 60 ? '#f59e0b' : '#ef4444';
  const safeText = safeScore >= 80 ? '良好' : safeScore >= 60 ? '一般' : '较低';
  const dashArray = Math.round(safeScore / 100 * 226) + ' 226';

  html += `<div class="card profile-card">
    <div class="profile-card-title">
      <span class="profile-card-icon">🔐</span>账户安全
    </div>
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
      <div style="position:relative;width:80px;height:80px;">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="36" fill="none" stroke="#e2e8f0" stroke-width="6"/>
          <circle cx="40" cy="40" r="36" fill="none" stroke="${safeColor}" stroke-width="6" stroke-linecap="round"
            stroke-dasharray="${dashArray}" transform="rotate(-90 40 40)"/>
        </svg>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;">
          <div style="font-size:20px;font-weight:700;color:${safeColor};">${safeScore}</div>
          <div style="font-size:11px;color:#94a3b8;">分</div>
        </div>
      </div>
      <div style="flex:1;">
        <div style="font-size:15px;font-weight:600;color:#1e293b;">安全等级：${safeText}</div>
        <div style="font-size:12px;color:#64748b;margin-top:4px;">${safeScore < 100 ? '完善信息可提升安全等级' : '您的账户安全等级很高'}</div>
      </div>
    </div>
    <div class="profile-safe-list">
      <div class="profile-safe-item">
        <span class="profile-safe-dot" style="background:#22c55e;"></span>
        <span class="profile-safe-label">登录密码</span>
        <span class="profile-safe-status ok">已设置</span>
      </div>
      <div class="profile-safe-item">
        <span class="profile-safe-dot" style="background:${phone !== "--" ? '#22c55e' : '#94a3b8'};"></span>
        <span class="profile-safe-label">手机绑定</span>
        <span class="profile-safe-status ${phone !== "--" ? 'ok' : 'warn'}">${phone !== "--" ? '已绑定' : '未绑定'}</span>
      </div>
      <div class="profile-safe-item">
        <span class="profile-safe-dot" style="background:${email !== "--" ? '#22c55e' : '#94a3b8'};"></span>
        <span class="profile-safe-label">邮箱绑定</span>
        <span class="profile-safe-status ${email !== "--" ? 'ok' : 'warn'}">${email !== "--" ? '已绑定' : '未绑定'}</span>
      </div>
      <div class="profile-safe-item">
        <span class="profile-safe-dot" style="background:${wechatBound ? '#22c55e' : '#94a3b8'};"></span>
        <span class="profile-safe-label">微信绑定</span>
        <span class="profile-safe-status ${wechatBound ? 'ok' : 'warn'}">${wechatBound ? '已绑定' : '未绑定'}</span>
      </div>
    </div>
  </div>`;

  // 最近登录（动态渲染真实记录）
  var loginLogs = [];
  try {
    loginLogs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]');
  } catch(e) {}
  
  // 【兜底】如果没有记录但当前是登录状态，强制创建一条当前登录记录
  if (loginLogs.length === 0 && currentUser) {
    var info = detectDeviceInfo();
    var sid = sessionStorage.getItem('chansee_session_id') || ('sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9));
    loginLogs.push({
      _id: 'login_' + Date.now(),
      username: currentUser.username || 'admin',
      os: info.os,
      device: info.device,
      status: '登录成功',
      loginTime: new Date().toISOString(),
      sessionId: sid
    });
    try { localStorage.setItem('chansee_login_logs', JSON.stringify(loginLogs)); } catch(e) {}
  }
  
  html += '<div class="card profile-card">' +
    '<div class="profile-card-title">' +
      '<span class="profile-card-icon">📍</span>最近登录' +
    '</div>';
  
  if (loginLogs.length === 0) {
    html += '<div style="text-align:center;color:#94a3b8;padding:20px 0;font-size:13px;">暂无登录记录</div>';
  } else {
    html += '<table class="login-records-table">' +
      '<thead><tr>' +
        '<th>时间</th>' +
        '<th>设备</th>' +
        '<th>操作系统</th>' +
        '<th>状态</th>' +
      '</tr></thead><tbody>';
    
    for (var li = 0; li < loginLogs.length && li < 5; li++) {
      var log = loginLogs[li];
      var deviceLabel = log.device === 'mobile' ? '手机' : (log.device === 'tablet' ? '平板' : 'PC');
      var deviceIcon = log.device === 'mobile' ? '📱' : (log.device === 'tablet' ? '📟' : '🖥️');
      var timeStr = log.loginTime ? new Date(log.loginTime).toLocaleString('zh-CN') : '--';
      var statusLabel = log.status || '登录成功';
      var statusClass = statusLabel === '登录成功' ? 'status-success' : 'status-fail';
      
      html += '<tr>' +
        '<td class="rec-time">' + timeStr + '</td>' +
        '<td class="rec-device">' + deviceIcon + ' ' + deviceLabel + '</td>' +
        '<td class="rec-os">' + log.os + '</td>' +
        '<td class="rec-status"><span class="' + statusClass + '">' + statusLabel + '</span></td>' +
      '</tr>';
    }
    
    html += '</tbody></table>';
  }
  
  html += '</div>';

  html += `</div>`; // 右侧结束
  html += `</div>`; // 总容器结束

  return html;
}

// ===== 浏览器/系统/设备检测 =====
function detectDeviceInfo() {
  var ua = navigator.userAgent || '';
  var browser = '未知浏览器';
  var os = '未知系统';
  var device = 'desktop';

  // 检测浏览器
  if (ua.indexOf('QQBrowser') !== -1 || ua.indexOf('QQ浏览器') !== -1) {
    browser = 'QQ浏览器';
  } else if (ua.indexOf('MicroMessenger') !== -1 || ua.indexOf('WeChat') !== -1) {
    browser = '微信浏览器';
  } else if (ua.indexOf('Edg') !== -1) {
    browser = 'Edge';
  } else if (ua.indexOf('Chrome') !== -1 && ua.indexOf('Safari') !== -1) {
    browser = 'Chrome';
  } else if (ua.indexOf('Firefox') !== -1) {
    browser = 'Firefox';
  } else if (ua.indexOf('Safari') !== -1) {
    browser = 'Safari';
  } else if (ua.indexOf('Opera') !== -1 || ua.indexOf('OPR') !== -1) {
    browser = 'Opera';
  }

  // 检测操作系统（HarmonyOS优先，因为其UA可能同时包含Android/Linux）
  var isHarmonyOS = false;
  if (ua.indexOf('HarmonyOS') !== -1 || ua.indexOf('OpenHarmony') !== -1) {
    os = 'HarmonyOS';
    device = 'mobile';
    isHarmonyOS = true;
  } else if (ua.indexOf('iPhone') !== -1 || ua.indexOf('iPad') !== -1) {
    os = 'iOS';
    device = 'mobile';
  } else if (ua.indexOf('Android') !== -1) {
    os = 'Android';
    device = 'mobile';
  } else if (ua.indexOf('Windows NT 10') !== -1 || ua.indexOf('Windows NT 11') !== -1 || ua.indexOf('Windows NT 6') !== -1) {
    os = 'Windows';
  } else if (ua.indexOf('Windows') !== -1) {
    os = 'Windows';
  } else if (ua.indexOf('Mac OS X') !== -1 || ua.indexOf('Macintosh') !== -1 || ua.indexOf('MacIntel') !== -1) {
    os = 'macOS';
  } else if (ua.indexOf('Linux') !== -1) {
    // Linux且含华为/荣耀关键词 → 鸿蒙PC
    if (ua.indexOf('HUAWEI') !== -1 || ua.indexOf('honor') !== -1 || ua.indexOf('Harmony') !== -1) {
      os = 'HarmonyOS';
      device = 'desktop';
      isHarmonyOS = true;
    } else {
      os = 'Linux';
    }
  }

  // 补充设备类型判断
  if (!isHarmonyOS && window.innerWidth <= 768) {
    device = 'mobile';
  }
  if ((os === 'iOS' || os === 'Android' || os === 'HarmonyOS') && window.innerWidth > 768 && window.innerWidth <= 1024) {
    device = 'tablet';
  }
  // iPad特殊处理（iPad上Safari UA不含"iPad"，用屏幕比例判断）
  if (os === 'iOS' && navigator.maxTouchPoints > 0) {
    device = 'mobile';
    if (window.innerWidth >= 768) device = 'tablet';
  }

  return { browser: browser, os: os, device: device };
}

// ===== 记录登录信息 =====
function recordLogin() {
  try {
    var username = '';
    var authStr = localStorage.getItem('chanseen_auth');
    if (authStr) {
      var auth = JSON.parse(authStr);
      username = auth.user?.username || auth.user?.name || '';
    }
    // 如果 chanseen_auth 取不到用户名，从 currentUser 取
    if (!username && typeof currentUser !== 'undefined' && currentUser) {
      username = currentUser.username || currentUser.name || 'admin';
    }
    // 还没取到就用兜底
    if (!username) username = 'admin';

    var info = detectDeviceInfo();

    // 生成唯一会话ID（存在sessionStorage，页面关闭就失效）
    var sessionId = sessionStorage.getItem('chansee_session_id');
    if (!sessionId) {
      sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('chansee_session_id', sessionId);
    }

    // === 去重：同一sessionId在5分钟内不重复记录（防止刷新页面重复写入）===
    var existingLogs = [];
    try { existingLogs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]'); } catch(e) {}
    var nowTime = Date.now();
    for (var ei = 0; ei < existingLogs.length; ei++) {
      if (existingLogs[ei].sessionId === sessionId) {
        var logTime = new Date(existingLogs[ei].loginTime).getTime();
        if ((nowTime - logTime) < 5 * 60 * 1000) {
          // 5分钟内有同sessionId的记录，跳过不写
          return;
        }
      }
    }

    var loginRecord = {
      _id: 'login_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      username: username,
      browser: info.browser,
      os: info.os,
      device: info.device,
      status: '登录成功',
      loginTime: new Date().toISOString(),
      sessionId: sessionId,
      forceLogout: false
    };

    // 保存到 localStorage（login_logs 集合）
    var logs = [];
    try {
      logs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]');
    } catch(e) {}
    logs.unshift(loginRecord);  // 最新的在前面
    // 只保留最近20条
    if (logs.length > 20) logs = logs.slice(0, 20);
    localStorage.setItem('chansee_login_logs', JSON.stringify(logs));

    // 同步到云端
    if (window.CloudBaseSync) {
      try { window.CloudBaseSync.saveAll(); } catch(e) {}
    }

    // 同时把当前 sessionId 存到 chansee_current_session，用于"当前在线"判断
    localStorage.setItem('chansee_current_session', sessionId);
  } catch(e) {
    console.warn('[登录记录] 保存失败：', e);
  }
}

// ===== 检查是否被强制退出 =====
function checkForceLogout() {
  try {
    var sessionId = sessionStorage.getItem('chansee_session_id');
    if (!sessionId) return;
    var logs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]');
    var myLog = logs.find(function(l) { return l.sessionId === sessionId; });
    if (myLog && myLog.forceLogout) {
      // 被强制退出！清除登录状态，跳回登录页
      localStorage.removeItem('chanseen_auth');
      sessionStorage.removeItem('chansee_session_id');
      localStorage.removeItem('chansee_current_session');
      alert('您的账号已在其他设备被强制退出登录。');
      location.reload();
    }
  } catch(e) {}
}

// 每隔60秒检查一次是否被强制退出
setInterval(function() {
  if (typeof currentUser !== 'undefined' && currentUser && currentUser.id) {
    checkForceLogout();
  }
}, 60000);

// ===== 强制退出某个会话（管理员功能）=====
function forceLogoutSession(sessionId) {
  if (!sessionId) return;
  try {
    var logs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]');
    for (var i = 0; i < logs.length; i++) {
      if (logs[i].sessionId === sessionId) {
        logs[i].forceLogout = true;
        break;
      }
    }
    localStorage.setItem('chansee_login_logs', JSON.stringify(logs));
    // 同步到云端
    if (window.CloudBaseSync) {
      try { window.CloudBaseSync.saveAll(); } catch(e) {}
    }
    showToast('已强制退出该设备');
    // 重新渲染个人设置页面
    if (typeof renderProfile === 'function') {
      document.getElementById('app-content').innerHTML = renderProfile();
    }
  } catch(e) {
    console.warn('[强制退出] 操作失败：', e);
  }
}
function handleAvatarUpload(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) { alert("图片大小超过 5M，请选择更小的图片"); return; }
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // 压缩：最大边长 200px，JPEG 质量 0.8
      const maxSize = 200;
      let w = img.width, h = img.height;
      if (w > h) { if (w > maxSize) { h = Math.round(h * maxSize / w); w = maxSize; } }
      else        { if (h > maxSize) { w = Math.round(w * maxSize / h); h = maxSize; } }
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.8);
      if (currentUser) currentUser.avatar = compressedDataUrl;
      persistCurrentUser();
      const preview = document.getElementById("profile-avatar-preview");
      if (preview) { preview.style.backgroundImage = `url(${compressedDataUrl})`; preview.textContent = ""; }
      updateUserDisplay();
      showToast("头像更换成功");
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// 通用：将某行变为编辑模式
function enterEditMode(rowId, label, inputId, inputType, currentValue, saveFn) {
  const rowEl = document.getElementById(rowId);
  if (!rowEl) return;
  rowEl.innerHTML = `
    <div style="width:90px;font-size:14px;color:#334155;flex-shrink:0;">${label}</div>
    <input type="${inputType}" id="${inputId}" value="${currentValue}" style="flex:1;padding:6px 10px;font-size:14px;border:1.5px solid #bfdbfe;border-radius:6px;outline:none;transition:border-color .2s;" onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#bfdbfe'" onkeydown="if(event.key==='Enter')${saveFn}()">
    <button type="button" style="color:#3b82f6;font-size:13px;cursor:pointer;margin-left:12px;flex-shrink:0;font-weight:500;background:none;border:1.5px solid #3b82f6;border-radius:6px;padding:4px 14px;" onclick="${saveFn}()">保存</button>
    <span style="color:#94a3b8;font-size:13px;cursor:pointer;margin-left:8px;flex-shrink:0;" onclick="renderModule('profile')">取消</span>
  `;
  setTimeout(() => { const el = document.getElementById(inputId); if(el){ el.focus(); el.select(); } }, 50);
}

// 昵称编辑
function editProfileNickname() {
  const el = document.getElementById("profile-nickname-value");
  if (!el) return;
  enterEditMode("profile-nickname-row", "昵称", "profile-nickname-input", "text", el.textContent, "saveProfileNickname");
}
function saveProfileNickname() {
  const input = document.getElementById("profile-nickname-input");
  if (!input) return;
  const val = input.value.trim();
  if (!val) { alert("昵称不能为空"); return; }
  const btn = input.parentElement.querySelector("button");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "保存中"; }
  if (currentUser) {
    currentUser.nickname = val;
    currentUser.name = val;
  }
  persistCurrentUser();
  updateUserDisplay(); // 同步刷新右上角
  if (btn) { btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "保存"; }
  renderModule("profile");
  showToast("昵称修改成功");
}

// 职位编辑
function editProfilePosition() {
  const el = document.getElementById("profile-position-value");
  if (!el) return;
  enterEditMode("profile-position-row", "职位", "profile-position-input", "text", el.textContent, "saveProfilePosition");
}
function saveProfilePosition() {
  const input = document.getElementById("profile-position-input");
  if (!input) return;
  const val = input.value.trim();
  const btn = input.parentElement.querySelector("button");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "保存中"; }
  if (currentUser) currentUser.position = val;
  persistCurrentUser();
  if (btn) { btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "保存"; }
  renderModule("profile");
  showToast("职位修改成功");
}

// 生日编辑
function editProfileBirthday() {
  const el = document.getElementById("profile-birthday-value");
  if (!el) return;
  const current = el.textContent === "--" ? "" : el.textContent;
  enterEditMode("profile-birthday-row", "生日", "profile-birthday-input", "date", current, "saveProfileBirthday");
}
function saveProfileBirthday() {
  const input = document.getElementById("profile-birthday-input");
  if (!input) return;
  const val = input.value;
  if (currentUser) currentUser.birthday = val;
  persistCurrentUser();
  renderModule("profile");
  showToast("生日修改成功");
}

// 手机号编辑
function editProfilePhone() {
  const el = document.getElementById("profile-phone-value");
  if (!el) return;
  const current = el.textContent === "--" ? "" : el.textContent;
  enterEditMode("profile-phone-row", "手机号", "profile-phone-input", "tel", current, "saveProfilePhone");
}
function saveProfilePhone() {
  const input = document.getElementById("profile-phone-input");
  if (!input) return;
  const val = input.value.trim();
  if (val && !/^1[3-9]\d{9}$/.test(val)) { alert("请输入正确的手机号"); return; }
  if (currentUser) currentUser.phone = val || "";
  persistCurrentUser();
  renderModule("profile");
  showToast(val ? "手机号修改成功" : "手机号已清空");
}

// 邮箱编辑
function editProfileEmail() {
  const el = document.getElementById("profile-email-value");
  if (!el) return;
  const current = el.textContent === "--" ? "" : el.textContent;
  enterEditMode("profile-email-row", "邮箱", "profile-email-input", "email", current, "saveProfileEmail");
}
function saveProfileEmail() {
  const input = document.getElementById("profile-email-input");
  if (!input) return;
  const val = input.value.trim();
  if (val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { alert("请输入正确的邮箱地址"); return; }
  if (currentUser) currentUser.email = val || "";
  persistCurrentUser();
  renderModule("profile");
  showToast(val ? "邮箱修改成功" : "邮箱已清空");
}

// 微信绑定/解绑
function toggleWechatBind() {
  const current = currentUser && currentUser.wechatBound;
  if (current) {
    if (!confirm("确定要解绑微信吗？")) return;
    if (currentUser) currentUser.wechatBound = false;
    showToast("微信已解绑");
  } else {
    if (currentUser) currentUser.wechatBound = true;
    showToast("微信绑定成功");
  }
  persistCurrentUser();
  renderModule("profile");
}

// 品牌编辑
function editProfileBrand() {
  // 多选职场弹窗
  var workplaces = ['济南','淄博','杭州','无锡'];
  var currentVal = document.getElementById("profile-brand-value");
  if (!currentVal) return;
  var selected = (currentUser.workplace || '').split(',').filter(Boolean);
  if (selected.length === 0) selected = ['济南'];
  var html = '<div style="display:flex;flex-direction:column;gap:10px;">';
  workplaces.forEach(function(wp) {
    var checked = selected.indexOf(wp) !== -1 ? 'checked' : '';
    html += '<label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px;color:#334155;padding:6px 0;">';
    html += '<input type="checkbox" value="' + wp + '" ' + checked + ' style="width:18px;height:18px;accent-color:#0ABAB5;">';
    html += wp;
    html += '</label>';
  });
  html += '</div>';
  html += '<div style="display:flex;gap:10px;margin-top:20px;justify-content:flex-end;">';
  html += '<button class="btn" onclick="closeWorkplaceModal()" style="padding:8px 16px;">取消</button>';
  html += '<button class="btn btn-primary" onclick="saveProfileWorkplace()" style="padding:8px 16px;">确定</button>';
  html += '</div>';
  
  document.getElementById('modal-title').textContent = '选择职场';
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal-overlay').classList.remove('hidden');
  window._workplaceSelected = selected;
}
function closeWorkplaceModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}
function saveProfileWorkplace() {
  var cbs = document.querySelectorAll('#modal-body input[type=checkbox]:checked');
  var val = [];
  cbs.forEach(function(cb) { val.push(cb.value); });
  val = val.join(',');
  if (currentUser) currentUser.workplace = val;
  // 同步更新 USERS 数组
  var u = USERS.find(function(uu){ return uu.id === currentUser.id; });
  if (u) u.workplace = val;
  persistCurrentUser();
  saveUsers();
  renderModule("profile");
  showToast("职场修改成功");
  closeWorkplaceModal();
}

// 保持当前状态切换
function toggleKeepStatus(checkbox) {
  if (currentUser) currentUser.keepStatus = checkbox.checked;
  persistCurrentUser();
  // 即时更新文字，不等待重新渲染（在同一位置仅改变文字）
  const container = checkbox.closest(".profile-toggle-row") || checkbox.closest('[style*="flex:1"]');
  const statusText = container ? container.querySelector(".keep-status-text") : null;
  if (statusText) statusText.textContent = checkbox.checked ? "已开启" : "已关闭";
  showToast(checkbox.checked ? "保持当前状态已开启" : "保持当前状态已关闭");
}

// 修改密码弹窗
function showChangePasswordModal() {
  const modal = document.getElementById("change-password-modal");
  if (modal) {
    modal.classList.remove("hidden");
    setTimeout(() => document.getElementById("cp-old")?.focus(), 100);
  }
}
function hideChangePasswordModal() {
  const modal = document.getElementById("change-password-modal");
  if (modal) {
    modal.classList.add("hidden");
    ["cp-old","cp-new","cp-confirm"].forEach(id => { const el = document.getElementById(id); if(el) el.value=""; });
  }
}
function doChangePassword() {
  const oldPwd = document.getElementById("cp-old").value;
  const newPwd = document.getElementById("cp-new").value;
  const confirm = document.getElementById("cp-confirm").value;
  if (!oldPwd || !newPwd || !confirm) { alert("请填写完整"); return; }
  if (newPwd.length < 6) { alert("新密码至少6位"); return; }
  if (newPwd !== confirm) { alert("两次输入的新密码不一致"); return; }
  const btn = document.querySelector("#change-password-modal .btn-primary");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "保存中"; }
  const userInDb = USERS.find(u => currentUser && u.id === currentUser.id);
  if (!userInDb) { alert("用户不存在"); return; }
  // 验证原密码（支持哈希和旧版明文迁移）
  var stored = userInDb.password || '';
  function doHashAndSave() {
    hashPassword(newPwd).then(function(hashedNew) {
      userInDb.password = hashedNew;
      if (currentUser) { currentUser.password = hashedNew; localStorage.setItem("chansee_current_user", JSON.stringify(currentUser)); }
      saveUsers();
      if (btn) { btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "确认修改"; }
      showToast("密码修改成功，请牢记新密码");
      hideChangePasswordModal();
    });
  }
  if (stored.indexOf('$SHA$') === 0) {
    hashPassword(oldPwd).then(function(hashedOld) {
      if (hashedOld !== stored) { alert("原密码不正确"); if(btn){btn.classList.remove('btn-loading');btn.disabled=false;btn.textContent='确认修改';} return; }
      doHashAndSave();
    });
  } else {
    if (stored !== oldPwd) { alert("原密码不正确"); if(btn){btn.classList.remove('btn-loading');btn.disabled=false;btn.textContent='确认修改';} return; }
    doHashAndSave();
  }
}
// 忘记密码功能
let forgotVerifyCode = '';
let forgotTargetUser = null;

function openForgotPassword() {
  const modal = document.getElementById('forgot-password-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.getElementById('forgot-step-1').style.display = 'block';
    document.getElementById('forgot-step-2').style.display = 'none';
    ['forgot-contact','forgot-code','forgot-new-pwd','forgot-confirm-pwd'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  }
}

function hideForgotPassword() {
  const modal = document.getElementById('forgot-password-modal');
  if (modal) {
    modal.classList.add('hidden');
    forgotVerifyCode = '';
    forgotTargetUser = null;
  }
}

function sendVerifyCode() {
  const contact = document.getElementById('forgot-contact').value.trim();
  if (!contact) { alert('请输入手机号或邮箱'); return; }
  
  // Find user by phone or email
  const user = USERS.find(u => 
    (u.phone && u.phone.indexOf(contact) >= 0) || 
    (u.email && u.email.toLowerCase() === contact.toLowerCase()) ||
    u.username === contact
  );
  
  if (!user) { alert('未找到该账号，请确认手机号/邮箱是否正确'); return; }
  
  forgotTargetUser = user;
  // Generate 6-digit verification code
  forgotVerifyCode = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Display the code (simulation - in real scenario, send via SMS/email)
  const display = document.getElementById('forgot-code-display');
  if (display) {
    display.textContent = forgotVerifyCode;
  }
  
  // Switch to step 2
  document.getElementById('forgot-step-1').style.display = 'none';
  document.getElementById('forgot-step-2').style.display = 'block';
  
  showToast('模拟验证码已生成，请查看弹窗内提示');
}

function toggleForgotNewPwd() {
  const inp = document.getElementById('forgot-new-pwd');
  const eye = document.getElementById('forgot-new-pwd-eye');
  if (!inp || !eye) return;
  if (inp.type === 'password') { inp.type = 'text'; eye.textContent = '👁️'; }
  else { inp.type = 'password'; eye.textContent = '🙈'; }
}

function toggleForgotConfirmPwd() {
  const inp = document.getElementById('forgot-confirm-pwd');
  const eye = document.getElementById('forgot-confirm-pwd-eye');
  if (!inp || !eye) return;
  if (inp.type === 'password') { inp.type = 'text'; eye.textContent = '👁️'; }
  else { inp.type = 'password'; eye.textContent = '🙈'; }
}

function resetPassword() {
  const code = document.getElementById('forgot-code').value.trim();
  const newPwd = document.getElementById('forgot-new-pwd').value;
  const confirmPwd = document.getElementById('forgot-confirm-pwd').value;
  
  if (!code) { alert('请输入验证码'); return; }
  if (code !== forgotVerifyCode) { alert('验证码错误'); return; }
  if (!newPwd || newPwd.length < 6) { alert('新密码至少6位'); return; }
  if (newPwd !== confirmPwd) { alert('两次输入的新密码不一致'); return; }
  if (!forgotTargetUser) { alert('操作超时，请重新操作'); hideForgotPassword(); return; }
  
  // Update password (hash before saving)
  hashPassword(newPwd).then(function(hashed) {
    forgotTargetUser.password = hashed;
    if (currentUser && forgotTargetUser.id === currentUser.id) { currentUser.password = hashed; localStorage.setItem("chansee_current_user", JSON.stringify(currentUser)); }
    saveUsers();
    showToast('密码重置成功，请使用新密码登录');
    hideForgotPassword();
  });
}



// 离开团队
function leaveTeam() {
  if (!confirm("⚠️ 确定要离开团队吗？离开后您将无法查看此团队的任何记录！")) return;
  if (!confirm("再次确认：您真的要离开团队吗？此操作不可撤销。")) return;
  const btn = document.querySelector(".profile-btn-danger");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "处理中"; }
  const userInDb = USERS.find(u => currentUser && u.id === currentUser.id);
  if (userInDb) {
    userInDb.status = "已禁用";
    userInDb.remark = "用户主动离开团队";
  }
  showToast("您已离开团队");
  setTimeout(() => logout(), 800);
}

function exportRisk(){
  const headers = ['项目编号','项目名称','预警类型','风险等级','触发指标','触发值','阈值','状态'];
  const rows = RISK_ALERTS.map(r => [
    r.projectId, r.projectName||'', r.riskType||'', r.severity||'',
    r.indicator||'', r.triggerValue||'', r.threshold||'', r.status||''
  ]);
  showExportDialog(headers, rows, `项目风险预警_${new Date().toISOString().slice(0,10)}`, '项目风险预警');
}
function renderComparison(){
  let html = `<div class="page-header"><h2>📊 项目对比分析</h2>
    <button class="btn" onclick="exportComparison()">导出对比报告</button>
  </div>`;

  // 项目选择器（多选）
  html += `<div class="card"><div class="card-title">选择对比项目（可多选）</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">`;
  PROJECTS.forEach(p=>{
    html += `<label style="cursor:pointer"><input type="checkbox" class="compare-cb" value="${escHtml(p.id)}" style="margin-right:4px;">${escHtml(p.name)}</label>`;
  });
  html += `</div>
    <button class="btn btn-primary" onclick="runComparison()">开始对比</button>
  </div>`;

  // 对比结果容器
  html += `<div id="compare-result"></div>`;
  return html;
}

function runComparison(){
  const ids = Array.from(document.querySelectorAll('.compare-cb:checked')).map(cb=>cb.value);
  if(ids.length<2){ alert('请至少选择2个项目进行对比'); return; }
  const projects = ids.map(id=>PROJECTS.find(p=>p.id===id)).filter(Boolean);

  let html = `<div class="card"><div class="card-title">📊 对比结果（共${projects.length}个项目）</div>
    <table class="data-table">
    <thead><tr><th>指标</th>${projects.map(p=>'<th>'+p.name+'</th>').join('')}<th>差值（最大-最小）</th></tr></thead><tbody>`;

  const indicators = [
    ['所属职场','workplace'],
    ['服务品牌','brand'],
    ['经营模式','serviceMode'],
    ['FTE目标','fteTarget'],
    ['SLA响应(s)','slaResponse'],
    ['SLA解决(s)','slaResolve'],
    ['成本预算(万)','costBudget'],
    ['营收目标(万)','revenue'],
    ['利润率(%)','profitRate'],
    ['健康状态','health'],
  ];

  indicators.forEach(([label,key])=>{
    const vals = projects.map(p=>p[key]);
    let diff = '';
    if(key==='profitRate'){
      const mx = Math.max(...vals), mn = Math.min(...vals);
      diff = (mx-mn).toFixed(1)+'%';
    }else if(key==='health'){
      diff = vals.join(' / ');
    }else if(typeof vals[0]==='number'){
      const mx = Math.max(...vals), mn = Math.min(...vals);
      diff = (mx-mn).toFixed(1);
    }else{
      diff = vals.join(' / ');
    }
    html += `<tr><td><b>${label}</b></td>${projects.map(p=>{
      const v = p[key];
      if(key==='profitRate') return `<td style="color:${v>=10?'var(--c-green)':v<0?'var(--c-red)':'var(--c-yellow)'}">${v}%</td>`;
      if(key==='health') return `<td>${v}</td>`;
      return `<td>${v}</td>`;
    }).join('')}<td>${diff}</td></tr>`;
  });

  html += `</tbody></table></div>`;

  // 雷达图（简易文字版）
  html += `<div class="card"><div class="card-title">📈 关键指标对比</div><div style="display:flex;gap:16px;flex-wrap:wrap;">`;
  projects.forEach(p=>{
    const op = OPERATIONS.find(o=>o.projectId===p.id);
    html += `<div style="border:1px solid var(--c-border);border-radius:8px;padding:12px;min-width:180px;">
      <div style="font-weight:600;margin-bottom:8px;">${escHtml(p.name)}</div>
      <div>响应时长：${op?op.responseTime+'s':'-'}</div>
      <div>CSAT：${op?op.csat:'-'}</div>
      <div>解决率：${op?op.resolutionRate+'%':'-'}</div>
      <div>利润率：${p.profitRate}%</div>
      <div>健康状态：${p.health}</div>
    </div>`;
  });
  html += `</div></div>`;

  document.getElementById('compare-result').innerHTML = html;
}

function exportComparison(){
  const headers = ['对比维度','项目A','项目B','差异分析'];
  const rows = [];
  showExportDialog(headers, rows, `数据对比_${new Date().toISOString().slice(0,10)}`, '数据对比');
}
function saveAssessmentsData() {
  try { localStorage.setItem('chansee_assessments', JSON.stringify(ASSESSMENTS)); } catch(e) {}
  if (typeof syncToCloud === 'function') syncToCloud('assessments', ASSESSMENTS);
}
// ===== 数据管理功能 =====
function openDataManager() {
  var tabs = ['客服配置', '工作量', 'KPI历史'];
  var html = '<div style="display:flex;gap:10px;margin-bottom:16px;">';
  tabs.forEach(function(tab, i) {
    html += '<button class="btn btn-sm ' + (i === 0 ? 'btn-primary' : '') + '" onclick="switchDataTab(' + i + ')">' + tab + '</button>';
  });
  html += '</div>';
  html += '<div id="data-manager-content"></div>';
  var overlay = document.getElementById('modal-overlay');
  var titleEl = document.getElementById('modal-title');
  var body = document.getElementById('modal-body');
  if (overlay && titleEl && body) {
    titleEl.textContent = '数据管理';
    body.innerHTML = html;
    overlay.classList.remove('hidden');
  }
  switchDataTab(0);
}

function switchDataTab(tabIdx) {
  window.__dataTab = tabIdx;
  // 更新标签按钮高亮状态：移除全部btn-primary，给当前按钮加上
  var tabBtns = document.querySelectorAll('#modal-body > div:first-child button');
  if (tabBtns && tabBtns.length) {
    for (var bi = 0; bi < tabBtns.length; bi++) {
      if (bi === tabIdx) tabBtns[bi].classList.add('btn-primary');
      else tabBtns[bi].classList.remove('btn-primary');
    }
  }
  var html = '';
  if (tabIdx === 0) {
    html += '<table style="width:100%;border-collapse:collapse;"><tr style="background:var(--c-bg-2);"><th style="padding:6px;border:1px solid var(--c-border);">角色</th><th style="padding:6px;border:1px solid var(--c-border);">人数</th><th style="padding:6px;border:1px solid var(--c-border);">占比(%)</th><th style="padding:6px;border:1px solid var(--c-border);">操作</th></tr>';
    STAFF_CONFIG.forEach(function(item, idx) {
      html += '<tr>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="role" value="' + item.role + '" onchange="updateStaffField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:80px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="count" value="' + item.count + '" onchange="updateStaffField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:60px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="pct" value="' + item.pct + '" onchange="updateStaffField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:60px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><button class="btn btn-sm" onclick="deleteStaffItem(' + idx + ')" style="color:#FF6B6B;">删除</button></td>';
      html += '</tr>';
    });
    html += '</table>';
    html += '<button class="btn btn-sm btn-primary" onclick="addStaffItem()" style="margin-top:10px;">+ 新增行</button>';
  } else if (tabIdx === 1) {
    html += '<table style="width:100%;border-collapse:collapse;"><tr style="background:var(--c-bg-2);"><th style="padding:6px;border:1px solid var(--c-border);">工作类型</th><th style="padding:6px;border:1px solid var(--c-border);">数量</th><th style="padding:6px;border:1px solid var(--c-border);">占比(%)</th><th style="padding:6px;border:1px solid var(--c-border);">操作</th></tr>';
    WORKLOAD_DATA.forEach(function(item, idx) {
      html += '<tr>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="name" value="' + item.name + '" onchange="updateWorkloadField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:80px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="count" value="' + item.count + '" onchange="updateWorkloadField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:60px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="ratio" value="' + item.ratio + '" onchange="updateWorkloadField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:60px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><button class="btn btn-sm" onclick="deleteWorkloadItem(' + idx + ')" style="color:#FF6B6B;">删除</button></td>';
      html += '</tr>';
    });
    html += '</table>';
    html += '<button class="btn btn-sm btn-primary" onclick="addWorkloadItem()" style="margin-top:10px;">+ 新增行</button>';
  } else if (tabIdx === 2) {
    html += '<table style="width:100%;border-collapse:collapse;"><tr style="background:var(--c-bg-2);"><th style="padding:6px;border:1px solid var(--c-border);">月份</th><th style="padding:6px;border:1px solid var(--c-border);">销售额</th><th style="padding:6px;border:1px solid var(--c-border);">成本</th><th style="padding:6px;border:1px solid var(--c-border);">费效比</th><th style="padding:6px;border:1px solid var(--c-border);">目标达成率</th><th style="padding:6px;border:1px solid var(--c-border);">操作</th></tr>';
    KPI_HISTORY.forEach(function(item, idx) {
      html += '<tr>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="date" value="' + item.date + '" onchange="updateKpiField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:70px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="revenue" value="' + item.revenue + '" onchange="updateKpiField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:70px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="cost" value="' + item.cost + '" onchange="updateKpiField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:70px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="profitRate" value="' + item.profitRate + '" onchange="updateKpiField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:60px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="targetRate" value="' + item.targetRate + '" onchange="updateKpiField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:60px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><button class="btn btn-sm" onclick="deleteKpiItem(' + idx + ')" style="color:#FF6B6B;">删除</button></td>';
      html += '</tr>';
    });
    html += '</table>';
    html += '<button class="btn btn-sm btn-primary" onclick="addKpiItem()" style="margin-top:10px;">+ 新增行</button>';
  }
  var contentDiv = document.getElementById('data-manager-content');
  if (contentDiv) contentDiv.innerHTML = html;
}

function updateStaffField(input) {
  var idx = parseInt(input.getAttribute('data-idx'));
  var field = input.getAttribute('data-field');
  var val = input.value;
  if (field === 'count' || field === 'pct') val = parseInt(val) || 0;
  STAFF_CONFIG[idx][field] = val;
  localStorage.setItem('chansee_staff_config', JSON.stringify(STAFF_CONFIG));
        addChangeLog('STAFF_CONFIG', STAFF_CONFIG[i]&&STAFF_CONFIG[i].id||'', field, oldVal, newValue);
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已保存');
}

function deleteStaffItem(idx) {
  STAFF_CONFIG.splice(idx, 1);
  localStorage.setItem('chansee_staff_config', JSON.stringify(STAFF_CONFIG));
        addChangeLog('STAFF_CONFIG', id, 'DELETE', JSON.stringify(item), '');
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已删除');
  switchDataTab(0);
}

function addStaffItem() {
  STAFF_CONFIG.push({ id:'SC'+Date.now(), role:'新角色', count:0, pct:0, workplace:'all', updatedAt:new Date().toISOString().slice(0,10), updatedBy:(typeof CURRENT_USER!=='undefined'&&CURRENT_USER)?CURRENT_USER.username:'admin' });
  localStorage.setItem('chansee_staff_config', JSON.stringify(STAFF_CONFIG));
        addChangeLog('STAFF_CONFIG', STAFF_CONFIG[STAFF_CONFIG.length-1].id, 'CREATE', '', JSON.stringify(STAFF_CONFIG[STAFF_CONFIG.length-1]));
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已新增');
  switchDataTab(0);
}

function updateWorkloadField(input) {
  var idx = parseInt(input.getAttribute('data-idx'));
  var field = input.getAttribute('data-field');
  var val = input.value;
  if (field === 'count' || field === 'ratio') val = parseInt(val) || 0;
  WORKLOAD_DATA[idx][field] = val;
  localStorage.setItem('chansee_workload_data', JSON.stringify(WORKLOAD_DATA));
        addChangeLog('WORKLOAD_DATA', WORKLOAD_DATA[i]&&WORKLOAD_DATA[i].id||'', field, oldVal, newValue);
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已保存');
}

function deleteWorkloadItem(idx) {
  WORKLOAD_DATA.splice(idx, 1);
  localStorage.setItem('chansee_workload_data', JSON.stringify(WORKLOAD_DATA));
        addChangeLog('WORKLOAD_DATA', id, 'DELETE', JSON.stringify(item), '');
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已删除');
  switchDataTab(1);
}

function addWorkloadItem() {
  WORKLOAD_DATA.push({ id:'WL'+Date.now(), name:'新工作类型', count:0, ratio:0, workplace:'all', updatedAt:new Date().toISOString().slice(0,10), updatedBy:(typeof CURRENT_USER!=='undefined'&&CURRENT_USER)?CURRENT_USER.username:'admin' });
  localStorage.setItem('chansee_workload_data', JSON.stringify(WORKLOAD_DATA));
        addChangeLog('WORKLOAD_DATA', WORKLOAD_DATA[WORKLOAD_DATA.length-1].id, 'CREATE', '', JSON.stringify(WORKLOAD_DATA[WORKLOAD_DATA.length-1]));
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已新增');
  switchDataTab(1);
}

function updateKpiField(input) {
  var idx = parseInt(input.getAttribute('data-idx'));
  var field = input.getAttribute('data-field');
  var val = input.value;
  if (field === 'revenue' || field === 'cost') val = parseInt(val) || 0;
  if (field === 'profitRate' || field === 'targetRate') val = parseFloat(val) || 0;
  KPI_HISTORY[idx][field] = val;
  localStorage.setItem('chansee_kpi_history', JSON.stringify(KPI_HISTORY));
        addChangeLog('KPI_HISTORY', KPI_HISTORY[i]&&KPI_HISTORY[i].id||'', field, oldVal, newValue);
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已保存');
}

function deleteKpiItem(idx) {
  KPI_HISTORY.splice(idx, 1);
  localStorage.setItem('chansee_kpi_history', JSON.stringify(KPI_HISTORY));
        addChangeLog('KPI_HISTORY', id, 'DELETE', JSON.stringify(item), '');
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已删除');
  switchDataTab(2);
}

function addKpiItem() {
  KPI_HISTORY.push({ id:'KH'+Date.now(), date:'2026-', revenue:0, cost:0, profitRate:0, targetRate:0, workplace:'all', updatedAt:new Date().toISOString().slice(0,10), updatedBy:(typeof CURRENT_USER!=='undefined'&&CURRENT_USER)?CURRENT_USER.username:'admin' });
  localStorage.setItem('chansee_kpi_history', JSON.stringify(KPI_HISTORY));
        addChangeLog('KPI_HISTORY', KPI_HISTORY[KPI_HISTORY.length-1].id, 'CREATE', '', JSON.stringify(KPI_HISTORY[KPI_HISTORY.length-1]));
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已新增');
  switchDataTab(2);
}

// 记录数据修改历史
function addChangeLog(tableName, recordId, fieldName, oldValue, newValue) {
  try {
    const user = (typeof CURRENT_USER !== 'undefined' && CURRENT_USER) ? CURRENT_USER.username : 'admin';
    const log = {
      id: 'LOG' + Date.now(),
      tableName: tableName,
      recordId: recordId || '',
      fieldName: fieldName || '',
      oldValue: String(oldValue || ''),
      newValue: String(newValue || ''),
      changedBy: user,
      changedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };
    DATA_CHANGE_LOG.push(log);
    // 只保留最近200条
    if (DATA_CHANGE_LOG.length > 200) DATA_CHANGE_LOG.shift();
    localStorage.setItem('chansee_data_change_log', JSON.stringify(DATA_CHANGE_LOG));
  } catch(e) { console.error('addChangeLog error:', e); }
}

// 显示修改历史（复用系统弹窗）
function showChangeLog() {
  var overlay = document.getElementById('modal-overlay');
  var titleEl = document.getElementById('modal-title');
  var bodyEl = document.getElementById('modal-body');
  var footerEl = document.getElementById('modal-footer');
  if (!overlay || !titleEl || !bodyEl) return;

  var html = '';
  if (DATA_CHANGE_LOG.length === 0) {
    html += '<p style="color:#999;text-align:center;padding:30px 0">暂无修改记录</p>';
    html += '<p style="color:#999;text-align:center;font-size:12px">在「数据管理」中修改数据后，修改记录会自动显示在这里</p>';
  } else {
    html += '<table style="width:100%;border-collapse:collapse;font-size:13px;">';
    html += '<thead><tr style="background:var(--c-bg-2,#f5f5f5)">';
    html += '<th style="padding:8px 6px;border:1px solid var(--c-border,#ddd);text-align:left">时间</th>';
    html += '<th style="padding:8px 6px;border:1px solid var(--c-border,#ddd);text-align:left">用户</th>';
    html += '<th style="padding:8px 6px;border:1px solid var(--c-border,#ddd);text-align:left">数据表</th>';
    html += '<th style="padding:8px 6px;border:1px solid var(--c-border,#ddd);text-align:left">字段</th>';
    html += '<th style="padding:8px 6px;border:1px solid var(--c-border,#ddd);text-align:left">旧值</th>';
    html += '<th style="padding:8px 6px;border:1px solid var(--c-border,#ddd);text-align:left">新值</th>';
    html += '</tr></thead><tbody>';

    DATA_CHANGE_LOG.slice().reverse().slice(0, 100).forEach(function(l) {
      html += '<tr>';
      html += '<td style="padding:6px;border:1px solid var(--c-border,#ddd);white-space:nowrap">' + l.changedAt + '</td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border,#ddd)">' + l.changedBy + '</td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border,#ddd)">' + l.tableName + '</td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border,#ddd)">' + (l.fieldName || '—') + '</td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border,#ddd);max-width:150px;overflow:hidden;text-overflow:ellipsis">' + (l.oldValue || '—') + '</td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border,#ddd);max-width:150px;overflow:hidden;text-overflow:ellipsis">' + (l.newValue || '—') + '</td>';
      html += '</tr>';
    });

    html += '</tbody></table>';
    html += '<p style="font-size:11px;color:#999;margin-top:10px">共 ' + DATA_CHANGE_LOG.length + ' 条记录（最多保留200条）</p>';
  }

  titleEl.textContent = '📋 数据修改历史';
  bodyEl.innerHTML = html;
  if (footerEl) footerEl.innerHTML = '<button class="btn" onclick="closeChangeLog()">关闭</button>';
  overlay.classList.remove('hidden');
}



// ===== Recovered Functions (June 26) =====
function goToModule(module){
  document.querySelectorAll('.nav-item').forEach(function(i){i.classList.remove('active');});
  var nav = document.querySelector('.nav-item[data-module="'+module+'"]');
  if(nav){
    nav.classList.add('active');
    var sec = nav.closest('.nav-section');
    if(sec && sec.classList.contains('collapsed')) sec.classList.remove('collapsed');
  }
  renderModule(module);
}

function toggleAdvancedFilter() {
  var el = document.getElementById('filter-row-advanced');
  if (!el) { setTimeout(function(){ toggleAdvancedFilter(); }, 200); return; }
  var btn = document.querySelector('.fb-adv-btn');
  var computedStyle = window.getComputedStyle(el);
  var isVisible = (el.style.display !== 'none' && el.style.display !== '') ? (el.style.display !== 'none') : (computedStyle.display !== 'none');
  if (isVisible) {
    el.style.setProperty('display', 'none', 'important');
    window._advFilterVisible = false;
    if(btn){btn.textContent='高级筛选 ▼';btn.className='fb-adv-btn';}
  } else {
    el.style.setProperty('display', 'flex', 'important');
    window._advFilterVisible = true;
    if(btn){btn.textContent='收起筛选 ▲';btn.className='fb-adv-btn fb-adv-btn-active';}
  }
}

function sortArchiveTable(field) {
  if (archiveSortField === field) {
  } else {
    archiveSortDirection = 'asc';
  }
  renderModule('archive');
}

function clearArchiveSelection(){
  var cb=document.querySelectorAll('.archive-row-check');
  for(var i=0;i<cb.length;i++)cb[i].checked=false;
  updateBatchDeleteBtn();
}

function batchEditProjects(){
  alert('批量编辑功能开发中');
}

function toggleCompareCheckbox(projectId) {
  if (!window._selectedCompareIds) window._selectedCompareIds = [];
  var idx = window._selectedCompareIds.indexOf(projectId);
  if (idx >= 0) {
    window._selectedCompareIds.splice(idx, 1);
  } else {
    if (window._selectedCompareIds.length >= 2) {
      window._selectedCompareIds.shift();
    }
    window._selectedCompareIds.push(projectId);
  }
  renderModule('operation');
}

function closeComparePanel() {
  var overlay = document.getElementById('compare-overlay');
  if(overlay){ overlay.classList.add('hidden'); overlay.style.opacity = '0'; }
}

function switchIssueTab(tab){
  issueActiveTab = tab;
  if(tab==='issue'){ issueFilterState = { status:'all', priority:'all', type:'all', assignee:'all', keyword:'' }; }
  else { topicFilterState = { status:'all', type:'all', assignee:'all', keyword:'' }; }
  renderModule('issue');
}

function filterIssues(){
  var sel = document.getElementById('issue-filter-priority');
  var sel2 = document.getElementById('issue-filter-type');
  var sel3 = document.getElementById('issue-filter-assignee');
  var kw = document.getElementById('issue-search');
  if(issueActiveTab==='issue'){
    issueFilterState.priority = sel ? sel.value : 'all';
    issueFilterState.type = sel2 ? sel2.value : 'all';
    issueFilterState.assignee = sel3 ? sel3.value : 'all';
    issueFilterState.keyword = kw ? kw.value : '';
  } else {
    topicFilterState.type = sel2 ? sel2.value : 'all';
    topicFilterState.assignee = sel3 ? sel3.value : 'all';
    topicFilterState.keyword = kw ? kw.value : '';
  }
  renderModule('issue');
}

function filterIssueByStatus(status, el){
  if(issueActiveTab==='issue') issueFilterState.status = status;
  else topicFilterState.status = status;
  renderModule('issue');
}

function generateSparklinePath(fieldName){
    if(!KPI_HISTORY || KPI_HISTORY.length < 2){
            // 无历史数据时返回平直线段
    }
    var values = [];
    for(var v=0; v<KPI_HISTORY.length; v++){ values.push(KPI_HISTORY[v][fieldName] || 0); }
    var maxV = Math.max.apply(null, values) || 1;
    var minV = Math.min.apply(null, values);
    var range = maxV - minV || 1;
    var points = [];
    var totalW = 100, totalH = 24, topY = 22;
    for(var v2=0; v2<values.length; v2++){
      var x = values.length===1 ? 50 : Math.round(v2 * totalW / (values.length-1)) + 4;
      var y = Math.round(topY + totalH - ((values[v2]-minV)/range * totalH));
      points.push({x:x, y:y});
    }
    // 鏋勫缓path
    var areaPath = 'M 4,50 L '+points[0].x+','+points[0].y;
    for(var p2=1; p2<points.length; p2++){
      areaPath += ' L '+points[p2].x+','+points[p2].y;
    }
    areaPath += ' L '+points[points.length-1].x+',50 L 4,50 Z';
    var strokePath = 'M '+points[0].x+','+points[0].y;
    for(var p3=1; p3<points.length; p3++){
      strokePath += ' L '+points[p3].x+','+points[p3].y;
    }
    return {areaPath:areaPath, strokePath:strokePath};
  }

function openComparePanel() {
  var ids = window._selectedCompareIds || [];
  if (ids.length < 2) return;
  var p1 = PROJECTS.find(function(p){return p.id===ids[0];});
  var p2 = PROJECTS.find(function(p){return p.id===ids[1];});
  if(!p1||!p2) return;
  var h1 = HEALTH_DATA.find(function(h){return h.projectId===p1.id&&h.period==='2026-05';});
  var h2 = HEALTH_DATA.find(function(h){return h.projectId===p2.id&&h.period==='2026-05';});
  var s1 = h1 ? h1.overallScore : 0;
  var s2 = h2 ? h2.overallScore : 0;
  var dims1 = h1 ? h1.dimensions : [];
  var dims2 = h2 ? h2.dimensions : [];
  var dimLabels = {manpower:'人力', service:'服务', sales:'销售', returns:'退货', risk:'风险', cost:'成本'};

  var rowsHtml = '';
  for(var i=0; i<dims1.length; i++){
    var v1 = dims1[i].score;
    var v2 = dims2[i] ? dims2[i].score : 0;
    var diff = v1 - v2;
    var diffStr = diff>0 ? '▲ +'+diff : (diff<0 ? '▼ '+diff : '持平');
    var diffColor = diff>0 ? '#10b981' : (diff<0 ? '#ef4444' : '#6b7280');
    var label = dimLabels[dims1[i].key] || dims1[i].name;
    var c1 = v1>=90?'#10b981':v1>=75?'#eab308':v1>=60?'#f97316':'#ef4444';
    var c2 = v2>=90?'#10b981':v2>=75?'#eab308':v2>=60?'#f97316':'#ef4444';
    rowsHtml += '<tr>'
      +'<td style="padding:10px 14px;font-size:13px;color:#1e40af;font-weight:500;">'+label+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:22px;font-weight:700;color:'+c1+';">'+v1+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:22px;font-weight:700;color:'+c2+';">'+v2+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:14px;font-weight:600;color:'+diffColor+';">'+diffStr+'</td>'
    +'</tr>';
  }
  // Compare score bars
  var maxW = 200;
  var bar1W = Math.round(s1/100*maxW);
  var bar2W = Math.round(s2/100*maxW);

  var overlay = document.getElementById('compare-overlay');
  if(!overlay){
    overlay = document.createElement('div');
    overlay.id = 'compare-overlay';
    overlay.className = 'modal-overlay';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.opacity = '1';
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = ''
    +'<div class="modal-dialog" style="max-width:700px;padding:0;border-radius:16px;overflow:hidden;background:#fff;">'
      +'<div style="background:linear-gradient(135deg,#0B9B96,#3b82f6);color:#fff;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;">'
        +'<div style="font-size:15px;font-weight:600;">📊 项目对比</div>'
        +'<button onclick="closeComparePanel()" style="background:rgba(255,255,255,0.2);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:16px;">&#10005;</button>'
      +'</div>'
      +'<div style="padding:20px;">'
        // Project headers
        +'<div style="display:flex;gap:16px;margin-bottom:16px;">'
          +'<div style="flex:1;text-align:center;padding:12px;background:#f0fdf4;border-radius:10px;">'
            +'<div style="font-size:16px;font-weight:700;color:#1e40af;">'+p1.name+'</div>'
            +'<div style="font-size:11px;color:#6b7280;margin-top:2px;">'+p1.workplace+' 路 '+p1.serviceMode+' 路 PM: '+(p1.pm||'')+'</div>'
            +'<div style="font-size:32px;font-weight:800;color:#0B9B96;margin-top:4px;">'+s1+'<span style="font-size:14px;font-weight:400;color:#6b7280;"> 分</span></div>'
            +'<div style="margin-top:4px;height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden;"><div style="height:100%;width:'+bar1W+'px;background:linear-gradient(90deg,#0B9B96,#00C9A7);border-radius:3px;"></div></div>'
          +'</div>'
          +'<div style="display:flex;align-items:center;font-size:20px;font-weight:800;color:#94a3b8;flex-shrink:0;">VS</div>'
          +'<div style="flex:1;text-align:center;padding:12px;background:#eff6ff;border-radius:10px;">'
            +'<div style="font-size:16px;font-weight:700;color:#1e40af;">'+p2.name+'</div>'
            +'<div style="font-size:11px;color:#6b7280;margin-top:2px;">'+p2.workplace+' 路 '+p2.serviceMode+' 路 PM: '+(p2.pm||'')+'</div>'
            +'<div style="font-size:32px;font-weight:800;color:#3b82f6;margin-top:4px;">'+s2+'<span style="font-size:14px;font-weight:400;color:#6b7280;"> 分</span></div>'
            +'<div style="margin-top:4px;height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden;"><div style="height:100%;width:'+bar2W+'px;background:linear-gradient(90deg,#3b82f6,#60a5fa);border-radius:3px;"></div></div>'
          +'</div>'
        +'</div>'
        // Dimension table
        +'<table style="width:100%;border-collapse:collapse;">'
          +'<thead><tr style="background:#f8fafc;">'
            +'<th style="padding:8px 14px;text-align:left;font-size:12px;color:#64748b;font-weight:500;">维度</th>'
            +'<th style="padding:8px 14px;text-align:center;font-size:12px;color:#64748b;font-weight:500;">'+p1.name.substring(0,4)+'</th>'
            +'<th style="padding:8px 14px;text-align:center;font-size:12px;color:#64748b;font-weight:500;">'+p2.name.substring(0,4)+'</th>'
            +'<th style="padding:8px 14px;text-align:center;font-size:12px;color:#64748b;font-weight:500;">差距</th>'
          +'</tr></thead>'
          +'<tbody>'+rowsHtml+'</tbody>'
        +'</table>'
        +'<div style="margin-top:12px;text-align:center;font-size:11px;color:#94a3b8;">'
          +(s1>s2 ? p1.name+' 综合领先 '+ (s1-s2)+' 分' : (s2>s1 ? p2.name+' 综合领先 '+ (s2-s1)+' 分' : '双方综合得分持平'))
        +'</div>'
      +'</div>'
    +'</div>';
  overlay.classList.remove('hidden');
  overlay.style.opacity = '1';
}

// ===== End Recovered Functions =====




// ===== Recovered Functions (June 26) =====
function goToModule(module){
  document.querySelectorAll('.nav-item').forEach(function(i){i.classList.remove('active');});
  var nav = document.querySelector('.nav-item[data-module="'+module+'"]');
  if(nav){
    nav.classList.add('active');
    var sec = nav.closest('.nav-section');
    if(sec && sec.classList.contains('collapsed')) sec.classList.remove('collapsed');
  }
  renderModule(module);
}

function toggleAdvancedFilter() {
  var el = document.getElementById('filter-row-advanced');
  if (!el) { setTimeout(function(){ toggleAdvancedFilter(); }, 200); return; }
  var btn = document.querySelector('.fb-adv-btn');
  var computedStyle = window.getComputedStyle(el);
  var isVisible = (el.style.display !== 'none' && el.style.display !== '') ? (el.style.display !== 'none') : (computedStyle.display !== 'none');
  if (isVisible) {
    el.style.setProperty('display', 'none', 'important');
    window._advFilterVisible = false;
    if(btn){btn.textContent='高级筛选 ▼';btn.className='fb-adv-btn';}
  } else {
    el.style.setProperty('display', 'flex', 'important');
    window._advFilterVisible = true;
    if(btn){btn.textContent='收起筛选 ▲';btn.className='fb-adv-btn fb-adv-btn-active';}
  }
}

function sortArchiveTable(field) {
  if (archiveSortField === field) {
  } else {
    archiveSortDirection = 'asc';
  }
  renderModule('archive');
}

function clearArchiveSelection(){
  var cb=document.querySelectorAll('.archive-row-check');
  for(var i=0;i<cb.length;i++)cb[i].checked=false;
  updateBatchDeleteBtn();
}

function batchEditProjects(){
  alert('批量编辑功能开发中');
}

function toggleCompareCheckbox(projectId) {
  if (!window._selectedCompareIds) window._selectedCompareIds = [];
  var idx = window._selectedCompareIds.indexOf(projectId);
  if (idx >= 0) {
    window._selectedCompareIds.splice(idx, 1);
  } else {
    if (window._selectedCompareIds.length >= 2) {
      window._selectedCompareIds.shift();
    }
    window._selectedCompareIds.push(projectId);
  }
  renderModule('operation');
}

function closeComparePanel() {
  var overlay = document.getElementById('compare-overlay');
  if(overlay){ overlay.classList.add('hidden'); overlay.style.opacity = '0'; }
}

function switchIssueTab(tab){
  issueActiveTab = tab;
  if(tab==='issue'){ issueFilterState = { status:'all', priority:'all', type:'all', assignee:'all', keyword:'' }; }
  else { topicFilterState = { status:'all', type:'all', assignee:'all', keyword:'' }; }
  renderModule('issue');
}

function filterIssues(){
  var sel = document.getElementById('issue-filter-priority');
  var sel2 = document.getElementById('issue-filter-type');
  var sel3 = document.getElementById('issue-filter-assignee');
  var kw = document.getElementById('issue-search');
  if(issueActiveTab==='issue'){
    issueFilterState.priority = sel ? sel.value : 'all';
    issueFilterState.type = sel2 ? sel2.value : 'all';
    issueFilterState.assignee = sel3 ? sel3.value : 'all';
    issueFilterState.keyword = kw ? kw.value : '';
  } else {
    topicFilterState.type = sel2 ? sel2.value : 'all';
    topicFilterState.assignee = sel3 ? sel3.value : 'all';
    topicFilterState.keyword = kw ? kw.value : '';
  }
  renderModule('issue');
}

function filterIssueByStatus(status, el){
  if(issueActiveTab==='issue') issueFilterState.status = status;
  else topicFilterState.status = status;
  renderModule('issue');
}

function openComparePanel() {
  var ids = window._selectedCompareIds || [];
  if (ids.length < 2) return;
  var p1 = PROJECTS.find(function(p){return p.id===ids[0];});
  var p2 = PROJECTS.find(function(p){return p.id===ids[1];});
  if(!p1||!p2) return;
  var h1 = HEALTH_DATA.find(function(h){return h.projectId===p1.id&&h.period==='2026-05';});
  var h2 = HEALTH_DATA.find(function(h){return h.projectId===p2.id&&h.period==='2026-05';});
  var s1 = h1 ? h1.overallScore : 0;
  var s2 = h2 ? h2.overallScore : 0;
  var dims1 = h1 ? h1.dimensions : [];
  var dims2 = h2 ? h2.dimensions : [];
  var dimLabels = {manpower:'人力', service:'服务', sales:'销售', returns:'退货', risk:'风险', cost:'成本'};

  var rowsHtml = '';
  for(var i=0; i<dims1.length; i++){
    var v1 = dims1[i].score;
    var v2 = dims2[i] ? dims2[i].score : 0;
    var diff = v1 - v2;
    var diffStr = diff>0 ? '▲ +'+diff : (diff<0 ? '▼ '+diff : '持平');
    var diffColor = diff>0 ? '#10b981' : (diff<0 ? '#ef4444' : '#6b7280');
    var label = dimLabels[dims1[i].key] || dims1[i].name;
    var c1 = v1>=90?'#10b981':v1>=75?'#eab308':v1>=60?'#f97316':'#ef4444';
    var c2 = v2>=90?'#10b981':v2>=75?'#eab308':v2>=60?'#f97316':'#ef4444';
    rowsHtml += '<tr>'
      +'<td style="padding:10px 14px;font-size:13px;color:#1e40af;font-weight:500;">'+label+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:22px;font-weight:700;color:'+c1+';">'+v1+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:22px;font-weight:700;color:'+c2+';">'+v2+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:14px;font-weight:600;color:'+diffColor+';">'+diffStr+'</td>'
    +'</tr>';
  }
  // Compare score bars
  var maxW = 200;
  var bar1W = Math.round(s1/100*maxW);
  var bar2W = Math.round(s2/100*maxW);

  var overlay = document.getElementById('compare-overlay');
  if(!overlay){
    overlay = document.createElement('div');
    overlay.id = 'compare-overlay';
    overlay.className = 'modal-overlay';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.opacity = '1';
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = ''
    +'<div class="modal-dialog" style="max-width:700px;padding:0;border-radius:16px;overflow:hidden;background:#fff;">'
      +'<div style="background:linear-gradient(135deg,#0B9B96,#3b82f6);color:#fff;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;">'
        +'<div style="font-size:15px;font-weight:600;">📊 项目对比</div>'
        +'<button onclick="closeComparePanel()" style="background:rgba(255,255,255,0.2);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:16px;">&#10005;</button>'
      +'</div>'
      +'<div style="padding:20px;">'
        // Project headers
        +'<div style="display:flex;gap:16px;margin-bottom:16px;">'
          +'<div style="flex:1;text-align:center;padding:12px;background:#f0fdf4;border-radius:10px;">'
            +'<div style="font-size:16px;font-weight:700;color:#1e40af;">'+p1.name+'</div>'
            +'<div style="font-size:11px;color:#6b7280;margin-top:2px;">'+p1.workplace+' 路 '+p1.serviceMode+' 路 PM: '+(p1.pm||'')+'</div>'
            +'<div style="font-size:32px;font-weight:800;color:#0B9B96;margin-top:4px;">'+s1+'<span style="font-size:14px;font-weight:400;color:#6b7280;"> 分</span></div>'
            +'<div style="margin-top:4px;height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden;"><div style="height:100%;width:'+bar1W+'px;background:linear-gradient(90deg,#0B9B96,#00C9A7);border-radius:3px;"></div></div>'
          +'</div>'
          +'<div style="display:flex;align-items:center;font-size:20px;font-weight:800;color:#94a3b8;flex-shrink:0;">VS</div>'
          +'<div style="flex:1;text-align:center;padding:12px;background:#eff6ff;border-radius:10px;">'
            +'<div style="font-size:16px;font-weight:700;color:#1e40af;">'+p2.name+'</div>'
            +'<div style="font-size:11px;color:#6b7280;margin-top:2px;">'+p2.workplace+' 路 '+p2.serviceMode+' 路 PM: '+(p2.pm||'')+'</div>'
            +'<div style="font-size:32px;font-weight:800;color:#3b82f6;margin-top:4px;">'+s2+'<span style="font-size:14px;font-weight:400;color:#6b7280;"> 分</span></div>'
            +'<div style="margin-top:4px;height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden;"><div style="height:100%;width:'+bar2W+'px;background:linear-gradient(90deg,#3b82f6,#60a5fa);border-radius:3px;"></div></div>'
          +'</div>'
        +'</div>'
        // Dimension table
        +'<table style="width:100%;border-collapse:collapse;">'
          +'<thead><tr style="background:#f8fafc;">'
            +'<th style="padding:8px 14px;text-align:left;font-size:12px;color:#64748b;font-weight:500;">维度</th>'
            +'<th style="padding:8px 14px;text-align:center;font-size:12px;color:#64748b;font-weight:500;">'+p1.name.substring(0,4)+'</th>'
            +'<th style="padding:8px 14px;text-align:center;font-size:12px;color:#64748b;font-weight:500;">'+p2.name.substring(0,4)+'</th>'
            +'<th style="padding:8px 14px;text-align:center;font-size:12px;color:#64748b;font-weight:500;">差距</th>'
          +'</tr></thead>'
          +'<tbody>'+rowsHtml+'</tbody>'
        +'</table>'
        +'<div style="margin-top:12px;text-align:center;font-size:11px;color:#94a3b8;">'
          +(s1>s2 ? p1.name+' 综合领先 '+ (s1-s2)+' 分' : (s2>s1 ? p2.name+' 综合领先 '+ (s2-s1)+' 分' : '双方综合得分持平'))
        +'</div>'
      +'</div>'
    +'</div>';
  overlay.classList.remove('hidden');
  overlay.style.opacity = '1';
}

// ===== End Recovered Functions =====


function closeChangeLog() {
  var overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.add('hidden');
}

