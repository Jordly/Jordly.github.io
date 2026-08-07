// modules/issue.js — 问题管理模块
/* ═══════════════════ 问题管理 ═══════════════════ */
function renderIssue(){
  try {
  if(typeof issueActiveTab === 'undefined'){ window.issueActiveTab = 'issue'; }
  var tab = window.issueActiveTab || 'issue';
  var isIssue = tab === 'issue';
  var can = canEdit();

  // 过滤数据
  var items = ISSUES.filter(function(i){ return i.category === (isIssue ? '问题' : '课题'); });
  var fs = window.issueFilterState || {};
  if(fs.status && fs.status !== 'all') items = items.filter(function(i){ return i.status === fs.status; });
  if(fs.priority && fs.priority !== 'all') items = items.filter(function(i){ return i.priority === fs.priority; });
  if(fs.type && fs.type !== 'all') items = items.filter(function(i){ return i.type === fs.type; });
  if(fs.assignee && fs.assignee !== 'all') items = items.filter(function(i){ return i.assignee === fs.assignee; });
  if(fs.keyword) items = items.filter(function(i){ return (i.desc||'').indexOf(fs.keyword)>=0||(i.projectName||'').indexOf(fs.keyword)>=0||i.id.toString().indexOf(fs.keyword)>=0; });

  // 统计卡片
  var counts = { pending:0, processing:0, verify:0, closed:0, all:items.length };
  items.forEach(function(i){
    if(i.status==='待处理'||i.status==='未开始') counts.pending++;
    else if(i.status==='处理中'||i.status==='进行中') counts.processing++;
    else if(i.status==='待验收') counts.verify++;
    else if(i.status==='已关闭') counts.closed++;
  });

  // 独立筛选栏
  var allPriorities = ['紧急','重要','一般'];
  var allTypes = isIssue ? ['整改','客诉','数据异常','流程卡点','系统故障','优化'] : ['流程优化','调研诊断','销售提升','服务升级','成本优化','风险防控','其他'];
  var allAssignees = [];
  ISSUES.forEach(function(i){ if(i.assignee && allAssignees.indexOf(i.assignee)<0) allAssignees.push(i.assignee); });

  function sel(name, options, allLabel){
    var html = '<select id="issue-filter-'+name+'" onchange="filterIssues()" style="padding:6px 10px;border:1px solid #e2e8f0;border-radius:8px;font-size:12px;color:#475569;background:#fff;cursor:pointer;outline:none;">';
    html += '<option value="all">全部'+allLabel+'</option>';
    options.forEach(function(o){ html += '<option value="'+o+'" '+(fs[name]===o?'selected':'')+'>'+o+'</option>'; });
    html += '</select>';
    return html;
  }

  var statCards = isIssue
    ? [{l:'待处理',c:counts.pending,cls:'issue-stat-pending'},{l:'处理中',c:counts.processing,cls:'issue-stat-processing'},{l:'待验收',c:counts.verify,cls:'issue-stat-verify'},{l:'已关闭',c:counts.closed,cls:'issue-stat-closed'}]
    : [{l:'未开始',c:counts.pending,cls:'issue-stat-pending'},{l:'进行中',c:counts.processing,cls:'issue-stat-processing'},{l:'待验收',c:counts.verify,cls:'issue-stat-verify'},{l:'已关闭',c:counts.closed,cls:'issue-stat-closed'}];
  var statHtml = '<div class="issue-stat-cards">'+statCards.map(function(s){ return '<div class="issue-stat-card '+s.cls+'"><p class="issue-stat-label">'+s.l+'</p><p class="issue-stat-count">'+s.c+'</p></div>'; }).join('')+'</div>';

  // 表格行
  var rows = items.map(function(i){
    var idLabel = isIssue ? 'I'+String(i.id).padStart(3,'0') : 'T'+String(i.id).padStart(3,'0');
    var statusBadge = '<span class="issue-badge '+(i.status==='已关闭'?'issue-badge-success':i.status==='待处理'||i.status==='未开始'?'issue-badge-danger':'issue-badge-info')+'">'+i.status+'</span>';
    var priorityBadge = '<span class="issue-priority-badge '+(i.priority==='紧急'?'issue-priority-danger':i.priority==='重要'?'issue-priority-warning':'issue-priority-gray')+'">'+i.priority+'</span>';

    if(isIssue){
      return '<tr class="'+(i.status==='待处理'||i.priority==='紧急'?'issue-row-danger':i.status==='处理中'?'issue-row-warning':'')+'">'
        +'<td>'+statusBadge+'</td>'
        +'<td style="font-weight:500;">'+idLabel+'</td>'
        +'<td>'+i.projectName+'</td>'
        +'<td>'+i.type+'</td>'
        +'<td style="color:#666;font-size:13px;">'+i.desc+'</td>'
        +'<td style="text-align:center;">'+priorityBadge+'</td>'
        +'<td>'+i.assignee+'</td>'
        +'<td>'+(i.source||'')+'</td>'
        +'<td style="text-align:center;"><span class="issue-action-btn issue-action-view" onclick="showIssueDetail('+i.id+')">查看</span></td>'
        +'</tr>';
    } else {
      return '<tr class="topic-row" style="'+(i.status==='未开始'?'opacity:0.7':'')+'">'
        +'<td>'+statusBadge+'</td>'
        +'<td style="font-weight:500;color:#7c3aed;">'+idLabel+'</td>'
        +'<td><span style="background:#f0f0ff;color:#7c3aed;padding:2px 8px;border-radius:4px;font-size:12px;">'+i.type+'</span></td>'
        +'<td style="color:#666;font-size:13px;">'+i.desc+'</td>'
        +'<td>'+i.assignee+'</td>'
        +'<td style="text-align:center;">'+priorityBadge+'</td>'
        +'<td>'+i.participants+'</td>'
        +'<td style="text-align:center;"><span class="issue-action-btn issue-action-view" onclick="showIssueDetail('+i.id+')">查看</span></td>'
        +'</tr>';
    }
  }).join('');

  return '<div style="border-top:3px solid;border-image:linear-gradient(90deg,#0ABAB5,#3b82f6,#8b5cf6) 1;margin-bottom:20px;"></div>'
    // 双药丸标签
    +'<div style="display:flex;gap:12px;margin-bottom:16px;">'
    +'<span class="issue-tab-pill '+(isIssue?'issue-tab-active issue-tab-issue':'issue-tab-inactive')+'" onclick="switchIssueTab(\'issue\')" style="background:'+(isIssue?'linear-gradient(135deg,#0ABAB5,#06b6d4)':'')+';">🔍 问题追踪</span>'
    +'<span class="issue-tab-pill '+(!isIssue?'issue-tab-active issue-tab-topic':'issue-tab-inactive')+'" onclick="switchIssueTab(\'topic\')" style="background:'+(!isIssue?'linear-gradient(135deg,#8b5cf6,#a78bfa)':'')+';">📋 课题协作</span>'
    + (can ? '<div style="margin-left:auto;"><button class="btn btn-sm btn-primary" onclick="showAddIssue()" style="padding:6px 14px;font-size:12px;">+'+(isIssue?'问题':'课题')+'</button></div>' : '')
    +'</div>'
    // 独立筛选栏
    +'<div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;flex-wrap:wrap;">'
    + sel('priority',allPriorities,'优先级') + sel('type',allTypes,'类型') + sel('assignee',allAssignees,'责任人')
    +'<div style="position:relative;flex:1;min-width:140px;"><input id="issue-search" placeholder="搜索关键词..." value="'+(fs.keyword||'')+'" onkeydown="if(event.key===\'Enter\')filterIssues()" style="width:100%;padding:6px 10px;padding-left:28px;border:1px solid #e2e8f0;border-radius:8px;font-size:12px;outline:none;"><span style="position:absolute;left:8px;top:50%;transform:translateY(-50%);font-size:12px;">🔍</span></div>'
    +'<span onclick="filterIssues()" style="cursor:pointer;color:#0ABAB5;font-size:12px;">筛选</span>'
    +'<span onclick="document.getElementById(\'issue-search\').value=\'\';filterIssues()" style="cursor:pointer;color:#94a3b8;font-size:12px;">清除</span>'
    +'</div>'
    // 统计卡片
    + statHtml
    // 表格
    +'<div class="issue-table-wrapper"><table class="issue-table"><thead><tr>'
    + (isIssue ? '<th style="width:9%;">状态</th><th style="width:9%;">编号</th><th style="width:12%;">项目</th><th style="width:7%;">类型</th><th style="width:26%;">描述</th><th style="width:7%;text-align:center;">优先级</th><th style="width:7%;">责任人</th><th style="width:8%;">来源</th><th style="width:15%;text-align:center;">操作</th>'
               : '<th style="width:9%;">状态</th><th style="width:9%;">编号</th><th style="width:12%;">课题类型</th><th style="width:26%;">描述</th><th style="width:7%;">负责人</th><th style="width:7%;text-align:center;">优先级</th><th style="width:12%;">参与人</th><th style="width:15%;text-align:center;">操作</th>')
    +'</tr></thead><tbody>'+(rows||'<tr><td colspan="9" style="text-align:center;padding:40px;color:#94a3b8;">暂无数据</td></tr>')+'</tbody></table></div>'
    +'<div class="issue-legend"><div class="issue-legend-item"><span class="issue-legend-color issue-legend-red"></span> 紧急/待处理行高亮</div><div class="issue-legend-item"><span class="issue-legend-color issue-legend-blue"></span> 处理中</div><div class="issue-legend-item"><span class="issue-legend-color issue-legend-green"></span> 已关闭</div></div>';

  } catch(e) { if(typeof addRuntimeLog==='function') addRuntimeLog('error','Issue 渲染异常',String(e)); return errorState('问题协作加载失败','请刷新页面重试'); }
}

// ===== 核心知识能量池 =====

