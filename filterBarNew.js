// filterBarNew.js - 筛选栏覆盖脚本（可搜索下拉版本）
// 此文件在 app.js 之后引入，会覆盖 app.js 中的 renderFilterBar 等函数

/* ============================================
   可搜索下拉组件（品牌/品类筛选）
   ============================================ */

// 切换下拉面板显示/隐藏
function toggleSearchDropdown(id) {
  const panel = document.getElementById(id + '-panel');
  const trigger = document.getElementById(id + '-trigger');
  if (!panel) return;
  const isShow = panel.classList.contains('show');
  closeAllSearchDropdowns(exceptId);
  if (!isShow) {
    panel.classList.add('show');
    trigger.classList.add('active');
    const searchInput = document.getElementById(id + '-search');
    if (searchInput) {
      setTimeout(function() { searchInput.focus(); }, 50);
    }
  } else {
    panel.classList.remove('show');
    trigger.classList.remove('active');
  }
}

// 关闭所有下拉（可选排除某个 id）
function closeAllSearchDropdowns(exceptId) {
  const panels = document.querySelectorAll('.search-dropdown-panel.show');
  panels.forEach(function(p) {
    if (exceptId && p.id === exceptId + '-panel') return;
    p.classList.remove('show');
    var triggerId = p.id.replace('-panel', '-trigger');
    var trigger = document.getElementById(triggerId);
    if (trigger) trigger.classList.remove('active');
  });
}

// 搜索过滤下拉选项
function filterSearchDropdownOptions(id, keyword) {
  var panel = document.getElementById(id + '-panel');
  if (!panel) return;
  var options = panel.querySelectorAll('.search-dropdown-option');
  var lowerKeyword = keyword.toLowerCase();
  options.forEach(function(opt) {
    var text = opt.textContent.toLowerCase();
    if (text.indexOf(lowerKeyword) !== -1 || opt.dataset.value === 'all') {
      opt.style.display = '';
    } else {
      opt.style.display = 'none';
    }
  });
}

// 选中下拉选项（从 data-*- 属性读取参数）
function selectSearchDropdownOption(el) {
  var id = el.dataset.id;
  var key = el.dataset.key;
  var value = el.dataset.value;
  var label = el.dataset.label || el.textContent;
  if (!id || !key || value === undefined) return;
  setFilter(key, value);
  // 更新触发按钮显示
  var valueEl = document.getElementById(id + '-value');
  var trigger = document.getElementById(id + '-trigger');
  if (valueEl && trigger) {
    if (value === 'all') {
      valueEl.textContent = label;
      trigger.classList.remove('has-value');
    } else {
      // 截断过长文本
      var displayText = label.length > 8 ? label.substring(0, 7) + '...' : label;
      valueEl.textContent = displayText;
      trigger.classList.add('has-value');
    }
  }
  // 关闭下拉
  var panel = document.getElementById(id + '-panel');
  if (panel) panel.classList.remove('show');
  if (trigger) trigger.classList.remove('active');
  // 重新渲染模块
  renderModule(currentModule);
}

// 多选下拉：切换选中状态
function selectMultiSelectOption(el) {
  var id = el.dataset.id;
  var key = el.dataset.key;
  var value = el.dataset.value;
  var label = el.dataset.label || el.textContent;
  if (!id || !key || value === undefined) return;
  setFilter(key, value);
  // 更新触发按钮显示
  var valueEl = document.getElementById(id + '-value');
  var trigger = document.getElementById(id + '-trigger');
  if (valueEl && trigger) {
    if (value === 'all') {
      valueEl.textContent = label;
      trigger.classList.remove('has-value');
    } else {
      var displayText = label.length > 8 ? label.substring(0, 7) + '...' : label;
      valueEl.textContent = displayText;
      trigger.classList.add('has-value');
    }
  }
  // 关闭下拉
  var panel = document.getElementById(id + '-panel');
  if (panel) panel.classList.remove('show');
  if (trigger) trigger.classList.remove('active');
  renderModule(currentModule);
}

// 点击页面其他区域关闭所有下拉
document.addEventListener('click', function(e) {
  if (!e.target.closest('.search-dropdown')) {
    closeAllSearchDropdowns();
  }
});

/* ============================================
   渲染筛选栏（新版本：可搜索下拉）
   ============================================ */
function renderFilterBar() {
  var workplaces = [].concat(PROJECTS.map(function(p) { return p.workplace; })).filter(function(v, i, a) { return a.indexOf(v) === i; }).sort();
  var brands     = [].concat(PROJECTS.map(function(p) { return p.brand; })).filter(function(v, i, a) { return a.indexOf(v) === i; }).sort();
  var categories  = [].concat(PROJECTS.map(function(p) { return p.category; })).filter(function(v, i, a) { return a.indexOf(v) === i; }).sort();
  var statuses    = [].concat(PROJECTS.map(function(p) { return p.status; })).filter(function(v, i, a) { return a.indexOf(v) === i; }).sort();
  var directors   = [].concat(PROJECTS.map(function(p) { return p.director; })).filter(function(v, i, a) { return a.indexOf(v) === i; }).sort();
  var pms         = [].concat(PROJECTS.map(function(p) { return p.pm; })).filter(function(v, i, a) { return a.indexOf(v) === i; }).sort();

  // 已选标签
  var activeTags = [];
  if (filterState.timeMode !== 'all') {
    var lbl = {month:'本月',lastMonth:'上月',quarter:'本季',year:'本年',custom:'自定义'}[filterState.timeMode] || filterState.timeMode;
    activeTags.push({key:'timeMode', label:lbl});
  }
  if (filterState.workplace !== 'all')  activeTags.push({key:'workplace', label:filterState.workplace});
  if (filterState.projectType !== 'all') activeTags.push({key:'projectType', label:filterState.projectType.replace('项目','')});
  if (filterState.brand !== 'all')      activeTags.push({key:'brand', label:filterState.brand});
  if (filterState.category !== 'all')   activeTags.push({key:'category', label:filterState.category});
  if (filterState.status !== 'all')     activeTags.push({key:'status', label:filterState.status});
  if (filterState.health !== 'all')     activeTags.push({key:'health', label:filterState.health});
  if (filterState.director !== 'all')    activeTags.push({key:'director', label:filterState.director});
  if (filterState.pm !== 'all')         activeTags.push({key:'pm', label:filterState.pm});

  var showCustomTime = filterState.timeMode === 'custom';

  // 品牌下拉选项 HTML（使用 data-* 属性，避免引号转义问题）
  var brandOptionsHtml = '';
  brandOptionsHtml += '<div class="search-dropdown-option' + (filterState.brand==='all'?' selected':'') + '" data-id="filter-brand" data-key="brand" data-value="all" data-label="全部品牌" onclick="selectSearchDropdownOption(this)">全部品牌</div>';
  brands.forEach(function(b) {
    var safeValue = b.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    var selected = filterState.brand === b ? ' selected' : '';
    brandOptionsHtml += '<div class="search-dropdown-option' + selected + '" data-id="filter-brand" data-key="brand" data-value="' + safeValue + '" data-label="' + safeValue + '" onclick="selectSearchDropdownOption(this)">' + b + '</div>';
  });

  // 品类下拉选项 HTML
  var categoryOptionsHtml = '';
  categoryOptionsHtml += '<div class="search-dropdown-option' + (filterState.category==='all'?' selected':'') + '" data-id="filter-category" data-key="category" data-value="all" data-label="全部分类" onclick="selectSearchDropdownOption(this)">全部分类</div>';
  categories.forEach(function(c) {
    var safeValue = c.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    var selected = filterState.category === c ? ' selected' : '';
    categoryOptionsHtml += '<div class="search-dropdown-option' + selected + '" data-id="filter-category" data-key="category" data-value="' + safeValue + '" data-label="' + safeValue + '" onclick="selectSearchDropdownOption(this)">' + c + '</div>';
  });

  // 状态下拉选项
  var statusOptionsHtml = '';
  statusOptionsHtml += '<div class="search-dropdown-option' + (filterState.status==='all'?' selected':'') + '" data-id="filter-status" data-key="status" data-value="all" data-label="全部状态" onclick="selectMultiSelectOption(this)">全部状态</div>';
  statuses.forEach(function(s) {
    var safeValue = s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    var selected = filterState.status === s ? ' selected' : '';
    statusOptionsHtml += '<div class="search-dropdown-option' + selected + '" data-id="filter-status" data-key="status" data-value="' + safeValue + '" data-label="' + safeValue + '" onclick="selectMultiSelectOption(this)">' + s + '</div>';
  });

  // 健康度下拉选项
  var healthOptionsHtml = '';
  healthOptionsHtml += '<div class="search-dropdown-option' + (filterState.health==='all'?' selected':'') + '" data-id="filter-health" data-key="health" data-value="all" data-label="全部健康度" onclick="selectMultiSelectOption(this)">全部健康度</div>';
  healthOptionsHtml += '<div class="search-dropdown-option' + (filterState.health==='🟢'?' selected':'') + '" data-id="filter-health" data-key="health" data-value="🟢" data-label="🟢 健康" onclick="selectMultiSelectOption(this)">🟢 健康</div>';
  healthOptionsHtml += '<div class="search-dropdown-option' + (filterState.health==='🟡'?' selected':'') + '" data-id="filter-health" data-key="health" data-value="🟡" data-label="🟡 预警" onclick="selectMultiSelectOption(this)">🟡 预警</div>';
  healthOptionsHtml += '<div class="search-dropdown-option' + (filterState.health==='🔴'?' selected':'') + '" data-id="filter-health" data-key="health" data-value="🔴" data-label="🔴 风险" onclick="selectMultiSelectOption(this)">🔴 风险</div>';

  // 品牌触发按钮显示文本
  var brandDisplay = filterState.brand !== 'all' ? (filterState.brand.length > 8 ? filterState.brand.substring(0, 7) + '...' : filterState.brand) : '全部品牌';
  var categoryDisplay = filterState.category !== 'all' ? (filterState.category.length > 8 ? filterState.category.substring(0, 7) + '...' : filterState.category) : '全部分类';
  var statusDisplay = filterState.status !== 'all' ? filterState.status : '全部状态';
  var healthDisplay = filterState.health !== 'all' ? filterState.health : '全部健康度';

  var html = '<div class="filter-bar-wrap">';

  // 已选标签行
  if (activeTags.length > 0) {
    html += '<div class="filter-tags-row">';
    activeTags.forEach(function(tag) {
      html += '<span class="filter-tag">' + tag.label + '<i onclick="setFilter(\'' + tag.key + '\',\'all\')" class="filter-tag-close">&times;</i></span>';
    });
    html += '<button onclick="resetFilters()" class="filter-clear-btn">清空筛选</button>';
    html += '</div>';
  }

  html += '<div class="filter-bar">';

  // 时间
  html += '<div class="filter-item"><label class="filter-label">时间</label>';
  html += '<select onchange="onFilterTimeChange(this.value)" class="filter-select">';
  html += '<option value="all"' + (filterState.timeMode==='all'?' selected':'') + '>全部时间</option>';
  html += '<option value="month"' + (filterState.timeMode==='month'?' selected':'') + '>本月</option>';
  html += '<option value="lastMonth"' + (filterState.timeMode==='lastMonth'?' selected':'') + '>上月</option>';
  html += '<option value="quarter"' + (filterState.timeMode==='quarter'?' selected':'') + '>本季</option>';
  html += '<option value="year"' + (filterState.timeMode==='year'?' selected':'') + '>本年</option>';
  html += '<option value="custom"' + (filterState.timeMode==='custom'?' selected':'') + '>自定义</option>';
  html += '</select></div>';

  // 自定义时间
  if (showCustomTime) {
    html += '<div class="filter-item filter-item-dates">';
    html += '<label class="filter-label">开始</label>';
    html += '<input type="date" class="filter-date" value="' + (filterState.timeStart||'') + '" onchange="setFilter(\'timeStart\',this.value);applyTimeFilter();">';
    html += '<label class="filter-label">结束</label>';
    html += '<input type="date" class="filter-date" value="' + (filterState.timeEnd||'') + '" onchange="setFilter(\'timeEnd\',this.value);applyTimeFilter();">';
    html += '</div>';
  }

  html += '<div class="filter-divider"></div>';

  // 职场
  html += '<div class="filter-item"><label class="filter-label">职场</label>';
  html += '<select onchange="setFilter(\'workplace\',this.value);renderModule(currentModule);" class="filter-select">';
  html += '<option value="all">全部职场</option>';
  workplaces.forEach(function(w) {
    html += '<option value="' + w + '"' + (filterState.workplace===w?' selected':'') + '>' + w + '</option>';
  });
  html += '</select></div>';

  html += '<div class="filter-divider"></div>';

  // 品牌（可搜索下拉）
  html += '<div class="filter-item search-dropdown" id="filter-brand">';
  html += '<label class="filter-label">品牌</label>';
  html += '<div class="search-dropdown-trigger' + (filterState.brand!=='all'?' has-value':'') + '" id="filter-brand-trigger" onclick="toggleSearchDropdown(\'filter-brand\')">';
  html += '<span id="filter-brand-value">' + brandDisplay + '</span>';
  html += '</div>';
  html += '<div class="search-dropdown-panel" id="filter-brand-panel">';
  html += '<div class="search-dropdown-search">';
  html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>';
  html += '<input type="text" id="filter-brand-search" placeholder="搜索品牌..." oninput="filterSearchDropdownOptions(\'filter-brand\', this.value)" onclick="event.stopPropagation()">';
  html += '</div>';
  html += '<div class="search-dropdown-options">' + brandOptionsHtml + '</div>';
  html += '</div></div>';

  html += '<div class="filter-divider"></div>';

  // 品类（可搜索下拉）
  html += '<div class="filter-item search-dropdown" id="filter-category">';
  html += '<label class="filter-label">品类</label>';
  html += '<div class="search-dropdown-trigger' + (filterState.category!=='all'?' has-value':'') + '" id="filter-category-trigger" onclick="toggleSearchDropdown(\'filter-category\')">';
  html += '<span id="filter-category-value">' + categoryDisplay + '</span>';
  html += '</div>';
  html += '<div class="search-dropdown-panel" id="filter-category-panel">';
  html += '<div class="search-dropdown-search">';
  html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>';
  html += '<input type="text" id="filter-category-search" placeholder="搜索品类..." oninput="filterSearchDropdownOptions(\'filter-category\', this.value)" onclick="event.stopPropagation()">';
  html += '</div>';
  html += '<div class="search-dropdown-options">' + categoryOptionsHtml + '</div>';
  html += '</div></div>';

  html += '<div class="filter-divider"></div>';

  // 状态（下拉）
  html += '<div class="filter-item search-dropdown" id="filter-status">';
  html += '<label class="filter-label">状态</label>';
  html += '<div class="search-dropdown-trigger' + (filterState.status!=='all'?' has-value':'') + '" id="filter-status-trigger" onclick="toggleSearchDropdown(\'filter-status\')">';
  html += '<span id="filter-status-value">' + statusDisplay + '</span>';
  html += '</div>';
  html += '<div class="search-dropdown-panel" id="filter-status-panel">';
  html += '<div class="search-dropdown-options">' + statusOptionsHtml + '</div>';
  html += '</div></div>';

  html += '<div class="filter-divider"></div>';

  // 健康度（下拉）
  html += '<div class="filter-item search-dropdown" id="filter-health">';
  html += '<label class="filter-label">健康度</label>';
  html += '<div class="search-dropdown-trigger' + (filterState.health!=='all'?' has-value':'') + '" id="filter-health-trigger" onclick="toggleSearchDropdown(\'filter-health\')">';
  html += '<span id="filter-health-value">' + healthDisplay + '</span>';
  html += '</div>';
  html += '<div class="search-dropdown-panel" id="filter-health-panel">';
  html += '<div class="search-dropdown-options">' + healthOptionsHtml + '</div>';
  html += '</div></div>';

  html += '<div class="filter-divider"></div>';

  // 总监
  html += '<div class="filter-item"><label class="filter-label">总监</label>';
  html += '<select onchange="setFilter(\'director\',this.value);renderModule(currentModule);" class="filter-select">';
  html += '<option value="all">全部总监</option>';
  directors.forEach(function(d) {
    html += '<option value="' + d + '"' + (filterState.director===d?' selected':'') + '>' + d + '</option>';
  });
  html += '</select></div>';

  html += '<div class="filter-divider"></div>';

  // PM
  html += '<div class="filter-item"><label class="filter-label">PM</label>';
  html += '<select onchange="setFilter(\'pm\',this.value);renderModule(currentModule);" class="filter-select">';
  html += '<option value="all">全部PM</option>';
  pms.forEach(function(p) {
    html += '<option value="' + p + '"' + (filterState.pm===p?' selected':'') + '>' + p + '</option>';
  });
  html += '</select></div>';

  html += '</div></div>';
  return html;
}

// 时间筛选变化
function onFilterTimeChange(val) {
  setFilter('timeMode', val);
  if (val !== 'custom') {
    filterState.timeStart = '';
    filterState.timeEnd = '';
    renderModule(currentModule);
  } else {
    renderModule(currentModule);
  }
}

// 自定义时间：选完日期后应用
function applyTimeFilter() {
  if (filterState.timeMode === 'custom' && filterState.timeStart && filterState.timeEnd) {
    renderModule(currentModule);
  }
}
