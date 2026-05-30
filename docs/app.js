// ===== Mock 数据 =====

const PROJECTS = [

  {id:"P001", name:"美妆旗舰店客服项目", brand:"兰蔻", category:"美妆", serviceMode:"TP代运营", workplace:"济南", pm:"张伟", director:"李明", pmHistory:[{name:"王芳", from:"2025-06", to:"2026-03", reason:"调岗"}], status:"运营中", startDate:"2025-04-01", endDate:"2026-12-31", base:"济南职场2F", platforms:"天猫,抖音", serviceHours:"09:00-24:00", fteTarget:30, slaResponse:120, slaResolve:360, costBudget:450000, revenue:520000, profitRate:13.5, health:"🟢"},

  {id:"P002", name:"家电自营客服项目", brand:"美的", category:"家电", serviceMode:"经销模式", workplace:"淄博", pm:"刘洋", director:"王强", pmHistory:[], status:"运营中", startDate:"2025-01-15", endDate:"2026-12-31", base:"淄博职场1F", platforms:"京东,天猫", serviceHours:"08:00-22:00", fteTarget:45, slaResponse:90, slaResolve:300, costBudget:680000, revenue:750000, profitRate:9.3, health:"🟡"},

  {id:"P003", name:"服装品牌客服外包", brand:"优衣库", category:"服装", serviceMode:"BPO外包", workplace:"杭州", pm:"陈静", director:"李明", pmHistory:[{name:"赵丽", from:"2025-01", to:"2025-11", reason:"离职"}], status:"运营中", startDate:"2025-01-10", endDate:"2026-06-30", base:"杭州职场3F", platforms:"全平台", serviceHours:"08:00-24:00", fteTarget:60, slaResponse:60, slaResolve:240, costBudget:880000, revenue:920000, profitRate:4.3, health:"🔴"},

  {id:"P004", name:"母婴用品客服项目", brand:"好孩子", category:"母婴", serviceMode:"TP代运营", workplace:"济南", pm:"张伟", director:"王强", pmHistory:[], status:"运营中", startDate:"2025-08-01", endDate:"2027-01-31", base:"济南职场2F", platforms:"天猫,京东,拼多多", serviceHours:"09:00-21:00", fteTarget:25, slaResponse:120, slaResolve:360, costBudget:320000, revenue:380000, profitRate:15.8, health:"🟢"},

  {id:"P005", name:"食品生鲜客服项目", brand:"三只松鼠", category:"食品", serviceMode:"经销模式", workplace:"淄博", pm:"刘洋", director:"李明", pmHistory:[{name:"孙磊", from:"2025-03", to:"2026-02", reason:"内部调换"}], status:"运营中", startDate:"2025-03-01", endDate:"2026-08-31", base:"淄博职场1F", platforms:"天猫,抖音", serviceHours:"08:00-23:00", fteTarget:35, slaResponse:90, slaResolve:300, costBudget:520000, revenue:600000, profitRate:13.3, health:"🟡"},

  {id:"P006", name:"运动品牌客服项目", brand:"耐克", category:"运动", serviceMode:"BPO外包", workplace:"杭州", pm:"陈静", director:"王强", pmHistory:[], status:"暂停", startDate:"2025-06-01", endDate:"2026-05-31", base:"杭州职场3F", platforms:"天猫,官网", serviceHours:"09:00-21:00", fteTarget:20, slaResponse:60, slaResolve:240, costBudget:280000, revenue:250000, profitRate:-10.7, health:"🔴"},
  {id:"P007", name:"智能家居客服项目", brand:"小米", category:"智能硬件", serviceMode:"TP代运营", workplace:"无锡", pm:"张伟", director:"李明", pmHistory:[], status:"运营中", startDate:"2026-03-01", endDate:"2027-02-28", base:"无锡职场1F", platforms:"天猫,京东,抖音", serviceHours:"09:00-22:00", fteTarget:35, slaResponse:90, slaResolve:300, costBudget:420000, revenue:480000, profitRate:12.5, health:"🟢"},

];



const OPERATIONS = [

  {id:1, projectId:"P001", period:"2026-05", fteActual:28, attendance:96.5, ticketVol:12580, responseTime:98, resolveTime:320, csat:4.8, resolutionRate:97.2, reviewRate:82.5, health:"🟢"},

  {id:2, projectId:"P002", period:"2026-05", fteActual:42, attendance:94.2, ticketVol:18420, responseTime:88, resolveTime:290, csat:4.6, resolutionRate:95.8, reviewRate:78.3, health:"🟡"},

  {id:3, projectId:"P003", period:"2026-05", fteActual:52, attendance:91.8, ticketVol:22100, responseTime:75, resolveTime:380, csat:4.2, resolutionRate:91.5, reviewRate:65.2, health:"🔴"},

  {id:4, projectId:"P004", period:"2026-05", fteActual:24, attendance:97.1, ticketVol:9800, responseTime:105, resolveTime:310, csat:4.9, resolutionRate:98.1, reviewRate:85.6, health:"🟢"},

  {id:5, projectId:"P005", period:"2026-05", fteActual:33, attendance:95.0, ticketVol:15600, responseTime:92, resolveTime:295, csat:4.5, resolutionRate:94.5, reviewRate:76.8, health:"🟡"},

  {id:6, projectId:"P006", period:"2026-05", fteActual:15, attendance:88.0, ticketVol:8900, responseTime:130, resolveTime:420, csat:3.8, resolutionRate:88.0, reviewRate:60.1, health:"🔴"},

];



const ISSUES = [

  {id:1, projectId:"P002", projectName:"家电自营客服项目", type:"整改", desc:"连续两周满意度低于目标值4.7", priority:"重要", owner:"刘洋", assignee:"刘洋", status:"处理中", source:"监控预警", responsibility:"承接方", createdAt:"2026-05-15", solution:""},

  {id:2, projectId:"P003", projectName:"服装品牌客服外包", type:"客诉", desc:"大促期间系统崩溃导致回复超时，品牌方投诉", priority:"紧急", owner:"陈静", assignee:"陈静", status:"待验收", source:"品牌反馈", responsibility:"共同", createdAt:"2026-05-10", solution:"已搭建备用会话分配机制，增加熔断保护"},

  {id:3, projectId:"P006", projectName:"运动品牌客服项目", type:"优化", desc:"项目利润率持续为负，需重新核算成本结构", priority:"紧急", owner:"陈静", assignee:"王强", status:"待处理", source:"财务预警", responsibility:"承接方", createdAt:"2026-05-20", solution:""},

  {id:4, projectId:"P001", projectName:"美妆旗舰店客服项目", type:"优化", desc:"大促预案需要更新，去年双11出现人手不足", priority:"一般", owner:"张伟", assignee:"张伟", status:"已关闭", source:"人工上报", responsibility:"承接方", createdAt:"2026-04-01", solution:"已完成大促人力预案，增加20%临时人力储备"},

];



const KNOWLEDGE = [

  {id:1, title:"美妆类目大促客服应对SOP", type:"SOP操作规范", sourceProject:"P001", tags:"美妆,大促, SOP", scope:"通用", createdAt:"2025-11-20"},

  {id:2, title:"BPO外包模式成本控制经验", type:"成本优化经验", sourceProject:"P003", tags:"BPO,成本,外包", scope:"特定品类", createdAt:"2026-03-15"},

  {id:3, title:"天猫平台回复话术规范（2026版）", type:"品牌特殊话术", sourceProject:"P001", tags:"天猫,话术,规范", scope:"特定平台", createdAt:"2026-01-10"},

  {id:4, title:"客服系统崩溃应急处理预案", type:"应急方案", sourceProject:"P003", tags:"应急,系统,预案", scope:"通用", createdAt:"2026-05-12"},

  {id:5, title:"新人客服培训标准课件（全品类）", type:"培训材料", sourceProject:"", tags:"培训,新人,标准", scope:"通用", createdAt:"2025-09-01"},

];



const HANDOVERS = [

  {id:1, projectId:"P001", projectName:"美妆旗舰店客服项目", from:"王芳", to:"张伟", date:"2026-03-15", status:"已完成", summary:"完成全部基础档案+目标交接，运营数据已同步"},

  {id:2, projectId:"P003", projectName:"服装品牌客服外包", from:"赵丽", to:"陈静", date:"2025-11-20", status:"已完成", summary:"BPO特殊成本核算方式已重点交接"},

  {id:3, projectId:"P005", projectName:"食品生鲜客服项目", from:"孙磊", to:"刘洋", date:"2026-02-28", status:"已完成", summary:"食品类目的特殊退换货政策已交接"},

];



// ===== 项目满意度评估数据 =====

// 对外：项目方只填写感受描述，不显示分值

// 对内：上级基于沟通内容+校验真伪，给出 10/8/6/3/0 五档评分

// 目的：帮助员工提能提效，改进不足，促进友好协作

const SATISFACTION_DATA = [

  {

    id: 1, projectId: "P001", period: "2026-05",

    projectFeedback: {

      businessPerf: "整体表现超过预期，团队配合非常积极主动",

      professionalism: "对于业务需求提供合理、有效、专业的应对方案，超出预期",

      execution: "都能按预期落地执行",

      reporting: { timeliness: "按预期落地执行", accuracy: "展示效果好，无错漏", completeness: "汇报内容全面清晰，超过预期" },

      riskControl: "预案完善，报备实时，应对高效合理",

      communication: { frequency: "非常满意", understanding: "沟通积极主动，对项目需求充分理解甚至预判，沟通非常顺畅", sync: "非常满意" },

      overall: "非常满意"

    },

    leaderScore: 10, leaderComment: "项目反馈非常好，团队表现超出预期，继续保持",

    evaluatedBy: "李明", evaluatedAt: "2026-05-28", status: "已评定"

  },

  {

    id: 2, projectId: "P002", period: "2026-05",

    projectFeedback: {

      businessPerf: "业务达成较好，团队积极性主动性较好",

      professionalism: "对于业务需求能提供合理有效的应对方案",

      execution: "有不能如期落地执行的情况，但能接受",

      reporting: { timeliness: "按预期落地执行", accuracy: "展示效果不错，错漏少（少于1次）", completeness: "汇报内容较完整合理，对疑问能提供实时、满意的解释" },

      riskControl: "有预案，报备及时（风险后1个工作日内），应对基本合理",

      communication: { frequency: "满意", understanding: "定期汇报沟通，理解项目需求，有问题及时同步", sync: "满意" },

      overall: "满意"

    },

    leaderScore: 8, leaderComment: "整体表现良好，执行效率有待提升，需加强落地时效性管理",

    evaluatedBy: "王强", evaluatedAt: "2026-05-28", status: "已评定"

  },

  {

    id: 3, projectId: "P003", period: "2026-05",

    projectFeedback: {

      businessPerf: "业务达成一般，团队主动性有待提升",

      professionalism: "方案出具基本合理，但有时响应较慢",

      execution: "经常不能如期落地执行",

      reporting: { timeliness: "执行时效尚能接受", accuracy: "展示效果尚可，基本无错漏", completeness: "汇报内容基本完整，但对部分疑问解释不够清晰" },

      riskControl: "有预案，但报备不够及时，应对方案需要加强",

      communication: { frequency: "一般", understanding: "沟通基本顺畅，但有时对需求理解有偏差", sync: "一般" },

      overall: "一般"

    },

    leaderScore: 6, leaderComment: "多项指标需改进，已安排专项辅导，重点提升执行效率和风险管控能力",

    evaluatedBy: "李明", evaluatedAt: "2026-05-28", status: "已评定"

  },

  {

    id: 4, projectId: "P004", period: "2026-05",

    projectFeedback: {

      businessPerf: "整体表现超过预期，团队配合非常积极主动",

      professionalism: "对于业务需求提供合理、有效、专业的应对方案，超出预期",

      execution: "超过预期快速落地",

      reporting: { timeliness: "超过预期快速落地", accuracy: "展示效果好，无错漏", completeness: "汇报内容全面清晰，超过预期" },

      riskControl: "预案完善，报备实时，应对高效合理",

      communication: { frequency: "非常满意", understanding: "沟通积极主动，对项目需求充分理解甚至预判，沟通非常顺畅", sync: "非常满意" },

      overall: "非常满意"

    },

    leaderScore: 10, leaderComment: "母婴类目服务标杆，团队专业度高，建议作为最佳实践推广",

    evaluatedBy: "王强", evaluatedAt: "2026-05-28", status: "已评定"

  },

  {

    id: 5, projectId: "P005", period: "2026-05",

    projectFeedback: {

      businessPerf: "业务达成较好，团队积极性主动性较好",

      professionalism: "对于业务需求能提供合理有效的应对方案",

      execution: "都能按预期落地执行",

      reporting: { timeliness: "按预期落地执行", accuracy: "展示效果不错，错漏少（少于1次）", completeness: "汇报内容较完整合理" },

      riskControl: "有预案，报备及时，应对基本合理",

      communication: { frequency: "满意", understanding: "定期汇报沟通，理解项目需求", sync: "满意" },

      overall: "满意"

    },

    leaderScore: 8, leaderComment: "食品类目季节性波动大，团队应对不错，继续保持稳定",

    evaluatedBy: "李明", evaluatedAt: "2026-05-28", status: "已评定"

  },

  {

    id: 6, projectId: "P006", period: "2026-05",

    projectFeedback: {

      businessPerf: "业务达成较差，团队主动性不足",

      professionalism: "方案出具不合理，应对不够专业",

      execution: "经常不能如期落地执行",

      reporting: { timeliness: "执行效率不好", accuracy: "展示效果不好，错漏较多", completeness: "汇报内容不够完整，对疑问解释不满意" },

      riskControl: "无预案，报备不及时，应对不合理",

      communication: { frequency: "不满意", understanding: "沟通不顺畅，对需求理解有偏差", sync: "不满意" },

      overall: "不满意"

    },

    leaderScore: 3, leaderComment: "项目已暂停，需深刻复盘。已安排一对一辅导，重点改进沟通和专业度问题",

    evaluatedBy: "王强", evaluatedAt: "2026-05-28", status: "已评定"

  }

];



const HEALTH_DATA = [

  {

    projectId:"P001", period:"2026-05", overallScore:94, overallLevel:"健康",

    dimensions:[

      {key:"manpower", name:"人力健康度", score:90, level:"健康", weight:0.15,

       items:[

         {name:"新老员工配比", target:"≤30%", actual:"22%", score:90, level:"健康", remark:"团队稳定，新员工占比合理"},

         {name:"当月客服离职流失率", target:"≤5%", actual:"3.2%", score:90, level:"健康", remark:"低于目标，团队稳定"}

       ]},

      {key:"service", name:"服务健康度", score:95, level:"优秀", weight:0.2,

       items:[

         {name:"DSR对比行业健康度", target:"≥4.8", actual:"4.85", score:100, level:"优秀", remark:"高于行业均值0.05"},

         {name:"DSR服务对比上月健康度", target:"≥4.75", actual:"4.82", score:100, level:"优秀", remark:"环比持续提升"},

         {name:"综合体验评分健康度", target:"≥4.5", actual:"4.52", score:90, level:"健康", remark:"达标"},

         {name:"金银旺旺健康度", target:"金旺旺", actual:"金旺旺", score:100, level:"优秀", remark:"保持金牌评级"}

       ]},

      {key:"sales", name:"销售健康度", score:90, level:"健康", weight:0.35,

       items:[

         {name:"年度销售指标达成健康度-客服", target:"65%", actual:"68%", score:100, level:"优秀", remark:"超额完成年度进度"},

         {name:"月度销售指标健康度-店铺", target:"100%", actual:"102%", score:100, level:"优秀", remark:"月度销售达标"},

         {name:"月度销售指标健康度-客服", target:"100%", actual:"95%", score:90, level:"健康", remark:"略低于目标"},

         {name:"人工客服转化率健康度", target:"12%", actual:"11.5%", score:85, level:"需注意", remark:"转化率需关注"},

         {name:"挽单成功率", target:"50%", actual:"55%", score:100, level:"优秀", remark:"高于目标"}

       ]},

      {key:"returns", name:"退货退款", score:100, level:"优秀", weight:0.1,

       items:[

         {name:"退货退款健康评估", target:"≤5%", actual:"4.2%", score:100, level:"优秀", remark:"退货率控制良好"}

       ]},

      {key:"risk", name:"异常风险", score:100, level:"优秀", weight:0.2,

       items:[

         {name:"异常问题健康度评估", target:"无异常", actual:"无异常", score:100, level:"优秀", remark:"本月无异常"},

         {name:"资损类风险订单健康度评估", target:"无风险", actual:"无风险", score:100, level:"优秀", remark:"本月无资损风险"}

       ]},

      {key:"cost", name:"成本把控", score:88, level:"健康", weight:0,

       items:[

         {name:"客服团队实际当月成本", target:"150000", actual:"142000", score:90, level:"健康", remark:"低于预算"},

         {name:"客服团队当月成本目标", target:"150000", actual:"150000", score:100, level:"优秀", remark:"目标一致"},

         {name:"成本把控健康度", target:"未超预算", actual:"未超预算", score:100, level:"优秀", remark:"成本可控"},

         {name:"成本同比", target:"-10%", actual:"-8%", score:90, level:"健康", remark:"同比下降"}

       ]}

    ]

  },

  {

    projectId:"P002", period:"2026-05", overallScore:89, overallLevel:"健康",

    dimensions:[

      {key:"manpower", name:"人力健康度", score:85, level:"需注意", weight:0.15,

       items:[

         {name:"新老员工配比", target:"≤30%", actual:"35%", score:85, level:"需注意", remark:"新员工占比略高，需加强培训"},

         {name:"当月客服离职流失率", target:"≤5%", actual:"6.5%", score:85, level:"需注意", remark:"流失率偏高，关注原因"}

       ]},

      {key:"service", name:"服务健康度", score:90, level:"健康", weight:0.2,

       items:[

         {name:"DSR对比行业健康度", target:"≥4.8", actual:"4.78", score:90, level:"健康", remark:"接近行业均值"},

         {name:"DSR服务对比上月健康度", target:"≥4.75", actual:"4.76", score:90, level:"健康", remark:"小幅提升"},

         {name:"综合体验评分健康度", target:"≥4.5", actual:"4.45", score:85, level:"需注意", remark:"略低于目标"},

         {name:"金银旺旺健康度", target:"金旺旺", actual:"银旺旺", score:85, level:"需注意", remark:"降级为银牌"}

       ]},

      {key:"sales", name:"销售健康度", score:90, level:"健康", weight:0.35,

       items:[

         {name:"年度销售指标达成健康度-客服", target:"65%", actual:"62%", score:90, level:"健康", remark:"进度正常"},

         {name:"月度销售指标健康度-店铺", target:"100%", actual:"95%", score:85, level:"需注意", remark:"月度未达标"},

         {name:"月度销售指标健康度-客服", target:"100%", actual:"92%", score:85, level:"需注意", remark:"客服端未达标"},

         {name:"人工客服转化率健康度", target:"12%", actual:"11.8%", score:90, level:"健康", remark:"接近目标"},

         {name:"挽单成功率", target:"50%", actual:"48%", score:90, level:"健康", remark:"接近目标"}

       ]},

      {key:"returns", name:"退货退款", score:85, level:"需注意", weight:0.1,

       items:[

         {name:"退货退款健康评估", target:"≤5%", actual:"5.3%", score:85, level:"需注意", remark:"退货率略高于目标"}

       ]},

      {key:"risk", name:"异常风险", score:90, level:"健康", weight:0.2,

       items:[

         {name:"异常问题健康度评估", target:"无影响", actual:"有影响无资损", score:90, level:"健康", remark:"有异常但无资损"},

         {name:"资损类风险订单健康度评估", target:"无风险", actual:"无风险", score:100, level:"优秀", remark:"无资损"}

       ]},

      {key:"cost", name:"成本把控", score:90, level:"健康", weight:0,

       items:[

         {name:"客服团队实际当月成本", target:"220000", actual:"215000", score:90, level:"健康", remark:"略低于预算"},

         {name:"成本把控健康度", target:"未超预算", actual:"未超预算", score:100, level:"优秀", remark:"成本可控"}

       ]}

    ]

  },

  {

    projectId:"P003", period:"2026-05", overallScore:83, overallLevel:"需注意",

    dimensions:[

      {key:"manpower", name:"人力健康度", score:85, level:"需注意", weight:0.15,

       items:[

         {name:"新老员工配比", target:"≤30%", actual:"42%", score:80, level:"极差", remark:"新员工占比过高，影响服务质量"},

         {name:"当月客服离职流失率", target:"≤5%", actual:"8%", score:80, level:"极差", remark:"流失率严重超标"}

       ]},

      {key:"service", name:"服务健康度", score:80, level:"极差", weight:0.2,

       items:[

         {name:"DSR对比行业健康度", target:"≥4.8", actual:"4.55", score:80, level:"极差", remark:"低于行业均值"},

         {name:"DSR服务对比上月健康度", target:"≥4.75", actual:"4.50", score:80, level:"极差", remark:"环比下降"},

         {name:"综合体验评分健康度", target:"≥4.5", actual:"4.20", score:80, level:"极差", remark:"明显低于目标"},

         {name:"金银旺旺健康度", target:"金旺旺", actual:"无评级", score:80, level:"极差", remark:"未获得评级"}

       ]},

      {key:"sales", name:"销售健康度", score:85, level:"需注意", weight:0.35,

       items:[

         {name:"年度销售指标达成健康度-客服", target:"65%", actual:"55%", score:80, level:"极差", remark:"进度严重滞后"},

         {name:"月度销售指标健康度-店铺", target:"100%", actual:"88%", score:85, level:"需注意", remark:"月度未达标"},

         {name:"月度销售指标健康度-客服", target:"100%", actual:"85%", score:80, level:"极差", remark:"客服端严重不达标"},

         {name:"人工客服转化率健康度", target:"12%", actual:"9.8%", score:80, level:"极差", remark:"转化率低"},

         {name:"挽单成功率", target:"50%", actual:"45%", score:85, level:"需注意", remark:"略低于目标"}

       ]},

      {key:"returns", name:"退货退款", score:80, level:"极差", weight:0.1,

       items:[

         {name:"退货退款健康评估", target:"≤5%", actual:"6.8%", score:80, level:"极差", remark:"退货率严重超标"}

       ]},

      {key:"risk", name:"异常风险", score:85, level:"需注意", weight:0.2,

       items:[

         {name:"异常问题健康度评估", target:"无影响", actual:"有影响有客诉", score:85, level:"需注意", remark:"有客诉但未产生资损"},

         {name:"资损类风险订单健康度评估", target:"无风险", actual:"有风险追回中", score:85, level:"需注意", remark:"有风险订单，货款追回中"}

       ]},

      {key:"cost", name:"成本把控", score:85, level:"需注意", weight:0,

       items:[

         {name:"客服团队实际当月成本", target:"280000", actual:"295000", score:80, level:"极差", remark:"超出预算"},

         {name:"成本把控健康度", target:"未超预算", actual:"超出预算", score:80, level:"极差", remark:"成本超支需关注"}

       ]}

    ]

  },

  {

    projectId:"P004", period:"2026-05", overallScore:96, overallLevel:"优秀",

    dimensions:[

      {key:"manpower", name:"人力健康度", score:100, level:"优秀", weight:0.15,

       items:[

         {name:"新老员工配比", target:"≤30%", actual:"15%", score:100, level:"优秀", remark:"团队成熟稳定"},

         {name:"当月客服离职流失率", target:"≤5%", actual:"0%", score:100, level:"优秀", remark:"零流失"}

       ]},

      {key:"service", name:"服务健康度", score:95, level:"优秀", weight:0.2,

       items:[

         {name:"DSR对比行业健康度", target:"≥4.8", actual:"4.90", score:100, level:"优秀", remark:"远超行业均值"},

         {name:"DSR服务对比上月健康度", target:"≥4.75", actual:"4.88", score:100, level:"优秀", remark:"持续提升"},

         {name:"综合体验评分健康度", target:"≥4.5", actual:"4.60", score:100, level:"优秀", remark:"超出目标"},

         {name:"金银旺旺健康度", target:"金旺旺", actual:"金旺旺", score:100, level:"优秀", remark:"保持金牌"}

       ]},

      {key:"sales", name:"销售健康度", score:95, level:"优秀", weight:0.35,

       items:[

         {name:"年度销售指标达成健康度-客服", target:"65%", actual:"72%", score:100, level:"优秀", remark:"超额完成"},

         {name:"月度销售指标健康度-店铺", target:"100%", actual:"108%", score:100, level:"优秀", remark:"超额达标"},

         {name:"月度销售指标健康度-客服", target:"100%", actual:"105%", score:100, level:"优秀", remark:"超额达标"},

         {name:"人工客服转化率健康度", target:"12%", actual:"13.2%", score:100, level:"优秀", remark:"转化率优秀"},

         {name:"挽单成功率", target:"50%", actual:"58%", score:100, level:"优秀", remark:"远高于目标"}

       ]},

      {key:"returns", name:"退货退款", score:100, level:"优秀", weight:0.1,

       items:[

         {name:"退货退款健康评估", target:"≤5%", actual:"3.5%", score:100, level:"优秀", remark:"退货率优秀"}

       ]},

      {key:"risk", name:"异常风险", score:100, level:"优秀", weight:0.2,

       items:[

         {name:"异常问题健康度评估", target:"无异常", actual:"无异常", score:100, level:"优秀", remark:"无异常"},

         {name:"资损类风险订单健康度评估", target:"无风险", actual:"无风险", score:100, level:"优秀", remark:"无风险"}

       ]},

      {key:"cost", name:"成本把控", score:92, level:"健康", weight:0,

       items:[

         {name:"客服团队实际当月成本", target:"120000", actual:"110000", score:90, level:"健康", remark:"低于预算"},

         {name:"成本把控健康度", target:"未超预算", actual:"未超预算", score:100, level:"优秀", remark:"成本优秀"}

       ]}

    ]

  },

  {

    projectId:"P005", period:"2026-05", overallScore:88, overallLevel:"健康",

    dimensions:[

      {key:"manpower", name:"人力健康度", score:90, level:"健康", weight:0.15,

       items:[

         {name:"新老员工配比", target:"≤30%", actual:"28%", score:90, level:"健康", remark:"新员工占比合理"},

         {name:"当月客服离职流失率", target:"≤5%", actual:"4.5%", score:90, level:"健康", remark:"正常水平"}

       ]},

      {key:"service", name:"服务健康度", score:88, level:"健康", weight:0.2,

       items:[

         {name:"DSR对比行业健康度", target:"≥4.8", actual:"4.80", score:90, level:"健康", remark:"刚好达标"},

         {name:"DSR服务对比上月健康度", target:"≥4.75", actual:"4.77", score:90, level:"健康", remark:"小幅提升"},

         {name:"综合体验评分健康度", target:"≥4.5", actual:"4.48", score:85, level:"需注意", remark:"略低于目标"},

         {name:"金银旺旺健康度", target:"金旺旺", actual:"银旺旺", score:85, level:"需注意", remark:"银牌，需提升"}

       ]},

      {key:"sales", name:"销售健康度", score:90, level:"健康", weight:0.35,

       items:[

         {name:"年度销售指标达成健康度-客服", target:"65%", actual:"64%", score:90, level:"健康", remark:"进度正常"},

         {name:"月度销售指标健康度-店铺", target:"100%", actual:"98%", score:90, level:"健康", remark:"接近达标"},

         {name:"月度销售指标健康度-客服", target:"100%", actual:"96%", score:90, level:"健康", remark:"接近达标"},

         {name:"人工客服转化率健康度", target:"12%", actual:"11.2%", score:90, level:"健康", remark:"接近目标"},

         {name:"挽单成功率", target:"50%", actual:"51%", score:100, level:"优秀", remark:"达标"}

       ]},

      {key:"returns", name:"退货退款", score:90, level:"健康", weight:0.1,

       items:[

         {name:"退货退款健康评估", target:"≤5%", actual:"4.8%", score:90, level:"健康", remark:"接近目标"}

       ]},

      {key:"risk", name:"异常风险", score:90, level:"健康", weight:0.2,

       items:[

         {name:"异常问题健康度评估", target:"无影响", actual:"有影响无资损", score:90, level:"健康", remark:"有异常但无资损"},

         {name:"资损类风险订单健康度评估", target:"无风险", actual:"无风险", score:100, level:"优秀", remark:"无资损"}

       ]},

      {key:"cost", name:"成本把控", score:88, level:"健康", weight:0,

       items:[

         {name:"客服团队实际当月成本", target:"170000", actual:"165000", score:90, level:"健康", remark:"低于预算"},

         {name:"成本把控健康度", target:"未超预算", actual:"未超预算", score:100, level:"优秀", remark:"成本可控"}

       ]}

    ]

  },

  {

    projectId:"P006", period:"2026-05", overallScore:78, overallLevel:"极差",

    dimensions:[

      {key:"manpower", name:"人力健康度", score:80, level:"极差", weight:0.15,

       items:[

         {name:"新老员工配比", target:"≤30%", actual:"50%", score:80, level:"极差", remark:"新员工占比严重超标"},

         {name:"当月客服离职流失率", target:"≤5%", actual:"12%", score:80, level:"极差", remark:"流失率严重超标"}

       ]},

      {key:"service", name:"服务健康度", score:75, level:"极差", weight:0.2,

       items:[

         {name:"DSR对比行业健康度", target:"≥4.8", actual:"4.40", score:80, level:"极差", remark:"远低于行业均值"},

         {name:"DSR服务对比上月健康度", target:"≥4.75", actual:"4.35", score:80, level:"极差", remark:"环比下降"},

         {name:"综合体验评分健康度", target:"≥4.5", actual:"3.90", score:80, level:"极差", remark:"严重低于目标"},

         {name:"金银旺旺健康度", target:"金旺旺", actual:"无评级", score:80, level:"极差", remark:"未获得评级"}

       ]},

      {key:"sales", name:"销售健康度", score:80, level:"极差", weight:0.35,

       items:[

         {name:"年度销售指标达成健康度-客服", target:"65%", actual:"48%", score:80, level:"极差", remark:"进度严重滞后"},

         {name:"月度销售指标健康度-店铺", target:"100%", actual:"82%", score:80, level:"极差", remark:"严重不达标"},

         {name:"月度销售指标健康度-客服", target:"100%", actual:"78%", score:80, level:"极差", remark:"严重不达标"},

         {name:"人工客服转化率健康度", target:"12%", actual:"8.5%", score:80, level:"极差", remark:"转化率严重偏低"},

         {name:"挽单成功率", target:"50%", actual:"42%", score:80, level:"极差", remark:"低于目标"}

       ]},

      {key:"returns", name:"退货退款", score:80, level:"极差", weight:0.1,

       items:[

         {name:"退货退款健康评估", target:"≤5%", actual:"7.5%", score:80, level:"极差", remark:"退货率严重超标"}

       ]},

      {key:"risk", name:"异常风险", score:80, level:"极差", weight:0.2,

       items:[

         {name:"异常问题健康度评估", target:"无影响", actual:"有资损有客诉", score:80, level:"极差", remark:"产生资损和客诉"},

         {name:"资损类风险订单健康度评估", target:"无风险", actual:"有损失", score:80, level:"极差", remark:"货款无法追回"}

       ]},

      {key:"cost", name:"成本把控", score:78, level:"极差", weight:0,

       items:[

         {name:"客服团队实际当月成本", target:"90000", actual:"95000", score:80, level:"极差", remark:"超出预算"},

         {name:"成本把控健康度", target:"未超预算", actual:"超出预算", score:80, level:"极差", remark:"成本超支"}

       ]}

    ]

  }

];



const CURRENT_ROLE = {name:"pm", label:"项目经理"};

let currentModule = "dashboard";

let currentWpFilter = "all";



// ===== 初始化 =====

document.addEventListener("DOMContentLoaded", () => {

  initRoleSwitcher();

  initNav();

  initWpFilter();

  initModal();

  renderModule("dashboard");

});



// ===== 角色切换 =====

function initRoleSwitcher(){

  document.querySelectorAll(".role-btn").forEach(btn => {

    btn.addEventListener("click", () => {

      document.querySelectorAll(".role-btn").forEach(b=>b.classList.remove("active"));

      btn.classList.add("active");

      CURRENT_ROLE.name = btn.dataset.role;

      const hints = {pm:"项目经理：全量读写权限", exec:"执行团队：读写负责项目，只读其他同部门项目", leader:"上级领导：只读全部项目健康度驾驶舱", staff:"项目人员：只读所参与项目的服务成果与运作概况"};

      document.getElementById("role-hint").textContent = hints[CURRENT_ROLE.name];

      renderModule(currentModule);

    });

  });

}



// ===== 导航 =====

function initNav(){

  document.querySelectorAll(".nav-item").forEach(item => {

    item.addEventListener("click", e => {

      e.preventDefault();

      document.querySelectorAll(".nav-item").forEach(i=>i.classList.remove("active"));

      item.classList.add("active");

      renderModule(item.dataset.module);

    });

  });

}



function initWpFilter(){

  document.getElementById("wp-filter").addEventListener("change", e => {

    currentWpFilter = e.target.value;

    renderModule(currentModule);

  });

}



// ===== 模块分发 =====

function renderModule(module){

  currentModule = module;

  const area = document.getElementById("module-content");

  const fns = {dashboard:renderDashboard, archive:renderArchive, target:renderTarget, cost:renderCost, operation:renderOperation, issue:renderIssue, knowledge:renderKnowledge, handover:renderHandover, satisfaction:renderSatisfaction, director:renderDirector};

  area.innerHTML = fns[module] ? fns[module]() : `<div class="empty-state"><div class="empty-icon">🚧</div><p>模块开发中...</p></div>`;

  bindEvents();

}



function getFilteredProjects(){

  if(currentWpFilter === "all") return [...PROJECTS];

  return PROJECTS.filter(p => p.workplace === currentWpFilter);

}

function canEdit(){ return ["pm","exec"].includes(CURRENT_ROLE.name); }

function canViewAll(){ return CURRENT_ROLE.name === "leader"; }



// ===== 驾驶舱 =====

function renderDashboard(){

  const all = getFilteredProjects();

  const green = all.filter(p=>p.health==="🟢").length;

  const yellow = all.filter(p=>p.health==="🟡").length;

  const red = all.filter(p=>p.health==="🔴").length;

  const totalRevenue = all.reduce((s,p)=>s+p.revenue,0);

  const totalCost = all.reduce((s,p)=>s+p.costBudget,0);

  const avgProfit = all.length ? (all.reduce((s,p)=>s+p.profitRate,0)/all.length).toFixed(1) : 0;



  return `

  <div class="module-header">

    <div>

      <div class="module-title">📊 项目健康度驾驶舱</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">${currentWpFilter==='all'?'全部职场':currentWpFilter+'职场'} · 共 ${all.length} 个项目</div>

    </div>

    <div class="module-actions">

      <button class="btn btn-sm" onclick="exportDashboard()">📥 导出报表</button>

    </div>

  </div>



  <div class="metric-grid">

    <div class="metric-card">

      <div class="metric-label">项目总数</div>

      <div class="metric-value">${all.length}</div>

    </div>

    <div class="metric-card">

      <div class="metric-label">健康状态</div>

      <div class="metric-value" style="font-size:18px;">

        <span style="color:#10B981">🟢${green}</span> &nbsp;

        <span style="color:#F59E0B">🟡${yellow}</span> &nbsp;

        <span style="color:#EF4444">🔴${red}</span>

      </div>

    </div>

    <div class="metric-card">

      <div class="metric-label">总收入（月度）</div>

      <div class="metric-value">¥${(totalRevenue/10000).toFixed(1)}万</div>

    </div>

    <div class="metric-card">

      <div class="metric-label">平均利润率</div>

      <div class="metric-value" style="color:${avgProfit>=10?'#0F6E56':'#854F0B'}">${avgProfit}%</div>

    </div>

    <div class="metric-card">

      <div class="metric-label">总预算（月度）</div>

      <div class="metric-value">¥${(totalCost/10000).toFixed(1)}万</div>

    </div>

  </div>



  <!-- 四分视图 -->

  <div class="dashboard-grid">

    <div class="dashboard-card">

      <h3>📈 销售概览</h3>

      <table class="data-table">

        <thead><tr><th>项目</th><th>单量</th><th>健康</th></tr></thead>

        <tbody>

          ${OPERATIONS.map(o=>{

            const p=PROJECTS.find(pp=>pp.id===o.projectId);

            if(currentWpFilter!=='all' && p && p.workplace!==currentWpFilter) return '';

            return `<tr><td>${p?p.name:o.projectId}</td><td>${o.ticketVol.toLocaleString()}</td><td>${o.health}</td></tr>`;

          }).join('')}

        </tbody>

      </table>

    </div>

    <div class="dashboard-card">

      <h3>📞 服务概览</h3>

      <table class="data-table">

        <thead><tr><th>项目</th><th>响应(秒)</th><th>CSat</th></tr></thead>

        <tbody>

          ${OPERATIONS.map(o=>{

            const p=PROJECTS.find(pp=>pp.id===o.projectId);

            if(currentWpFilter!=='all' && p && p.workplace!==currentWpFilter) return '';

            return `<tr><td>${p?p.name:o.projectId}</td><td style="color:${o.responseTime>o.slaResponse?'var(--c-red)':'var(--c-green)'}">${o.responseTime}</td><td style="color:${o.csat>=4.5?'var(--c-green)':'var(--c-red)'}">${o.csat}</td></tr>`;

          }).join('')}

        </tbody>

      </table>

    </div>

    <div class="dashboard-card">

      <h3>💰 成本控制</h3>

      <table class="data-table">

        <thead><tr><th>项目</th><th>利润率</th><th>状态</th></tr></thead>

        <tbody>

          ${all.map(p=>`

            <tr>

              <td>${p.name}</td>

              <td style="color:${p.profitRate>=10?'var(--c-green)':p.profitRate<0?'var(--c-red)':'var(--c-yellow)'}">${p.profitRate}%</td>

              <td>${p.health}</td>

            </tr>`).join('')}

        </tbody>

      </table>

    </div>

    <div class="dashboard-card">

      <h3>😊 项目满意度</h3>

      <table class="data-table">

        <thead><tr><th>项目</th><th>CSat</th><th>解决率</th></tr></thead>

        <tbody>

          ${OPERATIONS.map(o=>{

            const p=PROJECTS.find(pp=>pp.id===o.projectId);

            if(currentWpFilter!=='all' && p && p.workplace!==currentWpFilter) return '';

            return `<tr><td>${p?p.name:o.projectId}</td><td>${o.csat}</td><td>${o.resolutionRate}%</td></tr>`;

          }).join('')}

        </tbody>

      </table>

    </div>

  </div>



  <!-- 项目健康明细 -->

  <div class="card">

    <div class="card-title">项目健康明细

      <span style="font-size:12px;font-weight:400;color:var(--c-text-3)">点击项目名称查看全景</span>

    </div>

    <table class="data-table">

      <thead><tr><th>状态</th><th>项目编号</th><th>项目名称</th><th>职场</th><th>负责人</th><th>利润率</th><th>操作</th></tr></thead>

      <tbody>

        ${all.map(p=>`

          <tr>

            <td>${p.health}</td>

            <td>${p.id}</td>

            <td><a href="#" style="color:var(--c-primary);cursor:pointer" onclick="showProjectDetail('${p.id}');return false;">${p.name}</a></td>

            <td><span class="wp-tag wp-${p.workplace}">${p.workplace}</span></td>

            <td>${p.pm}</td>

            <td style="color:${p.profitRate>=10?'var(--c-green)':p.profitRate<0?'var(--c-red)':'var(--c-yellow)'}">${p.profitRate}%</td>

            <td class="actions">

              <button class="btn btn-sm" onclick="showProjectDetail('${p.id}')">查看全景</button>

              ${CURRENT_ROLE.name==='leader'?'<span style="color:var(--c-text-3);font-size:12px">只读</span>':''}

            </td>

          </tr>`).join('')}

      </tbody>

    </table>

  </div>`;

}



// ===== 项目基础档案 =====

function renderArchive(){

  const all = getFilteredProjects();

  const can = canEdit();

  return `

  <div class="module-header">

    <div>

      <div class="module-title">📋 项目基础档案</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">记录项目静态基础信息，新人可快速了解项目全貌</div>

    </div>

    <div class="module-actions">

      ${can?'<button class="btn btn-primary btn-sm" onclick="showAddProject()">＋ 新增项目</button>':''}

      ${CURRENT_ROLE.name==='leader'?'<span class="badge badge-gray">只读权限</span>':''}

    </div>

  </div>

  <div class="card">

    <table class="data-table">

      <thead><tr><th>项目编号</th><th>项目名称</th><th>品牌/品类</th><th>服务模式</th><th>所属职场</th><th>负责人</th><th>项目总监</th><th>交接历史</th><th>操作</th></tr></thead>

      <tbody>

        ${all.map(p=>`

          <tr>

            <td>${p.id}</td>

            <td><a href="#" style="color:var(--c-primary);cursor:pointer" onclick="showProjectDetail('${p.id}');return false;">${p.name}</a></td>

            <td>${p.brand} / ${p.category}</td>

            <td><span class="badge ${p.serviceMode==='TP代运营'?'badge-blue':p.serviceMode==='经销模式'?'badge-green':'badge-orange'}">${p.serviceMode}</span></td>

            <td><span class="wp-tag wp-${p.workplace}">${p.workplace}</span></td>

            <td>${p.pm}</td>

            <td>${p.director}</td>

            <td>${p.pmHistory.length>0?`<span class="badge badge-gray" title="${p.pmHistory.map(h=>h.name+'('+h.from+'~'+h.to+')').join('; ')}">${p.pmHistory.length}次交接</span>`:'无'}</td>

            <td class="actions">

              <button class="btn btn-sm" onclick="showProjectDetail('${p.id}')">查看</button>

              ${can?'<button class="btn btn-sm" onclick="alert(\'编辑功能开发中\')">编辑</button>':''}

            </td>

          </tr>`).join('')}

      </tbody>

    </table>

  </div>`;

}



// ===== 目标与责任边界 =====

function renderTarget(){

  const all = getFilteredProjects();

  const can = canEdit();

  return `

  <div class="module-header">

    <div>

      <div class="module-title">🎯 目标与责任边界</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">定义项目目标与责任边界，避免推诿</div>

    </div>

    <div class="module-actions">

      ${can?'<button class="btn btn-primary btn-sm">＋ 设置目标</button>':''}

      ${CURRENT_ROLE.name==='leader'?'<span class="badge badge-gray">只读权限</span>':''}

    </div>

  </div>

  <div class="card">

    <table class="data-table">

      <thead><tr><th>项目</th><th>人力目标</th><th>SLA响应(秒)</th><th>SLA解决(秒)</th><th>CSat目标</th><th>成本预算(万)</th><th>责任边界说明</th></tr></thead>

      <tbody>

        ${all.map(p=>`

          <tr>

            <td>${p.name}</td>

            <td>${p.fteTarget}人</td>

            <td>${p.slaResponse}</td>

            <td>${p.slaResolve}</td>

            <td>≥4.5</td>

            <td>¥${(p.costBudget/10000).toFixed(1)}</td>

            <td style="max-width:200px;font-size:12px;color:var(--c-text-2)">承接方负责客服服务质量；需求方负责系统稳定性与活动信息同步</td>

          </tr>`).join('')}

      </tbody>

    </table>

  </div>`;

}



// ===== 成本与利润管理 =====

function renderCost(){

  const all = getFilteredProjects();

  return `

  <div class="module-header">

    <div>

      <div class="module-title">💰 成本与利润管理</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">跟踪项目成本结构与利润情况，利润率低于5%自动预警</div>

    </div>

  </div>

  <div class="metric-grid">

    <div class="metric-card">

      <div class="metric-label">总营收（月度）</div>

      <div class="metric-value">¥${(all.reduce((s,p)=>s+p.revenue,0)/10000).toFixed(1)}万</div>

    </div>

    <div class="metric-card">

      <div class="metric-label">总成本（月度）</div>

      <div class="metric-value">¥${(all.reduce((s,p)=>s+p.costBudget,0)/10000).toFixed(1)}万</div>

    </div>

    <div class="metric-card">

      <div class="metric-label">平均利润率</div>

      <div class="metric-value" style="color:${all.length && all.reduce((s,p)=>s+p.profitRate,0)/all.length>=10?'var(--c-green)':'var(--c-yellow)'}">${all.length?(all.reduce((s,p)=>s+p.profitRate,0)/all.length).toFixed(1):0}%</div>

    </div>

    <div class="metric-card">

      <div class="metric-label">预警项目数</div>

      <div class="metric-value" style="color:${all.filter(p=>p.profitRate<5).length>0?'var(--c-red)':'var(--c-green)'}">${all.filter(p=>p.profitRate<5).length}</div>

    </div>

  </div>

  <div class="card">

    <table class="data-table">

      <thead><tr><th>项目</th><th>营收(万)</th><th>预算成本(万)</th><th>实际成本(万)</th><th>利润率</th><th>预警</th></tr></thead>

      <tbody>

        ${all.map(p=>{

          const actualCost = Math.round(p.costBudget * (0.9+Math.random()*0.3));

          const actualProfit = ((p.revenue - actualCost)/p.revenue*100).toFixed(1);

          return `<tr>

            <td>${p.name}</td>

            <td>¥${(p.revenue/10000).toFixed(1)}</td>

            <td>¥${(p.costBudget/10000).toFixed(1)}</td>

            <td>¥${(actualCost/10000).toFixed(1)}</td>

            <td style="color:${actualProfit>=10?'var(--c-green)':actualProfit<0?'var(--c-red)':'var(--c-yellow)'}">${actualProfit}%</td>

            <td>${actualProfit<5?'<span class="badge badge-red">⚠️ 利润率过低</span>':actualProfit<10?'<span class="badge badge-yellow">关注</span>':'<span class="badge badge-green">正常</span>'}</td>

          </tr>`;

        }).join('')}

      </tbody>

    </table>

  </div>`;

}



// ===== 运营执行现状 =====

function renderOperation(){

  const projects = getFilteredProjects();

  return `

  <div class="module-header">

    <div>

      <div class="module-title">📈 运营执行现状 · 健康度评估</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">基于6大维度综合评估项目健康状况，支持逐层下钻查看详细指标</div>

    </div>

    <div class="module-actions">

      ${canEdit()?'<button class="btn btn-primary btn-sm">＋ 更新健康度数据</button>':''}

    </div>

  </div>



  <!-- 项目健康度总览卡片 -->

  <div class="health-overview-grid">

    ${projects.map(p => {

      const h = HEALTH_DATA.find(hh => hh.projectId === p.id && hh.period === "2026-05");

      const op = OPERATIONS.find(oo => oo.projectId === p.id);

      const levelColor = h ? (h.overallLevel==="优秀"?"var(--c-green)":h.overallLevel==="健康"?"var(--c-green)":h.overallLevel==="需注意"?"var(--c-yellow)":"var(--c-red)") : "var(--c-text-3)";

      const levelBg = h ? (h.overallLevel==="优秀"?"var(--c-green-bg)":h.overallLevel==="健康"?"var(--c-green-bg)":h.overallLevel==="需注意"?"var(--c-yellow-bg)":"var(--c-red-bg)") : "var(--c-bg)";

      const dimSummary = h ? h.dimensions.map(d => `<span class="dim-pill ${d.level}">${d.name.replace("健康度","")}${d.score}</span>`).join("") : "";

      return `

      <div class="health-project-card" onclick="toggleHealthDetail('${p.id}')">

        <div class="hpc-header">

          <div class="hpc-title">

            <span class="wp-tag">${p.workplace}</span>

            ${p.name}

          </div>

          <div class="hpc-score" style="background:${levelBg};color:${levelColor}">

            <div class="hpc-score-num">${h?h.overallScore:"--"}</div>

            <div class="hpc-score-label">${h?h.overallLevel:"未评估"}</div>

          </div>

        </div>

        <div class="hpc-dims">${dimSummary}</div>

        ${op?`<div class="hpc-quick">

          <span>在岗 ${op.fteActual}人</span>

          <span>单量 ${(op.ticketVol/1000).toFixed(1)}K</span>

          <span>CSat ${op.csat}</span>

          <span>响应 ${op.responseTime}s</span>

        </div>`:''}

      </div>

      <div id="health-detail-${p.id}" class="health-detail-panel" style="display:none;">

        ${h?renderHealthDetailPanel(h,p,op):'<div style="padding:24px;color:var(--c-text-3);">暂无健康度评估数据</div>'}

      </div>`;

    }).join('')}

  </div>



  <!-- 评分标准说明 -->

  <div class="card" style="margin-top:16px;padding:14px 18px;">

    <div style="font-size:13px;font-weight:500;margin-bottom:8px;">📋 健康度评分标准</div>

    <div class="score-legend">

      <div class="legend-item"><span class="legend-dot" style="background:var(--c-green)"></span><b>优秀</b> = 100分 &nbsp;|&nbsp; <b>健康</b> = 90分 &nbsp;|&nbsp; <b>需注意</b> = 85分 &nbsp;|&nbsp; <b>极差</b> = 80分</div>

      <div class="legend-item" style="margin-top:4px;color:var(--c-text-2);">总评分 = Σ(单项评分 × 权重) &nbsp;|&nbsp; 优秀≥95 &nbsp;|&nbsp; 健康90-94 &nbsp;|&nbsp; 需注意85-89 &nbsp;|&nbsp; 极差&lt;85</div>

    </div>

  </div>



  <!-- 运营基础数据表 -->

  <div class="card" style="margin-top:16px;">

    <div style="padding:14px 18px;border-bottom:1px solid var(--c-border-light);font-weight:500;font-size:14px;">📊 运营基础数据（快速参考）</div>

    <table class="data-table">

      <thead><tr><th>项目</th><th>周期</th><th>在岗人数</th><th>出勤率</th><th>服务单量</th><th>响应时长</th><th>CSat</th><th>解决率</th><th>回评率</th></tr></thead>

      <tbody>

        ${OPERATIONS.filter(o=>{

          const pp=PROJECTS.find(px=>px.id===o.projectId);

          return pp && (currentWpFilter==='all'||pp.workplace===currentWpFilter);

        }).map(o=>{

          const pp=PROJECTS.find(px=>px.id===o.projectId);

          return `<tr>

            <td>${pp?pp.name:o.projectId}</td>

            <td>${o.period}</td>

            <td>${o.fteActual}</td>

            <td>${o.attendance}%</td>

            <td>${o.ticketVol.toLocaleString()}</td>

            <td style="color:${o.responseTime>pp.slaResponse?'var(--c-red)':'var(--c-green)'}">${o.responseTime}s</td>

            <td style="color:${o.csat>=4.5?'var(--c-green)':'var(--c-red)'}">${o.csat}</td>

            <td>${o.resolutionRate}%</td>

            <td>${o.reviewRate}%</td>

          </tr>`;

        }).join('')}

      </tbody>

    </table>

  </div>`;

}



function renderHealthDetailPanel(h, p, op){

  const levelColor = h.overallLevel==="优秀"||h.overallLevel==="健康"?"var(--c-green)":h.overallLevel==="需注意"?"var(--c-yellow)":"var(--c-red)";

  const levelBg = h.overallLevel==="优秀"||h.overallLevel==="健康"?"var(--c-green-bg)":h.overallLevel==="需注意"?"var(--c-yellow-bg)":"var(--c-red-bg)";

  return `

  <div class="hdp-inner">

    <!-- 综合评分头部 -->

    <div class="hdp-header" style="background:${levelBg};">

      <div class="hdp-header-left">

        <div style="font-size:13px;color:var(--c-text-2);">${p.name} · ${h.period}月度健康度评估</div>

        <div style="font-size:12px;color:var(--c-text-3);margin-top:2px;">项目经理：${p.pm} &nbsp;|&nbsp; 职场：${p.workplace}</div>

      </div>

      <div class="hdp-header-right">

        <div class="hdp-big-score" style="color:${levelColor}">${h.overallScore}</div>

        <div class="hdp-big-label" style="color:${levelColor}">${h.overallLevel}</div>

      </div>

    </div>



    <!-- 6维度卡片 -->

    <div class="hdp-dims">

      ${h.dimensions.map(d => {

        const c = d.level==="优秀"||d.level==="健康"?"var(--c-green)":d.level==="需注意"?"var(--c-yellow)":"var(--c-red)";

        const bg = d.level==="优秀"||d.level==="健康"?"var(--c-green-bg)":d.level==="需注意"?"var(--c-yellow-bg)":"var(--c-red-bg)";

        const icon = d.key==="manpower"?"👥":d.key==="service"?"💬":d.key==="sales"?"💰":d.key==="returns"?"📦":d.key==="risk"?"⚠️":"💵";

        return `

        <div class="hdp-dim-card">

          <div class="hdp-dim-top">

            <div class="hdp-dim-icon">${icon}</div>

            <div class="hdp-dim-score" style="background:${bg};color:${c}">${d.score}</div>

          </div>

          <div class="hdp-dim-name">${d.name}</div>

          <div class="hdp-dim-level" style="color:${c}">${d.level}</div>

          ${d.weight>0?`<div class="hdp-dim-weight">权重 ${(d.weight*100).toFixed(0)}%</div>`:'<div class="hdp-dim-weight">监控项</div>'}

        </div>`;

      }).join('')}

    </div>



    <!-- 详细指标表格 -->

    <div class="hdp-table-wrap">

      <table class="data-table health-detail-table">

        <thead>

          <tr>

            <th style="width:140px">维度</th>

            <th>评估内容</th>

            <th style="width:90px">目标值</th>

            <th style="width:90px">实际值</th>

            <th style="width:80px">评分</th>

            <th style="width:70px">等级</th>

            <th style="width:30%">备注说明</th>

          </tr>

        </thead>

        <tbody>

          ${h.dimensions.map(d => {

            const c = d.level==="优秀"||d.level==="健康"?"var(--c-green)":d.level==="需注意"?"var(--c-yellow)":"var(--c-red)";

            return d.items.map((item, idx) => `

              <tr>

                ${idx===0?`<td rowspan="${d.items.length}" style="font-weight:500;background:var(--c-bg);">${d.name}<br><span style="font-size:11px;color:var(--c-text-3);">权重${(d.weight*100).toFixed(0)}%</span></td>`:''}

                <td>${item.name}</td>

                <td>${item.target}</td>

                <td style="font-weight:500;">${item.actual}</td>

                <td style="font-weight:600;color:${c}">${item.score}</td>

                <td><span class="badge ${item.level==='优秀'||item.level==='健康'?'badge-green':item.level==='需注意'?'badge-yellow':'badge-red'}">${item.level}</span></td>

                <td style="font-size:12px;color:var(--c-text-2);">${item.remark}</td>

              </tr>

            `).join('');

          }).join('')}

        </tbody>

      </table>

    </div>



    <!-- 成本专项（独立展示） -->

    ${h.dimensions.find(d=>d.key==="cost")?`

    <div class="hdp-cost-section">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;">💵 成本把控详情</div>

      <div class="hdp-cost-grid">

        ${h.dimensions.find(d=>d.key==="cost").items.map(item => `

          <div class="hdp-cost-item">

            <div class="hdp-cost-label">${item.name}</div>

            <div class="hdp-cost-value">${item.actual}</div>

            <div class="hdp-cost-target">目标: ${item.target}</div>

          </div>

        `).join('')}

      </div>

    </div>

    `:""}



    <!-- 快速关闭 -->

    <div style="text-align:center;padding:12px;border-top:1px solid var(--c-border-light);">

      <button class="btn btn-sm" onclick="toggleHealthDetail('${p.id}')">收起详情 ↑</button>

    </div>

  </div>`;

}



function toggleHealthDetail(projectId){

  const el = document.getElementById("health-detail-"+projectId);

  if(!el) return;

  const isHidden = el.style.display === "none";

  // 先关闭所有其他详情面板

  document.querySelectorAll(".health-detail-panel").forEach(p => p.style.display = "none");

  if(isHidden){

    el.style.display = "block";

    el.scrollIntoView({behavior:"smooth", block:"start"});

  }

}



// ===== 课题与问题协作 =====

function renderIssue(){

  const can = canEdit();

  return `

  <div class="module-header">

    <div>

      <div class="module-title">🐛 课题与问题协作</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">问题登记、跟踪与闭环管理，支持跨职场协同</div>

    </div>

    <div class="module-actions">

      ${can?'<button class="btn btn-primary btn-sm" onclick="showAddIssue()">＋ 上报问题</button>':''}

    </div>

  </div>

  <div style="display:flex;gap:8px;margin-bottom:12px;">

    <button class="btn btn-sm" style="background:var(--c-green-bg);color:var(--c-green);border-color:var(--c-green)">全部(${ISSUES.length})</button>

    <button class="btn btn-sm">待处理(${ISSUES.filter(i=>i.status==='待处理').length})</button>

    <button class="btn btn-sm">处理中(${ISSUES.filter(i=>i.status==='处理中').length})</button>

    <button class="btn btn-sm">待验收(${ISSUES.filter(i=>i.status==='待验收').length})</button>

    <button class="btn btn-sm">已关闭(${ISSUES.filter(i=>i.status==='已关闭').length})</button>

  </div>

  <div class="card">

    <table class="data-table">

      <thead><tr><th>状态</th><th>课题编号</th><th>项目</th><th>类型</th><th>问题描述</th><th>优先级</th><th>责任人</th><th>责任归属</th><th>操作</th></tr></thead>

      <tbody>

        ${ISSUES.map(i=>`

          <tr>

            <td><span class="badge ${i.status==='已关闭'?'badge-green':i.status==='待处理'?'badge-red':'badge-yellow'}">${i.status}</span></td>

            <td>I${String(i.id).padStart(3,'0')}</td>

            <td>${i.projectName}</td>

            <td>${i.type}</td>

            <td style="max-width:220px">${i.desc}</td>

            <td><span class="badge ${i.priority==='紧急'?'badge-red':i.priority==='重要'?'badge-yellow':'badge-gray'}">${i.priority}</span></td>

            <td>${i.assignee}</td>

            <td>${i.responsibility}</td>

            <td class="actions">

              <button class="btn btn-sm" onclick="showIssueDetail(${i.id})">查看</button>

              ${can && i.status!=='已关闭'?'<button class="btn btn-sm btn-primary" onclick="alert(\'处理功能开发中\')">更新处理</button>':''}

            </td>

          </tr>`).join('')}

      </tbody>

    </table>

  </div>`;

}



// ===== 知识沉淀库 =====

function renderKnowledge(){

  return `

  <div class="module-header">

    <div>

      <div class="module-title">📚 知识沉淀库</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">历史经验与最佳实践，三职场共享查阅</div>

    </div>

    <div class="module-actions">

      ${canEdit()?'<button class="btn btn-primary btn-sm">＋ 贡献知识</button>':''}

    </div>

  </div>

  <div class="tag-list" style="margin-bottom:12px;">

    <span class="tag" style="cursor:pointer;background:var(--c-primary-light);color:var(--c-primary)">全部</span>

    <span class="tag" style="cursor:pointer">SOP操作规范</span>

    <span class="tag" style="cursor:pointer">应急方案</span>

    <span class="tag" style="cursor:pointer">成本优化经验</span>

    <span class="tag" style="cursor:pointer">品牌话术</span>

    <span class="tag" style="cursor:pointer">培训材料</span>

  </div>

  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;">

    ${KNOWLEDGE.map(k=>`

      <div class="card" style="margin-bottom:0;cursor:pointer;" onclick="alert('知识详情：${k.title}')"">

        <div style="font-size:14px;font-weight:500;margin-bottom:6px;">📄 ${k.title}</div>

        <div style="font-size:12px;color:var(--c-text-3);margin-bottom:8px;">

          <span class="badge badge-blue" style="font-size:11px;">${k.type}</span>

          &nbsp;·&nbsp;${k.scope} · ${k.createdAt}

        </div>

        <div class="tag-list">

          ${k.tags.split(',').map(t=>`<span class="tag">${t.trim()}</span>`).join('')}

        </div>

        ${k.sourceProject?'<div style="font-size:11px;color:var(--c-text-3);margin-top:8px;">来源项目：${PROJECTS.find(p=>p.id===k.sourceProject)?.name||k.sourceProject}</div>':''}

      </div>`).join('')}

  </div>`;

}



// ===== 交接管理 =====

function renderHandover(){

  return `

  <div class="module-header">

    <div>

      <div class="module-title">🔄 交接管理</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">解决人员变动导致的项目信息断层问题，所有交接留痕可查</div>

    </div>

    <div class="module-actions">

      ${canEdit()?'<button class="btn btn-primary btn-sm" onclick="showNewHandover()">＋ 发起交接</button>':''}

    </div>

  </div>



  <div class="card" style="background:var(--c-yellow-bg);border-color:var(--c-yellow);margin-bottom:16px;">

    <div style="font-size:13px;color:var(--c-yellow);font-weight:500;">💡 交接管理说明</div>

    <div style="font-size:12px;color:var(--c-yellow);margin-top:4px;">

      发起交接后，系统自动生成交接清单（基础档案+目标责任+运营现状+进行中课题+未关闭问题）。接收人确认后，系统自动更新负责人字段并归档留痕。

    </div>

  </div>



  <div class="card">

    <div class="card-title">交接记录</div>

    <table class="data-table">

      <thead><tr><th>交接编号</th><th>项目</th><th>原负责人</th><th>接收人</th><th>交接日期</th><th>状态</th><th>交接摘要</th><th>操作</th></tr></thead>

      <tbody>

        ${HANDOVERS.map(h=>`

          <tr>

            <td>H${String(h.id).padStart(3,'0')}</td>

            <td>${h.projectName}</td>

            <td>${h.from}</td>

            <td>${h.to}</td>

            <td>${h.date}</td>

            <td><span class="badge badge-green">${h.status}</span></td>

            <td style="max-width:200px;font-size:12px;">${h.summary}</td>

            <td class="actions">

              <button class="btn btn-sm" onclick="alert('交接详情功能开发中')">查看详情</button>

            </td>

          </tr>`).join('')}

      </tbody>

    </table>

  </div>



  <div class="card" style="margin-top:16px;">

    <div class="card-title">项目交接状态总览</div>

    <table class="data-table">

      <thead><tr><th>项目</th><th>现任负责人</th><th>交接状态</th><th>历史交接次数</th><th>上次交接日期</th></tr></thead>

      <tbody>

        ${PROJECTS.filter(p=>currentWpFilter==='all'||p.workplace===currentWpFilter).map(p=>{

          const lastH = HANDOVERS.filter(h=>h.projectId===p.id).sort((a,b)=>b.date.localeCompare(a.date))[0];

          return `<tr>

            <td>${p.name}</td>

            <td>${p.pm}</td>

            <td><span class="badge badge-green">正常</span></td>

            <td>${p.pmHistory.length + HANDOVERS.filter(h=>h.projectId===p.id).length}</td>

            <td>${lastH?lastH.date:'无'}</td>

          </tr>`;

        }).join('')}

      </tbody>

    </table>

  </div>`;

}



// ===== 项目总监视图 =====

function renderDirector(){

  // 按总监聚合

  const directors = {};

  PROJECTS.forEach(p => {

    if(!directors[p.director]) directors[p.director] = [];

    directors[p.director].push(p);

  });

  return `

  <div class="module-header">

    <div>

      <div class="module-title">👁️ 项目总监视图</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">同一项目总监名下所有项目聚合对比，支持跨职场查看</div>

    </div>

  </div>

  ${Object.entries(directors).map(([dir, projs])=>`

    <div class="card">

      <div class="card-title">📁 项目总监：${dir}（${projs.length}个项目 · ${[...new Set(projs.map(p=>p.workplace))].join(' / ')}）</div>

      <table class="data-table">

        <thead><tr><th>项目</th><th>职场</th><th>服务模式</th><th>利润率</th><th>健康</th><th>负责人</th></tr></thead>

        <tbody>

          ${projs.map(p=>`

            <tr>

              <td><a href="#" style="color:var(--c-primary);cursor:pointer" onclick="showProjectDetail('${p.id}');return false;">${p.name}</a></td>

              <td><span class="wp-tag wp-${p.workplace}">${p.workplace}</span></td>

              <td>${p.serviceMode}</td>

              <td style="color:${p.profitRate>=10?'var(--c-green)':p.profitRate<0?'var(--c-red)':'var(--c-yellow)'}">${p.profitRate}%</td>

              <td>${p.health}</td>

              <td>${p.pm}</td>

            </tr>`).join('')}

        </tbody>

        <tfoot>

          <tr style="background:var(--c-bg);font-weight:500;">

            <td>合计/平均</td><td>${projs.length}个项目</td><td></td>

            <td style="color:${projs.reduce((s,p)=>s+p.profitRate,0)/projs.length>=10?'var(--c-green)':'var(--c-yellow)'}">${(projs.reduce((s,p)=>s+p.profitRate,0)/projs.length).toFixed(1)}%</td>

            <td>${projs.filter(p=>p.health==='🟢').length}🟢 ${projs.filter(p=>p.health==='🟡').length}🟡 ${projs.filter(p=>p.health==='🔴').length}🔴</td>

            <td></td>

          </tr>

        </tfoot>

      </table>

    </div>

  `).join('')}`;

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

    <div class="project-detail-header">

      <div>

        <div class="project-detail-title">${p.name}</div>

        <div class="project-detail-meta">

          <span class="wp-tag wp-${p.workplace}">${p.workplace}</span>

          <span class="badge ${p.serviceMode==='TP代运营'?'badge-blue':p.serviceMode==='经销模式'?'badge-green':'badge-orange'}">${p.serviceMode}</span>

          <span>${p.category} · ${p.brand}</span>

          <span>状态：${p.status}</span>

          <span>健康：${p.health}</span>

        </div>

      </div>

      <div style="text-align:right;">

        <div style="font-size:12px;color:var(--c-text-3);">现任负责人</div>

        <div style="font-size:16px;font-weight:600;color:var(--c-primary);">${p.pm}</div>

        <div style="font-size:12px;color:var(--c-text-3);">项目总监：${p.director}</div>

      </div>

    </div>



    <div class="detail-tabs">

      <div class="detail-tab active" onclick="switchDetailTab(this,'info')">📋 基本信息</div>

      <div class="detail-tab" onclick="switchDetailTab(this,'target')">🎯 目标与边界</div>

      <div class="detail-tab" onclick="switchDetailTab(this,'operation')">📈 运营现状</div>

      <div class="detail-tab" onclick="switchDetailTab(this,'issue')">🐛 课题与问题</div>

      <div class="detail-tab" onclick="switchDetailTab(this,'history')">📝 交接历史</div>

    </div>



    <div id="detail-tab-info" class="detail-section">

      <h4>基础信息</h4>

      <div class="detail-grid">

        <div class="detail-item"><div class="detail-label">项目编号</div><div class="detail-value">${p.id}</div></div>

        <div class="detail-item"><div class="detail-label">品牌</div><div class="detail-value">${p.brand}</div></div>

        <div class="detail-item"><div class="detail-label">品类</div><div class="detail-value">${p.category}</div></div>

        <div class="detail-item"><div class="detail-label">服务模式</div><div class="detail-value">${p.serviceMode}</div></div>

        <div class="detail-item"><div class="detail-label">所属职场</div><div class="detail-value">${p.workplace}</div></div>

        <div class="detail-item"><div class="detail-label">客服base</div><div class="detail-value">${p.base}</div></div>

        <div class="detail-item"><div class="detail-label">服务周期</div><div class="detail-value">${p.startDate} ~ ${p.endDate}</div></div>

        <div class="detail-item"><div class="detail-label">服务渠道</div><div class="detail-value">${p.platforms}</div></div>

        <div class="detail-item"><div class="detail-label">服务时间</div><div class="detail-value">${p.serviceHours}</div></div>

        <div class="detail-item"><div class="detail-label">项目状态</div><div class="detail-value">${p.status}</div></div>

      </div>

      ${p.pmHistory.length>0?`

        <h4 style="margin-top:16px;">历任负责人记录</h4>

        <table class="data-table">

          <thead><tr><th>姓名</th><th>起始时间</th><th>结束时间</th><th>原因</th></tr></thead>

          <tbody>

            ${p.pmHistory.map(h=>`

              <tr><td>${h.name}</td><td>${h.from}</td><td>${h.to}</td><td>${h.reason}</td></tr>

            `).join('')}

          </tbody>

        </table>

      `:''}

    </div>



    <div id="detail-tab-target" class="detail-section" style="display:none;">

      <h4>目标与责任边界</h4>

      <div class="detail-grid">

        <div class="detail-item"><div class="detail-label">人力配置目标</div><div class="detail-value">${p.fteTarget} 人</div></div>

        <div class="detail-item"><div class="detail-label">SLA响应时长</div><div class="detail-value">≤ ${p.slaResponse} 秒</div></div>

        <div class="detail-item"><div class="detail-label">SLA解决时长</div><div class="detail-value">≤ ${p.slaResolve} 秒</div></div>

        <div class="detail-item"><div class="detail-label">CSat目标</div><div class="detail-value">≥ 4.5</div></div>

        <div class="detail-item"><div class="detail-label">月度成本预算</div><div class="detail-value">¥${(p.costBudget/10000).toFixed(1)}万</div></div>

        <div class="detail-item"><div class="detail-label">月度营收目标</div><div class="detail-value">¥${(p.revenue/10000).toFixed(1)}万</div></div>

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

      ${p.pmHistory.length>0?`

        <h4 style="margin-top:16px;">历任负责人（档案记录）</h4>

        <table class="data-table">

          <thead><tr><th>姓名</th><th>时间段</th><th>原因</th></tr></thead>

          <tbody>

            ${p.pmHistory.map(h=>`<tr><td>${h.name}</td><td>${h.from} ~ ${h.to}</td><td>${h.reason}</td></tr>`).join('')}

          </tbody>

        </table>

      `:''}

    </div>

  `;

  modal.classList.remove("hidden");

}



function switchDetailTab(el, tabName){

  document.querySelectorAll(".detail-tab").forEach(t=>t.classList.remove("active"));

  el.classList.add("active");

  ["info","target","operation","issue","history"].forEach(n => {

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

        <label class="form-label">服务模式</label>

        <select class="form-select" id="f-mode">

          <option>TP代运营</option><option>经销模式</option><option>BPO外包</option>

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

  OPERATIONS.push({id:OPERATIONS.length+1, projectId:p.id, period:new Date().toISOString().slice(0,7), fteActual:0, attendance:0, ticketVol:0, responseTime:0, resolveTime:0, csat:0, resolutionRate:0, reviewRate:0, health:"🟡"});

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule(currentModule);

  alert("项目「"+name+"」已新增！");

}



function showAddIssue(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "＋ 上报问题";

  const projectOptions = PROJECTS.map(p=>`<option value="${p.id}">${p.name}</option>`).join("");

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

    owner: CURRENT_ROLE.name==="pm"?"张伟":CURRENT_ROLE.name==="exec"?"刘洋":"",

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

  const projectOptions = PROJECTS.map(p=>`<option value="${p.id}">${p.name}（现任：${p.pm}）</option>`).join("");

  body.innerHTML = `

    <div style="background:var(--c-yellow-bg);padding:10px 14px;border-radius:var(--radius);margin-bottom:14px;font-size:13px;color:var(--c-yellow);">

      💡 发起交接后，系统将自动生成以下交接清单，请逐项确认后转交：

      <div style="margin-top:6px;font-size:12px;color:var(--c-yellow);">✅ 项目基础档案 &nbsp; ✅ 目标与责任边界 &nbsp; ✅ 当前运营现状 &nbsp; ✅ 进行中课题 &nbsp; ✅ 未关闭问题</div>

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

        <input class="form-input" id="h-to" placeholder="请输入接收人姓名">

      </div>

    </div>

    <div class="form-group">

      <label class="form-label">交接说明</label>

      <textarea class="form-textarea" id="h-summary" placeholder="重点交接事项、注意事项等"></textarea>

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

  if(!pid||!to) { alert("请填写必填项"); return; }

  const p = PROJECTS.find(pp=>pp.id===pid);

  const from = p?p.pm:"";

  // 更新项目负责人

  if(p){ p.pm = to; }

  // 转移未关闭问题

  ISSUES.forEach(i=>{ if(i.projectId===pid&&i.status!=="已关闭") i.assignee = to; });

  // 记录交接历史

  HANDOVERS.push({

    id: HANDOVERS.length+1,

    projectId: pid,

    projectName: p?p.name:"",

    from: from,

    to: to,

    date: new Date().toISOString().slice(0,10),

    status:"已完成",

    summary: document.getElementById("h-summary").value||"已完成交接"

  });

  // 追加历任负责人记录

  if(p){ p.pmHistory.push({name:from, from:"2026-03", to:new Date().toISOString().slice(0,7), reason:"人员交接"}); }

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("handover");

  alert("交接已完成！\n原负责人："+from+"\n接收人："+to+"\n系统已自动更新项目负责人及未关闭问题指派。");

}



function showIssueDetail(id){

  const i = ISSUES.find(ii=>ii.id===id);

  if(!i) return;

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "课题详情 I"+String(id).padStart(3,"0");

  body.innerHTML = `

    <div class="detail-grid" style="margin-bottom:16px;">

      <div class="detail-item"><div class="detail-label">关联项目</div><div class="detail-value">${i.projectName}</div></div>

      <div class="detail-item"><div class="detail-label">问题类型</div><div class="detail-value">${i.type}</div></div>

      <div class="detail-item"><div class="detail-label">优先级</div><div class="detail-value"><span class="badge ${i.priority==='紧急'?'badge-red':i.priority==='重要'?'badge-yellow':'badge-gray'}">${i.priority}</span></div></div>

      <div class="detail-item"><div class="detail-label">当前状态</div><div class="detail-value"><span class="badge ${i.status==='已关闭'?'badge-green':'badge-yellow'}">${i.status}</span></div></div>

      <div class="detail-item"><div class="detail-label">责任人</div><div class="detail-value">${i.assignee}</div></div>

      <div class="detail-item"><div class="detail-label">责任归属</div><div class="detail-value">${i.responsibility}</div></div>

    </div>

    <div style="background:var(--c-bg);padding:12px;border-radius:var(--radius);margin-bottom:16px;">

      <div style="font-size:12px;color:var(--c-text-3);">问题描述</div>

      <div style="margin-top:4px;font-size:13px;">${i.desc}</div>

    </div>

    ${i.solution?'<div style="background:var(--c-green-bg);padding:12px;border-radius:var(--radius);margin-bottom:16px;"><div style="font-size:12px;color:var(--c-green);">解决方案</div><div style="margin-top:4px;font-size:13px;">'+i.solution+'</div></div>':''}

    ${CURRENT_ROLE.name!=='leader'&&i.status!=='已关闭'?`

    <div class="form-group">

      <label class="form-label">更新处理状态</label>

      <select class="form-select" id="i-status-update" style="max-width:200px;">

        <option ${i.status==='待处理'?'selected':''}>待处理</option>

        <option ${i.status==='处理中'?'selected':''}>处理中</option>

        <option ${i.status==='待验收'?'selected':''}>待验收</option>

        <option ${i.status==='已关闭'?'selected':''}>已关闭</option>

      </select>

    </div>

    <div class="form-group">

      <label class="form-label">填写解决方案</label>

      <textarea class="form-textarea" id="i-solution" placeholder="记录处理措施与结果">${i.solution}</textarea>

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">关闭</button>

      <button class="btn btn-primary" onclick="doUpdateIssue(${id})">保存更新</button>

    </div>`:'<div class="form-actions"><button class="btn" onclick="document.getElementById(\'modal-overlay\').classList.add(\'hidden\')">关闭</button></div>'}

  `;

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



function exportDashboard(){

  alert("📊 报表导出功能\n\n当前数据已准备就绪，可导出以下报表：\n• 项目健康度总览（Excel）\n• 成本利润汇总表（Excel）\n• 运营数据月报（PDF）\n\n（完整版将对接后端API实现文件导出）");

}



// ===== 项目满意度评估 =====

// 全局筛选状态

let SAT_FILTER = { projectId:'', scoreRange:'', evaluator:'' };



function renderSatisfaction(){

  const can = canEdit();

  const isLeader = CURRENT_ROLE.name === 'leader';

  const isStaff = CURRENT_ROLE.name === 'staff';



  // 应用筛选

  let filtered = [...SATISFACTION_DATA];

  if(SAT_FILTER.projectId) filtered = filtered.filter(s => s.projectId === SAT_FILTER.projectId);

  if(SAT_FILTER.scoreRange){

    const [min,max] = SAT_FILTER.scoreRange.split('-').map(Number);

    filtered = filtered.filter(s => s.leaderScore >= min && s.leaderScore <= max);

  }

  if(SAT_FILTER.evaluator) filtered = filtered.filter(s => s.evaluatedBy === SAT_FILTER.evaluator);



  // 统计（基于全部数据）

  const totalEvaluated = SATISFACTION_DATA.filter(s => s.status === '已评定').length;

  const avgScore = SATISFACTION_DATA.length ?

    (SATISFACTION_DATA.reduce((s,v) => s + v.leaderScore, 0) / SATISFACTION_DATA.length).toFixed(1) : '0.0';

  const dist10 = SATISFACTION_DATA.filter(s => s.leaderScore === 10).length;

  const dist8  = SATISFACTION_DATA.filter(s => s.leaderScore === 8).length;

  const dist6  = SATISFACTION_DATA.filter(s => s.leaderScore === 6).length;

  const dist3  = SATISFACTION_DATA.filter(s => s.leaderScore === 3).length;

  const dist0  = SATISFACTION_DATA.filter(s => s.leaderScore === 0).length;



  // 下拉选项

  const projectOptions = PROJECTS.map(p =>

    `<option value="${p.id}" ${SAT_FILTER.projectId===p.id?'selected':''}>${p.name}（${p.workplace}）</option>`

  ).join('');

  const evaluatorList = [...new Set(SATISFACTION_DATA.map(s => s.evaluatedBy))];

  const evaluatorOptions = evaluatorList.map(e =>

    `<option value="${e}" ${SAT_FILTER.evaluator===e?'selected':''}>${e}</option>`

  ).join('');



  return `

  <div class="module-header">

    <div>

      <div class="module-title">💯 项目满意度评估</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">

        客服端与项目端的沟通桥梁 · 反向促进成长 · ${isLeader ? '领导视角：可评定打分' : '团队视角：查看评定结果'}

      </div>

    </div>

    <div class="module-actions">

      ${isLeader||CURRENT_ROLE.name==='pm' ? '<button class="btn btn-primary btn-sm" onclick="showAddSatisfaction()">＋ 新增评估</button>' : ''}

      <button class="btn btn-sm" onclick="exportSatisfaction()">📤 导出</button>

      ${isLeader||CURRENT_ROLE.name==='pm' ? '<button class="btn btn-sm" onclick="importSatisfaction()">📥 导入</button>' : ''}

      ${isLeader||CURRENT_ROLE.name==='pm' ? '<button class="btn btn-sm" onclick="showSatisfactionPermission()">🔐 权限设置</button>' : ''}

    </div>

  </div>



  <!-- 评分说明 -->

  <div class="card" style="margin-bottom:16px;padding:14px 18px;">

    <div style="font-size:13px;font-weight:500;margin-bottom:8px;">📋 评分机制说明</div>

    <div style="font-size:12px;color:var(--c-text-2);line-height:2;">

      <div>🟢 <b>对外（项目方）</b>：只记录感受描述（非常满意/满意/一般/不满意），<b>不展示分值</b>，由上级领导与项目沟通后填写</div>

      <div>🔵 <b>对内（上级评定）</b>：上级基于沟通内容 + 校验真伪，给出 <b>10 / 8 / 6 / 3 / 0</b> 五档评分</div>

      <div>🟡 <b>核心目的</b>：帮助员工提能提效，改进不足，<b>不是惩罚工具</b>，是友好协作的桥梁</div>

    </div>

  </div>



  <!-- 统计卡片 -->

  <div class="stats-grid" style="margin-bottom:16px;">

    <div class="stat-card">

      <div class="stat-label">已评估</div>

      <div class="stat-value">${totalEvaluated}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">平均分</div>

      <div class="stat-value" style="color:${avgScore>=8?'var(--c-green)':avgScore>=6?'var(--c-yellow)':'var(--c-red)'}">${avgScore}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">10分（优秀）</div>

      <div class="stat-value" style="color:var(--c-green)">${dist10}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">8分（良好）</div>

      <div class="stat-value" style="color:var(--c-green)">${dist8}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">6分（一般）</div>

      <div class="stat-value" style="color:var(--c-yellow)">${dist6}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">3分/0分</div>

      <div class="stat-value" style="color:var(--c-red)">${dist3+dist0}</div>

    </div>

  </div>



  <!-- 筛选栏 -->

  <div class="sat-filter-bar card" style="margin-bottom:16px;padding:12px 16px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;">

    <span style="font-size:12px;color:var(--c-text-3);font-weight:500;">筛选条件：</span>

    <select class="form-select form-select-sm" id="sat-filter-project" onchange="SAT_FILTER.projectId=this.value;renderSatisfaction()" style="max-width:200px;">

      <option value="">全部项目</option>

      ${projectOptions}

    </select>

    <select class="form-select form-select-sm" id="sat-filter-score" onchange="SAT_FILTER.scoreRange=this.value;renderSatisfaction()" style="max-width:160px;">

      <option value="">全部得分</option>

      <option value="10-10" ${SAT_FILTER.scoreRange==='10-10'?'selected':''}>10分 优秀</option>

      <option value="8-9" ${SAT_FILTER.scoreRange==='8-9'?'selected':''}>8分 良好</option>

      <option value="6-7" ${SAT_FILTER.scoreRange==='6-7'?'selected':''}>6分 一般</option>

      <option value="0-5" ${SAT_FILTER.scoreRange==='0-5'?'selected':''}>0-5分 需改进</option>

    </select>

    <select class="form-select form-select-sm" id="sat-filter-evaluator" onchange="SAT_FILTER.evaluator=this.value;renderSatisfaction()" style="max-width:160px;">

      <option value="">全部评定人</option>

      ${evaluatorOptions}

    </select>

    <button class="btn btn-sm" onclick="SAT_FILTER={projectId:'',scoreRange:'',evaluator:''};renderSatisfaction()" style="color:var(--c-text-3);">清除筛选</button>

    <span style="margin-left:auto;font-size:12px;color:var(--c-text-3);">共 ${filtered.length} 条记录</span>

  </div>



  <!-- 评估列表 -->

  <div class="card">

    <table class="data-table">

      <thead>

        <tr>

          <th>项目</th>

          <th>周期</th>

          <th>项目综合感受</th>

          <th>业务表现</th>

          <th>专业度</th>

          <th>执行力</th>

          <th>沟通配合</th>

          <th>领导评分</th>

          <th>上级评语/总结</th>

          <th>状态</th>

          <th>操作</th>

        </tr>

      </thead>

      <tbody>

        ${filtered.map(s => {

          const p = PROJECTS.find(pp => pp.id === s.projectId);

          const scoreColor = s.leaderScore >= 10 ? 'var(--c-green)' : 

                           s.leaderScore >= 8 ? 'var(--c-green)' :

                           s.leaderScore >= 6 ? 'var(--c-yellow)' : 'var(--c-red)';

          const scoreLabel = s.leaderScore === 10 ? '优秀' :

                           s.leaderScore === 8 ? '良好' :

                           s.leaderScore === 6 ? '一般' :

                           s.leaderScore === 3 ? '需改进' : '不合格';

          const commentPreview = s.leaderComment ? (s.leaderComment.length > 15 ? s.leaderComment.slice(0,15) + '…' : s.leaderComment) : '—';

          return `

          <tr onclick="showSatisfactionDetail(${s.id})" style="cursor:pointer;">

            <td>${p ? p.name : s.projectId}</td>

            <td>${s.period}</td>

            <td><span class="badge ${s.projectFeedback.overall==='非常满意'?'badge-green':s.projectFeedback.overall==='满意'?'badge-green':'badge-yellow'}">${s.projectFeedback.overall}</span></td>

            <td>${s.projectFeedback.businessPerf.length > 10 ? s.projectFeedback.businessPerf.slice(0,10) + '…' : s.projectFeedback.businessPerf}</td>

            <td>${s.projectFeedback.professionalism.length > 8 ? s.projectFeedback.professionalism.slice(0,8) + '…' : s.projectFeedback.professionalism}</td>

            <td>${s.projectFeedback.execution.length > 8 ? s.projectFeedback.execution.slice(0,8) + '…' : s.projectFeedback.execution}</td>

            <td>${s.projectFeedback.communication.frequency}</td>

            <td><span style="font-weight:700;color:${scoreColor};font-size:15px;">${s.leaderScore}分</span> <span style="font-size:11px;color:${scoreColor};">${scoreLabel}</span></td>

            <td title="${s.leaderComment || '暂无评语'}"><span style="font-size:12px;color:var(--c-text-2);">${commentPreview}</span></td>

            <td><span class="badge ${s.status==='已评定'?'badge-green':'badge-yellow'}">${s.status}</span></td>

            <td><button class="btn btn-sm" onclick="event.stopPropagation();showSatisfactionDetail(${s.id})">查看</button></td>

          </tr>`;

        }).join('')}

      </tbody>

    </table>

    ${filtered.length === 0 ? '<div class="empty-state"><div class="empty-icon">📭</div><p>没有符合条件的评估记录</p></div>' : ''}

  </div>`;

}



function showSatisfactionDetail(id){

  const s = SATISFACTION_DATA.find(ss => ss.id === id);

  if(!s) return;

  const p = PROJECTS.find(pp => pp.id === s.projectId);

  const isLeader = CURRENT_ROLE.name === 'leader';

  

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "满意度评估详情 · " + (p ? p.name : s.projectId);

  

  const scoreColor = s.leaderScore >= 8 ? 'var(--c-green)' : s.leaderScore >= 6 ? 'var(--c-yellow)' : 'var(--c-red)';

  const scoreLabel = s.leaderScore === 10 ? '优秀（超出预期）' : 

                   s.leaderScore === 8 ? '良好（达标）' : 

                   s.leaderScore === 6 ? '一般（需改进）' : 

                   s.leaderScore === 3 ? '较差（重点关注）' : '不合格（立即改进）';

  

  body.innerHTML = `

    <!-- 项目信息 -->

    <div class="detail-grid" style="margin-bottom:16px;">

      <div class="detail-item"><div class="detail-label">关联项目</div><div class="detail-value">${p ? p.name : '未知'}</div></div>

      <div class="detail-item"><div class="detail-label">评估周期</div><div class="detail-value">${s.period}</div></div>

      <div class="detail-item"><div class="detail-label">评定人</div><div class="detail-value">${s.evaluatedBy}</div></div>

      <div class="detail-item"><div class="detail-label">评定日期</div><div class="detail-value">${s.evaluatedAt}</div></div>

    </div>



    <!-- 项目方感受（对外，不展示分值） -->

    <div style="background:var(--c-bg);padding:14px 16px;border-radius:var(--radius);margin-bottom:16px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;color:var(--c-text-2);">🗣️ 项目方感受（对外，不展示分值）</div>

      

      <div style="margin-bottom:10px;">

        <div style="font-size:12px;color:var(--c-text-3);">综合感受</div>

        <div style="font-size:14px;font-weight:500;margin-top:2px;"><span class="badge ${s.projectFeedback.overall==='非常满意'?'badge-green':s.projectFeedback.overall==='满意'?'badge-green':'badge-yellow'}">${s.projectFeedback.overall}</span></div>

      </div>

      

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">

        <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

          <div style="font-size:11px;color:var(--c-text-3);">团队业务表现</div>

          <div style="font-size:12px;margin-top:2px;">${s.projectFeedback.businessPerf}</div>

        </div>

        <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

          <div style="font-size:11px;color:var(--c-text-3);">团队专业度</div>

          <div style="font-size:12px;margin-top:2px;">${s.projectFeedback.professionalism}</div>

        </div>

        <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

          <div style="font-size:11px;color:var(--c-text-3);">团队执行力</div>

          <div style="font-size:12px;margin-top:2px;">${s.projectFeedback.execution}</div>

        </div>

        <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

          <div style="font-size:11px;color:var(--c-text-3);">风险管控</div>

          <div style="font-size:12px;margin-top:2px;">${s.projectFeedback.riskControl}</div>

        </div>

      </div>

      

      <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;margin-bottom:8px;">

        <div style="font-size:11px;color:var(--c-text-3);">汇报能力</div>

        <div style="font-size:12px;margin-top:2px;">时效性：${s.projectFeedback.reporting.timeliness} ｜ 准确性：${s.projectFeedback.reporting.accuracy} ｜ 全面性：${s.projectFeedback.reporting.completeness}</div>

      </div>

      

      <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

        <div style="font-size:11px;color:var(--c-text-3);">沟通配合</div>

        <div style="font-size:12px;margin-top:2px;">沟通频率：${s.projectFeedback.communication.frequency} ｜ 理解能力：${s.projectFeedback.communication.understanding} ｜ 信息同步：${s.projectFeedback.communication.sync}</div>

      </div>

    </div>



    <!-- 上级评定（对内） -->

    <div style="background:var(--c-yellow-bg);padding:14px 16px;border-radius:var(--radius);margin-bottom:16px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;color:var(--c-yellow);">🔒 上级评定（对内，仅团队可见）</div>

      <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px;">

        <div style="font-size:32px;font-weight:800;color:${scoreColor};">${s.leaderScore}分</div>

        <div>

          <div style="font-size:14px;font-weight:500;color:${scoreColor};">${scoreLabel}</div>

          <div style="font-size:12px;color:var(--c-text-2);margin-top:2px;">评分人：${s.evaluatedBy} ｜ ${s.evaluatedAt}</div>

        </div>

      </div>

      <div style="background:var(--c-surface);padding:10px 12px;border-radius:8px;">

        <div style="font-size:12px;color:var(--c-text-3);">评定意见（帮助提能提效）</div>

        <div style="font-size:13px;margin-top:4px;line-height:1.6;">${s.leaderComment}</div>

      </div>

    </div>



    ${isLeader && s.status !== '已评定' ? `

    <div class="form-group">

      <label class="form-label">领导评分（10/8/6/3/0）</label>

      <select class="form-select" id="s-score" style="max-width:200px;">

        <option value="10" ${s.leaderScore===10?'selected':''}>10分 - 优秀（超出预期）</option>

        <option value="8" ${s.leaderScore===8?'selected':''}>8分 - 良好（达标）</option>

        <option value="6" ${s.leaderScore===6?'selected':''}>6分 - 一般（需改进）</option>

        <option value="3" ${s.leaderScore===3?'selected':''}>3分 - 较差（重点关注）</option>

        <option value="0" ${s.leaderScore===0?'selected':''}>0分 - 不合格（立即改进）</option>

      </select>

    </div>

    <div class="form-group">

      <label class="form-label">评定意见（帮助提能提效，非惩罚）</label>

      <textarea class="form-textarea" id="s-comment" placeholder="记录具体改进建议、提能方向">${s.leaderComment}</textarea>

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">取消</button>

      <button class="btn btn-primary" onclick="doUpdateSatisfaction(${s.id})">确认评定</button>

    </div>` : 

    `<div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">关闭</button>

    </div>`}

  `;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doUpdateSatisfaction(id){

  const s = SATISFACTION_DATA.find(ss => ss.id === id);

  if(!s) return;

  const score = parseInt(document.getElementById("s-score").value);

  const comment = document.getElementById("s-comment").value;

  s.leaderScore = score;

  s.leaderComment = comment;

  s.status = '已评定';

  s.evaluatedAt = new Date().toISOString().slice(0,10);

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("satisfaction");

  alert("评定已保存！评分：" + score + "分\n意见已记录，将用于帮助员工提能提效。");

}



function showAddSatisfaction(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "＋ 新增满意度评估";

  const projectOptions = PROJECTS.map(p => `<option value="${p.id}">${p.name}（${p.workplace}）</option>`).join("");

  body.innerHTML = `

    <div class="form-group">

      <label class="form-label">关联项目 *</label>

      <select class="form-select" id="sf-project">

        <option value="">-- 请选择 --</option>

        ${projectOptions}

      </select>

    </div>

    <div class="form-group">

      <label class="form-label">评估周期 *</label>

      <input class="form-input" id="sf-period" value="2026-05" placeholder="如：2026-05">

    </div>

    

    <div style="background:var(--c-bg);padding:12px 14px;border-radius:var(--radius);margin-bottom:14px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;color:var(--c-text-2);">🗣️ 项目方感受（由上级与项目沟通后填写，不展示分值）</div>

      

      <div class="form-group">

        <label class="form-label">综合感受</label>

        <select class="form-select" id="sf-overall">

          <option>非常满意</option>

          <option>满意</option>

          <option>一般</option>

          <option>不满意</option>

        </select>

      </div>

      

      <div class="form-row">

        <div class="form-group">

          <label class="form-label">团队业务表现</label>

          <input class="form-input" id="sf-biz" placeholder="描述项目方感受">

        </div>

        <div class="form-group">

          <label class="form-label">团队专业度</label>

          <input class="form-input" id="sf-pro" placeholder="描述项目方感受">

        </div>

      </div>

      

      <div class="form-row">

        <div class="form-group">

          <label class="form-label">团队执行力</label>

          <input class="form-input" id="sf-exec" placeholder="描述项目方感受">

        </div>

        <div class="form-group">

          <label class="form-label">风险管控</label>

          <input class="form-input" id="sf-risk" placeholder="描述项目方感受">

        </div>

      </div>

      

      <div class="form-group">

        <label class="form-label">汇报时效性</label>

        <input class="form-input" id="sf-rep-time" placeholder="描述项目方感受">

      </div>

      <div class="form-group">

        <label class="form-label">汇报准确性</label>

        <input class="form-input" id="sf-rep-acc" placeholder="描述项目方感受">

      </div>

      <div class="form-group">

        <label class="form-label">汇报全面性</label>

        <input class="form-input" id="sf-rep-full" placeholder="描述项目方感受">

      </div>

      

      <div class="form-group">

        <label class="form-label">沟通频率感受</label>

        <input class="form-input" id="sf-comm-freq" placeholder="非常满意/满意/一般/不满意">

      </div>

      <div class="form-group">

        <label class="form-label">沟通理解感受</label>

        <input class="form-input" id="sf-comm-und" placeholder="描述项目方感受">

      </div>

      <div class="form-group">

        <label class="form-label">活动信息同步感受</label>

        <input class="form-input" id="sf-comm-sync" placeholder="描述项目方感受">

      </div>

    </div>

    

    <div style="background:var(--c-yellow-bg);padding:12px 14px;border-radius:var(--radius);margin-bottom:14px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;color:var(--c-yellow);">🔒 上级评定（后续填写，本次可暂存项目感受）</div>

      <div style="font-size:12px;color:var(--c-text-2);">领导评分和评定意见可在与项目沟通后补充填写。</div>

    </div>

    

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">取消</button>

      <button class="btn btn-primary" onclick="doAddSatisfaction()">保存（待评定）</button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doAddSatisfaction(){

  const pid = document.getElementById("sf-project").value;

  const period = document.getElementById("sf-period").value;

  if(!pid || !period) { alert("请填写必填项"); return; }

  const p = PROJECTS.find(pp => pp.id === pid);

  SATISFACTION_DATA.push({

    id: SATISFACTION_DATA.length + 1,

    projectId: pid,

    period: period,

    projectFeedback: {

      businessPerf: document.getElementById("sf-biz").value || "待填写",

      professionalism: document.getElementById("sf-pro").value || "待填写",

      execution: document.getElementById("sf-exec").value || "待填写",

      reporting: { 

        timeliness: document.getElementById("sf-rep-time").value || "待填写", 

        accuracy: document.getElementById("sf-rep-acc").value || "待填写", 

        completeness: document.getElementById("sf-rep-full").value || "待填写" 

      },

      riskControl: document.getElementById("sf-risk").value || "待填写",

      communication: { 

        frequency: document.getElementById("sf-comm-freq").value || "待填写", 

        understanding: document.getElementById("sf-comm-und").value || "待填写", 

        sync: document.getElementById("sf-comm-sync").value || "待填写" 

      },

      overall: document.getElementById("sf-overall").value || "满意"

    },

    leaderScore: 0,

    leaderComment: "",

    evaluatedBy: CURRENT_ROLE.label,

    evaluatedAt: "",

    status: "待评定"

  });

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("satisfaction");

  alert("满意度评估已创建！\n项目感受已记录，待上级与项目沟通后补充评定打分。");

}



// ===== 满意度评估 - 导出 =====

function exportSatisfaction(){

  // 构建 CSV 内容（UTF-8 BOM 兼容 Excel 中文）

  const BOM = '\uFEFF';

  const headers = ['项目','周期','项目综合感受','业务表现','专业度','执行力','汇报时效性','汇报准确性','汇报全面性','风险管控','沟通频率','沟通理解','信息同步','领导评分','上级评语','评定人','评定日期','状态'];

  const rows = SATISFACTION_DATA.map(s => {

    const p = PROJECTS.find(pp => pp.id === s.projectId);

    return [

      p ? p.name : s.projectId,

      s.period,

      s.projectFeedback.overall,

      s.projectFeedback.businessPerf,

      s.projectFeedback.professionalism,

      s.projectFeedback.execution,

      s.projectFeedback.reporting.timeliness,

      s.projectFeedback.reporting.accuracy,

      s.projectFeedback.reporting.completeness,

      s.projectFeedback.riskControl,

      s.projectFeedback.communication.frequency,

      s.projectFeedback.communication.understanding,

      s.projectFeedback.communication.sync,

      s.leaderScore,

      s.leaderComment,

      s.evaluatedBy,

      s.evaluatedAt,

      s.status

    ];

  });

  const csvRows = [headers, ...rows].map(r => r.map(c => `"${(c||'').toString().replace(/"/g,'""')}"`).join(','));

  const csvContent = BOM + csvRows.join('\n');

  const blob = new Blob([csvContent], {type:'text/csv;charset=utf-8;'});

  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');

  a.href = url;

  a.download = `项目满意度评估_${new Date().toISOString().slice(0,10)}.csv`;

  a.click();

  URL.revokeObjectURL(url);

  alert('导出成功！文件已下载：' + a.download);

}



// ===== 满意度评估 - 导入（弹窗）=====

function importSatisfaction(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "📥 导入满意度评估";

  body.innerHTML = `

    <div style="font-size:13px;color:var(--c-text-2);margin-bottom:14px;line-height:1.8;">

      <div>📋 <b>导入说明：</b></div>

      <div>支持 CSV 格式（UTF-8 编码），文件需包含以下字段（顺序不限）：</div>

      <div style="background:var(--c-bg);padding:8px 12px;border-radius:6px;margin-top:6px;font-size:12px;">

        项目ID / 周期 / 综合感受 / 业务表现 / 专业度 / 执行力 / 汇报时效性 / 汇报准确性 / 汇报全面性 / 风险管控 / 沟通频率 / 沟通理解 / 信息同步 / 领导评分 / 上级评语 / 状态

      </div>

      <div style="margin-top:8px;">也可下载当前数据作为模板参考（点击"导出"按钮）。</div>

    </div>

    <div class="form-group">

      <label class="form-label">选择文件（.csv）</label>

      <input type="file" id="sat-import-file" accept=".csv" class="form-input" style="padding:6px 10px;">

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">取消</button>

      <button class="btn btn-primary" onclick="doImportSatisfaction()">开始导入</button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doImportSatisfaction(){

  const fileInput = document.getElementById("sat-import-file");

  if(!fileInput || !fileInput.files.length){ alert("请先选择文件"); return; }

  const file = fileInput.files[0];

  const reader = new FileReader();

  reader.onload = function(e){

    try {

      const text = e.target.result;

      const lines = text.replace(/^\uFEFF/,'').split('\n').map(l => l.trim()).filter(Boolean);

      if(lines.length < 2){ alert("文件内容为空或仅有表头"); return; }

      const headers = lines[0].split(',').map(h => h.replace(/^"|"$/g,'').trim());

      let importCount = 0;

      for(let i=1;i<lines.length;i++){

        const vals = lines[i].split(',').map(v => v.replace(/^"|"$/g,'').trim());

        if(vals.length < 3) continue;

        const period = vals[headers.indexOf('周期')] || vals[1] || '';

        const projectName = vals[headers.indexOf('项目')] || vals[0] || '';

        const p = PROJECTS.find(pp => pp.name === projectName);

        if(!p) continue;

        SATISFACTION_DATA.push({

          id: SATISFACTION_DATA.length + 1,

          projectId: p.id,

          period: period,

          projectFeedback: {

            overall: vals[headers.indexOf('项目综合感受')] || '满意',

            businessPerf: vals[headers.indexOf('业务表现')] || '待填写',

            professionalism: vals[headers.indexOf('专业度')] || '待填写',

            execution: vals[headers.indexOf('执行力')] || '待填写',

            reporting: {

              timeliness: vals[headers.indexOf('汇报时效性')] || '待填写',

              accuracy: vals[headers.indexOf('汇报准确性')] || '待填写',

              completeness: vals[headers.indexOf('汇报全面性')] || '待填写'

            },

            riskControl: vals[headers.indexOf('风险管控')] || '待填写',

            communication: {

              frequency: vals[headers.indexOf('沟通频率')] || '待填写',

              understanding: vals[headers.indexOf('沟通理解')] || '待填写',

              sync: vals[headers.indexOf('信息同步')] || '待填写'

            }

          },

          leaderScore: parseInt(vals[headers.indexOf('领导评分')]) || 0,

          leaderComment: vals[headers.indexOf('上级评语')] || '',

          evaluatedBy: vals[headers.indexOf('评定人')] || CURRENT_ROLE.label,

          evaluatedAt: vals[headers.indexOf('评定日期')] || new Date().toISOString().slice(0,10),

          status: vals[headers.indexOf('状态')] || '待评定'

        });

        importCount++;

      }

      document.getElementById("modal-overlay").classList.add("hidden");

      renderModule("satisfaction");

      alert(`导入完成！共成功导入 ${importCount} 条评估记录。`);

    } catch(err){

      alert("导入失败：" + err.message);

    }

  };

  reader.readAsText(file, 'UTF-8');

}



// ===== 满意度评估 - 权限设置（弹窗）=====

function showSatisfactionPermission(){

  const ROLE_NAMES = {leader:'上级领导',pm:'项目经理',exec:'执行团队',staff:'项目人员'};

  const canRead = (role) => {

    if(role==='leader') return '全部项目（只读 + 评定打分）';

    if(role==='pm') return '负责项目（读写）+ 跨职场同类（只读）';

    if(role==='exec') return '负责项目（读写），其他同部门（只读）';

    if(role==='staff') return '所参与项目（只读）';

    return '';

  };

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "🔐 满意度评估 - 权限设置";

  body.innerHTML = `

    <div style="font-size:13px;color:var(--c-text-2);margin-bottom:16px;line-height:1.8;">

      <div>📋 <b>模块权限说明：</b></div>

      <div>满意度评估模块涉及<b>项目方感受（对外）</b>与<b>上级评定（对内）</b>，权限需严格区分。</div>

    </div>



    <div class="card" style="margin-bottom:14px;padding:14px 16px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;">角色权限明细</div>

      <table class="data-table">

        <thead><tr><th>角色</th><th>查看范围</th><th>操作权限</th></tr></thead>

        <tbody>

          <tr>

            <td><span class="badge badge-blue">上级领导</span></td>

            <td>全部项目评估记录</td>

            <td>新增评估 · 评定打分 · 编辑评语 · 导出 · 导入 · 权限管理</td>

          </tr>

          <tr>

            <td><span class="badge badge-green">项目经理</span></td>

            <td>负责项目 + 跨职场同类项目</td>

            <td>新增评估（填写项目感受）· 查看评定结果 · 导出</td>

          </tr>

          <tr>

            <td><span class="badge badge-yellow">执行团队</span></td>

            <td>负责项目</td>

            <td>查看负责项目的评定结果和评语 · 导出</td>

          </tr>

          <tr>

            <td><span class="badge badge-gray">项目人员</span></td>

            <td>所参与项目</td>

            <td>查看本人参与项目的评定结果（仅查看）</td>

          </tr>

        </tbody>

      </table>

    </div>



    <div class="card" style="margin-bottom:14px;padding:14px 16px;background:var(--c-yellow-bg);">

      <div style="font-size:13px;font-weight:500;margin-bottom:8px;color:var(--c-yellow);">⚠️ 数据安全提醒</div>

      <div style="font-size:12px;color:var(--c-text-2);line-height:2;">

        <div>• 项目方感受内容<b>不对外展示分值</b>，仅上级可查看完整评定结果</div>

        <div>• 项目人员（未来开放）仅可查看本人参与项目的评定结果，<b>不可查看其他项目</b></div>

        <div>• 导出文件包含完整评定意见，请注意文件分发范围</div>

        <div>• 建议定期备份评估数据（使用导出功能）</div>

      </div>

    </div>



    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">关闭</button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}

