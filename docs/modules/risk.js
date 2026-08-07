// modules/risk.js — 风险管理模块
/* ═══════════════════ 风险管理 ═══════════════════ */
function renderRisk(){
  try {
  // 进入页面先从项目数据重新聚合一次，确保实时
  recomputeRiskAlerts();

  let html = `<div class="page-header risk-header"><h2>⚠️ 项目风险预警池</h2>
    <div class="risk-actions">
      <button class="btn" onclick="renderRisk()">🔄 刷新</button>
      <button class="btn btn-sm" onclick="acknowledgeAllRisk()">🔔 全部已读</button>
      <button class="btn btn-primary" onclick="exportRisk()">📤 导出</button>
    </div>
  </div>`;

  const groups = [
    {key:'健康状态', icon:'🏥', color:'#ef4444', bg:'#fef2f2', desc:'健康状态低于预警阈值'},
    {key:'SLA超标', icon:'⏱️', color:'#f59e0b', bg:'#fffbeb', desc:'平均响应超出SLA目标'},
    {key:'成本超支', icon:'💸', color:'#ef4444', bg:'#fef2f2', desc:'利润率低于安全线'},
    {key:'满意度下滑', icon:'📉', color:'#f59e0b', bg:'#fffbeb', desc:'客户满意度低于目标'}
  ];

  const totalRisk = RISK_ALERTS.length;
  html += `<div class="risk-summary">共监测 <b>${PROJECTS.length}</b> 个项目，当前识别 <b style="color:#ef4444;">${totalRisk}</b> 项风险 · 数据来源：项目档案 + 运营数据（实时聚合）</div>`;

  html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;align-items:start;">`;
  groups.forEach(g => {
    const items = RISK_ALERTS.filter(r => r.riskType === g.key);
    const high = items.filter(r => r.severity.includes('🔴')).length;
    const mid = items.filter(r => r.severity.includes('🟡')).length;
    html += `<div class="risk-card" onclick="toggleRiskCard(this)" style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;cursor:pointer;overflow:hidden;transition:all 0.3s ease;" data-open="false">
      <div style="padding:16px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:44px;height:44px;border-radius:10px;background:${g.bg};display:flex;align-items:center;justify-content:center;font-size:20px;">${g.icon}</div>
          <div>
            <div style="font-size:15px;font-weight:600;color:#1e293b;">${g.key}</div>
            <div style="font-size:12px;color:#64748b;margin-top:2px;">${g.desc}</div>
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:22px;font-weight:700;color:${items.length === 0 ? '#22c55e' : g.color};">${items.length}</div>
          <div style="font-size:11px;color:#94a3b8;">个项目</div>
        </div>
      </div>
      <div style="padding:0 16px 12px;display:flex;gap:8px;flex-wrap:wrap;">
        ${high > 0 ? `<span style="font-size:11px;color:#ef4444;background:#fef2f2;padding:2px 8px;border-radius:4px;font-weight:500;">🔴 高风险 ${high}</span>` : ''}
        ${mid > 0 ? `<span style="font-size:11px;color:#f59e0b;background:#fffbeb;padding:2px 8px;border-radius:4px;font-weight:500;">🟡 中风险 ${mid}</span>` : ''}
        ${items.length === 0 ? '<span style="font-size:11px;color:#22c55e;background:#f0fdf4;padding:2px 8px;border-radius:4px;font-weight:500;">✅ 全部正常</span>' : ''}
      </div>
      <div class="risk-detail" style="max-height:0;overflow:hidden;transition:max-height 0.35s ease;">
        <div style="padding:0 16px 16px;">
          ${items.length > 0 ? `<table class="data-table" style="font-size:12px;">
            <thead><tr><th>项目</th><th>严重程度</th><th>触发指标</th><th>状态</th></tr></thead>
            <tbody>
              ${items.map(r => `<tr>
                <td><a href="#" class="table-link" onclick="event.stopPropagation();showProjectDetail('${r.projectId}');return false;">${r.projectName}</a></td>
                <td>${r.severity}</td>
                <td>${r.indicator}</td>
                <td><span class="badge ${r.status==='未处理'?'status-red':r.status==='处理中'?'status-yellow':'status-green'}">${r.status}</span></td>
              </tr>`).join('')}
            </tbody>
          </table>` : '<div style="text-align:center;color:#94a3b8;padding:16px;font-size:13px;">暂无风险项目</div>'}
        </div>
      </div>
    </div>`;
  });
  html += `</div>`;
  return html;
  } catch(e) { if(typeof addRuntimeLog==='function') addRuntimeLog('error','risk 渲染异常',String(e)); return errorState('风险预警加载失败','请刷新页面重试'); }
}

function toggleRiskCard(el){
  const detail = el.querySelector('.risk-detail');
  const isOpen = el.getAttribute('data-open') === 'true';
  if (isOpen) {
    detail.style.maxHeight = '0px';
    el.style.borderColor = '#e2e8f0';
    el.setAttribute('data-open','false');
  } else {
    detail.style.maxHeight = detail.scrollHeight + 'px';
    el.style.borderColor = '#3b82f6';
    el.setAttribute('data-open','true');
  }
}

// ===== 个人基础设置 =====
