// modules/performance.js — 绩效管理模块
/* ═══════════════════ 绩效管理 ═══════════════════ */
function renderPerformance() {
  var tab = window._perfTab;
  var tabBar = ''
    +'<div class="module-header" style="margin-bottom:0;">'
      +'<div><div class="module-title">📈 客服绩效看板</div><div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">绩效测算 → 薪资测算 → 全员工资条</div></div>'
    +'</div>'
    +'<div style="display:flex;gap:0;border-bottom:1px solid var(--c-border,#e2e8f0);margin-bottom:16px;">'
      +'<div style="padding:10px 20px;font-size:13px;cursor:pointer;border-bottom:2px solid '+(tab==='performance'?'#0B9B96':'transparent')+';color:'+(tab==='performance'?'#0B9B96':'var(--c-text-2)')+';font-weight:'+(tab==='performance'?'600':'400')+';" onclick="window._perfTab=\'performance\';if(typeof _moduleCache!==\'undefined\')_moduleCache[\'performance\']=null;renderModule(\'performance\')">📊 绩效测算</div>'
      +'<div style="padding:10px 20px;font-size:13px;cursor:pointer;border-bottom:2px solid '+(tab==='salary'?'#3B82F6':'transparent')+';color:'+(tab==='salary'?'#3B82F6':'var(--c-text-2)')+';font-weight:'+(tab==='salary'?'600':'400')+';" onclick="window._perfTab=\'salary\';if(typeof _moduleCache!==\'undefined\')_moduleCache[\'performance\']=null;renderModule(\'performance\')">💰 薪资测算</div>'
      +'<div style="padding:10px 20px;font-size:13px;cursor:pointer;border-bottom:2px solid '+(tab==='config'?'#8B5CF6':'transparent')+';color:'+(tab==='config'?'#8B5CF6':'var(--c-text-2)')+';font-weight:'+(tab==='config'?'600':'400')+';" onclick="window._perfTab=\'config\';if(typeof _moduleCache!==\'undefined\')_moduleCache[\'performance\']=null;renderModule(\'performance\')">⚙️ 基础配置</div>'
    +'</div>';

  if(tab === 'salary') return tabBar + _renderSalaryTab();
  if(tab === 'config') return tabBar + _renderConfigTab();
  return tabBar + _renderPerfTab();
}

function _renderPerfTab() {
  // 默认显示最新月份的数据（AGENT_PERFORMANCE初始数据集中在2026-06）
  var monthFilter = document.getElementById('pf-month')?.value || '2026-06';
  var projectFilter = document.getElementById('pf-project')?.value || 'all';
  var typeFilter = document.getElementById('pf-type')?.value || 'all';
  var groupFilter = document.getElementById('pf-group')?.value || 'all';

  var data = AGENT_PERFORMANCE.filter(function(a){
    if (a.month !== monthFilter) return false;
    if (projectFilter !== 'all' && a.projectId !== projectFilter) return false;
    if (typeFilter !== 'all' && a.agentType !== typeFilter) return false;
    if (groupFilter !== 'all' && a.group !== groupFilter) return false;
    return true;
  });

  // 计算组别汇总
  var groups = {};
  data.forEach(function(a){
    if (!groups[a.group]) groups[a.group] = {agents: [], baseTotal: 0, loadRatio: 1.0, pool: 0};
    groups[a.group].agents.push(a);
    groups[a.group].baseTotal += getBaseSalary(a.status);
  });
  Object.keys(groups).forEach(function(g){
    var lr = GROUP_LOAD_RATIO.find(function(x){return x.group === g && x.month === monthFilter;});
    groups[g].loadRatio = lr ? lr.loadRatio : 1.0;
    groups[g].pool = Math.round(groups[g].baseTotal * groups[g].loadRatio);
  });
  var totalPool = Object.values(groups).reduce(function(s, g){return s + g.pool;}, 0);
  var totalBase = Object.values(groups).reduce(function(s, g){return s + g.baseTotal;}, 0);

  var html = '';

  // L1: 筛选栏（青绿竖条）
  html += '<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:end;margin-bottom:16px;padding:12px 14px;background:#f8fafc;border-radius:8px;border-left:4px solid #0B9B96;border:1px solid #cbd5e1;border-left:4px solid #0B9B96;">';
  html += '<div style="display:flex;flex-direction:column;gap:2px;"><span style="font-size:10px;color:#64748b;">月份</span><select id="pf-month" class="fb-select" style="padding:4px 8px;font-size:12px;border:1px solid #cbd5e1;border-radius:5px;background:#fff;"><option value="2026-06" '+ (monthFilter==='2026-06'?'selected':'') +'>2026-06</option><option value="2026-05" '+ (monthFilter==='2026-05'?'selected':'') +'>2026-05</option></select></div>';
  html += '<div style="display:flex;flex-direction:column;gap:2px;"><span style="font-size:10px;color:#64748b;">项目</span><select id="pf-project" class="fb-select" style="padding:4px 8px;font-size:12px;border:1px solid #cbd5e1;border-radius:5px;background:#fff;"><option value="all">全部项目</option>'+PROJECTS.map(function(p){return '<option value="'+p.id+'" '+ (projectFilter===p.id?'selected':'') +'>'+p.name+'</option>';}).join('')+'</select></div>';
  html += '<div style="display:flex;flex-direction:column;gap:2px;"><span style="font-size:10px;color:#64748b;">类型</span><select id="pf-type" class="fb-select" style="padding:4px 8px;font-size:12px;border:1px solid #cbd5e1;border-radius:5px;background:#fff;"><option value="all">全部类型</option><option value="售前" '+ (typeFilter==='售前'?'selected':'') +'>售前</option><option value="售后" '+ (typeFilter==='售后'?'selected':'') +'>售后</option><option value="综合" '+ (typeFilter==='综合'?'selected':'') +'>综合</option></select></div>';
  html += '<div style="display:flex;flex-direction:column;gap:2px;"><span style="font-size:10px;color:#64748b;">组别</span><select id="pf-group" class="fb-select" style="padding:4px 8px;font-size:12px;border:1px solid #cbd5e1;border-radius:5px;background:#fff;"><option value="all">全部组别</option>'+[...new Set(AGENT_PERFORMANCE.map(function(a){return a.group;}))].map(function(g){return '<option value="'+g+'" '+ (groupFilter===g?'selected':'') +'>'+g+'</option>';}).join('')+'</select></div>';
  html += '<button class="btn btn-sm btn-primary" onclick="renderModule(\'performance\')" style="background:#0B9B96;border-color:#0B9B96;padding:6px 18px;">查询</button>';
  html += '<div style="flex:1;"></div>';
  html += '<button class="btn btn-sm" onclick="importPerformance()" style="border:1px solid #cbd5e1;">导入</button>';
  html += '<button class="btn btn-sm" onclick="exportPerformance()" style="border:1px solid #cbd5e1;">导出</button>';
  html += '<button class="btn btn-sm btn-primary" onclick="addAgentPerformance()" style="background:#0B9B96;border-color:#0B9B96;">+ 新增坐席</button>';
  html += '</div>';

  // L2: 度量卡片（4列）
  html += '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:14px;">';
  html += '<div style="background:#fff;border-radius:8px;padding:10px 14px;border:1px solid #e2e8f0;border-left:4px solid #0B9B96;"><div style="font-size:10px;color:#64748b;">参评坐席</div><div style="font-size:19px;font-weight:600;color:#0f172a;">'+data.length+'</div></div>';
  html += '<div style="background:#fff;border-radius:8px;padding:10px 14px;border:1px solid #e2e8f0;"><div style="font-size:10px;color:#64748b;">绩效基数总池</div><div style="font-size:19px;font-weight:600;color:#0f172a;">'+totalBase.toLocaleString()+'</div></div>';
  html += '<div style="background:#fff;border-radius:8px;padding:10px 14px;border:1px solid #e2e8f0;"><div style="font-size:10px;color:#64748b;">加权负荷比</div><div style="font-size:19px;font-weight:600;color:#0B9B96;">'+(totalBase>0?(totalPool/totalBase*100).toFixed(0)+'%':'-')+'</div></div>';
  html += '<div style="background:#E1F5EE;border-radius:8px;padding:10px 14px;border:1px solid #9FE1CB;border-left:4px solid #0B9B96;"><div style="font-size:10px;color:#0B9B96;">绩效总池</div><div style="font-size:19px;font-weight:600;color:#0B9B96;">'+totalPool.toLocaleString()+'</div></div>';
  html += '</div>';

  // L3: 参数配置区标题
  html += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;margin-top:4px;">';
  html += '<span style="display:inline-block;width:4px;height:14px;background:#3B82F6;border-radius:2px;"></span>';
  html += '<span style="font-size:12px;font-weight:600;color:#0f172a;">参数配置区</span>';
  html += '<span style="font-size:10px;font-weight:400;color:#64748b;margin-left:4px;">修改后自动生效，数据同步至系统数据管理</span>';
  html += '</div>';

  // L3b: 配置区域（左1: 负荷比+瓜分比例，右2: KPI自定义）
  html += '<div style="display:grid;grid-template-columns:1fr 2fr;gap:10px;margin-bottom:16px;">';

  // 左列：负荷比 + 瓜分比例
  html += '<div style="background:#fff;border:1px solid #cbd5e1;border-radius:8px;padding:12px;">';
  // 分组1：组别负荷比（带标题栏）
  html += '<div style="font-size:12px;font-weight:600;color:#0B9B96;margin-bottom:6px;padding:6px 10px;background:#E1F5EE;border-radius:4px;border-left:3px solid #0B9B96;">📊 组别负荷比（倍率系数）</div>';
  var grpKeys = Object.keys(groups);
  html += '<div style="display:flex;flex-direction:column;gap:4px;">';
  grpKeys.forEach(function(g){
    html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;font-size:11px;border:1px solid #e2e8f0;">';
    html += '<span style="font-weight:500;color:#475569;">'+g+'</span>';
    html += '<span style="display:flex;align-items:center;gap:4px;"><input type="number" step="0.01" value="'+groups[g].loadRatio+'" style="width:54px;padding:4px 6px;text-align:center;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="updateGroupLoadRatio(\''+g+'\',\''+monthFilter+'\',this.value)"><span style="color:#64748b;font-size:11px;">倍</span></span>';
    html += '</div>';
  });
  html += '</div>';
  // 分隔间距
  html += '<div style="height:14px;"></div>';
  // 分组2：瓜分比例（带标题栏）
  html += '<div style="font-size:12px;font-weight:600;color:#3B82F6;margin-bottom:6px;padding:6px 10px;background:#E6F1FB;border-radius:4px;border-left:3px solid #3B82F6;">📊 瓜分比例（绩效池分配）</div>';
  html += '<div style="display:flex;flex-direction:column;gap:4px;font-size:11px;">';
  html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;border:1px solid #e2e8f0;"><span style="font-weight:500;color:#475569;">售前池占比</span><span style="display:flex;align-items:center;gap:4px;"><input type="text" value="'+(POOL_DIST_RATIO.presale||60)+'" style="width:44px;padding:4px 6px;text-align:center;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="POOL_DIST_RATIO.presale=parseFloat(this.value)||0;saveSalaryConfig();"><span style="color:#64748b;">%</span></span></div>';
  html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;border:1px solid #e2e8f0;"><span style="font-weight:500;color:#475569;">售后池占比</span><span style="display:flex;align-items:center;gap:4px;"><input type="text" value="'+(POOL_DIST_RATIO.afterSale||60)+'" style="width:44px;padding:4px 6px;text-align:center;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="POOL_DIST_RATIO.afterSale=parseFloat(this.value)||0;saveSalaryConfig();"><span style="color:#64748b;">%</span></span></div>';
  html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;border:1px solid #e2e8f0;"><span style="font-weight:500;color:#475569;">综合占比</span><span style="display:flex;align-items:center;gap:4px;"><input type="text" value="'+(POOL_DIST_RATIO.mixed||30)+'" style="width:44px;padding:4px 6px;text-align:center;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="POOL_DIST_RATIO.mixed=parseFloat(this.value)||0;saveSalaryConfig();"><span style="color:#64748b;">%</span></span></div>';
  html += '</div></div>';

  // 右列：KPI自定义配置
  html += '<div style="background:#fff;border:1px solid #cbd5e1;border-radius:8px;padding:12px;">';
  html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid #e2e8f0;">';
  html += '<span style="font-size:12px;font-weight:600;color:#0f172a;">KPI指标自定义配置</span>';
  html += '<button class="btn btn-xs" onclick="addKpiDefinition()" style="background:#0B9B96;color:#fff;border:none;font-size:10px;padding:3px 10px;">+ 新增KPI</button>';
  html += '</div>';
  html += '<div style="font-size:10px;color:#64748b;margin-bottom:10px;">每种类型独立配置KPI组合及权重</div>';

  var kpiTypeColors = {presale:'#0B9B96', afterSale:'#3B82F6', mixed:'#8B5CF6'};
  var kpiTypeBgs = {presale:'#E1F5EE', afterSale:'#E6F1FB', mixed:'#EEEDFE'};
  ['presale','afterSale','mixed'].forEach(function(type){
    var typeName = {presale:'售前', afterSale:'售后', mixed:'综合'}[type];
    var kpis = KPI_DEFINITIONS[type] || [];
    var totalWeight = kpis.reduce(function(s,k){return s+(k.weight||0);}, 0);
    html += '<div style="margin-bottom:10px;padding:8px;background:'+kpiTypeBgs[type]+';border-radius:6px;border:1px solid '+kpiTypeColors[type]+'44;">';
    html += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">';
    html += '<span style="font-weight:600;font-size:11px;color:'+kpiTypeColors[type]+';padding:1px 6px;background:#fff;border-radius:3px;">'+typeName+'</span>';
    html += '<span style="font-size:10px;color:#64748b;">权重合计:</span>';
    html += '<span style="font-weight:600;font-size:11px;color:'+kpiTypeColors[type]+';">'+totalWeight+'%</span>';
    html += '</div>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;">';
    kpis.forEach(function(k,ki){
      html += '<div style="display:flex;align-items:center;gap:3px;background:#fff;border:1px solid #cbd5e1;border-radius:4px;padding:3px 6px;">';
      html += '<span style="font-size:10px;">'+k.name+'</span>';
      html += '<input type="text" value="'+k.weight+'" style="width:30px;padding:2px 4px;border:1px solid #cbd5e1;border-radius:3px;text-align:right;font-size:10px;font-family:monospace;background:#fff;" onchange="KPI_DEFINITIONS[\''+type+'\']['+ki+'].weight=parseFloat(this.value)||0;saveKpiDefinitions();">';
      html += '<span style="font-size:10px;color:#64748b;">%</span>';
      html += '<span style="cursor:pointer;color:#dc2626;font-weight:700;margin-left:2px;font-size:12px;" onclick="KPI_DEFINITIONS[\''+type+'\'].splice('+ki+',1);saveKpiDefinitions();renderModule(\'performance\');">×</span>';
      html += '</div>';
    });
    html += '<div style="display:flex;align-items:center;gap:3px;border:1px dashed #94a3b8;border-radius:4px;padding:3px 8px;cursor:pointer;color:#64748b;font-size:10px;background:#fff;" onclick="addKpiToType(\''+type+'\')">+ 添加</div>';
    html += '</div></div>';
  });
  html += '</div></div>';

  // L4: 计算结果表
  html += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">';
  html += '<span style="display:inline-block;width:4px;height:14px;background:#8B5CF6;border-radius:2px;"></span>';
  html += '<span style="font-size:12px;font-weight:500;color:var(--color-text-primary);">计算结果表</span>';
  html += '<span style="font-size:10px;color:var(--color-text-tertiary);">KPI数据可直接编辑，自动重算，结果同步至薪资测算Tab</span>';
  html += '</div>';

  html += '<div style="overflow-x:auto;font-size:12px;border:1px solid #cbd5e1;border-radius:6px;background:#fff;">';
  html += '<table style="width:100%;border-collapse:collapse;white-space:nowrap;">';
  html += '<thead><tr style="background:#f1f5f9;text-align:left;font-size:11px;color:#475569;">';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;">组别</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;">坐席</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;">类型</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:right;">基数</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;">KPI值</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:center;">系数</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:right;">瓜分</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:right;">奖/惩</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:right;">绩效工资</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;">操作</th>';
  html += '</tr></thead><tbody>';

  data.forEach(function(a){
    var p = PROJECTS.find(function(pp){return pp.id === a.projectId;});
    var base = getBaseSalary(a.status);
    var score = calcPerformanceScore(a, monthFilter);
    var share = calcShareAmount(a, monthFilter);
    var final = calcFinalPerformance(a, monthFilter);
    _PERF_RESULTS[a.id] = {perfSalary:Math.round(final), shareAmount:Math.round(share), score:score, month:monthFilter};

    var typeTag = a.agentType === '售前' ? 'color:#0B9B96;background:#E1F5EE;' : a.agentType === '售后' ? 'color:#3B82F6;background:#E6F1FB;' : 'color:#8B5CF6;background:#EEEDFE;';
    var scoreColor = score >= 1.0 ? '#0B9B96' : '#dc2626';

    html += '<tr style="border-bottom:1px solid #e2e8f0;">';
    html += '<td style="padding:8px 10px;border-right:1px solid #e2e8f0;">'+(a.group||'-')+'</td>';
    html += '<td style="padding:8px 10px;font-weight:600;border-right:1px solid #e2e8f0;">'+(a.agentName||'-')+'</td>';
    html += '<td style="padding:8px 10px;border-right:1px solid #e2e8f0;"><span style="'+typeTag+'padding:2px 8px;border-radius:4px;font-size:10px;display:inline-block;">'+(a.agentType||'售前')+'</span></td>';
    html += '<td style="padding:8px 10px;text-align:right;color:var(--color-text-tertiary);border-right:1px solid #e2e8f0;">'+base+'</td>';
    html += '<td style="padding:8px 10px;border-right:1px solid #e2e8f0;"><div style="display:flex;gap:6px;align-items:flex-end;">';
    var kpis = KPI_DEFINITIONS[a.agentType==='售前'?'presale':a.agentType==='售后'?'afterSale':'mixed'] || [];
    var shownKeys = {};
    kpis.forEach(function(k){
      if(shownKeys[k.key]) return; shownKeys[k.key] = true;
      var val = a[k.key]||0;
      var widthClass = k.key==='salesAmount' ? '54px' : k.key==='workVolume' ? '46px' : '38px';
      html += '<div style="display:flex;flex-direction:column;gap:2px;align-items:center;">';
      html += '<span style="font-size:9px;color:#64748b;font-weight:500;line-height:1;">'+k.name+'</span>';
      html += '<input type="text" value="'+val+'" style="width:'+widthClass+';padding:3px 6px;text-align:right;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;background:#fff;font-family:monospace;font-weight:600;color:#0f172a;" onchange="updateAgentKPI('+a.id+',\''+k.key+'\',parseFloat(this.value)||0);">';
      html += '</div>';
    });
    html += '</div></td>';
    html += '<td style="padding:8px 10px;text-align:center;color:'+scoreColor+';font-weight:600;border-right:1px solid #e2e8f0;">'+Math.round(score*100)+'%</td>';
    html += '<td style="padding:8px 10px;text-align:right;border-right:1px solid #e2e8f0;">'+Math.round(share)+'</td>';
    html += '<td style="padding:8px 10px;text-align:right;border-right:1px solid #e2e8f0;color:'+(a.reward>0?'#0B9B96':a.penalty>0?'#dc2626':'#475569')+';">'+(a.reward>0?'+'+a.reward:a.penalty>0?'-'+a.penalty:'0')+'</td>';
    html += '<td style="padding:8px 10px;text-align:right;font-weight:600;color:'+scoreColor+';border-right:1px solid #e2e8f0;">'+Math.round(final)+'</td>';
    html += '<td style="padding:8px 10px;"><span style="font-size:11px;color:#3B82F6;cursor:pointer;margin-right:6px;" onclick="editAgentPerformance('+a.id+')">编辑</span> <span style="font-size:11px;color:#dc2626;cursor:pointer;" onclick="deleteAgentPerformance('+a.id+')">删除</span></td>';
    html += '</tr>';
  });
  html += '</tbody></table></div>';

  // L5: 计算说明条
  html += '<div style="padding:6px 10px;font-size:10px;color:var(--color-text-tertiary);background:var(--color-background-secondary);border-radius:0 0 var(--border-radius-md) var(--border-radius-md);border-top:0.5px solid var(--color-border-tertiary);display:flex;justify-content:space-between;">';
  html += '<span>组总池=组基数×负荷比 → 瓜分=按占比分配 → 绩效工资=瓜分×系数+奖-罚</span>';
  html += '<span style="cursor:pointer;color:#3B82F6;" onclick="renderModule(\'systemData\');goSystemDataDetail(\'agent_performance\');">在系统数据管理中查看原始表 →</span>';
  html += '</div>';

  return html;
}

// 切换负荷比配置显示/隐藏
function toggleLoadRatioConfig() {
  var el = document.getElementById('load-ratio-config');
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}

// 更新组别负荷比
function updateGroupLoadRatio(group, month, value) {
  var ratio = parseFloat(value);
  if (isNaN(ratio) || ratio < 0) { alert('负荷比必须是正数'); return; }
  var idx = GROUP_LOAD_RATIO.findIndex(g => g.group === group && g.month === month);
  if (idx >= 0) {
    GROUP_LOAD_RATIO[idx].loadRatio = ratio;
  } else {
    GROUP_LOAD_RATIO.push({group:group, month:month, loadRatio:ratio});
  }
  saveAgentPerformance();
  // 同步到系统数据管理 group_load_ratio 表
  var sdGlr = SYSTEM_DATA_TABLES['group_load_ratio'];
  if(sdGlr && Array.isArray(sdGlr.data)){
    var gIdx = sdGlr.data.findIndex(function(g){return g.group===group && g.month===month;});
    if(gIdx>=0) sdGlr.data[gIdx].loadRatio = ratio;
    else sdGlr.data.push({group:group, month:month, loadRatio:ratio});
    try{ localStorage.setItem('chansee_group_load_ratio', JSON.stringify(sdGlr.data)); }catch(e){}
  }
  renderModule('performance');
}

// 更新指标权重
function updateWeight(month, type, indicator, value) {
  if (!PERFORMANCE_WEIGHTS[month]) PERFORMANCE_WEIGHTS[month] = {};
  if (!PERFORMANCE_WEIGHTS[month][type]) PERFORMANCE_WEIGHTS[month][type] = {};
  PERFORMANCE_WEIGHTS[month][type][indicator] = parseInt(value) || 0;
}

// 保存权重配置
function savePerformanceWeights() {
  saveAgentPerformance();
  // 同步到系统数据管理 performance_weights 表
  var sdPw = SYSTEM_DATA_TABLES['performance_weights'];
  if(sdPw && sdPw.data && typeof sdPw.data === 'object'){
    sdPw.data[monthFilterForWeights()] = JSON.parse(JSON.stringify(PERFORMANCE_WEIGHTS[monthFilterForWeights()]||{}));
    try{ localStorage.setItem('chansee_performance_weights', JSON.stringify(sdPw.data)); }catch(e){}
  }
  alert('✅ 权重配置已保存');
  renderModule('performance');
}

// 切换权重配置显示/隐藏
function toggleWeightConfig() {
  var el = document.getElementById('weight-config');
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}

// 当前权重配置的月份（用于同步到系统数据管理）
function monthFilterForWeights() {
  var el = document.getElementById('pf-month');
  return el ? el.value : '2026-05';
}

// 更新坐席KPI指标（实时重算）
function updateAgentKPI(id, field, value) {
  var agent = AGENT_PERFORMANCE.find(function(a){return a.id===id;});
  if(!agent) return;
  agent[field] = value;
  // 持久化到 localStorage
  try{ localStorage.setItem('chansee_agent_performance', JSON.stringify(AGENT_PERFORMANCE)); }catch(e){}
  if(window.CloudBaseSync) try{ window.CloudBaseSync.saveAll(); }catch(e){}
  // 同步到系统数据管理
  var sdTbl = SYSTEM_DATA_TABLES['agent_performance'];
  if(sdTbl) {
    for(var i=0; i<sdTbl.data.length; i++) {
      if(sdTbl.data[i].id === id) { sdTbl.data[i][field] = value; break; }
    }
  }
  renderModule('performance');
}

// ===== KPI自定义配置操作函数 =====
function saveKpiDefinitions() {
  try{ localStorage.setItem('chansee_kpi_definitions', JSON.stringify(KPI_DEFINITIONS)); }catch(e){}
}
function addKpiToType(type) {
  showAddKpiDialog(type, function(name, key, weight){
    if(!KPI_DEFINITIONS[type]) KPI_DEFINITIONS[type] = [];
    KPI_DEFINITIONS[type].push({name:name, key:key, weight:weight});
    saveKpiDefinitions();
    renderModule('performance');
  });
}
function addKpiDefinition() {
  showAddKpiDialog('presale', function(name, key, weight){
    if(!KPI_DEFINITIONS.presale) KPI_DEFINITIONS.presale = [];
    KPI_DEFINITIONS.presale.push({name:name, key:key, weight:weight});
    saveKpiDefinitions();
    renderModule('performance');
  });
}

// ===== 薪资测算 Tab =====
function _renderSalaryTab() {
  var monthFilter = document.getElementById('pf-salary-month')?.value || '2026-05';
  var agents = AGENT_PERFORMANCE.filter(function(a){return a.month === monthFilter;});

  var html = '';
  // L1: 筛选栏
  html += '<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:end;margin-bottom:16px;padding:12px 14px;background:#f8fafc;border-radius:8px;border:1px solid #cbd5e1;border-left:4px solid #3B82F6;">';
  html += '<div style="display:flex;flex-direction:column;gap:2px;"><span style="font-size:10px;color:#64748b;">月份</span><select id="pf-salary-month" class="fb-select" onchange="renderModule(\'performance\')" style="padding:4px 8px;font-size:12px;border:1px solid #cbd5e1;border-radius:5px;background:#fff;"><option value="2026-06" '+ (monthFilter==='2026-06'?'selected':'') +'>2026-06</option><option value="2026-05" '+ (monthFilter==='2026-05'?'selected':'') +'>2026-05</option></select></div>';
  html += '<button class="btn btn-sm btn-primary" onclick="renderModule(\'performance\')" style="background:#3B82F6;border-color:#3B82F6;padding:6px 18px;">查询</button>';
  html += '<div style="flex:1;"></div>';
  html += '<span style="font-size:10px;color:#64748b;">当月 '+agents.length+' 人 · 绩效结果缓存 '+Object.keys(_PERF_RESULTS).filter(function(k){return _PERF_RESULTS[k].month===monthFilter;}).length+' 条</span>';
  html += '</div>';

  // 汇总指标
  var totalPerf = 0, totalIncome = 0, totalNet = 0;
  agents.forEach(function(a){
    var cached = _PERF_RESULTS[a.id];
    var perf = (cached && cached.month===monthFilter) ? cached.perfSalary : Math.round(calcFinalPerformance(a, monthFilter));
    var base = getBaseSalaryForAgent(a.id);
    var sub = getSubsidies(a.workplace||a.group||'', a.attendanceDays||21);
    var ins = getSocialInsurance(a.company||'default');
    totalPerf += perf;
    totalIncome += base + perf + (sub.meal||0) + (sub.attendance||0) + (a.reward||0) - (a.penalty||0) - ((a.lateMinutes||0)*getDeductionRule());
    totalNet += base + perf + (sub.meal||0) + (sub.attendance||0) + (a.reward||0) - (a.penalty||0) - ((a.lateMinutes||0)*getDeductionRule()) - ins.social - ins.fund;
  });
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px;">';
  html += '<div style="background:#fff;border-radius:8px;padding:10px 14px;border:1px solid #e2e8f0;border-left:4px solid #3B82F6;"><div style="font-size:10px;color:#64748b;">绩效工资汇总</div><div style="font-size:19px;font-weight:600;color:#0B9B96;">'+Math.round(totalPerf).toLocaleString()+'</div></div>';
  html += '<div style="background:#fff;border-radius:8px;padding:10px 14px;border:1px solid #e2e8f0;"><div style="font-size:10px;color:#64748b;">应发合计汇总</div><div style="font-size:19px;font-weight:600;color:#0f172a;">'+Math.round(totalIncome).toLocaleString()+'</div></div>';
  html += '<div style="background:#E6F1FB;border-radius:8px;padding:10px 14px;border:1px solid #B5D4F4;border-left:4px solid #3B82F6;"><div style="font-size:10px;color:#3B82F6;">实发合计汇总</div><div style="font-size:19px;font-weight:600;color:#3B82F6;">'+Math.round(totalNet).toLocaleString()+'</div></div>';
  html += '</div>';

  // 工资条明细标题
  html += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">';
  html += '<span style="display:inline-block;width:4px;height:14px;background:#3B82F6;border-radius:2px;"></span>';
  html += '<span style="font-size:12px;font-weight:600;color:#0f172a;">工资条明细</span>';
  html += '<span style="font-size:10px;color:#64748b;">考勤可在此直接编辑，数据实时重算</span>';
  html += '</div>';

  html += '<div style="overflow-x:auto;font-size:12px;border:1px solid #cbd5e1;border-radius:6px;background:#fff;">';
  html += '<table style="width:100%;border-collapse:collapse;white-space:nowrap;">';
  html += '<thead><tr style="background:#f1f5f9;font-size:11px;color:#475569;">';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;">姓名</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;">岗位</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:right;">基本工资</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:right;">绩效工资</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:right;">出勤(天)</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:right;">迟到(分)</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:right;">餐补</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:right;">奖/惩</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:right;">应发</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;border-right:1px solid #e2e8f0;text-align:right;">社保</th>';
  html += '<th style="padding:8px 10px;font-weight:600;border-bottom:2px solid #cbd5e1;text-align:right;">到手</th>';
  html += '</tr></thead><tbody>';

  agents.forEach(function(a){
    var base = getBaseSalaryForAgent(a.id);
    var cached = _PERF_RESULTS[a.id];
    var perf = (cached && cached.month===monthFilter) ? cached.perfSalary : Math.round(calcFinalPerformance(a, monthFilter));
    var attDays = a.attendanceDays || 21;
    var lateMin = a.lateMinutes || 0;
    var sub = getSubsidies(a.workplace||a.group||'', attDays);
    var ins = getSocialInsurance(a.company||'default');
    var bonus = a.reward || 0;
    var penalty = a.penalty || 0;
    var lateDeduct = lateMin * getDeductionRule();
    var income = base + perf + (sub.meal||0) + (sub.attendance||0) + bonus - lateDeduct - penalty;
    var netPay = income - ins.social - ins.fund;
    if(netPay < 0) netPay = 0;

    html += '<tr style="border-bottom:1px solid #e2e8f0;">';
    html += '<td style="padding:8px 10px;font-weight:600;border-right:1px solid #e2e8f0;">'+(a.agentName||'未知')+'</td>';
    html += '<td style="padding:8px 10px;font-size:10px;color:#64748b;border-right:1px solid #e2e8f0;">'+(a.agentType||'')+'</td>';
    html += '<td style="padding:8px 10px;text-align:right;border-right:1px solid #e2e8f0;">'+Math.round(base).toLocaleString()+'</td>';
    html += '<td style="padding:8px 10px;text-align:right;font-weight:600;color:'+(perf>=base?'#0B9B96':'#dc2626')+';border-right:1px solid #e2e8f0;">'+Math.round(perf).toLocaleString()+'</td>';
    html += '<td style="padding:8px 10px;text-align:right;border-right:1px solid #e2e8f0;"><input type="text" value="'+attDays+'" style="width:36px;padding:3px 6px;text-align:center;border:1px solid #cbd5e1;border-radius:4px;background:#fff;font-size:11px;font-family:monospace;" onchange="var x=AGENT_PERFORMANCE.find(function(aa){return aa.id==='+a.id+';});if(x){x.attendanceDays=parseFloat(this.value)||21;}renderModule(\'performance\');"></td>';
    html += '<td style="padding:8px 10px;text-align:right;border-right:1px solid #e2e8f0;"><input type="text" value="'+lateMin+'" style="width:32px;padding:3px 6px;text-align:center;border:1px solid #cbd5e1;border-radius:4px;background:#fff;font-size:11px;font-family:monospace;" onchange="var x=AGENT_PERFORMANCE.find(function(aa){return aa.id==='+a.id+';});if(x){x.lateMinutes=parseFloat(this.value)||0;}renderModule(\'performance\');"></td>';
    html += '<td style="padding:8px 10px;text-align:right;border-right:1px solid #e2e8f0;">'+Math.round((sub.meal||0)+(sub.attendance||0)).toLocaleString()+'</td>';
    html += '<td style="padding:8px 10px;text-align:right;border-right:1px solid #e2e8f0;color:'+(bonus>penalty?'#0B9B96':'#dc2626')+';">'+(bonus>0?'+'+Math.round(bonus).toLocaleString():penalty>0?'-'+Math.round(penalty+lateDeduct).toLocaleString():'0')+'</td>';
    html += '<td style="padding:8px 10px;text-align:right;font-weight:600;border-right:1px solid #e2e8f0;">'+Math.round(income).toLocaleString()+'</td>';
    html += '<td style="padding:8px 10px;text-align:right;border-right:1px solid #e2e8f0;">'+Math.round(ins.social).toLocaleString()+'</td>';
    html += '<td style="padding:8px 10px;text-align:right;font-weight:600;color:#3B82F6;">'+Math.round(netPay).toLocaleString()+'</td>';
    html += '</tr>';
  });

  html += '</tbody></table></div>';
  html += '<div style="padding:6px 10px;font-size:10px;color:var(--color-text-tertiary);background:var(--color-background-secondary);border-radius:0 0 var(--border-radius-md) var(--border-radius-md);border-top:0.5px solid var(--color-border-tertiary);display:flex;justify-content:space-between;">';
  html += '<span>应发=基本+绩效+补贴+奖罚-迟到扣款 · 到手=应发-社保-个税</span>';
  html += '<span style="cursor:pointer;color:#3B82F6;" onclick="renderModule(\'systemData\');">在系统数据管理中查看原始表 →</span>';
  html += '</div>';

  return html;
}

// ===== 基础配置 Tab =====
function _renderConfigTab() {
  var html = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">';

  // 1. 员工基本工资
  html += '<div style="background:#fff;border:1px solid #cbd5e1;border-radius:8px;padding:14px;border-top:4px solid #8B5CF6;">';
  html += '<div style="font-size:13px;font-weight:600;color:#0f172a;margin-bottom:4px;">员工基本工资</div>';
  html += '<div style="font-size:10px;color:#64748b;margin-bottom:10px;">修改后自动保存，各Tab立即生效</div>';
  var agentNames = {};
  AGENT_PERFORMANCE.forEach(function(a){if(!agentNames[a.id])agentNames[a.id]={name:a.agentName||'未知',base:SALARY_BASE[a.id]||1700};});
  for(var id in agentNames){
    var an = agentNames[id];
    html += '<div style="display:flex;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;margin-bottom:4px;font-size:12px;border:1px solid #e2e8f0;"><span style="font-weight:500;">'+an.name+'</span><input type="text" value="'+an.base+'" style="width:64px;padding:4px 8px;text-align:right;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="SALARY_BASE[\''+id+'\']=parseFloat(this.value)||1700;saveSalaryConfig();"></div>';
  }
  html += '</div>';

  // 2. 绩效基数档位
  html += '<div style="background:#fff;border:1px solid #cbd5e1;border-radius:8px;padding:14px;border-top:4px solid #8B5CF6;">';
  html += '<div style="font-size:13px;font-weight:600;color:#0f172a;margin-bottom:4px;">绩效基数档位</div>';
  html += '<div style="font-size:10px;color:#64748b;margin-bottom:10px;">影响组绩效总池计算基数</div>';
  html += '<div style="display:flex;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;margin-bottom:4px;font-size:12px;border:1px solid #e2e8f0;"><span style="font-weight:500;">试用期</span><input type="text" value="'+(PERF_BASE_LEVELS.trial||1400)+'" style="width:64px;padding:4px 8px;text-align:right;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="PERF_BASE_LEVELS.trial=parseFloat(this.value)||1400;saveSalaryConfig();"></div>';
  html += '<div style="display:flex;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;font-size:12px;border:1px solid #e2e8f0;"><span style="font-weight:500;">转正</span><input type="text" value="'+(PERF_BASE_LEVELS.regular||1700)+'" style="width:64px;padding:4px 8px;text-align:right;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="PERF_BASE_LEVELS.regular=parseFloat(this.value)||1700;saveSalaryConfig();"></div>';
  html += '</div>';

  // 3. 社保基数
  html += '<div style="background:#fff;border:1px solid #cbd5e1;border-radius:8px;padding:14px;border-top:4px solid #8B5CF6;">';
  html += '<div style="font-size:13px;font-weight:600;color:#0f172a;margin-bottom:4px;">社保基数（按公司）</div>';
  html += '<div style="font-size:10px;color:#64748b;margin-bottom:10px;">个人缴纳比例10.1%，自动计入薪资测算</div>';
  var companies = {'淄博兴长信':4630, '济南长信':4630, '浙江长信':5220};
  for(var cn in companies){
    html += '<div style="display:flex;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;margin-bottom:4px;font-size:12px;border:1px solid #e2e8f0;"><span style="font-weight:500;">'+cn+'</span><input type="text" value="'+(SOCIAL_INSURANCE[cn]?SOCIAL_INSURANCE[cn].socialBase:companies[cn])+'" style="width:64px;padding:4px 8px;text-align:right;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="SOCIAL_INSURANCE[\''+cn+'\']={socialBase:parseFloat(this.value)||'+companies[cn]+',socialRate:0.101};saveSalaryConfig();"></div>';
  }
  html += '</div>';

  // 4. 补贴标准
  html += '<div style="background:#fff;border:1px solid #cbd5e1;border-radius:8px;padding:14px;border-top:4px solid #8B5CF6;">';
  html += '<div style="font-size:13px;font-weight:600;color:#0f172a;margin-bottom:4px;">补贴标准（按城市）</div>';
  html += '<div style="font-size:10px;color:#64748b;margin-bottom:10px;">按月固定发放</div>';
  html += '<div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:6px;font-size:10px;color:#64748b;padding:4px 6px;background:#f1f5f9;border-radius:4px;font-weight:600;"><span>城市</span><span style="text-align:center;">餐补</span><span style="text-align:center;">全勤</span></div>';
  var cities = {淄博:{meal:158,att:100}, 济南:{meal:390,att:0}, 杭州:{meal:380,att:100}};
  for(var city in cities){
    var sc = SUBSIDY_RATES[city] || {};
    html += '<div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:6px;padding:6px 4px;margin-bottom:3px;background:#f8fafc;border-radius:4px;border:1px solid #e2e8f0;align-items:center;"><span style="font-size:11px;font-weight:500;">'+city+'</span>';
    html += '<input type="text" value="'+(sc.meal||cities[city].meal)+'" style="width:54px;padding:4px 6px;border:1px solid #cbd5e1;border-radius:4px;text-align:right;font-size:11px;font-family:monospace;background:#fff;" onchange="SUBSIDY_RATES[\''+city+'\']=SUBSIDY_RATES[\''+city+'\']||{};SUBSIDY_RATES[\''+city+'\'].meal=parseFloat(this.value)||0;saveSalaryConfig();">';
    html += '<input type="text" value="'+(sc.attendance||cities[city].att)+'" style="width:54px;padding:4px 6px;border:1px solid #cbd5e1;border-radius:4px;text-align:right;font-size:11px;font-family:monospace;background:#fff;" onchange="SUBSIDY_RATES[\''+city+'\']=SUBSIDY_RATES[\''+city+'\']||{};SUBSIDY_RATES[\''+city+'\'].attendance=parseFloat(this.value)||0;saveSalaryConfig();">';
    html += '</div>';
  }
  html += '</div>';

  // 5. 瓜分比例
  html += '<div style="background:#fff;border:1px solid #cbd5e1;border-radius:8px;padding:14px;border-top:4px solid #8B5CF6;">';
  html += '<div style="font-size:13px;font-weight:600;color:#0f172a;margin-bottom:4px;">瓜分比例配置</div>';
  html += '<div style="font-size:10px;color:#64748b;margin-bottom:10px;">绩效总池在各类型间的分配比例</div>';
  html += '<div style="display:flex;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;margin-bottom:4px;font-size:12px;border:1px solid #e2e8f0;"><span style="font-weight:500;">售前池占比</span><span><input type="text" value="'+(POOL_DIST_RATIO.presale||60)+'" style="width:44px;padding:4px 6px;text-align:center;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="POOL_DIST_RATIO.presale=parseFloat(this.value)||0;saveSalaryConfig();"> %</span></div>';
  html += '<div style="display:flex;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;margin-bottom:4px;font-size:12px;border:1px solid #e2e8f0;"><span style="font-weight:500;">售后池占比</span><span><input type="text" value="'+(POOL_DIST_RATIO.afterSale||60)+'" style="width:44px;padding:4px 6px;text-align:center;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="POOL_DIST_RATIO.afterSale=parseFloat(this.value)||0;saveSalaryConfig();"> %</span></div>';
  html += '<div style="display:flex;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;font-size:12px;border:1px solid #e2e8f0;"><span style="font-weight:500;">综合占比</span><span><input type="text" value="'+(POOL_DIST_RATIO.mixed||30)+'" style="width:44px;padding:4px 6px;text-align:center;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="POOL_DIST_RATIO.mixed=parseFloat(this.value)||0;saveSalaryConfig();"> %</span></div>';
  html += '</div>';

  // 6. 扣款规则
  html += '<div style="background:#fff;border:1px solid #cbd5e1;border-radius:8px;padding:14px;border-top:4px solid #8B5CF6;">';
  html += '<div style="font-size:13px;font-weight:600;color:#0f172a;margin-bottom:4px;">扣款规则</div>';
  html += '<div style="font-size:10px;color:#64748b;margin-bottom:10px;">自动计入薪资测算</div>';
  html += '<div style="display:flex;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;margin-bottom:4px;font-size:12px;border:1px solid #e2e8f0;"><span style="font-weight:500;">迟到扣款</span><span><input type="text" value="'+(DEDUCTION_RATES.latePerMin||2)+'" style="width:44px;padding:4px 6px;text-align:center;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="DEDUCTION_RATES.latePerMin=parseFloat(this.value)||0;saveSalaryConfig();"> 元/分钟</span></div>';
  html += '<div style="display:flex;justify-content:space-between;padding:6px 10px;background:#f8fafc;border-radius:4px;font-size:12px;border:1px solid #e2e8f0;"><span style="font-weight:500;">忘打卡扣款</span><span><input type="text" value="'+(DEDUCTION_RATES.missPunch||0)+'" style="width:44px;padding:4px 6px;text-align:center;border:1px solid #cbd5e1;border-radius:4px;font-size:11px;font-family:monospace;background:#fff;" onchange="DEDUCTION_RATES.missPunch=parseFloat(this.value)||0;saveSalaryConfig();"> 元/次</span></div>';
  html += '</div>';

  html += '</div>';
  return html;
}
function updateAgentType(id, newType) {
  var agent = AGENT_PERFORMANCE.find(a => a.id === id);
  if (agent) {
    agent.agentType = newType;
    saveAgentPerformance();
    renderModule('performance');
  }
}

// 更新奖励
function updateAgentReward(id, value) {
  var agent = AGENT_PERFORMANCE.find(a => a.id === id);
  if (agent) {
    agent.reward = parseFloat(value) || 0;
    saveAgentPerformance();
  }
}

// 更新惩罚
function updateAgentPenalty(id, value) {
  var agent = AGENT_PERFORMANCE.find(a => a.id === id);
  if (agent) {
    agent.penalty = parseFloat(value) || 0;
    saveAgentPerformance();
  }
}

// 新增坐席绩效数据
function addAgentPerformance() {
  var month = document.getElementById('pf-month')?.value || '2026-05';
  var newId = AGENT_PERFORMANCE.length > 0 ? Math.max(...AGENT_PERFORMANCE.map(a => a.id)) + 1 : 1;
  var newAgent = {
    id: newId,
    projectId: PROJECTS.length > 0 ? PROJECTS[0].id : '',
    agentName: '新坐席',
    group: 'A组',
    status: '转正',
    agentType: '售前',
    month: month,
    salesAmount: 0,
    conversionRate: 0,
    workVolume: 0,
    firstResolveRate: 0,
    responseTime: 100,
    csat: 4.5,
    serviceVolume: 0,
    reward: 0,
    penalty: 0
  };
  AGENT_PERFORMANCE.push(newAgent);
  saveAgentPerformance();
  renderModule('performance');
}

// 编辑坐席绩效数据
function editAgentPerformance(id) {
  var agent = AGENT_PERFORMANCE.find(a => a.id === id);
  if (!agent) return;

  // 用网格布局（2列），避免弹窗太高超出屏幕
  var field = function(label, inputHtml, full) {
    return '<div style="' + (full ? 'grid-column:1/-1;' : '') + 'margin-bottom:10px;">'
      + '<label style="display:block;font-size:12px;font-weight:500;color:#475569;margin-bottom:4px;">'+label+'</label>'
      + inputHtml
      + '</div>';
  };

  var inputStyle = 'padding:6px 10px;border:1px solid #cbd5e1;border-radius:6px;font-size:12px;box-sizing:border-box;width:100%;background:#fff;';

  var html = ''
    + '<div style="padding:14px;max-height:60vh;overflow-y:auto;">'
    // 基本信息（2列）
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:0 12px;">'
    + field('坐席姓名', '<input type="text" id="edit-agent-name" value="'+escHtml(agent.agentName||'')+'" style="'+inputStyle+'">')
    + field('组别', '<input type="text" id="edit-agent-group" value="'+escHtml(agent.group||'')+'" style="'+inputStyle+'">')
    + field('状态', '<select id="edit-agent-status" style="'+inputStyle+'"><option value="试用期" '+(agent.status==='试用期'?'selected':'')+'>试用期</option><option value="转正" '+(agent.status==='转正'?'selected':'')+'>转正</option></select>')
    + field('客服类型', '<select id="edit-agent-type" style="'+inputStyle+'"><option value="售前" '+(agent.agentType==='售前'?'selected':'')+'>售前</option><option value="售后" '+(agent.agentType==='售后'?'selected':'')+'>售后</option><option value="综合" '+(agent.agentType==='综合'?'selected':'')+'>综合</option></select>')
    + '</div>'
    // KPI数据（标题分隔）
    + '<div style="font-size:11px;font-weight:600;color:#0B9B96;margin:6px 0 8px 0;padding:4px 8px;background:#E1F5EE;border-radius:4px;">📊 KPI数据</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:0 12px;">'
    + field('销售额', '<input type="number" id="edit-agent-sales" value="'+(agent.salesAmount||0)+'" style="'+inputStyle+'">')
    + field('转化率 (%)', '<input type="number" step="0.1" id="edit-agent-conv" value="'+(agent.conversionRate||0)+'" style="'+inputStyle+'">')
    + field('工作量', '<input type="number" id="edit-agent-work" value="'+(agent.workVolume||0)+'" style="'+inputStyle+'">')
    + field('一次性解决率 (%)', '<input type="number" step="0.1" id="edit-agent-resolve" value="'+(agent.firstResolveRate||0)+'" style="'+inputStyle+'">')
    + field('平均响应时长 (s)', '<input type="number" id="edit-agent-resp" value="'+(agent.responseTime||0)+'" style="'+inputStyle+'">')
    + field('CSAT (0-5)', '<input type="number" step="0.1" min="0" max="5" id="edit-agent-csat" value="'+(agent.csat||0)+'" style="'+inputStyle+'">')
    + field('服务量', '<input type="number" id="edit-agent-sv" value="'+(agent.serviceVolume||0)+'" style="'+inputStyle+'">')
    + field('月份', '<input type="text" id="edit-agent-month" value="'+escHtml(agent.month||'')+'" style="'+inputStyle+'">')
    + '</div>'
    // 奖罚（标题分隔）
    + '<div style="font-size:11px;font-weight:600;color:#3B82F6;margin:6px 0 8px 0;padding:4px 8px;background:#E6F1FB;border-radius:4px;">💰 奖罚</div>'
    + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:0 12px;">'
    + field('奖励 (¥)', '<input type="number" id="edit-agent-reward" value="'+(agent.reward||0)+'" style="'+inputStyle+'">')
    + field('惩罚 (¥)', '<input type="number" id="edit-agent-penalty" value="'+(agent.penalty||0)+'" style="'+inputStyle+'">')
    + '</div>';

  // 弹窗由showCustomModal自带底部"取消/保存"按钮（已传第4参数"保存"和onConfirm=saveAgentEdit）
  showCustomModal('编辑坐席绩效 · '+escHtml(agent.agentName||''), html, function(){ saveAgentEdit(agent.id); }, '保存');
}

// 保存编辑
function saveAgentEdit(id) {
  var agent = AGENT_PERFORMANCE.find(a => a.id === id);
  if (!agent) return;
  agent.agentName = document.getElementById('edit-agent-name').value;
  agent.group = document.getElementById('edit-agent-group').value;
  agent.status = document.getElementById('edit-agent-status').value;
  agent.agentType = document.getElementById('edit-agent-type').value;
  agent.month = document.getElementById('edit-agent-month').value;
  agent.salesAmount = parseFloat(document.getElementById('edit-agent-sales').value) || 0;
  agent.conversionRate = parseFloat(document.getElementById('edit-agent-conv').value) || 0;
  agent.workVolume = parseFloat(document.getElementById('edit-agent-work').value) || 0;
  agent.firstResolveRate = parseFloat(document.getElementById('edit-agent-resolve').value) || 0;
  agent.responseTime = parseFloat(document.getElementById('edit-agent-resp').value) || 0;
  agent.csat = parseFloat(document.getElementById('edit-agent-csat').value) || 0;
  agent.serviceVolume = parseFloat(document.getElementById('edit-agent-sv').value) || 0;
  agent.reward = parseFloat(document.getElementById('edit-agent-reward').value) || 0;
  agent.penalty = parseFloat(document.getElementById('edit-agent-penalty').value) || 0;
  saveAgentPerformance();
  closeModal();
  showToast('已保存坐席数据');
  renderModule('performance');
}

// 删除坐席绩效数据
function deleteAgentPerformance(id) {
  // showConfirmModal(msg, title, onConfirm, onCancel) - msg是正文(支持HTML), title是标题
  showConfirmModal(
    '确定删除该坐席的绩效数据？<br><span style="color:#dc2626;font-weight:500;">⚠️ 此操作不可恢复！</span>',
    '确认删除',
    function(){
      var idx = AGENT_PERFORMANCE.findIndex(a => a.id === id);
      if (idx >= 0) {
        AGENT_PERFORMANCE.splice(idx, 1);
        saveAgentPerformance();
        renderModule('performance');
        showToast('已删除坐席数据');
      }
    }
  );
}

// 导入绩效数据
function importPerformance() {
  var input = document.createElement('input');
  input.type = 'file';
  input.accept = '.csv,.xlsx,.xls';
  input.onchange = function(e) {
    var file = e.target.files[0];
    if (!file) return;
    var ext = (file.name || '').split('.').pop().toLowerCase();
    if (ext === 'xlsx' || ext === 'xls') {
      var reader = new FileReader();
      reader.onload = function(ev) {
        try {
          var wb = XLSX.read(ev.target.result, { type: 'array' });
          var ws = wb.Sheets[wb.SheetNames[0]];
          var rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
          processPerformanceRows(rows);
        } catch(err) { alert("解析Excel失败：" + err.message); }
      };
      reader.readAsArrayBuffer(file);
    } else {
      var reader = new FileReader();
      reader.onload = function(ev) {
        var text = ev.target.result;
        var lines = text.split('\n');
        var rows = lines.map(function(line){ return line.split(','); });
        processPerformanceRows(rows);
      };
      reader.readAsText(file);
    }
  };
  input.click();
}

function processPerformanceRows(rows) {
  if (!rows || rows.length < 2) { alert("文件内容为空或仅有表头"); return; }
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i] || rows[i].length < 2) continue;
    var vals = rows[i];
    var newId = AGENT_PERFORMANCE.length > 0 ? Math.max(...AGENT_PERFORMANCE.map(function(a){return a.id;})) + 1 : 1;
    var month = document.getElementById('pf-month') ? document.getElementById('pf-month').value : '2026-05';
    var agent = {
      id: newId + i,
      projectId: String(vals[0] || ''),
      agentName: String(vals[1] || ''),
      group: String(vals[2] || 'A组'),
      status: String(vals[3] || '转正'),
      agentType: String(vals[4] || '售前'),
      month: month,
      salesAmount: parseFloat(vals[5]) || 0,
      conversionRate: parseFloat(vals[6]) || 0,
      workVolume: parseFloat(vals[7]) || 0,
      firstResolveRate: parseFloat(vals[8]) || 0,
      responseTime: parseFloat(vals[9]) || 100,
      csat: parseFloat(vals[10]) || 4.5,
      serviceVolume: parseFloat(vals[11]) || 0,
      reward: parseFloat(vals[12]) || 0,
      penalty: parseFloat(vals[13]) || 0
    };
    AGENT_PERFORMANCE.push(agent);
  }
  saveAgentPerformance();
  renderModule('performance');
  alert("导入成功！共导入 " + (rows.length - 1) + " 条数据");
}

// 导出绩效数据（重写）
function exportPerformance() {
  var monthFilter = document.getElementById('pf-month')?.value || '2026-05';
  var data = AGENT_PERFORMANCE.filter(a => a.month === monthFilter);
  var headers = ['组别','项目','坐席姓名','客服类型','状态','绩效基数','销售额','转化率(%)','工作量','解决率(%)','响应时长(s)','CSAT','服务量','绩效分数','瓜分金额','奖励','惩罚','最终绩效'];
  var rows = data.map(a => {
    var p = PROJECTS.find(pp => pp.id === a.projectId);
    var base = getBaseSalary(a.status);
    var score = calcPerformanceScore(a, monthFilter);
    var share = calcShareAmount(a, monthFilter);
    var final = calcFinalPerformance(a, monthFilter);
    return [a.group, p?p.name:a.projectId, a.agentName, a.agentType, a.status, '¥'+base, a.salesAmount, a.conversionRate, a.workVolume, a.firstResolveRate, a.responseTime, a.csat, a.serviceVolume, (score*100).toFixed(0)+'%', '¥'+share.toFixed(0), '¥'+a.reward, '¥'+a.penalty, '¥'+final.toFixed(0)];
  });
  showExportDialog(headers, rows, `客服绩效_${monthFilter}`, '客服绩效看板');
}


// ===== 项目风险预警池 =====// ===== 项目风险预警池 =====
