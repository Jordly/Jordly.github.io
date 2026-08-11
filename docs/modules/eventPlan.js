// modules/eventPlan.js — 重要活动预案模块 · 基于2021版XCXD大促准备指导手册
/* ═══════════════════ 重要活动预案 ═══════════════════ */
var EVENT_PREP_DIMENSIONS = [
  {
    key: 'coreTarget',
    title: '核心目标',
    group: 'target',
    icon: '🎯',
    desc: '设定大促核心KPI目标，包含店铺销售额、客服销售占比、客服转化率、响应时间等指标。提前确定衡量标准，确保全团队统一方向。',
    items: ['店铺销售额目标设定', '客服销售额占比拆解', '客服转化率目标(对比往年同期)', '首次响应时间SLA', '退货率控制目标']
  },
  {
    key: 'overallChecklist',
    title: '总体检查项',
    group: 'target',
    icon: '✅',
    desc: '大促前的全面检查清单，涵盖人力储备、排班、目标预估、激励方案、营销规划、数据同步、订单反查、培训安排、质检安排、评价管控、AI分流、硬件设备、应急预案等13大类。',
    items: ['人力储备与招聘计划', '排班方案制定(含爆发日)', '目标预估与拆解', '激励方案制作', '营销规划(意向顾客收集/服务窗/智能营销)', '数据同步(每日报表/项目群同步)', '订单反查(风险订单/超时发货/发票/异常报备)', '培训安排(新人/产品/高频问题/活动规则/风险预警)', '质检安排(新员工辅导/TOP问题/活动质检标准)', '评价管控与刷单计划', 'AI分流提升计划', '硬件设备与工位检查', '食品饮品保障与应急预案']
  },
  {
    key: 'hrPlanning',
    title: '人力预估及储备招聘',
    group: 'hr',
    icon: '👥',
    desc: '提前2-3个月进行人力预估，合理预测客服接待量(精确到小时)。通过销售额反推接待人数，考虑AI分流率及转人工率，估算所需客服人数。预留10-20%的弹性储备。',
    items: ['销售额目标 → 客服销售额 → 客服客单价 → 销售人数', 'UV目标 → 咨询率 → 总咨询量 → 总接待量', '考虑AI分流与转人工率影响', '预测量精确到预售期及爆发期(小时级别)', '提前2-3个月启动招聘', '储备比例10-20%']
  },
  {
    key: 'shiftPlanPromo',
    title: '班务安排 - 大促期',
    group: 'hr',
    icon: '📅',
    desc: '大促期间(10.20-11.11)的班次安排，覆盖预售期～爆发前的日常运营阶段。合理安排人力，保证高峰时段有足够人员在线。',
    items: ['预售期(10.20-10.31)班次安排', '预售转正式活动切换期', '日常高峰时段人力覆盖', '调休排班(避免人员疲劳)', '组长/管理值班安排']
  },
  {
    key: 'shiftPlanPeak',
    title: '班务安排 - 爆发日',
    group: 'hr',
    icon: '🔥',
    desc: '11月11日爆发日当天班次安排，精确到小时。通常需要24小时连轴安排，4班倒或3班倒，关键时段(0-2点、10-12点)加派人手。',
    items: ['爆发日24小时排班(精确到小时)', '0-2点开场爆发期重点覆盖', '10-12点午间高峰加派人手', '晚20-24点收尾期保障', '其他岗位支援客服计划', '加班餐饮与休息安排']
  },
  {
    key: 'incentive',
    title: '激励制度',
    group: 'hr',
    icon: '🏆',
    desc: '大促期间的激励方案，包括销售激励(销售额排名、转化率冠军)、服务激励(响应速度、满意度)、团队激励(小组PK)等，激发员工积极性。',
    items: ['销售额排名激励', '转化率排名激励', '响应速度/服务指标激励', '团队PK/小组对抗激励', '日激励+周激励+全程激励', '非销售类岗位激励方案']
  },
  {
    key: 'marketing',
    title: '智能营销排期',
    group: 'support',
    icon: '📱',
    desc: '大促期间的智能营销计划，包括服务窗消息推送时间、意向顾客跟进节奏、催付话术排期、活动信息群发等。',
    items: ['服务窗消息推送时间表', '意向顾客收集与跟进节奏', '催付话术与时间点', '活动信息/优惠规则群发', '店小蜜主动营销话术配置']
  },
  {
    key: 'reviewControl',
    title: '评价管控',
    group: 'risk',
    icon: '⭐',
    desc: '大促期间的评价管理策略，预防差评暴增。包括评价监控、回评话术、差评追回流程、DSR维护方案。',
    items: ['店铺DSR监控(描述/服务/物流)', '差评实时预警与追回流程', '好评引导与激励', '评价回复话术库', '恶意差评应对预案']
  },
  {
    key: 'dataMonitor',
    title: '数据监控',
    group: 'target',
    icon: '📊',
    desc: '大促期间的实时数据监控看板，包括销售额、转化率、响应时间、满意度、接待量等核心指标的实时追踪与预警。',
    items: ['销售额实时追踪', '转化率实时监控', '响应时间SLA预警', '接单量/接待量监控', '客服个人/小组业绩看板', '数据异常自动告警']
  },
  {
    key: 'riskOrders',
    title: '风险订单规避',
    group: 'risk',
    icon: '🛡️',
    desc: '大促期间高退款风险、恶意订单的识别与规避方案。包括地址异常、批量下单、异常优惠使用等风控场景。',
    items: ['地址异常订单识别', '批量下单监控', '异常优惠使用检测', '高风险订单加签流程', '物流异常预警应对']
  },
  {
    key: 'deliveryCheck',
    title: '发货与发票反查',
    group: 'risk',
    icon: '📦',
    desc: '大促期间超时发货、发票问题的反查机制。包括发货时效监控、发票开具跟踪、物流异常反馈流程。',
    items: ['超时发货订单反查', '发票开具状态跟踪', '物流揽收/运输异常跟进', '退货退款时效监控', '异常订单每日汇总上报']
  },
  {
    key: 'priceCalc',
    title: '价格优惠计算',
    group: 'risk',
    icon: '💰',
    desc: '大促期间的跨店满减、店铺券、平台券等叠加优惠计算规则。确保客服能准确回答顾客关于到手价的问题。',
    items: ['跨店满减规则梳理', '店铺优惠券叠加规则', '平台红包/津贴使用条件', '到手价计算器/话术', '价保规则说明']
  },
  {
    key: 'training',
    title: '大促培训逻辑',
    group: 'support',
    icon: '📚',
    desc: '大促前的员工培训体系，包括新员工产品培训、高频问题速成、活动规则讲解、风险预警培训、话术演练等。',
    items: ['新人培训(9月前完成全部)', '主推产品集中培训', '高频问题速成培训', '活动优惠规则培训', '风险预警与投诉处理培训', '首映语/话术演练与审核']
  },
  {
    key: 'aiDiversion',
    title: 'AI分流提升',
    group: 'support',
    icon: '🤖',
    desc: '店小蜜(或类似AI客服)的优化方案，提升AI分流率和解决率，减少人工接待压力。包括知识库更新、意图识别优化、转人工规则设置。',
    items: ['店小蜜知识库更新(活动/优惠/产品)', '新意图识别与配置', 'AI解决率目标设定', '转人工规则优化', 'AI+人工协同流程']
  },
  {
    key: 'hardware',
    title: '硬件设备检查',
    group: 'support',
    icon: '💻',
    desc: '大促前硬件设备全面检查，包括电脑卡顿检测、键盘鼠标灵敏度测试、备用设备准备。每组备10-20%的鼠标键盘及1-2台备用电脑。',
    items: ['电脑性能检查(卡顿/内存/硬盘)', '键盘/鼠标灵敏度测试', '备用鼠标键盘储备(每组10-20%)', '备用手提/台式电脑(每组1-2台)', '网络稳定性压力测试', '断电/断网应急预案']
  },
  {
    key: 'workplaceNotes',
    title: '工位注意事项贴',
    group: 'support',
    icon: '📋',
    desc: '大促期间工位的注意事项提示，包括设备使用规范、紧急联系方式、流程速查等。贴在每个工位上方便随时查阅。',
    items: ['紧急联系电话(IT/行政/负责人)', '设备故障报修流程', '重要流程速查卡', '活动优惠速查表', '交接班注意事项']
  },
  {
    key: 'foodBeverage',
    title: '食品饮品保障',
    group: 'support',
    icon: '🍱',
    desc: '大促期间的餐饮保障方案，尤其是爆发日全天的食品补给。包括正餐安排、夜宵准备、提神饮品、零食储备等。',
    items: ['爆发日正餐(午餐/晚餐)安排', '夜宵准备(零点前后)', '提神饮品(咖啡/茶/红牛)', '零食水果补给', '特殊饮食需求统计(过敏/忌口)']
  },
  {
    key: 'emergency',
    title: '应急方案与重点预防',
    group: 'risk',
    icon: '🚨',
    desc: '大促期间各类突发情况的应急预案，包括系统宕机、断电断网、投诉暴增、舆情危机、人员突发离职等场景。',
    items: ['系统宕机应急(电商平台/客服系统)', '电力中断应急(UPS/发电机)', '网络中断应急(4G/5G热点备份)', '大规模投诉/舆情应对', '关键人员突发离职替补方案', '防疫/安全应急']
  },
  {
    key: 'qaStandards',
    title: '质检安排',
    group: 'risk',
    icon: '🔍',
    desc: '大促期间的质检重点与标准调整。新员工加强辅导，TOP问题收集分析，询单流失分析。活动期间适当调整质检标准尺度。',
    items: ['新员工技能加强辅导计划', 'TOP问题收集与根因分析', '询单流失原因分析', '活动期间质检标准调整', '质检日报/周报机制']
  }
];

var EVENT_PREP_GROUPS = [
  {key:'target', label:'📊 目标与数据', desc:'KPI设定、数据监控、检查清单'},
  {key:'hr', label:'👥 人力与排班', desc:'人力预估、班务安排、激励制度'},
  {key:'risk', label:'🛡️ 风控与质量', desc:'风险订单、评价管控、应急方案、质检'},
  {key:'support', label:'🔧 保障与支持', desc:'培训、AI分流、营销、硬件、食品保障'}
];

var _eventPrepExpanded = {}; // { key: true/false } — 记录每个维度的展开状态

/* ═══ 渲染主函数 ═══ */
function renderEventPlan() {
  try {
    var html = '';

    // === 顶部标题栏 ===
    html += '<div class="module-header">';
    html += '<div><div class="module-title">📋 重要活动预案</div>';
    html += '<div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">基于XCXD客服中心大促准备指导手册 · 参考作战大图，系统化做好每一次重要活动准备</div></div>';
    html += '</div>';

    // === 作战大图横幅 ===
    html += '<div style="margin-bottom:16px;padding:14px 16px;background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border-radius:10px;border:1px solid #bae6fd;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">';
    html += '<div style="display:flex;align-items:center;gap:10px;">';
    html += '<div style="width:48px;height:48px;background:#0ea5e9;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;color:#fff;flex-shrink:0;">🗺️</div>';
    html += '<div><div style="font-size:13px;font-weight:600;color:#0c4a6e;">双11大促作战大图</div><div style="font-size:11px;color:#0284c7;">全流程规划可视化参考 · 点击查看完整大图</div></div>';
    html += '</div>';
    html += '<button class="btn btn-sm btn-primary" onclick="viewCampaignImage()" style="background:#0ea5e9;border-color:#0ea5e9;flex-shrink:0;">📷 查看大图</button>';
    html += '</div>';

    // === 时间线提示 ===
    html += '<div style="display:flex;gap:4px;margin-bottom:16px;overflow-x:auto;padding-bottom:4px;">';
    var phases = [
      {time:'T-90天', label:'启动准备', desc:'人力预估、目标拆解'},
      {time:'T-60天', label:'招聘培训', desc:'人员招聘、产品培训'},
      {time:'T-30天', label:'方案落地', desc:'排班确定、激励公布'},
      {time:'T-14天', label:'精准备战', desc:'硬件检查、话术演练'},
      {time:'T-7天', label:'预演冲刺', desc:'模拟演练、物资到位'},
      {time:'T-1天', label:'就绪确认', desc:'最终检查、全员动员'},
      {time:'D-Day', label:'爆发日', desc:'全时值守、实时监控'}
    ];
    phases.forEach(function(ph, idx) {
      var isLast = idx === phases.length - 1;
      html += '<div style="flex:1;min-width:90px;text-align:center;padding:8px 6px;background:'+(isLast?'#fef2f2':'#f8fafc')+';border-radius:6px;border:1px solid '+(isLast?'#fecaca':'#e2e8f0')+';position:relative;">';
      html += '<div style="font-size:10px;color:#64748b;">'+ph.time+'</div>';
      html += '<div style="font-size:13px;font-weight:'+(isLast?'700':'500')+';color:'+(isLast?'#dc2626':'#1e293b')+';margin-top:2px;">'+ph.label+'</div>';
      html += '<div style="font-size:9px;color:#94a3b8;margin-top:1px;">'+ph.desc+'</div>';
      html += '</div>';
    });
    html += '</div>';

    // === 按分组渲染维度卡片 ===
    EVENT_PREP_GROUPS.forEach(function(grp) {
      var dims = EVENT_PREP_DIMENSIONS.filter(function(d) { return d.group === grp.key; });
      if (dims.length === 0) return;

      html += '<div style="margin-bottom:14px;">';
      // 分组标题
      html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;padding-bottom:4px;border-bottom:1px solid #e2e8f0;">';
      html += '<span style="font-size:13px;font-weight:600;color:#334155;">'+grp.label+'</span>';
      html += '<span style="font-size:11px;color:#94a3b8;">'+grp.desc+'</span>';
      html += '<span style="font-size:11px;color:#94a3b8;margin-left:auto;">'+dims.length+'项</span>';
      html += '</div>';

      // 维度卡片网格
      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:8px;">';
      dims.forEach(function(dim) {
        var isExpanded = _eventPrepExpanded[dim.key] === true;
        html += '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;transition:all 0.2s;">';
        // 卡片头部(可点击展开)
        html += '<div style="display:flex;align-items:center;gap:8px;padding:10px 12px;cursor:pointer;background:'+(isExpanded?'#f0f9ff':'#fff')+';border-bottom:'+(isExpanded?'1px solid #e0f2fe':'none')+';" onclick="toggleEventDimension(\''+dim.key+'\')">';
        html += '<span style="font-size:16px;flex-shrink:0;">'+dim.icon+'</span>';
        html += '<div style="flex:1;min-width:0;">';
        html += '<div style="font-size:12px;font-weight:600;color:#1e293b;">'+dim.title+'</div>';
        html += '<div style="font-size:10px;color:#94a3b8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+(dim.desc||'').substring(0,60)+'</div>';
        html += '</div>';
        html += '<span style="font-size:12px;color:#94a3b8;flex-shrink:0;transition:0.2s;transform:'+(isExpanded?'rotate(180deg)':'')+';">▾</span>';
        html += '</div>';
        // 卡片展开内容
        if (isExpanded) {
          html += '<div style="padding:10px 12px;background:#f8fafc;">';
          html += '<div style="font-size:11px;color:#475569;line-height:1.7;margin-bottom:8px;">'+dim.desc+'</div>';
          html += '<div style="font-size:10px;color:#64748b;margin-bottom:4px;font-weight:500;">准备事项清单：</div>';
          html += '<ul style="margin:0;padding:0 0 0 14px;font-size:11px;color:#475569;line-height:1.8;">';
          dim.items.forEach(function(item) {
            html += '<li>'+item+'</li>';
          });
          html += '</ul></div>';
        }
        html += '</div>';
      });
      html += '</div></div>';
    });

    // === 底部提示 ===
    html += '<div style="margin-top:20px;padding:12px;background:#f8fafc;border-radius:8px;font-size:11px;color:#64748b;text-align:center;">';
    html += '💡 提示：以上内容基于「XCXD客服中心大促准备指导手册(2021版)」整理，具体方案请根据品牌/项目实际情况调整。<br>';
    html += '完整Excel指导手册和双11作战大图可联系管理员获取。';
    html += '</div>';

    return html;
  } catch(e) {
    console.error('eventPlan 渲染异常:', e);
    if (typeof addRuntimeLog === 'function') addRuntimeLog('error', 'eventPlan 渲染失败', String(e && e.message || e));
    return '<div style="padding:40px;text-align:center;"><h3>⚠️ 加载失败</h3><p>请刷新页面重试</p></div>';
  }
}

/* ═══ 展开/折叠维度 ═══ */
function toggleEventDimension(key) {
  _eventPrepExpanded[key] = !_eventPrepExpanded[key];
  if (typeof _moduleCache !== 'undefined') _moduleCache['eventPlan'] = null;
  renderModule('eventPlan');
}

/* ═══ 查看大图弹窗 ═══ */
function viewCampaignImage() {
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:pointer;';
  overlay.innerHTML = '<div style="max-width:95%;max-height:95%;position:relative;">'
    + '<button style="position:absolute;top:-36px;right:0;background:none;border:none;color:#fff;font-size:28px;cursor:pointer;line-height:1;" onclick="this.closest(\'div[style]\').parentElement.remove()">&times;</button>'
    + '<img src="assets/campaign-map.jpg" style="max-width:100%;max-height:90vh;border-radius:8px;box-shadow:0 20px 60px rgba(0,0,0,0.5);" alt="双11大促作战大图" onerror="this.onerror=null;this.src=\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22400%22%3E%3Crect fill=%22%23f1f5f9%22 width=%22600%22 height=%22400%22/%3E%3Ctext fill=%22%2394a3b8%22 font-size=%2216%22 font-family=%22sans-serif%22 text-anchor=%22middle%22 x=%22300%22 y=%22190%22%3E大图尚未上传%3C/text%3E%3Ctext fill=%22%2394a3b8%22 font-size=%2212%22 font-family=%22sans-serif%22 text-anchor=%22middle%22 x=%22300%22 y=%22210%22%3E请将「双11大促作战大图.jpg」放入 docs/assets/ 目录%3C/text%3E%3C/svg%3E\'">'
    + '</div>';
  overlay.onclick = function(e) { if (e.target === this) this.remove(); };
  document.body.appendChild(overlay);
}

/* ═══ 知识能量池内嵌视图（精简版，去掉独立标题和导航） ═══ */
function _renderEventPlanInline() {
  try {
    var html = '';
    // 作战大图横幅
    html += '<div style="margin-bottom:14px;padding:12px 14px;background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border-radius:8px;border:1px solid #bae6fd;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">';
    html += '<div style="display:flex;align-items:center;gap:8px;">';
    html += '<span style="font-size:18px;">🗺️</span>';
    html += '<div><div style="font-size:12px;font-weight:600;color:#0c4a6e;">双11大促作战大图</div><div style="font-size:10px;color:#0284c7;">全流程规划可视化参考</div></div>';
    html += '</div>';
    html += '<button class="btn btn-xs btn-primary" onclick="viewCampaignImage()" style="background:#0ea5e9;border-color:#0ea5e9;">📷 查看大图</button>';
    html += '</div>';

    // 时间线
    html += '<div style="display:flex;gap:3px;margin-bottom:14px;overflow-x:auto;padding-bottom:2px;">';
    var phases = ['T-90天','T-60天','T-30天','T-14天','T-7天','T-1天','D-Day'];
    var phNames = ['启动准备','招聘培训','方案落地','精准备战','预演冲刺','就绪确认','爆发日'];
    phases.forEach(function(ph, idx) {
      var isLast = idx === phases.length - 1;
      html += '<div style="flex:1;min-width:70px;text-align:center;padding:6px 4px;background:'+(isLast?'#fef2f2':'#f8fafc')+';border-radius:5px;border:1px solid '+(isLast?'#fecaca':'#e2e8f0')+';font-size:10px;">';
      html += '<div style="color:#64748b;">'+ph+'</div>';
      html += '<div style="font-weight:'+(isLast?'700':'400')+';color:'+(isLast?'#dc2626':'#475569')+';margin-top:1px;">'+phNames[idx]+'</div>';
      html += '</div>';
    });
    html += '</div>';

    // 维度卡片
    EVENT_PREP_GROUPS.forEach(function(grp) {
      var dims = EVENT_PREP_DIMENSIONS.filter(function(d) { return d.group === grp.key; });
      if (dims.length === 0) return;
      html += '<div style="margin-bottom:10px;">';
      html += '<div style="font-size:12px;font-weight:600;color:#334155;margin-bottom:6px;padding-bottom:3px;border-bottom:1px solid #e2e8f0;">'+grp.label+' · '+dims.length+'项</div>';
      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:6px;">';
      dims.forEach(function(dim) {
        var isExpanded = _eventPrepExpanded[dim.key] === true;
        html += '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;">';
        html += '<div style="display:flex;align-items:center;gap:6px;padding:8px 10px;cursor:pointer;background:'+(isExpanded?'#f0f9ff':'#fff')+';" onclick="toggleEventDimension(\''+dim.key+'\')">';
        html += '<span style="font-size:14px;">'+dim.icon+'</span>';
        html += '<span style="flex:1;font-size:11px;font-weight:500;color:#1e293b;">'+dim.title+'</span>';
        html += '<span style="font-size:10px;color:#94a3b8;transition:0.2s;transform:'+(isExpanded?'rotate(180deg)':'')+';">▾</span>';
        html += '</div>';
        if (isExpanded) {
          html += '<div style="padding:8px 10px;background:#f8fafc;border-top:1px solid #e2e8f0;">';
          html += '<div style="font-size:10px;color:#64748b;line-height:1.6;margin-bottom:6px;">'+dim.desc+'</div>';
          html += '<ul style="margin:0;padding:0 0 0 12px;font-size:10px;color:#475569;line-height:1.7;">';
          dim.items.forEach(function(item) { html += '<li>'+item+'</li>'; });
          html += '</ul></div>';
        }
        html += '</div>';
      });
      html += '</div></div>';
    });

    html += '<div style="padding:10px;background:#f8fafc;border-radius:6px;font-size:10px;color:#94a3b8;text-align:center;margin-top:12px;">';
    html += '💡 以上内容基于「XCXD客服中心大促准备指导手册(2021版)」整理 · 具体方案请根据品牌/项目实际情况调整</div>';
    return html;
  } catch(e) { return '<div style="padding:20px;color:#dc2626;">⚠️ 活动预案加载失败</div>'; }
}
