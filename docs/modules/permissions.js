// modules/permissions.js — 系统权限管理模块
/* ═══════════════════ 系统权限管理 ═══════════════════ */
function renderPermissions(){
  if (typeof ROLES === "undefined") {
    document.getElementById("module-content").innerHTML = '<div style="padding:40px;text-align:center;color:red;">错误：ROLES 未定义</div>';
    return;
  }
  if (typeof rolePermissions === "undefined") { rolePermissions = {}; }

  window._permSelectedRole = window._permSelectedRole || (ROLES.indexOf(currentRole) >= 0 ? currentRole : ROLES[0]);
  var selRole = window._permSelectedRole;
  var selPerms = rolePermissions[selRole] || {};
  // 安全兜底：如果选中角色无权限数据，从默认配置补充
  if (!selPerms || Object.keys(selPerms).length < 5){
    if (DEFAULT_PERMISSIONS[selRole]){
      selPerms = JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS[selRole]));
      rolePermissions[selRole] = selPerms;
      savePermissions();
    }
  }
  var groupOrder = ["project","collab","tools","system"];
  var actKeys = ["visible","view","edit","import","export","manage"];
  var actLabels = {visible:"可见", view:"查看", edit:"编辑", import:"导入", export:"导出", manage:"管理"};
  var actColors = {visible:"#10b981", view:"#3b82f6", edit:"#f59e0b", import:"#8b5cf6", export:"#ec4899", manage:"#ef4444"};

  var html = '\n<style>\n'+
'.perm-page{font-size:13px;}\n'+
'.perm-layout{display:flex;gap:16px;align-items:flex-start;}\n'+
'.perm-roles{width:180px;flex-shrink:0;background:var(--c-card);border-radius:8px;overflow:hidden;border:1px solid var(--c-border);}\n'+
'.perm-roles-title{font-size:12px;font-weight:600;color:var(--c-text-3);padding:12px 14px 8px;border-bottom:1px solid var(--c-border);display:flex;align-items:center;justify-content:space-between;}\n'+
'.perm-roles-title .add-role-btn{font-size:16px;cursor:pointer;color:#3b82f6;}\n'+
'.perm-role-item{padding:10px 14px;cursor:pointer;font-size:13px;color:var(--c-text-2);border-left:3px solid transparent;transition:all .15s;white-space:nowrap;display:flex;align-items:center;justify-content:space-between;}\n'+
'.perm-role-item:hover{background:rgba(59,130,246,.06);color:var(--c-text-1);}\n'+
'.perm-role-active{background:rgba(59,130,246,.08)!important;color:#2563eb!important;font-weight:600;border-left-color:#2563eb!important;}\n'+
'.perm-role-name{flex:1;}\n'+
'.perm-role-actions{display:none;gap:4px;}\n'+
'.perm-role-item:hover .perm-role-actions{display:flex;}\n'+
'.perm-role-action-btn{font-size:12px;cursor:pointer;color:#6b7280;}\n'+
'.perm-role-action-btn:hover{color:#3b82f6;}\n'+
'.perm-content{flex:1;min-width:0;}\n'+
'.perm-role-header{font-size:14px;font-weight:600;color:var(--c-text-1);margin-bottom:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;}\n'+
'.perm-copy-btn{font-size:12px;padding:4px 10px;background:#f3f4f6;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;color:#374151;}\n'+
'.perm-copy-btn:hover{background:#e5e7eb;}\n'+
'.perm-save-hint{font-size:11px;font-weight:400;color:#10b981;opacity:0;transition:opacity .3s;}\n'+
'.perm-save-hint.show{opacity:1;}\n'+
'.perm-affected-users{font-size:11px;color:#f59e0b;margin-top:8px;}\n'+
'.perm-group{margin-bottom:16px;}\n'+
'.perm-group-label{font-size:12px;font-weight:600;color:var(--c-text-3);padding:6px 0;margin-bottom:6px;border-bottom:1px dashed var(--c-border);text-transform:uppercase;letter-spacing:.5px;}\n'+
'.perm-mod-row{display:flex;align-items:center;padding:8px 12px;border-radius:6px;background:var(--c-card);border:1px solid var(--c-border);margin-bottom:4px;gap:12px;flex-wrap:wrap;}\n'+
'.perm-mod-name{width:130px;flex-shrink:0;font-size:12px;font-weight:500;color:var(--c-text-2);}\n'+
'.perm-mod-actions{display:flex;gap:4px;flex-wrap:wrap;}\n'+
'.perm-cb{display:inline-flex;align-items:center;gap:3px;padding:3px 7px;border-radius:4px;cursor:pointer;font-size:11px;border:1px solid var(--c-border);transition:all .15s;user-select:none;}\n'+
'.perm-cb-checked{background:#ecfdf5;border-color:#10b981;color:#059669;}\n'+
'.perm-cb-unchecked{background:transparent;color:var(--c-text-3);}\n'+
'.perm-cb-box{width:12px;height:12px;border-radius:2px;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;}\n'+
'.perm-cb-checked .perm-cb-box{background:currentColor;border-color:currentColor;}\n'+
'.perm-cb-checked .perm-cb-box::after{content:"✓";color:#fff;font-size:8px;font-weight:700;line-height:1;}\n'+
'.perm-mod-scope{margin-left:auto;display:flex;align-items:center;gap:6px;flex-shrink:0;}\n'+
'.perm-scope-label{font-size:11px;color:var(--c-text-3);}\n'+
'.perm-scope-opt{font-size:11px;padding:3px 8px;border-radius:4px;cursor:pointer;border:1px solid var(--c-border);transition:all .15s;user-select:none;}\n'+
'.perm-scope-active{background:#eff6ff;border-color:#3b82f6;color:#2563eb;font-weight:500;}\n'+
'.perm-legend{margin-top:16px;padding:10px 14px;border-radius:6px;background:var(--c-bg);border:1px solid var(--c-border);display:flex;flex-wrap:wrap;gap:10px;align-items:center;font-size:11px;color:var(--c-text-3);}\n'+
'.perm-legend-item{display:inline-flex;align-items:center;gap:4px;}\n'+
'.perm-legend-dot{width:8px;height:8px;border-radius:50%;display:inline-block;flex-shrink:0;}\n'+
'</style>\n'+
'<div class="perm-page">\n'+
'  <div class="module-header">\n'+
'    <div>\n'+
'      <div class="module-title">⚙️ 系统权限管理</div>\n'+
'      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">为'+ROLES.length+'个角色配置各功能模块的访问权限与操作范围</div>\n'+
'      <div style="margin-top:8px;padding:6px 10px;background:linear-gradient(135deg,#eff6ff,#ecfdf5);border-radius:6px;font-size:12px;color:#2563eb;display:inline-block;">'+
'        👤 您当前的登录角色：<b>'+currentRole+'</b> &nbsp;|&nbsp; 点击左侧角色查看/编辑其权限，勾选操作框后自动保存'+
'      </div>\n'+
'    </div>\n'+
'    <div class="module-actions">\n'+
'      <button class="btn btn-sm" onclick="exportPermissions()">导出配置</button>\n'+
'      <button class="btn btn-primary btn-sm" onclick="resetPermissions()">恢复默认</button>\n'+
'    </div>\n'+
'  </div>\n'+
'  <div class="perm-layout">\n'+
'    <div class="perm-roles">\n'+
'      <div class="perm-roles-title">👥 角色列表 <span class="add-role-btn" onclick="addRole()" title="新增角色">＋</span></div>\n'+
''+ROLES.map(function(r){
  var active=r===selRole?' perm-role-active':'';
  var isMyRole=r===currentRole?' <span style="font-size:10px;color:#10b981;">(我)</span>':'';
  var isBuiltIn=isBuiltInRole(r);
  var actions=isBuiltIn?'':('<span class="perm-role-actions">'+
    '<span class="perm-role-action-btn" onclick="event.stopPropagation();editRole(\''+r+'\')" title="编辑">✏️</span>'+
    '<span class="perm-role-action-btn" onclick="event.stopPropagation();deleteRole(\''+r+'\')" title="删除">🗑️</span>'+
    '</span>');
  return'      <div class="perm-role-item'+active+'" onclick="selectPermRole(\''+r+'\')"><span class="perm-role-name">'+r+isMyRole+'</span>'+actions+'</div>\n';
}).join('')+
'    </div>\n'+
'    <div class="perm-content">\n'+
'      <div class="perm-role-header">\n'+
'        当前角色「'+selRole+'」的权限配置\n'+
'        <button class="perm-copy-btn" onclick="copyPermissionsFrom()">📋 从其他角色复制权限</button>\n'+
'        <span class="perm-save-hint" id="perm-save-hint">✅ 已保存</span>\n'+
'      </div>\n'+
'      <div class="perm-affected-users" id="perm-affected-users"></div>\n'+
''+groupOrder.map(function(gid){var grp=MODULE_GROUPS[gid];return'      <div class="perm-group">\n'+
'        <div class="perm-group-label">'+grp.label+'</div>\n'+
''+grp.keys.map(function(mk){var mn=MODULE_NAMES[mk];var ma=MODULE_ACTIONS[mk];var mp=selPerms[mk];if(typeof mp==='string'){if(mp==='write')mp={visible:true,view:true,edit:true,import:false,export:true,manage:false,scope:'all'};else if(mp==='read')mp={visible:true,view:true,edit:false,import:false,export:true,manage:false,scope:'all'};else mp={visible:false,view:false,edit:false,import:false,export:false,manage:false,scope:'all'};}
// 只显示支持的操作选项（隐藏不支持的）
var applicableActions=actKeys.filter(function(ak){return ma[ak]===1;});
return'        <div class="perm-mod-row">\n'+
'          <div class="perm-mod-name">'+mn+'</div>\n'+
'          <div class="perm-mod-actions">\n'+
''+applicableActions.map(function(ak){var checked=mp[ak]===true;var cls=checked?'perm-cb-checked':'perm-cb-unchecked';return'            <label class="perm-cb '+cls+'" title="'+actLabels[ak]+'"><input type="checkbox" '+(checked?' checked':'')+' onchange="togglePermAction(\''+selRole+'\',\''+mk+'\',\''+ak+'\',this.checked)" style="display:none;"><span class="perm-cb-box"></span><span class="perm-cb-label">'+actLabels[ak]+'</span></label>\n';}).join('')+
'          </div>\n'+
''+(ma.scope===1?'          <div class="perm-mod-scope">\n'+
'            <span class="perm-scope-label">数据范围：</span>\n'+
'            <label class="perm-scope-opt '+(mp.scope==='all'||!mp.scope?'perm-scope-active':'')+'"><input type="radio" name="scope_'+mk+'" value="all" '+(mp.scope==='all'||!mp.scope?'checked':'')+' onchange="togglePermScope(\''+selRole+'\',\''+mk+'\',\'all\')" style="display:none;"><span>全部项目</span></label>\n'+
'            <label class="perm-scope-opt '+(mp.scope==='own'?'perm-scope-active':'')+'"><input type="radio" name="scope_'+mk+'" value="own" '+(mp.scope==='own'?'checked':'')+' onchange="togglePermScope(\''+selRole+'\',\''+mk+'\',\'own\')" style="display:none;"><span>仅自己项目</span></label>\n'+
'          </div>\n':'')+
'        </div>\n';}).join('')+
'      </div>\n';}).join('')+
'      <div class="perm-legend">\n'+
'        <span style="font-weight:600;color:var(--c-text-2);">💡 操作说明：</span>\n'+
''+actKeys.map(function(ak){return'        <span class="perm-legend-item"><span class="perm-legend-dot" style="background:'+actColors[ak]+'"></span>'+actLabels[ak]+'</span>\n';}).join('')+
'      </div>\n'+
'    </div>\n'+
'  </div>\n'+
'</div>';

  return html;
}

// ===== 项目难度评估（优化版）=====
// 计算管理基准分（根据管理等级）
function getManagementBenchmark(level) {
  if (!level) return 35;
  if (level.includes('组长-1')) return 35;
  if (level.includes('组长-2')) return 45;
  if (level.includes('组长-3')) return 55;
  if (level.includes('主管')) return 70;
  if (level.includes('经理')) return 90;
  if (level.includes('培训师')) return 30;
  return 35;
}

// 计算适配度（百分比）
function calcCompatibility(projectScore, managementBenchmark) {
  const diff = Math.abs(projectScore - managementBenchmark);
  const compatibility = Math.max(0, Math.min(100, 100 - diff * 1.25));
  return Math.round(compatibility);
}

// 获取适配度档位
function getCompatibilityBand(pct) {
  if (pct < 60) return { label: '<60% 不匹配', color: '#f5222d', bg: '#fff1f0' };
  if (pct < 80) return { label: '60%-80% 基本匹配', color: '#fa8c16', bg: '#fff7e6' };
  return { label: '80%-100% 高度匹配', color: '#52c41a', bg: '#f6ffed' };
}

// 获取难度等级
function getDifficultyLevel(score) {
  if (score <= 40) return { label: '低难度', color: '#52c41a', cls: 'low' };
  if (score <= 50) return { label: '中低难度', color: '#1890ff', cls: 'mid-low' };
  if (score <= 60) return { label: '中高难度', color: '#faad14', cls: 'mid-high' };
  if (score <= 80) return { label: '高难度', color: '#fa8c16', cls: 'high' };
  return { label: '超高难度', color: '#f5222d', cls: 'extreme' };
}

// 渲染项目难度评估页面（优化版）
// 筛选状态缓存（防止重新渲染时丢失选中值）
var _asmtFilterCache = { dept: '', mgr: '' };

