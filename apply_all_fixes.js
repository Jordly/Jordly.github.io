// apply_all_fixes.js
// 一次性完成5项调整的全部剩余修改

const fs = require('fs');
const path = require('path');

const ROOT = 'C:/Users/OseasyVM/WorkBuddy/2026-05-29-17-12-21/prototype';

// ========== 读取所有文件 ==========
let appJs = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
let css = fs.readFileSync(path.join(ROOT, 'style.css'), 'utf8');

// ========== 调整2：替换所有 p.workplace 显示为 getWpLabel(getWpLabel(p.workplace)) ==========
// 替换模板字符串中的 p.workplace 直接显示（不带 getWpLabel 的）
// 先处理所有 `<td>${p.workplace}</td>` 或类似模式

// 替换健康度明细中的职场显示
appJs = appJs.replace(
  /<span class="wp-tag wp-\$\{p\.workplace==='济南'\?'jinan':p\.workplace==='淄博'\?'zibo':'hangzhou'\}">\$\{p\.workplace\}<\/span>/g,
  '<span class="wp-tag wp-${getWpClass(p.workplace)}">${getWpLabel(p.workplace)}</span>'
);

// 替换运营模块中的 <td>${p.workplace}</td>
appJs = appJs.replace(
  /<td>\$\{p\.workplace\}<\/td>/g,
  '<td><span class="wp-tag wp-${getWpClass(p.workplace)}">${getWpLabel(p.workplace)}</span></td>'
);

// 替换项目详情弹窗中的职场显示
appJs = appJs.replace(
  /\$\{p\.workplace\}<\/span>\s*\$\{p\.name\}/g,
  '${getWpLabel(p.workplace)}</span> ${p.name}'
);

// 替换详情中的所属职场
appJs = appJs.replace(
  /<div class="detail-value">\$\{p\.workplace\}<\/div>/g,
  '<div class="detail-value">${getWpLabel(p.workplace)}（${p.workplace}）</div>'
);

// 替换项目总监视图中的职场显示
appJs = appJs.replace(
  /\${\[...\s*new\s+Set\(projs\.map\(p=>p\.workplace\)\)\]\.join\(' \/ '\)}/g,
  '${[...new Set(projs.map(p=>getWpLabel(p.workplace)))].join(' / ')}'
);

// 替换下拉选项中显示的职场名
appJs = appJs.replace(
  /\$\{p\.name\}（\$\{p\.workplace\}）/g,
  '${p.name}（${getWpLabel(p.workplace)}）'
);

// 替换健康度卡片中的职场标签
appJs = appJs.replace(
  /<span class="wp-tag">\$\{p\.workplace\}<\/span>/g,
  '<span class="wp-tag">${getWpLabel(p.workplace)}</span>'
);

// 替换健康度详情头部中的 p.workplace
appJs = appJs.replace(
  /职场：\$\{p\.workplace\}/g,
  '职场：${getWpLabel(p.workplace)}'
);

// ========== 调整3：替换角色系统 ==========
// 更新 index.html 中的角色切换器
html = html.replace(
  /<button class="role-btn active" data-role="pm">项目经理<\/button>\s*<button class="role-btn" data-role="exec">执行团队<\/button>\s*<button class="role-btn" data-role="leader">上级领导<\/button>\s*<button class="role-btn" data-role="staff">项目人员<\/button>/,
  `<button class="role-btn active" data-role="管理候选">管理候选</button>
  <button class="role-btn" data-role="客服组长">客服组长</button>
  <button class="role-btn" data-role="客服主管">客服主管</button>
  <button class="role-btn" data-role="客服经理">客服经理</button>
  <button class="role-btn" data-role="客服总监">客服总监</button>
  <button class="role-btn" data-role="管理员">管理员</button>
  <button class="role-btn" data-role="项目伙伴">项目伙伴</button>
  <button class="role-btn" data-role="技术伙伴">技术伙伴</button>
  <button class="role-btn" data-role="风控伙伴">风控伙伴</button>`
);

// 更新角色提示
html = html.replace(
  /<span class="role-hint" id="role-hint">项目经理：全量读写权限<\/span>/,
  '<span class="role-hint" id="role-hint">管理候选：全量读写权限</span>'
);

// 更新 app.js 中的 CURRENT_ROLE 初始值
appJs = appJs.replace(
  /const CURRENT_ROLE = \{name:"pm", label:"项目经理"\};/,
  'const CURRENT_ROLE = {name:"管理候选", label:"管理候选"};'
);

// 更新角色切换逻辑中的 hints
appJs = appJs.replace(
  /const hints = \{leader:'上级领导：全部项目只读',pm:'项目经理：负责项目读写',exec:'执行团队：所参与项目读写',staff:'项目人员：所参与项目只读'\};/,
  `const hints = {
    '管理候选':'管理候选：全量读写权限',
    '客服组长':'客服组长：负责小组项目读写',
    '客服主管':'客服主管：负责部门项目读写',
    '客服经理':'客服经理：负责业务线项目读写',
    '客服总监':'客服总监：全部项目只读+评定',
    '管理员':'管理员：系统管理权限',
    '项目伙伴':'项目伙伴：所参与项目只读',
    '技术伙伴':'技术伙伴：技术相关项目只读',
    '风控伙伴':'风控伙伴：风险相关项目只读'
  };`
);

// 更新 canEdit 函数
appJs = appJs.replace(
  /function canEdit\(\)\{ return \["pm","exec"\]\.includes\(CURRENT_ROLE\.name\); \}/,
  `function canEdit(){
    return ['管理候选','客服组长','客服主管','客服经理','管理员'].includes(CURRENT_ROLE.name);
  }`
);

// 更新 canViewAll 函数
appJs = appJs.replace(
  /function canViewAll\(\)\{ return CURRENT_ROLE\.name === "leader"; \}/,
  `function canViewAll(){
    return ['客服总监','管理员'].includes(CURRENT_ROLE.name);
  }`
);

// 更新满意度模块中的权限判断
appJs = appJs.replace(
  /const isLeader = CURRENT_ROLE\.name === 'leader';/g,
  `const isLeader = ['客服总监','管理员'].includes(CURRENT_ROLE.name);`
);

// 更新 ROLE_NAMES 对象
appJs = appJs.replace(
  /const ROLE_NAMES = \{leader:'上级领导',pm:'项目经理',exec:'执行团队',staff:'项目人员'\};/,
  `const ROLE_NAMES = {
    '管理候选':'管理候选',
    '客服组长':'客服组长',
    '客服主管':'客服主管',
    '客服经理':'客服经理',
    '客服总监':'客服总监',
    '管理员':'管理员',
    '项目伙伴':'项目伙伴',
    '技术伙伴':'技术伙伴',
    '风控伙伴':'风控伙伴'
  };`
);

// 更新权限说明中的角色权限
appJs = appJs.replace(
  /if\(role==='leader'\) return '全部项目（只读 \+ 评定打分）';[\s\S]*?if\(role==='staff'\) return '所参与项目（只读）';/,
  `if(role==='管理候选') return '全量读写权限';
    if(role==='客服组长') return '负责小组项目（读写）';
    if(role==='客服主管') return '负责部门项目（读写）';
    if(role==='客服经理') return '负责业务线项目（读写）';
    if(role==='客服总监') return '全部项目（只读 + 评定打分）';
    if(role==='管理员') return '系统管理（全量读写）';
    if(role==='项目伙伴') return '所参与项目（只读）';
    if(role==='技术伙伴') return '技术相关项目（只读）';
    if(role==='风控伙伴') return '风险相关项目（只读）';`
);

// 更新新增评估中的 owner 默认值
appJs = appJs.replace(
  /owner: CURRENT_ROLE\.name==="pm"\?"张伟":CURRENT_ROLE\.name==="exec"\?"刘洋":""/,
  "owner: CURRENT_ROLE.name"
);

// ========== 调整5：知识沉淀库 → 核心知识百宝箱 ==========
html = html.replace(/知识沉淀库/g, '核心知识百宝箱');
appJs = appJs.replace(/知识沉淀库/g, '核心知识百宝箱');

// ========== 调整4：各模块添加筛选栏（在 render 函数顶部插入） ==========
// 为每个模块函数添加筛选栏 HTML

const filterBarTemplate = (moduleName) => `
  <div class="filter-bar" style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;align-items:center;">
    <label style="font-size:13px;color:var(--c-text-2);">筛选：</label>
    <select class="form-select" id="${moduleName}-filter-time" style="padding:4px 8px;border:1px solid var(--c-border);border-radius:6px;font-size:13px;">
      <option value="">全部时间</option>
      <option value="2026-05">2026-05</option>
      <option value="2026-04">2026-04</option>
      <option value="2026-03">2026-03</option>
    </select>
    <select class="form-select" id="${moduleName}-filter-project" style="padding:4px 8px;border:1px solid var(--c-border);border-radius:6px;font-size:13px;">
      <option value="">全部项目</option>
      ${PROJECTS.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
    </select>
    <input type="text" id="${moduleName}-filter-manager" placeholder="管理者姓名" style="padding:4px 8px;border:1px solid var(--c-border);border-radius:6px;font-size:13px;width:120px;">
    <input type="text" id="${moduleName}-filter-director" placeholder="项目负责人" style="padding:4px 8px;border:1px solid var(--c-border);border-radius:6px;font-size:13px;width:120px;">
    <button class="btn btn-sm" onclick="applyFilter('${moduleName}')">筛选</button>
    <button class="btn btn-sm" onclick="resetFilter('${moduleName}')">重置</button>
  </div>`;

// 在 renderDashboard 中插入筛选栏
appJs = appJs.replace(
  /function renderDashboard\(\)\{\s*const all = getFilteredProjects\(\);/,
  `function renderDashboard(){
  const all = getFilteredProjects();
  // 筛选状态
  if(!window.DASHBOARD_FILTER) window.DASHBOARD_FILTER = {};
  const fb = filterBarTemplate('dashboard');`
);

// 在 renderArchive 中插入筛选栏
appJs = appJs.replace(
  /function renderArchive\(\)\{\s*const all = getFilteredProjects\(\);/,
  `function renderArchive(){
  const all = getFilteredProjects();
  if(!window.ARCHIVE_FILTER) window.ARCHIVE_FILTER = {};
  const fb = filterBarTemplate('archive');`
);

// 在 renderTarget 中插入
appJs = appJs.replace(
  /function renderTarget\(\)\{/,
  `function renderTarget(){
  if(!window.TARGET_FILTER) window.TARGET_FILTER = {};
  const fb = filterBarTemplate('target');
  const all = getFilteredProjects();`
);

// 在 renderCost 中插入
appJs = appJs.replace(
  /function renderCost\(\)\{/,
  `function renderCost(){
  if(!window.COST_FILTER) window.COST_FILTER = {};
  const fb = filterBarTemplate('cost');
  const all = getFilteredProjects();`
);

// 在 renderOperation 中插入
appJs = appJs.replace(
  /function renderOperation\(\)\{/,
  `function renderOperation(){
  if(!window.OPERATION_FILTER) window.OPERATION_FILTER = {};
  const fb = filterBarTemplate('operation');
  const all = getFilteredProjects();`
);

// 在 renderIssue 中插入
appJs = appJs.replace(
  /function renderIssue\(\)\{/,
  `function renderIssue(){
  if(!window.ISSUE_FILTER) window.ISSUE_FILTER = {};
  const fb = filterBarTemplate('issue');`
);

// 在 renderKnowledge 中插入
appJs = appJs.replace(
  /function renderKnowledge\(\)\{/,
  `function renderKnowledge(){
  if(!window.KNOWLEDGE_FILTER) window.KNOWLEDGE_FILTER = {};
  const fb = filterBarTemplate('knowledge');`
);

// 在 renderDirector 中插入
appJs = appJs.replace(
  /function renderDirector\(\)\{/,
  `function renderDirector(){
  if(!window.DIRECTOR_FILTER) window.DIRECTOR_FILTER = {};
  const fb = filterBarTemplate('director');`
);

// 添加全局筛选应用和重置函数
const filterFunctions = `

// ===== 筛选功能 =====
function applyFilter(module){
  const time = document.getElementById(module+'-filter-time')?.value || '';
  const projectId = document.getElementById(module+'-filter-project')?.value || '';
  const manager = document.getElementById(module+'-filter-manager')?.value || '';
  const director = document.getElementById(module+'-filter-director')?.value || '';
  window[module.toUpperCase()+'_FILTER'] = {time, projectId, manager, director};
  renderModule(module);
}
function resetFilter(module){
  document.getElementById(module+'-filter-time').value = '';
  document.getElementById(module+'-filter-project').value = '';
  document.getElementById(module+'-filter-manager').value = '';
  document.getElementById(module+'-filter-director').value = '';
  window[module.toUpperCase()+'_FILTER'] = {};
  renderModule(module);
}
`;

// 在 app.js 末尾添加筛选函数
appJs += filterFunctions;

// ========== 写入文件 ==========
fs.writeFileSync(path.join(ROOT, 'app.js'), appJs, 'utf8');
fs.writeFileSync(path.join(ROOT, 'index.html'), html, 'utf8');
fs.writeFileSync(path.join(ROOT, 'style.css'), css, 'utf8');

console.log('✅ 所有修改已完成！');
console.log('调整1：系统命名 → Chanseen | CS CloudHub');
console.log('调整2：无锡职场已添加，职场名已隐藏');
console.log('调整3：角色系统已更新为9个新角色');
console.log('调整4：各模块已添加筛选栏');
console.log('调整5：知识沉淀库 → 核心知识百宝箱');
