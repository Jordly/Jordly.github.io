// ===== 备份与恢复 =====
// 注：backupAllData() 定义在 core-security.js（完整版，导出全部 chansee_* 数据）
// 本文件仅负责「恢复」相关功能

// 触发恢复文件选择
function triggerRestore() {
  var input = document.getElementById('restore-file-input');
  if (!input) {
    input = document.createElement('input');
    input.type = 'file';
    input.id = 'restore-file-input';
    input.accept = '.json';
    input.style.display = 'none';
    input.onchange = function() { handleRestoreFile(this); };
    document.body.appendChild(input);
  }
  input.click();
}

// 处理恢复文件
function handleRestoreFile(input) {
  var file = input.files[0];
  if (!file) return;

  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);
      if (!data.version || !data.projects || !data.users) {
        alert('⚠️ 备份文件格式不正确，无法恢复！');
        return;
      }
      // 显示确认弹窗
      showRestoreConfirm(data, file.name);
    } catch(err) {
      alert('⚠️ 文件解析失败：' + err.message);
    }
  };
  reader.readAsText(file);
}

// 显示恢复确认弹窗
function showRestoreConfirm(data, fileName) {
  var projectCount = (data.projects || []).length;
  var userCount = (data.users || []).length;
  var goalCount = (data.goals || []).length;

  var html = '<div style="text-align:center;padding:12px 0;">';
  html += '  <div style="font-size:48px;margin-bottom:12px;">♻️</div>';
  html += '  <div style="font-size:16px;font-weight:600;color:#1e293b;margin-bottom:8px;">确认恢复数据？</div>';
  html += '  <div style="font-size:13px;color:#64748b;margin-bottom:16px;">';
  html += '    备份文件：' + fileName + '<br>';
  html += '    备份时间：' + (data.backupTime || '未知') + '<br>';
  html += '    包含 ' + projectCount + ' 个项目，' + userCount + ' 个用户，' + goalCount + ' 个目标';
  html += '  </div>';
  html += '  <div style="font-size:13px;color:#ef4444;background:#fef2f2;padding:8px 12px;border-radius:6px;margin-bottom:16px;">';
  html += '    ⚠️ 恢复后将覆盖当前所有数据，且不可撤销！';
  html += '  </div>';
  html += '</div>';
  html += '<div class="form-actions">';
  html += '  <button class="btn" onclick="document.getElementById(\'modal-overlay\').classList.add(\'hidden\')">取消</button>';
  html += '  <button class="btn btn-primary" onclick="doRestoreData()" style="background:#ef4444;border-color:#ef4444;">确认恢复</button>';
  html += '</div>';

  // 暂存待恢复的数据
  window.__restoreData = data;

  document.getElementById('modal-title').textContent = '♻️ 恢复备份';
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

// 执行恢复数据
function doRestoreData() {
  var data = window.__restoreData;
  if (!data) return;

  try {
    if (data.projects) {
      // 合并项目：以备份为准，用备份数据完全替换
      PROJECTS = data.projects;
      saveProjects();
    }
    if (data.users) {
      // 合并用户：保留当前登录用户密码，其他用备份数据
      var currentPwd = currentUser ? (USERS.find(u => u.id === currentUser.id) || {}).password : '';
      USERS = data.users;
      // 恢复当前用户密码
      if (currentUser && currentPwd) {
        var u = USERS.find(u => u.id === currentUser.id);
        if (u) u.password = currentPwd;
      }
      saveUsers();
    }
    if (data.goals) {
      GOALS = data.goals;
      saveGoals();
    }

    window.__restoreData = null;
    document.getElementById('modal-overlay').classList.add('hidden');
    showToast('恢复成功！页面即将刷新...');
    setTimeout(function() { location.reload(); }, 1200);
  } catch(e) {
    console.error('[doRestoreData] 失败:', e);
    alert('⚠️ 恢复失败：' + e.message);
  }
}
