// modules/assessment.js — 项目难度评估模块
/* ═══════════════════ 项目难度评估 ═══════════════════ */
function renderAssessment(){
  // 数据准备 —— 先从DOM读取（若DOM尚未销毁），否则用缓存
  var _deptEl = document.getElementById('asmt-dept-filter');
  var _mgrEl = document.getElementById('asmt-mgr-filter');
  if (_deptEl) _asmtFilterCache.dept = _deptEl.value || '';
  if (_mgrEl) _asmtFilterCache.mgr = _mgrEl.value || '';
  const deptFilter = _asmtFilterCache.dept;
  const mgrFilter = _asmtFilterCache.mgr;

  let assessments = ASSESSMENTS.filter(a => a.group && !a.month.includes('依据'));
  if (deptFilter) assessments = assessments.filter(a => a.dept === deptFilter);
  if (mgrFilter) assessments = assessments.filter(a => a.manager === mgrFilter);

  // 统计卡片数据
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

  // ===== 开始渲染 =====
  let html = `<div class="page-header"><h2>📊 项目难度评估</h2>
    <div class="page-actions" style="display:flex;justify-content:flex-end;gap:8px;">
      <button class="btn btn-sm" onclick="importAssessment()">📥 导入</button>
      <button class="btn btn-sm" onclick="exportAssessment()">📤 导出</button>
      <button class="btn btn-sm btn-primary" onclick="showCompareModal()">🔄 自由对比</button>
    </div>
  </div>`;
  html += `<div style="margin:12px 0 8px;color:#888;font-size:13px;">数据来源：组别基础信息 + 管理难度评估表（2026年7月）</div>`;

  // 筛选栏（使用系统统一的 filter-bar-v4 规范）
  html += `<div class="filter-bar-v4">`;
  html += `<div class="filter-row-v4">`;
  html += `  <div style="display:flex;align-items:center;gap:6px;">`;
  html += `    <span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">筛选项目</span>`;
  html += `    <select id="asmt-dept-filter" class="fb-select">`;
  html += `      <option value=""${deptFilter===''?' selected':''}>全部</option>`;
  [...new Set(ASSESSMENTS.map(a => a.dept))].filter(Boolean).forEach(d => {
    html += `      <option value="${escHtml(d)}"${deptFilter===d?' selected':''}>${escHtml(d)}</option>`;
  });
  html += `    </select>`;
  html += `  </div>`;
  html += `  <div style="display:flex;align-items:center;gap:6px;">`;
  html += `    <span style="font-size:13px;color:var(--c-text-2);white-space:nowrap;">筛选管理人</span>`;
  html += `    <select id="asmt-mgr-filter" class="fb-select">`;
  html += `      <option value=""${mgrFilter===''?' selected':''}>全部</option>`;
  ASSESSMENTS.map(a => a.manager).filter((v,i, a2) => v && a2.indexOf(v) === i).forEach(m => {
    html += `      <option value="${escHtml(m)}"${mgrFilter===m?' selected':''}>${escHtml(m)}</option>`;
  });
  html += `    </select>`;
  html += `  </div>`;
  html += `  <div style="margin-left:auto;display:flex;gap:8px;align-items:center;">`;
  html += `    <button class="btn btn-sm btn-primary" onclick="renderModule('assessment')">🔍 确定</button>`;
  html += `  </div>`;
  html += `</div></div>`;

  // ===== 卡片区 =====
  html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;">`;
  // 卡片1：高难度项目
  html += `  <div class="stat-card" style="background:#fff1f0;border:1px solid #ffa39e;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#f5222d;margin-bottom:4px;">🔴 高难度项目</div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#f5222d;">${highDiff}</div>`;
  html += `    <div style="font-size:12px;color:#888;">占比 ${assessments.length>0?Math.round(highDiff/assessments.length*100):0}%</div>`;
  html += `  </div>`;
  // 卡片2：中难度项目
  html += `  <div class="stat-card" style="background:#fff7e6;border:1px solid #ffd591;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#fa8c16;margin-bottom:4px;">🟡 中难度项目</div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#fa8c16;">${midDiff}</div>`;
  html += `    <div style="font-size:12px;color:#888;">占比 ${assessments.length>0?Math.round(midDiff/assessments.length*100):0}%</div>`;
  html += `  </div>`;
  // 卡片3：低难度项目
  html += `  <div class="stat-card" style="background:#f6ffed;border:1px solid #b7eb8f;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#52c41a;margin-bottom:4px;">🟢 低难度项目</div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#52c41a;">${lowDiff}</div>`;
  html += `    <div style="font-size:12px;color:#888;">占比 ${assessments.length>0?Math.round(lowDiff/assessments.length*100):0}%</div>`;
  html += `  </div>`;
  html += `</div>`;

  // 第二排卡片：管理能力分布
  html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;">`;
  // 卡片4：管理能力高
  html += `  <div class="stat-card" style="background:#e6f7ff;border:1px solid #91d5ff;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#1890ff;margin-bottom:4px;">🔵 管理能力高</div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#1890ff;">${highMgr}</div>`;
  html += `    <div style="font-size:12px;color:#888;">主管/经理级</div>`;
  html += `  </div>`;
  // 卡片5：管理能力中
  html += `  <div class="stat-card" style="background:#fff7e6;border:1px solid #ffd591;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#fa8c16;margin-bottom:4px;">🟡 管理能力中</div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#fa8c16;">${midMgr}</div>`;
  html += `    <div style="font-size:12px;color:#888;">组长2/3级</div>`;
  html += `  </div>`;
  // 卡片6：管理能力低
  html += `  <div class="stat-card" style="background:#fff1f0;border:1px solid #ffa39e;border-radius:10px;padding:16px;">`;
  html += `    <div style="font-size:12px;color:#f5222d;margin-bottom:4px;">🔴 管理能力低</div>`;
  html += `    <div style="font-size:24px;font-weight:700;color:#f5222d;">${lowMgr}</div>`;
  html += `    <div style="font-size:12px;color:#888;">组长1级/培训师</div>`;
  html += `  </div>`;
  html += `</div>`;

  // 综合适配度大卡片
  html += `<div style="background:${compatBand.bg};border:2px solid ${compatBand.color};border-radius:12px;padding:20px;margin-bottom:20px;display:flex;align-items:center;gap:24px;">`;
  html += `  <div style="font-size:48px;font-weight:800;color:${compatBand.color};">${avgCompat}%</div>`;
  html += `  <div>`;
  html += `    <div style="font-size:16px;font-weight:600;color:${compatBand.color};">综合适配度 · ${compatBand.label}</div>`;
  html += `    <div style="font-size:12px;color:#888;margin-top:4px;">基于${compatCount}个组别的管理难度与管理能力匹配度评估</div>`;
  html += `  </div>`;
  html += `</div>`;

  // ===== Tab切换区 =====
  html += `<div style="display:flex;gap:0;margin-bottom:16px;border-bottom:2px solid #e8e8e8;">`;
  html += `  <div id="tab-match" onclick="switchAssessTab('match')" style="padding:10px 20px;cursor:pointer;font-size:14px;font-weight:600;color:#1a73e8;border-bottom:2px solid #1a73e8;margin-bottom:-2px;">📊 匹配度明细</div>`;
  html += `  <div id="tab-project" onclick="switchAssessTab('project')" style="padding:10px 20px;cursor:pointer;font-size:14px;color:#888;">📋 项目得分明细</div>`;
  html += `  <div id="tab-management" onclick="switchAssessTab('management')" style="padding:10px 20px;cursor:pointer;font-size:14px;color:#888;">👤 管理能力评定明细</div>`;
  html += `</div>`;

  // Tab内容区
  html += `<div id="assess-tab-content">`;
  // 默认显示匹配度明细
  html += renderMatchDetail(assessments);
  html += `</div>`;

  // 原有说明区块（保留）
  html += `<div class="card" style="margin-top:20px;"><div class="card-header">📋 管理难度评估说明</div><div style="padding:12px;font-size:13px;line-height:2;">`;
  html += `  <p><b>评估方法：</b>定量指标权重70% + 定性因素权重30%，合计100分。</p>`;
  html += `  <p><b>定量指标（共70分）：</b>管理半径(客服人数/管理配比)、新员工占比、管理配比、项目对接数量、店铺复盘频次、品牌介入深度、汇报频次</p>`;
  html += `  <p><b>定性因素（共30分，每项最高3分）：</b>业务复杂度、跨平台管理、品牌授权等级、客服流动性、技能培训需求、系统/工具复杂度、客诉处理难度、突发事件响应</p>`;
  html += `  <p><b>难度评级参考：</b>≤40分=组长1级 | 41-50分=组长2级 | 51-60分=组长3级 | 61-80分=主管级 | ＞80分=经理级</p>`;
  html += `  <p><b>差异奖励：</b>基准分差值5-10分→500元 | 11-15分→1000元 | 16-20分→1500元</p>`;
  html += `  <p><b>适配度计算：</b>根据项目难度得分与管理等级基准分差值计算匹配度，＜60%不匹配 | 60%-80%基本匹配 | 80%-100%高度匹配</p>`;
  html += `</div></div>`;

  return html;
}

// Tab切换
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
  const deptFilter = document.getElementById('asmt-dept-filter') ? document.getElementById('asmt-dept-filter').value : '';
  const mgrFilter = document.getElementById('asmt-mgr-filter') ? document.getElementById('asmt-mgr-filter').value : '';
  let assessments = ASSESSMENTS.filter(a => a.group && !a.month.includes('依据'));
  if (deptFilter) assessments = assessments.filter(a => a.dept === deptFilter);
  if (mgrFilter) assessments = assessments.filter(a => a.manager === mgrFilter);
  const content = document.getElementById('assess-tab-content');
  if (!content) return;
  if (tab === 'match') content.innerHTML = renderMatchDetail(assessments);
  else if (tab === 'project') content.innerHTML = renderProjectDetail(assessments);
  else if (tab === 'management') content.innerHTML = renderManagementDetail(assessments);
}

// 匹配度明细表
function renderMatchDetail(assessments) {
  let html = `<div class="card"><div class="card-header">📊 项目-管理匹配度明细</div><div class="table-wrap"><table class="data-table">`;
  html += `  <thead><tr>`;
  html += `    <th>序号</th><th>组别</th><th>管理人</th><th>项目难度分</th><th>管理基准分</th>`;
  html += `    <th>匹配度</th><th>档位</th><th>操作</th>`;
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
    html += `  <td><a href="#" onclick="showGroupDetail('${a.group}');return false;">${escHtml(a.group)}</a></td>`;
    html += `  <td>${escHtml(a.manager||'')}</td>`;
    html += `  <td style="font-weight:600;">${score.toFixed(1)}</td>`;
    html += `  <td>${bench}</td>`;
    html += `  <td style="font-weight:700;color:${band.color};">${compat}%</td>`;
    html += `  <td style="background:${band.bg};color:${band.color};padding:2px 8px;border-radius:4px;font-size:12px;font-weight:500;">${band.label}</td>`;
    html += `  <td><button class="btn btn-sm" onclick="showGroupDetail('${a.group}')">查看明细</button></td>`;
    html += `</tr>`;
  });
  html += `  </tbody></table></div></div>`;
  return html;
}

// 项目得分明细（维度拆解）
function renderProjectDetail(assessments) {
  let html = `<div class="card"><div class="card-header">📋 项目难度得分明细（定量+定性）</div><div class="table-wrap"><table class="data-table">`;
  html += `  <thead><tr>`;
  html += `    <th>组别</th><th>管理人</th><th>定量得分</th><th>定性得分</th><th>总分</th>`;
  html += `    <th>业务复杂度</th><th>跨平台</th><th>品牌授权</th><th>流动性</th>`;
  html += `    <th>技能培训</th><th>系统复杂度</th><th>客诉难度</th><th>突发事件</th>`;
  html += `  </tr></thead><tbody>`;
  assessments.forEach(a => {
    const score = a.totalScore || 0;
    const dl = getDifficultyLevel(score);
    html += `<tr>`;
    html += `  <td><a href="#" onclick="showGroupDetail('${a.group}');return false;">${escHtml(a.group)}</a></td>`;
    html += `  <td>${escHtml(a.manager||'')}</td>`;
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

// 管理能力评定明细
function renderManagementDetail(assessments) {
  let html = `<div class="card"><div class="card-header">👤 管理能力评定明细</div><div class="table-wrap"><table class="data-table">`;
  html += `  <thead><tr>`;
  html += `    <th>管理人</th><th>管理等级</th><th>基准分</th><th>适配度</th><th>档位</th>`;
  html += `    <th>负责组别数</th><th>操作</th>`;
  html += `  </tr></thead><tbody>`;
  // 按管理人聚合
  const mgrMap = {};
  assessments.forEach(a => {
    const mgr = a.manager || '未分配';
    if (!mgrMap[mgr]) mgrMap[mgr] = { level: a.level, groups: [], bench: getManagementBenchmark(a.level) };
    mgrMap[mgr].groups.push(a);
  });
  Object.keys(mgrMap).forEach(mgr => {
    const info = mgrMap[mgr];
    const avgScore = info.groups.reduce((s,a) => s + (a.totalScore||0), 0) / info.groups.length;
    const compat = calcCompatibility(avgScore, info.bench);
    const band = getCompatibilityBand(compat);
    html += `<tr>`;
    html += `  <td>${escHtml(mgr)}</td>`;
    html += `  <td>${escHtml(info.level||'')}</td>`;
    html += `  <td>${info.bench}</td>`;
    html += `  <td style="font-weight:700;color:${band.color};">${compat}%</td>`;
    html += `  <td style="background:${band.bg};color:${band.color};padding:2px 8px;border-radius:4px;font-size:12px;font-weight:500;">${band.label}</td>`;
    html += `  <td>${info.groups.length}个组别</td>`;
    html += `  <td><button class="btn btn-sm" onclick="showManagerDetail('${String(mgr).replace(/'/g,"\\'")}')">查看详情</button></td>`;
    html += `</tr>`;
  });
  html += `  </tbody></table></div></div>`;
  return html;
}

// 管理人能力详情弹窗
function showManagerDetail(mgrName){
  const list = ASSESSMENTS.filter(a => (a.manager||'') === mgrName);
  if(list.length===0){ alert('未找到该管理人的评估记录'); return; }
  const bench = getManagementBenchmark(list[0].level);
  const avgScore = list.reduce((s,a)=>s+(a.totalScore||0),0)/list.length;
  const compat = calcCompatibility(avgScore, bench);
  const band = getCompatibilityBand(compat);
  let body = `<div style="font-size:13px;line-height:2;">`;
  body += `<p><b>管理人：</b>${escHtml(mgrName)}｜<b>管理等级：</b>${escHtml(list[0].level||'')}｜<b>负责单元数：</b>${list.length}个</p>`;
  body += `<p><b>平均难度得分：</b>${avgScore.toFixed(1)}｜<b>管理基准分：</b>${bench}｜<b>平均适配度：</b><span style="color:${band.color};font-weight:700;">${compat}%</span> <span style="background:${band.bg};color:${band.color};padding:2px 8px;border-radius:4px;font-size:12px;">${band.label}</span></p>`;
  body += `<hr><p style="font-weight:600;margin-bottom:6px;">负责单元明细：</p>`;
  body += `<table class="data-table" style="font-size:12px;"><thead><tr><th>评估单元</th><th>难度分</th><th>适配度</th><th>档位</th></tr></thead><tbody>`;
  list.forEach(a=>{
    const sc=a.totalScore||0; const c=calcCompatibility(sc,bench); const b=getCompatibilityBand(c);
    body += `<tr><td>${escHtml(a.group||'')}</td><td>${sc.toFixed(1)}</td><td style="color:${b.color};font-weight:600;">${c}%</td><td style="background:${b.bg};color:${b.color};padding:2px 8px;border-radius:4px;font-size:12px;">${b.label}</td></tr>`;
  });
  body += `</tbody></table>`;
  body += `<hr><div style="display:flex;gap:8px;justify-content:flex-end;"><button class="btn btn-sm btn-primary" onclick="var o=document.querySelector('.sd-prompt-overlay');if(o)o.remove();goToSystemDataTable('assessments');">✏️ 去系统数据管理编辑</button></div>`;
  body += `</div>`;
  showDetailModal(escHtml(mgrName) + ' - 管理能力详情', body);
}

// 导入评估报告
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
        } catch(err) { alert("解析Excel失败：" + err.message); }
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
    let target = ASSESSMENTS.find(a => a.group === groupName && a.month === '7月');
    if (!target) {
      target = { month:'7月', dept:(vals[1]||'').toString().trim(), group:groupName, manager:(vals[2]||'').toString().trim(), level:(vals[3]||'').toString().trim(), totalScore:0, quantScore:0, qualScore:0 };
      ASSESSMENTS.push(target);
    }
    target.totalScore = parseFloat(vals[4]) || 0;
    target.quantScore = parseFloat(vals[5]) || 0;
    target.qualScore = parseFloat(vals[6]) || 0;
    importCount++;
  }
  saveAssessmentsData();
  renderModule('assessment');
  alert("导入完成！共成功导入 " + importCount + " 条评估记录。");
}

// 自由对比弹窗
function showCompareModal() {
  const groups = ASSESSMENTS.filter(a => a.group && !a.month.includes('依据'));
  let body = `<div style="font-size:13px;">`;
  body += `<div style="margin-bottom:10px;">`;
  body += `  <input type="text" id="compare-search" placeholder="🔍 搜索组别名称..." oninput="filterCompareCheckboxes(this.value)" style="width:100%;padding:8px 12px;border:1px solid #d9d9d9;border-radius:6px;font-size:13px;box-sizing:border-box;outline:none;">`;
  body += `</div>`;
  body += `<div id="compare-checkboxes" style="max-height:220px;overflow-y:auto;border:1px solid #eee;border-radius:6px;padding:8px;">`;
  groups.forEach(a => {
    body += `<label class="compare-label" data-name="${escHtml(a.group.toLowerCase())}" style="display:flex;align-items:center;padding:4px 6px;border-radius:4px;cursor:pointer;font-size:13px;"><input type="checkbox" class="compare-cb" value="${escHtml(a.group)}" style="margin-right:8px;">${escHtml(a.group)}</label>`;
  });
  body += `</div>`;
  body += `<div style="margin-top:8px;font-size:12px;color:#888;">已选：<span id="compare-count">0</span> / ${groups.length} 个组别</div>`;
  body += `<div id="compare-result" style="margin-top:14px;"></div>`;
  body += `<div style="margin-top:14px;display:flex;gap:8px;justify-content:center;">`;
  body += `  <button class="btn btn-sm btn-primary" onclick="var o=document.querySelector('.sd-prompt-overlay');if(o)o.remove();">✖ 退出</button>`;
  body += `  <button class="btn btn-sm btn-primary" onclick="runAssessmentCompare()">🔄 开始对比</button>`;
  body += `</div>`;
  body += `</div>`;
  showDetailModal('🔄 自由对比模拟', body);
}

// 搜索过滤组别checkbox
window.filterCompareCheckboxes = function(keyword) {
  const labels = document.querySelectorAll('.compare-label');
  const kw = (keyword||'').toLowerCase();
  let visibleCount = 0;
  labels.forEach(function(lbl){
    const name = (lbl.getAttribute('data-name')||'');
    lbl.style.display = (name.indexOf(kw)>=0) ? '' : 'none';
    if(name.indexOf(kw)>=0) visibleCount++;
  });
};

// 执行对比
function runAssessmentCompare() {
  const cbs = document.querySelectorAll('.compare-cb:checked');
  if (cbs.length < 2) { alert('请至少选择2个组别进行对比'); return; }
  const groups = Array.from(cbs).map(cb => cb.value);
  let html = `<div>`;
  html += `<div style="font-size:14px;font-weight:600;margin-bottom:12px;">对比结果（共${groups.length}个组别）</div>`;
  html += `<div style="overflow-x:auto;-webkit-overflow-scrolling:touch;">`;
  html += `<table class="data-table" style="font-size:12px;min-width:max-content;">`;
  html += `<thead><tr><th>指标</th>${groups.map(g=>`<th>${escHtml(g)}</th>`).join('')}</tr></thead>`;
  html += `<tbody>`;
  const headers = ['总分','定量得分','定性得分','适配度'];
  const keys = ['totalScore','quantScore','qualScore','compat'];
  headers.forEach((h,i) => {
    html += `<tr><td><b>${h}</b></td>`;
    groups.forEach(gName => {
      const a = ASSESSMENTS.find(x => x.group === gName && x.month === '7月');
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
  html += `</div></div>`;
  document.getElementById('compare-result').innerHTML = html;
}


function showGroupDetail(groupName){
  const idx = ASSESSMENTS.findIndex(x => x.group === groupName);
  const a = idx >= 0 ? ASSESSMENTS[idx] : null;
  if(!a) { alert('未找到该评估记录'); return; }
  const bench = getManagementBenchmark(a.level);
  const compat = calcCompatibility(a.totalScore||0, bench);
  const band = getCompatibilityBand(compat);
  let body = `<div style="font-size:13px;line-height:2;">`;
  body += `<p><b>评估单元：</b>${escHtml(a.group)}｜<b>管理人：</b>${escHtml(a.manager||'')}｜<b>管理等级：</b>${escHtml(a.level||'')}｜<b>周期：</b>${escHtml(a.month||'')}</p>`;
  body += `<p><b>总分：</b>${a.totalScore?a.totalScore.toFixed(1):0}｜<b>定量：</b>${a.quantScore?a.quantScore.toFixed(1):0}｜<b>定性：</b>${a.qualScore?a.qualScore.toFixed(1):0}</p>`;
  body += `<p><b>管理基准分：</b>${bench}｜<b>适配度：</b><span style="color:${band.color};font-weight:700;">${compat}%</span> <span style="background:${band.bg};color:${band.color};padding:2px 8px;border-radius:4px;font-size:12px;">${band.label}</span></p>`;
  body += `<p><b>定性分项（每项0-3分）：</b>业务复杂度${a.qual1||0}｜跨平台${a.qual2||0}｜品牌授权${a.qual3||0}｜流动性${a.qual4||0}｜培训需求${a.qual5||0}｜系统复杂度${a.qual6||0}｜客诉难度${a.qual7||0}｜突发事件${a.qual8||0}</p>`;
  body += `<hr><div style="display:flex;gap:8px;justify-content:flex-end;">`;
  body += `  <button class="btn btn-sm btn-primary" onclick="var o=document.querySelector('.sd-prompt-overlay');if(o)o.remove();goToSystemDataTable('assessments');">✏️ 去系统数据管理编辑</button>`;
  body += `  <button class="btn btn-sm" style="color:#f5222d;border-color:#f5222d;" onclick="if(confirm('确定删除「${String(a.group).replace(/'/g,"\\'")}」的评估记录？')){ var i=ASSESSMENTS.findIndex(x=>x.group==='${String(a.group).replace(/'/g,"\\'")}'); if(i>=0){ASSESSMENTS.splice(i,1);} _saveSystemData('assessments'); var o=document.querySelector('.sd-prompt-overlay');if(o)o.remove(); renderModule('assessment'); }">🗑️ 删除</button>`;
  body += `</div></div>`;
  showDetailModal(escHtml(groupName) + ' - 难度评估详情', body);
}


// 导出评估报告
function exportAssessment(){
  try {
    const headers = ['评估周期','事业部','评估单元(项目/组)','管理人','管理等级','总分','定量得分','定性得分','业务复杂度','跨平台','品牌授权','流动性','培训需求','系统复杂度','客诉难度','突发事件'];
    const rows = ASSESSMENTS.map(a => [
      a.month||'', a.dept||'', a.group||'', a.manager||'', a.level||'',
      a.totalScore||0, a.quantScore||0, a.qualScore||0,
      a.qual1||0, a.qual2||0, a.qual3||0, a.qual4||0, a.qual5||0, a.qual6||0, a.qual7||0, a.qual8||0
    ]);
    showExportDialog(headers, rows, `项目难度评估_${new Date().toISOString().slice(0,10)}`, '项目难度评估');
  } catch(e) {
    alert('导出失败：' + e.message);
  }
}
// 保存权限到 localStorage
function savePermissions() {
  try { localStorage.setItem("chansee_permissions", JSON.stringify(rolePermissions)); } catch(e) {}
}

// 选中角色，重新渲染
function selectPermRole(role) {
  window._permSelectedRole = role;
  renderModule("permissions");

  // 保险：50ms 后再次强制刷新 DOM，确保切换视觉立即生效
  setTimeout(function() {
    var area = document.getElementById("module-content");
    if (area && typeof renderPermissions === 'function') {
      area.innerHTML = renderPermissions();
    }
    updateAffectedUsers(role);
  }, 50);
}

// 切换某个操作的勾选状态
function togglePermAction(role, module, action, checked) {
  if (!rolePermissions[role]) rolePermissions[role] = {};
  var mp = rolePermissions[role][module];
  if (!mp || typeof mp === 'string') {
    if (typeof mp === 'string') {
      if (mp === 'write') mp = {visible:true,view:true,edit:true,import:false,export:true,manage:false,scope:'all'};
      else if (mp === 'read') mp = {visible:true,view:true,edit:false,import:false,export:true,manage:false,scope:'all'};
      else mp = {visible:false,view:false,edit:false,import:false,export:false,manage:false,scope:'all'};
    } else {
      mp = {visible:false,view:false,edit:false,import:false,export:false,manage:false,scope:'all'};
    }
  }
  mp[action] = checked;
  // 如果关闭 visible，则自动关闭所有其他操作
  if (action === 'visible' && !checked) {
    mp.view = false; mp.edit = false; mp.import = false; mp.export = false; mp.manage = false;
  }
  // 如果开启 visible，则自动开启 view
  if (action === 'visible' && checked) { mp.view = true; }
  // 如果开启 edit/import/export/manage，自动确保 visible 和 view 开启
  if ((action === 'edit' || action === 'import' || action === 'export' || action === 'manage') && checked) {
    mp.visible = true; mp.view = true;
  }
  rolePermissions[role][module] = mp;
  savePermissions();
  // 修复：重新渲染权限面板到 DOM（原代码只调用不赋值，导致界面不刷新）
  var _permContent = document.getElementById('module-content');
  if (_permContent) _permContent.innerHTML = renderPermissions();
  var hint = document.getElementById('perm-save-hint');
  if (hint) { hint.classList.add('show'); setTimeout(function(){ hint.classList.remove('show'); }, 2000); }

  // 显示受影响的用户数
  updateAffectedUsers(role);
}

// 切换数据范围（全部/仅自己）
function togglePermScope(role, module, scope) {
  if (!rolePermissions[role]) rolePermissions[role] = {};
  var mp = rolePermissions[role][module];
  if (!mp || typeof mp === 'string') {
    if (typeof mp === 'string') {
      if (mp === 'write') mp = {visible:true,view:true,edit:true,import:false,export:true,manage:false,scope:'all'};
      else if (mp === 'read') mp = {visible:true,view:true,edit:false,import:false,export:true,manage:false,scope:'all'};
      else mp = {visible:false,view:false,edit:false,import:false,export:false,manage:false,scope:'all'};
    } else {
      mp = {visible:false,view:false,edit:false,import:false,export:false,manage:false,scope:'all'};
    }
  }
  mp.scope = scope;
  rolePermissions[role][module] = mp;
  savePermissions();
  // 修复：重新渲染权限面板到 DOM
  var _permContent = document.getElementById('module-content');
  if (_permContent) _permContent.innerHTML = renderPermissions();
  var hint = document.getElementById('perm-save-hint');
  if (hint) { hint.classList.add('show'); setTimeout(function(){ hint.classList.remove('show'); }, 2000); }
}

// 导入权限配置
function importPermissions() {
  var input = document.createElement("input");
  input.type = "file"; input.accept = ".json";
  input.onchange = function() {
    var file = input.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e) {
      try {
        var data = JSON.parse(e.target.result);
        var valid = true;
        ROLES.forEach(function(r) { if (!data[r]) valid = false; });
        if (!valid) { showToast("配置文件格式不正确，缺少部分角色数据", "error"); return; }
        rolePermissions = data;
        savePermissions();
        renderModule("permissions");
        showToast("权限配置导入成功！", "success");
      } catch(ex) { showToast("文件解析失败：" + ex.message, "error"); }
    };
    reader.readAsText(file);
  };
  input.click();
}

// 恢复默认权限
function resetPermissions() {
  showConfirmModal("确定要恢复默认权限配置吗？<br><br>当前自定义配置将丢失。", "确认恢复", function() {
    rolePermissions = JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS));
    savePermissions();
    renderModule("permissions");
    showToast("已恢复默认权限配置", "success");
  });
}

// 导出权限配置
function exportPermissions() {
  var json = JSON.stringify(rolePermissions, null, 2);
  // 复制到剪贴板（作为备用）
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(json).catch(function(){});
  }
  // 触发浏览器下载（这个会弹出浏览器原生下载对话框，无法避免）
  var blob = new Blob([json], {type:"application/json"});
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url; a.download = "chansee_permissions.json";
  a.click();
  URL.revokeObjectURL(url);
  // 显示提示
  showToast("权限配置文件已开始下载（chansee_permissions.json），同时已复制到剪贴板", "success");
}

// ===== 角色管理功能 =====

// 新增角色
function addRole() {
  showPromptModal("新增角色", "请输入新角色名称：", "", function(roleName) {
    if (!roleName || roleName.trim() === "") {
      showToast("角色名称不能为空！", "error");
      return;
    }
    roleName = roleName.trim();
    
    // 检查角色是否已存在
    if (ROLES.indexOf(roleName) >= 0) {
      showToast("角色「" + roleName + "」已存在！", "error");
      return;
    }
    
    // 添加角色
    ROLES.push(roleName);
    saveRoles();
    
    // 初始化权限（默认使用"项目伙伴"的权限）
    if (!rolePermissions[roleName]) {
      rolePermissions[roleName] = JSON.parse(JSON.stringify(rolePermissions["项目伙伴"] || DEFAULT_PERMISSIONS["项目伙伴"]));
      savePermissions();
    }
    
    // 重新渲染
    window._permSelectedRole = roleName;
    renderModule("permissions");
    showToast("角色「" + roleName + "」已添加成功！", "success");
  });
}

// 编辑角色
function editRole(oldName) {
  if (isBuiltInRole(oldName)) {
    showToast("内置角色不能编辑名称！", "error");
    return;
  }
  
  showPromptModal("编辑角色", "请输入新的角色名称：", oldName, function(newName) {
    if (!newName || newName.trim() === "") {
      showToast("角色名称不能为空！", "error");
      return;
    }
    newName = newName.trim();
    
    // 检查新名称是否已存在（排除自身）
    if (newName !== oldName && ROLES.indexOf(newName) >= 0) {
      showToast("角色「" + newName + "」已存在！", "error");
      return;
    }
    
    // 更新角色列表
    var idx = ROLES.indexOf(oldName);
    if (idx >= 0) {
      ROLES[idx] = newName;
      saveRoles();
      
      // 更新权限配置
      if (rolePermissions[oldName]) {
        rolePermissions[newName] = rolePermissions[oldName];
        delete rolePermissions[oldName];
        savePermissions();
      }
      
      // 重新渲染
      window._permSelectedRole = newName;
      renderModule("permissions");
      showToast("角色已重命名为「" + newName + "」！", "success");
    }
  });
}

// 删除角色
function deleteRole(roleName) {
  if (isBuiltInRole(roleName)) {
    showToast("内置角色不能删除！", "error");
    return;
  }
  
  // 检查是否有用户使用此角色
  var affectedUsers = [];
  try {
    var users = JSON.parse(localStorage.getItem("chansee_users") || "[]");
    for (var i = 0; i < users.length; i++) {
      if (users[i].role === roleName) {
        affectedUsers.push(users[i].username || users[i].name || "未知用户");
      }
    }
  } catch(e) {}
  
  var confirmMsg = "确定要删除角色「" + roleName + "」吗？";
  if (affectedUsers.length > 0) {
    confirmMsg += "<br><br>⚠️ <strong>警告：</strong>此操作将影响 " + affectedUsers.length + " 个用户：<br>" + affectedUsers.join("、");
    confirmMsg += "<br><br>这些用户的角色将被设置为<strong>项目伙伴</strong>。";
  }
  
  showConfirmModal(confirmMsg, "确认删除", function() {
    // 删除角色
    var idx = ROLES.indexOf(roleName);
    if (idx >= 0) {
      ROLES.splice(idx, 1);
      saveRoles();
      
      // 删除权限配置
      delete rolePermissions[roleName];
      savePermissions();
      
      // 更新受影响的用户
      if (affectedUsers.length > 0) {
        try {
          var users = JSON.parse(localStorage.getItem("chansee_users") || "[]");
          for (var i = 0; i < users.length; i++) {
            if (users[i].role === roleName) {
              users[i].role = "项目伙伴";
            }
          }
          localStorage.setItem("chansee_users", JSON.stringify(users));
        } catch(e) {}
      }
      
      // 重新渲染
      window._permSelectedRole = ROLES[0] || "项目伙伴";
      renderModule("permissions");
      showToast("角色「" + roleName + "」已删除！", "success");
    }
  });
}

// 从其他角色复制权限
function copyPermissionsFrom() {
  var selRole = window._permSelectedRole;
  if (!selRole) {
    showToast("请先选择要配置的角色！", "warning");
    return;
  }
  
  // 排除当前角色
  var otherRoles = ROLES.filter(function(r) { return r !== selRole; });
  if (otherRoles.length === 0) {
    showToast("没有其他角色可以复制！", "warning");
    return;
  }
  
  // 使用美化选择弹窗
  showSelectModal("复制权限", "请选择要复制权限的来源角色：", otherRoles, function(sourceRole) {
    if (!sourceRole) {
      return;
    }
    
    // 确认复制
    showConfirmModal("确定要从角色「" + sourceRole + "」复制权限到「" + selRole + "」吗？<br><br>当前「" + selRole + "」的权限配置将被覆盖！", "确认复制", function() {
      // 复制权限
      if (rolePermissions[sourceRole]) {
        rolePermissions[selRole] = JSON.parse(JSON.stringify(rolePermissions[sourceRole]));
        savePermissions();
        
        // 重新渲染
        renderModule("permissions");
        showToast("已成功从「" + sourceRole + "」复制权限到「" + selRole + "」！", "success");
      } else {
        showToast("来源角色没有权限配置！", "error");
      }
    });
  });
}

// 显示受影响的用户数
function updateAffectedUsers(role) {
  if (!role) return;
  
  var affectedUsers = [];
  try {
    var users = JSON.parse(localStorage.getItem("chansee_users") || "[]");
    for (var i = 0; i < users.length; i++) {
      if (users[i].role === role) {
        affectedUsers.push(users[i].username || users[i].name || "未知用户");
      }
    }
  } catch(e) {}
  
  var hint = document.getElementById("perm-affected-users");
  if (hint) {
    if (affectedUsers.length > 0) {
      hint.innerHTML = "⚠️ 此修改将影响 " + affectedUsers.length + " 个用户：" + affectedUsers.join("、");
      hint.style.display = "block";
    } else {
      hint.innerHTML = "";
      hint.style.display = "none";
    }
  }
}

// ===== 权限检查辅助函数 =====

// 检查当前用户是否有某个模块的某个操作权限
function hasPermission(module, action) {
  if (!currentRole || !rolePermissions[currentRole]) {
    return false;
  }
  var mp = rolePermissions[currentRole][module];
  if (!mp) return false;
  return mp[action] === true;
}

// 检查当前用户是否可见某个模块
function canViewModule(module) {
  return hasPermission(module, "visible");
}

// 根据当前用户角色过滤导航菜单（隐藏无权限的模块）
function filterNavByPermissions() {
  // 超级管理员可以看到所有模块
  if (currentRole === "超级管理员") {
    // 显示所有导航项
    document.querySelectorAll('.nav-item').forEach(function(item) {
      item.style.display = "";
    });
    return;
  }
  
  // 其他角色：根据权限隐藏模块
  MODULE_KEYS.forEach(function(mk) {
    var navItems = document.querySelectorAll('.nav-item[data-module="' + mk + '"]');
    var canView = canViewModule(mk);
    
    navItems.forEach(function(item) {
      if (canView) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
  
  // 如果当前模块不可见，切换到第一个可见的模块
  if (!canViewModule(currentModule)) {
    var firstVisibleModule = MODULE_KEYS.find(function(mk) { return canViewModule(mk); });
    if (firstVisibleModule) {
      currentModule = firstVisibleModule;
      renderModule(currentModule);
    }
  }
}

function exportSystemData() {
  var backup = {};
  try {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key && key.indexOf('chansee_') === 0) {
        try { backup[key] = JSON.parse(localStorage.getItem(key)); } catch(e) { backup[key] = localStorage.getItem(key); }
      }
    }
  } catch(e) {}
  var json = JSON.stringify(backup, null, 2);
  var blob = new Blob([json], {type:"application/json"});
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url; a.download = "chansee_backup_" + new Date().toISOString().slice(0,10) + ".json";
  a.click();
  URL.revokeObjectURL(url);
}
// ===== 客服绩效看板 =====
// ===== 绩效计算辅助函数 =====

// 计算绩效基数（可从Tab3基础配置修改）
function getBaseSalary(status) {
  return status === '试用期' ? (PERF_BASE_LEVELS.trial || 1400) : (PERF_BASE_LEVELS.regular || 1700);
}

// 计算绩效分数（基于权重配置，80%~120%）
function calcPerformanceScore(agent, month) {
  var type = agent.agentType === '售前' ? 'presale' : agent.agentType === '售后' ? 'afterSale' : 'mixed';
  var kpis = KPI_DEFINITIONS[type];
  if (!kpis || kpis.length === 0) return 1.0;

  var score = 0;
  var totalWeight = 0;
  var monthAgents = AGENT_PERFORMANCE.filter(function(a){return a.month === month;});

  kpis.forEach(function(k){
    var val = agent[k.key] || 0;
    var weight = k.weight || 0;
    if(val > 0 && weight > 0){
      // 同类型同月份所有坐席的该指标值
      var sameType = monthAgents.filter(function(a){
        var at = a.agentType === '售前' ? 'presale' : a.agentType === '售后' ? 'afterSale' : 'mixed';
        return at === type;
      });
      var values = sameType.map(function(a){return a[k.key] || 0;}).filter(function(v){return v > 0;});
      if(values.length > 0){
        var maxVal = Math.max.apply(null, values);
        var minVal = Math.min.apply(null, values);
        // 越高越好型指标（销售额/转化率/工作量/解决率/CSAT）：用max归一化
        // 越低越好型指标（响应时间）：用min归一化
        var isLowerBetter = k.key === 'responseTime';
        if(isLowerBetter && maxVal > minVal){
          var rawScore = 1.2 - ((val - minVal) / (maxVal - minVal)) * 0.4;
          score += rawScore * (weight / 100);
        } else {
          var rawScore = (val / maxVal) * 0.4 + 0.8;
          score += rawScore * (weight / 100);
        }
        totalWeight += weight;
      }
    }
  });

  if(totalWeight > 0) score = score / (totalWeight / 100);
  return Math.max(0.8, Math.min(1.2, score));
}

// 计算瓜分金额
function calcShareAmount(agent, month) {
  var group = agent.group || '';
  var loadData = GROUP_LOAD_RATIO.find(g => g.group === group && g.month === month);
  var loadRatio = loadData ? (parseFloat(loadData.loadRatio) || 1.0) : 1.0;
  
  // 计算组总基数
  var groupAgents = AGENT_PERFORMANCE.filter(a => a.group === group && a.month === month);
  var totalBase = groupAgents.reduce((s, a) => s + getBaseSalary(a.status), 0);
  var totalPool = totalBase * loadRatio;
  
  // 按类型分配（比例从POOL_DIST_RATIO配置读取，可自定义）
  var presaleRatio = (POOL_DIST_RATIO.presale != null ? POOL_DIST_RATIO.presale : 60) / 100;
  var afterRatio = (POOL_DIST_RATIO.afterSale != null ? POOL_DIST_RATIO.afterSale : 60) / 100;
  var mixedRatio = (POOL_DIST_RATIO.mixed != null ? POOL_DIST_RATIO.mixed : 30) / 100;

  if (agent.agentType === '售前') {
    var totalSales = groupAgents.filter(a => a.agentType === '售前').reduce((s, a) => s + a.salesAmount, 0);
    if (totalSales === 0) return 0;
    return (agent.salesAmount / totalSales) * (totalPool * presaleRatio);
  } else if (agent.agentType === '售后') {
    var totalWork = groupAgents.filter(a => a.agentType === '售后').reduce((s, a) => s + a.workVolume, 0);
    if (totalWork === 0) return 0;
    return (agent.workVolume / totalWork) * (totalPool * afterRatio);
  } else {
    // 综合：按销售额+工作量综合占比
    var totalSalesAll = groupAgents.reduce((s, a) => s + a.salesAmount, 0);
    var totalWorkAll = groupAgents.reduce((s, a) => s + a.workVolume, 0);
    var share = 0;
    if (totalSalesAll > 0) share += (agent.salesAmount / totalSalesAll) * (totalPool * mixedRatio);
    if (totalWorkAll > 0) share += (agent.workVolume / totalWorkAll) * (totalPool * mixedRatio);
    return share;
  }
}

// 计算最终绩效
function calcFinalPerformance(agent, month) {
  var score = calcPerformanceScore(agent, month);
  var share = calcShareAmount(agent, month);
  return share * score + agent.reward - agent.penalty;
}

// ===== 薪资配置保存函数 =====
function saveSalaryConfig() {
  try{ localStorage.setItem('chansee_salary_base', JSON.stringify(SALARY_BASE)); }catch(e){}
  try{ localStorage.setItem('chansee_social_ins', JSON.stringify(SOCIAL_INSURANCE)); }catch(e){}
  try{ localStorage.setItem('chansee_subsidies', JSON.stringify(SUBSIDY_RATES)); }catch(e){}
  try{ localStorage.setItem('chansee_deductions', JSON.stringify(DEDUCTION_RATES)); }catch(e){}
  try{ localStorage.setItem('chansee_pool_dist', JSON.stringify(POOL_DIST_RATIO)); }catch(e){}
  try{ localStorage.setItem('chansee_perf_base_levels', JSON.stringify(PERF_BASE_LEVELS)); }catch(e){}
}
function getBaseSalaryForAgent(agentId) {
  return SALARY_BASE[agentId] || (agentId ? 1700 : 1700);
}
function getSocialInsurance(company) {
  var cfg = SOCIAL_INSURANCE[company] || SOCIAL_INSURANCE['default'] || {socialBase:4630, socialRate:0.101, fundBase:0, fundRate:0};
  var social = cfg.socialBase * cfg.socialRate;
  var fund = cfg.fundBase * (cfg.fundRate || 0);
  return {social:Math.round(social*100)/100, fund:Math.round(fund*100)/100};
}
function getSubsidies(city, attendanceDays) {
  var cfg = SUBSIDY_RATES[city] || {meal:0, attendance:0, computer:0};
  return {meal:cfg.meal||0, attendance:cfg.attendance||0, computer:cfg.computer||0};
}
function getDeductionRule() {
  return DEDUCTION_RATES.latePerMin || 2;
}

// ===== 客服绩效看板（三Tab重构）=====
window._perfTab = window._perfTab || 'performance';
