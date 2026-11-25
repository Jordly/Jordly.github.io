// modules/eventPlan.js — 特殊活动预案管理 · 登记 + 审批流程
/* ═══════════════════ 特殊活动预案 ═══════════════════ */
// 数据结构：chansee_special_event_plans = [{id,name,type,startTime,endTime,manager,contact,arrangements:{key:text},status,submitter,approver,approveNote,createdAt,updatedAt}]
// 状态流转：draft(草稿) → pending(待审批) → approved(已通过) → progress(推进中)；pending → rejected(已驳回) → draft
// 命名规范：本模块所有新增函数以 sep 前缀，避免与全局函数重名

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
  {key:'target', label:'📊 目标与数据', desc:'KPI设定、数据监控、检查清单', color:'#3b82f6'},
  {key:'hr', label:'👥 人力与排班', desc:'人力预估、班务安排、激励制度', color:'#0b9b96'},
  {key:'risk', label:'🛡️ 风控与质量', desc:'风险订单、评价管控、应急方案、质检', color:'#D85A30'},
  {key:'support', label:'🔧 保障与支持', desc:'培训、AI分流、营销、硬件、食品保障', color:'#8b5cf6'}
];

var SEP_PHASES = [
  {time:'T-90天', label:'启动准备', desc:'人力预估、目标拆解', color:'#1D9E75', points:['根据销售额目标预估所需客服人数，精确到小时','拆解核心KPI：销售额、转化率、响应时长、退货率','确定项目负责人及运营对接人，建立沟通群']},
  {time:'T-60天', label:'招聘培训', desc:'人员招聘、产品培训', color:'#378ADD', points:['启动招聘，预留10-20%弹性储备人力','完成主推产品与高频问题集中培训','准备激励方案初稿，明确考核口径']},
  {time:'T-30天', label:'方案落地', desc:'排班确定、激励公布', color:'#7F77DD', points:['确认预售期与爆发期班表，覆盖高峰时段','公布激励方案，确保全员理解规则','完成智能营销排期与话术配置']},
  {time:'T-14天', label:'精准备战', desc:'硬件检查、话术演练', color:'#D85A30', points:['电脑、网络、备用设备全面检查','活动规则与优惠计算话术演练','收集高频问题，更新店小蜜知识库']},
  {time:'T-7天', label:'预演冲刺', desc:'模拟演练、物资到位', color:'#D4537E', points:['全流程模拟演练，验证排班与响应流程','食品饮品、夜宵、应急物资到位','应急预案复盘，明确异常上报路径']},
  {time:'T-1天', label:'就绪确认', desc:'最终检查、全员动员', color:'#BA7517', points:['逐项核对检查清单，确认无遗漏','全员动员，同步值班表与紧急联系方式','确认工位注意事项贴已就位']},
  {time:'D-Day', label:'爆发日', desc:'全时值守、实时监控', color:'#A32D2D', points:['全时段值守，重点覆盖0-2点、10-12点高峰','实时盯盘：销售额、转化率、响应时间','异常订单与客诉第一时间上报处置']}
];

var SEP_STORAGE_KEY = 'chansee_special_event_plans';
var SEP_STATUS = {
  draft:    {label:'草稿',   color:'#64748b', bg:'#f1f5f9'},
  pending:  {label:'待审批', color:'#BA7517', bg:'#FAEEDA'},
  approved: {label:'已通过', color:'#0F6E56', bg:'#E1F5EE'},
  rejected: {label:'已驳回', color:'#A32D2D', bg:'#FCEBEB'},
  progress: {label:'推进中', color:'#185FA5', bg:'#E6F1FB'}
};
var SEP_STATE = { view:'list', filter:'all', currentId:null, rejectingId:null, phase:-1, guideGroup:null };
var _eventPrepExpanded = {};

/* ═══ 工具函数 ═══ */
function sepEsc(v){
  var s = (v === null || v === undefined) ? '' : String(v);
  if (typeof escHtml === 'function') return escHtml(s);
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function sepUid(){
  return 'SEP' + Date.now().toString(36).toUpperCase() + Math.floor(Math.random()*1000).toString(36).toUpperCase();
}
function sepLoad(){
  try {
    var raw = localStorage.getItem(SEP_STORAGE_KEY);
    var arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch(e) { return []; }
}
function sepSave(arr){
  try {
    if (typeof safeSetItem === 'function') return safeSetItem(SEP_STORAGE_KEY, JSON.stringify(arr));
    localStorage.setItem(SEP_STORAGE_KEY, JSON.stringify(arr));
    return true;
  } catch(e) {
    if (typeof showToast === 'function') showToast('保存失败：浏览器存储空间可能已满', 'error');
    return false;
  }
}
function sepFind(id){
  var arr = sepLoad();
  for (var i=0;i<arr.length;i++){ if (arr[i].id === id) return arr[i]; }
  return null;
}
function sepCompletion(plan){
  var a = plan.arrangements || {};
  var n = 0;
  for (var i=0;i<EVENT_PREP_DIMENSIONS.length;i++){
    var v = a[EVENT_PREP_DIMENSIONS[i].key];
    if (v && String(v).trim()) n++;
  }
  return n;
}
function sepIsAdmin(){
  return (typeof isAdmin === 'function' && isAdmin()) || (typeof currentUser !== 'undefined' && currentUser && currentUser.role === '管理员');
}
function sepCanEdit(plan){
  if (!plan) return false;
  if (sepIsAdmin()) return true;
  return plan.status === 'draft' || plan.status === 'rejected';
}
function sepNow(){
  var d = new Date();
  function p(n){ return n<10 ? '0'+n : ''+n; }
  return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())+' '+p(d.getHours())+':'+p(d.getMinutes());
}
function sepRefresh(){
  if (typeof _moduleCache !== 'undefined') _moduleCache['eventPlan'] = null;
  if (typeof renderModule === 'function') renderModule('eventPlan');
  else {
    var area = document.getElementById('module-content');
    if (area) area.innerHTML = renderEventPlan();
  }
}
function sepBadge(status){
  var s = SEP_STATUS[status] || SEP_STATUS.draft;
  return '<span style="display:inline-block;padding:2px 9px;border-radius:11px;font-size:11px;font-weight:500;color:'+s.color+';background:'+s.bg+';">'+s.label+'</span>';
}
function sepToast(msg, type){
  if (typeof showToast === 'function') showToast(msg, type || 'success');
  else alert(msg);
}

/* ═══ 主渲染 ═══ */
function renderEventPlan() {
  try {
    var html = sepRenderHeader();
    if (SEP_STATE.view === 'create' || SEP_STATE.view === 'edit') {
      html += sepRenderForm();
    } else if (SEP_STATE.view === 'detail') {
      html += sepRenderDetail();
    } else {
      html += sepRenderListPage();
    }
    html += sepRenderGuide();
    return html;
  } catch(e) {
    console.error('eventPlan 渲染异常:', e);
    if (typeof addRuntimeLog === 'function') addRuntimeLog('error', 'eventPlan 渲染失败', String(e && e.message || e));
    return '<div style="padding:40px;text-align:center;"><h3>⚠️ 加载失败</h3><p>请刷新页面重试</p></div>';
  }
}

/* ═══ 顶部：标题 + 作战大图 + 时间线 ═══ */
function sepRenderHeader(){
  var html = '';
  html += '<div class="module-header">';
  html += '<div><div class="module-title">📋 特殊活动预案管理</div>';
  html += '<div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">登记活动安排 · 提交审批 · 按计划推进 —— 系统化做好每一次重要活动</div></div>';
  html += '</div>';

  html += '<div style="margin-bottom:16px;padding:14px 16px;background:linear-gradient(135deg,#E1F5EE,#E6F1FB);border-radius:10px;border:1px solid #9FE1CB;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">';
  html += '<div style="display:flex;align-items:center;gap:10px;">';
  html += '<div style="width:46px;height:46px;background:#0b9b96;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;color:#fff;flex-shrink:0;">🗺️</div>';
  html += '<div><div style="font-size:13px;font-weight:600;color:#0F6E56;">大促作战大图</div><div style="font-size:11px;color:#0F6E56;">全流程规划可视化参考 · 点击查看完整大图</div></div></div>';
  html += '<button class="btn btn-sm btn-primary" onclick="viewCampaignImage()" style="background:#0b9b96;border-color:#0b9b96;flex-shrink:0;">📷 查看大图</button>';
  html += '</div>';

  html += '<div style="display:flex;gap:4px;margin-bottom:8px;overflow-x:auto;padding-bottom:4px;">';
  for (var i=0;i<SEP_PHASES.length;i++){
    var ph = SEP_PHASES[i];
    var isLast = i === SEP_PHASES.length - 1;
    var sel = SEP_STATE.phase === i;
    html += '<div id="sep_phase_'+i+'" onclick="sepTogglePhase('+i+')" title="点击查看该阶段要点" style="cursor:pointer;flex:1;min-width:92px;text-align:center;padding:8px 6px;background:'+(sel?ph.color+'14':(isLast?'#FCEBEB':'#f8fafc'))+';border-radius:6px;border:1px solid '+(sel?ph.color:(isLast?'#F7C1C1':'#e2e8f0'))+';position:relative;">';
    html += '<div style="width:8px;height:8px;border-radius:50%;background:'+ph.color+';margin:0 auto 4px;"></div>';
    html += '<div style="font-size:10px;color:#64748b;">'+ph.time+'</div>';
    html += '<div style="font-size:13px;font-weight:'+(isLast?'700':'500')+';color:'+(isLast?'#A32D2D':'#1e293b')+';margin-top:2px;">'+ph.label+'</div>';
    html += '<div style="font-size:9px;color:#94a3b8;margin-top:1px;">'+ph.desc+'</div>';
    html += '</div>';
  }
  html += '</div>';
  html += '<div id="sep_phase_detail" style="margin-bottom:16px;">' + sepPhaseDetailHtml() + '</div>';
  return html;
}
function sepPhaseDetailHtml(){
  var i = SEP_STATE.phase;
  if (i < 0 || i >= SEP_PHASES.length){
    return '<div style="font-size:10px;color:#94a3b8;text-align:center;padding:2px 0 6px;">↑ 点击上方任一阶段，查看该阶段要做什么</div>';
  }
  var ph = SEP_PHASES[i];
  var h = '<div style="padding:10px 14px;background:#fff;border:1px solid '+ph.color+'44;border-left:3px solid '+ph.color+';border-radius:8px;">';
  h += '<div style="font-size:12px;font-weight:600;color:'+ph.color+';margin-bottom:5px;">'+ph.time+' · '+ph.label+' — 阶段要点</div>';
  h += '<ul style="margin:0;padding-left:17px;font-size:11px;color:#475569;line-height:1.8;">';
  for (var j=0;j<ph.points.length;j++) h += '<li>'+sepEsc(ph.points[j])+'</li>';
  h += '</ul></div>';
  return h;
}
function sepTogglePhase(i){
  SEP_STATE.phase = (SEP_STATE.phase === i) ? -1 : i;
  for (var k=0;k<SEP_PHASES.length;k++){
    var el = document.getElementById('sep_phase_'+k);
    if (!el) continue;
    var ph = SEP_PHASES[k];
    var isLast = k === SEP_PHASES.length - 1;
    var sel = SEP_STATE.phase === k;
    el.style.background = sel ? ph.color+'14' : (isLast?'#FCEBEB':'#f8fafc');
    el.style.borderColor = sel ? ph.color : (isLast?'#F7C1C1':'#e2e8f0');
  }
  var box = document.getElementById('sep_phase_detail');
  if (box) box.innerHTML = sepPhaseDetailHtml();
}

/* ═══ 预案清单页 ═══ */
function sepRenderListPage(){
  var arr = sepLoad();
  var counts = {all:arr.length, draft:0, pending:0, approved:0, rejected:0, progress:0};
  for (var i=0;i<arr.length;i++){ if (counts[arr[i].status] !== undefined) counts[arr[i].status]++; }

  var html = '';
  html += '<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;">';
  var statKeys = ['all','draft','pending','approved','progress','rejected'];
  for (var k=0;k<statKeys.length;k++){
    var key = statKeys[k];
    var info = key === 'all' ? {label:'全部预案', color:'#334155', bg:'#f1f5f9'} : SEP_STATUS[key];
    var active = SEP_STATE.filter === key;
    html += '<div onclick="sepSetFilter(\''+key+'\')" style="cursor:pointer;min-width:96px;padding:9px 12px;border-radius:8px;border:1px solid '+(active?info.color:'#e2e8f0')+';background:'+(active?info.bg:'#fff')+';">';
    html += '<div style="font-size:11px;color:'+info.color+';">'+info.label+'</div>';
    html += '<div style="font-size:19px;font-weight:600;color:'+info.color+';margin-top:2px;">'+counts[key]+'</div>';
    html += '</div>';
  }
  html += '</div>';

  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;gap:10px;flex-wrap:wrap;">';
  html += '<div style="font-size:13px;font-weight:600;color:#334155;">预案清单 <span style="font-size:11px;color:#94a3b8;font-weight:400;">共 '+counts[SEP_STATE.filter]+' 条</span></div>';
  html += '<button class="btn btn-sm btn-primary" onclick="sepOpenCreate()" style="background:linear-gradient(135deg,#0b9b96,#3b82f6);border:none;">＋ 新建预案</button>';
  html += '</div>';

  var list = SEP_STATE.filter === 'all' ? arr : arr.filter(function(p){ return p.status === SEP_STATE.filter; });
  list = list.slice().sort(function(a,b){ return (b.createdAt||'').localeCompare(a.createdAt||''); });

  if (list.length === 0){
    html += '<div style="padding:44px 20px;text-align:center;background:#fff;border:1px dashed #cbd5e1;border-radius:10px;">';
    html += '<div style="font-size:32px;color:#cbd5e1;">📭</div>';
    html += '<div style="font-size:13px;color:#64748b;margin-top:8px;">还没有预案记录</div>';
    html += '<div style="font-size:11px;color:#94a3b8;margin-top:4px;">点右上角「＋ 新建预案」，开始登记一次活动的安排</div>';
    html += '</div>';
    return html;
  }

  html += '<div style="display:flex;flex-direction:column;gap:8px;">';
  for (var j=0;j<list.length;j++) html += sepRenderPlanCard(list[j]);
  html += '</div>';
  return html;
}

function sepRenderPlanCard(p){
  var done = sepCompletion(p);
  var pct = Math.round(done / EVENT_PREP_DIMENSIONS.length * 100);
  var st = SEP_STATUS[p.status] || SEP_STATUS.draft;
  var html = '';
  html += '<div style="background:#fff;border:1px solid #e2e8f0;border-left:4px solid '+st.color+';border-radius:9px;padding:12px 14px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">';
  html += '<div style="flex:1;min-width:220px;">';
  html += '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">';
  html += '<span style="font-size:13px;font-weight:600;color:#1e293b;">'+sepEsc(p.name)+'</span>';
  html += sepBadge(p.status);
  html += '<span style="font-size:10px;color:#94a3b8;background:#f1f5f9;padding:2px 7px;border-radius:9px;">'+sepEsc(p.type||'未分类')+'</span>';
  html += '</div>';
  html += '<div style="font-size:11px;color:#64748b;margin-top:5px;">';
  html += (p.startTime ? '📅 '+sepEsc(p.startTime)+(p.endTime?' ~ '+sepEsc(p.endTime):'') : '📅 时间未填') + ' &nbsp;·&nbsp; 👤 '+sepEsc(p.manager||'负责人未填')+' &nbsp;·&nbsp; 更新于 '+sepEsc(p.updatedAt||p.createdAt||'-');
  html += '</div></div>';
  html += '<div style="min-width:132px;">';
  html += '<div style="font-size:10px;color:#64748b;margin-bottom:4px;">安排完成度 '+done+'/'+EVENT_PREP_DIMENSIONS.length+' 项</div>';
  html += '<div style="height:6px;background:#f1f5f9;border-radius:3px;overflow:hidden;"><div style="width:'+pct+'%;height:100%;background:linear-gradient(90deg,#0b9b96,#3b82f6);border-radius:3px;"></div></div>';
  html += '</div>';
  html += '<div style="display:flex;gap:5px;flex-wrap:wrap;">';
  html += '<button class="btn btn-xs" onclick="sepOpenDetail(\''+p.id+'\')">查看</button>';
  if (sepCanEdit(p) && p.status !== 'pending') html += '<button class="btn btn-xs" onclick="sepOpenEdit(\''+p.id+'\')">编辑</button>';
  if (p.status === 'draft' || p.status === 'rejected'){
    html += '<button class="btn btn-xs btn-primary" onclick="sepSubmit(\''+p.id+'\')">提交审批</button>';
  }
  if (p.status === 'approved'){
    html += '<button class="btn btn-xs btn-primary" onclick="sepStartProgress(\''+p.id+'\')">开始推进</button>';
  }
  if (sepIsAdmin()){
    html += '<button class="btn btn-xs" onclick="sepDelete(\''+p.id+'\')" style="color:#A32D2D;border-color:#F7C1C1;">删除</button>';
  }
  html += '</div></div>';
  return html;
}

/* ═══ 登记 / 编辑表单 ═══ */
function sepRenderForm(){
  var isEdit = SEP_STATE.view === 'edit';
  var plan = isEdit ? sepFind(SEP_STATE.currentId) : null;
  if (isEdit && !plan){
    SEP_STATE.view = 'list';
    return sepRenderListPage();
  }
  var a = plan ? (plan.arrangements||{}) : {};
  var html = '';
  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:10px;flex-wrap:wrap;">';
  html += '<div><div style="font-size:15px;font-weight:600;color:#1e293b;">'+(isEdit?'✏️ 编辑预案':'＋ 新建预案')+'</div>';
  html += '<div style="font-size:11px;color:#64748b;margin-top:3px;">填写基本情况 + 各项安排，可先保存草稿，之后继续补充</div></div>';
  html += '<button class="btn btn-sm" onclick="sepBackToList()">← 返回清单</button>';
  html += '</div>';

  html += '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;margin-bottom:14px;">';
  html += '<div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #f1f5f9;">① 基本信息</div>';
  html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;">';
  html += sepField('活动名称', 'sep_name', 'text', plan ? plan.name : '', '如：双11大促 / 618年中活动');
  html += sepField('活动类型', 'sep_type', 'select', plan ? plan.type : '大促', '', ['大促','日常活动','品牌活动','其他']);
  html += sepField('开始时间', 'sep_start', 'date', plan ? plan.startTime : '', '');
  html += sepField('结束时间', 'sep_end', 'date', plan ? plan.endTime : '', '');
  html += sepField('负责客服管理', 'sep_manager', 'text', plan ? plan.manager : '', '本预案的登记负责人');
  html += sepField('项目运营对接人', 'sep_contact', 'text', plan ? plan.contact : '', '运营侧通知人');
  html += '</div></div>';

  html += '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;margin-bottom:14px;">';
  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #f1f5f9;gap:8px;flex-wrap:wrap;">';
  html += '<div style="font-size:13px;font-weight:600;color:#334155;">② 各项安排 <span style="font-size:11px;color:#94a3b8;font-weight:400;">点分组展开填写，可只填部分</span></div>';
  html += '<div id="sep_completion_tip" style="font-size:11px;color:#0b9b96;font-weight:500;">已完成 0 / 19 项</div>';
  html += '</div>';
  html += '<div style="height:6px;background:#f1f5f9;border-radius:3px;overflow:hidden;margin-bottom:12px;"><div id="sep_form_progress" style="width:0%;height:100%;background:linear-gradient(90deg,#0b9b96,#3b82f6);border-radius:3px;transition:width .2s;"></div></div>';
  for (var g=0;g<EVENT_PREP_GROUPS.length;g++){
    var grp = EVENT_PREP_GROUPS[g];
    var dims = EVENT_PREP_DIMENSIONS.filter(function(d){ return d.group === grp.key; });
    var filled0 = 0;
    for (var z=0;z<dims.length;z++){ if (a[dims[z].key] && String(a[dims[z].key]).trim()) filled0++; }
    var open0 = filled0 > 0;
    html += '<div style="border:1px solid #e2e8f0;border-radius:8px;margin-bottom:8px;overflow:hidden;">';
    html += '<div onclick="sepToggleFormGroup(\''+grp.key+'\')" style="cursor:pointer;display:flex;align-items:center;gap:8px;padding:11px 13px;background:'+(open0?'#f8fafc':'#fff')+';">';
    html += '<span style="width:7px;height:18px;border-radius:3px;background:'+grp.color+';flex-shrink:0;"></span>';
    html += '<span style="font-size:13px;font-weight:600;color:#334155;">'+grp.label+'</span>';
    html += '<span id="sep_grp_count_'+grp.key+'" style="font-size:10px;color:'+(filled0?grp.color:'#94a3b8')+';background:'+(filled0?'#f1f5f9':'transparent')+';padding:2px 7px;border-radius:9px;">已填 '+filled0+' / '+dims.length+'</span>';
    html += '<span id="sep_grp_arrow_'+grp.key+'" style="margin-left:auto;font-size:11px;color:#94a3b8;">'+(open0?'▲ 收起':'▼ 展开')+'</span>';
    html += '</div>';
    html += '<div id="sep_grp_body_'+grp.key+'" style="display:'+(open0?'block':'none')+';padding:0 13px 12px;">';
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:9px;">';
    for (var d=0;d<dims.length;d++){
      var dim = dims[d];
      var val = a[dim.key] || '';
      html += '<div style="border:1px solid #e2e8f0;border-left:3px solid '+grp.color+';border-radius:7px;padding:9px;">';
      html += '<label title="'+sepEsc(dim.desc||'')+'" style="display:block;font-size:12px;font-weight:500;color:#1e293b;margin-bottom:5px;cursor:help;">'+dim.icon+' '+dim.title+'</label>';
      html += '<textarea id="sep_in_'+dim.key+'" oninput="sepUpdateCompletion()" placeholder="填写本次活动的具体安排…" style="width:100%;min-height:52px;font-size:11px;line-height:1.5;padding:7px 9px;border:1px solid #e2e8f0;border-radius:6px;resize:vertical;">'+sepEsc(val)+'</textarea>';
      html += '</div>';
    }
    html += '</div></div></div>';
  }
  html += '</div>';

  html += '<div style="display:flex;gap:8px;flex-wrap:wrap;">';
  html += '<button class="btn btn-sm" onclick="sepSaveDraft()">💾 保存草稿</button>';
  html += '<button class="btn btn-sm btn-primary" onclick="sepSubmit('+(isEdit?"'"+plan.id+"'":'null')+')" style="background:linear-gradient(135deg,#0b9b96,#3b82f6);border:none;">✅ 提交审批</button>';
  html += '<button class="btn btn-sm" onclick="sepBackToList()">取消</button>';
  html += '</div>';
  return html;
}

function sepField(label, id, type, val, placeholder, options){
  var html = '<div><label style="display:block;font-size:11px;color:#64748b;margin-bottom:4px;">'+label+'</label>';
  if (type === 'select'){
    html += '<select id="'+id+'" style="width:100%;font-size:12px;padding:7px 9px;border:1px solid #e2e8f0;border-radius:6px;">';
    for (var i=0;i<options.length;i++){
      html += '<option value="'+sepEsc(options[i])+'"'+(val===options[i]?' selected':'')+'>'+sepEsc(options[i])+'</option>';
    }
    html += '</select>';
  } else {
    html += '<input id="'+id+'" type="'+type+'" value="'+sepEsc(val)+'" placeholder="'+sepEsc(placeholder)+'" style="width:100%;font-size:12px;padding:7px 9px;border:1px solid #e2e8f0;border-radius:6px;">';
  }
  html += '</div>';
  return html;
}

function sepUpdateCompletion(){
  var n = 0;
  for (var i=0;i<EVENT_PREP_DIMENSIONS.length;i++){
    var el = document.getElementById('sep_in_'+EVENT_PREP_DIMENSIONS[i].key);
    if (el && el.value.trim()) n++;
  }
  var tip = document.getElementById('sep_completion_tip');
  if (tip) tip.textContent = '已完成 ' + n + ' / 19 项';
  var bar = document.getElementById('sep_form_progress');
  if (bar) bar.style.width = Math.round(n / EVENT_PREP_DIMENSIONS.length * 100) + '%';
  for (var g=0;g<EVENT_PREP_GROUPS.length;g++){
    var grp = EVENT_PREP_GROUPS[g];
    var ds = EVENT_PREP_DIMENSIONS.filter(function(d){ return d.group === grp.key; });
    var c = 0;
    for (var j=0;j<ds.length;j++){
      var e2 = document.getElementById('sep_in_'+ds[j].key);
      if (e2 && e2.value.trim()) c++;
    }
    var badge = document.getElementById('sep_grp_count_'+grp.key);
    if (badge){
      badge.textContent = '已填 ' + c + ' / ' + ds.length;
      badge.style.color = c ? grp.color : '#94a3b8';
    }
  }
}
function sepToggleFormGroup(key){
  var body = document.getElementById('sep_grp_body_'+key);
  var arrow = document.getElementById('sep_grp_arrow_'+key);
  if (!body) return;
  var open = body.style.display === 'none';
  body.style.display = open ? 'block' : 'none';
  if (arrow) arrow.textContent = open ? '▲ 收起' : '▼ 展开';
}

/* ═══ 详情 + 审批 ═══ */
function sepRenderDetail(){
  var p = sepFind(SEP_STATE.currentId);
  if (!p){ SEP_STATE.view = 'list'; return sepRenderListPage(); }
  var done = sepCompletion(p);
  var pct = Math.round(done/ EVENT_PREP_DIMENSIONS.length * 100);
  var st = SEP_STATUS[p.status] || SEP_STATUS.draft;
  var html = '';
  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:10px;flex-wrap:wrap;">';
  html += '<div style="display:flex;align-items:center;gap:9px;flex-wrap:wrap;"><button class="btn btn-sm" onclick="sepBackToList()">← 返回清单</button>';
  html += '<span style="font-size:15px;font-weight:600;color:#1e293b;">'+sepEsc(p.name)+'</span>'+sepBadge(p.status)+'</div>';
  html += '</div>';

  html += '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;margin-bottom:14px;">';
  html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;font-size:12px;">';
  html += sepInfo('活动类型', p.type);
  html += sepInfo('活动时间', (p.startTime||'-')+(p.endTime?' ~ '+p.endTime:''));
  html += sepInfo('负责客服管理', p.manager);
  html += sepInfo('项目运营对接人', p.contact);
  html += sepInfo('登记人', p.submitter);
  html += sepInfo('登记时间', p.createdAt);
  html += sepInfo('审批人', p.approver);
  html += sepInfo('审批时间', p.approvedAt);
  html += '</div>';
  html += '<div style="margin-top:12px;padding-top:10px;border-top:1px solid #f1f5f9;">';
  html += '<div style="font-size:11px;color:#64748b;margin-bottom:5px;">安排完成度：'+done+' / 19 项（'+pct+'%）</div>';
  html += '<div style="height:8px;background:#f1f5f9;border-radius:4px;overflow:hidden;"><div style="width:'+pct+'%;height:100%;background:linear-gradient(90deg,#0b9b96,#3b82f6);border-radius:4px;"></div></div>';
  html += '</div>';
  if (p.approveNote){
    html += '<div style="margin-top:10px;padding:9px 11px;background:'+(p.status==='rejected'?'#FCEBEB':'#E1F5EE')+';border-radius:7px;font-size:11px;color:'+(p.status==='rejected'?'#A32D2D':'#0F6E56')+';">审批意见：'+sepEsc(p.approveNote)+'</div>';
  }
  html += '</div>';

  html += '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;margin-bottom:14px;">';
  html += '<div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #f1f5f9;">登记的各项安排</div>';
  var a = p.arrangements || {};
  var any = false;
  for (var g=0;g<EVENT_PREP_GROUPS.length;g++){
    var grp = EVENT_PREP_GROUPS[g];
    var dims = EVENT_PREP_DIMENSIONS.filter(function(d){ return d.group === grp.key; });
    var filled = dims.filter(function(d){ return a[d.key] && String(a[d.key]).trim(); });
    if (filled.length === 0) continue;
    any = true;
    html += '<div style="margin-bottom:12px;">';
    html += '<div style="display:flex;align-items:center;gap:7px;margin-bottom:6px;"><span style="width:7px;height:13px;border-radius:3px;background:'+grp.color+';"></span><span style="font-size:12px;font-weight:600;color:#334155;">'+grp.label+'</span></div>';
    for (var i=0;i<filled.length;i++){
      html += '<div style="margin-bottom:7px;padding:8px 10px;background:#f8fafc;border-radius:6px;">';
      html += '<div style="font-size:11px;font-weight:500;color:#1e293b;">'+filled[i].icon+' '+filled[i].title+'</div>';
      html += '<div style="font-size:11px;color:#475569;line-height:1.6;margin-top:3px;white-space:pre-wrap;">'+sepEsc(a[filled[i].key])+'</div>';
      html += '</div>';
    }
    html += '</div>';
  }
  if (!any) html += '<div style="font-size:12px;color:#94a3b8;text-align:center;padding:14px;">尚未填写任何安排</div>';
  html += '</div>';

  html += '<div style="display:flex;gap:8px;flex-wrap:wrap;">';
  if (sepCanEdit(p) && p.status !== 'pending') html += '<button class="btn btn-sm" onclick="sepOpenEdit(\''+p.id+'\')">✏️ 编辑</button>';
  if (p.status === 'draft' || p.status === 'rejected') html += '<button class="btn btn-sm btn-primary" onclick="sepSubmit(\''+p.id+'\')">✅ 提交审批</button>';
  if (p.status === 'approved') html += '<button class="btn btn-sm btn-primary" onclick="sepStartProgress(\''+p.id+'\')">🚀 开始推进</button>';
  if (sepIsAdmin() && p.status === 'pending'){
    html += '<button class="btn btn-sm" onclick="sepApprove(\''+p.id+'\')" style="background:#0F6E56;color:#fff;border-color:#0F6E56;">✔️ 审批通过</button>';
    html += '<button class="btn btn-sm" onclick="sepToggleReject(\''+p.id+'\')" style="color:#A32D2D;border-color:#F7C1C1;">✖️ 驳回</button>';
  }
  html += '</div>';

  if (SEP_STATE.rejectingId === p.id){
    html += '<div style="margin-top:12px;background:#FCEBEB;border:1px solid #F7C1C1;border-radius:9px;padding:14px;">';
    html += '<div style="font-size:12px;font-weight:600;color:#A32D2D;margin-bottom:7px;">填写驳回意见</div>';
    html += '<textarea id="sep_reject_note" placeholder="请说明需要修改的地方…" style="width:100%;min-height:70px;font-size:12px;padding:9px;border:1px solid #F7C1C1;border-radius:6px;resize:vertical;"></textarea>';
    html += '<div style="display:flex;gap:8px;margin-top:8px;">';
    html += '<button class="btn btn-sm" onclick="sepDoReject(\''+p.id+'\')" style="color:#A32D2D;border-color:#A32D2D;">确认驳回</button>';
    html += '<button class="btn btn-sm" onclick="sepToggleReject(null)">取消</button>';
    html += '</div></div>';
  }
  return html;
}

function sepInfo(label, val){
  return '<div><div style="font-size:10px;color:#94a3b8;margin-bottom:2px;">'+label+'</div><div style="font-size:12px;color:#1e293b;">'+(val?sepEsc(val):'<span style="color:#cbd5e1;">未填</span>')+'</div></div>';
}

/* ═══ 填写指引（折叠） ═══ */
function sepRenderGuide(){
  var html = '';
  html += '<details style="margin-top:18px;background:#fff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">';
  html += '<summary style="cursor:pointer;padding:12px 16px;font-size:13px;font-weight:600;color:#334155;background:#f8fafc;list-style:none;display:flex;align-items:center;gap:8px;">';
  html += '<span>📖 预案填写指引（点击展开，按分组查看）</span>';
  html += '<span style="margin-left:auto;font-size:11px;color:#94a3b8;font-weight:400;">基于大促筹备指导手册整理</span>';
  html += '</summary>';
  html += '<div style="padding:16px;">';
  html += '<div style="font-size:11px;color:#94a3b8;margin-bottom:10px;">先选一个分组，查看该组各项该填什么</div>';
  html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:10px;">';
  for (var g=0;g<EVENT_PREP_GROUPS.length;g++){
    var grp = EVENT_PREP_GROUPS[g];
    var dims = EVENT_PREP_DIMENSIONS.filter(function(d){ return d.group === grp.key; });
    var on = SEP_STATE.guideGroup === grp.key;
    html += '<div id="sep_guide_card_'+grp.key+'" style="border:1px solid '+(on?grp.color:'#e2e8f0')+';border-radius:9px;overflow:hidden;background:#fff;">';
    html += '<div onclick="sepToggleGuideGroup(\''+grp.key+'\')" style="cursor:pointer;padding:12px 13px;background:'+(on?grp.color+'12':'#f8fafc')+';">';
    html += '<div style="display:flex;align-items:center;gap:7px;"><span style="width:6px;height:16px;border-radius:3px;background:'+grp.color+';"></span><span style="font-size:12px;font-weight:600;color:#334155;">'+grp.label.replace(/^[^\u4e00-\u9fff]+/, '')+'</span></div>';
    html += '<div style="font-size:10px;color:#64748b;margin-top:6px;line-height:1.5;">'+sepEsc(grp.desc)+'</div>';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;"><span style="font-size:10px;color:#94a3b8;">'+dims.length+' 项说明</span><span id="sep_guide_arrow_'+grp.key+'" style="font-size:10px;color:'+grp.color+';">'+(on?'▲ 收起':'▼ 查看要点')+'</span></div>';
    html += '</div>';
    html += '<div id="sep_guide_body_'+grp.key+'" style="display:'+(on?'block':'none')+';padding:11px 13px;max-height:420px;overflow-y:auto;">';
    for (var i=0;i<dims.length;i++){
      var dim = dims[i];
      html += '<div style="margin-bottom:9px;padding:9px 10px;background:#f8fafc;border-left:2px solid '+grp.color+';border-radius:5px;">';
      html += '<div style="font-size:11px;font-weight:600;color:#1e293b;">'+dim.icon+' '+dim.title+'</div>';
      html += '<div style="font-size:10px;color:#475569;line-height:1.6;margin-top:3px;">'+sepEsc(dim.desc)+'</div>';
      html += '<ul style="margin:4px 0 0;padding-left:15px;font-size:10px;color:#64748b;line-height:1.6;">';
      for (var j=0;j<dim.items.length;j++) html += '<li>'+sepEsc(dim.items[j])+'</li>';
      html += '</ul></div>';
    }
    html += '</div></div>';
  }
  html += '</div>';
  html += '<div style="text-align:center;font-size:11px;color:#94a3b8;padding-top:10px;border-top:1px solid #f1f5f9;margin-top:12px;">💡 指引内容基于「大促准备指导手册」整理，具体方案请根据项目实际情况填写</div>';
  html += '</div></details>';
  return html;
}
function sepToggleGuideGroup(key){
  SEP_STATE.guideGroup = (SEP_STATE.guideGroup === key) ? null : key;
  for (var g=0;g<EVENT_PREP_GROUPS.length;g++){
    var grp = EVENT_PREP_GROUPS[g];
    var on = SEP_STATE.guideGroup === grp.key;
    var body = document.getElementById('sep_guide_body_'+grp.key);
    var arrow = document.getElementById('sep_guide_arrow_'+grp.key);
    var card = document.getElementById('sep_guide_card_'+grp.key);
    if (body) body.style.display = on ? 'block' : 'none';
    if (arrow) arrow.textContent = on ? '▲ 收起' : '▼ 查看要点';
    if (card) card.style.borderColor = on ? grp.color : '#e2e8f0';
  }
}

/* ═══ 交互动作 ═══ */
function sepSetFilter(key){
  SEP_STATE.filter = key;
  SEP_STATE.view = 'list';
  sepRefresh();
}
function sepBackToList(){
  SEP_STATE.view = 'list';
  SEP_STATE.currentId = null;
  SEP_STATE.rejectingId = null;
  sepRefresh();
}
function sepOpenCreate(){
  SEP_STATE.view = 'create';
  SEP_STATE.currentId = null;
  SEP_STATE.rejectingId = null;
  sepRefresh();
}
function sepOpenEdit(id){
  SEP_STATE.view = 'edit';
  SEP_STATE.currentId = id;
  SEP_STATE.rejectingId = null;
  sepRefresh();
}
function sepOpenDetail(id){
  SEP_STATE.view = 'detail';
  SEP_STATE.currentId = id;
  SEP_STATE.rejectingId = null;
  sepRefresh();
}
function sepCollectForm(){
  function sepVal(id){ var el = document.getElementById(id); return el ? el.value.trim() : ''; }
  var arrangements = {};
  for (var i=0;i<EVENT_PREP_DIMENSIONS.length;i++){
    var k = EVENT_PREP_DIMENSIONS[i].key;
    arrangements[k] = sepVal('sep_in_'+k);
  }
  return {
    name: sepVal('sep_name'),
    type: sepVal('sep_type') || '大促',
    startTime: sepVal('sep_start'),
    endTime: sepVal('sep_end'),
    manager: sepVal('sep_manager'),
    contact: sepVal('sep_contact'),
    arrangements: arrangements
  };
}
/* ═══ 提交前必填校验 ═══ */
function sepValidateRequired(d){
  var miss = [];
  if (!d || !String(d.name || '').trim()) miss.push({ k:'sep_name', label:'活动名称' });
  if (!d || !String(d.startTime || '').trim()) miss.push({ k:'sep_start', label:'开始时间' });
  if (!d || !String(d.endTime || '').trim()) miss.push({ k:'sep_end', label:'结束时间' });
  if (!d || !String(d.manager || '').trim()) miss.push({ k:'sep_manager', label:'负责客服管理' });
  return miss;
}
function sepTimeError(d){
  if (!d || !d.startTime || !d.endTime) return '';
  if (String(d.endTime) < String(d.startTime)) return '结束时间不能早于开始时间';
  return '';
}
function sepMissLabels(miss){
  var out = [];
  for (var i=0;i<miss.length;i++) out.push(miss[i].label);
  return out.join('、');
}
function sepMarkInvalid(miss){
  sepClearInvalid();
  window._sepInvalidIds = [];
  for (var i=0;i<miss.length;i++){
    var el = document.getElementById(miss[i].k);
    if (el){
      el.style.borderColor = '#ef4444';
      el.style.background = '#fef2f2';
      window._sepInvalidIds.push(miss[i].k);
    }
  }
  if (miss.length){
    var first = document.getElementById(miss[0].k);
    if (first && first.scrollIntoView) {
      try { first.scrollIntoView({ behavior:'smooth', block:'center' }); } catch(e) { first.scrollIntoView(); }
    }
  }
}
function sepClearInvalid(){
  var ids = window._sepInvalidIds || [];
  for (var i=0;i<ids.length;i++){
    var el = document.getElementById(ids[i]);
    if (el){ el.style.borderColor = ''; el.style.background = ''; }
  }
  window._sepInvalidIds = [];
}
function sepSaveDraft(){
  var data = sepCollectForm();
  if (!data.name){ sepToast('请先填写活动名称', 'warning'); return; }
  var arr = sepLoad();
  var isEdit = SEP_STATE.view === 'edit';
  if (isEdit){
    for (var i=0;i<arr.length;i++){
      if (arr[i].id === SEP_STATE.currentId){
        for (var k in data) arr[i][k] = data[k];
        arr[i].updatedAt = sepNow();
        break;
      }
    }
  } else {
    var who = (typeof currentUser !== 'undefined' && currentUser) ? (currentUser.name || currentUser.username || '') : '';
    arr.push({
      id: sepUid(), name:data.name, type:data.type, startTime:data.startTime, endTime:data.endTime,
      manager:data.manager, contact:data.contact, arrangements:data.arrangements,
      status:'draft', submitter:who, approver:'', approveNote:'',
      createdAt:sepNow(), updatedAt:sepNow()
    });
  }
  if (sepSave(arr)){
    sepToast('草稿已保存', 'success');
    SEP_STATE.view = 'list';
    SEP_STATE.currentId = null;
    sepRefresh();
  }
}
function sepSubmit(id){
  if (id){
    var arr0 = sepLoad();
    var target = null;
    for (var i=0;i<arr0.length;i++){ if (arr0[i].id === id) target = arr0[i]; }
    if (!target){ sepToast('未找到该预案', 'error'); return; }
    var miss0 = sepValidateRequired(target);
    if (miss0.length){
      sepToast('提交前请先补全：' + sepMissLabels(miss0), 'warning');
      SEP_STATE.view = 'edit';
      SEP_STATE.currentId = target.id;
      sepRefresh();
      setTimeout(function(){ sepMarkInvalid(miss0); }, 60);
      return;
    }
    var tErr0 = sepTimeError(target);
    if (tErr0){
      sepToast(tErr0, 'warning');
      SEP_STATE.view = 'edit';
      SEP_STATE.currentId = target.id;
      sepRefresh();
      setTimeout(function(){ sepMarkInvalid([{ k:'sep_end', label:'结束时间' }]); }, 60);
      return;
    }
    target.status = 'pending';
    target.updatedAt = sepNow();
    target.approveNote = '';
    if (sepSave(arr0)){
      sepToast('已提交审批，等待管理员审核', 'success');
      SEP_STATE.view = 'list'; SEP_STATE.currentId = null; SEP_STATE.rejectingId = null;
      sepRefresh();
    }
    return;
  }
  var data = sepCollectForm();
  var miss = sepValidateRequired(data);
  if (miss.length){
    sepMarkInvalid(miss);
    sepToast('提交前请先补全：' + sepMissLabels(miss), 'warning');
    return;
  }
  var tErr = sepTimeError(data);
  if (tErr){
    sepMarkInvalid([{ k:'sep_end', label:'结束时间' }]);
    sepToast(tErr, 'warning');
    return;
  }
  sepClearInvalid();
  var who = (typeof currentUser !== 'undefined' && currentUser) ? (currentUser.name || currentUser.username || '') : '';
  var arr = sepLoad();
  arr.push({
    id: sepUid(), name:data.name, type:data.type, startTime:data.startTime, endTime:data.endTime,
    manager:data.manager, contact:data.contact, arrangements:data.arrangements,
    status:'pending', submitter:who, approver:'', approveNote:'',
    createdAt:sepNow(), updatedAt:sepNow()
  });
  if (sepSave(arr)){
    sepToast('已提交审批，等待管理员审核', 'success');
    SEP_STATE.view = 'list'; SEP_STATE.currentId = null;
    sepRefresh();
  }
}
function sepApprove(id){
  if (!sepIsAdmin()){ sepToast('只有管理员可以审批', 'warning'); return; }
  var arr = sepLoad();
  var who = (typeof currentUser !== 'undefined' && currentUser) ? (currentUser.name || currentUser.username || '') : '';
  for (var i=0;i<arr.length;i++){
    if (arr[i].id === id){
      arr[i].status = 'approved';
      arr[i].approver = who;
      arr[i].approvedAt = sepNow();
      arr[i].approveNote = '审批通过，按计划推进';
      arr[i].updatedAt = sepNow();
      break;
    }
  }
  if (sepSave(arr)){ sepToast('已审批通过', 'success'); sepRefresh(); }
}
function sepToggleReject(id){
  SEP_STATE.rejectingId = (SEP_STATE.rejectingId === id) ? null : id;
  sepRefresh();
}
function sepDoReject(id){
  if (!sepIsAdmin()){ sepToast('只有管理员可以审批', 'warning'); return; }
  var el = document.getElementById('sep_reject_note');
  var note = el ? el.value.trim() : '';
  if (!note){ sepToast('请填写驳回意见', 'warning'); return; }
  var arr = sepLoad();
  var who = (typeof currentUser !== 'undefined' && currentUser) ? (currentUser.name || currentUser.username || '') : '';
  for (var i=0;i<arr.length;i++){
    if (arr[i].id === id){
      arr[i].status = 'rejected';
      arr[i].approver = who;
      arr[i].approvedAt = sepNow();
      arr[i].approveNote = note;
      arr[i].updatedAt = sepNow();
      break;
    }
  }
  SEP_STATE.rejectingId = null;
  if (sepSave(arr)){ sepToast('已驳回，登记人可修改后重新提交', 'success'); sepRefresh(); }
}
function sepStartProgress(id){
  var arr = sepLoad();
  for (var i=0;i<arr.length;i++){
    if (arr[i].id === id){ arr[i].status = 'progress'; arr[i].updatedAt = sepNow(); break; }
  }
  if (sepSave(arr)){ sepToast('已开始推进', 'success'); sepRefresh(); }
}
function sepDelete(id){
  if (!sepIsAdmin()){ sepToast('只有管理员可以删除预案', 'warning'); return; }
  var p = sepFind(id);
  if (!p) return;
  if (!confirm('确定删除预案「'+p.name+'」吗？删除后无法恢复。')) return;
  var arr = sepLoad().filter(function(x){ return x.id !== id; });
  if (sepSave(arr)){
    sepToast('预案已删除', 'success');
    if (SEP_STATE.currentId === id){ SEP_STATE.view = 'list'; SEP_STATE.currentId = null; }
    sepRefresh();
  }
}

/* ═══ 保留：作战大图弹窗（预览版优先，原图按需加载） ═══ */
function viewCampaignImage() {
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:pointer;';
  overlay.innerHTML = '<div style="max-width:95%;max-height:95%;position:relative;">'
    + '<button style="position:absolute;top:-36px;right:0;background:none;border:none;color:#fff;font-size:28px;cursor:pointer;line-height:1;" onclick="this.closest(\'div[style]\').parentElement.remove()">&times;</button>'
    + '<img id="sep_campaign_img" src="docs/assets/campaign-map-preview.jpg" style="max-width:100%;max-height:90vh;border-radius:8px;box-shadow:0 20px 60px rgba(0,0,0,0.5);" alt="大促作战大图" onerror="this.onerror=null;this.src=\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22400%22%3E%3Crect fill=%22%23f1f5f9%22 width=%22600%22 height=%22400%22/%3E%3Ctext fill=%22%2394a3b8%22 font-size=%2216%22 font-family=%22sans-serif%22 text-anchor=%22middle%22 x=%22300%22 y=%22190%22%3E图片加载失败%3C/text%3E%3Ctext fill=%22%2394a3b8%22 font-size=%2212%22 font-family=%22sans-serif%22 text-anchor=%22middle%22 x=%22300%22 y=%22210%22%3E请检查网络后重试%3C/text%3E%3C/svg%3E\'">'
    + '<div id="sep_campaign_tip" style="text-align:center;margin-top:8px;font-size:11px;color:#94a3b8;">当前为快速预览版 · <a href="javascript:;" onclick="sepShowFullCampaignImage()" style="color:#93c5fd;text-decoration:underline;">查看高清原图（6.6MB，速度已优化）</a></div>'
    + '</div>';
  overlay.onclick = function(e) { if (e.target === this) this.remove(); };
  document.body.appendChild(overlay);
}
function sepShowFullCampaignImage(){
  var img = document.getElementById('sep_campaign_img');
  var tip = document.getElementById('sep_campaign_tip');
  if (img) img.src = 'docs/assets/campaign-map-hd.jpg';
  if (tip) tip.textContent = '正在加载高清原图（6.6MB），请稍候…';
}

/* ═══ 保留：知识能量池内嵌视图（精简版，只读展示19项） ═══ */
function _renderEventPlanInline() {
  try {
    var html = '';
    html += '<div style="margin-bottom:14px;padding:12px 14px;background:linear-gradient(135deg,#E1F5EE,#E6F1FB);border-radius:8px;border:1px solid #9FE1CB;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">';
    html += '<div style="display:flex;align-items:center;gap:8px;"><span style="font-size:18px;">🗺️</span>';
    html += '<div><div style="font-size:12px;font-weight:600;color:#0F6E56;">大促作战大图</div><div style="font-size:10px;color:#0F6E56;">全流程规划可视化参考</div></div></div>';
    html += '<button class="btn btn-xs btn-primary" onclick="viewCampaignImage()" style="background:#0b9b96;border-color:#0b9b96;">📷 查看大图</button>';
    html += '</div>';
    var phases = ['T-90天','T-60天','T-30天','T-14天','T-7天','T-1天','D-Day'];
    var phNames = ['启动准备','招聘培训','方案落地','精准备战','预演冲刺','就绪确认','爆发日'];
    html += '<div style="display:flex;gap:3px;margin-bottom:14px;overflow-x:auto;padding-bottom:2px;">';
    for (var p=0;p<phases.length;p++){
      var isLast = p === phases.length - 1;
      html += '<div style="flex:1;min-width:70px;text-align:center;padding:6px 4px;background:'+(isLast?'#FCEBEB':'#f8fafc')+';border-radius:5px;border:1px solid '+(isLast?'#F7C1C1':'#e2e8f0')+';font-size:10px;">';
      html += '<div style="color:#64748b;">'+phases[p]+'</div><div style="font-weight:'+(isLast?'700':'400')+';color:'+(isLast?'#A32D2D':'#475569')+';margin-top:1px;">'+phNames[p]+'</div></div>';
    }
    html += '</div>';
    for (var g=0;g<EVENT_PREP_GROUPS.length;g++){
      var grp = EVENT_PREP_GROUPS[g];
      var dims = EVENT_PREP_DIMENSIONS.filter(function(d){ return d.group === grp.key; });
      html += '<div style="margin-bottom:10px;">';
      html += '<div style="font-size:12px;font-weight:600;color:#334155;margin-bottom:6px;padding-bottom:3px;border-bottom:1px solid #e2e8f0;">'+grp.label+' · '+dims.length+'项</div>';
      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:6px;">';
      for (var d=0;d<dims.length;d++){
        var dim = dims[d];
        html += '<div style="border:1px solid #e2e8f0;border-left:3px solid '+grp.color+';border-radius:6px;padding:8px 10px;">';
        html += '<div style="font-size:11px;font-weight:500;color:#1e293b;">'+dim.icon+' '+dim.title+'</div>';
        html += '<div style="font-size:10px;color:#64748b;line-height:1.5;margin-top:3px;">'+sepEsc((dim.desc||'').substring(0,60))+'…</div></div>';
      }
      html += '</div></div>';
    }
    html += '<div style="padding:10px;background:#f8fafc;border-radius:6px;font-size:10px;color:#94a3b8;text-align:center;margin-top:12px;">💡 以上内容基于大促准备指导手册整理 · 具体方案请根据项目实际情况调整</div>';
    return html;
  } catch(e) { return '<div style="padding:20px;color:#dc2626;">⚠️ 活动预案加载失败</div>'; }
}
