// filterBarNew.js - 筛选栏覆盖脚本（可搜索多选下拉版本）
// 此文件在 app.js 之后引入，覆盖 renderFilterBar 等函数
// 设计规范：
//   时间/职场/类型/总监/PM → 普通下拉
//   品牌/品类 → 可搜索多选下拉
//   状态/健康度 → 多选下拉

/* ============================================
   可搜索多选下拉组件
   ============================================ */

// 切换下拉面板显示/隐藏
function toggleSearchDropdown(id) {
  var panel = document.getElementById(id + '-panel');
  var trigger = document.getElementById(id + '-trigger');
  if (!panel) return;
  var isShow = panel.classList.contains('show');
  // 关闭其他下拉，排除当前这个
  closeAllSearchDropdowns(id);
  if (!isShow) {
    panel.classList.add('show');
    if (trigger) trigger.classList.add('active');
    var searchInput = document.getElementById(id + '-search');
    if (searchInput) {
      setTimeout(function() { searchInput.focus(); }, 50);
    }
  } else {
    panel.classList.remove('show');
    if (trigger) trigger.classList.remove('active');
  }
}

// 关闭所有下拉（可选排除某个 id）
function closeAllSearchDropdowns(exceptId) {
  var panels = document.querySelectorAll('.search-dropdown-panel.show');
  panels.forEach(function(p) {
    if (exceptId && p.id === exceptId + '-panel') return;
    p.classList.remove('show');
    var triggerId = p.id.replace('-panel', '-trigger');
    var trigger = document.getElementById(triggerId);
    if (trigger) trigger.classList.remove('active');
  });
}

// 搜索过滤下拉选项（品牌/品类）
function filterSearchDropdownOptions(id, keyword) {
  var panel = document.getElementById(id + '-panel');
  if (!panel) return;
  var options = panel.querySelectorAll('.search-dropdown-option');
  var lowerKeyword = (keyword || '').toLowerCase();
  options.forEach(function(opt) {
    var text = (opt.dataset.label || opt.textContent).toLowerCase();
    if (text.indexOf(lowerKeyword) !== -1 || opt.dataset.value === 'all') {
      opt.style.display = '';
    } else {
      opt.style.display = 'none';
    }
  });
}

// 点击页面其他区域关闭所有下拉
document.addEventListener('click', function(e) {
  if (!e.target.closest('.search-dropdown')) {
    closeAllSearchDropdowns();
  }
});

/* ============================================
   渲染筛选栏
   ============================================ */
function renderFilterBar() {
  // 去重并排序
  var workplaces  = uniqueSort(PROJECTS.map(function(p) { return p.workplace; }));
  var brands     = uniqueSort(PROJECTS.map(function(p) { return p.brand; }));
  var categories = uniqueSort(PROJECTS.map(function(p) { return p.category; }));
  var statuses   = uniqueSort(PROJECTS.map(function(p) { return p.status; }));
  var directors  = uniqueSort(PROJECTS.map(function(p) { return p.director; }));
  var pms        = uniqueSort(PROJECTS.map(function(p) { return p.pm; }));

  // 已选标签
  var activeTags = [];
  if (filterState.timeMode !== 'all') {
    var lbl = {month:'本月',lastMonth:'上月',quarter:'本季',year:'本年',custom:'自定义'}[filterState.timeMode] || filterState.timeMode;
    activeTags.push({key:'timeMode', label:lbl});
  }
  if (filterState.workplace !== 'all')    activeTags.push({key:'workplace',   label:filterState.workplace});
  if (filterState.projectType !== 'all')   activeTags.push({key:'projectType', label:filterState.projectType.replace('项目','')});
  // 品牌可能是数组（多选）
  if (filterState.brand !== 'all') {
    if (typeof filterState.brand === 'string') {
      activeTags.push({key:'brand', label:filterState.brand});
    } else if (Array.isArray(filterState.brand)) {
      filterState.brand.forEach(function(b) { activeTags.push({key:'brand', label:b}); });
    }
  }
  // 品类可能是数组（多选）
  if (filterState.category !== 'all') {
    if (typeof filterState.category === 'string') {
      activeTags.push({key:'category', label:filterState.category});
    } else if (Array.isArray(filterState.category)) {
      filterState.category.forEach(function(c) { activeTags.push({key:'category', label:c}); });
    }
  }
  if (filterState.status !== 'all')       activeTags.push({key:'status',  label:filterState.status});
  if (filterState.health !== 'all')       activeTags.push({key:'health',  label:filterState.health});
  if (filterState.director !== 'all')     activeTags.push({key:'director',label:filterState.director});
  if (filterState.pm !== 'all')           activeTags.push({key:'pm',      label:filterState.pm});

  var showCustomTime = filterState.timeMode === 'custom';

  // 品牌下拉选项 HTML
  var brandOptionsHtml = '';
  brandOptionsHtml += '<div class="search-dropdown-option' + (filterState.brand==='all'?' selected':'') + '" data-id="filter-brand" data-key="brand" data-value="all" data-label="全部品牌" onclick="onSearchMultiSelect(this)">全部品牌</div>';
  brands.forEach(function(b) {
    var safe = escapeHtml(b);
    var checked = (Array.isArray(filterState.brand) && filterState.brand.indexOf(b) !== -1) ? ' selected' : (filterState.brand === b ? ' selected' : '');
    brandOptionsHtml += '<div class="search-dropdown-option' + checked + '" data-id="filter-brand" data-key="brand" data-value="' + safe + '" data-label="' + safe + '" onclick="onSearchMultiSelect(this)">' + b + '</div>';
  });

  // 品类下拉选项 HTML
  var categoryOptionsHtml = '';
  categoryOptionsHtml += '<div class="search-dropdown-option' + (filterState.category==='all'?' selected':'') + '" data-id="filter-category" data-key="category" data-value="all" data-label="全部分类" onclick="onSearchMultiSelect(this)">全部分类</div>';
  categories.forEach(function(c) {
    var safe = escapeHtml(c);
    var checked = (Array.isArray(filterState.category) && filterState.category.indexOf(c) !== -1) ? ' selected' : (filterState.category === c ? ' selected' : '');
    categoryOptionsHtml += '<div class="search-dropdown-option' + checked + '" data-id="filter-category" data-key="category" data-value="' + safe + '" data-label="' + safe + '" onclick="onSearchMultiSelect(this)">' + c + '</div>';
  });

  // 状态下拉选项（多选）
  var statusOptionsHtml = '';
  statusOptionsHtml += '<div class="search-dropdown-option' + (filterState.status==='all'?' selected':'') + '" data-id="filter-status" data-key="status" data-value="all" data-label="全部状态" onclick="onMultiSelectOption(this)">全部状态</div>';
  statuses.forEach(function(s) {
    var safe = escapeHtml(s);
    var checked = (Array.isArray(filterState.status) && filterState.status.indexOf(s) !== -1) ? ' selected' : (filterState.status === s ? ' selected' : '');
    statusOptionsHtml += '<div class="search-dropdown-option' + checked + '" data-id="filter-status" data-key="status" data-value="' + safe + '" data-label="' + safe + '" onclick="onMultiSelectOption(this)">' + s + '</div>';
  });

  // 健康度下拉选项（多选）
  var healthItems = [
    {value:'🟢', label:'🟢 健康'},
    {value:'🟡', label:'🟡 预警'},
    {value:'🔴', label:'🔴 风险'}
  ];
  var healthOptionsHtml = '';
  healthOptionsHtml += '<div class="search-dropdown-option' + (filterState.health==='all'?' selected':'') + '" data-id="filter-health" data-key="health" data-value="all" data-label="全部健康度" onclick="onMultiSelectOption(this)">全部健康度</div>';
  healthItems.forEach(function(h) {
    var safe = escapeHtml(h.value);
    var checked = (Array.isArray(filterState.health) && filterState.health.indexOf(h.value) !== -1) ? ' selected' : (filterState.health === h.value ? ' selected' : '');
    healthOptionsHtml += '<div class="search-dropdown-option' + checked + '" data-id="filter-health" data-key="health" data-value="' + safe + '" data-label="' + escapeHtml(h.label) + '" onclick="onMultiSelectOption(this)">' + h.label + '</div>';
  });

  // 触发按钮显示文本
  var brandDisplay    = getFilterDisplayText('brand', '全部品牌');
  var categoryDisplay = getFilterDisplayText('category', '全部分类');
  var statusDisplay   = getFilterDisplayText('status', '全部状态');
  var healthDisplay   = getFilterDisplayText('health', '全部健康度');

  var html = '<div class="filter-bar-wrap">';

  // 已选标签行
  if (activeTags.length > 0) {
    html += '<div class="filter-tags-row">';
    activeTags.forEach(function(tag) {
      html += '<span class="filter-tag">' + escapeHtml(tag.label) + '<i onclick="setFilter(\'' + tag.key + '\',\'all\')" class="filter-tag-close">&times;</i></span>';
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
  html += '<select onchange="onSimpleSelectChange(\'workplace\',this.value)" class="filter-select">';
  html += '<option value="all">全部职场</option>';
  workplaces.forEach(function(w) {
    html += '<option value="' + escapeHtml(w) + '"' + (filterState.workplace===w?' selected':'') + '>' + w + '</option>';
  });
  html += '</select></div>';

  html += '<div class="filter-divider"></div>';

  // 类型（TP/DP/BPO）
  html += '<div class="filter-item"><label class="filter-label">类型</label>';
  html += '<select onchange="onSimpleSelectChange(\'projectType\',this.value)" class="filter-select">';
  html += '<option value="all">全部类型</option>';
  html += '<option value="TP项目"' + (filterState.projectType==='TP项目'?' selected':'') + '>TP</option>';
  html += '<option value="DP项目"' + (filterState.projectType==='DP项目'?' selected':'') + '>DP</option>';
  html += '<option value="BPO项目"' + (filterState.projectType==='BPO项目'?' selected':'') + '>BPO</option>';
  html += '</select></div>';

  html += '<div class="filter-divider"></div>';

  // 品牌（可搜索多选下拉）
  html += buildSearchDropdown('filter-brand', '品牌', brandDisplay, brandOptionsHtml);

  html += '<div class="filter-divider"></div>';

  // 品类（可搜索多选下拉）
  html += buildSearchDropdown('filter-category', '品类', categoryDisplay, categoryOptionsHtml);

  html += '<div class="filter-divider"></div>';

  // 状态（多选下拉）
  html += buildMultiSelectDropdown('filter-status', '状态', statusDisplay, statusOptionsHtml);

  html += '<div class="filter-divider"></div>';

  // 健康度（多选下拉）
  html += buildMultiSelectDropdown('filter-health', '健康度', healthDisplay, healthOptionsHtml);

  html += '<div class="filter-divider"></div>';

  // 总监
  html += '<div class="filter-item"><label class="filter-label">总监</label>';
  html += '<select onchange="onSimpleSelectChange(\'director\',this.value)" class="filter-select">';
  html += '<option value="all">全部总监</option>';
  directors.forEach(function(d) {
    html += '<option value="' + escapeHtml(d) + '"' + (filterState.director===d?' selected':'') + '>' + d + '</option>';
  });
  html += '</select></div>';

  html += '<div class="filter-divider"></div>';

  // PM（加宽，防止看不全）
  html += '<div class="filter-item"><label class="filter-label">PM</label>';
  html += '<select onchange="onSimpleSelectChange(\'pm\',this.value)" class="filter-select filter-select-wide">';
  html += '<option value="all">全部PM</option>';
  pms.forEach(function(p) {
    html += '<option value="' + escapeHtml(p) + '"' + (filterState.pm===p?' selected':'') + '>' + p + '</option>';
  });
  html += '</select></div>';

  html += '</div></div>';
  return html;
}

/* ===== 工具函数 ===== */

function uniqueSort(arr) {
  var map = {};
  for (var i = 0; i < arr.length; i++) { map[arr[i]] = true; }
  var keys = [];
  for (var k in map) { keys.push(k); }
  keys.sort();
  return keys;
}

function escapeHtml(str) {
  return (str||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// 获取筛选显示文本（支持数组多选）
function getFilterDisplayText(key, defaultText) {
  var val = filterState[key];
  if (val === 'all') return defaultText;
  if (Array.isArray(val)) {
    if (val.length === 0) return defaultText;
    if (val.length === 1) return val[0].length > 8 ? val[0].substring(0, 7) + '...' : val[0];
    return '已选' + val.length + '项';
  }
  return val.length > 8 ? val.substring(0, 7) + '...' : val;
}

// 构建可搜索多选下拉 HTML
function buildSearchDropdown(id, label, displayText, optionsHtml) {
  var hasValue = (filterState[id.replace('filter-','')] !== 'all');
  var cls = 'search-dropdown-trigger' + (hasValue ? ' has-value' : '');
  var html = '<div class="filter-item search-dropdown" id="' + id + '">';
  html += '<label class="filter-label">' + label + '</label>';
  html += '<div class="' + cls + '" id="' + id + '-trigger" onclick="toggleSearchDropdown(\'' + id + '\')">';
  html += '<span id="' + id + '-value">' + displayText + '</span>';
  html += '</div>';
  html += '<div class="search-dropdown-panel" id="' + id + '-panel">';
  html += '<div class="search-dropdown-search">';
  html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>';
  html += '<input type="text" id="' + id + '-search" placeholder="搜索' + label + '..." oninput="filterSearchDropdownOptions(\'' + id + '\', this.value)" onclick="event.stopPropagation()">';
  html += '</div>';
  html += '<div class="search-dropdown-options">' + optionsHtml + '</div>';
  html += '</div></div>';
  return html;
}

// 构建多选下拉 HTML（无搜索框）
function buildMultiSelectDropdown(id, label, displayText, optionsHtml) {
  var hasValue = (filterState[id.replace('filter-','')] !== 'all');
  var cls = 'search-dropdown-trigger' + (hasValue ? ' has-value' : '');
  var html = '<div class="filter-item search-dropdown" id="' + id + '">';
  html += '<label class="filter-label">' + label + '</label>';
  html += '<div class="' + cls + '" id="' + id + '-trigger" onclick="toggleSearchDropdown(\'' + id + '\')">';
  html += '<span id="' + id + '-value">' + displayText + '</span>';
  html += '</div>';
  html += '<div class="search-dropdown-panel" id="' + id + '-panel">';
  html += '<div class="search-dropdown-options">' + optionsHtml + '</div>';
  html += '</div></div>';
  return html;
}

/* ===== 事件处理 ===== */

// 普通下拉变化（职场/类型/总监/PM）
function onSimpleSelectChange(key, value) {
  setFilter(key, value);
  renderModule(currentModule);
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

// 可搜索下拉：多选切换
function onSearchMultiSelect(el) {
  var id = el.dataset.id;
  var key = el.dataset.key;
  var value = el.dataset.value;
  if (!id || !key || value === undefined) return;

  if (value === 'all') {
    // 选中"全部"：重置为 'all'
    setFilter(key, 'all');
  } else {
    // 切换多选状态
    var current = filterState[key];
    var arr = [];
    if (Array.isArray(current)) {
      arr = current.slice();
    } else if (current !== 'all') {
      arr = [current];
    }
    var idx = arr.indexOf(value);
    if (idx !== -1) {
      arr.splice(idx, 1);
    } else {
      arr.push(value);
    }
    // 如果全部取消了，重置为 'all'
    setFilter(key, arr.length === 0 ? 'all' : arr);
  }

  // 更新选项选中样式（不关闭下拉）
  refreshDropdownSelections(id, key);
  // 更新触发按钮文字
  refreshDropdownTriggerText(id, key);
  // 重新渲染模块
  renderModule(currentModule);
}

// 普通多选下拉：多选切换（状态/健康度）
function onMultiSelectOption(el) {
  var id = el.dataset.id;
  var key = el.dataset.key;
  var value = el.dataset.value;
  if (!id || !key || value === undefined) return;

  if (value === 'all') {
    setFilter(key, 'all');
  } else {
    var current = filterState[key];
    var arr = [];
    if (Array.isArray(current)) {
      arr = current.slice();
    } else if (current !== 'all') {
      arr = [current];
    }
    var idx = arr.indexOf(value);
    if (idx !== -1) {
      arr.splice(idx, 1);
    } else {
      arr.push(value);
    }
    setFilter(key, arr.length === 0 ? 'all' : arr);
  }

  refreshDropdownSelections(id, key);
  refreshDropdownTriggerText(id, key);
  renderModule(currentModule);
}

// 刷新下拉选项的选中样式
function refreshDropdownSelections(id, key) {
  var panel = document.getElementById(id + '-panel');
  if (!panel) return;
  var options = panel.querySelectorAll('.search-dropdown-option');
  var val = filterState[key];
  options.forEach(function(opt) {
    var optVal = opt.dataset.value;
    if (optVal === 'all') {
      opt.classList.toggle('selected', val === 'all');
    } else {
      var checked = Array.isArray(val) && val.indexOf(optVal) !== -1;
      opt.classList.toggle('selected', checked);
    }
  });
}

// 刷新触发按钮文字
function refreshDropdownTriggerText(id, key) {
  var valueEl = document.getElementById(id + '-value');
  var trigger = document.getElementById(id + '-trigger');
  if (!valueEl) return;
  var defaultTexts = {brand:'全部品牌',category:'全部分类',status:'全部状态',health:'全部健康度'};
  var txt = getFilterDisplayText(key, defaultTexts[key] || '');
  valueEl.textContent = txt;
  if (trigger) {
    var val = filterState[key];
    var isActive = (val !== 'all' && !(Array.isArray(val) && val.length === 0));
    trigger.classList.toggle('has-value', isActive);
  }
}

/* ===== 覆盖 applyFilters 以支持多选（数组）===== */

// 在 app.js 的 applyFilters 基础上，增加对数组筛选的支持
// 由于不能直接修改 app.js 中的函数，我们在过滤时包装一层
// 方法：在 renderModule 调用前，确保 applyFilters 能处理数组
// 实际上 applyFilters 在 app.js 中读取 filterState，我们只需确保过滤逻辑兼容数组

// 为了确保兼容，我们直接覆盖 applyFilters（在 app.js 加载后执行）
(function patchApplyFilters() {
  if (typeof applyFilters !== 'function') {
    // 如果还没加载，等待一下再试
    setTimeout(patchApplyFilters, 200);
    return;
  }
  var originalApplyFilters = applyFilters;
  window.applyFilters = function(list) {
    list = originalApplyFilters(list);
    // 品牌多选
    if (typeof filterState.brand !== 'string' && Array.isArray(filterState.brand) && filterState.brand.length > 0) {
      list = list.filter(function(p) { return filterState.brand.indexOf(p.brand) !== -1; });
    }
    // 品类多选
    if (typeof filterState.category !== 'string' && Array.isArray(filterState.category) && filterState.category.length > 0) {
      list = list.filter(function(p) { return filterState.category.indexOf(p.category) !== -1; });
    }
    // 状态多选
    if (typeof filterState.status !== 'string' && Array.isArray(filterState.status) && filterState.status.length > 0) {
      list = list.filter(function(p) { return filterState.status.indexOf(p.status) !== -1; });
    }
    // 健康度多选
    if (typeof filterState.health !== 'string' && Array.isArray(filterState.health) && filterState.health.length > 0) {
      list = list.filter(function(p) { return filterState.health.indexOf(p.health) !== -1; });
    }
    return list;
  };
})();
