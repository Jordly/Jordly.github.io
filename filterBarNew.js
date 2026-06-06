// filterBarNew.js - 筛选栏覆盖脚本（紧凑两行布局 + fixed 定位下拉面板）
// 设计规范：
//   时间/职场/类型/总监/PM → 普通下拉（无 label，更紧凑）
//   品牌/品类 → 可搜索多选下拉（无 label）
//   状态/健康度 → 多选下拉（无 label）

// ===== 工具函数 =====
function uniqueSort(arr) {
  var map = {};
  for (var i = 0; i < arr.length; i++) { map[arr[i]] = true; }
  var keys = [];
  for (var k in map) { keys.push(k); }
  keys.sort();
  return keys;
}

function escapeHtml(str) {
  return (str || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

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

// ===== 下拉面板管理（fixed 定位，彻底避免截断）=====

function toggleSearchDropdown(id) {
  var panel = document.getElementById(id + '-panel');
  var trigger = document.getElementById(id + '-trigger');
  if (!panel || !trigger) return;

  var isShow = panel.style.display === 'flex';
  closeAllSearchDropdowns(id);

  if (!isShow) {
    var rect = trigger.getBoundingClientRect();
    panel.style.top = (rect.bottom + 4) + 'px';
    panel.style.left = rect.left + 'px';
    panel.style.display = 'flex';
    trigger.classList.add('active');

    var searchInput = document.getElementById(id + '-search');
    if (searchInput) {
      setTimeout(function() { searchInput.focus(); }, 50);
    }
  }
}

function closeAllSearchDropdowns(exceptId) {
  var panels = document.querySelectorAll('.search-dropdown-panel');
  panels.forEach(function(p) {
    if (exceptId && p.id === exceptId + '-panel') return;
    p.style.display = 'none';
    var triggerId = p.id.replace('-panel', '-trigger');
    var trigger = document.getElementById(triggerId);
    if (trigger) trigger.classList.remove('active');
  });
}

function filterSearchDropdownOptions(id, keyword) {
  var panel = document.getElementById(id + '-panel');
  if (!panel) return;
  var options = panel.querySelectorAll('.search-dropdown-option');
  var lowerKeyword = (keyword || '').toLowerCase();
  options.forEach(function(opt) {
    var text = (opt.dataset.label || opt.textContent).toLowerCase();
    if (!lowerKeyword || text.indexOf(lowerKeyword) !== -1 || opt.dataset.value === 'all') {
      opt.style.display = '';
    } else {
      opt.style.display = 'none';
    }
  });
}

// 点击页面其他区域关闭下拉
document.addEventListener('click', function(e) {
  if (!e.target.closest('.search-dropdown')) {
    closeAllSearchDropdowns();
  }
});

// 滚动时关闭下拉
window.addEventListener('scroll', function() {
  closeAllSearchDropdowns();
}, { passive: true });

// ===== 渲染筛选栏（两行紧凑布局，无 label）=====

function renderFilterBar() {
  var workplaces  = uniqueSort(PROJECTS.map(function(p) { return p.workplace; }));
  var brands      = uniqueSort(PROJECTS.map(function(p) { return p.brand; }));
  var categories  = uniqueSort(PROJECTS.map(function(p) { return p.category; }));
  var statuses    = uniqueSort(PROJECTS.map(function(p) { return p.status; }));
  var directors   = uniqueSort(PROJECTS.map(function(p) { return p.director; }));
  var pms         = uniqueSort(PROJECTS.map(function(p) { return p.pm; }));

  // 已选标签
  var activeTags = [];
  if (filterState.timeMode !== 'all') {
    var timeLabels = {month:'本月', lastMonth:'上月', quarter:'本季', year:'本年', custom:'自定义'};
    activeTags.push({key:'timeMode', label: timeLabels[filterState.timeMode] || filterState.timeMode});
  }
  if (filterState.workplace !== 'all')   activeTags.push({key:'workplace', label: filterState.workplace});
  if (filterState.projectType !== 'all') activeTags.push({key:'projectType', label: filterState.projectType.replace('项目', '')});

  if (filterState.brand !== 'all') {
    if (typeof filterState.brand === 'string') {
      activeTags.push({key:'brand', label: filterState.brand});
    } else if (Array.isArray(filterState.brand)) {
      filterState.brand.forEach(function(b) { activeTags.push({key:'brand', label: b}); });
    }
  }

  if (filterState.category !== 'all') {
    if (typeof filterState.category === 'string') {
      activeTags.push({key:'category', label: filterState.category});
    } else if (Array.isArray(filterState.category)) {
      filterState.category.forEach(function(c) { activeTags.push({key:'category', label: c}); });
    }
  }

  if (filterState.status !== 'all') {
    if (typeof filterState.status === 'string') {
      activeTags.push({key:'status', label: filterState.status});
    } else if (Array.isArray(filterState.status)) {
      filterState.status.forEach(function(s) { activeTags.push({key:'status', label: s}); });
    }
  }

  if (filterState.health !== 'all') {
    if (typeof filterState.health === 'string') {
      activeTags.push({key:'health', label: filterState.health});
    } else if (Array.isArray(filterState.health)) {
      filterState.health.forEach(function(h) { activeTags.push({key:'health', label: h}); });
    }
  }

  if (filterState.director !== 'all') activeTags.push({key:'director', label: filterState.director});
  if (filterState.pm !== 'all')       activeTags.push({key:'pm', label: filterState.pm});

  var showCustomTime = filterState.timeMode === 'custom';

  var html = '<div class="filter-bar-wrap">';

  // 已选标签行
  if (activeTags.length > 0) {
    html += '<div class="filter-tags-row">';
    activeTags.forEach(function(tag) {
      html += '<span class="filter-tag">' + escapeHtml(tag.label) + '<i onclick="setFilter(\'' + tag.key + '\',\'all\');renderModule(currentModule);" class="filter-tag-close">&times;</i></span>';
    });
    html += '<button onclick="resetFilters();renderModule(currentModule);" class="filter-clear-btn">清空筛选</button>';
    html += '</div>';
  }

  // ===== 第一行：核心筛选 =====
  html += '<div class="filter-row">';

  // 时间
  html += '<select onchange="onFilterTimeChange(this.value)" class="filter-select-compact">';
  html += '<option value="all"'   + (filterState.timeMode === 'all' ? ' selected' : '') + '>全部时间</option>';
  html += '<option value="month"' + (filterState.timeMode === 'month' ? ' selected' : '') + '>本月</option>';
  html += '<option value="lastMonth"' + (filterState.timeMode === 'lastMonth' ? ' selected' : '') + '>上月</option>';
  html += '<option value="quarter"' + (filterState.timeMode === 'quarter' ? ' selected' : '') + '>本季</option>';
  html += '<option value="year"'  + (filterState.timeMode === 'year' ? ' selected' : '') + '>本年</option>';
  html += '<option value="custom"'+ (filterState.timeMode === 'custom' ? ' selected' : '') + '>自定义</option>';
  html += '</select>';

  // 自定义时间
  if (showCustomTime) {
    html += '<input type="date" class="filter-date-compact" value="' + (filterState.timeStart || '') + '" onchange="setFilter(\'timeStart\',this.value);applyTimeFilter();" title="开始时间">';
    html += '<span class="filter-date-sep">-</span>';
    html += '<input type="date" class="filter-date-compact" value="' + (filterState.timeEnd || '') + '" onchange="setFilter(\'timeEnd\',this.value);applyTimeFilter();" title="结束时间">';
  }

  // 职场
  html += '<select onchange="onSimpleSelectChange(\'workplace\',this.value)" class="filter-select-compact">';
  html += '<option value="all">全部职场</option>';
  workplaces.forEach(function(w) {
    html += '<option value="' + escapeHtml(w) + '"' + (filterState.workplace === w ? ' selected' : '') + '>' + w + '</option>';
  });
  html += '</select>';

  // 类型（TP/DP/BPO）
  html += '<select onchange="onSimpleSelectChange(\'projectType\',this.value)" class="filter-select-compact">';
  html += '<option value="all">全部类型</option>';
  html += '<option value="TP项目"' + (filterState.projectType === 'TP项目' ? ' selected' : '') + '>TP模式</option>';
  html += '<option value="DP项目"' + (filterState.projectType === 'DP项目' ? ' selected' : '') + '>DP模式</option>';
  html += '<option value="BPO项目"' + (filterState.projectType === 'BPO项目' ? ' selected' : '') + '>BPO模式</option>';
  html += '</select>';

  // 品牌（可搜索多选下拉）
  html += buildSearchDropdown('filter-brand', '全部品牌', brands, 'brand');

  // 品类（可搜索多选下拉）
  html += buildSearchDropdown('filter-category', '全部分类', categories, 'category');

  html += '</div>'; // 第一行结束

  // ===== 第二行：状态/人员筛选 =====
  html += '<div class="filter-row">';

  // 状态（多选下拉）
  html += buildMultiSelectDropdown('filter-status', '全部状态', statuses, 'status');

  // 健康度（多选下拉）
  var healthItems = [
    {value: '🟢', label: '🟢 健康'},
    {value: '🟡', label: '🟡 预警'},
    {value: '🔴', label: '🔴 风险'}
  ];
  html += buildMultiSelectDropdown('filter-health', '全部健康度', healthItems, 'health');

  // 总监
  html += '<select onchange="onSimpleSelectChange(\'director\',this.value)" class="filter-select-compact">';
  html += '<option value="all">全部总监</option>';
  directors.forEach(function(d) {
    html += '<option value="' + escapeHtml(d) + '"' + (filterState.director === d ? ' selected' : '') + '>' + d + '</option>';
  });
  html += '</select>';

  // PM
  html += '<select onchange="onSimpleSelectChange(\'pm\',this.value)" class="filter-select-compact">';
  html += '<option value="all">全部PM</option>';
  pms.forEach(function(p) {
    html += '<option value="' + escapeHtml(p) + '"' + (filterState.pm === p ? ' selected' : '') + '>' + p + '</option>';
  });
  html += '</select>';

  html += '</div>'; // 第二行结束
  html += '</div>'; // filter-bar-wrap 结束

  return html;
}

// ===== 构建下拉组件 =====

function buildSearchDropdown(id, placeholder, items, filterKey) {
  var displayText = getFilterDisplayText(filterKey, placeholder);
  var hasValue = filterState[filterKey] !== 'all';
  var cls = 'search-dropdown-trigger-compact' + (hasValue ? ' has-value' : '');
  var isObjArray = items.length > 0 && typeof items[0] === 'object';

  var html = '<div class="search-dropdown" id="' + id + '">';
  html += '<div class="' + cls + '" id="' + id + '-trigger" onclick="toggleSearchDropdown(\'' + id + '\')">';
  html += '<span id="' + id + '-value">' + escapeHtml(displayText) + '</span>';
  html += '</div>';
  html += '<div class="search-dropdown-panel" id="' + id + '-panel">';

  // 搜索框
  html += '<div class="search-dropdown-search">';
  html += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>';
  html += '<input type="text" id="' + id + '-search" placeholder="搜索..." oninput="filterSearchDropdownOptions(\'' + id + '\', this.value)" onclick="event.stopPropagation()">';
  html += '</div>';

  // 选项
  html += '<div class="search-dropdown-options">';
  html += '<div class="search-dropdown-option' + (filterState[filterKey] === 'all' ? ' selected' : '') + '" data-id="' + id + '" data-key="' + filterKey + '" data-value="all" onclick="onSearchMultiSelect(this)">' + placeholder + '</div>';

  if (isObjArray) {
    items.forEach(function(item) {
      var safeVal = escapeHtml(item.value);
      var safeLabel = escapeHtml(item.label);
      var isSelected = false;
      if (Array.isArray(filterState[filterKey])) {
        isSelected = filterState[filterKey].indexOf(item.value) !== -1;
      } else if (filterState[filterKey] === item.value) {
        isSelected = true;
      }
      html += '<div class="search-dropdown-option' + (isSelected ? ' selected' : '') + '" data-id="' + id + '" data-key="' + filterKey + '" data-value="' + safeVal + '" data-label="' + safeLabel + '" onclick="onSearchMultiSelect(this)">' + safeLabel + '</div>';
    });
  } else {
    items.forEach(function(item) {
      var safe = escapeHtml(item);
      var isSelected = false;
      if (Array.isArray(filterState[filterKey])) {
        isSelected = filterState[filterKey].indexOf(item) !== -1;
      } else if (filterState[filterKey] === item) {
        isSelected = true;
      }
      html += '<div class="search-dropdown-option' + (isSelected ? ' selected' : '') + '" data-id="' + id + '" data-key="' + filterKey + '" data-value="' + safe + '" data-label="' + safe + '" onclick="onSearchMultiSelect(this)">' + safe + '</div>';
    });
  }

  html += '</div></div></div>';
  return html;
}

function buildMultiSelectDropdown(id, placeholder, items, filterKey) {
  var displayText = getFilterDisplayText(filterKey, placeholder);
  var hasValue = filterState[filterKey] !== 'all';
  var cls = 'search-dropdown-trigger-compact' + (hasValue ? ' has-value' : '');
  var isObjArray = items.length > 0 && typeof items[0] === 'object';

  var html = '<div class="search-dropdown" id="' + id + '">';
  html += '<div class="' + cls + '" id="' + id + '-trigger" onclick="toggleSearchDropdown(\'' + id + '\')">';
  html += '<span id="' + id + '-value">' + escapeHtml(displayText) + '</span>';
  html += '</div>';
  html += '<div class="search-dropdown-panel" id="' + id + '-panel">';
  html += '<div class="search-dropdown-options">';

  html += '<div class="search-dropdown-option' + (filterState[filterKey] === 'all' ? ' selected' : '') + '" data-id="' + id + '" data-key="' + filterKey + '" data-value="all" onclick="onMultiSelectOption(this)">' + placeholder + '</div>';

  if (isObjArray) {
    items.forEach(function(item) {
      var safeVal = escapeHtml(item.value);
      var safeLabel = escapeHtml(item.label);
      var isSelected = false;
      if (Array.isArray(filterState[filterKey])) {
        isSelected = filterState[filterKey].indexOf(item.value) !== -1;
      } else if (filterState[filterKey] === item.value) {
        isSelected = true;
      }
      html += '<div class="search-dropdown-option' + (isSelected ? ' selected' : '') + '" data-id="' + id + '" data-key="' + filterKey + '" data-value="' + safeVal + '" data-label="' + safeLabel + '" onclick="onMultiSelectOption(this)">' + safeLabel + '</div>';
    });
  } else {
    items.forEach(function(item) {
      var safe = escapeHtml(item);
      var isSelected = false;
      if (Array.isArray(filterState[filterKey])) {
        isSelected = filterState[filterKey].indexOf(item) !== -1;
      } else if (filterState[filterKey] === item) {
        isSelected = true;
      }
      html += '<div class="search-dropdown-option' + (isSelected ? ' selected' : '') + '" data-id="' + id + '" data-key="' + filterKey + '" data-value="' + safe + '" data-label="' + safe + '" onclick="onMultiSelectOption(this)">' + safe + '</div>';
    });
  }

  html += '</div></div></div>';
  return html;
}

// ===== 事件处理 =====

function onSimpleSelectChange(key, value) {
  setFilter(key, value);
  renderModule(currentModule);
}

function onFilterTimeChange(val) {
  setFilter('timeMode', val);
  if (val !== 'custom') {
    filterState.timeStart = '';
    filterState.timeEnd = '';
  }
  renderModule(currentModule);
}

function applyTimeFilter() {
  if (filterState.timeMode === 'custom' && filterState.timeStart && filterState.timeEnd) {
    renderModule(currentModule);
  }
}

function onSearchMultiSelect(el) {
  var id = el.dataset.id;
  var key = el.dataset.key;
  var value = el.dataset.value;

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

function onMultiSelectOption(el) {
  var id = el.dataset.id;
  var key = el.dataset.key;
  var value = el.dataset.value;

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

function refreshDropdownTriggerText(id, key) {
  var valueEl = document.getElementById(id + '-value');
  var trigger = document.getElementById(id + '-trigger');
  if (!valueEl) return;

  var defaultTexts = {brand:'全部品牌', category:'全部分类', status:'全部状态', health:'全部健康度'};
  var txt = getFilterDisplayText(key, defaultTexts[key] || '');
  valueEl.textContent = txt;

  if (trigger) {
    var val = filterState[key];
    var isActive = val !== 'all' && !(Array.isArray(val) && val.length === 0);
    trigger.classList.toggle('has-value', isActive);
  }
}

// ===== 安全覆盖 applyFilters（支持数组多选）=====

(function patchApplyFilters() {
  if (typeof applyFilters !== 'function') {
    setTimeout(patchApplyFilters, 200);
    return;
  }

  var originalApplyFilters = applyFilters;
  window.applyFilters = function(list) {
    // 保存原始数组类型的筛选值
    var savedBrand    = filterState.brand;
    var savedCategory = filterState.category;
    var savedStatus   = filterState.status;
    var savedHealth   = filterState.health;

    // 临时设为 'all'，避免 original 用数组做字符串比较导致过滤掉所有数据
    if (Array.isArray(savedBrand))    filterState.brand    = 'all';
    if (Array.isArray(savedCategory)) filterState.category = 'all';
    if (Array.isArray(savedStatus))   filterState.status   = 'all';
    if (Array.isArray(savedHealth))   filterState.health   = 'all';

    // 调用原始过滤（处理时间、职场、类型、总监、PM 等）
    list = originalApplyFilters(list);

    // 恢复原始值
    filterState.brand    = savedBrand;
    filterState.category = savedCategory;
    filterState.status   = savedStatus;
    filterState.health   = savedHealth;

    // 应用多选过滤
    if (Array.isArray(filterState.brand) && filterState.brand.length > 0) {
      list = list.filter(function(p) { return filterState.brand.indexOf(p.brand) !== -1; });
    }
    if (Array.isArray(filterState.category) && filterState.category.length > 0) {
      list = list.filter(function(p) { return filterState.category.indexOf(p.category) !== -1; });
    }
    if (Array.isArray(filterState.status) && filterState.status.length > 0) {
      list = list.filter(function(p) { return filterState.status.indexOf(p.status) !== -1; });
    }
    if (Array.isArray(filterState.health) && filterState.health.length > 0) {
      list = list.filter(function(p) { return filterState.health.indexOf(p.health) !== -1; });
    }

    return list;
  };
})();
