// VERSION: 202606091530 - 鏈嶅姟涓庤繘搴﹁拷韪〉闈㈤噸鏋勶細鍥涘ぇ鍗＄墖+璇勫垎鏄庣粏琛?鍋ュ悍棰勮
// ===== Mock 鏁版嵁 =====

// 绠＄悊闅惧害璇勪及鏁版嵁锛堣嚜鍔ㄧ敓鎴愶級
const GROUPS_DATA = [{"month":"7鏈?,"group":"娴庡崡B浜嬩笟閮?Alpha缁?,"manager":"寮犱紵","level":"缁勯暱-1-1绾?,"shopCount":6,"categoryCount":1,"platformCount":4,"manageCount":1.0,"qcCount":0.4,"trainCount":0,"evalCount":0.35,"aiCount":0,"csCount":10,"new3m":2,"manageTrainSum":1.4,"storeMgrCount":5,"pptCount":2,"totalStaff":11.75,"manageRatio":7.14285714285714,"shopRatio":6.0,"platformRatio":0.307692307692308},{"month":"7鏈?,"group":"娴庡崡B浜嬩笟閮?Beta缁?,"manager":"鏉庡","level":"鍩硅甯?,"shopCount":10,"categoryCount":5,"platformCount":2,"manageCount":0.3,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":3,"new3m":0,"manageTrainSum":0.3,"storeMgrCount":8,"pptCount":0,"totalStaff":3.3,"manageRatio":10.0,"shopRatio":33.3333333333333,"platformRatio":0.153846153846154},{"month":"7鏈?,"group":"娴庡崡B浜嬩笟閮?Gamma缁?,"manager":"鐜嬪己","level":"缁勯暱-2绾?,"shopCount":2,"categoryCount":2,"platformCount":2,"manageCount":1.0,"qcCount":0.5,"trainCount":0.25,"evalCount":0.7,"aiCount":0,"csCount":9,"new3m":3,"manageTrainSum":1.75,"storeMgrCount":1,"pptCount":2,"totalStaff":11.45,"manageRatio":5.14285714285714,"shopRatio":2.0,"platformRatio":0.153846153846154},{"month":"7鏈?,"group":"娴庡崡A浜嬩笟閮?Delta缁?,"manager":"鍒樻磱","level":"缁勯暱-2绾?,"shopCount":6,"categoryCount":1,"platformCount":4,"manageCount":0.6,"qcCount":0.2,"trainCount":0,"evalCount":0.275,"aiCount":0,"csCount":3,"new3m":1,"manageTrainSum":0.8,"storeMgrCount":3,"pptCount":1,"totalStaff":4.075,"manageRatio":3.75,"shopRatio":10.0,"platformRatio":0.307692307692308},{"month":"7鏈?,"group":"娴庡崡A浜嬩笟閮?Echo缁?,"manager":"鍒樻磱","level":"缁勯暱-2绾?,"shopCount":4,"categoryCount":1,"platformCount":3,"manageCount":0.4,"qcCount":0.2,"trainCount":0,"evalCount":0.06,"aiCount":0,"csCount":3,"new3m":0,"manageTrainSum":0.6,"storeMgrCount":2,"pptCount":1,"totalStaff":3.66,"manageRatio":5.0,"shopRatio":10.0,"platformRatio":0.230769230769231},{"month":"7鏈?,"group":"娴庡崡A浜嬩笟閮?Foxtrot缁?,"manager":"闄堥潤","level":"缁勯暱-2绾?,"shopCount":5,"categoryCount":3,"platformCount":3,"manageCount":1.0,"qcCount":0.33,"trainCount":0.3,"evalCount":0.68,"aiCount":0,"csCount":7,"new3m":0,"manageTrainSum":1.63,"storeMgrCount":5,"pptCount":2,"totalStaff":9.31,"manageRatio":4.29447852760736,"shopRatio":5.0,"platformRatio":0.230769230769231},{"month":"7鏈?,"group":"娴庡崡A浜嬩笟閮?Golf缁?,"manager":"璧电","level":"缁勯暱-3绾?,"shopCount":2,"categoryCount":1,"platformCount":2,"manageCount":0.7,"qcCount":0.43,"trainCount":0.45,"evalCount":0.35,"aiCount":0.5,"csCount":6,"new3m":1,"manageTrainSum":1.58,"storeMgrCount":2,"pptCount":2,"totalStaff":8.43,"manageRatio":3.79746835443038,"shopRatio":2.85714285714286,"platformRatio":0.153846153846154},{"month":"7鏈?,"group":"娴庡崡A浜嬩笟閮?Hotel缁?,"manager":"璧电","level":"缁勯暱-3绾?,"shopCount":8,"categoryCount":2,"platformCount":5,"manageCount":0.3,"qcCount":0,"trainCount":0,"evalCount":0.05,"aiCount":0,"csCount":3,"new3m":1,"manageTrainSum":0.3,"storeMgrCount":4,"pptCount":1,"totalStaff":3.35,"manageRatio":10.0,"shopRatio":26.6666666666667,"platformRatio":0.384615384615385},{"month":"7鏈?,"group":"娴庡崡A浜嬩笟閮?India缁?,"manager":"瀛欐槑&鍛ㄨ姵","level":"缁勯暱-3绾?,"shopCount":1,"categoryCount":1,"platformCount":1,"manageCount":2.0,"qcCount":0.67,"trainCount":0.98,"evalCount":2.2,"aiCount":0.5,"csCount":18,"new3m":5,"manageTrainSum":3.65,"storeMgrCount":1,"pptCount":2,"totalStaff":24.35,"manageRatio":4.93150684931507,"shopRatio":0.5,"platformRatio":0.0769230769230769},{"month":"7鏈?,"group":"娴庡崡C浜嬩笟閮?Juliet缁?,"manager":"鍚存稕","level":"缁勯暱-3绾?,"shopCount":3,"categoryCount":3,"platformCount":3,"manageCount":0.9,"qcCount":1.9,"trainCount":0,"evalCount":0.53,"aiCount":0,"csCount":4,"new3m":1,"manageTrainSum":2.8,"storeMgrCount":4,"pptCount":6,"totalStaff":7.33,"manageRatio":1.42857142857143,"shopRatio":3.33333333333333,"platformRatio":0.230769230769231},{"month":"7鏈?,"group":"娴庡崡C浜嬩笟閮?Kilo缁?,"manager":"鍚存稕","level":"缁勯暱-3绾?,"shopCount":4,"categoryCount":1,"platformCount":2,"manageCount":0.1,"qcCount":0.07,"trainCount":0,"evalCount":0.27,"aiCount":0,"csCount":3,"new3m":0,"manageTrainSum":0.17,"storeMgrCount":2,"pptCount":0,"totalStaff":3.44,"manageRatio":17.6470588235294,"shopRatio":40.0,"platformRatio":0.153846153846154},{"month":"7鏈?,"group":"娴庡崡B浜嬩笟閮?Lima缁?,"manager":"閮戝崕","level":"涓荤-2绾?,"shopCount":5,"categoryCount":2,"platformCount":5,"manageCount":0.6,"qcCount":0.3,"trainCount":0,"evalCount":0.35,"aiCount":0,"csCount":4,"new3m":1,"manageTrainSum":0.9,"storeMgrCount":2,"pptCount":1,"totalStaff":5.25,"manageRatio":4.44444444444444,"shopRatio":8.33333333333333,"platformRatio":0.384615384615385},{"month":"7鏈?,"group":"娴庡崡B浜嬩笟閮?Mike缁?,"manager":"閮戝崕","level":"涓荤-2绾?,"shopCount":6,"categoryCount":2,"platformCount":5,"manageCount":0.4,"qcCount":0,"trainCount":0,"evalCount":0.1,"aiCount":0,"csCount":4,"new3m":1,"manageTrainSum":0.4,"storeMgrCount":4,"pptCount":1,"totalStaff":4.5,"manageRatio":10.0,"shopRatio":15.0,"platformRatio":0.384615384615385},{"month":"7鏈?,"group":"娴庡崡B浜嬩笟閮?November缁?,"manager":"榛勪附","level":"涓荤-2绾?,"shopCount":2,"categoryCount":1,"platformCount":1,"manageCount":3.0,"qcCount":0.5,"trainCount":1.0,"evalCount":1.0,"aiCount":0.5,"csCount":37,"new3m":32,"manageTrainSum":4.5,"storeMgrCount":2,"pptCount":4,"totalStaff":43.0,"manageRatio":8.22222222222222,"shopRatio":0.666666666666667,"platformRatio":0.0769230769230769},{"month":"7鏈?,"group":"娴庡崡鏀寔缁?Oscar缁?,"manager":"鏋楀嘲","level":"涓荤-1绾?,"shopCount":2,"categoryCount":1,"platformCount":2,"manageCount":0.5,"qcCount":0.15,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":3,"new3m":0,"manageTrainSum":0.65,"storeMgrCount":1,"pptCount":4,"totalStaff":3.65,"manageRatio":4.61538461538461,"shopRatio":4.0,"platformRatio":0.153846153846154},{"month":"7鏈?,"group":"娴庡崡C浜嬩笟閮?Papa缁?,"manager":"寰愭澃","level":"缁勯暱-1-1绾?,"shopCount":3,"categoryCount":1,"platformCount":2,"manageCount":0.4,"qcCount":0.5,"trainCount":0.02,"evalCount":0.2,"aiCount":0,"csCount":3,"new3m":1,"manageTrainSum":0.92,"storeMgrCount":3,"pptCount":1,"totalStaff":4.12,"manageRatio":3.26086956521739,"shopRatio":7.5,"platformRatio":0.153846153846154},{"month":"7鏈?,"group":"娴庡崡A浜嬩笟閮?Quebec缁?,"manager":"寰愭澃","level":"缁勯暱-1-1绾?,"shopCount":4,"categoryCount":2,"platformCount":2,"manageCount":0.6,"qcCount":0.5,"trainCount":0,"evalCount":0.3,"aiCount":0,"csCount":3,"new3m":1,"manageTrainSum":1.1,"storeMgrCount":2,"pptCount":1,"totalStaff":4.4,"manageRatio":2.72727272727273,"shopRatio":6.66666666666667,"platformRatio":0.153846153846154},{"month":"瀹氶噺鎸囨爣姹囨€?,"group":"","manager":"","level":"","shopCount":0,"categoryCount":0,"platformCount":0,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"鏈堜唤","group":"绠＄悊濮撳悕","manager":"瀹㈡湇浜烘暟","level":"3涓湀鍐呬汉鏁?,"shopCount":"绠＄悊+璐ㄥ煿浜烘暟","categoryCount":"搴楅暱瀵规帴浜烘暟","platformCount":"PPT骞村害姹囨姤娆℃暟","manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7鏈?,"group":"寮犱紵","manager":"10","level":"2","shopCount":1.4,"categoryCount":5,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7鏈?,"group":"鏉庡","manager":"3","level":"","shopCount":0.3,"categoryCount":8,"platformCount":0,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7鏈?,"group":"鐜嬪己","manager":"9","level":"3","shopCount":1.75,"categoryCount":1,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7鏈?,"group":"鍒樻磱","manager":"6","level":"1","shopCount":1.4,"categoryCount":5,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7鏈?,"group":"闄堥潤","manager":"7","level":"","shopCount":1.63,"categoryCount":5,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7鏈?,"group":"璧电","manager":"9","level":"2","shopCount":1.88,"categoryCount":6,"platformCount":3,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7鏈?,"group":"瀛欐槑&鍛ㄨ姵","manager":"9","level":"5","shopCount":3.65,"categoryCount":1,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7鏈?,"group":"鍚存稕","manager":"7","level":"1","shopCount":2.97,"categoryCount":6,"platformCount":6,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7鏈?,"group":"閮戝崕","manager":"8","level":"2","shopCount":1.3,"categoryCount":6,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7鏈?,"group":"榛勪附","manager":"12.3333333333333","level":"32","shopCount":4.5,"categoryCount":2,"platformCount":4,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7鏈?,"group":"鏋楀嘲","manager":"3","level":"","shopCount":0.65,"categoryCount":1,"platformCount":4,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0},{"month":"7鏈?,"group":"寰愭澃","manager":"6","level":"2","shopCount":2.02,"categoryCount":5,"platformCount":2,"manageCount":0,"qcCount":0,"trainCount":0,"evalCount":0,"aiCount":0,"csCount":0,"new3m":0,"manageTrainSum":0,"storeMgrCount":0,"pptCount":0,"totalStaff":0,"manageRatio":0,"shopRatio":0,"platformRatio":0}];
const ASSESSMENTS_DATA = [{"month":"7鏈?,"dept":"B浜嬩笟閮?,"group":"Alpha缁?,"manager":"寮犱紵","level":"缁勯暱-1-1绾?,"totalScore":65.4428571428572,"quantScore":43.4428571428571,"qualScore":22.0,"csCountScore":10.0,"new3mScore":2.0,"ratioScore":1.4,"storeMgrScore":5.0,"pptScore":2.0,"qual1":3,"qual2":3,"qual3":3,"qual4":3,"qual5":3,"qual6":1,"qual7":3,"qual8":0},{"month":"7鏈?,"dept":"B浜嬩笟閮?,"group":"Beta缁?,"manager":"鏉庡","level":"鍩硅甯?,"totalScore":8.0,"quantScore":0,"qualScore":8.0,"csCountScore":3.0,"new3mScore":0,"ratioScore":0.3,"storeMgrScore":8.0,"pptScore":0,"qual1":0,"qual2":0,"qual3":1,"qual4":0,"qual5":3,"qual6":3,"qual7":0,"qual8":0},{"month":"7鏈?,"dept":"B浜嬩笟閮?,"group":"Gamma缁?,"manager":"鐜嬪己","level":"缁勯暱-2绾?,"totalScore":52.2261904761905,"quantScore":34.2261904761905,"qualScore":18.0,"csCountScore":9.0,"new3mScore":3.0,"ratioScore":1.75,"storeMgrScore":1.0,"pptScore":2.0,"qual1":2,"qual2":1,"qual3":1,"qual4":3,"qual5":1,"qual6":1,"qual7":3,"qual8":0},{"month":"7鏈?,"dept":"A浜嬩笟閮?,"group":"Delta鎵嬭〃&Echo缁?,"manager":"鍒樻磱","level":"缁勯暱-2绾?,"totalScore":40.2523809523809,"quantScore":32.2523809523809,"qualScore":8.0,"csCountScore":6.0,"new3mScore":1.0,"ratioScore":1.4,"storeMgrScore":5.0,"pptScore":2.0,"qual1":1,"qual2":0,"qual3":1,"qual4":1,"qual5":2,"qual6":1,"qual7":0,"qual8":0},{"month":"7鏈?,"dept":"A浜嬩笟閮?,"group":"Foxtrot缁?,"manager":"闄堥潤","level":"缁勯暱-2绾?,"totalScore":41.3598159509203,"quantScore":31.3598159509202,"qualScore":10.0,"csCountScore":7.0,"new3mScore":0,"ratioScore":1.63,"storeMgrScore":5.0,"pptScore":2.0,"qual1":0,"qual2":0,"qual3":1,"qual4":1,"qual5":2,"qual6":3,"qual7":0,"qual8":2},{"month":"7鏈?,"dept":"A浜嬩笟閮?,"group":"Golf缁?Hotel2&Hotel","manager":"璧电","level":"缁勯暱-3绾?,"totalScore":60.0971158392435,"quantScore":41.0971158392435,"qualScore":19.0,"csCountScore":9.0,"new3mScore":2.0,"ratioScore":1.88,"storeMgrScore":6.0,"pptScore":3.0,"qual1":3,"qual2":1,"qual3":3,"qual4":1,"qual5":3,"qual6":3,"qual7":1,"qual8":2},{"month":"7鏈?,"dept":"A浜嬩笟閮?,"group":"India缁?,"manager":"瀛欐槑&鍛ㄨ姵","level":"缁勯暱-3绾?,"totalScore":47.75,"quantScore":31.75,"qualScore":16.0,"csCountScore":9.0,"new3mScore":5.0,"ratioScore":3.65,"storeMgrScore":1.0,"pptScore":2.0,"qual1":3,"qual2":2,"qual3":2,"qual4":3,"qual5":1,"qual6":1,"qual7":1,"qual8":2},{"month":"7鏈?,"dept":"A浜嬩笟閮?,"group":"Juliet缁?鎵嬭〃鎷煎澶?鎶栭煶","manager":"鍚存稕","level":"缁勯暱-3绾?,"totalScore":60.6385714285714,"quantScore":41.6385714285714,"qualScore":19.0,"csCountScore":7.0,"new3mScore":1.0,"ratioScore":2.97,"storeMgrScore":6.0,"pptScore":6.0,"qual1":3,"qual2":2,"qual3":2,"qual4":3,"qual5":2,"qual6":3,"qual7":0,"qual8":3},{"month":"7鏈?,"dept":"B浜嬩笟閮?,"group":"Lima&Lima2&Mike缁?,"manager":"閮戝崕","level":"涓荤-2绾?,"totalScore":55.3830769230769,"quantScore":41.3830769230769,"qualScore":14.0,"csCountScore":8.0,"new3mScore":2.0,"ratioScore":1.3,"storeMgrScore":6.0,"pptScore":2.0,"qual1":2,"qual2":0,"qual3":1,"qual4":2,"qual5":2,"qual6":2,"qual7":1,"qual8":0},{"month":"7鏈?,"dept":"C浜嬩笟閮?,"group":"November缁?,"manager":"榛勪附","level":"涓荤-2绾?,"totalScore":59.57,"quantScore":39.57,"qualScore":20.0,"csCountScore":12.3333333333333,"new3mScore":32.0,"ratioScore":4.5,"storeMgrScore":2.0,"pptScore":4.0,"qual1":2,"qual2":3,"qual3":3,"qual4":3,"qual5":1,"qual6":1,"qual7":2,"qual8":1},{"month":"7鏈?,"dept":"鏀寔缁?,"group":"Oscar缁?,"manager":"鏋楀嘲","level":"涓荤-1绾?,"totalScore":32.6923076923077,"quantScore":28.6923076923077,"qualScore":4.0,"csCountScore":3.0,"new3mScore":0,"ratioScore":0.65,"storeMgrScore":1.0,"pptScore":4.0,"qual1":0,"qual2":1,"qual3":1,"qual4":0,"qual5":1,"qual6":1,"qual7":0,"qual8":0},{"month":"7鏈?,"dept":"A浜嬩笟閮?,"group":"Quebec缁?Papa","manager":"寰愭澃","level":"缁勯暱-1-1绾?,"totalScore":43.1333333333333,"quantScore":32.1333333333333,"qualScore":11.0,"csCountScore":6.0,"new3mScore":2.0,"ratioScore":2.02,"storeMgrScore":5.0,"pptScore":2.0,"qual1":1,"qual2":1,"qual3":1,"qual4":2,"qual5":1,"qual6":3,"qual7":1,"qual8":0},{"month":"1銆侀」鐩鐞嗛毦搴︿緷鎹畾閲忎笌瀹氭€х患鍚堣瘎浼版硶璁＄畻寰楀垎锛屽畾閲忔寚鏍囨潈閲嶅崰姣?0%锛屽畾鎬у洜绱犳潈閲嶅崰姣?0%锛沑n2銆佸畾閲忔寚鏍囦笅鏈?椤癸紝100鍒?椤癸紝70%鏉冮噸涓嬪叡璁?0鍒嗭紱瀹氭€у洜绱?0椤癸紝涓嶆秹鍙婃垨鍙互蹇界暐锛屽垯涓?鍒嗭紱濡傛秹鍙婂垯鏍规嵁澶с€佷腑銆佸皬璁＄畻姣忛」寰楀垎鍒嗗埆涓?鍒嗐€?鍒嗗拰1鍒嗭紝鏈€楂樺緱鍒?0鍒嗭紝鍚堣100鍒嗭紱\n3銆佸畾閲忛毦搴︽寚鏍囦负鍏抽敭鎸囨爣锛屽師鍒欎笂绠＄悊浜烘暟瓒婂or鏂颁汉鍗犳瘮瓒婇珮or绠＄悊閰嶇疆瓒婂皯or瀵规帴椤圭洰瓒婂or澶嶇洏娆℃暟瓒婂锛岀鐞嗛毦搴﹁秺澶э紱瀹氭€у洜绱犱富瑕佷负闄勫姞琛ュ厖鍥犵礌锛岄渶瑕佷緷鎹壒娈婇」鐩疄闄呬笟鍔″紑灞曟儏鍐佃瘎鍒嗭紱\n4銆佺鐞嗛毦搴﹁瘎浼板弬鑰冩爣鍑嗗垎锛歕n     缁勯暱1-1/1-2绾э細绠＄悊闅惧害30-40鍒哱n     缁勯暱2绾э細绠＄悊闅惧害41-50鍒哱n     缁勯暱3绾э細绠＄悊闅惧害51-60鍒哱n     涓荤绾?/2/3锛氱鐞嗛毦搴?1-80鍒哱n     缁忕悊绾?/2/3锛氱鐞嗛毦搴︼紴81鍒哱n5銆佷緷鎹幇闃舵鍥㈤槦绠＄悊姘村钩鍙婃墍璐熻矗搴楅摵绠＄悊闅惧害锛岀鐞嗙瓑绾у湪涓婅堪鍙傝€冩爣鍑嗗垎涔嬪唴锛屽悓鏃惰瀹氬熀鍑嗗垎鏁板樊鍊悸?鍒嗗潎涓烘甯稿€硷紝鍩哄噯鍒嗗樊鍊硷紴5鍒嗭紝閫傚綋缁欎簣濂栧姳or琛ュ姪锛沑n6銆佹绠＄悊闅惧害璇勪及涓虹煭鏈熻涓猴紝鍚屾椂瑕佸熀浜庣鐞嗛毦搴﹁瘎鍒嗕笌绠＄悊鑰呰嚜韬兘鍔涙按骞宠繘琛屽尮閰嶏細绠＄悊闅惧害楂橈紝绠＄悊姘村钩楂橈紝浣嗚秴鍑?鍒嗗樊寮傦紝濂栧姳閲戦X鍏冿紱\n     绠＄悊闅惧害楂橈紝绠＄悊姘村钩浣庯紝浣嗗洜鐗规畩鎯呭喌锛屽鏃犳硶蹇€熻皟鎹㈢粍鍒紝鏃犳硶蹇€熻ˉ鍏呬汉鍛樼瓑锛屽彲琛ュ姪閲戦Y鍏冿紱绠＄悊闅惧害浣庯紝绠＄悊姘村钩楂?浣庯紝浼樺厛璋冮厤缁勫埆锛屼絾鏃犺ˉ鍔╋紱\n7銆佺鐞嗗鍔?琛ュ姪鍙傝€冮噾棰濓細\n      鍩哄噯鍒嗗樊鍊?-10鍒嗭紝濂栧姳/琛ュ姪閲戦500鍏僜n      鍩哄噯鍒嗗樊鍊?1-15鍒嗭紝濂栧姳/琛ュ姪閲戦1000鍏僜n      鍩哄噯鍒嗗樊鍊?6-20鍒嗭紝濂栧姳/琛ュ姪閲戦1500鍏僜n","dept":"","group":"","manager":"","level":"","totalScore":0,"quantScore":0,"qualScore":0,"csCountScore":0,"new3mScore":0,"ratioScore":0,"storeMgrScore":0,"pptScore":0,"qual1":0,"qual2":0,"qual3":0,"qual4":0,"qual5":0,"qual6":0,"qual7":0,"qual8":0}];




var DEFAULT_OPERATIONS = [

  {id:1, projectId:"P001", period:"2026-05", fteActual:28, attendance:96.5, ticketVol:12580, responseTime:98, resolveTime:320, csat:4.8, resolutionRate:97.2, reviewRate:82.5, health:"馃煝"},

  {id:2, projectId:"P002", period:"2026-05", fteActual:42, attendance:94.2, ticketVol:18420, responseTime:88, resolveTime:290, csat:4.6, resolutionRate:95.8, reviewRate:78.3, health:"馃煛"},

  {id:3, projectId:"P003", period:"2026-05", fteActual:52, attendance:91.8, ticketVol:22100, responseTime:75, resolveTime:380, csat:4.2, resolutionRate:91.5, reviewRate:65.2, health:"馃敶"},

  {id:4, projectId:"P004", period:"2026-05", fteActual:24, attendance:97.1, ticketVol:9800, responseTime:105, resolveTime:310, csat:4.9, resolutionRate:98.1, reviewRate:85.6, health:"馃煝"},

  {id:5, projectId:"P005", period:"2026-05", fteActual:33, attendance:95.0, ticketVol:15600, responseTime:92, resolveTime:295, csat:4.5, resolutionRate:94.5, reviewRate:76.8, health:"馃煛"},

  {id:6, projectId:"P006", period:"2026-05", fteActual:15, attendance:88.0, ticketVol:8900, responseTime:130, resolveTime:420, csat:3.8, resolutionRate:88.0, reviewRate:60.1, health:"馃敶"},

];
var OPERATIONS = [];



var DEFAULT_ISSUES = [

  {id:1, projectId:"P002", projectName:"瀹剁數鑷惀瀹㈡湇椤圭洰", type:"鏁存敼", desc:"杩炵画涓ゅ懆婊℃剰搴︿綆浜庣洰鏍囧€?.7", priority:"閲嶈", owner:"鍒樻磱", assignee:"鍒樻磱", status:"澶勭悊涓?, source:"鐩戞帶棰勮", responsibility:"鎵挎帴鏂?, createdAt:"2026-05-15", solution:""},

  {id:2, projectId:"P003", projectName:"鏈嶈鍝佺墝瀹㈡湇澶栧寘", type:"瀹㈣瘔", desc:"澶т績鏈熼棿绯荤粺宕╂簝瀵艰嚧鍥炲瓒呮椂锛屽搧鐗屾柟鎶曡瘔", priority:"绱ф€?, owner:"闄堥潤", assignee:"闄堥潤", status:"寰呴獙鏀?, source:"鍝佺墝鍙嶉", responsibility:"鍏卞悓", createdAt:"2026-05-10", solution:"宸叉惌寤哄鐢ㄤ細璇濆垎閰嶆満鍒讹紝澧炲姞鐔旀柇淇濇姢"},

  {id:3, projectId:"P006", projectName:"杩愬姩鍝佺墝瀹㈡湇椤圭洰", type:"浼樺寲", desc:"椤圭洰鍒╂鼎鐜囨寔缁负璐燂紝闇€閲嶆柊鏍哥畻鎴愭湰缁撴瀯", priority:"绱ф€?, owner:"闄堥潤", assignee:"鐜嬪己", status:"寰呭鐞?, source:"璐㈠姟棰勮", responsibility:"鎵挎帴鏂?, createdAt:"2026-05-20", solution:""},

  {id:4, projectId:"P001", projectName:"缇庡鏃楄埌搴楀鏈嶉」鐩?, type:"浼樺寲", desc:"澶т績棰勬闇€瑕佹洿鏂帮紝鍘诲勾鍙?1鍑虹幇浜烘墜涓嶈冻", priority:"涓€鑸?, owner:"寮犱紵", assignee:"寮犱紵", status:"宸插叧闂?, source:"浜哄伐涓婃姤", responsibility:"鎵挎帴鏂?, createdAt:"2026-04-01", solution:"宸插畬鎴愬ぇ淇冧汉鍔涢妗堬紝澧炲姞20%涓存椂浜哄姏鍌ㄥ"},

];
var ISSUES = [];

var DEFAULT_AGENT_PERFORMANCE = [
  {id:1, projectId:"P001", agentName:"寮犱紵", group:"A缁?, status:"杞", agentType:"鍞墠", month:"2026-05", salesAmount:52000, conversionRate:3.8, workVolume:0, firstResolveRate:0, responseTime:105, csat:4.9, serviceVolume:1258, reward:0, penalty:0},
  {id:2, projectId:"P001", agentName:"鏉庡", group:"A缁?, status:"杞", agentType:"鍞墠", month:"2026-05", salesAmount:48000, conversionRate:3.5, workVolume:0, firstResolveRate:0, responseTime:98, csat:4.8, serviceVolume:1102, reward:200, penalty:0},
  {id:3, projectId:"P002", agentName:"鍒樻磱", group:"B缁?, status:"杞", agentType:"鍞悗", month:"2026-05", salesAmount:0, conversionRate:0, workVolume:1842, firstResolveRate:96.1, responseTime:92, csat:4.7, serviceVolume:1842, reward:0, penalty:0},
  {id:4, projectId:"P003", agentName:"闄堥潤", group:"B缁?, status:"璇曠敤鏈?, agentType:"鍞悗", month:"2026-05", salesAmount:0, conversionRate:0, workVolume:2210, firstResolveRate:91.8, responseTime:78, csat:4.3, serviceVolume:2210, reward:0, penalty:100},
  {id:5, projectId:"P004", agentName:"鐜嬪己", group:"A缁?, status:"杞", agentType:"缁煎悎", month:"2026-05", salesAmount:25000, conversionRate:2.1, workVolume:980, firstResolveRate:98.5, responseTime:110, csat:4.9, serviceVolume:980, reward:0, penalty:0},
  {id:6, projectId:"P005", agentName:"璧电", group:"B缁?, status:"杞", agentType:"鍞悗", month:"2026-05", salesAmount:0, conversionRate:0, workVolume:1560, firstResolveRate:95.2, responseTime:95, csat:4.6, serviceVolume:1560, reward:0, penalty:0},
  {id:7, projectId:"P007", agentName:"瀛欒姵", group:"A缁?, status:"璇曠敤鏈?, agentType:"鍞墠", month:"2026-05", salesAmount:38000, conversionRate:3.2, workVolume:0, firstResolveRate:0, responseTime:88, csat:4.8, serviceVolume:1320, reward:0, penalty:0},
  {id:8, projectId:"P002", agentName:"鍛ㄦ澃", group:"B缁?, status:"杞", agentType:"缁煎悎", month:"2026-05", salesAmount:18000, conversionRate:1.8, workVolume:1620, firstResolveRate:95.8, responseTime:85, csat:4.5, serviceVolume:1620, reward:0, penalty:50},
];
// 缁勫埆璐熻嵎姣旈粯璁ゅ€?
var DEFAULT_GROUP_LOAD_RATIO = [
  {group:"A缁?, month:"2026-05", loadRatio:1.50},
  {group:"B缁?, month:"2026-05", loadRatio:1.35},
];
var GROUP_LOAD_RATIO = [];
// 鎸囨爣鏉冮噸閰嶇疆榛樿鍊?
var DEFAULT_PERFORMANCE_WEIGHTS = {
  "2026-05": {
    "鍞墠": {salesAmount:40, conversionRate:30, responseTime:15, csat:15},
    "鍞悗": {workVolume:40, firstResolveRate:30, responseTime:15, csat:15},
    "缁煎悎": {salesAmount:20, conversionRate:15, workVolume:20, firstResolveRate:15, responseTime:15, csat:15},
  }
};
var PERFORMANCE_WEIGHTS = {};
var AGENT_PERFORMANCE = [];

var DEFAULT_RISK_ALERTS = [
  {id:1, projectId:"P003", projectName:"鏈嶈鍝佺墝瀹㈡湇澶栧寘", riskType:"鍋ュ悍鐘舵€?, severity:"馃敶 楂橀闄?, indicator:"鍋ュ悍鐘舵€侊細馃敶 椋庨櫓", triggerValue:"杩炵画3鍛ㄧ孩鑹?, threshold:"鍋ュ悍鐘舵€佷笉寰楄繛缁?鍛ㄧ孩鑹?, status:"鏈鐞?, createdAt:"2026-05-28"},
  {id:2, projectId:"P002", projectName:"瀹剁數鑷惀瀹㈡湇椤圭洰", riskType:"SLA瓒呮爣", severity:"馃煛 涓闄?, indicator:"骞冲潎鍝嶅簲鏃堕暱锛?8s", triggerValue:"88s > 鐩爣90s", threshold:"鍝嶅簲鏃堕暱 鈮?SLA鍝嶅簲鐩爣", status:"澶勭悊涓?, createdAt:"2026-05-30"},
  {id:3, projectId:"P006", projectName:"杩愬姩鍝佺墝瀹㈡湇椤圭洰", riskType:"鎴愭湰瓒呮敮", severity:"馃敶 楂橀闄?, indicator:"鍒╂鼎鐜囷細-10.7%", triggerValue:"-10.7% < 鐩爣鈮?%", threshold:"椤圭洰鍒╂鼎鐜?鈮?0%", status:"鏈鐞?, createdAt:"2026-05-25"},
  {id:4, projectId:"P001", projectName:"缇庡鏃楄埌搴楀鏈嶉」鐩?, riskType:"婊℃剰搴︿笅婊?, severity:"馃煛 涓闄?, indicator:"CSAT锛?.9", triggerValue:"4.9 杈冧笂鏈堜笅闄?.2", threshold:"CSAT 鈮?4.7", status:"宸插拷鐣?, createdAt:"2026-05-20"},
  {id:5, projectId:"P005", projectName:"椋熷搧鐢熼矞瀹㈡湇椤圭洰", riskType:"SLA瓒呮爣", severity:"馃煛 涓闄?, indicator:"骞冲潎鍝嶅簲鏃堕暱锛?2s", triggerValue:"92s > 鐩爣90s", threshold:"鍝嶅簲鏃堕暱 鈮?SLA鍝嶅簲鐩爣", status:"澶勭悊涓?, createdAt:"2026-05-31"},
];
var RISK_ALERTS = [];


var DEFAULT_KNOWLEDGE = [

  {id:1, title:"缇庡澶т績瀹㈡湇鏍囧噯璇濇湳SOP", type:"SOP娴佺▼浼樺寲", tags:"缇庡,澶т績,SOP,璇濇湳", scope:"閫氱敤", permission:"鍏紑", createdAt:"2025-11-20", updateTime:"2026-06-08", views:328, downloads:56, description:"鍙?1澶т績鏈熼棿缇庡绫荤洰鐨勫鏈嶅簲瀵规爣鍑嗘祦绋嬶紝鍖呭惈蹇€熷洖澶嶈瘽鏈€侀€€鎹㈣揣澶勭悊銆佹姇璇夊崌绾ц矾寰勭瓑鏍稿績鍐呭銆?},

  {id:2, title:"宸瘎搴旀€ュ鐞嗘祦绋嬶紙鍚ā鏉匡級", type:"椋庢帶搴旀€ラ妗?, tags:"宸瘎,搴旀€?妯℃澘", scope:"閫氱敤", permission:"鍏紑", createdAt:"2026-01-15", updateTime:"2026-06-05", views:256, downloads:43, description:"宸瘎鍑虹幇鍚庣殑鏍囧噯搴旀€ュ鐞嗘祦绋嬶紝鍖呭惈鍒嗙被鍨嬪樊璇勫洖澶嶆ā鏉裤€佸唴閮ㄥ崌绾ф満鍒躲€佹暟鎹鐩樼瓑鐜妭銆?},

  {id:3, title:"AI鏅鸿兘鍥炲閰嶇疆鎸囧崡 v2.0", type:"AI鎻愭晥璧嬭兘", tags:"AI,鏅鸿兘鍥炲,閰嶇疆", scope:"閫氱敤", permission:"鍏紑", createdAt:"2026-03-10", updateTime:"2026-06-03", views:198, downloads:67, description:"AI鏅鸿兘鍥炲绯荤粺鐨勯厤缃寚鍗梫2.0锛屽寘鍚煡璇嗗簱鎼缓銆佸洖澶嶈鍒欓厤缃€佷汉宸ュ厹搴曠瓥鐣ョ瓑鍏ㄦ祦绋嬫寚寮曘€?},

  {id:4, title:"鎴愭湰鎺у埗鐩爣鍒嗚В琛紙Q2锛?, type:"鎴愭湰鐩爣鎺у埗", tags:"鎴愭湰,鐩爣,鍒嗚В,Q2", scope:"鍏ㄥ钩鍙?, permission:"鍐呴儴", createdAt:"2026-04-01", updateTime:"2026-06-01", views:145, downloads:28, description:"2026骞碤2鎴愭湰鎺у埗鐩爣鍒嗚В琛紝鍖呭惈鍚勯」鐩爣鎴愭湰鐜囥€佸疄闄呮墽琛岃窡韪€佸亸宸垎鏋愮瓑鏍稿績鏁版嵁銆?},

  {id:5, title:"鏂板鏈嶅叆鑱屽煿璁墜鍐岋紙2026鐗堬級", type:"鍩硅鏉愭枡", tags:"鍩硅,鏂颁汉,鍏ヨ亴,鎵嬪唽", scope:"閫氱敤", permission:"鍏紑", createdAt:"2025-09-01", updateTime:"2026-05-28", views:412, downloads:89, description:"2026鐗堟柊浜哄鏈嶅叆鑱屽煿璁墜鍐岋紝娑电洊骞冲彴瑙勫垯銆佷骇鍝佺煡璇嗐€佽瘽鏈熀纭€銆佺郴缁熸搷浣溿€佸紓甯稿鐞嗕簲澶фā鍧椼€?},

  {id:6, title:"楂橀瀹㈣瘔闂璇濇湳绮鹃€?, type:"浼樼璇濇湳钀冨彇", tags:"瀹㈣瘔,璇濇湳,绮鹃€?楂橀", scope:"閫氱敤", permission:"鍏紑", createdAt:"2026-02-20", updateTime:"2026-05-25", views:367, downloads:72, description:"鍚勯」鐩珮棰戝璇夐棶棰樼殑浼樼鍥炲璇濇湳绮鹃€夐泦锛岃鐩栫墿娴併€佽川閲忋€侀€€鎹㈣揣绛夊崄澶х被甯歌瀹㈣瘔鍦烘櫙銆?},

  {id:7, title:"BPO椤圭洰浜哄姏鎴愭湰浼樺寲鏂规", type:"鎴愭湰鐩爣鎺у埗", tags:"BPO,浜哄姏,鎴愭湰,浼樺寲", scope:"鐗瑰畾鍝佺被", permission:"鍙楅檺", createdAt:"2026-05-10", updateTime:"2026-06-07", views:89, downloads:15, description:"BPO椤圭洰浜哄姏鎴愭湰浼樺寲鏂规锛屽寘鍚帓鐝ā鍨嬩紭鍖栥€佹妧鑳界煩闃垫彁鍗囥€佸椤圭洰鍏变韩姹犵瓑闄嶆湰澧炴晥绛栫暐銆?},

  {id:8, title:"澶т績鍓嶇郴缁熷帇娴嬫搷浣滄寚寮?, type:"椋庢帶搴旀€ラ妗?, tags:"澶т績,绯荤粺,鍘嬫祴,鎿嶄綔", scope:"閫氱敤", permission:"鍐呴儴", createdAt:"2026-04-15", updateTime:"2026-05-30", views:124, downloads:31, description:"澶т績鍓嶇郴缁熷帇鍔涙祴璇曠殑鏍囧噯鎿嶄綔鎸囧紩鏂囨。锛屾兜鐩栧帇娴嬪満鏅璁°€佹墽琛屾楠ゃ€侀棶棰樿褰曞強淇璺熻釜銆?},

];
var DEFAULT_HANDOVERS = [

  {id:1, projectId:"P001", projectName:"缇庡鏃楄埌搴楀鏈嶉」鐩?, from:"鐜嬭姵", to:"寮犱紵", date:"2026-03-15", status:"宸插畬鎴?, summary:"瀹屾垚鍏ㄩ儴鍩虹妗ｆ+鐩爣浜ゆ帴锛岃繍钀ユ暟鎹凡鍚屾"},

  {id:2, projectId:"P003", projectName:"鏈嶈鍝佺墝瀹㈡湇澶栧寘", from:"璧典附", to:"闄堥潤", date:"2025-11-20", status:"宸插畬鎴?, summary:"BPO鐗规畩鎴愭湰鏍哥畻鏂瑰紡宸查噸鐐逛氦鎺?},

  {id:3, projectId:"P005", projectName:"椋熷搧鐢熼矞瀹㈡湇椤圭洰", from:"瀛欑", to:"鍒樻磱", date:"2026-02-28", status:"宸插畬鎴?, summary:"椋熷搧绫荤洰鐨勭壒娈婇€€鎹㈣揣鏀跨瓥宸蹭氦鎺?},

];
var HANDOVERS = [];




// ===== Toast 鎻愮ず鍑芥暟锛堜富鐣岄潰鐗堬紝琛ヤ笂 login.html 閲屾湁鐨勫嚱鏁帮級=====
function showToast(msg, type) {
  try {
    var el = document.getElementById('toast-msg');
    if (el) {
      el.textContent = msg;
      el.className = 'toast-msg' + (type ? ' toast-' + type : '');
      el.classList.add('show');
      setTimeout(function() { el.classList.remove('show'); }, 2500);
    } else {
      // fallback锛氱敤 alert 浠ｆ浛
    }
  } catch(e) {
  }
}

// ===== 鏁版嵁鎸佷箙鍖栵紙褰诲簳淇鐗堬級=====
// 瀹夊叏鍐欏叆 localStorage锛堝甫 quota 澶勭悊鍜岀敤鎴锋彁绀猴級
function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch(e) {
    if (e.name === 'QuotaExceededError' || e.code === 22) {
      // 灏濊瘯娓呯悊瓒呭ぇ澶村儚
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
      alert('娴忚鍣ㄥ瓨鍌ㄧ┖闂翠笉瓒筹紝鏃犳硶淇濆瓨淇敼锛乗n璇锋竻鐞嗘祻瑙堝櫒鏁版嵁锛堣缃啋闅愮鍜屽畨鍏ㄢ啋娓呴櫎娴忚鏁版嵁锛夛紝鐒跺悗閲嶆柊鐧诲綍銆?);
    }
    return false;
  }
}

// 榛樿鐢ㄦ埛鏁版嵁锛堝彧鍦ㄩ娆″垵濮嬪寲鏃朵娇鐢級
var DEFAULT_USERS = [
  {id:"U001", name:"绯荤粺鍒涘缓鑰?, username:"admin", role:"瓒呯骇绠＄悊鍛?, status:"宸叉縺娲?, registerTime:"2025-01-01", password:"admin123", phone:"138****0001", email:"admin@chanseen.com", approvedBy:"system", remark:"绯荤粺鍒濆鍖栬秴绾х鐞嗗憳"},
  {id:"U002", name:"鐜嬬鐞?, username:"wangadmin", role:"绠＄悊鍛?, status:"宸叉縺娲?, registerTime:"2025-03-15", password:"wang456", phone:"139****1111", email:"wang@chanseen.com", approvedBy:"admin", remark:""},
  {id:"U003", name:"鏉庣粍闀?, username:"lilead", role:"瀹㈡湇缁勯暱", status:"寰呭鏍?, registerTime:"2026-05-20", password:"li789", phone:"137****2222", email:"li@chanseen.com", approvedBy:"", remark:"鏂板叆鑱岀敵璇?},
  {id:"U004", name:"寮犱富绠?, username:"zhangsup", role:"瀹㈡湇涓荤", status:"宸叉嫆缁?, registerTime:"2026-05-18", password:"zhang000", phone:"136****3333", email:"zhang@chanseen.com", approvedBy:"wangadmin", remark:"淇℃伅涓嶅畬鏁?},
  {id:"U005", name:"闄堢粡鐞?, username:"chenmgr", role:"瀹㈡湇缁忕悊", status:"宸叉縺娲?, registerTime:"2025-06-10", password:"chen111", phone:"135****4444", email:"chen@chanseen.com", approvedBy:"admin", remark:""},
  {id:"U006", name:"璧典笓鍛?, username:"zhaocs", role:"瀹㈡湇缁勯暱", status:"寰呭鏍?, registerTime:"2026-06-01", password:"zhao222", phone:"134****5555", email:"zhao@chanseen.com", approvedBy:"", remark:"璺ㄩ儴闂ㄨ皟鍔?}
];

var DEFAULT_PROJECTS = [
  {id:"P001", name:"缇庡鏃楄埌搴楀鏈嶉」鐩?, brand:"鍏拌敾", category:"缇庡", serviceMode:"TP椤圭洰", workplace:"娴庡崡", pm:"寮犱紵", director:"鏉庢槑", pmHistory:[{name:"鐜嬭姵", from:"2025-06", to:"2026-03", reason:"璋冨矖"}], status:"浼樿川鍋ュ悍搴?, startDate:"2025-04-01", endDate:"2026-12-31", base:"娴庡崡鑱屽満2F", platforms:"澶╃尗,鎶栭煶", serviceHours:"09:00-24:00", fteTarget:30, slaResponse:120, slaResolve:360, costBudget:450000, revenue:520000, profitRate:13.5, targetRate:95.0, healthScore:88, health:"馃煝"},
  {id:"P002", name:"瀹剁數鑷惀瀹㈡湇椤圭洰", brand:"缇庣殑", category:"瀹剁數", serviceMode:"DP椤圭洰", workplace:"娣勫崥", pm:"鍒樻磱", director:"鐜嬪己", pmHistory:[], status:"骞崇ǔ甯歌搴?, startDate:"2025-01-15", endDate:"2026-12-31", base:"娣勫崥鑱屽満1F", platforms:"浜笢,澶╃尗", serviceHours:"08:00-22:00", fteTarget:45, slaResponse:90, slaResolve:300, costBudget:680000, revenue:750000, profitRate:9.3, targetRate:92.0, healthScore:72, health:"馃煛"},
  {id:"P003", name:"鏈嶈鍝佺墝瀹㈡湇澶栧寘", brand:"浼樿。搴?, category:"鏈嶈", serviceMode:"BPO椤圭洰", workplace:"鏉窞", pm:"闄堥潤", director:"鏉庢槑", pmHistory:[{name:"璧典附", from:"2025-01", to:"2025-11", reason:"绂昏亴"}], status:"椋庨櫓棰勮搴?, startDate:"2025-01-10", endDate:"2026-06-30", base:"鏉窞鑱屽満3F", platforms:"鍏ㄥ钩鍙?, serviceHours:"08:00-24:00", fteTarget:60, slaResponse:60, slaResolve:240, costBudget:880000, revenue:920000, profitRate:4.3, targetRate:88.0, healthScore:55, health:"馃敶"},
  {id:"P004", name:"姣嶅┐鐢ㄥ搧瀹㈡湇椤圭洰", brand:"濂藉瀛?, category:"姣嶅┐", serviceMode:"TP椤圭洰", workplace:"娴庡崡", pm:"寮犱紵", director:"鐜嬪己", pmHistory:[], status:"浼樿川鍋ュ悍搴?, startDate:"2025-08-01", endDate:"2027-01-31", base:"娴庡崡鑱屽満2F", platforms:"澶╃尗,浜笢,鎷煎澶?, serviceHours:"09:00-21:00", fteTarget:25, slaResponse:120, slaResolve:360, costBudget:320000, revenue:380000, profitRate:15.8, targetRate:96.0, healthScore:90, health:"馃煝"},
  {id:"P005", name:"椋熷搧鐢熼矞瀹㈡湇椤圭洰", brand:"涓夊彧鏉鹃紶", category:"椋熷搧", serviceMode:"DP椤圭洰", workplace:"娣勫崥", pm:"鍒樻磱", director:"鏉庢槑", pmHistory:[{name:"瀛欑", from:"2025-03", to:"2026-02", reason:"鍐呴儴璋冩崲"}], status:"骞崇ǔ甯歌搴?, startDate:"2025-03-01", endDate:"2026-08-31", base:"娣勫崥鑱屽満1F", platforms:"澶╃尗,鎶栭煶", serviceHours:"08:00-23:00", fteTarget:35, slaResponse:90, slaResolve:300, costBudget:520000, revenue:600000, profitRate:13.3, targetRate:93.0, healthScore:75, health:"馃煛"},
  {id:"P006", name:"杩愬姩鍝佺墝瀹㈡湇椤圭洰", brand:"鑰愬厠", category:"杩愬姩", serviceMode:"BPO椤圭洰", workplace:"鏉窞", pm:"闄堥潤", director:"鐜嬪己", pmHistory:[], status:"楂樺嵄闂搴?, startDate:"2025-06-01", endDate:"2026-05-31", base:"鏉窞鑱屽満3F", platforms:"澶╃尗,瀹樼綉", serviceHours:"09:00-21:00", fteTarget:20, slaResponse:60, slaResolve:240, costBudget:280000, revenue:250000, profitRate:-10.7, targetRate:85.0, healthScore:40, health:"馃敶"},
  {id:"P007", name:"鏅鸿兘瀹跺眳瀹㈡湇椤圭洰", brand:"灏忕背", category:"鏅鸿兘纭欢", serviceMode:"TP椤圭洰", workplace:"鏃犻敗", pm:"寮犱紵", director:"鏉庢槑", pmHistory:[], status:"浼樿川鍋ュ悍搴?, startDate:"2026-03-01", endDate:"2027-02-28", base:"鏃犻敗鑱屽満1F", platforms:"澶╃尗,浜笢,鎶栭煶", serviceHours:"09:00-22:00", fteTarget:35, slaResponse:90, slaResolve:300, costBudget:420000, revenue:480000, profitRate:12.5, targetRate:94.0, healthScore:85, health:"馃煝"}
];

// 鍒濆鍖?USERS
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
  // 棣栨鍒濆鍖?
  USERS = JSON.parse(JSON.stringify(DEFAULT_USERS));
  safeSetItem('chansee_users', JSON.stringify(USERS));
})();

// 鍒濆鍖?PROJECTS
var PROJECTS = [];
(function initProjects() {
  var raw = localStorage.getItem('chansee_projects');
  if (raw && raw !== 'null' && raw !== '[]') {
    try {
      PROJECTS = JSON.parse(raw);
      return;
    } catch(e) {
    }
  }
  PROJECTS = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
  safeSetItem('chansee_projects', JSON.stringify(PROJECTS));
})();

// 鍒濆鍖?OPERATIONS
(function initOperations() {
  var raw = localStorage.getItem('chansee_operations');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  OPERATIONS = JSON.parse(JSON.stringify(DEFAULT_OPERATIONS));
  safeSetItem('chansee_operations', JSON.stringify(OPERATIONS));
})();

// 鍒濆鍖?ISSUES
(function initIssues() {
  var raw = localStorage.getItem('chansee_issues');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  ISSUES = JSON.parse(JSON.stringify(DEFAULT_ISSUES));
  safeSetItem('chansee_issues', JSON.stringify(ISSUES));
})();

// 鍒濆鍖?AGENT_PERFORMANCE
(function initAgentPerformance() {
  var raw = localStorage.getItem('chansee_agent_performance');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  AGENT_PERFORMANCE = JSON.parse(JSON.stringify(DEFAULT_AGENT_PERFORMANCE));
  safeSetItem('chansee_agent_performance', JSON.stringify(AGENT_PERFORMANCE));
})();

// 鍒濆鍖?GROUP_LOAD_RATIO
(function initGroupLoadRatio() {
  var raw = localStorage.getItem('chansee_group_load_ratio');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  GROUP_LOAD_RATIO = JSON.parse(JSON.stringify(DEFAULT_GROUP_LOAD_RATIO || []));
  safeSetItem('chansee_group_load_ratio', JSON.stringify(GROUP_LOAD_RATIO));
})();

// 鍒濆鍖?PERFORMANCE_WEIGHTS
(function initPerformanceWeights() {
  var raw = localStorage.getItem('chansee_performance_weights');
  if (raw && raw !== 'null' && raw !== '{}') {
  }
  PERFORMANCE_WEIGHTS = JSON.parse(JSON.stringify(DEFAULT_PERFORMANCE_WEIGHTS || {}));
  safeSetItem('chansee_performance_weights', JSON.stringify(PERFORMANCE_WEIGHTS));
})();

// ===== 鏂板锛氱湅鏉挎暟鎹ā鍨?=====

// 瀹㈡湇閰嶇疆鏁版嵁
var DEFAULT_STAFF_CONFIG = [
  {id:'SC001', role:'鍞墠瀹㈡湇', count:68, pct:37, workplace:'鍚堣偉', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'SC002', role:'鍞悗瀹㈡湇', count:52, pct:28, workplace:'鍚堣偉', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'SC003', role:'缁煎悎瀹㈡湇', count:45, pct:24, workplace:'鍚堣偉', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'SC004', role:'瀹㈡湇绠＄悊', count:14, pct:8, workplace:'鍚堣偉', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'SC005', role:'鏁版嵁涓撳憳', count:7, pct:4, workplace:'鍚堣偉', updatedAt:'2026-06-20', updatedBy:'admin'}
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

// 宸ヤ綔閲忔暟鎹?
var DEFAULT_WORKLOAD_DATA = [
  {id:'WL001', name:'璁㈠崟澶勭悊', count:625, ratio:100, workplace:'鍚堣偉', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'WL002', name:'閫€娆惧鐞?, count:342, ratio:55, workplace:'鍚堣偉', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'WL003', name:'鎶曡瘔澶勭悊', count:198, ratio:32, workplace:'鍚堣偉', updatedAt:'2026-06-20', updatedBy:'admin'},
  {id:'WL004', name:'鎹㈣揣璺熻繘', count:156, ratio:25, workplace:'鍚堣偉', updatedAt:'2026-06-20', updatedBy:'admin'}
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

// KPI鍘嗗彶鏁版嵁
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

// 鏁版嵁淇敼鍘嗗彶
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

// 鏁版嵁鏉冮檺閰嶇疆
var DEFAULT_DATA_PERMISSIONS = [
  {
    role: '瓒呯骇绠＄悊鍛?,
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
    role: '绠＄悊鍛?,
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
    role: '瀹㈡湇涓荤',
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

// 鍒濆鍖?RISK_ALERTS
(function initRiskAlerts() {
  var raw = localStorage.getItem('chansee_risk_alerts');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  RISK_ALERTS = JSON.parse(JSON.stringify(DEFAULT_RISK_ALERTS));
  safeSetItem('chansee_risk_alerts', JSON.stringify(RISK_ALERTS));
})();

// 鍒濆鍖?KNOWLEDGE
(function initKnowledge() {
  var raw = localStorage.getItem('chansee_knowledge');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  KNOWLEDGE = JSON.parse(JSON.stringify(DEFAULT_KNOWLEDGE));
  safeSetItem('chansee_knowledge', JSON.stringify(KNOWLEDGE));
})();

// 鍒濆鍖?HANDOVERS
(function initHandovers() {
  var raw = localStorage.getItem('chansee_handovers');
  if (raw && raw !== 'null' && raw !== '[]') {
  }
  HANDOVERS = JSON.parse(JSON.stringify(DEFAULT_HANDOVERS));
  safeSetItem('chansee_handovers', JSON.stringify(HANDOVERS));
})();

function saveUsers() {
  var ok = safeSetItem('chansee_users', JSON.stringify(USERS));
  if (!ok) { alert('鈿狅笍 鐢ㄦ埛鏁版嵁淇濆瓨澶辫触锛乗n鍙兘鏄祻瑙堝櫒瀛樺偍绌洪棿涓嶈冻锛岃娓呯悊娴忚鍣ㄦ暟鎹悗閲嶈瘯銆?); return; }
  // 鍚屾鍒?CloudBase
  if (window.CloudBaseSync) {
    // 娣诲姞鏃ュ織锛氭樉绀烘鍦ㄤ繚瀛樼殑鏁版嵁
    
    var p = window.CloudBaseSync.saveAll();
    if (p && typeof p.then === 'function') {
      p.then(function(success) {
        if (success) {
          // 浜戠淇濆瓨鎴愬姛鏃讹紝璁板綍鎴愬姛鏍囪
          try { localStorage.setItem('chansee_users_cloud_saved', 'true'); } catch(e) {}
        } else {
          // 浜戠淇濆瓨澶辫触锛岀粰鐢ㄦ埛鎻愮ず
          if (typeof showToast === 'function') {
            showToast('鈿狅笍 浜戠淇濆瓨澶辫触锛屾暟鎹粎淇濆瓨鍦ㄦ湰鍦版祻瑙堝櫒');
          } else {
          }
          // 鏍囪浜戠淇濆瓨澶辫触
          try { localStorage.setItem('chansee_users_cloud_saved', 'false'); } catch(e) {}
        }
      }).catch(function(err) {
        if (typeof showToast === 'function') {
          showToast('鈿狅笍 浜戠淇濆瓨寮傚父锛屾暟鎹粎淇濆瓨鍦ㄦ湰鍦版祻瑙堝櫒');
        }
        try { localStorage.setItem('chansee_users_cloud_saved', 'false'); } catch(e) {}
      });
    }
  }
}
function saveProjects() {
  var ok = safeSetItem('chansee_projects', JSON.stringify(PROJECTS));
  if (!ok) { alert('鈿狅笍 椤圭洰鏁版嵁淇濆瓨澶辫触锛乗n鍙兘鏄祻瑙堝櫒瀛樺偍绌洪棿涓嶈冻锛岃娓呯悊娴忚鍣ㄦ暟鎹悗閲嶈瘯銆?); return; }
  // 鍚屾鍒?CloudBase
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

// 绾ц仈鍒犻櫎椤圭洰鍙婃墍鏈夊叧鑱旀暟鎹?
function deleteProject(id) {
  if (!confirm('纭鍒犻櫎椤圭洰 ' + id + '锛焅n\n姝ゆ搷浣滀笉鍙仮澶嶏紒')) return;
  PROJECTS = PROJECTS.filter(function(p){ return p.id !== id; });
  saveProjects();
  alert('椤圭洰 ' + id + ' 宸插垹闄わ紒');
  renderArchive();
}

// 鎸佷箙鍖栧綋鍓嶇敤鎴凤紙鍚屾鍒?USERS 鏁扮粍 + 鏇存柊 session锛?
function persistCurrentUser() {
  if (!currentUser) return;
  // 鍚屾鍒?USERS 鏁扮粍
  for (var i = 0; i < USERS.length; i++) {
    if (USERS[i].id === currentUser.id) {
      // 鎶?currentUser 鐨勬墍鏈夊瓧娈靛悓姝ュ埌 USERS[i]
      var keys = Object.keys(currentUser);
      for (var j = 0; j < keys.length; j++) {
        USERS[i][keys[j]] = currentUser[keys[j]];
      }
      break;
    }
  }
  saveUsers();
  // 鏇存柊 session 涓殑 currentUser锛堜笉鍚瘑鐮侊紝浣跨敤 safeSetItem锛?
  var sessionData = JSON.parse(JSON.stringify(currentUser));
  delete sessionData.password;
  safeSetItem('chansee_current_user', JSON.stringify(sessionData));
}


// 褰撳墠鐧诲綍鐢ㄦ埛锛坣ull 琛ㄧず鏈櫥褰曪級
let currentUser = null;

// 鎺у埗涓荤晫闈紙header + main-container锛夋樉绀?闅愯棌
function setAppContentVisible(visible) {
  const hd = document.getElementById("top-header");
  const mc = document.getElementById("main-container");
  if (hd) hd.style.display = visible ? "" : "none";
  if (mc) mc.style.display = visible ? "" : "none";
}

async function checkLogin() {
  try {
    // 鍏堟鏌?login.html 鐨勭櫥褰曠姸鎬?
    const authStr = localStorage.getItem('chanseen_auth');
    if (authStr) {
      try {
        const auth = JSON.parse(authStr);
        const maxAge = auth.remember ? 7 * 24 * 60 * 60 * 1000 : 60 * 60 * 1000;
        if (auth.token && (Date.now() - auth.loginAt) < maxAge) {
          // 銆愰槻閲嶇疆淇銆戝姞杞戒簯绔暟鎹墠锛屽厛澶囦唤鏈湴鐨勭敤鎴锋暟鎹?
          var localUsersBackup = null;
          try {
            var localUsersStr = localStorage.getItem('chansee_users');
            if (localUsersStr) {
              localUsersBackup = JSON.parse(localUsersStr);
            }
          } catch(e) {
          }

          // login.html 鐧诲綍锛氬厛浠庝簯绔姞杞芥渶鏂扮敤鎴锋暟鎹紝鍐嶇敤浜戠鏁版嵁鏋勫缓 currentUser
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

          // 銆愰槻閲嶇疆淇銆戞鏌ヤ簯绔姞杞界殑鏁版嵁鏄惁瀵艰嚧鏁版嵁涓㈠け锛屽鏋滄槸锛岀敤鏈湴澶囦唤鎭㈠
          if (localUsersBackup && Array.isArray(localUsersBackup)) {
            var currentUsername = auth.user?.username || auth.user?.name || 'admin';
            var cloudUser = USERS.find(u => u.username === currentUsername);
            var localUser = localUsersBackup.find(u => u.username === currentUsername);
            
            // 鑾峰彇鏈湴鍜屼簯绔敤鎴风殑鏄剧ず鍚嶇О锛堝悓鏃舵鏌?name 鍜?nickname 瀛楁锛?
            function getDisplayName(u) {
              if (!u) return '';
              return (u.name && u.name !== '绯荤粺鍒涘缓鑰? && u.name !== '鏈缃? && u.name !== '') ? u.name
                   : (u.nickname && u.nickname !== '绯荤粺鍒涘缓鑰? && u.nickname !== '鏈缃? && u.nickname !== '') ? u.nickname
                   : '';
            }
            // 妫€鏌ユ槸鍚﹂渶瑕佺敤鏈湴澶囦唤鎭㈠锛堟鏌ユ墍鏈変釜浜鸿缃瓧娈碉級
            var needRestore = false;
            if (localUser && cloudUser) {
              if (localUser.name && localUser.name !== '绯荤粺鍒涘缓鑰? && (!cloudUser.name || cloudUser.name === '绯荤粺鍒涘缓鑰?)) needRestore = true;
              if (localUser.nickname && localUser.nickname !== '绯荤粺鍒涘缓鑰? && (!cloudUser.nickname || cloudUser.nickname === '绯荤粺鍒涘缓鑰?)) needRestore = true;
              if (localUser.birthday && (!cloudUser.birthday || cloudUser.birthday === '')) needRestore = true;
              if (localUser.phone && (!cloudUser.phone || cloudUser.phone === '')) needRestore = true;
              if (localUser.email && (!cloudUser.email || cloudUser.email === '')) needRestore = true;
              if (localUser.position && localUser.position !== '瀹㈡湇鎬荤洃' && (!cloudUser.position || cloudUser.position === '' || cloudUser.position === '瀹㈡湇鎬荤洃')) needRestore = true;
              if (localUser.brand && localUser.brand !== 'Chanseen' && (!cloudUser.brand || cloudUser.brand === '' || cloudUser.brand === 'Chanseen')) needRestore = true;
            } else if (localUser && !cloudUser) {
              needRestore = true;
            }

            if (needRestore) {
                // 鐢ㄦ湰鍦板浠界殑鏁版嵁鏇存柊 USERS 鏁扮粍
                for (var bi = 0; bi < localUsersBackup.length; bi++) {
                  var bu = localUsersBackup[bi];
                  var found = false;
                  for (var ui = 0; ui < USERS.length; ui++) {
                    if (USERS[ui].id === bu.id || USERS[ui].username === bu.username) {
                      // 妫€鏌ヤ簯绔暟鎹槸鍚︾己灏戝悕绉板瓧娈碉紙鍚屾椂妫€鏌?name 鍜?nickname锛?
                      var cloudHasName = USERS[ui].name && USERS[ui].name !== '绯荤粺鍒涘缓鑰? && USERS[ui].name !== '鏈缃? && USERS[ui].name !== '';
                      var cloudHasNickname = USERS[ui].nickname && USERS[ui].nickname !== '绯荤粺鍒涘缓鑰? && USERS[ui].nickname !== '鏈缃?;
                      if (!cloudHasName && !cloudHasNickname) {
                        // 浜戠娌℃湁姝ｇ‘鐨勫悕绉?鈫?鐢ㄦ湰鍦扮殑琛ュ叏锛堜紭鍏堢敤 name锛?
                        if (bu.name && bu.name !== '绯荤粺鍒涘缓鑰? && bu.name !== '鏈缃?) {
                          USERS[ui].name = bu.name;
                          USERS[ui].nickname = bu.name;
                        } else if (bu.nickname && bu.nickname !== '绯荤粺鍒涘缓鑰?) {
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
                  // 濡傛灉浜戠娌℃湁杩欎釜鐢ㄦ埛锛屽氨鎶婃湰鍦板浠界殑鐢ㄦ埛鍔犺繘鍘?
                  if (!found) {
                    USERS.push(bu);
                  }
                }
                // 淇濆瓨鎭㈠鍚庣殑鏁版嵁鍒?localStorage
                safeSetItem('chansee_users', JSON.stringify(USERS));
                // 灏濊瘯鍐嶆鍚屾鍒颁簯绔紙甯︾粨鏋滄彁绀猴級
                if (window.CloudBaseSync) {
                  var syncP = window.CloudBaseSync.saveAll();
                  if (syncP && typeof syncP.then === 'function') {
                    syncP.then(function() { try { localStorage.setItem('chansee_users_cloud_saved', 'true'); } catch(e){} }).catch(function(){});
                  }
                }
              }
          }

          // 浠?USERS 鏁扮粍锛堜簯绔渶鏂帮級涓煡鎵惧綋鍓嶇敤鎴?
          var cloudUser = null;
          if (auth.user && auth.user.username) {
            cloudUser = USERS.find(u => u.username === auth.user.username);
          }
          if (!cloudUser && auth.user && auth.user.id) {
            cloudUser = USERS.find(u => u.id === auth.user.id);
          }
          // 濡傛灉閮芥病鎵惧埌锛岀敤 U001锛坅dmin锛変綔涓洪粯璁?
          if (!cloudUser) {
            cloudUser = USERS.find(u => u.id === 'U001') || USERS[0];
          }

          currentUser = {
            id: (cloudUser && cloudUser.id) || 'U001',
            username: (cloudUser && cloudUser.username) || auth.user?.username || 'admin',
            name: (cloudUser && cloudUser.name) || (cloudUser && cloudUser.nickname) || '绯荤粺鍒涘缓鑰?,
            role: (cloudUser && cloudUser.role) || auth.user?.role || '瓒呯骇绠＄悊鍛?,
            avatar: (cloudUser && cloudUser.avatar) || '',
            position: (cloudUser && cloudUser.position) || '瀹㈡湇鎬荤洃',
            brand: (cloudUser && cloudUser.brand) || 'Chanseen',
            nickname: (cloudUser && cloudUser.nickname) || (cloudUser && cloudUser.name) || '绯荤粺鍒涘缓鑰?,
            birthday: (cloudUser && cloudUser.birthday) || '',
            phone: (cloudUser && cloudUser.phone) || '',
            email: (cloudUser && cloudUser.email) || '',
            wechatBound: cloudUser ? (cloudUser.wechatBound !== undefined ? cloudUser.wechatBound : true) : true,
            keepStatus: cloudUser ? (cloudUser.keepStatus !== undefined ? cloudUser.keepStatus : false) : false
          };

          // 鍏滃簳淇濇姢锛氬鏋滃尮閰嶅埌鐨勭敤鎴风己灏戣嚜瀹氫箟瀛楁锛岄亶鍘哢SERS鎵句竴涓暟鎹渶瀹屾暣鐨勬潵琛ュ叏
          if (currentUser && (!currentUser.nickname || currentUser.nickname === '绯荤粺鍒涘缓鑰?)) {
            for (var fi = 0; fi < USERS.length; fi++) {
              var fu = USERS[fi];
              if (fu && fu.nickname && fu.nickname !== '绯荤粺鍒涘缓鑰? && fu.nickname !== '鏈缃?) {
                // 鎵惧埌浜嗘湁鑷畾涔夋樀绉扮殑鐢ㄦ埛锛岀敤瀹冩潵琛ュ叏褰撳墠鐢ㄦ埛鐨勪釜浜轰俊鎭?
                if (!currentUser.nickname || currentUser.nickname === '绯荤粺鍒涘缓鑰?) currentUser.nickname = fu.nickname;
                if (!currentUser.birthday) currentUser.birthday = fu.birthday || '';
                if (!currentUser.position || currentUser.position === '瀹㈡湇鎬荤洃') currentUser.position = fu.position || '';
                if (!currentUser.phone) currentUser.phone = fu.phone || '';
                if (!currentUser.email) currentUser.email = fu.email || '';
                break;
              }
            }
          }

          // 鎶婃渶鏂版暟鎹啓鍥?chansee_current_user锛岀‘淇濅笅娆¤兘鐢?
          var sess = JSON.parse(JSON.stringify(currentUser));
          delete sess.password;
          safeSetItem('chansee_current_user', JSON.stringify(sess));

          currentRole = currentUser.role || '瓒呯骇绠＄悊鍛?;
          hideLoginModal();
          updateUserDisplay();
          setAppContentVisible(true);
          // 鐧诲綍鎴愬姛鍚庯紝璁板綍鐧诲綍淇℃伅
          recordLogin();
          return true;
        } else {
          localStorage.removeItem('chanseen_auth');
        }
      } catch(e) {
        localStorage.removeItem('chanseen_auth');
      }
    }

    // 鍐嶆鏌ョ幇鏈夌郴缁熺殑鐧诲綍鐘舵€?
    const raw = localStorage.getItem("chansee_current_user")
              || sessionStorage.getItem("chansee_current_user");
    // 灏濊瘯浠庝簯绔姞杞芥渶鏂版暟鎹?
    if (window.CloudBaseSync) {
      try {
        await window.CloudBaseSync.loadAll();
        // 浠?localStorage 閲嶆柊璇诲彇 USERS 鏁扮粍锛堝凡琚簯绔暟鎹洿鏂帮級
        var savedUsers = localStorage.getItem('chansee_users');
        if (savedUsers) {
          try {
            USERS = JSON.parse(savedUsers);
            // 鏄剧ず褰撳墠鐢ㄦ埛鐨勬暟鎹?
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
      // 鏍￠獙鏄惁杩囨湡
      if (data._expiry && Date.now() > data._expiry) {
        sessionStorage.removeItem("chansee_current_user");
        localStorage.removeItem("chansee_current_user");
        throw new Error("session expired");
      }
      // 鐢?session 閲岀殑 id 浠?USERS 鏁扮粍鍙栨渶鏂板畬鏁存暟鎹?
      const userInDb = USERS.find(u => u.id === data.id);
      if (userInDb) {
        // 鏋勯€?currentUser锛堜笉鍚瘑鐮侊級
        // 娉ㄦ剰锛氫互 USERS 鏁扮粍锛堜簯绔渶鏂版暟鎹級涓哄噯锛屼笉鍐嶇敤鏃х殑 session 鏁版嵁瑕嗙洊
        currentUser = {};
        var keys = Object.keys(userInDb);
        for (var i = 0; i < keys.length; i++) {
          if (keys[i] !== "password") {
            currentUser[keys[i]] = userInDb[keys[i]];
          }
        }
        // 鍚屾鏇存柊 chansee_current_user锛堢‘淇濅笅娆＄櫥褰曟椂鐢ㄧ殑鏄渶鏂版暟鎹級
        var updatedSession = JSON.parse(JSON.stringify(currentUser));
        delete updatedSession.password;
        safeSetItem('chansee_current_user', JSON.stringify(updatedSession));
      } else {
        // 鐢ㄦ埛宸茶鍒犻櫎锛屾竻闄?session
        currentUser = null;
        sessionStorage.removeItem("chansee_current_user");
        localStorage.removeItem("chansee_current_user");
        throw new Error("user not found");
      }
      currentRole = currentUser.role || "鏂扮敤鎴?;
      hideLoginModal();
      updateUserDisplay();
      setAppContentVisible(true);
      return true;
    }
  } catch(e) {
  }
  currentUser = null;
  setAppContentVisible(false);
  showLoginModal();
  return false;
}

// 鏇存柊椤堕儴鐢ㄦ埛鏄剧ず锛堝ご鍍?+ 涓嬫媺鑿滃崟锛?
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
      <span class="user-arrow">鈻?/span>
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
          <span class="user-dropdown-icon">鈿欙笍</span>
          <span>涓汉璁剧疆</span>
        </div>
        <div class="user-dropdown-item" onclick="switchAccount()">
          <span class="user-dropdown-icon">馃攧</span>
          <span>鍒囨崲璐﹀彿</span>
        </div>
        <div class="user-dropdown-divider"></div>
        <div class="user-dropdown-item user-dropdown-danger" onclick="logout()">
          <span class="user-dropdown-icon">馃毆</span>
          <span>閫€鍑鸿处鍙?/span>
        </div>
      </div>
    </div>`;
}

// 澶村儚涓嬫媺鑿滃崟鏄鹃殣
function toggleUserMenu(e) {
  e.stopPropagation();
  const dd = document.getElementById("user-dropdown");
  if (dd) dd.classList.toggle("show");
}

// 鐐瑰嚮澶栭儴鍏抽棴涓嬫媺
function closeUserMenu() {
  const dd = document.getElementById("user-dropdown");
  if (dd) dd.classList.remove("show");
}

document.addEventListener("click", closeUserMenu);

// 璺宠浆鍒颁釜浜鸿缃?
function goToProfile() {
  closeUserMenu();
  // 鑷姩灞曞紑"绯荤粺绠＄悊涓庨厤缃?鍒嗙粍
  const sysSection = document.querySelector('.nav-section[data-section="system"]');
  if (sysSection) {
    sysSection.classList.remove("collapsed");
    const arrow = sysSection.querySelector('.section-arrow');
    if (arrow) arrow.textContent = '鈻?;
  }
  renderModule("profile");
}

// 鍒囨崲璐﹀彿
function switchAccount() {
  closeUserMenu();
  logout();
}

// 鏄剧ず鐧诲綍寮圭獥
function showLoginModal() {
  const modal = document.getElementById("login-modal");
  if (modal) modal.classList.remove("hidden");
}

// 闅愯棌鐧诲綍寮圭獥
function hideLoginModal() {
  const modal = document.getElementById("login-modal");
  if (modal) modal.classList.add("hidden");
}

// 鍒囨崲鐧诲綍/娉ㄥ唽
function switchAuthTab(tab) {
  document.getElementById("auth-login-form").style.display = tab === "login" ? "block" : "none";
  document.getElementById("auth-register-form").style.display = tab === "register" ? "block" : "none";
  document.querySelectorAll(".auth-tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
}

// 鐧诲綍
function doLogin() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;
  const remember = document.getElementById("login-remember")?.checked;
  if (!username || !password) { alert("璇峰～鍐欒处鍙峰拰瀵嗙爜"); return; }

  const btn = document.querySelector("#login-form .btn-primary");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "鐧诲綍涓?; }

  const user = USERS.find(u => u.username === username && u.password === password);
  if (!user) { alert("璐﹀彿鎴栧瘑鐮侀敊璇?); return; }
  if (user.status !== "宸叉縺娲?) { alert("璐﹀彿鐘舵€侊細" + user.status + "锛岃鑱旂郴绠＄悊鍛樺鎵?); return; }

  // 娴呮嫹璐濆畬鏁寸敤鎴峰璞★紙淇濈暀 avatar/position/brand 绛夋墍鏈夊瓧娈碉級
  currentUser = {};
  const keys = Object.keys(user);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] !== "password") {
      currentUser[keys[i]] = user[keys[i]];
    }
  }
  currentRole = user.role || "鏂扮敤鎴?;

  const expiry = Date.now() + 3600000; // 1灏忔椂鏈夋晥鏈?
  // session 鍙瓨 id + 杩囨湡鏃堕棿锛屼笉瀛樺畬鏁寸敤鎴锋暟鎹?
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
  showToast("鐧诲綍鎴愬姛锛屾杩庡洖鏉ワ紒");
}

// 娉ㄥ唽
function doRegister() {
  const name = document.getElementById("reg-name").value.trim();
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value;
  const confirm = document.getElementById("reg-confirm").value;
  const phone = document.getElementById("reg-phone").value.trim();
  const email = document.getElementById("reg-email").value.trim();

  if (!name || !username || !password || !confirm) { alert("璇峰～鍐欏畬鏁翠俊鎭?); return; }

  const btn = document.querySelector("#register-form .btn-primary");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "娉ㄥ唽涓?; }
  if (password !== confirm) { alert("涓ゆ瀵嗙爜涓嶄竴鑷?); return; }
  if (USERS.some(u => u.username === username)) { alert("璇ヨ处鍙峰凡琚敞鍐?); return; }

  const newUser = {
    id: "U" + String(USERS.length + 1).padStart(3, "0"),
    name, username, password, role: "",
    status: "寰呭鏍?, registerTime: new Date().toISOString().slice(0, 10),
    phone: phone || "", email: email || "", approvedBy: "", remark: ""
  };
  USERS.push(newUser);
  saveUsers();
  if (btn) { btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "娉ㄥ唽"; }
  alert("娉ㄥ唽鎴愬姛锛佽绛夊緟绠＄悊鍛樺鎵瑰悗鐧诲綍銆?);
  switchAuthTab("login");
}

// ===== 瀵嗙爜鏄剧ず/闅愯棌鍒囨崲 =====
function togglePassword() {
  const inp = document.getElementById("login-password");
  const eye = document.getElementById("password-eye");
  if (!inp || !eye) return;
  if (inp.type === "password") {
    inp.type = "text";
    eye.textContent = "馃憗锔?; // 鐫佺溂 = 瀵嗙爜鍙
  } else {
    inp.type = "password";
    eye.textContent = "馃檲"; // 闂溂 = 瀵嗙爜闅愯棌
  }
}
function toggleRegPassword() {
  const inp = document.getElementById("reg-password");
  const eye = document.getElementById("reg-password-eye");
  if (!inp || !eye) return;
  if (inp.type === "password") {
    inp.type = "text";
    eye.textContent = "馃憗锔?;
  } else {
    inp.type = "password";
    eye.textContent = "馃檲";
  }
}
function toggleRegConfirm() {
  const inp = document.getElementById("reg-confirm");
  const eye = document.getElementById("reg-confirm-eye");
  if (!inp || !eye) return;
  if (inp.type === "password") {
    inp.type = "text";
    eye.textContent = "馃憗锔?;
  } else {
    inp.type = "password";
    eye.textContent = "馃檲";
  }
}

// 婕旂ず鐧诲綍锛堝揩閫熻繘鍏ョ郴缁燂級
function demoLogin() {
  const auth = {
    token: 'demo_' + Date.now(),
    user: { username: 'demo', name: '婕旂ず鐢ㄦ埛', role: '绠＄悊鍛? },
    loginAt: Date.now(),
    remember: true
  };
  localStorage.setItem('chanseen_auth', JSON.stringify(auth));
  window.location.href = 'index.html';
}

// 閫€鍑虹櫥褰?
function logout() {
  currentUser = null;
  localStorage.removeItem("chansee_current_user");
  sessionStorage.removeItem("chansee_current_user");
  localStorage.removeItem("chanseen_auth");
  sessionStorage.removeItem("chanseen_auth");
  window.location.href = "login.html";
}

// 鍒ゆ柇褰撳墠鐢ㄦ埛鏄惁涓虹鐞嗗憳/瓒呯骇绠＄悊鍛?
function isAdmin() {
  return currentUser && (currentUser.role === "绠＄悊鍛? || currentUser.role === "瓒呯骇绠＄悊鍛?);
}

// 鍒ゆ柇褰撳墠鐢ㄦ埛鏄惁涓鸿秴绾х鐞嗗憳
function isSuperAdmin() {
  return currentUser && currentUser.role === "瓒呯骇绠＄悊鍛?;
}

// ===== 椤圭洰杩愮淮璋冪爺鏁版嵁 =====

// 瀵瑰锛氶」鐩柟鍙～鍐欐劅鍙楁弿杩帮紝涓嶆樉绀哄垎鍊?

// 瀵瑰唴锛氫笂绾у熀浜庢矡閫氬唴瀹?鏍￠獙鐪熶吉锛岀粰鍑?10/8/6/3/0 浜旀。璇勫垎

// 鐩殑锛氬府鍔╁憳宸ユ彁鑳芥彁鏁堬紝鏀硅繘涓嶈冻锛屼績杩涘弸濂藉崗浣?

const SATISFACTION_DATA = [

  {

    id: 1, projectId: "P001", period: "2026-05",

    projectFeedback: {

      busiLima2sPerf: "鏁翠綋琛ㄧ幇瓒呰繃棰勬湡锛屽洟闃熼厤鍚堥潪甯哥Н鏋佷富鍔?,

      professionalism: "瀵逛簬涓氬姟闇€姹傛彁渚涘悎鐞嗐€佹湁鏁堛€佷笓涓氱殑搴斿鏂规锛岃秴鍑洪鏈?,

      execution: "閮借兘鎸夐鏈熻惤鍦版墽琛?,

      reporting: { timeliLima2s: "鎸夐鏈熻惤鍦版墽琛?, accuracy: "灞曠ず鏁堟灉濂斤紝鏃犻敊婕?, completeLima2s: "姹囨姤鍐呭鍏ㄩ潰娓呮櫚锛岃秴杩囬鏈? },

      riskControl: "棰勬瀹屽杽锛屾姤澶囧疄鏃讹紝搴斿楂樻晥鍚堢悊",

      communication: { frequency: "闈炲父婊℃剰", understanding: "娌熼€氱Н鏋佷富鍔紝瀵归」鐩渶姹傚厖鍒嗙悊瑙ｇ敋鑷抽鍒わ紝娌熼€氶潪甯搁『鐣?, sync: "闈炲父婊℃剰" },

      overall: "闈炲父婊℃剰"

    },

    leaderScore: 10, leaderComment: "椤圭洰鍙嶉闈炲父濂斤紝鍥㈤槦琛ㄧ幇瓒呭嚭棰勬湡锛岀户缁繚鎸?,

    evaluatedBy: "鏉庢槑", evaluatedAt: "2026-05-28", status: "宸茶瘎瀹?

  },

  {

    id: 2, projectId: "P002", period: "2026-05",

    projectFeedback: {

      busiLima2sPerf: "涓氬姟杈炬垚杈冨ソ锛屽洟闃熺Н鏋佹€т富鍔ㄦ€ц緝濂?,

      professionalism: "瀵逛簬涓氬姟闇€姹傝兘鎻愪緵鍚堢悊鏈夋晥鐨勫簲瀵规柟妗?,

      execution: "鏈変笉鑳藉鏈熻惤鍦版墽琛岀殑鎯呭喌锛屼絾鑳芥帴鍙?,

      reporting: { timeliLima2s: "鎸夐鏈熻惤鍦版墽琛?, accuracy: "灞曠ず鏁堟灉涓嶉敊锛岄敊婕忓皯锛堝皯浜?娆★級", completeLima2s: "姹囨姤鍐呭杈冨畬鏁村悎鐞嗭紝瀵圭枒闂兘鎻愪緵瀹炴椂銆佹弧鎰忕殑瑙ｉ噴" },

      riskControl: "鏈夐妗堬紝鎶ュ鍙婃椂锛堥闄╁悗1涓伐浣滄棩鍐咃級锛屽簲瀵瑰熀鏈悎鐞?,

      communication: { frequency: "婊℃剰", understanding: "瀹氭湡姹囨姤娌熼€氾紝鐞嗚В椤圭洰闇€姹傦紝鏈夐棶棰樺強鏃跺悓姝?, sync: "婊℃剰" },

      overall: "婊℃剰"

    },

    leaderScore: 8, leaderComment: "鏁翠綋琛ㄧ幇鑹ソ锛屾墽琛屾晥鐜囨湁寰呮彁鍗囷紝闇€鍔犲己钀藉湴鏃舵晥鎬х鐞?,

    evaluatedBy: "鐜嬪己", evaluatedAt: "2026-05-28", status: "宸茶瘎瀹?

  },

  {

    id: 3, projectId: "P003", period: "2026-05",

    projectFeedback: {

      busiLima2sPerf: "涓氬姟杈炬垚涓€鑸紝鍥㈤槦涓诲姩鎬ф湁寰呮彁鍗?,

      professionalism: "鏂规鍑哄叿鍩烘湰鍚堢悊锛屼絾鏈夋椂鍝嶅簲杈冩參",

      execution: "缁忓父涓嶈兘濡傛湡钀藉湴鎵ц",

      reporting: { timeliLima2s: "鎵ц鏃舵晥灏氳兘鎺ュ彈", accuracy: "灞曠ず鏁堟灉灏氬彲锛屽熀鏈棤閿欐紡", completeLima2s: "姹囨姤鍐呭鍩烘湰瀹屾暣锛屼絾瀵归儴鍒嗙枒闂В閲婁笉澶熸竻鏅? },

      riskControl: "鏈夐妗堬紝浣嗘姤澶囦笉澶熷強鏃讹紝搴斿鏂规闇€瑕佸姞寮?,

      communication: { frequency: "涓€鑸?, understanding: "娌熼€氬熀鏈『鐣咃紝浣嗘湁鏃跺闇€姹傜悊瑙ｆ湁鍋忓樊", sync: "涓€鑸? },

      overall: "涓€鑸?

    },

    leaderScore: 6, leaderComment: "澶氶」鎸囨爣闇€鏀硅繘锛屽凡瀹夋帓涓撻」杈呭锛岄噸鐐规彁鍗囨墽琛屾晥鐜囧拰椋庨櫓绠℃帶鑳藉姏",

    evaluatedBy: "鏉庢槑", evaluatedAt: "2026-05-28", status: "宸茶瘎瀹?

  },

  {

    id: 4, projectId: "P004", period: "2026-05",

    projectFeedback: {

      busiLima2sPerf: "鏁翠綋琛ㄧ幇瓒呰繃棰勬湡锛屽洟闃熼厤鍚堥潪甯哥Н鏋佷富鍔?,

      professionalism: "瀵逛簬涓氬姟闇€姹傛彁渚涘悎鐞嗐€佹湁鏁堛€佷笓涓氱殑搴斿鏂规锛岃秴鍑洪鏈?,

      execution: "瓒呰繃棰勬湡蹇€熻惤鍦?,

      reporting: { timeliLima2s: "瓒呰繃棰勬湡蹇€熻惤鍦?, accuracy: "灞曠ず鏁堟灉濂斤紝鏃犻敊婕?, completeLima2s: "姹囨姤鍐呭鍏ㄩ潰娓呮櫚锛岃秴杩囬鏈? },

      riskControl: "棰勬瀹屽杽锛屾姤澶囧疄鏃讹紝搴斿楂樻晥鍚堢悊",

      communication: { frequency: "闈炲父婊℃剰", understanding: "娌熼€氱Н鏋佷富鍔紝瀵归」鐩渶姹傚厖鍒嗙悊瑙ｇ敋鑷抽鍒わ紝娌熼€氶潪甯搁『鐣?, sync: "闈炲父婊℃剰" },

      overall: "闈炲父婊℃剰"

    },

    leaderScore: 10, leaderComment: "姣嶅┐绫荤洰鏈嶅姟鏍囨潌锛屽洟闃熶笓涓氬害楂橈紝寤鸿浣滀负鏈€浣冲疄璺垫帹骞?,

    evaluatedBy: "鐜嬪己", evaluatedAt: "2026-05-28", status: "宸茶瘎瀹?

  },

  {

    id: 5, projectId: "P005", period: "2026-05",

    projectFeedback: {

      busiLima2sPerf: "涓氬姟杈炬垚杈冨ソ锛屽洟闃熺Н鏋佹€т富鍔ㄦ€ц緝濂?,

      professionalism: "瀵逛簬涓氬姟闇€姹傝兘鎻愪緵鍚堢悊鏈夋晥鐨勫簲瀵规柟妗?,

      execution: "閮借兘鎸夐鏈熻惤鍦版墽琛?,

      reporting: { timeliLima2s: "鎸夐鏈熻惤鍦版墽琛?, accuracy: "灞曠ず鏁堟灉涓嶉敊锛岄敊婕忓皯锛堝皯浜?娆★級", completeLima2s: "姹囨姤鍐呭杈冨畬鏁村悎鐞? },

      riskControl: "鏈夐妗堬紝鎶ュ鍙婃椂锛屽簲瀵瑰熀鏈悎鐞?,

      communication: { frequency: "婊℃剰", understanding: "瀹氭湡姹囨姤娌熼€氾紝鐞嗚В椤圭洰闇€姹?, sync: "婊℃剰" },

      overall: "婊℃剰"

    },

    leaderScore: 8, leaderComment: "椋熷搧绫荤洰瀛ｈ妭鎬ф尝鍔ㄥぇ锛屽洟闃熷簲瀵逛笉閿欙紝缁х画淇濇寔绋冲畾",

    evaluatedBy: "鏉庢槑", evaluatedAt: "2026-05-28", status: "宸茶瘎瀹?

  },

  {

    id: 6, projectId: "P006", period: "2026-05",

    projectFeedback: {

      busiLima2sPerf: "涓氬姟杈炬垚杈冨樊锛屽洟闃熶富鍔ㄦ€т笉瓒?,

      professionalism: "鏂规鍑哄叿涓嶅悎鐞嗭紝搴斿涓嶅涓撲笟",

      execution: "缁忓父涓嶈兘濡傛湡钀藉湴鎵ц",

      reporting: { timeliLima2s: "鎵ц鏁堢巼涓嶅ソ", accuracy: "灞曠ず鏁堟灉涓嶅ソ锛岄敊婕忚緝澶?, completeLima2s: "姹囨姤鍐呭涓嶅瀹屾暣锛屽鐤戦棶瑙ｉ噴涓嶆弧鎰? },

      riskControl: "鏃犻妗堬紝鎶ュ涓嶅強鏃讹紝搴斿涓嶅悎鐞?,

      communication: { frequency: "涓嶆弧鎰?, understanding: "娌熼€氫笉椤虹晠锛屽闇€姹傜悊瑙ｆ湁鍋忓樊", sync: "涓嶆弧鎰? },

      overall: "涓嶆弧鎰?

    },

    leaderScore: 3, leaderComment: "椤圭洰宸叉殏鍋滐紝闇€娣卞埢澶嶇洏銆傚凡瀹夋帓涓€瀵逛竴杈呭锛岄噸鐐规敼杩涙矡閫氬拰涓撲笟搴﹂棶棰?,

    evaluatedBy: "鐜嬪己", evaluatedAt: "2026-05-28", status: "宸茶瘎瀹?

  }

];



const HEALTH_DATA = [

  {

    projectId:"P001", period:"2026-05", overallScore:94, overallLevel:"鍋ュ悍",

    dimensions:[

      {key:"manpower", name:"浜哄姏鍋ュ悍搴?, score:90, level:"鍋ュ悍", weight:0.15,

       items:[

         {name:"鏂拌€佸憳宸ラ厤姣?, target:"鈮?0%", actual:"22%", score:90, level:"鍋ュ悍", remark:"鍥㈤槦绋冲畾锛屾柊鍛樺伐鍗犳瘮鍚堢悊"},

         {name:"褰撴湀瀹㈡湇绂昏亴娴佸け鐜?, target:"鈮?%", actual:"3.2%", score:90, level:"鍋ュ悍", remark:"浣庝簬鐩爣锛屽洟闃熺ǔ瀹?}

       ]},

      {key:"service", name:"鏈嶅姟鍋ュ悍搴?, score:95, level:"浼樼", weight:0.2,

       items:[

         {name:"DSR瀵规瘮琛屼笟鍋ュ悍搴?, target:"鈮?.8", actual:"4.85", score:100, level:"浼樼", remark:"楂樹簬琛屼笟鍧囧€?.05"},

         {name:"DSR鏈嶅姟瀵规瘮涓婃湀鍋ュ悍搴?, target:"鈮?.75", actual:"4.82", score:100, level:"浼樼", remark:"鐜瘮鎸佺画鎻愬崌"},

         {name:"缁煎悎浣撻獙璇勫垎鍋ュ悍搴?, target:"鈮?.5", actual:"4.52", score:90, level:"鍋ュ悍", remark:"杈炬爣"},

         {name:"閲戦摱鏃烘椇鍋ュ悍搴?, target:"閲戞椇鏃?, actual:"閲戞椇鏃?, score:100, level:"浼樼", remark:"淇濇寔閲戠墝璇勭骇"}

       ]},

      {key:"sales", name:"閿€鍞仴搴峰害", score:90, level:"鍋ュ悍", weight:0.35,

       items:[

         {name:"骞村害閿€鍞寚鏍囪揪鎴愬仴搴峰害-瀹㈡湇", target:"65%", actual:"68%", score:100, level:"浼樼", remark:"瓒呴瀹屾垚骞村害杩涘害"},

         {name:"鏈堝害閿€鍞寚鏍囧仴搴峰害-搴楅摵", target:"100%", actual:"102%", score:100, level:"浼樼", remark:"鏈堝害閿€鍞揪鏍?},

         {name:"鏈堝害閿€鍞寚鏍囧仴搴峰害-瀹㈡湇", target:"100%", actual:"95%", score:90, level:"鍋ュ悍", remark:"鐣ヤ綆浜庣洰鏍?},

         {name:"浜哄伐瀹㈡湇杞寲鐜囧仴搴峰害", target:"12%", actual:"11.5%", score:85, level:"闇€娉ㄦ剰", remark:"杞寲鐜囬渶鍏虫敞"},

         {name:"鎸藉崟鎴愬姛鐜?, target:"50%", actual:"55%", score:100, level:"浼樼", remark:"楂樹簬鐩爣"}

       ]},

      {key:"returns", name:"閫€璐ч€€娆?, score:100, level:"浼樼", weight:0.1,

       items:[

         {name:"閫€璐ч€€娆惧仴搴疯瘎浼?, target:"鈮?%", actual:"4.2%", score:100, level:"浼樼", remark:"閫€璐х巼鎺у埗鑹ソ"}

       ]},

      {key:"risk", name:"寮傚父椋庨櫓", score:100, level:"浼樼", weight:0.2,

       items:[

         {name:"寮傚父闂鍋ュ悍搴﹁瘎浼?, target:"鏃犲紓甯?, actual:"鏃犲紓甯?, score:100, level:"浼樼", remark:"鏈湀鏃犲紓甯?},

         {name:"璧勬崯绫婚闄╄鍗曞仴搴峰害璇勪及", target:"鏃犻闄?, actual:"鏃犻闄?, score:100, level:"浼樼", remark:"鏈湀鏃犺祫鎹熼闄?}

       ]},

      {key:"cost", name:"鎴愭湰鎶婃帶", score:88, level:"鍋ュ悍", weight:0,

       items:[

         {name:"瀹㈡湇鍥㈤槦瀹為檯褰撴湀鎴愭湰", target:"150000", actual:"142000", score:90, level:"鍋ュ悍", remark:"浣庝簬棰勭畻"},

         {name:"瀹㈡湇鍥㈤槦褰撴湀鎴愭湰鐩爣", target:"150000", actual:"150000", score:100, level:"浼樼", remark:"鐩爣涓€鑷?},

         {name:"鎴愭湰鎶婃帶鍋ュ悍搴?, target:"鏈秴棰勭畻", actual:"鏈秴棰勭畻", score:100, level:"浼樼", remark:"鎴愭湰鍙帶"},

         {name:"鎴愭湰鍚屾瘮", target:"-10%", actual:"-8%", score:90, level:"鍋ュ悍", remark:"鍚屾瘮涓嬮檷"}

       ]}

    ]

  },

  {

    projectId:"P002", period:"2026-05", overallScore:89, overallLevel:"鍋ュ悍",

    dimensions:[

      {key:"manpower", name:"浜哄姏鍋ュ悍搴?, score:85, level:"闇€娉ㄦ剰", weight:0.15,

       items:[

         {name:"鏂拌€佸憳宸ラ厤姣?, target:"鈮?0%", actual:"35%", score:85, level:"闇€娉ㄦ剰", remark:"鏂板憳宸ュ崰姣旂暐楂橈紝闇€鍔犲己鍩硅"},

         {name:"褰撴湀瀹㈡湇绂昏亴娴佸け鐜?, target:"鈮?%", actual:"6.5%", score:85, level:"闇€娉ㄦ剰", remark:"娴佸け鐜囧亸楂橈紝鍏虫敞鍘熷洜"}

       ]},

      {key:"service", name:"鏈嶅姟鍋ュ悍搴?, score:90, level:"鍋ュ悍", weight:0.2,

       items:[

         {name:"DSR瀵规瘮琛屼笟鍋ュ悍搴?, target:"鈮?.8", actual:"4.78", score:90, level:"鍋ュ悍", remark:"鎺ヨ繎琛屼笟鍧囧€?},

         {name:"DSR鏈嶅姟瀵规瘮涓婃湀鍋ュ悍搴?, target:"鈮?.75", actual:"4.76", score:90, level:"鍋ュ悍", remark:"灏忓箙鎻愬崌"},

         {name:"缁煎悎浣撻獙璇勫垎鍋ュ悍搴?, target:"鈮?.5", actual:"4.45", score:85, level:"闇€娉ㄦ剰", remark:"鐣ヤ綆浜庣洰鏍?},

         {name:"閲戦摱鏃烘椇鍋ュ悍搴?, target:"閲戞椇鏃?, actual:"閾舵椇鏃?, score:85, level:"闇€娉ㄦ剰", remark:"闄嶇骇涓洪摱鐗?}

       ]},

      {key:"sales", name:"閿€鍞仴搴峰害", score:90, level:"鍋ュ悍", weight:0.35,

       items:[

         {name:"骞村害閿€鍞寚鏍囪揪鎴愬仴搴峰害-瀹㈡湇", target:"65%", actual:"62%", score:90, level:"鍋ュ悍", remark:"杩涘害姝ｅ父"},

         {name:"鏈堝害閿€鍞寚鏍囧仴搴峰害-搴楅摵", target:"100%", actual:"95%", score:85, level:"闇€娉ㄦ剰", remark:"鏈堝害鏈揪鏍?},

         {name:"鏈堝害閿€鍞寚鏍囧仴搴峰害-瀹㈡湇", target:"100%", actual:"92%", score:85, level:"闇€娉ㄦ剰", remark:"瀹㈡湇绔湭杈炬爣"},

         {name:"浜哄伐瀹㈡湇杞寲鐜囧仴搴峰害", target:"12%", actual:"11.8%", score:90, level:"鍋ュ悍", remark:"鎺ヨ繎鐩爣"},

         {name:"鎸藉崟鎴愬姛鐜?, target:"50%", actual:"48%", score:90, level:"鍋ュ悍", remark:"鎺ヨ繎鐩爣"}

       ]},

      {key:"returns", name:"閫€璐ч€€娆?, score:85, level:"闇€娉ㄦ剰", weight:0.1,

       items:[

         {name:"閫€璐ч€€娆惧仴搴疯瘎浼?, target:"鈮?%", actual:"5.3%", score:85, level:"闇€娉ㄦ剰", remark:"閫€璐х巼鐣ラ珮浜庣洰鏍?}

       ]},

      {key:"risk", name:"寮傚父椋庨櫓", score:90, level:"鍋ュ悍", weight:0.2,

       items:[

         {name:"寮傚父闂鍋ュ悍搴﹁瘎浼?, target:"鏃犲奖鍝?, actual:"鏈夊奖鍝嶆棤璧勬崯", score:90, level:"鍋ュ悍", remark:"鏈夊紓甯镐絾鏃犺祫鎹?},

         {name:"璧勬崯绫婚闄╄鍗曞仴搴峰害璇勪及", target:"鏃犻闄?, actual:"鏃犻闄?, score:100, level:"浼樼", remark:"鏃犺祫鎹?}

       ]},

      {key:"cost", name:"鎴愭湰鎶婃帶", score:90, level:"鍋ュ悍", weight:0,

       items:[

         {name:"瀹㈡湇鍥㈤槦瀹為檯褰撴湀鎴愭湰", target:"220000", actual:"215000", score:90, level:"鍋ュ悍", remark:"鐣ヤ綆浜庨绠?},

         {name:"鎴愭湰鎶婃帶鍋ュ悍搴?, target:"鏈秴棰勭畻", actual:"鏈秴棰勭畻", score:100, level:"浼樼", remark:"鎴愭湰鍙帶"}

       ]}

    ]

  },

  {

    projectId:"P003", period:"2026-05", overallScore:83, overallLevel:"闇€娉ㄦ剰",

    dimensions:[

      {key:"manpower", name:"浜哄姏鍋ュ悍搴?, score:85, level:"闇€娉ㄦ剰", weight:0.15,

       items:[

         {name:"鏂拌€佸憳宸ラ厤姣?, target:"鈮?0%", actual:"42%", score:80, level:"鏋佸樊", remark:"鏂板憳宸ュ崰姣旇繃楂橈紝褰卞搷鏈嶅姟璐ㄩ噺"},

         {name:"褰撴湀瀹㈡湇绂昏亴娴佸け鐜?, target:"鈮?%", actual:"8%", score:80, level:"鏋佸樊", remark:"娴佸け鐜囦弗閲嶈秴鏍?}

       ]},

      {key:"service", name:"鏈嶅姟鍋ュ悍搴?, score:80, level:"鏋佸樊", weight:0.2,

       items:[

         {name:"DSR瀵规瘮琛屼笟鍋ュ悍搴?, target:"鈮?.8", actual:"4.55", score:80, level:"鏋佸樊", remark:"浣庝簬琛屼笟鍧囧€?},

         {name:"DSR鏈嶅姟瀵规瘮涓婃湀鍋ュ悍搴?, target:"鈮?.75", actual:"4.50", score:80, level:"鏋佸樊", remark:"鐜瘮涓嬮檷"},

         {name:"缁煎悎浣撻獙璇勫垎鍋ュ悍搴?, target:"鈮?.5", actual:"4.20", score:80, level:"鏋佸樊", remark:"鏄庢樉浣庝簬鐩爣"},

         {name:"閲戦摱鏃烘椇鍋ュ悍搴?, target:"閲戞椇鏃?, actual:"鏃犺瘎绾?, score:80, level:"鏋佸樊", remark:"鏈幏寰楄瘎绾?}

       ]},

      {key:"sales", name:"閿€鍞仴搴峰害", score:85, level:"闇€娉ㄦ剰", weight:0.35,

       items:[

         {name:"骞村害閿€鍞寚鏍囪揪鎴愬仴搴峰害-瀹㈡湇", target:"65%", actual:"55%", score:80, level:"鏋佸樊", remark:"杩涘害涓ラ噸婊炲悗"},

         {name:"鏈堝害閿€鍞寚鏍囧仴搴峰害-搴楅摵", target:"100%", actual:"88%", score:85, level:"闇€娉ㄦ剰", remark:"鏈堝害鏈揪鏍?},

         {name:"鏈堝害閿€鍞寚鏍囧仴搴峰害-瀹㈡湇", target:"100%", actual:"85%", score:80, level:"鏋佸樊", remark:"瀹㈡湇绔弗閲嶄笉杈炬爣"},

         {name:"浜哄伐瀹㈡湇杞寲鐜囧仴搴峰害", target:"12%", actual:"9.8%", score:80, level:"鏋佸樊", remark:"杞寲鐜囦綆"},

         {name:"鎸藉崟鎴愬姛鐜?, target:"50%", actual:"45%", score:85, level:"闇€娉ㄦ剰", remark:"鐣ヤ綆浜庣洰鏍?}

       ]},

      {key:"returns", name:"閫€璐ч€€娆?, score:80, level:"鏋佸樊", weight:0.1,

       items:[

         {name:"閫€璐ч€€娆惧仴搴疯瘎浼?, target:"鈮?%", actual:"6.8%", score:80, level:"鏋佸樊", remark:"閫€璐х巼涓ラ噸瓒呮爣"}

       ]},

      {key:"risk", name:"寮傚父椋庨櫓", score:85, level:"闇€娉ㄦ剰", weight:0.2,

       items:[

         {name:"寮傚父闂鍋ュ悍搴﹁瘎浼?, target:"鏃犲奖鍝?, actual:"鏈夊奖鍝嶆湁瀹㈣瘔", score:85, level:"闇€娉ㄦ剰", remark:"鏈夊璇変絾鏈骇鐢熻祫鎹?},

         {name:"璧勬崯绫婚闄╄鍗曞仴搴峰害璇勪及", target:"鏃犻闄?, actual:"鏈夐闄╄拷鍥炰腑", score:85, level:"闇€娉ㄦ剰", remark:"鏈夐闄╄鍗曪紝璐ф杩藉洖涓?}

       ]},

      {key:"cost", name:"鎴愭湰鎶婃帶", score:85, level:"闇€娉ㄦ剰", weight:0,

       items:[

         {name:"瀹㈡湇鍥㈤槦瀹為檯褰撴湀鎴愭湰", target:"280000", actual:"295000", score:80, level:"鏋佸樊", remark:"瓒呭嚭棰勭畻"},

         {name:"鎴愭湰鎶婃帶鍋ュ悍搴?, target:"鏈秴棰勭畻", actual:"瓒呭嚭棰勭畻", score:80, level:"鏋佸樊", remark:"鎴愭湰瓒呮敮闇€鍏虫敞"}

       ]}

    ]

  },

  {

    projectId:"P004", period:"2026-05", overallScore:96, overallLevel:"浼樼",

    dimensions:[

      {key:"manpower", name:"浜哄姏鍋ュ悍搴?, score:100, level:"浼樼", weight:0.15,

       items:[

         {name:"鏂拌€佸憳宸ラ厤姣?, target:"鈮?0%", actual:"15%", score:100, level:"浼樼", remark:"鍥㈤槦鎴愮啛绋冲畾"},

         {name:"褰撴湀瀹㈡湇绂昏亴娴佸け鐜?, target:"鈮?%", actual:"0%", score:100, level:"浼樼", remark:"闆舵祦澶?}

       ]},

      {key:"service", name:"鏈嶅姟鍋ュ悍搴?, score:95, level:"浼樼", weight:0.2,

       items:[

         {name:"DSR瀵规瘮琛屼笟鍋ュ悍搴?, target:"鈮?.8", actual:"4.90", score:100, level:"浼樼", remark:"杩滆秴琛屼笟鍧囧€?},

         {name:"DSR鏈嶅姟瀵规瘮涓婃湀鍋ュ悍搴?, target:"鈮?.75", actual:"4.88", score:100, level:"浼樼", remark:"鎸佺画鎻愬崌"},

         {name:"缁煎悎浣撻獙璇勫垎鍋ュ悍搴?, target:"鈮?.5", actual:"4.60", score:100, level:"浼樼", remark:"瓒呭嚭鐩爣"},

         {name:"閲戦摱鏃烘椇鍋ュ悍搴?, target:"閲戞椇鏃?, actual:"閲戞椇鏃?, score:100, level:"浼樼", remark:"淇濇寔閲戠墝"}

       ]},

      {key:"sales", name:"閿€鍞仴搴峰害", score:95, level:"浼樼", weight:0.35,

       items:[

         {name:"骞村害閿€鍞寚鏍囪揪鎴愬仴搴峰害-瀹㈡湇", target:"65%", actual:"72%", score:100, level:"浼樼", remark:"瓒呴瀹屾垚"},

         {name:"鏈堝害閿€鍞寚鏍囧仴搴峰害-搴楅摵", target:"100%", actual:"108%", score:100, level:"浼樼", remark:"瓒呴杈炬爣"},

         {name:"鏈堝害閿€鍞寚鏍囧仴搴峰害-瀹㈡湇", target:"100%", actual:"105%", score:100, level:"浼樼", remark:"瓒呴杈炬爣"},

         {name:"浜哄伐瀹㈡湇杞寲鐜囧仴搴峰害", target:"12%", actual:"13.2%", score:100, level:"浼樼", remark:"杞寲鐜囦紭绉€"},

         {name:"鎸藉崟鎴愬姛鐜?, target:"50%", actual:"58%", score:100, level:"浼樼", remark:"杩滈珮浜庣洰鏍?}

       ]},

      {key:"returns", name:"閫€璐ч€€娆?, score:100, level:"浼樼", weight:0.1,

       items:[

         {name:"閫€璐ч€€娆惧仴搴疯瘎浼?, target:"鈮?%", actual:"3.5%", score:100, level:"浼樼", remark:"閫€璐х巼浼樼"}

       ]},

      {key:"risk", name:"寮傚父椋庨櫓", score:100, level:"浼樼", weight:0.2,

       items:[

         {name:"寮傚父闂鍋ュ悍搴﹁瘎浼?, target:"鏃犲紓甯?, actual:"鏃犲紓甯?, score:100, level:"浼樼", remark:"鏃犲紓甯?},

         {name:"璧勬崯绫婚闄╄鍗曞仴搴峰害璇勪及", target:"鏃犻闄?, actual:"鏃犻闄?, score:100, level:"浼樼", remark:"鏃犻闄?}

       ]},

      {key:"cost", name:"鎴愭湰鎶婃帶", score:92, level:"鍋ュ悍", weight:0,

       items:[

         {name:"瀹㈡湇鍥㈤槦瀹為檯褰撴湀鎴愭湰", target:"120000", actual:"110000", score:90, level:"鍋ュ悍", remark:"浣庝簬棰勭畻"},

         {name:"鎴愭湰鎶婃帶鍋ュ悍搴?, target:"鏈秴棰勭畻", actual:"鏈秴棰勭畻", score:100, level:"浼樼", remark:"鎴愭湰浼樼"}

       ]}

    ]

  },

  {

    projectId:"P005", period:"2026-05", overallScore:88, overallLevel:"鍋ュ悍",

    dimensions:[

      {key:"manpower", name:"浜哄姏鍋ュ悍搴?, score:90, level:"鍋ュ悍", weight:0.15,

       items:[

         {name:"鏂拌€佸憳宸ラ厤姣?, target:"鈮?0%", actual:"28%", score:90, level:"鍋ュ悍", remark:"鏂板憳宸ュ崰姣斿悎鐞?},

         {name:"褰撴湀瀹㈡湇绂昏亴娴佸け鐜?, target:"鈮?%", actual:"4.5%", score:90, level:"鍋ュ悍", remark:"姝ｅ父姘村钩"}

       ]},

      {key:"service", name:"鏈嶅姟鍋ュ悍搴?, score:88, level:"鍋ュ悍", weight:0.2,

       items:[

         {name:"DSR瀵规瘮琛屼笟鍋ュ悍搴?, target:"鈮?.8", actual:"4.80", score:90, level:"鍋ュ悍", remark:"鍒氬ソ杈炬爣"},

         {name:"DSR鏈嶅姟瀵规瘮涓婃湀鍋ュ悍搴?, target:"鈮?.75", actual:"4.77", score:90, level:"鍋ュ悍", remark:"灏忓箙鎻愬崌"},

         {name:"缁煎悎浣撻獙璇勫垎鍋ュ悍搴?, target:"鈮?.5", actual:"4.48", score:85, level:"闇€娉ㄦ剰", remark:"鐣ヤ綆浜庣洰鏍?},

         {name:"閲戦摱鏃烘椇鍋ュ悍搴?, target:"閲戞椇鏃?, actual:"閾舵椇鏃?, score:85, level:"闇€娉ㄦ剰", remark:"閾剁墝锛岄渶鎻愬崌"}

       ]},

      {key:"sales", name:"閿€鍞仴搴峰害", score:90, level:"鍋ュ悍", weight:0.35,

       items:[

         {name:"骞村害閿€鍞寚鏍囪揪鎴愬仴搴峰害-瀹㈡湇", target:"65%", actual:"64%", score:90, level:"鍋ュ悍", remark:"杩涘害姝ｅ父"},

         {name:"鏈堝害閿€鍞寚鏍囧仴搴峰害-搴楅摵", target:"100%", actual:"98%", score:90, level:"鍋ュ悍", remark:"鎺ヨ繎杈炬爣"},

         {name:"鏈堝害閿€鍞寚鏍囧仴搴峰害-瀹㈡湇", target:"100%", actual:"96%", score:90, level:"鍋ュ悍", remark:"鎺ヨ繎杈炬爣"},

         {name:"浜哄伐瀹㈡湇杞寲鐜囧仴搴峰害", target:"12%", actual:"11.2%", score:90, level:"鍋ュ悍", remark:"鎺ヨ繎鐩爣"},

         {name:"鎸藉崟鎴愬姛鐜?, target:"50%", actual:"51%", score:100, level:"浼樼", remark:"杈炬爣"}

       ]},

      {key:"returns", name:"閫€璐ч€€娆?, score:90, level:"鍋ュ悍", weight:0.1,

       items:[

         {name:"閫€璐ч€€娆惧仴搴疯瘎浼?, target:"鈮?%", actual:"4.8%", score:90, level:"鍋ュ悍", remark:"鎺ヨ繎鐩爣"}

       ]},

      {key:"risk", name:"寮傚父椋庨櫓", score:90, level:"鍋ュ悍", weight:0.2,

       items:[

         {name:"寮傚父闂鍋ュ悍搴﹁瘎浼?, target:"鏃犲奖鍝?, actual:"鏈夊奖鍝嶆棤璧勬崯", score:90, level:"鍋ュ悍", remark:"鏈夊紓甯镐絾鏃犺祫鎹?},

         {name:"璧勬崯绫婚闄╄鍗曞仴搴峰害璇勪及", target:"鏃犻闄?, actual:"鏃犻闄?, score:100, level:"浼樼", remark:"鏃犺祫鎹?}

       ]},

      {key:"cost", name:"鎴愭湰鎶婃帶", score:88, level:"鍋ュ悍", weight:0,

       items:[

         {name:"瀹㈡湇鍥㈤槦瀹為檯褰撴湀鎴愭湰", target:"170000", actual:"165000", score:90, level:"鍋ュ悍", remark:"浣庝簬棰勭畻"},

         {name:"鎴愭湰鎶婃帶鍋ュ悍搴?, target:"鏈秴棰勭畻", actual:"鏈秴棰勭畻", score:100, level:"浼樼", remark:"鎴愭湰鍙帶"}

       ]}

    ]

  },

  {

    projectId:"P006", period:"2026-05", overallScore:78, overallLevel:"鏋佸樊",

    dimensions:[

      {key:"manpower", name:"浜哄姏鍋ュ悍搴?, score:80, level:"鏋佸樊", weight:0.15,

       items:[

         {name:"鏂拌€佸憳宸ラ厤姣?, target:"鈮?0%", actual:"50%", score:80, level:"鏋佸樊", remark:"鏂板憳宸ュ崰姣斾弗閲嶈秴鏍?},

         {name:"褰撴湀瀹㈡湇绂昏亴娴佸け鐜?, target:"鈮?%", actual:"12%", score:80, level:"鏋佸樊", remark:"娴佸け鐜囦弗閲嶈秴鏍?}

       ]},

      {key:"service", name:"鏈嶅姟鍋ュ悍搴?, score:75, level:"鏋佸樊", weight:0.2,

       items:[

         {name:"DSR瀵规瘮琛屼笟鍋ュ悍搴?, target:"鈮?.8", actual:"4.40", score:80, level:"鏋佸樊", remark:"杩滀綆浜庤涓氬潎鍊?},

         {name:"DSR鏈嶅姟瀵规瘮涓婃湀鍋ュ悍搴?, target:"鈮?.75", actual:"4.35", score:80, level:"鏋佸樊", remark:"鐜瘮涓嬮檷"},

         {name:"缁煎悎浣撻獙璇勫垎鍋ュ悍搴?, target:"鈮?.5", actual:"3.90", score:80, level:"鏋佸樊", remark:"涓ラ噸浣庝簬鐩爣"},

         {name:"閲戦摱鏃烘椇鍋ュ悍搴?, target:"閲戞椇鏃?, actual:"鏃犺瘎绾?, score:80, level:"鏋佸樊", remark:"鏈幏寰楄瘎绾?}

       ]},

      {key:"sales", name:"閿€鍞仴搴峰害", score:80, level:"鏋佸樊", weight:0.35,

       items:[

         {name:"骞村害閿€鍞寚鏍囪揪鎴愬仴搴峰害-瀹㈡湇", target:"65%", actual:"48%", score:80, level:"鏋佸樊", remark:"杩涘害涓ラ噸婊炲悗"},

         {name:"鏈堝害閿€鍞寚鏍囧仴搴峰害-搴楅摵", target:"100%", actual:"82%", score:80, level:"鏋佸樊", remark:"涓ラ噸涓嶈揪鏍?},

         {name:"鏈堝害閿€鍞寚鏍囧仴搴峰害-瀹㈡湇", target:"100%", actual:"78%", score:80, level:"鏋佸樊", remark:"涓ラ噸涓嶈揪鏍?},

         {name:"浜哄伐瀹㈡湇杞寲鐜囧仴搴峰害", target:"12%", actual:"8.5%", score:80, level:"鏋佸樊", remark:"杞寲鐜囦弗閲嶅亸浣?},

         {name:"鎸藉崟鎴愬姛鐜?, target:"50%", actual:"42%", score:80, level:"鏋佸樊", remark:"浣庝簬鐩爣"}

       ]},

      {key:"returns", name:"閫€璐ч€€娆?, score:80, level:"鏋佸樊", weight:0.1,

       items:[

         {name:"閫€璐ч€€娆惧仴搴疯瘎浼?, target:"鈮?%", actual:"7.5%", score:80, level:"鏋佸樊", remark:"閫€璐х巼涓ラ噸瓒呮爣"}

       ]},

      {key:"risk", name:"寮傚父椋庨櫓", score:80, level:"鏋佸樊", weight:0.2,

       items:[

         {name:"寮傚父闂鍋ュ悍搴﹁瘎浼?, target:"鏃犲奖鍝?, actual:"鏈夎祫鎹熸湁瀹㈣瘔", score:80, level:"鏋佸樊", remark:"浜х敓璧勬崯鍜屽璇?},

         {name:"璧勬崯绫婚闄╄鍗曞仴搴峰害璇勪及", target:"鏃犻闄?, actual:"鏈夋崯澶?, score:80, level:"鏋佸樊", remark:"璐ф鏃犳硶杩藉洖"}

       ]},

      {key:"cost", name:"鎴愭湰鎶婃帶", score:78, level:"鏋佸樊", weight:0,

       items:[

         {name:"瀹㈡湇鍥㈤槦瀹為檯褰撴湀鎴愭湰", target:"90000", actual:"95000", score:80, level:"鏋佸樊", remark:"瓒呭嚭棰勭畻"},

         {name:"鎴愭湰鎶婃帶鍋ュ悍搴?, target:"鏈秴棰勭畻", actual:"瓒呭嚭棰勭畻", score:80, level:"鏋佸樊", remark:"鎴愭湰瓒呮敮"}

       ]}

    ]

  }

];



// ===== 瑙掕壊涓庢潈闄愮郴缁?=====

const ROLES = [
  "绠＄悊鍊欓€?, "瀹㈡湇缁勯暱", "瀹㈡湇涓荤", "瀹㈡湇缁忕悊", "瀹㈡湇鎬荤洃",
  "绠＄悊鍛?, "椤圭洰浼欎即", "鎶€鏈紮浼?, "椋庢帶浼欎即", "鏂扮敤鎴?
];

// 榛樿鏉冮檺閰嶇疆锛氭瘡涓鑹插鍚勬ā鍧楃殑鏉冮檺锛坮ead=鍙, write=璇诲啓, hidden=闅愯棌锛?
// 鍏ㄥ眬妯″潡 key 鍒楄〃锛堜緵 batchSetPermission 绛夊嚱鏁颁娇鐢級
const MODULE_KEYS = ["dashboard","archive","target","cost","operation","issue","knowledge","handover","satisfaction","permissions","notifications","performance","risk","profile"];

const DEFAULT_PERMISSIONS = {
  "绠＄悊鍊欓€?: { dashboard:"write", archive:"write", target:"write", cost:"write", operation:"write", issue:"write", knowledge:"write", handover:"write", satisfaction:"write", permissions:"write", notifications:"write", performance:"write", risk:"write", profile:"write" },
  "瀹㈡湇缁勯暱": { dashboard:"read", archive:"read", target:"read", cost:"read", operation:"write", issue:"write", knowledge:"read", handover:"read", satisfaction:"read", permissions:"read", notifications:"read", performance:"read", risk:"read", profile:"write" },
  "瀹㈡湇涓荤": { dashboard:"read", archive:"read", target:"read", cost:"read", operation:"write", issue:"write", knowledge:"write", handover:"write", satisfaction:"read", permissions:"read", notifications:"read", performance:"write", risk:"read", profile:"write" },
  "瀹㈡湇缁忕悊": { dashboard:"write", archive:"write", target:"write", cost:"write", operation:"write", issue:"write", knowledge:"write", handover:"write", satisfaction:"write", permissions:"read", notifications:"read", performance:"write", risk:"write", profile:"write" },
  "瀹㈡湇鎬荤洃": { dashboard:"read", archive:"write", target:"read", cost:"read", operation:"read", issue:"read", knowledge:"read", handover:"read", satisfaction:"read", permissions:"read", notifications:"read", performance:"read", risk:"read", profile:"write" },
  "绠＄悊鍛?: { dashboard:"write", archive:"write", target:"write", cost:"write", operation:"write", issue:"write", knowledge:"write", handover:"write", satisfaction:"write", permissions:"write", notifications:"write", performance:"write", risk:"write", profile:"write" },
  "瓒呯骇绠＄悊鍛?: { dashboard:"write", archive:"write", target:"write", cost:"write", operation:"write", issue:"write", knowledge:"write", handover:"write", satisfaction:"write", permissions:"write", notifications:"write", performance:"write", risk:"write", profile:"write" },
  "椤圭洰浼欎即": { dashboard:"read", archive:"read", target:"read", cost:"read", operation:"read", issue:"read", knowledge:"read", handover:"read", satisfaction:"read", permissions:"read", notifications:"read", performance:"read", risk:"read", profile:"write" },
  "鎶€鏈紮浼?: { dashboard:"read", archive:"read", target:"read", cost:"read", operation:"read", issue:"write", knowledge:"read", handover:"read", satisfaction:"read", permissions:"read", notifications:"read", performance:"read", risk:"read", profile:"write" },
  "椋庢帶浼欎即": { dashboard:"read", archive:"read", target:"read", cost:"read", operation:"read", issue:"write", knowledge:"read", handover:"read", satisfaction:"read", permissions:"read", notifications:"read", performance:"read", risk:"read", profile:"write" },
  "鏂扮敤鎴?: { dashboard:"read", archive:"read", target:"read", cost:"read", operation:"read", issue:"read", knowledge:"read", handover:"read", satisfaction:"read", permissions:"read", notifications:"read", performance:"read", risk:"read", profile:"write" }
};

// 褰撳墠瑙掕壊锛堥粯璁わ細绠＄悊鍊欓€夛級
let currentRole = "绠＄悊鍊欓€?;
let currentModule = "dashboard";
let currentHealthFilter = "all";

// 浠巐ocalStorage鍔犺浇鏉冮檺閰嶇疆锛堝鏋滄湁鐨勮瘽锛?
let rolePermissions = {};
try {
  const saved = localStorage.getItem("chansee_permissions");
  rolePermissions = saved ? JSON.parse(saved) : {...DEFAULT_PERMISSIONS};
} catch(e) {
  rolePermissions = {...DEFAULT_PERMISSIONS};
}

// 淇濆瓨鏉冮檺閰嶇疆鍒發ocalStorage
function savePermissions() {
  localStorage.setItem("chansee_permissions", JSON.stringify(rolePermissions));
}

// 鑾峰彇褰撳墠瑙掕壊瀵规煇涓ā鍧楃殑鏉冮檺
function getPermission(module) {
  const p = rolePermissions[currentRole];
  if (!p) return "hidden";
  return p[module] || "hidden";
}

// 妫€鏌ュ綋鍓嶈鑹叉槸鍚﹀彲浠ョ紪杈戞煇涓ā鍧?
function canEditModule(module) {
  return getPermission(module) === "write";
}

// 妫€鏌ュ綋鍓嶈鑹叉槸鍚﹀彲浠ユ煡鐪嬫煇涓ā鍧?
function canViewModule(module) {
  const p = getPermission(module);
  return p === "write" || p === "read";
}

// ===== 鍒濆鍖?=====

document.addEventListener("DOMContentLoaded", () => {
  try {
    initNav();
    initModal();
    // 鐧诲綍妫€鏌ワ細鏈櫥褰曞垯鍙樉绀虹櫥褰曟锛屼笉鍒濆鍖栦富鐣岄潰
    const loggedIn = checkLogin();
    if (!loggedIn) return;
    // 榛樿锛氬彧灞曞紑绗竴涓垎缁勶紝鍏朵綑鎶樺彔
    document.querySelectorAll(".nav-section").forEach((sec,idx) => {
      const arrow = sec.querySelector('.section-arrow');
      if(idx===0){
        sec.classList.remove("collapsed");
        if(arrow) arrow.textContent = '鈻?;
      }else{
        sec.classList.add("collapsed");
        if(arrow) arrow.textContent = '鈻?;
      }
    });
    renderModule("dashboard");
  } catch(e) {
    document.getElementById("module-content").innerHTML =
      '<div style="padding:40px;text-align:center;color:red;">' +
      '<h3>鍒濆鍖栭敊璇?/h3><p>' + e.message + '</p></div>';
  }
});







// ===== 绉诲姩绔晶杈规爮鎶藉眽 =====
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

// ===== 渚ц竟鏍忔姌鍙?灞曞紑 =====
var _sidebarCollapsed = false;
var _toggleLock = false;

function toggleSidebar(e){
  // 闃叉浜嬩欢鍐掓场瀵艰嚧閲嶅瑙﹀彂
  if(e){
    e.stopPropagation();
    e.preventDefault();
  }
  // 闃叉姈閿?
  if(_toggleLock) return;
  _toggleLock = true;
  setTimeout(function(){ _toggleLock = false; }, 600);

  var sidebar = document.getElementById('sidebar');
  var btn = document.getElementById('sidebar-toggle');
  if(!sidebar) return;


  if(_sidebarCollapsed){
    // ===== 灞曞紑 =====
    _sidebarCollapsed = false;
    sidebar.classList.remove('collapsed');
    sidebar.style.width = '220px';
    sidebar.style.minWidth = '220px';
    sidebar.style.overflowX = '';
    // 鏄剧ず鎵€鏈夋枃瀛?
    var allTexts = sidebar.querySelectorAll('.nav-text, .section-text, .toggle-text, .section-arrow');
    for(var i=0;i<allTexts.length;i++){
      allTexts[i].style.display = '';
      allTexts[i].style.width = '';
      allTexts[i].style.opacity = '';
    }
    // 鎭㈠浜岀骇鑿滃崟鏄鹃殣鐘舵€?
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
    // 鎭㈠鍥炬爣鏍峰紡
    var allIcons = sidebar.querySelectorAll('.nav-icon, .section-icon');
    for(var k=0;k<allIcons.length;k++) allIcons[k].style.cssText = '';
    // 鎭㈠鎸夐挳
    if(btn){
      var t = btn.querySelector('.toggle-text');
      if(t){ t.textContent = '鏀惰捣瀵艰埅'; t.style.display = ''; }
      btn.style.cssText = 'width:100%;';
      var svg = btn.querySelector('svg');
      if(svg) svg.style.transform = '';
    }
  }else{
    // ===== 鏀惰捣 =====
    _sidebarCollapsed = true;
    sidebar.classList.add('collapsed');
    sidebar.style.width = '56px';
    sidebar.style.minWidth = '56px';
    sidebar.style.overflowX = 'hidden';
    // 闅愯棌鎵€鏈夋枃瀛?
    var allTexts2 = sidebar.querySelectorAll('.nav-text, .section-text, .toggle-text, .section-arrow');
    for(var j=0;j<allTexts2.length;j++){
      allTexts2[j].style.display = 'none';
      allTexts2[j].style.width = '0';
      allTexts2[j].style.opacity = '0';
    }
    // 闅愯棌浜岀骇鑿滃崟
    var allSections2 = sidebar.querySelectorAll('.nav-section');
    for(var m=0;m<allSections2.length;m++){
      var subItems2 = allSections2[m].querySelectorAll('.nav-item');
      for(var n=0;n<subItems2.length;n++) subItems2[n].style.setProperty('display', 'none', 'important');
    }
    // 鍥炬爣缇庡寲
    var allIcons2 = sidebar.querySelectorAll('.nav-icon');
    for(var x=0;x<allIcons2.length;x++){
      allIcons2[x].style.cssText = 'display:flex;align-items:center;justify-content:center;width:32px;height:32px;font-size:16px;border-radius:8px;background:rgba(24,95,165,0.08);box-shadow:none;';
    }
    var secIcons = sidebar.querySelectorAll('.section-icon');
    for(var y=0;y<secIcons.length;y++){
      secIcons[y].style.cssText = 'display:flex;align-items:center;justify-content:center;width:32px;height:32px;font-size:16px;';
    }
    // 鎸夐挳
    if(btn){
      var t2 = btn.querySelector('.toggle-text');
      if(t2){ t2.textContent = '灞曞紑瀵艰埅'; t2.style.display = 'none'; }
      btn.style.cssText = 'padding:8px 0;justify-content:center;width:100%;';
      var svg2 = btn.querySelector('svg');
      if(svg2) svg2.style.transform = 'rotate(180deg)';
    }
  }
}

// ===== 瀵艰埅鎶樺彔 =====
// 鍙敤 data-sub-collapsed 灞炴€ф帶鍒讹紝CSS 閫氳繃灞炴€ч€夋嫨鍣ㄦ帶鍒舵樉闅?
function toggleSection(titleEl){
  var section = titleEl.closest('.nav-section');
  if(!section) return;
  var isCollapsed = section.getAttribute('data-sub-collapsed') === 'true';
  if(isCollapsed){
    // 灞曞紑
    section.setAttribute('data-sub-collapsed', 'false');
  }else{
    // 鏀惰捣
    section.setAttribute('data-sub-collapsed', 'true');
  }
  // 鍚屾绠ご
  var arrow = section.querySelector('.section-arrow');
  if(arrow) arrow.textContent = isCollapsed ? '鈻? : '鈻?;
}

// ===== 瀵艰埅 =====

function initNav(){
  // 涓烘墍鏈変簩绾ц彍鍗曢」璁剧疆 tooltip
  document.querySelectorAll(".nav-item").forEach(item => {
    const txt = item.querySelector('.nav-text');
    if(txt && !item.getAttribute('title')){
      item.setAttribute('title', txt.textContent.trim());
    }
  });

  // 涓烘墍鏈変竴绾ц彍鍗曪紙鍒嗙粍鏍囬锛夎缃?tooltip锛堟敹璧峰悗鎮仠鎻愮ず鐢級
  document.querySelectorAll(".nav-section-title").forEach(title => {
    const txt = title.querySelector('.section-text');
    if(txt && !title.getAttribute('title')){
      title.setAttribute('title', txt.textContent.trim());
    }
  });

  document.querySelectorAll(".nav-item").forEach(item => {

    item.addEventListener("click", e => {

      e.preventDefault();

      // 鑷姩灞曞紑鎵€鍦ㄥ垎缁勶紙濡傛灉澶勪簬鎶樺彔鐘舵€侊級
      const sec = item.closest('.nav-section');
      if(sec){
        // 鐢?data 灞炴€у垽鏂紝涓嶄緷璧?class
        var isCollapsed = sec.getAttribute('data-sub-collapsed') === 'true';
        if(isCollapsed){
          sec.setAttribute('data-sub-collapsed', 'false');
          var subItems = sec.querySelectorAll('.nav-item');
          for(var i=0;i<subItems.length;i++) subItems[i].style.removeProperty('display');
          const arrow = sec.querySelector('.section-arrow');
          if(arrow) arrow.textContent = '鈻?;
        }
      }

      document.querySelectorAll(".nav-item").forEach(i=>i.classList.remove("active"));

      item.classList.add("active");

      renderModule(item.dataset.module);

      // 绉诲姩绔偣鍑诲鑸」鍚庤嚜鍔ㄥ叧闂晶杈规爮鎶藉眽
      if(window.innerWidth <= 768 || (window.innerHeight <= 500 && window.matchMedia('(orientation: landscape)').matches)){
        closeMobileSidebar();
      }

    });

  });

  // 鍒濆鍖栦竴绾ц彍鍗曠澶寸姸鎬侊紙纭繚绠ご鏂瑰悜鍜屽疄闄呯姸鎬佷竴鑷达級
  document.querySelectorAll('.nav-section').forEach(sec => {
    var arrow = sec.querySelector('.section-arrow');
    if(!arrow) return;
    // data-sub-collapsed 涓嶅瓨鍦ㄦ垨涓?'false' 鈫?灞曞紑 鈫?绠ご 鈻?
    // data-sub-collapsed 涓?'true' 鈫?鏀惰捣 鈫?绠ご 鈻?
    var isCollapsed = sec.getAttribute('data-sub-collapsed') === 'true';
    arrow.textContent = isCollapsed ? '鈻? : '鈻?;
  });

}







// ===== 妯″潡鍒嗗彂 =====

function renderModule(module){
  try {
    currentModule = module;
    const area = document.getElementById("module-content");
    const fns = {dashboard:renderDashboard, archive:renderArchive, target:renderTarget, cost:renderCost, operation:renderOperation, issue:renderIssue, knowledge:renderKnowledge, handover:renderHandover, satisfaction:renderSatisfaction, permissions:renderPermissions, notifications:renderNotifications, assessment:renderAssessment, performance:renderPerformance, risk:renderRisk, profile:renderProfile};
    area.innerHTML = fns[module] ? fns[module]() : `<div class="empty-state"><div class="empty-icon">馃毀</div><p>妯″潡寮€鍙戜腑...</p></div>`;
    bindEvents();
  } catch(e) {
    document.getElementById("module-content").innerHTML =
      '<div style="padding:40px;text-align:center;color:red;">' +
      '<h3>妯″潡鍔犺浇閿欒</h3><p>' + e.message + '</p></div>';
  }
}




// ----- 绛涢€夋爮鐘舵€?(v4) -----
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
  var timeLabel = {'':'鍏ㄩ儴鏃堕棿', all:'鍏ㄩ儴鏃堕棿', month:'鏈湀', lastMonth:'涓婃湀', quarter:'鏈', year:'鏈勾', custom:'鑷畾涔?};

  // 宸查€夋爣绛?
  var tagsHtml = '';
  var hasFilter = false;
  if (filterState.timeMode !== 'all' && filterState.timeMode !== '') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + timeLabel[filterState.timeMode] + '<i onclick="setFilter(\'timeMode\',\'\')">脳</i></span>'; }
  if (filterState.workplace !== 'all' && filterState.workplace !== '') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + filterState.workplace + '<i onclick="setFilter(\'workplace\',\'\')">脳</i></span>'; }
  if (filterState.projectType !== 'all' && filterState.projectType !== '') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + filterState.projectType + '<i onclick="setFilter(\'projectType\',\'\')">脳</i></span>'; }
  if (filterState.status !== 'all' && filterState.status !== '') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + filterState.status + '<i onclick="setFilter(\'status\',\'\')">脳</i></span>'; }
  if (filterState.health !== 'all' && filterState.health !== '') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + filterState.health + '<i onclick="setFilter(\'health\',\'\')">脳</i></span>'; }
  if (filterState.pm !== 'all') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + filterState.pm + '<i onclick="setFilter(\'pm\',\'all\')">脳</i></span>'; }
  if (filterState.director !== 'all') { hasFilter = true; tagsHtml += '<span class="filter-tag">' + filterState.director + '<i onclick="setFilter(\'director\',\'all\')">脳</i></span>'; }
  filterState.platforms.forEach(function(v) { hasFilter = true; tagsHtml += '<span class="filter-tag">' + v + '<i onclick="toggleMultiFilter(\'platforms\',\'' + v.replace(/'/g,"\\'") + '\')">脳</i></span>'; });
  filterState.category.forEach(function(v) { hasFilter = true; tagsHtml += '<span class="filter-tag">' + v + '<i onclick="toggleMultiFilter(\'category\',\'' + v.replace(/'/g,"\\'") + '\')">脳</i></span>'; });
  filterState.brand.forEach(function(v) { hasFilter = true; tagsHtml += '<span class="filter-tag">' + v + '<i onclick="toggleMultiFilter(\'brand\',\'' + v.replace(/'/g,"\\'") + '\')">脳</i></span>'; });
  if (hasFilter) tagsHtml = '<div class="filter-tags-row">' + tagsHtml + '<button class="filter-clear-btn" onclick="resetFilters()">娓呯┖绛涢€?/button></div>';

  // 绗竴琛岋細鏅€氫笅鎷?
  var workplaces = [...new Set(PROJECTS.map(function(p){return p.workplace}))].sort();
  var types = ['TP椤圭洰','DP椤圭洰','BPO椤圭洰'];
  var statuses = ['浼樿川鍋ュ悍搴?,'骞崇ǔ甯歌搴?,'椋庨櫓棰勮搴?,'楂樺嵄闂搴?];
  var healths = ['馃煝','馃煛','馃敶'];

  var row1 = '<div class="filter-row-v4">';
  row1 += '<select class="fb-select" id="filter-time" onchange="onFilterTimeChange(this.value)" title="鏃堕棿">';
  row1 += '<option value="" disabled selected hidden>鏃堕棿 鈻?/option>';
  row1 += '<option value="month"'+(filterState.timeMode==='month'?' selected':'')+'>鏈湀</option>';
  row1 += '<option value="lastMonth"'+(filterState.timeMode==='lastMonth'?' selected':'')+'>涓婃湀</option>';
  row1 += '<option value="quarter"'+(filterState.timeMode==='quarter'?' selected':'')+'>鏈</option>';
  row1 += '<option value="year"'+(filterState.timeMode==='year'?' selected':'')+'>鏈勾</option>';
  row1 += '<option value="custom"'+(filterState.timeMode==='custom'?' selected':'')+'>鑷畾涔?/option>';
  row1 += '</select>';

  row1 += '<select class="fb-select" id="filter-workplace" onchange="setFilter(\'workplace\',this.value)" title="鑱屽満">';
  row1 += '<option value="" disabled selected hidden>鑱屽満 鈻?/option>';
  row1 += '<option value="all"'+(filterState.workplace==='all'?' selected':'')+'>鍏ㄩ儴</option>';
  workplaces.forEach(function(w){ row1 += '<option value="'+w+'"'+(filterState.workplace===w?' selected':'')+'>'+w+'</option>'; });
  row1 += '</select>';

  row1 += '<select class="fb-select" id="filter-projectType" onchange="setFilter(\'projectType\',this.value)" title="绫诲瀷">';
  row1 += '<option value="" disabled selected hidden>绫诲瀷 鈻?/option>';
  row1 += '<option value="all"'+(filterState.projectType==='all'?' selected':'')+'>鍏ㄩ儴</option>';
  types.forEach(function(t){ row1 += '<option value="'+t+'"'+(filterState.projectType===t?' selected':'')+'>'+t+'</option>'; });
  row1 += '</select>';

  row1 += '<select class="fb-select" id="filter-status" onchange="setFilter(\'status\',this.value)" title="鐘舵€?>';
  row1 += '<option value="" disabled selected hidden>鐘舵€?鈻?/option>';
  row1 += '<option value="all"'+(filterState.status==='all'?' selected':'')+'>鍏ㄩ儴</option>';
  statuses.forEach(function(s){ row1 += '<option value="'+s+'"'+(filterState.status===s?' selected':'')+'>'+s+'</option>'; });
  row1 += '</select>';

  row1 += '<select class="fb-select" id="filter-health" onchange="setFilter(\'health\',this.value)" title="鍋ュ悍搴?>';
  row1 += '<option value="" disabled selected hidden>鍋ュ悍搴?鈻?/option>';
  row1 += '<option value="all"'+(filterState.health==='all'?' selected':'')+'>鍏ㄩ儴</option>';
  healths.forEach(function(h){
    var label = h==='馃煝'?'馃煝 鍋ュ悍':h==='馃煛'?'馃煛 棰勮':'馃敶 椋庨櫓';
    row1 += '<option value="'+h+'"'+(filterState.health===h?' selected':'')+'>'+label+'</option>';
  });
  row1 += '</select>';
  row1 += '</div>';

  // 鑷畾涔夋椂闂?
  var customTimeHtml = '';
  if (filterState.timeMode === 'custom') {
    customTimeHtml = '<div class="fb-custom-time">'+
      '<span>寮€濮嬫棩鏈?/span><input type="date" class="fb-date" id="fb-time-start" value="'+(filterState.timeStart||'')+'" onchange="filterState.timeStart=this.value;applyTimeFilter()">'+
      '<span>缁撴潫鏃ユ湡</span><input type="date" class="fb-date" id="fb-time-end" value="'+(filterState.timeEnd||'')+'" onchange="filterState.timeEnd=this.value;applyTimeFilter()">'+
      '</div>';
  }

  // 绗簩琛岋細鎼滅储涓嬫媺
  var row2 = '<div class="filter-row-v4 filter-row-v4-second">';

  // 骞冲彴
  var pfLabel = '骞冲彴 鈻?;
  if (filterState.platforms.length === 1) pfLabel = filterState.platforms[0];
  else if (filterState.platforms.length > 1) pfLabel = '宸查€?+filterState.platforms.length+'椤?;
  row2 += '<div class="fb-search-wrap" data-filter="platforms">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+pfLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-platforms" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" id="search-platforms" placeholder="鎼滅储骞冲彴..." oninput="renderFbOptions(\'platforms\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-platforms"></div>'+
    '<div class="fb-sp-footer"><button class="fb-sp-toggle-all" onclick="toggleFbSelectAll(\'platforms\',this)">鍏ㄩ€?/button><button class="fb-sp-clear" onclick="clearFbMulti(\'platforms\')">娓呯┖</button><button class="fb-sp-confirm" onclick="applyFbMulti(\'platforms\')">纭畾</button></div>'+
    '</div>';
  row2 += '</div>';

  // 鍝佺被
  var caLabel = '鍝佺被 鈻?;
  if (filterState.category.length === 1) caLabel = filterState.category[0];
  else if (filterState.category.length > 1) caLabel = '宸查€?+filterState.category.length+'椤?;
  row2 += '<div class="fb-search-wrap" data-filter="category">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+caLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-category" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" id="search-category" placeholder="鎼滅储鍝佺被..." oninput="renderFbOptions(\'category\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-category"></div>'+
    '<div class="fb-sp-footer"><button class="fb-sp-toggle-all" onclick="toggleFbSelectAll(\'category\',this)">鍏ㄩ€?/button><button class="fb-sp-clear" onclick="clearFbMulti(\'category\')">娓呯┖</button><button class="fb-sp-confirm" onclick="applyFbMulti(\'category\')">纭畾</button></div>'+
    '</div>';
  row2 += '</div>';

  // 鍝佺墝
  var brLabel = '鍝佺墝 鈻?;
  if (filterState.brand.length === 1) brLabel = filterState.brand[0];
  else if (filterState.brand.length > 1) brLabel = '宸查€?+filterState.brand.length+'椤?;
  row2 += '<div class="fb-search-wrap" data-filter="brand">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+brLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-brand" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" id="search-brand" placeholder="鎼滅储鍝佺墝..." oninput="renderFbOptions(\'brand\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-brand"></div>'+
    '<div class="fb-sp-footer"><button class="fb-sp-toggle-all" onclick="toggleFbSelectAll(\'brand\',this)">鍏ㄩ€?/button><button class="fb-sp-clear" onclick="clearFbMulti(\'brand\')">娓呯┖</button><button class="fb-sp-confirm" onclick="applyFbMulti(\'brand\')">纭畾</button></div>'+
    '</div>';
  row2 += '</div>';

  // PM锛堝崟閫夛級
  var pmLabel = filterState.pm === 'all' ? '椤圭洰PM 鈻? : filterState.pm;
  row2 += '<div class="fb-search-wrap" data-filter="pm">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+pmLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-pm" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" id="search-pm" placeholder="鎼滅储PM..." oninput="renderFbOptions(\'pm\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-pm"></div>'+
    '</div>';
  row2 += '</div>';

  // 瀹㈡湇绠＄悊锛堝崟閫夛級
  var drLabel = filterState.director === 'all' ? '瀹㈡湇绠＄悊 鈻? : filterState.director;
  row2 += '<div class="fb-search-wrap" data-filter="director">';
  row2 += '<div class="fb-search-trigger" onclick="toggleFbSearch(this)"><span>'+drLabel+'</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  row2 += '<div class="fb-search-panel" id="fb-panel-director" style="display:none;">'+
    '<div class="fb-sp-search"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg><input class="fb-search-input" type="text" id="search-director" placeholder="鎼滅储瀹㈡湇绠＄悊..." oninput="renderFbOptions(\'director\')"></div>'+
    '<div class="fb-sp-options" id="fb-options-director"></div>'+
    '</div>';
  row2 += '</div>';

  // 楂樼骇绛涢€夋寜閽?
  row2 += '<button class="fb-adv-btn" onclick="alert(\'楂樼骇绛涢€?- 寰呭紑鍙慭')">楂樼骇绛涢€?/button>';
  row2 += '</div>';

  return '<div class="filter-bar-v4">' + tagsHtml + row1 + customTimeHtml + row2 + '</div>';
}

// ----- 绛涢€夋爮 v4 杈呭姪鍑芥暟 -----
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
    values = [...new Set(PROJECTS.flatMap(function(p) { return (p.platforms || '').split(/[,锛屻€乚/).map(function(s){return s.trim();}).filter(Boolean); }))].filter(function(v){ return v !== '鍏ㄥ钩鍙?; }).sort();
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
      '<span class="fb-sp-check">' + (isSelected ? '鉁? : '') + '</span>' +
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
      el.querySelector('.fb-sp-check').textContent = '鉁?;
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
    // 鍙栨秷鍏ㄩ€?
    options.forEach(function(opt) {
      opt.classList.remove('selected');
      var check = opt.querySelector('.fb-sp-check');
      if (check) check.textContent = '';
    });
    // 閫変腑"鍏ㄩ儴"閫夐」
    var allOpt = panel.querySelector('.fb-sp-all');
    if (allOpt) {
      allOpt.classList.add('selected');
      var allCheck = allOpt.querySelector('.fb-sp-check');
      if (allCheck) allCheck.textContent = '鉁?;
    }
    btnEl.textContent = '鍏ㄩ€?;
  } else {
    // 鍏ㄩ€?
    options.forEach(function(opt) {
      opt.classList.add('selected');
      var check = opt.querySelector('.fb-sp-check');
      if (check) check.textContent = '鉁?;
    });
    // 鍙栨秷"鍏ㄩ儴"閫夐」鐨勯€変腑鐘舵€?
    var allOpt = panel.querySelector('.fb-sp-all');
    if (allOpt) {
      allOpt.classList.remove('selected');
      var allCheck = allOpt.querySelector('.fb-sp-check');
      if (allCheck) allCheck.textContent = '';
    }
    btnEl.textContent = '鍙栨秷鍏ㄩ€?;
  }
}

function applyFbMulti(key) {
  // 淇濆瓨閫変腑鐨勯€夐」鍒?filterState[key]
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

// 鐐瑰嚮椤甸潰绌虹櫧澶勫叧闂潰鏉?
document.addEventListener('click', function(e) {
  if (activeFbPanel && !activeFbPanel.contains(e.target) && !e.target.closest('.fb-search-trigger')) {
    activeFbPanel.classList.remove('show');
    activeFbPanel = null;
    renderModule(currentModule);
  }
});

// ----- 椤圭洰鍚嶇О鎼滅储澶氶€夌粍浠?-----
function toggleProjectDropdown(e) {
  e.stopPropagation();
  const dd = document.getElementById("project-filter-dropdown");
  if (!dd) return;
  const isOpen = dd.classList.contains("show");
  // 鍏抽棴鎵€鏈夊叾浠栦笅鎷?
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
// 鐐瑰嚮澶栭儴鍏抽棴椤圭洰涓嬫媺
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
  // 鍙洿鏂拌鏁帮紝涓嶅埛鏂伴〉闈紝绛夌敤鎴风偣纭
}

// 纭绛涢€夛細搴旂敤閫夋嫨骞跺埛鏂?
function applyProjectFilter() {
  closeProjectDropdown();
  renderModule(currentModule);
}

// 閲嶇疆椤圭洰绛涢€夛細娓呯┖閫夋嫨锛屽簲鐢?鍏ㄩ儴"
function resetProjectFilter() {
  filterState.project = [];
  updateProjectFilterLabel();
  closeProjectDropdown();
  renderModule(currentModule);
}
function updateProjectFilterLabel() {
  const el = document.getElementById("project-filter-label");
  if (el) {
    el.textContent = filterState.project.length ? `宸查€?${filterState.project.length} 椤筦 : "鍏ㄩ儴椤圭洰";
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

  // 鑱屽満绛涢€?
  if (filterState.workplace !== "all" && filterState.workplace !== "") {
    list = list.filter(p => p.workplace === filterState.workplace);
  }

  // 搴旂敤绛涢€夋爮鐨勭瓫閫夋潯浠?
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
      var pfs = (p.platforms || '').split(/[,锛屻€乚/).map(function(s){return s.trim();}).filter(Boolean);
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
  return currentRole === "绠＄悊鍛? || currentRole === "绠＄悊鍊欓€?;
}





// ===== 椹鹃┒鑸?=====

function renderDashboard(){

  const all = getFilteredProjects();

  const green = all.filter(p=>p.health==="馃煝").length;

  const yellow = all.filter(p=>p.health==="馃煛").length;

  const red = all.filter(p=>p.health==="馃敶").length;

  const totalRevenue = all.reduce((s,p)=>s+(p.revenue||0),0);

  const totalCost = all.reduce((s,p)=>s+(p.costBudget||0),0);

  const avgProfit = all.length ? (all.reduce((s,p)=>s+(p.profitRate||0),0)/all.length).toFixed(1) : 0;

  // 璁＄畻椤圭洰绫诲瀷鍒嗗竷
  const tpCount = all.filter(p=>p.serviceMode==="TP椤圭洰").length;
  const jxCount = all.filter(p=>p.serviceMode==="DP椤圭洰").length;
  const bpoCount = all.filter(p=>p.serviceMode==="BPO椤圭洰").length;

  // 璁＄畻杩愯惀鏁版嵁
  const filteredOps = OPERATIONS.filter(o => {
    const p = PROJECTS.find(pp=>pp.id===o.projectId);
    if (!p) return false;
    if (filterState.workplace !== 'all' && p.workplace !== filterState.workplace) return false;
    return all.some(ap => ap.id === o.projectId);
  });
  const totalOrders = filteredOps.reduce((s,o)=>s+o.ticketVol,0);
  const totalConv = filteredOps.reduce((s,o)=>s+o.convCount,0);

  // 瀹㈡湇宸ヤ綔閲忔暟鎹紙浠?WORKLOAD_DATA 璇诲彇锛屽鏋滄病鏈夋暟鎹垯浣跨敤榛樿鍊硷級
  const onlineCount = totalConv || 4286;
  const offlineCount = Math.round(totalOrders * 0.15) || 1852;
  const workloadRatio = 78;
  const workItems = WORKLOAD_DATA.length > 0 ? WORKLOAD_DATA.map(item => ({
    name: item.name,
    count: item.count,
    ratio: item.ratio
  })) : [
    {name:'璁㈠崟澶勭悊', count:625, ratio:100},
    {name:'閫€娆惧鐞?, count:342, ratio:55},
    {name:'鎶曡瘔澶勭悊', count:198, ratio:32},
    {name:'鎹㈣揣璺熻繘', count:156, ratio:25}
  ];

  // 瀹㈡湇閰嶇疆鏁版暟鎹紙浠?STAFF_CONFIG 璇诲彇锛屽鏋滄病鏈夋暟鎹垯浣跨敤榛樿鍊硷級
  const totalStaff = all.reduce((s,p)=>s+(p.fteActual||0),0) || 186;
  const staffConfig = STAFF_CONFIG.length > 0 ? STAFF_CONFIG.map((item, idx) => ({
    name: item.role,
    count: item.count,
    pct: item.pct,
    color: ['#0A7B78', '#0B9B96', '#00C9A7', '#6EE7B7', '#C4E5D8'][idx % 5]
  })) : [
    {name:'鍞墠瀹㈡湇', count:68, pct:37, color:'#0A7B78'},
    {name:'鍞悗瀹㈡湇', count:52, pct:28, color:'#0B9B96'},
    {name:'缁煎悎瀹㈡湇', count:45, pct:24, color:'#00C9A7'},
    {name:'瀹㈡湇绠＄悊', count:14, pct:8, color:'#6EE7B7'},
    {name:'鏁版嵁涓撳憳', count:7, pct:4, color:'#C4E5D8'}
  ];

  // 閿€鍞帓琛屾暟鎹?
  const salesRank = filteredOps.slice().sort((a,b)=>b.ticketVol-a.ticketVol).slice(0,5);
  const maxVol = salesRank.length ? salesRank[0].ticketVol : 1;

  // 鏈嶅姟鍒嗗竷鏁版嵁
  const goodSvc = filteredOps.filter(o=>o.csat>=4.5).length;
  const warnSvc = filteredOps.filter(o=>o.csat>=4.0&&o.csat<4.5).length;
  const badSvc = filteredOps.filter(o=>o.csat<4.0).length;
  const svcTotal = filteredOps.length || 1;

  // 鎴愭湰鍒嗗竷鏁版嵁
  const goodCost = all.filter(p=>p.profitRate>=15).length;
  const warnCost = all.filter(p=>p.profitRate>=5&&p.profitRate<15).length;
  const badCost = all.filter(p=>p.profitRate<5).length;
  const costTotal = all.length || 1;

  // 婊℃剰搴︾粏鍒嗙淮搴︼紙浠庤繍钀ユ暟鎹绠楃湡瀹炴弧鎰忓害锛?
  const avgCsat = filteredOps.length ? 
    (filteredOps.reduce((s,o)=>s+(o.csat||0),0)/filteredOps.length).toFixed(1) : '0.0';
  // 濡傛灉娌℃湁缁嗗垎鏁版嵁锛屼娇鐢ㄦ暣浣撴弧鎰忓害妯℃嫙涓変釜缁村害锛堢湡瀹炴暟鎹┍鍔級
  const baseScore = parseFloat(avgCsat) || 4.0;
  const dimScores = {
    comm: Math.min(5.0, (baseScore + 0.2).toFixed(1)),
    exec: Math.min(5.0, (baseScore + 0.4).toFixed(1)),
    collab: Math.min(5.0, (baseScore - 0.1).toFixed(1))
  };

  // KPI sparkline 鏁版嵁锛堟ā鎷燂級
    const _trendRev = calculateKpiTrend('revenue');
  const _trendCost = calculateKpiTrend('cost');
  const _trendProfit = calculateKpiTrend('profitRate');
  const _trendTarget = calculateKpiTrend('targetRate');
  const kpiCards = [
    {label:'鏈堝害鎬婚攢鍞', value:isNaN(totalRevenue)?'0.0涓?:(totalRevenue/10000).toFixed(1)+'涓?, trend:'+12.3%', trendUp:true, areaColor:'#FFD700', strokeColor:'#FFD700', path:'M 4,44 Q 14,40 24,36 T 44,32 T 64,28 T 84,24 T 104,20 L 104,50 L 4,50 Z', strokePath:'M 4,44 Q 14,40 24,36 T 44,32 T 64,28 T 84,24 T 104,20'},
    {label:'鏈堝害鎬绘垚鏈?, value:isNaN(totalCost)?'0.0涓?:(totalCost/10000).toFixed(1)+'涓?, trend:'+5.1%', trendUp:false, areaColor:'#FF6B6B', strokeColor:'#FF6B6B', path:'M 4,42 Q 14,38 24,36 T 44,34 T 64,36 T 84,32 T 104,28 L 104,50 L 4,50 Z', strokePath:'M 4,42 Q 14,38 24,36 T 44,34 T 64,36 T 84,32 T 104,28'},
    {label:'椤圭洰璐规晥姣?, value:'1.19', trend:'+0.08', trendUp:true, areaColor:'#00FFB9', strokeColor:'#00FFB9', path:'M 4,42 Q 14,40 24,38 T 44,36 T 64,32 T 84,30 T 104,26 L 104,50 L 4,50 Z', strokePath:'M 4,42 Q 14,40 24,38 T 44,36 T 64,32 T 84,30 T 104,26'},
    {label:'鐩爣杈炬垚鐜?, value:'94.2%', trend:'+3.5pp', trendUp:true, areaColor:'#00CFFF', strokeColor:'#00CFFF', path:'M 4,44 Q 14,42 24,40 T 44,38 T 64,36 T 84,34 T 104,30 L 104,50 L 4,50 Z', strokePath:'M 4,44 Q 14,42 24,40 T 44,38 T 64,36 T 84,34 T 104,30'},
    {label:'鍋ュ悍椤圭洰鏁?, value:green+'/'+all.length, trend:'鏌ョ湅璇︽儏 鈫?, trendUp:true, areaColor:'#ffffff', strokeColor:'#ffffff', path:'M 4,42 Q 14,40 28,38 T 52,36 T 76,32 T 100,30 T 124,26 L 124,50 L 4,50 Z', strokePath:'M 4,42 Q 14,40 28,38 T 52,36 T 76,32 T 100,30 T 124,26'}
  ];

  return `
  ${renderFilterBar()}

  <div class="module-header">
    <div>
      <div class="module-title">馃搳 闀夸俊瀹㈡湇椤圭洰鏅鸿涓績</div>
      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">${filterState.workplace==='all'?'鍏ㄩ儴鑱屽満':filterState.workplace+'鑱屽満'} 路 鍏?${all.length} 涓」鐩?/div>
    </div>
    <div class="module-actions">
      <button class="btn btn-sm" onclick="exportDashboard()">馃摜 瀵煎嚭鎶ヨ〃</button>
      <button class="btn btn-sm" onclick="downloadSampleData()">📄 下载示例数据</button>

      <button class="btn btn-sm" onclick="importData()">📂 导入数据</button>      <a href="#" class="btn btn-sm btn-primary" onclick="renderModule('comparison');return false;">馃搳 椤圭洰瀵规瘮</a>
    </div>
  </div>

  <!-- KPI 杩蜂綘鍗＄墖琛?-->
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
            <span style="opacity:0.8;margin-left:2px;">杈冧笂鏈?/span>
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

  <!-- 绗?琛岋細閿€鍞?鏈嶅姟/鎴愭湰 -->
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:12px;">

    <!-- 閿€鍞瑙?-->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <span style="font-size:13px;font-weight:600;color:#1e40af;">閿€鍞瑙?/span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="alert('鏌ョ湅瓒嬪娍鍔熻兘寮€鍙戜腑');return false;">鏌ョ湅瓒嬪娍 鈫?/a>
      </div>
      <div style="font-size:10px;color:#94a3b8;margin-bottom:8px;">椤圭洰鏈堝害璁㈠崟閲?(TOP 5)</div>
      ${salesRank.map((o,idx)=>{
        const p = PROJECTS.find(pp=>pp.id===o.projectId);
        const name = p ? p.name : o.projectId;
        const shortName = name.length>8 ? name.substring(0,8) : name;
        const barW = Math.round((o.ticketVol/maxVol)*86);
        const healthColor = o.health==='馃煝'?'#22c55e':o.health==='馃煛'?'#eab308':'#ef4444';
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

    <!-- 鏈嶅姟姒傝 -->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <span style="font-size:13px;font-weight:600;color:#0f766e;">鏈嶅姟姒傝</span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="alert('璇︽儏鍔熻兘寮€鍙戜腑');return false;">璇︽儏 鈫?/a>
      </div>
      <div style="display:flex;gap:16px;margin-bottom:10px;">
        <div style="text-align:center;flex:1;">
          <div style="font-size:26px;font-weight:700;color:#0f766e;">28s</div>
          <div style="font-size:10px;color:#64748b;">骞冲潎鍝嶅簲鏃堕棿</div>
          <div style="font-size:11px;color:#10b981;">蹇?绉?/div>
        </div>
        <div style="text-align:center;flex:1;">
          <div style="font-size:26px;font-weight:700;color:#0f766e;">4.72</div>
          <div style="font-size:10px;color:#64748b;">CSAT 骞冲潎鍒?/div>
          <div style="font-size:11px;color:#10b981;">+0.15</div>
        </div>
      </div>
      <div style="border-top:1px solid #f1f5f9;padding-top:8px;">
        <div style="font-size:11px;color:#334155;font-weight:500;margin-bottom:6px;">椤圭洰鏈嶅姟琛ㄧ幇鍒嗗竷</div>
        <div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:11px;">
          <span style="width:80px;color:#10b981;">杈炬爣 (>=4.5)</span>
          <div style="flex:1;height:8px;background:#f1f5f9;border-radius:4px;overflow:hidden;">
            <div style="width:${Math.round(goodSvc/svcTotal*100)}%;height:100%;background:#10b981;border-radius:4px;"></div>
          </div>
          <span style="width:60px;text-align:right;color:#64748b;font-size:10px;">${goodSvc}椤?${Math.round(goodSvc/svcTotal*100)}%</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:11px;">
          <span style="width:80px;color:#eab308;">棰勮 (4.0-4.5)</span>
          <div style="flex:1;height:8px;background:#f1f5f9;border-radius:4px;overflow:hidden;">
            <div style="width:${Math.round(warnSvc/svcTotal*100)}%;height:100%;background:#eab308;border-radius:4px;"></div>
          </div>
          <span style="width:60px;text-align:right;color:#64748b;font-size:10px;">${warnSvc}椤?${Math.round(warnSvc/svcTotal*100)}%</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;padding:2px 0;font-size:11px;">
          <span style="width:80px;color:#ef4444;">鍛婅 (<4.0)</span>
          <div style="flex:1;height:8px;background:#f1f5f9;border-radius:4px;overflow:hidden;">
            <div style="width:${Math.round(badSvc/svcTotal*100)}%;height:100%;background:#ef4444;border-radius:4px;"></div>
          </div>
          <span style="width:60px;text-align:right;color:#64748b;font-size:10px;">${badSvc}椤?${Math.round(badSvc/svcTotal*100)}%</span>
        </div>
      </div>
    </div>

    <!-- 鎴愭湰鎺у埗 -->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <span style="font-size:13px;font-weight:600;color:#44403c;">鎴愭湰鎺у埗</span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="alert('鎶ュ憡鍔熻兘寮€鍙戜腑');return false;">鎶ュ憡 鈫?/a>
      </div>
      <div style="display:flex;gap:16px;margin-bottom:10px;">
        <div style="text-align:center;flex:1;">
          <div style="font-size:10px;color:#64748b;">鎬绘垚鏈?/div>
          <div style="font-size:20px;font-weight:700;color:#44403c;">${isNaN(totalCost)?'0.0':(totalCost/10000).toFixed(1)}涓?/div>
        </div>
        <div style="text-align:center;flex:1;">
          <div style="font-size:10px;color:#64748b;">鎬婚绠?/div>
          <div style="font-size:20px;font-weight:700;color:#44403c;">60.0涓?/div>
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
            <div style="font-size:8px;color:#94a3b8;">棰勭畻鎵ц鐜?/div>
          </div>
        </div>
        <div style="flex:1;">
          <div style="font-size:10px;color:#64748b;margin-bottom:4px;">鍒╂鼎鐜囧垎甯?/div>
          <div style="display:flex;align-items:center;gap:4px;margin-bottom:3px;font-size:10px;">
            <span style="width:8px;height:8px;border-radius:50%;background:#10b981;"></span>
            <span style="color:#475569;">>=15% ${goodCost}椤?/span>
          </div>
          <div style="display:flex;align-items:center;gap:4px;margin-bottom:3px;font-size:10px;">
            <span style="width:8px;height:8px;border-radius:50%;background:#eab308;"></span>
            <span style="color:#475569;">5%-15% ${warnCost}椤?/span>
          </div>
          <div style="display:flex;align-items:center;gap:4px;font-size:10px;">
            <span style="width:8px;height:8px;border-radius:50%;background:#ef4444;"></span>
            <span style="color:#475569;"><5% ${badCost}椤?/span>
          </div>
        </div>
      </div>
      ${badCost>0?`<div style="background:#fef2f2;border-radius:4px;padding:4px 8px;text-align:center;">
        <span style="font-size:10px;color:#dc2626;">${all.find(p=>p.profitRate<5)?.name||'鏌愰」鐩?} 瓒呴绠?${Math.abs(all.find(p=>p.profitRate<5)?.profitRate||5.3)}%</span>
      </div>`:'`'}
    </div>

  </div>

  <!-- 绗?琛岋細婊℃剰搴?宸ヤ綔閲?閰嶇疆鏁?-->
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:12px;">

    <!-- 椤圭洰婊℃剰搴?-->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:13px;font-weight:600;color:#1d4ed8;">椤圭洰婊℃剰搴?/span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="alert('璇︽儏鍔熻兘寮€鍙戜腑');return false;">璇︽儏 鈫?/a>
      </div>
      <div style="display:flex;gap:12px;margin-bottom:8px;">
        <div>
          <div style="font-size:10px;color:#64748b;">缁煎悎婊℃剰搴?/div>
          <div><span style="font-size:20px;font-weight:700;color:#1d4ed8;">4.6</span><span style="font-size:11px;color:#94a3b8;">/5.0</span></div>
          <div style="font-size:10px;color:#10b981;">鈻?+0.2</div>
        </div>
        <div>
          <div style="font-size:10px;color:#64748b;">NPS瓒嬪娍(鏈湀)</div>
          <div style="font-size:13px;color:#1d4ed8;">+ 62%</div>
          <div style="font-size:13px;color:#ef4444;">- 8%</div>
        </div>
      </div>
      <div style="border-top:1px solid #f1f5f9;padding-top:6px;margin-bottom:6px;">
        <div style="font-size:10px;color:#94a3b8;margin-bottom:4px;">鍚勯」鐩瘎鍒?/div>
        ${filteredOps.slice(0,6).map(o=>{
          const p = PROJECTS.find(pp=>pp.id===o.projectId);
          const barW = Math.round((o.csat/5)*80);
          const barColor = o.csat>=4.5?'#1d4ed8':o.csat>=4.0?'#3b82f6':'#60a5fa';
          const tag = o.csat<4.0?'<span style="background:#fee2e2;color:#dc2626;font-size:8px;padding:1px 4px;border-radius:3px;margin-left:4px;">閲嶇偣</span>':o.csat<4.5?'<span style="background:#fef3c7;color:#d97706;font-size:8px;padding:1px 4px;border-radius:3px;margin-left:4px;">鏀硅繘</span>':'';
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
        <div style="font-size:10px;color:#94a3b8;margin-bottom:4px;">缁嗗垎缁村害璇勫垎</div>
        <div style="display:flex;align-items:center;gap:4px;padding:1px 0;font-size:10px;">
          <span style="width:28px;color:#475569;">娌熼€?/span>
          <div style="flex:1;height:5px;background:#eff6ff;border-radius:3px;overflow:hidden;">
            <div style="width:${Math.round(dimScores.comm/5*60)}px;height:100%;background:#3b82f6;border-radius:3px;"></div>
          </div>
          <span style="width:20px;text-align:right;color:#1d4ed8;">${dimScores.comm}</span>
        </div>
        <div style="display:flex;align-items:center;gap:4px;padding:1px 0;font-size:10px;">
          <span style="width:28px;color:#475569;">鎵ц</span>
          <div style="flex:1;height:5px;background:#eff6ff;border-radius:3px;overflow:hidden;">
            <div style="width:${Math.round(dimScores.exec/5*60)}px;height:100%;background:#60a5fa;border-radius:3px;"></div>
          </div>
          <span style="width:20px;text-align:right;color:#1d4ed8;">${dimScores.exec}</span>
        </div>
        <div style="display:flex;align-items:center;gap:4px;padding:1px 0;font-size:10px;">
          <span style="width:28px;color:#475569;">鍗忎綔</span>
          <div style="flex:1;height:5px;background:#eff6ff;border-radius:3px;overflow:hidden;">
            <div style="width:${Math.round(dimScores.collab/5*60)}px;height:100%;background:#93c5fd;border-radius:3px;"></div>
          </div>
          <span style="width:20px;text-align:right;color:#1d4ed8;">${dimScores.collab}</span>
        </div>
      </div>
    </div>

    <!-- 瀹㈡湇宸ヤ綔閲?-->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:13px;font-weight:600;color:#4f46e5;">瀹㈡湇宸ヤ綔閲?/span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="alert('璇︽儏鍔熻兘寮€鍙戜腑');return false;">璇︽儏 鈫?/a>
      </div>
      <div style="display:flex;gap:12px;margin-bottom:10px;">
        <div style="flex:1;text-align:center;">
          <div style="font-size:10px;color:#64748b;margin-bottom:2px;">绾夸笂鎺ュ緟浜烘暟</div>
          <div style="font-size:18px;font-weight:700;color:#4f46e5;">${onlineCount.toLocaleString()}</div>
        </div>
        <div style="width:1px;background:#e2e8f0;"></div>
        <div style="flex:1;text-align:center;">
          <div style="font-size:10px;color:#64748b;margin-bottom:2px;">绾夸笅宸ュ崟閲?/div>
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
            <div style="font-size:9px;color:#8b5cf6;line-height:1;margin-top:2px;">宸ヤ綔閲忚礋鑽锋瘮</div>
          </div>
        </div>
      </div>
      <div style="border-top:1px solid #f1f5f9;padding-top:6px;">
        <div style="font-size:10px;color:#94a3b8;margin-bottom:5px;">绾夸笅宸ヤ綔閲忓垎甯?TOP4</div>
        ${workItems.map(w=>`<div style="display:flex;align-items:center;gap:6px;padding:3px 0;font-size:11px;">
          <span style="width:56px;color:#475569;flex-shrink:0;">${w.name}</span>
          <div style="flex:1;height:7px;background:#f1f5f9;border-radius:4px;overflow:hidden;">
            <div style="width:${w.ratio}%;height:100%;background:linear-gradient(90deg,#0B9B96,#00C9A7);border-radius:4px;"></div>
          </div>
          <span style="width:42px;text-align:right;color:#64748b;font-size:10px;flex-shrink:0;">${w.count}浠?/span>
        </div>`).join('')}
      </div>
    </div>

    <!-- 瀹㈡湇閰嶇疆鏁?-->
    <div class="dashboard-card" style="padding:14px 16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:13px;font-weight:600;color:#312e81;">瀹㈡湇閰嶇疆鏁?/span>
        <a href="#" style="font-size:11px;color:#3b82f6;" onclick="alert('璇︽儏鍔熻兘寮€鍙戜腑');return false;">璇︽儏 鈫?/a>
      </div>
      <div style="margin-bottom:10px;">
        <div style="font-size:10px;color:#64748b;">鎬诲垎鎽婁汉鏁?/div>
        <div><span style="font-size:24px;font-weight:700;color:#312e81;">${totalStaff}</span><span style="font-size:12px;color:#94a3b8;">浜?/span></div>
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
          <text x="0" y="11" text-anchor="middle" font-size="8" fill="#64748b">鎬讳汉鏁?/text>
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

  <!-- 椤圭洰鍋ュ悍鏄庣粏 -->
  <div class="card" style="padding:12px 16px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <span style="font-size:13px;font-weight:600;color:#1e40af;">椤圭洰鍋ュ悍鏄庣粏</span>
      <a href="#" style="font-size:11px;color:#3b82f6;" onclick="renderModule('operation');return false;">鏌ョ湅瀹屾暣鍋ュ悍鎶ュ憡 鈫?/a>
    </div>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-size:11px;min-width:500px;">
        <thead>
          <tr style="background:#eff6ff;">
            <th style="padding:5px 4px;text-align:left;color:#1e40af;font-weight:600;">椤圭洰</th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:40px;">浜哄姏</th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:40px;">鏈嶅姟</th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:40px;">閿€鍞?/th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:40px;">閫€璐?/th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:40px;">椋庨櫓</th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:40px;">鎴愭湰</th>
            <th style="padding:5px 4px;text-align:center;color:#1e40af;font-weight:600;width:50px;">缁煎悎</th>
          </tr>
        </thead>
        <tbody>
          ${all.map(p=>{
            const h = HEALTH_DATA.find(hh=>hh.projectId===p.id&&hh.period==="2026-05");
            const dims = h ? h.dimensions : [];
            const getDim = name=>{
              const d = dims.find(dd=>dd.name.includes(name));
              if(!d) return '<span style="color:#9ca3af;">-</span>';
              return d.level==='浼樼'||d.level==='鍋ュ悍'?'<span style="color:#22c55e;font-size:12px;">鈼?/span>':d.level==='闇€娉ㄦ剰'?'<span style="color:#eab308;font-size:12px;">鈼?/span>':'<span style="color:#ef4444;font-size:12px;">鈼?/span>';
            };
            const score = h?h.overallScore:'--';
            const scoreColor = score>=90?'#dcfce7':score>=80?'#fef9c3':'#fee2e2';
            const scoreText = score>=90?'#166534':score>=80?'#854d0e':'#991b1b';
            return `<tr style="border-bottom:1px solid #f1f5f9;">
              <td style="padding:5px 4px;"><a href="#" style="color:var(--c-primary);font-size:11px;" onclick="showProjectDetail('${p.id}');return false;">${p.name}</a></td>
              <td style="padding:5px 4px;text-align:center;">${getDim('浜哄姏')}</td>
              <td style="padding:5px 4px;text-align:center;">${getDim('鏈嶅姟')}</td>
              <td style="padding:5px 4px;text-align:center;">${getDim('閿€鍞?)}</td>
              <td style="padding:5px 4px;text-align:center;">${getDim('閫€璐?)}</td>
              <td style="padding:5px 4px;text-align:center;">${getDim('椋庨櫓')}</td>
              <td style="padding:5px 4px;text-align:center;">${getDim('鎴愭湰')}</td>
              <td style="padding:5px 4px;text-align:center;"><span style="display:inline-block;padding:2px 8px;border-radius:4px;background:${scoreColor};color:${scoreText};font-size:10px;font-weight:600;">${score}</span></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  </div>`;

}



// ===== 椤圭洰鍩虹妗ｆ =====}



// ===== 椤圭洰鍩虹妗ｆ =====

function renderArchive(){

  const all = getFilteredProjects();

  const can = canEditModule('archive');

  return `
  ${renderFilterBar()}

  <div class="module-header">

    <div>

      <div class="module-title">馃搵 椤圭洰鍩虹妗ｆ</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">璁板綍椤圭洰闈欐€佸熀纭€淇℃伅锛屾柊浜哄彲蹇€熶簡瑙ｉ」鐩叏璨?/div>

    </div>

    <div class="module-actions" style="flex-wrap:wrap;gap:6px;align-items:center;">

      <!-- 鎼滅储妗?-->
      <input type="text" id="archive-search" placeholder="馃攳 鎼滅储椤圭洰缂栧彿/鍚嶇О/鍝佺墝..." 
        style="padding:5px 10px;border-radius:6px;border:1px solid var(--c-border);font-size:13px;width:220px;"
        oninput="filterArchiveTable(this.value)">

      <button class="btn btn-sm" onclick="showImportDialog()" style="margin-right:4px;">馃摛 瀵煎叆</button>
      <button class="btn btn-sm" onclick="exportProjects()" style="margin-right:8px;">馃摜 瀵煎嚭</button>
      ${can?'<button class="btn btn-primary btn-sm" onclick="showAddProject()">锛?鏂板椤圭洰</button>':''}

      ${can?'<button class="btn btn-sm" style="color:#fff;background:#e74c3c;border-color:#e74c3c;margin-left:4px;" onclick="batchDeleteProjects()">馃棏 鎵归噺鍒犻櫎</button>':''}

      ${currentRole==='leader'?'<span class="badge badge-gray">鍙鏉冮檺</span>':''}

    </div>

  </div>

  <div class="card">

    <table class="data-table">

      <thead><tr>
        ${can?'<th style="width:36px;"><input type="checkbox" id="archive-select-all" onclick="toggleArchiveSelectAll(this.checked)" title="鍏ㄩ€?鍙栨秷"></th>':''}
        <th>椤圭洰缂栧彿</th><th>椤圭洰鍚嶇О</th><th>鍝佺墝/鍝佺被</th><th>椤圭洰绫诲瀷</th><th>鎵€灞炶亴鍦?/th><th>璐熻矗浜?/th><th>椤圭洰鎬荤洃</th><th>浜ゆ帴鍘嗗彶</th><th>鎿嶄綔</th></tr></thead>

      <tbody id="archive-tbody">

        ${all.map((p, idx)=>`

          <tr data-id="${p.id}" data-name="${p.name}" data-brand="${p.brand}" data-pm="${p.pm}">

            ${can?`<td><input type="checkbox" class="archive-row-check" value="${p.id}" onchange="updateBatchDeleteBtn()"></td>`:''}

            <td>${p.id}</td>

            <td><a href="#" style="color:var(--c-primary);cursor:pointer" onclick="showProjectDetail('${p.id}');return false;">${p.name}</a></td>

            <td>${p.brand} / ${p.category}</td>

            <td><span class="badge ${p.serviceMode==='TP椤圭洰'?'badge-blue':p.serviceMode==='DP椤圭洰'?'badge-green':'badge-orange'}">${p.serviceMode}</span></td>

            <td><span class="wp-tag wp-${p.workplace}">${p.workplace}</span></td>

            <td>${p.pm}</td>

            <td>${p.director}</td>

            <td>${(p.pmHistory||[]).length>0?`<span class="badge badge-gray" title="${(p.pmHistory||[]).map(h=>h.name+'('+h.from+'~'+h.to+')').join('; ')}">${(p.pmHistory||[]).length}娆′氦鎺?/span>`:'鏃?}</td>

            <td class="actions">
              <button class="btn btn-sm" onclick="showProjectDetail('${p.id}')">鏌ョ湅</button>
              ${can?`&nbsp;<button class="btn btn-sm" onclick="editProject('${p.id}')">缂栬緫</button>&nbsp;
              <button class="btn btn-sm" style="color:#fff;background:#e74c3c;border-color:#e74c3c;" onclick="deleteProjectConfirm('${p.id}','${p.name}')">鍒犻櫎</button>`:''}

            </td>

          </tr>`).join('')}

      </tbody>

    </table>

    <div id="archive-empty-hint" style="display:none;padding:20px;text-align:center;color:var(--c-text-3);font-size:14px;">
      鏈壘鍒板尮閰嶇殑椤圭洰锛岃灏濊瘯鍏朵粬鎼滅储鍏抽敭璇?
    </div>

  </div>`;

}




function filterArchiveTable(kw){kw=(kw||'').toLowerCase().trim();var r=document.querySelectorAll('#archive-tbody tr'),c=0;r.forEach(function(row){if(!kw){row.style.display='';c++;return;}var t=(row.dataset.id+' '+row.dataset.name+' '+row.dataset.brand+' '+row.dataset.pm).toLowerCase();var m=t.indexOf(kw)!==-1;row.style.display=m?'':'none';if(m)c++});var h=document.getElementById('archive-empty-hint');if(h)h.style.display=c===0?'':'none'}
function toggleArchiveSelectAll(c){var cb=document.querySelectorAll('.archive-row-check');for(var i=0;i<cb.length;i++)cb[i].checked=c;updateBatchDeleteBtn()}
function updateBatchDeleteBtn(){var c=document.querySelectorAll('.archive-row-check:checked'),b=document.querySelectorAll("[onclick='batchDeleteProjects()']");for(var i=0;i<b.length;i++){b[i].disabled=c.length===0;b[i].style.opacity=c.length>0?1:0.5}}
function batchDeleteProjects(){var c=document.querySelectorAll('.archive-row-check:checked');if(!c.length){alert('璇峰厛鍕鹃€夎鍒犻櫎鐨勯」鐩?);return}var ids=[];for(var i=0;i<c.length;i++)ids.push(c[i].value);if(!confirm('纭畾鍒犻櫎閫変腑鐨?+ids.length+'涓」鐩紵姝ゆ搷浣滀笉鍙仮澶嶏紒'))return;ids.forEach(function(id){deleteProjectDirectly(id)});showToast('宸插垹闄?+ids.length+'涓」鐩?);renderModule('archive')}
function deleteProjectConfirm(id,name){if(confirm('纭畾鍒犻櫎銆?+name+'銆嶏紵浠呭垹姝ゆ潯锛屼笉褰卞搷鍏朵粬妯″潡'))deleteProject(id)}
function deleteProjectDirectly(id){PROJECTS=PROJECTS.filter(function(p){return p.id!==id});safeSetItem('chansee_projects',JSON.stringify(PROJECTS));if(window.CloudBaseSync)window.CloudBaseSync.saveAll()}

// ===== 鐩爣涓庢潈璐ｇ鐞?=====

function renderTarget(){

  const all = getFilteredProjects();

  const can = canEdit();

  return `
  ${renderFilterBar()}

  <div class="module-header">

    <div>

      <div class="module-title">馃幆 鐩爣涓庢潈璐ｇ鐞?/div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">瀹氫箟椤圭洰鐩爣涓庢潈璐ｏ紝閬垮厤鎺ㄨ</div>

    </div>

    <div class="module-actions">

      ${can?'<button class="btn btn-primary btn-sm">锛?璁剧疆鐩爣</button>':''}

      ${currentRole==='leader'?'<span class="badge badge-gray">鍙鏉冮檺</span>':''}

    </div>

  </div>

  <div class="card">

    <table class="data-table">

      <thead><tr><th>椤圭洰</th><th>浜哄姏鐩爣</th><th>SLA鍝嶅簲(绉?</th><th>SLA瑙ｅ喅(绉?</th><th>CSat鐩爣</th><th>鎴愭湰棰勭畻(涓?</th><th>璐ｄ换杈圭晫璇存槑</th></tr></thead>

      <tbody>

        ${all.map(p=>`

          <tr>

            <td>${p.name}</td>

            <td>${p.fteTarget}浜?/td>

            <td>${p.slaResponse}</td>

            <td>${p.slaResolve}</td>

            <td>鈮?.5</td>

            <td>楼${((p.costBudget||0)/10000).toFixed(1)}</td>

            <td style="max-width:200px;font-size:12px;color:var(--c-text-2)">鎵挎帴鏂硅礋璐ｅ鏈嶆湇鍔¤川閲忥紱闇€姹傛柟璐熻矗绯荤粺绋冲畾鎬т笌娲诲姩淇℃伅鍚屾</td>

          </tr>`).join('')}

      </tbody>

    </table>

  </div>`;

}



// ===== 鎴愭湰涓庡埄娑︾鐞?=====

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

  // 鍗＄墖鏁版嵁
  const cards = [
    { label:'鎬昏惀鏀讹紙鏈堝害锛?, value:'楼'+(totalRevenue/10000).toFixed(1)+'涓?, sub:'', cls:'normal' },
    { label:'鎬绘垚鏈紙鏈堝害锛?, value:'楼'+(totalActual/10000).toFixed(1)+'涓?, sub:'棰勭畻鍐吢疯秴鏀巼'+((totalActual-totalBudget)/totalBudget*100||0).toFixed(1)+'%', cls:'normal' },
    { label:'骞冲潎鍒╂鼎鐜?, value:avgProfit.toFixed(1)+'%', sub:'鐜瘮+1.2%', cls:'blue' },
    { label:'棰勮椤圭洰鏁?, value:warnCount+'', sub:warnCount>0?'闇€绔嬪嵆鍏虫敞':'鍏ㄩ儴姝ｅ父', cls:warnCount>0?'red':'green' }
  ];

  return `
  ${renderFilterBar()}

  <div class="module-header">

    <div>

      <div class="module-title">馃挵 鎴愭湰涓庡埄娑︾鐞?/div>
      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">璺熻釜椤圭洰鎴愭湰缁撴瀯涓庡埄娑︽儏鍐碉紝鍒╂鼎鐜囦綆浜?%鑷姩棰勮</div>

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
    <div style="padding:14px 18px;border-bottom:1px solid var(--c-border-light);font-weight:500;font-size:14px;">馃搳 椤圭洰鍒╂鼎鏄庣粏</div>
    <div style="overflow-x:auto;">
    <table class="data-table profit-table">
      <thead><tr><th>椤圭洰</th><th>钀ユ敹(涓?</th><th>棰勭畻鎴愭湰(涓?</th><th>瀹為檯鎴愭湰(涓?</th><th>鍒╂鼎鐜?/th><th>棰勮</th><th>瓒嬪娍</th></tr></thead>
      <tbody>
        ${all.map(p=>{
          const actualCost = Math.round((p.costBudget||0) * (0.9+Math.random()*0.3));
          const actualProfit = (p.revenue && p.revenue > 0) ? ((p.revenue - actualCost)/p.revenue*100).toFixed(1) : '0.0';
          const pr = parseFloat(actualProfit);
          let rowCls = 'profit-row-normal';
          if (pr < 5) rowCls = 'profit-row-danger';
          else if (pr < 10) rowCls = 'profit-row-warning';
          let badge = '<span class="profit-badge profit-badge-green">姝ｅ父</span>';
          if (pr < 5) badge = '<span class="profit-badge profit-badge-red">鍒╂鼎鐜囪繃浣?/span>';
          else if (pr < 10) badge = '<span class="profit-badge profit-badge-yellow">鍏虫敞</span>';
          return `<tr class="${rowCls}">
            <td>${p.name||'鏈懡鍚?}</td>
            <td>楼${((p.revenue||0)/10000).toFixed(1)}</td>
            <td>楼${((p.costBudget||0)/10000).toFixed(1)}</td>
            <td>楼${(actualCost/10000).toFixed(1)}</td>
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
    <span class="profit-legend-item"><span class="profit-legend-dot" style="background:var(--c-green)"></span>姝ｅ父鐩堝埄</span>
    <span class="profit-legend-item"><span class="profit-legend-dot" style="background:var(--c-yellow)"></span>闇€鍏虫敞</span>
    <span class="profit-legend-item"><span class="profit-legend-dot" style="background:var(--c-red)"></span>鍒╂鼎鐜囦负璐?浣庝簬5%</span>
  </div>`;

}




// ===== 鏈嶅姟涓庤繘搴﹁拷韪紙鏂扮増 2026-06-09锛?=====

// 璁＄畻椤圭洰鍋ュ悍绛夌骇
function getHealthLevel(score) {
  if (score >= 90) return { level: "浼樿川鍋ュ悍搴?, class: "excellent", icon: "馃煝" };
  if (score >= 75) return { level: "骞崇ǔ甯歌搴?, class: "normal", icon: "馃煛" };
  if (score >= 60) return { level: "椋庨櫓棰勮搴?, class: "warning", icon: "馃煚" };
  return { level: "楂樺嵄闂搴?, class: "danger", icon: "馃敶" };
}

// 娓叉煋鍥涘ぇ鍗＄墖姒傝
function renderHealthOverviewCards(projects) {
  const projectHealth = projects.map(p => {
    const h = HEALTH_DATA.find(hh => hh.projectId === p.id && hh.period === "2026-05");
    const score = h ? h.overallScore : 0;
    const healthInfo = score > 0 ? getHealthLevel(score) : { level: "鏈瘎浼?, class: "unrated", icon: "鈿? };
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
    return Object.entries(map).map(([k, v]) => k + "(" + v + ")").join(" 路 ");
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
      <div class="hoc-count">${count}<span class="hoc-unit">瀹?/span></div>
      ${count > 0 ? `
        <div class="hoc-stats">
          <div class="hoc-stat-item">馃搷 ${workplaces || "鏃?}</div>
          <div class="hoc-stat-item">馃彿锔?${types || "鏃?}</div>
        </div>
        <div class="hoc-footer">鏌ョ湅鏄庣粏 鈫?/div>
      ` : '<div class="hoc-empty">鏆傛棤鏁版嵁</div>'}
    </div>`;
  }

  return `
  <div class="health-overview-cards">
    ${renderCard("excellent", "馃煝", "浼樿川鍋ュ悍搴?, grouped.excellent)}
    ${renderCard("normal", "馃煛", "骞崇ǔ甯歌搴?, grouped.normal)}
    ${renderCard("warning", "馃煚", "椋庨櫓棰勮搴?, grouped.warning)}
    ${renderCard("danger", "馃敶", "楂樺嵄闂搴?, grouped.danger)}
  </div>
  <div id="health-card-detail" style="display:none;"></div>`;
}

// 娓叉煋鍋ュ悍棰勮鎽樿
function renderHealthWarningSummary(healthData) {
  if (!healthData) return '<div style="padding:12px;color:var(--c-text-3);">鏆傛棤鍋ュ悍搴︽暟鎹?/div>';
  const badDims = healthData.dimensions.filter(d => d.score < 85).sort((a, b) => a.score - b.score);
  if (badDims.length === 0) {
    return `
    <div class="health-warning-summary healthy">
      <div class="hws-icon">鉁?/div>
      <div class="hws-text">鍚勭淮搴﹁〃鐜拌壇濂斤紝鏃犳槑鏄鹃闄╃偣</div>
    </div>`;
  }
  const reasons = badDims.map(d => {
    const badItems = d.items.filter(i => i.score < 85);
    const details = badItems.length > 0
      ? badItems.map(i => i.name + ": 瀹為檯" + i.actual + "锛岀洰鏍? + i.target).join("<br>")
      : "鏁翠綋缁村害寰楀垎鍋忎綆";
    return `<div class="hws-reason">
      <div class="hws-reason-title ${d.level}">${d.name}(${d.score}鍒喡?{d.level})</div>
      <div class="hws-reason-details">${details}</div>
    </div>`;
  }).join("");
  return `
  <div class="health-warning-summary warning">
    <div class="hws-header">
      <span class="hws-icon">鈿狅笍</span>
      <span class="hws-title">鍋ュ悍棰勮鎽樿</span>
    </div>
    ${reasons}
  </div>`;
}

// 鍒嗘暟棰滆壊
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

// 娓叉煋璇勫垎鏄庣粏琛?
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
    if (sortState.key !== key) return "鈫曪笍";
    return sortState.dir === "desc" ? "鈫? : "鈫?;
  }
  return `
  <div class="card" style="margin-top:16px;">
    <div style="padding:14px 18px;border-bottom:1px solid var(--c-border-light);font-weight:500;font-size:14px;">馃搳 搴楅摵缁煎悎璇勫垎鏄庣粏锛堝墠6鍚嶏級</div>
    <div style="overflow-x:auto;">
      <table class="data-table health-score-table">
        <thead>
          <tr>
            <th style="width:50px;">鎺掑悕</th>
            <th onclick="sortHealthTable('name')" style="cursor:pointer;">搴楅摵鍚嶇О ${sortArrow("name")}</th>
            <th onclick="sortHealthTable('workplace')" style="cursor:pointer;">鑱屽満 ${sortArrow("workplace")}</th>
            <th>绫诲瀷</th>
            <th onclick="sortHealthTable('score')" style="cursor:pointer;">缁煎悎 ${sortArrow("score")}</th>
            <th onclick="sortHealthTable('manpower')" style="cursor:pointer;">浜哄姏 ${sortArrow("manpower")}</th>
            <th onclick="sortHealthTable('service')" style="cursor:pointer;">鏈嶅姟 ${sortArrow("service")}</th>
            <th onclick="sortHealthTable('sales')" style="cursor:pointer;">閿€鍞?${sortArrow("sales")}</th>
            <th onclick="sortHealthTable('returns')" style="cursor:pointer;">閫€璐?${sortArrow("returns")}</th>
            <th onclick="sortHealthTable('risk')" style="cursor:pointer;">椋庨櫓 ${sortArrow("risk")}</th>
            <th onclick="sortHealthTable('cost')" style="cursor:pointer;">鎴愭湰 ${sortArrow("cost")}</th>
            <th>鎿嶄綔</th>
          </tr>
        </thead>
        <tbody>
          ${top6.map((x, idx) => {
            const p = x.project;
            const h = x.health;
            const rankClass = idx < 3 ? "top3" : (idx >= top6.length - 3 ? "bottom3" : "");
            const rankIcon = idx === 0 ? "馃" : (idx === 1 ? "馃" : (idx === 2 ? "馃" : (idx + 1)));
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
              <td><button class="btn btn-sm" onclick="toggleHealthDetail('${p.id}')">鏌ョ湅</button></td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
  </div>`;
}

// 娓叉煋鍋ュ悍搴︾瓑绾у畾涔?
function renderHealthLevelDefinition() {
  return `
  <div class="card" style="margin-top:16px;padding:14px 18px;">
    <div style="font-size:13px;font-weight:500;margin-bottom:8px;">馃搵 鍋ュ悍搴︾瓑绾у畾涔?/div>
    <div class="health-level-definition">
      <div class="hld-item excellent">
        <div class="hld-dot"></div>
        <div class="hld-content">
          <div class="hld-title">馃煝 浼樿川鍋ュ悍搴楋紙90-100鍒嗭級</div>
          <div class="hld-desc">鍚勭淮搴﹁〃鐜颁紭绉€锛屾棤鏄庢樉鐭澘锛屽彲浣滀负鏍囨潌妗堜緥鎺ㄥ箍</div>
        </div>
      </div>
      <div class="hld-item normal">
        <div class="hld-dot"></div>
        <div class="hld-content">
          <div class="hld-title">馃煛 骞崇ǔ甯歌搴楋紙75-89鍒嗭級</div>
          <div class="hld-desc">鏁翠綋杩愯惀骞崇ǔ锛屼釜鍒淮搴﹂渶鍏虫敞锛屽缓璁埗瀹氭彁鍗囪鍒?/div>
        </div>
      </div>
      <div class="hld-item warning">
        <div class="hld-dot"></div>
        <div class="hld-content">
          <div class="hld-title">馃煚 椋庨櫓棰勮搴楋紙60-74鍒嗭級</div>
          <div class="hld-desc">瀛樺湪鏄庢樉闂锛岄渶鍒跺畾鏀瑰杽璁″垝锛孭M闇€姣忓懆璺熻繘</div>
        </div>
      </div>
      <div class="hld-item danger">
        <div class="hld-dot"></div>
        <div class="hld-content">
          <div class="hld-title">馃敶 楂樺嵄闂搴楋紙0-59鍒嗭級</div>
          <div class="hld-desc">澶氶」鎸囨爣涓嶈揪鏍囷紝闇€绔嬪嵆浠嬪叆鏁存敼锛屽缓璁垚绔嬩笓椤瑰皬缁?/div>
        </div>
      </div>
    </div>
  </div>`;
}

// 鍒囨崲鍗＄墖灞曞紑
function toggleHealthCard(className) {
  const container = document.getElementById("health-card-detail");
  if (!container) return;
  const isVisible = container.style.display !== "none";
  const projects = getFilteredProjects();
  const projectHealth = projects.map(p => {
    const h = HEALTH_DATA.find(hh => hh.projectId === p.id && hh.period === "2026-05");
    const score = h ? h.overallScore : 0;
    const healthInfo = score > 0 ? getHealthLevel(score) : { level: "鏈瘎浼?, class: "unrated", icon: "鈿? };
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
      <div style="font-size:13px;font-weight:500;margin-bottom:10px;">${filtered[0]?.icon || ""} ${filtered[0]?.level || ""} - 鍏?{filtered.length}瀹?/div>
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
              <div class="hdc-score" style="color:${levelColor}">${x.score > 0 ? x.score + "鍒? : "鏈瘎浼?}</div>
            </div>
            <div class="hdc-body">
              <div class="hdc-info">${p.workplace} 路 ${p.serviceMode}</div>
              ${h ? renderHealthWarningSummary(h) : ""}
            </div>
            <div class="hdc-footer">
              <button class="btn btn-sm btn-primary" onclick="toggleHealthDetail('${p.id}')">鏌ョ湅璇︽儏</button>
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>`;
  container.scrollIntoView({ behavior: "smooth", block: "start" });
}

// 鎺掑簭琛ㄦ牸
function sortHealthTable(key) {
  const dir = (window._healthSort && window._healthSort.key === key && window._healthSort.dir === "desc") ? "asc" : "desc";
  window._healthSort = { key, dir };
  renderModule("鏈嶅姟涓庤繘搴﹁拷韪?);
}

// 涓绘覆鏌撳嚱鏁?
function renderOperation() {
  const projects = getFilteredProjects();
  const projectHealth = projects.map(p => {
    const h = HEALTH_DATA.find(hh => hh.projectId === p.id && hh.period === "2026-05");
    const score = h ? h.overallScore : 0;
    const healthInfo = score > 0 ? getHealthLevel(score) : { level: "鏈瘎浼?, class: "unrated", icon: "鈿? };
    return { project: p, health: h, score, ...healthInfo };
  });
  return `
  ${renderFilterBar()}
  <div class="module-header">
    <div>
      <div class="module-title">馃搱 鏈嶅姟涓庤繘搴﹁拷韪?路 鍋ュ悍搴﹁瘎浼?/div>
      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">鍩轰簬6澶х淮搴︾患鍚堣瘎浼伴」鐩仴搴风姸鍐碉紝鏀寔閫愬眰涓嬮捇鏌ョ湅璇︾粏鎸囨爣</div>
    </div>
  </div>
  ${renderHealthOverviewCards(projects)}
  ${renderHealthScoreTable(projectHealth)}
  ${renderHealthLevelDefinition()}
  <div id="health-detail-panels"></div>`;
}


// ===== 闂涓庤棰樺崗浣?=====

function renderIssue(){

  const can = canEdit();

  // 璁＄畻鍚勭姸鎬佹暟閲?
  const countPending = ISSUES.filter(i=>i.status==='寰呭鐞?).length;
  const countProcessing = ISSUES.filter(i=>i.status==='澶勭悊涓?).length;
  const countVerify = ISSUES.filter(i=>i.status==='寰呴獙鏀?).length;
  const countClosed = ISSUES.filter(i=>i.status==='宸插叧闂?).length;
  const countAll = ISSUES.length;

  return `
  ${renderFilterBar()}

  <div class="issue-page-header">
    <div class="issue-page-title-row">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#185FA5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      <h1 class="issue-page-title">闂涓庤棰樺崗浣?/h1>
    </div>
    <p class="issue-page-desc">闂鐧昏銆佽窡韪笌闂幆绠＄悊锛屾敮鎸佽法鑱屽満鍗忓悓</p>
  </div>

  <div class="issue-stat-cards">
    <div class="issue-stat-card issue-stat-pending">
      <p class="issue-stat-label">寰呭鐞?/p>
      <p class="issue-stat-count">${countPending}</p>
    </div>
    <div class="issue-stat-card issue-stat-processing">
      <p class="issue-stat-label">澶勭悊涓?/p>
      <p class="issue-stat-count">${countProcessing}</p>
    </div>
    <div class="issue-stat-card issue-stat-verify">
      <p class="issue-stat-label">寰呴獙鏀?/p>
      <p class="issue-stat-count">${countVerify}</p>
    </div>
    <div class="issue-stat-card issue-stat-closed">
      <p class="issue-stat-label">宸插叧闂?/p>
      <p class="issue-stat-count">${countClosed}</p>
    </div>
  </div>

  <div class="issue-toolbar">
    <div class="issue-filter-btns">
      <span class="issue-filter-btn issue-filter-active">鍏ㄩ儴(${countAll})</span>
      <span class="issue-filter-btn">寰呭鐞?${countPending})</span>
      <span class="issue-filter-btn">澶勭悊涓?${countProcessing})</span>
      <span class="issue-filter-btn">寰呴獙鏀?${countVerify})</span>
      <span class="issue-filter-btn">宸插叧闂?${countClosed})</span>
    </div>
    ${can?'<div class="issue-add-btn" onclick="showAddIssue()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>涓婃姤闂</div>':''}
  </div>

  <div class="issue-table-wrapper">
    <table class="issue-table">
      <thead>
        <tr>
          <th style="width:9%;">鐘舵€?/th>
          <th style="width:9%;">璇鹃缂栧彿</th>
          <th style="width:12%;">椤圭洰</th>
          <th style="width:7%;">绫诲瀷</th>
          <th style="width:26%;">闂鎻忚堪</th>
          <th style="width:7%;text-align:center;">浼樺厛绾?/th>
          <th style="width:7%;">璐ｄ换浜?/th>
          <th style="width:8%;">璐ｄ换褰掑睘</th>
          <th style="width:15%;text-align:center;">鎿嶄綔</th>
        </tr>
      </thead>
      <tbody>
        ${ISSUES.map(i=>{
          const rowClass = (i.status==='寰呭鐞?||i.priority==='绱ф€?)?'issue-row-danger':i.status==='寰呴獙鏀??'issue-row-danger':i.status==='澶勭悊涓??'issue-row-warning':'';
          let statusClass = '';
          if(i.status==='宸插叧闂?) statusClass = 'issue-badge-success';
          else if(i.status==='寰呭鐞?) statusClass = 'issue-badge-danger';
          else if(i.status==='寰呴獙鏀?) statusClass = 'issue-badge-warning';
          else statusClass = 'issue-badge-info';

          let priorityClass = '';
          if(i.priority==='绱ф€?) priorityClass = 'issue-priority-danger';
          else if(i.priority==='閲嶈') priorityClass = 'issue-priority-warning';
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
              <span class="issue-action-btn issue-action-view" onclick="showIssueDetail(${i.id})">鏌ョ湅</span>
              ${can && i.status!=='宸插叧闂??'<span class="issue-action-btn issue-action-update" onclick="alert(\'澶勭悊鍔熻兘寮€鍙戜腑\')">鏇存柊</span>':''}
            </td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>

  <div class="issue-legend">
    <div class="issue-legend-item"><span class="issue-legend-color issue-legend-red"></span> 绱ф€?閲嶈闂琛岄珮浜?/div>
    <div class="issue-legend-item"><span class="issue-legend-color issue-legend-blue"></span> 澶勭悊涓?/div>
    <div class="issue-legend-item"><span class="issue-legend-color issue-legend-green"></span> 宸插叧闂?/div>
  </div>`;


}

// ===== 鏍稿績鐭ヨ瘑鑳介噺姹?=====

function renderKnowledge(){

  const can = canEdit();

  // 璁＄畻缁熻鏁版嵁
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

  // 鍒嗙被缁熻
  const typeCounts = {};
  KNOWLEDGE.forEach(k => {
    typeCounts[k.type] = (typeCounts[k.type] || 0) + 1;
  });

  const typeOrder = ['SOP娴佺▼浼樺寲','椋庢帶搴旀€ラ妗?,'鎴愭湰鐩爣鎺у埗','浼樼璇濇湳钀冨彇','AI鎻愭晥璧嬭兘','鍩硅鏉愭枡'];

  const top5 = [...KNOWLEDGE].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);

  const permIcon = {'鍏紑':'馃寪','鍐呴儴':'馃數','鍙楅檺':'馃敶'};
  const permLabel = {'鍏紑':'鍏紑','鍐呴儴':'鍐呴儴','鍙楅檺':'鍙楅檺'};

  return `
  ${renderFilterBar()}

  <div class="kyp-header">
    <div class="kyp-header-left">
      <div class="kyp-title-row">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#185FA5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        <h1 class="kyp-title">鏍稿績鐭ヨ瘑鑳介噺姹?/h1>
      </div>
      <p class="kyp-desc">鐢靛晢瀹㈡湇鍥㈤槦涓撳睘鐭ヨ瘑搴?路 娌夋穩缁忛獙 路 璧嬭兘鍥㈤槦</p>
    </div>
    ${can ? '<div class="kyp-add-btn" onclick="alert(\'娣诲姞鐭ヨ瘑鍔熻兘寮€鍙戜腑\')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>娣诲姞鐭ヨ瘑</div>' : ''}
  </div>

  <div class="kyp-stats">
    <div class="kyp-stat-card">
      <div class="kyp-stat-icon kis-blue"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
      <div class="kyp-stat-body">
        <span class="kyp-stat-val">${totalKnowledge}</span>
        <span class="kyp-stat-lbl">鐭ヨ瘑鎬婚噺</span>
      </div>
    </div>
    <div class="kyp-stat-card">
      <div class="kyp-stat-icon kis-green"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
      <div class="kyp-stat-body">
        <span class="kyp-stat-val">${weekNew}<span class="kyp-badge-new">NEW</span></span>
        <span class="kyp-stat-lbl">鏈懆鏂板</span>
      </div>
    </div>
    <div class="kyp-stat-card">
      <div class="kyp-stat-icon kis-orange"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
      <div class="kyp-stat-body">
        <span class="kyp-stat-val">${totalViews.toLocaleString()}</span>
        <span class="kyp-stat-lbl">鎬绘祻瑙堥噺</span>
      </div>
    </div>
    <div class="kyp-stat-card">
      <div class="kyp-stat-icon kis-red"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></div>
      <div class="kyp-stat-body">
        <span class="kyp-stat-val">${totalDownloads.toLocaleString()}</span>
        <span class="kyp-stat-lbl">鎬讳笅杞介噺</span>
      </div>
    </div>
  </div>

  <div class="kyp-filters">
    <div class="kyp-filter-tags" id="kyp-filter-tags">
      <span class="kyp-tag kyp-tag-active" data-type="all" onclick="kypFilter('all')">鍏ㄩ儴 ${totalKnowledge}</span>
      ${typeOrder.filter(t => typeCounts[t]).map(t => `<span class="kyp-tag" data-type="${t}" onclick="kypFilter('${t}')">${t} ${typeCounts[t]}</span>`).join('')}
    </div>
    <div class="kyp-search-box">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      <input type="text" class="kyp-search-input" placeholder="鎼滅储鐭ヨ瘑鏍囬銆佹爣绛俱€佸唴瀹?.." oninput="kypSearch(this.value)">
    </div>
  </div>

  <div class="kyp-layout">
    <div class="kyp-main">
      <div class="kyp-grid" id="kyp-grid">
        ${KNOWLEDGE.map(k => {
          const perm = k.permission || '鍏紑';
          return `
          <div class="kyp-card" data-type="${k.type}" data-search="${k.title}${k.description}${k.tags}" onclick="showKnowledgeDetail(${k.id})">
            <div class="kyp-card-top">
              <span class="kyp-card-title">${k.title}</span>
              <div class="kyp-card-actions">
                ${can ? '<span class="kyp-act" onclick="event.stopPropagation();alert(\'缂栬緫鍔熻兘寮€鍙戜腑\')">鉁?/span>' : ''}
                ${can ? '<span class="kyp-act kyp-act-del" onclick="event.stopPropagation();alert(\'鍒犻櫎鍔熻兘寮€鍙戜腑\')">鉁?/span>' : ''}
              </div>
            </div>
            <div class="kyp-card-meta">
              <span class="kyp-type-badge ktp-${k.type}">${k.type}</span>
              <span class="kyp-scope-badge">${k.scope || '閫氱敤'}</span>
              <span class="kyp-perm-badge">${permIcon[perm] || '馃寪'} ${permLabel[perm] || ''}</span>
            </div>
            <div class="kyp-card-desc">${k.description || '鏆傛棤鎻忚堪'}</div>
            <div class="kyp-card-tags">
              ${(k.tags || '').split(',').filter(t=>t.trim()).map(t => '<span class="kyp-tag-sm">' + t.trim() + '</span>').join('')}
            </div>
            <div class="kyp-card-footer">
              <span class="kyp-card-time">馃搮 鏇存柊浜?${k.updateTime || k.createdAt || '-'}</span>
              <span class="kyp-card-stats">
                <span class="kyp-stat-item">馃憗 ${k.views || 0}</span>
                <span class="kyp-stat-item">猬?${k.downloads || 0}</span>
              </span>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div id="kyp-empty" style="display:none;text-align:center;padding:60px 0;color:var(--c-text-3,#999);font-size:14px;">娌℃湁鎵惧埌鍖归厤鐨勭煡璇嗗唴瀹?/div>
    </div>

    <div class="kyp-sidebar">
      <div class="kyp-sb-section">
        <div class="kyp-sb-title">馃敟 鐑棬鎺掕姒?TOP5</div>
        ${top5.map((k, i) => `
          <div class="kyp-rank-item" onclick="showKnowledgeDetail(${k.id})">
            <span class="kyp-rank-num ${i < 3 ? 'kyp-rank-top' : ''}">${i + 1}</span>
            <div class="kyp-rank-body">
              <span class="kyp-rank-title">${k.title}</span>
              <span class="kyp-rank-stats">馃憗 ${k.views || 0}  路  猬?${k.downloads || 0}</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="kyp-sb-section">
        <div class="kyp-sb-title">馃晲 鏈€杩戞煡闃?/div>
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
    <span><span class="kyp-legend-dot" style="background:#378ADD;"></span> SOP娴佺▼浼樺寲</span>
    <span><span class="kyp-legend-dot" style="background:#E24B4A;"></span> 椋庢帶搴旀€ラ妗?/span>
    <span><span class="kyp-legend-dot" style="background:#3B6D11;"></span> 鎴愭湰鐩爣鎺у埗</span>
    <span><span class="kyp-legend-dot" style="background:#E08B1A;"></span> 浼樼璇濇湳钀冨彇</span>
    <span><span class="kyp-legend-dot" style="background:#7C3AED;"></span> AI鎻愭晥璧嬭兘</span>
    <span><span class="kyp-legend-dot" style="background:#888;"></span> 鍩硅鏉愭枡</span>
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

}// ===== 椤圭洰鎵挎帴瑙勮寖 =====

function renderHandover(){

  return `

  <div class="module-header">

    <div>

      <div class="module-title">馃攧 椤圭洰鎵挎帴瑙勮寖</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">瑙ｅ喅浜哄憳鍙樺姩瀵艰嚧鐨勯」鐩俊鎭柇灞傞棶棰橈紝鎵€鏈変氦鎺ョ暀鐥曞彲鏌?/div>

    </div>

    <div class="module-actions">

      ${canEdit()?'<button class="btn btn-primary btn-sm" onclick="showNewHandover()">锛?鍙戣捣浜ゆ帴</button>':''}

    </div>

  </div>



  <div class="card" style="background:var(--c-yellow-bg);border-color:var(--c-yellow);margin-bottom:16px;">

    <div style="font-size:13px;color:var(--c-yellow);font-weight:500;">馃挕 椤圭洰鎵挎帴瑙勮寖璇存槑</div>

    <div style="font-size:12px;color:var(--c-yellow);margin-top:4px;">

      鍙戣捣浜ゆ帴鍚庯紝绯荤粺鑷姩鐢熸垚浜ゆ帴娓呭崟锛堝熀纭€妗ｆ+鐩爣璐ｄ换+杩愯惀鐜扮姸+杩涜涓棰?鏈叧闂棶棰橈級銆傛帴鏀朵汉纭鍚庯紝绯荤粺鑷姩鏇存柊璐熻矗浜哄瓧娈靛苟褰掓。鐣欑棔銆?

    </div>

  </div>



  <div class="card">

    <div class="card-title">浜ゆ帴璁板綍</div>
      <div class="detail-tab" onclick="switchDetailTab(this,'responsibility')">馃搵 璐ｄ换杈圭晫</div>

    <table class="data-table">

      <thead><tr><th>浜ゆ帴缂栧彿</th><th>椤圭洰</th><th>鍘熻礋璐ｄ汉</th><th>鎺ユ敹浜?/th><th>浜ゆ帴鏃ユ湡</th><th>鐘舵€?/th><th>浜ゆ帴鎽樿</th><th>鎿嶄綔</th></tr></thead>

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

              <button class="btn btn-sm" onclick="alert('浜ゆ帴璇︽儏鍔熻兘寮€鍙戜腑')">鏌ョ湅璇︽儏</button>

            </td>

          </tr>`).join('')}

      </tbody>

    </table>

  </div>



  <div class="card" style="margin-top:16px;">

    <div class="card-title">椤圭洰浜ゆ帴鐘舵€佹€昏</div>

    <table class="data-table">

      <thead><tr><th>椤圭洰</th><th>鐜颁换璐熻矗浜?/th><th>浜ゆ帴鐘舵€?/th><th>鍘嗗彶浜ゆ帴娆℃暟</th><th>涓婃浜ゆ帴鏃ユ湡</th></tr></thead>

      <tbody>

        ${PROJECTS.filter(p=>filterState.workplace==='all'||p.workplace===filterState.workplace).map(p=>{

          const lastH = HANDOVERS.filter(h=>h.projectId===p.id).sort((a,b)=>b.date.localeCompare(a.date))[0];

          return `<tr>

            <td>${p.name}</td>

            <td>${p.pm}</td>

            <td><span class="badge badge-green">姝ｅ父</span></td>

            <td>${(p.pmHistory||[]).length + HANDOVERS.filter(h=>h.projectId===p.id).length}</td>

            <td>${lastH?lastH.date:'鏃?}</td>

          </tr>`;

        }).join('')}

      </tbody>

    </table>

  </div>`;

}





// ===== 椤圭洰鍏ㄦ櫙寮圭獥 =====

function showProjectDetail(projectId){

  const p = PROJECTS.find(pp=>pp.id===projectId);

  if(!p) return;

  const op = OPERATIONS.find(o=>o.projectId===p.id);

  const relatedIssues = ISSUES.filter(i=>i.projectId===p.id);

  const modal = document.getElementById("modal-overlay");

  document.getElementById("modal-title").textContent = "椤圭洰鍏ㄦ櫙 鈥?" + p.name;

  document.getElementById("modal-body").innerHTML = `

    <div class="project-detail-header">

      <div>

        <div class="project-detail-title">${p.name}</div>

        <div class="project-detail-meta">

          <span class="wp-tag wp-${p.workplace}">${p.workplace}</span>

          <span class="badge ${p.serviceMode==='TP椤圭洰'?'badge-blue':p.serviceMode==='DP椤圭洰'?'badge-green':'badge-orange'}">${p.serviceMode}</span>

          <span>${p.category} 路 ${p.brand}</span>

          <span>鐘舵€侊細${p.status}</span>

          <span>鍋ュ悍锛?{p.health}</span>

        </div>

      </div>

      <div style="text-align:right;">

        <button class="btn btn-sm" onclick="editProject('${p.id}')" style="font-size:12px;margin-bottom:8px;">鉁忥笍 缂栬緫</button>
        <div style="font-size:12px;color:var(--c-text-3);">鐜颁换璐熻矗浜?/div>

        <div style="font-size:16px;font-weight:600;color:var(--c-primary);">${p.pm}</div>

        <div style="font-size:12px;color:var(--c-text-3);">椤圭洰鎬荤洃锛?{p.director}</div>

      </div>

    </div>



    <div class="detail-tabs">

      <div class="detail-tab active" onclick="switchDetailTab(this,'info')">馃搵 鍩虹妗ｆ</div>
      
      <div class="detail-tab" onclick="switchDetailTab(this,'target')">馃幆 鐩爣绾﹀畾</div>
      
      <div class="detail-tab" onclick="switchDetailTab(this,'operation')">馃搳 杩愯惀瀹炲喌</div>
      
      <div class="detail-tab" onclick="switchDetailTab(this,'issue')">鈿狅笍 璇鹃鎺ㄨ繘</div>
      
      <div class="detail-tab" onclick="switchDetailTab(this,'history')">馃摑 浜ゆ帴璁板綍</div>

      <div class="detail-tab" onclick="switchDetailTab(this,'responsibility')">馃搵 璐ｄ换杈圭晫</div>
    </div>



    <div id="detail-tab-info" class="detail-section">

      <h4>鍩虹淇℃伅</h4>

      <div class="detail-grid">

        <div class="detail-item"><div class="detail-label">椤圭洰缂栧彿</div><div class="detail-value">${p.id}</div></div>

        <div class="detail-item"><div class="detail-label">鍝佺墝</div><div class="detail-value">${p.brand}</div></div>

        <div class="detail-item"><div class="detail-label">鍝佺被</div><div class="detail-value">${p.category}</div></div>

        <div class="detail-item"><div class="detail-label">椤圭洰绫诲瀷</div><div class="detail-value">${p.serviceMode}</div></div>

        <div class="detail-item"><div class="detail-label">鎵€灞炶亴鍦?/div><div class="detail-value">${p.workplace}</div></div>

        <div class="detail-item"><div class="detail-label">瀹㈡湇base</div><div class="detail-value">${p.base}</div></div>

        <div class="detail-item"><div class="detail-label">鏈嶅姟鍛ㄦ湡</div><div class="detail-value">${p.startDate} ~ ${p.endDate}</div></div>

        <div class="detail-item"><div class="detail-label">鏈嶅姟娓犻亾</div><div class="detail-value">${p.platforms}</div></div>

        <div class="detail-item"><div class="detail-label">鏈嶅姟鏃堕棿</div><div class="detail-value">${p.serviceHours}</div></div>

        <div class="detail-item"><div class="detail-label">椤圭洰鐘舵€?/div><div class="detail-value">${p.status}</div></div>

      </div>

      ${(p.pmHistory||[]).length>0?`

        <h4 style="margin-top:16px;">鍘嗕换璐熻矗浜鸿褰?/h4>

        <table class="data-table">

          <thead><tr><th>濮撳悕</th><th>璧峰鏃堕棿</th><th>缁撴潫鏃堕棿</th><th>鍘熷洜</th></tr></thead>

          <tbody>

            ${p.pmHistory.map(h=>`

              <tr><td>${h.name}</td><td>${h.from}</td><td>${h.to}</td><td>${h.reason}</td></tr>

            `).join('')}

          </tbody>

        </table>

      `:''}

    </div>



    <div id="detail-tab-target" class="detail-section" style="display:none;">

      <h4>鐩爣涓庢潈璐?/h4>

      <div class="detail-grid">

        <div class="detail-item"><div class="detail-label">浜哄姏閰嶇疆鐩爣</div><div class="detail-value">${p.fteTarget} 浜?/div></div>

        <div class="detail-item"><div class="detail-label">SLA鍝嶅簲鏃堕暱</div><div class="detail-value">鈮?${p.slaResponse} 绉?/div></div>

        <div class="detail-item"><div class="detail-label">SLA瑙ｅ喅鏃堕暱</div><div class="detail-value">鈮?${p.slaResolve} 绉?/div></div>

        <div class="detail-item"><div class="detail-label">CSat鐩爣</div><div class="detail-value">鈮?4.5</div></div>

        <div class="detail-item"><div class="detail-label">鏈堝害鎴愭湰棰勭畻</div><div class="detail-value">楼${((p.costBudget||0)/10000).toFixed(1)}涓?/div></div>

        <div class="detail-item"><div class="detail-label">鏈堝害钀ユ敹鐩爣</div><div class="detail-value">楼${((p.revenue||0)/10000).toFixed(1)}涓?/div></div>

      </div>

      <div style="margin-top:12px;padding:12px;background:var(--c-bg);border-radius:var(--radius);font-size:13px;">

        <div style="font-weight:500;margin-bottom:6px;">璐ｄ换杈圭晫璇存槑</div>

        <div style="color:var(--c-text-2);line-height:1.8;">

          <div><b>闇€姹傛柟锛堝搧鐗屾柟锛夎竟鐣岋細</b>璐熻矗鎻愪緵鍑嗙‘鐨勪骇鍝佷俊鎭€佹椿鍔ㄩ鍛娿€佺郴缁熸帴鍙ｇǔ瀹氭€т繚闅?/div>

          <div><b>鎵挎帴鏂癸紙瀹㈡湇鍥㈤槦锛夎竟鐣岋細</b>璐熻矗瀹㈡湇鏈嶅姟璐ㄩ噺銆佸搷搴旀椂鏁堛€佹弧鎰忓害缁存姢銆侀棶棰橀棴鐜鐞?/div>

        </div>

      </div>

    </div>



    <div id="detail-tab-operation" class="detail-section" style="display:none;">

      <h4>鏈€鏂拌繍钀ユ暟鎹紙${op?op.period:'鏃?}锛?/h4>

      ${op?`

      <div class="detail-grid">

        <div class="detail-item"><div class="detail-label">鍦ㄥ矖浜烘暟</div><div class="detail-value">${op.fteActual} / ${p.fteTarget} 鐩爣</div></div>

        <div class="detail-item"><div class="detail-label">鍑哄嫟鐜?/div><div class="detail-value" style="color:${op.attendance>=95?'var(--c-green)':'var(--c-yellow)'}">${op.attendance}%</div></div>

        <div class="detail-item"><div class="detail-label">鏈嶅姟鍗曢噺</div><div class="detail-value">${op.ticketVol.toLocaleString()}</div></div>

        <div class="detail-item"><div class="detail-label">鍝嶅簲鏃堕暱</div><div class="detail-value" style="color:${op.responseTime<=p.slaResponse?'var(--c-green)':'var(--c-red)'}">${op.responseTime}绉掞紙鐩爣鈮?{p.slaResponse}锛?/div></div>

        <div class="detail-item"><div class="detail-label">瑙ｅ喅鏃堕暱</div><div class="detail-value" style="color:${op.resolveTime<=p.slaResolve?'var(--c-green)':'var(--c-red)'}">${op.resolveTime}绉掞紙鐩爣鈮?{p.slaResolve}锛?/div></div>

        <div class="detail-item"><div class="detail-label">CSat婊℃剰搴?/div><div class="detail-value" style="color:${op.csat>=4.5?'var(--c-green)':'var(--c-red)'}">${op.csat}锛堢洰鏍団墺4.5锛?/div></div>

        <div class="detail-item"><div class="detail-label">瑙ｅ喅鐜?/div><div class="detail-value">${op.resolutionRate}%</div></div>

        <div class="detail-item"><div class="detail-label">鍥炶瘎鐜?/div><div class="detail-value">${op.reviewRate}%</div></div>

      </div>

      <div style="margin-top:8px;">

        <span style="font-size:13px;font-weight:500;">鍋ュ悍鐘舵€侊細</span>

        ${op.health}

        <span style="font-size:12px;color:var(--c-text-3);margin-left:8px;">绯荤粺鑷姩璁＄畻</span>

      </div>

      `:'<div style="color:var(--c-text-3);padding:16px 0;">鏆傛棤杩愯惀鏁版嵁</div>'}

    </div>



    <div id="detail-tab-issue" class="detail-section" style="display:none;">

      <h4>璇鹃涓庨棶棰樺垪琛?/h4>

      ${relatedIssues.length>0?`

        <table class="data-table">

          <thead><tr><th>缂栧彿</th><th>绫诲瀷</th><th>鎻忚堪</th><th>浼樺厛绾?/th><th>鐘舵€?/th><th>璐ｄ换浜?/th></tr></thead>

          <tbody>

            ${relatedIssues.map(i=>`

              <tr>

                <td>I${String(i.id).padStart(3,'0')}</td>

                <td>${i.type}</td>

                <td>${i.desc}</td>

                <td><span class="badge ${i.priority==='绱ф€??'badge-red':i.priority==='閲嶈'?'badge-yellow':'badge-gray'}">${i.priority}</span></td>

                <td><span class="badge ${i.status==='宸插叧闂??'badge-green':'badge-yellow'}">${i.status}</span></td>

                <td>${i.assignee}</td>

              </tr>`).join('')}

          </tbody>

        </table>

      `:'<div style="color:var(--c-text-3);padding:16px 0;">鏆傛棤杩涜涓棰?/div>'}

    </div>



    <div id="detail-tab-history" class="detail-section" style="display:none;">

      <h4>浜ゆ帴鍘嗗彶璁板綍</h4>

      ${HANDOVERS.filter(h=>h.projectId===p.id).length>0?`

        <table class="data-table">

          <thead><tr><th>浜ゆ帴鏃ユ湡</th><th>鍘熻礋璐ｄ汉</th><th>鎺ユ敹浜?/th><th>鎽樿</th></tr></thead>

          <tbody>

            ${HANDOVERS.filter(h=>h.projectId===p.id).map(h=>`

              <tr><td>${h.date}</td><td>${h.from}</td><td>${h.to}</td><td>${h.summary}</td></tr>

            `).join('')}

          </tbody>

        </table>

      `:'<div style="color:var(--c-text-3);padding:16px 0;">鏆傛棤浜ゆ帴璁板綍</div>'}

      ${(p.pmHistory||[]).length>0?`

        <h4 style="margin-top:16px;">鍘嗕换璐熻矗浜猴紙妗ｆ璁板綍锛?/h4>

        <table class="data-table">

          <thead><tr><th>濮撳悕</th><th>鏃堕棿娈?/th><th>鍘熷洜</th></tr></thead>

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



// ===== 寮圭獥鎺у埗 =====

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



// ===== 浜嬩欢缁戝畾 =====

function bindEvents(){

  // 鍏ㄥ眬鎼滅储

  const searchInput = document.getElementById("global-search");

  if(searchInput){

    searchInput.addEventListener("input", ()=>{

      const kw = searchInput.value.trim().toLowerCase();

      if(!kw) { renderModule(currentModule); return; }

      const filtered = PROJECTS.filter(p=>p.name.toLowerCase().includes(kw)||p.brand.toLowerCase().includes(kw)||p.id.toLowerCase().includes(kw));

      // 绠€鍗曢珮浜細鍦ㄨ〃鏍间腑杩囨护

      document.querySelectorAll(".data-table tbody tr").forEach(tr=>{

        tr.style.display = tr.innerText.toLowerCase().includes(kw)?'':'none';

      });

    });

  }

}



function showAddProject(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "锛?鏂板椤圭洰";

  body.innerHTML = `

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">椤圭洰缂栧彿</label>

        <input class="form-input" value="P00${PROJECTS.length+1}" disabled>

      </div>

      <div class="form-group">

        <label class="form-label">椤圭洰鍚嶇О *</label>

        <input class="form-input" id="f-name" placeholder="璇疯緭鍏ラ」鐩悕绉?>

      </div>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">鍝佺墝</label>

        <input class="form-input" id="f-brand" placeholder="鍝佺墝鍚嶇О">

      </div>

      <div class="form-group">

        <label class="form-label">鍝佺被</label>

        <select class="form-select" id="f-category">

          <option>缇庡</option><option>瀹剁數</option><option>鏈嶈</option>

          <option>姣嶅┐</option><option>椋熷搧</option><option>杩愬姩</option>

        </select>

      </div>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">椤圭洰绫诲瀷</label>

        <select class="form-select" id="f-mode">

          <option>TP椤圭洰</option><option>DP椤圭洰</option><option>BPO椤圭洰</option>

        </select>

      </div>

      <div class="form-group">

        <label class="form-label">鎵€灞炶亴鍦?/label>

        <select class="form-select" id="f-workplace">

          <option>娴庡崡</option><option>娣勫崥</option><option>鏉窞</option>

        </select>

      </div>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">椤圭洰缁忕悊</label>

        <input class="form-input" id="f-pm" placeholder="濮撳悕">

      </div>

      <div class="form-group">

        <label class="form-label">椤圭洰鎬荤洃</label>

        <input class="form-input" id="f-director" placeholder="濮撳悕">

      </div>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">瀹㈡湇base鑱屽満</label>

        <input class="form-input" id="f-base" placeholder="濡傦細娴庡崡鑱屽満2F">

      </div>

      <div class="form-group">

        <label class="form-label">鏈嶅姟娓犻亾</label>

        <input class="form-input" id="f-platforms" placeholder="濡傦細澶╃尗,浜笢,鎶栭煶">

      </div>

    </div>

    <div class="form-group">

      <label class="form-label">椤圭洰鑳屾櫙涓庤皟鎬?/label>

      <textarea class="form-textarea" id="f-background" placeholder="璁板綍椤圭洰鐗规畩鎬с€佹敞鎰忎簨椤广€佺敳鏂规矡閫氬亸濂界瓑锛屼究浜庢柊浜哄揩閫熶簡瑙?></textarea>

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">鍙栨秷</button>

      <button class="btn btn-primary" onclick="doAddProject()">纭鏂板</button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doAddProject(){

  const name = document.getElementById("f-name").value.trim();

  if(!name) { alert("璇峰～鍐欓」鐩悕绉?); return; }

  const p = {

    id:"P00"+(PROJECTS.length+1),

    name: name,

    brand: document.getElementById("f-brand").value||"鏈煡",

    category: document.getElementById("f-category").value,

    serviceMode: document.getElementById("f-mode").value,

    workplace: document.getElementById("f-workplace").value,

    pm: document.getElementById("f-pm").value||"鏈垎閰?,

    director: document.getElementById("f-director").value||"鏈垎閰?,

    pmHistory:[],

    status:"杩愯惀涓?,

    startDate: new Date().toISOString().slice(0,10),

    endDate:"2026-12-31",

    base: document.getElementById("f-base").value||"",

    platforms: document.getElementById("f-platforms").value||"",

    serviceHours:"09:00-22:00",

    fteTarget:20, slaResponse:120, slaResolve:360,

    costBudget:200000, revenue:220000, profitRate:9.1, health:"馃煝"

  };

  PROJECTS.push(p);
  saveProjects();

  OPERATIONS.push({id:OPERATIONS.length+1, projectId:p.id, period:new Date().toISOString().slice(0,7), fteActual:0, attendance:0, ticketVol:0, responseTime:0, resolveTime:0, csat:0, resolutionRate:0, reviewRate:0, health:"馃煛"});

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule(currentModule);

  showToast("椤圭洰銆?+name+"銆嶅凡鏂板锛?);

}



function showAddIssue(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "锛?涓婃姤闂";

  const projectOptions = PROJECTS.map(p=>`<option value="${p.id}">${p.name}</option>`).join("");

  body.innerHTML = `

    <div class="form-group">

      <label class="form-label">鍏宠仈椤圭洰 *</label>

      <select class="form-select" id="i-project">

        <option value="">-- 璇烽€夋嫨 --</option>

        ${projectOptions}

      </select>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">闂绫诲瀷</label>

        <select class="form-select" id="i-type">

          <option>浼樺寲</option><option>鏁存敼</option><option>瀹㈣瘔</option><option>浜哄憳</option><option>绯荤粺</option>

        </select>

      </div>

      <div class="form-group">

        <label class="form-label">浼樺厛绾?/label>

        <select class="form-select" id="i-priority">

          <option>涓€鑸?/option><option>閲嶈</option><option>绱ф€?/option>

        </select>

      </div>

    </div>

    <div class="form-group">

      <label class="form-label">闂鎻忚堪 *</label>

      <textarea class="form-textarea" id="i-desc" placeholder="璇疯缁嗘弿杩伴棶棰樼幇璞°€佸彂鐜版椂闂淬€佸奖鍝嶈寖鍥?></textarea>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">璐ｄ换褰掑睘</label>

        <select class="form-select" id="i-resp">

          <option>鎵挎帴鏂?/option><option>闇€姹傛柟</option><option>鍏卞悓</option>

        </select>

      </div>

      <div class="form-group">

        <label class="form-label">鎸囨淳缁?/label>

        <input class="form-input" id="i-assignee" placeholder="濮撳悕锛堝彲璺ㄨ亴鍦烘寚娲撅級">

      </div>

    </div>

    <div class="form-group">

      <label class="form-label">鍙戠幇鏉ユ簮</label>

      <select class="form-select" id="i-source">

        <option>鐩戞帶棰勮</option><option>浜哄伐涓婃姤</option><option>鍝佺墝鍙嶉</option><option>璐㈠姟棰勮</option>

      </select>

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">鍙栨秷</button>

      <button class="btn btn-primary" onclick="doAddIssue()">纭涓婃姤</button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doAddIssue(){

  const pid = document.getElementById("i-project").value;

  const desc = document.getElementById("i-desc").value.trim();

  if(!pid||!desc) { alert("璇峰～鍐欏繀濉」"); return; }

  const p = PROJECTS.find(pp=>pp.id===pid);

  ISSUES.push({

    id: ISSUES.length+1,

    projectId: pid,

    projectName: p?p.name:"",

    type: document.getElementById("i-type").value,

    desc: desc,

    priority: document.getElementById("i-priority").value,

    owner: currentRole==="pm"?"寮犱紵":currentRole==="exec"?"鍒樻磱":"",

    assignee: document.getElementById("i-assignee").value||"鏈垎閰?,

    status:"寰呭鐞?,

    source: document.getElementById("i-source").value,

    responsibility: document.getElementById("i-resp").value,

    createdAt: new Date().toISOString().slice(0,10),

    solution:""

  });

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("issue");

  alert("闂宸蹭笂鎶ワ紒");

}



function showNewHandover(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "馃攧 鍙戣捣浜ゆ帴";

  const projectOptions = PROJECTS.map(p=>`<option value="${p.id}">${p.name}锛堢幇浠伙細${p.pm}锛?/option>`).join("");

  body.innerHTML = `

    <div style="background:var(--c-yellow-bg);padding:10px 14px;border-radius:var(--radius);margin-bottom:14px;font-size:13px;color:var(--c-yellow);">

      馃挕 鍙戣捣浜ゆ帴鍚庯紝绯荤粺灏嗚嚜鍔ㄧ敓鎴愪互涓嬩氦鎺ユ竻鍗曪紝璇烽€愰」纭鍚庤浆浜わ細

      <div style="margin-top:6px;font-size:12px;color:var(--c-yellow);">鉁?椤圭洰鍩虹妗ｆ &nbsp; 鉁?鐩爣涓庢潈璐?&nbsp; 鉁?褰撳墠杩愯惀鐜扮姸 &nbsp; 鉁?杩涜涓棰?&nbsp; 鉁?鏈叧闂棶棰?/div>

    </div>

    <div class="form-group">

      <label class="form-label">浜ゆ帴椤圭洰 *</label>

      <select class="form-select" id="h-project">

        <option value="">-- 璇烽€夋嫨椤圭洰 --</option>

        ${projectOptions}

      </select>

    </div>

    <div class="form-row">

      <div class="form-group">

        <label class="form-label">鍘熻礋璐ｄ汉</label>

        <input class="form-input" id="h-from" placeholder="鑷姩濉厖" disabled>

      </div>

      <div class="form-group">

        <label class="form-label">鎺ユ敹浜?*</label>

        <input class="form-input" id="h-to" placeholder="璇疯緭鍏ユ帴鏀朵汉濮撳悕">

      </div>

    </div>

    <div class="form-group">

      <label class="form-label">浜ゆ帴璇存槑</label>

      <textarea class="form-textarea" id="h-summary" placeholder="閲嶇偣浜ゆ帴浜嬮」銆佹敞鎰忎簨椤圭瓑"></textarea>

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">鍙栨秷</button>

      <button class="btn btn-primary" onclick="doNewHandover()">纭鍙戣捣浜ゆ帴</button>

    </div>`;

  // 閫夐」鍙樺寲鏃惰嚜鍔ㄥ～鍏呭師璐熻矗浜?

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

  if(!pid||!to) { alert("璇峰～鍐欏繀濉」"); return; }

  const p = PROJECTS.find(pp=>pp.id===pid);

  const from = p?p.pm:"";

  // 鏇存柊椤圭洰璐熻矗浜?

  if(p){ p.pm = to; }

  // 杞Щ鏈叧闂棶棰?

  ISSUES.forEach(i=>{ if(i.projectId===pid&&i.status!=="宸插叧闂?) i.assignee = to; });

  // 璁板綍浜ゆ帴鍘嗗彶

  HANDOVERS.push({

    id: HANDOVERS.length+1,

    projectId: pid,

    projectName: p?p.name:"",

    from: from,

    to: to,

    date: new Date().toISOString().slice(0,10),

    status:"宸插畬鎴?,

    summary: document.getElementById("h-summary").value||"宸插畬鎴愪氦鎺?

  });

  // 杩藉姞鍘嗕换璐熻矗浜鸿褰?

  if(p){ p.pmHistory.push({name:from, from:"2026-03", to:new Date().toISOString().slice(0,7), reason:"浜哄憳浜ゆ帴"}); }

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("handover");

  alert("浜ゆ帴宸插畬鎴愶紒\n鍘熻礋璐ｄ汉锛?+from+"\n鎺ユ敹浜猴細"+to+"\n绯荤粺宸茶嚜鍔ㄦ洿鏂伴」鐩礋璐ｄ汉鍙婃湭鍏抽棴闂鎸囨淳銆?);

}



function showIssueDetail(id){

  const i = ISSUES.find(ii=>ii.id===id);

  if(!i) return;

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "璇鹃璇︽儏 I"+String(id).padStart(3,"0");

  body.innerHTML = `

    <div class="detail-grid" style="margin-bottom:16px;">

      <div class="detail-item"><div class="detail-label">鍏宠仈椤圭洰</div><div class="detail-value">${i.projectName}</div></div>

      <div class="detail-item"><div class="detail-label">闂绫诲瀷</div><div class="detail-value">${i.type}</div></div>

      <div class="detail-item"><div class="detail-label">浼樺厛绾?/div><div class="detail-value"><span class="badge ${i.priority==='绱ф€??'badge-red':i.priority==='閲嶈'?'badge-yellow':'badge-gray'}">${i.priority}</span></div></div>

      <div class="detail-item"><div class="detail-label">褰撳墠鐘舵€?/div><div class="detail-value"><span class="badge ${i.status==='宸插叧闂??'badge-green':'badge-yellow'}">${i.status}</span></div></div>

      <div class="detail-item"><div class="detail-label">璐ｄ换浜?/div><div class="detail-value">${i.assignee}</div></div>

      <div class="detail-item"><div class="detail-label">璐ｄ换褰掑睘</div><div class="detail-value">${i.responsibility}</div></div>

    </div>

    <div style="background:var(--c-bg);padding:12px;border-radius:var(--radius);margin-bottom:16px;">

      <div style="font-size:12px;color:var(--c-text-3);">闂鎻忚堪</div>

      <div style="margin-top:4px;font-size:13px;">${i.desc}</div>

    </div>

    ${i.solution?'<div style="background:var(--c-green-bg);padding:12px;border-radius:var(--radius);margin-bottom:16px;"><div style="font-size:12px;color:var(--c-green);">瑙ｅ喅鏂规</div><div style="margin-top:4px;font-size:13px;">'+i.solution+'</div></div>':''}

    ${currentRole!=='leader'&&i.status!=='宸插叧闂??`

    <div class="form-group">

      <label class="form-label">鏇存柊澶勭悊鐘舵€?/label>

      <select class="form-select" id="i-status-update" style="max-width:200px;">

        <option ${i.status==='寰呭鐞??'selected':''}>寰呭鐞?/option>

        <option ${i.status==='澶勭悊涓??'selected':''}>澶勭悊涓?/option>

        <option ${i.status==='寰呴獙鏀??'selected':''}>寰呴獙鏀?/option>

        <option ${i.status==='宸插叧闂??'selected':''}>宸插叧闂?/option>

      </select>

    </div>

    <div class="form-group">

      <label class="form-label">濉啓瑙ｅ喅鏂规</label>

      <textarea class="form-textarea" id="i-solution" placeholder="璁板綍澶勭悊鎺柦涓庣粨鏋?>${i.solution}</textarea>

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">鍏抽棴</button>

      <button class="btn btn-primary" onclick="doUpdateIssue(${id})">淇濆瓨鏇存柊</button>

    </div>`:'<div class="form-actions"><button class="btn" onclick="document.getElementById(\'modal-overlay\').classList.add(\'hidden\')">鍏抽棴</button></div>'}

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

  alert("璇鹃 I"+String(id).padStart(3,"0")+" 宸叉洿鏂帮紒");

}



// ===== 閫氱敤 XLSX/CSV 瀵煎嚭鍑芥暟 =====
function exportToXlsx(filename, headers, rows) {
  try {
    var wsData = [headers, ...rows];
    var ws = XLSX.utils.aoa_to_sheet(wsData);
    ws['!cols'] = headers.map(function(h) { return { wch: Math.max((h||'').length * 2 + 4, 16) }; });
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, filename);
    if (typeof showToast === 'function') showToast('宸插鍑猴細' + filename);
  } catch(e) {
    alert('瀵煎嚭 Excel 澶辫触锛? + e.message);
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
    if (typeof showToast === 'function') showToast('宸插鍑猴細' + filename);
  } catch(e) {
    alert('瀵煎嚭 CSV 澶辫触锛? + e.message);
  }
}

// 璁＄畻KPI瓒嬪娍锛堜粠KPI_HISTORY璇诲彇鏈€杩戜袱涓湀鐨勬暟鎹姣旓級
function calculateKpiTrend(fieldName) {
  if (!KPI_HISTORY || KPI_HISTORY.length < 2) {
    return { trend: '--', trendUp: true };
  }
  // 鎸夋棩鏈熸帓搴忥紙鏈€鏂扮殑鍦ㄥ墠闈級
  const sorted = KPI_HISTORY.slice().sort((a, b) => b.date.localeCompare(a.date));
  const current = sorted[0][fieldName];
  const previous = sorted[1][fieldName];
  if (!current || !previous || previous === 0) {
    return { trend: '--', trendUp: true };
  }
  const change = ((current - previous) / previous * 100).toFixed(1);
  return {
    trend: (change >= 0 ? '+' : '') + change + '%',
    trendUp: change >= 0
  };
}

function showExportDialog(headers, rows, baseFilename, title) {
  window.__expHeaders = headers;
  window.__expData = rows;
  window.__expFile = baseFilename;
  var overlay = document.getElementById('modal-overlay');
  var titleEl = document.getElementById('modal-title');
  var body = document.getElementById('modal-body');
  if (!overlay || !titleEl || !body) {
    // fallback锛氱洿鎺ュ鍑?CSV
    exportToCSV(baseFilename + '.csv', headers, rows);
    return;
  }
  titleEl.textContent = '瀵煎嚭锛? + (title || '鏁版嵁');
  body.innerHTML = '<div style="padding:24px;text-align:center;">' +
    '<div style="font-size:15px;margin-bottom:20px;color:#1e293b;font-weight:600;">璇烽€夋嫨瀵煎嚭鏍煎紡</div>' +
    '<div style="display:flex;gap:16px;justify-content:center;margin-bottom:16px;">' +
      '<button class="btn btn-primary" style="padding:14px 28px;font-size:14px;" onclick="doExportCSV()">馃摜 瀵煎嚭 CSV</button>' +
      '<button class="btn" style="padding:14px 28px;font-size:14px;background:#1d6f42;color:#fff;border:none;" onclick="doExportXLSX()">馃搳 瀵煎嚭 Excel</button>' +
    '</div>' +
    '<div style="font-size:12px;color:#94a3b8;">CSV 鍏煎鏇村杞欢 | Excel 鏀寔鏍煎紡缇庡寲</div>' +
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
// ===== 缁撴潫閫氱敤瀵煎嚭鍑芥暟 =====


function exportDashboard(){
  const filtered = getFilteredProjects();
  const headers = ['椤圭洰缂栧彿','椤圭洰鍚嶇О','鍋ュ悍搴?,'鐘舵€?,'鑱屽満','璐熻矗浜?,'骞冲彴','鍝佺被','鍝佺墝'];
  const rows = filtered.map(p => [
    p.id, 
    p.name, 
    p.healthScore||'', 
    p.status||'杩涜涓?, 
    p.workplace||'', 
    p.pm||'',
    (p.platforms||'').split(/[,锛屻€乚/).map(function(s){return s.trim();}).filter(Boolean).join(', '),
    p.category||'',
    p.brand||''
  ]);
  showExportDialog(headers, rows, `椤圭洰鎬昏_${new Date().toISOString().slice(0,10)}`, '椤圭洰鎬昏鐪嬫澘');
}



// ===== 椤圭洰杩愮淮璋冪爺 =====

// 下载示例数据 CSV 文件
function downloadSampleData() {
  const SAMPLE_DATA = {
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
  const lines = [];
  lines.push('示例数据说明：请将此文件中的数据导入系统，支持 CSV/XLSX/XLS 格式');
  lines.push('');
  for (const [sheetName, rows] of Object.entries(SAMPLE_DATA)) {
    lines.push('=== ' + sheetName + ' ===');
    rows.forEach(r => lines.push(r.join(',')));
    lines.push('');
    lines.push('');
  }
  const bom = '\uFEFF';
  const blob = new Blob([bom + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = '示例数据_客服看板.csv';
  a.click();
  URL.revokeObjectURL(url);
  showToast('✅ 示例数据已下载，请查看 CSV 文件');
}

// 导入 Excel/CSV 数据（支持 .xlsx / .xls / .csv）
function importData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.csv,.xlsx,.xls';
  input.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
      try {
        const data = new Uint8Array(ev.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        let imported = { staff: 0, workload: 0, kpi: 0 };
        workbook.SheetNames.forEach(name => {
          const sheet = workbook.Sheets[name];
          const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          const lowerName = name.toLowerCase();
          if (lowerName.indexOf('客服配置') >= 0 || lowerName.indexOf('staff') >= 0 || lowerName.indexOf('配置') >= 0) {
            for (let i = 1; i < json.length; i++) {
              const row = json[i];
              if (!row || !row[0]) continue;
              const idx = STAFF_CONFIG.findIndex(s => s.role === row[0]);
              const item = {
                id: idx >= 0 ? STAFF_CONFIG[idx].id : 'SC' + Date.now() + i,
                role: String(row[0]),
                count: parseInt(row[1]) || 0,
                pct: parseInt(row[2]) || 0,
                workplace: String(row[3] || 'all'),
                updatedAt: new Date().toISOString().slice(0,10),
                updatedBy: (CURRENT_USER || {}).username || 'admin'
              };
              if (idx >= 0) STAFF_CONFIG[idx] = item; else STAFF_CONFIG.push(item);
              imported.staff++;
            }
          } else if (lowerName.indexOf('工作量') >= 0 || lowerName.indexOf('workload') >= 0 || lowerName.indexOf('工作') >= 0) {
            for (let i = 1; i < json.length; i++) {
              const row = json[i];
              if (!row || !row[0]) continue;
              const idx = WORKLOAD_DATA.findIndex(w => w.name === row[0]);
              const item = {
                id: idx >= 0 ? WORKLOAD_DATA[idx].id : 'WL' + Date.now() + i,
                name: String(row[0]),
                count: parseInt(row[1]) || 0,
                ratio: parseInt(row[2]) || 0,
                workplace: String(row[3] || 'all'),
                updatedAt: new Date().toISOString().slice(0,10),
                updatedBy: (CURRENT_USER || {}).username || 'admin'
              };
              if (idx >= 0) WORKLOAD_DATA[idx] = item; else WORKLOAD_DATA.push(item);
              imported.workload++;
            }
          } else if (lowerName.indexOf('kpi') >= 0 || lowerName.indexOf('历史') >= 0 || lowerName.indexOf('趋势') >= 0 || lowerName.indexOf('销售') >= 0) {
            for (let i = 1; i < json.length; i++) {
              const row = json[i];
              if (!row || !row[0]) continue;
              const item = {
                id: 'KH' + Date.now() + i,
                date: String(row[0]),
                revenue: parseInt(row[1]) || 0,
                cost: parseInt(row[2]) || 0,
                profitRate: parseFloat(row[3]) || 0,
                targetRate: parseFloat(row[4]) || 0,
                workplace: 'all',
                updatedAt: new Date().toISOString().slice(0,10),
                updatedBy: (CURRENT_USER || {}).username || 'admin'
              };
              KPI_HISTORY.push(item);
              imported.kpi++;
            }
          }
        });
        // 保存到 localStorage
        localStorage.setItem('chansee_staff_config', JSON.stringify(STAFF_CONFIG));
        localStorage.setItem('chansee_workload_data', JSON.stringify(WORKLOAD_DATA));
        localStorage.setItem('chansee_kpi_history', JSON.stringify(KPI_HISTORY));
        // 同步云端
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




// 鍏ㄥ眬绛涢€夌姸鎬?

let SAT_FILTER = { projectId:'', scoreRange:'', evaluator:'' };



function renderSatisfaction(){

  const can = canEdit();

  const isLeader = currentRole === 'leader';

  const isStaff = currentRole === 'staff';



  // 搴旂敤绛涢€?

  let filtered = [...SATISFACTION_DATA];

  if(SAT_FILTER.projectId) filtered = filtered.filter(s => s.projectId === SAT_FILTER.projectId);

  if(SAT_FILTER.scoreRange){

    const [min,max] = SAT_FILTER.scoreRange.split('-').map(Number);

    filtered = filtered.filter(s => s.leaderScore >= min && s.leaderScore <= max);

  }

  if(SAT_FILTER.evaluator) filtered = filtered.filter(s => s.evaluatedBy === SAT_FILTER.evaluator);



  // 缁熻锛堝熀浜庡叏閮ㄦ暟鎹級

  const totalEvaluated = SATISFACTION_DATA.filter(s => s.status === '宸茶瘎瀹?).length;

  const avgScore = SATISFACTION_DATA.length ?

    (SATISFACTION_DATA.reduce((s,v) => s + v.leaderScore, 0) / SATISFACTION_DATA.length).toFixed(1) : '0.0';

  const dist10 = SATISFACTION_DATA.filter(s => s.leaderScore === 10).length;

  const dist8  = SATISFACTION_DATA.filter(s => s.leaderScore === 8).length;

  const dist6  = SATISFACTION_DATA.filter(s => s.leaderScore === 6).length;

  const dist3  = SATISFACTION_DATA.filter(s => s.leaderScore === 3).length;

  const dist0  = SATISFACTION_DATA.filter(s => s.leaderScore === 0).length;



  // 涓嬫媺閫夐」

  const projectOptions = PROJECTS.map(p =>

    `<option value="${p.id}" ${SAT_FILTER.projectId===p.id?'selected':''}>${p.name}锛?{p.workplace}锛?/option>`

  ).join('');

  const evaluatorList = [...new Set(SATISFACTION_DATA.map(s => s.evaluatedBy))];

  const evaluatorOptions = evaluatorList.map(e =>

    `<option value="${e}" ${SAT_FILTER.evaluator===e?'selected':''}>${e}</option>`

  ).join('');



  return `

  <div class="module-header">

    <div>

      <div class="module-title">馃挴 椤圭洰杩愮淮璋冪爺</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">

        瀹㈡湇绔笌椤圭洰绔殑娌熼€氭ˉ姊?路 鍙嶅悜淇冭繘鎴愰暱 路 ${isLeader ? '棰嗗瑙嗚锛氬彲璇勫畾鎵撳垎' : '鍥㈤槦瑙嗚锛氭煡鐪嬭瘎瀹氱粨鏋?}

      </div>

    </div>

    <div class="module-actions">

      ${isLeader||currentRole==='pm' ? '<button class="btn btn-primary btn-sm" onclick="showAddSatisfaction()">锛?鏂板璇勪及</button>' : ''}

      <button class="btn btn-sm" onclick="exportSatisfaction()">馃摛 瀵煎嚭</button>

      ${isLeader||currentRole==='pm' ? '<button class="btn btn-sm" onclick="importSatisfaction()">馃摜 瀵煎叆</button>' : ''}

      ${isLeader||currentRole==='pm' ? '<button class="btn btn-sm" onclick="showSatisfactionPermission()">馃攼 鏉冮檺璁剧疆</button>' : ''}

    </div>

  </div>



  <!-- 璇勫垎璇存槑 -->

  <div class="card" style="margin-bottom:16px;padding:14px 18px;">

    <div style="font-size:13px;font-weight:500;margin-bottom:8px;">馃搵 璇勫垎鏈哄埗璇存槑</div>

    <div style="font-size:12px;color:var(--c-text-2);line-height:2;">

      <div>馃煝 <b>瀵瑰锛堥」鐩柟锛?/b>锛氬彧璁板綍鎰熷彈鎻忚堪锛堥潪甯告弧鎰?婊℃剰/涓€鑸?涓嶆弧鎰忥級锛?b>涓嶅睍绀哄垎鍊?/b>锛岀敱涓婄骇棰嗗涓庨」鐩矡閫氬悗濉啓</div>

      <div>馃數 <b>瀵瑰唴锛堜笂绾ц瘎瀹氾級</b>锛氫笂绾у熀浜庢矡閫氬唴瀹?+ 鏍￠獙鐪熶吉锛岀粰鍑?<b>10 / 8 / 6 / 3 / 0</b> 浜旀。璇勫垎</div>

      <div>馃煛 <b>鏍稿績鐩殑</b>锛氬府鍔╁憳宸ユ彁鑳芥彁鏁堬紝鏀硅繘涓嶈冻锛?b>涓嶆槸鎯╃綒宸ュ叿</b>锛屾槸鍙嬪ソ鍗忎綔鐨勬ˉ姊?/div>

    </div>

  </div>



  <!-- 缁熻鍗＄墖 -->

  <div class="stats-grid" style="margin-bottom:16px;">

    <div class="stat-card">

      <div class="stat-label">宸茶瘎浼?/div>

      <div class="stat-value">${totalEvaluated}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">骞冲潎鍒?/div>

      <div class="stat-value" style="color:${avgScore>=8?'var(--c-green)':avgScore>=6?'var(--c-yellow)':'var(--c-red)'}">${avgScore}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">10鍒嗭紙浼樼锛?/div>

      <div class="stat-value" style="color:var(--c-green)">${dist10}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">8鍒嗭紙鑹ソ锛?/div>

      <div class="stat-value" style="color:var(--c-green)">${dist8}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">6鍒嗭紙涓€鑸級</div>

      <div class="stat-value" style="color:var(--c-yellow)">${dist6}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">3鍒?0鍒?/div>

      <div class="stat-value" style="color:var(--c-red)">${dist3+dist0}</div>

    </div>

  </div>



  <!-- 绛涢€夋爮 -->

  <div class="sat-filter-bar card" style="margin-bottom:16px;padding:12px 16px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;">

    <span style="font-size:12px;color:var(--c-text-3);font-weight:500;">绛涢€夋潯浠讹細</span>

    <select class="form-select form-select-sm" id="sat-filter-project" onchange="SAT_FILTER.projectId=this.value;renderSatisfaction()" style="max-width:200px;">

      <option value="">鍏ㄩ儴椤圭洰</option>

      ${projectOptions}

    </select>

    <select class="form-select form-select-sm" id="sat-filter-score" onchange="SAT_FILTER.scoreRange=this.value;renderSatisfaction()" style="max-width:160px;">

      <option value="">鍏ㄩ儴寰楀垎</option>

      <option value="10-10" ${SAT_FILTER.scoreRange==='10-10'?'selected':''}>10鍒?浼樼</option>

      <option value="8-9" ${SAT_FILTER.scoreRange==='8-9'?'selected':''}>8鍒?鑹ソ</option>

      <option value="6-7" ${SAT_FILTER.scoreRange==='6-7'?'selected':''}>6鍒?涓€鑸?/option>

      <option value="0-5" ${SAT_FILTER.scoreRange==='0-5'?'selected':''}>0-5鍒?闇€鏀硅繘</option>

    </select>

    <select class="form-select form-select-sm" id="sat-filter-evaluator" onchange="SAT_FILTER.evaluator=this.value;renderSatisfaction()" style="max-width:160px;">

      <option value="">鍏ㄩ儴璇勫畾浜?/option>

      ${evaluatorOptions}

    </select>

    <button class="btn btn-sm" onclick="SAT_FILTER={projectId:'',scoreRange:'',evaluator:''};renderSatisfaction()" style="color:var(--c-text-3);">娓呴櫎绛涢€?/button>

    <span style="margin-left:auto;font-size:12px;color:var(--c-text-3);">鍏?${filtered.length} 鏉¤褰?/span>

  </div>



  <!-- 璇勪及鍒楄〃 -->

  <div class="card">

    <table class="data-table">

      <thead>

        <tr>

          <th>椤圭洰</th>

          <th>鍛ㄦ湡</th>

          <th>椤圭洰缁煎悎鎰熷彈</th>

          <th>涓氬姟琛ㄧ幇</th>

          <th>涓撲笟搴?/th>

          <th>鎵ц鍔?/th>

          <th>娌熼€氶厤鍚?/th>

          <th>棰嗗璇勫垎</th>

          <th>涓婄骇璇勮/鎬荤粨</th>

          <th>鐘舵€?/th>

          <th>鎿嶄綔</th>

        </tr>

      </thead>

      <tbody>

        ${filtered.map(s => {

          const p = PROJECTS.find(pp => pp.id === s.projectId);

          const scoreColor = s.leaderScore >= 10 ? 'var(--c-green)' : 

                           s.leaderScore >= 8 ? 'var(--c-green)' :

                           s.leaderScore >= 6 ? 'var(--c-yellow)' : 'var(--c-red)';

          const scoreLabel = s.leaderScore === 10 ? '浼樼' :

                           s.leaderScore === 8 ? '鑹ソ' :

                           s.leaderScore === 6 ? '涓€鑸? :

                           s.leaderScore === 3 ? '闇€鏀硅繘' : '涓嶅悎鏍?;

          const commentPreview = s.leaderComment ? (s.leaderComment.length > 15 ? s.leaderComment.slice(0,15) + '鈥? : s.leaderComment) : '鈥?;

          return `

          <tr onclick="showSatisfactionDetail(${s.id})" style="cursor:pointer;">

            <td>${p ? p.name : s.projectId}</td>

            <td>${s.period}</td>

            <td><span class="badge ${s.projectFeedback.overall==='闈炲父婊℃剰'?'badge-green':s.projectFeedback.overall==='婊℃剰'?'badge-green':'badge-yellow'}">${s.projectFeedback.overall}</span></td>

            <td>${s.projectFeedback.busiLima2sPerf.length > 10 ? s.projectFeedback.busiLima2sPerf.slice(0,10) + '鈥? : s.projectFeedback.busiLima2sPerf}</td>

            <td>${s.projectFeedback.professionalism.length > 8 ? s.projectFeedback.professionalism.slice(0,8) + '鈥? : s.projectFeedback.professionalism}</td>

            <td>${s.projectFeedback.execution.length > 8 ? s.projectFeedback.execution.slice(0,8) + '鈥? : s.projectFeedback.execution}</td>

            <td>${s.projectFeedback.communication.frequency}</td>

            <td><span style="font-weight:700;color:${scoreColor};font-size:15px;">${s.leaderScore}鍒?/span> <span style="font-size:11px;color:${scoreColor};">${scoreLabel}</span></td>

            <td title="${s.leaderComment || '鏆傛棤璇勮'}"><span style="font-size:12px;color:var(--c-text-2);">${commentPreview}</span></td>

            <td><span class="badge ${s.status==='宸茶瘎瀹??'badge-green':'badge-yellow'}">${s.status}</span></td>

            <td><button class="btn btn-sm" onclick="event.stopPropagation();showSatisfactionDetail(${s.id})">鏌ョ湅</button></td>

          </tr>`;

        }).join('')}

      </tbody>

    </table>

    ${filtered.length === 0 ? '<div class="empty-state"><div class="empty-icon">馃摥</div><p>娌℃湁绗﹀悎鏉′欢鐨勮瘎浼拌褰?/p></div>' : ''}

  </div>`;

}



function showSatisfactionDetail(id){

  const s = SATISFACTION_DATA.find(ss => ss.id === id);

  if(!s) return;

  const p = PROJECTS.find(pp => pp.id === s.projectId);

  const isLeader = currentRole === 'leader';

  

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "婊℃剰搴﹁瘎浼拌鎯?路 " + (p ? p.name : s.projectId);

  

  const scoreColor = s.leaderScore >= 8 ? 'var(--c-green)' : s.leaderScore >= 6 ? 'var(--c-yellow)' : 'var(--c-red)';

  const scoreLabel = s.leaderScore === 10 ? '浼樼锛堣秴鍑洪鏈燂級' : 

                   s.leaderScore === 8 ? '鑹ソ锛堣揪鏍囷級' : 

                   s.leaderScore === 6 ? '涓€鑸紙闇€鏀硅繘锛? : 

                   s.leaderScore === 3 ? '杈冨樊锛堥噸鐐瑰叧娉級' : '涓嶅悎鏍硷紙绔嬪嵆鏀硅繘锛?;

  

  body.innerHTML = `

    <!-- 椤圭洰淇℃伅 -->

    <div class="detail-grid" style="margin-bottom:16px;">

      <div class="detail-item"><div class="detail-label">鍏宠仈椤圭洰</div><div class="detail-value">${p ? p.name : '鏈煡'}</div></div>

      <div class="detail-item"><div class="detail-label">璇勪及鍛ㄦ湡</div><div class="detail-value">${s.period}</div></div>

      <div class="detail-item"><div class="detail-label">璇勫畾浜?/div><div class="detail-value">${s.evaluatedBy}</div></div>

      <div class="detail-item"><div class="detail-label">璇勫畾鏃ユ湡</div><div class="detail-value">${s.evaluatedAt}</div></div>

    </div>



    <!-- 椤圭洰鏂规劅鍙楋紙瀵瑰锛屼笉灞曠ず鍒嗗€硷級 -->

    <div style="background:var(--c-bg);padding:14px 16px;border-radius:var(--radius);margin-bottom:16px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;color:var(--c-text-2);">馃棧锔?椤圭洰鏂规劅鍙楋紙瀵瑰锛屼笉灞曠ず鍒嗗€硷級</div>

      

      <div style="margin-bottom:10px;">

        <div style="font-size:12px;color:var(--c-text-3);">缁煎悎鎰熷彈</div>

        <div style="font-size:14px;font-weight:500;margin-top:2px;"><span class="badge ${s.projectFeedback.overall==='闈炲父婊℃剰'?'badge-green':s.projectFeedback.overall==='婊℃剰'?'badge-green':'badge-yellow'}">${s.projectFeedback.overall}</span></div>

      </div>

      

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">

        <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

          <div style="font-size:11px;color:var(--c-text-3);">鍥㈤槦涓氬姟琛ㄧ幇</div>

          <div style="font-size:12px;margin-top:2px;">${s.projectFeedback.busiLima2sPerf}</div>

        </div>

        <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

          <div style="font-size:11px;color:var(--c-text-3);">鍥㈤槦涓撲笟搴?/div>

          <div style="font-size:12px;margin-top:2px;">${s.projectFeedback.professionalism}</div>

        </div>

        <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

          <div style="font-size:11px;color:var(--c-text-3);">鍥㈤槦鎵ц鍔?/div>

          <div style="font-size:12px;margin-top:2px;">${s.projectFeedback.execution}</div>

        </div>

        <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

          <div style="font-size:11px;color:var(--c-text-3);">椋庨櫓绠℃帶</div>

          <div style="font-size:12px;margin-top:2px;">${s.projectFeedback.riskControl}</div>

        </div>

      </div>

      

      <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;margin-bottom:8px;">

        <div style="font-size:11px;color:var(--c-text-3);">姹囨姤鑳藉姏</div>

        <div style="font-size:12px;margin-top:2px;">鏃舵晥鎬э細${s.projectFeedback.reporting.timeliLima2s} 锝?鍑嗙‘鎬э細${s.projectFeedback.reporting.accuracy} 锝?鍏ㄩ潰鎬э細${s.projectFeedback.reporting.completeLima2s}</div>

      </div>

      

      <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

        <div style="font-size:11px;color:var(--c-text-3);">娌熼€氶厤鍚?/div>

        <div style="font-size:12px;margin-top:2px;">娌熼€氶鐜囷細${s.projectFeedback.communication.frequency} 锝?鐞嗚В鑳藉姏锛?{s.projectFeedback.communication.understanding} 锝?淇℃伅鍚屾锛?{s.projectFeedback.communication.sync}</div>

      </div>

    </div>



    <!-- 涓婄骇璇勫畾锛堝鍐咃級 -->

    <div style="background:var(--c-yellow-bg);padding:14px 16px;border-radius:var(--radius);margin-bottom:16px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;color:var(--c-yellow);">馃敀 涓婄骇璇勫畾锛堝鍐咃紝浠呭洟闃熷彲瑙侊級</div>

      <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px;">

        <div style="font-size:32px;font-weight:800;color:${scoreColor};">${s.leaderScore}鍒?/div>

        <div>

          <div style="font-size:14px;font-weight:500;color:${scoreColor};">${scoreLabel}</div>

          <div style="font-size:12px;color:var(--c-text-2);margin-top:2px;">璇勫垎浜猴細${s.evaluatedBy} 锝?${s.evaluatedAt}</div>

        </div>

      </div>

      <div style="background:var(--c-surface);padding:10px 12px;border-radius:8px;">

        <div style="font-size:12px;color:var(--c-text-3);">璇勫畾鎰忚锛堝府鍔╂彁鑳芥彁鏁堬級</div>

        <div style="font-size:13px;margin-top:4px;line-height:1.6;">${s.leaderComment}</div>

      </div>

    </div>



    ${isLeader && s.status !== '宸茶瘎瀹? ? `

    <div class="form-group">

      <label class="form-label">棰嗗璇勫垎锛?0/8/6/3/0锛?/label>

      <select class="form-select" id="s-score" style="max-width:200px;">

        <option value="10" ${s.leaderScore===10?'selected':''}>10鍒?- 浼樼锛堣秴鍑洪鏈燂級</option>

        <option value="8" ${s.leaderScore===8?'selected':''}>8鍒?- 鑹ソ锛堣揪鏍囷級</option>

        <option value="6" ${s.leaderScore===6?'selected':''}>6鍒?- 涓€鑸紙闇€鏀硅繘锛?/option>

        <option value="3" ${s.leaderScore===3?'selected':''}>3鍒?- 杈冨樊锛堥噸鐐瑰叧娉級</option>

        <option value="0" ${s.leaderScore===0?'selected':''}>0鍒?- 涓嶅悎鏍硷紙绔嬪嵆鏀硅繘锛?/option>

      </select>

    </div>

    <div class="form-group">

      <label class="form-label">璇勫畾鎰忚锛堝府鍔╂彁鑳芥彁鏁堬紝闈炴儵缃氾級</label>

      <textarea class="form-textarea" id="s-comment" placeholder="璁板綍鍏蜂綋鏀硅繘寤鸿銆佹彁鑳芥柟鍚?>${s.leaderComment}</textarea>

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">鍙栨秷</button>

      <button class="btn btn-primary" onclick="doUpdateSatisfaction(${s.id})">纭璇勫畾</button>

    </div>` : 

    `<div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">鍏抽棴</button>

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

  s.status = '宸茶瘎瀹?;

  s.evaluatedAt = new Date().toISOString().slice(0,10);

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("satisfaction");

  alert("璇勫畾宸蹭繚瀛橈紒璇勫垎锛? + score + "鍒哱n鎰忚宸茶褰曪紝灏嗙敤浜庡府鍔╁憳宸ユ彁鑳芥彁鏁堛€?);

}



function showAddSatisfaction(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "锛?鏂板婊℃剰搴﹁瘎浼?;

  const projectOptions = PROJECTS.map(p => `<option value="${p.id}">${p.name}锛?{p.workplace}锛?/option>`).join("");

  body.innerHTML = `

    <div class="form-group">

      <label class="form-label">鍏宠仈椤圭洰 *</label>

      <select class="form-select" id="sf-project">

        <option value="">-- 璇烽€夋嫨 --</option>

        ${projectOptions}

      </select>

    </div>

    <div class="form-group">

      <label class="form-label">璇勪及鍛ㄦ湡 *</label>

      <input class="form-input" id="sf-period" value="2026-05" placeholder="濡傦細2026-05">

    </div>

    

    <div style="background:var(--c-bg);padding:12px 14px;border-radius:var(--radius);margin-bottom:14px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;color:var(--c-text-2);">馃棧锔?椤圭洰鏂规劅鍙楋紙鐢变笂绾т笌椤圭洰娌熼€氬悗濉啓锛屼笉灞曠ず鍒嗗€硷級</div>

      

      <div class="form-group">

        <label class="form-label">缁煎悎鎰熷彈</label>

        <select class="form-select" id="sf-overall">

          <option>闈炲父婊℃剰</option>

          <option>婊℃剰</option>

          <option>涓€鑸?/option>

          <option>涓嶆弧鎰?/option>

        </select>

      </div>

      

      <div class="form-row">

        <div class="form-group">

          <label class="form-label">鍥㈤槦涓氬姟琛ㄧ幇</label>

          <input class="form-input" id="sf-biz" placeholder="鎻忚堪椤圭洰鏂规劅鍙?>

        </div>

        <div class="form-group">

          <label class="form-label">鍥㈤槦涓撲笟搴?/label>

          <input class="form-input" id="sf-pro" placeholder="鎻忚堪椤圭洰鏂规劅鍙?>

        </div>

      </div>

      

      <div class="form-row">

        <div class="form-group">

          <label class="form-label">鍥㈤槦鎵ц鍔?/label>

          <input class="form-input" id="sf-exec" placeholder="鎻忚堪椤圭洰鏂规劅鍙?>

        </div>

        <div class="form-group">

          <label class="form-label">椋庨櫓绠℃帶</label>

          <input class="form-input" id="sf-risk" placeholder="鎻忚堪椤圭洰鏂规劅鍙?>

        </div>

      </div>

      

      <div class="form-group">

        <label class="form-label">姹囨姤鏃舵晥鎬?/label>

        <input class="form-input" id="sf-rep-time" placeholder="鎻忚堪椤圭洰鏂规劅鍙?>

      </div>

      <div class="form-group">

        <label class="form-label">姹囨姤鍑嗙‘鎬?/label>

        <input class="form-input" id="sf-rep-acc" placeholder="鎻忚堪椤圭洰鏂规劅鍙?>

      </div>

      <div class="form-group">

        <label class="form-label">姹囨姤鍏ㄩ潰鎬?/label>

        <input class="form-input" id="sf-rep-full" placeholder="鎻忚堪椤圭洰鏂规劅鍙?>

      </div>

      

      <div class="form-group">

        <label class="form-label">娌熼€氶鐜囨劅鍙?/label>

        <input class="form-input" id="sf-comm-freq" placeholder="闈炲父婊℃剰/婊℃剰/涓€鑸?涓嶆弧鎰?>

      </div>

      <div class="form-group">

        <label class="form-label">娌熼€氱悊瑙ｆ劅鍙?/label>

        <input class="form-input" id="sf-comm-und" placeholder="鎻忚堪椤圭洰鏂规劅鍙?>

      </div>

      <div class="form-group">

        <label class="form-label">娲诲姩淇℃伅鍚屾鎰熷彈</label>

        <input class="form-input" id="sf-comm-sync" placeholder="鎻忚堪椤圭洰鏂规劅鍙?>

      </div>

    </div>

    

    <div style="background:var(--c-yellow-bg);padding:12px 14px;border-radius:var(--radius);margin-bottom:14px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;color:var(--c-yellow);">馃敀 涓婄骇璇勫畾锛堝悗缁～鍐欙紝鏈鍙殏瀛橀」鐩劅鍙楋級</div>

      <div style="font-size:12px;color:var(--c-text-2);">棰嗗璇勫垎鍜岃瘎瀹氭剰瑙佸彲鍦ㄤ笌椤圭洰娌熼€氬悗琛ュ厖濉啓銆?/div>

    </div>

    

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">鍙栨秷</button>

      <button class="btn btn-primary" onclick="doAddSatisfaction()">淇濆瓨锛堝緟璇勫畾锛?/button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doAddSatisfaction(){

  const pid = document.getElementById("sf-project").value;

  const period = document.getElementById("sf-period").value;

  if(!pid || !period) { alert("璇峰～鍐欏繀濉」"); return; }

  const p = PROJECTS.find(pp => pp.id === pid);

  SATISFACTION_DATA.push({

    id: SATISFACTION_DATA.length + 1,

    projectId: pid,

    period: period,

    projectFeedback: {

      busiLima2sPerf: document.getElementById("sf-biz").value || "寰呭～鍐?,

      professionalism: document.getElementById("sf-pro").value || "寰呭～鍐?,

      execution: document.getElementById("sf-exec").value || "寰呭～鍐?,

      reporting: { 

        timeliLima2s: document.getElementById("sf-rep-time").value || "寰呭～鍐?, 

        accuracy: document.getElementById("sf-rep-acc").value || "寰呭～鍐?, 

        completeLima2s: document.getElementById("sf-rep-full").value || "寰呭～鍐? 

      },

      riskControl: document.getElementById("sf-risk").value || "寰呭～鍐?,

      communication: { 

        frequency: document.getElementById("sf-comm-freq").value || "寰呭～鍐?, 

        understanding: document.getElementById("sf-comm-und").value || "寰呭～鍐?, 

        sync: document.getElementById("sf-comm-sync").value || "寰呭～鍐? 

      },

      overall: document.getElementById("sf-overall").value || "婊℃剰"

    },

    leaderScore: 0,

    leaderComment: "",

    evaluatedBy: currentRole,

    evaluatedAt: "",

    status: "寰呰瘎瀹?

  });

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("satisfaction");

  alert("婊℃剰搴﹁瘎浼板凡鍒涘缓锛乗n椤圭洰鎰熷彈宸茶褰曪紝寰呬笂绾т笌椤圭洰娌熼€氬悗琛ュ厖璇勫畾鎵撳垎銆?);

}



// ===== 婊℃剰搴﹁瘎浼?- 瀵煎嚭 =====

function exportSatisfaction(){
  const headers = ['椤圭洰','鍛ㄦ湡','椤圭洰缁煎悎鎰熷彈','涓氬姟琛ㄧ幇','涓撲笟搴?,'鎵ц鍔?,'姹囨姤鏃舵晥鎬?,'姹囨姤鍑嗙‘鎬?,'姹囨姤鍏ㄩ潰鎬?,'椋庨櫓绠℃帶','娌熼€氶鐜?,'娌熼€氱悊瑙?,'淇℃伅鍚屾','棰嗗璇勫垎','涓婄骇璇勮','璇勫畾浜?,'璇勫畾鏃ユ湡','鐘舵€?];
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
  showExportDialog(headers, rows, `椤圭洰杩愮淮璋冪爺_${new Date().toISOString().slice(0,10)}`, '椤圭洰杩愮淮璋冪爺');
}


function importSatisfaction(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "馃摜 瀵煎叆婊℃剰搴﹁瘎浼?;

  body.innerHTML = `

    <div style="font-size:13px;color:var(--c-text-2);margin-bottom:14px;line-height:1.8;">

      <div>馃搵 <b>瀵煎叆璇存槑锛?/b></div>

      <div>鏀寔 CSV / XLSX 鏍煎紡锛屾枃浠跺瓧娈甸『搴忎笉闄愶紝鍙傝€冨鍑烘枃浠躲€?/div>

      <div style="background:var(--c-bg);padding:8px 12px;border-radius:6px;margin-top:6px;font-size:12px;">

        椤圭洰ID / 鍛ㄦ湡 / 缁煎悎鎰熷彈 / 涓氬姟琛ㄧ幇 / 涓撲笟搴?/ 鎵ц鍔?/ 姹囨姤鏃舵晥鎬?/ 姹囨姤鍑嗙‘鎬?/ 姹囨姤鍏ㄩ潰鎬?/ 椋庨櫓绠℃帶 / 娌熼€氶鐜?/ 娌熼€氱悊瑙?/ 淇℃伅鍚屾 / 棰嗗璇勫垎 / 涓婄骇璇勮 / 鐘舵€?

      </div>

      <div style="margin-top:8px;">涔熷彲涓嬭浇褰撳墠鏁版嵁浣滀负妯℃澘鍙傝€冿紙鐐瑰嚮"瀵煎嚭"鎸夐挳锛夈€?/div>

    </div>

    <div class="form-group">

      <label class="form-label">閫夋嫨鏂囦欢锛?csv锛?/label>

      <input type="file" id="sat-import-file" accept=".csv,.xlsx,.xls" class="form-input" style="padding:6px 10px;">

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">鍙栨秷</button>

      <button class="btn btn-primary" onclick="doImportSatisfaction()">寮€濮嬪鍏?/button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doImportSatisfaction(){

  const fileInput = document.getElementById("sat-import-file");

  if(!fileInput || !fileInput.files.length){ alert("璇峰厛閫夋嫨鏂囦欢"); return; }

  const file = fileInput.files[0];
  const ext = (file.name || '').split('.').pop().toLowerCase();

  if (ext === 'xlsx' || ext === 'xls') {
    // Excel 鏍煎紡锛氱敤 SheetJS 瑙ｆ瀽
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const wb = XLSX.read(e.target.result, { type: 'array' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
        if (!rows || rows.length < 2) { alert("鏂囦欢鍐呭涓虹┖鎴栦粎鏈夎〃澶?); return; }
        processSatisfactionRows(rows);
      } catch(err) { alert("瑙ｆ瀽Excel澶辫触锛? + err.message); }
    };
    reader.readAsArrayBuffer(file);
  } else {
    // CSV 鏍煎紡锛氬師鏈夐€昏緫
    const reader = new FileReader();
    reader.onload = function(e){
      try {
        const text = e.target.result;
        const lines = text.replace(/^\uFEFF/,'').split('\n').map(l => l.trim()).filter(Boolean);
        if(lines.length < 2){ alert("鏂囦欢鍐呭涓虹┖鎴栦粎鏈夎〃澶?); return; }
        // CSV 杞垚浜岀淮鏁扮粍鏍煎紡锛岃窡 Excel 缁熶竴
        const rows = lines.map(function(line) {
          return line.split(',').map(v => v.replace(/^"|"$/g,'').trim());
        });
        processSatisfactionRows(rows);
      } catch(err){ alert("瀵煎叆澶辫触锛? + err.message); }
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
    const period = vals[headers.indexOf('鍛ㄦ湡')] || vals[1] || '';
    const projectName = vals[headers.indexOf('椤圭洰')] || vals[0] || '';
    const p = PROJECTS.find(pp => pp.name === projectName);
    if(!p) continue;
    SATISFACTION_DATA.push({
      id: SATISFACTION_DATA.length + 1,
      projectId: p.id,
      period: period,
      projectFeedback: {
        overall: vals[headers.indexOf('椤圭洰缁煎悎鎰熷彈')] || '婊℃剰',
        busiLima2sPerf: vals[headers.indexOf('涓氬姟琛ㄧ幇')] || '寰呭～鍐?,
        professionalism: vals[headers.indexOf('涓撲笟搴?)] || '寰呭～鍐?,
        execution: vals[headers.indexOf('鎵ц鍔?)] || '寰呭～鍐?,
        reporting: {
          timeliLima2s: vals[headers.indexOf('姹囨姤鏃舵晥鎬?)] || '寰呭～鍐?,
          accuracy: vals[headers.indexOf('姹囨姤鍑嗙‘鎬?)] || '寰呭～鍐?,
          completeLima2s: vals[headers.indexOf('姹囨姤鍏ㄩ潰鎬?)] || '寰呭～鍐?
        },
        riskControl: vals[headers.indexOf('椋庨櫓绠℃帶')] || '寰呭～鍐?,
        communication: {
          frequency: vals[headers.indexOf('娌熼€氶鐜?)] || '寰呭～鍐?,
          understanding: vals[headers.indexOf('娌熼€氱悊瑙?)] || '寰呭～鍐?,
          sync: vals[headers.indexOf('淇℃伅鍚屾')] || '寰呭～鍐?
        }
      },
      leaderScore: parseInt(vals[headers.indexOf('棰嗗璇勫垎')]) || 0,
      leaderComment: vals[headers.indexOf('涓婄骇璇勮')] || '',
      evaluatedBy: vals[headers.indexOf('璇勫畾浜?)] || currentRole,
      evaluatedAt: vals[headers.indexOf('璇勫畾鏃ユ湡')] || new Date().toISOString().slice(0,10),
      status: vals[headers.indexOf('鐘舵€?)] || '寰呰瘎瀹?
    });
    importCount++;
  }
  document.getElementById("modal-overlay").classList.add("hidden");
  renderModule("satisfaction");
  alert(`瀵煎叆瀹屾垚锛佸叡鎴愬姛瀵煎叆 ${importCount} 鏉¤瘎浼拌褰曘€俙);
}



// ===== 婊℃剰搴﹁瘎浼?- 鏉冮檺璁剧疆锛堝脊绐楋級=====

function showSatisfactionPermission(){

  const ROLE_NAMES = {leader:'涓婄骇棰嗗',pm:'椤圭洰缁忕悊',exec:'鎵ц鍥㈤槦',staff:'椤圭洰浜哄憳'};

  const canRead = (role) => {

    if(role==='leader') return '鍏ㄩ儴椤圭洰锛堝彧璇?+ 璇勫畾鎵撳垎锛?;

    if(role==='pm') return '璐熻矗椤圭洰锛堣鍐欙級+ 璺ㄨ亴鍦哄悓绫伙紙鍙锛?;

    if(role==='exec') return '璐熻矗椤圭洰锛堣鍐欙級锛屽叾浠栧悓閮ㄩ棬锛堝彧璇伙級';

    if(role==='staff') return '鎵€鍙備笌椤圭洰锛堝彧璇伙級';

    return '';

  };

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "馃攼 婊℃剰搴﹁瘎浼?- 鏉冮檺璁剧疆";

  body.innerHTML = `

    <div style="font-size:13px;color:var(--c-text-2);margin-bottom:16px;line-height:1.8;">

      <div>馃搵 <b>妯″潡鏉冮檺璇存槑锛?/b></div>

      <div>婊℃剰搴﹁瘎浼版ā鍧楁秹鍙?b>椤圭洰鏂规劅鍙楋紙瀵瑰锛?/b>涓?b>涓婄骇璇勫畾锛堝鍐咃級</b>锛屾潈闄愰渶涓ユ牸鍖哄垎銆?/div>

    </div>



    <div class="card" style="margin-bottom:14px;padding:14px 16px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;">瑙掕壊鏉冮檺鏄庣粏</div>

      <table class="data-table">

        <thead><tr><th>瑙掕壊</th><th>鏌ョ湅鑼冨洿</th><th>鎿嶄綔鏉冮檺</th></tr></thead>

        <tbody>

          <tr>

            <td><span class="badge badge-blue">涓婄骇棰嗗</span></td>

            <td>鍏ㄩ儴椤圭洰璇勪及璁板綍</td>

            <td>鏂板璇勪及 路 璇勫畾鎵撳垎 路 缂栬緫璇勮 路 瀵煎嚭 路 瀵煎叆 路 鏉冮檺绠＄悊</td>

          </tr>

          <tr>

            <td><span class="badge badge-green">椤圭洰缁忕悊</span></td>

            <td>璐熻矗椤圭洰 + 璺ㄨ亴鍦哄悓绫婚」鐩?/td>

            <td>鏂板璇勪及锛堝～鍐欓」鐩劅鍙楋級路 鏌ョ湅璇勫畾缁撴灉 路 瀵煎嚭</td>

          </tr>

          <tr>

            <td><span class="badge badge-yellow">鎵ц鍥㈤槦</span></td>

            <td>璐熻矗椤圭洰</td>

            <td>鏌ョ湅璐熻矗椤圭洰鐨勮瘎瀹氱粨鏋滃拰璇勮 路 瀵煎嚭</td>

          </tr>

          <tr>

            <td><span class="badge badge-gray">椤圭洰浜哄憳</span></td>

            <td>鎵€鍙備笌椤圭洰</td>

            <td>鏌ョ湅鏈汉鍙備笌椤圭洰鐨勮瘎瀹氱粨鏋滐紙浠呮煡鐪嬶級</td>

          </tr>

        </tbody>

      </table>

    </div>



    <div class="card" style="margin-bottom:14px;padding:14px 16px;background:var(--c-yellow-bg);">

      <div style="font-size:13px;font-weight:500;margin-bottom:8px;color:var(--c-yellow);">鈿狅笍 鏁版嵁瀹夊叏鎻愰啋</div>

      <div style="font-size:12px;color:var(--c-text-2);line-height:2;">

        <div>鈥?椤圭洰鏂规劅鍙楀唴瀹?b>涓嶅澶栧睍绀哄垎鍊?/b>锛屼粎涓婄骇鍙煡鐪嬪畬鏁磋瘎瀹氱粨鏋?/div>

        <div>鈥?椤圭洰浜哄憳锛堟湭鏉ュ紑鏀撅級浠呭彲鏌ョ湅鏈汉鍙備笌椤圭洰鐨勮瘎瀹氱粨鏋滐紝<b>涓嶅彲鏌ョ湅鍏朵粬椤圭洰</b></div>

        <div>鈥?瀵煎嚭鏂囦欢鍖呭惈瀹屾暣璇勫畾鎰忚锛岃娉ㄦ剰鏂囦欢鍒嗗彂鑼冨洿</div>

        <div>鈥?寤鸿瀹氭湡澶囦唤璇勪及鏁版嵁锛堜娇鐢ㄥ鍑哄姛鑳斤級</div>

      </div>

    </div>



    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">鍏抽棴</button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



// ===== 绯荤粺鐢ㄦ埛绠＄悊锛堢敤鎴峰鎵圭鐞嗭級 =====

let notificationFilter = "all";

function renderNotifications(){
  if (!isAdmin()) {
    return `<div class="empty-state"><div class="empty-icon">&#x1F512;</div><p>浠呯鐞嗗憳鍙闂妯″潡</p></div>`;
  }

  const filtered = notificationFilter === "all" ? USERS : USERS.filter(u => {
    if (notificationFilter === "pending") return u.status === "寰呭鏍?;
    if (notificationFilter === "active") return u.status === "宸叉縺娲?;
    if (notificationFilter === "rejected") return u.status === "宸叉嫆缁?;
    return true;
  });

  const statusBadge = {
    "宸叉縺娲?: "badge-green",
    "寰呭鏍?: "badge-yellow",
    "宸叉嫆缁?: "badge-red",
    "宸茬鐢?: "badge-gray"
  };

  const roleBadge = {
    "瓒呯骇绠＄悊鍛?: "badge-purple",
    "绠＄悊鍛?: "badge-blue",
    "瀹㈡湇鎬荤洃": "badge-orange",
    "瀹㈡湇缁忕悊": "badge-primary",
    "瀹㈡湇涓荤": "badge-yellow",
    "瀹㈡湇缁勯暱": "badge-green",
    "椤圭洰浼欎即": "badge-gray",
    "鎶€鏈紮浼?: "badge-gray",
    "椋庢帶浼欎即": "badge-gray"
  };

  return `<div class="module-header">
    <div>
      <div class="module-title">&#x1F514; 绯荤粺鐢ㄦ埛绠＄悊</div>
      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">绠＄悊绯荤粺鐢ㄦ埛锛屽鎵规敞鍐岀敵璇凤紝缁存姢璐﹀彿鐘舵€?/div>
    </div>
    <div class="module-actions">
      <button class="btn btn-sm btn-primary" onclick="showAddUser()">&#xFF0B; 鏂板鐢ㄦ埛</button>
    </div>
  </div>

  <div style="display:flex;gap:8px;margin-bottom:16px;">
    <button class="btn btn-sm ${notificationFilter==='all'?'btn-primary':''}" onclick="setNotificationFilter('all')">鍏ㄩ儴(${USERS.length})</button>
    <button class="btn btn-sm ${notificationFilter==='pending'?'btn-primary':''}" style="background:var(--c-yellow-bg);color:var(--c-yellow);border-color:var(--c-yellow)" onclick="setNotificationFilter('pending')">寰呭鏍?${USERS.filter(u=>u.status==='寰呭鏍?).length})</button>
    <button class="btn btn-sm ${notificationFilter==='active'?'btn-primary':''}" style="background:var(--c-green-bg);color:var(--c-green);border-color:var(--c-green)" onclick="setNotificationFilter('active')">宸叉縺娲?${USERS.filter(u=>u.status==='宸叉縺娲?).length})</button>
    <button class="btn btn-sm ${notificationFilter==='rejected'?'btn-primary':''}" style="background:var(--c-red-bg);color:var(--c-red);border-color:var(--c-red)" onclick="setNotificationFilter('rejected')">宸叉嫆缁?${USERS.filter(u=>u.status==='宸叉嫆缁?).length})</button>
  </div>

  <div class="card">
    <table class="data-table">
      <thead>
        <tr>
          <th>鐢ㄦ埛</th>
          <th>鐢ㄦ埛鍚?/th>
          <th>瑙掕壊</th>
          <th>鐘舵€?/th>
          <th>娉ㄥ唽鏃堕棿</th>
          <th>鑱旂郴鏂瑰紡</th>
          <th>瀹℃壒浜?/th>
          <th>鎿嶄綔</th>
        </tr>
      </thead>
      <tbody>
        ${filtered.map(u => `
          <tr>
            <td><div style="display:flex;align-items:center;gap:8px;"><div style="width:32px;height:32px;border-radius:50%;background:var(--c-primary-light);color:var(--c-primary);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;">${u.name ? u.name.charAt(0) : '?'}</div><span style="font-weight:500;">${u.name || '鏈懡鍚?}</span></div></td>
            <td>${u.username}</td>
            <td><span class="badge ${roleBadge[u.role]||'badge-gray'}">${u.role}</span></td>
            <td><span class="badge ${statusBadge[u.status]||'badge-gray'}">${u.status}</span></td>
            <td>${u.registerTime}</td>
            <td><div style="font-size:12px;color:var(--c-text-2);">${u.phone}<br/>${u.email}</div></td>
            <td>${u.approvedBy || "&#x2014;"}</td>
            <td class="actions">
              ${u.status === "寰呭鏍? ? `
                <button class="btn btn-sm btn-primary" onclick="approveUser('${u.id}', '鍚屾剰')">鍚屾剰</button>
                <button class="btn btn-sm" style="background:var(--c-red-bg);color:var(--c-red);border-color:var(--c-red);" onclick="approveUser('${u.id}', '鎷掔粷')">鎷掔粷</button>
                <button class="btn btn-sm" onclick="approveUser('${u.id}', '蹇界暐')">蹇界暐</button>
              ` : `
                <button class="btn btn-sm" onclick="editUserRole('${u.id}')">鏀硅鑹?/button>
                <button class="btn btn-sm" onclick="resetUserPassword('${u.id}')">閲嶇疆瀵嗙爜</button>
                ${u.status !== "宸茬鐢? ? `<button class="btn btn-sm" style="background:var(--c-yellow-bg);color:var(--c-yellow);border-color:var(--c-yellow);" onclick="disableUser('${u.id}')">绂佺敤</button>` : `<button class="btn btn-sm btn-primary" onclick="enableUser('${u.id}')">鍚敤</button>`}
                ${isSuperAdmin() ? `<button class="btn btn-sm" style="background:var(--c-red-bg);color:var(--c-red);border-color:var(--c-red);" onclick="deleteUser('${u.id}')">鍒犻櫎</button>` : ""}
              `}
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    ${filtered.length === 0 ? `<div style="text-align:center;padding:40px;color:var(--c-text-3);">鏆傛棤绗﹀悎鏉′欢鐨勭敤鎴?/div>` : ""}
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
  if (action === "鍚屾剰") {
    user.status = "宸叉縺娲?;
    user.approvedBy = currentUser ? currentUser.name : "admin";
    // 鏂扮敤鎴烽粯璁よ鑹蹭负"鏂扮敤鎴?锛屾墍鏈夋潈闄愬彧璇?
    if (!user.role) user.role = "鏂扮敤鎴?;
    saveUsers();
    alert(`宸插悓鎰?${user.name} 鐨勬敞鍐岀敵璇凤紝璐﹀彿宸叉縺娲汇€俙);
  } else if (action === "鎷掔粷") {
    user.status = "宸叉嫆缁?;
    user.approvedBy = currentUser ? currentUser.name : "admin";
    saveUsers();
    alert(`宸叉嫆缁?${user.name} 鐨勬敞鍐岀敵璇枫€俙);
  } else if (action === "蹇界暐") {
    alert(`宸插拷鐣?${user.name} 鐨勬敞鍐岀敵璇凤紝璇ョ敵璇蜂粛淇濈暀鍦ㄥ緟瀹℃牳鍒楄〃涓€俙);
    return;
  }
  renderModule("notifications");
}

function editUserRole(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  const roles = ["瀹㈡湇缁勯暱","瀹㈡湇涓荤","瀹㈡湇缁忕悊","瀹㈡湇鎬荤洃","绠＄悊鍛?,"椤圭洰浼欎即","鎶€鏈紮浼?,"椋庢帶浼欎即"];
  const roleOptions = roles.map(r => `<option value="${r}" ${r===user.role?'selected':''}>${r}</option>`).join('');

  const modalHtml = `
    <div class="modal-overlay" id="role-modal-overlay" onclick="if(event.target===this)closeRoleModal()">
      <div class="modal-box" style="max-width:320px;border-radius:10px;box-shadow:0 12px 40px rgba(0,0,0,0.15);">
        <div class="modal-header" style="padding:12px 16px;border-bottom:1px solid #f1f5f9;">
          <div style="font-size:13px;font-weight:600;color:var(--c-text);">淇敼瑙掕壊</div>
          <button class="modal-close" onclick="closeRoleModal()" style="font-size:18px;color:#94a3b8;">&times;</button>
        </div>
        <div class="modal-body" style="padding:16px;">
          <div style="margin-bottom:10px;font-size:12px;color:#94a3b8;">涓?<strong style="color:var(--c-primary);">${user.name}</strong> 閫夋嫨鏂拌鑹?/div>
          <div style="position:relative;">
            <select id="role-select-input" style="width:100%;padding:8px 28px 8px 10px;font-size:12px;color:var(--c-text);border:1px solid #e2e8f0;border-radius:6px;background:#fff;appearance:none;cursor:pointer;outline:none;transition:border-color 0.2s;">
              ${roleOptions}
            </select>
            <div style="position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none;font-size:10px;color:#94a3b8;">鈻?/div>
          </div>
        </div>
        <div class="modal-footer" style="padding:10px 16px 14px;gap:8px;">
          <button class="btn" onclick="closeRoleModal()" style="padding:6px 14px;font-size:12px;border-radius:6px;background:#f8fafc;color:#64748b;border:1px solid #e2e8f0;">鍙栨秷</button>
          <button class="btn btn-primary" onclick="confirmEditRole('${userId}')" style="padding:6px 14px;font-size:12px;border-radius:6px;">纭畾</button>
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
    alert(`宸蹭慨鏀?${user.name} 鐨勮鑹蹭负锛?{newRole}`);
    renderModule("notifications");
  }
  closeRoleModal();
}

function resetUserPassword(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  const newPwd = prompt(`閲嶇疆 ${user.name} 鐨勫瘑鐮侊細\n璇疯緭鍏ユ柊瀵嗙爜锛堣嚦灏?浣嶏級锛歚);
  if (newPwd && newPwd.length >= 6) {
    user.password = newPwd;
    alert(`宸查噸缃?${user.name} 鐨勫瘑鐮併€俙);
  } else if (newPwd) {
    alert("瀵嗙爜闀垮害涓嶈冻6浣?);
  }
}

function disableUser(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  if (user.role === "瓒呯骇绠＄悊鍛?) { alert("涓嶈兘绂佺敤瓒呯骇绠＄悊鍛?); return; }
  if (confirm(`纭畾瑕佺鐢ㄧ敤鎴?${user.name} 鍚楋紵`)) {
    user.status = "宸茬鐢?;
    saveUsers();
    renderModule("notifications");
  }
}

function enableUser(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  user.status = "宸叉縺娲?;
  saveUsers();
  renderModule("notifications");
}

function deleteUser(userId){
  const user = USERS.find(u => u.id === userId);
  if (!user) return;
  if (user.role === "瓒呯骇绠＄悊鍛?) { alert("涓嶈兘鍒犻櫎瓒呯骇绠＄悊鍛?); return; }
  if (confirm(`纭畾瑕佸垹闄ょ敤鎴?${user.name} 鍚楋紵姝ゆ搷浣滀笉鍙仮澶嶃€俙)) {
    const idx = USERS.findIndex(u => u.id === userId);
    if (idx > -1) USERS.splice(idx, 1);
    saveUsers();
    renderModule("notifications");
  }
}

function showAddUser(){
  if (!isAdmin()) { alert("浠呯鐞嗗憳鍙柊澧炵敤鎴?); return; }
  const name = prompt("鐢ㄦ埛濮撳悕锛?);
  if (!name) return;
  const username = prompt("鐧诲綍璐﹀彿锛?);
  if (!username || USERS.some(u => u.username === username)) { alert("璐﹀彿涓虹┖鎴栧凡瀛樺湪"); return; }
  const password = prompt("鍒濆瀵嗙爜锛?);
  if (!password) return;
  const role = prompt("瑙掕壊锛堝鏈嶇粍闀?瀹㈡湇涓荤/瀹㈡湇缁忕悊/瀹㈡湇鎬荤洃/绠＄悊鍛橈級锛?) || "瀹㈡湇缁勯暱";
  const newUser = {
    id: "U" + String(USERS.length + 1).padStart(3, "0"),
    name, username, password, role,
    status: "宸叉縺娲?, registerTime: new Date().toISOString().slice(0, 10),
    phone: "", email: "", approvedBy: currentUser ? currentUser.name : "admin", remark: ""
  };
  USERS.push(newUser);
  renderModule("notifications");
}

function renderPermissions(){
  // 闃插尽鎬ф鏌?
  if (typeof ROLES === "undefined") {
    document.getElementById("module-content").innerHTML = '<div style="padding:40px;text-align:center;color:red;">閿欒锛歊OLES 鏈畾涔?/div>';
    return;
  }
  if (typeof rolePermissions === "undefined") {
    rolePermissions = {};
  }

  const allModules = [
    {key:"dashboard", name:"椤圭洰鎬昏鐪嬫澘"},
    {key:"archive", name:"椤圭洰鍩虹妗ｆ"},
    {key:"target", name:"鐩爣涓庢潈璐ｇ鐞?},
    {key:"cost", name:"鎴愭湰涓庡埄娑︾鐞?},
    {key:"operation", name:"鏈嶅姟涓庤繘搴﹁拷韪?},
    {key:"issue", name:"闂涓庤棰樺崗浣?},
    {key:"knowledge", name:"鏍稿績鐭ヨ瘑鑳介噺姹?},
    {key:"handover", name:"椤圭洰鎵挎帴瑙勮寖"},
    {key:"satisfaction", name:"椤圭洰杩愮淮璋冪爺"},
    {key:"permissions", name:"绯荤粺鏉冮檺绠＄悊"}
  ];

  // 鏉冮檺鏍囩棰滆壊
  const pColor = {write:"#16a34a", read:"#2563eb", hidden:"#9ca3af"};

  let html = `
    <div class="module-header">
      <div>
        <div class="module-title">鈿欙笍 绯荤粺鏉冮檺绠＄悊</div>
        <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">涓?涓鑹茬郴缁熸€ч厤缃悇鍔熻兘妯″潡鐨勮闂潈闄?/div>
      </div>
      <div class="module-actions">
        <button class="btn btn-sm" onclick="batchSetPermission()" style="background:#f0f9ff;border:1px solid #bae6fd;">鎵归噺璁剧疆</button>
        <button class="btn btn-primary btn-sm" onclick="resetPermissions()">鎭㈠榛樿</button>
        <button class="btn btn-sm" onclick="exportPermissions()">瀵煎嚭閰嶇疆</button>
        <button class="btn btn-sm" onclick="importPermissions()">瀵煎叆閰嶇疆</button>
      </div>
    </div>

    <!-- 鏉冮檺鍥句緥 -->
    <div class="card" style="padding:10px 16px;margin-bottom:12px;display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
      <span style="font-size:12px;color:var(--c-text-3);">鏉冮檺鍥句緥锛?/span>
      <span style="font-size:12px;padding:2px 8px;border-radius:4px;background:#dcfce7;color:#16a34a;">鈼?璇诲啓</span>
      <span style="font-size:12px;padding:2px 8px;border-radius:4px;background:#dbeafe;color:#2563eb;">鈼?鍙</span>
      <span style="font-size:12px;padding:2px 8px;border-radius:4px;background:#f3f4f6;color:#9ca3af;">鈼?闅愯棌</span>
      <span style="font-size:11px;color:var(--c-text-3);margin-left:auto;">鐐瑰嚮鍗曞厓鏍煎彲蹇€熷垏鎹㈡潈闄愶紝鎴栦娇鐢ㄤ笅鎷夎彍鍗曠簿纭€夋嫨</span>
    </div>

    <div class="card" style="overflow-x:auto;">
      <table class="data-table permissions-table" style="min-width:900px;">
        <thead>
          <tr>
            <th style="min-width:100px;position:sticky;left:0;background:var(--c-card);z-index:1;">瑙掕壊锛兼ā鍧?/th>
            ${allModules.map(m => {
              // 琛ㄥご鏄剧ず锛氬幓鎺?椤圭洰"鍓嶇紑浠ヨ妭鐪佺┖闂达紝浣嗕繚鐣欐牳蹇冭瘝
              let short = m.name.replace("椤圭洰","").replace("鏍稿績鐭ヨ瘑鑳介噺姹?,"鐭ヨ瘑鑳介噺姹?);
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
                          title="鐐瑰嚮鍒囨崲鏉冮檺锛堝綋鍓嶏細${p==="write"?"璇诲啓":p==="read"?"鍙":"闅愯棌"}锛?>
                  <select onchange="updatePermissionFromSelect(this)"
                          data-role="${role}" data-key="${m.key}"
                          onclick="event.stopPropagation()"
                          style="padding:2px 2px;font-size:11px;border:1px solid ${color};border-radius:4px;background:${p==="write"?"#dcfce7":p==="read"?"#dbeafe":"#f3f4f6"};color:${color};cursor:pointer;width:52px;">
                    <option value="write" ${p==="write"?"selected":""}>璇诲啓</option>
                    <option value="read" ${p==="read"?"selected":""}>鍙</option>
                    <option value="hidden" ${p==="hidden"?"selected":""}>闅愯棌</option>
                  </select>
                </td>`;
              }).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- 鎸夎鑹叉煡鐪嬫潈闄愬崱鐗?-->
    <div style="margin-top:16px;">
      <div style="font-size:13px;font-weight:500;color:var(--c-text-2);margin-bottom:8px;">馃攳 鎸夎鑹叉煡鐪嬫潈闄愭憳瑕?/div>
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
                <span style="color:#16a34a;">璇诲啓${writeCount}</span>
                <span style="color:#2563eb;">鍙${readCount}</span>
                <span style="color:#9ca3af;">闅愯棌${hiddenCount}</span>
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>

    <div class="card" style="margin-top:16px;padding:14px 18px;">
      <div style="font-size:13px;font-weight:500;margin-bottom:8px;">馃搵 鏉冮檺璇存槑</div>
      <ul style="font-size:12px;color:var(--c-text-2);line-height:1.8;">
        <li><b style="color:#16a34a;">璇诲啓</b>锛氬彲浠ユ煡鐪嬪拰缂栬緫璇ユā鍧楃殑鎵€鏈夊唴瀹?/li>
        <li><b style="color:#2563eb;">鍙</b>锛氬彧鑳芥煡鐪嬭妯″潡鐨勫唴瀹癸紝涓嶈兘缂栬緫</li>
        <li><b style="color:#9ca3af;">闅愯棌</b>锛氳妯″潡瀵硅瑙掕壊涓嶅彲瑙侊紝宸︿晶瀵艰埅鏍忎笉鏄剧ず</li>
        <li>鏉冮檺閰嶇疆鑷姩淇濆瓨鍒版祻瑙堝櫒鏈湴瀛樺偍锛屾竻闄ゆ祻瑙堝櫒鏁版嵁浼氶噸缃负榛樿</li>
      </ul>
    </div>`;

  // 涓嶅啀鐩存帴鎿嶄綔 innerHTML锛屾敼涓鸿繑鍥?html 瀛楃涓诧紙涓庡叾浠栨覆鏌撳嚱鏁颁竴鑷达級
  return html;
}

// ===== 椤圭洰闅惧害璇勪及锛堜紭鍖栫増锛?====
// 璁＄畻绠＄悊鍩哄噯鍒嗭紙鏍规嵁绠＄悊绛夌骇锛?
function getManagementBenchmark(level) {
  if (!level) return 35;
  if (level.includes('缁勯暱-1')) return 35;
  if (level.includes('缁勯暱-2')) return 45;
  if (level.includes('缁勯暱-3')) return 55;
  if (level.includes('涓荤')) return 70;
  if (level.includes('缁忕悊')) return 90;
  if (level.includes('鍩硅甯?)) return 30;
  return 35;
}

// 璁＄畻閫傞厤搴︼紙鐧惧垎姣旓級
function calcCompatibility(projectScore, managementBenchmark) {
  const diff = Math.abs(projectScore - managementBenchmark);
  const compatibility = Math.max(0, Math.min(100, 100 - diff * 1.25));
  return Math.round(compatibility);
}

// 鑾峰彇閫傞厤搴︽。浣?
function getCompatibilityBand(pct) {
  if (pct < 60) return { label: '<60% 涓嶅尮閰?, color: '#f5222d', bg: '#fff1f0' };
  if (pct < 80) return { label: '60%-80% 鍩烘湰鍖归厤', color: '#fa8c16', bg: '#fff7e6' };
  return { label: '80%-100% 楂樺害鍖归厤', color: '#52c41a', bg: '#f6ffed' };
}

// 鑾峰彇闅惧害绛夌骇
function getDifficultyLevel(score) {
  if (score <= 40) return { label: '浣庨毦搴?, color: '#52c41a', cls: 'low' };
  if (score <= 50) return { label: '涓綆闅惧害', color: '#1890ff', cls: 'mid-low' };
  if (score <= 60) return { label: '涓珮闅惧害', color: '#faad14', cls: 'mid-high' };
  if (score <= 80) return { label: '楂橀毦搴?, color: '#fa8c16', cls: 'high' };
  return { label: '瓒呴珮闅惧害', color: '#f5222d', cls: 'extreme' };
}

// 娓叉煋椤圭洰闅惧害璇勪及椤甸潰锛堜紭鍖栫増锛?
function renderAssessment(){
  // 鏁版嵁鍑嗗
  let groups = GROUPS_DATA.filter(g => g.month === '7鏈? && g.group && !g.group.includes('瀹氶噺鎸囨爣'));
  let assessments = ASSESSMENTS_DATA.filter(a => a.month === '7鏈? && a.group && !a.month.includes('渚濇嵁'));
  const deptFilter = document.getElementById('asmt-dept-filter') ? document.getElementById('asmt-dept-filter').value : '';
  const mgrFilter = document.getElementById('asmt-mgr-filter') ? document.getElementById('asmt-mgr-filter').value : '';
  if (deptFilter) assessments = assessments.filter(a => a.dept === deptFilter);
  if (mgrFilter) assessments = assessments.filter(a => a.manager === mgrFilter);

  // 缁熻鍗＄墖鏁版嵁
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

  // ===== 寮€濮嬫覆鏌?=====
  let html = `<div class="page-header"><h2>馃搳 椤圭洰闅惧害璇勪及</h2>
    <div class="page-actions">
      <button class="btn btn-sm" onclick="importAssessment()">馃摜 瀵煎叆</button>
      <button class="btn btn-sm" onclick="exportAssessment()">馃摛 瀵煎嚭</button>
      <button class="btn btn-sm btn-primary" onclick="showCompareModal()">馃攧 鑷敱瀵规瘮</button>
    </div>
  </div>`;
  html += `<div style="margin:12px 0 8px;color:#888;font-size:13px;">鏁版嵁鏉ユ簮锛氱粍鍒熀纭€淇℃伅 + 绠＄悊闅惧害璇勪及琛紙2026骞?鏈堬級</div>`;

  // 绛涢€夋爮锛堜娇鐢ㄧ郴缁熺粺涓€鐨?filter-bar-v4 瑙勮寖锛?
  html += `<div class="filter-bar-v4">`;
  html += `<div class="filter-row-v4">`;
  html += `  <div style="display:flex;align-items:center;gap:6px;">`;
  html += `    <span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">绛涢€夐」鐩?/span>`;
  html += `    <select id="asmt-dept-filter" class="fb-select">`;
  html += `      <option value="">鍏ㄩ儴</option>`;
  [...new Set(assessments.map(a => a.dept))].filter(Boolean).forEach(d => {
    html += `      <option value="${d}">${d}</option>`;
  });
  html += `    </select>`;
  html += `  </div>`;
  html += `  <div style="display:flex;align-items:center;gap:6px;">`;
  html += `    <span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">绛涢€夌鐞嗕汉</span>`;
  html += `    <select id="asmt-mgr-filter" class="fb-select">`;
  html += `      <option value="">鍏ㄩ儴</option>`;
  assessments.map(a => a.manager).filter((v,i, a) => v && a.indexOf(v) === i).forEach(m => {
    html += `      <option value="${m}">${m}</option>`;
  });
  html += `    </select>`;
  html += `  </div>`;
  html += `  <div style="margin-left:auto;display:flex;gap:8px;align-items:center;">`;
  html += `    <button class="btn btn-sm btn-primary" onclick="renderAssessment()">馃攳 纭畾</button>`;
  html += `  </div>`;
  html += `</div></div>`;

  // ===== 鍗＄墖鍖?=====
  html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;">`;
  // 鍗＄墖1锛氶珮闅惧害椤圭洰
  html += `  <div class="stat-card" style="background:#fff1f0;border:1px solid #ffa39e;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#f5222d;margin-bottom:4px;">馃敶 楂橀毦搴﹂」鐩?/div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#f5222d;">${highDiff}</div>`;
  html += `    <div style="font-size:12px;color:#888;">鍗犳瘮 ${assessments.length>0?Math.round(highDiff/assessments.length*100):0}%</div>`;
  html += `  </div>`;
  // 鍗＄墖2锛氫腑闅惧害椤圭洰
  html += `  <div class="stat-card" style="background:#fff7e6;border:1px solid #ffd591;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#fa8c16;margin-bottom:4px;">馃煛 涓毦搴﹂」鐩?/div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#fa8c16;">${midDiff}</div>`;
  html += `    <div style="font-size:12px;color:#888;">鍗犳瘮 ${assessments.length>0?Math.round(midDiff/assessments.length*100):0}%</div>`;
  html += `  </div>`;
  // 鍗＄墖3锛氫綆闅惧害椤圭洰
  html += `  <div class="stat-card" style="background:#f6ffed;border:1px solid #b7eb8f;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#52c41a;margin-bottom:4px;">馃煝 浣庨毦搴﹂」鐩?/div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#52c41a;">${lowDiff}</div>`;
  html += `    <div style="font-size:12px;color:#888;">鍗犳瘮 ${assessments.length>0?Math.round(lowDiff/assessments.length*100):0}%</div>`;
  html += `  </div>`;
  html += `</div>`;

  // 绗簩鎺掑崱鐗囷細绠＄悊鑳藉姏鍒嗗竷
  html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;">`;
  // 鍗＄墖4锛氱鐞嗚兘鍔涢珮
  html += `  <div class="stat-card" style="background:#e6f7ff;border:1px solid #91d5ff;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#1890ff;margin-bottom:4px;">馃數 绠＄悊鑳藉姏楂?/div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#1890ff;">${highMgr}</div>`;
  html += `    <div style="font-size:12px;color:#888;">涓荤/缁忕悊绾?/div>`;
  html += `  </div>`;
  // 鍗＄墖5锛氱鐞嗚兘鍔涗腑
  html += `  <div class="stat-card" style="background:#fff7e6;border:1px solid #ffd591;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#fa8c16;margin-bottom:4px;">馃煛 绠＄悊鑳藉姏涓?/div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#fa8c16;">${midMgr}</div>`;
  html += `    <div style="font-size:12px;color:#888;">缁勯暱2/3绾?/div>`;
  html += `  </div>`;
  // 鍗＄墖6锛氱鐞嗚兘鍔涗綆
  html += `  <div class="stat-card" style="background:#fff1f0;border:1px solid #ffa39e;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#f5222d;margin-bottom:4px;">馃敶 绠＄悊鑳藉姏浣?/div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#f5222d;">${lowMgr}</div>`;
  html += `    <div style="font-size:12px;color:#888;">缁勯暱1绾?鍩硅甯?/div>`;
  html += `  </div>`;
  html += `</div>`;

  // 缁煎悎閫傞厤搴﹀ぇ鍗＄墖
  html += `<div style="background:${compatBand.bg};border:2px solid ${compatBand.color};border-radius:12px;padding:20px;margin-bottom:20px;display:flex;align-items:center;gap:24px;">`;
  html += `  <div style="font-size:48px;font-weight:800;color:${compatBand.color};">${avgCompat}%</div>`;
  html += `  <div>`;
  html += `    <div style="font-size:16px;font-weight:600;color:${compatBand.color};">缁煎悎閫傞厤搴?路 ${compatBand.label}</div>`;
  html += `    <div style="font-size:12px;color:#888;margin-top:4px;">鍩轰簬${compatCount}涓粍鍒殑绠＄悊闅惧害涓庣鐞嗚兘鍔涘尮閰嶅害璇勪及</div>`;
  html += `  </div>`;
  html += `</div>`;

  // ===== Tab鍒囨崲鍖?=====
  html += `<div style="display:flex;gap:0;margin-bottom:16px;border-bottom:2px solid #e8e8e8;">`;
  html += `  <div id="tab-match" onclick="switchAssessTab('match')" style="padding:10px 20px;cursor:pointer;font-size:14px;font-weight:600;color:#1a73e8;border-bottom:2px solid #1a73e8;margin-bottom:-2px;">馃搳 鍖归厤搴︽槑缁?/div>`;
  html += `  <div id="tab-project" onclick="switchAssessTab('project')" style="padding:10px 20px;cursor:pointer;font-size:14px;color:#888;">馃搵 椤圭洰寰楀垎鏄庣粏</div>`;
  html += `  <div id="tab-management" onclick="switchAssessTab('management')" style="padding:10px 20px;cursor:pointer;font-size:14px;color:#888;">馃懁 绠＄悊鑳藉姏璇勫畾鏄庣粏</div>`;
  html += `</div>`;

  // Tab鍐呭鍖?
  html += `<div id="assess-tab-content">`;
  // 榛樿鏄剧ず鍖归厤搴︽槑缁?
  html += renderMatchDetail(assessments);
  html += `</div>`;

  // 鍘熸湁璇存槑鍖哄潡锛堜繚鐣欙級
  html += `<div class="card" style="margin-top:20px;"><div class="card-header">馃搵 绠＄悊闅惧害璇勪及璇存槑</div><div style="padding:12px;font-size:13px;line-height:2;">`;
  html += `  <p><b>璇勪及鏂规硶锛?/b>瀹氶噺鎸囨爣鏉冮噸70% + 瀹氭€у洜绱犳潈閲?0%锛屽悎璁?00鍒嗐€?/p>`;
  html += `  <p><b>瀹氶噺鎸囨爣锛堝叡70鍒嗭級锛?/b>绠＄悊鍗婂緞(瀹㈡湇浜烘暟/绠＄悊閰嶆瘮)銆佹柊鍛樺伐鍗犳瘮銆佺鐞嗛厤姣斻€侀」鐩鎺ユ暟閲忋€佸簵閾哄鐩橀娆°€佸搧鐗屼粙鍏ユ繁搴︺€佹眹鎶ラ娆?/p>`;
  html += `  <p><b>瀹氭€у洜绱狅紙鍏?0鍒嗭紝姣忛」鏈€楂?鍒嗭級锛?/b>涓氬姟澶嶆潅搴︺€佽法骞冲彴绠＄悊銆佸搧鐗屾巿鏉冪瓑绾с€佸鏈嶆祦鍔ㄦ€с€佹妧鑳藉煿璁渶姹傘€佺郴缁?宸ュ叿澶嶆潅搴︺€佸璇夊鐞嗛毦搴︺€佺獊鍙戜簨浠跺搷搴?/p>`;
  html += `  <p><b>闅惧害璇勭骇鍙傝€冿細</b>鈮?0鍒?缁勯暱1绾?| 41-50鍒?缁勯暱2绾?| 51-60鍒?缁勯暱3绾?| 61-80鍒?涓荤绾?| 锛?0鍒?缁忕悊绾?/p>`;
  html += `  <p><b>宸紓濂栧姳锛?/b>鍩哄噯鍒嗗樊鍊?-10鍒嗏啋500鍏?| 11-15鍒嗏啋1000鍏?| 16-20鍒嗏啋1500鍏?/p>`;
  html += `  <p><b>閫傞厤搴﹁绠楋細</b>鏍规嵁椤圭洰闅惧害寰楀垎涓庣鐞嗙瓑绾у熀鍑嗗垎宸€艰绠楀尮閰嶅害锛岋紲60%涓嶅尮閰?| 60%-80%鍩烘湰鍖归厤 | 80%-100%楂樺害鍖归厤</p>`;
  html += `</div></div>`;

  return html;
}

// Tab鍒囨崲
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
  const assessments = ASSESSMENTS_DATA.filter(a => a.month === '7鏈? && a.group && !a.month.includes('渚濇嵁'));
  const content = document.getElementById('assess-tab-content');
  if (!content) return;
  if (tab === 'match') content.innerHTML = renderMatchDetail(assessments);
  else if (tab === 'project') content.innerHTML = renderProjectDetail(assessments);
  else if (tab === 'management') content.innerHTML = renderManagementDetail(assessments);
}

// 鍖归厤搴︽槑缁嗚〃
function renderMatchDetail(assessments) {
  let html = `<div class="card"><div class="card-header">馃搳 椤圭洰-绠＄悊鍖归厤搴︽槑缁?/div><div class="table-wrap"><table class="data-table">`;
  html += `  <thead><tr>`;
  html += `    <th>搴忓彿</th><th>缁勫埆</th><th>绠＄悊浜?/th><th>椤圭洰闅惧害鍒?/th><th>绠＄悊鍩哄噯鍒?/th>`;
  html += `    <th>鍖归厤搴?/th><th>妗ｄ綅</th><th>鎿嶄綔</th>`;
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
    html += `  <td><button class="btn btn-sm" onclick="showGroupDetail('${a.group}')">鏌ョ湅鏄庣粏</button></td>`;
    html += `</tr>`;
  });
  html += `  </tbody></table></div></div>`;
  return html;
}

// 椤圭洰寰楀垎鏄庣粏锛堢淮搴︽媶瑙ｏ級
function renderProjectDetail(assessments) {
  let html = `<div class="card"><div class="card-header">馃搵 椤圭洰闅惧害寰楀垎鏄庣粏锛堝畾閲?瀹氭€э級</div><div class="table-wrap"><table class="data-table">`;
  html += `  <thead><tr>`;
  html += `    <th>缁勫埆</th><th>绠＄悊浜?/th><th>瀹氶噺寰楀垎</th><th>瀹氭€у緱鍒?/th><th>鎬诲垎</th>`;
  html += `    <th>涓氬姟澶嶆潅搴?/th><th>璺ㄥ钩鍙?/th><th>鍝佺墝鎺堟潈</th><th>娴佸姩鎬?/th>`;
  html += `    <th>鎶€鑳藉煿璁?/th><th>绯荤粺澶嶆潅搴?/th><th>瀹㈣瘔闅惧害</th><th>绐佸彂浜嬩欢</th>`;
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

// 绠＄悊鑳藉姏璇勫畾鏄庣粏
function renderManagementDetail(assessments) {
  let html = `<div class="card"><div class="card-header">馃懁 绠＄悊鑳藉姏璇勫畾鏄庣粏</div><div class="table-wrap"><table class="data-table">`;
  html += `  <thead><tr>`;
  html += `    <th>绠＄悊浜?/th><th>绠＄悊绛夌骇</th><th>鍩哄噯鍒?/th><th>閫傞厤搴?/th><th>妗ｄ綅</th>`;
  html += `    <th>璐熻矗缁勫埆鏁?/th><th>鎿嶄綔</th>`;
  html += `  </tr></thead><tbody>`;
  // 鎸夌鐞嗕汉鑱氬悎
  const mgrMap = {};
  assessments.forEach(a => {
    const mgr = a.manager || '鏈垎閰?;
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
    html += `  <td>${info.groups.length}涓粍鍒?/td>`;
    html += `  <td><button class="btn btn-sm" onclick="alert('绠＄悊浜鸿鎯呭姛鑳藉紑鍙戜腑')">鏌ョ湅璇︽儏</button></td>`;
    html += `</tr>`;
  });
  html += `  </tbody></table></div></div>`;
  return html;
}

// 瀵煎叆璇勪及鎶ュ憡
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
        } catch(err) { alert("瑙ｆ瀽Excel澶辫触锛? + err.message); }
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
    let target = ASSESSMENTS_DATA.find(a => a.group === groupName && a.month === '7鏈?);
    if (!target) {
      target = { month:'7鏈?, dept:(vals[1]||'').toString().trim(), group:groupName, manager:(vals[2]||'').toString().trim(), level:(vals[3]||'').toString().trim(), totalScore:0, quantScore:0, qualScore:0 };
      ASSESSMENTS_DATA.push(target);
    }
    target.totalScore = parseFloat(vals[4]) || 0;
    target.quantScore = parseFloat(vals[5]) || 0;
    target.qualScore = parseFloat(vals[6]) || 0;
    importCount++;
  }
  saveAssessmentsData();
  renderModule('assessment');
  alert("瀵煎叆瀹屾垚锛佸叡鎴愬姛瀵煎叆 " + importCount + " 鏉¤瘎浼拌褰曘€?);
}

// 鑷敱瀵规瘮寮圭獥
function showCompareModal() {
  let body = `<div style="font-size:13px;line-height:2;">`;
  body += `<p>璇烽€夋嫨瑕佸姣旂殑缁勫埆锛堝彲澶氶€夛級锛?/p>`;
  body += `<div id="compare-checkboxes" style="display:flex;flex-wrap:wrap;gap:8px;margin:12px 0;">`;
  const groups = ASSESSMENTS_DATA.filter(a => a.month === '7鏈? && a.group && !a.month.includes('渚濇嵁'));
  groups.forEach(a => {
    body += `<label style="cursor:pointer;font-size:13px;"><input type="checkbox" class="compare-cb" value="${a.group}" style="margin-right:4px;">${a.group}</label>`;
  });
  body += `</div>`;
  body += `<div id="compare-result" style="margin-top:12px;"></div>`;
  body += `<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px;">`;
  body += `  <button class="btn" onclick="closeModal()">鍙栨秷</button>`;
  body += `  <button class="btn btn-primary" onclick="runAssessmentCompare()">寮€濮嬪姣?/button>`;
  body += `</div>`;
  body += `</div>`;
  showModal('馃攧 鑷敱瀵规瘮妯℃嫙', body);
}

// 鎵ц瀵规瘮
function runAssessmentCompare() {
  const cbs = document.querySelectorAll('.compare-cb:checked');
  if (cbs.length < 2) { alert('璇疯嚦灏戦€夋嫨2涓粍鍒繘琛屽姣?); return; }
  const groups = Array.from(cbs).map(cb => cb.value);
  let html = `<div>`;
  html += `<div style="font-size:14px;font-weight:600;margin-bottom:12px;">瀵规瘮缁撴灉锛堝叡${groups.length}涓粍鍒級</div>`;
  html += `<table class="data-table" style="font-size:12px;">`;
  html += `<thead><tr><th>鎸囨爣</th>${groups.map(g=>`<th>${g}</th>`).join('')}</tr></thead>`;
  html += `<tbody>`;
  const headers = ['鎬诲垎','瀹氶噺寰楀垎','瀹氭€у緱鍒?,'閫傞厤搴?];
  const keys = ['totalScore','quantScore','qualScore','compat'];
  headers.forEach((h,i) => {
    html += `<tr><td><b>${h}</b></td>`;
    groups.forEach(gName => {
      const a = ASSESSMENTS_DATA.find(x => x.group === gName && x.month === '7鏈?);
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
    body += `<p><b>缁勫埆锛?/b>${g.group}锝?b>绠＄悊浜猴細</b>${g.manager}锝?b>绛夌骇锛?/b>${g.level}</p>`;
    body += `<p><b>瀹㈡湇浜烘暟锛?/b>${g.totalStaff}锝?b>绠＄悊+璐ㄥ煿锛?/b>${g.managTrainSum}锝?b>绠＄悊閰嶆瘮锛?/b>${g.managRatio?g.managRatio.toFixed(2):0}:1</p>`;
    body += `<p><b>搴楅摵鏁帮細</b>${g.shopCount}锝?b>鍝佺被锛?/b>${g.categoryCount}锝?b>骞冲彴锛?/b>${g.platformCount}锝?b>鏂板憳宸?3鏈堝唴)锛?/b>${g.new3m}</p>`;
  }
  if(a){
    const bench = getManagementBenchmark(a.level);
    const compat = calcCompatibility(a.totalScore||0, bench);
    const band = getCompatibilityBand(compat);
    body += `<hr><p><b>鎬诲垎锛?/b>${a.totalScore?a.totalScore.toFixed(1):0}锝?b>瀹氶噺锛?/b>${a.quantScore?a.quantScore.toFixed(1):0}锝?b>瀹氭€э細</b>${a.qualScore?a.qualScore.toFixed(1):0}</p>`;
    body += `<p><b>绠＄悊鍩哄噯鍒嗭細</b>${bench}锝?b>閫傞厤搴︼細</b><span style="color:${band.color};font-weight:700;">${compat}%</span> <span style="background:${band.bg};color:${band.color};padding:2px 8px;border-radius:4px;font-size:12px;">${band.label}</span></p>`;
    body += `<p><b>瀹氭€у垎椤癸紙姣忛」0-3鍒嗭級锛?/b>涓氬姟澶嶆潅搴?{a.qual1}锝滆法骞冲彴${a.qual2}锝滃搧鐗屾巿鏉?{a.qual3}锝滄祦鍔ㄦ€?{a.qual4}锝滃煿璁渶姹?{a.qual5}锝滅郴缁熷鏉傚害${a.qual6}锝滃璇夐毦搴?{a.qual7}锝滅獊鍙戜簨浠?{a.qual8}</p>`;
  }
  body += `<hr><div style="display:flex;gap:8px;justify-content:flex-end;">`;
  body += `  <button class="btn btn-sm" onclick="alert('缂栬緫鍔熻兘寮€鍙戜腑')">鉁忥笍 缂栬緫</button>`;
  body += `  <button class="btn btn-sm" style="color:#f5222d;border-color:#f5222d;" onclick="if(confirm('纭畾鍒犻櫎璇ョ粍鍒殑璇勪及璁板綍锛?)){alert('鍒犻櫎鍔熻兘寮€鍙戜腑');}">馃棏锔?鍒犻櫎</button>`;
  body += `</div></div>`;
  showModal(groupName + ' - 闅惧害璇勪及璇︽儏', body);
}


// 瀵煎嚭璇勪及鎶ュ憡
function exportAssessment(){
  try {
    const headers = ['椤圭洰缂栧彿','椤圭洰鍚嶇О','璇勪及鍛ㄦ湡','闅惧害璇勫垎','涓氬姟澶嶆潅搴?,'鏃堕棿鍘嬪姏','娌熼€氳兘鍔?,'鎶€鑳藉尮閰?,'椋庨櫓绛夌骇','璇勪及浜?,'璇勪及鏃ユ湡','澶囨敞'];
    const rows = ASSESSMENTS_DATA.map(a => {
      const p = PROJECTS.find(pp => pp.id === a.projectId);
      return [
        a.projectId, p ? p.name : '', a.period||'', a.score||'', 
        a.busiComplexity||'', a.timePressure||'', a.commAbility||'', 
        a.skillMatch||'', a.riskLevel||'', a.evaluator||'', a.date||'', a.notes||''
      ];
    });
    showExportDialog(headers, rows, `椤圭洰闅惧害璇勪及_${new Date().toISOString().slice(0,10)}`, '椤圭洰闅惧害璇勪及');
  } catch(e) {
    alert('瀵煎嚭澶辫触锛? + e.message);
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

// 鏇存柊鏉冮檺閰嶇疆
function updatePermission(role, module, permission) {
  if (!rolePermissions[role]) {
    rolePermissions[role] = {};
  }
  rolePermissions[role][module] = permission;
  savePermissions();
}

// 涓嬫媺鑿滃崟瑙﹀彂
function updatePermissionFromSelect(sel) {
  const role = sel.dataset.role;
  const key = sel.dataset.key;
  updatePermission(role, key, sel.value);
}

// 鎵归噺璁剧疆锛氫负鏌愪釜瑙掕壊鎵归噺璁剧疆鎵€鏈夋ā鍧楁潈闄?
function batchSetPermission() {
  const role = prompt("璇疯緭鍏ヨ鎵归噺璁剧疆鐨勮鑹插悕绉帮細\n锛堢鐞嗗€欓€夈€佸鏈嶇粍闀裤€佸鏈嶄富绠°€佸鏈嶇粡鐞嗐€佸鏈嶆€荤洃銆佺鐞嗗憳銆侀」鐩紮浼淬€佹妧鏈紮浼淬€侀鎺т紮浼达級");
  if (!role || ROLES.indexOf(role) < 0) { alert("瑙掕壊鍚嶇О涓嶆纭?); return; }
  const val = prompt("璇烽€夋嫨瑕佽缃殑鏉冮檺锛堣緭鍏ユ暟瀛楋級锛歕n1 = 璇诲啓\n2 = 鍙\n3 = 闅愯棌");
  if (!val || (val!=="1" && val!=="2" && val!=="3")) { alert("杈撳叆涓嶆纭?); return; }
  const perm = val==="1" ? "write" : val==="2" ? "read" : "hidden";
  MODULE_KEYS.forEach(m => updatePermission(role, m, perm));
  renderPermissions();
  alert("宸蹭负銆? + role + "銆嶆壒閲忚缃墍鏈夋ā鍧椾负銆? + (perm==="write"?"璇诲啓":perm==="read"?"鍙":"闅愯棌") + "銆?);
}

// 瀵煎叆鏉冮檺閰嶇疆
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
        // 楠岃瘉缁撴瀯
        let valid = true;
        ROLES.forEach(r => {
          if (!data[r]) valid = false;
        });
        if (!valid) { alert("閰嶇疆鏂囦欢鏍煎紡涓嶆纭紝缂哄皯閮ㄥ垎瑙掕壊鏁版嵁"); return; }
        rolePermissions = data;
        savePermissions();
        renderPermissions();
        alert("鏉冮檺閰嶇疆瀵煎叆鎴愬姛锛?);
      } catch(ex) {
        alert("鏂囦欢瑙ｆ瀽澶辫触锛? + ex.message);
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// 鎭㈠榛樿鏉冮檺
function resetPermissions() {
  if (confirm("纭畾瑕佹仮澶嶉粯璁ゆ潈闄愰厤缃悧锛熷綋鍓嶈嚜瀹氫箟閰嶇疆灏嗕涪澶便€?)) {
    rolePermissions = {...DEFAULT_PERMISSIONS};
    savePermissions();
    renderPermissions();
    alert("宸叉仮澶嶉粯璁ゆ潈闄愰厤缃?);
  }
}

// 瀵煎嚭鏉冮檺閰嶇疆
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
// ===== 瀹㈡湇缁╂晥鐪嬫澘 =====
// ===== 缁╂晥璁＄畻杈呭姪鍑芥暟 =====

// 璁＄畻缁╂晥鍩烘暟锛堣瘯鐢ㄦ湡1400锛岃浆姝?700锛?
function getBaseSalary(status) {
  return status === '璇曠敤鏈? ? 1400 : 1700;
}

// 璁＄畻缁╂晥鍒嗘暟锛堝熀浜庢潈閲嶉厤缃紝80%~120%锛?
function calcPerformanceScore(agent, month) {
  var weights = PERFORMANCE_WEIGHTS[month];
  if (!weights) return 1.0;
  var type = agent.agentType;
  var w = weights[type];
  if (!w) return 1.0;
  
  // 璁＄畻鍚勯」鎸囨爣寰楀垎锛堟爣鍑嗗寲鍒?~1锛屽啀鏄犲皠鍒?.8~1.2锛?
  var score = 0;
  var totalWeight = 0;
  var monthAgents = AGENT_PERFORMANCE.filter(a => a.month === month);
  
  if (type === '鍞墠' || type === '缁煎悎') {
    if (w.salesAmount && agent.salesAmount > 0) {
      var salesPool = monthAgents.filter(a => a.agentType === '鍞墠' || a.agentType === '缁煎悎');
      var salesValues = salesPool.map(a => a.salesAmount || 0).filter(v => v > 0);
      if (salesValues.length > 0) {
        var maxSales = Math.max(...salesValues);
        var salesScore = (agent.salesAmount / maxSales) * 0.4 + 0.8;
        score += salesScore * (w.salesAmount / 100);
        totalWeight += w.salesAmount;
      }
    }
    if (w.conversionRate && agent.conversionRate > 0) {
      var convValues = monthAgents.filter(a => a.agentType === '鍞墠' || a.agentType === '缁煎悎').map(a => a.conversionRate || 0).filter(v => v > 0);
      if (convValues.length > 0) {
        var maxConv = Math.max(...convValues);
        var convScore = (agent.conversionRate / maxConv) * 0.4 + 0.8;
        score += convScore * (w.conversionRate / 100);
        totalWeight += w.conversionRate;
      }
    }
  }
  
  if (type === '鍞悗' || type === '缁煎悎') {
    if (w.workVolume && agent.workVolume > 0) {
      var workPool = monthAgents.filter(a => a.agentType === '鍞悗' || a.agentType === '缁煎悎');
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
  
  // 閫氱敤鎸囨爣
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
  
  // 褰掍竴鍖?
  if (totalWeight > 0) {
    score = score / (totalWeight / 100);
  }
  
  // 闄愬埗80%~120%
  return Math.max(0.8, Math.min(1.2, score));
}

// 璁＄畻鐡滃垎閲戦
function calcShareAmount(agent, month) {
  var group = agent.group || '';
  var loadData = GROUP_LOAD_RATIO.find(g => g.group === group && g.month === month);
  var loadRatio = loadData ? (parseFloat(loadData.loadRatio) || 1.0) : 1.0;
  
  // 璁＄畻缁勬€诲熀鏁?
  var groupAgents = AGENT_PERFORMANCE.filter(a => a.group === group && a.month === month);
  var totalBase = groupAgents.reduce((s, a) => s + getBaseSalary(a.status), 0);
  var totalPool = totalBase * loadRatio;
  
  // 鎸夌被鍨嬪垎閰?
  if (agent.agentType === '鍞墠') {
    var totalSales = groupAgents.filter(a => a.agentType === '鍞墠').reduce((s, a) => s + a.salesAmount, 0);
    if (totalSales === 0) return 0;
    return (agent.salesAmount / totalSales) * (totalPool * 0.6);  // 鍞墠鍒?0%姹犲瓙
  } else if (agent.agentType === '鍞悗') {
    var totalWork = groupAgents.filter(a => a.agentType === '鍞悗').reduce((s, a) => s + a.workVolume, 0);
    if (totalWork === 0) return 0;
    return (agent.workVolume / totalWork) * (totalPool * 0.6);  // 鍞悗鍒?0%姹犲瓙
  } else {
    // 缁煎悎锛氭寜閿€鍞+宸ヤ綔閲忕患鍚堝崰姣?
    var totalSalesAll = groupAgents.reduce((s, a) => s + a.salesAmount, 0);
    var totalWorkAll = groupAgents.reduce((s, a) => s + a.workVolume, 0);
    var share = 0;
    if (totalSalesAll > 0) share += (agent.salesAmount / totalSalesAll) * (totalPool * 0.3);
    if (totalWorkAll > 0) share += (agent.workVolume / totalWorkAll) * (totalPool * 0.3);
    return share;
  }
}

// 璁＄畻鏈€缁堢哗鏁?
function calcFinalPerformance(agent, month) {
  var score = calcPerformanceScore(agent, month);
  var share = calcShareAmount(agent, month);
  return share * score + agent.reward - agent.penalty;
}

// ===== 瀹㈡湇缁╂晥鐪嬫澘锛堥噸鍐欙級=====
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
  
  var html = `<div class="page-header"><h2>馃搱 瀹㈡湇缁╂晥鐪嬫澘</h2></div>`;

  // 绛涢€夋爮锛堜娇鐢ㄧ郴缁熺粺涓€鐨?filter-bar-v4 瑙勮寖锛?
  html += `<div class="filter-bar-v4">`;
  html += `<div class="filter-row-v4">`;

  // 绛涢€夐」 + 鏍囩
  html += `<div style="display:flex;align-items:center;gap:6px;">`;
  html += `<span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">椤圭洰</span>`;
  html += `<select id="pf-project" class="fb-select"><option value="all">鍏ㄩ儴椤圭洰</option>${PROJECTS.map(p=>`<option value="${p.id}" ${projectFilter===p.id?'selected':''}>${p.name}</option>`).join('')}</select>`;
  html += `</div>`;

  html += `<div style="display:flex;align-items:center;gap:6px;">`;
  html += `<span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">鏈堜唤</span>`;
  html += `<select id="pf-month" class="fb-select"><option value="2026-05" ${monthFilter==='2026-05'?'selected':''}>2026-05</option><option value="2026-04" ${monthFilter==='2026-04'?'selected':''}>2026-04</option></select>`;
  html += `</div>`;

  html += `<div style="display:flex;align-items:center;gap:6px;">`;
  html += `<span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">绫诲瀷</span>`;
  html += `<select id="pf-type" class="fb-select"><option value="all">鍏ㄩ儴绫诲瀷</option><option value="鍞墠" ${typeFilter==='鍞墠'?'selected':''}>鍞墠</option><option value="鍞悗" ${typeFilter==='鍞悗'?'selected':''}>鍞悗</option><option value="缁煎悎" ${typeFilter==='缁煎悎'?'selected':''}>缁煎悎</option></select>`;
  html += `</div>`;

  html += `<div style="display:flex;align-items:center;gap:6px;">`;
  html += `<span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">缁勫埆</span>`;
  html += `<select id="pf-group" class="fb-select"><option value="all">鍏ㄩ儴缁勫埆</option>${[...new Set(AGENT_PERFORMANCE.map(a=>a.group))].map(g=>`<option value="${g}" ${groupFilter===g?'selected':''}>${g}</option>`).join('')}</select>`;
  html += `</div>`;

  // 鎿嶄綔鎸夐挳锛堝彸渚у榻愶級
  html += `<div style="margin-left:auto;display:flex;gap:8px;align-items:center;">`;
  html += `<button class="btn btn-sm btn-primary" onclick="renderModule('performance')">馃攳 鏌ヨ</button>`;
  html += `<button class="btn btn-sm" onclick="importPerformance()">馃摜 瀵煎叆</button>`;
  html += `<button class="btn btn-sm" onclick="exportPerformance()">馃摛 瀵煎嚭</button>`;
  html += `<button class="btn btn-sm btn-primary" onclick="addAgentPerformance()">鉃?鏂板</button>`;
  html += `</div>`;

  html += `</div></div>`;
  
  // 缁╂晥鎬绘睜姒傝
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
  html += `<div class="metric-card metric-card-kpi"><div class="metric-value">${data.length}</div><div class="metric-label">鍙傝瘎鍧愬腑鏁?/div></div>`;
  html += `<div class="metric-card metric-card-kpi"><div class="metric-value">楼${totalBase.toLocaleString()}</div><div class="metric-label">缁╂晥鍩烘暟鎬诲拰</div></div>`;
  html += `<div class="metric-card metric-card-kpi"><div class="metric-value">${(totalBase>0? (totalPool/totalBase*100).toFixed(0)+'%':'-')}</div><div class="metric-label">骞冲潎璐熻嵎姣?/div></div>`;
  html += `<div class="metric-card metric-card-kpi"><div class="metric-value">楼${totalPool.toLocaleString()}</div><div class="metric-label">缁╂晥鎬绘睜</div></div>`;
  html += `</div>`;
  
  // 缁勫埆璐熻嵎姣旈厤缃紙鍙姌鍙狅級
  html += `<div class="card"><div class="card-title" style="cursor:pointer;" onclick="toggleLoadRatioConfig()">馃搳 缁勫埆璐熻嵎姣旈厤缃紙鐐瑰嚮灞曞紑/鏀惰捣锛?/div>`;
  html += `<div id="load-ratio-config" style="display:none;margin-top:12px;">`;
  Object.keys(groups).forEach(g => {
    html += `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--c-bg);border-radius:6px;">`;
    html += `<span style="font-size:13px;color:var(--c-text);">${g}锛?/span>`;
    html += `<input type="number" step="0.01" value="${groups[g].loadRatio}" style="width:60px;padding:4px 6px;border:1px solid var(--c-border);border-radius:4px;" onchange="updateGroupLoadRatio('${g}','${monthFilter}',this.value)">`;
    html += `<span style="font-size:12px;color:var(--c-text-3);">鍊?/span>`;
    html += `</div>`;
  });
  html += `</div></div>`;
  
  // 鎸囨爣鏉冮噸閰嶇疆
  var weights = PERFORMANCE_WEIGHTS[monthFilter] || {};
  html += `<div class="card"><div class="card-title" style="cursor:pointer;" onclick="toggleWeightConfig()">馃搳 鎸囨爣鏉冮噸閰嶇疆锛堢偣鍑诲睍寮€/鏀惰捣锛?/div>`;
  html += `<div id="weight-config" style="display:none;margin-top:12px;">`;
  ['鍞墠','鍞悗','缁煎悎'].forEach(type => {
    var w = weights[type] || {};
    html += `<div style="margin-bottom:12px;padding:10px;background:var(--c-bg);border-radius:6px;">`;
    html += `<div style="font-size:13px;font-weight:600;color:var(--c-text);margin-bottom:8px;">${type}瀹㈡湇</div>`;
    html += `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">`;
    if (type === '鍞墠' || type === '缁煎悎') {
      html += `閿€鍞鏉冮噸锛?input type="number" value="${w.salesAmount||0}" style="width:50px;" onchange="updateWeight('${monthFilter}','${type}','salesAmount',this.value)">% `;
      html += `杞寲鐜囨潈閲嶏細<input type="number" value="${w.conversionRate||0}" style="width:50px;" onchange="updateWeight('${monthFilter}','${type}','conversionRate',this.value)">% `;
    }
    if (type === '鍞悗' || type === '缁煎悎') {
      html += `宸ヤ綔閲忔潈閲嶏細<input type="number" value="${w.workVolume||0}" style="width:50px;" onchange="updateWeight('${monthFilter}','${type}','workVolume',this.value)">% `;
      html += `瑙ｅ喅鐜囨潈閲嶏細<input type="number" value="${w.firstResolveRate||0}" style="width:50px;" onchange="updateWeight('${monthFilter}','${type}','firstResolveRate',this.value)">% `;
    }
    html += `鍝嶅簲鏃堕棿鏉冮噸锛?input type="number" value="${w.responseTime||0}" style="width:50px;" onchange="updateWeight('${monthFilter}','${type}','responseTime',this.value)">% `;
    html += `婊℃剰搴︽潈閲嶏細<input type="number" value="${w.csat||0}" style="width:50px;" onchange="updateWeight('${monthFilter}','${type}','csat',this.value)">%`;
    html += `</div></div>`;
  });
  html += `<button class="btn btn-primary" onclick="savePerformanceWeights()" style="margin-top:8px;">淇濆瓨鏉冮噸閰嶇疆</button>`;
  html += `</div></div>`;
  
  // 鍧愬腑缁╂晥鏄庣粏琛?
  html += `<div class="card"><div class="card-title">鍧愬腑缁╂晥鏄庣粏锛?{data.length}浜猴級</div><table class="data-table">`;
  html += `<thead><tr><th>缁勫埆</th><th>椤圭洰</th><th>鍧愬腑</th><th>绫诲瀷</th><th>鐘舵€?/th><th>鍩烘暟</th><th>閿€鍞</th><th>杞寲鐜?/th><th>宸ヤ綔閲?/th><th>瑙ｅ喅鐜?/th><th>鍝嶅簲鏃堕暱</th><th>CSAT</th><th>缁╂晥鍒嗘暟</th><th>鐡滃垎閲戦</th><th>濂?鎯?/th><th>鏈€缁堢哗鏁?/th><th>鎿嶄綔</th></tr></thead><tbody>`;
  
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
    html += `<td><select value="${a.agentType || '鍞墠'}" onchange="updateAgentType(${a.id},this.value)" style="padding:2px 4px;border:1px solid var(--c-border);border-radius:4px;"><option value="鍞墠" ${a.agentType==='鍞墠'?'selected':''}>鍞墠</option><option value="鍞悗" ${a.agentType==='鍞悗'?'selected':''}>鍞悗</option><option value="缁煎悎" ${a.agentType==='缁煎悎'?'selected':''}>缁煎悎</option></select></td>`;
    html += `<td>${a.status || '杞'}</td>`;
    html += `<td>楼${base}</td>`;
    html += `<td>${a.salesAmount > 0 ? '楼'+a.salesAmount.toLocaleString():'-'}</td>`;
    html += `<td>${a.conversionRate > 0 ? a.conversionRate+'%':'-'}</td>`;
    html += `<td>${a.workVolume > 0 ? a.workVolume:'-'}</td>`;
    html += `<td>${a.firstResolveRate > 0 ? a.firstResolveRate+'%':'-'}</td>`;
    html += `<td style="color:${a.responseTime > 120 ? 'var(--c-red)':'var(--c-green)'}">${a.responseTime || '-'}s</td>`;
    html += `<td style="color:${a.csat >= 4.5 ? 'var(--c-green)':'var(--c-red)'}">${a.csat || '-'}</td>`;
    var scorePct = (score * 100).toFixed(0);
    html += `<td style="color:${score >= 1.0 ? 'var(--c-green)':'var(--c-red)'}">${scorePct}%</td>`;
    html += `<td>楼${isNaN(share) ? '0' : share.toFixed(0)}</td>`;
    html += `<td><div style="display:flex;gap:4px;align-items:center;"><input type="number" value="${a.reward || 0}" style="width:56px;padding:3px 6px;border:1px solid var(--c-border);border-radius:4px;font-size:13px;" onchange="updateAgentReward(${a.id},this.value)"><span style="color:var(--c-text-3);font-size:12px;">/</span><input type="number" value="${a.penalty || 0}" style="width:56px;padding:3px 6px;border:1px solid var(--c-border);border-radius:4px;font-size:13px;" onchange="updateAgentPenalty(${a.id},this.value)"></div></td>`;
    html += `<td style="font-weight:600;color:var(--c-primary);">楼${(isNaN(final) ? '0' : final.toFixed(0))}</td>`;
    html += `<td><button class="btn btn-sm" onclick="editAgentPerformance(${a.id})">缂栬緫</button> <button class="btn btn-sm btn-danger" onclick="deleteAgentPerformance(${a.id})">鍒犻櫎</button></td>`;
    html += `</tr>`;
  });
  
  html += `</tbody></table></div>`;
  
  // 璁＄畻璇存槑
  html += `<div style="margin-top:16px;padding:12px;background:var(--c-bg);border-radius:8px;font-size:12px;color:var(--c-text-3);line-height:1.8;">`;
  html += `<div style="font-weight:600;margin-bottom:6px;">馃搵 璁＄畻閫昏緫璇存槑锛?/div>`;
  html += `<div>1. 缁╂晥鍩烘暟锛氳瘯鐢ㄦ湡楼1400锛岃浆姝Ｂ?700</div>`;
  html += `<div>2. 缁╂晥鎬绘睜 = 缁勫埆鎵€鏈変汉鍩烘暟鎬诲拰 脳 缁勫埆璐熻嵎姣?/div>`;
  html += `<div>3. 缁╂晥鍒嗘暟锛氭寜鎸囨爣鏉冮噸璁＄畻锛岃寖鍥?0%~120%</div>`;
  html += `<div>4. 鍞墠鐡滃垎锛氭寜閿€鍞鍗犳瘮锛涘敭鍚庣摐鍒嗭細鎸夊伐浣滈噺鍗犳瘮锛涚患鍚堬細鎸夐攢鍞?宸ヤ綔閲忕患鍚堝崰姣?/div>`;
  html += `<div>5. 鏈€缁堢哗鏁?= 鐡滃垎閲戦 脳 缁╂晥鍒嗘暟 + 濂栧姳 - 鎯╃綒</div>`;
  html += `</div>`;
  
  return html;
}

// 鍒囨崲璐熻嵎姣旈厤缃樉绀?闅愯棌
function toggleLoadRatioConfig() {
  var el = document.getElementById('load-ratio-config');
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}

// 鏇存柊缁勫埆璐熻嵎姣?
function updateGroupLoadRatio(group, month, value) {
  var ratio = parseFloat(value);
  if (isNaN(ratio) || ratio < 0) { alert('璐熻嵎姣斿繀椤绘槸姝ｆ暟'); return; }
  var idx = GROUP_LOAD_RATIO.findIndex(g => g.group === group && g.month === month);
  if (idx >= 0) {
    GROUP_LOAD_RATIO[idx].loadRatio = ratio;
  } else {
    GROUP_LOAD_RATIO.push({group:group, month:month, loadRatio:ratio});
  }
  saveAgentPerformance();
  renderModule('performance');
}

// 鏇存柊鎸囨爣鏉冮噸
function updateWeight(month, type, indicator, value) {
  if (!PERFORMANCE_WEIGHTS[month]) PERFORMANCE_WEIGHTS[month] = {};
  if (!PERFORMANCE_WEIGHTS[month][type]) PERFORMANCE_WEIGHTS[month][type] = {};
  PERFORMANCE_WEIGHTS[month][type][indicator] = parseInt(value) || 0;
}

// 淇濆瓨鏉冮噸閰嶇疆
function savePerformanceWeights() {
  saveAgentPerformance();
  alert('鉁?鏉冮噸閰嶇疆宸蹭繚瀛?);
  renderModule('performance');
}

// 鍒囨崲鏉冮噸閰嶇疆鏄剧ず/闅愯棌
function toggleWeightConfig() {
  var el = document.getElementById('weight-config');
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}

// 鏇存柊瀹㈡湇绫诲瀷
function updateAgentType(id, newType) {
  var agent = AGENT_PERFORMANCE.find(a => a.id === id);
  if (agent) {
    agent.agentType = newType;
    saveAgentPerformance();
    renderModule('performance');
  }
}

// 鏇存柊濂栧姳
function updateAgentReward(id, value) {
  var agent = AGENT_PERFORMANCE.find(a => a.id === id);
  if (agent) {
    agent.reward = parseFloat(value) || 0;
    saveAgentPerformance();
  }
}

// 鏇存柊鎯╃綒
function updateAgentPenalty(id, value) {
  var agent = AGENT_PERFORMANCE.find(a => a.id === id);
  if (agent) {
    agent.penalty = parseFloat(value) || 0;
    saveAgentPerformance();
  }
}

// 鏂板鍧愬腑缁╂晥鏁版嵁
function addAgentPerformance() {
  var month = document.getElementById('pf-month')?.value || '2026-05';
  var newId = AGENT_PERFORMANCE.length > 0 ? Math.max(...AGENT_PERFORMANCE.map(a => a.id)) + 1 : 1;
  var newAgent = {
    id: newId,
    projectId: PROJECTS.length > 0 ? PROJECTS[0].id : '',
    agentName: '鏂板潗甯?,
    group: 'A缁?,
    status: '杞',
    agentType: '鍞墠',
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

// 缂栬緫鍧愬腑缁╂晥鏁版嵁
function editAgentPerformance(id) {
  var agent = AGENT_PERFORMANCE.find(a => a.id === id);
  if (!agent) return;
  
  var html = `<div style="padding:16px;">`;
  html += `<div style="margin-bottom:12px;"><label>鍧愬腑濮撳悕锛?/label><input type="text" id="edit-agent-name" value="${agent.agentName}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>缁勫埆锛?/label><input type="text" id="edit-agent-group" value="${agent.group}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>鐘舵€侊細</label><select id="edit-agent-status" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"><option value="璇曠敤鏈? ${agent.status==='璇曠敤鏈??'selected':''}>璇曠敤鏈?/option><option value="杞" ${agent.status==='杞'?'selected':''}>杞</option></select></div>`;
  html += `<div style="margin-bottom:12px;"><label>瀹㈡湇绫诲瀷锛?/label><select id="edit-agent-type" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"><option value="鍞墠" ${agent.agentType==='鍞墠'?'selected':''}>鍞墠</option><option value="鍞悗" ${agent.agentType==='鍞悗'?'selected':''}>鍞悗</option><option value="缁煎悎" ${agent.agentType==='缁煎悎'?'selected':''}>缁煎悎</option></select></div>`;
  html += `<div style="margin-bottom:12px;"><label>閿€鍞锛?/label><input type="number" id="edit-agent-sales" value="${agent.salesAmount}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>杞寲鐜?%)锛?/label><input type="number" step="0.1" id="edit-agent-conv" value="${agent.conversionRate}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>宸ヤ綔閲忥細</label><input type="number" id="edit-agent-work" value="${agent.workVolume}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>涓€娆℃€цВ鍐崇巼(%)锛?/label><input type="number" step="0.1" id="edit-agent-resolve" value="${agent.firstResolveRate}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>骞冲潎鍝嶅簲鏃堕暱(s)锛?/label><input type="number" id="edit-agent-resp" value="${agent.responseTime}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>CSAT锛?/label><input type="number" step="0.1" id="edit-agent-csat" value="${agent.csat}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>鏈嶅姟閲忥細</label><input type="number" id="edit-agent-sv" value="${agent.serviceVolume}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>濂栧姳(楼)锛?/label><input type="number" id="edit-agent-reward" value="${agent.reward}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="margin-bottom:12px;"><label>鎯╃綒(楼)锛?/label><input type="number" id="edit-agent-penalty" value="${agent.penalty}" style="padding:6px 10px;border:1px solid var(--c-border);border-radius:6px;width:100%;box-sizing:border-box;"></div>`;
  html += `<div style="display:flex;gap:8px;justify-content:flex-end;">`;
  html += `<button class="btn" onclick="closeModal()">鍙栨秷</button>`;
  html += `<button class="btn btn-primary" onclick="saveAgentEdit(${agent.id})">淇濆瓨</button>`;
  html += `</div></div>`;
  
  showModal('缂栬緫鍧愬腑缁╂晥', html);
}

// 淇濆瓨缂栬緫
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

// 鍒犻櫎鍧愬腑缁╂晥鏁版嵁
function deleteAgentPerformance(id) {
  if (!confirm('纭畾鍒犻櫎璇ュ潗甯殑缁╂晥鏁版嵁锛?)) return;
  var idx = AGENT_PERFORMANCE.findIndex(a => a.id === id);
  if (idx >= 0) {
    AGENT_PERFORMANCE.splice(idx, 1);
    saveAgentPerformance();
    renderModule('performance');
  }
}

// 瀵煎叆缁╂晥鏁版嵁
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
        } catch(err) { alert("瑙ｆ瀽Excel澶辫触锛? + err.message); }
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
  if (!rows || rows.length < 2) { alert("鏂囦欢鍐呭涓虹┖鎴栦粎鏈夎〃澶?); return; }
  for (var i = 1; i < rows.length; i++) {
    if (!rows[i] || rows[i].length < 2) continue;
    var vals = rows[i];
    var newId = AGENT_PERFORMANCE.length > 0 ? Math.max(...AGENT_PERFORMANCE.map(function(a){return a.id;})) + 1 : 1;
    var month = document.getElementById('pf-month') ? document.getElementById('pf-month').value : '2026-05';
    var agent = {
      id: newId + i,
      projectId: String(vals[0] || ''),
      agentName: String(vals[1] || ''),
      group: String(vals[2] || 'A缁?),
      status: String(vals[3] || '杞'),
      agentType: String(vals[4] || '鍞墠'),
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
  alert("瀵煎叆鎴愬姛锛佸叡瀵煎叆 " + (rows.length - 1) + " 鏉℃暟鎹?);
}

// 瀵煎嚭缁╂晥鏁版嵁锛堥噸鍐欙級
function exportPerformance() {
  var monthFilter = document.getElementById('pf-month')?.value || '2026-05';
  var data = AGENT_PERFORMANCE.filter(a => a.month === monthFilter);
  var headers = ['缁勫埆','椤圭洰','鍧愬腑濮撳悕','瀹㈡湇绫诲瀷','鐘舵€?,'缁╂晥鍩烘暟','閿€鍞','杞寲鐜?%)','宸ヤ綔閲?,'瑙ｅ喅鐜?%)','鍝嶅簲鏃堕暱(s)','CSAT','鏈嶅姟閲?,'缁╂晥鍒嗘暟','鐡滃垎閲戦','濂栧姳','鎯╃綒','鏈€缁堢哗鏁?];
  var rows = data.map(a => {
    var p = PROJECTS.find(pp => pp.id === a.projectId);
    var base = getBaseSalary(a.status);
    var score = calcPerformanceScore(a, monthFilter);
    var share = calcShareAmount(a, monthFilter);
    var final = calcFinalPerformance(a, monthFilter);
    return [a.group, p?p.name:a.projectId, a.agentName, a.agentType, a.status, '楼'+base, a.salesAmount, a.conversionRate, a.workVolume, a.firstResolveRate, a.responseTime, a.csat, a.serviceVolume, (score*100).toFixed(0)+'%', '楼'+share.toFixed(0), '楼'+a.reward, '楼'+a.penalty, '楼'+final.toFixed(0)];
  });
  showExportDialog(headers, rows, `瀹㈡湇缁╂晥_${monthFilter}`, '瀹㈡湇缁╂晥鐪嬫澘');
}


// ===== 椤圭洰椋庨櫓棰勮姹?=====// ===== 椤圭洰椋庨櫓棰勮姹?=====
function renderRisk(){
  let html = `<div class="page-header"><h2>鈿狅笍 椤圭洰椋庨櫓棰勮姹?/h2>
    <button class="btn btn-primary" onclick="exportRisk()">馃摛 瀵煎嚭</button>
  </div>`;

  const groups = [
    {key:'鍋ュ悍鐘舵€?, icon:'馃彞', color:'#ef4444', bg:'#fef2f2', desc:'鍋ュ悍鐘舵€佽繛缁紓甯?},
    {key:'SLA瓒呮爣', icon:'鈴憋笍', color:'#f59e0b', bg:'#fffbeb', desc:'鏈嶅姟绛夌骇鍗忚瓒呮爣'},
    {key:'鎴愭湰瓒呮敮', icon:'馃捀', color:'#ef4444', bg:'#fef2f2', desc:'鎴愭湰瓒呭嚭棰勭畻鎺у埗'},
    {key:'婊℃剰搴︿笅婊?, icon:'馃搲', color:'#f59e0b', bg:'#fffbeb', desc:'瀹㈡埛婊℃剰搴︿笅闄?}
  ];

  html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">`;
  groups.forEach(g => {
    const items = RISK_ALERTS.filter(r => r.riskType === g.key);
    const high = items.filter(r => r.severity.includes('馃敶')).length;
    const mid = items.filter(r => r.severity.includes('馃煛')).length;
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
          <div style="font-size:11px;color:#94a3b8;">涓」鐩?/div>
        </div>
      </div>
      <div style="padding:0 16px 12px;display:flex;gap:8px;flex-wrap:wrap;">
        ${high > 0 ? `<span style="font-size:11px;color:#ef4444;background:#fef2f2;padding:2px 8px;border-radius:4px;font-weight:500;">馃敶 楂橀闄?${high}</span>` : ''}
        ${mid > 0 ? `<span style="font-size:11px;color:#f59e0b;background:#fffbeb;padding:2px 8px;border-radius:4px;font-weight:500;">馃煛 涓闄?${mid}</span>` : ''}
        ${items.length === 0 ? '<span style="font-size:11px;color:#22c55e;background:#f0fdf4;padding:2px 8px;border-radius:4px;font-weight:500;">鉁?鏃犻闄?/span>' : ''}
      </div>
      <div class="risk-detail" style="max-height:0;overflow:hidden;transition:max-height 0.35s ease;">
        <div style="padding:0 16px 16px;">
          ${items.length > 0 ? `<table class="data-table" style="font-size:12px;">
            <thead><tr><th>椤圭洰</th><th>涓ラ噸绋嬪害</th><th>瑙﹀彂鎸囨爣</th><th>鐘舵€?/th></tr></thead>
            <tbody>
              ${items.map(r => `<tr>
                <td><a href="#" class="table-link" onclick="event.stopPropagation();showProjectDetail('${r.projectId}');return false;">${r.projectName}</a></td>
                <td>${r.severity}</td>
                <td>${r.indicator}</td>
                <td><span class="badge ${r.status==='鏈鐞??'status-red':r.status==='澶勭悊涓??'status-yellow':'status-green'}">${r.status}</span></td>
              </tr>`).join('')}
            </tbody>
          </table>` : '<div style="text-align:center;color:#94a3b8;padding:16px;font-size:13px;">鏆傛棤椋庨櫓椤圭洰</div>'}
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

// ===== 涓汉鍩虹璁剧疆 =====
function renderProfile(){
  const rowStyle = 'display:flex;align-items:center;padding:14px 0;border-bottom:1px solid #f1f5f9;';
  const labelStyle = 'width:90px;font-size:14px;color:#334155;flex-shrink:0;';
  const valueStyle = 'flex:1;font-size:14px;color:#1e293b;';
  const linkStyle = 'color:#3b82f6;font-size:13px;cursor:pointer;margin-left:12px;flex-shrink:0;transition:opacity .2s;';
  const linkHover = `onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'"`;

  const u = currentUser || {};
  const userInDb = USERS.find(x => x.id === u.id) || {};
  const avatar = u.avatar || userInDb.avatar || "";
  const nickname = u.nickname || userInDb.nickname || u.name || "鏈缃?;
  const position = u.position || userInDb.position || u.role || "鏈缃?;
  const birthday = u.birthday || userInDb.birthday || "";
  const phone = u.phone || userInDb.phone || "--";
  const email = u.email || userInDb.email || "--";
  const wechatBound = u.wechatBound || userInDb.wechatBound || true;
  const keepStatus = u.keepStatus || userInDb.keepStatus || false;

  let html = `<div class="page-header"><h2>馃懁 涓汉鍩虹璁剧疆</h2></div>`;

  html += `<div style="display:flex;gap:20px;flex-wrap:wrap;">`;

  // 宸︿晶鍖哄煙
  html += `<div style="flex:1;min-width:360px;max-width:680px;">`;

  // 鍩虹淇℃伅鍗＄墖
  html += `<div class="card profile-card">
    <div class="profile-card-title">
      <span class="profile-card-icon">馃摑</span>鍩虹淇℃伅
    </div>

    <!-- 涓汉澶村儚 -->
    <div style="${rowStyle}">
      <div style="${labelStyle}" class="profile-field-label">涓汉澶村儚</div>
      <div style="display:flex;align-items:center;flex:1;gap:16px;">
        <div id="profile-avatar-preview" class="profile-avatar-preview"
          style="${avatar ? 'background-image:url('+avatar+');color:transparent;' : ''}">
          ${avatar ? '' : '馃懁'}
        </div>
        <div>
          <span style="${linkStyle}" ${linkHover} onclick="document.getElementById('profile-avatar-input').click()">鏇存崲澶村儚</span>
          <input type="file" id="profile-avatar-input" style="display:none;" accept="image/jpeg,image/jpg,image/png,image/gif" onchange="handleAvatarUpload(this)">
          <div style="font-size:12px;color:#94a3b8;margin-top:4px;">鏀寔 jpg銆乸ng銆乬if锛屾渶澶?5M</div>
        </div>
      </div>
    </div>

    <!-- 鏄电О -->
    <div style="${rowStyle}" id="profile-nickname-row">
      <div style="${labelStyle}" class="profile-field-label">鏄电О</div>
      <div style="${valueStyle}" id="profile-nickname-value">${nickname}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfileNickname()">淇敼</span>
    </div>

    <!-- 鐢熸棩 -->
    <div style="${rowStyle}" id="profile-birthday-row">
      <div style="${labelStyle}" class="profile-field-label">鐢熸棩</div>
      <div style="${valueStyle}" id="profile-birthday-value">${birthday || "--"}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfileBirthday()">淇敼</span>
    </div>

    <!-- 鑱屼綅 -->
    <div style="${rowStyle}" id="profile-position-row">
      <div style="${labelStyle}" class="profile-field-label">鑱屼綅</div>
      <div style="${valueStyle}" id="profile-position-value">${position}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfilePosition()">淇敼</span>
    </div>

    <!-- 鍝佺墝 -->
    <div style="${rowStyle}" id="profile-brand-row">
      <div style="${labelStyle}" class="profile-field-label">鍝佺墝</div>
      <div style="${valueStyle}" id="profile-brand-value">${u.brand || userInDb.brand || "Chanseen CloudHub"}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfileBrand()">淇敼</span>
    </div>

    <!-- 鎵嬫満鍙?-->
    <div style="${rowStyle}" id="profile-phone-row">
      <div style="${labelStyle}" class="profile-field-label">鎵嬫満鍙?/div>
      <div style="${valueStyle}" id="profile-phone-value">${phone}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfilePhone()">淇敼</span>
    </div>

    <!-- 閭 -->
    <div style="${rowStyle}" id="profile-email-row">
      <div style="${labelStyle}" class="profile-field-label">閭</div>
      <div style="${valueStyle}" id="profile-email-value">${email}</div>
      <span style="${linkStyle}" ${linkHover} onclick="editProfileEmail()">淇敼</span>
    </div>

    <!-- 寰俊 -->
    <div style="${rowStyle}">
      <div style="${labelStyle}" class="profile-field-label">寰俊</div>
      <div style="${valueStyle}">${wechatBound ? '宸茬粦瀹? : '鏈粦瀹?}</div>
      <span style="${linkStyle}" ${linkHover} onclick="toggleWechatBind()">${wechatBound ? '瑙ｇ粦' : '缁戝畾'}</span>
    </div>

    <!-- 鐧诲綍瀵嗙爜 -->
    <div style="${rowStyle}border-bottom:none;">
      <div style="${labelStyle}" class="profile-field-label">鐧诲綍瀵嗙爜</div>
      <div style="${valueStyle}">********</div>
      <span style="${linkStyle}" ${linkHover} onclick="showChangePasswordModal()">淇敼</span>
    </div>
  </div>`;

  // 鏇村鎿嶄綔鍗＄墖
  html += `<div class="card profile-card" style="margin-top:16px;">
    <div class="profile-card-title">
      <span class="profile-card-icon">鈿欙笍</span>鏇村鎿嶄綔
    </div>

    <!-- 绂诲紑鍥㈤槦 -->
    <div style="${rowStyle}border-bottom:none;flex-direction:column;align-items:flex-start;gap:10px;padding-bottom:0;">
      <div style="display:flex;align-items:center;gap:8px;width:100%;">
        <div style="${labelStyle}" class="profile-field-label">绂诲紑鍥㈤槦</div>
        <div style="flex:1;"></div>
      </div>
      <div style="font-size:13px;color:#ef4444;background:#fef2f2;padding:10px 14px;border-radius:6px;width:100%;border:1px solid #fecaca;">
        鈿狅笍 涓€鏃︾寮€鍥㈤槦锛屾偍鍦ㄦ鍥㈤槦鐨勪竴鍒囪褰曞皢鏃犳硶鏌ョ湅锛?
      </div>
      <div style="display:flex;gap:12px;margin-top:4px;">
        <button class="btn profile-btn-danger" onclick="leaveTeam()">绂诲紑鍥㈤槦</button>
        <button class="btn profile-btn-plain" onclick="alert('绉讳氦宸ヤ綔鍔熻兘璇疯仈绯荤鐞嗗憳澶勭悊')">绉讳氦宸ヤ綔</button>
      </div>
    </div>
  </div>`;

  // 澶囦唤涓庢仮澶嶅崱鐗?
  html += `<div class="card profile-card" style="margin-top:16px;">
    <div class="profile-card-title">
      <span class="profile-card-icon">馃捑</span>澶囦唤涓庢仮澶?
    </div>
    <div style="font-size:13px;color:#64748b;margin-bottom:12px;">瀹氭湡澶囦唤鏁版嵁鍒版湰鍦版枃浠讹紝娓呯悊娴忚鍣ㄦ暟鎹墠璇峰姟蹇呭浠斤紒</div>
    <div style="display:flex;gap:10px;">
      <button class="btn btn-primary" onclick="backupAllData()" style="flex:1;">馃捑 涓€閿浠?/button>
      <button class="btn" onclick="triggerRestore()" style="flex:1;">鈾伙笍 鎭㈠鏁版嵁</button>
    </div>
  </div>`;
  html += `</div>`; // 宸︿晶缁撴潫

  // 鍙充晶鍖哄煙
  html += `<div style="flex:1;min-width:300px;max-width:420px;display:flex;flex-direction:column;gap:16px;">`;

  // 璐︽埛瀹夊叏绛夌骇
  const safeScore = (phone !== "--" ? 25 : 0) + (email !== "--" ? 25 : 0) + (wechatBound ? 20 : 0) + 30;
  const safeColor = safeScore >= 80 ? '#22c55e' : safeScore >= 60 ? '#f59e0b' : '#ef4444';
  const safeText = safeScore >= 80 ? '鑹ソ' : safeScore >= 60 ? '涓€鑸? : '杈冧綆';
  const dashArray = Math.round(safeScore / 100 * 226) + ' 226';

  html += `<div class="card profile-card">
    <div class="profile-card-title">
      <span class="profile-card-icon">馃攼</span>璐︽埛瀹夊叏
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
          <div style="font-size:11px;color:#94a3b8;">鍒?/div>
        </div>
      </div>
      <div style="flex:1;">
        <div style="font-size:15px;font-weight:600;color:#1e293b;">瀹夊叏绛夌骇锛?{safeText}</div>
        <div style="font-size:12px;color:#64748b;margin-top:4px;">${safeScore < 100 ? '瀹屽杽淇℃伅鍙彁鍗囧畨鍏ㄧ瓑绾? : '鎮ㄧ殑璐︽埛瀹夊叏绛夌骇寰堥珮'}</div>
      </div>
    </div>
    <div class="profile-safe-list">
      <div class="profile-safe-item">
        <span class="profile-safe-dot" style="background:#22c55e;"></span>
        <span class="profile-safe-label">鐧诲綍瀵嗙爜</span>
        <span class="profile-safe-status ok">宸茶缃?/span>
      </div>
      <div class="profile-safe-item">
        <span class="profile-safe-dot" style="background:${phone !== "--" ? '#22c55e' : '#94a3b8'};"></span>
        <span class="profile-safe-label">鎵嬫満缁戝畾</span>
        <span class="profile-safe-status ${phone !== "--" ? 'ok' : 'warn'}">${phone !== "--" ? '宸茬粦瀹? : '鏈粦瀹?}</span>
      </div>
      <div class="profile-safe-item">
        <span class="profile-safe-dot" style="background:${email !== "--" ? '#22c55e' : '#94a3b8'};"></span>
        <span class="profile-safe-label">閭缁戝畾</span>
        <span class="profile-safe-status ${email !== "--" ? 'ok' : 'warn'}">${email !== "--" ? '宸茬粦瀹? : '鏈粦瀹?}</span>
      </div>
      <div class="profile-safe-item">
        <span class="profile-safe-dot" style="background:${wechatBound ? '#22c55e' : '#94a3b8'};"></span>
        <span class="profile-safe-label">寰俊缁戝畾</span>
        <span class="profile-safe-status ${wechatBound ? 'ok' : 'warn'}">${wechatBound ? '宸茬粦瀹? : '鏈粦瀹?}</span>
      </div>
    </div>
  </div>`;

  // 鏈€杩戠櫥褰曪紙鍔ㄦ€佹覆鏌撶湡瀹炶褰曪級
  var loginLogs = [];
  try {
    loginLogs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]');
  } catch(e) {}
  
  html += '<div class="card profile-card">' +
    '<div class="profile-card-title">' +
      '<span class="profile-card-icon">馃搷</span>鏈€杩戠櫥褰? +
    '</div>';
  
  if (loginLogs.length === 0) {
    html += '<div style="text-align:center;color:#94a3b8;padding:20px 0;font-size:13px;">鏆傛棤鐧诲綍璁板綍</div>';
  } else {
    html += '<div class="profile-login-list">';
    
    var currentSessionId = sessionStorage.getItem('chansee_session_id') || '';
    
    for (var li = 0; li < loginLogs.length && li < 5; li++) {
      var log = loginLogs[li];
      var isCurrent = (log.sessionId === currentSessionId);
      var deviceIcon = log.device === 'mobile' ? '馃摫' : '馃枼锔?;
      var iconBg = isCurrent ? '#dbeafe' : (log.device === 'mobile' ? '#dcfce7' : '#f3f4f6');
      var iconColor = isCurrent ? '#3b82f6' : (log.device === 'mobile' ? '#22c55e' : '#6b7280');
      var timeStr = log.loginTime ? new Date(log.loginTime).toLocaleString('zh-CN') : '--';
      
      html += '<div class="profile-login-item' + (isCurrent ? ' current' : '') + '">' +
        '<div class="profile-login-device">' +
          '<div class="profile-login-icon" style="background:' + iconBg + ';color:' + iconColor + ';">' + deviceIcon + '</div>' +
          '<div>' +
            '<div class="profile-login-name">' + log.browser + ' / ' + log.os + '</div>' +
            '<div class="profile-login-ip">璐﹀彿: ' + log.username + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="profile-login-meta">' +
          (isCurrent ? '<span class="profile-login-badge">褰撳墠鍦ㄧ嚎</span>' : '') +
          (currentUser && currentUser.role === '瓒呯骇绠＄悊鍛? && !isCurrent ? 
            '<span style="color:#ef4444;font-size:12px;cursor:pointer;margin-right:8px;" onclick="if(confirm(\'纭畾寮哄埗閫€鍑鸿璁惧鍚楋紵\'))forceLogoutSession(\'' + log.sessionId + '\')">寮哄埗閫€鍑?/span>' : '') +
          '<div class="profile-login-time">' + timeStr + '</div>' +
        '</div>' +
      '</div>';
    }
    
    html += '</div>';
  }
  
  html += '</div>';

  html += `</div>`; // 鍙充晶缁撴潫
  html += `</div>`; // 鎬诲鍣ㄧ粨鏉?

  return html;
}

// ===== 娴忚鍣?绯荤粺/璁惧妫€娴?=====
function detectDeviceInfo() {
  var ua = navigator.userAgent || '';
  var browser = '鏈煡娴忚鍣?;
  var os = '鏈煡绯荤粺';
  var device = 'desktop';

  // 妫€娴嬫祻瑙堝櫒
  if (ua.indexOf('QQBrowser') !== -1 || ua.indexOf('QQ娴忚鍣?) !== -1) {
    browser = 'QQ娴忚鍣?;
  } else if (ua.indexOf('MicroMessenger') !== -1 || ua.indexOf('WeChat') !== -1) {
    browser = '寰俊娴忚鍣?;
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

  // 妫€娴嬫搷浣滅郴缁?
  if (ua.indexOf('Windows') !== -1) {
    os = 'Windows';
  } else if (ua.indexOf('Mac OS') !== -1 || ua.indexOf('Macintosh') !== -1) {
    os = 'macOS';
  } else if (ua.indexOf('Linux') !== -1) {
    os = 'Linux';
  } else if (ua.indexOf('Android') !== -1) {
    os = 'Android';
    device = 'mobile';
  } else if (ua.indexOf('iPhone') !== -1 || ua.indexOf('iPad') !== -1) {
    os = 'iOS';
    device = 'mobile';
  }

  // 妫€娴嬭澶囩被鍨嬶紙琛ュ厖鍒ゆ柇锛?
  if (window.innerWidth <= 768) {
    device = 'mobile';
  }

  return { browser: browser, os: os, device: device };
}

// ===== 璁板綍鐧诲綍淇℃伅 =====
function recordLogin() {
  try {
    var authStr = localStorage.getItem('chanseen_auth');
    if (!authStr) return;
    var auth = JSON.parse(authStr);
    var username = auth.user?.username || auth.user?.name || 'admin';
    var info = detectDeviceInfo();

    // 鐢熸垚鍞竴浼氳瘽ID锛堝瓨鍦╯essionStorage锛岄〉闈㈠叧闂氨澶辨晥锛?
    var sessionId = sessionStorage.getItem('chansee_session_id');
    if (!sessionId) {
      sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('chansee_session_id', sessionId);
    }

    var loginRecord = {
      _id: 'login_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      username: username,
      browser: info.browser,
      os: info.os,
      device: info.device,
      loginTime: new Date().toISOString(),
      sessionId: sessionId,
      forceLogout: false
    };

    // 淇濆瓨鍒?localStorage锛坙ogin_logs 闆嗗悎锛?
    var logs = [];
    try {
      logs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]');
    } catch(e) {}
    logs.unshift(loginRecord);  // 鏈€鏂扮殑鍦ㄥ墠闈?
    // 鍙繚鐣欐渶杩?0鏉?
    if (logs.length > 20) logs = logs.slice(0, 20);
    localStorage.setItem('chansee_login_logs', JSON.stringify(logs));

    // 鍚屾鍒颁簯绔?
    if (window.CloudBaseSync) {
      try { window.CloudBaseSync.saveAll(); } catch(e) {}
    }

    // 鍚屾椂鎶婂綋鍓?sessionId 瀛樺埌 chansee_current_session锛岀敤浜?褰撳墠鍦ㄧ嚎"鍒ゆ柇
    localStorage.setItem('chansee_current_session', sessionId);
  } catch(e) {
    console.warn('[鐧诲綍璁板綍] 淇濆瓨澶辫触锛?, e);
  }
}

// ===== 妫€鏌ユ槸鍚﹁寮哄埗閫€鍑?=====
function checkForceLogout() {
  try {
    var sessionId = sessionStorage.getItem('chansee_session_id');
    if (!sessionId) return;
    var logs = JSON.parse(localStorage.getItem('chansee_login_logs') || '[]');
    var myLog = logs.find(function(l) { return l.sessionId === sessionId; });
    if (myLog && myLog.forceLogout) {
      // 琚己鍒堕€€鍑猴紒娓呴櫎鐧诲綍鐘舵€侊紝璺冲洖鐧诲綍椤?
      localStorage.removeItem('chanseen_auth');
      sessionStorage.removeItem('chansee_session_id');
      localStorage.removeItem('chansee_current_session');
      alert('鎮ㄧ殑璐﹀彿宸插湪鍏朵粬璁惧琚己鍒堕€€鍑虹櫥褰曘€?);
      location.reload();
    }
  } catch(e) {}
}

// 姣忛殧60绉掓鏌ヤ竴娆℃槸鍚﹁寮哄埗閫€鍑?
setInterval(function() {
  if (typeof currentUser !== 'undefined' && currentUser && currentUser.id) {
    checkForceLogout();
  }
}, 60000);

// ===== 寮哄埗閫€鍑烘煇涓細璇濓紙绠＄悊鍛樺姛鑳斤級=====
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
    // 鍚屾鍒颁簯绔?
    if (window.CloudBaseSync) {
      try { window.CloudBaseSync.saveAll(); } catch(e) {}
    }
    showToast('宸插己鍒堕€€鍑鸿璁惧');
    // 閲嶆柊娓叉煋涓汉璁剧疆椤甸潰
    if (typeof renderProfile === 'function') {
      document.getElementById('app-content').innerHTML = renderProfile();
    }
  } catch(e) {
    console.warn('[寮哄埗閫€鍑篯 鎿嶄綔澶辫触锛?, e);
  }
}
function handleAvatarUpload(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) { alert("鍥剧墖澶у皬瓒呰繃 5M锛岃閫夋嫨鏇村皬鐨勫浘鐗?); return; }
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // 鍘嬬缉锛氭渶澶ц竟闀?200px锛孞PEG 璐ㄩ噺 0.8
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
      showToast("澶村儚鏇存崲鎴愬姛");
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// 閫氱敤锛氬皢鏌愯鍙樹负缂栬緫妯″紡
function enterEditMode(rowId, label, inputId, inputType, currentValue, saveFn) {
  const rowEl = document.getElementById(rowId);
  if (!rowEl) return;
  rowEl.innerHTML = `
    <div style="width:90px;font-size:14px;color:#334155;flex-shrink:0;">${label}</div>
    <input type="${inputType}" id="${inputId}" value="${currentValue}" style="flex:1;padding:6px 10px;font-size:14px;border:1.5px solid #bfdbfe;border-radius:6px;outline:none;transition:border-color .2s;" onfocus="this.style.borderColor='#3b82f6'" onblur="this.style.borderColor='#bfdbfe'" onkeydown="if(event.key==='Enter')${saveFn}()">
    <button type="button" style="color:#3b82f6;font-size:13px;cursor:pointer;margin-left:12px;flex-shrink:0;font-weight:500;background:none;border:1.5px solid #3b82f6;border-radius:6px;padding:4px 14px;" onclick="${saveFn}()">淇濆瓨</button>
    <span style="color:#94a3b8;font-size:13px;cursor:pointer;margin-left:8px;flex-shrink:0;" onclick="renderModule('profile')">鍙栨秷</span>
  `;
  setTimeout(() => { const el = document.getElementById(inputId); if(el){ el.focus(); el.select(); } }, 50);
}

// 鏄电О缂栬緫
function editProfileNickname() {
  const el = document.getElementById("profile-nickname-value");
  if (!el) return;
  enterEditMode("profile-nickname-row", "鏄电О", "profile-nickname-input", "text", el.textContent, "saveProfileNickname");
}
function saveProfileNickname() {
  const input = document.getElementById("profile-nickname-input");
  if (!input) return;
  const val = input.value.trim();
  if (!val) { alert("鏄电О涓嶈兘涓虹┖"); return; }
  const btn = input.parentElement.querySelector("button");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "淇濆瓨涓?; }
  if (currentUser) {
    currentUser.nickname = val;
    currentUser.name = val;
  }
  persistCurrentUser();
  updateUserDisplay(); // 鍚屾鍒锋柊鍙充笂瑙?
  if (btn) { btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "淇濆瓨"; }
  renderModule("profile");
  showToast("鏄电О淇敼鎴愬姛");
}

// 鑱屼綅缂栬緫
function editProfilePosition() {
  const el = document.getElementById("profile-position-value");
  if (!el) return;
  enterEditMode("profile-position-row", "鑱屼綅", "profile-position-input", "text", el.textContent, "saveProfilePosition");
}
function saveProfilePosition() {
  const input = document.getElementById("profile-position-input");
  if (!input) return;
  const val = input.value.trim();
  const btn = input.parentElement.querySelector("button");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "淇濆瓨涓?; }
  if (currentUser) currentUser.position = val;
  persistCurrentUser();
  if (btn) { btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "淇濆瓨"; }
  renderModule("profile");
  showToast("鑱屼綅淇敼鎴愬姛");
}

// 鐢熸棩缂栬緫
function editProfileBirthday() {
  const el = document.getElementById("profile-birthday-value");
  if (!el) return;
  const current = el.textContent === "--" ? "" : el.textContent;
  enterEditMode("profile-birthday-row", "鐢熸棩", "profile-birthday-input", "date", current, "saveProfileBirthday");
}
function saveProfileBirthday() {
  const input = document.getElementById("profile-birthday-input");
  if (!input) return;
  const val = input.value;
  if (currentUser) currentUser.birthday = val;
  persistCurrentUser();
  renderModule("profile");
  showToast("鐢熸棩淇敼鎴愬姛");
}

// 鎵嬫満鍙风紪杈?
function editProfilePhone() {
  const el = document.getElementById("profile-phone-value");
  if (!el) return;
  const current = el.textContent === "--" ? "" : el.textContent;
  enterEditMode("profile-phone-row", "鎵嬫満鍙?, "profile-phone-input", "tel", current, "saveProfilePhone");
}
function saveProfilePhone() {
  const input = document.getElementById("profile-phone-input");
  if (!input) return;
  const val = input.value.trim();
  if (val && !/^1[3-9]\d{9}$/.test(val)) { alert("璇疯緭鍏ユ纭殑鎵嬫満鍙?); return; }
  if (currentUser) currentUser.phone = val || "";
  persistCurrentUser();
  renderModule("profile");
  showToast(val ? "鎵嬫満鍙蜂慨鏀规垚鍔? : "鎵嬫満鍙峰凡娓呯┖");
}

// 閭缂栬緫
function editProfileEmail() {
  const el = document.getElementById("profile-email-value");
  if (!el) return;
  const current = el.textContent === "--" ? "" : el.textContent;
  enterEditMode("profile-email-row", "閭", "profile-email-input", "email", current, "saveProfileEmail");
}
function saveProfileEmail() {
  const input = document.getElementById("profile-email-input");
  if (!input) return;
  const val = input.value.trim();
  if (val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { alert("璇疯緭鍏ユ纭殑閭鍦板潃"); return; }
  if (currentUser) currentUser.email = val || "";
  persistCurrentUser();
  renderModule("profile");
  showToast(val ? "閭淇敼鎴愬姛" : "閭宸叉竻绌?);
}

// 寰俊缁戝畾/瑙ｇ粦
function toggleWechatBind() {
  const current = currentUser && currentUser.wechatBound;
  if (current) {
    if (!confirm("纭畾瑕佽В缁戝井淇″悧锛?)) return;
    if (currentUser) currentUser.wechatBound = false;
    showToast("寰俊宸茶В缁?);
  } else {
    if (currentUser) currentUser.wechatBound = true;
    showToast("寰俊缁戝畾鎴愬姛");
  }
  persistCurrentUser();
  renderModule("profile");
}

// 鍝佺墝缂栬緫
function editProfileBrand() {
  const el = document.getElementById("profile-brand-value");
  if (!el) return;
  enterEditMode("profile-brand-row", "鍝佺墝", "profile-brand-input", "text", el.textContent, "saveProfileBrand");
}
function saveProfileBrand() {
  const input = document.getElementById("profile-brand-input");
  if (!input) return;
  const val = input.value.trim();
  if (currentUser) currentUser.brand = val;
  persistCurrentUser();
  renderModule("profile");
  showToast("鍝佺墝淇敼鎴愬姛");
}

// 淇濇寔褰撳墠鐘舵€佸垏鎹?
function toggleKeepStatus(checkbox) {
  if (currentUser) currentUser.keepStatus = checkbox.checked;
  persistCurrentUser();
  // 鍗虫椂鏇存柊鏂囧瓧锛屼笉绛夊緟閲嶆柊娓叉煋锛堝湪鍚屼竴浣嶇疆浠呮敼鍙樻枃瀛楋級
  const container = checkbox.closest(".profile-toggle-row") || checkbox.closest('[style*="flex:1"]');
  const statusText = container ? container.querySelector(".keep-status-text") : null;
  if (statusText) statusText.textContent = checkbox.checked ? "宸插紑鍚? : "宸插叧闂?;
  showToast(checkbox.checked ? "淇濇寔褰撳墠鐘舵€佸凡寮€鍚? : "淇濇寔褰撳墠鐘舵€佸凡鍏抽棴");
}

// 淇敼瀵嗙爜寮圭獥
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
  if (!oldPwd || !newPwd || !confirm) { alert("璇峰～鍐欏畬鏁?); return; }
  const btn = document.querySelector("#change-password-modal .btn-primary");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "淇濆瓨涓?; }
  const userInDb = USERS.find(u => currentUser && u.id === currentUser.id);
  if (!userInDb || userInDb.password !== oldPwd) { alert("鍘熷瘑鐮佷笉姝ｇ‘"); return; }
  if (newPwd.length < 6) { alert("鏂板瘑鐮佽嚦灏?浣?); return; }
  if (newPwd !== confirm) { alert("涓ゆ杈撳叆鐨勬柊瀵嗙爜涓嶄竴鑷?); return; }
  userInDb.password = newPwd;
  if (currentUser) { currentUser.password = newPwd; localStorage.setItem("chansee_current_user", JSON.stringify(currentUser)); }
  saveUsers();
  if (btn) { btn.classList.remove("btn-loading"); btn.disabled = false; btn.textContent = "纭淇敼"; }
  showToast("瀵嗙爜淇敼鎴愬姛锛岃鐗㈣鏂板瘑鐮?);
  hideChangePasswordModal();
}
// 蹇樿瀵嗙爜鍔熻兘
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
  if (!contact) { alert('璇疯緭鍏ユ墜鏈哄彿鎴栭偖绠?); return; }
  
  // Find user by phone or email
  const user = USERS.find(u => 
    (u.phone && u.phone.indexOf(contact) >= 0) || 
    (u.email && u.email.toLowerCase() === contact.toLowerCase()) ||
    u.username === contact
  );
  
  if (!user) { alert('鏈壘鍒拌璐﹀彿锛岃纭鎵嬫満鍙?閭鏄惁姝ｇ‘'); return; }
  
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
  
  showToast('妯℃嫙楠岃瘉鐮佸凡鐢熸垚锛岃鏌ョ湅寮圭獥鍐呮彁绀?);
}

function toggleForgotNewPwd() {
  const inp = document.getElementById('forgot-new-pwd');
  const eye = document.getElementById('forgot-new-pwd-eye');
  if (!inp || !eye) return;
  if (inp.type === 'password') { inp.type = 'text'; eye.textContent = '馃憗锔?; }
  else { inp.type = 'password'; eye.textContent = '馃檲'; }
}

function toggleForgotConfirmPwd() {
  const inp = document.getElementById('forgot-confirm-pwd');
  const eye = document.getElementById('forgot-confirm-pwd-eye');
  if (!inp || !eye) return;
  if (inp.type === 'password') { inp.type = 'text'; eye.textContent = '馃憗锔?; }
  else { inp.type = 'password'; eye.textContent = '馃檲'; }
}

function resetPassword() {
  const code = document.getElementById('forgot-code').value.trim();
  const newPwd = document.getElementById('forgot-new-pwd').value;
  const confirmPwd = document.getElementById('forgot-confirm-pwd').value;
  
  if (!code) { alert('璇疯緭鍏ラ獙璇佺爜'); return; }
  if (code !== forgotVerifyCode) { alert('楠岃瘉鐮侀敊璇?); return; }
  if (!newPwd || newPwd.length < 6) { alert('鏂板瘑鐮佽嚦灏?浣?); return; }
  if (newPwd !== confirmPwd) { alert('涓ゆ杈撳叆鐨勬柊瀵嗙爜涓嶄竴鑷?); return; }
  if (!forgotTargetUser) { alert('鎿嶄綔瓒呮椂锛岃閲嶆柊鎿嶄綔'); hideForgotPassword(); return; }
  
  // Update password
  forgotTargetUser.password = newPwd;
  if (currentUser && forgotTargetUser.id === currentUser.id) { currentUser.password = newPwd; localStorage.setItem("chansee_current_user", JSON.stringify(currentUser)); }
  saveUsers();
  
  showToast('瀵嗙爜閲嶇疆鎴愬姛锛岃浣跨敤鏂板瘑鐮佺櫥褰?);
  hideForgotPassword();
}



// 绂诲紑鍥㈤槦
function leaveTeam() {
  if (!confirm("鈿狅笍 纭畾瑕佺寮€鍥㈤槦鍚楋紵绂诲紑鍚庢偍灏嗘棤娉曟煡鐪嬫鍥㈤槦鐨勪换浣曡褰曪紒")) return;
  if (!confirm("鍐嶆纭锛氭偍鐪熺殑瑕佺寮€鍥㈤槦鍚楋紵姝ゆ搷浣滀笉鍙挙閿€銆?)) return;
  const btn = document.querySelector(".profile-btn-danger");
  if (btn) { btn.classList.add("btn-loading"); btn.disabled = true; btn.textContent = "澶勭悊涓?; }
  const userInDb = USERS.find(u => currentUser && u.id === currentUser.id);
  if (userInDb) {
    userInDb.status = "宸茬鐢?;
    userInDb.remark = "鐢ㄦ埛涓诲姩绂诲紑鍥㈤槦";
  }
  showToast("鎮ㄥ凡绂诲紑鍥㈤槦");
  setTimeout(() => logout(), 800);
}

function exportRisk(){
  const headers = ['椤圭洰缂栧彿','棰勮绫诲瀷','椋庨櫓绛夌骇','闂鎻忚堪','鍙戠幇鏃ユ湡','璐熻矗浜?,'鐘舵€?,'瑙ｅ喅鏃ユ湡'];
  const rows = RISK_ALERTS.map(r => [
    r.projectId, r.type||'', r.level||'', r.description||'',
    r.foundDate||'', r.owner||'', r.status||'', r.resolvedDate||''
  ]);
  showExportDialog(headers, rows, `椤圭洰椋庨櫓棰勮_${new Date().toISOString().slice(0,10)}`, '椤圭洰椋庨櫓棰勮');
}
function renderComparison(){
  let html = `<div class="page-header"><h2>馃搳 椤圭洰瀵规瘮鍒嗘瀽</h2>
    <button class="btn" onclick="exportComparison()">瀵煎嚭瀵规瘮鎶ュ憡</button>
  </div>`;

  // 椤圭洰閫夋嫨鍣紙澶氶€夛級
  html += `<div class="card"><div class="card-title">閫夋嫨瀵规瘮椤圭洰锛堝彲澶氶€夛級</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">`;
  PROJECTS.forEach(p=>{
    html += `<label style="cursor:pointer"><input type="checkbox" class="compare-cb" value="${p.id}" style="margin-right:4px;">${p.name}</label>`;
  });
  html += `</div>
    <button class="btn btn-primary" onclick="runComparison()">寮€濮嬪姣?/button>
  </div>`;

  // 瀵规瘮缁撴灉瀹瑰櫒
  html += `<div id="compare-result"></div>`;
  return html;
}

function runComparison(){
  const ids = Array.from(document.querySelectorAll('.compare-cb:checked')).map(cb=>cb.value);
  if(ids.length<2){ alert('璇疯嚦灏戦€夋嫨2涓」鐩繘琛屽姣?); return; }
  const projects = ids.map(id=>PROJECTS.find(p=>p.id===id)).filter(Boolean);

  let html = `<div class="card"><div class="card-title">馃搳 瀵规瘮缁撴灉锛堝叡${projects.length}涓」鐩級</div>
    <table class="data-table">
    <thead><tr><th>鎸囨爣</th>${projects.map(p=>'<th>'+p.name+'</th>').join('')}<th>宸€硷紙鏈€澶?鏈€灏忥級</th></tr></thead><tbody>`;

  const indicators = [
    ['鎵€灞炶亴鍦?,'workplace'],
    ['鏈嶅姟鍝佺墝','brand'],
    ['缁忚惀妯″紡','serviceMode'],
    ['FTE鐩爣','fteTarget'],
    ['SLA鍝嶅簲(s)','slaResponse'],
    ['SLA瑙ｅ喅(s)','slaResolve'],
    ['鎴愭湰棰勭畻(涓?','costBudget'],
    ['钀ユ敹鐩爣(涓?','revenue'],
    ['鍒╂鼎鐜?%)','profitRate'],
    ['鍋ュ悍鐘舵€?,'health'],
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

  // 闆疯揪鍥撅紙绠€鏄撴枃瀛楃増锛?
  html += `<div class="card"><div class="card-title">馃搱 鍏抽敭鎸囨爣瀵规瘮</div><div style="display:flex;gap:16px;flex-wrap:wrap;">`;
  projects.forEach(p=>{
    const op = OPERATIONS.find(o=>o.projectId===p.id);
    html += `<div style="border:1px solid var(--c-border);border-radius:8px;padding:12px;min-width:180px;">
      <div style="font-weight:600;margin-bottom:8px;">${p.name}</div>
      <div>鍝嶅簲鏃堕暱锛?{op?op.responseTime+'s':'-'}</div>
      <div>CSAT锛?{op?op.csat:'-'}</div>
      <div>瑙ｅ喅鐜囷細${op?op.resolutionRate+'%':'-'}</div>
      <div>鍒╂鼎鐜囷細${p.profitRate}%</div>
      <div>鍋ュ悍鐘舵€侊細${p.health}</div>
    </div>`;
  });
  html += `</div></div>`;

  document.getElementById('compare-result').innerHTML = html;
}

function exportComparison(){
  const headers = ['瀵规瘮缁村害','椤圭洰A','椤圭洰B','宸紓鍒嗘瀽'];
  const rows = [];
  showExportDialog(headers, rows, `鏁版嵁瀵规瘮_${new Date().toISOString().slice(0,10)}`, '鏁版嵁瀵规瘮');
}
function saveAssessmentsData() {
  try { localStorage.setItem('chansee_assessments', JSON.stringify(ASSESSMENTS_DATA)); } catch(e) {}
  if (typeof syncToCloud === 'function') syncToCloud('assessments', ASSESSMENTS_DATA);
}

