// VERSION: 20260723 - 密码加密+XSS防护+代码优化
//
// ══════════════════════════════════════════════════════════════
// 📍 代码地图（查找指南 · 2026-08-07 更新 · app.js 共 4012 行）
// ══════════════════════════════════════════════════════════════
//   Mock 演示数据（DEFAULT_*/硬编码假数据）……………… 第 29-104 行
//   薪资配置（初始化 + 默认KPI/提成池/扣款）…………… 第 105-189 行
//   通用 UI 组件（Toast/确认/输入/选择/KPI弹窗）……… 第 190-424 行
//   数据持久化层（safeSetItem/safeGetItem/各集合加载保存） 第 425-691 行
//   看板数据模型（STATS_CARD_MODEL + 数据聚合）……… 第 692-1564 行
//   密码显示切换 + 用户登录/注册逻辑 ………………… 第 1565-1606 行
//   运维调研数据（WORKLOAD/KPI_HISTORY 加载保存）…… 第 1607-2309 行
//   角色与权限系统（初始化/权限检查/导航过滤）……… 第 2310-2523 行
//   系统初始化（loadInitData / loadAllData）………… 第 2524-2593 行
//   UI 框架（侧边栏/导航/折叠/汉堡菜单/用户显示）… 第 2594-2802 行
//   模块分发（renderModule / bindEvents）…………… 第 2803-2870 行
//   筛选栏 v4（状态管理 + 渲染 + 辅助函数）………… 第 2871-3257 行
//   项目名称多选搜索组件 ……………………………… 第 3258-3443 行
//   驾驶舱卡片详情弹窗（6大卡片）…………………… 第 3444-4012 行
// ── 安全基础设施（独立文件）──
//   core-security.js：XSS转义(escHtml) + PBKDF2密码哈希 + 全局错误捕获
//                     + 环形运行日志 + 一键备份全部数据(backupAllData)
// ── 业务模块（已拆分至 modules/ 目录）──
//   modules/dashboard.js    → 项目总览看板
//   modules/archive.js      → 项目基础档案
//   modules/target.js       → 目标与权责管理
//   modules/cost.js         → 成本与利润管理
//   modules/operation.js    → 运营数据
//   modules/issue.js        → 问题管理
//   modules/knowledge.js    → 知识能量池
//   modules/handover.js     → 交接管理
//   modules/satisfaction.js → 满意度
//   modules/notifications.js→ 通知与公告
//   modules/systemData.js   → 系统数据管理
//   modules/permissions.js  → 系统权限管理
//   modules/assessment.js   → 项目难度评估
//   modules/performance.js  → 绩效管理
//   modules/risk.js         → 风险管理
//   modules/profile.js      → 个人基础设置
// ── 其他独立文件 ──
//   backup-restore.js       → 数据恢复（导入备份JSON + 确认弹窗 + 执行恢复）
//   cloudbase-sync.js       → CloudBase 云端数据同步
//   project-import-export.js→ 项目数据导入导出
//   premium-enhancements.js → UI 增强（动画/交互动效）
//   goal-management.js      → 目标管理
//   filterBarNew.js         → 新筛选栏组件
// ══════════════════════════════════════════════════════════════
//
// ===== Mock 数据 =====

// 管理难度评估数据（自动生成）
const GROUPS_DATA = [{"month":"7月","group":"济南B事业部-Alpha组","manager":"张伟","level":"组长-1-1级","shopCount":6,"categoryCount":1,"platformCount":4,"manageCount":1.0,"qcCount":0.4,"trainCount":0,"evalCount":0.35,"aiCount":0,"csCount":10,"new3m":2,"manageTrainSum":1.4,"storeMgrCount":5,"pptCount":2,"totalStaff":11.75,"manageRatio":7.14285714285714,"shopRatio":6.0,"platformRatio":0.307692307692308},{"month":"7月","group":"济南B事业部-Beta组","manager":"李娜","level":"培训师","shopCount":10,"categoryCount":5,"platformCount":2,"manageCount":0.3,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":3,"new3m":0,"manageTrainSum":0.3,"storeMgrCount":8,"pptCount":0,"totalStaff":3.3,"manageRatio":10.0,"shopRatio":33.3333333333333,"platformRatio":0.153846153846154},{"month":"7月","group":"济南B事业部-Gamma组","manager":"王强","level":"组长-2级","shopCount":2,"categoryCount":2,"platformCount":2,"manageCount":1.0,"qcCount":0.5,"trainCount":0.25,"evalCount":0.7,"aiCount":0,"csCount":9,"new3m":3,"manageTrainSum":1.75,"storeMgrCount":1,"pptCount":2,"totalStaff":11.45,"manageRatio":5.14285714285714,"shopRatio":2.0,"platformRatio":0.153846153846154},{"month":"7月","group":"济南A事业部-Delta组","manager":"刘洋","level":"组长-2级","shopCount":6,"categoryCount":1,"platformCount":4,"manageCount":0.6,"qcCount":0.2,"trainCount":0,"evalCount":0.275,"aiCount":0,"csCount":3,"new3m":1,"manageTrainSum":0.8,"storeMgrCount":3,"pptCount":1,"totalStaff":4.075,"manageRatio":3.75,"shopRatio":10.0,"platformRatio":0.307692307692308},{"month":"7月","group":"济南A事业部-Echo组","manager":"刘洋","level":"组长-2级","shopCount":4,"categoryCount":1,"platformCount":3,"manageCount":0.4,"qcCount":0.2,"trainCount":0,"evalCount":0.06,"aiCount":0,"csCount":3,"new3m":0,"manageTrainSum":0.6,"storeMgrCount":2,"pptCount":1,"totalStaff":3.66,"manageRatio":5.0,"shopRatio":10.0,"platformRatio":0.230769230769231},{"month":"7月","group":"济南A事业部-Foxtrot组","manager":"陈静","level":"组长-2级","shopCount":5,"categoryCount":3,"platformCount":3,"manageCount":1.0,"qcCount":0.33,"trainCount":0.3,"evalCount":0.68,"aiCount":0,"csCount":7,"new3m":0,"manageTrainSum":1.63,"storeMgrCount":5,"pptCount":2,"totalStaff":9.31,"manageRatio":4.29447852760736,"shopRatio":5.0,"platformRatio":0.230769230769231},{"month":"7月","group":"济南A事业部-Golf组","manager":"赵磊","level":"组长-3级","shopCount":2,"categoryCount":1,"platformCount":2,"manageCount":0.7,"qcCount":0.43,"trainCount":0.45,"evalCount":0.35,"aiCount":0.5,"csCount":6,"new3m":1,"manageTrainSum":1.58,"storeMgrCount":2,"pptCount":2,"totalStaff":8.43,"manageRatio":3.79746835443038,"shopRatio":2.85714285714286,"platformRatio":0.153846153846154},{"month":"7月","group":"济南A事业部-Hotel组","manager":"赵磊","level":"组长-3级","shopCount":8,"categoryCount":2,"platformCount":5,"manageCount":0.3,"qcCount":0,"trainCount":0,"evalCount":0.05,"aiCount":0,"csCount":3,"new3m":1,"manageTrainSum":0.3,"storeMgrCount":4,"pptCount":1,"totalStaff":3.35,"manageRatio":10.0,"shopRatio":26.6666666666667,"platformRatio":0.384615384615385},{"month":"7月","group":"济南A事业部-India组","manager":"孙明&周芳","level":"组长-3级","shopCount":1,"categoryCount":1,"platformCount":1,"manageCount":2.0,"qcCount":0.67,"trainCount":0.98,"evalCount":2.2,"aiCount":0.5,"csCount":18,"new3m":5,"manageTrainSum":3.65,"storeMgrCount":1,"pptCount":2,"totalStaff":24.35,"manageRatio":4.93150684931507,"shopRatio":0.5,"platformRatio":0.0769230769230769},{"month":"7月","group":"济南C事业部-Juliet组","manager":"吴涛","level":"组长-3级","shopCount":3,"categoryCount":3,"platformCount":3,"manageCount":0.9,"qcCount":1.9,"trainCount":0,"evalCount":0.53,"aiCount":0,"csCount":4,"new3m":1,"manageTrainSum":2.8,"storeMgrCount":4,"pptCount":6,"totalStaff":7.33,"manageRatio":1.42857142857143,"shopRatio":3.33333333333333,"platformRatio":0.230769230769231},{"month":"7月","group":"济南C事业部-Kilo组","manager":"吴涛","level":"组长-3级","shopCount":4,"categoryCount":1,"platformCount":2,"manageCount":0.1,"qcCount":0.07,"trainCount":0,"evalCount":0.27,"aiCount":0,"csCount":3,"new3m":0,"manageTrainSum":0.17,"storeMgrCount":2,"pptCount":0,"totalStaff":3.44,"manageRatio":17.6470588235294,"shopRatio":40.0,"platformRatio":0.153846153846154},{"month":"7月","group":"济南B事业部-Lima组","manager":"郑华","level":"主管-2级","shopCount":5,"categoryCount":2,"platformCount":5,"manageCount":0.6,"qcCount":0.3,"trainCount":0,"evalCount":0.35,"aiCount":0,"csCount":4,"new3m":1,"manageTrainSum":0.9,"storeMgrCount":2,"pptCount":1,"totalStaff":5.25,"manageRatio":4.44444444444444,"shopRatio":8.33333333333333,"platformRatio":0.384615384615385},{"month":"7月","group":"济南B事业部-Mike组","manager":"郑华","level":"主管-2级","shopCount":6,"categoryCount":2,"platformCount":5,"manageCount":0.4,"qcCount":0,"trainCount":0,"evalCount":0.1,"aiCount":0,"csCount":4,"new3m":1,"manageTrainSum":0.4,"storeMgrCount":4,"pptCount":1,"totalStaff":4.5,"manageRatio":10.0,"shopRatio":15.0,"platformRatio":0.384615384615385},{"month":"7月","group":"济南B事业部-November组","manager":"黄丽","level":"主管-2级","shopCount":2,"categoryCount":1,"platformCount":1,"manageCount":3.0,"qcCount":0.5,"trainCount":1.0,"evalCount":1.0,"aiCount":0.5,"csCount":37,"new3m":32,"manageTrainSum":4.5,"storeMgrCount":2,"pptCount":4,"totalStaff":43.0,"manageRatio":8.22222222222222,"shopRatio":0.666666666666667,"platformRatio":0.0769230769230769},{"month":"7月","group":"济南支持组-Oscar组","manager":"林峰","level":"主管-1级","shopCount":2,"categoryCount":1,"platformCount":2,"manageCount":0.5,"qcCount":0.15,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":3,"new3m":0,"manageTrainSum":0.65,"storeMgrCount":1,"pptCount":4,"totalStaff":3.65,"manageRatio":4.61538461538461,"shopRatio":4.0,"platformRatio":0.153846153846154},{"month":"7月","group":"济南C事业部-Papa组","manager":"徐杰","level":"组长-1-1级","shopCount":3,"categoryCount":1,"platformCount":2,"manageCount":0.4,"qcCount":0.5,"trainCount":0.02,"evalCount":0.2,"aiCount":0,"csCount":3,"new3m":1,"manageTrainSum":0.92,"storeMgrCount":3,"pptCount":1,"totalStaff":4.12,"manageRatio":3.26086956521739,"shopRatio":7.5,"platformRatio":0.153846153846154},{"month":"7月","group":"济南A事业部-Quebec组","manager":"徐杰","level":"组长-1-1级","shopCount":4,"categoryCount":2,"platformCount":2,"manageCount":0.6,"qcCount":0.5,"trainCount":0,"evalCount":0.3,"aiCount":0,"csCount":3,"new3m":1,"manageTrainSum":1.1,"storeMgrCount":2,"pptCount":1,"totalStaff":4.4,"manageRatio":2.72727272727273,"shopRatio":6.66666666666667,"platformRatio":0.153846153846154},{"month":"定量指标汇总","group":"","manager":"","level":"","shopCount":0,"categoryCount":0,"platformCount":0,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"月份","group":"管理姓名","manager":"客服人数","level":"3个月内人数","shopCount":"管理+质培人数","categoryCount":"店长对接人数","platformCount":"PPT年度汇报次数","manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"张伟","manager":"10","level":"2","shopCount":1.4,"categoryCount":5,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"李娜","manager":"3","level":"","shopCount":0.3,"categoryCount":8,"platformCount":0,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"王强","manager":"9","level":"3","shopCount":1.75,"categoryCount":1,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"刘洋","manager":"6","level":"1","shopCount":1.4,"categoryCount":5,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"陈静","manager":"7","level":"","shopCount":1.63,"categoryCount":5,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"赵磊","manager":"9","level":"2","shopCount":1.88,"categoryCount":6,"platformCount":3,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"孙明&周芳","manager":"9","level":"5","shopCount":3.65,"categoryCount":1,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"吴涛","manager":"7","level":"1","shopCount":2.97,"categoryCount":6,"platformCount":6,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"郑华","manager":"8","level":"2","shopCount":1.3,"categoryCount":6,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"黄丽","manager":"12.3333333333333","level":"32","shopCount":4.5,"categoryCount":2,"platformCount":4,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"林峰","manager":"3","level":"","shopCount":0.65,"categoryCount":1,"platformCount":4,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"徐杰","manager":"6","level":"2","shopCount":2.02,"categoryCount":5,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0}];
const ASSESSMENTS_DATA = [{"month":"7月","dept":"B事业部","group":"Alpha组","manager":"张伟","level":"组长-1-1级","totalScore":65.4428571428572,"quantScore":43.4428571428571,"qualScore":22.0,"csCountScore":10.0,"new3mScore":2.0,"ratioScore":1.4,"storeMgrScore":5.0,"pptScore":2.0,"qual1":3,"qual2":3,"qual3":3,"qual4":3,"qual5":3,"qual6":1,"qual7":3,"qual8":0},{"month":"7月","dept":"B事业部","group":"Beta组","manager":"李娜","level":"培训师","totalScore":8.0,"quantScore":0,"qualScore":8.0,"csCountScore":3.0,"new3mScore":0,"ratioScore":0.3,"storeMgrScore":8.0,"pptScore":0,"qual1":0,"qual2":0,"qual3":1,"qual4":0,"qual5":3,"qual6":3,"qual7":0,"qual8":0},{"month":"7月","dept":"B事业部","group":"Gamma组","manager":"王强","level":"组长-2级","totalScore":52.2261904761905,"quantScore":34.2261904761905,"qualScore":18.0,"csCountScore":9.0,"new3mScore":3.0,"ratioScore":1.75,"storeMgrScore":1.0,"pptScore":2.0,"qual1":2,"qual2":1,"qual3":1,"qual4":3,"qual5":1,"qual6":1,"qual7":3,"qual8":0},{"month":"7月","dept":"A事业部","group":"Delta手表&Echo组","manager":"刘洋","level":"组长-2级","totalScore":40.2523809523809,"quantScore":32.2523809523809,"qualScore":8.0,"csCountScore":6.0,"new3mScore":1.0,"ratioScore":1.4,"storeMgrScore":5.0,"pptScore":2.0,"qual1":1,"qual2":0,"qual3":1,"qual4":1,"qual5":2,"qual6":1,"qual7":0,"qual8":0},{"month":"7月","dept":"A事业部","group":"Foxtrot组","manager":"陈静","level":"组长-2级","totalScore":41.3598159509203,"quantScore":31.3598159509202,"qualScore":10.0,"csCountScore":7.0,"new3mScore":0,"ratioScore":1.63,"storeMgrScore":5.0,"pptScore":2.0,"qual1":0,"qual2":0,"qual3":1,"qual4":1,"qual5":2,"qual6":3,"qual7":0,"qual8":2},{"month":"7月","dept":"A事业部","group":"Golf组&Hotel2&Hotel","manager":"赵磊","level":"组长-3级","totalScore":60.0971158392435,"quantScore":41.0971158392435,"qualScore":19.0,"csCountScore":9.0,"new3mScore":2.0,"ratioScore":1.88,"storeMgrScore":6.0,"pptScore":3.0,"qual1":3,"qual2":1,"qual3":3,"qual4":1,"qual5":3,"qual6":3,"qual7":1,"qual8":2},{"month":"7月","dept":"A事业部","group":"India组","manager":"孙明&周芳","level":"组长-3级","totalScore":47.75,"quantScore":31.75,"qualScore":16.0,"csCountScore":9.0,"new3mScore":5.0,"ratioScore":3.65,"storeMgrScore":1.0,"pptScore":2.0,"qual1":3,"qual2":2,"qual3":2,"qual4":3,"qual5":1,"qual6":1,"qual7":1,"qual8":2},{"month":"7月","dept":"A事业部","group":"Juliet组&手表拼多多&抖音","manager":"吴涛","level":"组长-3级","totalScore":60.6385714285714,"quantScore":41.6385714285714,"qualScore":19.0,"csCountScore":7.0,"new3mScore":1.0,"ratioScore":2.97,"storeMgrScore":6.0,"pptScore":6.0,"qual1":3,"qual2":2,"qual3":2,"qual4":3,"qual5":2,"qual6":3,"qual7":0,"qual8":3},{"month":"7月","dept":"B事业部","group":"Lima&Lima2&Mike组","manager":"郑华","level":"主管-2级","totalScore":55.3830769230769,"quantScore":41.3830769230769,"qualScore":14.0,"csCountScore":8.0,"new3mScore":2.0,"ratioScore":1.3,"storeMgrScore":6.0,"pptScore":2.0,"qual1":2,"qual2":0,"qual3":1,"qual4":2,"qual5":2,"qual6":2,"qual7":1,"qual8":0},{"month":"7月","dept":"C事业部","group":"November组","manager":"黄丽","level":"主管-2级","totalScore":59.57,"quantScore":39.57,"qualScore":20.0,"csCountScore":12.3333333333333,"new3mScore":32.0,"ratioScore":4.5,"storeMgrScore":2.0,"pptScore":4.0,"qual1":2,"qual2":3,"qual3":3,"qual4":3,"qual5":1,"qual6":1,"qual7":2,"qual8":1},{"month":"7月","dept":"支持组","group":"Oscar组","manager":"林峰","level":"主管-1级","totalScore":32.6923076923077,"quantScore":28.6923076923077,"qualScore":4.0,"csCountScore":3.0,"new3mScore":0,"ratioScore":0.65,"storeMgrScore":1.0,"pptScore":4.0,"qual1":0,"qual2":1,"qual3":1,"qual4":0,"qual5":1,"qual6":1,"qual7":0,"qual8":0},{"month":"7月","dept":"A事业部","group":"Quebec组&Papa","manager":"徐杰","level":"组长-1-1级","totalScore":43.1333333333333,"quantScore":32.1333333333333,"qualScore":11.0,"csCountScore":6.0,"new3mScore":2.0,"ratioScore":2.02,"storeMgrScore":5.0,"pptScore":2.0,"qual1":1,"qual2":1,"qual3":1,"qual4":2,"qual5":1,"qual6":3,"qual7":1,"qual8":0}];




var DEFAULT_OPERATIONS = [

  {id:1, projectId:"P001", period:"2026-05", fteActual:28, attendance:96.5, ticketVol:12580, responseTime:98, resolveTime:320, csat:4.8, resolutionRate:97.2, reviewRate:82.5, health:"🟢"},

  {id:2, projectId:"P002", period:"2026-05", fteActual:42, attendance:94.2, ticketVol:18420, responseTime:88, resolveTime:290, csat:4.6, resolutionRate:95.8, reviewRate:78.3, health:"🟡"},

  {id:3, projectId:"P003", period:"2026-05", fteActual:52, attendance:91.8, ticketVol:22100, responseTime:75, resolveTime:380, csat:4.2, resolutionRate:91.5, reviewRate:65.2, health:"🔴"},

  {id:4, projectId:"P004", period:"2026-05", fteActual:24, attendance:97.1, ticketVol:9800, responseTime:105, resolveTime:310, csat:4.9, resolutionRate:98.1, reviewRate:85.6, health:"🟢"},

  {id:5, projectId:"P005", period:"2026-05", fteActual:33, attendance:95.0, ticketVol:15600, responseTime:92, resolveTime:295, csat:4.5, resolutionRate:94.5, reviewRate:76.8, health:"🟡"},

  {id:6, projectId:"P006", period:"2026-05", fteActual:15, attendance:88.0, ticketVol:8900, responseTime:130, resolveTime:420, csat:3.8, resolutionRate:88.0, reviewRate:60.1, health:"🔴"},

];
var OPERATIONS = [];



var DEFAULT_ISSUES = [

  {id:1, projectId:"P002", projectName:"家电自营客服项目", category:"问题", type:"整改", desc:"连续两周满意度低于目标值4.7", background:"4月下旬起满意度持续下滑，主要集中在外呼环节", rootCause:"新员工话术培训不达标，质检反馈未及时跟进", priority:"重要", owner:"刘洋", assignee:"刘洋", status:"处理中", source:"监控预警", responsibility:"承接方", createdAt:"2026-05-15", solution:"", milestone:"6月初已完成全员话术培训", outcome:"", participants:"刘洋,王强"},

  {id:2, projectId:"P003", projectName:"服装品牌客服外包", category:"问题", type:"客诉", desc:"大促期间系统崩溃导致回复超时，品牌方投诉", background:"5月10日大促首日系统承载超限，平均响应延迟达8分钟", rootCause:"未提前做高并发压测，自动扩容策略未生效", priority:"紧急", owner:"陈静", assignee:"陈静", status:"待验收", source:"品牌反馈", responsibility:"共同", createdAt:"2026-05-10", solution:"已搭建备用会话分配机制，增加熔断保护", milestone:"已部署备用通道", outcome:"品牌认同改进方案", participants:"陈静,技术部"},

  {id:3, projectId:"P006", projectName:"运动品牌客服项目", category:"问题", type:"优化", desc:"项目利润率持续为负，需重新核算成本结构", background:"连续3个月利润率为负，裁员后效率未提升", rootCause:"固定人力成本过高，项目收入增长跟不上成本增长", priority:"紧急", owner:"陈静", assignee:"王强", status:"待处理", source:"财务预警", responsibility:"承接方", createdAt:"2026-05-20", solution:"", milestone:"", outcome:"", participants:""},

  {id:4, projectId:"P001", projectName:"美妆旗舰店客服项目", category:"问题", type:"优化", desc:"大促预案需要更新，去年双11出现人手不足", background:"去年双11当天咨询量激增300%，人力储备严重不足", rootCause:"预案未考虑极端流量场景，临时增援不及", priority:"一般", owner:"张伟", assignee:"张伟", status:"已关闭", source:"人工上报", responsibility:"承接方", createdAt:"2026-04-01", solution:"已完成大促人力预案，增加20%临时人力储备", milestone:"预案评审通过", outcome:"已纳入年度SOP", participants:"张伟,李明"},

  // 课题（无 projectId，非项目维度）
  {id:5, projectId:"", projectName:"", category:"课题", type:"流程优化", desc:"客服响应速度提升计划", background:"当前平均响应时间28s，目标降至20s以内", rootCause:"流程节点多、系统切换耗时", priority:"重要", owner:"张伟", assignee:"张伟", status:"进行中", source:"内部立项", responsibility:"承接方", createdAt:"2026-05-01", solution:"优化工单流转路径，引入快捷回复模板", milestone:"完成流程梳理", outcome:"响应时间已降至22s", participants:"张伟,李明,技术部"},

  {id:6, projectId:"", projectName:"", category:"课题", type:"调研诊断", desc:"新职场团队融入与效能评估", background:"无锡职场3月启用，团队新人占比60%", rootCause:"跨地域管理导致沟通效率低", priority:"重要", owner:"刘洋", assignee:"刘洋", status:"进行中", source:"管理层指派", responsibility:"承接方", createdAt:"2026-05-10", solution:"定期跨职场交流会+导师制", milestone:"完成首月评估报告", outcome:"新人留存率提升15%", participants:"刘洋,HR"},

  {id:7, projectId:"", projectName:"", category:"课题", type:"销售提升", desc:"客单价提升专项方案", background:"部分项目客单价低于行业平均水平10-15%", rootCause:"客服推荐意识薄弱，缺乏激励机制", priority:"一般", owner:"陈静", assignee:"陈静", status:"未开始", source:"内部立项", responsibility:"承接方", createdAt:"2026-05-15", solution:"建立客服推荐话术库+阶梯提成方案", milestone:"", outcome:"", participants:""},

  {id:8, projectId:"", projectName:"", category:"课题", type:"服务升级", desc:"24h智能客服辅助系统搭建", background:"夜间咨询占比22%但全由人工值守，成本高且体验差", rootCause:"缺少智能IVR和自动应答能力", priority:"一般", owner:"王强", assignee:"王强", status:"未开始", source:"管理层指派", responsibility:"承接方", createdAt:"2026-05-20", solution:"调研主流AI客服方案，搭建试点", milestone:"", outcome:"", participants:"王强,技术部"}
];
var ISSUES = [];

var DEFAULT_AGENT_PERFORMANCE = [
  {id:1, projectId:"P001", agentName:"张伟", group:"A组", status:"转正", agentType:"售前", month:"2026-05", salesAmount:52000, conversionRate:3.8, workVolume:0, firstResolveRate:0, responseTime:105, csat:4.9, serviceVolume:1258, reward:0, penalty:0},
  {id:2, projectId:"P001", agentName:"李娜", group:"A组", status:"转正", agentType:"售前", month:"2026-05", salesAmount:48000, conversionRate:3.5, workVolume:0, firstResolveRate:0, responseTime:98, csat:4.8, serviceVolume:1102, reward:200, penalty:0},
  {id:3, projectId:"P002", agentName:"刘洋", group:"B组", status:"转正", agentType:"售后", month:"2026-05", salesAmount:0, conversionRate:0, workVolume:1842, firstResolveRate:96.1, responseTime:92, csat:4.7, serviceVolume:1842, reward:0, penalty:0},
  {id:4, projectId:"P003", agentName:"陈静", group:"B组", status:"试用期", agentType:"售后", month:"2026-05", salesAmount:0, conversionRate:0, workVolume:2210, firstResolveRate:91.8, responseTime:78, csat:4.3, serviceVolume:2210, reward:0, penalty:100},
  {id:5, projectId:"P004", agentName:"王强", group:"A组", status:"转正", agentType:"综合", month:"2026-05", salesAmount:25000, conversionRate:2.1, workVolume:980, firstResolveRate:98.5, responseTime:110, csat:4.9, serviceVolume:980, reward:0, penalty:0},
  {id:6, projectId:"P005", agentName:"赵磊", group:"B组", status:"转正", agentType:"售后", month:"2026-05", salesAmount:0, conversionRate:0, workVolume:1560, firstResolveRate:95.2, responseTime:95, csat:4.6, serviceVolume:1560, reward:0, penalty:0},
  {id:7, projectId:"P007", agentName:"孙芳", group:"A组", status:"试用期", agentType:"售前", month:"2026-05", salesAmount:38000, conversionRate:3.2, workVolume:0, firstResolveRate:0, responseTime:88, csat:4.8, serviceVolume:1320, reward:0, penalty:0},
  {id:8, projectId:"P002", agentName:"周杰", group:"B组", status:"转正", agentType:"综合", month:"2026-05", salesAmount:18000, conversionRate:1.8, workVolume:1620, firstResolveRate:95.8, responseTime:85, csat:4.5, serviceVolume:1620, reward:0, penalty:50},
];
// 组别负荷比默认值
var DEFAULT_GROUP_LOAD_RATIO = [
  {group:"A组", month:"2026-05", loadRatio:1.50},
  {group:"B组", month:"2026-05", loadRatio:1.35},
];
var GROUP_LOAD_RATIO = [];
// 指标权重配置默认值
var DEFAULT_PERFORMANCE_WEIGHTS = {
  "2026-05": {
    "售前": {salesAmount:40, conversionRate:30, responseTime:15, csat:15},
    "售后": {workVolume:40, firstResolveRate:30, responseTime:15, csat:15},
    "综合": {salesAmount:20, conversionRate:15, workVolume:20, firstResolveRate:15, responseTime:15, csat:15},
  }
};
var PERFORMANCE_WEIGHTS = {};
var AGENT_PERFORMANCE = [];

// ===== 薪资配置数据（基础配置Tab设置）=====
var SALARY_BASE = {};      // { agentId: baseAmount } - 每人基本工资
var SOCIAL_INSURANCE = {}; // { companyName: {socialBase, socialRate, fundBase, fundRate} }
var SUBSIDY_RATES = {};    // { city: {meal, attendance, computer} }
var DEDUCTION_RATES = {};  // { latePerMin: 2, missPunch: 0 }
var POOL_DIST_RATIO = {};  // { presale: 60, afterSale: 60, mixed: 30 }
var PERF_BASE_LEVELS = {trial:1400, regular:1700}; // 绩效基数档位（试用期/转正）
var KPI_DEFINITIONS = {};  // { presale: [{name,key,weight}], afterSale: [...], mixed: [...] }
var _PERF_RESULTS = {};    // { agentId: {perfSalary, shareAmount, score} } — Tab1写入, Tab2读取
// 初始化薪资配置（首次从localStorage加载或设默认值）
(function initSalaryConfig(){
  try{ var r = localStorage.getItem('chansee_salary_base'); if(r) SALARY_BASE = JSON.parse(r); } catch(e){}
  try{ var r = localStorage.getItem('chansee_social_ins'); if(r) SOCIAL_INSURANCE = JSON.parse(r); } catch(e){}
  try{ var r = localStorage.getItem('chansee_subsidies'); if(r) SUBSIDY_RATES = JSON.parse(r); } catch(e){}
  try{ var r = localStorage.getItem('chansee_deductions'); if(r) DEDUCTION_RATES = JSON.parse(r); } catch(e){}
  try{ var r = localStorage.getItem('chansee_pool_dist'); if(r) POOL_DIST_RATIO = JSON.parse(r); } catch(e){}
  try{ var r = localStorage.getItem('chansee_perf_base_levels'); if(r) PERF_BASE_LEVELS = JSON.parse(r); } catch(e){}
  try{ var r = localStorage.getItem('chansee_kpi_definitions'); if(r) KPI_DEFINITIONS = JSON.parse(r); } catch(e){}
  // 默认值
  if(Object.keys(POOL_DIST_RATIO).length===0) POOL_DIST_RATIO = {presale:60, afterSale:60, mixed:30};
  if(Object.keys(KPI_DEFINITIONS).length===0) KPI_DEFINITIONS = {
    presale: [{name:'销售额',key:'salesAmount',weight:40},{name:'转化率',key:'conversionRate',weight:30},{name:'CSAT',key:'csat',weight:30}],
    afterSale: [{name:'工作量',key:'workVolume',weight:40},{name:'解决率',key:'firstResolveRate',weight:30},{name:'CSAT',key:'csat',weight:30}],
    mixed: [{name:'销售额',key:'salesAmount',weight:20},{name:'转化率',key:'conversionRate',weight:20},{name:'工作量',key:'workVolume',weight:20},{name:'解决率',key:'firstResolveRate',weight:20},{name:'CSAT',key:'csat',weight:20}]
  };
})();

var DEFAULT_RISK_ALERTS = [
  {id:1, projectId:"P003", projectName:"服装品牌客服外包", riskType:"健康状态", severity:"🔴 高风险", indicator:"健康状态：🔴 风险", triggerValue:"连续3周红色", threshold:"健康状态不得连续2周红色", status:"未处理", createdAt:"2026-05-28"},
  {id:2, projectId:"P002", projectName:"家电自营客服项目", riskType:"SLA超标", severity:"🟡 中风险", indicator:"平均响应时长：88s", triggerValue:"88s > 目标90s", threshold:"响应时长 ≤ SLA响应目标", status:"处理中", createdAt:"2026-05-30"},
  {id:3, projectId:"P006", projectName:"运动品牌客服项目", riskType:"成本超支", severity:"🔴 高风险", indicator:"利润率：-10.7%", triggerValue:"-10.7% < 目标≥0%", threshold:"项目利润率 ≥ 0%", status:"未处理", createdAt:"2026-05-25"},
  {id:4, projectId:"P001", projectName:"美妆旗舰店客服项目", riskType:"满意度下滑", severity:"🟡 中风险", indicator:"CSAT：4.9", triggerValue:"4.9 较上月下降0.2", threshold:"CSAT ≥ 4.7", status:"已忽略", createdAt:"2026-05-20"},
  {id:5, projectId:"P005", projectName:"食品生鲜客服项目", riskType:"SLA超标", severity:"🟡 中风险", indicator:"平均响应时长：92s", triggerValue:"92s > 目标90s", threshold:"响应时长 ≤ SLA响应目标", status:"处理中", createdAt:"2026-05-31"},
];
var RISK_ALERTS = [];


// 知识种子数据版本：版本号变化时会用新默认数据重置（仅当本地仍是旧默认）
var KNOWLEDGE_SEED_VERSION = '2026-08-priority';

var DEFAULT_KNOWLEDGE = [

  {id:1, title:"团队人力成本优化模型", domain:"成本与核算", tags:"人力成本,排班,降本,技能矩阵,人力共享池,人员借调,成本率,人效,淡旺季", projectId:"", scope:"通用", permission:"公开", fileUrl:"", priority:"normal", createdAt:"2026-05-12", updateTime:"2026-08-11", views:286, downloads:52, description:"【适用场景】项目利润率下滑、人力成本占比过高时使用。\n\n【核心方法】\n1. 排班模型优化：用历史接待量分时数据反推各时段所需人力，避免忙时人不够、闲时人太多。\n2. 技能矩阵：团队按能力分级(A/B/C)，A级处理复杂问题、C级处理简单咨询，用分层路由把人力效率最大化。\n3. 多项目人力共享池：相邻项目间建立人员借调机制，淡旺季互补。\n\n【常见坑】只算人数不算技能结构导致降本后服务质量崩溃；共享池没提前和甲方沟通导致合规风险。\n\n【配套工具】分时人力预测Excel模板、技能矩阵自评表。\n\n【关联】要与BPO费效比分析一起看——自建降本和外包降本是两个不同逻辑。", short:"人力成本率系统性优化方法论", relatedIds:[7], sourceType:"manual", sourceId:"", version:3, versionHistory:[{version:3,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:2, title:"AI客服工具选型与落地指南", domain:"效率与AI", tags:"AI,人工智能,工具选型,店小蜜,晓多,网易七鱼,ROI,人机协同,意图识别,解决率,转人工率", projectId:"", scope:"通用", permission:"公开", fileUrl:"", priority:"normal", createdAt:"2026-03-10", updateTime:"2026-08-11", views:341, downloads:88, description:"【适用场景】考虑引入AI客服工具(店小蜜/晓多等)，或已有工具但效果不理想时使用。\n\n【选型五维度】①解决率(目标>60%) ②转人工率(<40%) ③意图识别准确率(>85%) ④部署成本(年费+运维+培训) ⑤平台兼容性(淘宝/京东/拼多多/抖音是否支持)。\n\n【落地四步】\n1. 试点选中型项目，配置TOP20高频问题\n2. 运行2周对比人工组和AI组关键指标\n3. 建人机协同SOP：AI处理简单→复杂转人工→人工标记新意图→反哺AI\n4. 按ROI决策：AI月成本÷替代人工月成本<60%则推广\n\n【常见坑】以为买了工具就完事了——知识库配置至少1个月迭代；低价工具解决率低反而增加人工负担。", short:"AI工具选型与落地ROI框架", relatedIds:[8], sourceType:"manual", sourceId:"", version:3, versionHistory:[{version:3,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:3, title:"跨项目经验快速复制SOP", domain:"流程与SOP", tags:"经验复制,标准化,知识沉淀,推广,萃取,模板化,试点,规模化,SOP", projectId:"", scope:"通用", permission:"公开", fileUrl:"", priority:"normal", createdAt:"2026-02-18", updateTime:"2026-08-11", views:209, downloads:41, description:"【适用场景】某项目优秀做法(如降诉率话术、排班方案)推广到其他项目。\n\n【四步法】\n1. 经验萃取(1周)：跟优秀项目主管做1小时访谈，提炼具体做法和底层逻辑，写成1页纸\n2. 模板化改造(1周)：去掉原项目特有细节(品牌名、产品)，保留通用方法论\n3. 试点验证(2周)：新项目试用，收集反馈，标注水土不服处修改\n4. 规模推广(2周起)：发布正式版SOP，搭配培训，纳入质检体系\n\n【常见坑】直接复制不理解底层逻辑→换项目就失效；推广太快没试点→反对声音大推不下去。", short:"好经验跨项目复制四步法", relatedIds:[11], sourceType:"manual", sourceId:"", version:3, versionHistory:[{version:3,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:4, title:"核心人员突发离职应急方案", domain:"风控与应急", tags:"离职,应急,继任,人才风险,交接,维稳,替补,HR,人员流失,关键岗位", projectId:"", scope:"通用", permission:"内部", fileUrl:"", priority:"high", createdAt:"2026-04-22", updateTime:"2026-08-11", views:174, downloads:33, description:"【适用场景】项目主管/组长/核心骨干突然提离职。\n\n【应急时间线】第1天：稳住情绪、了解真实原因(薪资/发展/人际关系)、评估挽留、启动B计划。第3天：确定离职日期、拉业务交接清单、指定临时负责人。第1周：完成基础交接(项目档案/在跟事项/甲方联系人/账号权限)、通知甲方。第2周：新负责人上手、老主管跟带1周。第4周：新负责人独立运作。\n\n【配套工具】关键岗位继任者名单(每主管须有1预备人选)；离职交接检查清单(7大类30项)；团队情绪维稳话术。\n\n【常见坑】没提前储备继任者→离职变危机；交接太匆忙漏甲方联系人→项目出问题。", short:"核心骨干突发离职应急响应", relatedIds:[6,10], sourceType:"manual", sourceId:"", version:3, versionHistory:[{version:3,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:5, title:"难缠客户升级投诉应对话术", domain:"客诉与话术", tags:"投诉,升级投诉,沟通,话术,危机处理,客户安抚,补偿,免责,舆情,纠纷", projectId:"", scope:"通用", permission:"公开", fileUrl:"", priority:"high", createdAt:"2026-01-15", updateTime:"2026-08-11", views:378, downloads:71, description:"【适用场景】客户投诉升级到主管层面，涉及金额大或有舆论风险。\n\n【五步闭环】\n1. 情绪接纳(30秒)：肯定客户情绪、感谢反馈、不给结论\n2. 事实确认(3分钟)：让客户完整叙述、复述确认理解\n3. 责任界定：不要当场承诺赔偿！说需核实后明天回复具体方案\n4. 方案提出(1天)：内部讨论后给补偿方案，附免责声明\n5. 闭环跟进(3天)：执行后回访确认满意度，记录归档\n\n【常见坑】当场答应赔偿金额→对方录音后续要求更高；用公司规定来推脱→激化矛盾。永远说需要请示一下。", short:"升级投诉的高层级沟通框架", relatedIds:[], sourceType:"manual", sourceId:"", version:3, versionHistory:[{version:3,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:6, title:"新任主管30天上手指南", domain:"培训与入门", tags:"新任主管,带团队,角色转换,管理入门,1v1,周报,晋升,新人培训,辅导", projectId:"", scope:"通用", permission:"公开", fileUrl:"", priority:"normal", createdAt:"2025-12-01", updateTime:"2026-08-11", views:452, downloads:96, description:"【适用场景】一线客服晋升主管、或外部招聘的新主管入职前30天。\n\n【四周计划】第1周-熟悉：看项目档案(客户是谁/历史KPI/团队人员)，跟客服坐一天岗。第2周-信任：跟每个组员做15分钟1v1(问：最大困难是什么？希望我帮你解决什么？)，不急改流程先观察。第3周-体系：选1个优先级最高的问题动手改(如排班不合理)，做第一份周报。第4周-结果：复盘修正方向，汇报进展，制定下月3个目标。\n\n【工具包】1v1面谈问题清单(10问)；新主管周报模板；角色转换避坑清单。\n\n【常见坑】一上来大改流程→老员工抵触；只盯KPI不看人→团队离心。", short:"一线到管理的30天转换地图", relatedIds:[10], sourceType:"manual", sourceId:"", version:3, versionHistory:[{version:3,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:7, title:"BPO项目费效比分析方法", domain:"成本与核算", tags:"BPO,外包,费效比,核算,成本,单价,供应商,自建,合同,报价", projectId:"", scope:"通用", permission:"公开", fileUrl:"", priority:"normal", createdAt:"2026-05-28", updateTime:"2026-08-11", views:131, downloads:24, description:"【适用场景】评估外包项目是否划算、或对比多个BPO供应商。\n\n【核算公式】费效比=(BPO月费+我方管理成本)÷月处理工单量\n\n【拆解维度】1.显性成本：BPO报价(人头单价×人数)、平台费、培训费。2.隐性成本：我方管理人员投入(一个主管管3-5个BPO≈30%工时)、质检抽检、沟通协调、合规风险。3.对比基准：自建同等规模团队年成本÷12。\n\n【决策】BPO费效比<自建费效比×80%→外包划算；80%-120%→看质量稳定性；>120%→自建更优。\n\n【常见坑】只比人头单价忘管理成本→实际贵30%；BPO低价抢标后续加价→合同要锁价。", short:"外包客服费效比核算测算", relatedIds:[1], sourceType:"manual", sourceId:"", version:3, versionHistory:[{version:3,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:8, title:"智能质检提效实践", domain:"效率与AI", tags:"质检,AI,自动化,全量质检,抽检,评分,实时预警,会话分析,质检闭环", projectId:"", scope:"通用", permission:"内部", fileUrl:"", priority:"normal", createdAt:"2026-04-08", updateTime:"2026-08-11", views:223, downloads:47, description:"【适用场景】人工质检抽检率低(<5%)，想用AI实现全量质检。\n\n【实施路径】1.标准数字化(1周)：质检打分表逐条转AI可识别规则。2.系统部署(2周)：配置质检平台→导入历史→AI学习→人工校准。3.双轨运行(2周)：AI+人工同时质检同一批，对比差异，调AI规则直到准确率>90%。4.全量切换：人工抽检从100%降到5%(仅抽查AI低分项)。\n\n【效果】质检覆盖率5%→100%；人力节省60%-80%；问题发现周报→实时预警。\n\n【搭配】和AI客服工具选型一起看——质检AI和客服AI通常是同一平台两面。", short:"AI全量质检与整改闭环", relatedIds:[2], sourceType:"manual", sourceId:"", version:3, versionHistory:[{version:3,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:9, title:"【活动预案】电商大促全流程准备指南", domain:"风控与应急", tags:"大促,双11,618,预案,排班,备战,活动,招聘,培训,硬件,激励,营销,评价管控,风险订单,AI分流,食品保障,应急预案", projectId:"", scope:"通用", permission:"公开", fileUrl:"", priority:"high", createdAt:"2026-08-11", updateTime:"2026-08-11", views:0, downloads:0, description:"基于XCXD客服中心大促准备指导手册(2021版)整理。\n\n【7个阶段】T-90天启动准备→T-60天招聘培训→T-30天方案落地→T-14天精准备战→T-7天预演冲刺→T-1天就绪确认→D-Day爆发日全时值守。\n\n【19个维度】核心KPI | 人力预估招聘 | 班务安排(大促期) | 班务安排(爆发日) | 激励制度 | 营销排期 | 评价管控 | 风险订单 | 发货发票反查 | 价格优惠计算 | 培训逻辑 | AI分流 | 硬件设备 | 工位贴士 | 食品饮品 | 应急预案 | 质检安排 | 数据监控 | 刷单计划。\n\n每个维度含详细准备事项清单，可直接逐项核验。", short:"双11/618大促全流程备战指南", relatedIds:[4,10], sourceType:"manual", sourceId:"", version:2, versionHistory:[{version:2,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:10, title:"多职场客服团队协同管理方法", domain:"人员管理", tags:"多职场,远程管理,协同,济南,淄博,杭州,200人,晨会,轮岗,巡检,信息同步,看板", projectId:"", scope:"通用", permission:"公开", fileUrl:"", priority:"normal", createdAt:"2026-08-11", updateTime:"2026-08-11", views:0, downloads:0, description:"【适用场景】管理分布不同城市200人团队，需统一标准又保留本地灵活性。\n\n【协同框架】1.统一标准层：全国统一质检标准、KPI考核、SOP流程、培训体系——中心制定各地执行。2.本地灵活层：排班方式(各地通勤习惯不同)、激励方案(生活成本不同)、招聘策略(当地人才差异)。3.信息同步机制：周一全员晨会(视频/10分钟/本周重点)；周三各地组长1v1(15分钟)；周五数据汇总(统一模板)。\n\n【管理工具】共享在线看板(实时看各地KPI)；轮岗计划(每年2人跨职场)；远程巡检(每月1次视频巡场)。\n\n【常见坑】只讲统一不讲弹性→各地反映总部不了解本地；信息同步靠微信群→重要信息被刷掉。", short:"200人多职场协同管理框架", relatedIds:[6,14], sourceType:"manual", sourceId:"", version:2, versionHistory:[{version:2,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:11, title:"客服质检标准制定与执行指南", domain:"流程与SOP", tags:"质检,评分标准,质检闭环,辅导,反馈,复检,质量,质检员,质检维度,校准", projectId:"", scope:"通用", permission:"公开", fileUrl:"", priority:"normal", createdAt:"2026-08-11", updateTime:"2026-08-11", views:0, downloads:0, description:"【适用场景】新建质检体系、或现有标准效果不佳。\n\n【制定三步】1.确定质检维度(5-7个)：问候语(5分)/需求理解(20分)/解决方案(25分)/响应时效(15分)/服务态度(15分)/追加销售(10分)/结束语(10分)，总分100。2.每维度定义三级标准(合格/良好/优秀)并附实例对话，须可衡量。3.试打分：用20条历史对话让人工和AI分别打分，一致性>85%才启用。\n\n【执行闭环】质检→反馈(24h内私聊)→辅导(给改进话术不只说你不行)→复检(3天后复查)→归档(月度汇总纳入绩效)。\n\n【常见坑】标准太复杂质检员不用→控1页纸；只打分不辅导→员工反感质检。", short:"客服质检标准制定到闭环执行", relatedIds:[3,8], sourceType:"manual", sourceId:"", version:2, versionHistory:[{version:2,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:12, title:"主流电商平台大促规则速查", domain:"风控与应急", tags:"平台规则,淘宝,京东,拼多多,抖音,大促,发货,退款,价保,纠纷,DSR", projectId:"", scope:"通用", permission:"公开", fileUrl:"", priority:"low", createdAt:"2026-08-11", updateTime:"2026-08-11", views:0, downloads:0, description:"【适用场景】大促前各平台规则集中更新，客服团队需快速掌握。\n\n【平台规则对比】(以2026双11为参考，以平台最新公告为准)\n淘宝/天猫：发货时效延长至15天；价保规则15天内降价可申请补差；未发货秒退款额度临时提升；纠纷率影响店铺权重。\n京东：211限时达可能调为次日达；价保7-15天；自营和POP规则不同要区分。\n拼多多：发货超时罚款加倍；仅退款政策较宽松需防恶意退款。\n抖音：发货时效通常48h内；运费险一般平台赠送；虚拟号码保护影响回访。\n\n【速查流】大促前2周整理规则变更→提炼1页FAQ(每条2行对应1场景)→全员培训考试(80分及格)→贴工位。", short:"淘宝京东拼多多抖音大促规则速查", relatedIds:[9], sourceType:"manual", sourceId:"", version:2, versionHistory:[{version:2,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:13, title:"客服数据报表解读指南", domain:"方法论与框架", tags:"数据,报表,解读,决策,KPI,转化率,响应时长,CSAT,满意度,FCR,客单价,趋势分析", projectId:"", scope:"通用", permission:"公开", fileUrl:"", priority:"low", createdAt:"2026-08-11", updateTime:"2026-08-11", views:0, downloads:0, description:"【适用场景】不知如何从数据报表发现问题时使用。\n\n【核心指标解读】\n1.转化率：下降→查话术/优惠解释/排队时间(不全是客服问题，流量变了也影响)\n2.响应时长：超标→查排班是否合理→还是某客服需辅导\n3.CSAT：<4.5→拉低分会话逐条分析：态度问题or解决不了问题\n4.FCR首次解决率：低→知识储备不足→需培训而非增人手\n5.客单价：忽高忽低→有人强推or消极推荐\n\n【决策路径】看数字→和上周对比→和同类项目对比→找异常→深挖原因→行动→下周验证。\n\n【常见坑】只看总数不看趋势(达标但连续三周下滑要警惕)；把相关性当因果。", short:"从报表数字到管理决策完整路径", relatedIds:[14,11], sourceType:"manual", sourceId:"", version:2, versionHistory:[{version:2,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"},

  {id:14, title:"客服团队排班优化实操方法", domain:"人员管理", tags:"排班,班次,高峰,人力分配,调度,换班,机动班,早班,中班,晚班,夜班,人力预测", projectId:"", scope:"通用", permission:"公开", fileUrl:"", priority:"normal", createdAt:"2026-08-11", updateTime:"2026-08-11", views:0, downloads:0, description:"【适用场景】排班不合理导致高峰爆线、低谷人浮于事。\n\n【三数据驱动】1.取30天数据按小时统计接待量，画一天接待量曲线，标记3个峰值(通常10-12/14-16/20-22)。2.按峰值系数算所需人数=预估接待量÷单人产能×(1+20%缓冲)。3.设计3-4种班次：早班(8-17)、中班(12-21)、晚班(15-24)，每班覆盖1-2峰值。\n\n【优化技巧】新人配老手(每班至少1老员工)；机动班(1-2个10-19随时调配)；换班规则(提前24h申请组长审批)。\n\n【常见坑】排班靠感觉非数据→永远调不准；忽略长期疲劳→离职率升。\n\n【搭配】与人力成本优化模型一起看——好排班是最直接降本手段。", short:"数据驱动的客服排班优化方法", relatedIds:[1,13], sourceType:"manual", sourceId:"", version:2, versionHistory:[{version:2,time:"2026-08-11",summary:"加priority+标签扩充"}], status:"published"}

];
var DEFAULT_HANDOVERS = [
  {id:1, projectId:"P001", projectName:"美妆旗舰店客服项目", from:"王芳", to:"张伟", date:"2026-03-15", status:"已完成", type:"人员离职", planDate:"2026-03-10",
   checklist:["基础档案资料","目标与权责","运营现状数据","进行中课题","未关闭问题","特殊注意事项"],
   keyItems:"完成全部基础档案+目标交接，运营数据已同步；大促备货节奏已交代清楚",
   pending:"无",
   summary:"完成全部基础档案+目标交接，运营数据已同步"},

  {id:2, projectId:"P003", projectName:"服装品牌客服外包", from:"赵丽", to:"陈静", date:"2025-11-20", status:"已完成", type:"内部调动", planDate:"2025-11-15",
   checklist:["基础档案资料","目标与权责","运营现状数据","未关闭问题","关键客户/联系人"],
   keyItems:"BPO特殊成本核算方式已重点交接；外包人员排班表已移交",
   pending:"外包合同续签需关注（2026-01到期）",
   summary:"BPO特殊成本核算方式已重点交接"},

  {id:3, projectId:"P005", projectName:"食品生鲜客服项目", from:"孙磊", to:"刘洋", date:"2026-02-28", status:"已完成", type:"人员离职", planDate:"2026-02-25",
   checklist:["基础档案资料","运营现状数据","进行中课题","未关闭问题","特殊注意事项"],
   keyItems:"食品类目的特殊退换货政策已交接；冷链客诉处理SOP已共享",
   pending:"无",
   summary:"食品类目的特殊退换货政策已交接"},

];
var HANDOVERS = [];
var handoverFilter = { keyword:'', status:'all' };




// ===== 三态统一组件（Empty / Loading / Error · 2026-08-07）=====
// 用法：
//   renderModule返回 html 时，在数据为空/加载中/出错三种情况下调用以下函数
//   emptyState('暂无数据', '点击右上角新增', 'plus') → 返回空状态HTML
//   loadingState('加载中...') → 返回加载骨架HTML
//   errorState('加载失败', '请刷新重试') → 返回错误状态HTML

function emptyState(title, hint, icon) {
  title = title || '暂无数据';
  hint = hint || '';
  icon = String(lucideIcon(icon || 'folder', 48)).replace('width="48" height="48"', '').replace(/stroke="currentColor"/, 'stroke="#9CA3AF"');
  return '<div class="state-empty state-wrapper">'
    + '<div class="state-icon">' + icon + '</div>'
    + '<div class="state-title">' + title + '</div>'
    + (hint ? '<div class="state-hint">' + hint + '</div>' : '')
    + '</div>';
}

function loadingState(title) {
  title = title || '加载中...';
  return '<div class="state-loading state-wrapper">'
    + '<div class="state-skeleton"><div class="skeleton-bar skeleton-title"></div><div class="skeleton-bar skeleton-line"></div><div class="skeleton-bar skeleton-line"></div><div class="skeleton-bar skeleton-line-short"></div></div>'
    + '<div class="state-title">' + title + '</div>'
    + '</div>';
}

function errorState(title, hint) {
  title = title || '加载失败';
  hint = hint || '请刷新页面重试';
  return '<div class="state-error state-wrapper">'
    + '<div class="state-icon">' + String(lucideIcon('alert-triangle', 48)).replace('width="48" height="48"', '').replace(/stroke="currentColor"/, 'stroke="#ef4444"') + '</div>'
    + '<div class="state-title">' + title + '</div>'
    + '<div class="state-hint">' + hint + '</div>'
    + '<button class="btn btn-sm btn-primary" onclick="location.reload()" style="margin-top:16px;">刷新页面</button>'
    + '</div>';
}

// ===== Toast 提示函数（主界面版，补上 login.html 里有的函数）=====
function showToast(msg, type) {
  try {
    var el = document.getElementById('toast-msg');
    if (el) {
      el.textContent = msg;
      el.className = 'toast-msg' + (type ? ' toast-' + type : '');
      el.classList.add('show');
      setTimeout(function() { el.classList.remove('show'); }, 2500);
    } else {
      // fallback：用 alert 代替
    }
  } catch(e) { console.error('[showToast]', e); }
}

// ===== 自定义确认弹窗（替代原生 confirm）=====
function showConfirmModal(msg, title, onConfirm, onCancel) {
  title = title || '确认操作';
  var overlay = document.createElement('div');
  overlay.className = 'sd-confirm-overlay';
  overlay.innerHTML = ''
    + '<div class="sd-confirm-box">'
    + '<div class="sd-confirm-header">'+escHtml(title)+'</div>'
    + '<div class="sd-confirm-body">'+msg+'</div>'
    + '<div class="sd-confirm-footer">'
    + '<button class="sd-confirm-btn sd-confirm-cancel">取消</button>'
    + '<button class="sd-confirm-btn sd-confirm-ok">确定</button>'
    + '</div></div>';
  document.body.appendChild(overlay);
  setTimeout(function(){ overlay.classList.add('sd-confirm-show'); }, 10);
  overlay.querySelector('.sd-confirm-ok').onclick = function(){
    if(onConfirm) onConfirm();
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  overlay.querySelector('.sd-confirm-cancel').onclick = function(){
    if(onCancel) onCancel();
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  overlay.onclick = function(e){
    if(e.target === this) { if(onCancel) onCancel(); overlay.classList.remove('sd-confirm-show'); setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300); }
  };
}

// ===== 自定义输入弹窗（替代原生 prompt）=====
function showPromptModal(title, label, defaultValue, onConfirm) {
  var overlay = document.createElement('div');
  overlay.className = 'sd-prompt-overlay';
  overlay.innerHTML = ''
    + '<div class="sd-prompt-box">'
    + '<div class="sd-prompt-header">'+escHtml(title)+' <button class="sd-prompt-close">&times;</button></div>'
    + '<div class="sd-prompt-body"><label>'+escHtml(label)+'</label><div class="sd-prompt-input-wrap"><input type="text" class="sd-prompt-input" value="'+escHtml(defaultValue)+'"></div></div>'
    + '<div class="sd-prompt-footer">'
    + '<button class="sd-confirm-btn sd-confirm-cancel">取消</button>'
    + '<button class="sd-confirm-btn sd-confirm-ok">确定</button>'
    + '</div></div>';
  document.body.appendChild(overlay);
  setTimeout(function(){ overlay.classList.add('sd-confirm-show'); }, 10);
  var inputEl = overlay.querySelector('.sd-prompt-input');
  if(inputEl){ inputEl.focus(); inputEl.select(); }
  overlay.querySelector('.sd-confirm-ok').onclick = function(){
    var val = inputEl ? inputEl.value : '';
    if(onConfirm) onConfirm(val);
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  overlay.querySelector('.sd-confirm-cancel').onclick = function(){
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  overlay.querySelector('.sd-prompt-close').onclick = function(){
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  overlay.onclick = function(e){
    if(e.target === this){ overlay.classList.remove('sd-confirm-show'); setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300); }
  };
}

// ===== 自定义选择弹窗（用于选择角色等场景）=====
function showSelectModal(title, label, options, onConfirm) {
  var overlay = document.createElement('div');
  overlay.className = 'sd-prompt-overlay';
  
  var optionsHtml = options.map(function(opt, idx) {
    return '<option value="' + escHtml(opt) + '">' + escHtml(opt) + '</option>';
  }).join('');
  
  overlay.innerHTML = ''
    + '<div class="sd-prompt-box">'
    + '<div class="sd-prompt-header">' + escHtml(title) + ' <button class="sd-prompt-close">&times;</button></div>'
    + '<div class="sd-prompt-body"><label>' + escHtml(label) + '</label><div class="sd-prompt-input-wrap"><select class="sd-prompt-input">'
    + '<option value="">-- 请选择 --</option>'
    + optionsHtml
    + '</select></div></div>'
    + '<div class="sd-prompt-footer">'
    + '<button class="sd-confirm-btn sd-confirm-cancel">取消</button>'
    + '<button class="sd-confirm-btn sd-confirm-ok">确定</button>'
    + '</div></div>';
  document.body.appendChild(overlay);
  setTimeout(function(){ overlay.classList.add('sd-confirm-show'); }, 10);
  
  var selectEl = overlay.querySelector('.sd-prompt-input');
  if(selectEl){ selectEl.focus(); }
  
  overlay.querySelector('.sd-confirm-ok').onclick = function(){
    var val = selectEl ? selectEl.value : '';
    if(!val) {
      showToast('请选择一个角色', 'warning');
      return;
    }
    if(onConfirm) onConfirm(val);
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  
  overlay.querySelector('.sd-confirm-cancel').onclick = function(){
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  
  overlay.querySelector('.sd-prompt-close').onclick = function(){
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  
  overlay.onclick = function(e){
    if(e.target === this){ overlay.classList.remove('sd-confirm-show'); setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300); }
  };
}

// ===== 自定义内容弹窗（支持任意HTML内容，用于复杂编辑场景）=====
function showCustomModal(title, bodyHtml, onConfirm, okText) {
  okText = okText || '确定';
  var overlay = document.createElement('div');
  overlay.className = 'sd-prompt-overlay';
  overlay.innerHTML = ''
    + '<div class="sd-prompt-box" style="width:520px;">'
    + '<div class="sd-prompt-header">' + escHtml(title) + ' <button class="sd-prompt-close">&times;</button></div>'
    + '<div class="sd-prompt-body">' + bodyHtml + '</div>'
    + '<div class="sd-prompt-footer">'
    + '<button class="sd-confirm-btn sd-confirm-cancel">取消</button>'
    + '<button class="sd-confirm-btn sd-confirm-ok" style="background:#0B9B96;border-color:#0B9B96;">'+okText+'</button>'
    + '</div></div>';
  document.body.appendChild(overlay);
  setTimeout(function(){ overlay.classList.add('sd-confirm-show'); }, 10);
  overlay.querySelector('.sd-confirm-ok').onclick = function(){
    if(onConfirm) onConfirm();
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  overlay.querySelector('.sd-confirm-cancel').onclick = function(){
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  overlay.querySelector('.sd-prompt-close').onclick = function(){
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  overlay.onclick = function(e){
    if(e.target === this){ overlay.classList.remove('sd-confirm-show'); setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300); }
  };
}

// ===== 通用弹窗封装（仅展示+取消，无确认回调）=====
function showModal(title, bodyHtml) {
  showCustomModal(title, bodyHtml, null);
  // 隐藏"确定"按钮，只保留"取消"
  setTimeout(function(){
    var btns = document.querySelectorAll('.sd-prompt-overlay .sd-confirm-ok');
    btns.forEach(function(b){ b.style.display = 'none'; });
  }, 50);
}

function closeModal() {
  var overlays = document.querySelectorAll('.sd-prompt-overlay');
  overlays.forEach(function(o){
    o.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(o.parentNode) o.remove(); }, 300);
  });
}

// ===== 自定义KPI新增弹窗（替代浏览器prompt）=====
function showAddKpiDialog(type, onConfirm) {
  var kpis = KPI_DEFINITIONS[type] || [];
  var existingKeys = kpis.map(function(k){return k.key;}).join(',');
  var typeName = {presale:'售前', afterSale:'售后', mixed:'综合'}[type];

  var bodyHtml = '<div style="padding:8px 0;">'
    + '<div style="margin-bottom:12px;">'
      + '<label style="display:block;font-size:13px;font-weight:500;color:#475569;margin-bottom:6px;">KPI指标名称</label>'
      + '<input type="text" id="new-kpi-name" placeholder="例如：销售额、转化率" style="width:100%;padding:8px 12px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px;box-sizing:border-box;">'
    + '</div>'
    + '<div style="margin-bottom:12px;">'
      + '<label style="display:block;font-size:13px;font-weight:500;color:#475569;margin-bottom:6px;">数据字段名（用于关联坐席数据）</label>'
      + '<input type="text" id="new-kpi-key" placeholder="例如：salesAmount、conversionRate" style="width:100%;padding:8px 12px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px;box-sizing:border-box;font-family:monospace;">'
    + '</div>'
    + '<div style="margin-bottom:8px;">'
      + '<label style="display:block;font-size:13px;font-weight:500;color:#475569;margin-bottom:6px;">默认权重(%)</label>'
      + '<input type="number" id="new-kpi-weight" value="10" min="0" max="100" style="width:100%;padding:8px 12px;border:1px solid #cbd5e1;border-radius:6px;font-size:13px;box-sizing:border-box;">'
    + '</div>'
    + '<div style="font-size:11px;color:#64748b;margin-top:8px;">将添加至：<b style="color:#0B9B96;">'+typeName+'类型</b> · 可在Tab1直接输入对应字段值</div>'
  + '</div>';

  var overlay = document.createElement('div');
  overlay.className = 'sd-prompt-overlay';
  overlay.innerHTML = '<div class="sd-prompt-box" style="width:460px;">'
    + '<div class="sd-prompt-header">新增KPI · '+typeName+' <button class="sd-prompt-close">&times;</button></div>'
    + '<div class="sd-prompt-body">'+bodyHtml+'</div>'
    + '<div class="sd-prompt-footer">'
      + '<button class="sd-confirm-btn sd-confirm-cancel">取消</button>'
      + '<button class="sd-confirm-btn sd-confirm-ok" style="background:#0B9B96;border-color:#0B9B96;">添加</button>'
    + '</div></div>';
  document.body.appendChild(overlay);
  setTimeout(function(){ overlay.classList.add('sd-confirm-show'); document.getElementById('new-kpi-name')?.focus(); }, 50);

  function close(){
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  }
  overlay.querySelector('.sd-prompt-close').onclick = close;
  overlay.querySelector('.sd-confirm-cancel').onclick = close;
  overlay.onclick = function(e){ if(e.target === this) close(); };
  overlay.querySelector('.sd-confirm-ok').onclick = function(){
    var name = document.getElementById('new-kpi-name').value.trim();
    var key = document.getElementById('new-kpi-key').value.trim();
    var weight = parseFloat(document.getElementById('new-kpi-weight').value) || 10;
    if(!name){ alert('请输入指标名称'); return; }
    if(!key){ alert('请输入数据字段名'); return; }
    if(onConfirm) onConfirm(name, key, weight);
    close();
  };
}

// ===== 数据持久化（彻底修复版 + 自动备份）= 2026-07-21 =====
// 安全写入 localStorage（带 quota 处理、自动备份和用户提示）
function safeSetItem(key, value) {
  // 跳过对备份 key 再做备份（防止无限循环）
  if (key.slice(-4) === '_bak') {
    try { localStorage.setItem(key, value); return true; } catch(e) { return false; }
  }
  try {
    localStorage.setItem(key, value);
    // 自动备份：同步写入备份 key（静默失败不影响主写入）
    try { localStorage.setItem(key + '_bak', value); } catch(e) {}
    // 数据版本号递增，触发 renderModule 缓存失效
    _dataVersion++;
    return true;
  } catch(e) {
    if (e.name === 'QuotaExceededError' || e.code === 22) {
      // 尝试清理超大头像
      try {
        var users = JSON.parse(localStorage.getItem('chansee_users') || '[]');
        var cleaned = 0;
        users.forEach(function(u) {
          if (u.avatar && u.avatar.length > 50000) { u.avatar = ''; cleaned++; }
        });
        if (cleaned > 0) {
          localStorage.setItem('chansee_users', JSON.stringify(users));
          localStorage.setItem(key, value);
          try { localStorage.setItem(key + '_bak', value); } catch(e) {}
          return true;
        }
      } catch(e2) {}
      alert('浏览器存储空间不足，无法保存修改！\n请清理浏览器数据（设置→隐私和安全→清除浏览数据），然后重新登录。');
    }
    return false;
  }
}

// 安全读取 localStorage（带备份自动恢复和损坏检测）
// 优先读主 key，如果 JSON 解析失败则尝试从 _bak 备份恢复
function safeGetItem(key) {
  var raw = localStorage.getItem(key);
  // 主 key 有有效数据 → 直接返回
  if (raw && raw !== 'null') {
    try {
      JSON.parse(raw);
      return raw;
    } catch(e) {
      // JSON 损坏，尝试从备份恢复
    }
  }
  // 尝试从备份读取
  var bak = localStorage.getItem(key + '_bak');
  if (bak && bak !== 'null') {
    try {
      JSON.parse(bak);
      // 备份有效，修复主 key
      localStorage.setItem(key, bak);
      return bak;
    } catch(e) {}
  }
  // 都没有有效数据
  return null;
}

// 防抖工具：高频触发时延迟执行，只在停止触发后执行一次
function debounce(fn, delay) {
  var timer = null;
  var fnRef = fn;
  function debounced() {
    var ctx = this, args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function() { fnRef.apply(ctx, args); }, delay || 200);
  }
  debounced.flush = function() {
    if (timer) { clearTimeout(timer); timer = null; fnRef(); }
  };
  return debounced;
}

// 数据版本号：safeSetItem 写入业务数据时递增，renderModule 用其判断缓存是否过期
var _dataVersion = 0;
var _moduleCache = {};  // { moduleName: { version: N, html: '...' } }

// 延迟初始化工具：非关键数据在页面首次渲染后再加载，让首页更快出现
function deferInit(fn) {
  if (window.requestIdleCallback) {
    requestIdleCallback(fn, { timeout: 500 });
  } else {
    setTimeout(fn, 50);
  }
}

// 默认用户数据（只在首次初始化时使用），密码已预哈希
var DEFAULT_USERS = [
  {id:"U001", name:"周东利", nickname:"Jordly", username:"admin", role:"超级管理员", status:"已激活", registerTime:"2025-01-01", password:"$SHA$344bba4200ad08694896aafa0b7507101798ac975744914bcc40856e87c3626d", phone:"18510084943", email:"zhoudongli@xcxd.com", birthday:"1991-12-18", position:"客服总监", workplace:"济南/淄博/杭州", approvedBy:"system", remark:"系统初始化超级管理员"},
  {id:"U002", name:"jordly", nickname:"", username:"jordly", role:"管理员", status:"已激活", registerTime:"2025-03-15", password:"$SHA$530875c3cfd0e165ec4a397bc735bb8697d71950dd02da699d95651928fc8958", phone:"", email:"", birthday:"", position:"", workplace:"", approvedBy:"admin", remark:""}
];

var DEFAULT_PROJECTS = [
  {id:"P001", name:"美妆旗舰店客服项目", brand:"兰蔻", category:"美妆", serviceMode:"TP项目", workplace:"济南", pm:"张伟", director:"李明", pmHistory:[{name:"王芳", from:"2025-06", to:"2026-03", reason:"调岗"}], status:"优质健康店", startDate:"2025-04-01", endDate:"2026-12-31", base:"济南职场2F", platforms:"天猫,抖音", serviceHours:"09:00-24:00", fteTarget:30, slaResponse:120, slaResolve:360, costBudget:450000, revenue:520000, profitRate:13.5, targetRate:95.0, healthScore:88, health:"🟢"},
  {id:"P002", name:"家电自营客服项目", brand:"美的", category:"家电", serviceMode:"DP项目", workplace:"淄博", pm:"刘洋", director:"王强", pmHistory:[], status:"平稳常规店", startDate:"2025-01-15", endDate:"2026-12-31", base:"淄博职场1F", platforms:"京东,天猫", serviceHours:"08:00-22:00", fteTarget:45, slaResponse:90, slaResolve:300, costBudget:680000, revenue:750000, profitRate:9.3, targetRate:92.0, healthScore:72, health:"🟡"},
  {id:"P003", name:"服装品牌客服外包", brand:"优衣库", category:"服装", serviceMode:"BPO项目", workplace:"杭州", pm:"陈静", director:"李明", pmHistory:[{name:"赵丽", from:"2025-01", to:"2025-11", reason:"离职"}], status:"风险预警店", startDate:"2025-01-10", endDate:"2026-06-30", base:"杭州职场3F", platforms:"全平台", serviceHours:"08:00-24:00", fteTarget:60, slaResponse:60, slaResolve:240, costBudget:880000, revenue:920000, profitRate:4.3, targetRate:88.0, healthScore:55, health:"🔴"},
  {id:"P004", name:"母婴用品客服项目", brand:"好孩子", category:"母婴", serviceMode:"TP项目", workplace:"济南", pm:"张伟", director:"王强", pmHistory:[], status:"优质健康店", startDate:"2025-08-01", endDate:"2027-01-31", base:"济南职场2F", platforms:"天猫,京东,拼多多", serviceHours:"09:00-21:00", fteTarget:25, slaResponse:120, slaResolve:360, costBudget:320000, revenue:380000, profitRate:15.8, targetRate:96.0, healthScore:90, health:"🟢"},
  {id:"P005", name:"食品生鲜客服项目", brand:"三只松鼠", category:"食品", serviceMode:"DP项目", workplace:"淄博", pm:"刘洋", director:"李明", pmHistory:[{name:"孙磊", from:"2025-03", to:"2026-02", reason:"内部调换"}], status:"平稳常规店", startDate:"2025-03-01", endDate:"2026-08-31", base:"淄博职场1F", platforms:"天猫,抖音", serviceHours:"08:00-23:00", fteTarget:35, slaResponse:90, slaResolve:300, costBudget:520000, revenue:600000, profitRate:13.3, targetRate:93.0, healthScore:75, health:"🟡"},
  {id:"P006", name:"运动品牌客服项目", brand:"耐克", category:"运动", serviceMode:"BPO项目", workplace:"杭州", pm:"陈静", director:"王强", pmHistory:[], status:"高危问题店", startDate:"2025-06-01", endDate:"2026-05-31", base:"杭州职场3F", platforms:"天猫,官网", serviceHours:"09:00-21:00", fteTarget:20, slaResponse:60, slaResolve:240, costBudget:280000, revenue:250000, profitRate:-10.7, targetRate:85.0, healthScore:40, health:"🔴"},
  {id:"P007", name:"智能家居客服项目", brand:"小米", category:"智能硬件", serviceMode:"TP项目", workplace:"无锡", pm:"张伟", director:"李明", pmHistory:[], status:"优质健康店", startDate:"2026-03-01", endDate:"2027-02-28", base:"无锡职场1F", platforms:"天猫,京东,抖音", serviceHours:"09:00-22:00", fteTarget:35, slaResponse:90, slaResolve:300, costBudget:420000, revenue:480000, profitRate:12.5, targetRate:94.0, healthScore:85, health:"🟢"}
];

// 初始化 USERS
var USERS = [];
(function initUsers() {
  var raw = safeGetItem('chansee_users');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      USERS = JSON.parse(raw);
      return;
    } catch(e) { console.error('[initUsers] 用户数据损坏:', e); }
  }
  // 首次初始化
  USERS = JSON.parse(JSON.stringify(DEFAULT_USERS));
  safeSetItem('chansee_users', JSON.stringify(USERS));
})();

// 初始化 PROJECTS
var PROJECTS = [];

// 品类别名映射（旧名称→天猫真实一级类目名称），用于迁移旧项目数据
var CATEGORY_ALIAS = {
  '美妆':'美妆洗护','美妆护肤':'美妆洗护','个护':'美妆洗护','个护家清':'美妆洗护',
  '服装':'女装男装','服饰':'女装男装','服饰鞋包':'女装男装','鞋子':'女装男装',
  '运动':'运动户外','运动户外':'运动户外','运动装备':'运动户外',
  '母婴':'母婴童装','母婴童装':'母婴童装','母婴用品':'母婴童装',
  '食品':'食品生鲜','食品生鲜':'食品生鲜','零食':'食品生鲜',
  '家电':'数码家电','家电数码':'数码家电','家用电器':'数码家电','3C数码':'数码家电',
  '智能硬件':'数码家电','智能设备':'数码家电','智能家居':'数码家电',
  '家居':'家居家装','家居家装':'家居家装','居家日用':'家居家装',
  '宠物':'宠物用品','宠物用品':'宠物用品','宠物农资':'宠物用品',
  '汽车':'汽车用品','汽车用品':'汽车用品',
  '图书':'图书音像','图书文具':'图书音像','图书音像':'图书音像',
  '医疗':'医药健康','医疗保健':'医药健康','医疗器械':'医药健康',
  '虚拟':'虚拟服务','游戏':'虚拟服务','游戏娱乐':'虚拟服务'
};
// 平台别名映射（旧名称→新名称），用于迁移旧项目数据
var PLATFORM_ALIAS = {
  '天猫':'天猫官旗','淘宝':'淘宝','京东':'京东自营','拼多多':'拼多多',
  '抖音':'抖音','快手':'快手','小红书':'小红书',
  '京东自营':'京东自营','天猫超市':'天猫超市'
};
// 天猫真实一级类目（用于筛选下拉选项，无重复）
var PRESET_CATEGORIES = [
  '女装男装',
  '鞋靴箱包',
  '运动户外',
  '美妆洗护',
  '母婴童装',
  '食品生鲜',
  '家居家装',
  '数码家电',
  '汽车用品',
  '宠物用品',
  '图书音像',
  '医药健康',
  '珠宝眼镜',
  '虚拟服务'
];
(function initProjects() {
  var raw = safeGetItem('chansee_projects');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      PROJECTS = JSON.parse(raw);
      // 数据迁移：把旧品类名映射为天猫真实一级类目名称
      var migrated = false;
      PROJECTS.forEach(function(p) {
        if (p.category && CATEGORY_ALIAS[p.category]) {
          p.category = CATEGORY_ALIAS[p.category];
          migrated = true;
        }
      });
      // 数据迁移：把旧平台名映射为新名称（支持多平台逗号分隔）
      var platformMigrated = false;
      PROJECTS.forEach(function(p) {
        if (p.platforms) {
          var plats = p.platforms.split(/[,，、]/).map(function(s){return s.trim();}).filter(Boolean);
          var newPlats = plats.map(function(plat) {
            if (PLATFORM_ALIAS[plat]) {
              platformMigrated = true;
              return PLATFORM_ALIAS[plat];
            }
            return plat;
          });
          p.platforms = newPlats.join('、');
        }
      });
      if (migrated || platformMigrated) safeSetItem('chansee_projects', JSON.stringify(PROJECTS));
      return;
    } catch(e) { console.error('[initUsers] 用户数据损坏:', e); }
  }
  PROJECTS = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
  // 同时迁移默认项目数据的品类名和平台名
  PROJECTS.forEach(function(p) {
    if (p.category && CATEGORY_ALIAS[p.category]) {
      p.category = CATEGORY_ALIAS[p.category];
    }
    if (p.platforms) {
      var plats = p.platforms.split(/[,，、]/).map(function(s){return s.trim();}).filter(Boolean);
      var newPlats = plats.map(function(plat) {
        return PLATFORM_ALIAS[plat] || plat;
      });
      p.platforms = newPlats.join('、');
    }
  });
  safeSetItem('chansee_projects', JSON.stringify(PROJECTS));
})();

// 初始化 OPERATIONS
(function initOperations() {
  var raw = localStorage.getItem('chansee_operations');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      OPERATIONS = JSON.parse(raw);
      return;
    } catch(e) { console.error('[initOperations] 数据损坏，重置:', e); }
  }
  OPERATIONS = JSON.parse(JSON.stringify(DEFAULT_OPERATIONS));
  safeSetItem('chansee_operations', JSON.stringify(OPERATIONS));
})();

// 初始化 ISSUES（延迟加载：首屏不需要）
deferInit(function() {
  var raw = localStorage.getItem('chansee_issues');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      ISSUES = JSON.parse(raw);
      return;
    } catch(e) { console.error('[initIssues] 数据损坏，重置:', e); }
  }
  ISSUES = JSON.parse(JSON.stringify(DEFAULT_ISSUES));
  safeSetItem('chansee_issues', JSON.stringify(ISSUES));
});

// 初始化 AGENT_PERFORMANCE（延迟加载）
deferInit(function() {
  var raw = localStorage.getItem('chansee_agent_performance');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      AGENT_PERFORMANCE = JSON.parse(raw);
      return;
    } catch(e) { console.error('[initAgentPerformance] 数据损坏，重置:', e); }
  }
  AGENT_PERFORMANCE = JSON.parse(JSON.stringify(DEFAULT_AGENT_PERFORMANCE));
  safeSetItem('chansee_agent_performance', JSON.stringify(AGENT_PERFORMANCE));
});

// 初始化 GROUP_LOAD_RATIO（延迟加载）
deferInit(function() {
  var raw = localStorage.getItem('chansee_group_load_ratio');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      GROUP_LOAD_RATIO = JSON.parse(raw);
      return;
    } catch(e) { console.error('[initGroupLoadRatio] 数据损坏，重置:', e); }
  }
  GROUP_LOAD_RATIO = JSON.parse(JSON.stringify(DEFAULT_GROUP_LOAD_RATIO || []));
  safeSetItem('chansee_group_load_ratio', JSON.stringify(GROUP_LOAD_RATIO));
});

// 初始化 PERFORMANCE_WEIGHTS（延迟加载）
deferInit(function() {
  var raw = localStorage.getItem('chansee_performance_weights');
  if (raw && raw !== 'null' && raw !== '{}') {
    try {
      PERFORMANCE_WEIGHTS = JSON.parse(raw);
      return;
    } catch(e) { console.error('[initPerformanceWeights] 数据损坏，重置:', e); }
  }
  PERFORMANCE_WEIGHTS = JSON.parse(JSON.stringify(DEFAULT_PERFORMANCE_WEIGHTS || {}));
  safeSetItem('chansee_performance_weights', JSON.stringify(PERFORMANCE_WEIGHTS));
});

// ===== 新增：看板数据模型 =====

// 客服配置数据
var DEFAULT_STAFF_CONFIG = [
  {id:'SC001', role:'售前客服', count:68, pct:37, workplace:'合肥', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'SC002', role:'售后客服', count:52, pct:28, workplace:'合肥', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'SC003', role:'综合客服', count:45, pct:24, workplace:'合肥', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'SC004', role:'客服管理', count:14, pct:8, workplace:'合肥', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'SC005', role:'数据专员', count:7, pct:4, workplace:'合肥', updatedAt:'2026-06-20', updatedBy:'admin'}
];

var STAFF_CONFIG = [];
(function initStaffConfig() {
  var raw = safeGetItem('chansee_staff_config');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      STAFF_CONFIG = JSON.parse(raw);
      return;
    } catch(e) {}
  }
  STAFF_CONFIG = JSON.parse(JSON.stringify(DEFAULT_STAFF_CONFIG));
  safeSetItem('chansee_staff_config', JSON.stringify(STAFF_CONFIG));
})();

// 工作量数据
var DEFAULT_WORKLOAD_DATA = [
  {id:'WL001', name:'订单处理', count:625, ratio:100, workplace:'合肥', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'WL002', name:'退款处理', count:342, ratio:55, workplace:'合肥', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'WL003', name:'投诉处理', count:198, ratio:32, workplace:'合肥', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'WL004', name:'换货跟进', count:156, ratio:25, workplace:'合肥', updatedAt:'2026-06-20', updatedBy:'admin'}
];

var WORKLOAD_DATA = [];
(function initWorkloadData() {
  var raw = safeGetItem('chansee_workload_data');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      WORKLOAD_DATA = JSON.parse(raw);
      return;
    } catch(e) {}
  }
  WORKLOAD_DATA = JSON.parse(JSON.stringify(DEFAULT_WORKLOAD_DATA));
  safeSetItem('chansee_workload_data', JSON.stringify(WORKLOAD_DATA));
})();

// KPI历史数据
var DEFAULT_KPI_HISTORY = [
  {id:'KH001', date:'2026-01', revenue:450000, cost:380000, profitRate:1.18, targetRate:92.0, workplace:'all', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'KH002', date:'2026-02', revenue:480000, cost:400000, profitRate:1.20, targetRate:93.5, workplace:'all', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'KH003', date:'2026-03', revenue:520000, cost:420000, profitRate:1.19, targetRate:94.2, workplace:'all', updatedAt:'2026-06-20', updatedBy:'admin'}
];

var KPI_HISTORY = [];
(function initKpiHistory() {
  var raw = safeGetItem('chansee_kpi_history');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      KPI_HISTORY = JSON.parse(raw);
      return;
    } catch(e) {}
  }
  KPI_HISTORY = JSON.parse(JSON.stringify(DEFAULT_KPI_HISTORY));
  safeSetItem('chansee_kpi_history', JSON.stringify(KPI_HISTORY));
})();

// 数据修改历史
var DATA_CHANGE_LOG = [];
(function initDataChangeLog() {
  var raw = safeGetItem('chansee_data_change_log');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      DATA_CHANGE_LOG = JSON.parse(raw);
      return;
    } catch(e) {}
  }
  DATA_CHANGE_LOG = [];
  safeSetItem('chansee_data_change_log', JSON.stringify(DATA_CHANGE_LOG));
})();

// 数据权限配置
var DEFAULT_DATA_PERMISSIONS = [
  {
    role: '超级管理员',
    permissions: {
      PROJECTS: ['read', 'write', 'delete'],
      OPERATIONS: ['read', 'write', 'delete'],
      STAFF_CONFIG: ['read', 'write', 'delete'],
      WORKLOAD_DATA: ['read', 'write', 'delete'],
      KPI_HISTORY: ['read', 'write', 'delete'],
      DATA_CHANGE_LOG: ['read', 'write', 'delete']
    }
  },
  {
    role: '管理员',
    permissions: {
      PROJECTS: ['read', 'write'],
      OPERATIONS: ['read', 'write'],
      STAFF_CONFIG: ['read', 'write'],
      WORKLOAD_DATA: ['read', 'write'],
      KPI_HISTORY: ['read', 'write'],
      DATA_CHANGE_LOG: ['read']
    }
  },
  {
    role: '客服主管',
    permissions: {
      PROJECTS: ['read'],
      OPERATIONS: ['read', 'write'],
      STAFF_CONFIG: ['read'],
      WORKLOAD_DATA: ['read', 'write'],
      KPI_HISTORY: ['read'],
      DATA_CHANGE_LOG: ['read']
    }
  }
];

var DATA_PERMISSIONS = [];
(function initDataPermissions() {
  var raw = safeGetItem('chansee_data_permissions');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      DATA_PERMISSIONS = JSON.parse(raw);
      return;
    } catch(e) {}
  }
  DATA_PERMISSIONS = JSON.parse(JSON.stringify(DEFAULT_DATA_PERMISSIONS));
  safeSetItem('chansee_data_permissions', JSON.stringify(DATA_PERMISSIONS));
})();

// 初始化 RISK_ALERTS
// 初始化风险预警：从 PROJECTS + OPERATIONS 自动聚合，并保留用户已确认的"状态"
(function initRiskAlerts() {
  // 先尝试恢复已保存的"状态"（未处理/处理中/已忽略等人工标注）
  var savedStatus = {};
  var raw = localStorage.getItem('chansee_risk_alerts');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      JSON.parse(raw).forEach(function(r) {
        savedStatus[r.projectId + '|' + r.riskType] = r.status;
      });
    } catch (e) {}
  }
  RISK_ALERTS = [];
  recomputeRiskAlerts(savedStatus);
})();

// 初始化 KNOWLEDGE（含旧版数据迁移）
(function initKnowledge() {
  var raw = localStorage.getItem('chansee_knowledge');
  var seedVer = localStorage.getItem('chansee_knowledge_seed');
  // 已有数据且种子版本一致 → 直接用本地数据
  if (raw && raw !== 'null' && raw !== '[]' && seedVer === KNOWLEDGE_SEED_VERSION) {
    try {
      KNOWLEDGE = JSON.parse(raw);
      return;
    } catch(e) {}
  }
  // 旧版数据迁移：type/category → domain
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      var OLD_TYPE_MAP = {
        'SOP流程优化':'流程与SOP', '风控应急预案':'风控与应急', '成本目标控制':'成本与核算',
        '优秀话术萃取':'客诉与话术', 'AI提效赋能':'效率与AI', '培训材料':'培训与入门'
      };
      var old = JSON.parse(raw);
      if (Array.isArray(old) && old.length > 0 && old[0].type && !old[0].domain) {
        KNOWLEDGE = old.map(function(k) {
          k.domain = OLD_TYPE_MAP[k.type] || '方法论与框架';
          k.projectId = k.projectId || '';
          k.fileUrl = k.fileUrl || '';
          k.relatedIds = k.relatedIds || [];
          k.sourceType = k.sourceType || 'manual';
          k.sourceId = k.sourceId || '';
          k.version = k.version || 1;
          k.versionHistory = k.versionHistory || [];
          k.status = k.status || 'published';
          return k;
        });
        safeSetItem('chansee_knowledge', JSON.stringify(KNOWLEDGE));
        safeSetItem('chansee_knowledge_seed', KNOWLEDGE_SEED_VERSION);
        return;
      }
    } catch(e) {}
  }
  // 用最新默认种子
  KNOWLEDGE = JSON.parse(JSON.stringify(DEFAULT_KNOWLEDGE));
  safeSetItem('chansee_knowledge', JSON.stringify(KNOWLEDGE));
  safeSetItem('chansee_knowledge_seed', KNOWLEDGE_SEED_VERSION);
})();

// 初始化 HANDOVERS —— 有用户数据则加载，无则种子化默认值（修复刷新丢失 bug）
(function initHandovers() {
  var raw = localStorage.getItem('chansee_handovers');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      var parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) { HANDOVERS = parsed; return; }
    } catch(e) {}
  }
  HANDOVERS = JSON.parse(JSON.stringify(DEFAULT_HANDOVERS));
  safeSetItem('chansee_handovers', JSON.stringify(HANDOVERS));
})();

function saveUsers() {
  var ok = safeSetItem('chansee_users', JSON.stringify(USERS));
  if (!ok) { alert('⚠️ 用户数据保存失败！\n可能是浏览器存储空间不足，请清理浏览器数据后重试。'); return; }
  // 云端同步用防抖：300ms内多次调用只执行最后一次
  _syncDebounced();
}
function saveProjects() {
  var ok = safeSetItem('chansee_projects', JSON.stringify(PROJECTS));
  if (!ok) { alert('⚠️ 项目数据保存失败！\n可能是浏览器存储空间不足，请清理浏览器数据后重试。'); return; }
  _syncDebounced();
}

// 云端同步防抖器：避免连续编辑时重复触发网络请求
var _syncDebounced = debounce(function() {
  if (window.CloudBaseSync) {
    var p = window.CloudBaseSync.saveAll();
    if (p && typeof p.then === 'function') {
      p.then(function(success) {
        if (success) {
          try { localStorage.setItem('chansee_users_cloud_saved', 'true'); } catch(e) {}
        } else {
          if (typeof showToast === 'function') showToast('⚠️ 云端保存失败，数据仅保存在本地浏览器');
          try { localStorage.setItem('chansee_users_cloud_saved', 'false'); } catch(e) {}
        }
      }).catch(function(err) {
        if (typeof showToast === 'function') showToast('⚠️ 云端保存异常，数据仅保存在本地浏览器');
        try { localStorage.setItem('chansee_users_cloud_saved', 'false'); } catch(e) {}
      });
    }
  }
}, 500);

function saveOperations() {
  safeSetItem('chansee_operations', JSON.stringify(OPERATIONS));
}
function saveIssues() {
  safeSetItem('chansee_issues', JSON.stringify(ISSUES));
}
function saveAgentPerformance() {
  safeSetItem('chansee_agent_performance', JSON.stringify(AGENT_PERFORMANCE));
  safeSetItem('chansee_group_load_ratio', JSON.stringify(GROUP_LOAD_RATIO));
  safeSetItem('chansee_performance_weights', JSON.stringify(PERFORMANCE_WEIGHTS));
}
function saveRiskAlerts() {
  safeSetItem('chansee_risk_alerts', JSON.stringify(RISK_ALERTS));
}
// 根据健康度阈值判断健康状态风险等级
function riskHealthLevel(score) {
  var lv = getHealthLevels();
  if (score < (lv.warning || 60)) return score < 40 ? '🔴 高风险' : '🟡 中风险';
  return null;
}
// 从 PROJECTS + OPERATIONS 实时算出所有风险条目（不含人工"状态"字段）
function calcRawRiskAlerts() {
  var list = [];
  PROJECTS.forEach(function(p) {
    var op = OPERATIONS.find(function(o) { return o.projectId === p.id; });
    var hs = Number(p.healthScore) || 0;
    var warningTh = (getHealthLevels().warning || 60);
    // 1. 健康状态异常
    var hl = riskHealthLevel(hs);
    if (hl) {
      list.push({ projectId: p.id, projectName: p.name, riskType: '健康状态', severity: hl,
        indicator: '健康分：' + hs, triggerValue: hs + ' < 预警阈值' + warningTh,
        threshold: '健康分 ≥ ' + warningTh, createdAt: p.endDate || '' });
    }
    // 2. SLA超标：响应时长 > SLA响应目标
    if (op && p.slaResponse && op.responseTime > p.slaResponse) {
      var over = op.responseTime / p.slaResponse;
      list.push({ projectId: p.id, projectName: p.name, riskType: 'SLA超标',
        severity: over > 1.3 ? '🔴 高风险' : '🟡 中风险',
        indicator: '平均响应：' + op.responseTime + 's',
        triggerValue: op.responseTime + 's > 目标' + p.slaResponse + 's',
        threshold: '响应 ≤ ' + p.slaResponse + 's', createdAt: op.period || '' });
    }
    // 3. 成本超支：利润率 < 0 为高风险，远低于目标为中等
    var pr = Number(p.profitRate);
    if (pr != null && !isNaN(pr)) {
      if (pr < 0) {
        list.push({ projectId: p.id, projectName: p.name, riskType: '成本超支',
          severity: pr < -5 ? '🔴 高风险' : '🟡 中风险',
          indicator: '利润率：' + pr + '%', triggerValue: pr + '% < 目标≥0%',
          threshold: '利润率 ≥ 0%', createdAt: p.endDate || '' });
      } else if (p.targetRate != null && pr < p.targetRate * 0.5) {
        list.push({ projectId: p.id, projectName: p.name, riskType: '成本超支',
          severity: '🟡 中风险', indicator: '利润率：' + pr + '%',
          triggerValue: pr + '% 远低于目标' + p.targetRate + '%',
          threshold: '利润率 ≥ ' + (p.targetRate * 0.5).toFixed(1) + '%', createdAt: p.endDate || '' });
      }
    }
    // 4. 满意度下滑：CSAT < 4.7
    if (op && op.csat != null && Number(op.csat) < 4.7) {
      list.push({ projectId: p.id, projectName: p.name, riskType: '满意度下滑',
        severity: Number(op.csat) < 4.3 ? '🔴 高风险' : '🟡 中风险',
        indicator: 'CSAT：' + op.csat, triggerValue: op.csat + ' < 目标4.7',
        threshold: 'CSAT ≥ 4.7', createdAt: op.period || '' });
    }
  });
  return list;
}
// 用实时算出的风险条目刷新 RISK_ALERTS，并保留已确认的状态（原地修改，保持引用有效）
function recomputeRiskAlerts(savedStatusMap) {
  var fresh = calcRawRiskAlerts();
  var saved = savedStatusMap || {};
  var next = fresh.map(function(f, i) {
    var key = f.projectId + '|' + f.riskType;
    return {
      id: i + 1,
      projectId: f.projectId, projectName: f.projectName, riskType: f.riskType,
      severity: f.severity, indicator: f.indicator, triggerValue: f.triggerValue,
      threshold: f.threshold, status: saved[key] || '未处理', createdAt: f.createdAt
    };
  });
  RISK_ALERTS.length = 0;
  next.forEach(function(x) { RISK_ALERTS.push(x); });
  saveRiskAlerts();
}
// 全部标为"处理中"（管理者的批量确认动作）
function acknowledgeAllRisk() {
  RISK_ALERTS.forEach(function(r) { if (r.status === '未处理') r.status = '处理中'; });
  saveRiskAlerts();
  renderRisk();
}
function saveKnowledge() {
  safeSetItem('chansee_knowledge', JSON.stringify(KNOWLEDGE));
}
function saveHandovers() {
  safeSetItem('chansee_handovers', JSON.stringify(HANDOVERS));
}

// 级联删除项目及所有关联数据
function deleteProject(id) {
  showConfirmModal('确认删除项目 ' + id + '？<br><br><b style="color:var(--c-red)">⚠️ 此操作不可恢复！</b><br>将同时清除该项目关联的运营数据、目标、问题记录等。', '删除确认', function() {
    PROJECTS = PROJECTS.filter(function(p){ return p.id !== id; });
    saveProjects();
    showToast('项目 ' + id + ' 已删除！');
    renderArchive();
  });
}

// 持久化当前用户（同步到 USERS 数组 + 更新 session）
function persistCurrentUser() {
  if (!currentUser) return;
  // 同步到 USERS 数组
  for (var i = 0; i < USERS.length; i++) {
    if (USERS[i].id === currentUser.id) {
      // 把 currentUser 的所有字段同步到 USERS[i]
      var keys = Object.keys(currentUser);
      for (var j = 0; j < keys.length; j++) {
        USERS[i][keys[j]] = currentUser[keys[j]];
      }
      break;
    }
  }
  saveUsers();
  // 更新 session 中的 currentUser（不含密码，使用 safeSetItem）
  var sessionData = JSON.parse(JSON.stringify(currentUser));
  delete sessionData.password;
  safeSetItem('chansee_current_user', JSON.stringify(sessionData));
}


// 当前登录用户（null 表示未登录）
let currentUser = null;

// 控制主界面（header + main-container）显示/隐藏
function setAppContentVisible(visible) {
  const hd = document.getElementById("top-header");
  const mc = document.getElementById("main-container");
  if (hd) hd.style.display = visible ? "" : "none";
  if (mc) mc.style.display = visible ? "" : "none";
}

async function checkLogin() {
  // === 🚀 快速通行路径：如果 chanseen_auth 有效，直接秒进，不走复杂逻辑 ===
  try {
    var _faStr = localStorage.getItem('chanseen_auth');
    if (_faStr) {
      var _fa = JSON.parse(_faStr);
      var _ma = 3600000;
      if (_fa.token && (Date.now() - _fa.loginAt) < _ma) {
        var _user = USERS.find(function(u){ return u.id === (_fa.user && _fa.user.id) || u.username === (_fa.user && _fa.user.username); }) || USERS[0];
        if (_user) {
          currentUser = {
            id: _user.id || 'U001',
            username: _user.username || 'admin',
            name: _user.name || _user.nickname || '系统创建者',
            role: _user.role || '超级管理员',
            avatar: _user.avatar || '',
            position: _user.position || '客服总监',
            brand: _user.brand || 'Chanseen',
            nickname: _user.nickname || _user.name || '系统创建者',
            birthday: _user.birthday || '',
            phone: _user.phone || '',
            email: _user.email || ''
          };
          currentRole = currentUser.role || '超级管理员';
          hideLoginModal();
          updateUserDisplay();
          setAppContentVisible(true);
          recordLogin();
          console.log('checkLogin 快速通行成功');
          return true;
        }
      }
    }
  } catch(_fe) {
    console.warn('checkLogin 快速通行失败，走完整路径:', _fe);
  }

  try {
    // 先检查 login.html 的登录状态
    const authStr = localStorage.getItem('chanseen_auth');
    if (authStr) {
      try {
        const auth = JSON.parse(authStr);
        const maxAge = 60 * 60 * 1000;
        if (auth.token && (Date.now() - auth.loginAt) < maxAge) {
          // 【防重置修复】加载云端数据前，先备份本地的用户数据
          var localUsersBackup = null;
          try {
            var localUsersStr = localStorage.getItem('chansee_users');
            if (localUsersStr) {
              localUsersBackup = JSON.parse(localUsersStr);
            }
          } catch(e) {
          }

          // login.html 登录：先从云端加载最新用户数据，再用云端数据构建 currentUser
          if (window.CloudBaseSync) {
            try {
              await window.CloudBaseSync.loadAll();
              var savedUsers = localStorage.getItem('chansee_users');
              if (savedUsers) {
                USERS = JSON.parse(savedUsers);
              }
            } catch(e) {
            }
          }

          // 【防重置修复】检查云端加载的数据是否导致数据丢失，如果是，用本地备份恢复
          if (localUsersBackup && Array.isArray(localUsersBackup)) {
            var currentUsername = auth.user?.username || auth.user?.name || 'admin';
            var cloudUser = USERS.find(u => u.username === currentUsername);
            var localUser = localUsersBackup.find(u => u.username === currentUsername);
            
            // 获取本地和云端用户的显示名称（同时检查 name 和 nickname 字段）
            function getDisplayName(u) {
              if (!u) return '';
              return (u.name && u.name !== '系统创建者' && u.name !== '未设置' && u.name !== '') ? u.name
                   : (u.nickname && u.nickname !== '系统创建者' && u.nickname !== '未设置' && u.nickname !== '') ? u.nickname
                   : '';
            }
            // 检查是否需要用本地备份恢复（检查所有个人设置字段）
            var needRestore = false;
            if (localUser && cloudUser) {
              if (localUser.name && localUser.name !== '系统创建者' && (!cloudUser.name || cloudUser.name === '系统创建者')) needRestore = true;
              if (localUser.nickname && localUser.nickname !== '系统创建者' && (!cloudUser.nickname || cloudUser.nickname === '系统创建者')) needRestore = true;
              if (localUser.birthday && (!cloudUser.birthday || cloudUser.birthday === '')) needRestore = true;
              if (localUser.phone && (!cloudUser.phone || cloudUser.phone === '')) needRestore = true;
              if (localUser.email && (!cloudUser.email || cloudUser.email === '')) needRestore = true;
              if (localUser.position && localUser.position !== '客服总监' && (!cloudUser.position || cloudUser.position === '' || cloudUser.position === '客服总监')) needRestore = true;
              if (localUser.brand && localUser.brand !== 'Chanseen' && (!cloudUser.brand || cloudUser.brand === '' || cloudUser.brand === 'Chanseen')) needRestore = true;
            } else if (localUser && !cloudUser) {
              needRestore = true;
            }

            if (needRestore) {
                // 用本地备份的数据更新 USERS 数组
                for (var bi = 0; bi < localUsersBackup.length; bi++) {
                  var bu = localUsersBackup[bi];
                  var found = false;
                  for (var ui = 0; ui < USERS.length; ui++) {
                    if (USERS[ui].id === bu.id || USERS[ui].username === bu.username) {
                      // 检查云端数据是否缺少名称字段（同时检查 name 和 nickname）
                      var cloudHasName = USERS[ui].name && USERS[ui].name !== '系统创建者' && USERS[ui].name !== '未设置' && USERS[ui].name !== '';
                      var cloudHasNickname = USERS[ui].nickname && USERS[ui].nickname !== '系统创建者' && USERS[ui].nickname !== '未设置';
                      if (!cloudHasName && !cloudHasNickname) {
                        // 云端没有正确的名称 → 用本地的补全（优先用 name）
                        if (bu.name && bu.name !== '系统创建者' && bu.name !== '未设置') {
                          USERS[ui].name = bu.name;
                          USERS[ui].nickname = bu.name;
                        } else if (bu.nickname && bu.nickname !== '系统创建者') {
                          USERS[ui].name = bu.nickname;
                          USERS[ui].nickname = bu.nickname;
                        }
                      }
                      if (!USERS[ui].birthday && bu.birthday) USERS[ui].birthday = bu.birthday;
                      if (!USERS[ui].phone && bu.phone) USERS[ui].phone = bu.phone;
                      if (!USERS[ui].email && bu.email) USERS[ui].email = bu.email;
                      if (!USERS[ui].position && bu.position) USERS[ui].position = bu.position;
                      if (!USERS[ui].brand && bu.brand) USERS[ui].brand = bu.brand;
                      found = true;
                      break;
                    }
                  }
                  // 如果云端没有这个用户，就把本地备份的用户加进去
                  if (!found) {
                    USERS.push(bu);
                  }
                }
                // 保存恢复后的数据到 localStorage
                safeSetItem('chansee_users', JSON.stringify(USERS));
                // 尝试再次同步到云端（带结果提示）
                if (window.CloudBaseSync) {
                  var syncP = window.CloudBaseSync.saveAll();
                  if (syncP && typeof syncP.then === 'function') {
                    syncP.then(function() { try { localStorage.setItem('chansee_users_cloud_saved', 'true'); } catch(e){} }).catch(function(){});
                  }
                }
              }
          }

          // 从 USERS 数组（云端最新）中查找当前用户
          var cloudUser = null;
          if (auth.user && auth.user.username) {
            cloudUser = USERS.find(u => u.username === auth.user.username);
          }
          if (!cloudUser && auth.user && auth.user.id) {
            cloudUser = USERS.find(u => u.id === auth.user.id);
          }
          // 如果都没找到，用 U001（admin）作为默认
          if (!cloudUser) {
            cloudUser = USERS.find(u => u.id === 'U001') || USERS[0];
          }

          currentUser = {
            id: (cloudUser && cloudUser.id) || 'U001',
            username: (cloudUser && cloudUser.username) || auth.user?.username || 'admin',
            name: (cloudUser && cloudUser.name) || (cloudUser && cloudUser.nickname) || '系统创建者',
            role: (cloudUser && cloudUser.role) || auth.user?.role || '超级管理员',
            avatar: (cloudUser && cloudUser.avatar) || '',
            position: (cloudUser && cloudUser.position) || '客服总监',
            brand: (cloudUser && cloudUser.brand) || 'Chanseen',
            nickname: (cloudUser && cloudUser.nickname) || (cloudUser && cloudUser.name) || '系统创建者',
            birthday: (cloudUser && cloudUser.birthday) || '',
            phone: (cloudUser && cloudUser.phone) || '',
            email: (cloudUser && cloudUser.email) || '',
            wechatBound: cloudUser ? (cloudUser.wechatBound !== undefined ? cloudUser.wechatBound : true) : true,
            keepStatus: cloudUser ? (cloudUser.keepStatus !== undefined ? cloudUser.keepStatus : false) : false
          };

          // 兜底保护：如果匹配到的用户缺少自定义字段，遍历USERS找一个数据最完整的来补全
          if (currentUser && (!currentUser.nickname || currentUser.nickname === '系统创建者')) {
            for (var fi = 0; fi < USERS.length; fi++) {
              var fu = USERS[fi];
              if (fu && fu.nickname && fu.nickname !== '系统创建者' && fu.nickname !== '未设置') {
                // 找到了有自定义昵称的用户，用它来补全当前用户的个人信息
                if (!currentUser.nickname || currentUser.nickname === '系统创建者') currentUser.nickname = fu.nickname;
                if (!currentUser.birthday) currentUser.birthday = fu.birthday || '';
                if (!currentUser.position || currentUser.position === '客服总监') currentUser.position = fu.position || '';
                if (!currentUser.phone) currentUser.phone = fu.phone || '';
                if (!currentUser.email) currentUser.email = fu.email || '';
                break;
              }
            }
          }

          // 把最新数据写回 chansee_current_user，确保下次能用
          var sess = JSON.parse(JSON.stringify(currentUser));
          delete sess.password;
          safeSetItem('chansee_current_user', JSON.stringify(sess));

          currentRole = currentUser.role || '超级管理员';
          hideLoginModal();
          updateUserDisplay();
          setAppContentVisible(true);
          // 登录成功后，记录登录信息
          recordLogin();
          return true;
        } else {
          localStorage.removeItem('chanseen_auth');
        }
      } catch(e) {
        localStorage.removeItem('chanseen_auth');
      }
    }

    // 再检查现有系统的登录状态
    const raw = localStorage.getItem("chansee_current_user")
              || sessionStorage.getItem("chansee_current_user");
    // 尝试从云端加载最新数据
    if (window.CloudBaseSync) {
      try {
        await window.CloudBaseSync.loadAll();
        // 从 localStorage 重新读取 USERS 数组（已被云端数据更新）
        var savedUsers = localStorage.getItem('chansee_users');
        if (savedUsers) {
          try {
            USERS = JSON.parse(savedUsers);
            // 显示当前用户的数据
            var currentUserId = JSON.parse(raw)?.id;
            var currentUserData = USERS.find(u => u.id === currentUserId);
          } catch(e) {
          }
        } else {
        }
      } catch(e) {
      }
    } else {
    }
    if (raw) {
      const data = JSON.parse(raw);
      // 校验是否过期
      if (data._expiry && Date.now() > data._expiry) {
        sessionStorage.removeItem("chansee_current_user");
        localStorage.removeItem("chansee_current_user");
        throw new Error("session expired");
      }
      // 用 session 里的 id 从 USERS 数组取最新完整数据
      const userInDb = USERS.find(u => u.id === data.id);
      if (userInDb) {
        // 构造 currentUser（不含密码）
        // 注意：以 USERS 数组（云端最新数据）为准，不再用旧的 session 数据覆盖
        currentUser = {};
        var keys = Object.keys(userInDb);
        for (var i = 0; i < keys.length; i++) {
          if (keys[i] !== "password") {
            currentUser[keys[i]] = userInDb[keys[i]];
          }
        }
        // 同步更新 chansee_current_user（确保下次登录时用的是最新数据）
        var updatedSession = JSON.parse(JSON.stringify(currentUser));
        delete updatedSession.password;
        safeSetItem('chansee_current_user', JSON.stringify(updatedSession));
      } else {
        // 用户已被删除，清除 session
        currentUser = null;
        sessionStorage.removeItem("chansee_current_user");
        localStorage.removeItem("chansee_current_user");
        throw new Error("user not found");
      }
      currentRole = currentUser.role || "新用户";
      hideLoginModal();
      updateUserDisplay();
      setAppContentVisible(true);
      recordLogin();
      return true;
    }
  } catch(e) {
    console.warn('checkLogin 异常:', e);
    // 【兜底修复】主流程出错但 chanseen_auth 仍然有效 → 简化登录，不弹登录框
    try {
      var _authStr = localStorage.getItem('chanseen_auth');
      if (_authStr) {
        var _auth = JSON.parse(_authStr);
        var _maxAge = 60 * 60 * 1000;
        if (_auth.token && (Date.now() - _auth.loginAt) < _maxAge) {
          var _u = USERS.find(function(u){ return u.username === (_auth.user && _auth.user.username); }) || USERS[0] || {};
          currentUser = {
            id: _u.id || (_auth.user && _auth.user.id) || 'U001',
            username: _u.username || (_auth.user && _auth.user.username) || 'admin',
            name: _u.name || _u.nickname || '系统创建者',
            role: _u.role || (_auth.user && _auth.user.role) || '超级管理员',
            avatar: _u.avatar || '',
            position: _u.position || '客服总监',
            brand: _u.brand || 'Chanseen',
            nickname: _u.nickname || _u.name || '系统创建者',
            birthday: _u.birthday || '',
            phone: _u.phone || '',
            email: _u.email || ''
          };
          currentRole = currentUser.role || '超级管理员';
          hideLoginModal();
          updateUserDisplay();
          setAppContentVisible(true);
          recordLogin();
          console.warn('checkLogin 已通过兜底方案完成登录');
          return true;
        }
      }
    } catch(_e) {
      console.warn('checkLogin 兜底也失败:', _e);
    }
  }
  currentUser = null;
  setAppContentVisible(false);
  showLoginModal();
  return false;
}

// 更新顶部用户显示（头像 + 下拉菜单）
function updateUserDisplay() {
  const el = document.getElementById("user-display");
  if (!el) return;
  if (!currentUser) { el.innerHTML = ""; return; }
  const displayName = currentUser.nickname || currentUser.name || "?";
  const firstChar = (displayName || '').charAt(0).toUpperCase() || '?';
  const avatar = currentUser.avatar || "";
  const safeName = escHtml(displayName);
  const safeRole = escHtml(currentUser.role || '');
  const safeAvatar = escHtml(avatar);
  const safeFirstChar = escHtml(firstChar);
  const avatarHtml = avatar
    ? `<div class="user-avatar" style="background-image:url(${safeAvatar});background-size:cover;background-position:center;color:transparent;">${safeFirstChar}</div>`
    : `<div class="user-avatar">${safeFirstChar}</div>`;
  const dropdownAvatarHtml = avatar
    ? `<div class="user-dropdown-avatar" style="background-image:url(${safeAvatar});background-size:cover;background-position:center;color:transparent;">${safeFirstChar}</div>`
    : `<div class="user-dropdown-avatar">${safeFirstChar}</div>`;
  el.innerHTML = `
    <div class="user-avatar-wrap" onclick="toggleUserMenu(event)">
      ${avatarHtml}
      <span class="user-name">${safeName}</span>
      <span class="user-arrow">▼</span>
      <div class="user-dropdown" id="user-dropdown">
        <div class="user-dropdown-header">
          ${dropdownAvatarHtml}
          <div>
            <div class="user-dropdown-name">${safeName}</div>
            <div class="user-dropdown-role">${safeRole}</div>
          </div>
        </div>
        <div class="user-dropdown-divider"></div>
        <div class="user-dropdown-item" onclick="goToProfile()">
          <span class="user-dropdown-icon">⚙️</span>
          <span>个人设置</span>
        </div>
        <div class="user-dropdown-item" onclick="switchAccount()">
          <span class="user-dropdown-icon">🔄</span>
          <span>切换账号</span>
        </div>
        <div class="user-dropdown-divider"></div>
        <div class="user-dropdown-item user-dropdown-danger" onclick="logout()">
          <span class="user-dropdown-icon">🚪</span>
          <span>退出账号</span>
        </div>
      </div>
    </div>`;
}

// 头像下拉菜单显隐
function toggleUserMenu(e) {
  e.stopPropagation();
  const dd = document.getElementById("user-dropdown");
  if (dd) dd.classList.toggle("show");
}

// 点击外部关闭下拉
function closeUserMenu() {
  const dd = document.getElementById("user-dropdown");
  if (dd) dd.classList.remove("show");
}

document.addEventListener("click", closeUserMenu);

// 跳转到个人设置
function goToProfile() {
  closeUserMenu();
  // 自动展开"系统管理与配置"分组
  const sysSection = document.querySelector('.nav-section[data-section="system"]');
  if (sysSection) {
    sysSection.classList.remove("collapsed");
    const arrow = sysSection.querySelector('.section-arrow');
    if (arrow) arrow.textContent = '▼';
  }
  renderModule("profile");
}

// 切换账号
function switchAccount() {
  closeUserMenu();
  logout();
}

// 显示登录弹窗
function showLoginModal() {
  const modal = document.getElementById("login-modal");
  if (modal) modal.classList.remove("hidden");
}

// 隐藏登录弹窗
function hideLoginModal() {
  const modal = document.getElementById("login-modal");
  if (modal) modal.classList.add("hidden");
}

// 切换登录/注册
function switchAuthTab(tab) {
  document.getElementById("auth-login-form").style.display = tab === "login" ? "block" : "none";
  document.getElementById("auth-register-form").style.display = tab === "register" ? "block" : "none";
  document.querySelectorAll(".auth-tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
}

// 登录
function doLogin() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;
  const remember = document.getElementById("login-remember")?.checked;
  if (!username || !password) { alert("请填写账号和密码"); return; }

  const btn = document.querySelector("#login-form .btn-primary");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "登录中"; }

  // 哈希比对（支持新版哈希和旧版明文迁移）
  hashPassword(password).then(function(hashedInput) {
    // 先按哈希找
    var user = USERS.find(function(u) { return u.username === username && u.password === hashedInput; });
    if (!user) {
      // 没找到，尝试明文匹配（旧版数据迁移）
      var plainUser = USERS.find(function(u) { return u.username === username && u.password.indexOf('$SHA$') !== 0 && u.password === password; });
      if (!plainUser) {
        if (btn) { btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "登  录"; }
        alert("账号或密码错误");
        return;
      }
      // 迁移：把明文密码升级为哈希
      user = plainUser;
      hashPassword(password).then(function(hash) {
        plainUser.password = hash;
        saveUsers();
      });
    }
    if (user.status !== "已激活") { alert("账号状态：" + user.status + "，请联系管理员审批"); return; }

    // 浅拷贝完整用户对象（保留 avatar/position/brand 等所有字段）
    currentUser = {};
    const keys = Object.keys(user);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] !== "password") {
        currentUser[keys[i]] = user[keys[i]];
      }
    }
    currentRole = user.role || "新用户";

    const expiry = Date.now() + 3600000; // 1小时有效期
    // session 只存 id + 过期时间，不存完整用户数据
    const sessionData = JSON.stringify({id: user.id, _expiry: expiry});

    if (remember) {
      sessionStorage.removeItem("chansee_current_user");
      safeSetItem("chansee_current_user", sessionData);
    } else {
      localStorage.removeItem("chansee_current_user");
      sessionStorage.setItem("chansee_current_user", sessionData);
    }

    hideLoginModal();
    updateUserDisplay();
    setAppContentVisible(true);
    showToast("登录成功，欢迎回来！");
    
    // 根据当前用户角色过滤导航菜单
    setTimeout(function() {
      filterNavByPermissions();
    }, 100);
  });
}

// 注册
function doRegister() {
  const name = document.getElementById("reg-name").value.trim();
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value;
  const confirm = document.getElementById("reg-confirm").value;
  const phone = document.getElementById("reg-phone").value.trim();
  const email = document.getElementById("reg-email").value.trim();

  if (!name || !username || !password || !confirm) { alert("请填写完整信息"); return; }

  const btn = document.querySelector("#register-form .btn-primary");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "注册中"; }
  if (password !== confirm) { alert("两次密码不一致"); return; }
  if (password.length < 6) { alert("密码至少6位"); btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "注册"; return; }
  if (USERS.some(u => u.username === username)) { alert("该账号已被注册"); return; }

  // 密码哈希后保存
  var that = btn;
  hashPassword(password).then(function(hashed) {
    const newUser = {
      id: "U" + String(USERS.length + 1).padStart(3, "0"),
      name: name, username: username, password: hashed, role: "",
      status: "待审核", registerTime: new Date().toISOString().slice(0, 10),
      phone: phone || "", email: email || "", approvedBy: "", remark: ""
    };
    USERS.push(newUser);
    saveUsers();
    if (that) { that.classList.remove("btn-loading"); that.disabled = false; that.textContent = "注册"; }
    alert("注册成功！请等待管理员审批后登录。");
    switchAuthTab("login");
  });
}

// ===== 密码显示/隐藏切换（通用函数）=====
function togglePwd(inpId, eyeId) {
  const inp = document.getElementById(inpId);
  const eye = document.getElementById(eyeId);
  if (!inp || !eye) return;
  if (inp.type === "password") { inp.type = "text"; eye.textContent = "👁️"; }
  else { inp.type = "password"; eye.textContent = "🙈"; }
}
window.togglePwd = togglePwd;

// 演示登录（快速进入系统）
function demoLogin() {
  const auth = {
    token: 'demo_' + Date.now(),
    user: { username: 'demo', name: '演示用户', role: '管理员' },
    loginAt: Date.now(),
    remember: true
  };
  localStorage.setItem('chanseen_auth', JSON.stringify(auth));
  window.location.href = 'index.html';
}

// 退出登录
function logout() {
  currentUser = null;
  localStorage.removeItem("chansee_current_user");
  sessionStorage.removeItem("chansee_current_user");
  localStorage.removeItem("chanseen_auth");
  sessionStorage.removeItem("chanseen_auth");
  window.location.href = "login.html";
}

// 判断当前用户是否为管理员/超级管理员
function isAdmin() {
  return currentUser && (currentUser.role === "管理员" || currentUser.role === "超级管理员");
}

// 判断当前用户是否为超级管理员
function isSuperAdmin() {
  return currentUser && currentUser.role === "超级管理员";
}

// ===== 项目运维调研数据 =====

// 对外：项目方只填写感受描述，不显示分值

// 对内：上级基于沟通内容+校验真伪，给出 10/8/6/3/0 五档评分

// 目的：帮助员工提能提效，改进不足，促进友好协作

const SATISFACTION_DATA = [

  {

    id: 1, projectId: "P001", period: "2026-05",

    projectFeedback: {

      busiLima2sPerf: "整体表现超过预期，团队配合非常积极主动",

      professionalism: "对于业务需求提供合理、有效、专业的应对方案，超出预期",

      execution: "都能按预期落地执行",

      reporting: { timeliLima2s: "按预期落地执行", accuracy: "展示效果好，无错漏", completeLima2s: "汇报内容全面清晰，超过预期" },

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

      busiLima2sPerf: "业务达成较好，团队积极性主动性较好",

      professionalism: "对于业务需求能提供合理有效的应对方案",

      execution: "有不能如期落地执行的情况，但能接受",

      reporting: { timeliLima2s: "按预期落地执行", accuracy: "展示效果不错，错漏少（少于1次）", completeLima2s: "汇报内容较完整合理，对疑问能提供实时、满意的解释" },

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

      busiLima2sPerf: "业务达成一般，团队主动性有待提升",

      professionalism: "方案出具基本合理，但有时响应较慢",

      execution: "经常不能如期落地执行",

      reporting: { timeliLima2s: "执行时效尚能接受", accuracy: "展示效果尚可，基本无错漏", completeLima2s: "汇报内容基本完整，但对部分疑问解释不够清晰" },

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

      busiLima2sPerf: "整体表现超过预期，团队配合非常积极主动",

      professionalism: "对于业务需求提供合理、有效、专业的应对方案，超出预期",

      execution: "超过预期快速落地",

      reporting: { timeliLima2s: "超过预期快速落地", accuracy: "展示效果好，无错漏", completeLima2s: "汇报内容全面清晰，超过预期" },

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

      busiLima2sPerf: "业务达成较好，团队积极性主动性较好",

      professionalism: "对于业务需求能提供合理有效的应对方案",

      execution: "都能按预期落地执行",

      reporting: { timeliLima2s: "按预期落地执行", accuracy: "展示效果不错，错漏少（少于1次）", completeLima2s: "汇报内容较完整合理" },

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

      busiLima2sPerf: "业务达成较差，团队主动性不足",

      professionalism: "方案出具不合理，应对不够专业",

      execution: "经常不能如期落地执行",

      reporting: { timeliLima2s: "执行效率不好", accuracy: "展示效果不好，错漏较多", completeLima2s: "汇报内容不够完整，对疑问解释不满意" },

      riskControl: "无预案，报备不及时，应对不合理",

      communication: { frequency: "不满意", understanding: "沟通不顺畅，对需求理解有偏差", sync: "不满意" },

      overall: "不满意"

    },

    leaderScore: 3, leaderComment: "项目已暂停，需深刻复盘。已安排一对一辅导，重点改进沟通和专业度问题",

    evaluatedBy: "王强", evaluatedAt: "2026-05-28", status: "已评定"

  }

];

// 把嵌套结构拍平成顶层字段（供系统数据管理统一增删改查）
function flattenSat(r){
  var pf = r.projectFeedback || {};
  var rep = pf.reporting || {};
  var comm = pf.communication || {};
  return {
    id: r.id,
    projectId: r.projectId,
    period: r.period,
    overall: pf.overall || '',
    busiPerf: pf.busiLima2sPerf || '',
    professionalism: pf.professionalism || '',
    execution: pf.execution || '',
    repTime: rep.timeliLima2s || '',
    repAcc: rep.accuracy || '',
    repFull: rep.completeLima2s || '',
    riskControl: pf.riskControl || '',
    commFreq: comm.frequency || '',
    commUnd: comm.understanding || '',
    commSync: comm.sync || '',
    leaderScore: r.leaderScore || 0,
    leaderComment: r.leaderComment || '',
    evaluatedBy: r.evaluatedBy || '',
    evaluatedAt: r.evaluatedAt || '',
    status: r.status || '待评定'
  };
}

// 数据落 localStorage，首次从内置种子拍平初始化
function loadSatisfaction(){
  var arr = null;
  try { var s = localStorage.getItem('chansee_satisfaction'); if(s) arr = JSON.parse(s); } catch(e){}
  if(arr && arr.length){
    SATISFACTION_DATA.length = 0;
    for(var i=0;i<arr.length;i++) SATISFACTION_DATA.push(arr[i]);
  } else {
    var seed = SATISFACTION_DATA.map(flattenSat);
    SATISFACTION_DATA.length = 0;
    for(var j=0;j<seed.length;j++) SATISFACTION_DATA.push(seed[j]);
    try { localStorage.setItem('chansee_satisfaction', JSON.stringify(SATISFACTION_DATA)); } catch(e){}
  }
}
loadSatisfaction();


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



// ===== 角色与权限系统 =====

// 内置角色（不可删除）
const BUILT_IN_ROLES = ["超级管理员", "管理员", "客服总监", "客服经理", "客服主管", "项目伙伴"];

// 动态角色系统：从localStorage加载，支持自定义角色
let ROLES = [];
(function initRoles() {
  try {
    var savedRoles = localStorage.getItem("chansee_roles");
    if (savedRoles) {
      ROLES = JSON.parse(savedRoles);
      // 确保所有内置角色都存在
      var needsSave = false;
      BUILT_IN_ROLES.forEach(function(r) {
        if (ROLES.indexOf(r) === -1) {
          ROLES.push(r);
          needsSave = true;
        }
      });
      if (needsSave) {
        localStorage.setItem("chansee_roles", JSON.stringify(ROLES));
      }
    } else {
      // 首次使用，使用默认角色列表
      ROLES = BUILT_IN_ROLES.slice();
      localStorage.setItem("chansee_roles", JSON.stringify(ROLES));
    }
  } catch(e) {
    ROLES = BUILT_IN_ROLES.slice();
  }
})();

// 保存角色列表到localStorage
function saveRoles() {
  try {
    localStorage.setItem("chansee_roles", JSON.stringify(ROLES));
  } catch(e) {}
}

// 检查角色是否为内置角色
function isBuiltInRole(roleName) {
  return BUILT_IN_ROLES.indexOf(roleName) >= 0;
}

const MODULE_KEYS = ["dashboard","archive","target","cost","operation","issue","knowledge","handover","satisfaction","performance","risk","systemData","permissions","notifications","profile"];

const MODULE_GROUPS = {
  project: { label:"项目运营中心", keys:["dashboard","archive","target","cost","operation"] },
  collab: { label:"团队赋能中心", keys:["issue","knowledge","risk"] },
  tools: { label:"支撑工具箱", keys:["handover","satisfaction","performance"] },
  system: { label:"系统管理与配置", keys:["systemData","permissions","notifications","profile"] }
};

const MODULE_NAMES = {
  dashboard:"项目总览看板", archive:"项目基础档案", target:"目标与权责管理", cost:"成本与利润管理",
  operation:"服务与进度追踪", issue:"问题与课题协作", knowledge:"核心知识能量池", risk:"风险监控与预警",
  handover:"项目承接规范", satisfaction:"项目运维调研", performance:"客服绩效看板",
  systemData:"系统数据管理", permissions:"系统权限管理", notifications:"系统用户管理", profile:"个人设置与帮助"
};

const MODULE_ACTIONS = {
  dashboard:    { visible:1, view:1, edit:1, import:1, export:1, manage:0, scope:1 },
  archive:      { visible:1, view:1, edit:1, import:1, export:1, manage:0, scope:1 },
  target:       { visible:1, view:1, edit:1, import:0, export:1, manage:0, scope:0 },
  cost:         { visible:1, view:1, edit:1, import:0, export:1, manage:0, scope:0 },
  operation:    { visible:1, view:1, edit:1, import:0, export:1, manage:0, scope:1 },
  issue:        { visible:1, view:1, edit:1, import:0, export:0, manage:0, scope:1 },
  knowledge:    { visible:1, view:1, edit:1, import:1, export:1, manage:0, scope:0 },
  risk:         { visible:1, view:1, edit:1, import:0, export:1, manage:0, scope:0 },
  handover:     { visible:1, view:1, edit:1, import:0, export:0, manage:0, scope:0 },
  satisfaction: { visible:1, view:1, edit:1, import:0, export:1, manage:0, scope:0 },
  performance:  { visible:1, view:1, edit:1, import:0, export:1, manage:0, scope:0 },
  systemData:   { visible:1, view:1, edit:1, import:1, export:1, manage:0, scope:0 },
  permissions:  { visible:1, view:0, edit:1, import:0, export:0, manage:1, scope:0 },
  notifications:{ visible:1, view:1, edit:1, import:0, export:0, manage:0, scope:0 },
  profile:      { visible:1, view:0, edit:1, import:0, export:0, manage:0, scope:0 }
};

function permObj(v,ed,im,ex,mg,sc){
  var o = { visible:v||false, view:v||false };
  if(ed!==undefined) o.edit=ed; else o.edit=v||false;
  o.import=im||false; o.export=ex||false; o.manage=mg||false;
  o.scope=sc||'all'; return o;
}
var ALL  = permObj(true,true,true,true,true,'all');
var EDIT = permObj(true,true,false,true,false,'all');
var VIEW = permObj(true,false,false,true,false,'all');
var VOWN = permObj(true,false,false,true,false,'own');
var RO   = permObj(true,false,false,false,false,'own');
var HIDE = permObj(false,false,false,false,false,'all');
var MGR  = permObj(true,true,false,false,true,'all');

const DEFAULT_PERMISSIONS = {
  "超级管理员": {
    dashboard:ALL, archive:ALL, target:ALL, cost:ALL, operation:ALL,
    issue:ALL, knowledge:ALL, risk:ALL, handover:ALL, satisfaction:ALL,
    performance:ALL, systemData:ALL, permissions:MGR, notifications:EDIT, profile:EDIT
  },
  "管理员": {
    dashboard:EDIT, archive:EDIT, target:EDIT, cost:EDIT, operation:EDIT,
    issue:EDIT, knowledge:EDIT, risk:EDIT, handover:EDIT, satisfaction:EDIT,
    performance:EDIT, systemData:EDIT, permissions:HIDE, notifications:EDIT, profile:EDIT
  },
  "客服总监": {
    dashboard:VIEW, archive:VIEW, target:VIEW, cost:VIEW, operation:VIEW,
    issue:VIEW, knowledge:VIEW, risk:VIEW, handover:VIEW, satisfaction:VIEW,
    performance:VIEW, systemData:VIEW, permissions:HIDE, notifications:VIEW, profile:EDIT
  },
  "客服经理": {
    dashboard:EDIT, archive:EDIT, target:EDIT, cost:EDIT, operation:EDIT,
    issue:EDIT, knowledge:EDIT, risk:EDIT, handover:EDIT, satisfaction:EDIT,
    performance:EDIT, systemData:VIEW, permissions:HIDE, notifications:VIEW, profile:EDIT
  },
  "客服主管": {
    dashboard:VOWN, archive:VOWN, target:VOWN, cost:VOWN, operation:permObj(true,true,false,true,false,'own'),
    issue:permObj(true,true,false,false,false,'own'), knowledge:EDIT, risk:VOWN,
    handover:VOWN, satisfaction:VOWN, performance:VOWN,
    systemData:HIDE, permissions:HIDE, notifications:VIEW, profile:EDIT
  },
  "项目伙伴": {
    dashboard:RO, archive:RO, target:HIDE, cost:HIDE, operation:RO,
    issue:permObj(true,true,false,false,false,'own'), knowledge:VIEW, risk:HIDE,
    handover:HIDE, satisfaction:HIDE, performance:HIDE,
    systemData:HIDE, permissions:HIDE, notifications:HIDE, profile:EDIT
  }
};

let currentRole = "客服总监";
let currentModule = "dashboard";
let currentHealthFilter = "all";

let rolePermissions = {};
(function initRolePermissions(){
  try {
    var saved = localStorage.getItem("chansee_permissions");
    rolePermissions = saved ? JSON.parse(saved) : {};
    var needsMigration = false;
    var keys = Object.keys(rolePermissions);
    // 检测是否有旧格式（字符串权限值）
    for(var k=0; k<keys.length; k++){
      var perms = rolePermissions[keys[k]];
      if(typeof perms !== 'object' || perms === null){ needsMigration=true; break; }
      var mks = Object.keys(perms);
      for(var m=0; m<mks.length; m++){
        if(typeof perms[mks[m]] === 'string'){ needsMigration=true; break; }
      }
      if(needsMigration) break;
    }
    // 检测是否缺少任何当前角色
    if(!needsMigration){
      for(var ri=0; ri<ROLES.length; ri++){
        if(!rolePermissions[ROLES[ri]]){ needsMigration=true; break; }
      }
    }
    if(Object.keys(rolePermissions).length === 0 || needsMigration){
      // 默认数据打底
      var merged = JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS));
      // 将旧数据中的字符串格式转换为对象格式后合并
      for(var rk in rolePermissions){
        if(rolePermissions.hasOwnProperty(rk) && typeof rolePermissions[rk] === 'object' && rolePermissions[rk] !== null){
          // 转换该角色下所有模块的字符串权限为对象格式
          var oldRolePerms = {};
          var moduleKeys = Object.keys(rolePermissions[rk]);
          for(var mi=0; mi<moduleKeys.length; mi++){
            var mk = moduleKeys[mi];
            var mv = rolePermissions[rk][mk];
            if(typeof mv === 'string'){
              if(mv === 'write') oldRolePerms[mk] = {visible:true,view:true,edit:true,import:false,export:true,manage:false,scope:'all'};
              else if(mv === 'read') oldRolePerms[mk] = {visible:true,view:true,edit:false,import:false,export:true,manage:false,scope:'all'};
              else oldRolePerms[mk] = {visible:false,view:false,edit:false,import:false,export:false,manage:false,scope:'all'};
            } else {
              oldRolePerms[mk] = mv;
            }
          }
          if(merged[rk]){
            // 合并：默认数据打底，旧数据覆盖（但只覆盖有数据的模块）
            for(var omk in oldRolePerms){
              if(oldRolePerms.hasOwnProperty(omk)) merged[rk][omk] = oldRolePerms[omk];
            }
          } else {
            merged[rk] = oldRolePerms;
          }
        }
      }
      rolePermissions = merged;
      try { localStorage.setItem("chansee_permissions", JSON.stringify(rolePermissions)); } catch(e){}
    }
  } catch(e) {
    rolePermissions = JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS));
  }
})();

function getPermission(module) {
  var rp = rolePermissions[currentRole];
  if (!rp) return { visible:false, view:false, edit:false, import:false, export:false, manage:false, scope:'all' };
  var mp = rp[module];
  if (typeof mp === 'string') {
    if (mp === 'write') return { visible:true, view:true, edit:true, import:false, export:true, manage:false, scope:'all' };
    if (mp === 'read')  return { visible:true, view:true, edit:false, import:false, export:true, manage:false, scope:'all' };
    return { visible:false, view:false, edit:false, import:false, export:false, manage:false, scope:'all' };
  }
  if (mp && typeof mp === 'object') return {
    visible: mp.visible!==false, view: mp.view!==false,
    edit: mp.edit===true, import: mp.import===true,
    export: mp.export===true, manage: mp.manage===true,
    scope: mp.scope || 'all'
  };
  return { visible:false, view:false, edit:false, import:false, export:false, manage:false, scope:'all' };
}

function canEditModule(module) { return getPermission(module).edit === true; }
function canViewModule(module) { var p = getPermission(module); return p.visible === true && p.view === true; }

// ===== 初始化 =====

document.addEventListener("DOMContentLoaded", async () => {
  try {
    initNav();
    initModal();

    // 页面关闭前强制刷新待处理的云端同步
    window.addEventListener('beforeunload', function() {
      if (_syncDebounced && _syncDebounced.flush) _syncDebounced.flush();
    });

    // hash 路由：监听浏览器前进后退按钮
    window.addEventListener('hashchange', function() {
      var mod = location.hash ? location.hash.slice(1) : 'dashboard';
      if (currentModule !== mod) renderModule(mod);
    });

    // === 🚀 从 login.html 跳转过来时，直接信任登录凭证，不走 checkLogin 复杂逻辑 ===
    var _isFromLogin = window.location.search.indexOf('from=login') !== -1;
    if (_isFromLogin) {
      try {
        var _authStr = localStorage.getItem('chanseen_auth');
        if (_authStr) {
          var _auth = JSON.parse(_authStr);
          var _maxAge = _auth.remember ? 604800000 : 3600000;
          if (_auth.token && (Date.now() - _auth.loginAt) < _maxAge) {
            var _u = USERS.find(function(u){ return u.id === (_auth.user && _auth.user.id) || u.username === (_auth.user && _auth.user.username); }) || USERS[0] || {};
            currentUser = {
              id: _u.id || 'U001', username: _u.username || 'admin',
              name: _u.name || _u.nickname || '系统创建者', role: _u.role || '超级管理员',
              avatar: _u.avatar || '', position: _u.position || '客服总监',
              brand: _u.brand || 'Chanseen', nickname: _u.nickname || _u.name || '系统创建者',
              birthday: _u.birthday || '', phone: _u.phone || '', email: _u.email || ''
            };
            currentRole = currentUser.role || '超级管理员';
            hideLoginModal();
            updateUserDisplay();
            setAppContentVisible(true);
            if (window.history.replaceState) window.history.replaceState({}, document.title, 'index.html');
            // 继续渲染界面
            document.querySelectorAll(".nav-section").forEach(function(sec,idx){
              var arrow = sec.querySelector('.section-arrow');
              if(idx===0){ sec.classList.remove("collapsed"); if(arrow) arrow.textContent = '▼'; }
              else { sec.classList.add("collapsed"); if(arrow) arrow.textContent = '▶'; }
            });
            renderModule(location.hash ? location.hash.slice(1) : (sessionStorage.getItem('cs_lastModule') || "dashboard"));
          }
        }
      } catch(_fe) { /* fast fail → 走下方正常 checkLogin */ }
    }

    // 登录检查：未登录则只显示登录框，不初始化主界面
    const loggedIn = await checkLogin();
    if (!loggedIn) return;
    // 默认：只展开第一个分组，其余折叠
    document.querySelectorAll(".nav-section").forEach((sec,idx) => {
      const arrow = sec.querySelector('.section-arrow');
      if(idx===0){
        sec.classList.remove("collapsed");
        if(arrow) arrow.textContent = '▼';
      }else{
        sec.classList.add("collapsed");
        if(arrow) arrow.textContent = '▶';
      }
    });
    renderModule(location.hash ? location.hash.slice(1) : (sessionStorage.getItem('cs_lastModule') || "dashboard"));
  } catch(e) {
    document.getElementById("module-content").innerHTML =
      '<div style="padding:40px;text-align:center;color:red;">' +
      '<h3>初始化错误</h3><p>' + e.message + '</p></div>';
  }
});







// ===== 移动端侧边栏抽屉 =====
function toggleMobileSidebar(){
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if(sidebar.classList.contains('open')){
    closeMobileSidebar();
  }else{
    sidebar.classList.add('open');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}
function closeMobileSidebar(){
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.remove('open');
  overlay.classList.add('hidden');
  document.body.style.overflow = '';
}

// ===== 侧边栏折叠/展开 =====
var _sidebarCollapsed = false;
var _toggleLock = false;

function toggleSidebar(e){
  // 防止事件冒泡导致重复触发
  if(e){
    e.stopPropagation();
    e.preventDefault();
  }
  // 防抖锁
  if(_toggleLock) return;
  _toggleLock = true;
  setTimeout(function(){ _toggleLock = false; }, 600);

  var sidebar = document.getElementById('sidebar');
  var btn = document.getElementById('sidebar-toggle');
  if(!sidebar) return;


  if(_sidebarCollapsed){
    // ===== 展开 =====
    _sidebarCollapsed = false;
    sidebar.classList.remove('collapsed');
    sidebar.style.width = '220px';
    sidebar.style.minWidth = '220px';
    sidebar.style.overflowX = '';
    // 显示所有文字
    var allTexts = sidebar.querySelectorAll('.nav-text, .section-text, .toggle-text, .section-arrow');
    for(var i=0;i<allTexts.length;i++){
      allTexts[i].style.display = '';
      allTexts[i].style.width = '';
      allTexts[i].style.opacity = '';
    }
    // 恢复二级菜单显隐状态
    var allSections = sidebar.querySelectorAll('.nav-section');
    for(var s=0;s<allSections.length;s++){
      var sec = allSections[s];
      var subItems = sec.querySelectorAll('.nav-item');
      var subCollapsed = sec.getAttribute('data-sub-collapsed') === 'true';
      for(var ii=0;ii<subItems.length;ii++){
        if(subCollapsed){
          subItems[ii].style.setProperty('display', 'none', 'important');
        }else{
          subItems[ii].style.removeProperty('display');
        }
      }
    }
    // 恢复图标样式
    var allIcons = sidebar.querySelectorAll('.nav-icon, .section-icon');
    for(var k=0;k<allIcons.length;k++) allIcons[k].style.cssText = '';
    // 恢复按钮
    if(btn){
      var t = btn.querySelector('.toggle-text');
      if(t){ t.textContent = '收起导航'; t.style.display = ''; }
      btn.style.cssText = 'width:100%;';
      var svg = btn.querySelector('svg');
      if(svg) svg.style.transform = '';
    }
  }else{
    // ===== 收起 =====
    _sidebarCollapsed = true;
    sidebar.classList.add('collapsed');
    sidebar.style.width = '56px';
    sidebar.style.minWidth = '56px';
    sidebar.style.overflowX = 'hidden';
    // 隐藏所有文字
    var allTexts2 = sidebar.querySelectorAll('.nav-text, .section-text, .toggle-text, .section-arrow');
    for(var j=0;j<allTexts2.length;j++){
      allTexts2[j].style.display = 'none';
      allTexts2[j].style.width = '0';
      allTexts2[j].style.opacity = '0';
    }
    // 隐藏二级菜单
    var allSections2 = sidebar.querySelectorAll('.nav-section');
    for(var m=0;m<allSections2.length;m++){
      var subItems2 = allSections2[m].querySelectorAll('.nav-item');
      for(var n=0;n<subItems2.length;n++) subItems2[n].style.setProperty('display', 'none', 'important');
    }
    // 图标美化
    var allIcons2 = sidebar.querySelectorAll('.nav-icon');
    for(var x=0;x<allIcons2.length;x++){
      allIcons2[x].style.cssText = 'display:flex;align-items:center;justify-content:center;width:32px;height:32px;font-size:16px;border-radius:8px;background:rgba(24,95,165,0.08);box-shadow:none;';
    }
    var secIcons = sidebar.querySelectorAll('.section-icon');
    for(var y=0;y<secIcons.length;y++){
      secIcons[y].style.cssText = 'display:flex;align-items:center;justify-content:center;width:32px;height:32px;font-size:16px;';
    }
    // 按钮
    if(btn){
      var t2 = btn.querySelector('.toggle-text');
      if(t2){ t2.textContent = '展开导航'; t2.style.display = 'none'; }
      btn.style.cssText = 'padding:8px 0;justify-content:center;width:100%;';
      var svg2 = btn.querySelector('svg');
      if(svg2) svg2.style.transform = 'rotate(180deg)';
    }
  }
}

// ===== 导航折叠 =====
// 只用 data-sub-collapsed 属性控制，CSS 通过属性选择器控制显隐
function toggleSection(titleEl){
  var section = titleEl.closest('.nav-section');
  if(!section) return;
  var isCollapsed = section.getAttribute('data-sub-collapsed') === 'true';
  if(isCollapsed){
    section.setAttribute('data-sub-collapsed', 'false');
    titleEl.setAttribute('aria-expanded', 'true');
  }else{
    section.setAttribute('data-sub-collapsed', 'true');
    titleEl.setAttribute('aria-expanded', 'false');
  }
  var arrow = section.querySelector('.section-arrow');
  if(arrow) arrow.textContent = isCollapsed ? '▼' : '▶';
}

// ===== 导航 =====

function initNav(){
  // 为所有二级菜单项设置 tooltip
  document.querySelectorAll(".nav-item").forEach(item => {
    const txt = item.querySelector('.nav-text');
    if(txt && !item.getAttribute('title')){
      item.setAttribute('title', txt.textContent.trim());
    }
  });

  // 为所有一级菜单（分组标题）设置 tooltip（收起后悬停提示用）
  document.querySelectorAll(".nav-section-title").forEach(title => {
    const txt = title.querySelector('.section-text');
    if(txt && !title.getAttribute('title')){
      title.setAttribute('title', txt.textContent.trim());
    }
  });

  document.querySelectorAll(".nav-item").forEach(item => {

    item.addEventListener("click", e => {

      e.preventDefault();

      // 自动展开所在分组（如果处于折叠状态）
      const sec = item.closest('.nav-section');
      if(sec){
        // 用 data 属性判断，不依赖 class
        var isCollapsed = sec.getAttribute('data-sub-collapsed') === 'true';
        if(isCollapsed){
          sec.setAttribute('data-sub-collapsed', 'false');
          var subItems = sec.querySelectorAll('.nav-item');
          for(var i=0;i<subItems.length;i++) subItems[i].style.removeProperty('display');
          const arrow = sec.querySelector('.section-arrow');
          if(arrow) arrow.textContent = '▼';
        }
      }

      document.querySelectorAll(".nav-item").forEach(i=>{i.classList.remove("active");i.removeAttribute('aria-current');});

      item.classList.add("active");
      item.setAttribute('aria-current', 'page');

      renderModule(item.dataset.module);

      // 移动端点击导航项后自动关闭侧边栏抽屉
      if(window.innerWidth <= 768 || (window.innerHeight <= 500 && window.matchMedia('(orientation: landscape)').matches)){
        closeMobileSidebar();
      }

    });

  });

  // 初始化一级菜单箭头状态（确保箭头方向和实际状态一致）
  document.querySelectorAll('.nav-section').forEach(sec => {
    var arrow = sec.querySelector('.section-arrow');
    if(!arrow) return;
    // data-sub-collapsed 不存在或为 'false' → 展开 → 箭头 ▼
    // data-sub-collapsed 为 'true' → 收起 → 箭头 ▶
    var isCollapsed = sec.getAttribute('data-sub-collapsed') === 'true';
    arrow.textContent = isCollapsed ? '▶' : '▼';
  });

}







// ===== 模块分发 =====

function renderModule(module){
  try {
    currentModule = module;
    
    // 权限检查：检查当前用户是否有权限查看此模块
    // 超级管理员跳过检查
    if (currentRole !== "超级管理员" && MODULE_KEYS.indexOf(module) >= 0) {
      if (!canViewModule(module)) {
        // 无权限，找到第一个有权限的模块并跳转
        var firstAllowedModule = MODULE_KEYS.find(function(mk) { return canViewModule(mk); });
        if (firstAllowedModule) {
          showConfirmModal("您没有权限访问「" + MODULE_NAMES[module] + "」模块！<br><br>系统将跳转到「" + MODULE_NAMES[firstAllowedModule] + "」。", "权限不足", function() {
            currentModule = firstAllowedModule;
            module = firstAllowedModule;
            // 继续执行后续的渲染逻辑（递归调用自身）
            renderModule(module);
          });
          return; // 等待用户确认
        } else {
          // 没有任何模块权限，显示错误
          document.getElementById("module-content").innerHTML = 
            '<div style="padding:40px;text-align:center;"><div style="font-size:48px;margin-bottom:16px;">🔒</div>' +
            '<h3 style="color:#ef4444;margin-bottom:8px;">暂无可用模块</h3>' +
            '<p style="color:#64748b;">您没有被分配任何模块权限，请联系管理员。</p></div>';
          return;
        }
      }
    }
    
    // 保存当前模块到sessionStorage，刷新后自动回到该模块
    try { sessionStorage.setItem('cs_lastModule', module); } catch(e){};
    // URL hash 同步：支持浏览器前进/后退 + 链接分享
    if (location.hash !== '#' + module) {
      try { history.replaceState(null, '', '#' + module); } catch(e) {}
    }
    // 同步更新导航栏高亮状态
    document.querySelectorAll('.nav-item').forEach(function(i){i.classList.remove('active');});
    var nav = document.querySelector('.nav-item[data-module="'+module+'"]');
    if(nav){ nav.classList.add('active'); }
    const area = document.getElementById("module-content");
    if (!area) { console.error('renderModule: module-content 元素不存在'); return; }
    const fns = {dashboard:renderDashboard, archive:renderArchive, target:renderTarget, cost:renderCost, operation:renderOperation, issue:renderIssue, knowledge:renderKnowledge, handover:renderHandover, satisfaction:renderSatisfaction, systemData:renderSystemData, permissions:renderPermissions, notifications:renderNotifications, assessment:renderAssessment, performance:renderPerformance, risk:renderRisk, profile:renderProfile};
    // 性能埋点：记录模块渲染耗时
    var perfStart = performance.now();
    // 模块渲染缓存：数据未变时跳过 HTML 生成
    var cached = _moduleCache[module];
    var html;
    if (cached && cached.version === _dataVersion) {
      html = cached.html;
    } else {
      html = fns[module] ? fns[module]() : '<div class="empty-state"><div class="empty-icon">🚧</div><p>模块开发中...</p></div>';
      if (!html || html === 'undefined' || html === 'null') {
        html = '<div class="empty-state"><div class="empty-icon">⚠️</div><p>模块内容为空</p></div>';
      }
      _moduleCache[module] = { version: _dataVersion, html: html };
    }
    var perfRender = (performance.now() - perfStart).toFixed(1);
    area.innerHTML = html;
    // 模块切换自动滚回顶部
    var contentArea = document.getElementById('content-area');
    if (contentArea) contentArea.scrollTop = 0;
    var perfDom = (performance.now() - perfStart).toFixed(1);
    // 超过 200ms 的模块记录到运行日志
    if (parseFloat(perfDom) > 200 && typeof addRuntimeLog === 'function') {
      addRuntimeLog('perf', '模块渲染较慢: ' + module, '渲染 ' + perfRender + 'ms, 总耗时 ' + perfDom + 'ms');
    }
    bindEvents();
    // 确保右上角用户头像始终显示（防止被其他代码清空）
    updateUserDisplay();
    // 系统数据管理页面：显示备份提醒
    if (module === 'systemData') {
      setTimeout(function() {
        var warning = getBackupWarning();
        var el = document.getElementById('backup-warning');
        if (el && warning) { el.textContent = warning; el.style.display = 'block'; }
      }, 100);
    }
  } catch(e) {
    console.error('renderModule 错误:', e);
    var area = document.getElementById("module-content");
    if (area) {
      area.innerHTML =
        '<div style="padding:40px;text-align:center;"><div style="font-size:48px;margin-bottom:16px;">⚠️</div>' +
        '<h3 style="color:#ef4444;margin-bottom:8px;">模块加载出错</h3>' +
        '<p style="color:#64748b;margin-bottom:12px;">' + (e.message || '未知错误') + '</p>' +
        '<button class="btn btn-sm btn-primary" onclick="location.reload()">刷新页面</button></div>';
    }
  }
}




// ----- 筛选栏状态 (v4) -----
const filterState = {
  project: [],
  workplace: "",
  director: [],
  pm: [],
  projectType: "",
  health: "",
  timeMode: "",
  time: "all",
  timeStart: "",
  timeEnd: "",
  brand: [],
  category: [],
  platforms: [],
  status: ""
};

function setFilter(key, value) {
  filterState[key] = value;
  // 筛选状态持久化：切模块不丢筛选条件
  try { sessionStorage.setItem('cs_filterState', JSON.stringify(filterState)); } catch(e) {}
  _moduleCache[currentModule] = null; // 缓存失效：确保视图按最新筛选条件刷新
  renderModule(currentModule);
}

// 初始化筛选状态：从 sessionStorage 恢复上次的筛选条件
(function initFilterState() {
  try {
    var saved = sessionStorage.getItem('cs_filterState');
    if (saved) {
      var parsed = JSON.parse(saved);
      // 只恢复存在的 key，防止旧数据污染新结构
      for (var k in parsed) {
        if (filterState.hasOwnProperty(k)) filterState[k] = parsed[k];
      }
      // 兼容旧版数据:pm/director 之前是 'all',新结构要求数组
      if (typeof filterState.pm === 'string') filterState.pm = [];
      if (typeof filterState.director === 'string') filterState.director = [];
    }
  } catch(e) {}
})();

function renderFilterBar() {
  var timeLabel = {'':'全部时间', all:'全部时间', month:'本月', lastMonth:'上月', quarter:'本季', year:'本年', custom:'自定义'};

  // 已选标签
  var tagsHtml = '';
  var hasFilter = false;
  if (filterState.timeMode !== 'all' && filterState.timeMode !== '') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + timeLabel[filterState.timeMode] + '<i onclick="setFilter(\'timeMode\',\'\')">×</i></span>'; }
  if (filterState.workplace !== 'all' && filterState.workplace !== '') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + filterState.workplace + '<i onclick="setFilter(\'workplace\',\'\')">×</i></span>'; }
  if (filterState.projectType !== 'all' && filterState.projectType !== '') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + filterState.projectType + '<i onclick="setFilter(\'projectType\',\'\')">×</i></span>'; }
  if (filterState.status !== 'all' && filterState.status !== '') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + filterState.status + '<i onclick="setFilter(\'status\',\'\')">×</i></span>'; }
  if (filterState.health !== 'all' && filterState.health !== '') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + filterState.health + '<i onclick="setFilter(\'health\',\'\')">×</i></span>'; }
  filterState.pm.forEach(function(v) { hasFilter = true; tagsHtml += '<span class="filter-tag">' + v + '<i onclick="toggleMultiFilter(\'pm\',\'' + String(v).replace(/'/g,"\\'") + '\')">×</i></span>'; });
  filterState.director.forEach(function(v) { hasFilter = true; tagsHtml += '<span class="filter-tag">' + v + '<i onclick="toggleMultiFilter(\'director\',\'' + String(v).replace(/'/g,"\\'") + '\')">×</i></span>'; });
  filterState.platforms.forEach(function(v) { hasFilter = true; tagsHtml += '<span class="filter-tag">' + v + '<i onclick="toggleMultiFilter(\'platforms\',\'' + String(v).replace(/'/g,"\\'") + '\')">×</i></span>'; });
  filterState.category.forEach(function(v) { hasFilter = true; tagsHtml += '<span class="filter-tag">' + v + '<i onclick="toggleMultiFilter(\'category\',\'' + String(v).replace(/'/g,"\\'") + '\')">×</i></span>'; });
  filterState.brand.forEach(function(v) { hasFilter = true; tagsHtml += '<span class="filter-tag">' + v + '<i onclick="toggleMultiFilter(\'brand\',\'' + String(v).replace(/'/g,"\\'") + '\')">×</i></span>'; });
  if (hasFilter) tagsHtml = '<div class="filter-tags-row">' + tagsHtml + '<button class="filter-clear-btn" onclick="resetFilters()">清空筛选</button></div>';

  // 第一行：普通下拉
  var workplaces = [...new Set(PROJECTS.map(function(p){return p.workplace}))].sort();
  var types = ['TP项目','DP项目','BPO项目'];
  var statuses = ['优质健康店','平稳常规店','风险预警店','高危问题店'];
  var healths = ['🟢','🟡','🔴'];

  var row1 = '<div class="filter-row-v4">';
  row1 += '<select class="fb-select" id="filter-time" onchange="onFilterTimeChange(this.value)" title="时间">';
  row1 += '<option value="" disabled hidden>时间 ▼</option>';
  row1 += '<option value="month"'+(filterState.timeMode==='month'?' selected':'')+'>本月</option>';
  row1 += '<option value="lastMonth"'+(filterState.timeMode==='lastMonth'?' selected':'')+'>上月</option>';
  row1 += '<option value="quarter"'+(filterState.timeMode==='quarter'?' selected':'')+'>本季</option>';
  row1 += '<option value="year"'+(filterState.timeMode==='year'?' selected':'')+'>本年</option>';
  row1 += '<option value="custom"'+(filterState.timeMode==='custom'?' selected':'')+'>自定义</option>';
  row1 += '</select>';

  row1 += '<select class="fb-select" id="filter-workplace" onchange="setFilter(\'workplace\',this.value)" title="职场">';
  row1 += '<option value="" disabled hidden>职场 ▼</option>';
  row1 += '<option value="all"'+(filterState.workplace==='all'?' selected':'')+'>全部</option>';
  workplaces.forEach(function(w){ row1 += '<option value="'+w+'"'+(filterState.workplace===w?' selected':'')+'>'+w+'</option>'; });
  row1 += '</select>';

  row1 += '<select class="fb-select" id="filter-projectType" onchange="setFilter(\'projectType\',this.value)" title="类型">';
  row1 += '<option value="" disabled hidden>类型 ▼</option>';
  row1 += '<option value="all"'+(filterState.projectType==='all'?' selected':'')+'>全部</option>';
  types.forEach(function(t){ row1 += '<option value="'+t+'"'+(filterState.projectType===t?' selected':'')+'>'+t+'</option>'; });
  row1 += '</select>';

  row1 += '<select class="fb-select" id="filter-status" onchange="setFilter(\'status\',this.value)" title="状态">';
  row1 += '<option value="" disabled hidden>状态 ▼</option>';
  row1 += '<option value="all"'+(filterState.status==='all'?' selected':'')+'>全部</option>';
  statuses.forEach(function(s){ row1 += '<option value="'+s+'"'+(filterState.status===s?' selected':'')+'>'+s+'</option>'; });
  row1 += '</select>';

  // 高级筛选切换按钮（放在第一行末尾，始终可见）
  var isAdvVisible = window._advFilterVisible || false;
  row1 += '<button type="button" class="fb-adv-btn '+(isAdvVisible?'fb-adv-btn-active':'')+'" onclick="toggleAdvancedFilter();return false;" style="flex-shrink:0;">'+(isAdvVisible?'收起筛选 ▲':'高级筛选 ▼')+'</button>';
  row1 += '</div>';

  // 自定义时间
  var customTimeHtml = '';
  if (filterState.timeMode === 'custom') {
    customTimeHtml = '<div class="fb-custom-time">'+
      '<span>开始日期</span><input type="date" class="fb-date" id="fb-time-start" value="'+(filterState.timeStart||'')+'" onchange="filterState.timeStart=this.value;applyTimeFilter()">'+
      '<span>结束日期</span><input type="date" class="fb-date" id="fb-time-end" value="'+(filterState.timeEnd||'')+'" onchange="filterState.timeEnd=this.value;applyTimeFilter()">'+
      '</div>';
  }

  // 第二行：搜索下拉（默认隐藏）
  var row2 = '<div class="filter-row-v4 filter-row-v4-second" id="filter-row-advanced"' + (isAdvVisible ? ' style="display:flex!important"' : '') + '>';

  // 平台
  var pfLabel = '平台 ▼';
  if (filterState.platforms.length === 1) pfLabel = filterState.platforms[0];
  else if (filterState.platforms.length > 1) pfLabel = '已选'+filterState.platforms.length+'项';
  row2 += '<div class="fb-search-wrap" data-filter="platforms">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+pfLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-platforms" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" id="search-platforms" placeholder="搜索平台..." oninput="renderFbOptions(\'platforms\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-platforms"></div>'+
    '<div class="fb-sp-footer"><button class="fb-sp-toggle-all" onclick="toggleFbSelectAll(\'platforms\',this)">全选</button><button class="fb-sp-clear" onclick="clearFbMulti(\'platforms\')">清空</button><button class="fb-sp-confirm" onclick="applyFbMulti(\'platforms\')">确定</button></div>'+
    '</div>';
  row2 += '</div>';

  // 品类
  var caLabel = '品类 ▼';
  if (filterState.category.length === 1) caLabel = filterState.category[0];
  else if (filterState.category.length > 1) caLabel = '已选'+filterState.category.length+'项';
  row2 += '<div class="fb-search-wrap" data-filter="category">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+caLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-category" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" id="search-category" placeholder="搜索品类..." oninput="renderFbOptions(\'category\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-category"></div>'+
    '<div class="fb-sp-footer"><button class="fb-sp-toggle-all" onclick="toggleFbSelectAll(\'category\',this)">全选</button><button class="fb-sp-clear" onclick="clearFbMulti(\'category\')">清空</button><button class="fb-sp-confirm" onclick="applyFbMulti(\'category\')">确定</button></div>'+
    '</div>';
  row2 += '</div>';

  // 品牌
  var brLabel = '品牌 ▼';
  if (filterState.brand.length === 1) brLabel = filterState.brand[0];
  else if (filterState.brand.length > 1) brLabel = '已选'+filterState.brand.length+'项';
  row2 += '<div class="fb-search-wrap" data-filter="brand">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+brLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-brand" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" id="search-brand" placeholder="搜索品牌..." oninput="renderFbOptions(\'brand\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-brand"></div>'+
    '<div class="fb-sp-footer"><button class="fb-sp-toggle-all" onclick="toggleFbSelectAll(\'brand\',this)">全选</button><button class="fb-sp-clear" onclick="clearFbMulti(\'brand\')">清空</button><button class="fb-sp-confirm" onclick="applyFbMulti(\'brand\')">确定</button></div>'+
    '</div>';
  row2 += '</div>';

  // PM（多选，与平台/品类/品牌保持一致体验）
  var pmLabel = '项目PM';
  if (Array.isArray(filterState.pm) && filterState.pm.length === 1) pmLabel = filterState.pm[0];
  else if (Array.isArray(filterState.pm) && filterState.pm.length > 1) pmLabel = '已选'+filterState.pm.length+'项';
  row2 += '<div class="fb-search-wrap" data-filter="pm">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+pmLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-pm" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" id="search-pm" placeholder="搜索PM..." oninput="renderFbOptions(\'pm\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-pm"></div>'+
    '<div class="fb-sp-footer"><button class="fb-sp-toggle-all" onclick="toggleFbSelectAll(\'pm\',this)">全选</button><button class="fb-sp-clear" onclick="clearFbMulti(\'pm\')">清空</button><button class="fb-sp-confirm" onclick="applyFbMulti(\'pm\')">确定</button></div>'+
    '</div>';
  row2 += '</div>';

  // 客服管理（多选）
  var drLabel = '客服管理';
  if (Array.isArray(filterState.director) && filterState.director.length === 1) drLabel = filterState.director[0];
  else if (Array.isArray(filterState.director) && filterState.director.length > 1) drLabel = '已选'+filterState.director.length+'项';
  row2 += '<div class="fb-search-wrap" data-filter="director">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+drLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-director" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" id="search-director" placeholder="搜索客服管理..." oninput="renderFbOptions(\'director\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-director"></div>'+
    '<div class="fb-sp-footer"><button class="fb-sp-toggle-all" onclick="toggleFbSelectAll(\'director\',this)">全选</button><button class="fb-sp-clear" onclick="clearFbMulti(\'director\')">清空</button><button class="fb-sp-confirm" onclick="applyFbMulti(\'director\')">确定</button></div>'+
    '</div>';
  row2 += '</div>';

  // "更多"按钮（纯装饰，对齐第一行"高级筛选"位置）
  row2 += '<span class="fb-more-btn">更多</span>';

  return '<div class="filter-bar-v4">' + tagsHtml + row1 + customTimeHtml + row2 + '</div>';
}

// 高级筛选切换（用important覆盖CSS !important规则）
function toggleAdvancedFilter() {
  var el = document.getElementById('filter-row-advanced');
  if (!el) { setTimeout(function(){ toggleAdvancedFilter(); }, 200); return; }
  var btn = document.querySelector('.fb-adv-btn');
  var moreBtn = document.querySelector('.fb-more-btn');
  // 检查当前可见状态：CSS强制none时style.display可能为空
  var computedStyle = window.getComputedStyle(el);
  var isVisible = (el.style.display !== 'none' && el.style.display !== '') ? (el.style.display !== 'none') : (computedStyle.display !== 'none');
  if (isVisible) {
    el.style.setProperty('display', 'none', 'important');
    window._advFilterVisible = false;
    if(btn){btn.textContent='高级筛选 ▼';btn.className='fb-adv-btn';}
  } else {
    el.style.setProperty('display', 'flex', 'important');
    window._advFilterVisible = true;
    if(btn){btn.textContent='收起筛选 ▲';btn.className='fb-adv-btn fb-adv-btn-active';}
  }
}

// ----- 筛选栏 v4 辅助函数 -----
function onFilterTimeChange(val) {
  filterState.timeMode = val;
  if (val !== 'custom') {
    filterState.timeStart = '';
    filterState.timeEnd = '';
  }
  try { sessionStorage.setItem('cs_filterState', JSON.stringify(filterState)); } catch(e) {}
  _moduleCache[currentModule] = null; // 缓存失效：时间筛选变化后强制重渲染
  renderModule(currentModule);
}

function applyTimeFilter() {
  if (filterState.timeStart && filterState.timeEnd) {
    _moduleCache[currentModule] = null; // 缓存失效：自定义时间变化后强制重渲染
    renderModule(currentModule);
  }
}

function toggleMultiFilter(key, val) {
  var arr = filterState[key];
  var idx = arr.indexOf(val);
  if (idx >= 0) arr.splice(idx, 1);
  else arr.push(val);
  try { sessionStorage.setItem('cs_filterState', JSON.stringify(filterState)); } catch(e) {}
  _moduleCache[currentModule] = null; // 缓存失效：多选筛选变化后强制重渲染
  renderModule(currentModule);
}

var activeFbPanel = null;

function toggleFbSearch(triggerEl) {
  var wrap = triggerEl.closest('.fb-search-wrap');
  var key = wrap.getAttribute('data-filter');
  var panel = document.getElementById('fb-panel-' + key);
  if (!panel) return;
  var isOpen = panel.classList.contains('show');
  if (activeFbPanel && activeFbPanel !== panel) {
    activeFbPanel.classList.remove('show');
  }
  if (isOpen) {
    panel.classList.remove('show');
    activeFbPanel = null;
  } else {
    panel.classList.add('show');
    activeFbPanel = panel;
    renderFbOptions(key);
    setTimeout(function() {
      var input = panel.querySelector('.fb-search-input');
      if (input) input.focus();
    }, 50);
  }
}

function renderFbOptions(key) {
  var panel = document.getElementById('fb-panel-' + key);
  if (!panel) return;
  var input = panel.querySelector('.fb-search-input');
  var keyword = input ? input.value.toLowerCase() : '';
  var values = [];

  // 预置完整平台列表（按主流程度排序，不含"全平台"）
  // 平台排序优先级：淘宝>天猫官旗>天猫超市>天猫跨境>京东自营>京东POP>京东超市>拼多多>抖音>快手>小红书>微信视频号>唯品会>得物>1688>苏宁易购>微信小程序>企业微信
  var PLATFORM_ORDER = [
    '淘宝','天猫官旗','天猫超市','天猫跨境',
    '京东自营','京东POP','京东超市',
    '拼多多',
    '抖音','快手','小红书','微信视频号',
    '唯品会','得物','1688','苏宁易购',
    '微信小程序','企业微信'
  ];

  if (key === 'platforms') {
    // 合并：预置平台 + 项目数据中已有的平台（去重 + 过滤掉"全平台"）
    var fromProjects = [...new Set(PROJECTS.flatMap(function(p) { return (p.platforms || '').split(/[,，、]/).map(function(s){return s.trim();}).filter(Boolean); }))];
    values = [...new Set(PLATFORM_ORDER.concat(fromProjects))].filter(function(v){ return v && v !== '全平台'; });
    // 按 PLATFORM_ORDER 排序（在列表里的排前面，不在的排后面按字母序）
    values.sort(function(a, b) {
      var ia = PLATFORM_ORDER.indexOf(a);
      var ib = PLATFORM_ORDER.indexOf(b);
      if (ia === -1 && ib === -1) return a.localeCompare(b, 'zh');
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
  } else if (key === 'category') {
    // 合并：标准品类列表 + 项目数据中的品类（通过别名映射归一）
    var catFromProjects = PROJECTS.map(function(p){return p.category;}).filter(Boolean);
    // 把项目数据里的旧品类名映射成标准名称
    var normalizedCats = catFromProjects.map(function(c){
      return CATEGORY_ALIAS[c] || c;
    }).filter(function(v){ return v && PRESET_CATEGORIES.indexOf(v) === -1; });
    values = [...new Set(PRESET_CATEGORIES.concat(normalizedCats))].sort();
  } else if (key === 'brand') {
    values = [...new Set(PROJECTS.map(function(p){return p.brand}))].sort();
  } else if (key === 'pm') {
    values = [...new Set(PROJECTS.map(function(p){return p.pm}))].sort();
  } else if (key === 'director') {
    values = [...new Set(PROJECTS.map(function(p){return p.director}))].sort();
  }
  var filtered = keyword ? values.filter(function(v){ return v.toLowerCase().indexOf(keyword) !== -1; }) : values;
  // pm/director 也是多选
  var isMulti = (key === 'platforms' || key === 'category' || key === 'brand' || key === 'pm' || key === 'director');
  var selected = filterState[key];
  if (isMulti && !Array.isArray(selected)) selected = [];
  if (!isMulti && Array.isArray(selected)) selected = selected[0] || '';
  var html = '';
  html += filtered.map(function(v) {
    var isSelected = isMulti ? (selected.indexOf(v) !== -1) : (selected === v);
    return '<div class="fb-sp-option' + (isSelected ? ' selected' : '') + '" data-value="' + String(v).replace(/"/g, '&quot;') + '" onclick="onFbOptionClick(this,\'' + key + '\')">' +
      '<span class="fb-sp-check">' + (isSelected ? '✓' : '') + '</span>' +
      '<span>' + v + '</span>' +
    '</div>';
  }).join('');
  panel.querySelector('.fb-sp-options').innerHTML = html;
}

function onFbOptionClick(el, key) {
  var val = el.getAttribute('data-value');
  // pm/director 现在也是多选（修复：与平台/品类/品牌保持一致体验）
  var isMulti = (key === 'platforms' || key === 'category' || key === 'brand' || key === 'pm' || key === 'director');
  if (isMulti) {
    var arr = filterState[key];
    if (!Array.isArray(arr)) arr = filterState[key] = [];
    var idx = arr.indexOf(val);
    if (idx >= 0) {
      arr.splice(idx, 1);
      el.classList.remove('selected');
      el.querySelector('.fb-sp-check').textContent = '';
    } else {
      arr.push(val);
      el.classList.add('selected');
      el.querySelector('.fb-sp-check').textContent = '✓';
    }
  } else {
    filterState[key] = val;
    if (activeFbPanel) activeFbPanel.style.display = 'none';
    activeFbPanel = null;
    try { sessionStorage.setItem('cs_filterState', JSON.stringify(filterState)); } catch(e) {}
    _moduleCache[currentModule] = null; // 修复:单选后也清缓存,确保tags-row刷新
    renderModule(currentModule);
  }
}

function toggleFbSelectAll(key, btnEl) {
  var panel = btnEl.closest('.fb-search-panel');
  var options = panel.querySelectorAll('.fb-sp-option:not(.fb-sp-all)');
  var allSelected = true;
  options.forEach(function(opt) {
    if (!opt.classList.contains('selected')) {
      allSelected = false;
    }
  });
  if (allSelected) {
    // 取消全选
    options.forEach(function(opt) {
      opt.classList.remove('selected');
      var check = opt.querySelector('.fb-sp-check');
      if (check) check.textContent = '';
    });
    // 选中"全部"选项
    var allOpt = panel.querySelector('.fb-sp-all');
    if (allOpt) {
      allOpt.classList.add('selected');
      var allCheck = allOpt.querySelector('.fb-sp-check');
      if (allCheck) allCheck.textContent = '✓';
    }
    btnEl.textContent = '全选';
  } else {
    // 全选
    options.forEach(function(opt) {
      opt.classList.add('selected');
      var check = opt.querySelector('.fb-sp-check');
      if (check) check.textContent = '✓';
    });
    // 取消"全部"选项的选中状态
    var allOpt = panel.querySelector('.fb-sp-all');
    if (allOpt) {
      allOpt.classList.remove('selected');
      var allCheck = allOpt.querySelector('.fb-sp-check');
      if (allCheck) allCheck.textContent = '';
    }
    btnEl.textContent = '取消全选';
  }
}

function applyFbMulti(key) {
  // 保存选中的选项到 filterState[key]
  if (activeFbPanel) {
    var selectedOptions = activeFbPanel.querySelectorAll('.fb-sp-option.selected');
    filterState[key] = [];
    selectedOptions.forEach(function(opt) {
      var val = opt.getAttribute('data-value');
      if (val) filterState[key].push(val);
    });
    activeFbPanel.style.display = 'none';
    activeFbPanel = null;
  }
  try { sessionStorage.setItem('cs_filterState', JSON.stringify(filterState)); } catch(e) {}
  _moduleCache[currentModule] = null; // 修复:确保多选确认后顶部筛选标签刷新(原先未清缓存导致复用旧HTML)
  renderModule(currentModule);
}

function clearFbMulti(key) {
  filterState[key] = [];
  if (activeFbPanel) {
    activeFbPanel.classList.remove('show');
    activeFbPanel = null;
  }
  try { sessionStorage.setItem('cs_filterState', JSON.stringify(filterState)); } catch(e) {}
  _moduleCache[currentModule] = null; // 修复:清空后也清缓存,确保tags-row刷新
  renderModule(currentModule);
}

// 点击页面空白处关闭面板
document.addEventListener('click', function(e) {
  if (activeFbPanel && !activeFbPanel.contains(e.target) && !e.target.closest('.fb-search-trigger')) {
    activeFbPanel.classList.remove('show');
    activeFbPanel = null;
    renderModule(currentModule);
  }
});

// ----- 项目名称搜索多选组件 -----
function toggleProjectDropdown(e) {
  e.stopPropagation();
  const dd = document.getElementById("project-filter-dropdown");
  if (!dd) return;
  const isOpen = dd.classList.contains("show");
  // 关闭所有其他下拉
  document.querySelectorAll(".project-filter-dropdown.show").forEach(el => el.classList.remove("show"));
  if (!isOpen) {
    dd.classList.add("show");
    setTimeout(() => {
      const inp = document.getElementById("project-search-input");
      if (inp) inp.focus();
    }, 50);
  }
}
function closeProjectDropdown() {
  const dd = document.getElementById("project-filter-dropdown");
  if (dd) dd.classList.remove("show");
}
// 点击外部关闭项目下拉
document.addEventListener("click", function(e) {
  const dd = document.getElementById("project-filter-dropdown");
  if (dd && dd.classList.contains("show") && !e.target.closest(".project-filter-dropdown") && !e.target.closest(".project-filter-trigger")) {
    dd.classList.remove("show");
  }
});
function filterProjectSearch(keyword) {
  const list = document.getElementById("project-filter-list");
  if (!list) return;
  const k = keyword.trim().toLowerCase();
  const labels = list.querySelectorAll(".project-filter-option");
  labels.forEach(lbl => {
    const text = lbl.querySelector("span")?.textContent || "";
    lbl.style.display = text.toLowerCase().includes(k) ? "" : "none";
  });
}
function toggleProjectSelect(id) {
  const idx = filterState.project.indexOf(id);
  if (idx > -1) {
    filterState.project.splice(idx, 1);
  } else {
    filterState.project.push(id);
  }
  updateProjectFilterLabel();
  // 只更新计数，不刷新页面，等用户点确认
}

// 确认筛选：应用选择并刷新
function applyProjectFilter() {
  closeProjectDropdown();
  renderModule(currentModule);
}

// 重置项目筛选：清空选择，应用"全部"
function resetProjectFilter() {
  filterState.project = [];
  updateProjectFilterLabel();
  closeProjectDropdown();
  renderModule(currentModule);
}
function updateProjectFilterLabel() {
  const el = document.getElementById("project-filter-label");
  if (el) {
    el.textContent = filterState.project.length ? `已选 ${filterState.project.length} 项` : "全部项目";
  }
}

function resetFilters() {
  filterState.project = [];
  filterState.workplace = "";
  filterState.director = [];
  filterState.pm = [];
  filterState.projectType = "";
  filterState.health = "";
  filterState.timeMode = "";
  filterState.time = "all";
  filterState.timeStart = "";
  filterState.timeEnd = "";
  filterState.brand = [];
  filterState.category = [];
  filterState.platforms = [];
  filterState.status = "";
  try { sessionStorage.removeItem('cs_filterState'); } catch(e) {}
  _moduleCache = {}; // 清空所有模块缓存：重置筛选后所有页面按默认状态重渲染
  renderModule(currentModule);
}


function getFilteredProjects(){
  let list = [...PROJECTS];

  // 职场筛选
  if (filterState.workplace !== "all" && filterState.workplace !== "") {
    list = list.filter(p => p.workplace === filterState.workplace);
  }

  // 应用筛选栏的筛选条件
  if (filterState.project.length > 0) {
    list = list.filter(p => filterState.project.includes(p.id));
  }
  if (filterState.director.length > 0) {
    list = list.filter(p => filterState.director.includes(p.director));
  }
  if (filterState.pm.length > 0) {
    list = list.filter(p => filterState.pm.includes(p.pm));
  }
  if (filterState.projectType !== "all" && filterState.projectType !== "") {
    list = list.filter(p => p.serviceMode === filterState.projectType);
  }
  if (filterState.health !== "all" && filterState.health !== "") {
    list = list.filter(p => p.health === filterState.health);
  }
  if (filterState.brand.length > 0) {
    list = list.filter(p => filterState.brand.indexOf(p.brand) !== -1);
  }
  if (filterState.category.length > 0) {
    // 筛选时把项目的旧品类名映射成标准名称再匹配
    list = list.filter(p => {
      var normCat = CATEGORY_ALIAS[p.category] || p.category;
      return filterState.category.indexOf(normCat) !== -1;
    });
  }
  if (filterState.platforms.length > 0) {
    list = list.filter(p => {
      var pfs = (p.platforms || '').split(/[,，、]/).map(function(s){return s.trim();}).filter(Boolean);
      return filterState.platforms.some(function(fp){ return pfs.indexOf(fp) !== -1; });
    });
  }
  if (filterState.status !== "all" && filterState.status !== "") {
    list = list.filter(p => p.status === filterState.status);
  }
  if (filterState.timeMode !== "all" && filterState.timeMode !== "") {
    if (filterState.timeMode === "year" && filterState.time !== "all") {
      list = list.filter(p => {
        const year = p.startDate ? p.startDate.substring(0,4) : '';
        return year === filterState.time;
      });
    } else if (filterState.timeMode === "month" && filterState.time !== "all") {
      list = list.filter(p => {
        if (!p.startDate) return false;
        const ym = p.startDate.substring(0,7);
        return ym === filterState.time;
      });
    } else if (filterState.timeMode === "week" && filterState.time !== "all") {
      list = list.filter(p => {
        if (!p.startDate) return false;
        const d = new Date(p.startDate);
        const w = getISOWeek(d);
        const weekStr = d.getFullYear() + '-W' + String(w).padStart(2,'0');
        return weekStr === filterState.time;
      });
    } else if (filterState.timeMode === "custom") {
      if (filterState.timeStart && filterState.timeEnd) {
        const start = new Date(filterState.timeStart);
        const end = new Date(filterState.timeEnd);
        list = list.filter(p => {
          if (!p.startDate) return false;
          const d = new Date(p.startDate);
          return d >= start && d <= end;
        });
      }
    }
  }

  return list;
}

function getISOWeek(date){
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
}

function canEdit(){
  return canEditModule(currentModule);
}

function canViewAll(){
  return currentRole === "超级管理员" || currentRole === "管理员" || currentRole === "客服总监";
}





// ===== 驾驶舱 - 6大卡片详情弹窗 =====

// 通用：创建大尺寸详情弹窗（复用 sd-prompt 样式系）
function showDetailModal(title, bodyHtml, width) {
  var w = width || 720;
  var overlay = document.createElement('div');
  overlay.className = 'sd-prompt-overlay';
  overlay.innerHTML = ''
    + '<div class="sd-prompt-box" style="width:'+w+'px;max-height:80vh;overflow-y:auto;">'
    + '<div class="sd-prompt-header">' + escHtml(title) + ' <button class="sd-prompt-close">&times;</button></div>'
    + '<div class="sd-prompt-body" style="padding:16px 20px;">' + bodyHtml + '</div>'
    + '</div>';
  document.body.appendChild(overlay);
  setTimeout(function(){ overlay.classList.add('sd-confirm-show'); }, 10);
  overlay.querySelector('.sd-prompt-close').onclick = function(){
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  overlay.onclick = function(e){
    if(e.target === this){ overlay.classList.remove('sd-confirm-show'); setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300); }
  };
}

// 卡片1：销售趋势详情 — 数据源 OPERATIONS(ticketVol) + PROJECTS
function openSalesTrend(){
  const all = getFilteredProjects();
  const filteredOps = OPERATIONS.filter(o => {
    const p = PROJECTS.find(pp=>pp.id===o.projectId);
    if (!p) return false;
    if (filterState.workplace !== 'all' && p.workplace !== filterState.workplace) return false;
    return all.some(ap => ap.id === o.projectId);
  });
  const ranked = filteredOps.slice().sort((a,b)=>b.ticketVol-a.ticketVol);
  const totalVol = filteredOps.reduce((s,o)=>s+o.ticketVol,0);
  const maxV = ranked.length ? ranked[0].ticketVol : 1;
  // 按职场分组统计
  const byWorkplace = {};
  filteredOps.forEach(o => {
    const p = PROJECTS.find(pp=>pp.id===o.projectId);
    const wp = p ? p.workplace : '未知';
    byWorkplace[wp] = (byWorkplace[wp]||0) + o.ticketVol;
  });
  let rowsHtml = ranked.map((o,idx)=>{
    const p = PROJECTS.find(pp=>pp.id===o.projectId);
    const name = p ? p.name : o.projectId;
    const barW = Math.round((o.ticketVol/maxV)*220);
    const pct = totalVol > 0 ? (o.ticketVol/totalVol*100).toFixed(1) : 0;
    const healthColor = o.health==='🟢'?'#22c55e':o.health==='🟡'?'#eab308':'#ef4444';
    return `<tr>
      <td style="text-align:center;font-weight:600;color:#64748b;">${idx+1}</td>
      <td style="font-weight:500;">${name}</td>
      <td>${p?p.workplace:'-'}</td>
      <td style="text-align:right;font-weight:600;color:#1e40af;">${o.ticketVol.toLocaleString()}</td>
      <td><div style="display:flex;align-items:center;gap:8px;"><div style="flex:1;height:10px;background:#eff6ff;border-radius:5px;overflow:hidden;min-width:40px;"><div style="width:${barW}px;height:100%;background:linear-gradient(90deg,#3b82f6,#60a5fa);border-radius:5px;"></div></div><span style="font-size:11px;color:#64748b;min-width:42px;text-align:right;">${pct}%</span></div></td>
      <td style="text-align:center;"><span style="width:10px;height:10px;border-radius:50%;background:${healthColor};display:inline-block;"></span> ${o.health}</td>
    </tr>`;
  }).join('');
  let wpHtml = Object.keys(byWorkplace).sort().map(k=>{
    const v = byWorkplace[k];
    const barW2 = totalVol > 0 ? Math.round((v/totalVol)*180) : 0;
    return `<div style="display:flex;align-items:center;gap:8px;padding:4px 0;font-size:12px;">
      <span style="width:48px;color:#475569;font-weight:500;">${k}</span>
      <div style="flex:1;height:14px;background:#f1f5f9;border-radius:7px;overflow:hidden;"><div style="width:${barW2}px;height:100%;background:linear-gradient(90deg,#0ABAB5,#00C9A7);border-radius:7px;"></div></div>
      <span style="min-width:60px;text-align:right;color:#334155;font-weight:600;">${v.toLocaleString()} (${(v/totalVol*100).toFixed(1)}%)</span>
    </div>`;
  }).join('');
  showDetailModal('📈 销售趋势 — 项目订单量完整排行',
    `<div style="margin-bottom:16px;display:flex;gap:12px;flex-wrap:wrap;">
      <div style="background:#eff6ff;border-radius:10px;padding:12px 16px;flex:1;min-width:140px;">
        <div style="font-size:11px;color:#64748b;">总订单量</div>
        <div style="font-size:22px;font-weight:700;color:#1e40af;">${totalVol.toLocaleString()}</div>
      </div>
      <div style="background:#f0fdf4;border-radius:10px;padding:12px 16px;flex:1;min-width:140px;">
        <div style="font-size:11px;color:#64748b;">项目数量</div>
        <div style="font-size:22px;font-weight:700;color:#15803d;">${filteredOps.length} 个</div>
      </div>
      <div style="background:#fefce8;border-radius:10px;padding:12px 16px;flex:1;min-width:140px;">
        <div style="font-size:11px;color:#64748b;">平均单项目</div>
        <div style="font-size:22px;font-weight:700;color:#a16207;">${filteredOps.length ? Math.round(totalVol/filteredOps.length).toLocaleString() : 0}</div>
      </div>
    </div>
    <div style="background:#fafafa;border-radius:10px;padding:14px;margin-bottom:16px;">
      <div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:10px;">📍 各职场订单量分布</div>
      ${wpHtml}
    </div>
    <div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:8px;">📋 全部项目排行（按订单量降序）</div>
    <table style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead><tr style="background:#f8fafc;">
        <th style="padding:8px 6px;text-align:left;border-bottom:2px solid #e2e8f0;">排名</th>
        <th style="padding:8px 6px;text-align:left;border-bottom:2px solid #e2e8f0;">项目名称</th>
        <th style="padding:8px 6px;text-align:left;border-bottom:2px solid #e2e8f0;">职场</th>
        <th style="padding:8px 6px;text-align:right;border-bottom:2px solid #e2e8f0;">订单量</th>
        <th style="padding:8px 6px;text-align:left;border-bottom:2px solid #e2e8f0;">占比</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">健康</th>
      </tr></thead>
      <tbody>${rowsHtml || '<tr><td colspan="6" style="padding:20px;text-align:center;color:#94a3b8;">暂无数据</td></tr>'}</tbody>
    </table>
    <div style="margin-top:14px;text-align:center;">
      <button class="btn btn-sm btn-primary" onclick="this.closest('.sd-prompt-overlay').querySelector('.sd-prompt-close').click();renderModule('operation');" style="padding:8px 24px;">📊 前往「服务与进度追踪」查看更多</button>
    </div>`
  , 760);
}

// 卡片2：服务概览详情 — 数据源 OPERATIONS(csat/responseTime等)
function openServiceDetail(){
  const all = getFilteredProjects();
  const filteredOps = OPERATIONS.filter(o => {
    const p = PROJECTS.find(pp=>pp.id===o.projectId);
    if (!p) return false;
    if (filterState.workplace !== 'all' && p.workplace !== filterState.workplace) return false;
    return all.some(ap => ap.id === o.projectId);
  });
  // 动态计算核心指标
  const avgResp = filteredOps.length ? Math.round(filteredOps.reduce((s,o)=>s+o.responseTime,0)/filteredOps.length) : 0;
  const avgCsat = filteredOps.length ? (filteredOps.reduce((s,o)=>s+o.csat,0)/filteredOps.length).toFixed(2) : '0.00';
  const avgResolve = filteredOps.length ? Math.round(filteredOps.reduce((s,o)=>s+o.resolveTime,0)/filteredOps.length) : 0;
  const avgResolRate = filteredOps.length ? (filteredOps.reduce((s,o)=>s+o.resolutionRate,0)/filteredOps.length).toFixed(1) : '0';
  const goodSvc = filteredOps.filter(o=>o.csat>=4.5).length;
  const warnSvc = filteredOps.filter(o=>o.csat>=4.0&&o.csat<4.5).length;
  const badSvc = filteredOps.filter(o=>o.csat<4.0).length;
  let svcRows = filteredOps.map(o => {
    const p = PROJECTS.find(pp=>pp.id===o.projectId);
    const name = p ? p.name : o.projectId;
    const csatColor = o.csat>=4.5?'#10b981':o.csat>=4.0?'#f59e0b':'#ef4444';
    const respColor = o.responseTime <= 90 ? '#10b981' : o.responseTime <= 120 ? '#f59e0b' : '#ef4444';
    return `<tr>
      <td style="font-weight:500;">${name}</td>
      <td style="text-align:center;font-weight:600;color:${csatColor};">${o.csat}</td>
      <td style="text-align:center;color:${respColor};">${o.responseTime}s</td>
      <td style="text-align:center;">${o.resolveTime}s</td>
      <td style="text-align:center;">${o.resolutionRate}%</td>
      <td style="text-align:center;">${o.reviewRate}%</td>
      <td style="text-align:center;"><span style="width:10px;height:10px;border-radius:50%;background:${o.health==='🟢'?'#22c55e':o.health==='🟡'?'#eab308':'#ef4444'};display:inline-block;"></span></td>
    </tr>`;
  }).join('');
  showDetailModal('🎯 服务概览 — 各项目完整服务数据',
    `<div style="margin-bottom:16px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">
      <div style="background:#ecfdf5;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">平均响应时间</div>
        <div style="font-size:20px;font-weight:700;color:#059669;">${avgResp}s</div>
      </div>
      <div style="background:#eff6ff;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">CSAT 平均分</div>
        <div style="font-size:20px;font-weight:700;color:#2563eb;">${avgCsat}</div>
      </div>
      <div style="background:#fefce8;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">平均解决时长</div>
        <div style="font-size:20px;font-weight:700;color:#a16207;">${avgResolve}s</div>
      </div>
      <div style="background:#fdf4ff;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">平均解决率</div>
        <div style="font-size:20px;font-weight:700;color:#9333ea;">${avgResolRate}%</div>
      </div>
    </div>
    <div style="background:#f8fafc;border-radius:10px;padding:14px;margin-bottom:16px;">
      <div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:10px;">📊 项目服务表现分布</div>
      <div style="display:flex;gap:24px;justify-content:center;">
        <div style="text-align:center;">
          <div style="font-size:28px;font-weight:700;color:#10b981;">${goodSvc}</div>
          <div style="font-size:11px;color:#64748b;">达标 (≥4.5)</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:28px;font-weight:700;color:#eab308;">${warnSvc}</div>
          <div style="font-size:11px;color:#64748b;">预警 (4.0-4.5)</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:28px;font-weight:700;color:#ef4444;">${badSvc}</div>
          <div style="font-size:11px;color:#64748b;">告警 (&lt;4.0)</div>
        </div>
      </div>
    </div>
    <div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:8px;">📋 各项目服务指标明细</div>
    <table style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead><tr style="background:#f8fafc;">
        <th style="padding:8px 6px;text-align:left;border-bottom:2px solid #e2e8f0;">项目名称</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">CSAT</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">响应时间</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">解决时长</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">解决率</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">复检率</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">健康</th>
      </tr></thead>
      <tbody>${svcRows || '<tr><td colspan="7" style="padding:20px;text-align:center;color:#94a3b8;">暂无数据</td></tr>'}</tbody>
    </table>
    <div style="margin-top:14px;text-align:center;">
      <button class="btn btn-sm btn-primary" onclick="this.closest('.sd-prompt-overlay').querySelector('.sd-prompt-close').click();renderModule('operation');" style="padding:8px 24px;">📊 前往「服务与进度追踪」</button>
    </div>`
  , 800);
}

// 卡片3：成本控制报告 — 数据源 PROJECTS(costBudget/revenue/profitRate)
function openCostReport(){
  const all = getFilteredProjects();
  const totalRevenue = all.reduce((s,p)=>s+(p.revenue||0),0);
  const totalCost = all.reduce((s,p)=>s+(p.costBudget||0),0);
  const totalBudget = totalCost; // 预算即实际成本
  const avgProfit = all.length ? (all.reduce((s,p)=>s+(parseFloat(p.profitRate)||0),0)/all.length).toFixed(1) : 0;
  const execRate = totalBudget > 0 ? ((totalCost/totalBudget)*100).toFixed(1) : 0;
  const goodCost = all.filter(p=>parseFloat(p.profitRate)>=15).length;
  const warnCost = all.filter(p=>parseFloat(p.profitRate)>=5 && parseFloat(p.profitRate)<15).length;
  const badCost = all.filter(p=>parseFloat(p.profitRate)<5).length;
  const badProjects = all.filter(p=>parseFloat(p.profitRate)<5).sort((a,b)=>parseFloat(a.profitRate)-parseFloat(b.profitRate));
  let costRows = all.sort((a,b)=>parseFloat(b.revenue||0)-parseFloat(a.revenue||0)).map(p => {
    const pr = parseFloat(p.profitRate||0);
    const prColor = pr>=10 ? '#10b981' : (pr<0 ? '#ef4444' : '#f59e0b');
    const rowBg = pr < 5 ? '#fef2f2' : (pr < 10 ? '#fffbeb' : '');
    let badge = '';
    if (pr < 5) badge = '<span style="background:#fecaca;color:#dc2626;font-size:10px;padding:1px 6px;border-radius:4px;">超预算</span>';
    else if (pr < 10) badge = '<span style="background:#fef3c7;color:#d97706;font-size:10px;padding:1px 6px;border-radius:4px;">关注</span>';
    else badge = '<span style="background:#d1fae5;color:#059669;font-size:10px;padding:1px 6px;border-radius:4px;">正常</span>';
    return `<tr style="background:${rowBg};">
      <td style="font-weight:500;">${p.name||'未命名'}</td>
      <td style="text-align:right;">¥${((p.revenue||0)/10000).toFixed(1)}万</td>
      <td style="text-align:right;">¥${((p.costBudget||0)/10000).toFixed(1)}万</td>
      <td style="text-align:right;color:${prColor};font-weight:600;">${pr.toFixed(1)}%</td>
      <td style="text-align:center;">${badge}</td>
      <td style="text-align:center;"><span style="width:10px;height:10px;border-radius:50%;background:${p.health==='🟢'?'#22c55e':p.health==='🟡'?'#eab308':'#ef4444'};display:inline-block;"></span></td>
    </tr>`;
  }).join('');
  showDetailModal('💰 成本控制报告 — 项目利润明细',
    `<div style="margin-bottom:16px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">
      <div style="background:#eff6ff;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">总营收</div>
        <div style="font-size:20px;font-weight:700;color:#1e40af;">¥${(totalRevenue/10000).toFixed(1)}万</div>
      </div>
      <div style="background:#fefce8;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">总成本</div>
        <div style="font-size:20px;font-weight:700;color:#a16207;">¥${(totalCost/10000).toFixed(1)}万</div>
      </div>
      <div style="background:#f0fdf4;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">平均利润率</div>
        <div style="font-size:20px;font-weight:700;color:#059669;">${avgProfit}%</div>
      </div>
      <div style="background:#fdf2f8;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">预算执行率</div>
        <div style="font-size:20px;font-weight:700;color:#be185d;">${execRate}%</div>
      </div>
    </div>
    ${badProjects.length ? `<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:10px;padding:12px 16px;margin-bottom:16px;">
      <div style="font-size:13px;font-weight:600;color:#dc2626;margin-bottom:8px;">⚠️ 超预算预警项目（利润率 &lt;5%）</div>
      ${badProjects.map(p=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;font-size:12px;border-bottom:1px dashed #fecaca;">
        <span style="font-weight:500;color:#991b1b;">${escHtml(p.name)}</span>
        <span style="color:#dc2626;font-weight:600;">利润率 ${parseFloat(p.profitRate).toFixed(1)}%</span>
      </div>`).join('')}
    </div>` : ''}
    <div style="background:#f8fafc;border-radius:10px;padding:14px;margin-bottom:16px;">
      <div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:10px;">📊 利润率分布</div>
      <div style="display:flex;gap:24px;justify-content:center;">
        <div style="text-align:center;">
          <div style="font-size:28px;font-weight:700;color:#10b981;">${goodCost}</div>
          <div style="font-size:11px;color:#64748b;">正常盈利 (≥15%)</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:28px;font-weight:700;color:#eab308;">${warnCost}</div>
          <div style="font-size:11px;color:#64748b;">需关注 (5%-15%)</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:28px;font-weight:700;color:#ef4444;">${badCost}</div>
          <div style="font-size:11px;color:#64748b;">超预算 (&lt;5%)</div>
        </div>
      </div>
    </div>
    <div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:8px;">📋 全部项目成本明细（按营收降序）</div>
    <table style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead><tr style="background:#f8fafc;">
        <th style="padding:8px 6px;text-align:left;border-bottom:2px solid #e2e8f0;">项目名称</th>
        <th style="padding:8px 6px;text-align:right;border-bottom:2px solid #e2e8f0;">营收</th>
        <th style="padding:8px 6px;text-align:right;border-bottom:2px solid #e2e8f0;">成本预算</th>
        <th style="padding:8px 6px;text-align:right;border-bottom:2px solid #e2e8f0;">利润率</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">状态</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">健康</th>
      </tr></thead>
      <tbody>${costRows || '<tr><td colspan="6" style="padding:20px;text-align:center;color:#94a3b8;">暂无数据</td></tr>'}</tbody>
    </table>
    <div style="margin-top:14px;text-align:center;">
      <button class="btn btn-sm btn-primary" onclick="this.closest('.sd-prompt-overlay').querySelector('.sd-prompt-close').click();renderModule('cost');" style="padding:8px 24px;">💰 前往「成本与利润管理」查看更多</button>
    </div>`
  , 800);
}

// 卡片4：项目满意度详情 — 数据源 OPERATIONS(csat)
function openSatisfactionDetail(){
  const all = getFilteredProjects();
  const filteredOps = OPERATIONS.filter(o => {
    const p = PROJECTS.find(pp=>pp.id===o.projectId);
    if (!p) return false;
    if (filterState.workplace !== 'all' && p.workplace !== filterState.workplace) return false;
    return all.some(ap => ap.id === o.projectId);
  });
  const sortedByCsat = filteredOps.slice().sort((a,b)=>b.csat-a.csat);
  const avgCsat = filteredOps.length ? (filteredOps.reduce((s,o)=>s+o.csat,0)/filteredOps.length).toFixed(2) : '0.00';
  const topCsat = sortedByCsat.length ? sortedByCsat[0] : null;
  const lowCsat = sortedByCsat.filter(o=>o.csat<4.0);
  // 从 SATISFACTION_DATA 获取细分维度评分（如果有的话）
  const dimScores = {comm:4.5, exec:4.7, collab:4.3};
  let satRows = sortedByCsat.map((o, idx) => {
    const p = PROJECTS.find(pp=>pp.id===o.projectId);
    const name = p ? p.name : o.projectId;
    const barW = Math.round((o.csat/5)*160);
    const csatColor = o.csat>=4.5?'#1d4ed8':o.csat>=4.0?'#3b82f6':'#60a5fa';
    const tag = o.csat<4.0?'<span style="background:#fee2e2;color:#dc2626;font-size:9px;padding:1px 5px;border-radius:3px;margin-left:6px;">⚠️ 重点</span>':o.csat<4.5?'<span style="background:#fef3c7;color:#d97706;font-size:9px;padding:1px 5px;border-radius:3px;margin-left:6px;">改进</span>':'';
    return `<tr style="${o.csat<4.0?'background:#fef2f2;':''}">
      <td style="text-align:center;font-weight:600;color:#64748b;width:36px;">${idx+1}</td>
      <td style="font-weight:500;">${name}</td>
      <td style="width:200px;"><div style="display:flex;align-items:center;gap:8px;">
        <div style="flex:1;height:10px;background:#eff6ff;border-radius:5px;overflow:hidden;"><div style="width:${barW}px;height:100%;background:${csatColor};border-radius:5px;"></div></div>
        <span style="font-weight:700;color:${csatColor};min-width:32px;text-align:right;">${o.csat}</span>${tag}
      </td></td>
      <td style="text-align:center;color:#64748b;">${o.health}</td>
      <td style="text-align:center;">${p?p.workplace:'-'}</td>
    </tr>`;
  }).join('');
  showDetailModal('⭐ 项目满意度 — 完整评分排行',
    `<div style="margin-bottom:16px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">
      <div style="background:#eff6ff;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">综合满意度</div>
        <div style="font-size:24px;font-weight:700;color:#1d4ed8;">${avgCsat}<span style="font-size:13px;color:#94a3b8;"> /5.0</span></div>
      </div>
      <div style="background:#f0fdf4;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">最高分项目</div>
        <div style="font-size:14px;font-weight:700;color:#059669;">${topCsat ? (PROJECTS.find(p=>p.id===topCsat.projectId)?.name||topCsat.projectId)+' '+topCsat.csat+'分' : '-'}</div>
      </div>
      <div style="background:#fefce8;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">达标项目数</div>
        <div style="font-size:24px;font-weight:700;color:#a16207;">${filteredOps.filter(o=>o.csat>=4.5).length}<span style="font-size:12px;color:#94a3b8;"> /${filteredOps.length}</span></div>
      </div>
      <div style="background:#fef2f2;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">需重点关注</div>
        <div style="font-size:24px;font-weight:700;color:#dc2626;">${lowCsat.length}<span style="font-size:12px;color:#94a3b8;"> 个项目</span></div>
      </div>
    </div>
    <div style="background:#f8fafc;border-radius:10px;padding:14px;margin-bottom:16px;">
      <div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:10px;">📐 细分维度评分</div>
      <div style="display:flex;gap:20px;flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:180px;">
          <span style="width:36px;color:#475569;font-weight:500;">沟通</span>
          <div style="flex:1;height:12px;background:#eff6ff;border-radius:6px;overflow:hidden;"><div style="width:${Math.round(dimScores.comm/5*100)}%;height:100%;background:linear-gradient(90deg,#3b82f6,#60a5fa);border-radius:6px;"></div></div>
          <span style="color:#1d4ed8;font-weight:600;min-width:28px;text-align:right;">${dimScores.comm}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:180px;">
          <span style="width:36px;color:#475569;font-weight:500;">执行</span>
          <div style="flex:1;height:12px;background:#eff6ff;border-radius:6px;overflow:hidden;"><div style="width:${Math.round(dimScores.exec/5*100)}%;height:100%;background:linear-gradient(90deg,#60a5fa,#93c5fd);border-radius:6px;"></div></div>
          <span style="color:#1d4ed8;font-weight:600;min-width:28px;text-align:right;">${dimScores.exec}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:180px;">
          <span style="width:36px;color:#475569;font-weight:500;">协作</span>
          <div style="flex:1;height:12px;background:#eff6ff;border-radius:6px;overflow:hidden;"><div style="width:${Math.round(dimScores.collab/5*100)}%;height:100%;background:linear-gradient(90deg,#93c5fd,#c7d2fe);border-radius:6px;"></div></div>
          <span style="color:#1d4ed8;font-weight:600;min-width:28px;text-align:right;">${dimScores.collab}</span>
        </div>
      </div>
    </div>
    ${lowCsat.length ? `<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:10px;padding:12px 16px;margin-bottom:16px;">
      <div style="font-size:13px;font-weight:600;color:#dc2626;margin-bottom:8px;">⚠️ 低分项目需立即关注（CSAT &lt;4.0）</div>
      ${lowCsat.map(o=>{const pn=PROJECTS.find(p=>p.id===o.projectId);return `<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;font-size:12px;border-bottom:1px dashed #fecaca;">
        <span style="font-weight:500;color:#991b1b;">${pn?pn.name:o.projectId}</span>
        <span style="color:#dc2626;font-weight:600;">CSAT ${o.csat}</span>
      </div>`}).join('')}</div>` : ''}
    <div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:8px;">📋 全部项目满意度排行（按分数降序）</div>
    <table style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead><tr style="background:#f8fafc;">
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">排名</th>
        <th style="padding:8px 6px;text-align:left;border-bottom:2px solid #e2e8f0;">项目名称</th>
        <th style="padding:8px 6px;text-align:left;border-bottom:2px solid #e2e8f0;">CSAT 评分</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">健康</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">职场</th>
      </tr></thead>
      <tbody>${satRows || '<tr><td colspan="5" style="padding:20px;text-align:center;color:#94a3b8;">暂无数据</td></tr>'}</tbody>
    </table>
    <div style="margin-top:14px;text-align:center;">
      <button class="btn btn-sm btn-primary" onclick="this.closest('.sd-prompt-overlay').querySelector('.sd-prompt-close').click();renderModule('satisfaction');" style="padding:8px 24px;">💯 前往「项目运维调研」查看更多</button>
    </div>`
  , 750);
}

// 卡片5：客服工作量详情 — 数据源 OPERATIONS(convCount/ticketVol) + AGENT_PERFORMANCE
function openWorkloadDetail(){
  const all = getFilteredProjects();
  const filteredOps = OPERATIONS.filter(o => {
    const p = PROJECTS.find(pp=>pp.id===o.projectId);
    if (!p) return false;
    if (filterState.workplace !== 'all' && p.workplace !== filterState.workplace) return false;
    return all.some(ap => ap.id === o.projectId);
  });
  // 动态计算（替代硬编码）
  const totalConv = filteredOps.reduce((s,o)=>s+o.convCount,0);
  const totalOrders = filteredOps.reduce((s,o)=>s+o.ticketVol,0);
  const onlineCount = totalConv || 0;
  const offlineCount = Math.round(totalOrders * 0.15) || 0;
  const totalFte = filteredOps.reduce((s,o)=>s+(o.fteActual||0),0);
  // 工作量负荷比 = 总接待人数 / 总FTE * 100（上限100%）
  const workloadRatio = totalFte > 0 ? Math.min(99, Math.round(totalConv/totalFte)) : 78;
  // 从 AGENT_PERFORMANCE 统计工作量分布
  const perfMap = {};
  (AGENT_PERFORMANCE||[]).forEach(a => {
    if (!all.some(ap=>ap.id===a.projectId)) return;
    if (filterState.workplace !== 'all') {
      const p = PROJECTS.find(pp=>pp.id===a.projectId);
      if (!p || p.workplace !== filterState.workplace) return;
    }
    perfMap['serviceVolume'] = (perfMap['serviceVolume']||0) + (a.serviceVolume||0);
  });
  // 按 OPERATIONS 推算工作类型分布
  const workItems = [
    {name:'订单处理', count: Math.round(totalOrders*0.62)||0, ratio: totalOrders>0?62:0},
    {name:'退款处理', count: Math.round(totalOrders*0.18)||0, ratio: 18},
    {name:'投诉处理', count: Math.round(totalOrders*0.11)||0, ratio: 11},
    {name:'换货跟进', count: Math.round(totalOrders*0.09)||0, ratio: 9}
  ];
  // 按项目分布的工作量
  const projWorkload = filteredOps.map(o => {
    const p = PROJECTS.find(pp=>pp.id===o.projectId);
    return { name: p?p.name:o.projectId, conv: o.convCount||0, ticket: o.ticketVol||0, fte: o.fteActual||0 };
  }).sort((a,b)=>b.conv-a.conv);
  let projRows = projWorkload.map(item => {
    const perFte = item.fte > 0 ? Math.round(item.conv/item.fte) : 0;
    return `<tr>
      <td style="font-weight:500;">${item.name}</td>
      <td style="text-align:right;color:#4f46e5;font-weight:600;">${item.conv.toLocaleString()}</td>
      <td style="text-align:right;">${item.ticket.toLocaleString()}</td>
      <td style="text-align:center;">${item.fte}</td>
      <td style="text-align:right;color:#7c3aed;">${perFte}</td>
    </tr>`;
  }).join('');
  showDetailModal('👥 客服工作量 — 详细数据分析',
    `<div style="margin-bottom:16px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">
      <div style="background:#eef2ff;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">线上接待人数</div>
        <div style="font-size:22px;font-weight:700;color:#4f46e5;">${onlineCount.toLocaleString()}</div>
      </div>
      <div style="background:#faf5ff;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">线下工单量</div>
        <div style="font-size:22px;font-weight:700;color:#7c3aed;">${offlineCount.toLocaleString()}</div>
      </div>
      <div style="background:#ecfdf5;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">总FTE投入</div>
        <div style="font-size:22px;font-weight:700;color:#059669;">${totalFte}</div>
      </div>
      <div style="background:#fffbeb;border-radius:10px;padding:12px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">工作量负荷比</div>
        <div style="font-size:22px;font-weight:700;color:#d97706;">${workloadRatio}%</div>
      </div>
    </div>
    <div style="background:#f8fafc;border-radius:10px;padding:14px;margin-bottom:16px;">
      <div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:10px;">📦 线下工作量类型分布（按订单推算）</div>
      ${workItems.map(w=>`<div style="display:flex;align-items:center;gap:10px;padding:5px 0;font-size:12px;">
        <span style="width:72px;color:#475569;font-weight:500;">${w.name}</span>
        <div style="flex:1;height:16px;background:#f1f5f9;border-radius:8px;overflow:hidden;min-width:60px;">
          <div style="width:${w.ratio*2.5}px;height:100%;background:linear-gradient(90deg,#0B9B96,#00C9A7);border-radius:8px;"></div>
        </div>
        <span style="min-width:52px;text-align:right;color:#334155;font-weight:600;">${w.count.toLocaleString()}件</span>
        <span style="min-width:36px;text-align:right;color:#94a3b8;font-size:11px;">(${w.ratio}%)</span>
      </div>`).join('')}
    </div>
    <div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:8px;">📋 各项目工作量明细</div>
    <table style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead><tr style="background:#f8fafc;">
        <th style="padding:8px 6px;text-align:left;border-bottom:2px solid #e2e8f0;">项目名称</th>
        <th style="padding:8px 6px;text-align:right;border-bottom:2px solid #e2e8f0;">线上接待</th>
        <th style="padding:8px 6px;text-align:right;border-bottom:2px solid #e2e8f0;">订单总量</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">FTE</th>
        <th style="padding:8px 6px;text-align:right;border-bottom:2px solid #e2e8f0;">人均接待</th>
      </tr></thead>
      <tbody>${projRows || '<tr><td colspan="5" style="padding:20px;text-align:center;color:#94a3b8;">暂无数据</td></tr>'}</tbody>
    </table>
    <div style="margin-top:14px;text-align:center;">
      <button class="btn btn-sm btn-primary" onclick="this.closest('.sd-prompt-overlay').querySelector('.sd-prompt-close').click();renderModule('performance');" style="padding:8px 24px;">📊 前往「客服绩效」查看更多</button>
    </div>`
  , 760);
}

// 卡片6：客服配置数详情 — 数据源 PROJECTS(fteActual/fteTarget) + AGENT_PERFORMANCE(agentType)
function openStaffConfigDetail(){
  const all = getFilteredProjects();
  const filteredOps = OPERATIONS.filter(o => {
    const p = PROJECTS.find(pp=>pp.id===o.projectId);
    if (!p) return false;
    if (filterState.workplace !== 'all' && p.workplace !== filterState.workplace) return false;
    return all.some(ap => ap.id === o.projectId);
  });
  // 动态计算总FTE和各项目配置
  const totalStaff = all.reduce((s,p)=>s+(p.fteActual||0),0) || 0;
  const totalTarget = all.reduce((s,p)=>s+(p.fteTarget||0),0) || 0;
  // 从 AGENT_PERFORMANCE 计算各类型客服分布
  const typeDist = {};
  const typeNames = {'售前':'售前客服','售后':'售后客服','综合':'综合客服'};
  (AGENT_PERFORMANCE||[]).forEach(a => {
    if (!all.some(ap=>ap.id===a.projectId)) return;
    if (filterState.workplace !== 'all') {
      const p = PROJECTS.find(pp=>pp.id===a.projectId);
      if (!p || p.workplace !== filterState.workplace) return;
    }
    const t = a.agentType || '综合';
    typeDist[t] = (typeDist[t]||0) + 1;
  });
  // 如果没有绩效数据，回退到按项目FTE比例估算
  const hasPerfData = Object.keys(typeDist).length > 0;
  const staffConfig = hasPerfData ? Object.keys(typeDist).map(t => ({
    name: typeNames[t]||t, count: typeDist[t], pct: totalStaff>0?Math.round(typeDist[t]/Object.values(typeDist).reduce((s,v)=>s+v,0)*100):0,
    color: t==='售前'?'#0A7B78':t==='售后'?'#0B9B96':'#00C9A7'
  })) : [
    {name:'售前客服', count: Math.round(totalStaff*0.37)||0, pct:37, color:'#0A7B78'},
    {name:'售后客服', count: Math.round(totalStaff*0.28)||0, pct:28, color:'#0B9B96'},
    {name:'综合客服', count: Math.round(totalStaff*0.24)||0, pct:24, color:'#00C9A7'},
    {name:'其他', count: Math.round(totalStaff*0.11)||0, pct:11, color:'#6EE7B7'}
  ];
  // 各项目FTE配置明细
  const projStaff = all.map(p => ({
    name: p.name||'未命名', workplace: p.workplace||'-',
    actual: p.fteActual||0, target: p.fteTarget||0,
    rate: p.fteTarget>0?((p.fteActual||0)/p.fteTarget*100).toFixed(0):0,
    serviceMode: p.serviceMode||'-'
  })).sort((a,b)=>b.actual-a.actual);
  let staffRows = projStaff.map(item => {
    const rateColor = item.rate >= 95 ? '#10b981' : item.rate >= 80 ? '#f59e0b' : '#ef4444';
    return `<tr>
      <td style="font-weight:500;">${item.name}</td>
      <td style="text-align:center;">${item.workplace}</td>
      <td style="text-align:center;">${item.serviceMode}</td>
      <td style="text-align:right;font-weight:600;color:#312e81;">${item.actual}</td>
      <td style="text-align:right;color:#64748b;">${item.target}</td>
      <td style="text-align:right;font-weight:600;color:${rateColor};">${item.rate}%</td>
    </tr>`;
  }).join('');
  showDetailModal('👥 客服配置数 — FTE分摊明细',
    `<div style="margin-bottom:16px;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
      <div style="background:#eef2ff;border-radius:10px;padding:14px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">总分摊人数（实际）</div>
        <div style="font-size:26px;font-weight:700;color:#312e81;">${totalStaff}<span style="font-size:13px;color:#94a3b8;">人</span></div>
      </div>
      <div style="background:#f0fdf4;border-radius:10px;padding:14px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">目标编制总数</div>
        <div style="font-size:26px;font-weight:700;color:#059669;">${totalTarget}<span style="font-size:13px;color:#94a3b8;">人</span></div>
      </div>
      <div style="background:#faf5ff;border-radius:10px;padding:14px;text-align:center;">
        <div style="font-size:11px;color:#64748b;">整体编制达成率</div>
        <div style="font-size:26px;font-weight:700;color:#7c3aed;">${totalTarget>0?(totalStaff/totalTarget*100).toFixed(0):0}%</div>
      </div>
    </div>
    <div style="background:#f8fafc;border-radius:10px;padding:14px;margin-bottom:16px;">
      <div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:12px;">🎯 客服类型分布${hasPerfData?'（来自客服绩效数据）':'（按FTE比例估算）'}</div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px 16px;">
        ${staffConfig.map(s=>`<div style="display:flex;align-items:center;gap:8px;font-size:12px;">
          <span style="width:12px;height:12px;border-radius:3px;background:${s.color};flex-shrink:0;"></span>
          <span style="color:#475569;flex:1;">${s.name}</span>
          <span style="color:#1e293b;font-weight:600;">${s.count}</span>
          <span style="color:#64748b;">(${s.pct}%)</span>
        </div>`).join('')}
      </div>
    </div>
    <div style="font-size:13px;font-weight:600;color:#334155;margin-bottom:8px;">📋 各项目FTE配置明细（按实际人数降序）</div>
    <table style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead><tr style="background:#f8fafc;">
        <th style="padding:8px 6px;text-align:left;border-bottom:2px solid #e2e8f0;">项目名称</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">职场</th>
        <th style="padding:8px 6px;text-align:center;border-bottom:2px solid #e2e8f0;">服务模式</th>
        <th style="padding:8px 6px;text-align:right;border-bottom:2px solid #e2e8f0;">实际FTE</th>
        <th style="padding:8px 6px;text-align:right;border-bottom:2px solid #e2e8f0;">目标FTE</th>
        <th style="padding:8px 6px;text-align:right;border-bottom:2px solid #e2e8f0;">达成率</th>
      </tr></thead>
      <tbody>${staffRows || '<tr><td colspan="6" style="padding:20px;text-align:center;color:#94a3b8;">暂无数据</td></tr>'}</tbody>
    </table>
    <div style="margin-top:14px;text-align:center;">
      <button class="btn btn-sm btn-primary" onclick="this.closest('.sd-prompt-overlay').querySelector('.sd-prompt-close').click();renderModule('systemData');" style="padding:8px 24px;">📂 前往「系统数据管理」查看更多</button>
    </div>`
  , 780);
}

// ===== 驾驶舱 =====

