// VERSION: 202606091530 - 服务与进度追踪页面重构：四大卡片+评分明细表+健康预警
// ===== Mock 数据 =====

// 管理难度评估数据（自动生成）
const GROUPS_DATA = [{"month":"7月","group":"济南B事业部-Alpha组","manager":"张伟","level":"组长-1-1级","shopCount":6,"categoryCount":1,"platformCount":4,"manageCount":1.0,"qcCount":0.4,"trainCount":0,"evalCount":0.35,"aiCount":0,"csCount":10,"new3m":2,"manageTrainSum":1.4,"storeMgrCount":5,"pptCount":2,"totalStaff":11.75,"manageRatio":7.14285714285714,"shopRatio":6.0,"platformRatio":0.307692307692308},{"month":"7月","group":"济南B事业部-Beta组","manager":"李娜","level":"培训师","shopCount":10,"categoryCount":5,"platformCount":2,"manageCount":0.3,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":3,"new3m":0,"manageTrainSum":0.3,"storeMgrCount":8,"pptCount":0,"totalStaff":3.3,"manageRatio":10.0,"shopRatio":33.3333333333333,"platformRatio":0.153846153846154},{"month":"7月","group":"济南B事业部-Gamma组","manager":"王强","level":"组长-2级","shopCount":2,"categoryCount":2,"platformCount":2,"manageCount":1.0,"qcCount":0.5,"trainCount":0.25,"evalCount":0.7,"aiCount":0,"csCount":9,"new3m":3,"manageTrainSum":1.75,"storeMgrCount":1,"pptCount":2,"totalStaff":11.45,"manageRatio":5.14285714285714,"shopRatio":2.0,"platformRatio":0.153846153846154},{"month":"7月","group":"济南A事业部-Delta组","manager":"刘洋","level":"组长-2级","shopCount":6,"categoryCount":1,"platformCount":4,"manageCount":0.6,"qcCount":0.2,"trainCount":0,"evalCount":0.275,"aiCount":0,"csCount":3,"new3m":1,"manageTrainSum":0.8,"storeMgrCount":3,"pptCount":1,"totalStaff":4.075,"manageRatio":3.75,"shopRatio":10.0,"platformRatio":0.307692307692308},{"month":"7月","group":"济南A事业部-Echo组","manager":"刘洋","level":"组长-2级","shopCount":4,"categoryCount":1,"platformCount":3,"manageCount":0.4,"qcCount":0.2,"trainCount":0,"evalCount":0.06,"aiCount":0,"csCount":3,"new3m":0,"manageTrainSum":0.6,"storeMgrCount":2,"pptCount":1,"totalStaff":3.66,"manageRatio":5.0,"shopRatio":10.0,"platformRatio":0.230769230769231},{"month":"7月","group":"济南A事业部-Foxtrot组","manager":"陈静","level":"组长-2级","shopCount":5,"categoryCount":3,"platformCount":3,"manageCount":1.0,"qcCount":0.33,"trainCount":0.3,"evalCount":0.68,"aiCount":0,"csCount":7,"new3m":0,"manageTrainSum":1.63,"storeMgrCount":5,"pptCount":2,"totalStaff":9.31,"manageRatio":4.29447852760736,"shopRatio":5.0,"platformRatio":0.230769230769231},{"month":"7月","group":"济南A事业部-Golf组","manager":"赵磊","level":"组长-3级","shopCount":2,"categoryCount":1,"platformCount":2,"manageCount":0.7,"qcCount":0.43,"trainCount":0.45,"evalCount":0.35,"aiCount":0.5,"csCount":6,"new3m":1,"manageTrainSum":1.58,"storeMgrCount":2,"pptCount":2,"totalStaff":8.43,"manageRatio":3.79746835443038,"shopRatio":2.85714285714286,"platformRatio":0.153846153846154},{"month":"7月","group":"济南A事业部-Hotel组","manager":"赵磊","level":"组长-3级","shopCount":8,"categoryCount":2,"platformCount":5,"manageCount":0.3,"qcCount":0,"trainCount":0,"evalCount":0.05,"aiCount":0,"csCount":3,"new3m":1,"manageTrainSum":0.3,"storeMgrCount":4,"pptCount":1,"totalStaff":3.35,"manageRatio":10.0,"shopRatio":26.6666666666667,"platformRatio":0.384615384615385},{"month":"7月","group":"济南A事业部-India组","manager":"孙明&周芳","level":"组长-3级","shopCount":1,"categoryCount":1,"platformCount":1,"manageCount":2.0,"qcCount":0.67,"trainCount":0.98,"evalCount":2.2,"aiCount":0.5,"csCount":18,"new3m":5,"manageTrainSum":3.65,"storeMgrCount":1,"pptCount":2,"totalStaff":24.35,"manageRatio":4.93150684931507,"shopRatio":0.5,"platformRatio":0.0769230769230769},{"month":"7月","group":"济南C事业部-Juliet组","manager":"吴涛","level":"组长-3级","shopCount":3,"categoryCount":3,"platformCount":3,"manageCount":0.9,"qcCount":1.9,"trainCount":0,"evalCount":0.53,"aiCount":0,"csCount":4,"new3m":1,"manageTrainSum":2.8,"storeMgrCount":4,"pptCount":6,"totalStaff":7.33,"manageRatio":1.42857142857143,"shopRatio":3.33333333333333,"platformRatio":0.230769230769231},{"month":"7月","group":"济南C事业部-Kilo组","manager":"吴涛","level":"组长-3级","shopCount":4,"categoryCount":1,"platformCount":2,"manageCount":0.1,"qcCount":0.07,"trainCount":0,"evalCount":0.27,"aiCount":0,"csCount":3,"new3m":0,"manageTrainSum":0.17,"storeMgrCount":2,"pptCount":0,"totalStaff":3.44,"manageRatio":17.6470588235294,"shopRatio":40.0,"platformRatio":0.153846153846154},{"month":"7月","group":"济南B事业部-Lima组","manager":"郑华","level":"主管-2级","shopCount":5,"categoryCount":2,"platformCount":5,"manageCount":0.6,"qcCount":0.3,"trainCount":0,"evalCount":0.35,"aiCount":0,"csCount":4,"new3m":1,"manageTrainSum":0.9,"storeMgrCount":2,"pptCount":1,"totalStaff":5.25,"manageRatio":4.44444444444444,"shopRatio":8.33333333333333,"platformRatio":0.384615384615385},{"month":"7月","group":"济南B事业部-Mike组","manager":"郑华","level":"主管-2级","shopCount":6,"categoryCount":2,"platformCount":5,"manageCount":0.4,"qcCount":0,"trainCount":0,"evalCount":0.1,"aiCount":0,"csCount":4,"new3m":1,"manageTrainSum":0.4,"storeMgrCount":4,"pptCount":1,"totalStaff":4.5,"manageRatio":10.0,"shopRatio":15.0,"platformRatio":0.384615384615385},{"month":"7月","group":"济南B事业部-November组","manager":"黄丽","level":"主管-2级","shopCount":2,"categoryCount":1,"platformCount":1,"manageCount":3.0,"qcCount":0.5,"trainCount":1.0,"evalCount":1.0,"aiCount":0.5,"csCount":37,"new3m":32,"manageTrainSum":4.5,"storeMgrCount":2,"pptCount":4,"totalStaff":43.0,"manageRatio":8.22222222222222,"shopRatio":0.666666666666667,"platformRatio":0.0769230769230769},{"month":"7月","group":"济南支持组-Oscar组","manager":"林峰","level":"主管-1级","shopCount":2,"categoryCount":1,"platformCount":2,"manageCount":0.5,"qcCount":0.15,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":3,"new3m":0,"manageTrainSum":0.65,"storeMgrCount":1,"pptCount":4,"totalStaff":3.65,"manageRatio":4.61538461538461,"shopRatio":4.0,"platformRatio":0.153846153846154},{"month":"7月","group":"济南C事业部-Papa组","manager":"徐杰","level":"组长-1-1级","shopCount":3,"categoryCount":1,"platformCount":2,"manageCount":0.4,"qcCount":0.5,"trainCount":0.02,"evalCount":0.2,"aiCount":0,"csCount":3,"new3m":1,"manageTrainSum":0.92,"storeMgrCount":3,"pptCount":1,"totalStaff":4.12,"manageRatio":3.26086956521739,"shopRatio":7.5,"platformRatio":0.153846153846154},{"month":"7月","group":"济南A事业部-Quebec组","manager":"徐杰","level":"组长-1-1级","shopCount":4,"categoryCount":2,"platformCount":2,"manageCount":0.6,"qcCount":0.5,"trainCount":0,"evalCount":0.3,"aiCount":0,"csCount":3,"new3m":1,"manageTrainSum":1.1,"storeMgrCount":2,"pptCount":1,"totalStaff":4.4,"manageRatio":2.72727272727273,"shopRatio":6.66666666666667,"platformRatio":0.153846153846154},{"month":"定量指标汇总","group":"","manager":"","level":"","shopCount":0,"categoryCount":0,"platformCount":0,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"月份","group":"管理姓名","manager":"客服人数","level":"3个月内人数","shopCount":"管理+质培人数","categoryCount":"店长对接人数","platformCount":"PPT年度汇报次数","manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"张伟","manager":"10","level":"2","shopCount":1.4,"categoryCount":5,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"李娜","manager":"3","level":"","shopCount":0.3,"categoryCount":8,"platformCount":0,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"王强","manager":"9","level":"3","shopCount":1.75,"categoryCount":1,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"刘洋","manager":"6","level":"1","shopCount":1.4,"categoryCount":5,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"陈静","manager":"7","level":"","shopCount":1.63,"categoryCount":5,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"赵磊","manager":"9","level":"2","shopCount":1.88,"categoryCount":6,"platformCount":3,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"孙明&周芳","manager":"9","level":"5","shopCount":3.65,"categoryCount":1,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"吴涛","manager":"7","level":"1","shopCount":2.97,"categoryCount":6,"platformCount":6,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"郑华","manager":"8","level":"2","shopCount":1.3,"categoryCount":6,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"黄丽","manager":"12.3333333333333","level":"32","shopCount":4.5,"categoryCount":2,"platformCount":4,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"林峰","manager":"3","level":"","shopCount":0.65,"categoryCount":1,"platformCount":4,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7月","group":"徐杰","manager":"6","level":"2","shopCount":2.02,"categoryCount":5,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0}];
const ASSESSMENTS_DATA = [{"month":"7月","dept":"B事业部","group":"Alpha组","manager":"张伟","level":"组长-1-1级","totalScore":65.4428571428572,"quantScore":43.4428571428571,"qualScore":22.0,"csCountScore":10.0,"new3mScore":2.0,"ratioScore":1.4,"storeMgrScore":5.0,"pptScore":2.0,"qual1":3,"qual2":3,"qual3":3,"qual4":3,"qual5":3,"qual6":1,"qual7":3,"qual8":0},{"month":"7月","dept":"B事业部","group":"Beta组","manager":"李娜","level":"培训师","totalScore":8.0,"quantScore":0,"qualScore":8.0,"csCountScore":3.0,"new3mScore":0,"ratioScore":0.3,"storeMgrScore":8.0,"pptScore":0,"qual1":0,"qual2":0,"qual3":1,"qual4":0,"qual5":3,"qual6":3,"qual7":0,"qual8":0},{"month":"7月","dept":"B事业部","group":"Gamma组","manager":"王强","level":"组长-2级","totalScore":52.2261904761905,"quantScore":34.2261904761905,"qualScore":18.0,"csCountScore":9.0,"new3mScore":3.0,"ratioScore":1.75,"storeMgrScore":1.0,"pptScore":2.0,"qual1":2,"qual2":1,"qual3":1,"qual4":3,"qual5":1,"qual6":1,"qual7":3,"qual8":0},{"month":"7月","dept":"A事业部","group":"Delta手表&Echo组","manager":"刘洋","level":"组长-2级","totalScore":40.2523809523809,"quantScore":32.2523809523809,"qualScore":8.0,"csCountScore":6.0,"new3mScore":1.0,"ratioScore":1.4,"storeMgrScore":5.0,"pptScore":2.0,"qual1":1,"qual2":0,"qual3":1,"qual4":1,"qual5":2,"qual6":1,"qual7":0,"qual8":0},{"month":"7月","dept":"A事业部","group":"Foxtrot组","manager":"陈静","level":"组长-2级","totalScore":41.3598159509203,"quantScore":31.3598159509202,"qualScore":10.0,"csCountScore":7.0,"new3mScore":0,"ratioScore":1.63,"storeMgrScore":5.0,"pptScore":2.0,"qual1":0,"qual2":0,"qual3":1,"qual4":1,"qual5":2,"qual6":3,"qual7":0,"qual8":2},{"month":"7月","dept":"A事业部","group":"Golf组&Hotel2&Hotel","manager":"赵磊","level":"组长-3级","totalScore":60.0971158392435,"quantScore":41.0971158392435,"qualScore":19.0,"csCountScore":9.0,"new3mScore":2.0,"ratioScore":1.88,"storeMgrScore":6.0,"pptScore":3.0,"qual1":3,"qual2":1,"qual3":3,"qual4":1,"qual5":3,"qual6":3,"qual7":1,"qual8":2},{"month":"7月","dept":"A事业部","group":"India组","manager":"孙明&周芳","level":"组长-3级","totalScore":47.75,"quantScore":31.75,"qualScore":16.0,"csCountScore":9.0,"new3mScore":5.0,"ratioScore":3.65,"storeMgrScore":1.0,"pptScore":2.0,"qual1":3,"qual2":2,"qual3":2,"qual4":3,"qual5":1,"qual6":1,"qual7":1,"qual8":2},{"month":"7月","dept":"A事业部","group":"Juliet组&手表拼多多&抖音","manager":"吴涛","level":"组长-3级","totalScore":60.6385714285714,"quantScore":41.6385714285714,"qualScore":19.0,"csCountScore":7.0,"new3mScore":1.0,"ratioScore":2.97,"storeMgrScore":6.0,"pptScore":6.0,"qual1":3,"qual2":2,"qual3":2,"qual4":3,"qual5":2,"qual6":3,"qual7":0,"qual8":3},{"month":"7月","dept":"B事业部","group":"Lima&Lima2&Mike组","manager":"郑华","level":"主管-2级","totalScore":55.3830769230769,"quantScore":41.3830769230769,"qualScore":14.0,"csCountScore":8.0,"new3mScore":2.0,"ratioScore":1.3,"storeMgrScore":6.0,"pptScore":2.0,"qual1":2,"qual2":0,"qual3":1,"qual4":2,"qual5":2,"qual6":2,"qual7":1,"qual8":0},{"month":"7月","dept":"C事业部","group":"November组","manager":"黄丽","level":"主管-2级","totalScore":59.57,"quantScore":39.57,"qualScore":20.0,"csCountScore":12.3333333333333,"new3mScore":32.0,"ratioScore":4.5,"storeMgrScore":2.0,"pptScore":4.0,"qual1":2,"qual2":3,"qual3":3,"qual4":3,"qual5":1,"qual6":1,"qual7":2,"qual8":1},{"month":"7月","dept":"支持组","group":"Oscar组","manager":"林峰","level":"主管-1级","totalScore":32.6923076923077,"quantScore":28.6923076923077,"qualScore":4.0,"csCountScore":3.0,"new3mScore":0,"ratioScore":0.65,"storeMgrScore":1.0,"pptScore":4.0,"qual1":0,"qual2":1,"qual3":1,"qual4":0,"qual5":1,"qual6":1,"qual7":0,"qual8":0},{"month":"7月","dept":"A事业部","group":"Quebec组&Papa","manager":"徐杰","level":"组长-1-1级","totalScore":43.1333333333333,"quantScore":32.1333333333333,"qualScore":11.0,"csCountScore":6.0,"new3mScore":2.0,"ratioScore":2.02,"storeMgrScore":5.0,"pptScore":2.0,"qual1":1,"qual2":1,"qual3":1,"qual4":2,"qual5":1,"qual6":3,"qual7":1,"qual8":0},{"month":"1、项目管理难度依据定量与定性综合评估法计算得分，定量指标权重占比70%，定性因素权重占比30%；\n2、定量指标下有5项，100分/项，70%权重下共计70分；定性因素10项，不涉及或可以忽略，则为0分；如涉及则根据大、中、小计算每项得分分别为3分、2分和1分，最高得分30分，合计100分；\n3、定量难度指标为关键指标，原则上管理人数越多or新人占比越高or管理配置越少or对接项目越多or复盘次数越多，管理难度越大；定性因素主要为附加补充因素，需要依据特殊项目实际业务开展情况评分；\n4、管理难度评估参考标准分：\n     组长1-1/1-2级：管理难度30-40分\n     组长2级：管理难度41-50分\n     组长3级：管理难度51-60分\n     主管级1/2/3：管理难度61-80分\n     经理级1/2/3：管理难度＞81分\n5、依据现阶段团队管理水平及所负责店铺管理难度，管理等级在上述参考标准分之内，同时设定基准分数差值±5分均为正常值，基准分差值＞5分，适当给予奖励or补助；\n6、此管理难度评估为短期行为，同时要基于管理难度评分与管理者自身能力水平进行匹配：管理难度高，管理水平高，但超出5分差异，奖励金额X元；\n     管理难度高，管理水平低，但因特殊情况，如无法快速调换组别，无法快速补充人员等，可补助金额Y元；管理难度低，管理水平高/低，优先调配组别，但无补助；\n7、管理奖励/补助参考金额：\n      基准分差值5-10分，奖励/补助金额500元\n      基准分差值11-15分，奖励/补助金额1000元\n      基准分差值16-20分，奖励/补助金额1500元\n","dept":"","group":"","manager":"","level":"","totalScore":0,"quantScore":0,"qualScore":0,"csCountScore":0,"new3mScore":0,"ratioScore":0,"storeMgrScore":0,"pptScore":0,"qual1":0,"qual2":0,"qual3":0,"qual4":0,"qual5":0,"qual6":0,"qual7":0,"qual8":0}];




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

  {id:1, projectId:"P002", projectName:"家电自营客服项目", type:"整改", desc:"连续两周满意度低于目标值4.7", priority:"重要", owner:"刘洋", assignee:"刘洋", status:"处理中", source:"监控预警", responsibility:"承接方", createdAt:"2026-05-15", solution:""},

  {id:2, projectId:"P003", projectName:"服装品牌客服外包", type:"客诉", desc:"大促期间系统崩溃导致回复超时，品牌方投诉", priority:"紧急", owner:"陈静", assignee:"陈静", status:"待验收", source:"品牌反馈", responsibility:"共同", createdAt:"2026-05-10", solution:"已搭建备用会话分配机制，增加熔断保护"},

  {id:3, projectId:"P006", projectName:"运动品牌客服项目", type:"优化", desc:"项目利润率持续为负，需重新核算成本结构", priority:"紧急", owner:"陈静", assignee:"王强", status:"待处理", source:"财务预警", responsibility:"承接方", createdAt:"2026-05-20", solution:""},

  {id:4, projectId:"P001", projectName:"美妆旗舰店客服项目", type:"优化", desc:"大促预案需要更新，去年双11出现人手不足", priority:"一般", owner:"张伟", assignee:"张伟", status:"已关闭", source:"人工上报", responsibility:"承接方", createdAt:"2026-04-01", solution:"已完成大促人力预案，增加20%临时人力储备"},

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

var DEFAULT_RISK_ALERTS = [
  {id:1, projectId:"P003", projectName:"服装品牌客服外包", riskType:"健康状态", severity:"🔴 高风险", indicator:"健康状态：🔴 风险", triggerValue:"连续3周红色", threshold:"健康状态不得连续2周红色", status:"未处理", createdAt:"2026-05-28"},
  {id:2, projectId:"P002", projectName:"家电自营客服项目", riskType:"SLA超标", severity:"🟡 中风险", indicator:"平均响应时长：88s", triggerValue:"88s > 目标90s", threshold:"响应时长 ≤ SLA响应目标", status:"处理中", createdAt:"2026-05-30"},
  {id:3, projectId:"P006", projectName:"运动品牌客服项目", riskType:"成本超支", severity:"🔴 高风险", indicator:"利润率：-10.7%", triggerValue:"-10.7% < 目标≥0%", threshold:"项目利润率 ≥ 0%", status:"未处理", createdAt:"2026-05-25"},
  {id:4, projectId:"P001", projectName:"美妆旗舰店客服项目", riskType:"满意度下滑", severity:"🟡 中风险", indicator:"CSAT：4.9", triggerValue:"4.9 较上月下降0.2", threshold:"CSAT ≥ 4.7", status:"已忽略", createdAt:"2026-05-20"},
  {id:5, projectId:"P005", projectName:"食品生鲜客服项目", riskType:"SLA超标", severity:"🟡 中风险", indicator:"平均响应时长：92s", triggerValue:"92s > 目标90s", threshold:"响应时长 ≤ SLA响应目标", status:"处理中", createdAt:"2026-05-31"},
];
var RISK_ALERTS = [];


var DEFAULT_KNOWLEDGE = [

  {id:1, title:"美妆大促客服标准话术SOP", type:"SOP流程优化", tags:"美妆,大促,SOP,话术", scope:"通用", permission:"公开", createdAt:"2025-11-20", updateTime:"2026-06-08", views:328, downloads:56, description:"双11大促期间美妆类目的客服应对标准流程，包含快速回复话术、退换货处理、投诉升级路径等核心内容。"},

  {id:2, title:"差评应急处理流程（含模板）", type:"风控应急预案", tags:"差评,应急,模板", scope:"通用", permission:"公开", createdAt:"2026-01-15", updateTime:"2026-06-05", views:256, downloads:43, description:"差评出现后的标准应急处理流程，包含分类型差评回复模板、内部升级机制、数据复盘等环节。"},

  {id:3, title:"AI智能回复配置指南 v2.0", type:"AI提效赋能", tags:"AI,智能回复,配置", scope:"通用", permission:"公开", createdAt:"2026-03-10", updateTime:"2026-06-03", views:198, downloads:67, description:"AI智能回复系统的配置指南v2.0，包含知识库搭建、回复规则配置、人工兜底策略等全流程指引。"},

  {id:4, title:"成本控制目标分解表（Q2）", type:"成本目标控制", tags:"成本,目标,分解,Q2", scope:"全平台", permission:"内部", createdAt:"2026-04-01", updateTime:"2026-06-01", views:145, downloads:28, description:"2026年Q2成本控制目标分解表，包含各项目标成本率、实际执行跟踪、偏差分析等核心数据。"},

  {id:5, title:"新客服入职培训手册（2026版）", type:"培训材料", tags:"培训,新人,入职,手册", scope:"通用", permission:"公开", createdAt:"2025-09-01", updateTime:"2026-05-28", views:412, downloads:89, description:"2026版新人客服入职培训手册，涵盖平台规则、产品知识、话术基础、系统操作、异常处理五大模块。"},

  {id:6, title:"高频客诉问题话术精选", type:"优秀话术萃取", tags:"客诉,话术,精选,高频", scope:"通用", permission:"公开", createdAt:"2026-02-20", updateTime:"2026-05-25", views:367, downloads:72, description:"各项目高频客诉问题的优秀回复话术精选集，覆盖物流、质量、退换货等十大类常见客诉场景。"},

  {id:7, title:"BPO项目人力成本优化方案", type:"成本目标控制", tags:"BPO,人力,成本,优化", scope:"特定品类", permission:"受限", createdAt:"2026-05-10", updateTime:"2026-06-07", views:89, downloads:15, description:"BPO项目人力成本优化方案，包含排班模型优化、技能矩阵提升、多项目共享池等降本增效策略。"},

  {id:8, title:"大促前系统压测操作指引", type:"风控应急预案", tags:"大促,系统,压测,操作", scope:"通用", permission:"内部", createdAt:"2026-04-15", updateTime:"2026-05-30", views:124, downloads:31, description:"大促前系统压力测试的标准操作指引文档，涵盖压测场景设计、执行步骤、问题记录及修复跟踪。"},

];
var DEFAULT_HANDOVERS = [

  {id:1, projectId:"P001", projectName:"美妆旗舰店客服项目", from:"王芳", to:"张伟", date:"2026-03-15", status:"已完成", summary:"完成全部基础档案+目标交接，运营数据已同步"},

  {id:2, projectId:"P003", projectName:"服装品牌客服外包", from:"赵丽", to:"陈静", date:"2025-11-20", status:"已完成", summary:"BPO特殊成本核算方式已重点交接"},

  {id:3, projectId:"P005", projectName:"食品生鲜客服项目", from:"孙磊", to:"刘洋", date:"2026-02-28", status:"已完成", summary:"食品类目的特殊退换货政策已交接"},

];
var HANDOVERS = [];




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
      console.log('[Toast] ' + msg);
    }
  } catch(e) {
    console.log('[Toast] ' + msg);
  }
}

// ===== 数据持久化（彻底修复版）=====
// 安全写入 localStorage（带 quota 处理和用户提示）
function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch(e) {
    console.error('[safeSetItem]', key, '写入失败:', e);
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
          console.log('[safeSetItem] 已清理 ' + cleaned + ' 个大头像，重试写入');
          localStorage.setItem(key, value);
          return true;
        }
      } catch(e2) {}
      alert('浏览器存储空间不足，无法保存修改！\n请清理浏览器数据（设置→隐私和安全→清除浏览数据），然后重新登录。');
    }
    return false;
  }
}

// 默认用户数据（只在首次初始化时使用）
var DEFAULT_USERS = [
  {id:"U001", name:"系统创建者", username:"admin", role:"超级管理员", status:"已激活", registerTime:"2025-01-01", password:"admin123", phone:"138****0001", email:"admin@chanseen.com", approvedBy:"system", remark:"系统初始化超级管理员"},
  {id:"U002", name:"王管理", username:"wangadmin", role:"管理员", status:"已激活", registerTime:"2025-03-15", password:"wang456", phone:"139****1111", email:"wang@chanseen.com", approvedBy:"admin", remark:""},
  {id:"U003", name:"李组长", username:"lilead", role:"客服组长", status:"待审核", registerTime:"2026-05-20", password:"li789", phone:"137****2222", email:"li@chanseen.com", approvedBy:"", remark:"新入职申请"},
  {id:"U004", name:"张主管", username:"zhangsup", role:"客服主管", status:"已拒绝", registerTime:"2026-05-18", password:"zhang000", phone:"136****3333", email:"zhang@chanseen.com", approvedBy:"wangadmin", remark:"信息不完整"},
  {id:"U005", name:"陈经理", username:"chenmgr", role:"客服经理", status:"已激活", registerTime:"2025-06-10", password:"chen111", phone:"135****4444", email:"chen@chanseen.com", approvedBy:"admin", remark:""},
  {id:"U006", name:"赵专员", username:"zhaocs", role:"客服组长", status:"待审核", registerTime:"2026-06-01", password:"zhao222", phone:"134****5555", email:"zhao@chanseen.com", approvedBy:"", remark:"跨部门调动"}
];

var DEFAULT_PROJECTS = [
  {id:"P001", name:"美妆旗舰店客服项目", brand:"兰蔻", category:"美妆", serviceMode:"TP项目", workplace:"济南", pm:"张伟", director:"李明", pmHistory:[{name:"王芳", from:"2025-06", to:"2026-03", reason:"调岗"}], status:"优质健康店", startDate:"2025-04-01", endDate:"2026-12-31", base:"济南职场2F", platforms:"天猫,抖音", serviceHours:"09:00-24:00", fteTarget:30, slaResponse:120, slaResolve:360, costBudget:450000, revenue:520000, profitRate:13.5, health:"🟢"},
  {id:"P002", name:"家电自营客服项目", brand:"美的", category:"家电", serviceMode:"DP项目", workplace:"淄博", pm:"刘洋", director:"王强", pmHistory:[], status:"平稳常规店", startDate:"2025-01-15", endDate:"2026-12-31", base:"淄博职场1F", platforms:"京东,天猫", serviceHours:"08:00-22:00", fteTarget:45, slaResponse:90, slaResolve:300, costBudget:680000, revenue:750000, profitRate:9.3, health:"🟡"},
  {id:"P003", name:"服装品牌客服外包", brand:"优衣库", category:"服装", serviceMode:"BPO项目", workplace:"杭州", pm:"陈静", director:"李明", pmHistory:[{name:"赵丽", from:"2025-01", to:"2025-11", reason:"离职"}], status:"风险预警店", startDate:"2025-01-10", endDate:"2026-06-30", base:"杭州职场3F", platforms:"全平台", serviceHours:"08:00-24:00", fteTarget:60, slaResponse:60, slaResolve:240, costBudget:880000, revenue:920000, profitRate:4.3, health:"🔴"},
  {id:"P004", name:"母婴用品客服项目", brand:"好孩子", category:"母婴", serviceMode:"TP项目", workplace:"济南", pm:"张伟", director:"王强", pmHistory:[], status:"优质健康店", startDate:"2025-08-01", endDate:"2027-01-31", base:"济南职场2F", platforms:"天猫,京东,拼多多", serviceHours:"09:00-21:00", fteTarget:25, slaResponse:120, slaResolve:360, costBudget:320000, revenue:380000, profitRate:15.8, health:"🟢"},
  {id:"P005", name:"食品生鲜客服项目", brand:"三只松鼠", category:"食品", serviceMode:"DP项目", workplace:"淄博", pm:"刘洋", director:"李明", pmHistory:[{name:"孙磊", from:"2025-03", to:"2026-02", reason:"内部调换"}], status:"平稳常规店", startDate:"2025-03-01", endDate:"2026-08-31", base:"淄博职场1F", platforms:"天猫,抖音", serviceHours:"08:00-23:00", fteTarget:35, slaResponse:90, slaResolve:300, costBudget:520000, revenue:600000, profitRate:13.3, health:"🟡"},
  {id:"P006", name:"运动品牌客服项目", brand:"耐克", category:"运动", serviceMode:"BPO项目", workplace:"杭州", pm:"陈静", director:"王强", pmHistory:[], status:"高危问题店", startDate:"2025-06-01", endDate:"2026-05-31", base:"杭州职场3F", platforms:"天猫,官网", serviceHours:"09:00-21:00", fteTarget:20, slaResponse:60, slaResolve:240, costBudget:280000, revenue:250000, profitRate:-10.7, health:"🔴"},
  {id:"P007", name:"智能家居客服项目", brand:"小米", category:"智能硬件", serviceMode:"TP项目", workplace:"无锡", pm:"张伟", director:"李明", pmHistory:[], status:"优质健康店", startDate:"2026-03-01", endDate:"2027-02-28", base:"无锡职场1F", platforms:"天猫,京东,抖音", serviceHours:"09:00-22:00", fteTarget:35, slaResponse:90, slaResolve:300, costBudget:420000, revenue:480000, profitRate:12.5, health:"🟢"}
];

// 初始化 USERS
var USERS = [];
(function initUsers() {
  var raw = localStorage.getItem('chansee_users');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      USERS = JSON.parse(raw);
      console.log('[init] 从 localStorage 恢复 ' + USERS.length + ' 个用户');
      return;
    } catch(e) {
      console.error('[init] 用户数据损坏，重置:', e);
    }
  }
  // 首次初始化
  USERS = JSON.parse(JSON.stringify(DEFAULT_USERS));
  safeSetItem('chansee_users', JSON.stringify(USERS));
  console.log('[init] 首次初始化用户数据');
})();

// 初始化 PROJECTS
var PROJECTS = [];
(function initProjects() {
  var raw = localStorage.getItem('chansee_projects');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      PROJECTS = JSON.parse(raw);
      console.log('[init] 从 localStorage 恢复 ' + PROJECTS.length + ' 个项目');
      return;
    } catch(e) {
      console.error('[init] 项目数据损坏，重置:', e);
    }
  }
  PROJECTS = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
  safeSetItem('chansee_projects', JSON.stringify(PROJECTS));
  console.log('[init] 首次初始化项目数据');
})();

// 初始化 OPERATIONS
(function initOperations() {
  var raw = localStorage.getItem('chansee_operations');
  if (raw && raw !== 'null' && raw !== '[]') {
    try { OPERATIONS = JSON.parse(raw); console.log('[init] 恢复 ' + OPERATIONS.length + ' 条运营数据'); return; } catch(e) { console.error('[init] 运营数据损坏:', e); }
  }
  OPERATIONS = JSON.parse(JSON.stringify(DEFAULT_OPERATIONS));
  safeSetItem('chansee_operations', JSON.stringify(OPERATIONS));
  console.log('[init] 首次初始化运营数据');
})();

// 初始化 ISSUES
(function initIssues() {
  var raw = localStorage.getItem('chansee_issues');
  if (raw && raw !== 'null' && raw !== '[]') {
    try { ISSUES = JSON.parse(raw); console.log('[init] 恢复 ' + ISSUES.length + ' 个问题'); return; } catch(e) { console.error('[init] 问题数据损坏:', e); }
  }
  ISSUES = JSON.parse(JSON.stringify(DEFAULT_ISSUES));
  safeSetItem('chansee_issues', JSON.stringify(ISSUES));
  console.log('[init] 首次初始化问题数据');
})();

// 初始化 AGENT_PERFORMANCE
(function initAgentPerformance() {
  var raw = localStorage.getItem('chansee_agent_performance');
  if (raw && raw !== 'null' && raw !== '[]') {
    try { AGENT_PERFORMANCE = JSON.parse(raw); console.log('[init] 恢复 ' + AGENT_PERFORMANCE.length + ' 条坐席数据'); return; } catch(e) { console.error('[init] 坐席数据损坏:', e); }
  }
  AGENT_PERFORMANCE = JSON.parse(JSON.stringify(DEFAULT_AGENT_PERFORMANCE));
  safeSetItem('chansee_agent_performance', JSON.stringify(AGENT_PERFORMANCE));
  console.log('[init] 首次初始化坐席数据');
})();

// 初始化 GROUP_LOAD_RATIO
(function initGroupLoadRatio() {
  var raw = localStorage.getItem('chansee_group_load_ratio');
  if (raw && raw !== 'null' && raw !== '[]') {
    try { GROUP_LOAD_RATIO = JSON.parse(raw); console.log('[init] 恢复 ' + GROUP_LOAD_RATIO.length + ' 条组别负荷比'); return; } catch(e) { console.error('[init] 组别负荷比损坏:', e); }
  }
  GROUP_LOAD_RATIO = JSON.parse(JSON.stringify(DEFAULT_GROUP_LOAD_RATIO || []));
  safeSetItem('chansee_group_load_ratio', JSON.stringify(GROUP_LOAD_RATIO));
  console.log('[init] 首次初始化组别负荷比');
})();

// 初始化 PERFORMANCE_WEIGHTS
(function initPerformanceWeights() {
  var raw = localStorage.getItem('chansee_performance_weights');
  if (raw && raw !== 'null' && raw !== '{}') {
    try { PERFORMANCE_WEIGHTS = JSON.parse(raw); console.log('[init] 恢复绩效权重配置'); return; } catch(e) { console.error('[init] 绩效权重损坏:', e); }
  }
  PERFORMANCE_WEIGHTS = JSON.parse(JSON.stringify(DEFAULT_PERFORMANCE_WEIGHTS || {}));
  safeSetItem('chansee_performance_weights', JSON.stringify(PERFORMANCE_WEIGHTS));
  console.log('[init] 首次初始化绩效权重');
})();

// 初始化 RISK_ALERTS
(function initRiskAlerts() {
  var raw = localStorage.getItem('chansee_risk_alerts');
  if (raw && raw !== 'null' && raw !== '[]') {
    try { RISK_ALERTS = JSON.parse(raw); console.log('[init] 恢复 ' + RISK_ALERTS.length + ' 条风险预警'); return; } catch(e) { console.error('[init] 风险预警数据损坏:', e); }
  }
  RISK_ALERTS = JSON.parse(JSON.stringify(DEFAULT_RISK_ALERTS));
  safeSetItem('chansee_risk_alerts', JSON.stringify(RISK_ALERTS));
  console.log('[init] 首次初始化风险预警数据');
})();

// 初始化 KNOWLEDGE
(function initKnowledge() {
  var raw = localStorage.getItem('chansee_knowledge');
  if (raw && raw !== 'null' && raw !== '[]') {
    try { KNOWLEDGE = JSON.parse(raw); console.log('[init] 恢复 ' + KNOWLEDGE.length + ' 条知识库'); return; } catch(e) { console.error('[init] 知识库数据损坏:', e); }
  }
  KNOWLEDGE = JSON.parse(JSON.stringify(DEFAULT_KNOWLEDGE));
  safeSetItem('chansee_knowledge', JSON.stringify(KNOWLEDGE));
  console.log('[init] 首次初始化知识库数据');
})();

// 初始化 HANDOVERS
(function initHandovers() {
  var raw = localStorage.getItem('chansee_handovers');
  if (raw && raw !== 'null' && raw !== '[]') {
    try { HANDOVERS = JSON.parse(raw); console.log('[init] 恢复 ' + HANDOVERS.length + ' 条交接记录'); return; } catch(e) { console.error('[init] 交接记录数据损坏:', e); }
  }
  HANDOVERS = JSON.parse(JSON.stringify(DEFAULT_HANDOVERS));
  safeSetItem('chansee_handovers', JSON.stringify(HANDOVERS));
  console.log('[init] 首次初始化交接记录数据');
})();

function saveUsers() {
  var ok = safeSetItem('chansee_users', JSON.stringify(USERS));
  if (!ok) { alert('⚠️ 用户数据保存失败！\n可能是浏览器存储空间不足，请清理浏览器数据后重试。'); return; }
  // 同步到 CloudBase
  if (window.CloudBaseSync) {
    // 添加日志：显示正在保存的数据
    console.log('[saveUsers] 正在保存用户数据到云端，共 ' + USERS.length + ' 条');
    console.log('[saveUsers] 当前用户数据:', JSON.stringify(USERS.find(u => u.id === currentUser?.id)));
    
    var p = window.CloudBaseSync.saveAll();
    if (p && typeof p.then === 'function') {
      p.then(function(success) {
        if (success) {
          console.log('[saveUsers] ✅ CloudBase 同步成功');
          // 云端保存成功时，记录成功标记
          try { localStorage.setItem('chansee_users_cloud_saved', 'true'); } catch(e) {}
        } else {
          console.warn('[saveUsers] ❌ CloudBase 同步失败，数据仅保存在本地');
          // 云端保存失败，给用户提示
          if (typeof showToast === 'function') {
            showToast('⚠️ 云端保存失败，数据仅保存在本地浏览器');
          } else {
            console.warn('⚠️ 云端保存失败，数据仅保存在本地浏览器。切换设备或清除浏览器数据后会丢失！');
          }
          // 标记云端保存失败
          try { localStorage.setItem('chansee_users_cloud_saved', 'false'); } catch(e) {}
        }
      }).catch(function(err) {
        console.error('[saveUsers] ❌ CloudBase 同步异常:', err);
        if (typeof showToast === 'function') {
          showToast('⚠️ 云端保存异常，数据仅保存在本地浏览器');
        }
        try { localStorage.setItem('chansee_users_cloud_saved', 'false'); } catch(e) {}
      });
    }
  }
}
function saveProjects() {
  var ok = safeSetItem('chansee_projects', JSON.stringify(PROJECTS));
  if (!ok) { alert('⚠️ 项目数据保存失败！\n可能是浏览器存储空间不足，请清理浏览器数据后重试。'); return; }
  // 同步到 CloudBase
  if (window.CloudBaseSync) {
    var p = window.CloudBaseSync.saveAll();
    if (p && typeof p.then === 'function') {
      p.then(function(success) {
        if (success) {
          console.log('[saveProjects] CloudBase 同步成功');
        } else {
          console.warn('[saveProjects] CloudBase 同步失败，数据仅保存在本地');
        }
      });
    }
  }
}

function saveOperations() {
  safeSetItem('chansee_operations', JSON.stringify(OPERATIONS));
  if (window.CloudBaseSync) { var p = window.CloudBaseSync.saveAll(); if (p && typeof p.then === 'function') { p.then(function(s){ if(s) console.log('[saveOperations] CloudBase 同步成功'); else console.warn('[saveOperations] CloudBase 同步失败'); }); } }
}
function saveIssues() {
  safeSetItem('chansee_issues', JSON.stringify(ISSUES));
  if (window.CloudBaseSync) { var p = window.CloudBaseSync.saveAll(); if (p && typeof p.then === 'function') { p.then(function(s){ if(s) console.log('[saveIssues] CloudBase 同步成功'); else console.warn('[saveIssues] CloudBase 同步失败'); }); } }
}
function saveAgentPerformance() {
  safeSetItem('chansee_agent_performance', JSON.stringify(AGENT_PERFORMANCE));
  safeSetItem('chansee_group_load_ratio', JSON.stringify(GROUP_LOAD_RATIO));
  safeSetItem('chansee_performance_weights', JSON.stringify(PERFORMANCE_WEIGHTS));
  if (window.CloudBaseSync) { var p = window.CloudBaseSync.saveAll(); if (p && typeof p.then === 'function') { p.then(function(s){ if(s) console.log('[saveAgentPerformance] CloudBase 同步成功'); else console.warn('[saveAgentPerformance] CloudBase 同步失败'); }); } }
}
function saveRiskAlerts() {
  safeSetItem('chansee_risk_alerts', JSON.stringify(RISK_ALERTS));
  if (window.CloudBaseSync) { var p = window.CloudBaseSync.saveAll(); if (p && typeof p.then === 'function') { p.then(function(s){ if(s) console.log('[saveRiskAlerts] CloudBase 同步成功'); else console.warn('[saveRiskAlerts] CloudBase 同步失败'); }); } }
}
function saveKnowledge() {
  safeSetItem('chansee_knowledge', JSON.stringify(KNOWLEDGE));
  if (window.CloudBaseSync) { var p = window.CloudBaseSync.saveAll(); if (p && typeof p.then === 'function') { p.then(function(s){ if(s) console.log('[saveKnowledge] CloudBase 同步成功'); else console.warn('[saveKnowledge] CloudBase 同步失败'); }); } }
}
function saveHandovers() {
  safeSetItem('chansee_handovers', JSON.stringify(HANDOVERS));
  if (window.CloudBaseSync) { var p = window.CloudBaseSync.saveAll(); if (p && typeof p.then === 'function') { p.then(function(s){ if(s) console.log('[saveHandovers] CloudBase 同步成功'); else console.warn('[saveHandovers] CloudBase 同步失败'); }); } }
}

// 级联删除项目及所有关联数据
function deleteProject(id) {
  if (!confirm('确认删除项目 ' + id + '？\n\n此操作不可恢复！')) return;
  PROJECTS = PROJECTS.filter(function(p){ return p.id !== id; });
  saveProjects();
  alert('项目 ' + id + ' 已删除！');
  renderArchive();
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
  try {
    // 先检查 login.html 的登录状态
    const authStr = localStorage.getItem('chanseen_auth');
    if (authStr) {
      try {
        const auth = JSON.parse(authStr);
        const maxAge = auth.remember ? 7 * 24 * 60 * 60 * 1000 : 60 * 60 * 1000;
        if (auth.token && (Date.now() - auth.loginAt) < maxAge) {
          // 【防重置修复】加载云端数据前，先备份本地的用户数据
          var localUsersBackup = null;
          try {
            var localUsersStr = localStorage.getItem('chansee_users');
            if (localUsersStr) {
              localUsersBackup = JSON.parse(localUsersStr);
              console.log('[checkLogin] 已备份本地用户数据，共 ' + localUsersBackup.length + ' 条');
            }
          } catch(e) {
            console.warn('[checkLogin] 备份本地用户数据失败:', e);
          }

          // login.html 登录：先从云端加载最新用户数据，再用云端数据构建 currentUser
          if (window.CloudBaseSync) {
            try {
              console.log('[checkLogin] login.html路径：开始从云端加载用户数据...');
              await window.CloudBaseSync.loadAll();
              var savedUsers = localStorage.getItem('chansee_users');
              if (savedUsers) {
                USERS = JSON.parse(savedUsers);
                console.log('[checkLogin] login.html路径：已从云端恢复USERS，共 ' + USERS.length + ' 条');
              }
            } catch(e) {
              console.warn('[checkLogin] login.html路径：云端加载失败，使用本地数据');
            }
          }

          // 【防重置修复】检查云端加载的数据是否导致数据丢失，如果是，用本地备份恢复
          if (localUsersBackup && Array.isArray(localUsersBackup)) {
            var currentUsername = auth.user?.username || auth.user?.name || 'admin';
            var cloudUser = USERS.find(u => u.username === currentUsername);
            var localUser = localUsersBackup.find(u => u.username === currentUsername);
            
            // 如果云端用户缺少昵称或昵称是默认的，而本地备份里有正确的昵称，就用本地备份恢复
            if (localUser && localUser.nickname && localUser.nickname !== '系统创建者' && localUser.nickname !== '未设置') {
              if (!cloudUser || !cloudUser.nickname || cloudUser.nickname === '系统创建者' || cloudUser.nickname === '未设置') {
                console.warn('[checkLogin] 检测到云端数据缺少昵称，正在从本地备份恢复...');
                // 用本地备份的数据更新 USERS 数组
                for (var bi = 0; bi < localUsersBackup.length; bi++) {
                  var bu = localUsersBackup[bi];
                  var found = false;
                  for (var ui = 0; ui < USERS.length; ui++) {
                    if (USERS[ui].id === bu.id || USERS[ui].username === bu.username) {
                      // 保留云端数据，但如果云端数据缺少昵称等字段，就用本地备份的补全
                      if (!USERS[ui].nickname || USERS[ui].nickname === '系统创建者' || USERS[ui].nickname === '未设置') {
                        USERS[ui].nickname = bu.nickname;
                        USERS[ui].name = bu.nickname;
                      }
                      if (!USERS[ui].birthday && bu.birthday) USERS[ui].birthday = bu.birthday;
                      if (!USERS[ui].phone && bu.phone) USERS[ui].phone = bu.phone;
                      if (!USERS[ui].email && bu.email) USERS[ui].email = bu.email;
                      if (!USERS[ui].position && bu.position) USERS[ui].position = bu.position;
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
                console.log('[checkLogin] ✅ 已从本地备份恢复用户数据');
                // 尝试再次同步到云端
                if (window.CloudBaseSync) {
                  window.CloudBaseSync.saveAll();
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
                console.log('[checkLogin] 兜底：从USERS['+fu.id+']补全个人信息');
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
          console.log('[checkLogin] login.html路径：登录成功，currentUser=', currentUser);
          return true;
        } else {
          localStorage.removeItem('chanseen_auth');
        }
      } catch(e) {
        console.error('[checkLogin] login.html路径异常:', e);
        localStorage.removeItem('chanseen_auth');
      }
    }

    // 再检查现有系统的登录状态
    const raw = localStorage.getItem("chansee_current_user")
              || sessionStorage.getItem("chansee_current_user");
    // 尝试从云端加载最新数据
    if (window.CloudBaseSync) {
      try {
        console.log('[checkLogin] 开始从云端加载数据...');
        await window.CloudBaseSync.loadAll();
        console.log('[checkLogin] ✅ 云端数据加载成功');
        // 从 localStorage 重新读取 USERS 数组（已被云端数据更新）
        var savedUsers = localStorage.getItem('chansee_users');
        if (savedUsers) {
          try {
            USERS = JSON.parse(savedUsers);
            console.log('[checkLogin] 已从云端更新 USERS 数组，共 ' + USERS.length + ' 条');
            // 显示当前用户的数据
            var currentUserId = JSON.parse(raw)?.id;
            var currentUserData = USERS.find(u => u.id === currentUserId);
            console.log('[checkLogin] 当前用户云端数据:', currentUserData);
          } catch(e) {
            console.warn('[checkLogin] 解析 chansee_users 失败: ' + e.message);
          }
        } else {
          console.warn('[checkLogin] localStorage 中没有 chansee_users 数据');
        }
      } catch(e) {
        console.warn('[checkLogin] ❌ 云端数据加载失败，将使用本地数据: ' + e.message);
      }
    } else {
      console.warn('[checkLogin] CloudBaseSync 未配置，无法从云端加载数据');
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
        console.log('[checkLogin] ✅ 已从 USERS 数组恢复用户数据:', Object.keys(currentUser).join(','));
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
      return true;
    }
  } catch(e) {
    console.error("checkLogin error:", e);
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
  const firstChar = currentUser.name ? currentUser.name.charAt(0) : "?";
  const avatar = currentUser.avatar || "";
  const avatarHtml = avatar
    ? `<div class="user-avatar" style="background-image:url(${avatar});background-size:cover;background-position:center;color:transparent;">${firstChar}</div>`
    : `<div class="user-avatar">${firstChar}</div>`;
  const dropdownAvatarHtml = avatar
    ? `<div class="user-dropdown-avatar" style="background-image:url(${avatar});background-size:cover;background-position:center;color:transparent;">${firstChar}</div>`
    : `<div class="user-dropdown-avatar">${firstChar}</div>`;
  el.innerHTML = `
    <div class="user-avatar-wrap" onclick="toggleUserMenu(event)">
      ${avatarHtml}
      <span class="user-name">${currentUser.name}</span>
      <span class="user-arrow">▼</span>
      <div class="user-dropdown" id="user-dropdown">
        <div class="user-dropdown-header">
          ${dropdownAvatarHtml}
          <div>
            <div class="user-dropdown-name">${currentUser.name}</div>
            <div class="user-dropdown-role">${currentUser.role}</div>
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

  const user = USERS.find(u => u.username === username && u.password === password);
  if (!user) { alert("账号或密码错误"); return; }
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
  if (USERS.some(u => u.username === username)) { alert("该账号已被注册"); return; }

  const newUser = {
    id: "U" + String(USERS.length + 1).padStart(3, "0"),
    name, username, password, role: "",
    status: "待审核", registerTime: new Date().toISOString().slice(0, 10),
    phone: phone || "", email: email || "", approvedBy: "", remark: ""
  };
  USERS.push(newUser);
  saveUsers();
  if (btn) { btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "注册"; }
  alert("注册成功！请等待管理员审批后登录。");
  switchAuthTab("login");
}

// ===== 密码显示/隐藏切换 =====
function togglePassword() {
  const inp = document.getElementById("login-password");
  const eye = document.getElementById("password-eye");
  if (!inp || !eye) return;
  if (inp.type === "password") {
    inp.type = "text";
    eye.textContent = "👁️"; // 睁眼 = 密码可见
  } else {
    inp.type = "password";
    eye.textContent = "🙈"; // 闭眼 = 密码隐藏
  }
}
function toggleRegPassword() {
  const inp = document.getElementById("reg-password");
  const eye = document.getElementById("reg-password-eye");
  if (!inp || !eye) return;
  if (inp.type === "password") {
    inp.type = "text";
    eye.textContent = "👁️";
  } else {
    inp.type = "password";
    eye.textContent = "🙈";
  }
}
function toggleRegConfirm() {
  const inp = document.getElementById("reg-confirm");
  const eye = document.getElementById("reg-confirm-eye");
  if (!inp || !eye) return;
  if (inp.type === "password") {
    inp.type = "text";
    eye.textContent = "👁️";
  } else {
    inp.type = "password";
    eye.textContent = "🙈";
  }
}

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

const ROLES = [
  "管理候选", "客服组长", "客服主管", "客服经理", "客服总监",
  "管理员", "项目伙伴", "技术伙伴", "风控伙伴", "新用户"
];

// 默认权限配置：每个角色对各模块的权限（read=只读, write=读写, hidden=隐藏）
// 全局模块 key 列表（供 batchSetPermission 等函数使用）
const MODULE_KEYS = ["dashboard","archive","target","cost","operation","issue","knowledge","handover","satisfaction","permissions","notifications","performance","risk","profile"];

const DEFAULT_PERMISSIONS = {
  "管理候选": { dashboard:"write", archive:"write", target:"write", cost:"write", operation:"write", issue:"write", knowledge:"write", handover:"write", satisfaction:"write", permissions:"write", notifications:"write", performance:"write", risk:"write", profile:"write" },
  "客服组长": { dashboard:"read", archive:"read", target:"read", cost:"read", operation:"write", issue:"write", knowledge:"read", handover:"read", satisfaction:"read", permissions:"read", notifications:"read", performance:"read", risk:"read", profile:"write" },
  "客服主管": { dashboard:"read", archive:"read", target:"read", cost:"read", operation:"write", issue:"write", knowledge:"write", handover:"write", satisfaction:"read", permissions:"read", notifications:"read", performance:"write", risk:"read", profile:"write" },
  "客服经理": { dashboard:"write", archive:"write", target:"write", cost:"write", operation:"write", issue:"write", knowledge:"write", handover:"write", satisfaction:"write", permissions:"read", notifications:"read", performance:"write", risk:"write", profile:"write" },
  "客服总监": { dashboard:"read", archive:"write", target:"read", cost:"read", operation:"read", issue:"read", knowledge:"read", handover:"read", satisfaction:"read", permissions:"read", notifications:"read", performance:"read", risk:"read", profile:"write" },
  "管理员": { dashboard:"write", archive:"write", target:"write", cost:"write", operation:"write", issue:"write", knowledge:"write", handover:"write", satisfaction:"write", permissions:"write", notifications:"write", performance:"write", risk:"write", profile:"write" },
  "超级管理员": { dashboard:"write", archive:"write", target:"write", cost:"write", operation:"write", issue:"write", knowledge:"write", handover:"write", satisfaction:"write", permissions:"write", notifications:"write", performance:"write", risk:"write", profile:"write" },
  "项目伙伴": { dashboard:"read", archive:"read", target:"read", cost:"read", operation:"read", issue:"read", knowledge:"read", handover:"read", satisfaction:"read", permissions:"read", notifications:"read", performance:"read", risk:"read", profile:"write" },
  "技术伙伴": { dashboard:"read", archive:"read", target:"read", cost:"read", operation:"read", issue:"write", knowledge:"read", handover:"read", satisfaction:"read", permissions:"read", notifications:"read", performance:"read", risk:"read", profile:"write" },
  "风控伙伴": { dashboard:"read", archive:"read", target:"read", cost:"read", operation:"read", issue:"write", knowledge:"read", handover:"read", satisfaction:"read", permissions:"read", notifications:"read", performance:"read", risk:"read", profile:"write" },
  "新用户": { dashboard:"read", archive:"read", target:"read", cost:"read", operation:"read", issue:"read", knowledge:"read", handover:"read", satisfaction:"read", permissions:"read", notifications:"read", performance:"read", risk:"read", profile:"write" }
};

// 当前角色（默认：管理候选）
let currentRole = "管理候选";
let currentModule = "dashboard";
let currentHealthFilter = "all";

// 从localStorage加载权限配置（如果有的话）
let rolePermissions = {};
try {
  const saved = localStorage.getItem("chansee_permissions");
  rolePermissions = saved ? JSON.parse(saved) : {...DEFAULT_PERMISSIONS};
} catch(e) {
  rolePermissions = {...DEFAULT_PERMISSIONS};
}

// 保存权限配置到localStorage
function savePermissions() {
  localStorage.setItem("chansee_permissions", JSON.stringify(rolePermissions));
}

// 获取当前角色对某个模块的权限
function getPermission(module) {
  const p = rolePermissions[currentRole];
  if (!p) return "hidden";
  return p[module] || "hidden";
}

// 检查当前角色是否可以编辑某个模块
function canEditModule(module) {
  return getPermission(module) === "write";
}

// 检查当前角色是否可以查看某个模块
function canViewModule(module) {
  const p = getPermission(module);
  return p === "write" || p === "read";
}

// ===== 初始化 =====

document.addEventListener("DOMContentLoaded", () => {
  try {
    initNav();
    initModal();
    // 登录检查：未登录则只显示登录框，不初始化主界面
    const loggedIn = checkLogin();
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
    renderModule("dashboard");
    console.log("CS CloudHub initialized successfully");
  } catch(e) {
    console.error("CS CloudHub init error:", e);
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
var _toggleSidebarLock = false; // 防抖锁，防止双击或异步回调导致反复切换
function toggleSidebar(){
  if(_toggleSidebarLock) return; // 防抖：500ms 内只响应一次
  _toggleSidebarLock = true;
  setTimeout(function(){ _toggleSidebarLock = false; }, 500);

  var sidebar = document.getElementById('sidebar');
  var btn = document.getElementById('sidebar-toggle');
  if(!sidebar) return;

  // 用 data-collapsed 属性判断状态（最可靠）
  var isCollapsed = sidebar.getAttribute('data-collapsed') === 'true';

  if(isCollapsed){
    // ===== 展开 =====
    sidebar.setAttribute('data-collapsed', 'false');
    sidebar.style.width = '';
    sidebar.style.minWidth = '';
    sidebar.style.overflowX = '';
    // 去掉可能残留的 collapsed class
    sidebar.classList.remove('collapsed');
    // 显示所有文字
    var allTexts = sidebar.querySelectorAll('.nav-text, .section-text, .toggle-text, .section-arrow');
    for(var i=0;i<allTexts.length;i++){
      allTexts[i].style.display = '';
      allTexts[i].style.width = '';
      allTexts[i].style.opacity = '';
    }
    // 恢复二级菜单显隐状态（根据 data-sub-collapsed）
    var allSections = sidebar.querySelectorAll('.nav-section');
    for(var s=0;s<allSections.length;s++){
      var sec = allSections[s];
      var subItems = sec.querySelectorAll('.nav-item');
      var subCollapsed = sec.getAttribute('data-sub-collapsed') === 'true';
      for(var ii=0;ii<subItems.length;ii++){
        // 移除 inline display，让 CSS 属性选择器控制
        subItems[ii].style.removeProperty('display');
      }
    }
    // 恢复图标样式
    var allIcons = sidebar.querySelectorAll('.nav-icon, .section-icon');
    for(var k=0;k<allIcons.length;k++){
      allIcons[k].style.cssText = '';
    }
    // 恢复按钮
    if(btn){
      var t = btn.querySelector('.toggle-text');
      if(t){ t.textContent = '收起导航'; t.style.display = ''; }
      btn.style.cssText = '';
      var svg = btn.querySelector('svg');
      if(svg) svg.style.transform = '';
    }
  }else{
    // ===== 收起 =====
    sidebar.setAttribute('data-collapsed', 'true');
    sidebar.style.width = '56px';
    sidebar.style.minWidth = '56px';
    sidebar.style.overflowX = 'hidden';
    // 加 collapsed class（让 CSS 规则生效）
    sidebar.classList.add('collapsed');
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
      for(var n=0;n<subItems2.length;n++){
        subItems2[n].style.setProperty('display', 'none', 'important');
      }
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
    // 展开
    section.setAttribute('data-sub-collapsed', 'false');
  }else{
    // 收起
    section.setAttribute('data-sub-collapsed', 'true');
  }
  // 同步箭头
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

      document.querySelectorAll(".nav-item").forEach(i=>i.classList.remove("active"));

      item.classList.add("active");

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
    const area = document.getElementById("module-content");
    if (!area) { console.error("module-content not found"); return; }
    const fns = {dashboard:renderDashboard, archive:renderArchive, target:renderTarget, cost:renderCost, operation:renderOperation, issue:renderIssue, knowledge:renderKnowledge, handover:renderHandover, satisfaction:renderSatisfaction, permissions:renderPermissions, notifications:renderNotifications, assessment:renderAssessment, performance:renderPerformance, risk:renderRisk, profile:renderProfile};
    area.innerHTML = fns[module] ? fns[module]() : `<div class="empty-state"><div class="empty-icon">🚧</div><p>模块开发中...</p></div>`;
    bindEvents();
  } catch(e) {
    console.error("renderModule error:", e);
    document.getElementById("module-content").innerHTML =
      '<div style="padding:40px;text-align:center;color:red;">' +
      '<h3>模块加载错误</h3><p>' + e.message + '</p></div>';
  }
}




// ----- 筛选栏状态 (v4) -----
const filterState = {
  project: [],
  workplace: "",
  director: "all",
  pm: "all",
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
  renderModule(currentModule);
}

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
  if (filterState.pm !== 'all') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + filterState.pm + '<i onclick="setFilter(\'pm\',\'all\')">×</i></span>'; }
  if (filterState.director !== 'all') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + filterState.director + '<i onclick="setFilter(\'director\',\'all\')">×</i></span>'; }
  filterState.platforms.forEach(function(v) { hasFilter = true; tagsHtml += '<span class="filter-tag">' + v + '<i onclick="toggleMultiFilter(\'platforms\',\'' + v.replace(/'/g,"\\'") + '\')">×</i></span>'; });
  filterState.category.forEach(function(v) { hasFilter = true; tagsHtml += '<span class="filter-tag">' + v + '<i onclick="toggleMultiFilter(\'category\',\'' + v.replace(/'/g,"\\'") + '\')">×</i></span>'; });
  filterState.brand.forEach(function(v) { hasFilter = true; tagsHtml += '<span class="filter-tag">' + v + '<i onclick="toggleMultiFilter(\'brand\',\'' + v.replace(/'/g,"\\'") + '\')">×</i></span>'; });
  if (hasFilter) tagsHtml = '<div class="filter-tags-row">' + tagsHtml + '<button class="filter-clear-btn" onclick="resetFilters()">清空筛选</button></div>';

  // 第一行：普通下拉
  var workplaces = [...new Set(PROJECTS.map(function(p){return p.workplace}))].sort();
  var types = ['TP项目','DP项目','BPO项目'];
  var statuses = ['优质健康店','平稳常规店','风险预警店','高危问题店'];
  var healths = ['🟢','🟡','🔴'];

  var row1 = '<div class="filter-row-v4">';
  row1 += '<select class="fb-select" onchange="onFilterTimeChange(this.value)" title="时间">';
  row1 += '<option value="" disabled selected hidden>时间 ▼</option>';
  row1 += '<option value="month"'+(filterState.timeMode==='month'?' selected':'')+'>本月</option>';
  row1 += '<option value="lastMonth"'+(filterState.timeMode==='lastMonth'?' selected':'')+'>上月</option>';
  row1 += '<option value="quarter"'+(filterState.timeMode==='quarter'?' selected':'')+'>本季</option>';
  row1 += '<option value="year"'+(filterState.timeMode==='year'?' selected':'')+'>本年</option>';
  row1 += '<option value="custom"'+(filterState.timeMode==='custom'?' selected':'')+'>自定义</option>';
  row1 += '</select>';

  row1 += '<select class="fb-select" onchange="setFilter(\'workplace\',this.value)" title="职场">';
  row1 += '<option value="" disabled selected hidden>职场 ▼</option>';
  row1 += '<option value="all"'+(filterState.workplace==='all'?' selected':'')+'>全部</option>';
  workplaces.forEach(function(w){ row1 += '<option value="'+w+'"'+(filterState.workplace===w?' selected':'')+'>'+w+'</option>'; });
  row1 += '</select>';

  row1 += '<select class="fb-select" onchange="setFilter(\'projectType\',this.value)" title="类型">';
  row1 += '<option value="" disabled selected hidden>类型 ▼</option>';
  row1 += '<option value="all"'+(filterState.projectType==='all'?' selected':'')+'>全部</option>';
  types.forEach(function(t){ row1 += '<option value="'+t+'"'+(filterState.projectType===t?' selected':'')+'>'+t+'</option>'; });
  row1 += '</select>';

  row1 += '<select class="fb-select" onchange="setFilter(\'status\',this.value)" title="状态">';
  row1 += '<option value="" disabled selected hidden>状态 ▼</option>';
  row1 += '<option value="all"'+(filterState.status==='all'?' selected':'')+'>全部</option>';
  statuses.forEach(function(s){ row1 += '<option value="'+s+'"'+(filterState.status===s?' selected':'')+'>'+s+'</option>'; });
  row1 += '</select>';

  row1 += '<select class="fb-select" onchange="setFilter(\'health\',this.value)" title="健康度">';
  row1 += '<option value="" disabled selected hidden>健康度 ▼</option>';
  row1 += '<option value="all"'+(filterState.health==='all'?' selected':'')+'>全部</option>';
  healths.forEach(function(h){
    var label = h==='🟢'?'🟢 健康':h==='🟡'?'🟡 预警':'🔴 风险';
    row1 += '<option value="'+h+'"'+(filterState.health===h?' selected':'')+'>'+label+'</option>';
  });
  row1 += '</select>';
  row1 += '</div>';

  // 自定义时间
  var customTimeHtml = '';
  if (filterState.timeMode === 'custom') {
    customTimeHtml = '<div class="fb-custom-time">'+
      '<span>开始日期</span><input type="date" class="fb-date" id="fb-time-start" value="'+(filterState.timeStart||'')+'" onchange="filterState.timeStart=this.value;applyTimeFilter()">'+
      '<span>结束日期</span><input type="date" class="fb-date" id="fb-time-end" value="'+(filterState.timeEnd||'')+'" onchange="filterState.timeEnd=this.value;applyTimeFilter()">'+
      '</div>';
  }

  // 第二行：搜索下拉
  var row2 = '<div class="filter-row-v4 filter-row-v4-second">';

  // 平台
  var pfLabel = '平台 ▼';
  if (filterState.platforms.length === 1) pfLabel = filterState.platforms[0];
  else if (filterState.platforms.length > 1) pfLabel = '已选'+filterState.platforms.length+'项';
  row2 += '<div class="fb-search-wrap" data-filter="platforms">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+pfLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-platforms" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" placeholder="搜索平台..." oninput="renderFbOptions(\'platforms\')"></div>'+
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
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" placeholder="搜索品类..." oninput="renderFbOptions(\'category\')"></div>'+
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
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" placeholder="搜索品牌..." oninput="renderFbOptions(\'brand\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-brand"></div>'+
    '<div class="fb-sp-footer"><button class="fb-sp-toggle-all" onclick="toggleFbSelectAll(\'brand\',this)">全选</button><button class="fb-sp-clear" onclick="clearFbMulti(\'brand\')">清空</button><button class="fb-sp-confirm" onclick="applyFbMulti(\'brand\')">确定</button></div>'+
    '</div>';
  row2 += '</div>';

  // PM（单选）
  var pmLabel = filterState.pm === 'all' ? '项目PM ▼' : filterState.pm;
  row2 += '<div class="fb-search-wrap" data-filter="pm">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+pmLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-pm" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" placeholder="搜索PM..." oninput="renderFbOptions(\'pm\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-pm"></div>'+
    '</div>';
  row2 += '</div>';

  // 客服管理（单选）
  var drLabel = filterState.director === 'all' ? '客服管理 ▼' : filterState.director;
  row2 += '<div class="fb-search-wrap" data-filter="director">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+drLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-director" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" placeholder="搜索客服管理..." oninput="renderFbOptions(\'director\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-director"></div>'+
    '</div>';
  row2 += '</div>';

  // 高级筛选按钮
  row2 += '<button class="fb-adv-btn" onclick="alert(\'高级筛选 - 待开发\')">高级筛选</button>';
  row2 += '</div>';

  return '<div class="filter-bar-v4">' + tagsHtml + row1 + customTimeHtml + row2 + '</div>';
}

// ----- 筛选栏 v4 辅助函数 -----
function onFilterTimeChange(val) {
  filterState.timeMode = val;
  if (val !== 'custom') {
    filterState.timeStart = '';
    filterState.timeEnd = '';
  }
  renderModule(currentModule);
}

function applyTimeFilter() {
  if (filterState.timeStart && filterState.timeEnd) {
    renderModule(currentModule);
  }
}

function toggleMultiFilter(key, val) {
  var arr = filterState[key];
  var idx = arr.indexOf(val);
  if (idx >= 0) arr.splice(idx, 1);
  else arr.push(val);
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
  if (key === 'platforms') {
    values = [...new Set(PROJECTS.flatMap(function(p) { return (p.platforms || '').split(/[,，、]/).map(function(s){return s.trim();}).filter(Boolean); }))].filter(function(v){ return v !== '全平台'; }).sort();
  } else if (key === 'category') {
    values = [...new Set(PROJECTS.map(function(p){return p.category}))].sort();
  } else if (key === 'brand') {
    values = [...new Set(PROJECTS.map(function(p){return p.brand}))].sort();
  } else if (key === 'pm') {
    values = [...new Set(PROJECTS.map(function(p){return p.pm}))].sort();
  } else if (key === 'director') {
    values = [...new Set(PROJECTS.map(function(p){return p.director}))].sort();
  }
  var filtered = keyword ? values.filter(function(v){ return v.toLowerCase().indexOf(keyword) !== -1; }) : values;
  var isMulti = (key === 'platforms' || key === 'category' || key === 'brand');
  var selected = filterState[key];
  var html = '';
  html += filtered.map(function(v) {
    var isSelected = isMulti ? (selected.indexOf(v) !== -1) : (selected === v);
    return '<div class="fb-sp-option' + (isSelected ? ' selected' : '') + '" data-value="' + v.replace(/"/g, '&quot;') + '" onclick="onFbOptionClick(this,\'' + key + '\')">' +
      '<span class="fb-sp-check">' + (isSelected ? '✓' : '') + '</span>' +
      '<span>' + v + '</span>' +
    '</div>';
  }).join('');
  panel.querySelector('.fb-sp-options').innerHTML = html;
}

function onFbOptionClick(el, key) {
  var val = el.getAttribute('data-value');
  var isMulti = (key === 'platforms' || key === 'category' || key === 'brand');
  if (isMulti) {
    var idx = filterState[key].indexOf(val);
    if (idx >= 0) {
      filterState[key].splice(idx, 1);
      el.classList.remove('selected');
      el.querySelector('.fb-sp-check').textContent = '';
    } else {
      filterState[key].push(val);
      el.classList.add('selected');
      el.querySelector('.fb-sp-check').textContent = '✓';
    }
  } else {
    filterState[key] = val;
    if (activeFbPanel) activeFbPanel.style.display = 'none';
    activeFbPanel = null;
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
  if (activeFbPanel) {
    activeFbPanel.style.display = 'none';
    activeFbPanel = null;
  }
  renderModule(currentModule);
}

function clearFbMulti(key) {
  filterState[key] = [];
  if (activeFbPanel) {
    activeFbPanel.classList.remove('show');
    activeFbPanel = null;
  }
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
  filterState.director = "all";
  filterState.pm = "all";
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
  if (filterState.director !== "all") {
    list = list.filter(p => p.director === filterState.director);
  }
  if (filterState.pm !== "all") {
    list = list.filter(p => p.pm === filterState.pm);
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
    list = list.filter(p => filterState.category.indexOf(p.category) !== -1);
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
  return currentRole === "管理员" || currentRole === "管理候选";
}





// ===== 驾驶舱 =====

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
    {name:'售前客服', count:68, pct:37, color:'#312e81'},
    {name:'售后客服', count:52, pct:28, color:'#4338ca'},
    {name:'综合客服', count:45, pct:24, color:'#6366f1'},
    {name:'客服管理', count:14, pct:8, color:'#818cf8'},
    {name:'数据专员', count:7, pct:4, color:'#a5b4fc'}
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

  // KPI sparkline 数据（模拟）
  const kpiCards = [
    {label:'月度总销售额', value:isNaN(totalRevenue)?'0.0万':(totalRevenue/10000).toFixed(1)+'万', trend:'+12.3%', trendUp:true, areaColor:'#fbbf24', strokeColor:'#fbbf24', path:'M 4,44 Q 14,40 24,36 T 44,32 T 64,28 T 84,24 T 104,20 L 104,50 L 4,50 Z', strokePath:'M 4,44 Q 14,40 24,36 T 44,32 T 64,28 T 84,24 T 104,20'},
    {label:'月度总成本', value:isNaN(totalCost)?'0.0万':(totalCost/10000).toFixed(1)+'万', trend:'+5.1%', trendUp:false, areaColor:'#f472b6', strokeColor:'#f472b6', path:'M 4,42 Q 14,38 24,36 T 44,34 T 64,36 T 84,32 T 104,28 L 104,50 L 4,50 Z', strokePath:'M 4,42 Q 14,38 24,36 T 44,34 T 64,36 T 84,32 T 104,28'},
    {label:'项目费效比', value:'1.19', trend:'+0.08', trendUp:true, areaColor:'#34d399', strokeColor:'#34d399', path:'M 4,42 Q 14,40 24,38 T 44,36 T 64,32 T 84,30 T 104,26 L 104,50 L 4,50 Z', strokePath:'M 4,42 Q 14,40 24,38 T 44,36 T 64,32 T 84,30 T 104,26'},
    {label:'目标达成率', value:'94.2%', trend:'+3.5pp', trendUp:true, areaColor:'#22d3ee', strokeColor:'#22d3ee', path:'M 4,44 Q 14,42 24,40 T 44,38 T 64,36 T 84,34 T 104,30 L 104,50 L 4,50 Z', strokePath:'M 4,44 Q 14,42 24,40 T 44,38 T 64,36 T 84,34 T 104,30'},
    {label:'健康项目数', value:green+'/'+all.length, trend:'查看详情 →', trendUp:true, areaColor:'#fbbf24', strokeColor:'#fbbf24', path:'M 4,42 Q 14,40 28,38 T 52,36 T 76,32 T 100,30 T 124,26 L 124,50 L 4,50 Z', strokePath:'M 4,42 Q 14,40 28,38 T 52,36 T 76,32 T 100,30 T 124,26'}
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
      <a href="#" class="btn btn-sm btn-primary" onclick="renderModule('comparison');return false;">📊 项目对比</a>
    </div>
  </div>

  <!-- KPI 迷你卡片行 -->
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:14px;">
    ${kpiCards.map((k,i)=>{
      const decoColors = ['rgba(96,165,250,0.15)','rgba(147,197,253,0.15)','rgba(191,219,254,0.15)','rgba(147,197,253,0.12)','rgba(96,165,250,0.12)'];
      return `<div style="background:linear-gradient(145deg,#1e40af 0%,#2563eb 60%,#3b82f6 100%);border-radius:12px;padding:14px 16px;color:#fff;box-shadow:0 4px 12px rgba(30,64,175,0.2);position:relative;overflow:hidden;min-height:110px;">
        <div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;border-radius:50%;background:${decoColors[i]};"></div>
        <div style="position:relative;z-index:1;">
          <div style="font-size:12px;opacity:0.7;margin-bottom:4px;letter-spacing:0.5px;">${k.label}</div>
          <div style="font-size:22px;font-weight:700;line-height:1.2;margin:4px 0;letter-spacing:-0.5px;">${k.value}</div>
          <div style="font-size:11px;opacity:0.85;">
            <span style="color:${k.trendUp?'#86efac':'#fca5a5'};font-weight:500;">${k.trend}</span>
            <span style="opacity:0.7;margin-left:2px;">较上月</span>
          </div>
        </div>
        <svg width="100%" height="50" viewBox="0 0 108 50" preserveAspectRatio="none" style="position:absolute;bottom:0;left:0;opacity:0.5;">
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
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="alert('查看趋势功能开发中');return false;">查看趋势 →</a>
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
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="alert('详情功能开发中');return false;">详情 →</a>
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
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="alert('报告功能开发中');return false;">报告 →</a>
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
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="alert('详情功能开发中');return false;">详情 →</a>
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
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="alert('详情功能开发中');return false;">详情 →</a>
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
            <path d="M 10,58 A 50,50 0 0,1 110,58" fill="none" stroke="#ede9fe" stroke-width="10" stroke-linecap="round"/>
            <path d="M 10,58 A 50,50 0 0,1 ${10+50+50*Math.cos(Math.PI*(1-workloadRatio/100))},${58-50*Math.sin(Math.PI*(1-workloadRatio/100))}" fill="none" stroke="url(#gaugeGrad)" stroke-width="10" stroke-linecap="round"/>
            <defs><linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#6366f1"/><stop offset="50%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#f97316"/></linearGradient></defs>
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
            <div style="width:${w.ratio}%;height:100%;background:linear-gradient(90deg,#6366f1,#818cf8);border-radius:4px;"></div>
          </div>
          <span style="width:42px;text-align:right;color:#64748b;font-size:10px;flex-shrink:0;">${w.count}件</span>
        </div>`).join('')}
      </div>
    </div>

    <!-- 客服配置数 -->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:13px;font-weight:600;color:#312e81;">客服配置数</span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="alert('详情功能开发中');return false;">详情 →</a>
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
            <path d="M 0,0 L 0,-52 A 52,52 0 0,1 47,-22 Z" fill="#312e81" stroke="#fff" stroke-width="2"/>
            <path d="M 0,0 L 47,-22 A 52,52 0 0,1 37,38 Z" fill="#4338ca" stroke="#fff" stroke-width="2"/>
            <path d="M 0,0 L 37,38 A 52,52 0 0,1 -15,50 Z" fill="#6366f1" stroke="#fff" stroke-width="2"/>
            <path d="M 0,0 L -15,50 A 52,52 0 0,1 -44,26 Z" fill="#818cf8" stroke="#fff" stroke-width="2"/>
            <path d="M 0,0 L -44,26 A 52,52 0 0,1 -51,-13 A 52,52 0 0,1 0,-52 Z" fill="#a5b4fc" stroke="#fff" stroke-width="2"/>
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

  <!-- 项目健康明细 -->
  <div class="card" style="padding:12px 16px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <span style="font-size:13px;font-weight:600;color:#1e40af;">项目健康明细</span>
      <a href="#" style="font-size:11px;color:#3b82f6;" onclick="renderModule('operation');return false;">查看完整健康报告 →</a>
    </div>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-size:11px;min-width:500px;">
        <thead>
          <tr style="background:#eff6ff;">
            <th style="padding:5px 4px;text-align:left;color:#1e40af;font-weight:600;">项目</th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:40px;">人力</th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:40px;">服务</th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:40px;">销售</th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:40px;">退货</th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:40px;">风险</th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:40px;">成本</th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:50px;">综合</th>
          </tr>
        </thead>
        <tbody>
          ${all.map(p=>{
            const h = HEALTH_DATA.find(hh=>hh.projectId===p.id&&hh.period==="2026-05");
            const dims = h ? h.dimensions : [];
            const getDim = name=>{
              const d = dims.find(dd=>dd.name.includes(name));
              if(!d) return '<span style="color:#9ca3af;">-</span>';
              return d.level==='优秀'||d.level==='健康'?'<span style="color:#22c55e;font-size:12px;">●</span>':d.level==='需注意'?'<span style="color:#eab308;font-size:12px;">●</span>':'<span style="color:#ef4444;font-size:12px;">●</span>';
            };
            const score = h?h.overallScore:'--';
            const scoreColor = score>=90?'#dcfce7':score>=80?'#fef9c3':'#fee2e2';
            const scoreText = score>=90?'#166534':score>=80?'#854d0e':'#991b1b';
            return `<tr style="border-bottom:1px solid #f1f5f9;">
              <td style="padding:5px 4px;"><a href="#" style="color:var(--c-primary);font-size:11px;" onclick="showProjectDetail('${p.id}');return false;">${p.name}</a></td>
              <td style="padding:5px 4px;text-align:center;">${getDim('人力')}</td>
              <td style="padding:5px 4px;text-align:center;">${getDim('服务')}</td>
              <td style="padding:5px 4px;text-align:center;">${getDim('销售')}</td>
              <td style="padding:5px 4px;text-align:center;">${getDim('退货')}</td>
              <td style="padding:5px 4px;text-align:center;">${getDim('风险')}</td>
              <td style="padding:5px 4px;text-align:center;">${getDim('成本')}</td>
              <td style="padding:5px 4px;text-align:center;"><span style="display:inline-block;padding:2px 8px;border-radius:4px;background:${scoreColor};color:${scoreText};font-size:10px;font-weight:600;">${score}</span></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  </div>`;

}



// ===== 项目基础档案 =====}



// ===== 项目基础档案 =====

function renderArchive(){

  const all = getFilteredProjects();

  const can = canEditModule('archive');

  return `
  ${renderFilterBar()}

  <div class="module-header">

    <div>

      <div class="module-title">📋 项目基础档案</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">记录项目静态基础信息，新人可快速了解项目全貌</div>

    </div>

    <div class="module-actions" style="flex-wrap:wrap;gap:6px;align-items:center;">

      <!-- 搜索框 -->
      <input type="text" id="archive-search" placeholder="🔍 搜索项目编号/名称/品牌..." 
        style="padding:5px 10px;border-radius:6px;border:1px solid var(--c-border);font-size:13px;width:220px;"
        oninput="filterArchiveTable(this.value)">

      <button class="btn btn-sm" onclick="showImportDialog()" style="margin-right:4px;">📤 导入</button>
      <button class="btn btn-sm" onclick="exportProjects()" style="margin-right:8px;">📥 导出</button>
      ${can?'<button class="btn btn-primary btn-sm" onclick="showAddProject()">＋ 新增项目</button>':''}

      ${can?'<button class="btn btn-sm" style="color:#fff;background:#e74c3c;border-color:#e74c3c;margin-left:4px;" onclick="batchDeleteProjects()">🗑 批量删除</button>':''}

      ${currentRole==='leader'?'<span class="badge badge-gray">只读权限</span>':''}

    </div>

  </div>

  <div class="card">

    <table class="data-table">

      <thead><tr>
        ${can?'<th style="width:36px;"><input type="checkbox" id="archive-select-all" onclick="toggleArchiveSelectAll(this.checked)" title="全选/取消"></th>':''}
        <th>项目编号</th><th>项目名称</th><th>品牌/品类</th><th>项目类型</th><th>所属职场</th><th>负责人</th><th>项目总监</th><th>交接历史</th><th>操作</th></tr></thead>

      <tbody id="archive-tbody">

        ${all.map((p, idx)=>`

          <tr data-id="${p.id}" data-name="${p.name}" data-brand="${p.brand}" data-pm="${p.pm}">

            ${can?`<td><input type="checkbox" class="archive-row-check" value="${p.id}" onchange="updateBatchDeleteBtn()"></td>`:''}

            <td>${p.id}</td>

            <td><a href="#" style="color:var(--c-primary);cursor:pointer" onclick="showProjectDetail('${p.id}');return false;">${p.name}</a></td>

            <td>${p.brand} / ${p.category}</td>

            <td><span class="badge ${p.serviceMode==='TP项目'?'badge-blue':p.serviceMode==='DP项目'?'badge-green':'badge-orange'}">${p.serviceMode}</span></td>

            <td><span class="wp-tag wp-${p.workplace}">${p.workplace}</span></td>

            <td>${p.pm}</td>

            <td>${p.director}</td>

            <td>${(p.pmHistory||[]).length>0?`<span class="badge badge-gray" title="${(p.pmHistory||[]).map(h=>h.name+'('+h.from+'~'+h.to+')').join('; ')}">${(p.pmHistory||[]).length}次交接</span>`:'无'}</td>

            <td class="actions">
              <button class="btn btn-sm" onclick="showProjectDetail('${p.id}')">查看</button>
              ${can?`&nbsp;<button class="btn btn-sm" onclick="editProject('${p.id}')">编辑</button>&nbsp;
              <button class="btn btn-sm" style="color:#fff;background:#e74c3c;border-color:#e74c3c;" onclick="deleteProjectConfirm('${p.id}','${p.name}')">删除</button>`:''}

            </td>

          </tr>`).join('')}

      </tbody>

    </table>

    <div id="archive-empty-hint" style="display:none;padding:20px;text-align:center;color:var(--c-text-3);font-size:14px;">
      未找到匹配的项目，请尝试其他搜索关键词
    </div>

  </div>`;

}




function filterArchiveTable(kw){kw=(kw||'').toLowerCase().trim();var r=document.querySelectorAll('#archive-tbody tr'),c=0;r.forEach(function(row){if(!kw){row.style.display='';c++;return;}var t=(row.dataset.id+' '+row.dataset.name+' '+row.dataset.brand+' '+row.dataset.pm).toLowerCase();var m=t.indexOf(kw)!==-1;row.style.display=m?'':'none';if(m)c++});var h=document.getElementById('archive-empty-hint');if(h)h.style.display=c===0?'':'none'}
function toggleArchiveSelectAll(c){var cb=document.querySelectorAll('.archive-row-check');for(var i=0;i<cb.length;i++)cb[i].checked=c;updateBatchDeleteBtn()}
function updateBatchDeleteBtn(){var c=document.querySelectorAll('.archive-row-check:checked'),b=document.querySelectorAll("[onclick='batchDeleteProjects()']");for(var i=0;i<b.length;i++){b[i].disabled=c.length===0;b[i].style.opacity=c.length>0?1:0.5}}
function batchDeleteProjects(){var c=document.querySelectorAll('.archive-row-check:checked');if(!c.length){alert('请先勾选要删除的项目');return}var ids=[];for(var i=0;i<c.length;i++)ids.push(c[i].value);if(!confirm('确定删除选中的'+ids.length+'个项目？此操作不可恢复！'))return;ids.forEach(function(id){deleteProjectDirectly(id)});showToast('已删除'+ids.length+'个项目');renderModule('archive')}
function deleteProjectConfirm(id,name){if(confirm('确定删除「'+name+'」？仅删此条，不影响其他模块'))deleteProject(id)}
function deleteProjectDirectly(id){PROJECTS=PROJECTS.filter(function(p){return p.id!==id});safeSetItem('chansee_projects',JSON.stringify(PROJECTS));if(window.CloudBaseSync)window.CloudBaseSync.saveAll()}

// ===== 目标与权责管理 =====

function renderTarget(){

  const all = getFilteredProjects();

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

            <td>${p.name}</td>

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

function renderCost(){

  const all = getFilteredProjects();
  const totalRevenue = all.reduce((s,p)=>s+(p.revenue||0),0);
  const totalBudget = all.reduce((s,p)=>s+(p.costBudget||0),0);
  const totalActual = all.reduce((s,p)=>s+Math.round((p.costBudget||0)*(0.9+Math.random()*0.3)),0);
  const profitRates = all.map(p=>{
    const ac = Math.round((p.costBudget||0)*(0.9+Math.random()*0.3));
    return (p.revenue&&p.revenue>0)?((p.revenue-ac)/p.revenue*100):0;
  });
  const avgProfit = all.length ? profitRates.reduce((s,v)=>s+v,0)/all.length : 0;
  const warnCount = all.filter(p=>{
    const ac = Math.round((p.costBudget||0)*(0.9+Math.random()*0.3));
    const pr = (p.revenue&&p.revenue>0)?((p.revenue-ac)/p.revenue*100):0;
    return pr < 5;
  }).length;

  // 卡片数据
  const cards = [
    { label:'总营收（月度）', value:'¥'+(totalRevenue/10000).toFixed(1)+'万', sub:'', cls:'normal' },
    { label:'总成本（月度）', value:'¥'+(totalActual/10000).toFixed(1)+'万', sub:'预算内·超支率'+((totalActual-totalBudget)/totalBudget*100||0).toFixed(1)+'%', cls:'normal' },
    { label:'平均利润率', value:avgProfit.toFixed(1)+'%', sub:'环比+1.2%', cls:'blue' },
    { label:'预警项目数', value:warnCount+'', sub:warnCount>0?'需立即关注':'全部正常', cls:warnCount>0?'red':'green' }
  ];

  return `
  ${renderFilterBar()}

  <div class="module-header">

    <div>

      <div class="module-title">💰 成本与利润管理</div>
      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">跟踪项目成本结构与利润情况，利润率低于5%自动预警</div>

    </div>

  </div>

  <div class="profit-metric-grid">
    ${cards.map((c,i)=>`
    <div class="profit-metric-card profit-card-${c.cls}">
      <div class="pmc-label">${c.label}</div>
      <div class="pmc-value">${c.value}</div>
      ${c.sub?'<div class="pmc-sub">'+c.sub+'</div>':''}
    </div>`).join('')}
  </div>

  <div class="card">
    <div style="padding:14px 18px;border-bottom:1px solid var(--c-border-light);font-weight:500;font-size:14px;">📊 项目利润明细</div>
    <div style="overflow-x:auto;">
    <table class="data-table profit-table">
      <thead><tr><th>项目</th><th>营收(万)</th><th>预算成本(万)</th><th>实际成本(万)</th><th>利润率</th><th>预警</th><th>趋势</th></tr></thead>
      <tbody>
        ${all.map(p=>{
          const actualCost = Math.round((p.costBudget||0) * (0.9+Math.random()*0.3));
          const actualProfit = (p.revenue && p.revenue > 0) ? ((p.revenue - actualCost)/p.revenue*100).toFixed(1) : '0.0';
          const pr = parseFloat(actualProfit);
          let rowCls = 'profit-row-normal';
          if (pr < 5) rowCls = 'profit-row-danger';
          else if (pr < 10) rowCls = 'profit-row-warning';
          let badge = '<span class="profit-badge profit-badge-green">正常</span>';
          if (pr < 5) badge = '<span class="profit-badge profit-badge-red">利润率过低</span>';
          else if (pr < 10) badge = '<span class="profit-badge profit-badge-yellow">关注</span>';
          return `<tr class="${rowCls}">
            <td>${p.name||'未命名'}</td>
            <td>¥${((p.revenue||0)/10000).toFixed(1)}</td>
            <td>¥${((p.costBudget||0)/10000).toFixed(1)}</td>
            <td>¥${(actualCost/10000).toFixed(1)}</td>
            <td style="color:${pr>=10?'var(--c-green)':pr<0?'var(--c-red)':'var(--c-yellow)'}">${actualProfit}%</td>
            <td>${badge}</td>
            <td class="profit-trend-cell">--</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
    </div>
  </div>

  <div class="profit-legend">
    <span class="profit-legend-item"><span class="profit-legend-dot" style="background:var(--c-green)"></span>正常盈利</span>
    <span class="profit-legend-item"><span class="profit-legend-dot" style="background:var(--c-yellow)"></span>需关注</span>
    <span class="profit-legend-item"><span class="profit-legend-dot" style="background:var(--c-red)"></span>利润率为负/低于5%</span>
  </div>`;

}




// ===== 服务与进度追踪（新版 2026-06-09） =====

// 计算项目健康等级
function getHealthLevel(score) {
  if (score >= 90) return { level: "优质健康店", class: "excellent", icon: "🟢" };
  if (score >= 75) return { level: "平稳常规店", class: "normal", icon: "🟡" };
  if (score >= 60) return { level: "风险预警店", class: "warning", icon: "🟠" };
  return { level: "高危问题店", class: "danger", icon: "🔴" };
}

// 渲染四大卡片概览
function renderHealthOverviewCards(projects) {
  const projectHealth = projects.map(p => {
    const h = HEALTH_DATA.find(hh => hh.projectId === p.id && hh.period === "2026-05");
    const score = h ? h.overallScore : 0;
    const healthInfo = score > 0 ? getHealthLevel(score) : { level: "未评估", class: "unrated", icon: "⚪" };
    return { project: p, health: h, score, ...healthInfo };
  });

  const grouped = {
    excellent: projectHealth.filter(x => x.class === "excellent"),
    normal: projectHealth.filter(x => x.class === "normal"),
    warning: projectHealth.filter(x => x.class === "warning"),
    danger: projectHealth.filter(x => x.class === "danger")
  };

  function countBy(arr, key) {
    const map = {};
    arr.forEach(x => {
      const val = x.project[key];
      if (val) map[val] = (map[val] || 0) + 1;
    });
    return Object.entries(map).map(([k, v]) => k + "(" + v + ")").join(" · ");
  }

  function renderCard(className, icon, title, items) {
    const count = items.length;
    const workplaces = count > 0 ? countBy(items, "workplace") : "";
    const types = count > 0 ? countBy(items, "serviceMode") : "";
    return `
    <div class="health-overview-card ${className}" onclick="toggleHealthCard('${className}')">
      <div class="hoc-header">
        <div class="hoc-icon">${icon}</div>
        <div class="hoc-title">${title}</div>
      </div>
      <div class="hoc-count">${count}<span class="hoc-unit">家</span></div>
      ${count > 0 ? `
        <div class="hoc-stats">
          <div class="hoc-stat-item">📍 ${workplaces || "无"}</div>
          <div class="hoc-stat-item">🏷️ ${types || "无"}</div>
        </div>
        <div class="hoc-footer">查看明细 →</div>
      ` : '<div class="hoc-empty">暂无数据</div>'}
    </div>`;
  }

  return `
  <div class="health-overview-cards">
    ${renderCard("excellent", "🟢", "优质健康店", grouped.excellent)}
    ${renderCard("normal", "🟡", "平稳常规店", grouped.normal)}
    ${renderCard("warning", "🟠", "风险预警店", grouped.warning)}
    ${renderCard("danger", "🔴", "高危问题店", grouped.danger)}
  </div>
  <div id="health-card-detail" style="display:none;"></div>`;
}

// 渲染健康预警摘要
function renderHealthWarningSummary(healthData) {
  if (!healthData) return '<div style="padding:12px;color:var(--c-text-3);">暂无健康度数据</div>';
  const badDims = healthData.dimensions.filter(d => d.score < 85).sort((a, b) => a.score - b.score);
  if (badDims.length === 0) {
    return `
    <div class="health-warning-summary healthy">
      <div class="hws-icon">✅</div>
      <div class="hws-text">各维度表现良好，无明显风险点</div>
    </div>`;
  }
  const reasons = badDims.map(d => {
    const badItems = d.items.filter(i => i.score < 85);
    const details = badItems.length > 0
      ? badItems.map(i => i.name + ": 实际" + i.actual + "，目标" + i.target).join("<br>")
      : "整体维度得分偏低";
    return `<div class="hws-reason">
      <div class="hws-reason-title ${d.level}">${d.name}(${d.score}分·${d.level})</div>
      <div class="hws-reason-details">${details}</div>
    </div>`;
  }).join("");
  return `
  <div class="health-warning-summary warning">
    <div class="hws-header">
      <span class="hws-icon">⚠️</span>
      <span class="hws-title">健康预警摘要</span>
    </div>
    ${reasons}
  </div>`;
}

// 分数颜色
function scoreColor(s) {
  if (s >= 90) return "var(--c-green)";
  if (s >= 75) return "var(--c-yellow)";
  if (s >= 60) return "var(--c-orange)";
  return "var(--c-red)";
}
function scoreBg(s) {
  if (s >= 90) return "var(--c-green-bg)";
  if (s >= 75) return "var(--c-yellow-bg)";
  if (s >= 60) return "var(--c-orange-bg)";
  return "var(--c-red-bg)";
}

// 渲染评分明细表
function renderHealthScoreTable(projects) {
  const sortState = window._healthSort || { key: "score", dir: "desc" };
  function sortProjects(list, key, dir) {
    return list.sort((a, b) => {
      let va, vb;
      if (key === "score") { va = a.score; vb = b.score; }
      else if (key === "name") { va = a.project.name; vb = b.project.name; }
      else if (key === "workplace") { va = a.project.workplace; vb = b.project.workplace; }
      else {
        va = a.health ? (a.health.dimensions.find(d => d.key === key) || { score: 0 }).score : 0;
        vb = b.health ? (b.health.dimensions.find(d => d.key === key) || { score: 0 }).score : 0;
      }
      if (dir === "asc") return va > vb ? 1 : -1;
      return va < vb ? 1 : -1;
    });
  }
  const sorted = sortProjects([...projects], sortState.key, sortState.dir);
  const top6 = sorted.slice(0, 6);
  function sortArrow(key) {
    if (sortState.key !== key) return "↕️";
    return sortState.dir === "desc" ? "↓" : "↑";
  }
  return `
  <div class="card" style="margin-top:16px;">
    <div style="padding:14px 18px;border-bottom:1px solid var(--c-border-light);font-weight:500;font-size:14px;">📊 店铺综合评分明细（前6名）</div>
    <div style="overflow-x:auto;">
      <table class="data-table health-score-table">
        <thead>
          <tr>
            <th style="width:50px;">排名</th>
            <th onclick="sortHealthTable('name')" style="cursor:pointer;">店铺名称 ${sortArrow("name")}</th>
            <th onclick="sortHealthTable('workplace')" style="cursor:pointer;">职场 ${sortArrow("workplace")}</th>
            <th>类型</th>
            <th onclick="sortHealthTable('score')" style="cursor:pointer;">综合 ${sortArrow("score")}</th>
            <th onclick="sortHealthTable('manpower')" style="cursor:pointer;">人力 ${sortArrow("manpower")}</th>
            <th onclick="sortHealthTable('service')" style="cursor:pointer;">服务 ${sortArrow("service")}</th>
            <th onclick="sortHealthTable('sales')" style="cursor:pointer;">销售 ${sortArrow("sales")}</th>
            <th onclick="sortHealthTable('returns')" style="cursor:pointer;">退货 ${sortArrow("returns")}</th>
            <th onclick="sortHealthTable('risk')" style="cursor:pointer;">风险 ${sortArrow("risk")}</th>
            <th onclick="sortHealthTable('cost')" style="cursor:pointer;">成本 ${sortArrow("cost")}</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${top6.map((x, idx) => {
            const p = x.project;
            const h = x.health;
            const rankClass = idx < 3 ? "top3" : (idx >= top6.length - 3 ? "bottom3" : "");
            const rankIcon = idx === 0 ? "🥇" : (idx === 1 ? "🥈" : (idx === 2 ? "🥉" : (idx + 1)));
            return `<tr class="${rankClass}">
              <td class="rank-col">${rankIcon}</td>
              <td>${p.name}</td>
              <td>${p.workplace}</td>
              <td>${p.serviceMode}</td>
              <td class="score-col" style="background:${scoreBg(x.score)};color:${scoreColor(x.score)};font-weight:600;">${x.score > 0 ? x.score : "--"}</td>
              ${h ? h.dimensions.map(d => {
                const c = scoreColor(d.score);
                const bg = scoreBg(d.score);
                return `<td class="score-col" style="background:${bg};color:${c}">${d.score}</td>`;
              }).join("") : "<td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>"}
              <td><button class="btn btn-sm" onclick="toggleHealthDetail('${p.id}')">查看</button></td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
  </div>`;
}

// 渲染健康度等级定义
function renderHealthLevelDefinition() {
  return `
  <div class="card" style="margin-top:16px;padding:14px 18px;">
    <div style="font-size:13px;font-weight:500;margin-bottom:8px;">📋 健康度等级定义</div>
    <div class="health-level-definition">
      <div class="hld-item excellent">
        <div class="hld-dot"></div>
        <div class="hld-content">
          <div class="hld-title">🟢 优质健康店（90-100分）</div>
          <div class="hld-desc">各维度表现优秀，无明显短板，可作为标杆案例推广</div>
        </div>
      </div>
      <div class="hld-item normal">
        <div class="hld-dot"></div>
        <div class="hld-content">
          <div class="hld-title">🟡 平稳常规店（75-89分）</div>
          <div class="hld-desc">整体运营平稳，个别维度需关注，建议制定提升计划</div>
        </div>
      </div>
      <div class="hld-item warning">
        <div class="hld-dot"></div>
        <div class="hld-content">
          <div class="hld-title">🟠 风险预警店（60-74分）</div>
          <div class="hld-desc">存在明显问题，需制定改善计划，PM需每周跟进</div>
        </div>
      </div>
      <div class="hld-item danger">
        <div class="hld-dot"></div>
        <div class="hld-content">
          <div class="hld-title">🔴 高危问题店（0-59分）</div>
          <div class="hld-desc">多项指标不达标，需立即介入整改，建议成立专项小组</div>
        </div>
      </div>
    </div>
  </div>`;
}

// 切换卡片展开
function toggleHealthCard(className) {
  const container = document.getElementById("health-card-detail");
  if (!container) return;
  const isVisible = container.style.display !== "none";
  const projects = getFilteredProjects();
  const projectHealth = projects.map(p => {
    const h = HEALTH_DATA.find(hh => hh.projectId === p.id && hh.period === "2026-05");
    const score = h ? h.overallScore : 0;
    const healthInfo = score > 0 ? getHealthLevel(score) : { level: "未评估", class: "unrated", icon: "⚪" };
    return { project: p, health: h, score, ...healthInfo };
  });
  const filtered = projectHealth.filter(x => x.class === className);
  if (isVisible && container.dataset.class === className) {
    container.style.display = "none";
    return;
  }
  container.dataset.class = className;
  container.style.display = "block";
  container.innerHTML = `
    <div class="health-detail-cards">
      <div style="font-size:13px;font-weight:500;margin-bottom:10px;">${filtered[0]?.icon || ""} ${filtered[0]?.level || ""} - 共${filtered.length}家</div>
      <div class="hdc-grid">
        ${filtered.map(x => {
          const p = x.project;
          const h = x.health;
          const levelColor = scoreColor(x.score);
          const levelBg = scoreBg(x.score);
          return `
          <div class="health-detail-card">
            <div class="hdc-header" style="background:${levelBg};">
              <div class="hdc-title">${p.name}</div>
              <div class="hdc-score" style="color:${levelColor}">${x.score > 0 ? x.score + "分" : "未评估"}</div>
            </div>
            <div class="hdc-body">
              <div class="hdc-info">${p.workplace} · ${p.serviceMode}</div>
              ${h ? renderHealthWarningSummary(h) : ""}
            </div>
            <div class="hdc-footer">
              <button class="btn btn-sm btn-primary" onclick="toggleHealthDetail('${p.id}')">查看详情</button>
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>`;
  container.scrollIntoView({ behavior: "smooth", block: "start" });
}

// 排序表格
function sortHealthTable(key) {
  const dir = (window._healthSort && window._healthSort.key === key && window._healthSort.dir === "desc") ? "asc" : "desc";
  window._healthSort = { key, dir };
  renderModule("服务与进度追踪");
}

// 主渲染函数
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

function renderIssue(){

  const can = canEdit();

  // 计算各状态数量
  const countPending = ISSUES.filter(i=>i.status==='待处理').length;
  const countProcessing = ISSUES.filter(i=>i.status==='处理中').length;
  const countVerify = ISSUES.filter(i=>i.status==='待验收').length;
  const countClosed = ISSUES.filter(i=>i.status==='已关闭').length;
  const countAll = ISSUES.length;

  return `
  ${renderFilterBar()}

  <div class="issue-page-header">
    <div class="issue-page-title-row">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#185FA5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      <h1 class="issue-page-title">问题与课题协作</h1>
    </div>
    <p class="issue-page-desc">问题登记、跟踪与闭环管理，支持跨职场协同</p>
  </div>

  <div class="issue-stat-cards">
    <div class="issue-stat-card issue-stat-pending">
      <p class="issue-stat-label">待处理</p>
      <p class="issue-stat-count">${countPending}</p>
    </div>
    <div class="issue-stat-card issue-stat-processing">
      <p class="issue-stat-label">处理中</p>
      <p class="issue-stat-count">${countProcessing}</p>
    </div>
    <div class="issue-stat-card issue-stat-verify">
      <p class="issue-stat-label">待验收</p>
      <p class="issue-stat-count">${countVerify}</p>
    </div>
    <div class="issue-stat-card issue-stat-closed">
      <p class="issue-stat-label">已关闭</p>
      <p class="issue-stat-count">${countClosed}</p>
    </div>
  </div>

  <div class="issue-toolbar">
    <div class="issue-filter-btns">
      <span class="issue-filter-btn issue-filter-active">全部(${countAll})</span>
      <span class="issue-filter-btn">待处理(${countPending})</span>
      <span class="issue-filter-btn">处理中(${countProcessing})</span>
      <span class="issue-filter-btn">待验收(${countVerify})</span>
      <span class="issue-filter-btn">已关闭(${countClosed})</span>
    </div>
    ${can?'<div class="issue-add-btn" onclick="showAddIssue()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>上报问题</div>':''}
  </div>

  <div class="issue-table-wrapper">
    <table class="issue-table">
      <thead>
        <tr>
          <th style="width:9%;">状态</th>
          <th style="width:9%;">课题编号</th>
          <th style="width:12%;">项目</th>
          <th style="width:7%;">类型</th>
          <th style="width:26%;">问题描述</th>
          <th style="width:7%;text-align:center;">优先级</th>
          <th style="width:7%;">责任人</th>
          <th style="width:8%;">责任归属</th>
          <th style="width:15%;text-align:center;">操作</th>
        </tr>
      </thead>
      <tbody>
        ${ISSUES.map(i=>{
          const rowClass = (i.status==='待处理'||i.priority==='紧急')?'issue-row-danger':i.status==='待验收'?'issue-row-danger':i.status==='处理中'?'issue-row-warning':'';
          let statusClass = '';
          if(i.status==='已关闭') statusClass = 'issue-badge-success';
          else if(i.status==='待处理') statusClass = 'issue-badge-danger';
          else if(i.status==='待验收') statusClass = 'issue-badge-warning';
          else statusClass = 'issue-badge-info';

          let priorityClass = '';
          if(i.priority==='紧急') priorityClass = 'issue-priority-danger';
          else if(i.priority==='重要') priorityClass = 'issue-priority-warning';
          else priorityClass = 'issue-priority-gray';

          return `
          <tr class="${rowClass}">
            <td><span class="issue-badge ${statusClass}">${i.status}</span></td>
            <td style="font-weight:500;">I${String(i.id).padStart(3,'0')}</td>
            <td>${i.projectName}</td>
            <td>${i.type}</td>
            <td style="color:var(--c-text-3,#666);">${i.desc}</td>
            <td style="text-align:center;"><span class="issue-priority-badge ${priorityClass}">${i.priority}</span></td>
            <td>${i.assignee}</td>
            <td>${i.responsibility}</td>
            <td style="text-align:center;">
              <span class="issue-action-btn issue-action-view" onclick="showIssueDetail(${i.id})">查看</span>
              ${can && i.status!=='已关闭'?'<span class="issue-action-btn issue-action-update" onclick="alert(\'处理功能开发中\')">更新</span>':''}
            </td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>

  <div class="issue-legend">
    <div class="issue-legend-item"><span class="issue-legend-color issue-legend-red"></span> 紧急/重要问题行高亮</div>
    <div class="issue-legend-item"><span class="issue-legend-color issue-legend-blue"></span> 处理中</div>
    <div class="issue-legend-item"><span class="issue-legend-color issue-legend-green"></span> 已关闭</div>
  </div>`;


}

// ===== 核心知识能量池 =====

function renderKnowledge(){

  const can = canEdit();

  // 计算统计数据
  const totalKnowledge = KNOWLEDGE.length;
  const weekNew = KNOWLEDGE.filter(k => {
    if (!k.createdAt) return false;
    const d = new Date(k.createdAt);
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    return d >= weekAgo;
  }).length;
  const totalViews = KNOWLEDGE.reduce((s, k) => s + (k.views || 0), 0);
  const totalDownloads = KNOWLEDGE.reduce((s, k) => s + (k.downloads || 0), 0);

  // 分类统计
  const typeCounts = {};
  KNOWLEDGE.forEach(k => {
    typeCounts[k.type] = (typeCounts[k.type] || 0) + 1;
  });

  const typeOrder = ['SOP流程优化','风控应急预案','成本目标控制','优秀话术萃取','AI提效赋能','培训材料'];

  const top5 = [...KNOWLEDGE].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);

  const permIcon = {'公开':'🌐','内部':'🔵','受限':'🔴'};
  const permLabel = {'公开':'公开','内部':'内部','受限':'受限'};

  return `
  ${renderFilterBar()}

  <div class="kyp-header">
    <div class="kyp-header-left">
      <div class="kyp-title-row">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#185FA5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        <h1 class="kyp-title">核心知识能量池</h1>
      </div>
      <p class="kyp-desc">电商客服团队专属知识库 · 沉淀经验 · 赋能团队</p>
    </div>
    ${can ? '<div class="kyp-add-btn" onclick="alert(\'添加知识功能开发中\')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>添加知识</div>' : ''}
  </div>

  <div class="kyp-stats">
    <div class="kyp-stat-card">
      <div class="kyp-stat-icon kis-blue"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
      <div class="kyp-stat-body">
        <span class="kyp-stat-val">${totalKnowledge}</span>
        <span class="kyp-stat-lbl">知识总量</span>
      </div>
    </div>
    <div class="kyp-stat-card">
      <div class="kyp-stat-icon kis-green"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
      <div class="kyp-stat-body">
        <span class="kyp-stat-val">${weekNew}<span class="kyp-badge-new">NEW</span></span>
        <span class="kyp-stat-lbl">本周新增</span>
      </div>
    </div>
    <div class="kyp-stat-card">
      <div class="kyp-stat-icon kis-orange"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
      <div class="kyp-stat-body">
        <span class="kyp-stat-val">${totalViews.toLocaleString()}</span>
        <span class="kyp-stat-lbl">总浏览量</span>
      </div>
    </div>
    <div class="kyp-stat-card">
      <div class="kyp-stat-icon kis-red"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></div>
      <div class="kyp-stat-body">
        <span class="kyp-stat-val">${totalDownloads.toLocaleString()}</span>
        <span class="kyp-stat-lbl">总下载量</span>
      </div>
    </div>
  </div>

  <div class="kyp-filters">
    <div class="kyp-filter-tags" id="kyp-filter-tags">
      <span class="kyp-tag kyp-tag-active" data-type="all" onclick="kypFilter('all')">全部 ${totalKnowledge}</span>
      ${typeOrder.filter(t => typeCounts[t]).map(t => `<span class="kyp-tag" data-type="${t}" onclick="kypFilter('${t}')">${t} ${typeCounts[t]}</span>`).join('')}
    </div>
    <div class="kyp-search-box">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      <input type="text" class="kyp-search-input" placeholder="搜索知识标题、标签、内容..." oninput="kypSearch(this.value)">
    </div>
  </div>

  <div class="kyp-layout">
    <div class="kyp-main">
      <div class="kyp-grid" id="kyp-grid">
        ${KNOWLEDGE.map(k => {
          const perm = k.permission || '公开';
          return `
          <div class="kyp-card" data-type="${k.type}" data-search="${k.title}${k.description}${k.tags}" onclick="showKnowledgeDetail(${k.id})">
            <div class="kyp-card-top">
              <span class="kyp-card-title">${k.title}</span>
              <div class="kyp-card-actions">
                ${can ? '<span class="kyp-act" onclick="event.stopPropagation();alert(\'编辑功能开发中\')">✎</span>' : ''}
                ${can ? '<span class="kyp-act kyp-act-del" onclick="event.stopPropagation();alert(\'删除功能开发中\')">✕</span>' : ''}
              </div>
            </div>
            <div class="kyp-card-meta">
              <span class="kyp-type-badge ktp-${k.type}">${k.type}</span>
              <span class="kyp-scope-badge">${k.scope || '通用'}</span>
              <span class="kyp-perm-badge">${permIcon[perm] || '🌐'} ${permLabel[perm] || ''}</span>
            </div>
            <div class="kyp-card-desc">${k.description || '暂无描述'}</div>
            <div class="kyp-card-tags">
              ${(k.tags || '').split(',').filter(t=>t.trim()).map(t => '<span class="kyp-tag-sm">' + t.trim() + '</span>').join('')}
            </div>
            <div class="kyp-card-footer">
              <span class="kyp-card-time">📅 更新于 ${k.updateTime || k.createdAt || '-'}</span>
              <span class="kyp-card-stats">
                <span class="kyp-stat-item">👁 ${k.views || 0}</span>
                <span class="kyp-stat-item">⬇ ${k.downloads || 0}</span>
              </span>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div id="kyp-empty" style="display:none;text-align:center;padding:60px 0;color:var(--c-text-3,#999);font-size:14px;">没有找到匹配的知识内容</div>
    </div>

    <div class="kyp-sidebar">
      <div class="kyp-sb-section">
        <div class="kyp-sb-title">🔥 热门排行榜 TOP5</div>
        ${top5.map((k, i) => `
          <div class="kyp-rank-item" onclick="showKnowledgeDetail(${k.id})">
            <span class="kyp-rank-num ${i < 3 ? 'kyp-rank-top' : ''}">${i + 1}</span>
            <div class="kyp-rank-body">
              <span class="kyp-rank-title">${k.title}</span>
              <span class="kyp-rank-stats">👁 ${k.views || 0}  ·  ⬇ ${k.downloads || 0}</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="kyp-sb-section">
        <div class="kyp-sb-title">🕐 最近查阅</div>
        ${KNOWLEDGE.slice(0, 5).map(k => `
          <div class="kyp-recent-item" onclick="showKnowledgeDetail(${k.id})">
            <span class="kyp-recent-title">${k.title}</span>
            <span class="kyp-recent-time">${k.updateTime || k.createdAt || '-'}</span>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <div class="kyp-legend">
    <span><span class="kyp-legend-dot" style="background:#378ADD;"></span> SOP流程优化</span>
    <span><span class="kyp-legend-dot" style="background:#E24B4A;"></span> 风控应急预案</span>
    <span><span class="kyp-legend-dot" style="background:#3B6D11;"></span> 成本目标控制</span>
    <span><span class="kyp-legend-dot" style="background:#E08B1A;"></span> 优秀话术萃取</span>
    <span><span class="kyp-legend-dot" style="background:#7C3AED;"></span> AI提效赋能</span>
    <span><span class="kyp-legend-dot" style="background:#888;"></span> 培训材料</span>
  </div>

  <script>
  var kypCurrentType = 'all';
  function kypFilter(type) {
    kypCurrentType = type;
    document.querySelectorAll('#kyp-filter-tags .kyp-tag').forEach(function(el) {
      el.classList.toggle('kyp-tag-active', el.dataset.type === type);
    });
    var cards = document.querySelectorAll('#kyp-grid .kyp-card');
    var visible = 0;
    cards.forEach(function(c) {
      var match = type === 'all' || c.dataset.type === type;
      c.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    document.getElementById('kyp-empty').style.display = visible === 0 ? '' : 'none';
  }
  function kypSearch(val) {
    var q = val.toLowerCase().trim();
    var cards = document.querySelectorAll('#kyp-grid .kyp-card');
    var visible = 0;
    cards.forEach(function(c) {
      var typeMatch = kypCurrentType === 'all' || c.dataset.type === kypCurrentType;
      var searchMatch = !q || c.dataset.search.toLowerCase().indexOf(q) !== -1;
      var show = typeMatch && searchMatch;
      c.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    document.getElementById('kyp-empty').style.display = visible === 0 ? '' : 'none';
  }
  function showKnowledgeDetail(id) {
    var k = KNOWLEDGE.find(function(item) { return item.id === id; });
    if (!k) return;
    var permIcon = {'\u5f53\u524d':'\ud83c\udf10','\u5185\u90e8':'\ud83d\udd35','\u53d7\u9650':'\ud83d\udd34'};
    alert('\u3010' + k.title + '\u3011\\n\u5206\u7c7b\uff1a' + k.type + ' ' + (permIcon[k.permission||'\u5f53\u524d']||'') + '\\n\u63cf\u8ff0\uff1a' + (k.description||'\u6682\u65e0') + '\\n\u6d4f\u89c8\u91cf\uff1a' + (k.views||0) + ' \u4e0b\u8f7d\u91cf\uff1a' + (k.downloads||0) + '\\n\u66f4\u65b0\u65f6\u95f4\uff1a' + (k.updateTime||k.createdAt||'-'));
  }
  <\/script>`;

}// ===== 项目承接规范 =====

function renderHandover(){

  return `

  <div class="module-header">

    <div>

      <div class="module-title">🔄 项目承接规范</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">解决人员变动导致的项目信息断层问题，所有交接留痕可查</div>

    </div>

    <div class="module-actions">

      ${canEdit()?'<button class="btn btn-primary btn-sm" onclick="showNewHandover()">＋ 发起交接</button>':''}

    </div>

  </div>



  <div class="card" style="background:var(--c-yellow-bg);border-color:var(--c-yellow);margin-bottom:16px;">

    <div style="font-size:13px;color:var(--c-yellow);font-weight:500;">💡 项目承接规范说明</div>

    <div style="font-size:12px;color:var(--c-yellow);margin-top:4px;">

      发起交接后，系统自动生成交接清单（基础档案+目标责任+运营现状+进行中课题+未关闭问题）。接收人确认后，系统自动更新负责人字段并归档留痕。

    </div>

  </div>



  <div class="card">

    <div class="card-title">交接记录</div>
      <div class="detail-tab" onclick="switchDetailTab(this,'responsibility')">📋 责任边界</div>

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

        ${PROJECTS.filter(p=>filterState.workplace==='all'||p.workplace===filterState.workplace).map(p=>{

          const lastH = HANDOVERS.filter(h=>h.projectId===p.id).sort((a,b)=>b.date.localeCompare(a.date))[0];

          return `<tr>

            <td>${p.name}</td>

            <td>${p.pm}</td>

            <td><span class="badge badge-green">正常</span></td>

            <td>${(p.pmHistory||[]).length + HANDOVERS.filter(h=>h.projectId===p.id).length}</td>

            <td>${lastH?lastH.date:'无'}</td>

          </tr>`;

        }).join('')}

      </tbody>

    </table>

  </div>`;

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

          <span class="badge ${p.serviceMode==='TP项目'?'badge-blue':p.serviceMode==='DP项目'?'badge-green':'badge-orange'}">${p.serviceMode}</span>

          <span>${p.category} · ${p.brand}</span>

          <span>状态：${p.status}</span>

          <span>健康：${p.health}</span>

        </div>

      </div>

      <div style="text-align:right;">

        <button class="btn btn-sm" onclick="editProject('${p.id}')" style="font-size:12px;margin-bottom:8px;">✏️ 编辑</button>
        <div style="font-size:12px;color:var(--c-text-3);">现任负责人</div>

        <div style="font-size:16px;font-weight:600;color:var(--c-primary);">${p.pm}</div>

        <div style="font-size:12px;color:var(--c-text-3);">项目总监：${p.director}</div>

      </div>

    </div>



    <div class="detail-tabs">

      <div class="detail-tab active" onclick="switchDetailTab(this,'info')">📋 基础档案</div>
      
      <div class="detail-tab" onclick="switchDetailTab(this,'target')">🎯 目标约定</div>
      
      <div class="detail-tab" onclick="switchDetailTab(this,'operation')">📊 运营实况</div>
      
      <div class="detail-tab" onclick="switchDetailTab(this,'issue')">⚠️ 课题推进</div>
      
      <div class="detail-tab" onclick="switchDetailTab(this,'history')">📝 交接记录</div>

      <div class="detail-tab" onclick="switchDetailTab(this,'responsibility')">📋 责任边界</div>
    </div>



    <div id="detail-tab-info" class="detail-section">

      <h4>基础信息</h4>

      <div class="detail-grid">

        <div class="detail-item"><div class="detail-label">项目编号</div><div class="detail-value">${p.id}</div></div>

        <div class="detail-item"><div class="detail-label">品牌</div><div class="detail-value">${p.brand}</div></div>

        <div class="detail-item"><div class="detail-label">品类</div><div class="detail-value">${p.category}</div></div>

        <div class="detail-item"><div class="detail-label">项目类型</div><div class="detail-value">${p.serviceMode}</div></div>

        <div class="detail-item"><div class="detail-label">所属职场</div><div class="detail-value">${p.workplace}</div></div>

        <div class="detail-item"><div class="detail-label">客服base</div><div class="detail-value">${p.base}</div></div>

        <div class="detail-item"><div class="detail-label">服务周期</div><div class="detail-value">${p.startDate} ~ ${p.endDate}</div></div>

        <div class="detail-item"><div class="detail-label">服务渠道</div><div class="detail-value">${p.platforms}</div></div>

        <div class="detail-item"><div class="detail-label">服务时间</div><div class="detail-value">${p.serviceHours}</div></div>

        <div class="detail-item"><div class="detail-label">项目状态</div><div class="detail-value">${p.status}</div></div>

      </div>

      ${(p.pmHistory||[]).length>0?`

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

      <h4>目标与权责</h4>

      <div class="detail-grid">

        <div class="detail-item"><div class="detail-label">人力配置目标</div><div class="detail-value">${p.fteTarget} 人</div></div>

        <div class="detail-item"><div class="detail-label">SLA响应时长</div><div class="detail-value">≤ ${p.slaResponse} 秒</div></div>

        <div class="detail-item"><div class="detail-label">SLA解决时长</div><div class="detail-value">≤ ${p.slaResolve} 秒</div></div>

        <div class="detail-item"><div class="detail-label">CSat目标</div><div class="detail-value">≥ 4.5</div></div>

        <div class="detail-item"><div class="detail-label">月度成本预算</div><div class="detail-value">¥${((p.costBudget||0)/10000).toFixed(1)}万</div></div>

        <div class="detail-item"><div class="detail-label">月度营收目标</div><div class="detail-value">¥${((p.revenue||0)/10000).toFixed(1)}万</div></div>

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

      ${(p.pmHistory||[]).length>0?`

        <h4 style="margin-top:16px;">历任负责人（档案记录）</h4>

        <table class="data-table">

          <thead><tr><th>姓名</th><th>时间段</th><th>原因</th></tr></thead>

          <tbody>

            ${p.pmHistory.map(h=>`<tr><td>${h.name}</td><td>${h.from} ~ ${h.to}</td><td>${h.reason}</td></tr>`).join('')}

          </tbody>

        </table>

      `:''}

    </div>

${renderResponsibilitySection(p)}
  `;

  modal.classList.remove("hidden");

}



function filterByHealth(health){
  currentHealthFilter = health;
  showPage('projects');
}

function switchDetailTab(el, tabName){

  document.querySelectorAll(".detail-tab").forEach(t=>t.classList.remove("active"));

  el.classList.add("active");

  ["info","target","operation","issue","history","responsibility"].forEach(n => {

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

        <label class="form-label">项目类型</label>

        <select class="form-select" id="f-mode">

          <option>TP项目</option><option>DP项目</option><option>BPO项目</option>

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
  saveProjects();

  OPERATIONS.push({id:OPERATIONS.length+1, projectId:p.id, period:new Date().toISOString().slice(0,7), fteActual:0, attendance:0, ticketVol:0, responseTime:0, resolveTime:0, csat:0, resolutionRate:0, reviewRate:0, health:"🟡"});

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule(currentModule);

  showToast("项目「"+name+"」已新增！");

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

    owner: currentRole==="pm"?"张伟":currentRole==="exec"?"刘洋":"",

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

      <div style="margin-top:6px;font-size:12px;color:var(--c-yellow);">✅ 项目基础档案 &nbsp; ✅ 目标与权责 &nbsp; ✅ 当前运营现状 &nbsp; ✅ 进行中课题 &nbsp; ✅ 未关闭问题</div>

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

    ${currentRole!=='leader'&&i.status!=='已关闭'?`

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



// ===== 通用 XLSX/CSV 导出函数 =====
function exportToXlsx(filename, headers, rows) {
  try {
    var wsData = [headers, ...rows];
    var ws = XLSX.utils.aoa_to_sheet(wsData);
    ws['!cols'] = headers.map(function(h) { return { wch: Math.max((h||'').length * 2 + 4, 16) }; });
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, filename);
    if (typeof showToast === 'function') showToast('已导出：' + filename);
    else console.log('[export] 已导出：' + filename);
  } catch(e) {
    console.error('[exportToXlsx] 失败:', e);
    alert('导出 Excel 失败：' + e.message);
  }
}

function exportToCSV(filename, headers, rows) {
  try {
    var BOM = '\uFEFF';
    var csvRows = [headers, ...rows].map(function(r) {
      return r.map(function(c) { return '"' + (c||'').toString().replace(/"/g, '""') + '"'; }).join(',');
    });
    var csvContent = BOM + csvRows.join('\n');
    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    if (typeof showToast === 'function') showToast('已导出：' + filename);
    else console.log('[export] 已导出：' + filename);
  } catch(e) {
    console.error('[exportToCSV] 失败:', e);
    alert('导出 CSV 失败：' + e.message);
  }
}

function showExportDialog(headers, rows, baseFilename, title) {
  console.log('[showExportDialog] 开始，title=' + (title||'') + ', rows=' + rows.length);
  window.__expHeaders = headers;
  window.__expData = rows;
  window.__expFile = baseFilename;
  var overlay = document.getElementById('modal-overlay');
  var titleEl = document.getElementById('modal-title');
  var body = document.getElementById('modal-body');
  console.log('[showExportDialog] 查找DOM: overlay=' + !!overlay + ', title=' + !!titleEl + ', body=' + !!body);
  if (!overlay || !titleEl || !body) {
    console.warn('[showExportDialog] DOM元素缺失，fallback直接导出CSV');
    // fallback：直接导出 CSV
    exportToCSV(baseFilename + '.csv', headers, rows);
    return;
  }
  titleEl.textContent = '导出：' + (title || '数据');
  body.innerHTML = '<div style="padding:24px;text-align:center;">' +
    '<div style="font-size:15px;margin-bottom:20px;color:#1e293b;font-weight:600;">请选择导出格式</div>' +
    '<div style="display:flex;gap:16px;justify-content:center;margin-bottom:16px;">' +
      '<button class="btn btn-primary" style="padding:14px 28px;font-size:14px;" onclick="doExportCSV()">📥 导出 CSV</button>' +
      '<button class="btn" style="padding:14px 28px;font-size:14px;background:#1d6f42;color:#fff;border:none;" onclick="doExportXLSX()">📊 导出 Excel</button>' +
    '</div>' +
    '<div style="font-size:12px;color:#94a3b8;">CSV 兼容更多软件 | Excel 支持格式美化</div>' +
  '</div>';
  overlay.classList.remove('hidden');
  console.log('[showExportDialog] 弹窗已显示');
}

window.doExportCSV = function() {
  var h = window.__expHeaders, r = window.__expData, f = window.__expFile;
  exportToCSV(f + '.csv', h, r);
  var ov = document.getElementById('modal-overlay');
  if (ov) ov.classList.add('hidden');
};
window.doExportXLSX = function() {
  var h = window.__expHeaders, r = window.__expData, f = window.__expFile;
  exportToXlsx(f + '.xlsx', h, r);
  var ov = document.getElementById('modal-overlay');
  if (ov) ov.classList.add('hidden');
};
// ===== 结束通用导出函数 =====


function exportDashboard(){
  const headers = ['项目编号','项目名称','健康度','状态','职场','负责人'];
  const rows = PROJECTS.map(p => [
    p.id, p.name, p.healthScore||'', p.status||'进行中', p.workplace||'', p.pm||''
  ]);
  showExportDialog(headers, rows, `项目总览_${new Date().toISOString().slice(0,10)}`, '项目总览看板');
}



// ===== 项目运维调研 =====

// 全局筛选状态

let SAT_FILTER = { projectId:'', scoreRange:'', evaluator:'' };



function renderSatisfaction(){

  const can = canEdit();

  const isLeader = currentRole === 'leader';

  const isStaff = currentRole === 'staff';



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

      <div class="module-title">💯 项目运维调研</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">

        客服端与项目端的沟通桥梁 · 反向促进成长 · ${isLeader ? '领导视角：可评定打分' : '团队视角：查看评定结果'}

      </div>

    </div>

    <div class="module-actions">

      ${isLeader||currentRole==='pm' ? '<button class="btn btn-primary btn-sm" onclick="showAddSatisfaction()">＋ 新增评估</button>' : ''}

      <button class="btn btn-sm" onclick="exportSatisfaction()">📤 导出</button>

      ${isLeader||currentRole==='pm' ? '<button class="btn btn-sm" onclick="importSatisfaction()">📥 导入</button>' : ''}

      ${isLeader||currentRole==='pm' ? '<button class="btn btn-sm" onclick="showSatisfactionPermission()">🔐 权限设置</button>' : ''}

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

            <td>${s.projectFeedback.busiLima2sPerf.length > 10 ? s.projectFeedback.busiLima2sPerf.slice(0,10) + '…' : s.projectFeedback.busiLima2sPerf}</td>

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

  const isLeader = currentRole === 'leader';

  

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

          <div style="font-size:12px;margin-top:2px;">${s.projectFeedback.busiLima2sPerf}</div>

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

        <div style="font-size:12px;margin-top:2px;">时效性：${s.projectFeedback.reporting.timeliLima2s} ｜ 准确性：${s.projectFeedback.reporting.accuracy} ｜ 全面性：${s.projectFeedback.reporting.completeLima2s}</div>

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

      busiLima2sPerf: document.getElementById("sf-biz").value || "待填写",

      professionalism: document.getElementById("sf-pro").value || "待填写",

      execution: document.getElementById("sf-exec").value || "待填写",

      reporting: { 

        timeliLima2s: document.getElementById("sf-rep-time").value || "待填写", 

        accuracy: document.getElementById("sf-rep-acc").value || "待填写", 

        completeLima2s: document.getElementById("sf-rep-full").value || "待填写" 

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

    evaluatedBy: currentRole,

    evaluatedAt: "",

    status: "待评定"

  });

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("satisfaction");

  alert("满意度评估已创建！\n项目感受已记录，待上级与项目沟通后补充评定打分。");

}



// ===== 满意度评估 - 导出 =====

function exportSatisfaction(){
  const headers = ['项目','周期','项目综合感受','业务表现','专业度','执行力','汇报时效性','汇报准确性','汇报全面性','风险管控','沟通频率','沟通理解','信息同步','领导评分','上级评语','评定人','评定日期','状态'];
  const rows = SATISFACTION_DATA.map(s => {
    const p = PROJECTS.find(pp => pp.id === s.projectId);
    return [
      p ? p.name : s.projectId,
      s.period,
      s.projectFeedback.overall,
      s.projectFeedback.busiLima2sPerf,
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
  showExportDialog(headers, rows, `项目运维调研_${new Date().toISOString().slice(0,10)}`, '项目运维调研');
}


function importSatisfaction(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "📥 导入满意度评估";

  body.innerHTML = `

    <div style="font-size:13px;color:var(--c-text-2);margin-bottom:14px;line-height:1.8;">

      <div>📋 <b>导入说明：</b></div>

      <div>支持 CSV / XLSX 格式，文件字段顺序不限，参考导出文件。</div>

      <div style="background:var(--c-bg);padding:8px 12px;border-radius:6px;margin-top:6px;font-size:12px;">

        项目ID / 周期 / 综合感受 / 业务表现 / 专业度 / 执行力 / 汇报时效性 / 汇报准确性 / 汇报全面性 / 风险管控 / 沟通频率 / 沟通理解 / 信息同步 / 领导评分 / 上级评语 / 状态

      </div>

      <div style="margin-top:8px;">也可下载当前数据作为模板参考（点击"导出"按钮）。</div>

    </div>

    <div class="form-group">

      <label class="form-label">选择文件（.csv）</label>

      <input type="file" id="sat-import-file" accept=".csv,.xlsx,.xls" class="form-input" style="padding:6px 10px;">

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
  const ext = (file.name || '').split('.').pop().toLowerCase();

  if (ext === 'xlsx' || ext === 'xls') {
    // Excel 格式：用 SheetJS 解析
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const wb = XLSX.read(e.target.result, { type: 'array' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
        if (!rows || rows.length < 2) { alert("文件内容为空或仅有表头"); return; }
        processSatisfactionRows(rows);
      } catch(err) { alert("解析Excel失败：" + err.message); }
    };
    reader.readAsArrayBuffer(file);
  } else {
    // CSV 格式：原有逻辑
    const reader = new FileReader();
    reader.onload = function(e){
      try {
        const text = e.target.result;
        const lines = text.replace(/^\uFEFF/,'').split('\n').map(l => l.trim()).filter(Boolean);
        if(lines.length < 2){ alert("文件内容为空或仅有表头"); return; }
        // CSV 转成二维数组格式，跟 Excel 统一
        const rows = lines.map(function(line) {
          return line.split(',').map(v => v.replace(/^"|"$/g,'').trim());
        });
        processSatisfactionRows(rows);
      } catch(err){ alert("导入失败：" + err.message); }
    };
    reader.readAsText(file, 'UTF-8');
  }

}

function processSatisfactionRows(rows) {
  const headers = rows[0];
  let importCount = 0;
  for(let i=1;i<rows.length;i++){
    const vals = rows[i];
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
        busiLima2sPerf: vals[headers.indexOf('业务表现')] || '待填写',
        professionalism: vals[headers.indexOf('专业度')] || '待填写',
        execution: vals[headers.indexOf('执行力')] || '待填写',
        reporting: {
          timeliLima2s: vals[headers.indexOf('汇报时效性')] || '待填写',
          accuracy: vals[headers.indexOf('汇报准确性')] || '待填写',
          completeLima2s: vals[headers.indexOf('汇报全面性')] || '待填写'
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
      evaluatedBy: vals[headers.indexOf('评定人')] || currentRole,
      evaluatedAt: vals[headers.indexOf('评定日期')] || new Date().toISOString().slice(0,10),
      status: vals[headers.indexOf('状态')] || '待评定'
    });
    importCount++;
  }
  document.getElementById("modal-overlay").classList.add("hidden");
  renderModule("satisfaction");
  alert(`导入完成！共成功导入 ${importCount} 条评估记录。`);
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



// ===== 系统用户管理（用户审批管理） =====

let notificationFilter = "all";

function renderNotifications(){
  if (!isAdmin()) {
    return `<div class="empty-state"><div class="empty-icon">&#x1F512;</div><p>仅管理员可访问此模块</p></div>`;
  }

  const filtered = notificationFilter === "all" ? USERS : USERS.filter(u => {
    if (notificationFilter === "pending") return u.status === "待审核";
    if (notificationFilter === "active") return u.status === "已激活";
    if (notificationFilter === "rejected") return u.status === "已拒绝";
    return true;
  });

  const statusBadge = {
    "已激活": "badge-green",
    "待审核": "badge-yellow",
    "已拒绝": "badge-red",
    "已禁用": "badge-gray"
  };

  const roleBadge = {
    "超级管理员": "badge-purple",
    "管理员": "badge-blue",
    "客服总监": "badge-orange",
    "客服经理": "badge-primary",
    "客服主管": "badge-yellow",
    "客服组长": "badge-green",
    "项目伙伴": "badge-gray",
    "技术伙伴": "badge-gray",
    "风控伙伴": "badge-gray"
  };

  return `<div class="module-header">
    <div>
      <div class="module-title">&#x1F514; 系统用户管理</div>
      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">管理系统用户，审批注册申请，维护账号状态</div>
    </div>
    <div class="module-actions">
      <button class="btn btn-sm btn-primary" onclick="showAddUser()">&#xFF0B; 新增用户</button>
    </div>
  </div>

  <div style="display:flex;gap:8px;margin-bottom:16px;">
    <button class="btn btn-sm ${notificationFilter==='all'?'btn-primary':''}" onclick="setNotificationFilter('all')">全部(${USERS.length})</button>
    <button class="btn btn-sm ${notificationFilter==='pending'?'btn-primary':''}" style="background:var(--c-yellow-bg);color:var(--c-yellow);border-color:var(--c-yellow)" onclick="setNotificationFilter('pending')">待审核(${USERS.filter(u=>u.status==='待审核').length})</button>
    <button class="btn btn-sm ${notificationFilter==='active'?'btn-primary':''}" style="background:var(--c-green-bg);color:var(--c-green);border-color:var(--c-green)" onclick="setNotificationFilter('active')">已激活(${USERS.filter(u=>u.status==='已激活').length})</button>
    <button class="btn btn-sm ${notificationFilter==='rejected'?'btn-primary':''}" style="background:var(--c-red-bg);color:var(--c-red);border-color:var(--c-red)" onclick="setNotificationFilter('rejected')">已拒绝(${USERS.filter(u=>u.status==='已拒绝').length})</button>
  </div>

  <div class="card">
    <table class="data-table">
      <thead>
        <tr>
          <th>用户</th>
          <th>用户名</th>
          <th>角色</th>
          <th>状态</th>
          <th>注册时间</th>
          <th>联系方式</th>
          <th>审批人</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        ${filtered.map(u => `
          <tr>
            <td><div style="display:flex;align-items:center;gap:8px;"><div style="width:32px;height:32px;border-radius:50%;background:var(--c-primary-light);color:var(--c-primary);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;">${u.name.charAt(0)}</div><span style="font-weight:500;">${u.name}</span></div></td>
            <td>${u.username}</td>
            <td><span class="badge ${roleBadge[u.role]||'badge-gray'}">${u.role}</span></td>
            <td><span class="badge ${statusBadge[u.status]||'badge-gray'}">${u.status}</span></td>
            <td>${u.registerTime}</td>
            <td><div style="font-size:12px;color:var(--c-text-2);">${u.phone}<br/>${u.email}</div></td>
            <td>${u.approvedBy || "&#x2014;"}</td>
            <td class="actions">
              ${u.status === "待审核" ? `
                <button class="btn btn-sm btn-primary" onclick="approveUser('${u.id}', '同意')">同意</button>
                <button class="btn btn-sm" style="background:var(--c-red-bg);color:var(--c-red);border-color:var(--c-red);" onclick="approveUser('${u.id}', '拒绝')">拒绝</button>
                <button class="btn btn-sm" onclick="approveUser('${u.id}', '忽略')">忽略</button>
              ` : `
                <button class="btn btn-sm" onclick="editUserRole('${u.id}')">改角色</button>
                <button class="btn btn-sm" onclick="resetUserPassword('${u.id}')">重置密码</button>
                ${u.status !== "已禁用" ? `<button class="btn btn-sm" style="background:var(--c-yellow-bg);color:var(--c-yellow);border-color:var(--c-yellow);" onclick="disableUser('${u.id}')">禁用</button>` : `<button class="btn btn-sm btn-primary" onclick="enableUser('${u.id}')">启用</button>`}
                ${isSuperAdmin() ? `<button class="btn btn-sm" style="background:var(--c-red-bg);color:var(--c-red);border-color:var(--c-red);" onclick="deleteUser('${u.id}')">删除</button>` : ""}
              `}
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    ${filtered.length === 0 ? `<div style="text-align:center;padding:40px;color:var(--c-text-3);">暂无符合条件的用户</div>` : ""}
  </div>
  `;
}

function setNotificationFilter(filter){
  notificationFilter = filter;
  renderModule("notifications");
}

function approveUser(userId, action){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  if (action === "同意") {
    user.status = "已激活";
    user.approvedBy = currentUser ? currentUser.name : "admin";
    // 新用户默认角色为"新用户"，所有权限只读
    if (!user.role) user.role = "新用户";
    saveUsers();
    alert(`已同意 ${user.name} 的注册申请，账号已激活。`);
  } else if (action === "拒绝") {
    user.status = "已拒绝";
    user.approvedBy = currentUser ? currentUser.name : "admin";
    saveUsers();
    alert(`已拒绝 ${user.name} 的注册申请。`);
  } else if (action === "忽略") {
    alert(`已忽略 ${user.name} 的注册申请，该申请仍保留在待审核列表中。`);
    return;
  }
  renderModule("notifications");
}

function editUserRole(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  const roles = ["客服组长","客服主管","客服经理","客服总监","管理员","项目伙伴","技术伙伴","风控伙伴"];
  const roleOptions = roles.map(r => `<option value="${r}" ${r===user.role?'selected':''}>${r}</option>`).join('');

  const modalHtml = `
    <div class="modal-overlay" id="role-modal-overlay" onclick="if(event.target===this)closeRoleModal()">
      <div class="modal-box" style="max-width:320px;border-radius:10px;box-shadow:0 12px 40px rgba(0,0,0,0.15);">
        <div class="modal-header" style="padding:12px 16px;border-bottom:1px solid #f1f5f9;">
          <div style="font-size:13px;font-weight:600;color:var(--c-text);">修改角色</div>
          <button class="modal-close" onclick="closeRoleModal()" style="font-size:18px;color:#94a3b8;">&times;</button>
        </div>
        <div class="modal-body" style="padding:16px;">
          <div style="margin-bottom:10px;font-size:12px;color:#94a3b8;">为 <strong style="color:var(--c-primary);">${user.name}</strong> 选择新角色</div>
          <div style="position:relative;">
            <select id="role-select-input" style="width:100%;padding:8px 28px 8px 10px;font-size:12px;color:var(--c-text);border:1px solid #e2e8f0;border-radius:6px;background:#fff;appearance:none;cursor:pointer;outline:none;transition:border-color 0.2s;">
              ${roleOptions}
            </select>
            <div style="position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none;font-size:10px;color:#94a3b8;">▼</div>
          </div>
        </div>
        <div class="modal-footer" style="padding:10px 16px 14px;gap:8px;">
          <button class="btn" onclick="closeRoleModal()" style="padding:6px 14px;font-size:12px;border-radius:6px;background:#f8fafc;color:#64748b;border:1px solid #e2e8f0;">取消</button>
          <button class="btn btn-primary" onclick="confirmEditRole('${userId}')" style="padding:6px 14px;font-size:12px;border-radius:6px;">确定</button>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeRoleModal(){
  const el = document.getElementById('role-modal-overlay');
  if(el) el.remove();
}

function confirmEditRole(userId){
  const user = USERS.find(u => u.id === userId);
  const sel = document.getElementById('role-select-input');
  if(!user || !sel) return;
  const newRole = sel.value;
  if(newRole && newRole !== user.role){
    user.role = newRole;
    saveUsers();
    alert(`已修改 ${user.name} 的角色为：${newRole}`);
    renderModule("notifications");
  }
  closeRoleModal();
}

function resetUserPassword(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  const newPwd = prompt(`重置 ${user.name} 的密码：\n请输入新密码（至少6位）：`);
  if (newPwd && newPwd.length >= 6) {
    user.password = newPwd;
    alert(`已重置 ${user.name} 的密码。`);
  } else if (newPwd) {
    alert("密码长度不足6位");
  }
}

function disableUser(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  if (user.role === "超级管理员") { alert("不能禁用超级管理员"); return; }
  if (confirm(`确定要禁用用户 ${user.name} 吗？`)) {
    user.status = "已禁用";
    saveUsers();
    renderModule("notifications");
  }
}

function enableUser(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  user.status = "已激活";
  saveUsers();
  renderModule("notifications");
}

function deleteUser(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  if (user.role === "超级管理员") { alert("不能删除超级管理员"); return; }
  if (confirm(`确定要删除用户 ${user.name} 吗？此操作不可恢复。`)) {
    const idx = USERS.findIndex(u => u.id === userId);
    if (idx > -1) USERS.splice(idx, 1);
    saveUsers();
    renderModule("notifications");
  }
}

function showAddUser(){
  if (!isAdmin()) { alert("仅管理员可新增用户"); return; }
  const name = prompt("用户姓名：");
  if (!name) return;
  const username = prompt("登录账号：");
  if (!username || USERS.some(u => u.username === username)) { alert("账号为空或已存在"); return; }
  const password = prompt("初始密码：");
  if (!password) return;
  const role = prompt("角色（客服组长/客服主管/客服经理/客服总监/管理员）：") || "客服组长";
  const newUser = {
    id: "U" + String(USERS.length + 1).padStart(3, "0"),
    name, username, password, role,
    status: "已激活", registerTime: new Date().toISOString().slice(0, 10),
    phone: "", email: "", approvedBy: currentUser ? currentUser.name : "admin", remark: ""
  };
  USERS.push(newUser);
  renderModule("notifications");
}

function renderPermissions(){
  // 防御性检查
  if (typeof ROLES === "undefined") {
    document.getElementById("module-content").innerHTML = '<div style="padding:40px;text-align:center;color:red;">错误：ROLES 未定义</div>';
    return;
  }
  if (typeof rolePermissions === "undefined") {
    rolePermissions = {};
  }

  const allModules = [
    {key:"dashboard", name:"项目总览看板"},
    {key:"archive", name:"项目基础档案"},
    {key:"target", name:"目标与权责管理"},
    {key:"cost", name:"成本与利润管理"},
    {key:"operation", name:"服务与进度追踪"},
    {key:"issue", name:"问题与课题协作"},
    {key:"knowledge", name:"核心知识能量池"},
    {key:"handover", name:"项目承接规范"},
    {key:"satisfaction", name:"项目运维调研"},
    {key:"permissions", name:"系统权限管理"}
  ];

  // 权限标签颜色
  const pColor = {write:"#16a34a", read:"#2563eb", hidden:"#9ca3af"};

  let html = `
    <div class="module-header">
      <div>
        <div class="module-title">⚙️ 系统权限管理</div>
        <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">为9个角色系统性配置各功能模块的访问权限</div>
      </div>
      <div class="module-actions">
        <button class="btn btn-sm" onclick="batchSetPermission()" style="background:#f0f9ff;border:1px solid #bae6fd;">批量设置</button>
        <button class="btn btn-primary btn-sm" onclick="resetPermissions()">恢复默认</button>
        <button class="btn btn-sm" onclick="exportPermissions()">导出配置</button>
        <button class="btn btn-sm" onclick="importPermissions()">导入配置</button>
      </div>
    </div>

    <!-- 权限图例 -->
    <div class="card" style="padding:10px 16px;margin-bottom:12px;display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
      <span style="font-size:12px;color:var(--c-text-3);">权限图例：</span>
      <span style="font-size:12px;padding:2px 8px;border-radius:4px;background:#dcfce7;color:#16a34a;">● 读写</span>
      <span style="font-size:12px;padding:2px 8px;border-radius:4px;background:#dbeafe;color:#2563eb;">● 只读</span>
      <span style="font-size:12px;padding:2px 8px;border-radius:4px;background:#f3f4f6;color:#9ca3af;">● 隐藏</span>
      <span style="font-size:11px;color:var(--c-text-3);margin-left:auto;">点击单元格可快速切换权限，或使用下拉菜单精确选择</span>
    </div>

    <div class="card" style="overflow-x:auto;">
      <table class="data-table permissions-table" style="min-width:900px;">
        <thead>
          <tr>
            <th style="min-width:100px;position:sticky;left:0;background:var(--c-card);z-index:1;">角色＼模块</th>
            ${allModules.map(m => {
              // 表头显示：去掉"项目"前缀以节省空间，但保留核心词
              let short = m.name.replace("项目","").replace("核心知识能量池","知识能量池");
              return `<th style="text-align:center;font-size:11px;min-width:72px;padding:6px 2px;" title="${m.name}">${short}</th>`;
            }).join('')}
          </tr>
        </thead>
        <tbody>
          ${ROLES.map(role => `
            <tr>
              <td style="font-weight:500;background:var(--c-bg);position:sticky;left:0;z-index:1;padding:8px 10px;">${role}</td>
              ${allModules.map(m => {
                const p = rolePermissions[role] ? rolePermissions[role][m.key] : "hidden";
                const color = pColor[p] || "#9ca3af";
                return `<td style="text-align:center;padding:4px 2px;cursor:pointer;"
                          data-role="${role}" data-key="${m.key}"
                          onclick="cyclePermission(event.currentTarget)"
                          title="点击切换权限（当前：${p==="write"?"读写":p==="read"?"只读":"隐藏"}）">
                  <select onchange="updatePermissionFromSelect(this)"
                          data-role="${role}" data-key="${m.key}"
                          onclick="event.stopPropagation()"
                          style="padding:2px 2px;font-size:11px;border:1px solid ${color};border-radius:4px;background:${p==="write"?"#dcfce7":p==="read"?"#dbeafe":"#f3f4f6"};color:${color};cursor:pointer;width:52px;">
                    <option value="write" ${p==="write"?"selected":""}>读写</option>
                    <option value="read" ${p==="read"?"selected":""}>只读</option>
                    <option value="hidden" ${p==="hidden"?"selected":""}>隐藏</option>
                  </select>
                </td>`;
              }).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- 按角色查看权限卡片 -->
    <div style="margin-top:16px;">
      <div style="font-size:13px;font-weight:500;color:var(--c-text-2);margin-bottom:8px;">🔍 按角色查看权限摘要</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;">
        ${ROLES.map(role => {
          const perms = rolePermissions[role] || {};
          const writeCount = allModules.filter(m => perms[m.key]==="write").length;
          const readCount = allModules.filter(m => perms[m.key]==="read").length;
          const hiddenCount = allModules.filter(m => perms[m.key]==="hidden" || !perms[m.key]).length;
          return `
            <div class="card" style="padding:10px 14px;">
              <div style="font-weight:500;font-size:13px;margin-bottom:6px;">${role}</div>
              <div style="display:flex;gap:8px;font-size:11px;">
                <span style="color:#16a34a;">读写${writeCount}</span>
                <span style="color:#2563eb;">只读${readCount}</span>
                <span style="color:#9ca3af;">隐藏${hiddenCount}</span>
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>

    <div class="card" style="margin-top:16px;padding:14px 18px;">
      <div style="font-size:13px;font-weight:500;margin-bottom:8px;">📋 权限说明</div>
      <ul style="font-size:12px;color:var(--c-text-2);line-height:1.8;">
        <li><b style="color:#16a34a;">读写</b>：可以查看和编辑该模块的所有内容</li>
        <li><b style="color:#2563eb;">只读</b>：只能查看该模块的内容，不能编辑</li>
        <li><b style="color:#9ca3af;">隐藏</b>：该模块对该角色不可见，左侧导航栏不显示</li>
        <li>权限配置自动保存到浏览器本地存储，清除浏览器数据会重置为默认</li>
      </ul>
    </div>`;

  // 不再直接操作 innerHTML，改为返回 html 字符串（与其他渲染函数一致）
  return html;
}

// ===== 项目难度评估（优化版）=====
// 计算管理基准分（根据管理等级）
function getManagementBenchmark(level) {
  if (!level) return 35;
  if (level.includes('组长-1')) return 35;
  if (level.includes('组长-2')) return 45;
  if (level.includes('组长-3')) return 55;
  if (level.includes('主管')) return 70;
  if (level.includes('经理')) return 90;
  if (level.includes('培训师')) return 30;
  return 35;
}

// 计算适配度（百分比）
function calcCompatibility(projectScore, managementBenchmark) {
  const diff = Math.abs(projectScore - managementBenchmark);
  const compatibility = Math.max(0, Math.min(100, 100 - diff * 1.25));
  return Math.round(compatibility);
}

// 获取适配度档位
function getCompatibilityBand(pct) {
  if (pct < 60) return { label: '<60% 不匹配', color: '#f5222d', bg: '#fff1f0' };
  if (pct < 80) return { label: '60%-80% 基本匹配', color: '#fa8c16', bg: '#fff7e6' };
  return { label: '80%-100% 高度匹配', color: '#52c41a', bg: '#f6ffed' };
}

// 获取难度等级
function getDifficultyLevel(score) {
  if (score <= 40) return { label: '低难度', color: '#52c41a', cls: 'low' };
  if (score <= 50) return { label: '中低难度', color: '#1890ff', cls: 'mid-low' };
  if (score <= 60) return { label: '中高难度', color: '#faad14', cls: 'mid-high' };
  if (score <= 80) return { label: '高难度', color: '#fa8c16', cls: 'high' };
  return { label: '超高难度', color: '#f5222d', cls: 'extreme' };
}

// 渲染项目难度评估页面（优化版）
function renderAssessment(){
  // 数据准备
  let groups = GROUPS_DATA.filter(g => g.month === '7月' && g.group && !g.group.includes('定量指标'));
  let assessments = ASSESSMENTS_DATA.filter(a => a.month === '7月' && a.group && !a.month.includes('依据'));
  const deptFilter = document.getElementById('asmt-dept-filter') ? document.getElementById('asmt-dept-filter').value : '';
  const mgrFilter = document.getElementById('asmt-mgr-filter') ? document.getElementById('asmt-mgr-filter').value : '';
  if (deptFilter) assessments = assessments.filter(a => a.dept === deptFilter);
  if (mgrFilter) assessments = assessments.filter(a => a.manager === mgrFilter);

  // 统计卡片数据
  let highDiff = 0, midDiff = 0, lowDiff = 0;
  let highMgr = 0, midMgr = 0, lowMgr = 0;
  let totalCompat = 0, compatCount = 0;
  assessments.forEach(a => {
    const score = a.totalScore || 0;
    const bench = getManagementBenchmark(a.level);
    const compat = calcCompatibility(score, bench);
    totalCompat += compat;
    compatCount++;
    const dl = getDifficultyLevel(score);
    if (dl.cls === 'high' || dl.cls === 'extreme') highDiff++;
    else if (dl.cls === 'mid-high' || dl.cls === 'mid-low') midDiff++;
    else lowDiff++;
    if (bench >= 70) highMgr++;
    else if (bench >= 50) midMgr++;
    else lowMgr++;
  });
  const avgCompat = compatCount > 0 ? Math.round(totalCompat / compatCount) : 0;
  const compatBand = getCompatibilityBand(avgCompat);

  // ===== 开始渲染 =====
  let html = `<div class="page-header"><h2>📊 项目难度评估</h2>
    <div class="page-actions">
      <button class="btn btn-sm" onclick="importAssessment()">📥 导入</button>
      <button class="btn btn-sm" onclick="exportAssessment()">📤 导出</button>
      <button class="btn btn-sm btn-primary" onclick="showCompareModal()">🔄 自由对比</button>
    </div>
  </div>`;
  html += `<div style="margin:12px 0 8px;color:#888;font-size:13px;">数据来源：组别基础信息 + 管理难度评估表（2026年7月）</div>`;

  // 筛选栏（使用系统统一的 filter-bar-v4 规范）
  html += `<div class="filter-bar-v4">`;
  html += `<div class="filter-row-v4">`;
  html += `  <div style="display:flex;align-items:center;gap:6px;">`;
  html += `    <span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">筛选项目</span>`;
  html += `    <select id="asmt-dept-filter" class="fb-select">`;
  html += `      <option value="">全部</option>`;
  [...new Set(assessments.map(a => a.dept))].filter(Boolean).forEach(d => {
    html += `      <option value="${d}">${d}</option>`;
  });
  html += `    </select>`;
  html += `  </div>`;
  html += `  <div style="display:flex;align-items:center;gap:6px;">`;
  html += `    <span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">筛选管理人</span>`;
  html += `    <select id="asmt-mgr-filter" class="fb-select">`;
  html += `      <option value="">全部</option>`;
  assessments.map(a => a.manager).filter((v,i, a) => v && a.indexOf(v) === i).forEach(m => {
    html += `      <option value="${m}">${m}</option>`;
  });
  html += `    </select>`;
  html += `  </div>`;
  html += `  <div style="margin-left:auto;display:flex;gap:8px;align-items:center;">`;
  html += `    <button class="btn btn-sm btn-primary" onclick="renderAssessment()">🔍 确定</button>`;
  html += `  </div>`;
  html += `</div></div>`;

  // ===== 卡片区 =====
  html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;">`;
  // 卡片1：高难度项目
  html += `  <div class="stat-card" style="background:#fff1f0;border:1px solid #ffa39e;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#f5222d;margin-bottom:4px;">🔴 高难度项目</div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#f5222d;">${highDiff}</div>`;
  html += `    <div style="font-size:12px;color:#888;">占比 ${assessments.length>0?Math.round(highDiff/assessments.length*100):0}%</div>`;
  html += `  </div>`;
  // 卡片2：中难度项目
  html += `  <div class="stat-card" style="background:#fff7e6;border:1px solid #ffd591;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#fa8c16;margin-bottom:4px;">🟡 中难度项目</div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#fa8c16;">${midDiff}</div>`;
  html += `    <div style="font-size:12px;color:#888;">占比 ${assessments.length>0?Math.round(midDiff/assessments.length*100):0}%</div>`;
  html += `  </div>`;
  // 卡片3：低难度项目
  html += `  <div class="stat-card" style="background:#f6ffed;border:1px solid #b7eb8f;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#52c41a;margin-bottom:4px;">🟢 低难度项目</div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#52c41a;">${lowDiff}</div>`;
  html += `    <div style="font-size:12px;color:#888;">占比 ${assessments.length>0?Math.round(lowDiff/assessments.length*100):0}%</div>`;
  html += `  </div>`;
  html += `</div>`;

  // 第二排卡片：管理能力分布
  html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;">`;
  // 卡片4：管理能力高
  html += `  <div class="stat-card" style="background:#e6f7ff;border:1px solid #91d5ff;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#1890ff;margin-bottom:4px;">🔵 管理能力高</div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#1890ff;">${highMgr}</div>`;
  html += `    <div style="font-size:12px;color:#888;">主管/经理级</div>`;
  html += `  </div>`;
  // 卡片5：管理能力中
  html += `  <div class="stat-card" style="background:#fff7e6;border:1px solid #ffd591;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#fa8c16;margin-bottom:4px;">🟡 管理能力中</div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#fa8c16;">${midMgr}</div>`;
  html += `    <div style="font-size:12px;color:#888;">组长2/3级</div>`;
  html += `  </div>`;
  // 卡片6：管理能力低
  html += `  <div class="stat-card" style="background:#fff1f0;border:1px solid #ffa39e;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#f5222d;margin-bottom:4px;">🔴 管理能力低</div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#f5222d;">${lowMgr}</div>`;
  html += `    <div style="font-size:12px;color:#888;">组长1级/培训师</div>`;
  html += `  </div>`;
  html += `</div>`;

  // 综合适配度大卡片
  html += `<div style="background:${compatBand.bg};border:2px solid ${compatBand.color};border-radius:12px;padding:20px;margin-bottom:20px;display:flex;align-items:center;gap:24px;">`;
  html += `  <div style="font-size:48px;font-weight:800;color:${compatBand.color};">${avgCompat}%</div>`;
  html += `  <div>`;
  html += `    <div style="font-size:16px;font-weight:600;color:${compatBand.color};">综合适配度 · ${compatBand.label}</div>`;
  html += `    <div style="font-size:12px;color:#888;margin-top:4px;">基于${compatCount}个组别的管理难度与管理能力匹配度评估</div>`;
  html += `  </div>`;
  html += `</div>`;

  // ===== Tab切换区 =====
  html += `<div style="display:flex;gap:0;margin-bottom:16px;border-bottom:2px solid #e8e8e8;">`;
  html += `  <div id="tab-match" onclick="switchAssessTab('match')" style="padding:10px 20px;cursor:pointer;font-size:14px;font-weight:600;color:#1a73e8;border-bottom:2px solid #1a73e8;margin-bottom:-2px;">📊 匹配度明细</div>`;
  html += `  <div id="tab-project" onclick="switchAssessTab('project')" style="padding:10px 20px;cursor:pointer;font-size:14px;color:#888;">📋 项目得分明细</div>`;
  html += `  <div id="tab-management" onclick="switchAssessTab('management')" style="padding:10px 20px;cursor:pointer;font-size:14px;color:#888;">👤 管理能力评定明细</div>`;
  html += `</div>`;

  // Tab内容区
  html += `<div id="assess-tab-content">`;
  // 默认显示匹配度明细
  html += renderMatchDetail(assessments);
  html += `</div>`;

  // 原有说明区块（保留）
  html += `<div class="card" style="margin-top:20px;"><div class="card-header">📋 管理难度评估说明</div><div style="padding:12px;font-size:13px;line-height:2;">`;
  html += `  <p><b>评估方法：</b>定量指标权重70% + 定性因素权重30%，合计100分。</p>`;
  html += `  <p><b>定量指标（共70分）：</b>管理半径(客服人数/管理配比)、新员工占比、管理配比、项目对接数量、店铺复盘频次、品牌介入深度、汇报频次</p>`;
  html += `  <p><b>定性因素（共30分，每项最高3分）：</b>业务复杂度、跨平台管理、品牌授权等级、客服流动性、技能培训需求、系统/工具复杂度、客诉处理难度、突发事件响应</p>`;
  html += `  <p><b>难度评级参考：</b>≤40分=组长1级 | 41-50分=组长2级 | 51-60分=组长3级 | 61-80分=主管级 | ＞80分=经理级</p>`;
  html += `  <p><b>差异奖励：</b>基准分差值5-10分→500元 | 11-15分→1000元 | 16-20分→1500元</p>`;
  html += `  <p><b>适配度计算：</b>根据项目难度得分与管理等级基准分差值计算匹配度，＜60%不匹配 | 60%-80%基本匹配 | 80%-100%高度匹配</p>`;
  html += `</div></div>`;

  return html;
}

// Tab切换
function switchAssessTab(tab) {
  ['tab-match','tab-project','tab-management'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.color = '#888';
      el.style.borderBottom = '2px solid transparent';
      el.style.fontWeight = '400';
    }
  });
  const activeEl = document.getElementById('tab-' + tab);
  if (activeEl) {
    activeEl.style.color = '#1a73e8';
    activeEl.style.borderBottom = '2px solid #1a73e8';
    activeEl.style.fontWeight = '600';
  }
  const assessments = ASSESSMENTS_DATA.filter(a => a.month === '7月' && a.group && !a.month.includes('依据'));
  const content = document.getElementById('assess-tab-content');
  if (!content) return;
  if (tab === 'match') content.innerHTML = renderMatchDetail(assessments);
  else if (tab === 'project') content.innerHTML = renderProjectDetail(assessments);
  else if (tab === 'management') content.innerHTML = renderManagementDetail(assessments);
}

// 匹配度明细表
function renderMatchDetail(assessments) {
  let html = `<div class="card"><div class="card-header">📊 项目-管理匹配度明细</div><div class="table-wrap"><table class="data-table">`;
  html += `  <thead><tr>`;
  html += `    <th>序号</th><th>组别</th><th>管理人</th><th>项目难度分</th><th>管理基准分</th>`;
  html += `    <th>匹配度</th><th>档位</th><th>操作</th>`;
  html += `  </tr></thead><tbody>`;
  let idx = 0;
  assessments.forEach(a => {
    idx++;
    const score = a.totalScore || 0;
    const bench = getManagementBenchmark(a.level);
    const compat = calcCompatibility(score, bench);
    const band = getCompatibilityBand(compat);
    html += `<tr>`;
    html += `  <td>${idx}</td>`;
    html += `  <td><a href="#" onclick="showGroupDetail('${a.group}');return false;">${a.group}</a></td>`;
    html += `  <td>${a.manager||''}</td>`;
    html += `  <td style="font-weight:600;">${score.toFixed(1)}</td>`;
    html += `  <td>${bench}</td>`;
    html += `  <td style="font-weight:700;color:${band.color};">${compat}%</td>`;
    html += `  <td style="background:${band.bg};color:${band.color};padding:2px 8px;border-radius:4px;font-size:12px;font-weight:500;">${band.label}</td>`;
    html += `  <td><button class="btn btn-sm" onclick="showGroupDetail('${a.group}')">查看明细</button></td>`;
    html += `</tr>`;
  });
  html += `  </tbody></table></div></div>`;
  return html;
}

// 项目得分明细（维度拆解）
function renderProjectDetail(assessments) {
  let html = `<div class="card"><div class="card-header">📋 项目难度得分明细（定量+定性）</div><div class="table-wrap"><table class="data-table">`;
  html += `  <thead><tr>`;
  html += `    <th>组别</th><th>管理人</th><th>定量得分</th><th>定性得分</th><th>总分</th>`;
  html += `    <th>业务复杂度</th><th>跨平台</th><th>品牌授权</th><th>流动性</th>`;
  html += `    <th>技能培训</th><th>系统复杂度</th><th>客诉难度</th><th>突发事件</th>`;
  html += `  </tr></thead><tbody>`;
  assessments.forEach(a => {
    const score = a.totalScore || 0;
    const dl = getDifficultyLevel(score);
    html += `<tr>`;
    html += `  <td><a href="#" onclick="showGroupDetail('${a.group}');return false;">${a.group}</a></td>`;
    html += `  <td>${a.manager||''}</td>`;
    html += `  <td>${a.quantScore?a.quantScore.toFixed(1):'0.0'}</td>`;
    html += `  <td>${a.qualScore?a.qualScore.toFixed(1):'0.0'}</td>`;
    html += `  <td style="font-weight:700;color:${dl.color};">${score.toFixed(1)}</td>`;
    html += `  <td>${a.qual1||0}</td><td>${a.qual2||0}</td><td>${a.qual3||0}</td><td>${a.qual4||0}</td>`;
    html += `  <td>${a.qual5||0}</td><td>${a.qual6||0}</td><td>${a.qual7||0}</td><td>${a.qual8||0}</td>`;
    html += `</tr>`;
  });
  html += `  </tbody></table></div></div>`;
  return html;
}

// 管理能力评定明细
function renderManagementDetail(assessments) {
  let html = `<div class="card"><div class="card-header">👤 管理能力评定明细</div><div class="table-wrap"><table class="data-table">`;
  html += `  <thead><tr>`;
  html += `    <th>管理人</th><th>管理等级</th><th>基准分</th><th>适配度</th><th>档位</th>`;
  html += `    <th>负责组别数</th><th>操作</th>`;
  html += `  </tr></thead><tbody>`;
  // 按管理人聚合
  const mgrMap = {};
  assessments.forEach(a => {
    const mgr = a.manager || '未分配';
    if (!mgrMap[mgr]) mgrMap[mgr] = { level: a.level, groups: [], bench: getManagementBenchmark(a.level) };
    mgrMap[mgr].groups.push(a);
  });
  Object.keys(mgrMap).forEach(mgr => {
    const info = mgrMap[mgr];
    const avgScore = info.groups.reduce((s,a) => s + (a.totalScore||0), 0) / info.groups.length;
    const compat = calcCompatibility(avgScore, info.bench);
    const band = getCompatibilityBand(compat);
    html += `<tr>`;
    html += `  <td>${mgr}</td>`;
    html += `  <td>${info.level||''}</td>`;
    html += `  <td>${info.bench}</td>`;
    html += `  <td style="font-weight:700;color:${band.color};">${compat}%</td>`;
    html += `  <td style="background:${band.bg};color:${band.color};padding:2px 8px;border-radius:4px;font-size:12px;font-weight:500;">${band.label}</td>`;
    html += `  <td>${info.groups.length}个组别</td>`;
    html += `  <td><button class="btn btn-sm" onclick="alert('管理人详情功能开发中')">查看详情</button></td>`;
    html += `</tr>`;
  });
  html += `  </tbody></table></div></div>`;
  return html;
}

// 导入评估报告
function importAssessment() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.csv,.xlsx,.xls';
  input.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const ext = (file.name || '').split('.').pop().toLowerCase();
    if (ext === 'xlsx' || ext === 'xls') {
      const reader = new FileReader();
      reader.onload = function(ev) {
        try {
          const wb = XLSX.read(ev.target.result, { type: 'array' });
          const ws = wb.Sheets[wb.SheetNames[0]];
          var rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
          processAssessmentRows(rows);
        } catch(err) { alert("解析Excel失败：" + err.message); }
      };
      reader.readAsArrayBuffer(file);
    } else {
      const reader = new FileReader();
      reader.onload = function(ev) {
        var text = ev.target.result;
        var lines = text.split('\n');
        var rows = lines.map(function(line){ return line.split(','); });
        processAssessmentRows(rows);
      };
      reader.readAsText(file);
    }
  };
  input.click();
}

function processAssessmentRows(rows) {
  if (!rows || rows.length < 2) return;
  let importCount = 0;
  for (let i = 1; i < rows.length; i++) {
    if (!rows[i] || rows[i].length < 1) continue;
    var vals = rows[i];
    var groupName = (vals[0]||'').toString().trim();
    if (!groupName) continue;
    let target = ASSESSMENTS_DATA.find(a => a.group === groupName && a.month === '7月');
    if (!target) {
      target = { month:'7月', dept:(vals[1]||'').toString().trim(), group:groupName, manager:(vals[2]||'').toString().trim(), level:(vals[3]||'').toString().trim(), totalScore:0, quantScore:0, qualScore:0 };
      ASSESSMENTS_DATA.push(target);
    }
    target.totalScore = parseFloat(vals[4]) || 0;
    target.quantScore = parseFloat(vals[5]) || 0;
    target.qualScore = parseFloat(vals[6]) || 0;
    importCount++;
  }
  saveAssessmentsData();
  renderModule('assessment');
  alert("导入完成！共成功导入 " + importCount + " 条评估记录。");
}

// 自由对比弹窗
function showCompareModal() {
  let body = `<div style="font-size:13px;line-height:2;">`;
  body += `<p>请选择要对比的组别（可多选）：</p>`;
  body += `<div id="compare-checkboxes" style="display:flex;flex-wrap:wrap;gap:8px;margin:12px 0;">`;
  const groups = ASSESSMENTS_DATA.filter(a => a.month === '7月' && a.group && !a.month.includes('依据'));
  groups.forEach(a => {
    body += `<label style="cursor:pointer;font-size:13px;"><input type="checkbox" class="compare-cb" value="${a.group}" style="margin-right:4px;">${a.group}</label>`;
  });
  body += `</div>`;
  body += `<div id="compare-result" style="margin-top:12px;"></div>`;
  body += `<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px;">`;
  body += `  <button class="btn" onclick="closeModal()">取消</button>`;
  body += `  <button class="btn btn-primary" onclick="runAssessmentCompare()">开始对比</button>`;
  body += `</div>`;
  body += `</div>`;
  showModal('🔄 自由对比模拟', body);
}

// 执行对比
function runAssessmentCompare() {
  const cbs = document.querySelectorAll('.compare-cb:checked');
  if (cbs.length < 2) { alert('请至少选择2个组别进行对比'); return; }
  const groups = Array.from(cbs).map(cb => cb.value);
  let html = `<div>`;
  html += `<div style="font-size:14px;font-weight:600;margin-bottom:12px;">对比结果（共${groups.length}个组别）</div>`;
  html += `<table class="data-table" style="font-size:12px;">`;
  html += `<thead><tr><th>指标</th>${groups.map(g=>`<th>${g}</th>`).join('')}</tr></thead>`;
  html += `<tbody>`;
  const headers = ['总分','定量得分','定性得分','适配度'];
  const keys = ['totalScore','quantScore','qualScore','compat'];
  headers.forEach((h,i) => {
    html += `<tr><td><b>${h}</b></td>`;
    groups.forEach(gName => {
      const a = ASSESSMENTS_DATA.find(x => x.group === gName && x.month === '7月');
      if (!a) { html += `<td>-</td>`; return; }
      if (keys[i] === 'compat') {
        const bench = getManagementBenchmark(a.level);
        const compat = calcCompatibility(a.totalScore||0, bench);
        const band = getCompatibilityBand(compat);
        html += `<td style="color:${band.color};font-weight:600;">${compat}%</td>`;
      } else {
        const v = a[keys[i]] || 0;
        html += `<td>${v.toFixed(1)}</td>`;
      }
    });
    html += `</tr>`;
  });
  html += `  </tbody></table>`;
  html += `</div>`;
  document.getElementById('compare-result').innerHTML = html;
}


function showGroupDetail(groupName){
  const g = GROUPS_DATA.find(x => x.group === groupName);
  const a = ASSESSMENTS_DATA.find(x => x.group === groupName);
  if(!g && !a) return;
  let body = `<div style="font-size:13px;line-height:2;">`;
  if(g){
    body += `<p><b>组别：</b>${g.group}｜<b>管理人：</b>${g.manager}｜<b>等级：</b>${g.level}</p>`;
    body += `<p><b>客服人数：</b>${g.totalStaff}｜<b>管理+质培：</b>${g.managTrainSum}｜<b>管理配比：</b>${g.managRatio?g.managRatio.toFixed(2):0}:1</p>`;
    body += `<p><b>店铺数：</b>${g.shopCount}｜<b>品类：</b>${g.categoryCount}｜<b>平台：</b>${g.platformCount}｜<b>新员工(3月内)：</b>${g.new3m}</p>`;
  }
  if(a){
    const bench = getManagementBenchmark(a.level);
    const compat = calcCompatibility(a.totalScore||0, bench);
    const band = getCompatibilityBand(compat);
    body += `<hr><p><b>总分：</b>${a.totalScore?a.totalScore.toFixed(1):0}｜<b>定量：</b>${a.quantScore?a.quantScore.toFixed(1):0}｜<b>定性：</b>${a.qualScore?a.qualScore.toFixed(1):0}</p>`;
    body += `<p><b>管理基准分：</b>${bench}｜<b>适配度：</b><span style="color:${band.color};font-weight:700;">${compat}%</span> <span style="background:${band.bg};color:${band.color};padding:2px 8px;border-radius:4px;font-size:12px;">${band.label}</span></p>`;
    body += `<p><b>定性分项（每项0-3分）：</b>业务复杂度${a.qual1}｜跨平台${a.qual2}｜品牌授权${a.qual3}｜流动性${a.qual4}｜培训需求${a.qual5}｜系统复杂度${a.qual6}｜客诉难度${a.qual7}｜突发事件${a.qual8}</p>`;
  }
  body += `<hr><div style="display:flex;gap:8px;justify-content:flex-end;">`;
  body += `  <button class="btn btn-sm" onclick="alert('编辑功能开发中')">✏️ 编辑</button>`;
  body += `  <button class="btn btn-sm" style="color:#f5222d;border-color:#f5222d;" onclick="if(confirm('确定删除该组别的评估记录？')){alert('删除功能开发中');}">🗑️ 删除</button>`;
  body += `</div></div>`;
  showModal(groupName + ' - 难度评估详情', body);
}


// 导出评估报告
function exportAssessment(){
  console.log('[exportAssessment] 开始执行，ASSESSMENTS_DATA数量=' + (window.ASSESSMENTS_DATA ? ASSESSMENTS_DATA.length : 'undefined'));
  try {
    const headers = ['项目编号','项目名称','评估周期','难度评分','业务复杂度','时间压力','沟通能力','技能匹配','风险等级','评估人','评估日期','备注'];
    const rows = ASSESSMENTS_DATA.map(a => {
      const p = PROJECTS.find(pp => pp.id === a.projectId);
      return [
        a.projectId, p ? p.name : '', a.period||'', a.score||'', 
        a.busiComplexity||'', a.timePressure||'', a.commAbility||'', 
        a.skillMatch||'', a.riskLevel||'', a.evaluator||'', a.date||'', a.notes||''
      ];
    });
    console.log('[exportAssessment] 数据准备完成，rows=' + rows.length);
    showExportDialog(headers, rows, `项目难度评估_${new Date().toISOString().slice(0,10)}`, '项目难度评估');
  } catch(e) {
    console.error('[exportAssessment] 异常:', e);
    alert('导出失败：' + e.message);
  }
}
function cyclePermission(tdEl) {
  const role = tdEl.dataset.role;
  const key = tdEl.dataset.key;
  const order = ["write", "read", "hidden"];
  const current = rolePermissions[role] && rolePermissions[role][key] ? rolePermissions[role][key] : "hidden";
  const next = order[(order.indexOf(current) + 1) % 3];
  updatePermission(role, key, next);
  renderPermissions();
}

// 更新权限配置
function updatePermission(role, module, permission) {
  if (!rolePermissions[role]) {
    rolePermissions[role] = {};
  }
  rolePermissions[role][module] = permission;
  savePermissions();
}

// 下拉菜单触发
function updatePermissionFromSelect(sel) {
  const role = sel.dataset.role;
  const key = sel.dataset.key;
  updatePermission(role, key, sel.value);
}

// 批量设置：为某个角色批量设置所有模块权限
function batchSetPermission() {
  const role = prompt("请输入要批量设置的角色名称：\n（管理候选、客服组长、客服主管、客服经理、客服总监、管理员、项目伙伴、技术伙伴、风控伙伴）");
  if (!role || ROLES.indexOf(role) < 0) { alert("角色名称不正确"); return; }
  const val = prompt("请选择要设置的权限（输入数字）：\n1 = 读写\n2 = 只读\n3 = 隐藏");
  if (!val || (val!=="1" && val!=="2" && val!=="3")) { alert("输入不正确"); return; }
  const perm = val==="1" ? "write" : val==="2" ? "read" : "hidden";
  MODULE_KEYS.forEach(m => updatePermission(role, m, perm));
  renderPermissions();
  alert("已为「" + role + "」批量设置所有模块为「" + (perm==="write"?"读写":perm==="read"?"只读":"隐藏") + "」");
}

// 导入权限配置
function importPermissions() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = function() {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const data = JSON.parse(e.target.result);
        // 验证结构
        let valid = true;
        ROLES.forEach(r => {
          if (!data[r]) valid = false;
        });
        if (!valid) { alert("配置文件格式不正确，缺少部分角色数据"); return; }
        rolePermissions = data;
        savePermissions();
        renderPermissions();
        alert("权限配置导入成功！");
      } catch(ex) {
        alert("文件解析失败：" + ex.message);
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// 恢复默认权限
function resetPermissions() {
  if (confirm("确定要恢复默认权限配置吗？当前自定义配置将丢失。")) {
    rolePermissions = {...DEFAULT_PERMISSIONS};
    savePermissions();
    renderPermissions();
    alert("已恢复默认权限配置");
  }
}

// 导出权限配置
function exportPermissions() {
  const json = JSON.stringify(rolePermissions, null, 2);
  const blob = new Blob([json], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "chansee_permissions.json";
  a.click();
  URL.revokeObjectURL(url);
}
// ===== 客服绩效看板 =====
// ===== 绩效计算辅助函数 =====

// 计算绩效基数（试用期1400，转正1700）
function getBaseSalary(status) {
  return status === '试用期' ? 1400 : 1700;
}

// 计算绩效分数（基于权重配置，80%~120%）
function calcPerformanceScore(agent, month) {
  var weights = PERFORMANCE_WEIGHTS[month];
  if (!weights) return 1.0;
  var type = agent.agentType;
  var w = weights[type];
  if (!w) return 1.0;
  
  // 计算各项指标得分（标准化到0~1，再映射到0.8~1.2）
  var score = 0;
  var totalWeight = 0;
  var monthAgents = AGENT_PERFORMANCE.filter(a => a.month === month);
  
  if (type === '售前' || type === '综合') {
    if (w.salesAmount && agent.salesAmount > 0) {
      var salesPool = monthAgents.filter(a => a.agentType === '售前' || a.agentType === '综合');
      var salesValues = salesPool.map(a => a.salesAmount || 0).filter(v => v > 0);
      if (salesValues.length > 0) {
        var maxSales = Math.max(...salesValues);
        var salesScore = (agent.salesAmount / maxSales) * 0.4 + 0.8;
        score += salesScore * (w.salesAmount / 100);
        totalWeight += w.salesAmount;
      }
    }
    if (w.conversionRate && agent.conversionRate > 0) {
      var convValues = monthAgents.filter(a => a.agentType === '售前' || a.agentType === '综合').map(a => a.conversionRate || 0).filter(v => v > 0);
      if (convValues.length > 0) {
        var maxConv = Math.max(...convValues);
        var convScore = (agent.conversionRate / maxConv) * 0.4 + 0.8;
        score += convScore * (w.conversionRate / 100);
        totalWeight += w.conversionRate;
      }
    }
  }
  
  if (type === '售后' || type === '综合') {
    if (w.workVolume && agent.workVolume > 0) {
      var workPool = monthAgents.filter(a => a.agentType === '售后' || a.agentType === '综合');
      var workValues = workPool.map(a => a.workVolume || 0).filter(v => v > 0);
      if (workValues.length > 0) {
        var maxWork = Math.max(...workValues);
        var workScore = (agent.workVolume / maxWork) * 0.4 + 0.8;
        score += workScore * (w.workVolume / 100);
        totalWeight += w.workVolume;
      }
    }
    if (w.firstResolveRate && agent.firstResolveRate > 0) {
      var resolveScore = (agent.firstResolveRate / 100) * 0.4 + 0.8;
      score += resolveScore * (w.firstResolveRate / 100);
      totalWeight += w.firstResolveRate;
    }
  }
  
  // 通用指标
  if (w.responseTime && agent.responseTime > 0) {
    var respValues = monthAgents.map(a => a.responseTime || 9999).filter(v => v > 0);
    if (respValues.length > 1) {
      var minResp = Math.min(...respValues);
      var maxResp = Math.max(...respValues);
      var respScore = maxResp > minResp ? 1.2 - ((agent.responseTime - minResp) / (maxResp - minResp)) * 0.4 : 1.0;
      score += respScore * (w.responseTime / 100);
      totalWeight += w.responseTime;
    }
  }
  if (w.csat && agent.csat > 0) {
    var csatScore = (agent.csat / 5) * 0.4 + 0.8;
    score += csatScore * (w.csat / 100);
    totalWeight += w.csat;
  }
  
  // 归一化
  if (totalWeight > 0) {
    score = score / (totalWeight / 100);
  }
  
  // 限制80%~120%
  return Math.max(0.8, Math.min(1.2, score));
}

// 计算瓜分金额
function calcShareAmount(agent, month) {
  var group = agent.group || '';
  var loadData = GROUP_LOAD_RATIO.find(g => g.group === group && g.month === month);
  var loadRatio = loadData ? (parseFloat(loadData.loadRatio) || 1.0) : 1.0;
  
  // 计算组总基数
  var groupAgents = AGENT_PERFORMANCE.filter(a => a.group === group && a.month === month);
  var totalBase = groupAgents.reduce((s, a) => s + getBaseSalary(a.status), 0);
  var totalPool = totalBase * loadRatio;
  
  // 按类型分配
  if (agent.agentType === '售前') {
    var totalSales = groupAgents.filter(a => a.agentType === '售前').reduce((s, a) => s + a.salesAmount, 0);
    if (totalSales === 0) return 0;
    return (agent.salesAmount / totalSales) * (totalPool * 0.6);  // 售前分60%池子
  } else if (agent.agentType === '售后') {
    var totalWork = groupAgents.filter(a => a.agentType === '售后').reduce((s, a) => s + a.workVolume, 0);
    if (totalWork === 0) return 0;
    return (agent.workVolume / totalWork) * (totalPool * 0.6);  // 售后分60%池子
  } else {
    // 综合：按销售额+工作量综合占比
    var totalSalesAll = groupAgents.reduce((s, a) => s + a.salesAmount, 0);
    var totalWorkAll = groupAgents.reduce((s, a) => s + a.workVolume, 0);
    var share = 0;
    if (totalSalesAll > 0) share += (agent.salesAmount / totalSalesAll) * (totalPool * 0.3);
    if (totalWorkAll > 0) share += (agent.workVolume / totalWorkAll) * (totalPool * 0.3);
    return share;
  }
}

// 计算最终绩效
function calcFinalPerformance(agent, month) {
  var score = calcPerformanceScore(agent, month);
  var share = calcShareAmount(agent, month);
  return share * score + agent.reward - agent.penalty;
}

// ===== 客服绩效看板（重写）=====
function renderPerformance() {
  var monthFilter = document.getElementById('pf-month')?.value || '2026-05';
  var projectFilter = document.getElementById('pf-project')?.value || 'all';
  var typeFilter = document.getElementById('pf-type')?.value || 'all';
  var groupFilter = document.getElementById('pf-group')?.value || 'all';
  
  var data = AGENT_PERFORMANCE.filter(a => {
    if (a.month !== monthFilter) return false;
    if (projectFilter !== 'all' && a.projectId !== projectFilter) return false;
    if (typeFilter !== 'all' && a.agentType !== typeFilter) return false;
    if (groupFilter !== 'all' && a.group !== groupFilter) return false;
    return true;
  });
  
  var html = `<div class="page-header"><h2>📈 客服绩效看板</h2></div>`;

  // 筛选栏（使用系统统一的 filter-bar-v4 规范）
  html += `<div class="filter-bar-v4">`;
  html += `<div class="filter-row-v4">`;

  // 筛选项 + 标签
  html += `<div style="display:flex;align-items:center;gap:6px;">`;
  html += `<span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">项目</span>`;
  html += `<select id="pf-project" class="fb-select"><option value="all">全部项目</option>${PROJECTS.map(p=>`<option value="${p.id}" ${projectFilter===p.id?'selected':''}>${p.name}</option>`).join('')}</select>`;
  html += `</div>`;

  html += `<div style="display:flex;align-items:center;gap:6px;">`;
  html += `<span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">月份</span>`;
  html += `<select id="pf-month" class="fb-select"><option value="2026-05" ${monthFilter==='2026-05'?'selected':''}>2026-05</option><option value="2026-04" ${monthFilter==='2026-04'?'selected':''}>2026-04</option></select>`;
  html += `</div>`;

  html += `<div style="display:flex;align-items:center;gap:6px;">`;
  html += `<span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">类型</span>`;
  html += `<select id="pf-type" class="fb-select"><option value="all">全部类型</option><option value="售前" ${typeFilter==='售前'?'selected':''}>售前</option><option value="售后" ${typeFilter==='售后'?'selected':''}>售后</option><option value="综合" ${typeFilter==='综合'?'selected':''}>综合</option></select>`;
  html += `</div>`;

  html += `<div style="display:flex;align-items:center;gap:6px;">`;
  html += `<span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">组别</span>`;
  html += `<select id="pf-group" class="fb-select"><option value="all">全部组别</option>${[...new Set(AGENT_PERFORMANCE.map(a=>a.group))].map(g=>`<option value="${g}" ${groupFilter===g?'selected':''}>${g}</option>`).join('')}</select>`;
  html += `</div>`;

  // 操作按钮（右侧对齐）
  html += `<div style="margin-left:auto;display:flex;gap:8px;align-items:center;">`;
  html += `<button class="btn btn-sm btn-primary" onclick="renderModule('performance')">🔍 查询</button>`;
  html += `<button class="btn btn-sm" onclick="importPerformance()">📥 导入</button>`;
  html += `<button class="btn btn-sm" onclick="exportPerformance()">📤 导出</button>`;
  html += `<button class="btn btn-sm btn-primary" onclick="addAgentPerformance()">➕ 新增</button>`;
  html += `</div>`;

  html += `</div></div>`;
  
  // 绩效总池概览
  var groups = {};
  data.forEach(a => {
    if (!groups[a.group]) groups[a.group] = {agents: [], baseTotal: 0, loadRatio: 1.0, pool: 0};
    groups[a.group].agents.push(a);
    groups[a.group].baseTotal += getBaseSalary(a.status);
  });
  Object.keys(groups).forEach(g => {
    var lr = GROUP_LOAD_RATIO.find(x => x.group === g && x.month === monthFilter);
    groups[g].loadRatio = lr ? lr.loadRatio : 1.0;
    groups[g].pool = groups[g].baseTotal * groups[g].loadRatio;
  });
  var totalPool = Object.values(groups).reduce((s, g) => s + g.pool, 0);
  var totalBase = Object.values(groups).reduce((s, g) => s + g.baseTotal, 0);
  
  html += `<div class="metrics-grid">`;
  html += `<div class="metric-card metric-card-kpi"><div class="metric-value">${data.length}</div><div class="metric-label">参评坐席数</div></div>`;
  html += `<div class="metric-card metric-card-kpi"><div class="metric-value">¥${totalBase.toLocaleString()}</div><div class="metric-label">绩效基数总和</div></div>`;
  html += `<div class="metric-card metric-card-kpi"><div class="metric-value">${(totalBase>0? (totalPool/totalBase*100).toFixed(0)+'%':'-')}</div><div class="metric-label">平均负荷比</div></div>`;
  html += `<div class="metric-card metric-card-kpi"><div class="metric-value">¥${totalPool.toLocaleString()}</div><div class="metric-label">绩效总池</div></div>`;
  html += `</div>`;
  
  // 组别负荷比配置（可折叠）
  html += `<div class="card"><div class="card-title" style="cursor:pointer;" onclick="toggleLoadRatioConfig()">📊 组别负荷比配置（点击展开/收起）</div>`;
  html += `<div id="load-ratio-config" style="display:none;margin-top:12px;">`;
  Object.keys(groups).forEach(g => {
    html += `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--c-bg);border-radius:6px;">`;
    html += `<span style="font-size:13px;color:var(--c-text);">${g}：</span>`;
    html += `<input type="number" step="0.01" value="${groups[g].loadRatio}" style="width:60px;padding:4px 6px;border:1px solid var(--c-border);border-radius:4px;" onchange="updateGroupLoadRatio('${g}','${monthFilter}',this.value)">`;
    html += `<span style="font-size:12px;color:var(--c-text-3);">倍</span>`;
    html += `</div>`;
  });
  html += `</div></div>`;
  
  // 指标权重配置
  var weights = PERFORMANCE_WEIGHTS[monthFilter] || {};
  html += `<div class="card"><div class="card-title" style="cursor:pointer;" onclick="toggleWeightConfig()">📊 指标权重配置（点击展开/收起）</div>`;
  html += `<div id="weight-config" style="display:none;margin-top:12px;">`;
  ['售前','售后','综合'].forEach(type => {
    var w = weights[type] || {};
    html += `<div style="margin-bottom:12px;padding:10px;background:var(--c-bg);border-radius:6px;">`;
    html += `<div style="font-size:13px;font-weight:600;color:var(--c-text);margin-bottom:8px;">${type}客服</div>`;
    html += `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">`;
    if (type === '售前' || type === '综合') {
      html += `销售额权重：<input type="number" value="${w.salesAmount||0}" style="width:50px;" onchange="updateWeight('${monthFilter}','${type}','salesAmount',this.value)">% `;
      html += `转化率权重：<input type="number" value="${w.conversionRate||0}" style="width:50px;" onchange="updateWeight('${monthFilter}','${type}','conversionRate',this.value)">% `;
    }
    if (type === '售后' || type === '综合') {
      html += `工作量权重：<input type="number" value="${w.workVolume||0}" style="width:50px;" onchange="updateWeight('${monthFilter}','${type}','workVolume',this.value)">% `;
      html += `解决率权重：<input type="number" value="${w.firstResolveRate||0}" style="width:50px;" onchange="updateWeight('${monthFilter}','${type}','firstResolveRate',this.value)">% `;
    }
    html += `响应时间权重：<input type="number" value="${w.responseTime||0}" style="width:50px;" onchange="updateWeight('${monthFilter}','${type}','responseTime',this.value)">% `;
    html += `满意度权重：<input type="number" value="${w.csat||0}" style="width:50px;" onchange="updateWeight('${monthFilter}','${type}','csat',this.value)">%`;
    html += `</div></div>`;
  });
  html += `<button class="btn btn-primary" onclick="savePerformanceWeights()" style="margin-top:8px;">保存权重配置</button>`;
  html += `</div></div>`;
  
  // 坐席绩效明细表
  html += `<div class="card"><div class="card-title">坐席绩效明细（${data.length}人）</div><table class="data-table">`;
  html += `<thead><tr><th>组别</th><th>项目</th><th>坐席</th><th>类型</th><th>状态</th><th>基数</th><th>销售额</th><th>转化率</th><th>工作量</th><th>解决率</th><th>响应时长</th><th>CSAT</th><th>绩效分数</th><th>瓜分金额</th><th>奖/惩</th><th>最终绩效</th><th>操作</th></tr></thead><tbody>`;
  
  data.forEach(a => {
    var p = PROJECTS.find(pp => pp.id === a.projectId);
    var base = getBaseSalary(a.status);
    var score = calcPerformanceScore(a, monthFilter);
    var share = calcShareAmount(a, monthFilter);
    var final = calcFinalPerformance(a, monthFilter);
    
    html += `<tr>`;
    html += `<td>${a.group || '-'}</td>`;
    html += `<td style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${p?p.name:''}">${p?p.name:a.projectId || '-'}</td>`;
    html += `<td>${a.agentName || '-'}</td>`;
    html += `<td><select value="${a.agentType || '售前'}" onchange="updateAgentType(${a.id},this.value)" style="padding:2px 4px;border:1px solid var(--c-border);border-radius:4px;"><option value="售前" ${a.agentType==='售前'?'selected':''}>售前</option><option value="售后" ${a.agentType==='售后'?'selected':''}>售后</option><option value="综合" ${a.agentType==='综合'?'selected':''}>综合</option></select></td>`;
    html += `<td>${a.status || '转正'}</td>`;
    html += `<td>¥${base}</td>`;
    html += `<td>${a.salesAmount > 0 ? '¥'+a.salesAmount.toLocaleString():'-'}</td>`;
    html += `<td>${a.conversionRate > 0 ? a.conversionRate+'%':'-'}</td>`;
    html += `<td>${a.workVolume > 0 ? a.workVolume:'-'}</td>`;
    html += `<td>${a.firstResolveRate > 0 ? a.firstResolveRate+'%':'-'}</td>`;
    html += `<td style="color:${a.responseTime > 120 ? 'var(--c-red)':'var(--c-green)'}">${a.responseTime || '-'}s</td>`;
    html += `<td style="color:${a.csat >= 4.5 ? 'var(--c-green)':'var(--c-red)'}">${a.csat || '-'}</td>`;
    var scorePct = (score * 100).toFixed(0);
    html += `<td style="color:${score >= 1.0 ? 'var(--c-green)':'var(--c-red)'}">${scorePct}%</td>`;
    html += `<td>¥${isNaN(share) ? '0' : share.toFixed(0)}</td>`;
    html += `<td><div style="display:flex;gap:4px;align-items:center;"><input type="number" value="${a.reward || 0}" style="width:56px;padding:3px 6px;border:1px solid var(--c-border);border-radius:4px;font-size:13px;" onchange="updateAgentReward(${a.id},this.value)"><span style="color:var(--c-text-3);font-size:12px;">/</span><input type="number" value="${a.penalty || 0}" style="width:56px;padding:3px 6px;border:1px solid var(--c-border);border-radius:4px;font-size:13px;" onchange="updateAgentPenalty(${a.id},this.value)"></div></td>`;
    html += `<td style="font-weight:600;color:var(--c-primary);">¥${(isNaN(final) ? '0' : final.toFixed(0))}</td>`;
    html += `<td><button class="btn btn-sm" onclick="editAgentPerformance(${a.id})">编辑</button> <button class="btn btn-sm btn-danger" onclick="deleteAgentPerformance(${a.id})">删除</button></td>`;
    html += `</tr>`;
  });
  
  html += `</tbody></table></div>`;
  
  // 计算说明
  html += `<div style="margin-top:16px;padding:12px;background:var(--c-bg);border-radius:8px;font-size:12px;color:var(--c-text-3);line-height:1.8;">`;
  html += `<div style="font-weight:600;margin-bottom:6px;">📋 计算逻辑说明：</div>`;
  html += `<div>1. 绩效基数：试用期¥1400，转正¥1700</div>`;
  html += `<div>2. 绩效总池 = 组别所有人基数总和 × 组别负荷比</div>`;
  html += `<div>3. 绩效分数：按指标权重计算，范围80%~120%</div>`;
  html += `<div>4. 售前瓜分：按销售额占比；售后瓜分：按工作量占比；综合：按销售+工作量综合占比</div>`;
  html += `<div>5. 最终绩效 = 瓜分金额 × 绩效分数 + 奖励 - 惩罚</div>`;
  html += `</div>`;
  
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

// 更新客服类型
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
  
  var html = `<div style="padding:16px;">`;
  html += `<div style="margin-bottom:12px;"><label>坐席姓名：</label><input type="text" id="edit-agent-name" value="${agent.agentName}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>组别：</label><input type="text" id="edit-agent-group" value="${agent.group}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>状态：</label><select id="edit-agent-status" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"><option value="试用期" ${agent.status==='试用期'?'selected':''}>试用期</option><option value="转正" ${agent.status==='转正'?'selected':''}>转正</option></select></div>`;
  html += `<div style="margin-bottom:12px;"><label>客服类型：</label><select id="edit-agent-type" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"><option value="售前" ${agent.agentType==='售前'?'selected':''}>售前</option><option value="售后" ${agent.agentType==='售后'?'selected':''}>售后</option><option value="综合" ${agent.agentType==='综合'?'selected':''}>综合</option></select></div>`;
  html += `<div style="margin-bottom:12px;"><label>销售额：</label><input type="number" id="edit-agent-sales" value="${agent.salesAmount}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>转化率(%)：</label><input type="number" step="0.1" id="edit-agent-conv" value="${agent.conversionRate}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>工作量：</label><input type="number" id="edit-agent-work" value="${agent.workVolume}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>一次性解决率(%)：</label><input type="number" step="0.1" id="edit-agent-resolve" value="${agent.firstResolveRate}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>平均响应时长(s)：</label><input type="number" id="edit-agent-resp" value="${agent.responseTime}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>CSAT：</label><input type="number" step="0.1" id="edit-agent-csat" value="${agent.csat}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>服务量：</label><input type="number" id="edit-agent-sv" value="${agent.serviceVolume}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>奖励(¥)：</label><input type="number" id="edit-agent-reward" value="${agent.reward}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>惩罚(¥)：</label><input type="number" id="edit-agent-penalty" value="${agent.penalty}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="display:flex;gap:8px;justify-content:flex-end;">`;
  html += `<button class="btn" onclick="closeModal()">取消</button>`;
  html += `<button class="btn btn-primary" onclick="saveAgentEdit(${agent.id})">保存</button>`;
  html += `</div></div>`;
  
  showModal('编辑坐席绩效', html);
}

// 保存编辑
function saveAgentEdit(id) {
  var agent = AGENT_PERFORMANCE.find(a => a.id === id);
  if (!agent) return;
  agent.agentName = document.getElementById('edit-agent-name').value;
  agent.group = document.getElementById('edit-agent-group').value;
  agent.status = document.getElementById('edit-agent-status').value;
  agent.agentType = document.getElementById('edit-agent-type').value;
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
  renderModule('performance');
}

// 删除坐席绩效数据
function deleteAgentPerformance(id) {
  if (!confirm('确定删除该坐席的绩效数据？')) return;
  var idx = AGENT_PERFORMANCE.findIndex(a => a.id === id);
  if (idx >= 0) {
    AGENT_PERFORMANCE.splice(idx, 1);
    saveAgentPerformance();
    renderModule('performance');
  }
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
function renderRisk(){
  let html = `<div class="page-header"><h2>⚠️ 项目风险预警池</h2>
    <button class="btn btn-primary" onclick="exportRisk()">📤 导出</button>
  </div>`;

  const groups = [
    {key:'健康状态', icon:'🏥', color:'#ef4444', bg:'#fef2f2', desc:'健康状态连续异常'},
    {key:'SLA超标', icon:'⏱️', color:'#f59e0b', bg:'#fffbeb', desc:'服务等级协议超标'},
    {key:'成本超支', icon:'💸', color:'#ef4444', bg:'#fef2f2', desc:'成本超出预算控制'},
    {key:'满意度下滑', icon:'📉', color:'#f59e0b', bg:'#fffbeb', desc:'客户满意度下降'}
  ];

  html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">`;
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
          <div style="font-size:22px;font-weight:700;color:${g.color};">${items.length}</div>
          <div style="font-size:11px;color:#94a3b8;">个项目</div>
        </div>
      </div>
      <div style="padding:0 16px 12px;display:flex;gap:8px;flex-wrap:wrap;">
        ${high > 0 ? `<span style="font-size:11px;color:#ef4444;background:#fef2f2;padding:2px 8px;border-radius:4px;font-weight:500;">🔴 高风险 ${high}</span>` : ''}
        ${mid > 0 ? `<span style="font-size:11px;color:#f59e0b;background:#fffbeb;padding:2px 8px;border-radius:4px;font-weight:500;">🟡 中风险 ${mid}</span>` : ''}
        ${items.length === 0 ? '<span style="font-size:11px;color:#22c55e;background:#f0fdf4;padding:2px 8px;border-radius:4px;font-weight:500;">✅ 无风险</span>' : ''}
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
}

function toggleRiskCard(el){
  const detail = el.querySelector('.risk-detail');
  const isOpen = el.getAttribute('data-open') === 'true';
  if (isOpen) {
    detail.style.maxHeight = '0px';
    el.style.borderColor = '#e2e8f0';
    el.setAttribute('data-open','false');
  } else {
    detail.style.maxHeight = detail.scrollHeight + 50 + 'px';
    el.style.borderColor = '#3b82f6';
    el.setAttribute('data-open','true');
  }
}

// ===== 个人基础设置 =====
function renderProfile(){
  const rowStyle = 'display:flex;align-items:center;padding:14px 0;border-bottom:1px solid #f1f5f9;';
  const labelStyle = 'width:90px;font-size:14px;color:#334155;flex-shrink:0;';
  const valueStyle = 'flex:1;font-size:14px;color:#1e293b;';
  const linkStyle = 'color:#3b82f6;font-size:13px;cursor:pointer;margin-left:12px;flex-shrink:0;transition:opacity .2s;';
  const linkHover = `onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'"`;

  const u = currentUser || {};
  const userInDb = USERS.find(x => x.id === u.id) || {};
  const avatar = u.avatar || userInDb.avatar || "";
  const nickname = u.nickname || userInDb.nickname || u.name || "未设置";
  const position = u.position || userInDb.position || u.role || "未设置";
  const birthday = u.birthday || userInDb.birthday || "";
  const phone = u.phone || userInDb.phone || "--";
  const email = u.email || userInDb.email || "--";
  const wechatBound = u.wechatBound || userInDb.wechatBound || true;
  const keepStatus = u.keepStatus || userInDb.keepStatus || false;

  let html = `<div class="page-header"><h2>👤 个人基础设置</h2></div>`;

  html += `<div style="display:flex;gap:20px;flex-wrap:wrap;">`;

  // 左侧区域
  html += `<div style="flex:1;min-width:360px;max-width:680px;">`;

  // 基础信息卡片
  html += `<div class="card profile-card">
    <div class="profile-card-title">
      <span class="profile-card-icon">📝</span>基础信息
    </div>

    <!-- 个人头像 -->
    <div style="${rowStyle}">
      <div style="${labelStyle}" class="profile-field-label">个人头像</div>
      <div style="display:flex;align-items:center;flex:1;gap:16px;">
        <div id="profile-avatar-preview" class="profile-avatar-preview"
          style="${avatar ? 'background-image:url('+avatar+');color:transparent;' : ''}">
          ${avatar ? '' : '👤'}
        </div>
        <div>
          <span style="${linkStyle}" ${linkHover} onclick="document.getElementById('profile-avatar-input').click()">更换头像</span>
          <input type="file" id="profile-avatar-input" style="display:none;" accept="image/jpeg,image/jpg,image/png,image/gif" onchange="handleAvatarUpload(this)">
          <div style="font-size:12px;color:#94a3b8;margin-top:4px;">支持 jpg、png、gif，最大 5M</div>
        </div>
      </div>
    </div>

    <!-- 昵称 -->
    <div style="${rowStyle}" id="profile-nickname-row">
      <div style="${labelStyle}" class="profile-field-label">昵称</div>
      <div style="${valueStyle}" id="profile-nickname-value">${nickname}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfileNickname()">修改</span>
    </div>

    <!-- 生日 -->
    <div style="${rowStyle}" id="profile-birthday-row">
      <div style="${labelStyle}" class="profile-field-label">生日</div>
      <div style="${valueStyle}" id="profile-birthday-value">${birthday || "--"}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfileBirthday()">修改</span>
    </div>

    <!-- 职位 -->
    <div style="${rowStyle}" id="profile-position-row">
      <div style="${labelStyle}" class="profile-field-label">职位</div>
      <div style="${valueStyle}" id="profile-position-value">${position}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfilePosition()">修改</span>
    </div>

    <!-- 品牌 -->
    <div style="${rowStyle}" id="profile-brand-row">
      <div style="${labelStyle}" class="profile-field-label">品牌</div>
      <div style="${valueStyle}" id="profile-brand-value">${u.brand || userInDb.brand || "Chanseen CloudHub"}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfileBrand()">修改</span>
    </div>

    <!-- 手机号 -->
    <div style="${rowStyle}" id="profile-phone-row">
      <div style="${labelStyle}" class="profile-field-label">手机号</div>
      <div style="${valueStyle}" id="profile-phone-value">${phone}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfilePhone()">修改</span>
    </div>

    <!-- 邮箱 -->
    <div style="${rowStyle}" id="profile-email-row">
      <div style="${labelStyle}" class="profile-field-label">邮箱</div>
      <div style="${valueStyle}" id="profile-email-value">${email}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfileEmail()">修改</span>
    </div>

    <!-- 微信 -->
    <div style="${rowStyle}">
      <div style="${labelStyle}" class="profile-field-label">微信</div>
      <div style="${valueStyle}">${wechatBound ? '已绑定' : '未绑定'}</div>
      <span style="${linkStyle}" ${linkHover} onclick="toggleWechatBind()">${wechatBound ? '解绑' : '绑定'}</span>
    </div>

    <!-- 登录密码 -->
    <div style="${rowStyle}border-bottom:none;">
      <div style="${labelStyle}" class="profile-field-label">登录密码</div>
      <div style="${valueStyle}">********</div>
      <span style="${linkStyle}" ${linkHover} onclick="showChangePasswordModal()">修改</span>
    </div>
  </div>`;

  // 更多操作卡片
  html += `<div class="card profile-card" style="margin-top:16px;">
    <div class="profile-card-title">
      <span class="profile-card-icon">⚙️</span>更多操作
    </div>

    <!-- 离开团队 -->
    <div style="${rowStyle}border-bottom:none;flex-direction:column;align-items:flex-start;gap:10px;padding-bottom:0;">
      <div style="display:flex;align-items:center;gap:8px;width:100%;">
        <div style="${labelStyle}" class="profile-field-label">离开团队</div>
        <div style="flex:1;"></div>
      </div>
      <div style="font-size:13px;color:#ef4444;background:#fef2f2;padding:10px 14px;border-radius:6px;width:100%;border:1px solid #fecaca;">
        ⚠️ 一旦离开团队，您在此团队的一切记录将无法查看！
      </div>
      <div style="display:flex;gap:12px;margin-top:4px;">
        <button class="btn profile-btn-danger" onclick="leaveTeam()">离开团队</button>
        <button class="btn profile-btn-plain" onclick="alert('移交工作功能请联系管理员处理')">移交工作</button>
      </div>
    </div>
  </div>`;

  // 备份与恢复卡片
  html += `<div class="card profile-card" style="margin-top:16px;">
    <div class="profile-card-title">
      <span class="profile-card-icon">💾</span>备份与恢复
    </div>
    <div style="font-size:13px;color:#64748b;margin-bottom:12px;">定期备份数据到本地文件，清理浏览器数据前请务必备份！</div>
    <div style="display:flex;gap:10px;">
      <button class="btn btn-primary" onclick="backupAllData()" style="flex:1;">💾 一键备份</button>
      <button class="btn" onclick="triggerRestore()" style="flex:1;">♻️ 恢复数据</button>
    </div>
  </div>`;
  html += `</div>`; // 左侧结束

  // 右侧区域
  html += `<div style="flex:1;min-width:300px;max-width:420px;display:flex;flex-direction:column;gap:16px;">`;

  // 账户安全等级
  const safeScore = (phone !== "--" ? 25 : 0) + (email !== "--" ? 25 : 0) + (wechatBound ? 20 : 0) + 30;
  const safeColor = safeScore >= 80 ? '#22c55e' : safeScore >= 60 ? '#f59e0b' : '#ef4444';
  const safeText = safeScore >= 80 ? '良好' : safeScore >= 60 ? '一般' : '较低';
  const dashArray = Math.round(safeScore / 100 * 226) + ' 226';

  html += `<div class="card profile-card">
    <div class="profile-card-title">
      <span class="profile-card-icon">🔐</span>账户安全
    </div>
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
      <div style="position:relative;width:80px;height:80px;">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="36" fill="none" stroke="#e2e8f0" stroke-width="6"/>
          <circle cx="40" cy="40" r="36" fill="none" stroke="${safeColor}" stroke-width="6" stroke-linecap="round"
            stroke-dasharray="${dashArray}" transform="rotate(-90 40 40)"/>
        </svg>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;">
          <div style="font-size:20px;font-weight:700;color:${safeColor};">${safeScore}</div>
          <div style="font-size:11px;color:#94a3b8;">分</div>
        </div>
      </div>
      <div style="flex:1;">
        <div style="font-size:15px;font-weight:600;color:#1e293b;">安全等级：${safeText}</div>
        <div style="font-size:12px;color:#64748b;margin-top:4px;">${safeScore < 100 ? '完善信息可提升安全等级' : '您的账户安全等级很高'}</div>
      </div>
    </div>
    <div class="profile-safe-list">
      <div class="profile-safe-item">
        <span class="profile-safe-dot" style="background:#22c55e;"></span>
        <span class="profile-safe-label">登录密码</span>
        <span class="profile-safe-status ok">已设置</span>
      </div>
      <div class="profile-safe-item">
        <span class="profile-safe-dot" style="background:${phone !== "--" ? '#22c55e' : '#94a3b8'};"></span>
        <span class="profile-safe-label">手机绑定</span>
        <span class="profile-safe-status ${phone !== "--" ? 'ok' : 'warn'}">${phone !== "--" ? '已绑定' : '未绑定'}</span>
      </div>
      <div class="profile-safe-item">
        <span class="profile-safe-dot" style="background:${email !== "--" ? '#22c55e' : '#94a3b8'};"></span>
        <span class="profile-safe-label">邮箱绑定</span>
        <span class="profile-safe-status ${email !== "--" ? 'ok' : 'warn'}">${email !== "--" ? '已绑定' : '未绑定'}</span>
      </div>
      <div class="profile-safe-item">
        <span class="profile-safe-dot" style="background:${wechatBound ? '#22c55e' : '#94a3b8'};"></span>
        <span class="profile-safe-label">微信绑定</span>
        <span class="profile-safe-status ${wechatBound ? 'ok' : 'warn'}">${wechatBound ? '已绑定' : '未绑定'}</span>
      </div>
    </div>
  </div>`;

  // 最近登录
  html += `<div class="card profile-card">
    <div class="profile-card-title">
      <span class="profile-card-icon">📍</span>最近登录
    </div>
    <div class="profile-login-list">
      <div class="profile-login-item current">
        <div class="profile-login-device">
          <div class="profile-login-icon" style="background:#dbeafe;color:#3b82f6;">🖥️</div>
          <div>
            <div class="profile-login-name">Chrome / Windows</div>
            <div class="profile-login-ip">IP: 223.104.***.***</div>
          </div>
        </div>
        <div class="profile-login-meta">
          <span class="profile-login-badge">当前在线</span>
          <div class="profile-login-time">2026-06-03 17:24</div>
        </div>
      </div>
      <div class="profile-login-item">
        <div class="profile-login-device">
          <div class="profile-login-icon" style="background:#dbeafe;color:#3b82f6;">🖥️</div>
          <div>
            <div class="profile-login-name">Chrome / Windows</div>
            <div class="profile-login-ip">IP: 223.104.***.***</div>
          </div>
        </div>
        <div class="profile-login-meta">
          <div class="profile-login-time">2026-06-01 18:45</div>
        </div>
      </div>
      <div class="profile-login-item">
        <div class="profile-login-device">
          <div class="profile-login-icon" style="background:#dcfce7;color:#22c55e;">🍎</div>
          <div>
            <div class="profile-login-name">Safari / macOS</div>
            <div class="profile-login-ip">IP: 117.136.***.***</div>
          </div>
        </div>
        <div class="profile-login-meta">
          <div class="profile-login-time">2026-05-30 09:12</div>
        </div>
      </div>
    </div>
  </div>`;

  html += `</div>`; // 右侧结束
  html += `</div>`; // 总容器结束

  return html;
}

// 头像上传处理（压缩后存储，避免 localStorage 超限）
function handleAvatarUpload(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) { alert("图片大小超过 5M，请选择更小的图片"); return; }
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // 压缩：最大边长 200px，JPEG 质量 0.8
      const maxSize = 200;
      let w = img.width, h = img.height;
      if (w > h) { if (w > maxSize) { h = Math.round(h * maxSize / w); w = maxSize; } }
      else        { if (h > maxSize) { w = Math.round(w * maxSize / h); h = maxSize; } }
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.8);
      if (currentUser) currentUser.avatar = compressedDataUrl;
      persistCurrentUser();
      const preview = document.getElementById("profile-avatar-preview");
      if (preview) { preview.style.backgroundImage = `url(${compressedDataUrl})`; preview.textContent = ""; }
      updateUserDisplay();
      showToast("头像更换成功");
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// 通用：将某行变为编辑模式
function enterEditMode(rowId, label, inputId, inputType, currentValue, saveFn) {
  const rowEl = document.getElementById(rowId);
  if (!rowEl) return;
  rowEl.innerHTML = `
    <div style="width:90px;font-size:14px;color:#334155;flex-shrink:0;">${label}</div>
    <input type="${inputType}" id="${inputId}" value="${currentValue}" style="flex:1;padding:6px 10px;font-size:14px;border:1.5px solid #bfdbfe;border-radius:6px;outline:none;transition:border-color .2s;" onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#bfdbfe'" onkeydown="if(event.key==='Enter')${saveFn}()">
    <button type="button" style="color:#3b82f6;font-size:13px;cursor:pointer;margin-left:12px;flex-shrink:0;font-weight:500;background:none;border:1.5px solid #3b82f6;border-radius:6px;padding:4px 14px;" onclick="${saveFn}()">保存</button>
    <span style="color:#94a3b8;font-size:13px;cursor:pointer;margin-left:8px;flex-shrink:0;" onclick="renderModule('profile')">取消</span>
  `;
  setTimeout(() => { const el = document.getElementById(inputId); if(el){ el.focus(); el.select(); } }, 50);
}

// 昵称编辑
function editProfileNickname() {
  const el = document.getElementById("profile-nickname-value");
  if (!el) return;
  enterEditMode("profile-nickname-row", "昵称", "profile-nickname-input", "text", el.textContent, "saveProfileNickname");
}
function saveProfileNickname() {
  const input = document.getElementById("profile-nickname-input");
  if (!input) return;
  const val = input.value.trim();
  if (!val) { alert("昵称不能为空"); return; }
  const btn = input.parentElement.querySelector("button");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "保存中"; }
  if (currentUser) {
    currentUser.nickname = val;
    currentUser.name = val;
  }
  persistCurrentUser();
  updateUserDisplay(); // 同步刷新右上角
  if (btn) { btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "保存"; }
  renderModule("profile");
  showToast("昵称修改成功");
}

// 职位编辑
function editProfilePosition() {
  const el = document.getElementById("profile-position-value");
  if (!el) return;
  enterEditMode("profile-position-row", "职位", "profile-position-input", "text", el.textContent, "saveProfilePosition");
}
function saveProfilePosition() {
  const input = document.getElementById("profile-position-input");
  if (!input) return;
  const val = input.value.trim();
  const btn = input.parentElement.querySelector("button");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "保存中"; }
  if (currentUser) currentUser.position = val;
  persistCurrentUser();
  if (btn) { btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "保存"; }
  renderModule("profile");
  showToast("职位修改成功");
}

// 生日编辑
function editProfileBirthday() {
  const el = document.getElementById("profile-birthday-value");
  if (!el) return;
  const current = el.textContent === "--" ? "" : el.textContent;
  enterEditMode("profile-birthday-row", "生日", "profile-birthday-input", "date", current, "saveProfileBirthday");
}
function saveProfileBirthday() {
  const input = document.getElementById("profile-birthday-input");
  if (!input) return;
  const val = input.value;
  if (currentUser) currentUser.birthday = val;
  persistCurrentUser();
  renderModule("profile");
  showToast("生日修改成功");
}

// 手机号编辑
function editProfilePhone() {
  const el = document.getElementById("profile-phone-value");
  if (!el) return;
  const current = el.textContent === "--" ? "" : el.textContent;
  enterEditMode("profile-phone-row", "手机号", "profile-phone-input", "tel", current, "saveProfilePhone");
}
function saveProfilePhone() {
  const input = document.getElementById("profile-phone-input");
  if (!input) return;
  const val = input.value.trim();
  if (val && !/^1[3-9]\d{9}$/.test(val)) { alert("请输入正确的手机号"); return; }
  if (currentUser) currentUser.phone = val || "";
  persistCurrentUser();
  renderModule("profile");
  showToast(val ? "手机号修改成功" : "手机号已清空");
}

// 邮箱编辑
function editProfileEmail() {
  const el = document.getElementById("profile-email-value");
  if (!el) return;
  const current = el.textContent === "--" ? "" : el.textContent;
  enterEditMode("profile-email-row", "邮箱", "profile-email-input", "email", current, "saveProfileEmail");
}
function saveProfileEmail() {
  const input = document.getElementById("profile-email-input");
  if (!input) return;
  const val = input.value.trim();
  if (val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { alert("请输入正确的邮箱地址"); return; }
  if (currentUser) currentUser.email = val || "";
  persistCurrentUser();
  renderModule("profile");
  showToast(val ? "邮箱修改成功" : "邮箱已清空");
}

// 微信绑定/解绑
function toggleWechatBind() {
  const current = currentUser && currentUser.wechatBound;
  if (current) {
    if (!confirm("确定要解绑微信吗？")) return;
    if (currentUser) currentUser.wechatBound = false;
    showToast("微信已解绑");
  } else {
    if (currentUser) currentUser.wechatBound = true;
    showToast("微信绑定成功");
  }
  persistCurrentUser();
  renderModule("profile");
}

// 品牌编辑
function editProfileBrand() {
  const el = document.getElementById("profile-brand-value");
  if (!el) return;
  enterEditMode("profile-brand-row", "品牌", "profile-brand-input", "text", el.textContent, "saveProfileBrand");
}
function saveProfileBrand() {
  const input = document.getElementById("profile-brand-input");
  if (!input) return;
  const val = input.value.trim();
  if (currentUser) currentUser.brand = val;
  persistCurrentUser();
  renderModule("profile");
  showToast("品牌修改成功");
}

// 保持当前状态切换
function toggleKeepStatus(checkbox) {
  if (currentUser) currentUser.keepStatus = checkbox.checked;
  persistCurrentUser();
  // 即时更新文字，不等待重新渲染（在同一位置仅改变文字）
  const container = checkbox.closest(".profile-toggle-row") || checkbox.closest('[style*="flex:1"]');
  const statusText = container ? container.querySelector(".keep-status-text") : null;
  if (statusText) statusText.textContent = checkbox.checked ? "已开启" : "已关闭";
  showToast(checkbox.checked ? "保持当前状态已开启" : "保持当前状态已关闭");
}

// 修改密码弹窗
function showChangePasswordModal() {
  const modal = document.getElementById("change-password-modal");
  if (modal) {
    modal.classList.remove("hidden");
    setTimeout(() => document.getElementById("cp-old")?.focus(), 100);
  }
}
function hideChangePasswordModal() {
  const modal = document.getElementById("change-password-modal");
  if (modal) {
    modal.classList.add("hidden");
    ["cp-old","cp-new","cp-confirm"].forEach(id => { const el = document.getElementById(id); if(el) el.value=""; });
  }
}
function doChangePassword() {
  const oldPwd = document.getElementById("cp-old").value;
  const newPwd = document.getElementById("cp-new").value;
  const confirm = document.getElementById("cp-confirm").value;
  if (!oldPwd || !newPwd || !confirm) { alert("请填写完整"); return; }
  const btn = document.querySelector("#change-password-modal .btn-primary");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "保存中"; }
  const userInDb = USERS.find(u => currentUser && u.id === currentUser.id);
  if (!userInDb || userInDb.password !== oldPwd) { alert("原密码不正确"); return; }
  if (newPwd.length < 6) { alert("新密码至少6位"); return; }
  if (newPwd !== confirm) { alert("两次输入的新密码不一致"); return; }
  userInDb.password = newPwd;
  if (currentUser) { currentUser.password = newPwd; localStorage.setItem("chansee_current_user", JSON.stringify(currentUser)); }
  saveUsers();
  if (btn) { btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "确认修改"; }
  showToast("密码修改成功，请牢记新密码");
  hideChangePasswordModal();
}
// 忘记密码功能
let forgotVerifyCode = '';
let forgotTargetUser = null;

function openForgotPassword() {
  const modal = document.getElementById('forgot-password-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.getElementById('forgot-step-1').style.display = 'block';
    document.getElementById('forgot-step-2').style.display = 'none';
    ['forgot-contact','forgot-code','forgot-new-pwd','forgot-confirm-pwd'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  }
}

function hideForgotPassword() {
  const modal = document.getElementById('forgot-password-modal');
  if (modal) {
    modal.classList.add('hidden');
    forgotVerifyCode = '';
    forgotTargetUser = null;
  }
}

function sendVerifyCode() {
  const contact = document.getElementById('forgot-contact').value.trim();
  if (!contact) { alert('请输入手机号或邮箱'); return; }
  
  // Find user by phone or email
  const user = USERS.find(u => 
    (u.phone && u.phone.indexOf(contact) >= 0) || 
    (u.email && u.email.toLowerCase() === contact.toLowerCase()) ||
    u.username === contact
  );
  
  if (!user) { alert('未找到该账号，请确认手机号/邮箱是否正确'); return; }
  
  forgotTargetUser = user;
  // Generate 6-digit verification code
  forgotVerifyCode = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Display the code (simulation - in real scenario, send via SMS/email)
  const display = document.getElementById('forgot-code-display');
  if (display) {
    display.textContent = forgotVerifyCode;
  }
  
  // Switch to step 2
  document.getElementById('forgot-step-1').style.display = 'none';
  document.getElementById('forgot-step-2').style.display = 'block';
  
  showToast('模拟验证码已生成，请查看弹窗内提示');
}

function toggleForgotNewPwd() {
  const inp = document.getElementById('forgot-new-pwd');
  const eye = document.getElementById('forgot-new-pwd-eye');
  if (!inp || !eye) return;
  if (inp.type === 'password') { inp.type = 'text'; eye.textContent = '👁️'; }
  else { inp.type = 'password'; eye.textContent = '🙈'; }
}

function toggleForgotConfirmPwd() {
  const inp = document.getElementById('forgot-confirm-pwd');
  const eye = document.getElementById('forgot-confirm-pwd-eye');
  if (!inp || !eye) return;
  if (inp.type === 'password') { inp.type = 'text'; eye.textContent = '👁️'; }
  else { inp.type = 'password'; eye.textContent = '🙈'; }
}

function resetPassword() {
  const code = document.getElementById('forgot-code').value.trim();
  const newPwd = document.getElementById('forgot-new-pwd').value;
  const confirmPwd = document.getElementById('forgot-confirm-pwd').value;
  
  if (!code) { alert('请输入验证码'); return; }
  if (code !== forgotVerifyCode) { alert('验证码错误'); return; }
  if (!newPwd || newPwd.length < 6) { alert('新密码至少6位'); return; }
  if (newPwd !== confirmPwd) { alert('两次输入的新密码不一致'); return; }
  if (!forgotTargetUser) { alert('操作超时，请重新操作'); hideForgotPassword(); return; }
  
  // Update password
  forgotTargetUser.password = newPwd;
  if (currentUser && forgotTargetUser.id === currentUser.id) { currentUser.password = newPwd; localStorage.setItem("chansee_current_user", JSON.stringify(currentUser)); }
  saveUsers();
  
  showToast('密码重置成功，请使用新密码登录');
  hideForgotPassword();
}



// 离开团队
function leaveTeam() {
  if (!confirm("⚠️ 确定要离开团队吗？离开后您将无法查看此团队的任何记录！")) return;
  if (!confirm("再次确认：您真的要离开团队吗？此操作不可撤销。")) return;
  const btn = document.querySelector(".profile-btn-danger");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "处理中"; }
  const userInDb = USERS.find(u => currentUser && u.id === currentUser.id);
  if (userInDb) {
    userInDb.status = "已禁用";
    userInDb.remark = "用户主动离开团队";
  }
  showToast("您已离开团队");
  setTimeout(() => logout(), 800);
}

function exportRisk(){
  const headers = ['项目编号','预警类型','风险等级','问题描述','发现日期','负责人','状态','解决日期'];
  const rows = RISK_ALERTS.map(r => [
    r.projectId, r.type||'', r.level||'', r.description||'',
    r.foundDate||'', r.owner||'', r.status||'', r.resolvedDate||''
  ]);
  showExportDialog(headers, rows, `项目风险预警_${new Date().toISOString().slice(0,10)}`, '项目风险预警');
}
function renderComparison(){
  let html = `<div class="page-header"><h2>📊 项目对比分析</h2>
    <button class="btn" onclick="exportComparison()">导出对比报告</button>
  </div>`;

  // 项目选择器（多选）
  html += `<div class="card"><div class="card-title">选择对比项目（可多选）</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">`;
  PROJECTS.forEach(p=>{
    html += `<label style="cursor:pointer"><input type="checkbox" class="compare-cb" value="${p.id}" style="margin-right:4px;">${p.name}</label>`;
  });
  html += `</div>
    <button class="btn btn-primary" onclick="runComparison()">开始对比</button>
  </div>`;

  // 对比结果容器
  html += `<div id="compare-result"></div>`;
  return html;
}

function runComparison(){
  const ids = Array.from(document.querySelectorAll('.compare-cb:checked')).map(cb=>cb.value);
  if(ids.length<2){ alert('请至少选择2个项目进行对比'); return; }
  const projects = ids.map(id=>PROJECTS.find(p=>p.id===id)).filter(Boolean);

  let html = `<div class="card"><div class="card-title">📊 对比结果（共${projects.length}个项目）</div>
    <table class="data-table">
    <thead><tr><th>指标</th>${projects.map(p=>'<th>'+p.name+'</th>').join('')}<th>差值（最大-最小）</th></tr></thead><tbody>`;

  const indicators = [
    ['所属职场','workplace'],
    ['服务品牌','brand'],
    ['经营模式','serviceMode'],
    ['FTE目标','fteTarget'],
    ['SLA响应(s)','slaResponse'],
    ['SLA解决(s)','slaResolve'],
    ['成本预算(万)','costBudget'],
    ['营收目标(万)','revenue'],
    ['利润率(%)','profitRate'],
    ['健康状态','health'],
  ];

  indicators.forEach(([label,key])=>{
    const vals = projects.map(p=>p[key]);
    let diff = '';
    if(key==='profitRate'){
      const mx = Math.max(...vals), mn = Math.min(...vals);
      diff = (mx-mn).toFixed(1)+'%';
    }else if(key==='health'){
      diff = vals.join(' / ');
    }else if(typeof vals[0]==='number'){
      const mx = Math.max(...vals), mn = Math.min(...vals);
      diff = (mx-mn).toFixed(1);
    }else{
      diff = vals.join(' / ');
    }
    html += `<tr><td><b>${label}</b></td>${projects.map(p=>{
      const v = p[key];
      if(key==='profitRate') return `<td style="color:${v>=10?'var(--c-green)':v<0?'var(--c-red)':'var(--c-yellow)'}">${v}%</td>`;
      if(key==='health') return `<td>${v}</td>`;
      return `<td>${v}</td>`;
    }).join('')}<td>${diff}</td></tr>`;
  });

  html += `</tbody></table></div>`;

  // 雷达图（简易文字版）
  html += `<div class="card"><div class="card-title">📈 关键指标对比</div><div style="display:flex;gap:16px;flex-wrap:wrap;">`;
  projects.forEach(p=>{
    const op = OPERATIONS.find(o=>o.projectId===p.id);
    html += `<div style="border:1px solid var(--c-border);border-radius:8px;padding:12px;min-width:180px;">
      <div style="font-weight:600;margin-bottom:8px;">${p.name}</div>
      <div>响应时长：${op?op.responseTime+'s':'-'}</div>
      <div>CSAT：${op?op.csat:'-'}</div>
      <div>解决率：${op?op.resolutionRate+'%':'-'}</div>
      <div>利润率：${p.profitRate}%</div>
      <div>健康状态：${p.health}</div>
    </div>`;
  });
  html += `</div></div>`;

  document.getElementById('compare-result').innerHTML = html;
}

function exportComparison(){
  const headers = ['对比维度','项目A','项目B','差异分析'];
  const rows = [];
  showExportDialog(headers, rows, `数据对比_${new Date().toISOString().slice(0,10)}`, '数据对比');
}
function saveAssessmentsData() {
  try { localStorage.setItem('chansee_assessments', JSON.stringify(ASSESSMENTS_DATA)); } catch(e) {}
  if (typeof syncToCloud === 'function') syncToCloud('assessments', ASSESSMENTS_DATA);
}
