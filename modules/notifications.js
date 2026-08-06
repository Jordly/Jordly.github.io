// modules/notifications.js — 通知与公告模块
/* ═══════════════════ 通知与公告 ═══════════════════ */
function renderNotifications(){
  // 权限检查：超级管理员、管理员、客服总监可访问
  if (!currentUser) {
    return `<div class="empty-state"><div class="empty-icon">&#x1F512;</div><p>请先登录</p></div>`;
  }
  const _adminRoles = ["超级管理员", "管理员", "客服总监"];
  if (_adminRoles.indexOf(currentUser.role) === -1) {
    return `<div class="empty-state"><div class="empty-icon">&#x1F512;</div><p>仅管理员可访问此模块</p></div>`;
  }

  const filtered = notificationFilter === "all" ? USERS : USERS.filter(u => {
    if (notificationFilter === "pending") return u.status === "待审核";
    if (notificationFilter === "active") return u.status === "已激活";
    if (notificationFilter === "rejected") return u.status === "已拒绝";
    return true;
  });

  const statusBadge = {
    "已激活": "badge-green",
    "待审核": "badge-yellow",
    "已拒绝": "badge-red",
    "已禁用": "badge-gray"
  };

  const roleBadge = {
    "超级管理员": "badge-purple",
    "管理员": "badge-blue",
    "客服总监": "badge-orange",
    "客服经理": "badge-primary",
    "客服主管": "badge-yellow",
    "客服组长": "badge-green",
    "项目伙伴": "badge-gray",
    "技术伙伴": "badge-gray",
    "风控伙伴": "badge-gray"
  };

  return `<div style="border-top:3px solid;border-image:linear-gradient(90deg,#0ABAB5,#3b82f6,#8b5cf6) 1;margin-bottom:20px;"></div>
    <div class="module-header">
    <div>
      <div class="module-title">&#x1F514; 系统用户管理</div>
      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">管理系统用户账号、角色权限、审批注册申请</div>
    </div>
    <div class="module-actions">
      <button class="btn btn-sm btn-primary" onclick="showAddUser()">&#xFF0B; 新增用户</button>
    </div>
  </div>

  <!-- 团队角色分布 -->
  <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:16px;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
      <span style="font-size:16px;">👥</span>
      <span style="font-size:13px;font-weight:600;color:#1e293b;">团队角色分布</span>
      <span style="font-size:11px;color:#94a3b8;margin-left:auto;">共 ${USERS.length} 人</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px;">
    ${ROLES.map(function(r){
      var count = USERS.filter(function(u){ return u.role === r; }).length;
      var pct = USERS.length > 0 ? Math.round(count / USERS.length * 100) : 0;
      var clrs = {'超级管理员':'#8b5cf6','管理员':'#3b82f6','客服总监':'#0b9b96','客服经理':'#f59e0b','客服主管':'#6366f1','项目伙伴':'#ec4899'};
      var c = clrs[r] || '#94a3b8';
      return '<div style="display:flex;align-items:center;gap:10px;">'
        +'<span style="width:72px;font-size:12px;color:#64748b;flex-shrink:0;">'+r+'</span>'
        +'<div style="flex:1;height:16px;background:#f1f5f9;border-radius:8px;overflow:hidden;">'
          +'<div style="height:100%;width:'+pct+'%;background:'+c+';border-radius:8px;transition:width 0.3s;"></div>'
        +'</div>'
        +'<span style="width:30px;font-size:12px;font-weight:600;color:#334155;text-align:right;">'+count+'</span>'
        +'<span style="width:32px;font-size:11px;color:#94a3b8;text-align:right;">'+pct+'%</span>'
      +'</div>';
    }).join('')}
    </div>
  </div>

  <!-- 筛选标签 -->
  <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
    <button class="btn btn-sm ${notificationFilter==='all'?'btn-primary':''}" onclick="setNotificationFilter('all')">全部(${USERS.length})</button>
    <button class="btn btn-sm ${notificationFilter==='pending'?'btn-primary':''}" style="background:var(--c-yellow-bg);color:var(--c-yellow);border-color:var(--c-yellow)" onclick="setNotificationFilter('pending')">待审核(${USERS.filter(u=>u.status==='待审核').length})</button>
    <button class="btn btn-sm ${notificationFilter==='active'?'btn-primary':''}" style="background:var(--c-green-bg);color:var(--c-green);border-color:var(--c-green)" onclick="setNotificationFilter('active')">已激活(${USERS.filter(u=>u.status==='已激活').length})</button>
    <button class="btn btn-sm ${notificationFilter==='rejected'?'btn-primary':''}" style="background:var(--c-red-bg);color:var(--c-red);border-color:var(--c-red)" onclick="setNotificationFilter('rejected')">已拒绝(${USERS.filter(u=>u.status==='已拒绝').length})</button>
  </div>

  <div class="card">
    <table class="data-table">
      <thead>
        <tr>
          <th>用户</th>
          <th>用户名</th>
          <th>角色</th>
          <th>状态</th>
          <th>注册时间</th>
          <th>联系方式</th>
          <th>审批人</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        ${filtered.map(u => `
          <tr>
            <td><div style="display:flex;align-items:center;gap:8px;"><div style="width:32px;height:32px;border-radius:50%;background:var(--c-primary-light);color:var(--c-primary);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;">${u.name ? escHtml(u.name).charAt(0) : '?'}</div><span style="font-weight:500;">${escHtml(u.name || '未命名')}</span></div></td>
            <td>${escHtml(u.username)}</td>
            <td><span class="badge ${roleBadge[u.role]||'badge-gray'}">${escHtml(u.role)}</span></td>
            <td><span class="badge ${statusBadge[u.status]||'badge-gray'}">${u.status}</span></td>
            <td>${u.registerTime}</td>
            <td><div style="font-size:12px;color:var(--c-text-2);">${u.phone}<br/>${u.email}</div></td>
            <td>${u.approvedBy || "&#x2014;"}</td>
            <td class="actions">
              ${u.status === "待审核" ? `
                <button class="btn btn-sm btn-primary" onclick="approveUser('${u.id}', '同意')">同意</button>
                <button class="btn btn-sm" style="background:var(--c-red-bg);color:var(--c-red);border-color:var(--c-red);" onclick="approveUser('${u.id}', '拒绝')">拒绝</button>
                <button class="btn btn-sm" onclick="approveUser('${u.id}', '忽略')">忽略</button>
              ` : `
                <button class="btn btn-sm" onclick="editUserRole('${u.id}')">改角色</button>
                <button class="btn btn-sm" onclick="resetUserPassword('${u.id}')">重置密码</button>
                ${u.status !== "已禁用" ? `<button class="btn btn-sm" style="background:var(--c-yellow-bg);color:var(--c-yellow);border-color:var(--c-yellow);" onclick="disableUser('${u.id}')">禁用</button>` : `<button class="btn btn-sm btn-primary" onclick="enableUser('${u.id}')">启用</button>`}
                ${isSuperAdmin() ? `<button class="btn btn-sm" style="background:var(--c-red-bg);color:var(--c-red);border-color:var(--c-red);" onclick="deleteUser('${u.id}')">删除</button>` : ""}
              `}
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    ${filtered.length === 0 ? `<div style="text-align:center;padding:40px;color:var(--c-text-3);">暂无符合条件的用户</div>` : ""}
  </div>
  `;
}

function setNotificationFilter(filter){
  notificationFilter = filter;
  renderModule("notifications");
}

function approveUser(userId, action){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  if (action === "同意") {
    user.status = "已激活";
    user.approvedBy = currentUser ? currentUser.name : "admin";
    if (!user.role) user.role = "新用户";
    saveUsers();
    showToast('已同意 '+user.name+' 的注册申请，账号已激活', 'success');
  } else if (action === "拒绝") {
    user.status = "已拒绝";
    user.approvedBy = currentUser ? currentUser.name : "admin";
    saveUsers();
    showToast('已拒绝 '+user.name+' 的注册申请', 'warning');
  } else if (action === "忽略") {
    showToast('已忽略 '+user.name+' 的注册申请，仍保留在待审核列表中', 'info');
    return;
  }
  renderModule("notifications");
}

function editUserRole(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  const roles = ROLES; // 统一使用系统权限管理中的角色列表
  const roleOptions = roles.map(r => `<option value="${r}" ${r===user.role?'selected':''}>${r}</option>`).join('');

  const modalHtml = `
    <div class="modal-overlay" id="role-modal-overlay" onclick="if(event.target===this)closeRoleModal()">
      <div class="modal-box" style="max-width:320px;border-radius:10px;box-shadow:0 12px 40px rgba(0,0,0,0.15);">
        <div class="modal-header" style="padding:12px 16px;border-bottom:1px solid #f1f5f9;">
          <div style="font-size:13px;font-weight:600;color:var(--c-text);">修改角色</div>
          <button class="modal-close" onclick="closeRoleModal()" style="font-size:18px;color:#94a3b8;">&times;</button>
        </div>
        <div class="modal-body" style="padding:16px;">
          <div style="margin-bottom:10px;font-size:12px;color:#94a3b8;">为 <strong style="color:var(--c-primary);">${user.name}</strong> 选择新角色</div>
          <div style="position:relative;">
            <select id="role-select-input" style="width:100%;padding:8px 28px 8px 10px;font-size:12px;color:var(--c-text);border:1px solid #e2e8f0;border-radius:6px;background:#fff;appearance:none;cursor:pointer;outline:none;transition:border-color 0.2s;">
              ${roleOptions}
            </select>
            <div style="position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none;font-size:10px;color:#94a3b8;">▼</div>
          </div>
        </div>
        <div class="modal-footer" style="padding:10px 16px 14px;gap:8px;">
          <button class="btn" onclick="closeRoleModal()" style="padding:6px 14px;font-size:12px;border-radius:6px;background:#f8fafc;color:#64748b;border:1px solid #e2e8f0;">取消</button>
          <button class="btn btn-primary" onclick="confirmEditRole('${userId}')" style="padding:6px 14px;font-size:12px;border-radius:6px;">确定</button>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeRoleModal(){
  const el = document.getElementById('role-modal-overlay');
  if(el) el.remove();
}

function confirmEditRole(userId){
  const user = USERS.find(u => u.id === userId);
  const sel = document.getElementById('role-select-input');
  if(!user || !sel) return;
  const newRole = sel.value;
  if(newRole && newRole !== user.role){
    user.role = newRole;
    saveUsers();
    showToast('已修改 '+user.name+' 的角色为：'+newRole, 'success');
    renderModule("notifications");
  }
  closeRoleModal();
}

function resetUserPassword(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  showPromptModal('重置 '+user.name+' 的密码', '请输入新密码（至少6位）：', '', function(newPwd){
    if (newPwd && newPwd.length >= 6) {
      var that = user;
      hashPassword(newPwd).then(function(hashed) {
        that.password = hashed;
        saveUsers();
        showToast('已重置 '+that.name+' 的密码', 'success');
      });
    } else if (newPwd) {
      showToast('密码长度不足6位，请重新操作', 'error');
    }
  });
}

function disableUser(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  if (user.role === "超级管理员") { showToast('不能禁用超级管理员', 'error'); return; }
  showConfirmModal('确定要禁用用户 <strong>'+user.name+'</strong> 吗？', '确认禁用', function(){
    user.status = "已禁用";
    saveUsers();
    showToast('已禁用用户 '+user.name, 'warning');
    renderModule("notifications");
  });
}

function enableUser(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  user.status = "已激活";
  saveUsers();
  renderModule("notifications");
}

function deleteUser(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  if (user.role === "超级管理员") { showToast('不能删除超级管理员', 'error'); return; }
  showConfirmModal('确定要删除用户 <strong>'+user.name+'</strong> 吗？<br><span style="color:#f5222d">此操作不可恢复！</span>', '确认删除', function(){
    const idx = USERS.findIndex(u => u.id === userId);
    if (idx > -1) USERS.splice(idx, 1);
    saveUsers();
    showToast('已删除用户 '+user.name, 'success');
    renderModule("notifications");
  });
}

function showAddUser(){
  if (!isAdmin()) { showToast('仅管理员可新增用户', 'error'); return; }
  var old = document.getElementById('adduser-modal-overlay');
  if(old) old.remove();
  var roleOptions = ROLES.map(function(r){
    return '<option value="'+r+'">'+r+'</option>';
  }).join('');
  var modalHtml = ''
  +'<div class="modal-overlay" id="adduser-modal-overlay" onclick="if(event.target===this)closeAddUserModal()">'
    +'<div class="modal-box" style="max-width:380px;border-radius:12px;box-shadow:0 12px 40px rgba(0,0,0,0.15);">'
      +'<div class="modal-header" style="padding:14px 18px;border-bottom:1px solid #f1f5f9;">'
        +'<div style="font-size:14px;font-weight:600;color:#1e293b;">+ 新增用户</div>'
        +'<button class="modal-close" onclick="closeAddUserModal()" style="font-size:20px;color:#94a3b8;border:none;background:none;cursor:pointer;">&times;</button>'
      +'</div>'
      +'<div class="modal-body" style="padding:18px;">'
        +'<div style="margin-bottom:12px;">'
          +'<label style="display:block;font-size:12px;color:#64748b;margin-bottom:4px;">用户姓名 *</label>'
          +'<input id="adduser-name" type="text" placeholder="请输入姓名" style="width:100%;padding:8px 10px;font-size:13px;border:1px solid #e2e8f0;border-radius:8px;outline:none;box-sizing:border-box;">'
        +'</div>'
        +'<div style="margin-bottom:12px;">'
          +'<label style="display:block;font-size:12px;color:#64748b;margin-bottom:4px;">登录账号 *</label>'
          +'<input id="adduser-username" type="text" placeholder="请输入账号" style="width:100%;padding:8px 10px;font-size:13px;border:1px solid #e2e8f0;border-radius:8px;outline:none;box-sizing:border-box;">'
        +'</div>'
        +'<div style="margin-bottom:12px;">'
          +'<label style="display:block;font-size:12px;color:#64748b;margin-bottom:4px;">初始密码 *</label>'
          +'<input id="adduser-password" type="text" placeholder="请输入密码" style="width:100%;padding:8px 10px;font-size:13px;border:1px solid #e2e8f0;border-radius:8px;outline:none;box-sizing:border-box;">'
        +'</div>'
        +'<div style="margin-bottom:4px;">'
          +'<label style="display:block;font-size:12px;color:#64748b;margin-bottom:4px;">角色</label>'
          +'<select id="adduser-role" style="width:100%;padding:8px 10px;font-size:13px;border:1px solid #e2e8f0;border-radius:8px;background:#fff;cursor:pointer;">'
            +roleOptions
          +'</select>'
        +'</div>'
      +'</div>'
      +'<div class="modal-footer" style="padding:12px 18px 16px;gap:8px;">'
        +'<button class="btn" onclick="closeAddUserModal()" style="padding:7px 16px;font-size:12px;border-radius:8px;background:#f8fafc;color:#64748b;border:1px solid #e2e8f0;">取消</button>'
        +'<button class="btn btn-primary" onclick="confirmAddUser()" style="padding:7px 16px;font-size:12px;border-radius:8px;">确定创建</button>'
      +'</div>'
    +'</div>'
  +'</div>';
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}
function closeAddUserModal(){
  var el = document.getElementById('adduser-modal-overlay');
  if(el) el.remove();
}
function confirmAddUser(){
  var name = document.getElementById('adduser-name').value.trim();
  var username = document.getElementById('adduser-username').value.trim();
  var password = document.getElementById('adduser-password').value.trim();
  var role = document.getElementById('adduser-role').value;
  if(!name || !username || !password){ showToast('请填写姓名、账号和密码', 'warning'); return; }
  if(USERS.some(function(u){ return u.username === username; })){ showToast('账号 "'+username+'" 已存在', 'error'); return; }
  var newUser = {
    id: "U" + String(USERS.length + 1).padStart(3, "0"),
    name: name, username: username, password: password, role: role,
    status: "已激活", registerTime: new Date().toISOString().slice(0, 10),
    phone: "", email: "", approvedBy: currentUser ? currentUser.name : "admin", remark: ""
  };
  USERS.push(newUser);
  saveUsers();
  closeAddUserModal();
  renderModule("notifications");
}


