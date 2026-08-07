// modules/cost.js — 成本与利润管理模块
/* ═══════════════════ 成本与利润管理 ═══════════════════ */
function renderCost(){

  const all = getFilteredProjects();
  // 真实数据：营收、成本预算来自项目档案（中台），利润率用真实 profitRate 字段
  const totalRevenue = all.reduce((s,p)=>s+(p.revenue||0),0);
  const totalBudget = all.reduce((s,p)=>s+(p.costBudget||0),0);
  // 选项A：实际成本即成本预算（预算即实际）
  const totalActual = totalBudget;
  const avgProfit = all.length ? all.reduce((s,p)=>s+(parseFloat(p.profitRate)||0),0)/all.length : 0;
  const warnCount = all.filter(p=> (parseFloat(p.profitRate)||0) < 5).length;

  // 卡片数据（极光渐变风格）
  const cards = [
    { label:'总营收（月度）', value:'¥'+(totalRevenue/10000).toFixed(1)+'万', sub: all.length+'个项目合计', cls:'revenue' },
    { label:'总成本（月度）', value:'¥'+(totalActual/10000).toFixed(1)+'万', sub:'预算内成本', cls:'cost' },
    { label:'平均利润率', value:avgProfit.toFixed(1)+'%', sub:'基于项目真实利润率', cls:'profit' },
    { label:'预警项目数', value:warnCount+'', sub:warnCount>0?'需立即关注':'全部正常', cls:warnCount>0?'red':'green' }
  ];

  return `
  ${renderFilterBar()}

  <div class="module-header">

    <div>

      <div class="module-title">💰 成本与利润管理</div>
      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">数据来源：系统数据管理（中台）项目档案 · 利润率低于5%自动预警</div>

    </div>

    <div class="cost-actions">
      <button class="btn btn-sm" onclick="exportCost()">📥 导出</button>
      <button class="btn btn-sm btn-primary" onclick="addCostRecord()">➕ 录入数据</button>
      <button class="btn btn-sm" onclick="renderModule('cost')">🔄 刷新</button>
    </div>

  </div>

  <div class="profit-metric-grid">
    ${cards.map((c)=>`
    <div class="profit-metric-card profit-card-${c.cls}">
      <div class="pmc-label">${c.label}</div>
      <div class="pmc-value">${c.value}</div>
      ${c.sub?'<div class="pmc-sub">'+c.sub+'</div>':''}
    </div>`).join('')}
  </div>

    <div class="card">
    <div class="cost-table-header">
      <div style="padding:14px 18px;font-weight:500;font-size:14px;">📊 项目利润明细</div>
    </div>
    <div class="profit-table-wrap">
    <table class="data-table profit-table profit-table-v2">
      <thead><tr><th>项目</th><th>营收(万)</th><th>预算成本(万)</th><th>实际成本(万)</th><th>利润率</th><th>预警</th><th>操作</th></tr></thead>
      <tbody>
        ${all.map(p=>{
          const pr = parseFloat(p.profitRate||0);
          const actualCost = p.costBudget||0;
          let rowCls = 'profit-row-normal';
          if (pr < 5) rowCls = 'profit-row-danger';
          else if (pr < 10) rowCls = 'profit-row-warning';
          let badge = '<span class="profit-badge profit-badge-green">正常盈利</span>';
          if (pr < 5) badge = '<span class="profit-badge profit-badge-red">利润率过低</span>';
          else if (pr < 10) badge = '<span class="profit-badge profit-badge-yellow">关注</span>';
          const prColor = pr>=10 ? '#10b981' : (pr<0 ? '#ef4444' : '#f59e0b');
          return `<tr class="${rowCls}">
            <td>${p.name||'未命名'}</td>
            <td>¥${((p.revenue||0)/10000).toFixed(1)}</td>
            <td>¥${((p.costBudget||0)/10000).toFixed(1)}</td>
            <td>¥${(actualCost/10000).toFixed(1)}</td>
            <td style="color:${prColor};font-weight:600;">${pr.toFixed(1)}%</td>
            <td>${badge}</td>
            <td><button class="cost-edit-link" onclick="editCostRecord('${p.id}')">✏️ 编辑</button></td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
    </div>
  </div>

  <div class="profit-legend">
    <span class="profit-legend-item"><span class="profit-legend-dot" style="background:#10b981"></span>正常盈利（≥10%）</span>
    <span class="profit-legend-item"><span class="profit-legend-dot" style="background:#f59e0b"></span>需关注（5%-10%）</span>
    <span class="profit-legend-item"><span class="profit-legend-dot" style="background:#ef4444"></span>利润率过低/为负（<5%）</span>
  </div>`;

}

// 编辑/录入成本与利润数据（写入中台项目档案）
function editCostRecord(pid){
  var all = PROJECTS;
  var selHtml = pid ? '' : '<div style="margin-bottom:14px;"><label style="display:block;font-size:13px;color:#334155;margin-bottom:6px;font-weight:500;">选择项目</label><select id="cc-project" style="width:100%;padding:9px 12px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;">' + all.map(function(p){return '<option value="'+p.id+'" '+(pid===p.id?'selected':'')+'>'+(p.name||p.id)+'</option>';}).join('') + '</select></div>';
  var target = pid ? all.find(function(p){return p.id===pid;}) : all[0];
  if(!target){ showConfirmModal('暂无项目数据，请先在系统数据管理录入项目。','提示',function(){}); return; }
  var body = selHtml
    + '<div style="margin-bottom:12px;"><label style="display:block;font-size:13px;color:#334155;margin-bottom:6px;font-weight:500;">营收（万）</label><input type="number" id="cc-revenue" value="'+((target.revenue||0)/10000).toFixed(1)+'" style="width:100%;padding:9px 12px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;"></div>'
    + '<div style="margin-bottom:12px;"><label style="display:block;font-size:13px;color:#334155;margin-bottom:6px;font-weight:500;">成本预算（万）</label><input type="number" id="cc-cost" value="'+((target.costBudget||0)/10000).toFixed(1)+'" style="width:100%;padding:9px 12px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;"></div>'
    + '<div style="margin-bottom:12px;"><label style="display:block;font-size:13px;color:#334155;margin-bottom:6px;font-weight:500;">利润率（%）</label><input type="number" id="cc-profit" value="'+(target.profitRate!=null?target.profitRate:'')+'" style="width:100%;padding:9px 12px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;"></div>'
    + '<div style="font-size:12px;color:#94a3b8;background:#f8fafc;padding:8px 12px;border-radius:8px;">修改将同步至「系统数据管理 · 项目数据表」，并自动备份到云端。</div>';
  showCustomModal('编辑成本与利润数据', body, function(){
    var pid2 = pid || document.getElementById('cc-project').value;
    var p = all.find(function(x){return x.id===pid2;});
    if(!p){ return; }
    var rev = parseFloat(document.getElementById('cc-revenue').value)*10000;
    var cost = parseFloat(document.getElementById('cc-cost').value)*10000;
    var profit = parseFloat(document.getElementById('cc-profit').value);
    if(isNaN(rev)||isNaN(cost)||isNaN(profit)){ showConfirmModal('请填写有效的数字！','输入有误',function(){}); return; }
    p.revenue = Math.round(rev);
    p.costBudget = Math.round(cost);
    p.profitRate = profit;
    saveProjects();
    if(window.CloudBaseSync) window.CloudBaseSync.saveAll();
    showConfirmModal('保存成功！数据已同步至中台并备份云端。','保存成功',function(){ renderModule('cost'); });
  });
}
function addCostRecord(){ editCostRecord(null); }

// 导出成本与利润数据
function exportCost(){
  var all = getFilteredProjects();
  var rows = [['项目','营收(万)','预算成本(万)','实际成本(万)','利润率(%)','预警状态']];
  all.forEach(function(p){
    var pr = parseFloat(p.profitRate||0);
    var warn = pr<5?'利润率过低':(pr<10?'关注':'正常盈利');
    rows.push([p.name||'', (p.revenue||0)/10000, (p.costBudget||0)/10000, (p.costBudget||0)/10000, pr, warn]);
  });
  var csv = '﻿' + rows.map(function(r){return r.join(',');}).join('\n');
  var blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = '成本与利润数据_'+new Date().toISOString().slice(0,10)+'.csv';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showConfirmModal('已导出 '+all.length+' 条项目数据（CSV文件）。','导出成功',function(){});
}




// ===== 服务与进度追踪（新版 2026-06-09） =====

// 计算项目健康等级
// 健康度等级阈值（支持自定义，存localStorage）
function getHealthLevels() {
  try {
    var saved = localStorage.getItem("chansee_health_levels");
    if (saved) {
      var p = JSON.parse(saved);
      if (p && typeof p.excellent === "number" && typeof p.normal === "number" && typeof p.warning === "number") return p;
    }
  } catch(e) {}
  return { excellent: 90, normal: 75, warning: 60 };
}

function getHealthLevel(score) {
  var lv = getHealthLevels();
  if (score >= lv.excellent) return { level: "优质健康店", class: "excellent", icon: "🟢" };
  if (score >= lv.normal) return { level: "平稳常规店", class: "normal", icon: "🟡" };
  if (score >= lv.warning) return { level: "风险预警店", class: "warning", icon: "🟠" };
  return { level: "高危问题店", class: "danger", icon: "🔴" };
}

// 编辑健康度等级阈值
function editHealthLevels() {
  var lv = getHealthLevels();
  var html = '<div style="padding:4px 0;">'
    + '<div style="margin-bottom:14px;font-size:13px;color:#64748b;line-height:1.5;">设置各等级的最低分数，保存后立即生效。</div>'
    + '<div style="margin-bottom:12px;"><label style="display:block;font-size:13px;color:#334155;margin-bottom:6px;font-weight:500;">🟢 优质健康店 最低分</label><input type="number" id="hl-excellent" value="' + lv.excellent + '" style="width:100%;padding:9px 12px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;"></div>'
    + '<div style="margin-bottom:12px;"><label style="display:block;font-size:13px;color:#334155;margin-bottom:6px;font-weight:500;">🟡 平稳常规店 最低分</label><input type="number" id="hl-normal" value="' + lv.normal + '" style="width:100%;padding:9px 12px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;"></div>'
    + '<div style="margin-bottom:12px;"><label style="display:block;font-size:13px;color:#334155;margin-bottom:6px;font-weight:500;">🟠 风险预警店 最低分</label><input type="number" id="hl-warning" value="' + lv.warning + '" style="width:100%;padding:9px 12px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;"></div>'
    + '<div style="font-size:12px;color:#94a3b8;background:#f8fafc;padding:8px 12px;border-radius:8px;">注：高危问题店为低于风险预警店最低分的区间，无需单独设置。</div>'
    + '</div>';
  showCustomModal("编辑健康度等级", html, function() {
    var e = parseInt(document.getElementById("hl-excellent").value);
    var n = parseInt(document.getElementById("hl-normal").value);
    var w = parseInt(document.getElementById("hl-warning").value);
    if (isNaN(e) || isNaN(n) || isNaN(w) || e <= n || n <= w || w <= 0) {
      showConfirmModal("分数设置不合理！\n要求：优质 > 平稳 > 风险预警 > 0（例如 90 > 75 > 60）", "设置失败", function(){});
      return;
    }
    localStorage.setItem("chansee_health_levels", JSON.stringify({ excellent: e, normal: n, warning: w }));
    showConfirmModal("健康度等级已更新！\n页面将立即刷新显示新标准。", "保存成功", function() {
      if (currentModule === "service") renderModule("service");
    });
  });
}

// 渲染四大卡片概览
function renderHealthOverviewCards(projects) {
  const projectHealth = projects.map(p => {
    const h = HEALTH_DATA.find(hh => hh.projectId === p.id && hh.period === "2026-05");
    const score = h ? h.overallScore : 0;
    const healthInfo = score > 0 ? getHealthLevel(score) : { level: "未评估", class: "unrated", icon: "⚪" };
    return { project: p, health: h, score, ...healthInfo };
  });

  const grouped = {
    excellent: projectHealth.filter(x => x.class === "excellent"),
    normal: projectHealth.filter(x => x.class === "normal"),
    warning: projectHealth.filter(x => x.class === "warning"),
    danger: projectHealth.filter(x => x.class === "danger")
  };

  function countBy(arr, key) {
    const map = {};
    arr.forEach(x => {
      const val = x.project[key];
      if (val) map[val] = (map[val] || 0) + 1;
    });
    return Object.entries(map).map(([k, v]) => k + "(" + v + ")").join(" · ");
  }

  function renderCard(className, icon, title, items) {
    const count = items.length;
    const workplaces = count > 0 ? countBy(items, "workplace") : "";
    const types = count > 0 ? countBy(items, "serviceMode") : "";
    return `
    <div class="health-overview-card ${className}" onclick="toggleHealthCard('${className}')">
      <div class="hoc-header">
        <div class="hoc-icon">${icon}</div>
        <div class="hoc-title">${title}</div>
      </div>
      <div class="hoc-count">${count}<span class="hoc-unit">家</span></div>
      ${count > 0 ? `
        <div class="hoc-stats">
          <div class="hoc-stat-item">📍 ${workplaces || "无"}</div>
          <div class="hoc-stat-item">🏷️ ${types || "无"}</div>
        </div>
        <div class="hoc-footer">查看明细 →</div>
      ` : '<div class="hoc-empty">暂无数据</div>'}
    </div>`;
  }

  return `
  <div class="health-overview-cards">
    ${renderCard("excellent", "🟢", "优质健康店", grouped.excellent)}
    ${renderCard("normal", "🟡", "平稳常规店", grouped.normal)}
    ${renderCard("warning", "🟠", "风险预警店", grouped.warning)}
    ${renderCard("danger", "🔴", "高危问题店", grouped.danger)}
  </div>
  <div id="health-card-detail" style="display:none;"></div>`;
}

// 渲染健康预警摘要
function renderHealthWarningSummary(healthData) {
  if (!healthData) return '<div style="padding:12px;color:var(--c-text-3);">暂无健康度数据</div>';
  const badDims = healthData.dimensions.filter(d => d.score < 85).sort((a, b) => a.score - b.score);
  if (badDims.length === 0) {
    return `
    <div class="health-warning-summary healthy">
      <div class="hws-icon">✅</div>
      <div class="hws-text">各维度表现良好，无明显风险点</div>
    </div>`;
  }
  const reasons = badDims.map(d => {
    const badItems = d.items.filter(i => i.score < 85);
    const details = badItems.length > 0
      ? badItems.map(i => i.name + ": 实际" + i.actual + "，目标" + i.target).join("<br>")
      : "整体维度得分偏低";
    return `<div class="hws-reason">
      <div class="hws-reason-title ${d.level}">${d.name}(${d.score}分·${d.level})</div>
      <div class="hws-reason-details">${details}</div>
    </div>`;
  }).join("");
  return `
  <div class="health-warning-summary warning">
    <div class="hws-header">
      <span class="hws-icon">⚠️</span>
      <span class="hws-title">健康预警摘要</span>
    </div>
    ${reasons}
  </div>`;
}

// 分数颜色
function scoreColor(s) {
  if (s >= 90) return "var(--c-green)";
  if (s >= 75) return "var(--c-yellow)";
  if (s >= 60) return "var(--c-orange)";
  return "var(--c-red)";
}
function scoreBg(s) {
  if (s >= 90) return "var(--c-green-bg)";
  if (s >= 75) return "var(--c-yellow-bg)";
  if (s >= 60) return "var(--c-orange-bg)";
  return "var(--c-red-bg)";
}

// 渲染评分明细表
function renderHealthScoreTable(projects) {
  const sortState = window._healthSort || { key: "score", dir: "desc" };
  function sortProjects(list, key, dir) {
    return list.sort((a, b) => {
      let va, vb;
      if (key === "score") { va = a.score; vb = b.score; }
      else if (key === "name") { va = a.project.name; vb = b.project.name; }
      else if (key === "workplace") { va = a.project.workplace; vb = b.project.workplace; }
      else {
        va = a.health ? (a.health.dimensions.find(d => d.key === key) || { score: 0 }).score : 0;
        vb = b.health ? (b.health.dimensions.find(d => d.key === key) || { score: 0 }).score : 0;
      }
      if (dir === "asc") return va > vb ? 1 : -1;
      return va < vb ? 1 : -1;
    });
  }
  const sorted = sortProjects([...projects], sortState.key, sortState.dir);
  const top6 = sorted.slice(0, 6);
  function sortArrow(key) {
    if (sortState.key !== key) return "↕️";
    return sortState.dir === "desc" ? "↓" : "↑";
  }
  return `
  <div class="card" style="margin-top:16px;">
    <div style="padding:14px 18px;border-bottom:1px solid var(--c-border-light);font-weight:500;font-size:14px;">📊 店铺综合评分明细（前6名）</div>
    <div style="overflow-x:auto;">
      <table class="data-table health-score-table">
        <thead>
          <tr>
            <th style="width:50px;">排名</th>
            <th style="width:50px;">对比</th>
            <th onclick="sortHealthTable('name')" style="cursor:pointer;">店铺名称 ${sortArrow("name")}</th>
            <th onclick="sortHealthTable('workplace')" style="cursor:pointer;">职场 ${sortArrow("workplace")}</th>
            <th>类型</th>
            <th onclick="sortHealthTable('score')" style="cursor:pointer;">综合 ${sortArrow("score")}</th>
            <th onclick="sortHealthTable('manpower')" style="cursor:pointer;">人力 ${sortArrow("manpower")}</th>
            <th onclick="sortHealthTable('service')" style="cursor:pointer;">服务 ${sortArrow("service")}</th>
            <th onclick="sortHealthTable('sales')" style="cursor:pointer;">销售 ${sortArrow("sales")}</th>
            <th onclick="sortHealthTable('returns')" style="cursor:pointer;">退货 ${sortArrow("returns")}</th>
            <th onclick="sortHealthTable('risk')" style="cursor:pointer;">风险 ${sortArrow("risk")}</th>
            <th onclick="sortHealthTable('cost')" style="cursor:pointer;">成本 ${sortArrow("cost")}</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${top6.map((x, idx) => {
            const p = x.project;
            const h = x.health;
            const rankClass = idx < 3 ? "top3" : (idx >= top6.length - 3 ? "bottom3" : "");
            const rankIcon = idx === 0 ? "🥇" : (idx === 1 ? "🥈" : (idx === 2 ? "🥉" : (idx + 1)));
            return `<tr class="${rankClass}">
              <td class="rank-col">${rankIcon}</td>
              <td><input type="checkbox" onchange="toggleCompareCheckbox('${p.id}')" ${(window._selectedCompareIds||[]).indexOf(p.id)>=0?'checked':''} style="width:16px;height:16px;accent-color:#0ABAB5;cursor:pointer;"></td>
              <td>${escHtml(p.name)}</td>
              <td>${escHtml(p.workplace)}</td>
              <td>${escHtml(p.serviceMode)}</td>
              <td class="score-col" style="background:${scoreBg(x.score)};color:${scoreColor(x.score)};font-weight:600;">${x.score > 0 ? x.score : "--"}</td>
              ${h ? h.dimensions.map(d => {
                const c = scoreColor(d.score);
                const bg = scoreBg(d.score);
                return `<td class="score-col" style="background:${bg};color:${c}">${d.score}</td>`;
              }).join("") : "<td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>"}
              <td><button class="btn btn-sm" onclick="toggleHealthDetail('${p.id}')">查看</button></td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
    ${(window._selectedCompareIds||[]).length === 2 ? (function(){
      var cids = window._selectedCompareIds;
      var cp1 = PROJECTS.find(function(pp){return pp.id===cids[0];});
      var cp2 = PROJECTS.find(function(pp){return pp.id===cids[1];});
      if(!cp1||!cp2) return '';
      var ch1 = HEALTH_DATA.find(function(hh){return hh.projectId===cp1.id;});
      var ch2 = HEALTH_DATA.find(function(hh){return hh.projectId===cp2.id;});
      var cs1 = ch1 ? ch1.overallScore : 0;
      var cs2 = ch2 ? ch2.overallScore : 0;
      return '<div style="display:flex;align-items:center;gap:16px;padding:10px 16px;background:linear-gradient(135deg,#0B9B96,#3b82f6);color:#fff;border-radius:0 0 12px 12px;font-size:13px;">'
        +'<span>已选: <b>'+cp1.name+'</b> vs <b>'+cp2.name+'</b></span>'
        +'<span style="margin-left:auto;font-weight:600;">'+cs1+' vs '+cs2+'</span>'
        +'<button class="btn btn-sm" style="background:rgba(255,255,255,0.2);color:#fff;border:1px solid rgba(255,255,255,0.3);" onclick="openComparePanel()">开始对比</button>'
        +'<button onclick="window._selectedCompareIds=[];renderModule(\'operation\')" style="background:rgba(255,255,255,0.15);border:none;color:#fff;width:24px;height:24px;border-radius:50%;cursor:pointer;font-size:14px;line-height:24px;text-align:center;">x</button>'
        +'</div>';
    })() : ''}
  </div>`;
}

// 渲染健康度等级定义
function renderHealthLevelDefinition() {
  return `
  <div class="card" style="margin-top:16px;padding:14px 18px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <div style="font-size:13px;font-weight:500;">📋 健康度等级定义</div>
      <button class="btn btn-sm" onclick="editHealthLevels()" style="padding:4px 12px;font-size:12px;">✏️ 编辑</button>
    </div>
    <div class="health-level-definition">
      <div class="hld-item excellent">
        <div class="hld-content">
          <div class="hld-title">🟢 优质健康店（${getHealthLevels().excellent}-100分）</div>
          <div class="hld-desc">各维度表现优秀，无明显短板，可作为标杆案例推广</div>
        </div>
      </div>
      <div class="hld-item normal">
        <div class="hld-content">
          <div class="hld-title">🟡 平稳常规店（${getHealthLevels().normal}-${getHealthLevels().excellent - 1}分）</div>
          <div class="hld-desc">整体运营平稳，个别维度需关注，建议制定提升计划</div>
        </div>
      </div>
      <div class="hld-item warning">
        <div class="hld-content">
          <div class="hld-title">🟠 风险预警店（${getHealthLevels().warning}-${getHealthLevels().normal - 1}分）</div>
          <div class="hld-desc">存在明显问题，需制定改善计划，PM需每周跟进</div>
        </div>
      </div>
      <div class="hld-item danger">
        <div class="hld-content">
          <div class="hld-title">🔴 高危问题店（0-${getHealthLevels().warning - 1}分）</div>
          <div class="hld-desc">多项指标不达标，需立即介入整改，建议成立专项小组</div>
        </div>
      </div>
    </div>
  </div>`;
}

// 切换卡片展开
function toggleHealthCard(className) {
  const container = document.getElementById("health-card-detail");
  if (!container) return;
  const isVisible = container.style.display !== "none";
  const projects = getFilteredProjects();
  const projectHealth = projects.map(p => {
    const h = HEALTH_DATA.find(hh => hh.projectId === p.id && hh.period === "2026-05");
    const score = h ? h.overallScore : 0;
    const healthInfo = score > 0 ? getHealthLevel(score) : { level: "未评估", class: "unrated", icon: "⚪" };
    return { project: p, health: h, score, ...healthInfo };
  });
  const filtered = projectHealth.filter(x => x.class === className);
  if (isVisible && container.dataset.class === className) {
    container.style.display = "none";
    return;
  }
  container.dataset.class = className;
  container.style.display = "block";
  container.innerHTML = `
    <div class="health-detail-cards">
      <div style="font-size:13px;font-weight:500;margin-bottom:10px;">${filtered[0]?.icon || ""} ${filtered[0]?.level || ""} - 共${filtered.length}家</div>
      <div class="hdc-grid">
        ${filtered.map(x => {
          const p = x.project;
          const h = x.health;
          const levelColor = scoreColor(x.score);
          const levelBg = scoreBg(x.score);
          return `
          <div class="health-detail-card">
            <div class="hdc-header" style="background:${levelBg};">
              <div class="hdc-title">${escHtml(p.name)}</div>
              <div class="hdc-score" style="color:${levelColor}">${x.score > 0 ? x.score + "分" : "未评估"}</div>
            </div>
            <div class="hdc-body">
              <div class="hdc-info">${escHtml(p.workplace)} · ${escHtml(p.serviceMode)}</div>
              ${h ? renderHealthWarningSummary(h) : ""}
            </div>
            <div class="hdc-footer">
              <button class="btn btn-sm btn-primary" onclick="toggleHealthDetail('${p.id}')">查看详情</button>
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>`;
  container.scrollIntoView({ behavior: "smooth", block: "start" });
}

// 查看项目健康度详情（表格"查看"按钮 + 卡片展开后"查看详情"按钮共用）
function toggleHealthDetail(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) { showConfirmModal("未找到项目数据"); return; }
  const health = HEALTH_DATA.find(h => h.projectId === projectId && h.period === "2026-05");
  const op = OPERATIONS.find(o => o.projectId === projectId);
  const levelInfo = health ? getHealthLevel(health.overallScore) : { level: "未评估", class: "unrated", icon: "⚪" };

  const panelId = "health-detail-" + projectId;
  const existing = document.getElementById(panelId);
  if (existing) { existing.remove(); return; }

  // 维度明细HTML
  let dimsHtml = "";
  if (health && health.dimensions) {
    dimsHtml = health.dimensions.map(d => {
      const c = scoreColor(d.score);
      const bg = scoreBg(d.score);
      const itemsHtml = (d.items || []).map(item =>
        `<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px dashed #e2e8f0;font-size:12px;">
          <span>${item.name}</span>
          <span>
            <span style="color:#64748b;">目标${item.target}</span>
            <span style="margin:0 6px;color:#cbd5e1;">|</span>
            <span style="color:${scoreColor(item.score)};font-weight:500;">实际${item.actual}（${item.score}分）</span>
          </span>
        </div>`
      ).join("");
      return `
      <div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:14px;margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="font-weight:600;font-size:13px;">${d.name}</div>
          <div style="background:${bg};color:${c};padding:3px 12px;border-radius:20px;font-size:12px;font-weight:600;">${d.score}分 · ${d.level}</div>
        </div>
        ${itemsHtml}
        <div style="font-size:11px;color:#94a3b8;margin-top:4px;">权重 ${(d.weight * 100).toFixed(0)}%</div>
      </div>`;
    }).join("");
  } else {
    dimsHtml = '<div style="padding:20px;text-align:center;color:#94a3b8;">暂无健康度评估数据</div>';
  }

  // 运营数据摘要
  let opHtml = "";
  if (op) {
    opHtml = `
    <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:14px;margin-bottom:10px;">
      <div style="font-weight:600;font-size:13px;color:#166534;margin-bottom:8px;">📈 运营数据快照</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
        <div style="text-align:center;background:#fff;padding:8px;border-radius:8px;">
          <div style="font-size:11px;color:#64748b;">工单量</div><div style="font-size:16px;font-weight:700;color:#059669;">${op.ticketVol||0}</div>
        </div>
        <div style="text-align:center;background:#fff;padding:8px;border-radius:8px;">
          <div style="font-size:11px;color:#64748b;">转化量</div><div style="font-size:16px;font-weight:700;color:#2563eb;">${op.convCount||0}</div>
        </div>
        <div style="text-align:center;background:#fff;padding:8px;border-radius:8px;">
          <div style="font-size:11px;color:#64748b;">CSAT</div><div style="font-size:16px;font-weight:700;color:#7c3aed;">${op.csat||"--"}</div>
        </div>
        <div style="text-align:center;background:#fff;padding:8px;border-radius:8px;">
          <div style="font-size:11px;color:#64748b;">解决率</div><div style="font-size:16px;font-weight:700;color:#ea580c;">${((op.resolveRate||0)*100).toFixed(1)}%</div>
        </div>
      </div>
    </div>`;
  }

  const detailHtml = `
  <div id="${panelId}" class="card" style="margin-top:16px;border:2px solid var(--c-primary);animation:fadeInUp 0.3s ease;">
    <div style="padding:14px 18px;border-bottom:2px solid var(--c-border-light);display:flex;justify-content:space-between;align-items:center;">
      <div>
        <span style="font-size:15px;font-weight:700;">${levelInfo.icon} ${project.name} — 健康度详情</span>
        <span style="margin-left:10px;background:${scoreBg(health?health.overallScore:0)};color:${scoreColor(health?health.overallScore:0)};padding:2px 12px;border-radius:20px;font-size:13px;font-weight:600;">
          ${health ? health.overallScore + "分" : "未评估"} · ${levelInfo.level}
        </span>
      </div>
      <button class="btn btn-sm" onclick="document.getElementById('${panelId}').remove()" style="padding:4px 12px;">✕ 收起</button>
    </div>
    <div style="padding:14px 18px;">
      <div style="display:flex;gap:12px;margin-bottom:14px;flex-wrap:wrap;">
        <span style="background:#f1f5f9;padding:4px 12px;border-radius:6px;font-size:12px;">📍 ${project.workplace}</span>
        <span style="background:#f1f5f9;padding:4px 12px;border-radius:6px;font-size:12px;">🏷️ ${project.serviceMode}</span>
        <span style="background:#f1f5f9;padding:4px 12px;border-radius:6px;font-size:12px;">👤 PM：${project.pm}</span>
        <span style="background:#f1f5f9;padding:4px 12px;border-radius:6px;font-size:12px;">📊 目标达成率：${project.targetRate}%</span>
        <span style="background:#f1f5f9;padding:4px 12px;border-radius:6px;font-size:12px;">💰 利润率：${project.profitRate}%</span>
      </div>
      ${opHtml}
      <div style="font-size:13px;font-weight:600;margin:10px 0 8px;color:#334155;">🔍 六维度评分明细</div>
      ${dimsHtml}
    </div>
  </div>`;

  const container = document.getElementById("health-detail-panels");
  if (container) { container.insertAdjacentHTML("beforeend", detailHtml); }
  document.getElementById(panelId).scrollIntoView({ behavior: "smooth", block: "start" });
}

// 排序表格
function sortHealthTable(key) {
  const dir = (window._healthSort && window._healthSort.key === key && window._healthSort.dir === "desc") ? "asc" : "desc";
  window._healthSort = { key, dir };
  _moduleCache['operation'] = null; // 缓存失效：排序变化后强制重渲染
  renderModule('operation');
}

// 主渲染函数
