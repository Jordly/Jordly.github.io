// ===== 导出项目CSV =====
function exportProjects(){
  var headers = ['项目编号','项目名称','品牌','品类','项目类型','所属职场','项目经理','项目总监','项目状态','健康度','服务周期开始','服务周期结束','客服base','服务渠道','服务时间','FTE目标','SLA响应(秒)','SLA解决(秒)','成本预算','营收','利润率','项目背景'];
  var rows = [headers.join(',')];
  PROJECTS.forEach(function(p){
    var esc = function(s){ return '"'+(s||'').replace(/"/g,'""')+'"'; };
    var row = [
      p.id,
      esc(p.name),
      esc(p.brand),
      esc(p.category),
      p.serviceMode||'',
      p.workplace||'',
      esc(p.pm),
      esc(p.director),
      p.status||'',
      p.health||'',
      p.startDate||'',
      p.endDate||'',
      esc(p.base),
      esc(p.platforms),
      p.serviceHours||'',
      p.fteTarget||0,
      p.slaResponse||0,
      p.slaResolve||0,
      p.costBudget||0,
      p.revenue||0,
      p.profitRate||0,
      esc(p.background)
    ];
    rows.push(row.join(','));
  });
  var csv = '\uFEFF' + rows.join('\n');
  var blob = new Blob([csv],{type:'text/csv;charset=utf-8;'});
  var a = document.createElement('a');
  var d = new Date();
  var ds = d.getFullYear()+''+String(d.getMonth()+1).padStart(2,'0')+''+String(d.getDate()).padStart(2,'0');
  a.href = URL.createObjectURL(blob);
  a.download = '项目基础档案_'+ds+'.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}

// ===== 导入项目CSV =====
var importPreviewData = null;

function showImportDialog(){
  var body = document.getElementById('modal-body');
  document.getElementById('modal-title').textContent = '📤 导入项目数据';
  body.innerHTML = '<div style="padding:16px 0;">'
    + '<div style="font-size:13px;color:var(--c-text-2);margin-bottom:14px;">请先下载模板，按格式填写后上传。系统将自动识别新增与更新。</div>'
    + '<button class="btn btn-sm" onclick="downloadImportTemplate()" style="margin-bottom:16px;">📥 下载导入模板</button>'
    + '<div id="import-drop-zone" style="border:2px dashed #cbd5e1;border-radius:14px;padding:36px 16px;text-align:center;color:var(--c-text-3);font-size:13px;cursor:pointer;transition:all 0.25s ease;background:var(--c-bg);"'
    + ' onmouseover="this.style.borderColor=\'#2563eb\';this.style.background=\'#f0f7ff\';"'
    + ' onmouseout="this.style.borderColor=\'#cbd5e1\';this.style.background=\'var(--c-bg)\';"'
    + ' onclick="document.getElementById(\'import-file-input\').click()">'
    + '<div style="font-size:32px;margin-bottom:10px;opacity:0.6;">📂</div>'
    + '<div>点击或拖拽CSV文件到此区域</div>'
    + '<div style="font-size:11px;margin-top:6px;color:var(--c-text-3);">仅支持 .csv 文件（UTF-8 编码）</div>'
    + '</div>'
    + '<input type="file" id="import-file-input" accept=".csv" style="display:none" onchange="handleImportFile(this)">'
    + '<div id="import-preview-area" style="margin-top:16px;"></div>'
    + '</div>'
    + '<div class="form-actions">'
    + '<button class="btn" onclick="document.getElementById(\'modal-overlay\').classList.add(\'hidden\')">取消</button>'
    + '<button class="btn btn-primary" id="import-confirm-btn" style="display:none;" onclick="confirmImport()">确认导入</button>'
    + '</div>';
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function downloadImportTemplate(){
  var headers = ['项目编号','项目名称','品牌','品类','项目类型','所属职场','项目经理','项目总监','项目状态','健康度','服务周期开始','服务周期结束','客服base','服务渠道','服务时间','FTE目标','SLA响应(秒)','SLA解决(秒)','成本预算','营收','利润率','项目背景'];
  var example = ['P007','示例项目','示例品牌','美妆','TP项目','济南','张三','李四','优质健康店','🟢','2026-01-01','2026-12-31','济南职场1F','天猫,京东','09:00-22:00','30','120','360','500000','550000','9.1','项目背景说明'];
  var csv = '\uFEFF' + headers.join(',') + '\n' + example.join(',') + '\n';
  var blob = new Blob([csv],{type:'text/csv;charset=utf-8;'});
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = '项目导入模板.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}

function csvParseLine(line){
  var result = []; var cur = ''; var inQ = false;
  for(var i=0;i<line.length;i++){
    var c = line[i];
    if(inQ){
      if(c==='"' && line[i+1]==='"'){ cur+='"'; i++; }
      else if(c==='"'){ inQ=false; }
      else { cur+=c; }
    } else {
      if(c==='"'){ inQ=true; }
      else if(c===','){ result.push(cur); cur=''; }
      else { cur+=c; }
    }
  }
  result.push(cur);
  return result;
}

function handleImportFile(input){
  var file = input.files[0]; if(!file) return;
  var reader = new FileReader();
  reader.onload = function(e){
    var text = e.target.result;
    if(text.charCodeAt(0)===0xFEFF) text = text.slice(1);
    var lines = text.split('\n').map(function(l){return l.trim();}).filter(Boolean);
    if(lines.length<2){ alert('文件为空或格式不正确'); return; }
    var headers = csvParseLine(lines[0]);
    var idx = {}; headers.forEach(function(h,i){ idx[h.trim()]=i; });
    var results = { add:[], update:[], errors:[] };
    for(var i=1;i<lines.length;i++){
      var vals = csvParseLine(lines[i]);
      if(vals.length<2) continue;
      var name = (vals[idx['项目名称']]||'').trim();
      if(!name){ results.errors.push('第'+(i+1)+'行：项目名称不能为空'); continue; }
      var pid = (vals[idx['项目编号']]||'').trim();
      var existing = pid ? PROJECTS.find(function(p){return p.id===pid;}) : null;
      var status = (vals[idx['项目状态']]||'').trim();
      if(status && ['优质健康店','平稳常规店','风险预警店','高危问题店'].indexOf(status)===-1){
        results.errors.push('第'+(i+1)+'行：项目状态必须是"优质健康店/平稳常规店/风险预警店/高危问题店"之一'); continue;
      }
      var health = (vals[idx['健康度']]||'').trim();
      if(health && ['🟢','🟡','🔴'].indexOf(health)===-1){
        results.errors.push('第'+(i+1)+'行：健康度必须是"🟢/🟡/🔴"之一'); continue;
      }
      var obj = {
        id: pid || ('P00'+(PROJECTS.length+1)),
        name: name,
        brand: (vals[idx['品牌']]||'').trim()||'未知',
        category: (vals[idx['品类']]||'').trim()||'未分类',
        serviceMode: (vals[idx['项目类型']]||'').trim()||'TP项目',
        workplace: (vals[idx['所属职场']]||'').trim()||'济南',
        pm: (vals[idx['项目经理']]||'').trim()||'未分配',
        director: (vals[idx['项目总监']]||'').trim()||'未分配',
        status: status||'优质健康店',
        health: health||'🟢',
        startDate: (vals[idx['服务周期开始']]||'').trim()||new Date().toISOString().slice(0,10),
        endDate: (vals[idx['服务周期结束']]||'').trim()||'2026-12-31',
        base: (vals[idx['客服base']]||'').trim()||'',
        platforms: (vals[idx['服务渠道']]||'').trim()||'',
        serviceHours: (vals[idx['服务时间']]||'').trim()||'09:00-22:00',
        fteTarget: Number(vals[idx['FTE目标']])||20,
        slaResponse: Number(vals[idx['SLA响应(秒)']])||120,
        slaResolve: Number(vals[idx['SLA解决(秒)']])||360,
        costBudget: Number(vals[idx['成本预算']])||200000,
        revenue: Number(vals[idx['营收']])||220000,
        profitRate: Number(vals[idx['利润率']])||0,
        background: (vals[idx['项目背景']]||'').trim()||'',
        pmHistory: []
      };
      if(existing){
        obj.pmHistory = existing.pmHistory||[];
        results.update.push({id:existing.id, name:obj.name});
        PROJECTS[PROJECTS.indexOf(existing)] = obj;
      } else {
        results.add.push(obj.name);
        PROJECTS.push(obj);
      }
    }
    importPreviewData = results;
    renderImportPreview(results);
  };
  reader.readAsText(file, 'UTF-8');
}

function renderImportPreview(results){
  var html = '';
  if(results.add.length>0){
    html += '<div style="padding:8px 12px;background:#f0fdf4;border-radius:8px;margin-bottom:8px;font-size:13px;color:#166534;"><span style="font-weight:600;">＋ 新增：</span>'+results.add.length+' 条（'+results.add.slice(0,3).join('、')+(results.add.length>3?' 等':'')+'）</div>';
  }
  if(results.update.length>0){
    html += '<div style="padding:8px 12px;background:#eff6ff;border-radius:8px;margin-bottom:8px;font-size:13px;color:#1d4ed8;"><span style="font-weight:600;">🔄 更新：</span>'+results.update.length+' 条（'+results.update.map(function(u){return u.name;}).slice(0,3).join('、')+(results.update.length>3?' 等':'')+'）</div>';
  }
  if(results.errors.length>0){
    html += '<div style="padding:8px 12px;background:#fef2f2;border-radius:8px;margin-bottom:8px;font-size:13px;color:#dc2626;"><span style="font-weight:600;">✕ 错误：</span>'+results.errors.length+' 处<ul style="margin:4px 0 0 16px;font-size:12px;">'+results.errors.slice(0,5).map(function(e){return '<li>'+e+'</li>';}).join('')+(results.errors.length>5?'<li>...还有'+(results.errors.length-5)+'处错误</li>':'')+'</ul></div>';
  }
  if((results.add.length+results.update.length)>0){
    html += '<div style="font-size:12px;color:var(--c-text-3);margin-top:8px;">确认无误后点击"确认导入"，将新增 '+results.add.length+' 条、更新 '+results.update.length+' 条。</div>';
    document.getElementById('import-confirm-btn').style.display = 'inline-block';
  } else {
    document.getElementById('import-confirm-btn').style.display = 'none';
  }
  document.getElementById('import-preview-area').innerHTML = html;
}

function confirmImport(){
  if(!importPreviewData){ alert('请先上传文件'); return; }
  saveProjects();
  document.getElementById('modal-overlay').classList.add('hidden');
  renderModule(currentModule);
  var msg = '导入完成！';
  if(importPreviewData.add.length>0) msg += ' 新增 '+importPreviewData.add.length+' 条';
  if(importPreviewData.update.length>0) msg += (importPreviewData.add.length>0?'，':' ')+'更新 '+importPreviewData.update.length+' 条';
  if(importPreviewData.errors.length>0) msg += '，'+importPreviewData.errors.length+' 处错误已跳过';
  alert(msg);
  importPreviewData = null;
}
