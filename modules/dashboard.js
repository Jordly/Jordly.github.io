// modules/dashboard.js — 项目总览看板模块 · 提取自 app.js
/* ═══════════════════ 项目总览看板 ═══════════════════ */
function renderDashboard(){

  const all = getFilteredProjects();

  const green = all.filter(p=>p.health==="🟢").length;

  const yellow = all.filter(p=>p.health==="🟡").length;

  const red = all.filter(p=>p.health==="🔴").length;

  const totalRevenue = all.reduce((s,p)=>s+(p.revenue||0),0);

  const totalCost = all.reduce((s,p)=>s+(p.costBudget||0),0);

  const avgProfit = all.length ? (all.reduce((s,p)=>s+(p.profitRate||0),0)/all.length).toFixed(1) : 0;

  // 计算项目类型分布
  const tpCount = all.filter(p=>p.serviceMode==="TP项目").length;
  const jxCount = all.filter(p=>p.serviceMode==="DP项目").length;
  const bpoCount = all.filter(p=>p.serviceMode==="BPO项目").length;

  // 计算运营数据
  const filteredOps = OPERATIONS.filter(o => {
    const p = PROJECTS.find(pp=>pp.id===o.projectId);
    if (!p) return false;
    if (filterState.workplace !== 'all' && p.workplace !== filterState.workplace) return false;
    return all.some(ap => ap.id === o.projectId);
  });
  const totalOrders = filteredOps.reduce((s,o)=>s+o.ticketVol,0);
  const totalConv = filteredOps.reduce((s,o)=>s+o.convCount,0);

  // 客服工作量数据
  const onlineCount = totalConv || 4286;
  const offlineCount = Math.round(totalOrders * 0.15) || 1852;
  const workloadRatio = 78;
  const workItems = [
    {name:'订单处理', count:625, ratio:100},
    {name:'退款处理', count:342, ratio:55},
    {name:'投诉处理', count:198, ratio:32},
    {name:'换货跟进', count:156, ratio:25}
  ];

  // 客服配置数数据
  const totalStaff = all.reduce((s,p)=>s+(p.fteActual||0),0) || 186;
  const staffConfig = [
    {name:'售前客服', count:68, pct:37, color:'#0A7B78'},
    {name:'售后客服', count:52, pct:28, color:'#0B9B96'},
    {name:'综合客服', count:45, pct:24, color:'#00C9A7'},
    {name:'客服管理', count:14, pct:8, color:'#6EE7B7'},
    {name:'数据专员', count:7, pct:4, color:'#C4E5D8'}
  ];

  // 销售排行数据
  const salesRank = filteredOps.slice().sort((a,b)=>b.ticketVol-a.ticketVol).slice(0,5);
  const maxVol = salesRank.length ? salesRank[0].ticketVol : 1;

  // 服务分布数据
  const goodSvc = filteredOps.filter(o=>o.csat>=4.5).length;
  const warnSvc = filteredOps.filter(o=>o.csat>=4.0&&o.csat<4.5).length;
  const badSvc = filteredOps.filter(o=>o.csat<4.0).length;
  const svcTotal = filteredOps.length || 1;

  // 成本分布数据
  const goodCost = all.filter(p=>p.profitRate>=15).length;
  const warnCost = all.filter(p=>p.profitRate>=5&&p.profitRate<15).length;
  const badCost = all.filter(p=>p.profitRate<5).length;
  const costTotal = all.length || 1;

  // 满意度细分维度（模拟数据）
  const dimScores = {comm:4.5, exec:4.7, collab:4.3};

  // KPI 趋势数据（从 KPI_HISTORY 计算）
  var _trendRev = calculateKpiTrend('revenue');
  var _trendCost = calculateKpiTrend('cost');
  var _trendProfit = calculateKpiTrend('profitRate');
  var _trendTarget = calculateKpiTrend('targetRate');

  // KPI 数据从 KPI_HISTORY 读取
  var lastKpi = KPI_HISTORY && KPI_HISTORY.length > 0 ? KPI_HISTORY[KPI_HISTORY.length-1] : null;
  var kpiRevenue = lastKpi ? (lastKpi.revenue/10000).toFixed(1)+'万' : (totalRevenue/10000).toFixed(1)+'万';
  var kpiCost = lastKpi ? (lastKpi.cost/10000).toFixed(1)+'万' : (totalCost/10000).toFixed(1)+'万';
  var kpiProfit = lastKpi ? lastKpi.profitRate.toFixed(2) : avgProfit;
  var kpiTarget = lastKpi ? lastKpi.targetRate+'%' : '--';

  // KPI sparkline 数据（从 KPI_HISTORY 动态生成）
  var spRev = generateSparklinePath('revenue');
  var spCost = generateSparklinePath('cost');
  var spProfit = generateSparklinePath('profitRate');
  var spTarget = generateSparklinePath('targetRate');
  const kpiCards = [
    {label:'月度总销售额', value:kpiRevenue, trend:_trendRev.trend, trendUp:_trendRev.trendUp, areaColor:_trendRev.areaColor, strokeColor:_trendRev.strokeColor, path:spRev.areaPath, strokePath:spRev.strokePath},
    {label:'月度总成本', value:kpiCost, trend:_trendCost.trend, trendUp:_trendCost.trendUp, areaColor:_trendCost.areaColor, strokeColor:_trendCost.strokeColor, path:spCost.areaPath, strokePath:spCost.strokePath},
    {label:'项目费效比', value:kpiProfit, trend:_trendProfit.trend, trendUp:_trendProfit.trendUp, areaColor:_trendProfit.areaColor, strokeColor:_trendProfit.strokeColor, path:spProfit.areaPath, strokePath:spProfit.strokePath},
    {label:'目标达成率', value:kpiTarget, trend:_trendTarget.trend, trendUp:_trendTarget.trendUp, areaColor:_trendTarget.areaColor, strokeColor:_trendTarget.strokeColor, path:spTarget.areaPath, strokePath:spTarget.strokePath},
    {label:'健康项目数', value:green+'/'+all.length, trend:'查看详情 →', trendUp:true, areaColor:'#ffffff', strokeColor:'#ffffff', path:'M 4,42 Q 14,40 28,38 T 52,36 T 76,32 T 100,30 T 124,26 L 124,50 L 4,50 Z', strokePath:'M 4,42 Q 14,40 28,38 T 52,36 T 76,32 T 100,30 T 124,26'}
  ];

  return `
  ${renderFilterBar()}

  <div class="module-header">
    <div>
      <div class="module-title">📊 长信客服项目智览中心</div>
      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">${filterState.workplace==='all'?'全部职场':filterState.workplace+'职场'} · 共 ${all.length} 个项目</div>
    </div>
    <div class="module-actions">
      <button class="btn btn-sm" onclick="exportDashboard()">📥 导出报表</button>
      <button class="btn btn-sm" onclick="downloadSampleData()">📄 下载示例数据</button>
      <button class="btn btn-sm" onclick="importData()">📂 导入数据</button>
      <button class="btn btn-sm" onclick="openDataManager()">⚙️ 数据管理</button>
      <button class="btn btn-sm" onclick="showChangeLog()">📋 修改历史</button>
    </div>
  </div>

  <!-- KPI 迷你卡片行 -->
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:14px;">
    ${kpiCards.map((k,i)=>{
      const decoColors = ['rgba(255,255,255,0.18)','rgba(255,255,255,0.13)','rgba(255,255,255,0.10)','rgba(255,255,255,0.08)','rgba(255,255,255,0.06)'];
      return `<div style="background:linear-gradient(145deg,#0A7B78 0%,#0B9B96 50%,#00C9A7 100%);border-radius:12px;padding:14px 16px;color:#fff;box-shadow:0 4px 16px rgba(11,155,150,0.25);position:relative;overflow:hidden;min-height:110px;">
        <div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:${decoColors[i]};"></div>
        <div style="position:relative;z-index:1;">
          <div style="font-size:12px;opacity:0.85;margin-bottom:4px;letter-spacing:0.5px;font-weight:500;">${k.label}</div>
          <div style="font-size:22px;font-weight:700;line-height:1.2;margin:4px 0;letter-spacing:-0.5px;">${k.value}</div>
          <div style="font-size:11px;opacity:0.95;">
            <span style="color:#ffffff;font-weight:600;text-shadow:0 1px 3px rgba(0,0,0,0.2);">${k.trend}</span>
            <span style="opacity:0.8;margin-left:2px;">较上月</span>
          </div>
        </div>
        <svg width="100%" height="50" viewBox="0 0 108 50" preserveAspectRatio="none" style="position:absolute;bottom:0;left:0;opacity:0.75;">
          <defs><linearGradient id="ag${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${k.areaColor}" stop-opacity="0.6"/><stop offset="100%" stop-color="${k.areaColor}" stop-opacity="0.05"/></linearGradient></defs>
          <path d="${k.path}" fill="url(#ag${i})"/>
          <path d="${k.strokePath}" fill="none" stroke="${k.strokeColor}" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>`;
    }).join('')}
  </div>

  <!-- 第1行：销售/服务/成本 -->
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:12px;">

    <!-- 销售概览 -->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <span style="font-size:13px;font-weight:600;color:#1e40af;">销售概览</span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="openSalesTrend();return false;">查看趋势 →</a>
      </div>
      <div style="font-size:10px;color:#94a3b8;margin-bottom:8px;">项目月度订单量 (TOP 5)</div>
      ${salesRank.map((o,idx)=>{
        const p = PROJECTS.find(pp=>pp.id===o.projectId);
        const name = p ? p.name : o.projectId;
        const shortName = name.length>8 ? name.substring(0,8) : name;
        const barW = Math.round((o.ticketVol/maxVol)*86);
        const healthColor = o.health==='🟢'?'#22c55e':o.health==='🟡'?'#eab308':'#ef4444';
        return `<div style="display:flex;align-items:center;gap:6px;padding:3px 0;font-size:11px;">
          <span style="width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#334155;">${shortName}</span>
          <div style="flex:1;height:8px;background:#eff6ff;border-radius:4px;overflow:hidden;min-width:40px;">
            <div style="width:${barW}px;height:100%;background:linear-gradient(90deg,#3b82f6,#60a5fa);border-radius:4px;"></div>
          </div>
          <span style="width:52px;text-align:right;color:#475569;font-size:10px;">${o.ticketVol.toLocaleString()}</span>
          <span style="width:8px;height:8px;border-radius:50%;background:${healthColor};flex-shrink:0;"></span>
        </div>`;
      }).join('')}
    </div>

    <!-- 服务概览 -->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <span style="font-size:13px;font-weight:600;color:#0f766e;">服务概览</span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="openServiceDetail();return false;">详情 →</a>
      </div>
      <div style="display:flex;gap:16px;margin-bottom:10px;">
        <div style="text-align:center;flex:1;">
          <div style="font-size:26px;font-weight:700;color:#0f766e;">28s</div>
          <div style="font-size:10px;color:#64748b;">平均响应时间</div>
          <div style="font-size:11px;color:#10b981;">快3秒</div>
        </div>
        <div style="text-align:center;flex:1;">
          <div style="font-size:26px;font-weight:700;color:#0f766e;">4.72</div>
          <div style="font-size:10px;color:#64748b;">CSAT 平均分</div>
          <div style="font-size:11px;color:#10b981;">+0.15</div>
        </div>
      </div>
      <div style="border-top:1px solid #f1f5f9;padding-top:8px;">
        <div style="font-size:11px;color:#334155;font-weight:500;margin-bottom:6px;">项目服务表现分布</div>
        <div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:11px;">
          <span style="width:80px;color:#10b981;">达标 (>=4.5)</span>
          <div style="flex:1;height:8px;background:#f1f5f9;border-radius:4px;overflow:hidden;">
            <div style="width:${Math.round(goodSvc/svcTotal*100)}%;height:100%;background:#10b981;border-radius:4px;"></div>
          </div>
          <span style="width:60px;text-align:right;color:#64748b;font-size:10px;">${goodSvc}项 ${Math.round(goodSvc/svcTotal*100)}%</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:11px;">
          <span style="width:80px;color:#eab308;">预警 (4.0-4.5)</span>
          <div style="flex:1;height:8px;background:#f1f5f9;border-radius:4px;overflow:hidden;">
            <div style="width:${Math.round(warnSvc/svcTotal*100)}%;height:100%;background:#eab308;border-radius:4px;"></div>
          </div>
          <span style="width:60px;text-align:right;color:#64748b;font-size:10px;">${warnSvc}项 ${Math.round(warnSvc/svcTotal*100)}%</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:11px;">
          <span style="width:80px;color:#ef4444;">告警 (<4.0)</span>
          <div style="flex:1;height:8px;background:#f1f5f9;border-radius:4px;overflow:hidden;">
            <div style="width:${Math.round(badSvc/svcTotal*100)}%;height:100%;background:#ef4444;border-radius:4px;"></div>
          </div>
          <span style="width:60px;text-align:right;color:#64748b;font-size:10px;">${badSvc}项 ${Math.round(badSvc/svcTotal*100)}%</span>
        </div>
      </div>
    </div>

    <!-- 成本控制 -->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <span style="font-size:13px;font-weight:600;color:#44403c;">成本控制</span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="openCostReport();return false;">报告 →</a>
      </div>
      <div style="display:flex;gap:16px;margin-bottom:10px;">
        <div style="text-align:center;flex:1;">
          <div style="font-size:10px;color:#64748b;">总成本</div>
          <div style="font-size:20px;font-weight:700;color:#44403c;">${isNaN(totalCost)?'0.0':(totalCost/10000).toFixed(1)}万</div>
        </div>
        <div style="text-align:center;flex:1;">
          <div style="font-size:10px;color:#64748b;">总预算</div>
          <div style="font-size:20px;font-weight:700;color:#44403c;">60.0万</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
        <div style="position:relative;width:96px;height:96px;flex-shrink:0;">
          <svg width="96" height="96" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="38" fill="none" stroke="#f1f5f9" stroke-width="10"/>
            <circle cx="48" cy="48" r="38" fill="none" stroke="#10b981" stroke-width="10" stroke-dasharray="${Math.round(goodCost/costTotal*239)} 239" stroke-dashoffset="0" transform="rotate(-90 48 48)"/>
            <circle cx="48" cy="48" r="38" fill="none" stroke="#eab308" stroke-width="10" stroke-dasharray="${Math.round(warnCost/costTotal*239)} 239" stroke-dashoffset="-${Math.round(goodCost/costTotal*239)}" transform="rotate(-90 48 48)"/>
            <circle cx="48" cy="48" r="38" fill="none" stroke="#ef4444" stroke-width="10" stroke-dasharray="${Math.round(badCost/costTotal*239)} 239" stroke-dashoffset="-${Math.round((goodCost+warnCost)/costTotal*239)}" transform="rotate(-90 48 48)"/>
          </svg>
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;">
            <div style="font-size:16px;font-weight:700;color:#44403c;">${Math.round(totalCost/600000*1000)/10}%</div>
            <div style="font-size:8px;color:#94a3b8;">预算执行率</div>
          </div>
        </div>
        <div style="flex:1;">
          <div style="font-size:10px;color:#64748b;margin-bottom:4px;">利润率分布</div>
          <div style="display:flex;align-items:center;gap:4px;margin-bottom:3px;font-size:10px;">
            <span style="width:8px;height:8px;border-radius:50%;background:#10b981;"></span>
            <span style="color:#475569;">>=15% ${goodCost}项</span>
          </div>
          <div style="display:flex;align-items:center;gap:4px;margin-bottom:3px;font-size:10px;">
            <span style="width:8px;height:8px;border-radius:50%;background:#eab308;"></span>
            <span style="color:#475569;">5%-15% ${warnCost}项</span>
          </div>
          <div style="display:flex;align-items:center;gap:4px;font-size:10px;">
            <span style="width:8px;height:8px;border-radius:50%;background:#ef4444;"></span>
            <span style="color:#475569;"><5% ${badCost}项</span>
          </div>
        </div>
      </div>
      ${badCost>0?`<div style="background:#fef2f2;border-radius:4px;padding:4px 8px;text-align:center;">
        <span style="font-size:10px;color:#dc2626;">${all.find(p=>p.profitRate<5)?.name||'某项目'} 超预算 ${Math.abs(all.find(p=>p.profitRate<5)?.profitRate||5.3)}%</span>
      </div>`:'`'}
    </div>

  </div>

  <!-- 第2行：满意度/工作量/配置数 -->
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:12px;">

    <!-- 项目满意度 -->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:13px;font-weight:600;color:#1d4ed8;">项目满意度</span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="openSatisfactionDetail();return false;">详情 →</a>
      </div>
      <div style="display:flex;gap:12px;margin-bottom:8px;">
        <div>
          <div style="font-size:10px;color:#64748b;">综合满意度</div>
          <div><span style="font-size:20px;font-weight:700;color:#1d4ed8;">4.6</span><span style="font-size:11px;color:#94a3b8;">/5.0</span></div>
          <div style="font-size:10px;color:#10b981;">▲ +0.2</div>
        </div>
        <div>
          <div style="font-size:10px;color:#64748b;">NPS趋势(本月)</div>
          <div style="font-size:13px;color:#1d4ed8;">+ 62%</div>
          <div style="font-size:13px;color:#ef4444;">- 8%</div>
        </div>
      </div>
      <div style="border-top:1px solid #f1f5f9;padding-top:6px;margin-bottom:6px;">
        <div style="font-size:10px;color:#94a3b8;margin-bottom:4px;">各项目评分</div>
        ${filteredOps.slice(0,6).map(o=>{
          const p = PROJECTS.find(pp=>pp.id===o.projectId);
          const barW = Math.round((o.csat/5)*80);
          const barColor = o.csat>=4.5?'#1d4ed8':o.csat>=4.0?'#3b82f6':'#60a5fa';
          const tag = o.csat<4.0?'<span style="background:#fee2e2;color:#dc2626;font-size:8px;padding:1px 4px;border-radius:3px;margin-left:4px;">重点</span>':o.csat<4.5?'<span style="background:#fef3c7;color:#d97706;font-size:8px;padding:1px 4px;border-radius:3px;margin-left:4px;">改进</span>':'';
          return `<div style="display:flex;align-items:center;gap:4px;padding:1px 0;font-size:10px;">
            <span style="width:28px;color:#475569;">${o.projectId}</span>
            <div style="flex:1;height:6px;background:#eff6ff;border-radius:3px;overflow:hidden;">
              <div style="width:${barW}px;height:100%;background:${barColor};border-radius:3px;"></div>
            </div>
            <span style="width:22px;text-align:right;color:#1d4ed8;font-weight:500;">${o.csat}</span>
            ${tag}
          </div>`;
        }).join('')}
      </div>
      <div style="border-top:1px solid #f1f5f9;padding-top:6px;">
        <div style="font-size:10px;color:#94a3b8;margin-bottom:4px;">细分维度评分</div>
        <div style="display:flex;align-items:center;gap:4px;padding:1px 0;font-size:10px;">
          <span style="width:28px;color:#475569;">沟通</span>
          <div style="flex:1;height:5px;background:#eff6ff;border-radius:3px;overflow:hidden;">
            <div style="width:${Math.round(dimScores.comm/5*60)}px;height:100%;background:#3b82f6;border-radius:3px;"></div>
          </div>
          <span style="width:20px;text-align:right;color:#1d4ed8;">${dimScores.comm}</span>
        </div>
        <div style="display:flex;align-items:center;gap:4px;padding:1px 0;font-size:10px;">
          <span style="width:28px;color:#475569;">执行</span>
          <div style="flex:1;height:5px;background:#eff6ff;border-radius:3px;overflow:hidden;">
            <div style="width:${Math.round(dimScores.exec/5*60)}px;height:100%;background:#60a5fa;border-radius:3px;"></div>
          </div>
          <span style="width:20px;text-align:right;color:#1d4ed8;">${dimScores.exec}</span>
        </div>
        <div style="display:flex;align-items:center;gap:4px;padding:1px 0;font-size:10px;">
          <span style="width:28px;color:#475569;">协作</span>
          <div style="flex:1;height:5px;background:#eff6ff;border-radius:3px;overflow:hidden;">
            <div style="width:${Math.round(dimScores.collab/5*60)}px;height:100%;background:#93c5fd;border-radius:3px;"></div>
          </div>
          <span style="width:20px;text-align:right;color:#1d4ed8;">${dimScores.collab}</span>
        </div>
      </div>
    </div>

    <!-- 客服工作量 -->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:13px;font-weight:600;color:#4f46e5;">客服工作量</span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="openWorkloadDetail();return false;">详情 →</a>
      </div>
      <div style="display:flex;gap:12px;margin-bottom:10px;">
        <div style="flex:1;text-align:center;">
          <div style="font-size:10px;color:#64748b;margin-bottom:2px;">线上接待人数</div>
          <div style="font-size:18px;font-weight:700;color:#4f46e5;">${onlineCount.toLocaleString()}</div>
        </div>
        <div style="width:1px;background:#e2e8f0;"></div>
        <div style="flex:1;text-align:center;">
          <div style="font-size:10px;color:#64748b;margin-bottom:2px;">线下工单量</div>
          <div style="font-size:18px;font-weight:700;color:#4f46e5;">${offlineCount.toLocaleString()}</div>
        </div>
      </div>
      <div style="text-align:center;margin-bottom:10px;">
        <div style="position:relative;display:inline-block;width:120px;height:66px;">
          <svg width="120" height="66" viewBox="0 0 120 66">
            <path d="M 10,58 A 50,50 0 0,1 110,58" fill="none" stroke="#d1fae5" stroke-width="10" stroke-linecap="round"/>
            <path d="M 10,58 A 50,50 0 0,1 ${10+50+50*Math.cos(Math.PI*(1-workloadRatio/100))},${58-50*Math.sin(Math.PI*(1-workloadRatio/100))}" fill="none" stroke="url(#gaugeGrad)" stroke-width="10" stroke-linecap="round"/>
            <defs><linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0B9B96"/><stop offset="60%" stop-color="#00C9A7"/><stop offset="100%" stop-color="#D4AF37"/></linearGradient></defs>
          </svg>
          <div style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);text-align:center;width:100%;">
            <div style="font-size:15px;font-weight:700;color:#4f46e5;line-height:1;">${workloadRatio}%</div>
            <div style="font-size:9px;color:#8b5cf6;line-height:1;margin-top:2px;">工作量负荷比</div>
          </div>
        </div>
      </div>
      <div style="border-top:1px solid #f1f5f9;padding-top:6px;">
        <div style="font-size:10px;color:#94a3b8;margin-bottom:5px;">线下工作量分布 TOP4</div>
        ${workItems.map(w=>`<div style="display:flex;align-items:center;gap:6px;padding:3px 0;font-size:11px;">
          <span style="width:56px;color:#475569;flex-shrink:0;">${w.name}</span>
          <div style="flex:1;height:7px;background:#f1f5f9;border-radius:4px;overflow:hidden;">
            <div style="width:${w.ratio}%;height:100%;background:linear-gradient(90deg,#0B9B96,#00C9A7);border-radius:4px;"></div>
          </div>
          <span style="width:42px;text-align:right;color:#64748b;font-size:10px;flex-shrink:0;">${w.count}件</span>
        </div>`).join('')}
      </div>
    </div>

    <!-- 客服配置数 -->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:13px;font-weight:600;color:#312e81;">客服配置数</span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="openStaffConfigDetail();return false;">详情 →</a>
      </div>
      <div style="margin-bottom:10px;">
        <div style="font-size:10px;color:#64748b;">总分摊人数</div>
        <div><span style="font-size:24px;font-weight:700;color:#312e81;">${totalStaff}</span><span style="font-size:12px;color:#94a3b8;">人</span></div>
      </div>
      <div style="text-align:center;margin-bottom:12px;">
        <svg width="140" height="140" viewBox="-70 -70 140 140">
          <defs>
            <filter id="pieShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.12"/>
            </filter>
          </defs>
          <g filter="url(#pieShadow)">
            <path d="M 0,0 L 0,-52 A 52,52 0 0,1 47,-22 Z" fill="#0A7B78" stroke="#fff" stroke-width="2"/>
            <path d="M 0,0 L 47,-22 A 52,52 0 0,1 37,38 Z" fill="#0B9B96" stroke="#fff" stroke-width="2"/>
            <path d="M 0,0 L 37,38 A 52,52 0 0,1 -15,50 Z" fill="#00C9A7" stroke="#fff" stroke-width="2"/>
            <path d="M 0,0 L -15,50 A 52,52 0 0,1 -44,26 Z" fill="#6EE7B7" stroke="#fff" stroke-width="2"/>
            <path d="M 0,0 L -44,26 A 52,52 0 0,1 -51,-13 A 52,52 0 0,1 0,-52 Z" fill="#C4E5D8" stroke="#fff" stroke-width="2"/>
          </g>
          <circle cx="0" cy="0" r="22" fill="#fff"/>
          <text x="0" y="-2" text-anchor="middle" font-size="11" font-weight="700" fill="#312e81">${totalStaff}</text>
          <text x="0" y="11" text-anchor="middle" font-size="8" fill="#64748b">总人数</text>
        </svg>
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px 12px;font-size:11px;">
        ${staffConfig.map(s=>`<div style="display:flex;align-items:center;gap:6px;">
          <span style="width:10px;height:10px;border-radius:2px;background:${s.color};flex-shrink:0;"></span>
          <span style="color:#475569;flex:1;">${s.name}</span>
          <span style="color:#1e293b;font-weight:600;">${s.count}</span>
          <span style="color:#64748b;">(${s.pct}%)</span>
        </div>`).join('')}
      </div>
    </div>

  </div>

  <!-- 近期动态时间线 -->
  <div class="card" style="padding:0;overflow:hidden;border:1px solid transparent;background:linear-gradient(135deg,#0ABAB5,#3b82f6,#8b5cf6) padding-box,linear-gradient(135deg,#0ABAB5,#3b82f6,#8b5cf6) border-box;">
    <div style="background:#fff;padding:12px 16px;">
      <div style="display:flex;gap:16px;">
      <div style="flex:1;min-width:0;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <span style="font-size:13px;font-weight:600;color:#1e293b;">近期动态</span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="goToModule('issue');return false;">查看全部动态 →</a>
      </div>
      <!-- 时间线内容 -->
      <div style="max-height:280px;overflow-y:auto;" class="tl-container">
        ${(function(){
          var events = [];
          var newProjects = PROJECTS.slice().sort(function(a,b){ return (b.startDate||'').localeCompare(a.startDate||''); }).slice(0,2);
          newProjects.forEach(function(p){ events.push({type:'new', title:'新增项目', text:p.name, detail:p.startDate||'', icon:'🆕', color:'#10b981'}); });
          var urgentIssues = ISSUES.filter(function(i){ return i.priority==='紧急' && i.status!=='已关闭'; }).slice(0,2);
          urgentIssues.forEach(function(i){ events.push({type:'urgent', title:'紧急问题', text:i.desc.substring(0,20)+(i.desc.length>20?'...':''), detail:i.projectName||'', icon:'⚠️', color:'#f59e0b'}); });
          var completedHandovers = HANDOVERS.filter(function(h){ return h.status==='已完成'; }).slice(0,2);
          completedHandovers.forEach(function(h){ events.push({type:'handover', title:'PM交接', text:h.from+'→'+h.to, detail:h.projectName, icon:'🔄', color:'#3b82f6'}); });
          var closedIssues = ISSUES.filter(function(i){ return i.status==='已关闭'; }).slice(0,2);
          closedIssues.forEach(function(i){ events.push({type:'closed', title:'问题关闭', text:i.desc.substring(0,20)+(i.desc.length>20?'...':''), detail:i.projectName||'', icon:'✅', color:'#6b7280'}); });
          events.sort(function(a,b){ return (b.detail||'').localeCompare(a.detail||''); });
          events = events.slice(0,4);
          if(events.length===0) return '<div style="padding:20px;text-align:center;color:#94a3b8;">暂无动态</div>';
          return events.map(function(e,idx){
            return '<div class="tl-item" style="padding-left:4px;">'
              +'<div class="tl-dot" style="background:'+e.color+'20;color:'+e.color+';">'+e.icon+'</div>'
              +'<div class="tl-content">'
                +'<div class="tl-title">'+e.title+'<span class="tl-badge" style="background:'+e.color+'15;color:'+e.color+';margin-left:6px;">'+e.type+'</span></div>'
                +'<div style="font-size:13px;color:#1e293b;margin-top:2px;">'+e.text+'</div>'
                +'<div class="tl-time">'+e.detail+'</div>'
              +'</div>'
              +(idx<events.length-1?'<div class="tl-line" style="left:38px;top:34px;"></div>':'')
            +'</div>';
          }).join('');
        })()}
      </div>
      </div>
      <!-- 极光装饰（事件右侧，不占事件宽） -->
      <div class="tl-decoration">
        <div class="tl-flow tl-flow-1" style="animation-delay:0s;"></div>
        <div class="tl-flow tl-flow-2" style="animation-delay:1.5s;"></div>
        <div class="tl-flow tl-flow-3" style="animation-delay:3s;"></div>
        <div class="tl-flow tl-flow-4" style="animation-delay:4.5s;"></div>
      </div>
      </div>
      <!-- 底部图例 -->
      <div style="display:flex;justify-content:center;gap:16px;margin-top:8px;padding-top:8px;border-top:1px solid #f1f5f9;clear:both;">
        <span style="font-size:10px;color:#94a3b8;display:flex;align-items:center;gap:4px;"><span style="width:6px;height:6px;border-radius:50%;background:#10b981;display:inline-block;"></span>新增项目</span>
        <span style="font-size:10px;color:#94a3b8;display:flex;align-items:center;gap:4px;"><span style="width:6px;height:6px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>紧急问题</span>
        <span style="font-size:10px;color:#94a3b8;display:flex;align-items:center;gap:4px;"><span style="width:6px;height:6px;border-radius:50%;background:#3b82f6;display:inline-block;"></span>PM交接</span>
        <span style="font-size:10px;color:#94a3b8;display:flex;align-items:center;gap:4px;"><span style="width:6px;height:6px;border-radius:50%;background:#6b7280;display:inline-block;"></span>问题关闭</span>
      </div>
    </div>
  </div>`;

}



// ===== 项目基础档案 =====}



// ===== 项目基础档案 =====


