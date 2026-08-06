// modules/systemData.js — 系统数据管理模块
/* ═══════════════════ 系统数据管理 ═══════════════════ */
function renderSystemData(){return _renderSystemData();}
// ===== 系统数据管理 - 全局变量 =====
var _systemDataView = 'catalog';
var _systemDataTab = 'projects';
var _systemDataPage = 1;
var _systemDataPageSize = 20;
var _systemDataSortField = '';
var _systemDataSortDir = 'asc';
var _systemDataSearchKeyword = '';
var _systemDataCatalogSearch = '';

// ===== 系统数据管理 - 数据表定义 =====
// ===== 难度评估数据（运行时由系统数据管理统一维护，不再硬编码写死） =====
var ASSESSMENTS = [];
function loadAssessments(){
  var arr = null;
  try { var s = localStorage.getItem('chansee_assessments'); if(s) arr = JSON.parse(s); } catch(e){}
  if(!arr || !arr.length){
    arr = (typeof ASSESSMENTS_DATA !== 'undefined' && ASSESSMENTS_DATA.length) ? ASSESSMENTS_DATA.slice() : [];
    try { localStorage.setItem('chansee_assessments', JSON.stringify(arr)); } catch(e){}
  }
  ASSESSMENTS.length = 0;
  for(var i=0;i<arr.length;i++){
    var r = arr[i];
    // 过滤遗留的说明性脏数据（如 month 字段塞了评估方法论文字）
    if(r && typeof r.month === 'string' && (r.month.indexOf('项目管理难度依据')>=0 || r.month.indexOf('1、')===0)) continue;
    ASSESSMENTS.push(r);
  }
}
loadAssessments();

var SYSTEM_DATA_TABLES = {
  projects: {
    label: '\u{1F4CB} 项目数据表',
    desc: '所有项目的完整档案数据，包含编号、名称、类型、职场、负责人、状态、健康度等核心字段。中控台全部5个页面均依赖此表。',
    data: PROJECTS,
    fields: [
      {key:'id', label:'项目编号', type:'text', required:true},
      {key:'name', label:'项目名称', type:'text', required:true},
      {key:'brand', label:'品牌', type:'text', required:true},
      {key:'category', label:'品类', type:'text'},
      {key:'serviceMode', label:'项目类型', type:'select', options:['TP项目','DP项目','自营项目']},
      {key:'workplace', label:'职场', type:'text'},
      {key:'pm', label:'负责人', type:'text'},
      {key:'status', label:'状态', type:'select', options:['优质健康店','平稳常规店','风险预警店','高危问题店']},
      {key:'health', label:'健康度', type:'text'},
      {key:'revenue', label:'营收(万)', type:'number'},
      {key:'costBudget', label:'成本预算(万)', type:'number'},
      {key:'profitRate', label:'利润率(%)', type:'number'},
      {key:'customerPlatforms', label:'平台', type:'text'}
    ]
  },
  operations: {
    label: '\u{1F4C8} 项目运营表',
    desc: '各项目的运营数据，包含工单量、转化率、满意度、响应时效等指标。服务与进度追踪页面依赖此表。',
    data: OPERATIONS,
    fields: [
      {key:'projectId', label:'项目ID', type:'text', required:true},
      {key:'ticketVol', label:'工单量', type:'number'},
      {key:'convCount', label:'转化数', type:'number'},
      {key:'avgPrice', label:'客单价', type:'number'},
      {key:'csat', label:'满意度', type:'text'},
      {key:'responseTime', label:'响应时间(s)', type:'number'},
      {key:'handleDuration', label:'处理时长(h)', type:'number'},
      {key:'nps', label:'NPS', type:'number'},
      {key:'satisfactionComm', label:'满意度-沟通', type:'number'},
      {key:'satisfactionExec', label:'满意度-执行', type:'number'},
      {key:'satisfactionCollab', label:'满意度-协作', type:'number'},
      {key:'status', label:'状态', type:'text'}
    ]
  },
  risk: {
    label: '\u{26A0}️ 风险预警表（聚合）',
    desc: '由"项目风险预警池"实时聚合生成，数据来源于项目档案(健康分/利润率/SLA目标)与运营数据(响应时长/满意度)。本表为只读视图，不可直接编辑——如需处置风险请在风险预警池页面操作，修改项目档案或运营数据后点"刷新"即自动更新。',
    data: typeof RISK_ALERTS !== 'undefined' ? RISK_ALERTS : [],
    readOnly: true,
    fields: [
      {key:'projectId', label:'项目编号', type:'text'},
      {key:'projectName', label:'项目名称', type:'text'},
      {key:'riskType', label:'风险类型', type:'text'},
      {key:'severity', label:'风险等级', type:'text'},
      {key:'indicator', label:'触发指标', type:'text'},
      {key:'threshold', label:'阈值', type:'text'},
      {key:'status', label:'状态', type:'text'}
    ]
  },
  issues: {
    label: '\u{1F9F0} 协同事项表',
    desc: '问题与课题的统一登记、跟踪、闭环记录，包含问题(整改/客诉等)和课题(流程优化/调研诊断/销售提升/服务升级等)。问题与课题协作页面依赖此表。',
    data: ISSUES,
    fields: [
      {key:'id', label:'编号', type:'text', required:true},
      {key:'category', label:'类别', type:'select', options:['问题','课题']},
      {key:'projectName', label:'项目', type:'text'},
      {key:'type', label:'类型', type:'select', options:['整改','客诉','数据异常','流程卡点','系统故障','优化','流程优化','调研诊断','销售提升','服务升级','成本优化','风险防控','其他']},
      {key:'desc', label:'描述', type:'textarea'},
      {key:'priority', label:'优先级', type:'select', options:['紧急','重要','一般']},
      {key:'assignee', label:'责任人', type:'text'},
      {key:'status', label:'状态', type:'select', options:['待处理','处理中','待验收','已关闭','立项','执行中','结题']},
      {key:'source', label:'来源', type:'text'},
      {key:'background', label:'背景', type:'textarea'},
      {key:'rootCause', label:'根因', type:'textarea'},
      {key:'milestone', label:'关键节点', type:'textarea'},
      {key:'outcome', label:'成果', type:'textarea'},
      {key:'participants', label:'协同方', type:'text'}
    ]
  },
  knowledge: {
    label: '\u{1F4DA} 知识条目表',
    desc: '管理者通用技能知识库，包含成本控制、效率提升、团队管理等。核心知识能量池页面依赖此表，两处数据实时同步。',
    data: typeof KNOWLEDGE !== 'undefined' ? KNOWLEDGE : [],
    fields: [
      {key:'id', label:'ID', type:'text', required:true},
      {key:'title', label:'标题', type:'text', required:true},
      {key:'type', label:'分类', type:'select', options:['SOP流程优化','风控应急预案','成本目标控制','优秀话术萃取','AI提效赋能','培训材料']},
      {key:'category', label:'管理方向', type:'select', options:['团队管理','成本控制','效率提升','风险防控','体系搭建','沟通协作']},
      {key:'short', label:'简短摘要', type:'text'},
      {key:'description', label:'完整描述', type:'textarea'},
      {key:'tags', label:'标签', type:'text'},
      {key:'scope', label:'适用范围', type:'text'},
      {key:'permission', label:'权限', type:'select', options:['公开','内部','受限']},
      {key:'views', label:'浏览量', type:'number'},
      {key:'downloads', label:'下载量', type:'number'},
      {key:'updateTime', label:'更新时间', type:'text'}
    ]
  },
  handovers: {
    label: '\u{23F3} 交接记录表',
    desc: '项目PM交接的历史记录，包含交接人、日期、完成状态等。项目承接规范页面依赖此表。',
    data: typeof HANDOVERS !== 'undefined' ? HANDOVERS : [],
    fields: [
      {key:'id', label:'ID', type:'text', required:true},
      {key:'projectId', label:'项目ID', type:'text'},
      {key:'projectName', label:'项目名称', type:'text'},
      {key:'from', label:'原负责人', type:'text'},
      {key:'to', label:'新负责人', type:'text'},
      {key:'type', label:'交接类型', type:'select', options:['人员离职','内部调动','临时代理','项目移交']},
      {key:'date', label:'交接日期', type:'text'},
      {key:'planDate', label:'计划日期', type:'text'},
      {key:'status', label:'状态', type:'select', options:['已完成','进行中','已取消']},
      {key:'checklist', label:'交接范围清单', type:'textarea'},
      {key:'keyItems', label:'重点交接事项', type:'textarea'},
      {key:'pending', label:'遗留问题', type:'textarea'},
      {key:'summary', label:'补充说明', type:'textarea'}
    ]
  },
  kpi: {
    label: '\u{1F4CA} KPI数据表',
    desc: '项目月度KPI数据，包含销售额、成本、费效比、目标达成率等。目标与权责、成本管理页面依赖此表。',
    data: typeof KPI_HISTORY !== 'undefined' ? KPI_HISTORY : [],
    fields: [
      {key:'date', label:'日期', type:'text', required:true},
      {key:'projectId', label:'项目ID', type:'text'},
      {key:'revenue', label:'销售额(万)', type:'number'},
      {key:'cost', label:'成本(万)', type:'number'},
      {key:'profitRate', label:'费效比', type:'text'},
      {key:'targetRate', label:'目标达成率', type:'text'}
    ]
  },
  personnel: {
    label: '\u{1F465} 人员数据表',
    desc: '客服人员绩效、组别负荷比、工作量统计、人员配置。客服绩效看板、运营数据等页面依赖此表。',
    data: typeof AGENT_PERFORMANCE !== 'undefined' ? AGENT_PERFORMANCE : [],
    fields: [],
    isComplex: true,
    subTables: ['agent', 'group', 'workload', 'staff']
  },
  sysconfig: {
    label: '\u{1F512} 系统配置表',
    desc: '用户账号、数据权限配置、登录记录。登录认证、权限管理、用户管理均依赖此表。',
    data: typeof USERS !== 'undefined' ? USERS : [],
    fields: [],
    isComplex: true,
    subTables: ['users', 'permissions', 'loginlogs']
  },
  changelog: {
    label: '\u{1F573} 操作日志表',
    desc: '所有数据修改的审计记录（系统自动维护，仅可查看）。记录谁在何时修改了哪条数据的哪个字段。',
    data: (function(){ try { var d = JSON.parse(localStorage.getItem('chansee_data_change_log')||'[]'); return Array.isArray(d) ? d : []; } catch(e){ return []; } })(),
    fields: [
      {key:'changedAt', label:'时间', type:'text'},
      {key:'changedBy', label:'操作人', type:'text'},
      {key:'tableName', label:'表名', type:'text'},
      {key:'recordId', label:'记录ID', type:'text'},
      {key:'fieldName', label:'字段名', type:'text'},
      {key:'oldValue', label:'旧值', type:'text'},
      {key:'newValue', label:'新值', type:'text'}
    ]
  },
  assessments: {
    label: '\u{1F4CA} 难度评估表',
    desc: '项目难度与人员能力评估数据，包含定量得分、定性得分、管理等级、匹配度等。项目难度评估页面依赖此表。在系统数据管理中可新增、编辑、删除、导入、导出评估记录，所有修改会实时同步到评估页面。',
    data: ASSESSMENTS,
    fields: [
      {key:'month', label:'评估周期', type:'text'},
      {key:'dept', label:'事业部', type:'text'},
      {key:'group', label:'评估单元(项目/组)', type:'text'},
      {key:'manager', label:'管理人', type:'text'},
      {key:'level', label:'管理等级', type:'select', options:['组长-1级','组长-2级','组长-3级','主管','经理','培训师']},
      {key:'totalScore', label:'总分', type:'number'},
      {key:'quantScore', label:'定量得分', type:'number'},
      {key:'qualScore', label:'定性得分', type:'number'},
      {key:'csCountScore', label:'客服数得分', type:'number'},
      {key:'new3mScore', label:'新人得分', type:'number'},
      {key:'ratioScore', label:'配比得分', type:'number'},
      {key:'storeMgrScore', label:'店长得分', type:'number'},
      {key:'pptScore', label:'PPT得分', type:'number'},
      {key:'qual1', label:'业务复杂度', type:'number'},
      {key:'qual2', label:'跨平台', type:'number'},
      {key:'qual3', label:'品牌授权', type:'number'},
      {key:'qual4', label:'流动性', type:'number'},
      {key:'qual5', label:'培训需求', type:'number'},
      {key:'qual6', label:'系统复杂度', type:'number'},
      {key:'qual7', label:'客诉难度', type:'number'},
      {key:'qual8', label:'突发事件', type:'number'}
    ]
  },
  satisfaction: {
    label: '📋 运维调研表',
    desc: '项目运维调研与满意度评估数据，包含项目方感受（综合/业务/专业/执行/汇报/风控/沟通）与上级评定。项目运维调研页面依赖此表。在系统数据管理中可新增、编辑、删除、导入、导出，所有修改实时同步到运维调研页面。',
    data: SATISFACTION_DATA,
    fields: [
      {key:'id', label:'ID', type:'number'},
      {key:'projectId', label:'项目ID', type:'text'},
      {key:'period', label:'评估周期', type:'text'},
      {key:'overall', label:'综合感受', type:'select', options:['非常满意','满意','一般','不满意','待评定']},
      {key:'busiPerf', label:'业务表现', type:'textarea'},
      {key:'professionalism', label:'专业度', type:'textarea'},
      {key:'execution', label:'执行力', type:'textarea'},
      {key:'repTime', label:'汇报时效性', type:'textarea'},
      {key:'repAcc', label:'汇报准确性', type:'textarea'},
      {key:'repFull', label:'汇报全面性', type:'textarea'},
      {key:'riskControl', label:'风险管控', type:'textarea'},
      {key:'commFreq', label:'沟通频率', type:'select', options:['非常满意','满意','一般','不满意','待填写']},
      {key:'commUnd', label:'沟通理解', type:'textarea'},
      {key:'commSync', label:'信息同步', type:'textarea'},
      {key:'leaderScore', label:'领导评分', type:'number'},
      {key:'leaderComment', label:'上级评语', type:'textarea'},
      {key:'evaluatedBy', label:'评定人', type:'text'},
      {key:'evaluatedAt', label:'评定日期', type:'text'},
      {key:'status', label:'状态', type:'select', options:['已评定','待评定']}
    ]
  },
  // ===== 新增数据源（补全所有模块的数据挂载）=====
  goals: {
    label: '\u{1F3AF} 目标与权责表',
    desc: '项目目标与权责数据，包含业务指标、分摊成本、问题改善、课题推进等目标。目标与权责管理页面依赖此表，数据双向实时同步。',
    data: typeof GOALS !== 'undefined' ? GOALS : [],
    fields: [
      {key:'id', label:'目标ID', type:'text', required:true},
      {key:'projectId', label:'关联项目', type:'text', required:true},
      {key:'type', label:'目标类型', type:'select', options:['业务指标类','分摊成本类','问题改善类','课题推进类']},
      {key:'target', label:'目标描述', type:'textarea', required:true},
      {key:'metric', label:'衡量指标', type:'textarea'},
      {key:'owner', label:'负责人', type:'text'},
      {key:'deadline', label:'截止日期', type:'text'},
      {key:'status', label:'状态', type:'select', options:['进行中','已完成','已逾期']},
      {key:'createTime', label:'创建时间', type:'text'}
    ]
  },
  agent_performance: {
    label: '\u{1F4C8} 坐席绩效表',
    desc: '各坐席月度绩效数据，包含销售额、转化率、首次解决率、CSAT等。客服绩效看板页面依赖此表，数据双向实时同步。',
    data: typeof AGENT_PERFORMANCE !== 'undefined' ? AGENT_PERFORMANCE : [],
    fields: [
      {key:'id', label:'绩效ID', type:'text', required:true},
      {key:'agentName', label:'坐席名称', type:'text'},
      {key:'projectId', label:'所属项目', type:'text'},
      {key:'period', label:'绩效周期', type:'text'},
      {key:'salesAmount', label:'销售额', type:'number'},
      {key:'conversionRate', label:'转化率(%)', type:'number'},
      {key:'firstResolveRate', label:'首次解决率(%)', type:'number'},
      {key:'csat', label:'CSAT', type:'number'},
      {key:'attendance', label:'出勤率(%)', type:'number'}
    ]
  },
  staff_config: {
    label: '\u{1F465} 客服配置表',
    desc: '客服人员岗位配置数据，包含角色、人数、占比、工作地点等。首页看板与系统数据管理依赖此表，数据双向实时同步。',
    data: typeof STAFF_CONFIG !== 'undefined' ? STAFF_CONFIG : [],
    fields: [
      {key:'id', label:'配置ID', type:'text', required:true},
      {key:'role', label:'客服角色', type:'text'},
      {key:'count', label:'人数', type:'number'},
      {key:'pct', label:'占比(%)', type:'number'},
      {key:'workplace', label:'工作地点', type:'text'},
      {key:'updatedAt', label:'更新时间', type:'text'},
      {key:'updatedBy', label:'更新人', type:'text'}
    ]
  },
  workload_data: {
    label: '\u{1F4CA} 工作量数据表',
    desc: '客服工作量统计数据，包含工单类型、数量、占比等。运营数据与看板页面依赖此表，数据双向实时同步。',
    data: typeof WORKLOAD_DATA !== 'undefined' ? WORKLOAD_DATA : [],
    fields: [
      {key:'id', label:'数据ID', type:'text', required:true},
      {key:'name', label:'工单类型', type:'text'},
      {key:'count', label:'数量', type:'number'},
      {key:'ratio', label:'占比(%)', type:'number'},
      {key:'workplace', label:'工作地点', type:'text'},
      {key:'updatedAt', label:'更新时间', type:'text'},
      {key:'updatedBy', label:'更新人', type:'text'}
    ]
  },
  performance_weights: {
    label: '\u{2696}️ 绩效权重表',
    desc: '绩效考核权重配置，定义不同维度的评分占比。绩效评估与看板页面依赖此配置。',
    data: typeof PERFORMANCE_WEIGHTS !== 'undefined' ? PERFORMANCE_WEIGHTS : {},
    fields: [
      {key:'key', label:'配置项', type:'text'},
      {key:'value', label:'权重值', type:'number'}
    ],
    isKvTable: true
  },
  group_load_ratio: {
    label: '\u{1F4CA} 团队负荷比表',
    desc: '客服团队组别负荷比数据，辅助资源分配与绩效评估。',
    data: typeof GROUP_LOAD_RATIO !== 'undefined' ? GROUP_LOAD_RATIO : [],
    fields: [
      {key:'groupId', label:'组别ID', type:'text'},
      {key:'groupName', label:'组别名称', type:'text'},
      {key:'loadRatio', label:'负荷比', type:'number'},
      {key:'period', label:'统计周期', type:'text'}
    ]
  }
};

// ===== localStorage Key 映射 =====
var _SD_LS_MAP = {
  projects: 'chansee_projects',
  operations: 'chansee_operations',
  issues: 'chansee_issues',
  knowledge: 'chansee_knowledge',
  handovers: 'chansee_handovers',
  kpi: 'chansee_kpi_history',
  changelog: 'chansee_data_change_log',
  assessments: 'chansee_assessments',
  satisfaction: 'chansee_satisfaction',
  goals: 'chansee_goals',
  agent_performance: 'chansee_agent_performance',
  staff_config: 'chansee_staff_config',
  workload_data: 'chansee_workload_data',
  performance_weights: 'chansee_performance_weights',
  group_load_ratio: 'chansee_group_load_ratio'
};

// ===== 数据表分组配置（用于目录分类展示）=====
var _SD_GROUPS = [
  {key:'核心业务', icon:'📊', desc:'核心业务数据', tables:['projects','operations','kpi','goals']},
  {key:'运营协作', icon:'🔄', desc:'运营与协同数据', tables:['issues','knowledge','handovers']},
  {key:'人员绩效', icon:'👥', desc:'人员与绩效数据', tables:['agent_performance','staff_config','workload_data','performance_weights','group_load_ratio']},
  {key:'评估风控', icon:'🛡️', desc:'评估与风险数据', tables:['risk','assessments','satisfaction']},
  {key:'系统管理', icon:'⚙️', desc:'系统与审计数据', tables:['personnel','sysconfig','changelog']}
];
// 表→分组反向映射
var _SD_TABLE_GROUP = {};
for(var _sgi=0;_sgi<_SD_GROUPS.length;_sgi++){var _sg=_SD_GROUPS[_sgi];for(var _sgi2=0;_sgi2<_sg.tables.length;_sgi2++)_SD_TABLE_GROUP[_sg.tables[_sgi2]]=_sg;}

// ===== 关联页面映射（卡片上的快捷跳转标签）=====
var _SD_RELATED_PAGES = {
  projects: [{label:'🏠 首页看板',mod:'dashboard'},{label:'📋 项目档案',mod:'archive'},{label:'📊 运营数据',mod:'operation'}],
  operations: [{label:'📊 运营数据',mod:'operation'},{label:'📈 目标与权责',mod:'target'}],
  risk: [{label:'⚠️ 风险预警池',mod:'risk'}],
  issues: [{label:'🧰 问题与课题',mod:'issue'}],
  knowledge: [{label:'📚 知识能量池',mod:'knowledge'}],
  handovers: [{label:'⏳ 项目承接规范',mod:'handover'}],
  kpi: [{label:'📈 目标与权责',mod:'target'},{label:'💰 成本管理',mod:'cost'}],
  goals: [{label:'🎯 目标与权责',mod:'target'}],
  agent_performance: [{label:'📊 客服绩效看板',mod:'performance'}],
  staff_config: [{label:'🏠 首页看板',mod:'dashboard'},{label:'👥 人员数据',mod:'operation'}],
  workload_data: [{label:'📊 运营数据',mod:'operation'}],
  performance_weights: [{label:'📊 客服绩效看板',mod:'performance'}],
  group_load_ratio: [{label:'📊 客服绩效看板',mod:'performance'}],
  personnel: [{label:'📊 客服绩效看板',mod:'performance'},{label:'📈 运营数据',mod:'operation'}],
  sysconfig: [{label:'👥 系统用户管理',mod:'notifications'},{label:'🔐 系统权限管理',mod:'permissions'}],
  changelog: [],
  assessments: [{label:'📋 项目难度评估',mod:'assessment'}],
  satisfaction: [{label:'📋 项目运维调研',mod:'satisfaction'}]
};

// ===== 跳转到系统数据管理对应表 =====
function goToSystemDataTable(key) {
  _systemDataView = 'detail';
  _systemDataTab = key;
  _systemDataPage = 1;
  _systemDataSearchKeyword = '';
  renderModule('systemData');
  // 高亮侧边栏
  var navItem = document.querySelector('.nav-item[data-module="systemData"]');
  if (navItem) { navItem.click(); }
}


// Placeholder - full implementation below
var _renderSystemData = function(){
  // 卡片目录视图
  if(_systemDataView === 'catalog'){
    var kw = (_systemDataCatalogSearch||'').toLowerCase().trim();
    var _sdAllExpanded = window._sdAllExpanded !== false; // 默认全部展开

    // 生成全部组的内容
    var groupSections = '';
    for(var _gi=0;_gi<_SD_GROUPS.length;_gi++){
      var grp = _SD_GROUPS[_gi];
      var groupCards = [];
      for(var _ti=0;_ti<grp.tables.length;_ti++){
        var tk = grp.tables[_ti];
        var t = SYSTEM_DATA_TABLES[tk];
        if(!t) continue;
        if(kw && (t.label+' '+t.desc).toLowerCase().indexOf(kw)<0) continue;
        groupCards.push({key:tk, def:t});
      }
      if(groupCards.length===0) continue;

      var grpId = 'sd-grp-'+_gi;
      var cardCount = grp.tables.length;
      var visibleCount = groupCards.length;

      // 分组标题（可点击折叠/展开）
      groupSections += ''
        +'<div style="display:flex;align-items:center;gap:8px;margin:8px 0 4px 0;padding:6px 10px;background:var(--c-bg);border-radius:6px;cursor:pointer;" onclick="var b=document.getElementById(\''+grpId+'\');if(b){if(b.style.display===\'none\'){b.style.display=\'block\';this.querySelector(\'.sd-arrow\').textContent=\'▾\';}else{b.style.display=\'none\';this.querySelector(\'.sd-arrow\').textContent=\'▸\';}}">'
          +'<span style="font-size:14px;transition:0.2s;" class="sd-arrow">'+(_sdAllExpanded?'▾':'▸')+'</span>'
          +'<span style="font-size:16px;">'+grp.icon+'</span>'
          +'<span style="font-size:13px;font-weight:600;color:var(--c-text-2);">'+grp.key+'</span>'
          +'<span style="font-size:11px;color:var(--c-text-3);">('+visibleCount+'/'+cardCount+' 张表)</span>'
          +'<span style="font-size:11px;color:var(--c-text-3);">'+grp.desc+'</span>'
        +'</div>';

      // 卡片网格
      var displayStyle = _sdAllExpanded ? 'block' : 'none';
      groupSections += '<div id="'+grpId+'" style="display:'+displayStyle+';margin-bottom:6px;">';
      groupSections += '<div class="sd-cards-grid">';

      for(var _gci=0;_gci<groupCards.length;_gci++){
        var ct = groupCards[_gci].def;
        var ctk = groupCards[_gci].key;
        var count = ct.data ? (Array.isArray(ct.data) ? ct.data.length : Object.keys(ct.data).length) : 0;
        var isReadOnly = !!ct.readOnly;
        var bgClass = ''; var accentColor = '';
        if(_gci%3===0){ accentColor='#0B9B96'; }
        else if(_gci%3===1){ accentColor='#3B82F6'; }
        else { accentColor='#8B5CF6'; }

        // 关联页面 - 只保留1个，作为卡片副标题
        var pages = _SD_RELATED_PAGES[ctk]||[];
        var shortcutLabel = pages.length ? pages[0].label : '';

        groupSections += ''
          +'<div class="sd-card" style="cursor:pointer;position:relative;padding:10px 12px;border-left:3px solid '+accentColor+';background:var(--c-surface);border-radius:6px;display:flex;align-items:center;gap:10px;min-height:44px;" onclick="goSystemDataDetail(\''+ctk+'\')">'
            +(isReadOnly?'<span style="position:absolute;top:4px;right:6px;font-size:9px;color:#94a3b8;">🔒</span>':'')
            +'<div style="flex:1;min-width:0;">'
              +'<div style="font-size:13px;font-weight:600;color:var(--c-text);line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+ct.label.substring(2)+'</div>'
              +'<div style="font-size:11px;color:var(--c-text-3);margin-top:2px;">'
                +(shortcutLabel ? '<span style="font-size:10px;padding:1px 6px;border-radius:3px;background:'+accentColor+'18;color:'+accentColor+';border:1px solid '+accentColor+'44;margin-right:4px;">'+shortcutLabel+'</span>' : '')
                +'<span>'+count+' 条记录</span>'
              +'</div>'
            +'</div>'
          +'</div>';
      }
      groupSections += '</div></div>';
    }

    // 无搜索结果
    if(!groupSections) groupSections = '<div style="padding:40px;text-align:center;color:var(--c-text-3);">未找到匹配的数据表，请尝试其他搜索关键词</div>';

    // 计算存储用量
    var totalUsed = 0;
    try {
      for(var lsKey in localStorage){
        if(localStorage.hasOwnProperty(lsKey) && (lsKey.indexOf('chansee')===0 || lsKey.indexOf('chanseen')===0)){
          totalUsed += (localStorage[lsKey]||'').length * 2; // UTF-16 ≈ 2 bytes per char
        }
      }
    } catch(e){}
    var totalMB = (totalUsed / 1048576).toFixed(2);
    var pctUsed = Math.min(100, Math.round(totalUsed / 5242880 * 100)); // 5MB limit
    var barColor = pctUsed > 80 ? '#f5222d' : pctUsed > 60 ? '#faad14' : '#0B9B96';

    return ''
    +'<div class="module-header">'
      +'<div>'
        +'<div class="module-title">🗄️ 系统数据管理</div>'
        +'<div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">统一数据管理中心 · 共 '+_SD_GROUPS.reduce(function(s,g){return s+g.tables.length;},0)+' 个数据表</div>'
      +'</div>'
      +'<div style="display:flex;gap:8px;align-items:center;">'
        +'<button class="btn btn-xs" onclick="window._sdAllExpanded=true;renderModule(\'systemData\')">展开全部</button>'
        +'<button class="btn btn-xs" onclick="window._sdAllExpanded=false;renderModule(\'systemData\')">折叠全部</button>'
      +'</div>'
    +'</div>'
    +'<div style="margin-bottom:10px;padding:8px 12px;background:var(--c-surface);border-radius:8px;border:1px solid var(--c-border);">'
      +'<div style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--c-text-2);margin-bottom:4px;">'
        +'<span>💾 存储用量：<b style="color:'+barColor+';">'+totalMB+' MB</b> / 5 MB（'+pctUsed+'%）</span>'
        +(pctUsed > 80 ? '<span style="color:#f5222d;">⚠️ 空间紧张，请及时导出或清理旧数据</span>' : pctUsed > 60 ? '<span style="color:#faad14;">⚡ 使用过半，建议留意空间</span>' : '')
      +'</div>'
      +'<div style="height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden;">'
        +'<div style="height:100%;width:'+pctUsed+'%;background:'+barColor+';border-radius:3px;transition:width 0.3s;"></div>'
      +'</div>'
    +'</div>'
    +'<div id="backup-warning" style="margin-bottom:10px;padding:8px 12px;background:#fef2f2;border:1px solid #fecaca;border-radius:8px;font-size:12px;color:#dc2626;display:none;"></div>'
    +'<div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;">'
      +'<input type="text" id="sysdata-catalog-search" value="" readonly autocomplete="off" name="chanseen_sdsearch_unique" data-lpignore="true" data-1p-ignore="true" data-form-type="other" placeholder="🔍 搜索数据表（表名/描述）..." style="flex:1;max-width:400px;padding:6px 10px;border:1px solid var(--c-border,#e2e8f0);border-radius:8px;font-size:13px;background-color:#fff;" onfocus="this.removeAttribute(\'readonly\');this.value=\'\';" oninput="catalogSearchSystemData(this.value)">'
      +(kw?'<button class="btn btn-xs" onclick="clearCatalogSearch()">清除</button>':'')
    +'</div>'
    +groupSections;
  }

  var tableDef = SYSTEM_DATA_TABLES[_systemDataTab];
  if(!tableDef) { _systemDataView='catalog'; return _renderSystemData(); }
  if(_systemDataTab === 'risk') recomputeRiskAlerts();

  var isLog = _systemDataTab === 'changelog';
  var isReadOnly = !!tableDef.readOnly;
  var isKvTable = !!tableDef.isKvTable;
  var allData = tableDef.data || [];
  // KV表特殊处理：将对象转为数组格式 [{key,value},...]
  if(isKvTable && !Array.isArray(allData)) {
    var kvArr = [];
    var kvObj = allData;
    var kvKeys = Object.keys(kvObj);
    for(var ki=0; ki<kvKeys.length; ki++) kvArr.push({key:kvKeys[ki], value:kvObj[kvKeys[ki]]});
    allData = kvArr;
  }
  if (!Array.isArray(allData)) allData = [];
  var keyword = _systemDataSearchKeyword;
  var filteredData = keyword ? allData.filter(function(row) {return JSON.stringify(row).toLowerCase().indexOf(keyword.toLowerCase()) >= 0;}) : allData;
  var totalRecords = filteredData.length;
  var totalPages = Math.ceil(totalRecords / _systemDataPageSize);
  if (_systemDataPage > totalPages) _systemDataPage = Math.max(1, totalPages);
  var startIdx = (_systemDataPage - 1) * _systemDataPageSize;
  var pageData = filteredData.slice(startIdx, startIdx + _systemDataPageSize);

  var colDefs = {};
  if(_systemDataTab==='projects') colDefs={headers:['编号','名称','品牌','品类','类型','职场','负责人','状态','营收(万)','成本预算(万)','利润率(%)'],keys:['id','name','brand','category','serviceMode','workplace','pm','status','revenue','costBudget','profitRate'],showCb:true};
  else if(_systemDataTab==='operations') colDefs={headers:['项目ID','工单量','满意度','响应时间','NPS'],keys:['projectId','ticketVol','csat','responseTime','nps'],showCb:true};
  else if(_systemDataTab==='issues') colDefs={headers:['编号','类别','项目','类型','优先级','责任人','状态'],keys:['id','category','projectName','type','priority','assignee','status'],showCb:true};
  else if(_systemDataTab==='knowledge') colDefs={headers:['ID','标题','分类','管理方向','权限','浏览','下载'],keys:['id','title','type','category','permission','views','downloads'],showCb:true,goEnergyPool:true};
  else if(_systemDataTab==='handovers') colDefs={headers:['ID','项目','交接类型','原负责人','新负责人','日期','状态'],keys:['id','projectName','type','from','to','date','status'],showCb:true};
  else if(_systemDataTab==='kpi') colDefs={headers:['日期','项目ID','销售额(万)','成本(万)','费效比','目标达成率'],keys:['date','projectId','revenue','cost','profitRate','targetRate'],showCb:true};
  else if(_systemDataTab==='goals') colDefs={headers:['ID','项目ID','类型','目标描述','负责人','截止日','状态'],keys:['id','projectId','type','target','owner','deadline','status'],showCb:true};
  else if(_systemDataTab==='agent_performance') colDefs={headers:['ID','坐席','项目','周期','销售额','转化率(%)','首次解决率','CSAT','出勤率'],keys:['id','agentName','projectId','period','salesAmount','conversionRate','firstResolveRate','csat','attendance'],showCb:true};
  else if(_systemDataTab==='staff_config') colDefs={headers:['ID','角色','人数','占比(%)','工作地点','更新时间','更新人'],keys:['id','role','count','pct','workplace','updatedAt','updatedBy'],showCb:true};
  else if(_systemDataTab==='workload_data') colDefs={headers:['ID','工单类型','数量','占比(%)','工作地点','更新时间','更新人'],keys:['id','name','count','ratio','workplace','updatedAt','updatedBy'],showCb:true};
  else if(_systemDataTab==='performance_weights') colDefs={headers:['配置项','权重值'],keys:['key','value'],showCb:false};
  else if(_systemDataTab==='group_load_ratio') colDefs={headers:['组别ID','组别名称','负荷比','统计周期'],keys:['groupId','groupName','loadRatio','period'],showCb:true};
  else if(_systemDataTab==='changelog') colDefs={headers:['时间','操作人','表名','记录ID','字段名','旧值','新值'],keys:['changedAt','changedBy','tableName','recordId','fieldName','oldValue','newValue'],showCb:false};
  else if(_systemDataTab==='assessments') colDefs={headers:['评估周期','事业部','评估单元','管理人','管理等级','总分','定量','定性'],keys:['month','dept','group','manager','level','totalScore','quantScore','qualScore'],showCb:true,numberKeys:['totalScore','quantScore']};
  else if(_systemDataTab==='satisfaction') colDefs={headers:['项目ID','周期','综合感受','执行力','风险管控','沟通频率','领导评分','状态'],keys:['projectId','period','overall','execution','riskControl','commFreq','leaderScore','status'],showCb:true,numberKeys:['leaderScore']};
  else if(_systemDataTab==='risk') colDefs={headers:['项目编号','项目名称','风险类型','风险等级','触发指标','阈值','状态'],keys:['projectId','projectName','riskType','severity','indicator','threshold','status'],showCb:false,readOnly:true};

  var tableHtml = '';
  var tblClass = (_systemDataTab==='assessments') ? 'sysdata-table assess-table' : 'sysdata-table';
  if(colDefs.headers){
    tableHtml += '<table class="'+tblClass+'"><thead><tr>';
    if(colDefs.showCb) tableHtml += '<th><input type="checkbox" onchange="toggleSelectAll(this)"></th>';
    for(var hi=0; hi<colDefs.headers.length; hi++) tableHtml += '<th>'+colDefs.headers[hi]+'</th>';
    if(colDefs.showCb) tableHtml += '<th>操作</th>';
    tableHtml += '</tr></thead><tbody>';
    for(var ri=0; ri<pageData.length; ri++){
      var row = pageData[ri]; var idx = startIdx+ri;
      tableHtml += '<tr>';
      if(colDefs.showCb) tableHtml += '<td><input type="checkbox" class="sd-row-cb" data-idx="'+idx+'"></td>';
      for(var ci=0; ci<colDefs.keys.length; ci++) {
        var cellVal = row[colDefs.keys[ci]];
        if(cellVal!=null && colDefs.numberKeys && colDefs.numberKeys.indexOf(colDefs.keys[ci])>=0) {
          var n = Number(cellVal);
          cellVal = isNaN(n)?cellVal:String(Math.round(n));
        }
        tableHtml += '<td>'+(cellVal!=null?cellVal:'')+'</td>';
      }
      if(colDefs.showCb) tableHtml += '<td style="white-space:nowrap;"><span style="display:inline-flex;gap:4px;align-items:center;"><button class="sd-action-btn sd-action-btn-edit" onclick="editSystemDataRow('+idx+')">✏️ 编辑</button><button class="sd-action-btn sd-action-btn-delete" onclick="deleteSystemDataRow('+idx+')">🗑 删除</button></span></td>';
      else if(colDefs.readOnly) tableHtml += '<td><span style="font-size:12px;color:var(--c-text-3);">只读</span></td>';
      tableHtml += '</tr>';
    }
    tableHtml += '</tbody></table>';
  } else if(_systemDataTab==='personnel'){
    tableHtml = '<div style="padding:24px;text-align:center;"><div style="font-size:15px;font-weight:600;margin-bottom:12px;color:var(--c-text-2,#475569);">👥 人员数据为聚合视图</div><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">'
      +'<button class="btn btn-sm" onclick="renderModule(\'performance\')" style="padding:8px 16px;">📊 客服绩效看板</button>'
      +'<button class="btn btn-sm" onclick="renderModule(\'operation\')" style="padding:8px 16px;">📈 运营数据</button>'
      +'<button class="btn btn-sm" onclick="renderModule(\'dashboard\')" style="padding:8px 16px;">🏠 首页看板</button>'
      +'</div><div style="margin-top:12px;font-size:12px;color:var(--c-text-3,#94a3b8);">人员配置、工作量、绩效数据由各功能页面维护，此处统一展示聚合概览。</div></div>';
  } else if(_systemDataTab==='sysconfig'){
    tableHtml = '<div style="padding:24px;text-align:center;"><div style="font-size:15px;font-weight:600;margin-bottom:12px;color:var(--c-text-2,#475569);">🔒 系统配置为聚合视图</div><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">'
      +'<button class="btn btn-sm" onclick="renderModule(\'notifications\')" style="padding:8px 16px;">👥 系统用户管理</button>'
      +'<button class="btn btn-sm" onclick="renderModule(\'permissions\')" style="padding:8px 16px;">🔐 系统权限管理</button>'
      +'</div><div style="margin-top:12px;font-size:12px;color:var(--c-text-3,#94a3b8);">用户账号与权限配置由「系统用户管理」和「系统权限管理」页面维护。</div></div>';
  } else {
    tableHtml = '<div style="padding:40px;text-align:center;color:var(--c-text-3);">暂无数据</div>';
  }

  var paginationHtml = '';
  if(totalPages > 1){
    paginationHtml = ''
    +'<div style="display:flex;gap:6px;align-items:center;justify-content:center;margin-top:12px;">'
      +'<button class="btn btn-xs" onclick="_systemDataPage=1;renderModule(\'systemData\')"'+(_systemDataPage<=1?' disabled':'')+'>首页</button>'
      +'<button class="btn btn-xs" onclick="_systemDataPage=Math.max(1,_systemDataPage-1);renderModule(\'systemData\')"'+(_systemDataPage<=1?' disabled':'')+'>上一页</button>'
      +'<span style="font-size:12px;color:var(--c-text-2);padding:0 8px;">第 '+_systemDataPage+' / '+totalPages+' 页</span>'
      +'<button class="btn btn-xs" onclick="_systemDataPage=Math.min('+totalPages+',_systemDataPage+1);renderModule(\'systemData\')"'+(_systemDataPage>=totalPages?' disabled':'')+'>下一页</button>'
      +'<button class="btn btn-xs" onclick="_systemDataPage='+totalPages+';renderModule(\'systemData\')"'+(_systemDataPage>=totalPages?' disabled':'')+'>末页</button>'
    +'</div>';
  }

  return ''
  +'<div class="module-header">'
    +'<div><div class="module-title">🗄️ '+tableDef.label+'</div>'
    +'<div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">'+tableDef.desc+'</div></div>'
    +'<div class="module-actions">'
      +'<button class="btn btn-sm" onclick="backSystemDataCatalog()">← 返回目录</button>'
      +(isLog?'':'<button class="btn btn-primary btn-sm" onclick="addSystemDataRow()">+ 新增</button>')
      +(isLog?'':'<button class="btn btn-sm btn-danger" onclick="batchDeleteSystemData()">批量删除</button>')
      +(colDefs.goEnergyPool?'<button class="btn btn-sm" onclick="renderModule(\'knowledge\')">📖 在能量池查看</button>':'')
      +(isReadOnly?'<button class="btn btn-sm" onclick="renderModule(\'risk\')">⚠️ 去风险池处置</button>':'')
      +'<button class="btn btn-sm" onclick="exportSystemData()">导出</button>'
      +(isReadOnly?'':'<button class="btn btn-sm" onclick="importSystemData()">导入</button>')
    +'</div>'
  +'</div>'
  +'<div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;flex-wrap:wrap;">'
    +'<input type="text" id="sysdata-search" placeholder="搜索..." value="'+(keyword||'')+'" readonly autocomplete="off" name="chanseen_sysdsearch_unique" data-lpignore="true" data-1p-ignore="true" data-form-type="other" style="width:200px;padding:6px 10px;border:1px solid var(--c-border);border-radius:4px;font-size:12px;background-color:#fff;" onfocus="this.removeAttribute(\'readonly\');if(!this._touched){this.value=\'\';this._touched=true;}" onkeyup="searchSystemData(event)">'
    +'<button class="btn btn-xs" onclick="clearSystemDataSearch()">清除</button>'
    +'<span style="font-size:12px;color:var(--c-text-3);">共 '+totalRecords+' 条记录</span>'
  +'</div>'
  +'<div style="overflow-x:auto;">'+tableHtml+'</div>'
  +paginationHtml;
};

function goSystemDataDetail(key) { _systemDataView='detail'; _systemDataTab=key; _systemDataPage=1; _systemDataSearchKeyword=''; renderModule('systemData'); }
function backSystemDataCatalog() { _systemDataView='catalog'; renderModule('systemData'); }
function switchSystemDataTab(key) { _systemDataView='detail'; _systemDataTab=key; _systemDataPage=1; _systemDataSearchKeyword=''; renderModule('systemData'); }
function searchSystemData(e) { if(e.key==='Enter'||e.type==='click'){ _systemDataSearchKeyword=document.getElementById('sysdata-search')?document.getElementById('sysdata-search').value:''; _systemDataPage=1; renderModule('systemData'); } }
function clearSystemDataSearch() { _systemDataSearchKeyword=''; _systemDataPage=1; renderModule('systemData'); }
// 目录页搜索（实时筛选卡片，按表名+描述匹配）
window._systemDataCatalogSearch = '';
function catalogSearchSystemData(val) { _systemDataCatalogSearch = val; renderModule('systemData'); }
function clearCatalogSearch() { _systemDataCatalogSearch = ''; renderModule('systemData'); }
function toggleSelectAll(cb) { var cbs=document.querySelectorAll('.sd-row-cb'); for(var i=0;i<cbs.length;i++) cbs[i].checked=cb.checked; }
function _saveSystemData(tableKey) { var lsKey = _SD_LS_MAP[tableKey]; var td = SYSTEM_DATA_TABLES[tableKey]; if(lsKey && td && td.data) try { localStorage.setItem(lsKey, JSON.stringify(td.data)); } catch(e){} if(window.CloudBaseSync) try{window.CloudBaseSync.saveAll();}catch(e){} }

function showSystemDataForm(tableKey, record, fields, editIdx){
  var m = document.getElementById('sd-form-modal'); if(m) m.remove();
  var isEdit = (typeof editIdx !== 'undefined');
  var fh = '';
  for(var i=0; i<fields.length; i++){
    var f = fields[i], v = record ? (record[f.key]!=null?record[f.key]:'') : '';
    if(f.type==='textarea') fh += '<div style="margin-bottom:10px;"><label style="font-size:12px;display:block;margin-bottom:3px;">'+f.label+'</label><textarea id="sdf-'+f.key+'" style="width:100%;min-height:60px;padding:6px;border:1px solid var(--c-border);border-radius:4px;font-size:12px;">'+v+'</textarea></div>';
    else if(f.type==='select' && f.options){ fh += '<div style="margin-bottom:10px;"><label style="font-size:12px;display:block;margin-bottom:3px;">'+f.label+'</label><select id="sdf-'+f.key+'" style="width:100%;padding:6px;border:1px solid var(--c-border);border-radius:4px;font-size:12px;">'; for(var j=0;j<f.options.length;j++) fh += '<option value="'+f.options[j]+'"'+(v===f.options[j]?' selected':'')+'>'+f.options[j]+'</option>'; fh += '</select></div>'; }
    else fh += '<div style="margin-bottom:10px;"><label style="font-size:12px;display:block;margin-bottom:3px;">'+f.label+'</label><input type="'+f.type+'" id="sdf-'+f.key+'" value="'+String(v).replace(/"/g,'&quot;')+'" style="width:100%;padding:6px;border:1px solid var(--c-border);border-radius:4px;font-size:12px;"></div>';
  }
  var modal = document.createElement('div'); modal.id='sd-form-modal'; modal.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.4);z-index:10000;display:flex;align-items:center;justify-content:center;';
  modal.innerHTML = '<div style="background:#fff;border-radius:8px;padding:20px;width:90%;max-width:500px;max-height:80vh;overflow-y:auto;"><div style="font-size:16px;font-weight:600;margin-bottom:15px;">'+(isEdit?'编辑记录':'新增记录')+'</div>'+fh+'<div style="text-align:right;margin-top:15px;"><button class="btn btn-sm" onclick="document.getElementById(\'sd-form-modal\').remove()" style="margin-right:8px;">取消</button><button class="btn btn-primary btn-sm" onclick="submitSystemDataForm(\''+tableKey+'\','+(isEdit?editIdx:'-1')+')">保存</button></div></div>';
  document.body.appendChild(modal);
}
window.submitSystemDataForm = function(tableKey, editIdx) {
  var td = SYSTEM_DATA_TABLES[tableKey]; if(!td||!td.fields) return;
  var rec = (editIdx>=0 && td.data && td.data[editIdx]) ? JSON.parse(JSON.stringify(td.data[editIdx])) : {};
  for(var i=0; i<td.fields.length; i++){ var f=td.fields[i], el=document.getElementById('sdf-'+f.key); if(el){ var v=el.value; if(f.type==='number') v=parseFloat(v)||0; rec[f.key]=v; } }
  if(td.isKvTable){
    // KV表：直接写入原对象的键值对
    if(rec.key) td.data[rec.key] = rec.value;
  } else {
    if(editIdx>=0) td.data[editIdx]=rec; else td.data.push(rec);
  }
  _saveSystemData(tableKey);
  var mod=document.getElementById('sd-form-modal'); if(mod) mod.remove(); renderModule('systemData');
};
function addSystemDataRow() { var td=SYSTEM_DATA_TABLES[_systemDataTab]; if(!td||!td.fields||td.fields.length===0){ alert('该表不支持新增'); return; } showSystemDataForm(_systemDataTab, null, td.fields); }
function editSystemDataRow(idx) { var td=SYSTEM_DATA_TABLES[_systemDataTab]; if(!td||!td.fields||td.fields.length===0){ alert('该表不支持编辑'); return; } if(td.isKvTable){ var keys=Object.keys(td.data||{}); if(idx<0||idx>=keys.length) return; showSystemDataForm(_systemDataTab, {key:keys[idx],value:td.data[keys[idx]]}, td.fields, idx); } else { var rec=td.data[idx]; if(!rec) return; showSystemDataForm(_systemDataTab, rec, td.fields, idx); } }
function deleteSystemDataRow(idx) { if(!confirm('确定删除该条记录吗？')) return; var td=SYSTEM_DATA_TABLES[_systemDataTab]; if(!td) return; if(td.isKvTable){ var keys=Object.keys(td.data||{}); if(idx>=0&&idx<keys.length){ delete td.data[keys[idx]]; } } else { td.data.splice(idx,1); } _saveSystemData(_systemDataTab); renderModule('systemData'); }
function batchDeleteSystemData() { var cbs=document.querySelectorAll('.sd-row-cb:checked'); if(cbs.length===0){ alert('请先勾选要删除的记录'); return; } if(!confirm('确定删除选中的 '+cbs.length+' 条记录吗？')) return; var td=SYSTEM_DATA_TABLES[_systemDataTab]; if(!td) return; var idxs=[]; for(var i=0;i<cbs.length;i++) idxs.push(parseInt(cbs[i].dataset.idx)); idxs.sort(function(a,b){return b-a;}); for(var j=0;j<idxs.length;j++) td.data.splice(idxs[j],1); _saveSystemData(_systemDataTab); renderModule('systemData'); }

// ===== 导入数据（通用：针对当前打开的表）=====
function importSystemData() {
  var td = SYSTEM_DATA_TABLES[_systemDataTab];
  if(!td || !td.fields || td.fields.length===0){ alert('该表暂不支持导入'); return; }
  var fieldKeys = td.fields.map(function(f){return f.key;});
  var modal = document.createElement('div');
  modal.id = 'sd-import-modal';
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.4);z-index:10001;display:flex;align-items:center;justify-content:center;';
  modal.innerHTML =
    '<div style="background:#fff;border-radius:8px;padding:24px;width:90%;max-width:560px;">'
    + '<div style="font-size:16px;font-weight:600;margin-bottom:6px;">📥 导入数据 · '+td.label+'</div>'
    + '<div style="font-size:12px;color:var(--c-text-3);margin-bottom:16px;line-height:1.7;">支持 <b>CSV</b>（首行为字段名，可用字段：<b>'+fieldKeys.join(' / ')+'</b>）或 <b>JSON 数组</b>。导入数据将<b>追加</b>到当前表，不会覆盖现有数据。</div>'
    + '<input type="file" id="sd-import-file" accept=".csv,.json,.txt" style="width:100%;margin-bottom:12px;padding:10px;border:1px dashed var(--c-border);border-radius:6px;font-size:13px;">'
    + '<div id="sd-import-preview" style="font-size:13px;color:var(--c-text-2);min-height:24px;margin-bottom:12px;"></div>'
    + '<div style="text-align:right;">'
    + '<button class="btn btn-sm" onclick="document.getElementById(\'sd-import-modal\').remove()" style="margin-right:8px;">取消</button>'
    + '<button class="btn btn-sm" onclick="sdParseImportFile()">解析文件</button>'
    + '<button class="btn btn-primary btn-sm" id="sd-import-confirm" style="margin-left:8px;display:none;" onclick="sdConfirmImport()">确认导入</button>'
    + '</div></div>';
  document.body.appendChild(modal);
}
window.sdParseImportFile = function() {
  var td = SYSTEM_DATA_TABLES[_systemDataTab];
  if(!td) return;
  var fileInput = document.getElementById('sd-import-file');
  var preview = document.getElementById('sd-import-preview');
  if(!fileInput.files || !fileInput.files.length){ preview.innerHTML='<span style="color:#f5222d;">请先选择文件</span>'; return; }
  var file = fileInput.files[0];
  var reader = new FileReader();
  reader.onload = function(e){
    try {
      var text = e.target.result;
      var rows = [];
      if(file.name.toLowerCase().indexOf('.json')>=0 || text.trim().charAt(0)==='['){
        var parsed = JSON.parse(text);
        if(!Array.isArray(parsed)) parsed = [parsed];
        rows = parsed;
      } else {
        var rawLines = text.split(/\r?\n/).filter(function(l){return l.trim().length>0;});
        if(rawLines.length<2){ preview.innerHTML='<span style="color:#f5222d;">CSV 至少需要表头行和一行数据</span>'; var cb=document.getElementById('sd-import-confirm'); if(cb) cb.style.display='none'; return; }
        var headers = rawLines[0].split(',').map(function(h){return h.trim();});
        var keyMap = {};
        headers.forEach(function(h){ td.fields.forEach(function(f){ if(f.key===h||f.label===h) keyMap[h]=f.key; }); });
        for(var i=1;i<rawLines.length;i++){
          var cells = rawLines[i].split(',');
          var rec = {};
          headers.forEach(function(h,idx){ if(keyMap[h]!==undefined) rec[keyMap[h]] = (cells[idx]!==undefined?cells[idx].trim():''); });
          rows.push(rec);
        }
      }
      rows = rows.map(function(r){
        var o = {};
        td.fields.forEach(function(f){
          if(r[f.key]!==undefined && r[f.key]!==null && r[f.key]!==''){
            var v = r[f.key];
            if(f.type==='number'){ var n=parseFloat(v); v = isNaN(n)?0:n; }
            o[f.key] = v;
          }
        });
        return o;
      }).filter(function(r){ return Object.keys(r).length>0; });
      window._sdImportRows = rows;
      var confirmBtn = document.getElementById('sd-import-confirm');
      if(rows.length===0){ preview.innerHTML='<span style="color:#f5222d;">未解析到有效数据，请检查文件格式</span>'; if(confirmBtn) confirmBtn.style.display='none'; return; }
      preview.innerHTML = '✅ 解析成功，将导入 <b style="color:#0f766e;">'+rows.length+'</b> 条记录';
      if(confirmBtn) confirmBtn.style.display='inline-block';
    } catch(err){
      preview.innerHTML = '<span style="color:#f5222d;">解析失败：'+err.message+'</span>';
      var cbx = document.getElementById('sd-import-confirm'); if(cbx) cbx.style.display='none';
    }
  };
  reader.readAsText(file, 'utf-8');
};
window.sdConfirmImport = function() {
  var td = SYSTEM_DATA_TABLES[_systemDataTab];
  var rows = window._sdImportRows || [];
  if(!td || rows.length===0) return;
  for(var i=0;i<rows.length;i++) td.data.push(rows[i]);
  _saveSystemData(_systemDataTab);
  var mod = document.getElementById('sd-import-modal'); if(mod) mod.remove();
  renderModule('systemData');
};

function exportSystemData(){
  // 导出文件名映射配置（方案2）
  if (typeof window._exportFileNameMap === 'undefined') {
    window._exportFileNameMap = {
      projects:   { current: 'operations_', rename: '项目数据表_' },
      operations: { current: 'operations_', rename: '项目运营表_' },
      issues:     { current: 'issues_',     rename: '问题记录表_' },
      knowledge:  { current: 'knowledge_',  rename: '知识条目表_' },
      handovers:  { current: 'handovers_',  rename: '交接记录表_' },
      kpi:        { current: 'kpi_',        rename: 'KPI数据表_' },
      personnel:  { current: 'personnel_',  rename: '人员数据表_' },
      sysconfig:  { current: 'sysconfig_',  rename: '系统配置表_' },
      changelog:  { current: 'changelog_',  rename: '操作日志表_' }
    };
    // 从 localStorage 恢复用户自定义
    try {
      var saved = localStorage.getItem('chansee_export_filename_map');
      if (saved) {
        var userMap = JSON.parse(saved);
        for (var k in userMap) {
          if (userMap.hasOwnProperty(k) && window._exportFileNameMap[k]) {
            window._exportFileNameMap[k].rename = userMap[k];
          }
        }
      }
    } catch(e) {}
  }

  var map = window._exportFileNameMap;
  var mapKeys = Object.keys(map);

  var html = '\n'+
'<style>\n'+
'.sysdata-page{font-size:13px;}\n'+'.sysdata-title{font-size:16px;font-weight:700;color:var(--c-text-1);margin-bottom:4px;}\n'+
'.sysdata-subtitle{font-size:12px;color:var(--c-text-3);margin-bottom:18px;}\n'+
'.sysdata-table-wrap{background:var(--c-card);border-radius:10px;border:1px solid var(--c-border);overflow:hidden;}\n'+
'.sysdata-table{width:100%;border-collapse:collapse;font-size:13px;}\n'+
'.sysdata-table th{padding:12px 16px;text-align:left;background:var(--c-bg);color:var(--c-text-2);font-weight:600;font-size:12px;border-bottom:1px solid var(--c-border);}\n'+
'.sysdata-table td{padding:10px 16px;border-bottom:1px solid var(--c-border);vertical-align:middle;}\n'+
'.sysdata-table tr:last-child td{border-bottom:none;}\n'+
'.sysdata-table tr:hover td{background:rgba(59,130,246,.03);}\n'+
'.sysdata-key{font-family:monospace;background:#f1f5f9;padding:2px 8px;border-radius:4px;font-size:12px;color:#475569;}\n'+
'.sysdata-current{color:var(--c-text-3);font-size:12px;font-family:monospace;}\n'+
'.sysdata-input{width:100%;padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;font-size:13px;color:var(--c-text-1);background:var(--c-bg);transition:border-color .2s;outline:none;box-sizing:border-box;}\n'+
'.sysdata-input:focus{border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.1);}\n'+
'.sysdata-save-bar{margin-top:16px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;}\n'+
'</style>\n'+
'<div class="sysdata-page">\n'+
'  <div class="module-header">\n'+
'    <div>\n'+
'      <div class="module-title">🗄️ 系统数据管理</div>\n'+
'      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">管理导出文件名映射与系统配置</div>\n'+
'    </div>\n'+
'  </div>\n'+
'\n'+
'  <div style="margin-top:8px;">\n'+
'    <div class="sysdata-title">方案2：导出文件名优化（小改）</div>\n'+
'    <div class="sysdata-subtitle">文件名映射：</div>\n'+
'\n'+
'    <div class="sysdata-table-wrap">\n'+
'      <table class="sysdata-table">\n'+
'        <thead>\n'+
'          <tr>\n'+
'            <th style="width:140px;">tableKey</th>\n'+
'            <th style="width:200px;">当前</th>\n'+
'            <th>改为</th>\n'+
'          </tr>\n'+
'        </thead>\n'+
'        <tbody>\n'+
mapKeys.map(function(key) {
  return '<tr>'+
    '<td><span class="sysdata-key">'+key+'</span></td>'+
    '<td><span class="sysdata-current">'+(map[key].current || '--')+'</span></td>'+
    '<td><input class="sysdata-input" type="text" value="'+(map[key].rename || '')+'" data-sysdata-key="'+key+'" oninput="window._exportFileNameMap[this.dataset.sysdataKey].rename=this.value" /></td>'+
  '</tr>';
}).join('\n')+
'        </tbody>\n'+
'      </table>\n'+
'    </div>\n'+
'\n'+
'    <div class="sysdata-save-bar">\n'+
'      <button class="btn btn-primary btn-sm" onclick="saveExportFileNameMap()">💾 保存映射配置</button>\n'+
'      <button class="btn btn-sm" onclick="resetExportFileNameMap()">↩️ 恢复默认</button>\n'+
'      <span id="sysdata-save-hint" style="font-size:12px;color:#10b981;opacity:0;transition:opacity .3s;margin-left:8px;">✅ 已保存</span>\n'+
'    </div>\n'+
'  </div>\n'+
'</div>';

  return html;
}

// 保存导出文件名映射
function saveExportFileNameMap() {
  if (!window._exportFileNameMap) return;
  var saveData = {};
  for (var k in window._exportFileNameMap) {
    if (window._exportFileNameMap.hasOwnProperty(k)) {
      saveData[k] = window._exportFileNameMap[k].rename;
    }
  }
  try {
    localStorage.setItem('chansee_export_filename_map', JSON.stringify(saveData));
    var hint = document.getElementById('sysdata-save-hint');
    if (hint) { hint.style.opacity = '1'; setTimeout(function(){ hint.style.opacity = '0'; }, 2000); }
  } catch(e) {}
}

// 恢复默认文件名映射
function resetExportFileNameMap() {
  if (!confirm('确定恢复默认文件名映射吗？')) return;
  localStorage.removeItem('chansee_export_filename_map');
  window._exportFileNameMap = undefined;
  renderModule('systemData');
}

