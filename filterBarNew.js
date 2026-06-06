// 临时文件：新的 renderFilterBar 函数（下拉菜单版本）
// 由 buildNewFilterBar.js 读取并替换 app.js

function renderFilterBar() {
  const workplaces = [...new Set(PROJECTS.map(p => p.workplace))].sort();
  const brands     = [...new Set(PROJECTS.map(p => p.brand))].sort();
  const categories  = [...new Set(PROJECTS.map(p => p.category))].sort();
  const statuses    = [...new Set(PROJECTS.map(p => p.status))].sort();
  const directors   = [...new Set(PROJECTS.map(p => p.director))].sort();
  const pms         = [...new Set(PROJECTS.map(p => p.pm))].sort();

  // 已选标签
  const activeTags = [];
  if (filterState.timeMode !== 'all') {
    const lbl = {month:'本月',lastMonth:'上月',quarter:'本季',year:'本年',custom:'自定义'}[filterState.timeMode] || filterState.timeMode;
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

  const showCustomTime = filterState.timeMode === 'custom';

  return `
    <div class="filter-bar-wrap">
      ${activeTags.length > 0 ? `
        <div class="filter-tags-row">
          ${activeTags.map(tag => `
            <span class="filter-tag">
              ${tag.label}
              <i onclick="setFilter('${tag.key}','all')" class="filter-tag-close">&times;</i>
            </span>
          `).join('')}
          <button onclick="resetFilters()" class="filter-clear-btn">清空筛选</button>
        </div>
      ` : ''}

      <div class="filter-bar">
        <!-- 时间 -->
        <div class="filter-item">
          <label class="filter-label">时间</label>
          <select onchange="onFilterTimeChange(this.value)" class="filter-select">
            <option value="all" ${filterState.timeMode==='all'?'selected':''}>全部时间</option>
            <option value="month" ${filterState.timeMode==='month'?'selected':''}>本月</option>
            <option value="lastMonth" ${filterState.timeMode==='lastMonth'?'selected':''}>上月</option>
            <option value="quarter" ${filterState.timeMode==='quarter'?'selected':''}>本季</option>
            <option value="year" ${filterState.timeMode==='year'?'selected':''}>本年</option>
            <option value="custom" ${filterState.timeMode==='custom'?'selected':''}>自定义</option>
          </select>
        </div>

        ${showCustomTime ? `
        <div class="filter-item filter-item-dates">
          <label class="filter-label">开始</label>
          <input type="date" class="filter-date" value="${filterState.timeStart}" onchange="setFilter('timeStart',this.value);applyTimeFilter();">
          <label class="filter-label">结束</label>
          <input type="date" class="filter-date" value="${filterState.timeEnd}" onchange="setFilter('timeEnd',this.value);applyTimeFilter();">
        </div>
        ` : ''}

        <div class="filter-divider"></div>

        <!-- 职场 -->
        <div class="filter-item">
          <label class="filter-label">职场</label>
          <select onchange="setFilter('workplace',this.value)" class="filter-select">
            <option value="all">全部职场</option>
            ${workplaces.map(w => `<option value="${w}" ${filterState.workplace===w?'selected':''}>${w}</option>`).join('')}
          </select>
        </div>

        <div class="filter-divider"></div>

        <!-- 项目类型 -->
        <div class="filter-item">
          <label class="filter-label">类型</label>
          <select onchange="setFilter('projectType',this.value)" class="filter-select">
            <option value="all">全部类型</option>
            <option value="TP项目" ${filterState.projectType==='TP项目'?'selected':''}>TP</option>
            <option value="DP项目" ${filterState.projectType==='DP项目'?'selected':''}>DP</option>
            <option value="BPO项目" ${filterState.projectType==='BPO项目'?'selected':''}>BPO</option>
          </select>
        </div>

        <div class="filter-divider"></div>

        <!-- 更多筛选 下拉 -->
        <div class="filter-item filter-item-more">
          <label class="filter-label">更多</label>
          <select onchange="onMoreFilterChange(this)" class="filter-select filter-select-more">
            <option value="" disabled selected>请选择...</option>
            <optgroup label="品牌">
              <option value="__brand_all__">全部品牌</option>
              ${brands.map(b => `<option value="brand:${b.replace(/"/g,'&quot;')}" ${filterState.brand===b?'selected':''}>${b}</option>`).join('')}
            </optgroup>
            <optgroup label="品类">
              <option value="__category_all__">全部品类</option>
              ${categories.map(c => `<option value="category:${c.replace(/"/g,'&quot;')}" ${filterState.category===c?'selected':''}>${c}</option>`).join('')}
            </optgroup>
            <optgroup label="状态">
              <option value="__status_all__">全部状态</option>
              ${statuses.map(s => `<option value="status:${s.replace(/"/g,'&quot;')}" ${filterState.status===s?'selected':''}>${s}</option>`).join('')}
            </optgroup>
            <optgroup label="健康度">
              <option value="__health_all__">全部健康度</option>
              <option value="health:🟢" ${filterState.health==='🟢'?'selected':''}>🟢 健康</option>
              <option value="health:🟡" ${filterState.health==='🟡'?'selected':''}>🟡 预警</option>
              <option value="health:🔴" ${filterState.health==='🔴'?'selected':''}>🔴 风险</option>
            </optgroup>
            <optgroup label="总监">
              <option value="__director_all__">全部总监</option>
              ${directors.map(d => `<option value="director:${d.replace(/"/g,'&quot;')}" ${filterState.director===d?'selected':''}>${d}</option>`).join('')}
            </optgroup>
            <optgroup label="PM">
              <option value="__pm_all__">全部PM</option>
              ${pms.map(p => `<option value="pm:${p.replace(/"/g,'&quot;')}" ${filterState.pm===p?'selected':''}>${p}</option>`).join('')}
            </optgroup>
          </select>
        </div>

      </div>
    </div>`;
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

// 更多筛选下拉变化
function onMoreFilterChange(sel) {
  const val = sel.value;
  if (!val) return;
  if (val === '__brand_all__')    { setFilter('brand','all'); }
  else if (val === '__category_all__') { setFilter('category','all'); }
  else if (val === '__status_all__')  { setFilter('status','all'); }
  else if (val === '__health_all__')  { setFilter('health','all'); }
  else if (val === '__director_all__') { setFilter('director','all'); }
  else if (val === '__pm_all__')       { setFilter('pm','all'); }
  else {
    const idx = val.indexOf(':');
    const key = val.substring(0, idx);
    const v = val.substring(idx+1);
    setFilter(key, v);
  }
  sel.value = '';
}
