// modules/systemData.js — 系统数据管理模块
/* ═══════════════════ 系统数据管理 ═══════════════════ */
function renderSystemData(){return _renderSystemData();}

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

