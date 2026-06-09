/* ============================================================
   filterBarNew.js  v202606061805
   筛选栏 v4 —— 完全按用户需求实现
   第一行：时间 | 职场 | 类型 | 状态 | 健康度（普通下拉）
   第二行：平台 | 品类 | 品牌 | 项目PM | 客服管理（搜索多选下拉）+ 高级筛选按钮
   ============================================================ */

/* ---------- 全局状态 ---------- */
if (typeof filterState === 'undefined') {
  var filterState = {
    timeMode: 'all', timeStart: '', timeEnd: '',
    workplace: 'all', serviceMode: 'all',
    status: 'all', health: 'all',
    platforms: [], category: [], brand: [],
    pm: 'all', director: 'all'
  };
}

/* ---------- 统一取值工具 ---------- */
function getFilterOptions(key) {
  if (key === 'workplace')  return [...new Set(PROJECTS.map(p => p.workplace))].sort();
  if (key === 'serviceMode') return [...new Set(PROJECTS.map(p => p.serviceMode))].sort();
  if (key === 'status')     return [...new Set(PROJECTS.map(p => p.status))].sort();
  if (key === 'health')     return [...new Set(PROJECTS.map(p => p.health))].sort();
  if (key === 'platforms')  return [...new Set(PROJECTS.flatMap(p => (p.platforms||'').split(/[,，、]/).map(s=>s.trim()).filter(Boolean)))].sort();
  if (key === 'category')   return [...new Set(PROJECTS.map(p => p.category))].sort();
  if (key === 'brand')      return [...new Set(PROJECTS.map(p => p.brand))].sort();
  if (key === 'pm')         return [...new Set(PROJECTS.map(p => p.pm))].sort();
  if (key === 'director')   return [...new Set(PROJECTS.map(p => p.director))].sort();
  return [];
}

/* ---------- 判断是否有任何筛选 ---------- */
function hasAnyFilter() {
  if (filterState.timeMode !== 'all') return true;
  if (filterState.workplace !== 'all') return true;
  if (filterState.serviceMode !== 'all') return true;
  if (filterState.status !== 'all') return true;
  if (filterState.health !== 'all') return true;
  if (filterState.platforms.length > 0) return true;
  if (filterState.category.length > 0) return true;
  if (filterState.brand.length > 0) return true;
  if (filterState.pm !== 'all') return true;
  if (filterState.director !== 'all') return true;
  return false;
}

/* ---------- 清空所有筛选 ---------- */
function resetFilters() {
  filterState.timeMode = 'all';
  filterState.timeStart = '';
  filterState.timeEnd = '';
  filterState.workplace = 'all';
  filterState.serviceMode = 'all';
  filterState.status = 'all';
  filterState.health = 'all';
  filterState.platforms = [];
  filterState.category = [];
  filterState.brand = [];
  filterState.pm = 'all';
  filterState.director = 'all';
  renderModule(currentModule);
}

/* ---------- 清除单个筛选 ---------- */
function resetOneFilter(key) {
  if (key === 'platforms' || key === 'category' || key === 'brand') {
    filterState[key] = [];
  } else {
    filterState[key] = 'all';
  }
  renderModule(currentModule);
}

/* ---------- 多选切换 ---------- */
function toggleMultiFilter(key, val) {
  var arr = filterState[key];
  var idx = arr.indexOf(val);
  if (idx >= 0) arr.splice(idx, 1); else arr.push(val);
  renderModule(currentModule);
}

/* ---------- 单选设置 ---------- */
function setSingleFilter(key, val) {
  filterState[key] = val;
  renderModule(currentModule);
}

/* ---------- 应用时间筛选 ---------- */
function applyFilters() {
  if (filterState.timeMode === 'custom' && filterState.timeStart && filterState.timeEnd) {
    renderModule(currentModule);
  } else if (filterState.timeMode !== 'custom') {
    renderModule(currentModule);
  }
}

/* ============================================================
   渲染筛选栏
   ============================================================ */
function renderFilterBar() {
  var timeLabel = {all:'全部时间', month:'本月', lastMonth:'上月', quarter:'本季', year:'本年', custom:'自定义'};
  var wpLabel   = filterState.workplace === 'all' ? '全部职场' : filterState.workplace;
  var smLabel   = filterState.serviceMode === 'all' ? '全部类型' : filterState.serviceMode;
  var stLabel   = filterState.status === 'all' ? '全部状态' : filterState.status;
  var hlLabel   = filterState.health === 'all' ? '全部健康度' : filterState.health;

  var pfLabel = '— ▼';
  if (filterState.platforms.length === 1) pfLabel = filterState.platforms[0];
  else if (filterState.platforms.length > 1) pfLabel = '已选' + filterState.platforms.length + '项';

  var caLabel = '— ▼';
  if (filterState.category.length === 1) caLabel = filterState.category[0];
  else if (filterState.category.length > 1) caLabel = '已选' + filterState.category.length + '项';

  var brLabel = '— ▼';
  if (filterState.brand.length === 1) brLabel = filterState.brand[0];
  else if (filterState.brand.length > 1) brLabel = '已选' + filterState.brand.length + '项';

  var pmLabel = filterState.pm === 'all' ? '— ▼' : filterState.pm;
  var drLabel = filterState.director === 'all' ? '— ▼' : filterState.director;

  var showCustom = filterState.timeMode === 'custom';

  return `
  <div class="filter-bar-v4">
    <!-- 已选标签 -->
    ${hasAnyFilter() ? `
    <div class="filter-tags-row">
      ${filterState.timeMode!=='all' ? `<span class="filter-tag">${timeLabel[filterState.timeMode]}<i onclick="resetOneFilter('timeMode')">×</i></span>` : ''}
      ${filterState.workplace!=='all' ? `<span class="filter-tag">${filterState.workplace}<i onclick="resetOneFilter('workplace')">×</i></span>` : ''}
      ${filterState.serviceMode!=='all' ? `<span class="filter-tag">${filterState.serviceMode}<i onclick="resetOneFilter('serviceMode')">×</i></span>` : ''}
      ${filterState.status!=='all' ? `<span class="filter-tag">${filterState.status}<i onclick="resetOneFilter('status')">×</i></span>` : ''}
      ${filterState.health!=='all' ? `<span class="filter-tag">${filterState.health}<i onclick="resetOneFilter('health')">×</i></span>` : ''}
      ${filterState.platforms.map(function(v){ return `<span class="filter-tag">${v}<i onclick="toggleMultiFilter('platforms','${v.replace(/'/g,"\\'")}')">×</i></span>` }).join('')}
      ${filterState.category.map(function(v){ return `<span class="filter-tag">${v}<i onclick="toggleMultiFilter('category','${v.replace(/'/g,"\\'")}')">×</i></span>` }).join('')}
      ${filterState.brand.map(function(v){ return `<span class="filter-tag">${v}<i onclick="toggleMultiFilter('brand','${v.replace(/'/g,"\\'")}')">×</i></span>` }).join('')}
      ${filterState.pm!=='all' ? `<span class="filter-tag">${filterState.pm}<i onclick="resetOneFilter('pm')">×</i></span>` : ''}
      ${filterState.director!=='all' ? `<span class="filter-tag">${filterState.director}<i onclick="resetOneFilter('director')">×</i></span>` : ''}
      <button class="filter-clear-btn" onclick="resetFilters()">清空筛选</button>
    </div>` : ''}

    <!-- 第一行 -->
    <div class="filter-row-v4">
      <select class="fb-select" onchange="onFilterChange('timeMode',this.value)" title="时间">
        <option value="all">全部</option>
        <option value="month">本月</option>
        <option value="lastMonth">上月</option>
        <option value="quarter">本季</option>
        <option value="year">本年</option>
        <option value="custom">自定义</option>
      </select>

      ${showCustom ? `<input type="date" class="fb-date" value="${filterState.timeStart}" onchange="filterState.timeStart=this.value;applyFilters()" title="开始时间">
        <input type="date" class="fb-date" value="${filterState.timeEnd}" onchange="filterState.timeEnd=this.value;applyFilters()" title="结束时间">` : ''}

      <div class="fb-divider"></div>

      <select class="fb-select" onchange="onFilterChange('workplace',this.value)" title="职场">
        <option value="all">全部</option>
        ${getFilterOptions('workplace').map(function(w){ return '<option value="'+w+'" '+(filterState.workplace===w?'selected':'')+'>'+w+'</option>' }).join('')}
      </select>

      <select class="fb-select" onchange="onFilterChange('serviceMode',this.value)" title="类型">
        <option value="all">全部</option>
        ${getFilterOptions('serviceMode').map(function(s){ return '<option value="'+s+'" '+(filterState.serviceMode===s?'selected':'')+'>'+s+'</option>' }).join('')}
      </select>

      <select class="fb-select" onchange="onFilterChange('status',this.value)" title="状态">
        <option value="all">全部</option>
        ${getFilterOptions('status').map(function(s){ return '<option value="'+s+'" '+(filterState.status===s?'selected':'')+'>'+s+'</option>' }).join('')}
      </select>

      <select class="fb-select" onchange="onFilterChange('health',this.value)" title="健康度">
        <option value="all">全部</option>
        ${getFilterOptions('health').map(function(h){ return '<option value="'+h+'" '+(filterState.health===h?'selected':'')+'>'+h+'</option>' }).join('')}
      </select>
    </div>

    <!-- 第二行 -->
    <div class="filter-row-v4 filter-row-v4-second">
      <div class="fb-search-wrap" data-filter="platforms" title="平台（多选）">
        <div class="fb-search-trigger" onclick="toggleSearchPanel(this)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <span class="fb-search-label">${pfLabel}</span>
          <svg width="10" height="10" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <div class="fb-search-panel" id="panel-platforms"></div>
      </div>

      <div class="fb-search-wrap" data-filter="category" title="品类（多选）">
        <div class="fb-search-trigger" onclick="toggleSearchPanel(this)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <span class="fb-search-label">${caLabel}</span>
          <svg width="10" height="10" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <div class="fb-search-panel" id="panel-category"></div>
      </div>

      <div class="fb-search-wrap" data-filter="brand" title="品牌（多选）">
        <div class="fb-search-trigger" onclick="toggleSearchPanel(this)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <span class="fb-search-label">${brLabel}</span>
          <svg width="10" height="10" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <div class="fb-search-panel" id="panel-brand"></div>
      </div>

      <div class="fb-search-wrap" data-filter="pm" title="项目PM（单选）">
        <div class="fb-search-trigger" onclick="toggleSearchPanel(this)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <span class="fb-search-label">${pmLabel}</span>
          <svg width="10" height="10" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <div class="fb-search-panel" id="panel-pm"></div>
      </div>

      <div class="fb-search-wrap" data-filter="director" title="客服管理（单选）">
        <div class="fb-search-trigger" onclick="toggleSearchPanel(this)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <span class="fb-search-label">${drLabel}</span>
          <svg width="10" height="10" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <div class="fb-search-panel" id="panel-director"></div>
      </div>

      <button class="fb-adv-btn" onclick="alert('高级筛选 - 待开发')" title="高级筛选">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
        高级筛选
      </button>
    </div>
  </div>`;
}

/* ---------- 普通下拉变化 ---------- */
function onFilterChange(key, val) {
  filterState[key] = val;
  renderModule(currentModule);
}

/* ============================================================
   搜索下拉面板逻辑
   ============================================================ */
var activePanel = null;

function toggleSearchPanel(triggerEl) {
  var wrap = triggerEl.parentElement;
  var key = wrap.getAttribute('data-filter');
  var panel = wrap.querySelector('.fb-search-panel');

  if (activePanel && activePanel !== panel) {
    activePanel.style.display = 'none';
  }

  if (panel.style.display === 'block') {
    panel.style.display = 'none';
    activePanel = null;
    return;
  }

  renderSearchPanel(panel, key);

  var rect = triggerEl.getBoundingClientRect();
  panel.style.position = 'fixed';
  panel.style.top = (rect.bottom + 6) + 'px';
  panel.style.left = rect.left + 'px';
  panel.style.width = Math.max(rect.width, 180) + 'px';
  panel.style.display = 'block';
  activePanel = panel;

  var inp = panel.querySelector('.fb-search-input');
  if (inp) inp.focus();
}

function renderSearchPanel(panel, key) {
  var isMulti = (key === 'platforms' || key === 'category' || key === 'brand');
  var options = getFilterOptions(key);
  var selected = filterState[key];
  if (!Array.isArray(selected)) selected = [selected];

  var html = `
    <div class="fb-sp-search">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      <input class="fb-search-input" type="text" placeholder="搜索..." oninput="filterSearchOptions(this,'${key}')">
    </div>
    <div class="fb-sp-options">
      <div class="fb-sp-option fb-sp-all ${selected.length === 0 || selected[0] === 'all' ? 'selected' : ''}" data-value="all" onclick="onSearchAllClick(this,'${key}')">
        <span>全部</span>
      </div>`;

  options.forEach(function(opt) {
    var checked = selected.indexOf(opt) >= 0;
    var escaped = opt.replace(/"/g,'&quot;');
    html += `<div class="fb-sp-option ${checked?'selected':''}" data-value="${escaped}" onclick="onSearchOptionClick(this,'${key}')">
      ${isMulti ? `<span class="fb-sp-check">${checked?'✓':''}</span>` : ''}
      <span>${opt}</span>
    </div>`;
  });

  html += `</div>`;
  if (isMulti) {
    html += `<div class="fb-sp-footer">
      <button class="fb-sp-toggle-all" onclick="toggleSelectAll('${key}',this)">全选</button>
      <button class="fb-sp-clear" onclick="clearMultiFilter('${key}')">清空</button>
      <button class="fb-sp-confirm" onclick="closeSearchPanel(this)">确定</button>
    </div>`;
  }
  panel.innerHTML = html;
}

function onSearchAllClick(optEl, key) {
  var isMulti = (key === 'platforms' || key === 'category' || key === 'brand');
  if (isMulti) {
    filterState[key] = getFilterOptions(key);
  } else {
    filterState[key] = 'all';
  }
  var panel = optEl.closest('.fb-search-panel');
  panel.style.display = 'none';
  activePanel = null;
  renderModule(currentModule);
}

function toggleSelectAll(key, btnEl) {
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
    btnEl.textContent = '全选';
  } else {
    // 全选
    options.forEach(function(opt) {
      opt.classList.add('selected');
      var check = opt.querySelector('.fb-sp-check');
      if (check) check.textContent = '✓';
    });
    btnEl.textContent = '取消全选';
  }
}

function filterSearchOptions(inputEl, key) {
  var q = inputEl.value.trim().toLowerCase();
  var panel = inputEl.closest('.fb-search-panel');
  var options = panel.querySelectorAll('.fb-sp-option');
  options.forEach(function(opt) {
    var txt = opt.textContent.toLowerCase();
    opt.style.display = txt.indexOf(q) >= 0 ? '' : 'none';
  });
}

function onSearchOptionClick(optEl, key) {
  var val = optEl.getAttribute('data-value');
  var isMulti = (key === 'platforms' || key === 'category' || key === 'brand');

  if (isMulti) {
    optEl.classList.toggle('selected');
    var check = optEl.querySelector('.fb-sp-check');
    if (check) check.textContent = optEl.classList.contains('selected') ? '✓' : '';
    // 取消"全部"选项的选中状态
    var allOpt = optEl.closest('.fb-sp-options').querySelector('.fb-sp-all');
    if (allOpt) allOpt.classList.remove('selected');
  } else {
    filterState[key] = val;
    var panel = optEl.closest('.fb-search-panel');
    panel.style.display = 'none';
    activePanel = null;
    renderModule(currentModule);
  }
}

function clearMultiFilter(key) {
  filterState[key] = [];
  var panel = document.getElementById('panel-' + key);
  if (panel) {
    panel.querySelectorAll('.fb-sp-option').forEach(function(el) { el.classList.remove('selected'); var c = el.querySelector('.fb-sp-check'); if(c)c.textContent=''; });
  }
  renderModule(currentModule);
}

function closeSearchPanel(btnEl) {
  var panel = btnEl.closest('.fb-search-panel');
  var key = panel.parentElement.getAttribute('data-filter');
  var isMulti = (key === 'platforms' || key === 'category' || key === 'brand');

  if (isMulti) {
    var allOption = panel.querySelector('.fb-sp-all.selected');
    if (allOption) {
      // "全部" 选项被选中，全选
      filterState[key] = getFilterOptions(key);
    } else {
      // "全部" 选项没有被选中，获取选中的选项
      var selected = [];
      panel.querySelectorAll('.fb-sp-option.selected:not(.fb-sp-all)').forEach(function(el) {
        selected.push(el.getAttribute('data-value'));
      });
      filterState[key] = selected;
    }
  }

  panel.style.display = 'none';
  activePanel = null;
  renderModule(currentModule);
}

/* 点击页面其他地方关闭面板 */
document.addEventListener('click', function(e) {
  if (activePanel && !activePanel.contains(e.target) && !e.target.closest('.fb-search-trigger')) {
    var key = activePanel.parentElement.getAttribute('data-filter');
    var isMulti = (key === 'platforms' || key === 'category' || key === 'brand');
    if (isMulti) {
      var allOption = activePanel.querySelector('.fb-sp-all.selected');
      if (allOption) {
        // "全部" 选项被选中，全选
        filterState[key] = getFilterOptions(key);
      } else {
        // "全部" 选项没有被选中，获取选中的选项
        var selected = [];
        activePanel.querySelectorAll('.fb-sp-option.selected:not(.fb-sp-all)').forEach(function(el) {
          selected.push(el.getAttribute('data-value'));
        });
        filterState[key] = selected;
      }
    }
    activePanel.style.display = 'none';
    activePanel = null;
    renderModule(currentModule);
  }
});
