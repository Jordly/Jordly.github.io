// ===== 问题与课题协作 =====

function renderIssue(){

  const can = canEdit();

  // 计算各状态数量
  const countPending = ISSUES.filter(i=>i.status==='待处理').length;
  const countProcessing = ISSUES.filter(i=>i.status==='处理中').length;
  const countVerify = ISSUES.filter(i=>i.status==='待验收').length;
  const countClosed = ISSUES.filter(i=>i.status==='已关闭').length;
  const countAll = ISSUES.length;

  return `
  ${renderFilterBar()}

  <div class="issue-page-header">
    <div class="issue-page-title-row">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#185FA5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      <h1 class="issue-page-title">问题与课题协作</h1>
    </div>
    <p class="issue-page-desc">问题登记、跟踪与闭环管理，支持跨职场协同</p>
  </div>

  <div class="issue-stat-cards">
    <div class="issue-stat-card issue-stat-pending">
      <p class="issue-stat-label">待处理</p>
      <p class="issue-stat-count">${countPending}</p>
    </div>
    <div class="issue-stat-card issue-stat-processing">
      <p class="issue-stat-label">处理中</p>
      <p class="issue-stat-count">${countProcessing}</p>
    </div>
    <div class="issue-stat-card issue-stat-verify">
      <p class="issue-stat-label">待验收</p>
      <p class="issue-stat-count">${countVerify}</p>
    </div>
    <div class="issue-stat-card issue-stat-closed">
      <p class="issue-stat-label">已关闭</p>
      <p class="issue-stat-count">${countClosed}</p>
    </div>
  </div>

  <div class="issue-toolbar">
    <div class="issue-filter-btns">
      <span class="issue-filter-btn issue-filter-active">全部(${countAll})</span>
      <span class="issue-filter-btn">待处理(${countPending})</span>
      <span class="issue-filter-btn">处理中(${countProcessing})</span>
      <span class="issue-filter-btn">待验收(${countVerify})</span>
      <span class="issue-filter-btn">已关闭(${countClosed})</span>
    </div>
    ${can?'<div class="issue-add-btn" onclick="showAddIssue()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>上报问题</div>':''}
  </div>

  <div class="issue-table-wrapper">
    <table class="issue-table">
      <thead>
        <tr>
          <th style="width:9%;">状态</th>
          <th style="width:9%;">课题编号</th>
          <th style="width:12%;">项目</th>
          <th style="width:7%;">类型</th>
          <th style="width:26%;">问题描述</th>
          <th style="width:7%;text-align:center;">优先级</th>
          <th style="width:7%;">责任人</th>
          <th style="width:8%;">责任归属</th>
          <th style="width:15%;text-align:center;">操作</th>
        </tr>
      </thead>
      <tbody>
        ${ISSUES.map(i=>{
          const rowClass = (i.status==='待处理'||i.priority==='紧急')?'issue-row-danger':i.status==='待验收'?'issue-row-danger':i.status==='处理中'?'issue-row-warning':'';
          let statusClass = '';
          if(i.status==='已关闭') statusClass = 'issue-badge-success';
          else if(i.status==='待处理') statusClass = 'issue-badge-danger';
          else if(i.status==='待验收') statusClass = 'issue-badge-warning';
          else statusClass = 'issue-badge-info';

          let priorityClass = '';
          if(i.priority==='紧急') priorityClass = 'issue-priority-danger';
          else if(i.priority==='重要') priorityClass = 'issue-priority-warning';
          else priorityClass = 'issue-priority-gray';

          return `
          <tr class="${rowClass}">
            <td><span class="issue-badge ${statusClass}">${i.status}</span></td>
            <td style="font-weight:500;">I${String(i.id).padStart(3,'0')}</td>
            <td>${i.projectName}</td>
            <td>${i.type}</td>
            <td style="color:var(--c-text-3,#666);">${i.desc}</td>
            <td style="text-align:center;"><span class="issue-priority-badge ${priorityClass}">${i.priority}</span></td>
            <td>${i.assignee}</td>
            <td>${i.responsibility}</td>
            <td style="text-align:center;">
              <span class="issue-action-btn issue-action-view" onclick="showIssueDetail(${i.id})">查看</span>
              ${can && i.status!=='已关闭'?'<span class="issue-action-btn issue-action-update" onclick="alert(\'处理功能开发中\')">更新</span>':''}
            </td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>

  <div class="issue-legend">
    <div class="issue-legend-item"><span class="issue-legend-color issue-legend-red"></span> 紧急/重要问题行高亮</div>
    <div class="issue-legend-item"><span class="issue-legend-color issue-legend-blue"></span> 处理中</div>
    <div class="issue-legend-item"><span class="issue-legend-color issue-legend-green"></span> 已关闭</div>
  </div>`;


}

// ===== 核心知识能量池 =====
