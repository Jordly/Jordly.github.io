// modules/knowledge.js — 知识能量池模块 · 微博化设计 v3
/* ═══════════════════ 知识能量池 ═══════════════════ */
function renderKnowledge(){
  try {

  var can = canEdit();
  var totalKnowledge = KNOWLEDGE.length;
  var weekNew = KNOWLEDGE.filter(function(k){ if(!k.createdAt)return false; var d=new Date(k.createdAt),n=new Date(),w=new Date(n.getTime()-7*86400000); return d>=w; }).length;
  var totalViews = KNOWLEDGE.reduce(function(s,k){return s+(k.views||0);},0);
  var highCount = KNOWLEDGE.filter(function(k){return k.priority==='high';}).length;

  var domainOrder = ['方法论与框架','流程与SOP','成本与核算','风控与应急','人员管理','客诉与话术','效率与AI','培训与入门'];
  var domainCounts = {}; KNOWLEDGE.forEach(function(k){domainCounts[k.domain]=(domainCounts[k.domain]||0)+1;});
  var domainIcons = { '风控与应急':'⚡','成本与核算':'¥','效率与AI':'⚙','流程与SOP':'▤','人员管理':'⌘','培训与入门':'📖','客诉与话术':'⌬','方法论与框架':'◇' };
  var domainColors = { '风控与应急':'#A32D2D','成本与核算':'#3B6D11','效率与AI':'#185FA5','流程与SOP':'#0F6E56','人员管理':'#993556','培训与入门':'#854F0B','客诉与话术':'#72243E','方法论与框架':'#534AB7' };

  var top6 = [...KNOWLEDGE].sort(function(a,b){return (b.views||0)-(a.views||0);}).slice(0,6);

  // 收藏数据
  var favIds = [];
  try { favIds = JSON.parse(localStorage.getItem('kyp_favorites')||'[]'); }catch(e){}
  var favCount = KNOWLEDGE.filter(function(k){return favIds.indexOf(k.id)>=0;}).length;

  // 构建知识流
  function buildStream(){
    var order = {high:0,normal:1,low:2};
    return [...KNOWLEDGE].sort(function(a,b){return order[a.priority||'normal']-(order[b.priority||'normal']);}).map(function(k){
      var dc = domainColors[k.domain]||'#534AB7';
      var isFav = favIds.indexOf(k.id)>=0;
      var high = k.priority==='high';
      return '<div class="kp-post'+(high?' kp-high':'')+'" data-domain="'+(k.domain||'')+'" data-search="'+(k.title+' '+(k.description||'')+' '+k.tags).toLowerCase()+'" data-id="'+k.id+'">'
        +'<div class="kp-post-head">'
          +'<div class="kp-post-avatar" style="background:'+dc+'">'+(domainIcons[k.domain]||'★')+'</div>'
          +'<div class="kp-post-meta">'
            +'<div class="kp-post-author">'+k.title+'</div>'
            +'<div class="kp-post-source">'+(k.domain||'未分类')+' · '+(k.updateTime||k.createdAt||'')+ (k.projectId?' · 项目:'+k.projectId:'') + (k.fileUrl?' · 📎附件':'')+'</div>'
          +'</div>'
          +'<div class="kp-post-badges">'
            +(k.priority==='high'?'<span class="kp-badge-high">优先</span>':'')
            +(k.priority==='low'?'<span class="kp-badge-low">参考</span>':'')
            +(isFav?'<span class="kp-badge-fav">♥</span>':'')
          +'</div>'
        +'</div>'
        +'<div class="kp-post-body">'
          +'<div class="kp-post-desc">'+(k.short || (k.description||'').slice(0,80))+'</div>'
          +'<div class="kp-post-tags">'+((k.tags||'').split(',').slice(0,4).map(function(t){return '<span>'+t.trim()+'</span>';}).join(''))+'</div>'
        +'</div>'
        +'<div class="kp-post-foot">'
          +'<span class="kp-action" onclick="kpToggleFav('+k.id+',event)"><span>'+(isFav?'♥':'♡')+'</span></span>'
          +'<span class="kp-action" onclick="kpCopyCitation('+k.id+',event)"><span>📋</span>复制引用</span>'
          +'<span class="kp-action"><span>👁</span>'+(k.views||0)+'</span>'
          +'<span class="kp-action"><span>💬</span>'+(k.relatedIds||[]).length+'</span>'
          +'<span class="kp-action"><span>⬇</span>'+(k.downloads||0)+'</span>'
        +'</div>'
      +'</div>';
    }).join('');
  }

  return ''
  +'<div class="kp-topbar">'
    +'<div class="kp-topbar-left"><div class="kp-title">核心知识能量池</div><div class="kp-desc">客服团队经验沉淀与知识共享中心</div></div>'
    +'<div class="kp-topbar-right">'
      +(can?'<button class="btn btn-sm btn-primary" onclick="addKnowledge()">＋ 添加知识</button>':'')
    +'</div>'
  +'</div>'

  +'<div class="kp-layout">'

  // 左栏：领域导航 + 统计
  +'<div class="kp-left">'
    +'<div class="kp-left-block">'
      +'<div class="kp-left-title">知识领域</div>'
      +'<div class="kp-domain-item kp-domain-active" data-domain="all" onclick="kpSwitchDomain(\'all\',this)">全部<span>'+totalKnowledge+'</span></div>'
      + domainOrder.filter(function(d){return domainCounts[d];}).map(function(d){
          return '<div class="kp-domain-item" data-domain="'+d+'" onclick="kpSwitchDomain(\''+d+'\',this)"><span style="color:'+(domainColors[d]||'#534AB7')+'">'+(domainIcons[d]||'★')+'</span>'+d+'<span>'+domainCounts[d]+'</span></div>';
        }).join('')
    +'</div>'
    +'<div class="kp-left-block">'
      +'<div class="kp-left-title">我的收藏</div>'
      +'<div class="kp-domain-item" onclick="kpShowFavorites()">♥ 已收藏<span>'+favCount+'</span></div>'
    +'</div>'
    +'<div class="kp-stat-row">'
      +'<div class="kp-stat-card" id="kp-stat-total"><div class="kp-stat-val">'+totalKnowledge+'</div><div class="kp-stat-lbl">知识总量</div></div>'
      +'<div class="kp-stat-card" id="kp-stat-high"><div class="kp-stat-val">'+highCount+'</div><div class="kp-stat-lbl">高优先级</div></div>'
      +'<div class="kp-stat-card" id="kp-stat-new"><div class="kp-stat-val">'+weekNew+'</div><div class="kp-stat-lbl">本周新增</div></div>'
    +'</div>'
  +'</div>'

  // 中栏：搜索 + 信息流
  +'<div class="kp-center">'
    +'<div class="kp-search-row">'
      +'<input type="text" id="kp-search" placeholder="搜索知识标题、标签、内容..." oninput="kpStreamSearch(this.value)">'
      +'<select id="kp-prio" onchange="kpStreamSearch(document.getElementById(\'kp-search\').value)"><option value="all">全部优先级</option><option value="high">仅高优</option><option value="normal">常规</option></select>'
    +'</div>'
    +'<div class="kp-stream" id="kp-stream">'+buildStream()+'</div>'
    +'<div class="kp-empty" id="kp-empty" style="display:none">没有找到匹配的知识</div>'
  +'</div>'

  // 右栏：贡献者 + 热榜
  +'<div class="kp-right">'
    +'<div class="kp-right-block">'
      +'<div class="kp-right-title">知识贡献者</div>'
      + (function(){
        var contrib = {}; KNOWLEDGE.forEach(function(k){var a=k.author||'团队成员';contrib[a]=(contrib[a]||0)+1;});
        return Object.keys(contrib).sort(function(a,b){return contrib[b]-contrib[a];}).slice(0,4).map(function(a){
          return '<div class="kp-contrib"><span class="kp-contrib-ava">'+a.substring(0,1)+'</span><div><div class="kp-contrib-name">'+a+'</div><div class="kp-contrib-meta">'+contrib[a]+'篇知识</div></div></div>';
        }).join('') || '<div style="font-size:11px;color:var(--c-text-3)">暂无贡献数据</div>';
      })()
    +'</div>'
    +'<div class="kp-right-block">'
      +'<div class="kp-right-title">知识热榜</div>'
      + top6.map(function(k,i){
          return '<div class="kp-rank-item" onclick="kpViewDetail('+k.id+')"><span class="kp-rank-num'+(i<3?' kp-rank-top':'')+'">'+(i+1)+'</span><span class="kp-rank-text">'+k.title+'</span><span class="kp-rank-stat">👁 '+(k.views||0)+'</span></div>';
        }).join('')
    +'</div>'
  +'</div>'

  +'</div>';

  } catch(e) { if(typeof addRuntimeLog==='function') addRuntimeLog('error','Knowledge 渲染异常',String(e)); return errorState('知识能量池加载失败','请刷新页面重试'); }
}

/* ═══ 微博化 — 领域切换 ═══ */
function kpSwitchDomain(domain, el) {
  var items = document.querySelectorAll('.kp-domain-item');
  for(var i=0;i<items.length;i++) items[i].classList.remove('kp-domain-active');
  if(el) el.classList.add('kp-domain-active');
  var posts = document.querySelectorAll('.kp-post');
  var visible = 0;
  for(var j=0;j<posts.length;j++) {
    var match = domain==='all' || posts[j].dataset.domain === domain;
    posts[j].style.display = match ? '' : 'none';
    if(match) visible++;
  }
  var empty = document.getElementById('kp-empty'); if(empty) empty.style.display = visible ? 'none' : '';
}

/* ═══ 微博化 — 搜索 + 优先级 ═══ */
function kpStreamSearch(val) {
  var q = (val||'').toLowerCase().trim();
  var prio = (document.getElementById('kp-prio')||{}).value || 'all';
  var active = document.querySelector('.kp-domain-active');
  var domain = active ? active.dataset.domain : 'all';
  var posts = document.querySelectorAll('.kp-post');
  var visible = 0;
  for(var i=0;i<posts.length;i++) {
    var p = posts[i];
    var dm = domain==='all' || p.dataset.domain === domain;
    var pr = prio==='all' || (prio==='high' && p.classList.contains('kp-high')) || (prio==='normal' && !p.classList.contains('kp-high'));
    var sq = !q || (p.dataset.search||'').indexOf(q) >= 0;
    var show = dm && pr && sq;
    p.style.display = show ? '' : 'none';
    if(show) visible++;
  }
  var empty = document.getElementById('kp-empty'); if(empty) empty.style.display = visible ? 'none' : '';
}

/* ═══ 收藏 ═══ */
function kpToggleFav(id, e) {
  if(e) { e.stopPropagation(); e.preventDefault(); }
  var favIds = [];
  try { favIds = JSON.parse(localStorage.getItem('kyp_favorites')||'[]'); }catch(e){}
  var idx = favIds.indexOf(id);
  if(idx >= 0) favIds.splice(idx,1); else favIds.push(id);
  try { localStorage.setItem('kyp_favorites', JSON.stringify(favIds)); }catch(e){}
  if(typeof currentModule!=='undefined' && currentModule==='knowledge') { if(typeof _moduleCache!=='undefined') _moduleCache['knowledge']=null; renderModule('knowledge'); }
}

/* ═══ 只看收藏 ═══ */
function kpShowFavorites() {
  var favIds = [];
  try { favIds = JSON.parse(localStorage.getItem('kyp_favorites')||'[]'); }catch(e){}
  var items = document.querySelectorAll('.kp-domain-item');
  for(var i=0;i<items.length;i++) items[i].classList.remove('kp-domain-active');
  var posts = document.querySelectorAll('.kp-post'); var visible=0;
  for(var j=0;j<posts.length;j++) {
    var id = parseInt(posts[j].dataset.id);
    var show = favIds.indexOf(id) >= 0;
    posts[j].style.display = show ? '' : 'none';
    if(show) visible++;
  }
  document.getElementById('kp-empty').style.display = visible ? 'none' : '';
}

/* ═══ 一键复制引用 ═══ */
function kpCopyCitation(id, e) {
  if(e) { e.stopPropagation(); e.preventDefault(); }
  var k = KNOWLEDGE.find(function(item){return item.id===id;}); if(!k) return;
  var text = '📖 '+k.title+'\n领域：'+(k.domain||'未知')+' | 更新：'+(k.updateTime||'')+'\n摘要：'+(k.short||'')+'\n\n'+(k.description||'');
  if(navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function(){if(typeof showToast==='function') showToast('已复制引用');}).catch(function(){});
  } else {
    var ta = document.createElement('textarea'); ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    if(typeof showToast==='function') showToast('已复制引用');
  }
}

/* ═══ 阅读进度 ═══ */
var _kpReadProgress = {};
(function(){try{_kpReadProgress=JSON.parse(sessionStorage.getItem('kyp_read_progress')||'{}');}catch(e){}})();
function kpSaveReadProgress(id, pct) {
  _kpReadProgress[id] = pct;
  try { sessionStorage.setItem('kyp_read_progress', JSON.stringify(_kpReadProgress)); }catch(e){}
}
function kpGetReadProgress(id) {
  return _kpReadProgress[id] || 0;
}

/* ═══ 查看详情（含阅读进度） ═══ */
function kpViewDetail(id) {
  showKnowledgeDetail(id);
}

/* ═══ 旧版兼容 — kypFilter/kypSearch 转向新函数 ═══ */
function kypFilter(type) { kpSwitchDomain(type, document.querySelector('.kp-domain-item[data-domain="'+type+'"]')); }
function kypSearch(val) { kpStreamSearch(val); }
function kypFilterByTag(tag) { var inp=document.getElementById('kp-search'); if(inp){inp.value=tag;kpStreamSearch(tag);} }
var kypCurrentType = 'all';

// ===== 知识详情弹窗（替代原生 alert）=====
function showKnowledgeDetail(id) {
  var k = KNOWLEDGE.find(function(item) { return item.id === id; });
  if (!k) return;
  // 记录浏览历史
  try {
    var viewed = JSON.parse(sessionStorage.getItem('kyp_recently_viewed') || '[]');
    viewed = viewed.filter(function(vid){ return vid !== id; });
    viewed.unshift(id);
    if (viewed.length > 10) viewed = viewed.slice(0,10);
    sessionStorage.setItem('kyp_recently_viewed', JSON.stringify(viewed));
  } catch(e) {}
  var permIcon = {'公开':'🌐','内部':'🔵','受限':'🔴'};
  var perm = k.permission || '公开';
  // 浏览量 +1
  k.views = (k.views || 0) + 1;
  saveKnowledge();
  var tagHtml = (k.tags || '').split(',').filter(function(t){return t.trim();}).map(function(t){
    return '<span class="kyp-tag-sm" onclick="kypFilterByTag(\'' + t.trim() + '\');closeKnowledgeDetail();" title="点击按此标签筛选">#' + t.trim() + '</span>';
  }).join('');
  var overlay = document.createElement('div');
  overlay.className = 'sd-confirm-overlay kyp-detail-overlay';
  overlay.id = 'kyp-detail-overlay';
  overlay.innerHTML = ''
    + '<div class="sd-confirm-box kyp-detail-box">'
    + '<div class="kyp-detail-header">'
    +   '<div class="kyp-detail-head-top">'
    +     '<span class="kyp-type-badge ktp-' + ((k.domain||'').replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g,'-')) + '">' + (k.domain||'未分类') + '</span>'
    +     (k.projectId ? '<span class="kyp-scope-badge">项目:' + k.projectId + '</span>' : '<span class="kyp-scope-badge">通用</span>')
    +     '<span class="kyp-perm-badge">' + (permIcon[perm]||'🌐') + ' ' + perm + '</span>'
    +   '</div>'
    +   '<div class="kyp-detail-title">' + (k.title||'') + '</div>'
    +   '<div class="kyp-detail-close" onclick="closeKnowledgeDetail()">&times;</div>'
    + '</div>'
    + '<div class="kyp-detail-body">'
    +   (k.description ? '<div class="kyp-detail-desc">' + k.description.replace(/\n/g,'<br>') + '</div>' : '')
    // 附件下载
    +   (k.fileUrl ? '<div style="margin-top:12px;padding:10px 14px;background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;display:flex;align-items:center;justify-content:space-between;gap:10px;"><div style="display:flex;align-items:center;gap:8px;"><span style="font-size:20px;">📎</span><div><div style="font-size:12px;font-weight:600;color:#0c4a6e;">附件资料</div><div style="font-size:10px;color:#0284c7;max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+escHtml(k.fileUrl)+'</div></div></div><a href="'+escHtml(k.fileUrl)+'" target="_blank" class="btn btn-sm btn-primary" style="background:#0ea5e9;border-color:#0ea5e9;flex-shrink:0;text-decoration:none;">📥 查看/下载</a></div>' : '')
    +   (tagHtml ? '<div class="kyp-detail-tags"><div class="kyp-detail-tags-label">标签（点击筛选）：</div>' + tagHtml + '</div>' : '')
    +   '<div class="kyp-detail-meta">'
    +     '<span>📅 更新于 ' + (k.updateTime || k.createdAt || '-') + '</span>'
    +     '<span>👁 ' + (k.views||0) + ' 次浏览</span>'
    +     '<span>⬇ ' + (k.downloads||0) + ' 次下载</span>'
    +   '</div>'
    +   (k.scope ? '<div class="kyp-detail-meta"><span>适用范围：' + k.scope + '</span></div>' : '')
    // 来源标识
    +   (k.sourceType === 'issue' ? '<div class="kyp-detail-meta"><span>💡 来源：问题管理 → 已沉淀为知识</span></div>' : '')
    +   (k.sourceType === 'project' ? '<div class="kyp-detail-meta"><span>📋 来源：课题实践 → 已沉淀为知识</span></div>' : '')
    // 版本历史（折叠）
    +   ((k.versionHistory||[]).length > 0 ? '<div style="margin-top:10px;padding-top:8px;border-top:1px solid #e2e8f0;">'
    +     '<div style="font-size:11px;font-weight:500;color:#64748b;cursor:pointer;margin-bottom:4px;" onclick="var el=this.nextElementSibling;el.style.display=el.style.display===\'none\'?\'block\':\'none\';this.textContent=el.style.display===\'none\'?\'📝 版本记录 ('+(k.versionHistory||[]).length+'次) ▸\':\'📝 版本记录 ('+(k.versionHistory||[]).length+'次) ▾\'">📝 版本记录 ('+(k.versionHistory||[]).length+'次) ▸</div>'
    +     '<div style="display:none;font-size:10px;color:#94a3b8;line-height:1.8;">'
    +       (k.versionHistory||[]).slice().reverse().map(function(v){ return '<div>v'+v.version+' · '+v.time+' · '+v.summary+'</div>'; }).join('')
    +     '</div></div>' : '')
    // 关联知识
    +   ((k.relatedIds||[]).length > 0 ? (()=>{
        var related = KNOWLEDGE.filter(function(rk){ return k.relatedIds.indexOf(rk.id) >= 0 && rk.id !== k.id; });
        return related.length ? '<div style="margin-top:10px;padding-top:8px;border-top:1px solid #e2e8f0;"><div style="font-size:11px;font-weight:500;color:#64748b;margin-bottom:4px;">📎 相关阅读</div>'
          + related.map(function(rk){ return '<div style="font-size:11px;color:#3b82f6;cursor:pointer;padding:3px 0;" onclick="closeKnowledgeDetail();showKnowledgeDetail('+rk.id+')">'+rk.title+'</div>'; }).join('')
          + '</div>' : '';
      })() : '')
    + '</div>'
    + '<div class="sd-confirm-footer">'
    +   (canEdit() ? '<button class="sd-confirm-btn sd-confirm-cancel" onclick="closeKnowledgeDetail();editKnowledge(' + k.id + ')">✎ 编辑</button>' : '')
    +   (canEdit() ? '<button class="sd-confirm-btn sd-confirm-cancel kyp-del-btn" onclick="closeKnowledgeDetail();deleteKnowledge(' + k.id + ')">🗑 删除</button>' : '')
    +   '<button class="sd-confirm-btn sd-confirm-ok" onclick="closeKnowledgeDetail()">关闭</button>'
    + '</div>'
    + '</div>';
  document.body.appendChild(overlay);
  setTimeout(function(){ overlay.classList.add('sd-confirm-show'); }, 10);
  overlay.onclick = function(e){ if(e.target === overlay) closeKnowledgeDetail(); };
}
function closeKnowledgeDetail() {
  var o = document.getElementById('kyp-detail-overlay');
  if (o) { o.classList.remove('sd-confirm-show'); setTimeout(function(){ if(o.parentNode) o.remove(); }, 300); }
  // 刷新统计（浏览量可能变化）
  if (typeof currentModule !== 'undefined' && currentModule === 'knowledge') renderModule('knowledge');
}

// ===== 新增知识 =====
function addKnowledge() {
  showKnowledgeForm(null);
}
function editKnowledge(id) {
  var k = KNOWLEDGE.find(function(item){ return item.id === id; });
  if (!k) return;
  showKnowledgeForm(k);
}
function deleteKnowledge(id) {
  showConfirmModal('确定删除该知识条目吗？此操作不可恢复。', '删除知识', function(){
    KNOWLEDGE = KNOWLEDGE.filter(function(item){ return item.id !== id; });
    saveKnowledge();
    renderModule('knowledge');
    if (typeof showToast === 'function') showToast('已删除知识条目');
  });
}

// ===== 知识表单弹窗 =====
function showKnowledgeForm(record) {
  var isEdit = !!record;
  var domainOptions = ['方法论与框架','流程与SOP','成本与核算','风控与应急','人员管理','客诉与话术','效率与AI','培训与入门'];
  var permOptions = ['公开','内部','受限'];
  var k = record || {};
  var m = document.getElementById('kyp-form-overlay'); if(m) m.remove();
  var overlay = document.createElement('div');
  overlay.className = 'sd-prompt-overlay';
  overlay.id = 'kyp-form-overlay';
  function optHtml(arr, val) {
    return arr.map(function(o){ return '<option value="'+o+'"'+(o===val?' selected':'')+'>'+o+'</option>'; }).join('');
  }
  overlay.innerHTML = ''
    + '<div class="sd-prompt-box kyp-form-box">'
    + '<div class="sd-prompt-header">' + (isEdit?'编辑知识条目':'新增知识条目') + ' <button class="sd-prompt-close" onclick="document.getElementById(\'kyp-form-overlay\').remove()">&times;</button></div>'
    + '<div class="sd-prompt-body">'
    +   '<label>标题</label><div class="sd-prompt-input-wrap"><input type="text" id="kf-title" class="sd-prompt-input" value="'+escHtml(k.title)+'"></div>'
    +   '<div class="kyp-form-row">'
    +     '<div><label>知识领域</label><select id="kf-domain" class="sd-prompt-input">'+optHtml(domainOptions, k.domain||domainOptions[0])+'</select></div>'
    +     '<div><label>关联项目</label><select id="kf-project" class="sd-prompt-input"><option value="">通用（不限项目）</option>'+PROJECTS.map(function(p){return '<option value="'+p.id+'"'+(k.projectId===p.id?' selected':'')+'>'+p.name+'</option>';}).join('')+'</select></div>'
    +   '</div>'
    +   '<div class="kyp-form-row">'
    +     '<div><label>权限</label><select id="kf-permission" class="sd-prompt-input">'+optHtml(permOptions, k.permission||'公开')+'</select></div>'
    +     '<div><label>适用范围</label><input type="text" id="kf-scope" class="sd-prompt-input" value="'+escHtml(k.scope||'通用')+'"></div>'
    +   '</div>'
    +   '<label>简短摘要（卡片显示，建议25字内）</label><div class="sd-prompt-input-wrap"><input type="text" id="kf-short" class="sd-prompt-input" value="'+escHtml(k.short)+'"></div>'
    +   '<label>完整描述</label><div class="sd-prompt-input-wrap"><textarea id="kf-description" class="sd-prompt-input" style="min-height:80px;">'+(k.description||'')+'</textarea></div>'
    +   '<label>附件链接（可填在线文档/网盘地址，方便直接查看课件资料）</label><div class="sd-prompt-input-wrap"><input type="text" id="kf-fileurl" class="sd-prompt-input" value="'+escHtml(k.fileUrl||'')+'" placeholder="如：https://docs.qq.com/xxx 或 网盘链接"></div>'
    +   '<label>标签（逗号分隔）</label><div class="sd-prompt-input-wrap"><input type="text" id="kf-tags" class="sd-prompt-input" value="'+escHtml(k.tags)+'"></div>'
    + '</div>'
    + '<div class="sd-prompt-footer">'
    +   '<button class="sd-confirm-btn sd-confirm-cancel" onclick="document.getElementById(\'kyp-form-overlay\').remove()">取消</button>'
    +   '<button class="sd-confirm-btn sd-confirm-ok" onclick="submitKnowledgeForm(' + (isEdit? k.id : 'null') + ')">保存</button>'
    + '</div>'
    + '</div>';
  document.body.appendChild(overlay);
  setTimeout(function(){ overlay.classList.add('sd-confirm-show'); }, 10);
  overlay.onclick = function(e){ if(e.target === overlay) overlay.remove(); };
}
function submitKnowledgeForm(id) {
  var title = document.getElementById('kf-title').value.trim();
  if (!title) { if(typeof showToast==='function') showToast('标题不能为空'); return; }
  var now = new Date().toISOString().slice(0,10);
  if (id == null) {
    var newId = KNOWLEDGE.reduce(function(m, k){ return Math.max(m, k.id||0); }, 0) + 1;
    KNOWLEDGE.push({
      id: newId,
      title: title,
      domain: document.getElementById('kf-domain').value,
      projectId: document.getElementById('kf-project').value,
      permission: document.getElementById('kf-permission').value,
      scope: document.getElementById('kf-scope').value || '通用',
      fileUrl: document.getElementById('kf-fileurl').value.trim(),
      short: document.getElementById('kf-short').value.trim(),
      description: document.getElementById('kf-description').value.trim(),
      tags: document.getElementById('kf-tags').value.trim(),
      createdAt: now,
      updateTime: now,
      views: 0, downloads: 0,
      relatedIds: [], sourceType: 'manual', sourceId: '',
      version: 1, versionHistory: [], status: 'published'
    });
  } else {
    var k = KNOWLEDGE.find(function(item){ return item.id === id; });
    if (k) {
      k.title = title;
      k.domain = document.getElementById('kf-domain').value;
      k.projectId = document.getElementById('kf-project').value;
      k.fileUrl = document.getElementById('kf-fileurl').value.trim();
      k.permission = document.getElementById('kf-permission').value;
      k.scope = document.getElementById('kf-scope').value || '通用';
      k.short = document.getElementById('kf-short').value.trim();
      k.description = document.getElementById('kf-description').value.trim();
      k.tags = document.getElementById('kf-tags').value.trim();
      k.updateTime = now;
      k.version = (k.version||0) + 1;
      k.versionHistory = k.versionHistory || [];
      k.versionHistory.push({version:k.version, time:now, summary:'已更新'});
    }
  }
  saveKnowledge();
  var m = document.getElementById('kyp-form-overlay'); if(m) m.remove();
  renderModule('knowledge');
  if (typeof showToast === 'function') showToast(id == null ? '已新增知识条目' : '已保存修改');
}

/* ═══ 问题/课题 → 一键转知识 ═══ */
function turnIssueToKnowledge(issueObj) {
  if (!issueObj) return;
  // 预填知识表单：从问题/课题中提取标题、描述、标签
  var domainGuess = '风控与应急';
  if (/成本|费效比|利润|预算/.test(issueObj.desc)) domainGuess = '成本与核算';
  if (/SOP|流程|标准/.test(issueObj.desc)) domainGuess = '流程与SOP';
  if (/话术|投诉|沟通/.test(issueObj.desc)) domainGuess = '客诉与话术';
  if (/AI|智能|效率|工具/.test(issueObj.desc)) domainGuess = '效率与AI';
  if (/新人|培训|上手/.test(issueObj.desc)) domainGuess = '培训与入门';

  var record = {
    title: issueObj.desc ? issueObj.desc.substring(0, 50) : '未命名知识',
    domain: domainGuess,
    projectId: issueObj.projectId || '',
    sourceType: 'issue',
    sourceId: String(issueObj.id || ''),
    permission: '内部',
    scope: '通用',
    short: '',
    description: (issueObj.background||'') + '\n\n根因：' + (issueObj.rootCause||'') + '\n\n解决方案：' + (issueObj.solution||''),
    tags: issueObj.assignee || ''
  };
  showKnowledgeForm(record);
}

/* ═══ 课题 → 一键转知识 ═══ */
function turnProjectToKnowledge(obj) {
  if (!obj) return;
  var record = {
    title: obj.desc ? obj.desc.substring(0, 50) : '未命名知识',
    domain: '方法论与框架',
    projectId: obj.projectId || '',
    sourceType: 'project',
    sourceId: String(obj.id || ''),
    permission: '内部',
    scope: '通用',
    short: '',
    description: (obj.background||'') + '\n\n方案：' + (obj.solution||''),
    tags: obj.assignee || ''
  };
  showKnowledgeForm(record);
}
