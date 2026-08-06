// modules/operation.js — 运营数据模块
/* ═══════════════════ 运营数据 ═══════════════════ */
function renderOperation() {
  const projects = getFilteredProjects();
  const projectHealth = projects.map(p => {
    const h = HEALTH_DATA.find(hh => hh.projectId === p.id && hh.period === "2026-05");
    const score = h ? h.overallScore : 0;
    const healthInfo = score > 0 ? getHealthLevel(score) : { level: "未评估", class: "unrated", icon: "⚪" };
    return { project: p, health: h, score, ...healthInfo };
  });
  return `
  ${renderFilterBar()}
  <div class="module-header">
    <div>
      <div class="module-title">📈 服务与进度追踪 · 健康度评估</div>
      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">基于6大维度综合评估项目健康状况，支持逐层下钻查看详细指标</div>
    </div>
  </div>
  ${renderHealthOverviewCards(projects)}
  ${renderHealthScoreTable(projectHealth)}
  ${renderHealthLevelDefinition()}
  <div id="health-detail-panels"></div>`;
}


// ===== 问题与课题协作 =====

