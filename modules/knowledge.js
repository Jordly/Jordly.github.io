// modules/knowledge.js — 知识能量池模块
/* ═══════════════════ 知识能量池 ═══════════════════ */
function renderKnowledge(){
  try {

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
  const domainCounts = {};
  KNOWLEDGE.forEach(k => {
    domainCounts[k.domain] = (domainCounts[k.domain] || 0) + 1;
  });
  const domainOrder = ['方法论与框架','流程与SOP','成本与核算','风控与应急','人员管理','客诉与话术','效率与AI','培训与入门'];

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
      <p class="kyp-desc">管理者通用技能知识库 · 团队管理 · 成本控制 · 效率提升</p>
    </div>
    ${can ? '<div class="kyp-add-btn" onclick="addKnowledge()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>添加知识</div>' : ''}
  </div>

  <!-- 最近更新 -->
  ${(()=>{
    var recent = [...KNOWLEDGE].sort(function(a,b){ return (b.updateTime||'').localeCompare(a.updateTime||''); }).slice(0,4);
    return recent.length ? '<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;align-items:center;">'
      +'<span style="font-size:11px;color:#64748b;flex-shrink:0;">🕐 最近更新：</span>'
      + recent.map(function(k){ return '<span style="font-size:11px;padding:3px 10px;background:#f0f9ff;border-radius:12px;cursor:pointer;color:#0284c7;border:1px solid #bae6fd;white-space:nowrap;transition:all 0.15s;" onclick="showKnowledgeDetail('+k.id+')" onmouseover="this.style.background=\'#e0f2fe\'" onmouseout="this.style.background=\'#f0f9ff\'">'+k.title+'</span>'; }).join('')
      +'</div>' : '';
  })()}

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

  <div class="kyp-searchbar">
    <div class="kyp-searchbar-main">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      <input type="text" id="kyp-search-field" name="kyp_search_query" placeholder="搜索知识标题、标签、内容..." autocomplete="off" readonly onfocus="this.removeAttribute('readonly')" oninput="kypSearch(this.value)">
    </div>
    <select id="kyp-domain-select" class="kyp-domain-select" onchange="kypFilter(this.value)">
      <option value="all">全部 ${totalKnowledge}</option>
      ${domainOrder.filter(t => domainCounts[t]).map(t => `<option value="${t}">${t} ${domainCounts[t]}</option>`).join('')}
    </select>
  </div>

  <div class="kyp-layout">
    <div class="kyp-main">
      <div class="kyp-grid" id="kyp-grid">
        ${(function(){
          var order = {high:0, normal:1, low:2};
          return [...KNOWLEDGE].sort(function(a,b){
            return (order[a.priority||'normal']||1) - (order[b.priority||'normal']||1);
          }).map(function(k){
          var perm = k.permission || '公开';
          var prio = k.priority || 'normal';
          var prioClass = prio === 'high' ? 'high' : (prio === 'low' ? 'low' : '');
          var prioBadge = prio === 'high' ? '<span class="kyp-card-priority-badge high">⭐ 优先</span>' : (prio === 'low' ? '<span class="kyp-card-priority-badge low">参考</span>' : '');
          return `
          <div class="kyp-card priority-${prioClass}" data-type="${k.domain||''}" data-search="${k.title}${k.description}${k.tags}" data-id="${k.id}" onmousedown="kypCardMouseDown(event, ${k.id})" onclick="kypCardClick(event, ${k.id})">
            <div class="kyp-card-top">
              <span class="kyp-card-title">${k.title}${k.fileUrl?' <span class="kyp-card-attach">📎</span>':''}${prioBadge}</span>
              ${can ? '<div class="kyp-card-actions"><span class="kyp-act" onclick="event.stopPropagation();editKnowledge('+k.id+')">✎</span><span class="kyp-act kyp-act-del" onclick="event.stopPropagation();deleteKnowledge('+k.id+')">✕</span></div>' : ''}
            </div>
            <div class="kyp-card-meta">
              <span class="kyp-type-badge ktp-${(k.domain||'').replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g,'-')}">${k.domain||'未分类'}</span>
              ${k.projectId ? '<span class="kyp-scope-badge">'+k.projectId+'</span>' : '<span class="kyp-scope-badge">通用</span>'}
            </div>
            <div class="kyp-card-short">${k.short || (k.description || '').slice(0, 24)}</div>
            <div class="kyp-card-footer">
              <span class="kyp-card-time">📅 ${k.updateTime || k.createdAt || '-'}</span>
              <span class="kyp-card-stats">
                <span class="kyp-stat-item">👁 ${k.views || 0}</span>
                <span class="kyp-stat-item">⬇ ${k.downloads || 0}</span>
              </span>
            </div>
          </div>`;
        }).join('');
      })()}
      </div>
      <div id="kyp-empty" class="kyp-empty">没有找到匹配的知识内容</div>
    </div>

    <div class="kyp-sidebar">
      <!-- 我的阅读历史 -->
      ${(()=>{
        try {
          var viewed = JSON.parse(sessionStorage.getItem('kyp_recently_viewed')||'[]');
          if (viewed.length > 0) {
            var recentItems = viewed.map(function(id){ return KNOWLEDGE.find(function(k){ return k.id === id; }); }).filter(Boolean).slice(0,5);
            if (recentItems.length > 0) {
              return '<div class="kyp-sidebar-section">'
                +'<div class="kyp-sidebar-title"><span>📌 我的阅读历史</span><span class="kyp-sidebar-count">'+recentItems.length+'</span></div>'
                + recentItems.map(function(rk){ return '<div class="kyp-recent-item" onclick="showKnowledgeDetail('+rk.id+')"><span class="kyp-recent-title">'+rk.title+'</span></div>'; }).join('')
                + '</div>';
            }
          }
        } catch(e) {}
        return '';
      })()}
      <!-- 知识贡献排行 TOP5 -->
      <div class="kyp-sidebar-section">
        <div class="kyp-sidebar-title"><span>🏆 贡献排行 TOP5</span></div>
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
      <!-- 本周新增 -->
      ${(()=>{
        var weekNewItems = [...KNOWLEDGE].sort(function(a,b){ return (b.createdAt||'').localeCompare(a.createdAt||''); }).slice(0,5);
        if (weekNewItems.length === 0) return '';
        return '<div class="kyp-sidebar-section">'
          +'<div class="kyp-sidebar-title"><span>🕐 本周新增</span><span class="kyp-sidebar-count">'+weekNewItems.length+'</span></div>'
          + weekNewItems.map(function(k){ return '<div class="kyp-recent-item" onclick="showKnowledgeDetail('+k.id+')"><span class="kyp-recent-title">'+k.title+'</span><span class="kyp-recent-time">'+ (k.createdAt||'').slice(5,10) +'</span></div>'; }).join('')
          + '</div>';
      })()}
    </div>
  </div>

  `;

  } catch(e) { if(typeof addRuntimeLog==='function') addRuntimeLog('error','Knowledge 渲染异常',String(e)); return errorState('知识能量池加载失败','请刷新页面重试'); }
}

// ===== 知识能量池 · 全局筛选函数 =====
var kypCurrentType = 'all';
function kypFilter(type) {
  kypCurrentType = type;
  // 同步下拉框选中（防止外部调用时不一致）
  var sel = document.getElementById('kyp-domain-select');
  if (sel && sel.value !== type) sel.value = type;
  var cards = document.querySelectorAll('#kyp-grid .kyp-card');
  var visible = 0;
  cards.forEach(function(c) {
    var match = type === 'all' || c.dataset.type === type;
    c.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  var empty = document.getElementById('kyp-empty');
  if (empty) empty.style.display = visible === 0 ? '' : 'none';
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
  var empty = document.getElementById('kyp-empty');
  if (empty) empty.style.display = visible === 0 ? '' : 'none';
}
function kypFilterByTag(tag) {
  var input = document.querySelector('#kyp-search-field');
  if (input) { input.value = tag; kypSearch(tag); }
}

// ===== 知识卡片拖拽排序（iOS 长按重排：长按进入拖拽，拖动时其他卡片实时让位，松手落位）=====
var kypDrag = {
  timer: null, card: null, sx: 0, sy: 0, started: false,
  floatEl: null, placeholder: null, grid: null, offX: 0, offY: 0, suppressClick: false
};
function kypCardMouseDown(e, id) {
  if (e.button !== 0) return;
  kypDrag.card = e.currentTarget;
  kypDrag.sx = e.clientX;
  kypDrag.sy = e.clientY;
  kypDrag.started = false;
  kypDrag.timer = setTimeout(function(){ kypStartDrag(); }, 450);
  document.addEventListener('mousemove', kypDocMove);
  document.addEventListener('mouseup', kypDocUp);
}
function kypDocMove(e) {
  if (!kypDrag.card) return;
  if (!kypDrag.started) {
    if (Math.abs(e.clientX - kypDrag.sx) > 8 || Math.abs(e.clientY - kypDrag.sy) > 8) {
      // 长按前已移动 => 取消长按，视为普通点击
      clearTimeout(kypDrag.timer);
      kypEndListeners();
      kypDrag.card = null;
    }
    return;
  }
  e.preventDefault();
  kypMoveDrag(e);
}
function kypDocUp(e) {
  clearTimeout(kypDrag.timer);
  kypEndListeners();
  if (kypDrag.started) kypFinishDrag();
  kypDrag.card = null;
}
function kypEndListeners() {
  document.removeEventListener('mousemove', kypDocMove);
  document.removeEventListener('mouseup', kypDocUp);
}
function kypStartDrag() {
  var card = kypDrag.card;
  if (!card) return;
  kypDrag.started = true;
  var rect = card.getBoundingClientRect();
  kypDrag.offX = kypDrag.sx - rect.left;
  kypDrag.offY = kypDrag.sy - rect.top;
  kypDrag.grid = document.getElementById('kyp-grid');
  var ph = document.createElement('div');
  ph.className = 'kyp-drag-placeholder';
  ph.style.width = rect.width + 'px';
  ph.style.height = rect.height + 'px';
  card.parentNode.insertBefore(ph, card);
  kypDrag.placeholder = ph;
  card.classList.add('kyp-drag-lift');
  card.style.position = 'fixed';
  card.style.width = rect.width + 'px';
  card.style.height = rect.height + 'px';
  card.style.left = rect.left + 'px';
  card.style.top = rect.top + 'px';
  card.style.margin = '0';
  card.style.zIndex = '9999';
  card.style.transition = 'none';
  kypDrag.floatEl = card;
  document.body.style.cursor = 'grabbing';
  kypPositionFloat(kypDrag.sx, kypDrag.sy);
}
function kypPositionFloat(x, y) {
  if (!kypDrag.floatEl) return;
  kypDrag.floatEl.style.left = (x - kypDrag.offX) + 'px';
  kypDrag.floatEl.style.top = (y - kypDrag.offY) + 'px';
}
function kypMoveDrag(e) {
  kypPositionFloat(e.clientX, e.clientY);
  var grid = kypDrag.grid;
  var ph = kypDrag.placeholder;
  if (!grid || !ph) return;
  var cards = Array.prototype.slice.call(grid.querySelectorAll('.kyp-card:not(.kyp-drag-lift)'));
  var ref = null;
  for (var i = 0; i < cards.length; i++) {
    var r = cards[i].getBoundingClientRect();
    var cy = r.top + r.height / 2;
    var cx = r.left + r.width / 2;
    if (e.clientY < cy || (Math.abs(e.clientY - cy) < r.height / 2 && e.clientX < cx)) {
      ref = cards[i];
      break;
    }
  }
  if (ref) {
    if (ph !== ref && ph.nextSibling !== ref) kypFlip(grid, function(){ grid.insertBefore(ph, ref); });
  } else {
    if (ph !== grid.lastChild) kypFlip(grid, function(){ grid.appendChild(ph); });
  }
}
function kypFlip(container, mutate) {
  var children = Array.prototype.slice.call(container.children);
  var first = {};
  children.forEach(function(c){ if (c.classList.contains('kyp-card')) first[c.dataset.id] = c.getBoundingClientRect(); });
  mutate();
  var after = Array.prototype.slice.call(container.children);
  after.forEach(function(c){
    if (!c.classList.contains('kyp-card')) return;
    var f = first[c.dataset.id];
    if (!f) return;
    var l = c.getBoundingClientRect();
    var dx = f.left - l.left, dy = f.top - l.top;
    if (dx || dy) {
      c.style.transition = 'none';
      c.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
      c.offsetWidth; // 强制回流
      c.style.transition = 'transform 0.2s ease';
      c.style.transform = '';
    }
  });
}
function kypFinishDrag() {
  var card = kypDrag.floatEl;
  var ph = kypDrag.placeholder;
  if (card && ph) {
    card.classList.remove('kyp-drag-lift');
    card.style.position = '';
    card.style.left = '';
    card.style.top = '';
    card.style.width = '';
    card.style.height = '';
    card.style.margin = '';
    card.style.zIndex = '';
    card.style.transition = '';
    card.style.transform = '';
    ph.parentNode.insertBefore(card, ph);
    ph.remove();
  }
  document.body.style.cursor = '';
  if (kypDrag.grid) {
    var ids = Array.prototype.map.call(kypDrag.grid.querySelectorAll('.kyp-card'), function(c){ return parseInt(c.dataset.id); });
    KNOWLEDGE.sort(function(a, b){ return ids.indexOf(a.id) - ids.indexOf(b.id); });
    saveKnowledge();
  }
  kypDrag.suppressClick = true;
  kypDrag.started = false;
  kypDrag.floatEl = null;
  kypDrag.placeholder = null;
}
function kypCardClick(e, id) {
  if (kypDrag.suppressClick) {
    kypDrag.suppressClick = false;
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  showKnowledgeDetail(id);
}

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
  // 提取版块渲染函数，避免长字符串嵌套
  function renderAttach(fileUrl){
    if (!fileUrl) return '';
    return '<div class="kyp-detail-section kyp-detail-section-attach">'
      +'<div class="kyp-detail-section-title">📎 附件资料</div>'
      +'<div class="kyp-attach-box">'
        +'<div class="kyp-attach-info"><span class="kyp-attach-icon">📎</span>'
          +'<div class="kyp-attach-meta"><div class="kyp-attach-name">附件资料</div>'
          +'<div class="kyp-attach-url" title="'+escHtml(fileUrl)+'">'+escHtml(fileUrl)+'</div></div></div>'
        +'<a href="'+escHtml(fileUrl)+'" target="_blank" class="kyp-attach-download">📥 查看/下载</a>'
      +'</div></div>';
  }
  function renderTags(){
    if (!tagHtml) return '';
    return '<div class="kyp-detail-section"><div class="kyp-detail-section-title">🏷️ 标签</div>'
      +'<div class="kyp-detail-tags"><div class="kyp-detail-tags-label">点击筛选：</div>' + tagHtml + '</div></div>';
  }
  function renderMeta(){
    return '<div class="kyp-detail-section kyp-detail-section-meta">'
      +'<div class="kyp-detail-meta">'
        +'<span>📅 更新于 ' + (k.updateTime || k.createdAt || '-') + '</span>'
        +'<span>👁 ' + (k.views||0) + ' 次浏览</span>'
        +'<span>⬇ ' + (k.downloads||0) + ' 次下载</span>'
      +'</div>'
      +(k.scope ? '<div class="kyp-detail-meta"><span>📂 适用范围：' + k.scope + '</span></div>' : '')
      +(k.sourceType === 'issue' ? '<div class="kyp-detail-meta"><span>💡 来源：问题管理 → 已沉淀为知识</span></div>' : '')
      +(k.sourceType === 'project' ? '<div class="kyp-detail-meta"><span>📋 来源：课题实践 → 已沉淀为知识</span></div>' : '')
      +'</div>';
  }
  function renderVersionHistory(){
    var history = k.versionHistory || [];
    if (history.length === 0) return '';
    var rows = history.slice().reverse().map(function(v){
      return '<div class="kyp-version-row"><span class="kyp-version-tag">v'+v.version+'</span><span class="kyp-version-time">'+v.time+'</span><span class="kyp-version-summary">'+v.summary+'</span></div>';
    }).join('');
    return '<div class="kyp-detail-section">'
      +'<div class="kyp-detail-section-title kyp-version-toggle" onclick="var el=this.nextElementSibling;var show=el.style.display!==\'block\';el.style.display=show?\'block\':\'none\';this.querySelector(\'.kyp-version-arrow\').textContent=show?\'▾\':\'▸\';">'
        +'<span>📝 版本记录（'+history.length+' 次）</span>'
        +'<span class="kyp-version-arrow">▸</span>'
      +'</div>'
      +'<div class="kyp-version-list" style="display:none;">'+rows+'</div>'
    +'</div>';
  }
  function renderRelated(){
    var ids = k.relatedIds || [];
    if (ids.length === 0) return '';
    var related = KNOWLEDGE.filter(function(rk){ return ids.indexOf(rk.id) >= 0 && rk.id !== k.id; });
    if (related.length === 0) return '';
    return '<div class="kyp-detail-section">'
      +'<div class="kyp-detail-section-title">🔗 相关阅读</div>'
      +'<div class="kyp-related-list">'
        + related.map(function(rk){ return '<div class="kyp-related-item" onclick="closeKnowledgeDetail();showKnowledgeDetail('+rk.id+')"><span class="kyp-related-icon">📖</span><span class="kyp-related-title">'+rk.title+'</span></div>'; }).join('')
      +'</div></div>';
  }
  function renderDesc(){
    if (!k.description) return '';
    return '<div class="kyp-detail-section kyp-detail-section-content">'
      +'<div class="kyp-detail-section-title">📝 内容详情</div>'
      +'<div class="kyp-detail-desc">' + k.description.replace(/\n/g,'<br>') + '</div>'
    +'</div>';
  }

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
    +   renderDesc()
    +   renderAttach(k.fileUrl)
    +   renderTags()
    +   renderVersionHistory()
    +   renderRelated()
    +   renderMeta()
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
