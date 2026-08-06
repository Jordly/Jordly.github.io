// modules/handover.js — 交接管理模块
/* ═══════════════════ 交接管理 ═══════════════════ */
function renderHandover(){

  return `

  <div class="module-header">

    <div>

      <div class="module-title">🔄 项目承接规范</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">解决人员变动导致的项目信息断层问题，所有交接留痕可查</div>

    </div>

    <div class="module-actions">

      ${canEdit()?'<button class="btn btn-primary btn-sm" onclick="showNewHandover()">＋ 发起交接</button>':''}

    </div>

  </div>



  <div class="card" style="background:var(--c-yellow-bg);border-color:var(--c-yellow);margin-bottom:16px;">

    <div style="font-size:13px;color:var(--c-yellow);font-weight:500;">💡 项目承接规范说明</div>

    <div style="font-size:12px;color:var(--c-yellow);margin-top:4px;">

      发起交接后，系统自动生成交接清单（基础档案+目标责任+运营现状+进行中课题+未关闭问题）。接收人确认后，系统自动更新负责人字段并归档留痕。

    </div>

  </div>



  <div class="card">

    <div class="card-title">交接记录</div>

    <div class="handover-toolbar">
      <input id="h-search" class="h-search-input" value="${handoverFilter.keyword}" readonly onfocus="this.removeAttribute('readonly')" autocomplete="off" oninput="handoverSetKeyword(this.value)" placeholder="🔍 搜索项目名 / 原负责人 / 接收人">
      <div class="h-filter-tabs">
        <span class="h-filter-tab ${handoverFilter.status==='all'?'active':''}" onclick="handoverSetStatus('all',this)">全部</span>
        <span class="h-filter-tab ${handoverFilter.status==='已完成'?'active':''}" onclick="handoverSetStatus('已完成',this)">已完成</span>
        <span class="h-filter-tab ${handoverFilter.status==='进行中'?'active':''}" onclick="handoverSetStatus('进行中',this)">进行中</span>
        <span class="h-filter-tab ${handoverFilter.status==='已取消'?'active':''}" onclick="handoverSetStatus('已取消',this)">已取消</span>
      </div>
      <div class="handover-toolbar-actions">
        <button class="btn btn-sm" onclick="exportHandovers()">📤 导出</button>
        <button class="btn btn-sm" onclick="renderModule('handover')">🔄 刷新</button>
      </div>
    </div>

    <div id="handover-list-wrap">
    <table class="data-table">

      <thead><tr><th>交接编号</th><th>项目</th><th>交接类型</th><th>原负责人</th><th>接收人</th><th>交接日期</th><th>状态</th><th>交接摘要</th><th>操作</th></tr></thead>

      <tbody id="handover-tbody">

        ${_renderHandoverRows()}

      </tbody>

    </table>
    </div>

  </div>



  <div class="card" style="margin-top:16px;">

    <div class="card-title">📋 项目交接状态总览</div>
    <div style="font-size:12px;color:#64748b;margin-top:-8px;margin-bottom:10px;">基于交接记录动态计算各项目当前PM承接状态</div>

    <table class="data-table">

      <thead><tr><th>项目</th><th>现任负责人</th><th>交接状态</th><th>历史交接次数</th><th>上次交接日期</th><th>备注</th></tr></thead>

      <tbody>

        ${PROJECTS.filter(p=>filterState.workplace==='all'||p.workplace===filterState.workplace).map(p=>{
          const projectHandovers = HANDOVERS.filter(h=>h.projectId===p.id);
          const ongoing = projectHandovers.filter(h=>h.status==='进行中');
          const lastH = projectHandovers.sort((a,b)=>b.date.localeCompare(a.date))[0];

          // 动态判断交接状态
          let statusHtml = '';
          let remark = '';
          if (ongoing.length > 0) {
            const oh = ongoing[0];
            const isOverdue = oh.planDate && new Date(oh.planDate) < new Date();
            if (isOverdue) {
              statusHtml = '<span class="archive-tag" style="background:#fef2f2;color:#dc2626;border:1px solid #fecaca;">⚠️ 已逾期</span>';
              remark = '超过计划日期未完成';
            } else {
              statusHtml = '<span class="archive-tag" style="background:#fff7ed;color:#ea580c;border:1px solid #fed7aa;">🔄 交接中</span>';
              remark = oh.from + ' → ' + oh.to;
            }
          } else if (!lastH) {
            statusHtml = '<span class="archive-tag archive-tag-dp">🔵 无记录</span>';
            remark = '该项目从未有过交接记录';
          } else {
            const daysSince = Math.floor((new Date() - new Date(lastH.date)) / (1000*60*60*24));
            if (daysSince <= 30) {
              statusHtml = '<span class="archive-tag" style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;">✅ 刚完成</span>';
              remark = lastH.completed + '天前完成';
            } else if (daysSince <= 90) {
              statusHtml = '<span class="archive-tag" style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;">💚 稳定运行</span>';
              remark = '已稳定' + Math.floor(daysSince/30) + '个月';
            } else {
              statusHtml = '<span class="archive-tag" style="background:#eff6ff;color:#2563eb;border:1px solid #bfdbfe;">📌 长期稳定</span>';
              remark = '已稳定' + Math.floor(daysSince/30) + '+个月';
            }
          }

          return `<tr>
            <td>${escHtml(p.name)}</td>
            <td>${escHtml(p.pm)}</td>
            <td>${statusHtml}</td>
            <td>${(p.pmHistory||[]).length + projectHandovers.length}</td>
            <td>${lastH?lastH.date:'—'}</td>
            <td style="font-size:12px;color:#64748b;">${remark}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>

  </div>`;

}





// ===== 项目全景弹窗 =====

function showProjectDetail(projectId){

  const p = PROJECTS.find(pp=>pp.id===projectId);

  if(!p) return;

  const op = OPERATIONS.find(o=>o.projectId===p.id);

  const relatedIssues = ISSUES.filter(i=>i.projectId===p.id);

  const modal = document.getElementById("modal-overlay");

  document.getElementById("modal-title").textContent = "项目全景 — " + p.name;

  document.getElementById("modal-body").innerHTML = `

    <div class="project-detail-header detail-header-gradient">

      <div>

        <div class="project-detail-title">${escHtml(p.name)}</div>

        <div class="project-detail-meta">

          <span class="wp-tag wp-${escHtml(p.workplace)}">${escHtml(p.workplace)}</span>

          <span class="badge ${p.serviceMode==='TP项目'?'badge-blue':p.serviceMode==='DP项目'?'badge-green':'badge-orange'}">${escHtml(p.serviceMode)}</span>

          <span>${escHtml(p.category)} · ${escHtml(p.brand)}</span>

          <span>状态：${p.status}</span>

          <span>健康：${p.health}</span>

        </div>

      </div>

      <div style="text-align:right;">

        <button class="btn btn-sm" onclick="editProject('${p.id}')" style="font-size:12px;margin-bottom:8px;">✏️ 编辑</button>
        <div style="font-size:12px;color:var(--c-text-3);">现任负责人</div>

        <div style="font-size:16px;font-weight:600;color:var(--c-primary);">${escHtml(p.pm)}</div>

        <div style="font-size:12px;color:var(--c-text-3);">项目总监：${p.director}</div>

      </div>

    </div>



    <div class="detail-tabs">

      <div class="detail-tab active" onclick="switchDetailTab(this,'info')">📋 基础档案</div>
      
      <div class="detail-tab" onclick="switchDetailTab(this,'target')">🎯 目标约定</div>
      
      <div class="detail-tab" onclick="switchDetailTab(this,'operation')">📊 运营实况</div>
      
      <div class="detail-tab" onclick="switchDetailTab(this,'issue')">⚠️ 课题推进</div>
      
      <div class="detail-tab" onclick="switchDetailTab(this,'history')">📝 交接记录</div>

      <div class="detail-tab" onclick="switchDetailTab(this,'responsibility')">📋 责任边界</div>
    </div>



    <div id="detail-tab-info" class="detail-section">

      <h4>基础信息</h4>

      <div class="detail-grid">

        <div class="detail-item"><div class="detail-label">项目编号</div><div class="detail-value">${escHtml(p.id)}</div></div>

        <div class="detail-item"><div class="detail-label">品牌</div><div class="detail-value">${escHtml(p.brand)}</div></div>

        <div class="detail-item"><div class="detail-label">品类</div><div class="detail-value">${escHtml(p.category)}</div></div>

        <div class="detail-item"><div class="detail-label">项目类型</div><div class="detail-value">${escHtml(p.serviceMode)}</div></div>

        <div class="detail-item"><div class="detail-label">所属职场</div><div class="detail-value">${escHtml(p.workplace)}</div></div>

        <div class="detail-item"><div class="detail-label">客服base</div><div class="detail-value">${escHtml(p.base)}</div></div>

        <div class="detail-item"><div class="detail-label">服务周期</div><div class="detail-value">${escHtml(p.startDate)} ~ ${escHtml(p.endDate)}</div></div>

        <div class="detail-item"><div class="detail-label">服务渠道</div><div class="detail-value">${escHtml(p.platforms)}</div></div>

        <div class="detail-item"><div class="detail-label">服务时间</div><div class="detail-value">${escHtml(p.serviceHours)}</div></div>

        <div class="detail-item"><div class="detail-label">项目状态</div><div class="detail-value">${escHtml(p.status)}</div></div>

      </div>

      ${(p.pmHistory||[]).length>0?`

        <h4 style="margin-top:16px;">历任负责人记录</h4>

        <table class="data-table">

          <thead><tr><th>姓名</th><th>起始时间</th><th>结束时间</th><th>原因</th></tr></thead>

          <tbody>

            ${p.pmHistory.map(h=>`
              <tr><td>${escHtml(h.name)}</td><td>${escHtml(h.from)}</td><td>${escHtml(h.to)}</td><td>${escHtml(h.reason)}</td></tr>
            `).join('')}

          </tbody>

        </table>

      `:''}

    </div>



    <div id="detail-tab-target" class="detail-section" style="display:none;">

      <h4>目标与权责</h4>

      <div class="detail-grid">

        <div class="detail-item"><div class="detail-label">人力配置目标</div><div class="detail-value">${p.fteTarget} 人</div></div>

        <div class="detail-item"><div class="detail-label">SLA响应时长</div><div class="detail-value">≤ ${p.slaResponse} 秒</div></div>

        <div class="detail-item"><div class="detail-label">SLA解决时长</div><div class="detail-value">≤ ${p.slaResolve} 秒</div></div>

        <div class="detail-item"><div class="detail-label">CSat目标</div><div class="detail-value">≥ 4.5</div></div>

        <div class="detail-item"><div class="detail-label">月度成本预算</div><div class="detail-value">¥${((p.costBudget||0)/10000).toFixed(1)}万</div></div>

        <div class="detail-item"><div class="detail-label">月度营收目标</div><div class="detail-value">¥${((p.revenue||0)/10000).toFixed(1)}万</div></div>

      </div>

      <div style="margin-top:12px;padding:12px;background:var(--c-bg);border-radius:var(--radius);font-size:13px;">

        <div style="font-weight:500;margin-bottom:6px;">责任边界说明</div>

        <div style="color:var(--c-text-2);line-height:1.8;">

          <div><b>需求方（品牌方）边界：</b>负责提供准确的产品信息、活动预告、系统接口稳定性保障</div>

          <div><b>承接方（客服团队）边界：</b>负责客服服务质量、响应时效、满意度维护、问题闭环处理</div>

        </div>

      </div>

    </div>



    <div id="detail-tab-operation" class="detail-section" style="display:none;">

      <h4>最新运营数据（${op?op.period:'无'}）</h4>

      ${op?`

      <div class="detail-grid">

        <div class="detail-item"><div class="detail-label">在岗人数</div><div class="detail-value">${op.fteActual} / ${p.fteTarget} 目标</div></div>

        <div class="detail-item"><div class="detail-label">出勤率</div><div class="detail-value" style="color:${op.attendance>=95?'var(--c-green)':'var(--c-yellow)'}">${op.attendance}%</div></div>

        <div class="detail-item"><div class="detail-label">服务单量</div><div class="detail-value">${op.ticketVol.toLocaleString()}</div></div>

        <div class="detail-item"><div class="detail-label">响应时长</div><div class="detail-value" style="color:${op.responseTime<=p.slaResponse?'var(--c-green)':'var(--c-red)'}">${op.responseTime}秒（目标≤${p.slaResponse}）</div></div>

        <div class="detail-item"><div class="detail-label">解决时长</div><div class="detail-value" style="color:${op.resolveTime<=p.slaResolve?'var(--c-green)':'var(--c-red)'}">${op.resolveTime}秒（目标≤${p.slaResolve}）</div></div>

        <div class="detail-item"><div class="detail-label">CSat满意度</div><div class="detail-value" style="color:${op.csat>=4.5?'var(--c-green)':'var(--c-red)'}">${op.csat}（目标≥4.5）</div></div>

        <div class="detail-item"><div class="detail-label">解决率</div><div class="detail-value">${op.resolutionRate}%</div></div>

        <div class="detail-item"><div class="detail-label">回评率</div><div class="detail-value">${op.reviewRate}%</div></div>

      </div>

      <div style="margin-top:8px;">

        <span style="font-size:13px;font-weight:500;">健康状态：</span>

        ${op.health}

        <span style="font-size:12px;color:var(--c-text-3);margin-left:8px;">系统自动计算</span>

      </div>

      `:'<div style="color:var(--c-text-3);padding:16px 0;">暂无运营数据</div>'}

    </div>



    <div id="detail-tab-issue" class="detail-section" style="display:none;">

      <h4>课题与问题列表</h4>

      ${relatedIssues.length>0?`

        <table class="data-table">

          <thead><tr><th>编号</th><th>类型</th><th>描述</th><th>优先级</th><th>状态</th><th>责任人</th></tr></thead>

          <tbody>

            ${relatedIssues.map(i=>`

              <tr>

                <td>I${String(i.id).padStart(3,'0')}</td>

                <td>${i.type}</td>

                <td>${i.desc}</td>

                <td><span class="badge ${i.priority==='紧急'?'badge-red':i.priority==='重要'?'badge-yellow':'badge-gray'}">${i.priority}</span></td>

                <td><span class="badge ${i.status==='已关闭'?'badge-green':'badge-yellow'}">${i.status}</span></td>

                <td>${i.assignee}</td>

              </tr>`).join('')}

          </tbody>

        </table>

      `:'<div style="color:var(--c-text-3);padding:16px 0;">暂无进行中课题</div>'}

    </div>



    <div id="detail-tab-history" class="detail-section" style="display:none;">

      <h4>交接历史记录</h4>

      ${HANDOVERS.filter(h=>h.projectId===p.id).length>0?`

        <table class="data-table">

          <thead><tr><th>交接日期</th><th>原负责人</th><th>接收人</th><th>摘要</th></tr></thead>

          <tbody>

            ${HANDOVERS.filter(h=>h.projectId===p.id).map(h=>`

              <tr><td>${h.date}</td><td>${h.from}</td><td>${h.to}</td><td>${h.summary}</td></tr>

            `).join('')}

          </tbody>

        </table>

      `:'<div style="color:var(--c-text-3);padding:16px 0;">暂无交接记录</div>'}

      ${(p.pmHistory||[]).length>0?`

        <h4 style="margin-top:16px;">历任负责人（档案记录）</h4>

        <table class="data-table">

          <thead><tr><th>姓名</th><th>时间段</th><th>原因</th></tr></thead>

          <tbody>

            ${p.pmHistory.map(h=>`<tr><td>${h.name}</td><td>${h.from} ~ ${h.to}</td><td>${h.reason}</td></tr>`).join('')}

          </tbody>

        </table>

      `:''}

    </div>

${renderResponsibilitySection(p)}
  `;

  modal.classList.remove("hidden");

}



function filterByHealth(health){
  currentHealthFilter = health;
  showPage('projects');
}

function switchDetailTab(el, tabName){

  document.querySelectorAll(".detail-tab").forEach(t=>t.classList.remove("active"));

  el.classList.add("active");

  ["info","target","operation","issue","history","responsibility"].forEach(n => {

    const el2 = document.getElementById("detail-tab-"+n);

    if(el2) el2.style.display = n===tabName ? "block" : "none";

  });

}



// ===== 弹窗控制 =====

function initModal(){

  document.getElementById("modal-close").addEventListener("click", ()=>{

    document.getElementById("modal-overlay").classList.add("hidden");

  });

  document.getElementById("modal-overlay").addEventListener("click", e=>{

    if(e.target === document.getElementById("modal-overlay")){

      document.getElementById("modal-overlay").classList.add("hidden");

    }

  });

}



// ===== 事件绑定 =====

function bindEvents(){

  // 全局搜索

  const searchInput = document.getElementById("global-search");

  if(searchInput){

    searchInput.addEventListener("input", ()=>{

      const kw = searchInput.value.trim().toLowerCase();

      if(!kw) { renderModule(currentModule); return; }

      const filtered = PROJECTS.filter(p=>p.name.toLowerCase().includes(kw)||p.brand.toLowerCase().includes(kw)||p.id.toLowerCase().includes(kw));

      // 简单高亮：在表格中过滤

      document.querySelectorAll(".data-table tbody tr").forEach(tr=>{

        tr.style.display = tr.innerText.toLowerCase().includes(kw)?'':'none';

      });

    });

  }

}



function showAddProject(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "＋ 新增项目";

  body.innerHTML = `

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">项目编号</label>

        <input class="form-input" value="P00${PROJECTS.length+1}" disabled>

      </div>

      <div class="form-group">

        <label class="form-label">项目名称 *</label>

        <input class="form-input" id="f-name" placeholder="请输入项目名称">

      </div>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">品牌</label>

        <input class="form-input" id="f-brand" placeholder="品牌名称">

      </div>

      <div class="form-group">

        <label class="form-label">品类</label>

        <select class="form-select" id="f-category">

          <option>美妆</option><option>家电</option><option>服装</option>

          <option>母婴</option><option>食品</option><option>运动</option>

        </select>

      </div>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">项目类型</label>

        <select class="form-select" id="f-mode">

          <option>TP项目</option><option>DP项目</option><option>BPO项目</option>

        </select>

      </div>

      <div class="form-group">

        <label class="form-label">所属职场</label>

        <select class="form-select" id="f-workplace">

          <option>济南</option><option>淄博</option><option>杭州</option>

        </select>

      </div>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">项目经理</label>

        <input class="form-input" id="f-pm" placeholder="姓名">

      </div>

      <div class="form-group">

        <label class="form-label">项目总监</label>

        <input class="form-input" id="f-director" placeholder="姓名">

      </div>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">客服base职场</label>

        <input class="form-input" id="f-base" placeholder="如：济南职场2F">

      </div>

      <div class="form-group">

        <label class="form-label">服务渠道</label>

        <input class="form-input" id="f-platforms" placeholder="如：天猫,京东,抖音">

      </div>

    </div>

    <div class="form-group">

      <label class="form-label">项目背景与调性</label>

      <textarea class="form-textarea" id="f-background" placeholder="记录项目特殊性、注意事项、甲方沟通偏好等，便于新人快速了解"></textarea>

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">取消</button>

      <button class="btn btn-primary" onclick="doAddProject()">确认新增</button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doAddProject(){

  const name = document.getElementById("f-name").value.trim();

  if(!name) { alert("请填写项目名称"); return; }

  const p = {

    id:"P00"+(PROJECTS.length+1),

    name: name,

    brand: document.getElementById("f-brand").value||"未知",

    category: document.getElementById("f-category").value,

    serviceMode: document.getElementById("f-mode").value,

    workplace: document.getElementById("f-workplace").value,

    pm: document.getElementById("f-pm").value||"未分配",

    director: document.getElementById("f-director").value||"未分配",

    pmHistory:[],

    status:"运营中",

    startDate: new Date().toISOString().slice(0,10),

    endDate:"2026-12-31",

    base: document.getElementById("f-base").value||"",

    platforms: document.getElementById("f-platforms").value||"",

    serviceHours:"09:00-22:00",

    fteTarget:20, slaResponse:120, slaResolve:360,

    costBudget:200000, revenue:220000, profitRate:9.1, health:"🟢"

  };

  PROJECTS.push(p);
  saveProjects();

  OPERATIONS.push({id:OPERATIONS.length+1, projectId:p.id, period:new Date().toISOString().slice(0,7), fteActual:0, attendance:0, ticketVol:0, responseTime:0, resolveTime:0, csat:0, resolutionRate:0, reviewRate:0, health:"🟡"});

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule(currentModule);

  showToast("项目「"+name+"」已新增！");

}



function showAddIssue(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "＋ 上报问题";

  const projectOptions = PROJECTS.map(p=>`<option value="${escHtml(p.id)}">${escHtml(p.name)}</option>`).join("");

  body.innerHTML = `

    <div class="form-group">

      <label class="form-label">关联项目 *</label>

      <select class="form-select" id="i-project">

        <option value="">-- 请选择 --</option>

        ${projectOptions}

      </select>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">问题类型</label>

        <select class="form-select" id="i-type">

          <option>优化</option><option>整改</option><option>客诉</option><option>人员</option><option>系统</option>

        </select>

      </div>

      <div class="form-group">

        <label class="form-label">优先级</label>

        <select class="form-select" id="i-priority">

          <option>一般</option><option>重要</option><option>紧急</option>

        </select>

      </div>

    </div>

    <div class="form-group">

      <label class="form-label">问题描述 *</label>

      <textarea class="form-textarea" id="i-desc" placeholder="请详细描述问题现象、发现时间、影响范围"></textarea>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">责任归属</label>

        <select class="form-select" id="i-resp">

          <option>承接方</option><option>需求方</option><option>共同</option>

        </select>

      </div>

      <div class="form-group">

        <label class="form-label">指派给</label>

        <input class="form-input" id="i-assignee" placeholder="姓名（可跨职场指派）">

      </div>

    </div>

    <div class="form-group">

      <label class="form-label">发现来源</label>

      <select class="form-select" id="i-source">

        <option>监控预警</option><option>人工上报</option><option>品牌反馈</option><option>财务预警</option>

      </select>

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">取消</button>

      <button class="btn btn-primary" onclick="doAddIssue()">确认上报</button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doAddIssue(){

  const pid = document.getElementById("i-project").value;

  const desc = document.getElementById("i-desc").value.trim();

  if(!pid||!desc) { alert("请填写必填项"); return; }

  const p = PROJECTS.find(pp=>pp.id===pid);

  ISSUES.push({

    id: ISSUES.length+1,

    projectId: pid,

    projectName: p?p.name:"",

    type: document.getElementById("i-type").value,

    desc: desc,

    priority: document.getElementById("i-priority").value,

    owner: currentRole==="pm"?"张伟":currentRole==="exec"?"刘洋":"",

    assignee: document.getElementById("i-assignee").value||"未分配",

    status:"待处理",

    source: document.getElementById("i-source").value,

    responsibility: document.getElementById("i-resp").value,

    createdAt: new Date().toISOString().slice(0,10),

    solution:""

  });

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("issue");

  alert("问题已上报！");

}



function showNewHandover(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "🔄 发起交接";

  const projectOptions = PROJECTS.map(p=>`<option value="${escHtml(p.id)}">${escHtml(p.name)}（现任：${escHtml(p.pm)}）</option>`).join("");

  body.innerHTML = `

    <div style="background:var(--c-yellow-bg);padding:10px 14px;border-radius:var(--radius);margin-bottom:14px;font-size:13px;color:var(--c-yellow);">

      💡 发起交接后，系统将自动生成以下交接清单，请逐项确认后转交：

      <div style="margin-top:6px;font-size:12px;color:var(--c-yellow);">✅ 项目基础档案 &nbsp; ✅ 目标与权责 &nbsp; ✅ 当前运营现状 &nbsp; ✅ 进行中课题 &nbsp; ✅ 未关闭问题</div>

    </div>

    <div class="form-group">

      <label class="form-label">交接项目 *</label>

      <select class="form-select" id="h-project">

        <option value="">-- 请选择项目 --</option>

        ${projectOptions}

      </select>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">原负责人</label>

        <input class="form-input" id="h-from" placeholder="自动填充" disabled>

      </div>

      <div class="form-group">

        <label class="form-label">接收人 *</label>

        <input class="form-input" id="h-to" placeholder="请输入接收人姓名" autocomplete="off">

      </div>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">交接类型</label>

        <select class="form-select" id="h-type">
          <option value="人员离职">人员离职</option>
          <option value="内部调动">内部调动</option>
          <option value="临时代理">临时代理</option>
          <option value="项目移交">项目移交</option>
        </select>

      </div>

      <div class="form-group">

        <label class="form-label">计划交接日期</label>

        <input class="form-input" id="h-planDate" type="date">

      </div>

    </div>

    <div class="form-group">

      <label class="form-label">交接范围清单 <span style="font-weight:400;color:var(--c-text-3);font-size:12px;">（勾选已确认交接的内容）</span></label>

      <div class="h-checklist">
        <label><input type="checkbox" class="h-check" value="基础档案资料" checked> 基础档案资料</label>
        <label><input type="checkbox" class="h-check" value="目标与权责" checked> 目标与权责</label>
        <label><input type="checkbox" class="h-check" value="运营现状数据" checked> 运营现状数据</label>
        <label><input type="checkbox" class="h-check" value="进行中课题" checked> 进行中课题</label>
        <label><input type="checkbox" class="h-check" value="未关闭问题" checked> 未关闭问题</label>
        <label><input type="checkbox" class="h-check" value="关键客户/联系人"> 关键客户/联系人</label>
        <label><input type="checkbox" class="h-check" value="特殊注意事项" checked> 特殊注意事项</label>
      </div>

    </div>

    <div class="form-group">

      <label class="form-label">重点交接事项 *</label>

      <textarea class="form-textarea" id="h-keyitems" placeholder="必填：聚焦最关键的交接内容，例如账号权限、待决策事项、客户特殊约定等"></textarea>

    </div>

    <div class="form-group">

      <label class="form-label">遗留问题 / 待跟进</label>

      <textarea class="form-textarea" id="h-pending" placeholder="还有哪些未完成、需要接收人接手跟进的事项（无则留空）"></textarea>

    </div>

    <div class="form-group">

      <label class="form-label">补充说明</label>

      <textarea class="form-textarea" id="h-summary" placeholder="其他补充备注（选填）"></textarea>

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">取消</button>

      <button class="btn btn-primary" onclick="doNewHandover()">确认发起交接</button>

    </div>`;

  // 选项变化时自动填充原负责人

  setTimeout(()=>{

    const sel = document.getElementById("h-project");

    if(sel) sel.addEventListener("change", function(){

      const p = PROJECTS.find(pp=>pp.id===this.value);

      const inp = document.getElementById("h-from");

      if(inp&&p) inp.value = p.pm;

    });

  },100);

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doNewHandover(){

  const pid = document.getElementById("h-project").value;

  const to = document.getElementById("h-to").value.trim();

  const keyItems = document.getElementById("h-keyitems") ? document.getElementById("h-keyitems").value.trim() : "";

  if(!pid||!to) { alert("请填写必填项"); return; }

  if(!keyItems) { alert("请填写「重点交接事项」（必填）"); return; }

  const p = PROJECTS.find(pp=>pp.id===pid);

  const from = p?p.pm:"";

  // 收集勾选的交接范围清单

  const checklist = [];
  document.querySelectorAll('#modal-body .h-check:checked').forEach(c=>checklist.push(c.value));

  const nowDate = new Date().toISOString().slice(0,10);

  // 更新项目负责人

  if(p){ p.pm = to; }

  // 转移未关闭问题

  ISSUES.forEach(i=>{ if(i.projectId===pid&&i.status!=="已关闭") i.assignee = to; });

  // 记录交接历史（结构化字段）

  const newId = HANDOVERS.reduce((m,h)=>Math.max(m,h.id),0) + 1;
  HANDOVERS.push({

    id: newId,

    projectId: pid,

    projectName: p?p.name:"",

    from: from,

    to: to,

    date: nowDate,

    status:"已完成",

    type: document.getElementById("h-type") ? document.getElementById("h-type").value : "人员离职",

    planDate: document.getElementById("h-planDate") ? document.getElementById("h-planDate").value : "",

    checklist: checklist,

    keyItems: keyItems,

    pending: (document.getElementById("h-pending") ? document.getElementById("h-pending").value.trim() : "") || "无",

    summary: (document.getElementById("h-summary") ? document.getElementById("h-summary").value.trim() : "") || keyItems

  });

  // 追加历任负责人记录（时间不再硬编码）

  if(p){ p.pmHistory.push({name:from, from: p.pmStartedAt || nowDate.slice(0,7), to: nowDate.slice(0,7), reason:"人员交接"}); }

  // 持久化（修复刷新丢失 bug，并打通其他模块）

  saveHandovers();
  if(typeof saveProjects==='function') saveProjects();
  if(typeof saveIssues==='function') saveIssues();

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("handover");

  alert("交接已完成！\n原负责人："+from+"\n接收人："+to+"\n系统已自动更新项目负责人、未关闭问题指派并归档留痕，可在「项目基础档案」「风险预警池」弹窗及「系统数据管理」中查看。");

}



// ===== 交接记录：列表渲染 / 搜索 / 筛选 / 导出 / 详情 =====
function _renderHandoverRows(){
  const kw = (handoverFilter.keyword||'').toLowerCase();
  const st = handoverFilter.status;
  const list = HANDOVERS.filter(h=>{
    const matchKw = !kw || (h.projectName+' '+h.from+' '+h.to).toLowerCase().indexOf(kw) >= 0;
    const matchSt = st==='all' || h.status===st;
    return matchKw && matchSt;
  });
  if(list.length===0){
    return '<div style="padding:28px;text-align:center;color:var(--c-text-3);font-size:13px;">没有符合条件的交接记录</div>';
  }
  return list.map(h=>`
    <tr>
      <td>H${String(h.id).padStart(3,'0')}</td>
      <td>${h.projectName||''}</td>
      <td>${h.type||'—'}</td>
      <td>${h.from||''}</td>
      <td>${h.to||''}</td>
      <td>${h.date||''}</td>
      <td><span class="archive-tag archive-tag-dp">${h.status||'已完成'}</span></td>
      <td style="max-width:200px;font-size:12px;">${h.summary||h.keyItems||''}</td>
      <td class="actions">
        <button class="btn btn-sm" onclick="showHandoverDetail(${h.id})">查看详情</button>
      </td>
    </tr>`).join('');
}
function handoverSetKeyword(v){
  handoverFilter.keyword = v;
  var tbody = document.getElementById('handover-tbody');
  if(tbody) tbody.innerHTML = _renderHandoverRows();
}
function handoverSetStatus(s, el){
  handoverFilter.status = s;
  document.querySelectorAll('.h-filter-tab').forEach(function(t){ t.classList.remove('active'); });
  if(el) el.classList.add('active');
  var tbody = document.getElementById('handover-tbody');
  if(tbody) tbody.innerHTML = _renderHandoverRows();
}
function renderHandoverList(){
  var tbody = document.getElementById('handover-tbody');
  if(tbody) tbody.innerHTML = _renderHandoverRows();
}
function exportHandovers(){
  if(HANDOVERS.length===0){ alert('暂无交接记录可导出'); return; }
  var headers = ['交接编号','项目','交接类型','原负责人','接收人','交接日期','计划日期','状态','重点交接事项','遗留问题','交接范围清单','补充说明'];
  var rows = HANDOVERS.map(function(h){
    return [ 'H'+String(h.id).padStart(3,'0'), h.projectName||'', h.type||'', h.from||'', h.to||'', h.date||'', h.planDate||'', h.status||'', h.keyItems||'', h.pending||'', (h.checklist||[]).join('、'), h.summary||'' ];
  });
  var csv = [headers].concat(rows).map(function(r){
    return r.map(function(c){ c = (c==null?'':String(c)); return '"'+c.replace(/"/g,'""')+'"'; }).join(',');
  }).join('\\n');
  var blob = new Blob(['﻿'+csv], {type:'text/csv;charset=utf-8'});
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = '交接记录表_'+new Date().toISOString().slice(0,10)+'.csv';
  a.click();
  setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
}
function showHandoverDetail(id){
  const h = HANDOVERS.find(x=>x.id===id);
  if(!h){ alert('未找到该交接记录'); return; }
  const body = document.getElementById('modal-body');
  document.getElementById('modal-title').textContent = '🔄 交接详情 · H'+String(h.id).padStart(3,'0');
  const checklistHtml = (h.checklist&&h.checklist.length) ? h.checklist.map(c=>'<li>✅ '+c+'</li>').join('') : '<li style="color:var(--c-text-3);">（未登记交接范围）</li>';
  body.innerHTML = `
    <div class="hod-section">
      <div class="hod-section-title">📋 基本信息</div>
      <table class="data-table">
        <tbody>
          <tr><td style="width:130px;color:var(--c-text-3);">项目</td><td>${h.projectName||''}</td></tr>
          <tr><td style="color:var(--c-text-3);">交接类型</td><td>${h.type||'—'}</td></tr>
          <tr><td style="color:var(--c-text-3);">原负责人 → 接收人</td><td>${h.from||''} &nbsp;→&nbsp; ${h.to||''}</td></tr>
          <tr><td style="color:var(--c-text-3);">交接日期</td><td>${h.date||''}</td></tr>
          <tr><td style="color:var(--c-text-3);">计划交接日期</td><td>${h.planDate||'—'}</td></tr>
          <tr><td style="color:var(--c-text-3);">状态</td><td><span class="archive-tag archive-tag-dp">${h.status||'已完成'}</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="hod-section">
      <div class="hod-section-title">✅ 交接范围确认</div>
      <ul class="hod-checklist">${checklistHtml}</ul>
    </div>
    <div class="hod-section">
      <div class="hod-section-title">📝 重点交接事项</div>
      <div class="hod-text">${h.keyItems||h.summary||'（无）'}</div>
    </div>
    <div class="hod-section">
      <div class="hod-section-title">⚠️ 遗留问题 / 待跟进</div>
      <div class="hod-text">${h.pending||'无'}</div>
    </div>
    <div class="form-actions">
      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">关闭</button>
      ${h.projectId?('<button class="btn btn-primary" onclick="showProjectFromHandover(\''+h.projectId+'\')">查看关联项目</button>'):''}
    </div>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}
function showProjectFromHandover(pid){
  document.getElementById('modal-overlay').classList.add('hidden');
  if(typeof showProjectDetail==='function') showProjectDetail(pid);
}
function showIssueDetail(id){
  const i = ISSUES.find(ii=>ii.id===id);
  if(!i) return;
  var isIssue = i.category === '问题';
  var accentColor = isIssue ? '#dc2626' : '#7c3aed';
  var accentBg = isIssue ? '#fef2f2' : '#f5f3ff';
  var idLabel = isIssue ? 'I'+String(id).padStart(3,'0') : 'T'+String(id).padStart(3,'0');

  document.getElementById("modal-title").textContent = (isIssue?'🔍 问题':'📋 课题')+'详情 '+idLabel;

  var html = '<div style="border-top:3px solid '+accentColor+';border-radius:8px;overflow:hidden;">';
  // 基本信息
  html += '<div class="detail-grid" style="margin-bottom:16px;padding-top:12px;">';
  var fields = [
    ['类别', isIssue ? '问题' : '课题'],
    ['关联项目', i.projectName || '--'],
    ['类型', i.type],
    ['优先级', '<span style="color:'+(i.priority==='紧急'?'#dc2626':i.priority==='重要'?'#d97706':'#6b7280')+';font-weight:600;">'+i.priority+'</span>'],
    ['状态', '<span style="color:'+(i.status==='已关闭'?'#10b981':i.status==='待处理'||i.status==='未开始'?'#dc2626':'#06b6d4')+';font-weight:600;">'+i.status+'</span>'],
    ['责任人', i.assignee || '--'],
    ['来源', i.source || '--'],
    ['参与人', i.participants || '--']
  ];
  fields.forEach(function(f){ html += '<div class="detail-item"><div class="detail-label">'+f[0]+'</div><div class="detail-value">'+f[1]+'</div></div>'; });
  html += '</div>';

  // 描述
  html += '<div style="background:'+accentBg+';padding:12px;border-radius:8px;margin-bottom:10px;"><div style="font-size:12px;color:'+accentColor+';font-weight:500;">描述</div><div style="margin-top:4px;font-size:13px;color:#1e293b;">'+i.desc+'</div></div>';

  // 背景
  if(i.background) html += '<div style="background:#f8fafc;padding:12px;border-radius:8px;margin-bottom:10px;"><div style="font-size:12px;color:#64748b;font-weight:500;">背景</div><div style="margin-top:4px;font-size:13px;color:#1e293b;">'+i.background+'</div></div>';

  // 根因
  if(i.rootCause) html += '<div style="background:#f8fafc;padding:12px;border-radius:8px;margin-bottom:10px;"><div style="font-size:12px;color:#64748b;font-weight:500;">根本原因</div><div style="margin-top:4px;font-size:13px;color:#1e293b;">'+i.rootCause+'</div></div>';

  // 方案
  if(i.solution) html += '<div style="background:#f0fdf4;padding:12px;border-radius:8px;margin-bottom:10px;"><div style="font-size:12px;color:#16a34a;font-weight:500;">解决方案</div><div style="margin-top:4px;font-size:13px;color:#1e293b;">'+i.solution+'</div></div>';

  // 里程碑
  if(i.milestone) html += '<div style="background:#f8fafc;padding:12px;border-radius:8px;margin-bottom:10px;"><div style="font-size:12px;color:#64748b;font-weight:500;">关键节点</div><div style="margin-top:4px;font-size:13px;color:#1e293b;">'+i.milestone+'</div></div>';

  // 成果
  if(i.outcome) html += '<div style="background:#f0fdf4;padding:12px;border-radius:8px;margin-bottom:10px;"><div style="font-size:12px;color:#16a34a;font-weight:500;">成果</div><div style="margin-top:4px;font-size:13px;color:#1e293b;">'+i.outcome+'</div></div>';

  html += '</div>';

  // 状态更新表单
  html += (i.status!=='已关闭' ? '<div class="form-group"><label class="form-label">更新状态</label><select class="form-select" id="i-status-update" style="max-width:200px;"><option '+(i.status==='待处理'||i.status==='未开始'?'selected':'')+'>'+(isIssue?'待处理':'未开始')+'</option><option '+(i.status==='处理中'||i.status==='进行中'?'selected':'')+'>'+(isIssue?'处理中':'进行中')+'</option><option '+(i.status==='待验收'?'selected':'')+'>待验收</option><option '+(i.status==='已关闭'?'selected':'')+'>已关闭</option></select></div><div class="form-group"><label class="form-label">填写方案</label><textarea class="form-textarea" id="i-solution" placeholder="记录处理措施">'+(i.solution||'')+'</textarea></div><div class="form-actions"><button class="btn" onclick="document.getElementById(\'modal-overlay\').classList.add(\'hidden\')">关闭</button><button class="btn btn-primary" onclick="doUpdateIssue('+id+')">保存</button></div>' : '<div class="form-actions"><button class="btn" onclick="document.getElementById(\'modal-overlay\').classList.add(\'hidden\')">关闭</button></div>');

  document.getElementById("modal-body").innerHTML = html;
  document.getElementById("modal-overlay").classList.remove("hidden");
}



function doUpdateIssue(id){

  const i = ISSUES.find(ii=>ii.id===id);

  if(!i) return;

  const newStatus = document.getElementById("i-status-update")?document.getElementById("i-status-update").value:i.status;

  const newSolution = document.getElementById("i-solution")?document.getElementById("i-solution").value:"";

  i.status = newStatus;

  i.solution = newSolution;

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("issue");

  alert("课题 I"+String(id).padStart(3,"0")+" 已更新！");

}



// ===== 通用 XLSX/CSV 导出函数 =====
function exportToXlsx(filename, headers, rows) {
  try {
    var wsData = [headers, ...rows];
    var ws = XLSX.utils.aoa_to_sheet(wsData);
    ws['!cols'] = headers.map(function(h) { return { wch: Math.max((h||'').length * 2 + 4, 16) }; });
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, filename);
    if (typeof showToast === 'function') showToast('已导出：' + filename);
  } catch(e) {
    alert('导出 Excel 失败：' + e.message);
  }
}

function exportToCSV(filename, headers, rows) {
  try {
    var BOM = '\uFEFF';
    var csvRows = [headers, ...rows].map(function(r) {
      return r.map(function(c) { return '"' + (c||'').toString().replace(/"/g, '""') + '"'; }).join(',');
    });
    var csvContent = BOM + csvRows.join('\n');
    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    if (typeof showToast === 'function') showToast('已导出：' + filename);
  } catch(e) {
    alert('导出 CSV 失败：' + e.message);
  }
}

function showExportDialog(headers, rows, baseFilename, title) {
  window.__expHeaders = headers;
  window.__expData = rows;
  window.__expFile = baseFilename;
  var overlay = document.getElementById('modal-overlay');
  var titleEl = document.getElementById('modal-title');
  var body = document.getElementById('modal-body');
  if (!overlay || !titleEl || !body) {
    // fallback：直接导出 CSV
    exportToCSV(baseFilename + '.csv', headers, rows);
    return;
  }
  titleEl.textContent = '导出：' + (title || '数据');
  body.innerHTML = '<div style="padding:24px;text-align:center;">' +
    '<div style="font-size:15px;margin-bottom:20px;color:#1e293b;font-weight:600;">请选择导出格式</div>' +
    '<div style="display:flex;gap:16px;justify-content:center;margin-bottom:16px;">' +
      '<button class="btn btn-primary" style="padding:14px 28px;font-size:14px;" onclick="doExportCSV()">📥 导出 CSV</button>' +
      '<button class="btn" style="padding:14px 28px;font-size:14px;background:#1d6f42;color:#fff;border:none;" onclick="doExportXLSX()">📊 导出 Excel</button>' +
    '</div>' +
    '<div style="font-size:12px;color:#94a3b8;">CSV 兼容更多软件 | Excel 支持格式美化</div>' +
  '</div>';
  overlay.classList.remove('hidden');
}

window.doExportCSV = function() {
  var h = window.__expHeaders, r = window.__expData, f = window.__expFile;
  exportToCSV(f + '.csv', h, r);
  var ov = document.getElementById('modal-overlay');
  if (ov) ov.classList.add('hidden');
};
window.doExportXLSX = function() {
  var h = window.__expHeaders, r = window.__expData, f = window.__expFile;
  exportToXlsx(f + '.xlsx', h, r);
  var ov = document.getElementById('modal-overlay');
  if (ov) ov.classList.add('hidden');
};
// ===== 结束通用导出函数 =====


function exportDashboard(){
  const filtered = getFilteredProjects();
  const headers = ['项目编号','项目名称','健康度','状态','职场','负责人','平台','品类','品牌'];
  const rows = filtered.map(p => [
    p.id, 
    p.name, 
    p.healthScore||'', 
    p.status||'进行中', 
    p.workplace||'', 
    p.pm||'',
    (p.platforms||'').split(/[,，、]/).map(function(s){return s.trim();}).filter(Boolean).join(', '),
    p.category||'',
    p.brand||''
  ]);
  showExportDialog(headers, rows, `项目总览_${new Date().toISOString().slice(0,10)}`, '项目总览看板');
}





// 从 KPI_HISTORY 计算真实趋势
function calculateKpiTrend(fieldName) {
  if (KPI_HISTORY.length < 2) return { trend: '0%', trendUp: true, areaColor: '#FFD700', strokeColor: '#FFD700' };
  var current = KPI_HISTORY[KPI_HISTORY.length - 1][fieldName];
  var previous = KPI_HISTORY[KPI_HISTORY.length - 2][fieldName];
  if (previous === 0) previous = 1;
  var change = ((current - previous) / previous * 100).toFixed(1);
  return {
    trend: (change >= 0 ? '+' : '') + change + '%',
    trendUp: change >= 0,
    areaColor: change >= 0 ? 'rgba(0,207,167,0.2)' : 'rgba(255,107,107,0.2)',
    strokeColor: change >= 0 ? '#00C9A7' : '#FF6B6B'
  };
}

// 下载示例数据 CSV 文件
function downloadSampleData() {
  var SAMPLE_DATA = {
    '客服配置数据': [
      ['角色', '人数', '占比(%)', '职场'],
      ['售前客服', '68', '37', 'all'],
      ['售后客服', '52', '28', 'all'],
      ['综合客服', '45', '24', 'all'],
      ['客服管理', '14', '8', 'all'],
      ['数据专员', '7', '4', 'all']
    ],
    '工作量数据': [
      ['工作类型', '数量', '占比(%)', '职场'],
      ['订单处理', '625', '100', 'all'],
      ['退款处理', '342', '55', 'all'],
      ['投诉处理', '198', '32', 'all'],
      ['换货跟进', '156', '25', 'all']
    ],
    'KPI历史数据': [
      ['月份', '销售额', '成本', '费效比', '目标达成率(%)'],
      ['2026-01', '450000', '380000', '1.18', '92.0'],
      ['2026-02', '480000', '400000', '1.20', '93.5'],
      ['2026-03', '510000', '420000', '1.21', '94.8'],
      ['2026-04', '490000', '410000', '1.20', '94.0'],
      ['2026-05', '520000', '430000', '1.21', '95.0']
    ]
  };
  var lines = [];
  lines.push('示例数据说明：请将此文件中的数据导入系统，支持 CSV/XLSX/XLS 格式');
  lines.push('');
  Object.keys(SAMPLE_DATA).forEach(function(sheetName) {
    lines.push('=== ' + sheetName + ' ===');
    SAMPLE_DATA[sheetName].forEach(function(r) { lines.push(r.join(',')); });
    lines.push('');
    lines.push('');
  });
  var bom = '\uFEFF';
  var blob = new Blob([bom + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = '示例数据_客服看板.csv';
  a.click();
  URL.revokeObjectURL(url);
  showToast('✅ 示例数据已下载，请查看 CSV 文件');
}

// 导入 Excel/CSV 数据（支持 .xlsx / .xls / .csv）
function importData() {
  var input = document.createElement('input');
  input.type = 'file';
  input.accept = '.csv,.xlsx,.xls';
  input.onchange = function(e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev) {
      try {
        var data = new Uint8Array(ev.target.result);
        var workbook = XLSX.read(data, { type: 'array' });
        var imported = { staff: 0, workload: 0, kpi: 0 };
        workbook.SheetNames.forEach(function(name) {
          var sheet = workbook.Sheets[name];
          var json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          var lowerName = name.toLowerCase();
          if (lowerName.indexOf('客服配置') !== -1 || lowerName.indexOf('staff') !== -1 || lowerName.indexOf('配置') !== -1) {
            for (var i = 1; i < json.length; i++) {
              var row = json[i]; if (!row || !row[0]) continue;
              var idx = -1;
              for (var si = 0; si < STAFF_CONFIG.length; si++) { if (STAFF_CONFIG[si].role === row[0]) { idx = si; break; } }
              var item = {
                id: idx >= 0 ? STAFF_CONFIG[idx].id : 'SC' + Date.now() + i,
                role: String(row[0]),
                count: parseInt(row[1]) || 0,
                pct: parseInt(row[2]) || 0,
                workplace: String(row[3] || 'all'),
                updatedAt: new Date().toISOString().slice(0,10),
                updatedBy: (typeof CURRENT_USER !== 'undefined' && CURRENT_USER) ? CURRENT_USER.username : 'admin'
              };
              if (idx >= 0) STAFF_CONFIG[idx] = item; else STAFF_CONFIG.push(item);
              imported.staff++;
            }
          } else if (lowerName.indexOf('工作量') !== -1 || lowerName.indexOf('workload') !== -1 || lowerName.indexOf('工作') !== -1) {
            for (var i2 = 1; i2 < json.length; i2++) {
              var row2 = json[i2]; if (!row2 || !row2[0]) continue;
              var widx = -1;
              for (var wi = 0; wi < WORKLOAD_DATA.length; wi++) { if (WORKLOAD_DATA[wi].name === row2[0]) { widx = wi; break; } }
              var witem = {
                id: widx >= 0 ? WORKLOAD_DATA[widx].id : 'WL' + Date.now() + i2,
                name: String(row2[0]),
                count: parseInt(row2[1]) || 0,
                ratio: parseInt(row2[2]) || 0,
                workplace: String(row2[3] || 'all'),
                updatedAt: new Date().toISOString().slice(0,10),
                updatedBy: (typeof CURRENT_USER !== 'undefined' && CURRENT_USER) ? CURRENT_USER.username : 'admin'
              };
              if (widx >= 0) WORKLOAD_DATA[widx] = witem; else WORKLOAD_DATA.push(witem);
              imported.workload++;
            }
          } else if (lowerName.indexOf('kpi') !== -1 || lowerName.indexOf('历史') !== -1 || lowerName.indexOf('趋势') !== -1 || lowerName.indexOf('销售') !== -1) {
            for (var i3 = 1; i3 < json.length; i3++) {
              var row3 = json[i3]; if (!row3 || !row3[0]) continue;
              var kitem = {
                id: 'KH' + Date.now() + i3,
                date: String(row3[0]),
                revenue: parseInt(row3[1]) || 0,
                cost: parseInt(row3[2]) || 0,
                profitRate: parseFloat(row3[3]) || 0,
                targetRate: parseFloat(row3[4]) || 0,
                workplace: 'all',
                updatedAt: new Date().toISOString().slice(0,10),
                updatedBy: (typeof CURRENT_USER !== 'undefined' && CURRENT_USER) ? CURRENT_USER.username : 'admin'
              };
              KPI_HISTORY.push(kitem);
              imported.kpi++;
            }
          }
        });
        localStorage.setItem('chansee_staff_config', JSON.stringify(STAFF_CONFIG));
        localStorage.setItem('chansee_workload_data', JSON.stringify(WORKLOAD_DATA));
        localStorage.setItem('chansee_kpi_history', JSON.stringify(KPI_HISTORY));
        if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) {
          CloudBaseSync.saveAll();
        }
        showToast('✅ 导入成功！客服配置+' + imported.staff + '条，工作量+' + imported.workload + '条，KPI历史+' + imported.kpi + '条');
        renderDashboard();
      } catch(err) {
        showToast('❌ 导入失败：' + err.message);
        console.error('导入错误:', err);
      }
    };
    reader.readAsArrayBuffer(file);
  };
  input.click();
}


// ===== 项目运维调研 =====

// 全局筛选状态

var SAT_FILTER = { projectId:'', scoreRange:'', evaluator:'' };



