// VERSION: 202607021703 - 权限管理优化：动态角色+角色管理+复制权限+权限拦截
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
    }
  } catch(e) {
  }
}

// ===== 自定义确认弹窗（替代原生 confirm）=====
function showConfirmModal(msg, title, onConfirm, onCancel) {
  title = title || '确认操作';
  var overlay = document.createElement('div');
  overlay.className = 'sd-confirm-overlay';
  overlay.innerHTML = ''
    + '<div class="sd-confirm-box">'
    + '<div class="sd-confirm-header">'+title+'</div>'
    + '<div class="sd-confirm-body">'+msg+'</div>'
    + '<div class="sd-confirm-footer">'
    + '<button class="sd-confirm-btn sd-confirm-cancel" id="sd-confirm-cancel-btn">取消</button>'
    + '<button class="sd-confirm-btn sd-confirm-ok" id="sd-confirm-ok-btn">确定</button>'
    + '</div></div>';
  document.body.appendChild(overlay);
  setTimeout(function(){ overlay.classList.add('sd-confirm-show'); }, 10);
  document.getElementById('sd-confirm-ok-btn').onclick = function(){
    if(onConfirm) onConfirm();
    overlay.classList.remove('sd-confirm-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  document.getElementById('sd-confirm-cancel-btn').onclick = function(){
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
    + '<div class="sd-prompt-header">'+title+' <button class="sd-prompt-close" id="sd-prompt-close">&times;</button></div>'
    + '<div class="sd-prompt-body"><label>'+label+'</label><input type="text" class="sd-prompt-input" id="sd-prompt-input" value="'+(defaultValue||'')+'"></div>'
    + '<div class="sd-prompt-footer">'
    + '<button class="sd-confirm-btn sd-confirm-cancel" id="sd-prompt-cancel-btn">取消</button>'
    + '<button class="sd-confirm-btn sd-confirm-ok" id="sd-prompt-ok-btn">确定</button>'
    + '</div></div>';
  document.body.appendChild(overlay);
  setTimeout(function(){ overlay.classList.add('sd-prompt-show'); }, 10);
  var inputEl = document.getElementById('sd-prompt-input');
  if(inputEl){ inputEl.focus(); inputEl.select(); }
  document.getElementById('sd-prompt-ok-btn').onclick = function(){
    var val = inputEl ? inputEl.value : '';
    if(onConfirm) onConfirm(val);
    overlay.classList.remove('sd-prompt-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  document.getElementById('sd-prompt-cancel-btn').onclick = function(){
    overlay.classList.remove('sd-prompt-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  document.getElementById('sd-prompt-close').onclick = function(){
    overlay.classList.remove('sd-prompt-show');
    setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300);
  };
  overlay.onclick = function(e){
    if(e.target === this){ overlay.classList.remove('sd-prompt-show'); setTimeout(function(){ if(overlay.parentNode) overlay.remove(); }, 300); }
  };
}

// ===== 数据持久化（彻底修复版）=====
// 安全写入 localStorage（带 quota 处理和用户提示）
function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
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
  {id:"U001", name:"周东利", nickname:"Jordly", username:"admin", role:"超级管理员", status:"已激活", registerTime:"2025-01-01", password:"admin666", phone:"18510084943", email:"zhoudongli@xcxd.com", birthday:"1991-12-18", position:"客服总监", workplace:"济南/淄博/杭州", approvedBy:"system", remark:"系统初始化超级管理员"},
  {id:"U002", name:"jordly", nickname:"", username:"jordly", role:"管理员", status:"已激活", registerTime:"2025-03-15", password:"jordly1218", phone:"", email:"", birthday:"", position:"", workplace:"", approvedBy:"admin", remark:""}
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
  var raw = localStorage.getItem('chansee_users');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      USERS = JSON.parse(raw);
      return;
    } catch(e) {
    }
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
  var raw = localStorage.getItem('chansee_projects');
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
    } catch(e) {
    }
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
  }
  OPERATIONS = JSON.parse(JSON.stringify(DEFAULT_OPERATIONS));
  safeSetItem('chansee_operations', JSON.stringify(OPERATIONS));
})();

// 初始化 ISSUES
(function initIssues() {
  var raw = localStorage.getItem('chansee_issues');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  ISSUES = JSON.parse(JSON.stringify(DEFAULT_ISSUES));
  safeSetItem('chansee_issues', JSON.stringify(ISSUES));
})();

// 初始化 AGENT_PERFORMANCE
(function initAgentPerformance() {
  var raw = localStorage.getItem('chansee_agent_performance');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  AGENT_PERFORMANCE = JSON.parse(JSON.stringify(DEFAULT_AGENT_PERFORMANCE));
  safeSetItem('chansee_agent_performance', JSON.stringify(AGENT_PERFORMANCE));
})();

// 初始化 GROUP_LOAD_RATIO
(function initGroupLoadRatio() {
  var raw = localStorage.getItem('chansee_group_load_ratio');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  GROUP_LOAD_RATIO = JSON.parse(JSON.stringify(DEFAULT_GROUP_LOAD_RATIO || []));
  safeSetItem('chansee_group_load_ratio', JSON.stringify(GROUP_LOAD_RATIO));
})();

// 初始化 PERFORMANCE_WEIGHTS
(function initPerformanceWeights() {
  var raw = localStorage.getItem('chansee_performance_weights');
  if (raw && raw !== 'null' && raw !== '{}') {
  }
  PERFORMANCE_WEIGHTS = JSON.parse(JSON.stringify(DEFAULT_PERFORMANCE_WEIGHTS || {}));
  safeSetItem('chansee_performance_weights', JSON.stringify(PERFORMANCE_WEIGHTS));
})();

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
  var raw = localStorage.getItem('chansee_staff_config');
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
  var raw = localStorage.getItem('chansee_workload_data');
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
  var raw = localStorage.getItem('chansee_kpi_history');
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
  var raw = localStorage.getItem('chansee_data_change_log');
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
  var raw = localStorage.getItem('chansee_data_permissions');
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
(function initRiskAlerts() {
  var raw = localStorage.getItem('chansee_risk_alerts');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  RISK_ALERTS = JSON.parse(JSON.stringify(DEFAULT_RISK_ALERTS));
  safeSetItem('chansee_risk_alerts', JSON.stringify(RISK_ALERTS));
})();

// 初始化 KNOWLEDGE
(function initKnowledge() {
  var raw = localStorage.getItem('chansee_knowledge');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  KNOWLEDGE = JSON.parse(JSON.stringify(DEFAULT_KNOWLEDGE));
  safeSetItem('chansee_knowledge', JSON.stringify(KNOWLEDGE));
})();

// 初始化 HANDOVERS
(function initHandovers() {
  var raw = localStorage.getItem('chansee_handovers');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  HANDOVERS = JSON.parse(JSON.stringify(DEFAULT_HANDOVERS));
  safeSetItem('chansee_handovers', JSON.stringify(HANDOVERS));
})();

function saveUsers() {
  var ok = safeSetItem('chansee_users', JSON.stringify(USERS));
  if (!ok) { alert('⚠️ 用户数据保存失败！\n可能是浏览器存储空间不足，请清理浏览器数据后重试。'); return; }
  // 同步到 CloudBase
  if (window.CloudBaseSync) {
    // 添加日志：显示正在保存的数据
    
    var p = window.CloudBaseSync.saveAll();
    if (p && typeof p.then === 'function') {
      p.then(function(success) {
        if (success) {
          // 云端保存成功时，记录成功标记
          try { localStorage.setItem('chansee_users_cloud_saved', 'true'); } catch(e) {}
        } else {
          // 云端保存失败，给用户提示
          if (typeof showToast === 'function') {
            showToast('⚠️ 云端保存失败，数据仅保存在本地浏览器');
          } else {
          }
          // 标记云端保存失败
          try { localStorage.setItem('chansee_users_cloud_saved', 'false'); } catch(e) {}
        }
      }).catch(function(err) {
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
        } else {
        }
      });
    }
  }
}

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
function saveKnowledge() {
  safeSetItem('chansee_knowledge', JSON.stringify(KNOWLEDGE));
}
function saveHandovers() {
  safeSetItem('chansee_handovers', JSON.stringify(HANDOVERS));
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
  const avatarHtml = avatar
    ? `<div class="user-avatar" style="background-image:url(${avatar});background-size:cover;background-position:center;color:transparent;">${firstChar}</div>`
    : `<div class="user-avatar">${firstChar}</div>`;
  const dropdownAvatarHtml = avatar
    ? `<div class="user-dropdown-avatar" style="background-image:url(${avatar});background-size:cover;background-position:center;color:transparent;">${firstChar}</div>`
    : `<div class="user-dropdown-avatar">${firstChar}</div>`;
  el.innerHTML = `
    <div class="user-avatar-wrap" onclick="toggleUserMenu(event)">
      ${avatarHtml}
      <span class="user-name">${displayName}</span>
      <span class="user-arrow">▼</span>
      <div class="user-dropdown" id="user-dropdown">
        <div class="user-dropdown-header">
          ${dropdownAvatarHtml}
          <div>
            <div class="user-dropdown-name">${displayName}</div>
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
  
  // 根据当前用户角色过滤导航菜单
  setTimeout(function() {
    filterNavByPermissions();
  }, 100);
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
            renderModule(sessionStorage.getItem('cs_lastModule') || "dashboard");
            return;
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
    renderModule(sessionStorage.getItem('cs_lastModule') || "dashboard");
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
    
    // 权限检查：检查当前用户是否有权限查看此模块
    // 超级管理员跳过检查
    if (currentRole !== "超级管理员" && MODULE_KEYS.indexOf(module) >= 0) {
      if (!canViewModule(module)) {
        // 无权限，找到第一个有权限的模块并跳转
        var firstAllowedModule = MODULE_KEYS.find(function(mk) { return canViewModule(mk); });
        if (firstAllowedModule) {
          alert("您没有权限访问「" + MODULE_NAMES[module] + "」模块！\n系统将自动跳转到" + MODULE_NAMES[firstAllowedModule] + "。");
          currentModule = firstAllowedModule;
          module = firstAllowedModule;
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
    // 同步更新导航栏高亮状态
    document.querySelectorAll('.nav-item').forEach(function(i){i.classList.remove('active');});
    var nav = document.querySelector('.nav-item[data-module="'+module+'"]');
    if(nav){ nav.classList.add('active'); }
    const area = document.getElementById("module-content");
    if (!area) { console.error('renderModule: module-content 元素不存在'); return; }
    const fns = {dashboard:renderDashboard, archive:renderArchive, target:renderTarget, cost:renderCost, operation:renderOperation, issue:renderIssue, knowledge:renderKnowledge, handover:renderHandover, satisfaction:renderSatisfaction, systemData:renderSystemData, permissions:renderPermissions, notifications:renderNotifications, assessment:renderAssessment, performance:renderPerformance, risk:renderRisk, profile:renderProfile};
    var html = fns[module] ? fns[module]() : `<div class="empty-state"><div class="empty-icon">🚧</div><p>模块开发中...</p></div>`;
    if (!html || html === 'undefined' || html === 'null') {
      html = `<div class="empty-state"><div class="empty-icon">⚠️</div><p>模块内容为空</p></div>`;
    }
    area.innerHTML = html;
    bindEvents();
    // 确保右上角用户头像始终显示（防止被其他代码清空）
    updateUserDisplay();
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
  row1 += '<select class="fb-select" id="filter-time" onchange="onFilterTimeChange(this.value)" title="时间">';
  row1 += '<option value="" disabled selected hidden>时间 ▼</option>';
  row1 += '<option value="month"'+(filterState.timeMode==='month'?' selected':'')+'>本月</option>';
  row1 += '<option value="lastMonth"'+(filterState.timeMode==='lastMonth'?' selected':'')+'>上月</option>';
  row1 += '<option value="quarter"'+(filterState.timeMode==='quarter'?' selected':'')+'>本季</option>';
  row1 += '<option value="year"'+(filterState.timeMode==='year'?' selected':'')+'>本年</option>';
  row1 += '<option value="custom"'+(filterState.timeMode==='custom'?' selected':'')+'>自定义</option>';
  row1 += '</select>';

  row1 += '<select class="fb-select" id="filter-workplace" onchange="setFilter(\'workplace\',this.value)" title="职场">';
  row1 += '<option value="" disabled selected hidden>职场 ▼</option>';
  row1 += '<option value="all"'+(filterState.workplace==='all'?' selected':'')+'>全部</option>';
  workplaces.forEach(function(w){ row1 += '<option value="'+w+'"'+(filterState.workplace===w?' selected':'')+'>'+w+'</option>'; });
  row1 += '</select>';

  row1 += '<select class="fb-select" id="filter-projectType" onchange="setFilter(\'projectType\',this.value)" title="类型">';
  row1 += '<option value="" disabled selected hidden>类型 ▼</option>';
  row1 += '<option value="all"'+(filterState.projectType==='all'?' selected':'')+'>全部</option>';
  types.forEach(function(t){ row1 += '<option value="'+t+'"'+(filterState.projectType===t?' selected':'')+'>'+t+'</option>'; });
  row1 += '</select>';

  row1 += '<select class="fb-select" id="filter-status" onchange="setFilter(\'status\',this.value)" title="状态">';
  row1 += '<option value="" disabled selected hidden>状态 ▼</option>';
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

  // PM（单选）
  var pmLabel = filterState.pm === 'all' ? '项目PM ▼' : filterState.pm;
  row2 += '<div class="fb-search-wrap" data-filter="pm">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+pmLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-pm" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" id="search-pm" placeholder="搜索PM..." oninput="renderFbOptions(\'pm\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-pm"></div>'+
    '</div>';
  row2 += '</div>';

  // 客服管理（单选）
  var drLabel = filterState.director === 'all' ? '客服管理 ▼' : filterState.director;
  row2 += '<div class="fb-search-wrap" data-filter="director">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+drLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-director" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" id="search-director" placeholder="搜索客服管理..." oninput="renderFbOptions(\'director\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-director"></div>'+
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
        style="flex:1;min-width:180px;padding:8px 12px;border-radius:8px;border:1px solid var(--c-border);font-size:13px;"
        oninput="filterArchiveTable(this.value)">

      <button class="btn btn-sm" onclick="showImportDialog()" style="margin-right:4px;">📤 导入</button>
      <button class="btn btn-sm" onclick="exportProjects()" style="margin-right:8px;">📥 导出</button>
      ${can?'<button class="btn btn-primary btn-sm" onclick="showAddProject()">＋ 新增项目</button>':''}

      ${can?'<button class="btn btn-sm" class="btn btn-sm btn-archive-danger" onclick="batchDeleteProjects()">🗑 批量删除</button>':''}

      ${currentRole==='leader'?'<span class="badge badge-gray">只读权限</span>':''}

    </div>

  </div>

  <div class="card">

    <table class="data-table archive-table">

      <thead><tr>
        ${can?'<th style="width:36px;"><input type="checkbox" id="archive-select-all" onclick="toggleArchiveSelectAll(this.checked)" title="全选/取消"></th>':''}
        <th>项目编号</th><th>项目名称</th><th>品牌/品类</th><th>项目类型</th><th>所属职场</th><th>负责人</th><th>项目总监</th><th>交接历史</th><th>操作</th></tr></thead>

      <tbody id="archive-tbody">

        ${all.map((p, idx)=>`

          <tr data-id="${p.id}" data-name="${p.name}" data-brand="${p.brand}" data-pm="${p.pm}">

            ${can?`<td><input type="checkbox" class="archive-row-check" value="${p.id}" onchange="updateBatchDeleteBtn()"></td>`:''}

            <td>${p.id}</td>

            <td><a href="#" style="color:#3b82f6;cursor:pointer;border-bottom:1px dashed #3b82f6;text-decoration:none;" 
                onmouseover="this.style.borderBottom='1px solid #3b82f6'" 
                onmouseout="this.style.borderBottom='1px dashed #3b82f6'"
                onclick="showProjectDetail('${p.id}');return false;" title="点击查看项目详情">${p.name}</a></td>

            <td>${p.brand} / ${p.category}</td>

            <td><span class="badge ${p.serviceMode==='TP项目'?'badge-blue':p.serviceMode==='DP项目'?'badge-green':'badge-orange'}">${p.serviceMode}</span></td>

            <td><span class="wp-tag wp-${p.workplace}">${p.workplace}</span></td>

            <td>${p.pm}</td>

            <td>${p.director}</td>

            <td>${(p.pmHistory||[]).length>0?`<span class="badge badge-gray" title="${(p.pmHistory||[]).map(h=>h.name+'('+h.from+'~'+h.to+')').join('; ')}">${(p.pmHistory||[]).length}次交接</span>`:'无'}</td>

            <td class="actions">
              ${can?`<button class="btn btn-sm" style="background:#eff6ff;color:#2563eb;border-color:#bfdbfe;" onclick="editProject('${p.id}')">编辑</button>&nbsp;
              <button class="btn btn-sm" style="color:#dc2626;background:#fef2f2;border-color:#fecaca;" onclick="deleteProjectConfirm('${p.id}','${p.name}')">删除</button>`:''}

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
            <th style="width:50px;">对比</th>
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
              <td><input type="checkbox" onchange="toggleCompareCheckbox('${p.id}')" ${(window._selectedCompareIds||[]).indexOf(p.id)>=0?'checked':''} style="width:16px;height:16px;accent-color:#0ABAB5;cursor:pointer;"></td>
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
    ${(window._selectedCompareIds||[]).length === 2 ? (function(){
      var cids = window._selectedCompareIds;
      var cp1 = PROJECTS.find(function(pp){return pp.id===cids[0];});
      var cp2 = PROJECTS.find(function(pp){return pp.id===cids[1];});
      if(!cp1||!cp2) return '';
      var ch1 = HEALTH_DATA.find(function(hh){return hh.projectId===cp1.id;});
      var ch2 = HEALTH_DATA.find(function(hh){return hh.projectId===cp2.id;});
      var cs1 = ch1 ? ch1.overallScore : 0;
      var cs2 = ch2 ? ch2.overallScore : 0;
      return '<div style="display:flex;align-items:center;gap:16px;padding:10px 16px;background:linear-gradient(135deg,#0B9B96,#3b82f6);color:#fff;border-radius:0 0 12px 12px;font-size:13px;">'
        +'<span>已选: <b>'+cp1.name+'</b> vs <b>'+cp2.name+'</b></span>'
        +'<span style="margin-left:auto;font-weight:600;">'+cs1+' vs '+cs2+'</span>'
        +'<button class="btn btn-sm" style="background:rgba(255,255,255,0.2);color:#fff;border:1px solid rgba(255,255,255,0.3);" onclick="openComparePanel()">开始对比</button>'
        +'<button onclick="window._selectedCompareIds=[];renderModule(\'operation\')" style="background:rgba(255,255,255,0.15);border:none;color:#fff;width:24px;height:24px;border-radius:50%;cursor:pointer;font-size:14px;line-height:24px;text-align:center;">x</button>'
        +'</div>';
    })() : ''}
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
  if(typeof issueActiveTab === 'undefined'){ window.issueActiveTab = 'issue'; }
  var tab = window.issueActiveTab || 'issue';
  var isIssue = tab === 'issue';
  var can = canEdit();

  // 过滤数据
  var items = ISSUES.filter(function(i){ return i.category === (isIssue ? '问题' : '课题'); });
  var fs = window.issueFilterState || {};
  if(fs.status && fs.status !== 'all') items = items.filter(function(i){ return i.status === fs.status; });
  if(fs.priority && fs.priority !== 'all') items = items.filter(function(i){ return i.priority === fs.priority; });
  if(fs.type && fs.type !== 'all') items = items.filter(function(i){ return i.type === fs.type; });
  if(fs.assignee && fs.assignee !== 'all') items = items.filter(function(i){ return i.assignee === fs.assignee; });
  if(fs.keyword) items = items.filter(function(i){ return (i.desc||'').indexOf(fs.keyword)>=0||(i.projectName||'').indexOf(fs.keyword)>=0||i.id.toString().indexOf(fs.keyword)>=0; });

  // 统计卡片
  var counts = { pending:0, processing:0, verify:0, closed:0, all:items.length };
  items.forEach(function(i){
    if(i.status==='待处理'||i.status==='未开始') counts.pending++;
    else if(i.status==='处理中'||i.status==='进行中') counts.processing++;
    else if(i.status==='待验收') counts.verify++;
    else if(i.status==='已关闭') counts.closed++;
  });

  // 独立筛选栏
  var allPriorities = ['紧急','重要','一般'];
  var allTypes = isIssue ? ['整改','客诉','数据异常','流程卡点','系统故障','优化'] : ['流程优化','调研诊断','销售提升','服务升级','成本优化','风险防控','其他'];
  var allAssignees = [];
  ISSUES.forEach(function(i){ if(i.assignee && allAssignees.indexOf(i.assignee)<0) allAssignees.push(i.assignee); });

  function sel(name, options, allLabel){
    var html = '<select id="issue-filter-'+name+'" onchange="filterIssues()" style="padding:6px 10px;border:1px solid #e2e8f0;border-radius:8px;font-size:12px;color:#475569;background:#fff;cursor:pointer;outline:none;">';
    html += '<option value="all">全部'+allLabel+'</option>';
    options.forEach(function(o){ html += '<option value="'+o+'" '+(fs[name]===o?'selected':'')+'>'+o+'</option>'; });
    html += '</select>';
    return html;
  }

  var statCards = isIssue
    ? [{l:'待处理',c:counts.pending,cls:'issue-stat-pending'},{l:'处理中',c:counts.processing,cls:'issue-stat-processing'},{l:'待验收',c:counts.verify,cls:'issue-stat-verify'},{l:'已关闭',c:counts.closed,cls:'issue-stat-closed'}]
    : [{l:'未开始',c:counts.pending,cls:'issue-stat-pending'},{l:'进行中',c:counts.processing,cls:'issue-stat-processing'},{l:'待验收',c:counts.verify,cls:'issue-stat-verify'},{l:'已关闭',c:counts.closed,cls:'issue-stat-closed'}];
  var statHtml = '<div class="issue-stat-cards">'+statCards.map(function(s){ return '<div class="issue-stat-card '+s.cls+'"><p class="issue-stat-label">'+s.l+'</p><p class="issue-stat-count">'+s.c+'</p></div>'; }).join('')+'</div>';

  // 表格行
  var rows = items.map(function(i){
    var idLabel = isIssue ? 'I'+String(i.id).padStart(3,'0') : 'T'+String(i.id).padStart(3,'0');
    var statusBadge = '<span class="issue-badge '+(i.status==='已关闭'?'issue-badge-success':i.status==='待处理'||i.status==='未开始'?'issue-badge-danger':'issue-badge-info')+'">'+i.status+'</span>';
    var priorityBadge = '<span class="issue-priority-badge '+(i.priority==='紧急'?'issue-priority-danger':i.priority==='重要'?'issue-priority-warning':'issue-priority-gray')+'">'+i.priority+'</span>';

    if(isIssue){
      return '<tr class="'+(i.status==='待处理'||i.priority==='紧急'?'issue-row-danger':i.status==='处理中'?'issue-row-warning':'')+'">'
        +'<td>'+statusBadge+'</td>'
        +'<td style="font-weight:500;">'+idLabel+'</td>'
        +'<td>'+i.projectName+'</td>'
        +'<td>'+i.type+'</td>'
        +'<td style="color:#666;font-size:13px;">'+i.desc+'</td>'
        +'<td style="text-align:center;">'+priorityBadge+'</td>'
        +'<td>'+i.assignee+'</td>'
        +'<td>'+(i.source||'')+'</td>'
        +'<td style="text-align:center;"><span class="issue-action-btn issue-action-view" onclick="showIssueDetail('+i.id+')">查看</span></td>'
        +'</tr>';
    } else {
      return '<tr class="topic-row" style="'+(i.status==='未开始'?'opacity:0.7':'')+'">'
        +'<td>'+statusBadge+'</td>'
        +'<td style="font-weight:500;color:#7c3aed;">'+idLabel+'</td>'
        +'<td><span style="background:#f0f0ff;color:#7c3aed;padding:2px 8px;border-radius:4px;font-size:12px;">'+i.type+'</span></td>'
        +'<td style="color:#666;font-size:13px;">'+i.desc+'</td>'
        +'<td>'+i.assignee+'</td>'
        +'<td style="text-align:center;">'+priorityBadge+'</td>'
        +'<td>'+i.participants+'</td>'
        +'<td style="text-align:center;"><span class="issue-action-btn issue-action-view" onclick="showIssueDetail('+i.id+')">查看</span></td>'
        +'</tr>';
    }
  }).join('');

  return '<div style="border-top:3px solid;border-image:linear-gradient(90deg,#0ABAB5,#3b82f6,#8b5cf6) 1;margin-bottom:20px;"></div>'
    // 双药丸标签
    +'<div style="display:flex;gap:12px;margin-bottom:16px;">'
    +'<span class="issue-tab-pill '+(isIssue?'issue-tab-active issue-tab-issue':'issue-tab-inactive')+'" onclick="switchIssueTab(\'issue\')" style="background:'+(isIssue?'linear-gradient(135deg,#0ABAB5,#06b6d4)':'')+';">🔍 问题追踪</span>'
    +'<span class="issue-tab-pill '+(!isIssue?'issue-tab-active issue-tab-topic':'issue-tab-inactive')+'" onclick="switchIssueTab(\'topic\')" style="background:'+(!isIssue?'linear-gradient(135deg,#8b5cf6,#a78bfa)':'')+';">📋 课题协作</span>'
    + (can ? '<div style="margin-left:auto;"><button class="btn btn-sm btn-primary" onclick="showAddIssue()" style="padding:6px 14px;font-size:12px;">+'+(isIssue?'问题':'课题')+'</button></div>' : '')
    +'</div>'
    // 独立筛选栏
    +'<div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;flex-wrap:wrap;">'
    + sel('priority',allPriorities,'优先级') + sel('type',allTypes,'类型') + sel('assignee',allAssignees,'责任人')
    +'<div style="position:relative;flex:1;min-width:140px;"><input id="issue-search" placeholder="搜索关键词..." value="'+(fs.keyword||'')+'" onkeydown="if(event.key===\'Enter\')filterIssues()" style="width:100%;padding:6px 10px;padding-left:28px;border:1px solid #e2e8f0;border-radius:8px;font-size:12px;outline:none;"><span style="position:absolute;left:8px;top:50%;transform:translateY(-50%);font-size:12px;">🔍</span></div>'
    +'<span onclick="filterIssues()" style="cursor:pointer;color:#0ABAB5;font-size:12px;">筛选</span>'
    +'<span onclick="document.getElementById(\'issue-search\').value=\'\';filterIssues()" style="cursor:pointer;color:#94a3b8;font-size:12px;">清除</span>'
    +'</div>'
    // 统计卡片
    + statHtml
    // 表格
    +'<div class="issue-table-wrapper"><table class="issue-table"><thead><tr>'
    + (isIssue ? '<th style="width:9%;">状态</th><th style="width:9%;">编号</th><th style="width:12%;">项目</th><th style="width:7%;">类型</th><th style="width:26%;">描述</th><th style="width:7%;text-align:center;">优先级</th><th style="width:7%;">责任人</th><th style="width:8%;">来源</th><th style="width:15%;text-align:center;">操作</th>'
               : '<th style="width:9%;">状态</th><th style="width:9%;">编号</th><th style="width:12%;">课题类型</th><th style="width:26%;">描述</th><th style="width:7%;">负责人</th><th style="width:7%;text-align:center;">优先级</th><th style="width:12%;">参与人</th><th style="width:15%;text-align:center;">操作</th>')
    +'</tr></thead><tbody>'+(rows||'<tr><td colspan="9" style="text-align:center;padding:40px;color:#94a3b8;">暂无数据</td></tr>')+'</tbody></table></div>'
    +'<div class="issue-legend"><div class="issue-legend-item"><span class="issue-legend-color issue-legend-red"></span> 紧急/待处理行高亮</div><div class="issue-legend-item"><span class="issue-legend-color issue-legend-blue"></span> 处理中</div><div class="issue-legend-item"><span class="issue-legend-color issue-legend-green"></span> 已关闭</div></div>';
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

            <td><span class="archive-tag archive-tag-dp">${h.status}</span></td>

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

            <td><span class="archive-tag archive-tag-dp">正常</span></td>

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

    <div class="project-detail-header detail-header-gradient">

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
  var isIssue = i.category === '问题';
  var accentColor = isIssue ? '#dc2626' : '#7c3aed';
  var accentBg = isIssue ? '#fef2f2' : '#f5f3ff';
  var idLabel = isIssue ? 'I'+String(id).padStart(3,'0') : 'T'+String(id).padStart(3,'0');

  document.getElementById("modal-title").textContent = (isIssue?'🔍 问题':'📋 课题')+'详情 '+idLabel;

  var html = '<div style="border-top:3px solid '+accentColor+';border-radius:8px;overflow:hidden;">';
  // 基本信息
  html += '<div class="detail-grid" style="margin-bottom:16px;padding-top:12px;">';
  var fields = [
    ['类别', isIssue ? '问题' : '课题'],
    ['关联项目', i.projectName || '--'],
    ['类型', i.type],
    ['优先级', '<span style="color:'+(i.priority==='紧急'?'#dc2626':i.priority==='重要'?'#d97706':'#6b7280')+';font-weight:600;">'+i.priority+'</span>'],
    ['状态', '<span style="color:'+(i.status==='已关闭'?'#10b981':i.status==='待处理'||i.status==='未开始'?'#dc2626':'#06b6d4')+';font-weight:600;">'+i.status+'</span>'],
    ['责任人', i.assignee || '--'],
    ['来源', i.source || '--'],
    ['参与人', i.participants || '--']
  ];
  fields.forEach(function(f){ html += '<div class="detail-item"><div class="detail-label">'+f[0]+'</div><div class="detail-value">'+f[1]+'</div></div>'; });
  html += '</div>';

  // 描述
  html += '<div style="background:'+accentBg+';padding:12px;border-radius:8px;margin-bottom:10px;"><div style="font-size:12px;color:'+accentColor+';font-weight:500;">描述</div><div style="margin-top:4px;font-size:13px;color:#1e293b;">'+i.desc+'</div></div>';

  // 背景
  if(i.background) html += '<div style="background:#f8fafc;padding:12px;border-radius:8px;margin-bottom:10px;"><div style="font-size:12px;color:#64748b;font-weight:500;">背景</div><div style="margin-top:4px;font-size:13px;color:#1e293b;">'+i.background+'</div></div>';

  // 根因
  if(i.rootCause) html += '<div style="background:#f8fafc;padding:12px;border-radius:8px;margin-bottom:10px;"><div style="font-size:12px;color:#64748b;font-weight:500;">根本原因</div><div style="margin-top:4px;font-size:13px;color:#1e293b;">'+i.rootCause+'</div></div>';

  // 方案
  if(i.solution) html += '<div style="background:#f0fdf4;padding:12px;border-radius:8px;margin-bottom:10px;"><div style="font-size:12px;color:#16a34a;font-weight:500;">解决方案</div><div style="margin-top:4px;font-size:13px;color:#1e293b;">'+i.solution+'</div></div>';

  // 里程碑
  if(i.milestone) html += '<div style="background:#f8fafc;padding:12px;border-radius:8px;margin-bottom:10px;"><div style="font-size:12px;color:#64748b;font-weight:500;">关键节点</div><div style="margin-top:4px;font-size:13px;color:#1e293b;">'+i.milestone+'</div></div>';

  // 成果
  if(i.outcome) html += '<div style="background:#f0fdf4;padding:12px;border-radius:8px;margin-bottom:10px;"><div style="font-size:12px;color:#16a34a;font-weight:500;">成果</div><div style="margin-top:4px;font-size:13px;color:#1e293b;">'+i.outcome+'</div></div>';

  html += '</div>';

  // 状态更新表单
  html += (i.status!=='已关闭' ? '<div class="form-group"><label class="form-label">更新状态</label><select class="form-select" id="i-status-update" style="max-width:200px;"><option '+(i.status==='待处理'||i.status==='未开始'?'selected':'')+'>'+(isIssue?'待处理':'未开始')+'</option><option '+(i.status==='处理中'||i.status==='进行中'?'selected':'')+'>'+(isIssue?'处理中':'进行中')+'</option><option '+(i.status==='待验收'?'selected':'')+'>待验收</option><option '+(i.status==='已关闭'?'selected':'')+'>已关闭</option></select></div><div class="form-group"><label class="form-label">填写方案</label><textarea class="form-textarea" id="i-solution" placeholder="记录处理措施">'+(i.solution||'')+'</textarea></div><div class="form-actions"><button class="btn" onclick="document.getElementById(\'modal-overlay\').classList.add(\'hidden\')">关闭</button><button class="btn btn-primary" onclick="doUpdateIssue('+id+')">保存</button></div>' : '<div class="form-actions"><button class="btn" onclick="document.getElementById(\'modal-overlay\').classList.add(\'hidden\')">关闭</button></div>');

  document.getElementById("modal-body").innerHTML = html;
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
  } catch(e) {
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
  } catch(e) {
    alert('导出 CSV 失败：' + e.message);
  }
}

function showExportDialog(headers, rows, baseFilename, title) {
  window.__expHeaders = headers;
  window.__expData = rows;
  window.__expFile = baseFilename;
  var overlay = document.getElementById('modal-overlay');
  var titleEl = document.getElementById('modal-title');
  var body = document.getElementById('modal-body');
  if (!overlay || !titleEl || !body) {
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
  const filtered = getFilteredProjects();
  const headers = ['项目编号','项目名称','健康度','状态','职场','负责人','平台','品类','品牌'];
  const rows = filtered.map(p => [
    p.id, 
    p.name, 
    p.healthScore||'', 
    p.status||'进行中', 
    p.workplace||'', 
    p.pm||'',
    (p.platforms||'').split(/[,，、]/).map(function(s){return s.trim();}).filter(Boolean).join(', '),
    p.category||'',
    p.brand||''
  ]);
  showExportDialog(headers, rows, `项目总览_${new Date().toISOString().slice(0,10)}`, '项目总览看板');
}





// 从 KPI_HISTORY 计算真实趋势
function calculateKpiTrend(fieldName) {
  if (KPI_HISTORY.length < 2) return { trend: '0%', trendUp: true, areaColor: '#FFD700', strokeColor: '#FFD700' };
  var current = KPI_HISTORY[KPI_HISTORY.length - 1][fieldName];
  var previous = KPI_HISTORY[KPI_HISTORY.length - 2][fieldName];
  if (previous === 0) previous = 1;
  var change = ((current - previous) / previous * 100).toFixed(1);
  return {
    trend: (change >= 0 ? '+' : '') + change + '%',
    trendUp: change >= 0,
    areaColor: change >= 0 ? 'rgba(0,207,167,0.2)' : 'rgba(255,107,107,0.2)',
    strokeColor: change >= 0 ? '#00C9A7' : '#FF6B6B'
  };
}

// 下载示例数据 CSV 文件
function downloadSampleData() {
  var SAMPLE_DATA = {
    '客服配置数据': [
      ['角色', '人数', '占比(%)', '职场'],
      ['售前客服', '68', '37', 'all'],
      ['售后客服', '52', '28', 'all'],
      ['综合客服', '45', '24', 'all'],
      ['客服管理', '14', '8', 'all'],
      ['数据专员', '7', '4', 'all']
    ],
    '工作量数据': [
      ['工作类型', '数量', '占比(%)', '职场'],
      ['订单处理', '625', '100', 'all'],
      ['退款处理', '342', '55', 'all'],
      ['投诉处理', '198', '32', 'all'],
      ['换货跟进', '156', '25', 'all']
    ],
    'KPI历史数据': [
      ['月份', '销售额', '成本', '费效比', '目标达成率(%)'],
      ['2026-01', '450000', '380000', '1.18', '92.0'],
      ['2026-02', '480000', '400000', '1.20', '93.5'],
      ['2026-03', '510000', '420000', '1.21', '94.8'],
      ['2026-04', '490000', '410000', '1.20', '94.0'],
      ['2026-05', '520000', '430000', '1.21', '95.0']
    ]
  };
  var lines = [];
  lines.push('示例数据说明：请将此文件中的数据导入系统，支持 CSV/XLSX/XLS 格式');
  lines.push('');
  Object.keys(SAMPLE_DATA).forEach(function(sheetName) {
    lines.push('=== ' + sheetName + ' ===');
    SAMPLE_DATA[sheetName].forEach(function(r) { lines.push(r.join(',')); });
    lines.push('');
    lines.push('');
  });
  var bom = '\uFEFF';
  var blob = new Blob([bom + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = '示例数据_客服看板.csv';
  a.click();
  URL.revokeObjectURL(url);
  showToast('✅ 示例数据已下载，请查看 CSV 文件');
}

// 导入 Excel/CSV 数据（支持 .xlsx / .xls / .csv）
function importData() {
  var input = document.createElement('input');
  input.type = 'file';
  input.accept = '.csv,.xlsx,.xls';
  input.onchange = function(e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev) {
      try {
        var data = new Uint8Array(ev.target.result);
        var workbook = XLSX.read(data, { type: 'array' });
        var imported = { staff: 0, workload: 0, kpi: 0 };
        workbook.SheetNames.forEach(function(name) {
          var sheet = workbook.Sheets[name];
          var json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          var lowerName = name.toLowerCase();
          if (lowerName.indexOf('客服配置') !== -1 || lowerName.indexOf('staff') !== -1 || lowerName.indexOf('配置') !== -1) {
            for (var i = 1; i < json.length; i++) {
              var row = json[i]; if (!row || !row[0]) continue;
              var idx = -1;
              for (var si = 0; si < STAFF_CONFIG.length; si++) { if (STAFF_CONFIG[si].role === row[0]) { idx = si; break; } }
              var item = {
                id: idx >= 0 ? STAFF_CONFIG[idx].id : 'SC' + Date.now() + i,
                role: String(row[0]),
                count: parseInt(row[1]) || 0,
                pct: parseInt(row[2]) || 0,
                workplace: String(row[3] || 'all'),
                updatedAt: new Date().toISOString().slice(0,10),
                updatedBy: (typeof CURRENT_USER !== 'undefined' && CURRENT_USER) ? CURRENT_USER.username : 'admin'
              };
              if (idx >= 0) STAFF_CONFIG[idx] = item; else STAFF_CONFIG.push(item);
              imported.staff++;
            }
          } else if (lowerName.indexOf('工作量') !== -1 || lowerName.indexOf('workload') !== -1 || lowerName.indexOf('工作') !== -1) {
            for (var i2 = 1; i2 < json.length; i2++) {
              var row2 = json[i2]; if (!row2 || !row2[0]) continue;
              var widx = -1;
              for (var wi = 0; wi < WORKLOAD_DATA.length; wi++) { if (WORKLOAD_DATA[wi].name === row2[0]) { widx = wi; break; } }
              var witem = {
                id: widx >= 0 ? WORKLOAD_DATA[widx].id : 'WL' + Date.now() + i2,
                name: String(row2[0]),
                count: parseInt(row2[1]) || 0,
                ratio: parseInt(row2[2]) || 0,
                workplace: String(row2[3] || 'all'),
                updatedAt: new Date().toISOString().slice(0,10),
                updatedBy: (typeof CURRENT_USER !== 'undefined' && CURRENT_USER) ? CURRENT_USER.username : 'admin'
              };
              if (widx >= 0) WORKLOAD_DATA[widx] = witem; else WORKLOAD_DATA.push(witem);
              imported.workload++;
            }
          } else if (lowerName.indexOf('kpi') !== -1 || lowerName.indexOf('历史') !== -1 || lowerName.indexOf('趋势') !== -1 || lowerName.indexOf('销售') !== -1) {
            for (var i3 = 1; i3 < json.length; i3++) {
              var row3 = json[i3]; if (!row3 || !row3[0]) continue;
              var kitem = {
                id: 'KH' + Date.now() + i3,
                date: String(row3[0]),
                revenue: parseInt(row3[1]) || 0,
                cost: parseInt(row3[2]) || 0,
                profitRate: parseFloat(row3[3]) || 0,
                targetRate: parseFloat(row3[4]) || 0,
                workplace: 'all',
                updatedAt: new Date().toISOString().slice(0,10),
                updatedBy: (typeof CURRENT_USER !== 'undefined' && CURRENT_USER) ? CURRENT_USER.username : 'admin'
              };
              KPI_HISTORY.push(kitem);
              imported.kpi++;
            }
          }
        });
        localStorage.setItem('chansee_staff_config', JSON.stringify(STAFF_CONFIG));
        localStorage.setItem('chansee_workload_data', JSON.stringify(WORKLOAD_DATA));
        localStorage.setItem('chansee_kpi_history', JSON.stringify(KPI_HISTORY));
        if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) {
          CloudBaseSync.saveAll();
        }
        showToast('✅ 导入成功！客服配置+' + imported.staff + '条，工作量+' + imported.workload + '条，KPI历史+' + imported.kpi + '条');
        renderDashboard();
      } catch(err) {
        showToast('❌ 导入失败：' + err.message);
        console.error('导入错误:', err);
      }
    };
    reader.readAsArrayBuffer(file);
  };
  input.click();
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

            <td><span class="archive-tag archive-tag-tp">上级领导</span></td>

            <td>全部项目评估记录</td>

            <td>新增评估 · 评定打分 · 编辑评语 · 导出 · 导入 · 权限管理</td>

          </tr>

          <tr>

            <td><span class="archive-tag archive-tag-dp">项目经理</span></td>

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
  // 权限检查：超级管理员、管理员、客服总监可访问
  if (!currentUser) {
    return `<div class="empty-state"><div class="empty-icon">&#x1F512;</div><p>请先登录</p></div>`;
  }
  const _adminRoles = ["超级管理员", "管理员", "客服总监"];
  if (_adminRoles.indexOf(currentUser.role) === -1) {
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

  return `<div style="border-top:3px solid;border-image:linear-gradient(90deg,#0ABAB5,#3b82f6,#8b5cf6) 1;margin-bottom:20px;"></div>
    <div class="module-header">
    <div>
      <div class="module-title">&#x1F514; 系统用户管理</div>
      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">管理系统用户账号、角色权限、审批注册申请</div>
    </div>
    <div class="module-actions">
      <button class="btn btn-sm btn-primary" onclick="showAddUser()">&#xFF0B; 新增用户</button>
    </div>
  </div>

  <!-- 团队角色分布 -->
  <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:16px;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
      <span style="font-size:16px;">👥</span>
      <span style="font-size:13px;font-weight:600;color:#1e293b;">团队角色分布</span>
      <span style="font-size:11px;color:#94a3b8;margin-left:auto;">共 ${USERS.length} 人</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px;">
    ${ROLES.map(function(r){
      var count = USERS.filter(function(u){ return u.role === r; }).length;
      var pct = USERS.length > 0 ? Math.round(count / USERS.length * 100) : 0;
      var clrs = {'超级管理员':'#8b5cf6','管理员':'#3b82f6','客服总监':'#0b9b96','客服经理':'#f59e0b','客服主管':'#6366f1','项目伙伴':'#ec4899'};
      var c = clrs[r] || '#94a3b8';
      return '<div style="display:flex;align-items:center;gap:10px;">'
        +'<span style="width:72px;font-size:12px;color:#64748b;flex-shrink:0;">'+r+'</span>'
        +'<div style="flex:1;height:16px;background:#f1f5f9;border-radius:8px;overflow:hidden;">'
          +'<div style="height:100%;width:'+pct+'%;background:'+c+';border-radius:8px;transition:width 0.3s;"></div>'
        +'</div>'
        +'<span style="width:30px;font-size:12px;font-weight:600;color:#334155;text-align:right;">'+count+'</span>'
        +'<span style="width:32px;font-size:11px;color:#94a3b8;text-align:right;">'+pct+'%</span>'
      +'</div>';
    }).join('')}
    </div>
  </div>

  <!-- 筛选标签 -->
  <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
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
            <td><div style="display:flex;align-items:center;gap:8px;"><div style="width:32px;height:32px;border-radius:50%;background:var(--c-primary-light);color:var(--c-primary);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;">${u.name ? u.name.charAt(0) : '?'}</div><span style="font-weight:500;">${u.name || '未命名'}</span></div></td>
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
    if (!user.role) user.role = "新用户";
    saveUsers();
    showToast('已同意 '+user.name+' 的注册申请，账号已激活', 'success');
  } else if (action === "拒绝") {
    user.status = "已拒绝";
    user.approvedBy = currentUser ? currentUser.name : "admin";
    saveUsers();
    showToast('已拒绝 '+user.name+' 的注册申请', 'warning');
  } else if (action === "忽略") {
    showToast('已忽略 '+user.name+' 的注册申请，仍保留在待审核列表中', 'info');
    return;
  }
  renderModule("notifications");
}

function editUserRole(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  const roles = ROLES; // 统一使用系统权限管理中的角色列表
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
    showToast('已修改 '+user.name+' 的角色为：'+newRole, 'success');
    renderModule("notifications");
  }
  closeRoleModal();
}

function resetUserPassword(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  showPromptModal('重置 '+user.name+' 的密码', '请输入新密码（至少6位）：', '', function(newPwd){
    if (newPwd && newPwd.length >= 6) {
      user.password = newPwd;
      saveUsers();
      showToast('已重置 '+user.name+' 的密码', 'success');
    } else if (newPwd) {
      showToast('密码长度不足6位，请重新操作', 'error');
    }
  });
}

function disableUser(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  if (user.role === "超级管理员") { showToast('不能禁用超级管理员', 'error'); return; }
  showConfirmModal('确定要禁用用户 <strong>'+user.name+'</strong> 吗？', '确认禁用', function(){
    user.status = "已禁用";
    saveUsers();
    showToast('已禁用用户 '+user.name, 'warning');
    renderModule("notifications");
  });
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
  if (user.role === "超级管理员") { showToast('不能删除超级管理员', 'error'); return; }
  showConfirmModal('确定要删除用户 <strong>'+user.name+'</strong> 吗？<br><span style="color:#f5222d">此操作不可恢复！</span>', '确认删除', function(){
    const idx = USERS.findIndex(u => u.id === userId);
    if (idx > -1) USERS.splice(idx, 1);
    saveUsers();
    showToast('已删除用户 '+user.name, 'success');
    renderModule("notifications");
  });
}

function showAddUser(){
  if (!isAdmin()) { showToast('仅管理员可新增用户', 'error'); return; }
  var old = document.getElementById('adduser-modal-overlay');
  if(old) old.remove();
  var roleOptions = ROLES.map(function(r){
    return '<option value="'+r+'">'+r+'</option>';
  }).join('');
  var modalHtml = ''
  +'<div class="modal-overlay" id="adduser-modal-overlay" onclick="if(event.target===this)closeAddUserModal()">'
    +'<div class="modal-box" style="max-width:380px;border-radius:12px;box-shadow:0 12px 40px rgba(0,0,0,0.15);">'
      +'<div class="modal-header" style="padding:14px 18px;border-bottom:1px solid #f1f5f9;">'
        +'<div style="font-size:14px;font-weight:600;color:#1e293b;">+ 新增用户</div>'
        +'<button class="modal-close" onclick="closeAddUserModal()" style="font-size:20px;color:#94a3b8;border:none;background:none;cursor:pointer;">&times;</button>'
      +'</div>'
      +'<div class="modal-body" style="padding:18px;">'
        +'<div style="margin-bottom:12px;">'
          +'<label style="display:block;font-size:12px;color:#64748b;margin-bottom:4px;">用户姓名 *</label>'
          +'<input id="adduser-name" type="text" placeholder="请输入姓名" style="width:100%;padding:8px 10px;font-size:13px;border:1px solid #e2e8f0;border-radius:8px;outline:none;box-sizing:border-box;">'
        +'</div>'
        +'<div style="margin-bottom:12px;">'
          +'<label style="display:block;font-size:12px;color:#64748b;margin-bottom:4px;">登录账号 *</label>'
          +'<input id="adduser-username" type="text" placeholder="请输入账号" style="width:100%;padding:8px 10px;font-size:13px;border:1px solid #e2e8f0;border-radius:8px;outline:none;box-sizing:border-box;">'
        +'</div>'
        +'<div style="margin-bottom:12px;">'
          +'<label style="display:block;font-size:12px;color:#64748b;margin-bottom:4px;">初始密码 *</label>'
          +'<input id="adduser-password" type="text" placeholder="请输入密码" style="width:100%;padding:8px 10px;font-size:13px;border:1px solid #e2e8f0;border-radius:8px;outline:none;box-sizing:border-box;">'
        +'</div>'
        +'<div style="margin-bottom:4px;">'
          +'<label style="display:block;font-size:12px;color:#64748b;margin-bottom:4px;">角色</label>'
          +'<select id="adduser-role" style="width:100%;padding:8px 10px;font-size:13px;border:1px solid #e2e8f0;border-radius:8px;background:#fff;cursor:pointer;">'
            +roleOptions
          +'</select>'
        +'</div>'
      +'</div>'
      +'<div class="modal-footer" style="padding:12px 18px 16px;gap:8px;">'
        +'<button class="btn" onclick="closeAddUserModal()" style="padding:7px 16px;font-size:12px;border-radius:8px;background:#f8fafc;color:#64748b;border:1px solid #e2e8f0;">取消</button>'
        +'<button class="btn btn-primary" onclick="confirmAddUser()" style="padding:7px 16px;font-size:12px;border-radius:8px;">确定创建</button>'
      +'</div>'
    +'</div>'
  +'</div>';
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}
function closeAddUserModal(){
  var el = document.getElementById('adduser-modal-overlay');
  if(el) el.remove();
}
function confirmAddUser(){
  var name = document.getElementById('adduser-name').value.trim();
  var username = document.getElementById('adduser-username').value.trim();
  var password = document.getElementById('adduser-password').value.trim();
  var role = document.getElementById('adduser-role').value;
  if(!name || !username || !password){ showToast('请填写姓名、账号和密码', 'warning'); return; }
  if(USERS.some(function(u){ return u.username === username; })){ showToast('账号 "'+username+'" 已存在', 'error'); return; }
  var newUser = {
    id: "U" + String(USERS.length + 1).padStart(3, "0"),
    name: name, username: username, password: password, role: role,
    status: "已激活", registerTime: new Date().toISOString().slice(0, 10),
    phone: "", email: "", approvedBy: currentUser ? currentUser.name : "admin", remark: ""
  };
  USERS.push(newUser);
  saveUsers();
  closeAddUserModal();
  renderModule("notifications");
}


// ===== 系统数据管理 - 全局变量 =====
var _systemDataView = 'catalog';
var _systemDataTab = 'projects';
var _systemDataPage = 1;
var _systemDataPageSize = 20;
var _systemDataSortField = '';
var _systemDataSortDir = 'asc';
var _systemDataSearchKeyword = '';

// ===== 系统数据管理 - 数据表定义 =====
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
    desc: '客服团队的知识沉淀，包含SOP、话术、培训材料等。核心知识能量池页面依赖此表。',
    data: typeof KNOWLEDGE !== 'undefined' ? KNOWLEDGE : [],
    fields: [
      {key:'id', label:'ID', type:'text', required:true},
      {key:'title', label:'标题', type:'text', required:true},
      {key:'type', label:'类型', type:'select', options:['SOP','话术','培训材料','案例','其他']},
      {key:'permission', label:'权限', type:'select', options:['公开','仅PM','仅管理员']},
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
      {key:'date', label:'日期', type:'text'},
      {key:'status', label:'状态', type:'select', options:['已完成','进行中','已取消']},
      {key:'summary', label:'摘要', type:'textarea'}
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
  changelog: 'chansee_data_change_log'
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

function renderSystemData(){return _renderSystemData();}

// Placeholder - full implementation below
var _renderSystemData = function(){
  // 卡片目录视图
  if(_systemDataView === 'catalog'){
    var cardsHtml = '';
    var tables = Object.keys(SYSTEM_DATA_TABLES);
    for(var i=0; i<tables.length; i++){
      var t = SYSTEM_DATA_TABLES[tables[i]];
      var count = t.data ? t.data.length : 0;
      var bgClass = '';
      var accentColor = '';
      if(i%3===0) { bgClass = 'sd-card-clr1'; accentColor = '#0B9B96'; }
      else if(i%3===1) { bgClass = 'sd-card-clr2'; accentColor = '#3B82F6'; }
      else { bgClass = 'sd-card-clr3'; accentColor = '#8B5CF6'; }
      cardsHtml += ''
        +'<div class="sd-card" style="cursor:pointer;" onclick="goSystemDataDetail(\''+tables[i]+'\')">'
          +'<div style="height:4px;background:linear-gradient(90deg,'+accentColor+','+accentColor+'88);"></div>'
          +'<div class="sd-card-inner '+bgClass+'">'
            +'<div class="sd-card-icon">'+t.label.charAt(0)+t.label.charAt(1)+'</div>'
            +'<div class="sd-card-label">'+t.label.substring(2)+'</div>'
            +'<div class="sd-card-count">'+count+' 条记录</div>'
            +'<div class="sd-card-desc">'+(t.desc||'').substring(0,42)+'...</div>'
          +'</div>'
        +'</div>';
    }
    return ''
    +'<div class="module-header">'
      +'<div>'
        +'<div class="module-title">🗄️ 系统数据管理</div>'
        +'<div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">统一数据管理中心 · 所有数据的唯一入口与维护中心</div>'
      +'</div>'
    +'</div>'
    +'<div class="sd-cards-grid">'+cardsHtml+'</div>';
  }

  var tableDef = SYSTEM_DATA_TABLES[_systemDataTab];
  if(!tableDef) { _systemDataView='catalog'; return _renderSystemData(); }

  var isLog = _systemDataTab === 'changelog';
  var allData = tableDef.data || [];
  if (!Array.isArray(allData)) allData = [];
  var keyword = _systemDataSearchKeyword;
  var filteredData = keyword ? allData.filter(function(row) {return JSON.stringify(row).toLowerCase().indexOf(keyword.toLowerCase()) >= 0;}) : allData;
  var totalRecords = filteredData.length;
  var totalPages = Math.ceil(totalRecords / _systemDataPageSize);
  if (_systemDataPage > totalPages) _systemDataPage = Math.max(1, totalPages);
  var startIdx = (_systemDataPage - 1) * _systemDataPageSize;
  var pageData = filteredData.slice(startIdx, startIdx + _systemDataPageSize);

  var colDefs = {};
  if(_systemDataTab==='projects') colDefs={headers:['编号','名称','品牌','品类','类型','职场','负责人','状态'],keys:['id','name','brand','category','serviceMode','workplace','pm','status'],showCb:true};
  else if(_systemDataTab==='operations') colDefs={headers:['项目ID','工单量','满意度','响应时间','NPS'],keys:['projectId','ticketVol','csat','responseTime','nps'],showCb:true};
  else if(_systemDataTab==='issues') colDefs={headers:['编号','类别','项目','类型','优先级','责任人','状态'],keys:['id','category','projectName','type','priority','assignee','status'],showCb:true};
  else if(_systemDataTab==='knowledge') colDefs={headers:['ID','标题','类型','权限','浏览'],keys:['id','title','type','permission','views'],showCb:true};
  else if(_systemDataTab==='handovers') colDefs={headers:['ID','项目','原负责人','新负责人','日期','状态'],keys:['id','projectName','from','to','date','status'],showCb:true};
  else if(_systemDataTab==='kpi') colDefs={headers:['日期','项目ID','销售额(万)','成本(万)','费效比','目标达成率'],keys:['date','projectId','revenue','cost','profitRate','targetRate'],showCb:true};
  else if(_systemDataTab==='changelog') colDefs={headers:['时间','操作人','表名','记录ID','字段名','旧值','新值'],keys:['changedAt','changedBy','tableName','recordId','fieldName','oldValue','newValue'],showCb:false};

  var tableHtml = '';
  if(colDefs.headers){
    tableHtml += '<table class="sysdata-table"><thead><tr>';
    if(colDefs.showCb) tableHtml += '<th><input type="checkbox" onchange="toggleSelectAll(this)"></th>';
    for(var hi=0; hi<colDefs.headers.length; hi++) tableHtml += '<th>'+colDefs.headers[hi]+'</th>';
    if(colDefs.showCb) tableHtml += '<th>操作</th>';
    tableHtml += '</tr></thead><tbody>';
    for(var ri=0; ri<pageData.length; ri++){
      var row = pageData[ri]; var idx = startIdx+ri;
      tableHtml += '<tr>';
      if(colDefs.showCb) tableHtml += '<td><input type="checkbox" class="sd-row-cb" data-idx="'+idx+'"></td>';
      for(var ci=0; ci<colDefs.keys.length; ci++) tableHtml += '<td>'+(row[colDefs.keys[ci]]!=null?row[colDefs.keys[ci]]:'')+'</td>';
      if(colDefs.showCb) tableHtml += '<td><button class="sd-action-btn sd-action-btn-edit" onclick="editSystemDataRow('+idx+')">✏️ 编辑</button><button class="sd-action-btn sd-action-btn-delete" onclick="deleteSystemDataRow('+idx+')">🗑 删除</button></td>';
      tableHtml += '</tr>';
    }
    tableHtml += '</tbody></table>';
  } else if(_systemDataTab==='personnel'){
    tableHtml = '<div style="padding:20px;text-align:center;color:var(--c-text-3);">人员数据为聚合视图，请在对应功能页面中查看详情</div>';
  } else if(_systemDataTab==='sysconfig'){
    tableHtml = '<div style="padding:20px;text-align:center;color:var(--c-text-3);">系统配置为聚合视图，请在对应功能页面中查看详情</div>';
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
      +'<button class="btn btn-sm" onclick="exportSystemData()">导出</button>'
      +'<button class="btn btn-sm" onclick="importSystemData()">导入</button>'
    +'</div>'
  +'</div>'
  +'<div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;flex-wrap:wrap;">'
    +'<input type="text" id="sysdata-search" placeholder="搜索..." value="'+(keyword||'')+'" style="width:200px;padding:6px 10px;border:1px solid var(--c-border);border-radius:4px;font-size:12px;" onkeyup="searchSystemData(event)">'
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
function toggleSelectAll(cb) { var cbs=document.querySelectorAll('.sd-row-cb'); for(var i=0;i<cbs.length;i++) cbs[i].checked=cb.checked; }
function _saveSystemData(tableKey) { var lsKey = _SD_LS_MAP[tableKey]; var td = SYSTEM_DATA_TABLES[tableKey]; if(lsKey && td && td.data) try { localStorage.setItem(lsKey, JSON.stringify(td.data)); } catch(e){} }

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
  var td = SYSTEM_DATA_TABLES[tableKey]; if(!td||!td.fields) return; var rec = {};
  for(var i=0; i<td.fields.length; i++){ var f=td.fields[i], el=document.getElementById('sdf-'+f.key); if(el){ var v=el.value; if(f.type==='number') v=parseFloat(v)||0; rec[f.key]=v; } }
  if(editIdx>=0) td.data[editIdx]=rec; else td.data.push(rec); _saveSystemData(tableKey);
  var mod=document.getElementById('sd-form-modal'); if(mod) mod.remove(); renderModule('systemData');
};
function addSystemDataRow() { var td=SYSTEM_DATA_TABLES[_systemDataTab]; if(!td||!td.fields||td.fields.length===0){ alert('该表不支持新增'); return; } showSystemDataForm(_systemDataTab, null, td.fields); }
function editSystemDataRow(idx) { var td=SYSTEM_DATA_TABLES[_systemDataTab]; if(!td||!td.fields||td.fields.length===0){ alert('该表不支持编辑'); return; } var rec=td.data[idx]; if(!rec) return; showSystemDataForm(_systemDataTab, rec, td.fields, idx); }
function deleteSystemDataRow(idx) { if(!confirm('确定删除该条记录吗？')) return; var td=SYSTEM_DATA_TABLES[_systemDataTab]; if(!td) return; td.data.splice(idx,1); _saveSystemData(_systemDataTab); renderModule('systemData'); }
function batchDeleteSystemData() { var cbs=document.querySelectorAll('.sd-row-cb:checked'); if(cbs.length===0){ alert('请先勾选要删除的记录'); return; } if(!confirm('确定删除选中的 '+cbs.length+' 条记录吗？')) return; var td=SYSTEM_DATA_TABLES[_systemDataTab]; if(!td) return; var idxs=[]; for(var i=0;i<cbs.length;i++) idxs.push(parseInt(cbs[i].dataset.idx)); idxs.sort(function(a,b){return b-a;}); for(var j=0;j<idxs.length;j++) td.data.splice(idxs[j],1); _saveSystemData(_systemDataTab); renderModule('systemData'); }

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

function renderPermissions(){
  if (typeof ROLES === "undefined") {
    document.getElementById("module-content").innerHTML = '<div style="padding:40px;text-align:center;color:red;">错误：ROLES 未定义</div>';
    return;
  }
  if (typeof rolePermissions === "undefined") { rolePermissions = {}; }

  window._permSelectedRole = window._permSelectedRole || (ROLES.indexOf(currentRole) >= 0 ? currentRole : ROLES[0]);
  var selRole = window._permSelectedRole;
  var selPerms = rolePermissions[selRole] || {};
  // 安全兜底：如果选中角色无权限数据，从默认配置补充
  if (!selPerms || Object.keys(selPerms).length < 5){
    if (DEFAULT_PERMISSIONS[selRole]){
      selPerms = JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS[selRole]));
      rolePermissions[selRole] = selPerms;
      savePermissions();
    }
  }
  var groupOrder = ["project","collab","tools","system"];
  var actKeys = ["visible","view","edit","import","export","manage"];
  var actLabels = {visible:"可见", view:"查看", edit:"编辑", import:"导入", export:"导出", manage:"管理"};
  var actColors = {visible:"#10b981", view:"#3b82f6", edit:"#f59e0b", import:"#8b5cf6", export:"#ec4899", manage:"#ef4444"};

  var html = '\n<style>\n'+
'.perm-page{font-size:13px;}\n'+
'.perm-layout{display:flex;gap:16px;align-items:flex-start;}\n'+
'.perm-roles{width:180px;flex-shrink:0;background:var(--c-card);border-radius:8px;overflow:hidden;border:1px solid var(--c-border);}\n'+
'.perm-roles-title{font-size:12px;font-weight:600;color:var(--c-text-3);padding:12px 14px 8px;border-bottom:1px solid var(--c-border);display:flex;align-items:center;justify-content:space-between;}\n'+
'.perm-roles-title .add-role-btn{font-size:16px;cursor:pointer;color:#3b82f6;}\n'+
'.perm-role-item{padding:10px 14px;cursor:pointer;font-size:13px;color:var(--c-text-2);border-left:3px solid transparent;transition:all .15s;white-space:nowrap;display:flex;align-items:center;justify-content:space-between;}\n'+
'.perm-role-item:hover{background:rgba(59,130,246,.06);color:var(--c-text-1);}\n'+
'.perm-role-active{background:rgba(59,130,246,.08)!important;color:#2563eb!important;font-weight:600;border-left-color:#2563eb!important;}\n'+
'.perm-role-name{flex:1;}\n'+
'.perm-role-actions{display:none;gap:4px;}\n'+
'.perm-role-item:hover .perm-role-actions{display:flex;}\n'+
'.perm-role-action-btn{font-size:12px;cursor:pointer;color:#6b7280;}\n'+
'.perm-role-action-btn:hover{color:#3b82f6;}\n'+
'.perm-content{flex:1;min-width:0;}\n'+
'.perm-role-header{font-size:14px;font-weight:600;color:var(--c-text-1);margin-bottom:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;}\n'+
'.perm-copy-btn{font-size:12px;padding:4px 10px;background:#f3f4f6;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;color:#374151;}\n'+
'.perm-copy-btn:hover{background:#e5e7eb;}\n'+
'.perm-save-hint{font-size:11px;font-weight:400;color:#10b981;opacity:0;transition:opacity .3s;}\n'+
'.perm-save-hint.show{opacity:1;}\n'+
'.perm-affected-users{font-size:11px;color:#f59e0b;margin-top:8px;}\n'+
'.perm-group{margin-bottom:16px;}\n'+
'.perm-group-label{font-size:12px;font-weight:600;color:var(--c-text-3);padding:6px 0;margin-bottom:6px;border-bottom:1px dashed var(--c-border);text-transform:uppercase;letter-spacing:.5px;}\n'+
'.perm-mod-row{display:flex;align-items:center;padding:8px 12px;border-radius:6px;background:var(--c-card);border:1px solid var(--c-border);margin-bottom:4px;gap:12px;flex-wrap:wrap;}\n'+
'.perm-mod-name{width:130px;flex-shrink:0;font-size:12px;font-weight:500;color:var(--c-text-2);}\n'+
'.perm-mod-actions{display:flex;gap:4px;flex-wrap:wrap;}\n'+
'.perm-cb{display:inline-flex;align-items:center;gap:3px;padding:3px 7px;border-radius:4px;cursor:pointer;font-size:11px;border:1px solid var(--c-border);transition:all .15s;user-select:none;}\n'+
'.perm-cb-checked{background:#ecfdf5;border-color:#10b981;color:#059669;}\n'+
'.perm-cb-unchecked{background:transparent;color:var(--c-text-3);}\n'+
'.perm-cb-box{width:12px;height:12px;border-radius:2px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;}\n'+
'.perm-cb-checked .perm-cb-box{background:currentColor;border-color:currentColor;}\n'+
'.perm-cb-checked .perm-cb-box::after{content:"✓";color:#fff;font-size:8px;font-weight:700;line-height:1;}\n'+
'.perm-mod-scope{margin-left:auto;display:flex;align-items:center;gap:6px;flex-shrink:0;}\n'+
'.perm-scope-label{font-size:11px;color:var(--c-text-3);}\n'+
'.perm-scope-opt{font-size:11px;padding:3px 8px;border-radius:4px;cursor:pointer;border:1px solid var(--c-border);transition:all .15s;user-select:none;}\n'+
'.perm-scope-active{background:#eff6ff;border-color:#3b82f6;color:#2563eb;font-weight:500;}\n'+
'.perm-legend{margin-top:16px;padding:10px 14px;border-radius:6px;background:var(--c-bg);border:1px solid var(--c-border);display:flex;flex-wrap:wrap;gap:10px;align-items:center;font-size:11px;color:var(--c-text-3);}\n'+
'.perm-legend-item{display:inline-flex;align-items:center;gap:4px;}\n'+
'.perm-legend-dot{width:8px;height:8px;border-radius:50%;display:inline-block;flex-shrink:0;}\n'+
'</style>\n'+
'<div class="perm-page">\n'+
'  <div class="module-header">\n'+
'    <div>\n'+
'      <div class="module-title">⚙️ 系统权限管理</div>\n'+
'      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">为'+ROLES.length+'个角色配置各功能模块的访问权限与操作范围</div>\n'+
'      <div style="margin-top:8px;padding:6px 10px;background:linear-gradient(135deg,#eff6ff,#ecfdf5);border-radius:6px;font-size:12px;color:#2563eb;display:inline-block;">'+
'        👤 您当前的登录角色：<b>'+currentRole+'</b> &nbsp;|&nbsp; 点击左侧角色查看/编辑其权限，勾选操作框后自动保存'+
'      </div>\n'+
'    </div>\n'+
'    <div class="module-actions">\n'+
'      <button class="btn btn-sm" onclick="exportPermissions()">导出配置</button>\n'+
'      <button class="btn btn-primary btn-sm" onclick="resetPermissions()">恢复默认</button>\n'+
'    </div>\n'+
'  </div>\n'+
'  <div class="perm-layout">\n'+
'    <div class="perm-roles">\n'+
'      <div class="perm-roles-title">👥 角色列表 <span class="add-role-btn" onclick="addRole()" title="新增角色">＋</span></div>\n'+
''+ROLES.map(function(r){
  var active=r===selRole?' perm-role-active':'';
  var isMyRole=r===currentRole?' <span style="font-size:10px;color:#10b981;">(我)</span>':'';
  var isBuiltIn=isBuiltInRole(r);
  var actions=isBuiltIn?'':('<span class="perm-role-actions">'+
    '<span class="perm-role-action-btn" onclick="event.stopPropagation();editRole(\''+r+'\')" title="编辑">✏️</span>'+
    '<span class="perm-role-action-btn" onclick="event.stopPropagation();deleteRole(\''+r+'\')" title="删除">🗑️</span>'+
    '</span>');
  return'      <div class="perm-role-item'+active+'" onclick="selectPermRole(\''+r+'\')"><span class="perm-role-name">'+r+isMyRole+'</span>'+actions+'</div>\n';
}).join('')+
'    </div>\n'+
'    <div class="perm-content">\n'+
'      <div class="perm-role-header">\n'+
'        当前角色「'+selRole+'」的权限配置\n'+
'        <button class="perm-copy-btn" onclick="copyPermissionsFrom()">📋 从其他角色复制权限</button>\n'+
'        <span class="perm-save-hint" id="perm-save-hint">✅ 已保存</span>\n'+
'      </div>\n'+
'      <div class="perm-affected-users" id="perm-affected-users"></div>\n'+
''+groupOrder.map(function(gid){var grp=MODULE_GROUPS[gid];return'      <div class="perm-group">\n'+
'        <div class="perm-group-label">'+grp.label+'</div>\n'+
''+grp.keys.map(function(mk){var mn=MODULE_NAMES[mk];var ma=MODULE_ACTIONS[mk];var mp=selPerms[mk];if(typeof mp==='string'){if(mp==='write')mp={visible:true,view:true,edit:true,import:false,export:true,manage:false,scope:'all'};else if(mp==='read')mp={visible:true,view:true,edit:false,import:false,export:true,manage:false,scope:'all'};else mp={visible:false,view:false,edit:false,import:false,export:false,manage:false,scope:'all'};}
// 只显示支持的操作选项（隐藏不支持的）
var applicableActions=actKeys.filter(function(ak){return ma[ak]===1;});
return'        <div class="perm-mod-row">\n'+
'          <div class="perm-mod-name">'+mn+'</div>\n'+
'          <div class="perm-mod-actions">\n'+
''+applicableActions.map(function(ak){var checked=mp[ak]===true;var cls=checked?'perm-cb-checked':'perm-cb-unchecked';return'            <label class="perm-cb '+cls+'" title="'+actLabels[ak]+'"><input type="checkbox" '+(checked?' checked':'')+' onchange="togglePermAction(\''+selRole+'\',\''+mk+'\',\''+ak+'\',this.checked)" style="display:none;"><span class="perm-cb-box"></span><span class="perm-cb-label">'+actLabels[ak]+'</span></label>\n';}).join('')+
'          </div>\n'+
''+(ma.scope===1?'          <div class="perm-mod-scope">\n'+
'            <span class="perm-scope-label">数据范围：</span>\n'+
'            <label class="perm-scope-opt '+(mp.scope==='all'||!mp.scope?'perm-scope-active':'')+'"><input type="radio" name="scope_'+mk+'" value="all" '+(mp.scope==='all'||!mp.scope?'checked':'')+' onchange="togglePermScope(\''+selRole+'\',\''+mk+'\',\'all\')" style="display:none;"><span>全部项目</span></label>\n'+
'            <label class="perm-scope-opt '+(mp.scope==='own'?'perm-scope-active':'')+'"><input type="radio" name="scope_'+mk+'" value="own" '+(mp.scope==='own'?'checked':'')+' onchange="togglePermScope(\''+selRole+'\',\''+mk+'\',\'own\')" style="display:none;"><span>仅自己项目</span></label>\n'+
'          </div>\n':'')+
'        </div>\n';}).join('')+
'      </div>\n';}).join('')+
'      <div class="perm-legend">\n'+
'        <span style="font-weight:600;color:var(--c-text-2);">💡 操作说明：</span>\n'+
''+actKeys.map(function(ak){return'        <span class="perm-legend-item"><span class="perm-legend-dot" style="background:'+actColors[ak]+'"></span>'+actLabels[ak]+'</span>\n';}).join('')+
'      </div>\n'+
'    </div>\n'+
'  </div>\n'+
'</div>';

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
    showExportDialog(headers, rows, `项目难度评估_${new Date().toISOString().slice(0,10)}`, '项目难度评估');
  } catch(e) {
    alert('导出失败：' + e.message);
  }
}
// 保存权限到 localStorage
function savePermissions() {
  try { localStorage.setItem("chansee_permissions", JSON.stringify(rolePermissions)); } catch(e) {}
}

// 选中角色，重新渲染
function selectPermRole(role) {
  window._permSelectedRole = role;
  renderModule("permissions");
  
  // 延迟执行，等待渲染完成
  setTimeout(function() {
    updateAffectedUsers(role);
  }, 100);
}

// 切换某个操作的勾选状态
function togglePermAction(role, module, action, checked) {
  if (!rolePermissions[role]) rolePermissions[role] = {};
  var mp = rolePermissions[role][module];
  if (!mp || typeof mp === 'string') {
    if (typeof mp === 'string') {
      if (mp === 'write') mp = {visible:true,view:true,edit:true,import:false,export:true,manage:false,scope:'all'};
      else if (mp === 'read') mp = {visible:true,view:true,edit:false,import:false,export:true,manage:false,scope:'all'};
      else mp = {visible:false,view:false,edit:false,import:false,export:false,manage:false,scope:'all'};
    } else {
      mp = {visible:false,view:false,edit:false,import:false,export:false,manage:false,scope:'all'};
    }
  }
  mp[action] = checked;
  // 如果关闭 visible，则自动关闭所有其他操作
  if (action === 'visible' && !checked) {
    mp.view = false; mp.edit = false; mp.import = false; mp.export = false; mp.manage = false;
  }
  // 如果开启 visible，则自动开启 view
  if (action === 'visible' && checked) { mp.view = true; }
  // 如果开启 edit/import/export/manage，自动确保 visible 和 view 开启
  if ((action === 'edit' || action === 'import' || action === 'export' || action === 'manage') && checked) {
    mp.visible = true; mp.view = true;
  }
  rolePermissions[role][module] = mp;
  savePermissions();
  var hint = document.getElementById('perm-save-hint');
  if (hint) { hint.classList.add('show'); setTimeout(function(){ hint.classList.remove('show'); }, 2000); }
  
  // 显示受影响的用户数
  updateAffectedUsers(role);
}

// 切换数据范围（全部/仅自己）
function togglePermScope(role, module, scope) {
  if (!rolePermissions[role]) rolePermissions[role] = {};
  var mp = rolePermissions[role][module];
  if (!mp || typeof mp === 'string') {
    if (typeof mp === 'string') {
      if (mp === 'write') mp = {visible:true,view:true,edit:true,import:false,export:true,manage:false,scope:'all'};
      else if (mp === 'read') mp = {visible:true,view:true,edit:false,import:false,export:true,manage:false,scope:'all'};
      else mp = {visible:false,view:false,edit:false,import:false,export:false,manage:false,scope:'all'};
    } else {
      mp = {visible:false,view:false,edit:false,import:false,export:false,manage:false,scope:'all'};
    }
  }
  mp.scope = scope;
  rolePermissions[role][module] = mp;
  savePermissions();
  var hint = document.getElementById('perm-save-hint');
  if (hint) { hint.classList.add('show'); setTimeout(function(){ hint.classList.remove('show'); }, 2000); }
}

// 导入权限配置
function importPermissions() {
  var input = document.createElement("input");
  input.type = "file"; input.accept = ".json";
  input.onchange = function() {
    var file = input.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e) {
      try {
        var data = JSON.parse(e.target.result);
        var valid = true;
        ROLES.forEach(function(r) { if (!data[r]) valid = false; });
        if (!valid) { alert("配置文件格式不正确，缺少部分角色数据"); return; }
        rolePermissions = data;
        savePermissions();
        renderModule("permissions");
        alert("权限配置导入成功！");
      } catch(ex) { alert("文件解析失败：" + ex.message); }
    };
    reader.readAsText(file);
  };
  input.click();
}

// 恢复默认权限
function resetPermissions() {
  if (confirm("确定要恢复默认权限配置吗？当前自定义配置将丢失。")) {
    rolePermissions = JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS));
    savePermissions();
    renderModule("permissions");
    alert("已恢复默认权限配置");
  }
}

// 导出权限配置
function exportPermissions() {
  var json = JSON.stringify(rolePermissions, null, 2);
  var blob = new Blob([json], {type:"application/json"});
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url; a.download = "chansee_permissions.json";
  a.click();
  URL.revokeObjectURL(url);
}

// ===== 角色管理功能 =====

// 新增角色
function addRole() {
  var roleName = prompt("请输入新角色名称：");
  if (!roleName || roleName.trim() === "") {
    alert("角色名称不能为空！");
    return;
  }
  roleName = roleName.trim();
  
  // 检查角色是否已存在
  if (ROLES.indexOf(roleName) >= 0) {
    alert("角色「" + roleName + "」已存在！");
    return;
  }
  
  // 添加角色
  ROLES.push(roleName);
  saveRoles();
  
  // 初始化权限（默认使用"项目伙伴"的权限）
  if (!rolePermissions[roleName]) {
    rolePermissions[roleName] = JSON.parse(JSON.stringify(rolePermissions["项目伙伴"] || DEFAULT_PERMISSIONS["项目伙伴"]));
    savePermissions();
  }
  
  // 重新渲染
  window._permSelectedRole = roleName;
  renderModule("permissions");
  alert("角色「" + roleName + "」已添加成功！");
}

// 编辑角色
function editRole(oldName) {
  if (isBuiltInRole(oldName)) {
    alert("内置角色不能编辑名称！");
    return;
  }
  
  var newName = prompt("请输入新的角色名称：", oldName);
  if (!newName || newName.trim() === "") {
    alert("角色名称不能为空！");
    return;
  }
  newName = newName.trim();
  
  // 检查新名称是否已存在（排除自身）
  if (newName !== oldName && ROLES.indexOf(newName) >= 0) {
    alert("角色「" + newName + "」已存在！");
    return;
  }
  
  // 更新角色列表
  var idx = ROLES.indexOf(oldName);
  if (idx >= 0) {
    ROLES[idx] = newName;
    saveRoles();
    
    // 更新权限配置
    if (rolePermissions[oldName]) {
      rolePermissions[newName] = rolePermissions[oldName];
      delete rolePermissions[oldName];
      savePermissions();
    }
    
    // 重新渲染
    window._permSelectedRole = newName;
    renderModule("permissions");
    alert("角色已重命名为「" + newName + "」！");
  }
}

// 删除角色
function deleteRole(roleName) {
  if (isBuiltInRole(roleName)) {
    alert("内置角色不能删除！");
    return;
  }
  
  // 检查是否有用户使用此角色
  var affectedUsers = [];
  try {
    var users = JSON.parse(localStorage.getItem("chansee_users") || "[]");
    for (var i = 0; i < users.length; i++) {
      if (users[i].role === roleName) {
        affectedUsers.push(users[i].username || users[i].name || "未知用户");
      }
    }
  } catch(e) {}
  
  var confirmMsg = "确定要删除角色「" + roleName + "」吗？";
  if (affectedUsers.length > 0) {
    confirmMsg += "\n\n⚠️ 警告：此操作将影响 " + affectedUsers.length + " 个用户：\n" + affectedUsers.join("、");
    confirmMsg += "\n\n这些用户的角色将被设置为“项目伙伴”。";
  }
  
  if (!confirm(confirmMsg)) {
    return;
  }
  
  // 删除角色
  var idx = ROLES.indexOf(roleName);
  if (idx >= 0) {
    ROLES.splice(idx, 1);
    saveRoles();
    
    // 删除权限配置
    delete rolePermissions[roleName];
    savePermissions();
    
    // 更新受影响的用户
    if (affectedUsers.length > 0) {
      try {
        var users = JSON.parse(localStorage.getItem("chansee_users") || "[]");
        for (var i = 0; i < users.length; i++) {
          if (users[i].role === roleName) {
            users[i].role = "项目伙伴";
          }
        }
        localStorage.setItem("chansee_users", JSON.stringify(users));
      } catch(e) {}
    }
    
    // 重新渲染
    window._permSelectedRole = ROLES[0] || "项目伙伴";
    renderModule("permissions");
    alert("角色「" + roleName + "」已删除！");
  }
}

// 从其他角色复制权限
function copyPermissionsFrom() {
  var selRole = window._permSelectedRole;
  if (!selRole) {
    alert("请先选择要配置的角色！");
    return;
  }
  
  // 排除当前角色
  var otherRoles = ROLES.filter(function(r) { return r !== selRole; });
  if (otherRoles.length === 0) {
    alert("没有其他角色可以复制！");
    return;
  }
  
  var sourceRole = prompt("请选择要复制权限的来源角色：\n\n" + otherRoles.map(function(r, i) { return (i+1) + ". " + r; }).join("\n") + "\n\n请输入角色名称：");
  
  if (!sourceRole || sourceRole.trim() === "") {
    return;
  }
  sourceRole = sourceRole.trim();
  
  if (otherRoles.indexOf(sourceRole) < 0) {
    alert("角色「" + sourceRole + "」不存在！");
    return;
  }
  
  if (!confirm("确定要从角色「" + sourceRole + "」复制权限到「" + selRole + "」吗？\n\n当前「" + selRole + "」的权限配置将被覆盖！")) {
    return;
  }
  
  // 复制权限
  if (rolePermissions[sourceRole]) {
    rolePermissions[selRole] = JSON.parse(JSON.stringify(rolePermissions[sourceRole]));
    savePermissions();
    
    // 重新渲染
    renderModule("permissions");
    alert("已成功从「" + sourceRole + "」复制权限到「" + selRole + "」！");
  } else {
    alert("来源角色没有权限配置！");
  }
}

// 显示受影响的用户数
function updateAffectedUsers(role) {
  if (!role) return;
  
  var affectedUsers = [];
  try {
    var users = JSON.parse(localStorage.getItem("chansee_users") || "[]");
    for (var i = 0; i < users.length; i++) {
      if (users[i].role === role) {
        affectedUsers.push(users[i].username || users[i].name || "未知用户");
      }
    }
  } catch(e) {}
  
  var hint = document.getElementById("perm-affected-users");
  if (hint) {
    if (affectedUsers.length > 0) {
      hint.innerHTML = "⚠️ 此修改将影响 " + affectedUsers.length + " 个用户：" + affectedUsers.join("、");
      hint.style.display = "block";
    } else {
      hint.innerHTML = "";
      hint.style.display = "none";
    }
  }
}

// ===== 权限检查辅助函数 =====

// 检查当前用户是否有某个模块的某个操作权限
function hasPermission(module, action) {
  if (!currentRole || !rolePermissions[currentRole]) {
    return false;
  }
  var mp = rolePermissions[currentRole][module];
  if (!mp) return false;
  return mp[action] === true;
}

// 检查当前用户是否可见某个模块
function canViewModule(module) {
  return hasPermission(module, "visible");
}

// 根据当前用户角色过滤导航菜单（隐藏无权限的模块）
function filterNavByPermissions() {
  // 超级管理员可以看到所有模块
  if (currentRole === "超级管理员") {
    // 显示所有导航项
    document.querySelectorAll('.nav-item').forEach(function(item) {
      item.style.display = "";
    });
    return;
  }
  
  // 其他角色：根据权限隐藏模块
  MODULE_KEYS.forEach(function(mk) {
    var navItems = document.querySelectorAll('.nav-item[data-module="' + mk + '"]');
    var canView = canViewModule(mk);
    
    navItems.forEach(function(item) {
      if (canView) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
  
  // 如果当前模块不可见，切换到第一个可见的模块
  if (!canViewModule(currentModule)) {
    var firstVisibleModule = MODULE_KEYS.find(function(mk) { return canViewModule(mk); });
    if (firstVisibleModule) {
      currentModule = firstVisibleModule;
      renderModule(currentModule);
    }
  }
}

function exportSystemData() {
  var backup = {};
  try {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key && key.indexOf('chansee_') === 0) {
        try { backup[key] = JSON.parse(localStorage.getItem(key)); } catch(e) { backup[key] = localStorage.getItem(key); }
      }
    }
  } catch(e) {}
  var json = JSON.stringify(backup, null, 2);
  var blob = new Blob([json], {type:"application/json"});
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url; a.download = "chansee_backup_" + new Date().toISOString().slice(0,10) + ".json";
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

    <!-- 职场 -->
    <div style="${rowStyle}" id="profile-brand-row">
      <div style="${labelStyle}" class="profile-field-label">职场</div>
      <div style="${valueStyle}" id="profile-brand-value">${(u.workplace || userInDb.workplace || "Chanseen CloudHub").replace(/,/g,'/')}</div>
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

  // 最近登录（动态渲染真实记录）
  var loginLogs = [];
  try {
    loginLogs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]');
  } catch(e) {}
  
  // 【兜底】如果没有记录但当前是登录状态，强制创建一条当前登录记录
  if (loginLogs.length === 0 && currentUser) {
    var info = detectDeviceInfo();
    var sid = sessionStorage.getItem('chansee_session_id') || ('sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9));
    loginLogs.push({
      _id: 'login_' + Date.now(),
      username: currentUser.username || 'admin',
      os: info.os,
      device: info.device,
      status: '登录成功',
      loginTime: new Date().toISOString(),
      sessionId: sid
    });
    try { localStorage.setItem('chansee_login_logs', JSON.stringify(loginLogs)); } catch(e) {}
  }
  
  html += '<div class="card profile-card">' +
    '<div class="profile-card-title">' +
      '<span class="profile-card-icon">📍</span>最近登录' +
    '</div>';
  
  if (loginLogs.length === 0) {
    html += '<div style="text-align:center;color:#94a3b8;padding:20px 0;font-size:13px;">暂无登录记录</div>';
  } else {
    html += '<table class="login-records-table">' +
      '<thead><tr>' +
        '<th>时间</th>' +
        '<th>设备</th>' +
        '<th>操作系统</th>' +
        '<th>状态</th>' +
      '</tr></thead><tbody>';
    
    for (var li = 0; li < loginLogs.length && li < 5; li++) {
      var log = loginLogs[li];
      var deviceLabel = log.device === 'mobile' ? '手机' : (log.device === 'tablet' ? '平板' : 'PC');
      var deviceIcon = log.device === 'mobile' ? '📱' : (log.device === 'tablet' ? '📟' : '🖥️');
      var timeStr = log.loginTime ? new Date(log.loginTime).toLocaleString('zh-CN') : '--';
      var statusLabel = log.status || '登录成功';
      var statusClass = statusLabel === '登录成功' ? 'status-success' : 'status-fail';
      
      html += '<tr>' +
        '<td class="rec-time">' + timeStr + '</td>' +
        '<td class="rec-device">' + deviceIcon + ' ' + deviceLabel + '</td>' +
        '<td class="rec-os">' + log.os + '</td>' +
        '<td class="rec-status"><span class="' + statusClass + '">' + statusLabel + '</span></td>' +
      '</tr>';
    }
    
    html += '</tbody></table>';
  }
  
  html += '</div>';

  html += `</div>`; // 右侧结束
  html += `</div>`; // 总容器结束

  return html;
}

// ===== 浏览器/系统/设备检测 =====
function detectDeviceInfo() {
  var ua = navigator.userAgent || '';
  var browser = '未知浏览器';
  var os = '未知系统';
  var device = 'desktop';

  // 检测浏览器
  if (ua.indexOf('QQBrowser') !== -1 || ua.indexOf('QQ浏览器') !== -1) {
    browser = 'QQ浏览器';
  } else if (ua.indexOf('MicroMessenger') !== -1 || ua.indexOf('WeChat') !== -1) {
    browser = '微信浏览器';
  } else if (ua.indexOf('Edg') !== -1) {
    browser = 'Edge';
  } else if (ua.indexOf('Chrome') !== -1 && ua.indexOf('Safari') !== -1) {
    browser = 'Chrome';
  } else if (ua.indexOf('Firefox') !== -1) {
    browser = 'Firefox';
  } else if (ua.indexOf('Safari') !== -1) {
    browser = 'Safari';
  } else if (ua.indexOf('Opera') !== -1 || ua.indexOf('OPR') !== -1) {
    browser = 'Opera';
  }

  // 检测操作系统（HarmonyOS优先，因为其UA可能同时包含Android/Linux）
  var isHarmonyOS = false;
  if (ua.indexOf('HarmonyOS') !== -1 || ua.indexOf('OpenHarmony') !== -1) {
    os = 'HarmonyOS';
    device = 'mobile';
    isHarmonyOS = true;
  } else if (ua.indexOf('iPhone') !== -1 || ua.indexOf('iPad') !== -1) {
    os = 'iOS';
    device = 'mobile';
  } else if (ua.indexOf('Android') !== -1) {
    os = 'Android';
    device = 'mobile';
  } else if (ua.indexOf('Windows NT 10') !== -1 || ua.indexOf('Windows NT 11') !== -1 || ua.indexOf('Windows NT 6') !== -1) {
    os = 'Windows';
  } else if (ua.indexOf('Windows') !== -1) {
    os = 'Windows';
  } else if (ua.indexOf('Mac OS X') !== -1 || ua.indexOf('Macintosh') !== -1 || ua.indexOf('MacIntel') !== -1) {
    os = 'macOS';
  } else if (ua.indexOf('Linux') !== -1) {
    // Linux且含华为/荣耀关键词 → 鸿蒙PC
    if (ua.indexOf('HUAWEI') !== -1 || ua.indexOf('honor') !== -1 || ua.indexOf('Harmony') !== -1) {
      os = 'HarmonyOS';
      device = 'desktop';
      isHarmonyOS = true;
    } else {
      os = 'Linux';
    }
  }

  // 补充设备类型判断
  if (!isHarmonyOS && window.innerWidth <= 768) {
    device = 'mobile';
  }
  if ((os === 'iOS' || os === 'Android' || os === 'HarmonyOS') && window.innerWidth > 768 && window.innerWidth <= 1024) {
    device = 'tablet';
  }
  // iPad特殊处理（iPad上Safari UA不含"iPad"，用屏幕比例判断）
  if (os === 'iOS' && navigator.maxTouchPoints > 0) {
    device = 'mobile';
    if (window.innerWidth >= 768) device = 'tablet';
  }

  return { browser: browser, os: os, device: device };
}

// ===== 记录登录信息 =====
function recordLogin() {
  try {
    var username = '';
    var authStr = localStorage.getItem('chanseen_auth');
    if (authStr) {
      var auth = JSON.parse(authStr);
      username = auth.user?.username || auth.user?.name || '';
    }
    // 如果 chanseen_auth 取不到用户名，从 currentUser 取
    if (!username && typeof currentUser !== 'undefined' && currentUser) {
      username = currentUser.username || currentUser.name || 'admin';
    }
    // 还没取到就用兜底
    if (!username) username = 'admin';

    var info = detectDeviceInfo();

    // 生成唯一会话ID（存在sessionStorage，页面关闭就失效）
    var sessionId = sessionStorage.getItem('chansee_session_id');
    if (!sessionId) {
      sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('chansee_session_id', sessionId);
    }

    // === 去重：同一sessionId在5分钟内不重复记录（防止刷新页面重复写入）===
    var existingLogs = [];
    try { existingLogs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]'); } catch(e) {}
    var nowTime = Date.now();
    for (var ei = 0; ei < existingLogs.length; ei++) {
      if (existingLogs[ei].sessionId === sessionId) {
        var logTime = new Date(existingLogs[ei].loginTime).getTime();
        if ((nowTime - logTime) < 5 * 60 * 1000) {
          // 5分钟内有同sessionId的记录，跳过不写
          return;
        }
      }
    }

    var loginRecord = {
      _id: 'login_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      username: username,
      browser: info.browser,
      os: info.os,
      device: info.device,
      status: '登录成功',
      loginTime: new Date().toISOString(),
      sessionId: sessionId,
      forceLogout: false
    };

    // 保存到 localStorage（login_logs 集合）
    var logs = [];
    try {
      logs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]');
    } catch(e) {}
    logs.unshift(loginRecord);  // 最新的在前面
    // 只保留最近20条
    if (logs.length > 20) logs = logs.slice(0, 20);
    localStorage.setItem('chansee_login_logs', JSON.stringify(logs));

    // 同步到云端
    if (window.CloudBaseSync) {
      try { window.CloudBaseSync.saveAll(); } catch(e) {}
    }

    // 同时把当前 sessionId 存到 chansee_current_session，用于"当前在线"判断
    localStorage.setItem('chansee_current_session', sessionId);
  } catch(e) {
    console.warn('[登录记录] 保存失败：', e);
  }
}

// ===== 检查是否被强制退出 =====
function checkForceLogout() {
  try {
    var sessionId = sessionStorage.getItem('chansee_session_id');
    if (!sessionId) return;
    var logs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]');
    var myLog = logs.find(function(l) { return l.sessionId === sessionId; });
    if (myLog && myLog.forceLogout) {
      // 被强制退出！清除登录状态，跳回登录页
      localStorage.removeItem('chanseen_auth');
      sessionStorage.removeItem('chansee_session_id');
      localStorage.removeItem('chansee_current_session');
      alert('您的账号已在其他设备被强制退出登录。');
      location.reload();
    }
  } catch(e) {}
}

// 每隔60秒检查一次是否被强制退出
setInterval(function() {
  if (typeof currentUser !== 'undefined' && currentUser && currentUser.id) {
    checkForceLogout();
  }
}, 60000);

// ===== 强制退出某个会话（管理员功能）=====
function forceLogoutSession(sessionId) {
  if (!sessionId) return;
  try {
    var logs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]');
    for (var i = 0; i < logs.length; i++) {
      if (logs[i].sessionId === sessionId) {
        logs[i].forceLogout = true;
        break;
      }
    }
    localStorage.setItem('chansee_login_logs', JSON.stringify(logs));
    // 同步到云端
    if (window.CloudBaseSync) {
      try { window.CloudBaseSync.saveAll(); } catch(e) {}
    }
    showToast('已强制退出该设备');
    // 重新渲染个人设置页面
    if (typeof renderProfile === 'function') {
      document.getElementById('app-content').innerHTML = renderProfile();
    }
  } catch(e) {
    console.warn('[强制退出] 操作失败：', e);
  }
}
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
  // 多选职场弹窗
  var workplaces = ['济南','淄博','杭州','无锡'];
  var currentVal = document.getElementById("profile-brand-value");
  if (!currentVal) return;
  var selected = (currentUser.workplace || '').split(',').filter(Boolean);
  if (selected.length === 0) selected = ['济南'];
  var html = '<div style="display:flex;flex-direction:column;gap:10px;">';
  workplaces.forEach(function(wp) {
    var checked = selected.indexOf(wp) !== -1 ? 'checked' : '';
    html += '<label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:14px;color:#334155;padding:6px 0;">';
    html += '<input type="checkbox" value="' + wp + '" ' + checked + ' style="width:18px;height:18px;accent-color:#0ABAB5;">';
    html += wp;
    html += '</label>';
  });
  html += '</div>';
  html += '<div style="display:flex;gap:10px;margin-top:20px;justify-content:flex-end;">';
  html += '<button class="btn" onclick="closeWorkplaceModal()" style="padding:8px 16px;">取消</button>';
  html += '<button class="btn btn-primary" onclick="saveProfileWorkplace()" style="padding:8px 16px;">确定</button>';
  html += '</div>';
  
  document.getElementById('modal-title').textContent = '选择职场';
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal-overlay').classList.remove('hidden');
  window._workplaceSelected = selected;
}
function closeWorkplaceModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}
function saveProfileWorkplace() {
  var cbs = document.querySelectorAll('#modal-body input[type=checkbox]:checked');
  var val = [];
  cbs.forEach(function(cb) { val.push(cb.value); });
  val = val.join(',');
  if (currentUser) currentUser.workplace = val;
  // 同步更新 USERS 数组
  var u = USERS.find(function(uu){ return uu.id === currentUser.id; });
  if (u) u.workplace = val;
  persistCurrentUser();
  saveUsers();
  renderModule("profile");
  showToast("职场修改成功");
  closeWorkplaceModal();
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
// ===== 数据管理功能 =====
function openDataManager() {
  var tabs = ['客服配置', '工作量', 'KPI历史'];
  var html = '<div style="display:flex;gap:10px;margin-bottom:16px;">';
  tabs.forEach(function(tab, i) {
    html += '<button class="btn btn-sm ' + (i === 0 ? 'btn-primary' : '') + '" onclick="switchDataTab(' + i + ')">' + tab + '</button>';
  });
  html += '</div>';
  html += '<div id="data-manager-content"></div>';
  var overlay = document.getElementById('modal-overlay');
  var titleEl = document.getElementById('modal-title');
  var body = document.getElementById('modal-body');
  if (overlay && titleEl && body) {
    titleEl.textContent = '数据管理';
    body.innerHTML = html;
    overlay.classList.remove('hidden');
  }
  switchDataTab(0);
}

function switchDataTab(tabIdx) {
  window.__dataTab = tabIdx;
  var html = '';
  if (tabIdx === 0) {
    html += '<table style="width:100%;border-collapse:collapse;"><tr style="background:var(--c-bg-2);"><th style="padding:6px;border:1px solid var(--c-border);">角色</th><th style="padding:6px;border:1px solid var(--c-border);">人数</th><th style="padding:6px;border:1px solid var(--c-border);">占比(%)</th><th style="padding:6px;border:1px solid var(--c-border);">操作</th></tr>';
    STAFF_CONFIG.forEach(function(item, idx) {
      html += '<tr>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="role" value="' + item.role + '" onchange="updateStaffField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:80px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="count" value="' + item.count + '" onchange="updateStaffField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:60px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="pct" value="' + item.pct + '" onchange="updateStaffField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:60px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><button class="btn btn-sm" onclick="deleteStaffItem(' + idx + ')" style="color:#FF6B6B;">删除</button></td>';
      html += '</tr>';
    });
    html += '</table>';
    html += '<button class="btn btn-sm btn-primary" onclick="addStaffItem()" style="margin-top:10px;">+ 新增行</button>';
  } else if (tabIdx === 1) {
    html += '<table style="width:100%;border-collapse:collapse;"><tr style="background:var(--c-bg-2);"><th style="padding:6px;border:1px solid var(--c-border);">工作类型</th><th style="padding:6px;border:1px solid var(--c-border);">数量</th><th style="padding:6px;border:1px solid var(--c-border);">占比(%)</th><th style="padding:6px;border:1px solid var(--c-border);">操作</th></tr>';
    WORKLOAD_DATA.forEach(function(item, idx) {
      html += '<tr>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="name" value="' + item.name + '" onchange="updateWorkloadField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:80px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="count" value="' + item.count + '" onchange="updateWorkloadField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:60px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="ratio" value="' + item.ratio + '" onchange="updateWorkloadField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:60px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><button class="btn btn-sm" onclick="deleteWorkloadItem(' + idx + ')" style="color:#FF6B6B;">删除</button></td>';
      html += '</tr>';
    });
    html += '</table>';
    html += '<button class="btn btn-sm btn-primary" onclick="addWorkloadItem()" style="margin-top:10px;">+ 新增行</button>';
  } else if (tabIdx === 2) {
    html += '<table style="width:100%;border-collapse:collapse;"><tr style="background:var(--c-bg-2);"><th style="padding:6px;border:1px solid var(--c-border);">月份</th><th style="padding:6px;border:1px solid var(--c-border);">销售额</th><th style="padding:6px;border:1px solid var(--c-border);">成本</th><th style="padding:6px;border:1px solid var(--c-border);">费效比</th><th style="padding:6px;border:1px solid var(--c-border);">目标达成率</th><th style="padding:6px;border:1px solid var(--c-border);">操作</th></tr>';
    KPI_HISTORY.forEach(function(item, idx) {
      html += '<tr>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="date" value="' + item.date + '" onchange="updateKpiField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:70px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="revenue" value="' + item.revenue + '" onchange="updateKpiField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:70px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="cost" value="' + item.cost + '" onchange="updateKpiField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:70px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="profitRate" value="' + item.profitRate + '" onchange="updateKpiField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:60px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><input data-idx="' + idx + '" data-field="targetRate" value="' + item.targetRate + '" onchange="updateKpiField(this)" style="border:1px solid var(--c-border);padding:2px 4px;border-radius:4px;width:60px;"></td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border);"><button class="btn btn-sm" onclick="deleteKpiItem(' + idx + ')" style="color:#FF6B6B;">删除</button></td>';
      html += '</tr>';
    });
    html += '</table>';
    html += '<button class="btn btn-sm btn-primary" onclick="addKpiItem()" style="margin-top:10px;">+ 新增行</button>';
  }
  var contentDiv = document.getElementById('data-manager-content');
  if (contentDiv) contentDiv.innerHTML = html;
}

function updateStaffField(input) {
  var idx = parseInt(input.getAttribute('data-idx'));
  var field = input.getAttribute('data-field');
  var val = input.value;
  if (field === 'count' || field === 'pct') val = parseInt(val) || 0;
  STAFF_CONFIG[idx][field] = val;
  localStorage.setItem('chansee_staff_config', JSON.stringify(STAFF_CONFIG));
        addChangeLog('STAFF_CONFIG', STAFF_CONFIG[i]&&STAFF_CONFIG[i].id||'', field, oldVal, newValue);
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已保存');
}

function deleteStaffItem(idx) {
  STAFF_CONFIG.splice(idx, 1);
  localStorage.setItem('chansee_staff_config', JSON.stringify(STAFF_CONFIG));
        addChangeLog('STAFF_CONFIG', id, 'DELETE', JSON.stringify(item), '');
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已删除');
  switchDataTab(0);
}

function addStaffItem() {
  STAFF_CONFIG.push({ id:'SC'+Date.now(), role:'新角色', count:0, pct:0, workplace:'all', updatedAt:new Date().toISOString().slice(0,10), updatedBy:(typeof CURRENT_USER!=='undefined'&&CURRENT_USER)?CURRENT_USER.username:'admin' });
  localStorage.setItem('chansee_staff_config', JSON.stringify(STAFF_CONFIG));
        addChangeLog('STAFF_CONFIG', STAFF_CONFIG[STAFF_CONFIG.length-1].id, 'CREATE', '', JSON.stringify(STAFF_CONFIG[STAFF_CONFIG.length-1]));
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已新增');
  switchDataTab(0);
}

function updateWorkloadField(input) {
  var idx = parseInt(input.getAttribute('data-idx'));
  var field = input.getAttribute('data-field');
  var val = input.value;
  if (field === 'count' || field === 'ratio') val = parseInt(val) || 0;
  WORKLOAD_DATA[idx][field] = val;
  localStorage.setItem('chansee_workload_data', JSON.stringify(WORKLOAD_DATA));
        addChangeLog('WORKLOAD_DATA', WORKLOAD_DATA[i]&&WORKLOAD_DATA[i].id||'', field, oldVal, newValue);
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已保存');
}

function deleteWorkloadItem(idx) {
  WORKLOAD_DATA.splice(idx, 1);
  localStorage.setItem('chansee_workload_data', JSON.stringify(WORKLOAD_DATA));
        addChangeLog('WORKLOAD_DATA', id, 'DELETE', JSON.stringify(item), '');
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已删除');
  switchDataTab(1);
}

function addWorkloadItem() {
  WORKLOAD_DATA.push({ id:'WL'+Date.now(), name:'新工作类型', count:0, ratio:0, workplace:'all', updatedAt:new Date().toISOString().slice(0,10), updatedBy:(typeof CURRENT_USER!=='undefined'&&CURRENT_USER)?CURRENT_USER.username:'admin' });
  localStorage.setItem('chansee_workload_data', JSON.stringify(WORKLOAD_DATA));
        addChangeLog('WORKLOAD_DATA', WORKLOAD_DATA[WORKLOAD_DATA.length-1].id, 'CREATE', '', JSON.stringify(WORKLOAD_DATA[WORKLOAD_DATA.length-1]));
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已新增');
  switchDataTab(1);
}

function updateKpiField(input) {
  var idx = parseInt(input.getAttribute('data-idx'));
  var field = input.getAttribute('data-field');
  var val = input.value;
  if (field === 'revenue' || field === 'cost') val = parseInt(val) || 0;
  if (field === 'profitRate' || field === 'targetRate') val = parseFloat(val) || 0;
  KPI_HISTORY[idx][field] = val;
  localStorage.setItem('chansee_kpi_history', JSON.stringify(KPI_HISTORY));
        addChangeLog('KPI_HISTORY', KPI_HISTORY[i]&&KPI_HISTORY[i].id||'', field, oldVal, newValue);
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已保存');
}

function deleteKpiItem(idx) {
  KPI_HISTORY.splice(idx, 1);
  localStorage.setItem('chansee_kpi_history', JSON.stringify(KPI_HISTORY));
        addChangeLog('KPI_HISTORY', id, 'DELETE', JSON.stringify(item), '');
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已删除');
  switchDataTab(2);
}

function addKpiItem() {
  KPI_HISTORY.push({ id:'KH'+Date.now(), date:'2026-', revenue:0, cost:0, profitRate:0, targetRate:0, workplace:'all', updatedAt:new Date().toISOString().slice(0,10), updatedBy:(typeof CURRENT_USER!=='undefined'&&CURRENT_USER)?CURRENT_USER.username:'admin' });
  localStorage.setItem('chansee_kpi_history', JSON.stringify(KPI_HISTORY));
        addChangeLog('KPI_HISTORY', KPI_HISTORY[KPI_HISTORY.length-1].id, 'CREATE', '', JSON.stringify(KPI_HISTORY[KPI_HISTORY.length-1]));
  if (typeof CloudBaseSync !== 'undefined' && CloudBaseSync.saveAll) CloudBaseSync.saveAll();
  showToast('✅ 已新增');
  switchDataTab(2);
}

// 记录数据修改历史
function addChangeLog(tableName, recordId, fieldName, oldValue, newValue) {
  try {
    const user = (typeof CURRENT_USER !== 'undefined' && CURRENT_USER) ? CURRENT_USER.username : 'admin';
    const log = {
      id: 'LOG' + Date.now(),
      tableName: tableName,
      recordId: recordId || '',
      fieldName: fieldName || '',
      oldValue: String(oldValue || ''),
      newValue: String(newValue || ''),
      changedBy: user,
      changedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };
    DATA_CHANGE_LOG.push(log);
    // 只保留最近200条
    if (DATA_CHANGE_LOG.length > 200) DATA_CHANGE_LOG.shift();
    localStorage.setItem('chansee_data_change_log', JSON.stringify(DATA_CHANGE_LOG));
  } catch(e) { console.error('addChangeLog error:', e); }
}

// 显示修改历史（复用系统弹窗）
function showChangeLog() {
  var overlay = document.getElementById('modal-overlay');
  var titleEl = document.getElementById('modal-title');
  var bodyEl = document.getElementById('modal-body');
  var footerEl = document.getElementById('modal-footer');
  if (!overlay || !titleEl || !bodyEl) return;

  var html = '';
  if (DATA_CHANGE_LOG.length === 0) {
    html += '<p style="color:#999;text-align:center;padding:30px 0">暂无修改记录</p>';
    html += '<p style="color:#999;text-align:center;font-size:12px">在「数据管理」中修改数据后，修改记录会自动显示在这里</p>';
  } else {
    html += '<table style="width:100%;border-collapse:collapse;font-size:13px;">';
    html += '<thead><tr style="background:var(--c-bg-2,#f5f5f5)">';
    html += '<th style="padding:8px 6px;border:1px solid var(--c-border,#ddd);text-align:left">时间</th>';
    html += '<th style="padding:8px 6px;border:1px solid var(--c-border,#ddd);text-align:left">用户</th>';
    html += '<th style="padding:8px 6px;border:1px solid var(--c-border,#ddd);text-align:left">数据表</th>';
    html += '<th style="padding:8px 6px;border:1px solid var(--c-border,#ddd);text-align:left">字段</th>';
    html += '<th style="padding:8px 6px;border:1px solid var(--c-border,#ddd);text-align:left">旧值</th>';
    html += '<th style="padding:8px 6px;border:1px solid var(--c-border,#ddd);text-align:left">新值</th>';
    html += '</tr></thead><tbody>';

    DATA_CHANGE_LOG.slice().reverse().slice(0, 100).forEach(function(l) {
      html += '<tr>';
      html += '<td style="padding:6px;border:1px solid var(--c-border,#ddd);white-space:nowrap">' + l.changedAt + '</td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border,#ddd)">' + l.changedBy + '</td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border,#ddd)">' + l.tableName + '</td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border,#ddd)">' + (l.fieldName || '—') + '</td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border,#ddd);max-width:150px;overflow:hidden;text-overflow:ellipsis">' + (l.oldValue || '—') + '</td>';
      html += '<td style="padding:6px;border:1px solid var(--c-border,#ddd);max-width:150px;overflow:hidden;text-overflow:ellipsis">' + (l.newValue || '—') + '</td>';
      html += '</tr>';
    });

    html += '</tbody></table>';
    html += '<p style="font-size:11px;color:#999;margin-top:10px">共 ' + DATA_CHANGE_LOG.length + ' 条记录（最多保留200条）</p>';
  }

  titleEl.textContent = '📋 数据修改历史';
  bodyEl.innerHTML = html;
  if (footerEl) footerEl.innerHTML = '<button class="btn" onclick="closeChangeLog()">关闭</button>';
  overlay.classList.remove('hidden');
}



// ===== Recovered Functions (June 26) =====
function goToModule(module){
  document.querySelectorAll('.nav-item').forEach(function(i){i.classList.remove('active');});
  var nav = document.querySelector('.nav-item[data-module="'+module+'"]');
  if(nav){
    nav.classList.add('active');
    var sec = nav.closest('.nav-section');
    if(sec && sec.classList.contains('collapsed')) sec.classList.remove('collapsed');
  }
  renderModule(module);
}

function toggleAdvancedFilter() {
  var el = document.getElementById('filter-row-advanced');
  if (!el) { setTimeout(function(){ toggleAdvancedFilter(); }, 200); return; }
  var btn = document.querySelector('.fb-adv-btn');
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

function sortArchiveTable(field) {
  if (archiveSortField === field) {
  } else {
    archiveSortDirection = 'asc';
  }
  renderModule('archive');
}

function clearArchiveSelection(){
  var cb=document.querySelectorAll('.archive-row-check');
  for(var i=0;i<cb.length;i++)cb[i].checked=false;
  updateBatchDeleteBtn();
}

function batchEditProjects(){
  alert('鎵归噺缂栬緫鍔熻兘寮€鍙戜腑');
}

function toggleCompareCheckbox(projectId) {
  if (!window._selectedCompareIds) window._selectedCompareIds = [];
  var idx = window._selectedCompareIds.indexOf(projectId);
  if (idx >= 0) {
    window._selectedCompareIds.splice(idx, 1);
  } else {
    if (window._selectedCompareIds.length >= 2) {
      window._selectedCompareIds.shift();
    }
    window._selectedCompareIds.push(projectId);
  }
  renderModule('operation');
}

function closeComparePanel() {
  var overlay = document.getElementById('compare-overlay');
  if(overlay){ overlay.classList.add('hidden'); overlay.style.opacity = '0'; }
}

function switchIssueTab(tab){
  issueActiveTab = tab;
  if(tab==='issue'){ issueFilterState = { status:'all', priority:'all', type:'all', assignee:'all', keyword:'' }; }
  else { topicFilterState = { status:'all', type:'all', assignee:'all', keyword:'' }; }
  renderModule('issue');
}

function filterIssues(){
  var sel = document.getElementById('issue-filter-priority');
  var sel2 = document.getElementById('issue-filter-type');
  var sel3 = document.getElementById('issue-filter-assignee');
  var kw = document.getElementById('issue-search');
  if(issueActiveTab==='issue'){
    issueFilterState.priority = sel ? sel.value : 'all';
    issueFilterState.type = sel2 ? sel2.value : 'all';
    issueFilterState.assignee = sel3 ? sel3.value : 'all';
    issueFilterState.keyword = kw ? kw.value : '';
  } else {
    topicFilterState.type = sel2 ? sel2.value : 'all';
    topicFilterState.assignee = sel3 ? sel3.value : 'all';
    topicFilterState.keyword = kw ? kw.value : '';
  }
  renderModule('issue');
}

function filterIssueByStatus(status, el){
  if(issueActiveTab==='issue') issueFilterState.status = status;
  else topicFilterState.status = status;
  renderModule('issue');
}

function generateSparklinePath(fieldName){
    if(!KPI_HISTORY || KPI_HISTORY.length < 2){
      // 鏃犲巻鍙叉暟鎹椂杩斿洖骞崇洿绾?      return {areaPath:'M 4,44 L 104,44 L 104,50 L 4,50 Z', strokePath:'M 4,44 L 104,44'};
    }
    var values = [];
    for(var v=0; v<KPI_HISTORY.length; v++){ values.push(KPI_HISTORY[v][fieldName] || 0); }
    var maxV = Math.max.apply(null, values) || 1;
    var minV = Math.min.apply(null, values);
    var range = maxV - minV || 1;
    var points = [];
    var totalW = 100, totalH = 24, topY = 22;
    for(var v2=0; v2<values.length; v2++){
      var x = values.length===1 ? 50 : Math.round(v2 * totalW / (values.length-1)) + 4;
      var y = Math.round(topY + totalH - ((values[v2]-minV)/range * totalH));
      points.push({x:x, y:y});
    }
    // 鏋勫缓path
    var areaPath = 'M 4,50 L '+points[0].x+','+points[0].y;
    for(var p2=1; p2<points.length; p2++){
      areaPath += ' L '+points[p2].x+','+points[p2].y;
    }
    areaPath += ' L '+points[points.length-1].x+',50 L 4,50 Z';
    var strokePath = 'M '+points[0].x+','+points[0].y;
    for(var p3=1; p3<points.length; p3++){
      strokePath += ' L '+points[p3].x+','+points[p3].y;
    }
    return {areaPath:areaPath, strokePath:strokePath};
  }

function openComparePanel() {
  var ids = window._selectedCompareIds || [];
  if (ids.length < 2) return;
  var p1 = PROJECTS.find(function(p){return p.id===ids[0];});
  var p2 = PROJECTS.find(function(p){return p.id===ids[1];});
  if(!p1||!p2) return;
  var h1 = HEALTH_DATA.find(function(h){return h.projectId===p1.id&&h.period==='2026-05';});
  var h2 = HEALTH_DATA.find(function(h){return h.projectId===p2.id&&h.period==='2026-05';});
  var s1 = h1 ? h1.overallScore : 0;
  var s2 = h2 ? h2.overallScore : 0;
  var dims1 = h1 ? h1.dimensions : [];
  var dims2 = h2 ? h2.dimensions : [];
  var dimLabels = {manpower:'人力', service:'服务', sales:'销售', returns:'退货', risk:'风险', cost:'成本'};

  var rowsHtml = '';
  for(var i=0; i<dims1.length; i++){
    var v1 = dims1[i].score;
    var v2 = dims2[i] ? dims2[i].score : 0;
    var diff = v1 - v2;
    var diffStr = diff>0 ? '▲ +'+diff : (diff<0 ? '▼ '+diff : '持平');
    var diffColor = diff>0 ? '#10b981' : (diff<0 ? '#ef4444' : '#6b7280');
    var label = dimLabels[dims1[i].key] || dims1[i].name;
    var c1 = v1>=90?'#10b981':v1>=75?'#eab308':v1>=60?'#f97316':'#ef4444';
    var c2 = v2>=90?'#10b981':v2>=75?'#eab308':v2>=60?'#f97316':'#ef4444';
    rowsHtml += '<tr>'
      +'<td style="padding:10px 14px;font-size:13px;color:#1e40af;font-weight:500;">'+label+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:22px;font-weight:700;color:'+c1+';">'+v1+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:22px;font-weight:700;color:'+c2+';">'+v2+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:14px;font-weight:600;color:'+diffColor+';">'+diffStr+'</td>'
    +'</tr>';
  }
  // Compare score bars
  var maxW = 200;
  var bar1W = Math.round(s1/100*maxW);
  var bar2W = Math.round(s2/100*maxW);

  var overlay = document.getElementById('compare-overlay');
  if(!overlay){
    overlay = document.createElement('div');
    overlay.id = 'compare-overlay';
    overlay.className = 'modal-overlay';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.opacity = '1';
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = ''
    +'<div class="modal-dialog" style="max-width:700px;padding:0;border-radius:16px;overflow:hidden;background:#fff;">'
      +'<div style="background:linear-gradient(135deg,#0B9B96,#3b82f6);color:#fff;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;">'
        +'<div style="font-size:15px;font-weight:600;">📊 项目对比</div>'
        +'<button onclick="closeComparePanel()" style="background:rgba(255,255,255,0.2);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:16px;">&#10005;</button>'
      +'</div>'
      +'<div style="padding:20px;">'
        // Project headers
        +'<div style="display:flex;gap:16px;margin-bottom:16px;">'
          +'<div style="flex:1;text-align:center;padding:12px;background:#f0fdf4;border-radius:10px;">'
            +'<div style="font-size:16px;font-weight:700;color:#1e40af;">'+p1.name+'</div>'
            +'<div style="font-size:11px;color:#6b7280;margin-top:2px;">'+p1.workplace+' 路 '+p1.serviceMode+' 路 PM: '+(p1.pm||'')+'</div>'
            +'<div style="font-size:32px;font-weight:800;color:#0B9B96;margin-top:4px;">'+s1+'<span style="font-size:14px;font-weight:400;color:#6b7280;"> 鍒?/span></div>'
            +'<div style="margin-top:4px;height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden;"><div style="height:100%;width:'+bar1W+'px;background:linear-gradient(90deg,#0B9B96,#00C9A7);border-radius:3px;"></div></div>'
          +'</div>'
          +'<div style="display:flex;align-items:center;font-size:20px;font-weight:800;color:#94a3b8;flex-shrink:0;">VS</div>'
          +'<div style="flex:1;text-align:center;padding:12px;background:#eff6ff;border-radius:10px;">'
            +'<div style="font-size:16px;font-weight:700;color:#1e40af;">'+p2.name+'</div>'
            +'<div style="font-size:11px;color:#6b7280;margin-top:2px;">'+p2.workplace+' 路 '+p2.serviceMode+' 路 PM: '+(p2.pm||'')+'</div>'
            +'<div style="font-size:32px;font-weight:800;color:#3b82f6;margin-top:4px;">'+s2+'<span style="font-size:14px;font-weight:400;color:#6b7280;"> 鍒?/span></div>'
            +'<div style="margin-top:4px;height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden;"><div style="height:100%;width:'+bar2W+'px;background:linear-gradient(90deg,#3b82f6,#60a5fa);border-radius:3px;"></div></div>'
          +'</div>'
        +'</div>'
        // Dimension table
        +'<table style="width:100%;border-collapse:collapse;">'
          +'<thead><tr style="background:#f8fafc;">'
            +'<th style="padding:8px 14px;text-align:left;font-size:12px;color:#64748b;font-weight:500;">缁村害</th>'
            +'<th style="padding:8px 14px;text-align:center;font-size:12px;color:#64748b;font-weight:500;">'+p1.name.substring(0,4)+'</th>'
            +'<th style="padding:8px 14px;text-align:center;font-size:12px;color:#64748b;font-weight:500;">'+p2.name.substring(0,4)+'</th>'
            +'<th style="padding:8px 14px;text-align:center;font-size:12px;color:#64748b;font-weight:500;">宸紓</th>'
          +'</tr></thead>'
          +'<tbody>'+rowsHtml+'</tbody>'
        +'</table>'
        +'<div style="margin-top:12px;text-align:center;font-size:11px;color:#94a3b8;">'
          +(s1>s2 ? p1.name+' 综合领先 '+ (s1-s2)+' 分' : (s2>s1 ? p2.name+' 综合领先 '+ (s2-s1)+' 分' : '双方综合得分持平'))
        +'</div>'
      +'</div>'
    +'</div>';
  overlay.classList.remove('hidden');
  overlay.style.opacity = '1';
}

// ===== End Recovered Functions =====




// ===== Recovered Functions (June 26) =====
function goToModule(module){
  document.querySelectorAll('.nav-item').forEach(function(i){i.classList.remove('active');});
  var nav = document.querySelector('.nav-item[data-module="'+module+'"]');
  if(nav){
    nav.classList.add('active');
    var sec = nav.closest('.nav-section');
    if(sec && sec.classList.contains('collapsed')) sec.classList.remove('collapsed');
  }
  renderModule(module);
}

function toggleAdvancedFilter() {
  var el = document.getElementById('filter-row-advanced');
  if (!el) { setTimeout(function(){ toggleAdvancedFilter(); }, 200); return; }
  var btn = document.querySelector('.fb-adv-btn');
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

function sortArchiveTable(field) {
  if (archiveSortField === field) {
  } else {
    archiveSortDirection = 'asc';
  }
  renderModule('archive');
}

function clearArchiveSelection(){
  var cb=document.querySelectorAll('.archive-row-check');
  for(var i=0;i<cb.length;i++)cb[i].checked=false;
  updateBatchDeleteBtn();
}

function batchEditProjects(){
  alert('鎵归噺缂栬緫鍔熻兘寮€鍙戜腑');
}

function toggleCompareCheckbox(projectId) {
  if (!window._selectedCompareIds) window._selectedCompareIds = [];
  var idx = window._selectedCompareIds.indexOf(projectId);
  if (idx >= 0) {
    window._selectedCompareIds.splice(idx, 1);
  } else {
    if (window._selectedCompareIds.length >= 2) {
      window._selectedCompareIds.shift();
    }
    window._selectedCompareIds.push(projectId);
  }
  renderModule('operation');
}

function closeComparePanel() {
  var overlay = document.getElementById('compare-overlay');
  if(overlay){ overlay.classList.add('hidden'); overlay.style.opacity = '0'; }
}

function switchIssueTab(tab){
  issueActiveTab = tab;
  if(tab==='issue'){ issueFilterState = { status:'all', priority:'all', type:'all', assignee:'all', keyword:'' }; }
  else { topicFilterState = { status:'all', type:'all', assignee:'all', keyword:'' }; }
  renderModule('issue');
}

function filterIssues(){
  var sel = document.getElementById('issue-filter-priority');
  var sel2 = document.getElementById('issue-filter-type');
  var sel3 = document.getElementById('issue-filter-assignee');
  var kw = document.getElementById('issue-search');
  if(issueActiveTab==='issue'){
    issueFilterState.priority = sel ? sel.value : 'all';
    issueFilterState.type = sel2 ? sel2.value : 'all';
    issueFilterState.assignee = sel3 ? sel3.value : 'all';
    issueFilterState.keyword = kw ? kw.value : '';
  } else {
    topicFilterState.type = sel2 ? sel2.value : 'all';
    topicFilterState.assignee = sel3 ? sel3.value : 'all';
    topicFilterState.keyword = kw ? kw.value : '';
  }
  renderModule('issue');
}

function filterIssueByStatus(status, el){
  if(issueActiveTab==='issue') issueFilterState.status = status;
  else topicFilterState.status = status;
  renderModule('issue');
}

function openComparePanel() {
  var ids = window._selectedCompareIds || [];
  if (ids.length < 2) return;
  var p1 = PROJECTS.find(function(p){return p.id===ids[0];});
  var p2 = PROJECTS.find(function(p){return p.id===ids[1];});
  if(!p1||!p2) return;
  var h1 = HEALTH_DATA.find(function(h){return h.projectId===p1.id&&h.period==='2026-05';});
  var h2 = HEALTH_DATA.find(function(h){return h.projectId===p2.id&&h.period==='2026-05';});
  var s1 = h1 ? h1.overallScore : 0;
  var s2 = h2 ? h2.overallScore : 0;
  var dims1 = h1 ? h1.dimensions : [];
  var dims2 = h2 ? h2.dimensions : [];
  var dimLabels = {manpower:'人力', service:'服务', sales:'销售', returns:'退货', risk:'风险', cost:'成本'};

  var rowsHtml = '';
  for(var i=0; i<dims1.length; i++){
    var v1 = dims1[i].score;
    var v2 = dims2[i] ? dims2[i].score : 0;
    var diff = v1 - v2;
    var diffStr = diff>0 ? '▲ +'+diff : (diff<0 ? '▼ '+diff : '持平');
    var diffColor = diff>0 ? '#10b981' : (diff<0 ? '#ef4444' : '#6b7280');
    var label = dimLabels[dims1[i].key] || dims1[i].name;
    var c1 = v1>=90?'#10b981':v1>=75?'#eab308':v1>=60?'#f97316':'#ef4444';
    var c2 = v2>=90?'#10b981':v2>=75?'#eab308':v2>=60?'#f97316':'#ef4444';
    rowsHtml += '<tr>'
      +'<td style="padding:10px 14px;font-size:13px;color:#1e40af;font-weight:500;">'+label+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:22px;font-weight:700;color:'+c1+';">'+v1+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:22px;font-weight:700;color:'+c2+';">'+v2+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:14px;font-weight:600;color:'+diffColor+';">'+diffStr+'</td>'
    +'</tr>';
  }
  // Compare score bars
  var maxW = 200;
  var bar1W = Math.round(s1/100*maxW);
  var bar2W = Math.round(s2/100*maxW);

  var overlay = document.getElementById('compare-overlay');
  if(!overlay){
    overlay = document.createElement('div');
    overlay.id = 'compare-overlay';
    overlay.className = 'modal-overlay';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.opacity = '1';
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = ''
    +'<div class="modal-dialog" style="max-width:700px;padding:0;border-radius:16px;overflow:hidden;background:#fff;">'
      +'<div style="background:linear-gradient(135deg,#0B9B96,#3b82f6);color:#fff;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;">'
        +'<div style="font-size:15px;font-weight:600;">📊 项目对比</div>'
        +'<button onclick="closeComparePanel()" style="background:rgba(255,255,255,0.2);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:16px;">&#10005;</button>'
      +'</div>'
      +'<div style="padding:20px;">'
        // Project headers
        +'<div style="display:flex;gap:16px;margin-bottom:16px;">'
          +'<div style="flex:1;text-align:center;padding:12px;background:#f0fdf4;border-radius:10px;">'
            +'<div style="font-size:16px;font-weight:700;color:#1e40af;">'+p1.name+'</div>'
            +'<div style="font-size:11px;color:#6b7280;margin-top:2px;">'+p1.workplace+' 路 '+p1.serviceMode+' 路 PM: '+(p1.pm||'')+'</div>'
            +'<div style="font-size:32px;font-weight:800;color:#0B9B96;margin-top:4px;">'+s1+'<span style="font-size:14px;font-weight:400;color:#6b7280;"> 鍒?/span></div>'
            +'<div style="margin-top:4px;height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden;"><div style="height:100%;width:'+bar1W+'px;background:linear-gradient(90deg,#0B9B96,#00C9A7);border-radius:3px;"></div></div>'
          +'</div>'
          +'<div style="display:flex;align-items:center;font-size:20px;font-weight:800;color:#94a3b8;flex-shrink:0;">VS</div>'
          +'<div style="flex:1;text-align:center;padding:12px;background:#eff6ff;border-radius:10px;">'
            +'<div style="font-size:16px;font-weight:700;color:#1e40af;">'+p2.name+'</div>'
            +'<div style="font-size:11px;color:#6b7280;margin-top:2px;">'+p2.workplace+' 路 '+p2.serviceMode+' 路 PM: '+(p2.pm||'')+'</div>'
            +'<div style="font-size:32px;font-weight:800;color:#3b82f6;margin-top:4px;">'+s2+'<span style="font-size:14px;font-weight:400;color:#6b7280;"> 鍒?/span></div>'
            +'<div style="margin-top:4px;height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden;"><div style="height:100%;width:'+bar2W+'px;background:linear-gradient(90deg,#3b82f6,#60a5fa);border-radius:3px;"></div></div>'
          +'</div>'
        +'</div>'
        // Dimension table
        +'<table style="width:100%;border-collapse:collapse;">'
          +'<thead><tr style="background:#f8fafc;">'
            +'<th style="padding:8px 14px;text-align:left;font-size:12px;color:#64748b;font-weight:500;">缁村害</th>'
            +'<th style="padding:8px 14px;text-align:center;font-size:12px;color:#64748b;font-weight:500;">'+p1.name.substring(0,4)+'</th>'
            +'<th style="padding:8px 14px;text-align:center;font-size:12px;color:#64748b;font-weight:500;">'+p2.name.substring(0,4)+'</th>'
            +'<th style="padding:8px 14px;text-align:center;font-size:12px;color:#64748b;font-weight:500;">宸紓</th>'
          +'</tr></thead>'
          +'<tbody>'+rowsHtml+'</tbody>'
        +'</table>'
        +'<div style="margin-top:12px;text-align:center;font-size:11px;color:#94a3b8;">'
          +(s1>s2 ? p1.name+' 综合领先 '+ (s1-s2)+' 分' : (s2>s1 ? p2.name+' 综合领先 '+ (s2-s1)+' 分' : '双方综合得分持平'))
        +'</div>'
      +'</div>'
    +'</div>';
  overlay.classList.remove('hidden');
  overlay.style.opacity = '1';
}

// ===== End Recovered Functions =====


function closeChangeLog() {
  var overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.add('hidden');
}

