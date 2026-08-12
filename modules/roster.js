// modules/roster.js — 人才盘点花名册模块
/* ═══════════════════ 人才盘点花名册 ═════════════════ */
// 定位：济南一线客服人才梯队建设工具。记录入职→离职全部发展事件，双维度九宫格盘点。
// 数据：基础人员(chansee_roster_personnel) + 盘点/事件(chansee_roster_review)，均仅存 localStorage（遵循数据安全铁律）。
// 独立性：与绩效/知识/承接等业务版块零字段关联；仅单向读取系统数据管理的人员主表。

(function(){
  if (typeof window === 'undefined') return;

  // ——— 存储键与评分模型 ———
  var PERSONNEL_KEY = 'chansee_roster_personnel';
  var REVIEW_KEY = 'chansee_roster_review';

  // 部门维度 6 项（满分 35，每项 0-6）
  var DEPT_DIMS = ['绩效','成长','思维','学习','人际','团队协作'];
  // 人力维度 6 项（满分 100，每项 0-17）
  var HR_DIMS = ['专业','业绩','敬业','潜力','合作','企业文化'];

  // 九宫格落位矩阵（deptBand → hrBand）
  var NINE = {
    high: { low:{id:5,label:'在岗发展',sym:'※',cls:'rstr-n9-mid'},  mid:{id:7,label:'重点培养',sym:'▲',cls:'rstr-n9-good'}, high:{id:9,label:'高潜人才',sym:'★',cls:'rstr-n9-best'} },
    mid:  { low:{id:2,label:'需关注可保留',sym:'※',cls:'rstr-n9-mid'}, mid:{id:4,label:'重点保留',sym:'▲',cls:'rstr-n9-good'}, high:{id:8,label:'重点培养',sym:'▲',cls:'rstr-n9-good'} },
    low:  { low:{id:1,label:'问题员工调岗或解聘',sym:'▼',cls:'rstr-n9-bad'}, mid:{id:3,label:'需关注可保留',sym:'△',cls:'rstr-n9-mid'}, high:{id:6,label:'在岗发展',sym:'△',cls:'rstr-n9-mid'} }
  };

  // ——— 演示用虚构基础数据（首次打开填充，真实数据由钉钉导入进入 localStorage）———
  var SEED_PERSONNEL = [
    {empId:'E1001', name:'张明轩', group:'A组', site:'济南', position:'一线客服', status:'在职', hireDate:'2023-03-12', manager:'李组长', gender:'男', birth:'1998-05', edu:'本科', school:'山东财经大学', gradTime:'2020-06', jobTitle:'组长', jobGrade:3},
    {empId:'E1002', name:'李思琪', group:'A组', site:'济南', position:'组长', status:'在职', hireDate:'2022-07-01', manager:'王主管', gender:'女', birth:'1996-11', edu:'本科', school:'济南大学', gradTime:'2019-06', jobTitle:'组长', jobGrade:3},
    {empId:'E1003', name:'王浩然', group:'B组', site:'淄博', position:'一线客服', status:'离职', hireDate:'2021-09-20', manager:'赵组长', gender:'男', birth:'1999-02', edu:'大专', school:'淄博职业学院', gradTime:'2021-06', jobTitle:'一线员工', jobGrade:1},
    {empId:'E1004', name:'赵雅婷', group:'B组', site:'淄博', position:'一线客服', status:'二次入职', hireDate:'2023-01-05', manager:'赵组长', gender:'女', birth:'2000-08', edu:'本科', school:'潍坊学院', gradTime:'2022-06', jobTitle:'一线员工', jobGrade:2},
    {empId:'E1005', name:'陈宇航', group:'C组', site:'杭州', position:'主管', status:'在职', hireDate:'2020-11-15', manager:'孙经理', gender:'男', birth:'1993-04', edu:'本科', school:'浙江大学', gradTime:'2016-06', jobTitle:'主管', jobGrade:6},
    {empId:'E1006', name:'刘梦洁', group:'A组', site:'济南', position:'一线客服', status:'试用', hireDate:'2026-06-01', manager:'李组长', gender:'女', birth:'2002-09', edu:'大专', school:'山东商业职业技术学院', gradTime:'2024-06', jobTitle:'一线员工', jobGrade:1},
    {empId:'E1007', name:'孙立伟', group:'C组', site:'杭州', position:'一线客服', status:'离职', hireDate:'2022-02-10', manager:'陈主管', gender:'男', birth:'1997-12', edu:'本科', school:'浙江传媒学院', gradTime:'2020-06', jobTitle:'一线员工', jobGrade:1},
    {empId:'E1008', name:'周晓彤', group:'B组', site:'淄博', position:'一线客服', status:'在职', hireDate:'2024-04-22', manager:'赵组长', gender:'女', birth:'2001-03', edu:'本科', school:'山东理工大学', gradTime:'2023-06', jobTitle:'一线员工', jobGrade:2}
  ];
  var SEED_REVIEW = {
    E1001: { tags:['高潜'], echelon:'骨干', comment:'响应快、学习力强，建议重点培养。', jobFit:3, risk:'偶尔急躁', strength:'抗压能力强、学习快', kpi2026:92, kpi2027:95, awards:'服务之星（2025Q2）',
      deptScores:{绩效:5,成长:5,思维:4,学习:6,人际:5,团队协作:5}, hrScores:{专业:14,业绩:15,敬业:16,潜力:16,合作:15,企业文化:15},
      events:[
        {id:'EV1',type:'入职',date:'2023-03-12',title:'入职 一线客服',detail:'济南 A组',by:'HR'},
        {id:'EV2',type:'晋升',date:'2024-08-01',title:'晋升 组长',detail:'因带教表现突出晋升',by:'王主管'},
        {id:'EV3',type:'获荣誉头衔',date:'2025-05-20',title:'获「服务之星」头衔',detail:'季度服务标兵',by:'王主管'}
      ]},
    E1002: { tags:['骨干'], echelon:'骨干', comment:'稳定的组长，梯队中坚。', jobFit:4, risk:'风险偏好偏低', strength:'稳健、带教耐心', kpi2026:88, kpi2027:90, awards:'优秀组长（2023）',
      deptScores:{绩效:6,成长:4,思维:5,学习:4,人际:6,团队协作:6}, hrScores:{专业:16,业绩:14,敬业:17,潜力:13,合作:16,企业文化:16},
      events:[
        {id:'EV1',type:'入职',date:'2022-07-01',title:'入职 一线客服',detail:'',by:'HR'},
        {id:'EV2',type:'晋升',date:'2023-11-01',title:'晋升 组长',detail:'',by:'王主管'}
      ]},
    E1003: { tags:['待提升'], echelon:'一线', comment:'已离职，保留记录备查。', jobFit:2, risk:'主动性与目标感弱', strength:'配合度高', kpi2026:70, kpi2027:68, awards:'',
      deptScores:{绩效:3,成长:3,思维:3,学习:3,人际:3,团队协作:3}, hrScores:{专业:10,业绩:9,敬业:10,潜力:9,合作:10,企业文化:9},
      events:[
        {id:'EV1',type:'入职',date:'2021-09-20',title:'入职 一线客服',detail:'',by:'HR'},
        {id:'EV2',type:'离职',date:'2025-12-15',title:'离职',detail:'个人原因',by:'赵组长'}
      ]},
    E1004: { tags:['后备干部'], echelon:'后备', comment:'二次入职，需观察稳定性。', jobFit:3, risk:'稳定性待观察', strength:'亲和力强', kpi2026:0, kpi2027:78, awards:'',
      deptScores:{绩效:4,成长:4,思维:4,学习:4,人际:4,团队协作:4}, hrScores:{专业:12,业绩:12,敬业:13,潜力:14,合作:12,企业文化:12},
      events:[
        {id:'EV1',type:'入职',date:'2023-01-05',title:'入职 一线客服',detail:'',by:'HR'},
        {id:'EV2',type:'离职',date:'2025-03-10',title:'离职',detail:'回老家',by:'赵组长'},
        {id:'EV3',type:'二次入职',date:'2026-02-18',title:'二次入职 一线客服',detail:'重新返岗',by:'HR'},
        {id:'EV4',type:'调岗',date:'2026-05-01',title:'调岗 B组',detail:'',by:'赵组长'}
      ]},
    E1005: { tags:['骨干'], echelon:'管理', comment:'主管，管理梯队核心。', jobFit:4, risk:'—', strength:'全局观强、决策稳', kpi2026:96, kpi2027:98, awards:'年度管理标兵（2024）',
      deptScores:{绩效:6,成长:6,思维:6,学习:5,人际:6,团队协作:6}, hrScores:{专业:17,业绩:16,敬业:17,潜力:16,合作:17,企业文化:16},
      events:[
        {id:'EV1',type:'入职',date:'2020-11-15',title:'入职 一线客服',detail:'',by:'HR'},
        {id:'EV2',type:'晋升',date:'2022-06-01',title:'晋升 组长',detail:'',by:'孙经理'},
        {id:'EV3',type:'晋升',date:'2024-01-01',title:'晋升 主管',detail:'',by:'孙经理'}
      ]},
    E1006: { tags:[], echelon:'一线', comment:'试用期新人，待评估。', jobFit:0, risk:'试用期待评估', strength:'—', kpi2026:0, kpi2027:0, awards:'',
      deptScores:{绩效:0,成长:0,思维:0,学习:0,人际:0,团队协作:0}, hrScores:{专业:0,业绩:0,敬业:0,潜力:0,合作:0,企业文化:0},
      events:[
        {id:'EV1',type:'入职',date:'2026-06-01',title:'入职 一线客服（试用）',detail:'',by:'HR'}
      ]},
    E1007: { tags:['待提升'], echelon:'一线', comment:'已离职。', jobFit:2, risk:'沟通内敛', strength:'细心', kpi2026:72, kpi2027:70, awards:'',
      deptScores:{绩效:2,成长:3,思维:3,学习:3,人际:3,团队协作:3}, hrScores:{专业:9,业绩:8,敬业:9,潜力:8,合作:9,企业文化:8},
      events:[
        {id:'EV1',type:'入职',date:'2022-02-10',title:'入职 一线客服',detail:'',by:'HR'},
        {id:'EV2',type:'离职',date:'2024-09-30',title:'离职',detail:'',by:'陈主管'}
      ]},
    E1008: { tags:['高潜'], echelon:'骨干', comment:'年轻高潜，重点观察。', jobFit:3, risk:'—', strength:'响应快、悟性高', kpi2026:0, kpi2027:85, awards:'新人标兵（2025Q4）',
      deptScores:{绩效:5,成长:5,思维:5,学习:5,人际:5,团队协作:5}, hrScores:{专业:14,业绩:14,敬业:15,潜力:16,合作:14,企业文化:14},
      events:[
        {id:'EV1',type:'入职',date:'2024-04-22',title:'入职 一线客服',detail:'',by:'HR'},
        {id:'EV2',type:'获荣誉头衔',date:'2025-10-01',title:'获「新人标兵」头衔',detail:'',by:'赵组长'}
      ]}
  };

  // ——— 存储辅助 ———
  function loadPersonnel(){
    try { var d = JSON.parse(safeGetItem(PERSONNEL_KEY) || 'null'); if(Array.isArray(d) && d.length) return d; } catch(e){}
    safeSetItem(PERSONNEL_KEY, JSON.stringify(SEED_PERSONNEL));
    return SEED_PERSONNEL.map(function(x){ return Object.assign({}, x); });
  }
  function savePersonnel(arr){ safeSetItem(PERSONNEL_KEY, JSON.stringify(arr)); }
  function loadReview(){
    try {
      var d = JSON.parse(safeGetItem(REVIEW_KEY) || 'null');
      if(d && typeof d === 'object'){
        // 兼容旧字段名 kpi2022/kpi2023 → kpi2026/kpi2027（旧 localStorage 数据自动迁移，不丢）
        var migrated = false;
        for(var id in d){ if(d.hasOwnProperty(id)){
          var rv = d[id];
          if(rv && typeof rv === 'object'){
            if(typeof rv.kpi2022 !== 'undefined'){ rv.kpi2026 = rv.kpi2022; delete rv.kpi2022; migrated = true; }
            if(typeof rv.kpi2023 !== 'undefined'){ rv.kpi2027 = rv.kpi2023; delete rv.kpi2023; migrated = true; }
          }
        }}
        if(migrated) safeSetItem(REVIEW_KEY, JSON.stringify(d));
        return d;
      }
    } catch(e){}
    safeSetItem(REVIEW_KEY, JSON.stringify(SEED_REVIEW));
    return JSON.parse(JSON.stringify(SEED_REVIEW));
  }
  function saveReview(obj){ safeSetItem(REVIEW_KEY, JSON.stringify(obj)); }
  // 系统数据管理·人员主表 读取接口（全局，单向读取基础名单）
  window.getPersonnelMasterData = function(){ return loadPersonnel(); };

  // ——— 计算与落位 ———
  function sumObj(o){ var s=0; for(var k in o){ if(o.hasOwnProperty(k)) s += Number(o[k]||0); } return s; }
  function band(score, type){
    if(type === 'dept'){ if(score >= 30) return 'high'; if(score >= 20) return 'mid'; return 'low'; }
    if(score >= 85) return 'high'; if(score >= 65) return 'mid'; return 'low';
  }
  function cellOf(deptTotal, hrTotal){
    var db = band(deptTotal,'dept'), hb = band(hrTotal,'hr');
    return NINE[db][hb];
  }
  function esc(s){ return (typeof escHtml === 'function') ? escHtml(s) : String(s==null?'':s); }
  function statusClass(st){
    return st === '在职' ? 'rstr-st-on' : st === '试用' ? 'rstr-st-try' :
           st === '二次入职' ? 'rstr-st-re' : 'rstr-st-off';
  }

  // ——— 运行时视图状态 ———
  var _view = 'overview';
  var _filter = { kw:'', group:'all', site:'all', status:'all', tag:'all' };
  var _openId = null;

  // ——— 主渲染 ———
  window.renderRoster = function(){
    try {
      return _view === 'review' ? rosterReviewHTML() : rosterOverviewHTML();
    } catch(e){
      console.error('roster 渲染异常:', e);
      return '<div style="padding:40px;color:#dc2626;">人才盘点花名册加载出错：' + esc(e.message) + '</div>';
    }
  };

  function filteredPersonnel(){
    var p = loadPersonnel();
    var r = loadReview();
    var kw = _filter.kw.trim().toLowerCase();
    return p.filter(function(it){
      if(_filter.group !== 'all' && it.group !== _filter.group) return false;
      if(_filter.site !== 'all' && it.site !== _filter.site) return false;
      if(_filter.status !== 'all' && it.status !== _filter.status) return false;
      if(_filter.tag !== 'all'){ var rv = r[it.empId]; if(!rv || (rv.tags||[]).indexOf(_filter.tag) < 0) return false; }
      if(kw){
        var target = (it.name + it.empId + it.group + it.site).toLowerCase();
        var match = Array.from(kw).every(function(ch){ return target.indexOf(ch) >= 0; });
        if(!match) return false;
      }
      return true;
    });
  }

  function rosterGridInner(){
    var list = filteredPersonnel();
    var r = loadReview();
    var cards = list.map(function(it){
      var rv = r[it.empId] || {tags:[], deptScores:{}, hrScores:{}};
      var dt = sumObj(rv.deptScores), ht = sumObj(rv.hrScores);
      var cell = (dt||ht) ? cellOf(dt,ht) : null;
      var tagHtml = (rv.tags||[]).map(function(t){ return '<span class="rstr-tag">'+esc(t)+'</span>'; }).join('');
      return ''
        + '<div class="rstr-card" onclick="rosterOpenDetail(\''+it.empId+'\')">'
        +   '<div class="rstr-card-top"><div class="rstr-avatar">'+esc(it.name.charAt(0))+'</div>'
        +     '<div class="rstr-card-name">'+esc(it.name)+'<span class="rstr-emp">'+esc(it.empId)+'</span></div></div>'
        +   '<div class="rstr-card-sub">'+esc(it.group)+' · '+esc(it.site)+' · '+esc(it.position)+'</div>'
        +   '<div class="rstr-card-foot"><span class="rstr-status '+statusClass(it.status)+'">'+esc(it.status)+'</span>'+ (tagHtml?tagHtml:'') +'</div>'
        +   (cell ? '<div class="rstr-card-cell">九宫格：'+esc(cell.label)+' '+esc(cell.sym)+'</div>' : '<div class="rstr-card-cell rstr-card-cell-empty">未盘点</div>')
        + '</div>';
    }).join('');
    if(!list.length) cards = '<div class="rstr-empty">无匹配人员，请调整筛选条件。</div>';
    return cards;
  }

  function rosterOverviewHTML(){
    var groups = uniqueVal('group'), sites = uniqueVal('site'), statuses = ['在职','试用','离职','二次入职'], tags = ['高潜','骨干','后备干部','待提升'];

    return ''
      + headerHTML()
      + '<div class="rstr-bar">'
      +   '<input type="search" class="rstr-search" placeholder="搜索姓名 / 工号 / 组别" autocomplete="off" value="'+esc(_filter.kw)+'" oninput="rosterSearch(this.value)">'
      +   sel('rstr-group-sel','组别', groups, _filter.group, 'rosterFilter(\'group\',this.value)')
      +   sel('rstr-site-sel','职场', sites, _filter.site, 'rosterFilter(\'site\',this.value)')
      +   sel('rstr-status-sel','状态', statuses, _filter.status, 'rosterFilter(\'status\',this.value)')
      +   sel('rstr-tag-sel','人才标签', tags, _filter.tag, 'rosterFilter(\'tag\',this.value)')
      +   '<button class="rstr-btn" onclick="rosterImportClick()">⬆ 导入钉钉名单</button>'
      +   '<button class="rstr-btn rstr-btn-ghost" onclick="rosterExport()">⬇ 导出</button>'
      +   '<input type="file" id="rstr-file" accept=".csv" style="display:none" onchange="rosterImportFile(this)">'
      + '</div>'
      + '<div class="rstr-grid" id="rstr-grid">'+rosterGridInner()+'</div>';
  }

  function rosterReviewHTML(){
    var p = loadPersonnel();
    var r = loadReview();
    var echelonCount = {一线:0,骨干:0,后备:0,管理:0};
    var tagCount = {};
    var jobTitleCount = {}, jobGradeCount = {};
    var placed = {};
    p.forEach(function(it){
      var rv = r[it.empId]; if(!rv) return;
      (rv.tags||[]).forEach(function(t){ tagCount[t] = (tagCount[t]||0)+1; });
      if(rv.echelon) echelonCount[rv.echelon] = (echelonCount[rv.echelon]||0)+1;
      if(it.jobTitle) jobTitleCount[it.jobTitle] = (jobTitleCount[it.jobTitle]||0)+1;
      if(it.jobGrade) jobGradeCount[it.jobGrade] = (jobGradeCount[it.jobGrade]||0)+1;
      var dt = sumObj(rv.deptScores), ht = sumObj(rv.hrScores);
      if(dt || ht){ var c = cellOf(dt,ht); (placed[c.id] = placed[c.id]||[]).push(it); }
    });
    // 紧凑快照：4个梯队数字（横向）
    var echelons = [['一线',echelonCount['一线']||0],['骨干',echelonCount['骨干']||0],['后备',echelonCount['后备']||0],['管理',echelonCount['管理']||0]];
    var snapNums = echelons.map(function(e){ return '<div style="min-width:44px;text-align:center;"><div style="font-size:24px;font-weight:700;color:#4f46e5;line-height:1;">'+e[1]+'</div><div style="font-size:12px;color:#64748b;margin-top:3px;">'+esc(e[0])+'</div></div>'; }).join('');
    var tagDist = Object.keys(tagCount).map(function(t){ return '<span class="rstr-dist">'+esc(t)+' '+tagCount[t]+'</span>'; }).join('') || '<span class="rstr-dist">暂无</span>';

    // 九宫格：行 dept(high→low)，列 hr(low→high)
    var rows = ['high','mid','low'];
    var cols = ['low','mid','high'];
    var grid = '<div class="rstr-nine">';
    rows.forEach(function(rb){
      cols.forEach(function(hb){
        var c = NINE[rb][hb];
        var people = (placed[c.id]||[]).map(function(it){
          return '<span class="rstr-nine-chip" onclick="rosterOpenDetail(\''+it.empId+'\')">'+esc(it.name)+'</span>';
        }).join('');
        grid += '<div class="rstr-nine-cell '+c.cls+'">'
          + '<div class="rstr-nine-head"><b>'+c.id+'</b> '+esc(c.label)+' '+esc(c.sym)+'</div>'
          + '<div class="rstr-nine-people">'+people+'</div></div>';
      });
    });
    grid += '</div>'
      + '<div class="rstr-nine-axis">纵轴：部门维度（满分35，高 ≥30 / 中 20-29 / 低 ＜20）；横轴：人力维度（满分100，高 ≥85 / 中 65-84 / 低 ＜65），评分在本版块手动录入</div>';

    var jobTitleDist = Object.keys(jobTitleCount).map(function(t){ return '<span class="rstr-dist">'+esc(t)+' '+jobTitleCount[t]+'</span>'; }).join('') || '<span class="rstr-dist">暂无</span>';
    var jobGradeDist = Object.keys(jobGradeCount).sort(function(a,b){ return Number(a)-Number(b); }).map(function(t){ return '<span class="rstr-dist">'+esc(t)+' 级 '+jobGradeCount[t]+'</span>'; }).join('') || '<span class="rstr-dist">暂无</span>';

    return ''
      + headerHTML()
      + '<div style="background:#f7f9fc;border:1px solid #e8edf3;border-radius:12px;padding:12px 16px;margin:6px 0 4px;display:flex;flex-wrap:wrap;gap:20px;align-items:center;">'
      +   '<div style="display:flex;gap:18px;">'+snapNums+'</div>'
      +   '<div style="flex:1;min-width:240px;border-left:1px dashed #d5dbe5;padding-left:20px;">'
      +     '<div class="rstr-dist-row" style="margin:0 0 4px;"><span class="rstr-dist-label">人才标签分布：</span>'+tagDist+'</div>'
      +     '<div class="rstr-dist-row" style="margin:0 0 4px;"><span class="rstr-dist-label">按职级分布：</span>'+jobTitleDist+'</div>'
      +     '<div class="rstr-dist-row" style="margin:0;"><span class="rstr-dist-label">按职位等级分布：</span>'+jobGradeDist+'</div>'
      +   '</div>'
      + '</div>'
      + '<div style="font-size:12px;color:#94a3b8;margin:0 0 12px 4px;">以上数字根据当前人员盘点数据自动统计，点击人员卡片可编辑盘点信息。</div>'
      + '<div style="text-align:right;margin:2px 0 12px;"><button class="rstr-btn rstr-btn-ghost" onclick="rosterExportOutput()">⬇ 导出管理输出表</button></div>'
      + '<div class="rstr-nine-title">人才九宫格</div>'
      + grid;
  }

  function headerHTML(){
    return ''
      + '<div class="rstr-header">'
      +   '<div><div class="rstr-title">人才盘点花名册</div>'
      +   '<div class="rstr-desc">长信客服团队 · 人才梯队建设</div></div>'
      +   '<div class="rstr-tabs">'
      +     '<span class="rstr-tab '+( _view==='overview'?'on':'')+'" onclick="rosterSwitch(\'overview\')">人员总览</span>'
      +     '<span class="rstr-tab '+( _view==='review'?'on':'')+'" onclick="rosterSwitch(\'review\')">人才盘点</span>'
      +   '</div>'
      + '</div>';
  }
  function statCard(lbl, val, cls){ return '<div class="rstr-stat '+cls+'"><div class="rstr-stat-val">'+val+'</div><div class="rstr-stat-lbl">'+lbl+'</div></div>'; }
  function uniqueVal(field){ var p = loadPersonnel(), s = {}; p.forEach(function(it){ s[it[field]] = 1; }); return Object.keys(s); }
  function sel(id, label, opts, val, onch){
    var o = '<option value="all">全部'+label+'</option>' + opts.map(function(v){ return '<option value="'+esc(v)+'"'+(v===val?' selected':'')+'>'+esc(v)+'</option>'; }).join('');
    return '<select class="rstr-sel" onchange="'+onch+'">'+o+'</select>';
  }

  // ——— 筛选 / 视图切换 ———
  window.rosterSwitch = function(v){ _view = v; _moduleCache['roster']=null; renderModule('roster'); };
  window.rosterSearch = function(v){
    _filter.kw = v;
    var grid = document.getElementById('rstr-grid');
    if(grid && _view === 'overview'){
      grid.innerHTML = rosterGridInner();   // 只刷新卡片区，搜索框不失焦
    } else {
      _moduleCache['roster'] = null; renderModule('roster');
    }
  };
  window.rosterFilter = function(field, v){ _filter[field] = v; _moduleCache['roster']=null; renderModule('roster'); };

  // ——— 个人档案抽屉 ———
  window.rosterOpenDetail = function(empId){
    _openId = empId;
    var p = loadPersonnel().filter(function(x){ return x.empId === empId; })[0];
    if(!p) return;
    var r = loadReview()[empId] || {tags:[],deptScores:{},hrScores:{},events:[],comment:'',echelon:''};
    var dt = sumObj(r.deptScores), ht = sumObj(r.hrScores);
    var cell = (dt||ht) ? cellOf(dt,ht) : null;
    var tagHtml = (r.tags||[]).map(function(t){ return '<span class="rstr-tag">'+esc(t)+'</span>'; }).join(' ') || '—';
    var events = (r.events||[]).slice().sort(function(a,b){ return (a.date||'').localeCompare(b.date||''); }).map(function(ev){
      return '<div class="rstr-tl-item"><span class="rstr-tl-dot"></span>'
        + '<div class="rstr-tl-date">'+esc(ev.date||'')+'</div>'
        + '<div class="rstr-tl-title">'+esc(ev.title||'')+'</div>'
        + (ev.detail ? '<div class="rstr-tl-detail">'+esc(ev.detail)+'</div>' : '')
        + '</div>';
    }).join('') || '<div class="rstr-tl-empty">暂无发展事件记录</div>';

    var html = ''
      + '<div class="rstr-drawer-mask" onclick="rosterCloseDetail()"></div>'
      + '<div class="rstr-drawer">'
      +   '<div class="rstr-drawer-head"><div class="rstr-avatar rstr-avatar-lg">'+esc(p.name.charAt(0))+'</div>'
      +     '<div><div class="rstr-drawer-name">'+esc(p.name)+' <span class="rstr-emp">'+esc(p.empId)+'</span></div>'
      +     '<div class="rstr-status '+statusClass(p.status)+'">'+esc(p.status)+'</div></div>'
      +     '<span class="rstr-close" onclick="rosterCloseDetail()">✕</span></div>'
      +   '<div class="rstr-drawer-sec"><div class="rstr-drawer-sec-t">基础信息</div>'
      +     '<div class="rstr-info-grid">'
      +       infoItem('组别', p.group) + infoItem('职场', p.site)
      +       infoItem('岗位', p.position) + infoItem('职级', p.jobTitle||'—')
      +       infoItem('职位等级', (p.jobGrade? p.jobGrade+' 级':'—')) + infoItem('性别', p.gender||'—')
      +       infoItem('出生年月', p.birth||'—') + infoItem('学历', p.edu||'—')
      +       infoItem('毕业院校', p.school||'—') + infoItem('毕业时间', p.gradTime||'—')
      +       infoItem('入职日期', p.hireDate) + infoItem('司龄', tenure(p.hireDate))
      +       infoItem('直属上级', p.manager)
      +     '</div></div>'
      +   '<div class="rstr-drawer-sec"><div class="rstr-drawer-sec-t">人才盘点</div>'
      +     '<div class="rstr-info-grid">'
      +       infoItem('人才标签', tagHtml) + infoItem('梯队层级', r.echelon||'—')
      +       infoItem('部门维度分', dt+' / 35') + infoItem('人力维度分', ht+' / 100')
      +     '</div>'
      +     (cell ? '<div class="rstr-cell-badge '+cell.cls+'">九宫格落位：'+esc(cell.label)+' '+esc(cell.sym)+'</div>' : '<div class="rstr-cell-badge rstr-n9-mid">尚未盘点</div>')
      +     (r.comment ? '<div class="rstr-comment">盘点评语：'+esc(r.comment)+'</div>' : '')
      +   '</div>'
      +   '<div class="rstr-drawer-sec"><div class="rstr-drawer-sec-t">盘点结果输出</div>'
      +     '<div class="rstr-info-grid">'
      +       infoItem('岗位适配度', (r.jobFit>0? r.jobFit+' / 4':'—')) + infoItem('九宫格编号', cell? (cell.id+' 号'):'—')
      +       infoItem('2026 KPI', (r.kpi2026>0? r.kpi2026:'—')) + infoItem('2027 KPI', (r.kpi2027>0? r.kpi2027:'—'))
      +       infoItem('获奖情况', r.awards||'—')
      +     '</div>'
      +     (r.strength && r.strength!=='—' ? '<div class="rstr-comment">性格优势：'+esc(r.strength)+'</div>' : '')
      +     (r.risk && r.risk!=='—' ? '<div class="rstr-comment">性格风险：'+esc(r.risk)+'</div>' : '')
      +   '</div>'
      +   '<div class="rstr-drawer-sec"><div class="rstr-drawer-sec-t">职业发展时间线</div>'
      +     '<div class="rstr-tl">'+events+'</div></div>'
      +   '<div class="rstr-drawer-actions">'
      +     '<button class="rstr-btn" onclick="rosterAddEvent(\''+empId+'\')">+ 新增事件</button>'
      +     '<button class="rstr-btn rstr-btn-ghost" onclick="rosterEditReview(\''+empId+'\')">编辑盘点 / 评分</button>'
      +   '</div>'
      + '</div>';
    rosterMount(html, 'rstr-drawer-root');
  };
  window.rosterCloseDetail = function(){ var m = document.getElementById('rstr-drawer-root'); if(m) m.remove(); _openId = null; };
  function infoItem(k, v){ return '<div class="rstr-info"><span class="rstr-info-k">'+esc(k)+'</span><span class="rstr-info-v">'+v+'</span></div>'; }
  function tenure(hire){
    if(!hire) return '—';
    var d = new Date(hire), now = new Date();
    var y = now.getFullYear() - d.getFullYear();
    return y + ' 年+';
  }

  // ——— 事件新增 ———
  window.rosterAddEvent = function(empId){
    var types = ['入职','晋升','调岗','获荣誉头衔','二次入职','离职','复职','其他'];
    var html = ''
      + '<div class="rstr-modal-mask" onclick="rosterCloseModal()"></div>'
      + '<div class="rstr-modal"><div class="rstr-modal-t">新增发展事件</div>'
      +   '<label class="rstr-fld">事件类型<select id="rstr-ev-type" class="rstr-input">'+types.map(function(t){return '<option>'+t+'</option>';}).join('')+'</select></label>'
      +   '<label class="rstr-fld">发生日期<input id="rstr-ev-date" class="rstr-input" type="date"></label>'
      +   '<label class="rstr-fld">事件标题<input id="rstr-ev-title" class="rstr-input" placeholder="如：晋升 组长"></label>'
      +   '<label class="rstr-fld">详情说明<textarea id="rstr-ev-detail" class="rstr-input" rows="3"></textarea></label>'
      +   '<div class="rstr-modal-actions"><button class="rstr-btn" onclick="rosterSaveEvent(\''+empId+'\')">保存</button>'
      +   '<button class="rstr-btn rstr-btn-ghost" onclick="rosterCloseModal()">取消</button></div>'
      + '</div>';
    rosterMount(html, 'rstr-modal-root');
  };
  window.rosterSaveEvent = function(empId){
    var type = val('rstr-ev-type'), date = val('rstr-ev-date'), title = val('rstr-ev-title').trim(), detail = val('rstr-ev-detail').trim();
    if(!title){ alert('请填写事件标题'); return; }
    var r = loadReview(); if(!r[empId]) r[empId] = {tags:[],deptScores:{},hrScores:{},events:[]};
    var evs = r[empId].events || [];
    evs.push({ id:'EV'+Date.now(), type:type, date:date, title:title, detail:detail, by: (typeof CURRENT_USER!=='undefined'&&CURRENT_USER&&CURRENT_USER.name)?CURRENT_USER.name:'管理员' });
    r[empId].events = evs; saveReview(r);
    rosterCloseModal(); _moduleCache['roster']=null; renderModule('roster');
    if(_openId === empId) rosterOpenDetail(empId);
  };

  // ——— 盘点 / 评分编辑 ———
  window.rosterEditReview = function(empId){
    var p = loadPersonnel().filter(function(x){ return x.empId === empId; })[0] || {};
    var r = loadReview()[empId] || {tags:[],deptScores:{},hrScores:{},events:[],comment:'',echelon:''};
    var tags = ['高潜','骨干','后备干部','待提升'];
    var tagChk = tags.map(function(t){
      var on = (r.tags||[]).indexOf(t) >= 0;
      return '<label class="rstr-chk"><input type="checkbox" value="'+t+'"'+(on?' checked':'')+'> '+t+'</label>';
    }).join('');
    var echelonOpts = ['一线','骨干','后备','管理'].map(function(e){ return '<option'+(r.echelon===e?' selected':'')+'>'+e+'</option>'; }).join('');
    var deptInputs = DEPT_DIMS.map(function(d){ return scoreInput('rstr-d-'+d, d, r.deptScores[d]||0, 6); }).join('');
    var hrInputs = HR_DIMS.map(function(d){ return scoreInput('rstr-h-'+d, d, r.hrScores[d]||0, 17); }).join('');
    var html = ''
      + '<div class="rstr-modal-mask" onclick="rosterCloseModal()"></div>'
      + '<div class="rstr-modal rstr-modal-lg"><div class="rstr-modal-t">编辑盘点 / 评分</div>'
      +   '<div class="rstr-fld"><span class="rstr-fld-lbl">人才标签</span><div class="rstr-chk-row">'+tagChk+'</div></div>'
      +   '<label class="rstr-fld">梯队层级<select id="rstr-echelon" class="rstr-input"><option value="">未定</option>'+echelonOpts+'</select></label>'
      +   '<div class="rstr-scores"><div class="rstr-scores-col"><div class="rstr-scores-h">部门维度（满分35）</div>'+deptInputs+'<div class="rstr-scores-tot">合计：<b id="rstr-d-tot">'+sumObj(r.deptScores)+'</b> / 35</div></div>'
      +   '<div class="rstr-scores-col"><div class="rstr-scores-h">人力维度（满分100）</div>'+hrInputs+'<div class="rstr-scores-tot">合计：<b id="rstr-h-tot">'+sumObj(r.hrScores)+'</b> / 100</div></div></div>'
      +   '<div class="rstr-fld"><span class="rstr-fld-lbl">盘点结果输出</span>'
      +     '<div class="rstr-info-grid">'
      +       '<label class="rstr-info"><span class="rstr-info-k">岗位适配度(1-4)</span><input id="rstr-jobfit" class="rstr-input rstr-input-num" type="number" min="0" max="4" value="'+Number(r.jobFit||0)+'"></label>'
      +       '<label class="rstr-info"><span class="rstr-info-k">职位等级(1-6)</span><input id="rstr-jobgrade" class="rstr-input rstr-input-num" type="number" min="1" max="6" value="'+Number(p.jobGrade||1)+'"></label>'
      +       '<label class="rstr-info"><span class="rstr-info-k">2026 KPI(百分制)</span><input id="rstr-kpi26" class="rstr-input rstr-input-num" type="number" min="0" max="100" value="'+Number(r.kpi2026||0)+'"></label>'
      +       '<label class="rstr-info"><span class="rstr-info-k">2027 KPI(百分制)</span><input id="rstr-kpi27" class="rstr-input rstr-input-num" type="number" min="0" max="100" value="'+Number(r.kpi2027||0)+'"></label>'
      +     '</div></div>'
      +   '<label class="rstr-fld">性格优势<textarea id="rstr-strength" class="rstr-input" rows="2">'+esc(r.strength||'')+'</textarea></label>'
      +   '<label class="rstr-fld">性格风险<textarea id="rstr-risk" class="rstr-input" rows="2">'+esc(r.risk||'')+'</textarea></label>'
      +   '<label class="rstr-fld">获奖情况<textarea id="rstr-awards" class="rstr-input" rows="2">'+esc(r.awards||'')+'</textarea></label>'
      +   '<label class="rstr-fld">盘点评语<textarea id="rstr-comment" class="rstr-input" rows="2">'+esc(r.comment||'')+'</textarea></label>'
      +   '<div class="rstr-modal-actions"><button class="rstr-btn" onclick="rosterSaveReview(\''+empId+'\')">保存</button>'
      +   '<button class="rstr-btn rstr-btn-ghost" onclick="rosterCloseModal()">取消</button></div>'
      + '</div>';
    rosterMount(html, 'rstr-modal-root');
    bindScoreLive();
  };
  window.rosterSaveReview = function(empId){
    var r = loadReview(); if(!r[empId]) r[empId] = {tags:[],deptScores:{},hrScores:{},events:[]};
    var tags = []; document.querySelectorAll('#rstr-drawer-root .rstr-chk input, .rstr-modal .rstr-chk input').forEach(function(c){ if(c.checked) tags.push(c.value); });
    var echelon = val('rstr-echelon');
    var deptScores = {}, hrScores = {};
    DEPT_DIMS.forEach(function(d){ deptScores[d] = Number(val('rstr-d-'+d)||0); });
    HR_DIMS.forEach(function(d){ hrScores[d] = Number(val('rstr-h-'+d)||0); });
    var comment = val('rstr-comment').trim();
    var jobFit = Number(val('rstr-jobfit')||0);
    var jobGrade = Number(val('rstr-jobgrade')||0);
    var kpi2026 = Number(val('rstr-kpi26')||0);
    var kpi2027 = Number(val('rstr-kpi27')||0);
    var strength = val('rstr-strength').trim();
    var risk = val('rstr-risk').trim();
    var awards = val('rstr-awards').trim();
    r[empId].tags = tags; r[empId].echelon = echelon; r[empId].deptScores = deptScores;
    r[empId].hrScores = hrScores; r[empId].comment = comment;
    r[empId].jobFit = jobFit; r[empId].kpi2026 = kpi2026; r[empId].kpi2027 = kpi2027;
    r[empId].strength = strength; r[empId].risk = risk; r[empId].awards = awards;
    var pp = loadPersonnel(); var pe = pp.filter(function(x){ return x.empId === empId; })[0];
    if(pe && jobGrade) pe.jobGrade = jobGrade;
    savePersonnel(pp);
    saveReview(r);
    rosterCloseModal(); _moduleCache['roster']=null; renderModule('roster');
    if(_openId === empId) rosterOpenDetail(empId);
  };
  function scoreInput(id, label, v, max){
    return '<label class="rstr-score"><span>'+esc(label)+'</span><input id="'+id+'" class="rstr-input rstr-input-num" type="number" min="0" max="'+max+'" value="'+Number(v||0)+'" oninput="rosterScoreLive()"></label>';
  }
  function bindScoreLive(){ rosterScoreLive(); }
  window.rosterScoreLive = function(){
    var d = 0, h = 0;
    DEPT_DIMS.forEach(function(x){ d += Number(val('rstr-d-'+x)||0); });
    HR_DIMS.forEach(function(x){ h += Number(val('rstr-h-'+x)||0); });
    var dt = document.getElementById('rstr-d-tot'); if(dt) dt.textContent = d;
    var ht = document.getElementById('rstr-h-tot'); if(ht) ht.textContent = h;
  };

  // ——— 导入 / 导出 ———
  window.rosterImportClick = function(){ var f = document.getElementById('rstr-file'); if(f) f.click(); };
  window.rosterImportFile = function(input){
    var file = input.files && input.files[0]; if(!file) return;
    var reader = new FileReader();
    reader.onload = function(e){
      try {
        var text = e.target.result; var lines = text.split(/\r?\n/).filter(function(l){ return l.trim(); });
        if(!lines.length){ alert('文件为空'); return; }
        var header = lines[0].split(',').map(function(s){ return s.trim(); });
        var idx = function(name){ return header.indexOf(name); };
        var p = loadPersonnel(); var r = loadReview();
        var mapName = idx('姓名'), mapId = idx('工号'), mapGrp = idx('组别'), mapSite = idx('职场'),
            mapPos = idx('岗位'), mapSt = idx('状态'), mapHire = idx('入职日期'), mapMgr = idx('直属上级'),
            mapGender = idx('性别'), mapBirth = idx('出生年月'), mapEdu = idx('学历'), mapSchool = idx('毕业院校'),
            mapGrad = idx('毕业时间'), mapJobTitle = idx('职级'), mapJobGrade = idx('职位等级'), mapJobFit = idx('岗位适配度');
        var added = 0;
        for(var i=1;i<lines.length;i++){
          var cols = lines[i].split(',');
          var empId = (mapId>=0?cols[mapId]:'').trim() || ('E'+Date.now()+i);
          var name = (mapName>=0?cols[mapName]:'').trim();
          if(!name) continue;
          var ex = p.filter(function(x){ return x.empId === empId; })[0];
          var rec = { empId:empId, name:name,
            group:(mapGrp>=0?cols[mapGrp]:'').trim(), site:(mapSite>=0?cols[mapSite]:'').trim(),
            position:(mapPos>=0?cols[mapPos]:'').trim(), status:(mapSt>=0?cols[mapSt]:'').trim()||'在职',
            hireDate:(mapHire>=0?cols[mapHire]:'').trim(), manager:(mapMgr>=0?cols[mapMgr]:'').trim(),
            gender:(mapGender>=0?cols[mapGender]:'').trim(), birth:(mapBirth>=0?cols[mapBirth]:'').trim(),
            edu:(mapEdu>=0?cols[mapEdu]:'').trim(), school:(mapSchool>=0?cols[mapSchool]:'').trim(),
            gradTime:(mapGrad>=0?cols[mapGrad]:'').trim(), jobTitle:(mapJobTitle>=0?cols[mapJobTitle]:'').trim(),
            jobGrade: mapJobGrade>=0 ? Number(cols[mapJobGrade]||0) : 0 };
          if(ex){ Object.assign(ex, rec); } else { p.push(rec); added++; }
          if(!r[empId]) r[empId] = {tags:[],deptScores:{},hrScores:{},events:[]};
          if(mapJobFit>=0){ var jf = Number(cols[mapJobFit]||0); if(jf) r[empId].jobFit = jf; }
        }
        savePersonnel(p); saveReview(r);
        _moduleCache['roster']=null; renderModule('roster');
        alert('导入完成：新增 '+added+' 人，其余按工号更新基础信息（职业事件保留）。');
      } catch(err){ alert('导入失败：'+err.message); }
    };
    reader.readAsText(file, 'UTF-8');
    input.value = '';
  };
  window.rosterExport = function(){
    var p = loadPersonnel(), r = loadReview();
    var rows = [['工号','姓名','组别','职场','岗位','状态','入职日期','直属上级','人才标签','梯队','部门维度分','人力维度分','职业事件数']];
    p.forEach(function(it){
      var rv = r[it.empId] || {tags:[],dechelon:'',deptScores:{},hrScores:{},events:[]};
      rows.push([ it.empId, it.name, it.group, it.site, it.position, it.status, it.hireDate, it.manager,
        (rv.tags||[]).join('|'), rv.echelon||'', sumObj(rv.deptScores), sumObj(rv.hrScores), (rv.events||[]).length ]);
    });
    var csv = rows.map(function(row){ return row.map(function(c){ return '"'+String(c==null?'':c).replace(/"/g,'""')+'"'; }).join(','); }).join('\r\n');
    var blob = new Blob(['\uFEFF'+csv], {type:'text/csv;charset=utf-8'});
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = '人才盘点花名册_'+new Date().toISOString().slice(0,10)+'.csv'; a.click();
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
  };
  window.rosterExportOutput = function(){
    var p = loadPersonnel(), r = loadReview();
    var head = ['工号','姓名','组别','职场','岗位','职级','职位等级','性别','出生年月','学历','毕业院校','毕业时间','状态','入职日期','直属上级','人才标签','梯队','部门维度分','人力维度分','九宫格编号','岗位适配度','2026KPI','2027KPI','性格优势','性格风险','获奖','职业事件数'];
    var rows = [head];
    p.forEach(function(it){
      var rv = r[it.empId] || {};
      var dt = sumObj(rv.deptScores||{}), ht = sumObj(rv.hrScores||{});
      var cell = (dt||ht) ? cellOf(dt,ht) : null;
      rows.push([
        it.empId, it.name, it.group, it.site, it.position, it.jobTitle||'', it.jobGrade||'',
        it.gender||'', it.birth||'', it.edu||'', it.school||'', it.gradTime||'',
        it.status, it.hireDate, it.manager,
        (rv.tags||[]).join('|'), rv.echelon||'', dt, ht, cell? cell.id : '',
        (rv.jobFit>0? rv.jobFit:''), (rv.kpi2026>0?rv.kpi2026:''), (rv.kpi2027>0?rv.kpi2027:''),
        rv.strength||'', rv.risk||'', rv.awards||'', (rv.events||[]).length
      ]);
    });
    var csv = rows.map(function(row){ return row.map(function(c){ return '"'+String(c==null?'':c).replace(/"/g,'""')+'"'; }).join(','); }).join('\r\n');
    var blob = new Blob(['\uFEFF'+csv], {type:'text/csv;charset=utf-8'});
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob);
    a.download = '人才盘点管理输出表_'+new Date().toISOString().slice(0,10)+'.csv'; a.click();
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
  };

  // ——— 通用弹层 ———
  function rosterMount(html, rootId){
    var root = document.getElementById(rootId);
    if(!root){ root = document.createElement('div'); root.id = rootId; document.body.appendChild(root); }
    root.innerHTML = html;
  }
  window.rosterCloseModal = function(){ var m = document.getElementById('rstr-modal-root'); if(m) m.remove(); };
  function val(id){ var el = document.getElementById(id); return el ? el.value : ''; }

})();
