// VERSION: 20260723 - 密码加密+XSS防护+代码优化
// modules/archive.js — 项目基础档案模块 · 提取自 app.js
/* ═══════════════════ 项目基础档案 ═══════════════════ */
function renderArchive(){

  const all = getFilteredProjects();

  const can = canEditModule('archive');

  return `
  ${renderFilterBar()}

  <div class="module-header">

    <div>

      <div class="module-title">📋 项目基础档案</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">记录项目静态基础信息，新人可快速了解项目全貌</div>

    </div>

    <div class="module-actions" style="flex-wrap:wrap;gap:6px;align-items:center;">

      <!-- 搜索框 -->
      <input type="text" id="archive-search" placeholder="🔍 搜索项目编号/名称/品牌..." 
        style="flex:1;min-width:180px;padding:8px 12px;border-radius:8px;border:1px solid var(--c-border);font-size:13px;"
        oninput="debouncedArchiveSearch(this.value)">

      <button class="btn btn-sm" onclick="showImportDialog()" style="margin-right:4px;">📤 导入</button>
      <button class="btn btn-sm" onclick="exportProjects()" style="margin-right:8px;">📥 导出</button>
      ${can?'<button class="btn btn-primary btn-sm" onclick="showAddProject()">＋ 新增项目</button>':''}

      ${can?'<button class="btn btn-sm" class="btn btn-sm btn-archive-danger" onclick="batchDeleteProjects()">🗑 批量删除</button>':''}

      ${currentRole==='leader'?'<span class="badge badge-gray">只读权限</span>':''}

    </div>

  </div>

  <div class="card">

    <table class="data-table archive-table">

      <thead><tr>
        ${can?'<th style="width:36px;"><input type="checkbox" id="archive-select-all" onclick="toggleArchiveSelectAll(this.checked)" title="全选/取消"></th>':''}
        <th>项目编号</th><th>项目名称</th><th>品牌/品类</th><th>项目类型</th><th>所属职场</th><th>负责人</th><th>项目总监</th><th>交接历史</th><th>操作</th></tr></thead>

      <tbody id="archive-tbody">

        ${all.map((p, idx)=>`
          <tr data-id="${escHtml(p.id)}" data-name="${escHtml(p.name)}" data-brand="${escHtml(p.brand)}" data-pm="${escHtml(p.pm)}" data-search="${(p.id+' '+p.name+' '+p.brand+' '+p.pm).toLowerCase()}">
            ${can?`<td><input type="checkbox" class="archive-row-check" value="${escHtml(p.id)}" onchange="updateBatchDeleteBtn()"></td>`:''}
            <td>${escHtml(p.id)}</td>
            <td><a href="#" style="color:#3b82f6;cursor:pointer;border-bottom:1px dashed #3b82f6;text-decoration:none;" 
                onmouseover="this.style.borderBottom='1px solid #3b82f6'" 
                onmouseout="this.style.borderBottom='1px dashed #3b82f6'"
                onclick="showProjectDetail('${escHtml(p.id)}');return false;" title="点击查看项目详情">${escHtml(p.name)}</a></td>
            <td>${escHtml(p.brand)} / ${escHtml(p.category)}</td>
            <td><span class="badge ${p.serviceMode==='TP项目'?'badge-blue':p.serviceMode==='DP项目'?'badge-green':'badge-orange'}">${escHtml(p.serviceMode)}</span></td>
            <td><span class="wp-tag wp-${p.workplace}">${escHtml(p.workplace)}</span></td>
            <td>${escHtml(p.pm)}</td>
            <td>${escHtml(p.director)}</td>
            <td>${(p.pmHistory||[]).length>0?'<span class="badge badge-gray" title="'+(p.pmHistory||[]).map(h=>escHtml(h.name)+'('+escHtml(h.from)+'~'+escHtml(h.to)+')').join('; ')+'">'+(p.pmHistory||[]).length+'次交接</span>':'无'}</td>
            <td class="actions">
              ${can?'<button class="btn btn-sm" style="background:#eff6ff;color:#2563eb;border-color:#bfdbfe;" onclick="editProject(\''+escHtml(p.id)+'\')">编辑</button>&nbsp;<button class="btn btn-sm" style="color:#dc2626;background:#fef2f2;border-color:#fecaca;" onclick="deleteProjectConfirm(\''+escHtml(p.id)+'\',\''+escHtml(p.name)+'\')">删除</button>':''}
            </td>
          </tr>`).join('')}

      </tbody>

    </table>

    <div id="archive-empty-hint" style="display:none;padding:20px;text-align:center;color:var(--c-text-3);font-size:14px;">
      未找到匹配的项目，请尝试其他搜索关键词
    </div>

  </div>`;

}




function filterArchiveTable(kw){kw=(kw||'').toLowerCase().trim();var s=kw?document.querySelectorAll('#archive-tbody tr'):null,c=0;if(!s){document.querySelectorAll('#archive-tbody tr').forEach(function(r){r.style.display='';c++});}else{s.forEach(function(row){var t=row.dataset.search||'';var m=t.indexOf(kw)!==-1;row.style.display=m?'':'none';if(m)c++});}var h=document.getElementById('archive-empty-hint');if(h)h.style.display=c===0?'':'none'}
// 防抖搜索：用户停止输入 150ms 后执行搜索，避免高频触发
var debouncedArchiveSearch = debounce(function(kw){ filterArchiveTable(kw); }, 150);
function toggleArchiveSelectAll(c){var cb=document.querySelectorAll('.archive-row-check');for(var i=0;i<cb.length;i++)cb[i].checked=c;updateBatchDeleteBtn()}
function updateBatchDeleteBtn(){var c=document.querySelectorAll('.archive-row-check:checked'),b=document.querySelectorAll("[onclick='batchDeleteProjects()']");for(var i=0;i<b.length;i++){b[i].disabled=c.length===0;b[i].style.opacity=c.length>0?1:0.5}}
function batchDeleteProjects(){var c=document.querySelectorAll('.archive-row-check:checked');if(!c.length){showToast('请先勾选要删除的项目','warning');return}var ids=[];for(var i=0;i<c.length;i++)ids.push(c[i].value);showConfirmModal('确定删除选中的 <b>'+ids.length+'</b> 个项目？<br><br><b style="color:var(--c-red)">⚠️ 此操作不可恢复！</b>', '批量删除确认', function(){ids.forEach(function(id){deleteProjectDirectly(id)});showToast('已删除'+ids.length+'个项目');renderModule('archive')});}
function deleteProjectConfirm(id,name){
  showConfirmModal('确定删除项目「<b>' + escHtml(name) + '</b>」？<br><br><b style="color:var(--c-red)">⚠️ 此操作不可恢复！</b><br>将清除该项目所有关联数据（运营、目标、问题等）。', '删除确认', function(){
    PROJECTS = PROJECTS.filter(function(p){ return p.id !== id; });
    saveProjects();
    showToast('已删除项目「' + escHtml(name) + '」');
    renderArchive();
  });
}
function deleteProjectDirectly(id){PROJECTS=PROJECTS.filter(function(p){return p.id!==id});safeSetItem('chansee_projects',JSON.stringify(PROJECTS));if(window.CloudBaseSync)window.CloudBaseSync.saveAll()}

// ===== 目标与权责管理 =====
