// ===== 目标与权责管理（独立模块）=====
// 目标数据数组
var GOALS = [];
(function initGoals() {
  var raw = localStorage.getItem('chansee_goals');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      GOALS = JSON.parse(raw);
      console.log('[initGoals] 从 localStorage 恢复 ' + GOALS.length + ' 个目标');
      return;
    } catch(e) {
      console.error('[initGoals] 目标数据损坏，重置:', e);
    }
  }
  GOALS = [];
})();

function saveGoals() {
  var ok = safeSetItem('chansee_goals', JSON.stringify(GOALS));
  if (!ok) { console.error('[saveGoals] 写入失败，目标数据可能丢失！'); }
  // 同步到 CloudBase
  if (window.CloudBaseSync) window.CloudBaseSync.saveToCloud('goals', GOALS);
}

// 当前目标Tab筛选
var currentGoalType = '全部';

function switchGoalTab(type, el) {
  currentGoalType = type;
  // 更新Tab样式
  var tabs = document.querySelectorAll('#goal-tabs .goal-tab');
  tabs.forEach(function(t) { t.classList.remove('active'); });
  if (el) el.classList.add('active');
  renderModule('target');
}

function renderTarget() {
  const allProjects = getFilteredProjects();
  const can = canEdit();

  // 筛选目标
  var filteredGoals = GOALS.slice();
  if (currentGoalType !== '全部') {
    filteredGoals = filteredGoals.filter(function(g) { return g.type === currentGoalType; });
  }

  // 获取项目名称映射
  var projectNameMap = {};
  PROJECTS.forEach(function(p) { projectNameMap[p.id] = p.name; });

  var html = '';
  html += renderFilterBar();
  html += `
  <div class="module-header">
    <div>
      <div class="module-title">🎯 目标与权责管理</div>
      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">定义项目目标与权责，避免推诿</div>
    </div>
    <div class="module-actions">
      ${can ? '<button class="btn btn-primary btn-sm" onclick="showAddGoal()">＋ 新增目标</button>' : ''}
      <button class="btn btn-sm" onclick="exportGoals()" style="margin-left:4px;">📥 导出</button>
      ${currentRole==='leader'?'<span class="badge badge-gray">只读权限</span>':''}
    </div>
  </div>`;

  // Tab筛选
  var tabs = ['全部', '业务指标类', '分摊成本类', '问题改善类', '课题推进类'];
  html += '<div id="goal-tabs" style="display:flex;gap:8px;margin:16px 0 12px 0;flex-wrap:wrap;">';
  tabs.forEach(function(t) {
    var active = currentGoalType === t ? ' active' : '';
    html += '<div class="goal-tab' + active + '" onclick="switchGoalTab(\'' + t + '\',this)" style="padding:6px 16px;border-radius:20px;cursor:pointer;font-size:13px;font-weight:500;transition:all 0.2s;' + (currentGoalType===t ? 'background:var(--c-primary);color:#fff;' : 'background:var(--c-bg);color:var(--c-text-2);border:1px solid var(--c-border);') + '">' + t + '</div>';
  });
  html += '</div>';

  // 目标列表
  if (filteredGoals.length === 0) {
    html += '<div class="card" style="padding:40px;text-align:center;color:var(--c-text-3);">暂无目标数据，点击「＋ 新增目标」添加</div>';
  } else {
    html += '<div class="card" style="overflow-x:auto;"><table class="data-table">';
    html += '<thead><tr><th>项目</th><th>目标类型</th><th>目标描述</th><th>衡量指标</th><th>负责人</th><th>截止日期</th><th>状态</th><th>操作</th></tr></thead>';
    html += '<tbody>';
    filteredGoals.forEach(function(g) {
      var pName = projectNameMap[g.projectId] || g.projectId;
      var statusColor = g.status === '已完成' ? 'var(--c-green)' : g.status === '已逾期' ? 'var(--c-red)' : 'var(--c-yellow)';
      html += '<tr>';
      html += '<td>' + escHtml(pName) + '</td>';
      html += '<td><span class="badge badge-blue">' + escHtml(g.type) + '</span></td>';
      html += '<td style="max-width:200px;">' + escHtml(g.target) + '</td>';
      html += '<td style="max-width:150px;font-size:12px;color:var(--c-text-2);">' + escHtml(g.metric || '') + '</td>';
      html += '<td>' + escHtml(g.owner || '') + '</td>';
      html += '<td>' + (g.deadline || '') + '</td>';
      html += '<td><span style="color:' + statusColor + ';font-weight:500;">' + g.status + '</span></td>';
      html += '<td class="actions">';
      if (can) {
        html += '<button class="btn btn-sm" onclick="editGoal(\'' + g.id + '\')">编辑</button>';
        html += '<button class="btn btn-sm" onclick="deleteGoal(\'' + g.id + '\')" style="margin-left:4px;color:var(--c-red);">删除</button>';
      }
      html += '<button class="btn btn-sm" onclick="viewProjectFromGoal(\'' + g.projectId + '\')" style="margin-left:4px;">查看项目</button>';
      html += '</td>';
      html += '</tr>';
    });
    html += '</tbody></table></div>';
  }

  return html;
}

function showAddGoal(goalId) {
  var isEdit = !!goalId;
  var g = null;
  if (isEdit) {
    g = GOALS.find(function(gg) { return gg.id === goalId; });
    if (!g) return;
  }

  var projectOptions = PROJECTS.map(function(p) {
    return '<option value="' + p.id + '" ' + (g && g.projectId === p.id ? 'selected' : '') + '>' + escHtml(p.name) + '</option>';
  }).join('');

  var typeOptions = ['业务指标类', '分摊成本类', '问题改善类', '课题推进类'];
  var typeHtml = typeOptions.map(function(t) {
    return '<option value="' + t + '" ' + (g && g.type === t ? 'selected' : '') + '>' + t + '</option>';
  }).join('');

  var statusOptions = ['进行中', '已完成', '已逾期'];
  var statusHtml = statusOptions.map(function(s) {
    return '<option value="' + s + '" ' + (g && g.status === s ? 'selected' : '') + '>' + s + '</option>';
  }).join('');

  var html = '<form id="goal-form" onsubmit="return false;">';
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px 20px;padding:8px 0;">';
  html += '<div class="form-group"><label class="form-label">关联项目 *</label><select class="form-input" id="f-goal-project" required><option value="">请选择项目</option>' + projectOptions + '</select></div>';
  html += '<div class="form-group"><label class="form-label">目标类型 *</label><select class="form-input" id="f-goal-type" required>' + typeHtml + '</select></div>';
  html += '<div class="form-group" style="grid-column:1/-1;"><label class="form-label">目标描述 *</label><input class="form-input" id="f-goal-target" value="' + (g ? escHtml(g.target) : '') + '" required placeholder="填写具体目标内容"></div>';
  html += '<div class="form-group" style="grid-column:1/-1;"><label class="form-label">衡量指标</label><input class="form-input" id="f-goal-metric" value="' + (g ? escHtml(g.metric || '') : '') + '" placeholder="如何衡量目标达成（如：响应时长≤5s）"></div>';
  html += '<div class="form-group"><label class="form-label">负责人</label><input class="form-input" id="f-goal-owner" value="' + (g ? escHtml(g.owner || '') : '') + '"></div>';
  html += '<div class="form-group"><label class="form-label">截止日期</label><input class="form-input" type="date" id="f-goal-deadline" value="' + (g ? (g.deadline || '') : '') + '"></div>';
  html += '<div class="form-group"><label class="form-label">状态</label><select class="form-input" id="f-goal-status">' + statusHtml + '</select></div>';
  html += '</div>';
  html += '<input type="hidden" id="f-goal-id" value="' + (goalId || '') + '">';
  html += '</form>';
  html += '<div class="form-actions" style="margin-top:16px;">';
  html += '<button class="btn" onclick="document.getElementById(\'modal-overlay\').classList.add(\'hidden\')">取消</button>';
  html += '<button class="btn btn-primary" onclick="doSaveGoal()">' + (isEdit ? '保存修改' : '确认新增') + '</button>';
  html += '</div>';

  document.getElementById('modal-title').textContent = isEdit ? '✏️ 编辑目标' : '＋ 新增目标';
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function editGoal(goalId) {
  showAddGoal(goalId);
}

function deleteGoal(goalId) {
  if (!confirm('确认删除此目标？')) return;
  GOALS = GOALS.filter(function(g) { return g.id !== goalId; });
  saveGoals();
  renderModule('target');
}

function doSaveGoal() {
  var projectId = document.getElementById('f-goal-project').value;
  if (!projectId) { alert('请选择关联项目'); return; }
  var type = document.getElementById('f-goal-type').value;
  var target = document.getElementById('f-goal-target').value.trim();
  if (!target) { alert('请填写目标描述'); return; }
  var metric = document.getElementById('f-goal-metric').value.trim();
  var owner = document.getElementById('f-goal-owner').value.trim();
  var deadline = document.getElementById('f-goal-deadline').value;
  var status = document.getElementById('f-goal-status').value;
  var id = document.getElementById('f-goal-id').value;

  if (id) {
    // 编辑
    var g = GOALS.find(function(gg) { return gg.id === id; });
    if (g) {
      g.projectId = projectId;
      g.type = type;
      g.target = target;
      g.metric = metric;
      g.owner = owner;
      g.deadline = deadline;
      g.status = status;
    }
  } else {
    // 新增
    var newId = 'G' + String(GOALS.length + 1).padStart(3, '0');
    GOALS.push({
      id: newId,
      projectId: projectId,
      type: type,
      target: target,
      metric: metric,
      owner: owner,
      deadline: deadline,
      status: status,
      createTime: new Date().toISOString().slice(0, 10)
    });
  }

  saveGoals();
  document.getElementById('modal-overlay').classList.add('hidden');
  renderModule('target');
  showToast(id ? '保存成功' : '新增成功');
}

function viewProjectFromGoal(projectId) {
  document.getElementById('modal-overlay').classList.add('hidden');
  setTimeout(function() { showProjectDetail(projectId); }, 100);
}

function exportGoals(){
  var headers = ['目标ID', '项目名称', '目标类型', '目标描述', '衡量指标', '负责人', '截止日期', '状态', '创建时间'];
  var projectNameMap = {};
  PROJECTS.forEach(function(p) { projectNameMap[p.id] = p.name; });
  var rows = GOALS.map(function(g) {
    return [
      g.id,
      projectNameMap[g.projectId] || g.projectId,
      g.type||'',
      g.target||'',
      g.metric||'',
      g.owner||'',
      g.deadline||'',
      g.status||'',
      g.createTime||''
    ];
  });
  var d = new Date();
  var dsStr = d.getFullYear() + '' + String(d.getMonth()+1).padStart(2,'0') + '' + String(d.getDate()).padStart(2,'0');
  showExportDialog(headers, rows, '目标与权责_' + dsStr, '目标与权责');
}

// ===== 项目详情 → 责任边界板块 =====
// 在 showProjectDetail 中调用此函数渲染责任边界
function renderResponsibilitySection(p) {
  var content = p.responsibility || '';
  var can = canEdit();
  var html = '';
  html += '<div id="detail-tab-responsibility" class="detail-section" style="display:none;">';
  html += '<h4>📋 客服与项目责任边界</h4>';
  html += '<div style="margin-bottom:8px;font-size:12px;color:var(--c-text-3);">明确承接方（客服团队）与需求方（项目/品牌方）的责任边界，避免推诿</div>';

  // 简易工具栏
  html += '<div id="resp-toolbar" style="display:flex;gap:4px;margin-bottom:8px;flex-wrap:wrap;">';
  html += '<button class="btn btn-sm" onclick="execRespCommand(\'bold\')" title="加粗" style="min-width:32px;font-weight:bold;">B</button>';
  html += '<button class="btn btn-sm" onclick="execRespCommand(\'italic\')" title="斜体" style="min-width:32px;font-style:italic;">I</button>';
  html += '<button class="btn btn-sm" onclick="execRespCommand(\'underline\')" title="下划线" style="min-width:32px;text-decoration:underline;">U</button>';
  html += '<button class="btn btn-sm" onclick="execRespCommand(\'insertUnorderedList\')" title="无序列表" style="min-width:32px;">• 列表</button>';
  html += '<button class="btn btn-sm" onclick="execRespCommand(\'insertOrderedList\')" title="有序列表" style="min-width:32px;">1. 列表</button>';
  html += '</div>';

  // 编辑区域（contenteditable）
  html += '<div id="resp-editor" contenteditable="true" style="min-height:180px;max-height:400px;overflow:auto;padding:12px;border:1px solid var(--c-border);border-radius:var(--radius);background:var(--c-bg);font-size:13px;line-height:1.8;outline:none;" oninput="onRespInput()">' + content + '</div>';
  html += '<div style="font-size:11px;color:var(--c-text-3);margin-top:4px;">支持基础格式编辑，内容自动保存</div>';

  if (can) {
    html += '<div style="margin-top:12px;">';
    html += '<button class="btn btn-primary btn-sm" onclick="saveResponsibility(\'' + p.id + '\')">💾 保存责任边界</button>';
    html += '</div>';
  }

  html += '</div>';
  return html;
}

function execRespCommand(command) {
  document.execCommand(command, false, null);
  document.getElementById('resp-editor').focus();
}

function onRespInput() {
  // 标记有未保存的更改
  window._respDirty = true;
}

function saveResponsibility(projectId) {
  var p = PROJECTS.find(function(pp) { return pp.id === projectId; });
  if (!p) return;
  var editor = document.getElementById('resp-editor');
  if (!editor) return;
  p.responsibility = editor.innerHTML;
  saveProjects();
  window._respDirty = false;
  alert('保存成功');
}

// 覆盖 showProjectDetail 中的责任边界部分
// 在 detail-tabs 中添加责任边界Tab，并在其后添加对应section
