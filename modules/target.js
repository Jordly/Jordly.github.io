// modules/target.js — 目标与权责管理模块
/* ═══════════════════ 目标与权责管理 ═══════════════════ */
function renderTarget(){

  const all = getFilteredProjects();

  if (!all || all.length === 0) return renderFilterBar() + emptyState('暂无项目数据', '请先在「项目基础档案」中添加项目，再设置目标', 'target');

  const can = canEdit();

  return `
  ${renderFilterBar()}

  <div class="module-header">

    <div>

      <div class="module-title">🎯 目标与权责管理</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">定义项目目标与权责，避免推诿</div>

    </div>

    <div class="module-actions">

      ${can?'<button class="btn btn-primary btn-sm">＋ 设置目标</button>':''}

      ${currentRole==='leader'?'<span class="badge badge-gray">只读权限</span>':''}

    </div>

  </div>

  <div class="card">

    <table class="data-table">

      <thead><tr><th>项目</th><th>人力目标</th><th>SLA响应(秒)</th><th>SLA解决(秒)</th><th>CSat目标</th><th>成本预算(万)</th><th>责任边界说明</th></tr></thead>

      <tbody>

        ${all.map(p=>`

          <tr>

            <td>${escHtml(p.name)}</td>

            <td>${p.fteTarget}人</td>

            <td>${p.slaResponse}</td>

            <td>${p.slaResolve}</td>

            <td>≥4.5</td>

            <td>¥${((p.costBudget||0)/10000).toFixed(1)}</td>

            <td style="max-width:200px;font-size:12px;color:var(--c-text-2)">承接方负责客服服务质量；需求方负责系统稳定性与活动信息同步</td>

          </tr>`).join('')}

      </tbody>

    </table>

  </div>`;

}



// ===== 成本与利润管理 =====

