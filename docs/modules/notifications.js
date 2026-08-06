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


// ===== 系统数据管理 - 全局变量 =====
var _systemDataView = 'catalog';
var _systemDataTab = 'projects';
var _systemDataPage = 1;
var _systemDataPageSize = 20;
var _systemDataSortField = '';
var _systemDataSortDir = 'asc';
var _systemDataSearchKeyword = '';
var _systemDataCatalogSearch = '';

// ===== 系统数据管理 - 数据表定义 =====
// ===== 难度评估数据（运行时由系统数据管理统一维护，不再硬编码写死） =====
var ASSESSMENTS = [];
function loadAssessments(){
  var arr = null;
  try { var s = localStorage.getItem('chansee_assessments'); if(s) arr = JSON.parse(s); } catch(e){}
  if(!arr || !arr.length){
    arr = (typeof ASSESSMENTS_DATA !== 'undefined' && ASSESSMENTS_DATA.length) ? ASSESSMENTS_DATA.slice() : [];
    try { localStorage.setItem('chansee_assessments', JSON.stringify(arr)); } catch(e){}
  }
  ASSESSMENTS.length = 0;
  for(var i=0;i<arr.length;i++){
    var r = arr[i];
    // 过滤遗留的说明性脏数据（如 month 字段塞了评估方法论文字）
    if(r && typeof r.month === 'string' && (r.month.indexOf('项目管理难度依据')>=0 || r.month.indexOf('1、')===0)) continue;
    ASSESSMENTS.push(r);
  }
}
loadAssessments();

var SYSTEM_DATA_TABLES = {
  projects: {
    label: '\u{1F4CB} 项目数据表',
    desc: '所有项目的完整档案数据，包含编号、名称、类型、职场、负责人、状态、健康度等核心字段。中控台全部5个页面均依赖此表。',
    data: PROJECTS,
    fields: [
      {key:'id', label:'项目编号', type:'text', required:true},
      {key:'name', label:'项目名称', type:'text', required:true},
      {key:'brand', label:'品牌', type:'text', required:true},
      {key:'category', label:'品类', type:'text'},
      {key:'serviceMode', label:'项目类型', type:'select', options:['TP项目','DP项目','自营项目']},
      {key:'workplace', label:'职场', type:'text'},
      {key:'pm', label:'负责人', type:'text'},
      {key:'status', label:'状态', type:'select', options:['优质健康店','平稳常规店','风险预警店','高危问题店']},
      {key:'health', label:'健康度', type:'text'},
      {key:'revenue', label:'营收(万)', type:'number'},
      {key:'costBudget', label:'成本预算(万)', type:'number'},
      {key:'profitRate', label:'利润率(%)', type:'number'},
      {key:'customerPlatforms', label:'平台', type:'text'}
    ]
  },
  operations: {
    label: '\u{1F4C8} 项目运营表',
    desc: '各项目的运营数据，包含工单量、转化率、满意度、响应时效等指标。服务与进度追踪页面依赖此表。',
    data: OPERATIONS,
    fields: [
      {key:'projectId', label:'项目ID', type:'text', required:true},
      {key:'ticketVol', label:'工单量', type:'number'},
      {key:'convCount', label:'转化数', type:'number'},
      {key:'avgPrice', label:'客单价', type:'number'},
      {key:'csat', label:'满意度', type:'text'},
      {key:'responseTime', label:'响应时间(s)', type:'number'},
      {key:'handleDuration', label:'处理时长(h)', type:'number'},
      {key:'nps', label:'NPS', type:'number'},
      {key:'satisfactionComm', label:'满意度-沟通', type:'number'},
      {key:'satisfactionExec', label:'满意度-执行', type:'number'},
      {key:'satisfactionCollab', label:'满意度-协作', type:'number'},
      {key:'status', label:'状态', type:'text'}
    ]
  },
  risk: {
    label: '\u{26A0}️ 风险预警表（聚合）',
    desc: '由"项目风险预警池"实时聚合生成，数据来源于项目档案(健康分/利润率/SLA目标)与运营数据(响应时长/满意度)。本表为只读视图，不可直接编辑——如需处置风险请在风险预警池页面操作，修改项目档案或运营数据后点"刷新"即自动更新。',
    data: typeof RISK_ALERTS !== 'undefined' ? RISK_ALERTS : [],
    readOnly: true,
    fields: [
      {key:'projectId', label:'项目编号', type:'text'},
      {key:'projectName', label:'项目名称', type:'text'},
      {key:'riskType', label:'风险类型', type:'text'},
      {key:'severity', label:'风险等级', type:'text'},
      {key:'indicator', label:'触发指标', type:'text'},
      {key:'threshold', label:'阈值', type:'text'},
      {key:'status', label:'状态', type:'text'}
    ]
  },
  issues: {
    label: '\u{1F9F0} 协同事项表',
    desc: '问题与课题的统一登记、跟踪、闭环记录，包含问题(整改/客诉等)和课题(流程优化/调研诊断/销售提升/服务升级等)。问题与课题协作页面依赖此表。',
    data: ISSUES,
    fields: [
      {key:'id', label:'编号', type:'text', required:true},
      {key:'category', label:'类别', type:'select', options:['问题','课题']},
      {key:'projectName', label:'项目', type:'text'},
      {key:'type', label:'类型', type:'select', options:['整改','客诉','数据异常','流程卡点','系统故障','优化','流程优化','调研诊断','销售提升','服务升级','成本优化','风险防控','其他']},
      {key:'desc', label:'描述', type:'textarea'},
      {key:'priority', label:'优先级', type:'select', options:['紧急','重要','一般']},
      {key:'assignee', label:'责任人', type:'text'},
      {key:'status', label:'状态', type:'select', options:['待处理','处理中','待验收','已关闭','立项','执行中','结题']},
      {key:'source', label:'来源', type:'text'},
      {key:'background', label:'背景', type:'textarea'},
      {key:'rootCause', label:'根因', type:'textarea'},
      {key:'milestone', label:'关键节点', type:'textarea'},
      {key:'outcome', label:'成果', type:'textarea'},
      {key:'participants', label:'协同方', type:'text'}
    ]
  },
  knowledge: {
    label: '\u{1F4DA} 知识条目表',
    desc: '管理者通用技能知识库，包含成本控制、效率提升、团队管理等。核心知识能量池页面依赖此表，两处数据实时同步。',
    data: typeof KNOWLEDGE !== 'undefined' ? KNOWLEDGE : [],
    fields: [
      {key:'id', label:'ID', type:'text', required:true},
      {key:'title', label:'标题', type:'text', required:true},
      {key:'type', label:'分类', type:'select', options:['SOP流程优化','风控应急预案','成本目标控制','优秀话术萃取','AI提效赋能','培训材料']},
      {key:'category', label:'管理方向', type:'select', options:['团队管理','成本控制','效率提升','风险防控','体系搭建','沟通协作']},
      {key:'short', label:'简短摘要', type:'text'},
      {key:'description', label:'完整描述', type:'textarea'},
      {key:'tags', label:'标签', type:'text'},
      {key:'scope', label:'适用范围', type:'text'},
      {key:'permission', label:'权限', type:'select', options:['公开','内部','受限']},
      {key:'views', label:'浏览量', type:'number'},
      {key:'downloads', label:'下载量', type:'number'},
      {key:'updateTime', label:'更新时间', type:'text'}
    ]
  },
  handovers: {
    label: '\u{23F3} 交接记录表',
    desc: '项目PM交接的历史记录，包含交接人、日期、完成状态等。项目承接规范页面依赖此表。',
    data: typeof HANDOVERS !== 'undefined' ? HANDOVERS : [],
    fields: [
      {key:'id', label:'ID', type:'text', required:true},
      {key:'projectId', label:'项目ID', type:'text'},
      {key:'projectName', label:'项目名称', type:'text'},
      {key:'from', label:'原负责人', type:'text'},
      {key:'to', label:'新负责人', type:'text'},
      {key:'type', label:'交接类型', type:'select', options:['人员离职','内部调动','临时代理','项目移交']},
      {key:'date', label:'交接日期', type:'text'},
      {key:'planDate', label:'计划日期', type:'text'},
      {key:'status', label:'状态', type:'select', options:['已完成','进行中','已取消']},
      {key:'checklist', label:'交接范围清单', type:'textarea'},
      {key:'keyItems', label:'重点交接事项', type:'textarea'},
      {key:'pending', label:'遗留问题', type:'textarea'},
      {key:'summary', label:'补充说明', type:'textarea'}
    ]
  },
  kpi: {
    label: '\u{1F4CA} KPI数据表',
    desc: '项目月度KPI数据，包含销售额、成本、费效比、目标达成率等。目标与权责、成本管理页面依赖此表。',
    data: typeof KPI_HISTORY !== 'undefined' ? KPI_HISTORY : [],
    fields: [
      {key:'date', label:'日期', type:'text', required:true},
      {key:'projectId', label:'项目ID', type:'text'},
      {key:'revenue', label:'销售额(万)', type:'number'},
      {key:'cost', label:'成本(万)', type:'number'},
      {key:'profitRate', label:'费效比', type:'text'},
      {key:'targetRate', label:'目标达成率', type:'text'}
    ]
  },
  personnel: {
    label: '\u{1F465} 人员数据表',
    desc: '客服人员绩效、组别负荷比、工作量统计、人员配置。客服绩效看板、运营数据等页面依赖此表。',
    data: typeof AGENT_PERFORMANCE !== 'undefined' ? AGENT_PERFORMANCE : [],
    fields: [],
    isComplex: true,
    subTables: ['agent', 'group', 'workload', 'staff']
  },
  sysconfig: {
    label: '\u{1F512} 系统配置表',
    desc: '用户账号、数据权限配置、登录记录。登录认证、权限管理、用户管理均依赖此表。',
    data: typeof USERS !== 'undefined' ? USERS : [],
    fields: [],
    isComplex: true,
    subTables: ['users', 'permissions', 'loginlogs']
  },
  changelog: {
    label: '\u{1F573} 操作日志表',
    desc: '所有数据修改的审计记录（系统自动维护，仅可查看）。记录谁在何时修改了哪条数据的哪个字段。',
    data: (function(){ try { var d = JSON.parse(localStorage.getItem('chansee_data_change_log')||'[]'); return Array.isArray(d) ? d : []; } catch(e){ return []; } })(),
    fields: [
      {key:'changedAt', label:'时间', type:'text'},
      {key:'changedBy', label:'操作人', type:'text'},
      {key:'tableName', label:'表名', type:'text'},
      {key:'recordId', label:'记录ID', type:'text'},
      {key:'fieldName', label:'字段名', type:'text'},
      {key:'oldValue', label:'旧值', type:'text'},
      {key:'newValue', label:'新值', type:'text'}
    ]
  },
  assessments: {
    label: '\u{1F4CA} 难度评估表',
    desc: '项目难度与人员能力评估数据，包含定量得分、定性得分、管理等级、匹配度等。项目难度评估页面依赖此表。在系统数据管理中可新增、编辑、删除、导入、导出评估记录，所有修改会实时同步到评估页面。',
    data: ASSESSMENTS,
    fields: [
      {key:'month', label:'评估周期', type:'text'},
      {key:'dept', label:'事业部', type:'text'},
      {key:'group', label:'评估单元(项目/组)', type:'text'},
      {key:'manager', label:'管理人', type:'text'},
      {key:'level', label:'管理等级', type:'select', options:['组长-1级','组长-2级','组长-3级','主管','经理','培训师']},
      {key:'totalScore', label:'总分', type:'number'},
      {key:'quantScore', label:'定量得分', type:'number'},
      {key:'qualScore', label:'定性得分', type:'number'},
      {key:'csCountScore', label:'客服数得分', type:'number'},
      {key:'new3mScore', label:'新人得分', type:'number'},
      {key:'ratioScore', label:'配比得分', type:'number'},
      {key:'storeMgrScore', label:'店长得分', type:'number'},
      {key:'pptScore', label:'PPT得分', type:'number'},
      {key:'qual1', label:'业务复杂度', type:'number'},
      {key:'qual2', label:'跨平台', type:'number'},
      {key:'qual3', label:'品牌授权', type:'number'},
      {key:'qual4', label:'流动性', type:'number'},
      {key:'qual5', label:'培训需求', type:'number'},
      {key:'qual6', label:'系统复杂度', type:'number'},
      {key:'qual7', label:'客诉难度', type:'number'},
      {key:'qual8', label:'突发事件', type:'number'}
    ]
  },
  satisfaction: {
    label: '📋 运维调研表',
    desc: '项目运维调研与满意度评估数据，包含项目方感受（综合/业务/专业/执行/汇报/风控/沟通）与上级评定。项目运维调研页面依赖此表。在系统数据管理中可新增、编辑、删除、导入、导出，所有修改实时同步到运维调研页面。',
    data: SATISFACTION_DATA,
    fields: [
      {key:'id', label:'ID', type:'number'},
      {key:'projectId', label:'项目ID', type:'text'},
      {key:'period', label:'评估周期', type:'text'},
      {key:'overall', label:'综合感受', type:'select', options:['非常满意','满意','一般','不满意','待评定']},
      {key:'busiPerf', label:'业务表现', type:'textarea'},
      {key:'professionalism', label:'专业度', type:'textarea'},
      {key:'execution', label:'执行力', type:'textarea'},
      {key:'repTime', label:'汇报时效性', type:'textarea'},
      {key:'repAcc', label:'汇报准确性', type:'textarea'},
      {key:'repFull', label:'汇报全面性', type:'textarea'},
      {key:'riskControl', label:'风险管控', type:'textarea'},
      {key:'commFreq', label:'沟通频率', type:'select', options:['非常满意','满意','一般','不满意','待填写']},
      {key:'commUnd', label:'沟通理解', type:'textarea'},
      {key:'commSync', label:'信息同步', type:'textarea'},
      {key:'leaderScore', label:'领导评分', type:'number'},
      {key:'leaderComment', label:'上级评语', type:'textarea'},
      {key:'evaluatedBy', label:'评定人', type:'text'},
      {key:'evaluatedAt', label:'评定日期', type:'text'},
      {key:'status', label:'状态', type:'select', options:['已评定','待评定']}
    ]
  },
  // ===== 新增数据源（补全所有模块的数据挂载）=====
  goals: {
    label: '\u{1F3AF} 目标与权责表',
    desc: '项目目标与权责数据，包含业务指标、分摊成本、问题改善、课题推进等目标。目标与权责管理页面依赖此表，数据双向实时同步。',
    data: typeof GOALS !== 'undefined' ? GOALS : [],
    fields: [
      {key:'id', label:'目标ID', type:'text', required:true},
      {key:'projectId', label:'关联项目', type:'text', required:true},
      {key:'type', label:'目标类型', type:'select', options:['业务指标类','分摊成本类','问题改善类','课题推进类']},
      {key:'target', label:'目标描述', type:'textarea', required:true},
      {key:'metric', label:'衡量指标', type:'textarea'},
      {key:'owner', label:'负责人', type:'text'},
      {key:'deadline', label:'截止日期', type:'text'},
      {key:'status', label:'状态', type:'select', options:['进行中','已完成','已逾期']},
      {key:'createTime', label:'创建时间', type:'text'}
    ]
  },
  agent_performance: {
    label: '\u{1F4C8} 坐席绩效表',
    desc: '各坐席月度绩效数据，包含销售额、转化率、首次解决率、CSAT等。客服绩效看板页面依赖此表，数据双向实时同步。',
    data: typeof AGENT_PERFORMANCE !== 'undefined' ? AGENT_PERFORMANCE : [],
    fields: [
      {key:'id', label:'绩效ID', type:'text', required:true},
      {key:'agentName', label:'坐席名称', type:'text'},
      {key:'projectId', label:'所属项目', type:'text'},
      {key:'period', label:'绩效周期', type:'text'},
      {key:'salesAmount', label:'销售额', type:'number'},
      {key:'conversionRate', label:'转化率(%)', type:'number'},
      {key:'firstResolveRate', label:'首次解决率(%)', type:'number'},
      {key:'csat', label:'CSAT', type:'number'},
      {key:'attendance', label:'出勤率(%)', type:'number'}
    ]
  },
  staff_config: {
    label: '\u{1F465} 客服配置表',
    desc: '客服人员岗位配置数据，包含角色、人数、占比、工作地点等。首页看板与系统数据管理依赖此表，数据双向实时同步。',
    data: typeof STAFF_CONFIG !== 'undefined' ? STAFF_CONFIG : [],
    fields: [
      {key:'id', label:'配置ID', type:'text', required:true},
      {key:'role', label:'客服角色', type:'text'},
      {key:'count', label:'人数', type:'number'},
      {key:'pct', label:'占比(%)', type:'number'},
      {key:'workplace', label:'工作地点', type:'text'},
      {key:'updatedAt', label:'更新时间', type:'text'},
      {key:'updatedBy', label:'更新人', type:'text'}
    ]
  },
  workload_data: {
    label: '\u{1F4CA} 工作量数据表',
    desc: '客服工作量统计数据，包含工单类型、数量、占比等。运营数据与看板页面依赖此表，数据双向实时同步。',
    data: typeof WORKLOAD_DATA !== 'undefined' ? WORKLOAD_DATA : [],
    fields: [
      {key:'id', label:'数据ID', type:'text', required:true},
      {key:'name', label:'工单类型', type:'text'},
      {key:'count', label:'数量', type:'number'},
      {key:'ratio', label:'占比(%)', type:'number'},
      {key:'workplace', label:'工作地点', type:'text'},
      {key:'updatedAt', label:'更新时间', type:'text'},
      {key:'updatedBy', label:'更新人', type:'text'}
    ]
  },
  performance_weights: {
    label: '\u{2696}️ 绩效权重表',
    desc: '绩效考核权重配置，定义不同维度的评分占比。绩效评估与看板页面依赖此配置。',
    data: typeof PERFORMANCE_WEIGHTS !== 'undefined' ? PERFORMANCE_WEIGHTS : {},
    fields: [
      {key:'key', label:'配置项', type:'text'},
      {key:'value', label:'权重值', type:'number'}
    ],
    isKvTable: true
  },
  group_load_ratio: {
    label: '\u{1F4CA} 团队负荷比表',
    desc: '客服团队组别负荷比数据，辅助资源分配与绩效评估。',
    data: typeof GROUP_LOAD_RATIO !== 'undefined' ? GROUP_LOAD_RATIO : [],
    fields: [
      {key:'groupId', label:'组别ID', type:'text'},
      {key:'groupName', label:'组别名称', type:'text'},
      {key:'loadRatio', label:'负荷比', type:'number'},
      {key:'period', label:'统计周期', type:'text'}
    ]
  }
};

// ===== localStorage Key 映射 =====
var _SD_LS_MAP = {
  projects: 'chansee_projects',
  operations: 'chansee_operations',
  issues: 'chansee_issues',
  knowledge: 'chansee_knowledge',
  handovers: 'chansee_handovers',
  kpi: 'chansee_kpi_history',
  changelog: 'chansee_data_change_log',
  assessments: 'chansee_assessments',
  satisfaction: 'chansee_satisfaction',
  goals: 'chansee_goals',
  agent_performance: 'chansee_agent_performance',
  staff_config: 'chansee_staff_config',
  workload_data: 'chansee_workload_data',
  performance_weights: 'chansee_performance_weights',
  group_load_ratio: 'chansee_group_load_ratio'
};

// ===== 数据表分组配置（用于目录分类展示）=====
var _SD_GROUPS = [
  {key:'核心业务', icon:'📊', desc:'核心业务数据', tables:['projects','operations','kpi','goals']},
  {key:'运营协作', icon:'🔄', desc:'运营与协同数据', tables:['issues','knowledge','handovers']},
  {key:'人员绩效', icon:'👥', desc:'人员与绩效数据', tables:['agent_performance','staff_config','workload_data','performance_weights','group_load_ratio']},
  {key:'评估风控', icon:'🛡️', desc:'评估与风险数据', tables:['risk','assessments','satisfaction']},
  {key:'系统管理', icon:'⚙️', desc:'系统与审计数据', tables:['personnel','sysconfig','changelog']}
];
// 表→分组反向映射
var _SD_TABLE_GROUP = {};
for(var _sgi=0;_sgi<_SD_GROUPS.length;_sgi++){var _sg=_SD_GROUPS[_sgi];for(var _sgi2=0;_sgi2<_sg.tables.length;_sgi2++)_SD_TABLE_GROUP[_sg.tables[_sgi2]]=_sg;}

// ===== 关联页面映射（卡片上的快捷跳转标签）=====
var _SD_RELATED_PAGES = {
  projects: [{label:'🏠 首页看板',mod:'dashboard'},{label:'📋 项目档案',mod:'archive'},{label:'📊 运营数据',mod:'operation'}],
  operations: [{label:'📊 运营数据',mod:'operation'},{label:'📈 目标与权责',mod:'target'}],
  risk: [{label:'⚠️ 风险预警池',mod:'risk'}],
  issues: [{label:'🧰 问题与课题',mod:'issue'}],
  knowledge: [{label:'📚 知识能量池',mod:'knowledge'}],
  handovers: [{label:'⏳ 项目承接规范',mod:'handover'}],
  kpi: [{label:'📈 目标与权责',mod:'target'},{label:'💰 成本管理',mod:'cost'}],
  goals: [{label:'🎯 目标与权责',mod:'target'}],
  agent_performance: [{label:'📊 客服绩效看板',mod:'performance'}],
  staff_config: [{label:'🏠 首页看板',mod:'dashboard'},{label:'👥 人员数据',mod:'operation'}],
  workload_data: [{label:'📊 运营数据',mod:'operation'}],
  performance_weights: [{label:'📊 客服绩效看板',mod:'performance'}],
  group_load_ratio: [{label:'📊 客服绩效看板',mod:'performance'}],
  personnel: [{label:'📊 客服绩效看板',mod:'performance'},{label:'📈 运营数据',mod:'operation'}],
  sysconfig: [{label:'👥 系统用户管理',mod:'notifications'},{label:'🔐 系统权限管理',mod:'permissions'}],
  changelog: [],
  assessments: [{label:'📋 项目难度评估',mod:'assessment'}],
  satisfaction: [{label:'📋 项目运维调研',mod:'satisfaction'}]
};

// ===== 跳转到系统数据管理对应表 =====
function goToSystemDataTable(key) {
  _systemDataView = 'detail';
  _systemDataTab = key;
  _systemDataPage = 1;
  _systemDataSearchKeyword = '';
  renderModule('systemData');
  // 高亮侧边栏
  var navItem = document.querySelector('.nav-item[data-module="systemData"]');
  if (navItem) { navItem.click(); }
}

