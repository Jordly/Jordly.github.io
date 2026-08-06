// modules/satisfaction.js — 满意度管理模块
/* ═══════════════════ 满意度管理 ═══════════════════ */
function renderSatisfaction(){

  const can = canEdit();

  const isLeader = currentRole === 'leader';

  const isStaff = currentRole === 'staff';



  // 应用筛选

  let filtered = [...SATISFACTION_DATA];

  if(SAT_FILTER.projectId) filtered = filtered.filter(s => s.projectId === SAT_FILTER.projectId);

  if(SAT_FILTER.scoreRange){

    const [min,max] = SAT_FILTER.scoreRange.split('-').map(Number);

    filtered = filtered.filter(s => s.leaderScore >= min && s.leaderScore <= max);

  }

  if(SAT_FILTER.evaluator) filtered = filtered.filter(s => s.evaluatedBy === SAT_FILTER.evaluator);



  // 统计（基于全部数据）

  const totalEvaluated = SATISFACTION_DATA.filter(s => s.status === '已评定').length;

  const avgScore = SATISFACTION_DATA.length ?

    (SATISFACTION_DATA.reduce((s,v) => s + v.leaderScore, 0) / SATISFACTION_DATA.length).toFixed(1) : '0.0';

  const dist10 = SATISFACTION_DATA.filter(s => s.leaderScore === 10).length;

  const dist8  = SATISFACTION_DATA.filter(s => s.leaderScore === 8).length;

  const dist6  = SATISFACTION_DATA.filter(s => s.leaderScore === 6).length;

  const dist3  = SATISFACTION_DATA.filter(s => s.leaderScore === 3).length;

  const dist0  = SATISFACTION_DATA.filter(s => s.leaderScore === 0).length;



  // 下拉选项

  const projectOptions = PROJECTS.map(p =>

    `<option value="${escHtml(p.id)}" ${SAT_FILTER.projectId===p.id?'selected':''}>${escHtml(p.name)}（${escHtml(p.workplace)}）</option>`

  ).join('');

  const evaluatorList = [...new Set(SATISFACTION_DATA.map(s => s.evaluatedBy))];

  const evaluatorOptions = evaluatorList.map(e =>

    `<option value="${e}" ${SAT_FILTER.evaluator===e?'selected':''}>${e}</option>`

  ).join('');



  return `

  <div class="module-header">

    <div>

      <div class="module-title">💯 项目运维调研</div>

      <div style="font-size:12px;color:var(--c-text-3);margin-top:4px;">

        客服端与项目端的沟通桥梁 · 反向促进成长 · ${isLeader ? '领导视角：可评定打分' : '团队视角：查看评定结果'}

      </div>

    </div>

    <div class="module-actions">

      ${isLeader||currentRole==='pm'||currentRole==='客服总监'||currentRole==='超级管理员'||currentRole==='管理员'||canEdit() ? '<button class="btn btn-primary btn-sm" onclick="showAddSatisfaction()">＋ 新增评估</button>' : ''}

      <button class="btn btn-sm" onclick="exportSatisfaction()">📤 导出</button>

      ${isLeader||currentRole==='pm'||currentRole==='客服总监'||currentRole==='超级管理员'||currentRole==='管理员'||canEdit() ? '<button class="btn btn-sm" onclick="importSatisfaction()">📥 导入</button>' : ''}

      ${isLeader||currentRole==='pm' ? '<button class="btn btn-sm" onclick="showSatisfactionPermission()">🔐 权限设置</button>' : ''}

    </div>

  </div>



  <!-- 评分说明 -->

  <div class="card" style="margin-bottom:16px;padding:14px 18px;">

    <div style="font-size:13px;font-weight:500;margin-bottom:8px;">📋 评分机制说明</div>

    <div style="font-size:12px;color:var(--c-text-2);line-height:2;">

      <div>🟢 <b>对外（项目方）</b>：只记录感受描述（非常满意/满意/一般/不满意），<b>不展示分值</b>，由上级领导与项目沟通后填写</div>

      <div>🔵 <b>对内（上级评定）</b>：上级基于沟通内容 + 校验真伪，给出 <b>10 / 8 / 6 / 3 / 0</b> 五档评分</div>

      <div>🟡 <b>核心目的</b>：帮助员工提能提效，改进不足，<b>不是惩罚工具</b>，是友好协作的桥梁</div>

    </div>

  </div>



  <!-- 统计卡片 -->

  <div class="stats-grid" style="margin-bottom:16px;">

    <div class="stat-card">

      <div class="stat-label">已评估</div>

      <div class="stat-value">${totalEvaluated}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">平均分</div>

      <div class="stat-value" style="color:${avgScore>=8?'var(--c-green)':avgScore>=6?'var(--c-yellow)':'var(--c-red)'}">${avgScore}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">10分（优秀）</div>

      <div class="stat-value" style="color:var(--c-green)">${dist10}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">8分（良好）</div>

      <div class="stat-value" style="color:var(--c-green)">${dist8}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">6分（一般）</div>

      <div class="stat-value" style="color:var(--c-yellow)">${dist6}</div>

    </div>

    <div class="stat-card">

      <div class="stat-label">3分/0分</div>

      <div class="stat-value" style="color:var(--c-red)">${dist3+dist0}</div>

    </div>

  </div>



  <!-- 筛选栏 -->

  <div class="sat-filter-bar card" style="margin-bottom:16px;padding:12px 16px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;">

    <span style="font-size:12px;color:var(--c-text-3);font-weight:500;">筛选条件：</span>

    <select class="form-select form-select-sm" id="sat-filter-project" onchange="SAT_FILTER.projectId=this.value;" style="max-width:200px;">

      <option value="">全部项目</option>

      ${projectOptions}

    </select>

    <select class="form-select form-select-sm" id="sat-filter-score" onchange="SAT_FILTER.scoreRange=this.value;" style="max-width:160px;">

      <option value="">全部得分</option>

      <option value="10-10" ${SAT_FILTER.scoreRange==='10-10'?'selected':''}>10分 优秀</option>

      <option value="8-9" ${SAT_FILTER.scoreRange==='8-9'?'selected':''}>8分 良好</option>

      <option value="6-7" ${SAT_FILTER.scoreRange==='6-7'?'selected':''}>6分 一般</option>

      <option value="0-5" ${SAT_FILTER.scoreRange==='0-5'?'selected':''}>0-5分 需改进</option>

    </select>

    <select class="form-select form-select-sm" id="sat-filter-evaluator" onchange="SAT_FILTER.evaluator=this.value;" style="max-width:160px;">

      <option value="">全部评定人</option>

      ${evaluatorOptions}

    </select>

    <button class="btn btn-sm" onclick="SAT_FILTER={projectId:'',scoreRange:'',evaluator:''};renderModule('satisfaction')" style="color:var(--c-text-3);">清除筛选</button>

    <button class="btn btn-sm btn-primary" onclick="applySatFilter()">确定</button>

    <span style="margin-left:auto;font-size:12px;color:var(--c-text-3);">共 ${filtered.length} 条记录</span>

  </div>



  <!-- 评估列表 -->

  <div class="card">

    <table class="data-table">

      <thead>

        <tr>

          <th>项目</th>

          <th>周期</th>

          <th>项目综合感受</th>

          <th>业务表现</th>

          <th>专业度</th>

          <th>执行力</th>

          <th>沟通配合</th>

          <th>领导评分</th>

          <th>上级评语/总结</th>

          <th>状态</th>

          <th>操作</th>

        </tr>

      </thead>

      <tbody>

        ${filtered.map(s => {

          const p = PROJECTS.find(pp => pp.id === s.projectId);

          const scoreColor = s.leaderScore >= 10 ? 'var(--c-green)' : 

                           s.leaderScore >= 8 ? 'var(--c-green)' :

                           s.leaderScore >= 6 ? 'var(--c-yellow)' : 'var(--c-red)';

          const scoreLabel = s.leaderScore === 10 ? '优秀' :

                           s.leaderScore === 8 ? '良好' :

                           s.leaderScore === 6 ? '一般' :

                           s.leaderScore === 3 ? '需改进' : '不合格';

          const commentPreview = s.leaderComment ? (s.leaderComment.length > 15 ? s.leaderComment.slice(0,15) + '…' : s.leaderComment) : '—';

          return `

          <tr onclick="showSatisfactionDetail(${s.id})" style="cursor:pointer;">

            <td>${p ? p.name : s.projectId}</td>

            <td>${s.period}</td>

            <td><span class="badge ${s.overall==='非常满意'?'badge-green':s.overall==='满意'?'badge-green':'badge-yellow'}">${s.overall}</span></td>

            <td>${s.busiPerf.length > 10 ? s.busiPerf.slice(0,10) + '…' : s.busiPerf}</td>

            <td>${s.professionalism.length > 8 ? s.professionalism.slice(0,8) + '…' : s.professionalism}</td>

            <td>${s.execution.length > 8 ? s.execution.slice(0,8) + '…' : s.execution}</td>

            <td>${s.commFreq}</td>

            <td><span style="font-weight:700;color:${scoreColor};font-size:15px;">${s.leaderScore}分</span> <span style="font-size:11px;color:${scoreColor};">${scoreLabel}</span></td>

            <td title="${s.leaderComment || '暂无评语'}"><span style="font-size:12px;color:var(--c-text-2);">${commentPreview}</span></td>

            <td><span class="badge ${s.status==='已评定'?'badge-green':'badge-yellow'}">${s.status}</span></td>

            <td><button class="btn btn-sm" onclick="event.stopPropagation();showSatisfactionDetail(${s.id})">查看</button></td>

          </tr>`;

        }).join('')}

      </tbody>

    </table>

    ${filtered.length === 0 ? '<div class="empty-state"><div class="empty-icon">📭</div><p>没有符合条件的评估记录</p></div>' : ''}

  </div>`;

}



function applySatFilter(){
  var pf=document.getElementById('sat-filter-project');
  var sf=document.getElementById('sat-filter-score');
  var ef=document.getElementById('sat-filter-evaluator');
  SAT_FILTER.projectId = pf?pf.value:'';
  SAT_FILTER.scoreRange = sf?sf.value:'';
  SAT_FILTER.evaluator = ef?ef.value:'';
  renderModule('satisfaction');
}

function showSatisfactionDetail(id){

  const s = SATISFACTION_DATA.find(ss => ss.id === id);

  if(!s) return;

  const p = PROJECTS.find(pp => pp.id === s.projectId);

  const isLeader = currentRole === 'leader';

  

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "满意度评估详情 · " + (p ? p.name : s.projectId);

  

  const scoreColor = s.leaderScore >= 8 ? 'var(--c-green)' : s.leaderScore >= 6 ? 'var(--c-yellow)' : 'var(--c-red)';

  const scoreLabel = s.leaderScore === 10 ? '优秀（超出预期）' : 

                   s.leaderScore === 8 ? '良好（达标）' : 

                   s.leaderScore === 6 ? '一般（需改进）' : 

                   s.leaderScore === 3 ? '较差（重点关注）' : '不合格（立即改进）';

  

  body.innerHTML = `

    <!-- 项目信息 -->

    <div class="detail-grid" style="margin-bottom:16px;">

      <div class="detail-item"><div class="detail-label">关联项目</div><div class="detail-value">${p ? p.name : '未知'}</div></div>

      <div class="detail-item"><div class="detail-label">评估周期</div><div class="detail-value">${s.period}</div></div>

      <div class="detail-item"><div class="detail-label">评定人</div><div class="detail-value">${s.evaluatedBy}</div></div>

      <div class="detail-item"><div class="detail-label">评定日期</div><div class="detail-value">${s.evaluatedAt}</div></div>

    </div>



    <!-- 项目方感受（对外，不展示分值） -->

    <div style="background:var(--c-bg);padding:14px 16px;border-radius:var(--radius);margin-bottom:16px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;color:var(--c-text-2);">🗣️ 项目方感受（对外，不展示分值）</div>

      

      <div style="margin-bottom:10px;">

        <div style="font-size:12px;color:var(--c-text-3);">综合感受</div>

        <div style="font-size:14px;font-weight:500;margin-top:2px;"><span class="badge ${s.overall==='非常满意'?'badge-green':s.overall==='满意'?'badge-green':'badge-yellow'}">${s.overall}</span></div>

      </div>

      

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">

        <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

          <div style="font-size:11px;color:var(--c-text-3);">团队业务表现</div>

          <div style="font-size:12px;margin-top:2px;">${s.busiPerf}</div>

        </div>

        <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

          <div style="font-size:11px;color:var(--c-text-3);">团队专业度</div>

          <div style="font-size:12px;margin-top:2px;">${s.professionalism}</div>

        </div>

        <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

          <div style="font-size:11px;color:var(--c-text-3);">团队执行力</div>

          <div style="font-size:12px;margin-top:2px;">${s.execution}</div>

        </div>

        <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

          <div style="font-size:11px;color:var(--c-text-3);">风险管控</div>

          <div style="font-size:12px;margin-top:2px;">${s.riskControl}</div>

        </div>

      </div>

      

      <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;margin-bottom:8px;">

        <div style="font-size:11px;color:var(--c-text-3);">汇报能力</div>

        <div style="font-size:12px;margin-top:2px;">时效性：${s.repTime} ｜ 准确性：${s.repAcc} ｜ 全面性：${s.repFull}</div>

      </div>

      

      <div style="background:var(--c-surface);padding:8px 10px;border-radius:8px;">

        <div style="font-size:11px;color:var(--c-text-3);">沟通配合</div>

        <div style="font-size:12px;margin-top:2px;">沟通频率：${s.commFreq} ｜ 理解能力：${s.commUnd} ｜ 信息同步：${s.commSync}</div>

      </div>

    </div>



    <!-- 上级评定（对内） -->

    <div style="background:var(--c-yellow-bg);padding:14px 16px;border-radius:var(--radius);margin-bottom:16px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;color:var(--c-yellow);">🔒 上级评定（对内，仅团队可见）</div>

      <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px;">

        <div style="font-size:32px;font-weight:800;color:${scoreColor};">${s.leaderScore}分</div>

        <div>

          <div style="font-size:14px;font-weight:500;color:${scoreColor};">${scoreLabel}</div>

          <div style="font-size:12px;color:var(--c-text-2);margin-top:2px;">评分人：${s.evaluatedBy} ｜ ${s.evaluatedAt}</div>

        </div>

      </div>

      <div style="background:var(--c-surface);padding:10px 12px;border-radius:8px;">

        <div style="font-size:12px;color:var(--c-text-3);">评定意见（帮助提能提效）</div>

        <div style="font-size:13px;margin-top:4px;line-height:1.6;">${s.leaderComment}</div>

      </div>

    </div>



    ${isLeader && s.status !== '已评定' ? `

    <div class="form-group">

      <label class="form-label">领导评分（10/8/6/3/0）</label>

      <select class="form-select" id="s-score" style="max-width:200px;">

        <option value="10" ${s.leaderScore===10?'selected':''}>10分 - 优秀（超出预期）</option>

        <option value="8" ${s.leaderScore===8?'selected':''}>8分 - 良好（达标）</option>

        <option value="6" ${s.leaderScore===6?'selected':''}>6分 - 一般（需改进）</option>

        <option value="3" ${s.leaderScore===3?'selected':''}>3分 - 较差（重点关注）</option>

        <option value="0" ${s.leaderScore===0?'selected':''}>0分 - 不合格（立即改进）</option>

      </select>

    </div>

    <div class="form-group">

      <label class="form-label">评定意见（帮助提能提效，非惩罚）</label>

      <textarea class="form-textarea" id="s-comment" placeholder="记录具体改进建议、提能方向">${s.leaderComment}</textarea>

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">取消</button>

      <button class="btn btn-primary" onclick="doUpdateSatisfaction(${s.id})">确认评定</button>

    </div>` : 

    `<div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">关闭</button>

    </div>`}

  `;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doUpdateSatisfaction(id){

  const s = SATISFACTION_DATA.find(ss => ss.id === id);

  if(!s) return;

  const score = parseInt(document.getElementById("s-score").value);

  const comment = document.getElementById("s-comment").value;

  s.leaderScore = score;

  s.leaderComment = comment;

  s.status = '已评定';

  s.evaluatedAt = new Date().toISOString().slice(0,10);

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("satisfaction");

  alert("评定已保存！评分：" + score + "分\n意见已记录，将用于帮助员工提能提效。");

}



function showAddSatisfaction(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "＋ 新增满意度评估";

  const projectOptions = PROJECTS.map(p => `<option value="${escHtml(p.id)}">${escHtml(p.name)}（${escHtml(p.workplace)}）</option>`).join("");

  body.innerHTML = `

    <div class="form-group">

      <label class="form-label">关联项目 *</label>

      <select class="form-select" id="sf-project">

        <option value="">-- 请选择 --</option>

        ${projectOptions}

      </select>

    </div>

    <div class="form-group">

      <label class="form-label">评估周期 *</label>

      <input class="form-input" id="sf-period" value="2026-05" placeholder="如：2026-05">

    </div>

    

    <div style="background:var(--c-bg);padding:12px 14px;border-radius:var(--radius);margin-bottom:14px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;color:var(--c-text-2);">🗣️ 项目方感受（由上级与项目沟通后填写，不展示分值）</div>

      

      <div class="form-group">

        <label class="form-label">综合感受</label>

        <select class="form-select" id="sf-overall">

          <option>非常满意</option>

          <option>满意</option>

          <option>一般</option>

          <option>不满意</option>

        </select>

      </div>

      

      <div class="form-row">

        <div class="form-group">

          <label class="form-label">团队业务表现</label>

          <input class="form-input" id="sf-biz" placeholder="描述项目方感受">

        </div>

        <div class="form-group">

          <label class="form-label">团队专业度</label>

          <input class="form-input" id="sf-pro" placeholder="描述项目方感受">

        </div>

      </div>

      

      <div class="form-row">

        <div class="form-group">

          <label class="form-label">团队执行力</label>

          <input class="form-input" id="sf-exec" placeholder="描述项目方感受">

        </div>

        <div class="form-group">

          <label class="form-label">风险管控</label>

          <input class="form-input" id="sf-risk" placeholder="描述项目方感受">

        </div>

      </div>

      

      <div class="form-group">

        <label class="form-label">汇报时效性</label>

        <input class="form-input" id="sf-rep-time" placeholder="描述项目方感受">

      </div>

      <div class="form-group">

        <label class="form-label">汇报准确性</label>

        <input class="form-input" id="sf-rep-acc" placeholder="描述项目方感受">

      </div>

      <div class="form-group">

        <label class="form-label">汇报全面性</label>

        <input class="form-input" id="sf-rep-full" placeholder="描述项目方感受">

      </div>

      

      <div class="form-group">

        <label class="form-label">沟通频率感受</label>

        <input class="form-input" id="sf-comm-freq" placeholder="非常满意/满意/一般/不满意">

      </div>

      <div class="form-group">

        <label class="form-label">沟通理解感受</label>

        <input class="form-input" id="sf-comm-und" placeholder="描述项目方感受">

      </div>

      <div class="form-group">

        <label class="form-label">活动信息同步感受</label>

        <input class="form-input" id="sf-comm-sync" placeholder="描述项目方感受">

      </div>

    </div>

    

    <div style="background:var(--c-yellow-bg);padding:12px 14px;border-radius:var(--radius);margin-bottom:14px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;color:var(--c-yellow);">🔒 上级评定（后续填写，本次可暂存项目感受）</div>

      <div style="font-size:12px;color:var(--c-text-2);">领导评分和评定意见可在与项目沟通后补充填写。</div>

    </div>

    

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">取消</button>

      <button class="btn btn-primary" onclick="doAddSatisfaction()">保存（待评定）</button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doAddSatisfaction(){

  const pid = document.getElementById("sf-project").value;

  const period = document.getElementById("sf-period").value;

  if(!pid || !period) { alert("请填写必填项"); return; }

  const p = PROJECTS.find(pp => pp.id === pid);

  var _nr = {

    id: SATISFACTION_DATA.length + 1,

    projectId: pid,

    period: period,

    projectFeedback: {

      busiLima2sPerf: document.getElementById("sf-biz").value || "待填写",

      professionalism: document.getElementById("sf-pro").value || "待填写",

      execution: document.getElementById("sf-exec").value || "待填写",

      reporting: { 

        timeliLima2s: document.getElementById("sf-rep-time").value || "待填写", 

        accuracy: document.getElementById("sf-rep-acc").value || "待填写", 

        completeLima2s: document.getElementById("sf-rep-full").value || "待填写" 

      },

      riskControl: document.getElementById("sf-risk").value || "待填写",

      communication: { 

        frequency: document.getElementById("sf-comm-freq").value || "待填写", 

        understanding: document.getElementById("sf-comm-und").value || "待填写", 

        sync: document.getElementById("sf-comm-sync").value || "待填写" 

      },

      overall: document.getElementById("sf-overall").value || "满意"

    },

    leaderScore: 0,

    leaderComment: "",

    evaluatedBy: currentRole,

    evaluatedAt: "",

    status: "待评定"

  };

  SATISFACTION_DATA.push(flattenSat(_nr));

  document.getElementById("modal-overlay").classList.add("hidden");

  renderModule("satisfaction");

  alert("满意度评估已创建！\n项目感受已记录，待上级与项目沟通后补充评定打分。");

}



// ===== 满意度评估 - 导出 =====

function exportSatisfaction(){
  const headers = ['项目','周期','项目综合感受','业务表现','专业度','执行力','汇报时效性','汇报准确性','汇报全面性','风险管控','沟通频率','沟通理解','信息同步','领导评分','上级评语','评定人','评定日期','状态'];
  const rows = SATISFACTION_DATA.map(s => {
    const p = PROJECTS.find(pp => pp.id === s.projectId);
    return [
      p ? p.name : s.projectId,
      s.period,
      s.overall,
      s.busiPerf,
      s.professionalism,
      s.execution,
      s.repTime,
      s.repAcc,
      s.repFull,
      s.riskControl,
      s.commFreq,
      s.commUnd,
      s.commSync,
      s.leaderScore,
      s.leaderComment,
      s.evaluatedBy,
      s.evaluatedAt,
      s.status
    ];
  });
  showExportDialog(headers, rows, `项目运维调研_${new Date().toISOString().slice(0,10)}`, '项目运维调研');
}


function importSatisfaction(){

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "📥 导入满意度评估";

  body.innerHTML = `

    <div style="font-size:13px;color:var(--c-text-2);margin-bottom:14px;line-height:1.8;">

      <div>📋 <b>导入说明：</b></div>

      <div>支持 CSV / XLSX 格式，文件字段顺序不限，参考导出文件。</div>

      <div style="background:var(--c-bg);padding:8px 12px;border-radius:6px;margin-top:6px;font-size:12px;">

        项目ID / 周期 / 综合感受 / 业务表现 / 专业度 / 执行力 / 汇报时效性 / 汇报准确性 / 汇报全面性 / 风险管控 / 沟通频率 / 沟通理解 / 信息同步 / 领导评分 / 上级评语 / 状态

      </div>

      <div style="margin-top:8px;">也可下载当前数据作为模板参考（点击"导出"按钮）。</div>

    </div>

    <div class="form-group">

      <label class="form-label">选择文件（.csv）</label>

      <input type="file" id="sat-import-file" accept=".csv,.xlsx,.xls" class="form-input" style="padding:6px 10px;">

    </div>

    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">取消</button>

      <button class="btn btn-primary" onclick="doImportSatisfaction()">开始导入</button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



function doImportSatisfaction(){

  const fileInput = document.getElementById("sat-import-file");

  if(!fileInput || !fileInput.files.length){ alert("请先选择文件"); return; }

  const file = fileInput.files[0];
  const ext = (file.name || '').split('.').pop().toLowerCase();

  if (ext === 'xlsx' || ext === 'xls') {
    // Excel 格式：用 SheetJS 解析
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const wb = XLSX.read(e.target.result, { type: 'array' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
        if (!rows || rows.length < 2) { alert("文件内容为空或仅有表头"); return; }
        processSatisfactionRows(rows);
      } catch(err) { alert("解析Excel失败：" + err.message); }
    };
    reader.readAsArrayBuffer(file);
  } else {
    // CSV 格式：原有逻辑
    const reader = new FileReader();
    reader.onload = function(e){
      try {
        const text = e.target.result;
        const lines = text.replace(/^\uFEFF/,'').split('\n').map(l => l.trim()).filter(Boolean);
        if(lines.length < 2){ alert("文件内容为空或仅有表头"); return; }
        // CSV 转成二维数组格式，跟 Excel 统一
        const rows = lines.map(function(line) {
          return line.split(',').map(v => v.replace(/^"|"$/g,'').trim());
        });
        processSatisfactionRows(rows);
      } catch(err){ alert("导入失败：" + err.message); }
    };
    reader.readAsText(file, 'UTF-8');
  }

}

function processSatisfactionRows(rows) {
  const headers = rows[0];
  let importCount = 0;
  for(let i=1;i<rows.length;i++){
    const vals = rows[i];
    if(vals.length < 3) continue;
    const period = vals[headers.indexOf('周期')] || vals[1] || '';
    const projectName = vals[headers.indexOf('项目')] || vals[0] || '';
    const p = PROJECTS.find(pp => pp.name === projectName);
    if(!p) continue;
    var _nr = {
      id: SATISFACTION_DATA.length + 1,
      projectId: p.id,
      period: period,
      projectFeedback: {
        overall: vals[headers.indexOf('项目综合感受')] || '满意',
        busiLima2sPerf: vals[headers.indexOf('业务表现')] || '待填写',
        professionalism: vals[headers.indexOf('专业度')] || '待填写',
        execution: vals[headers.indexOf('执行力')] || '待填写',
        reporting: {
          timeliLima2s: vals[headers.indexOf('汇报时效性')] || '待填写',
          accuracy: vals[headers.indexOf('汇报准确性')] || '待填写',
          completeLima2s: vals[headers.indexOf('汇报全面性')] || '待填写'
        },
        riskControl: vals[headers.indexOf('风险管控')] || '待填写',
        communication: {
          frequency: vals[headers.indexOf('沟通频率')] || '待填写',
          understanding: vals[headers.indexOf('沟通理解')] || '待填写',
          sync: vals[headers.indexOf('信息同步')] || '待填写'
        }
      },
      leaderScore: parseInt(vals[headers.indexOf('领导评分')]) || 0,
      leaderComment: vals[headers.indexOf('上级评语')] || '',
      evaluatedBy: vals[headers.indexOf('评定人')] || currentRole,
      evaluatedAt: vals[headers.indexOf('评定日期')] || new Date().toISOString().slice(0,10),
      status: vals[headers.indexOf('状态')] || '待评定'
    };
    SATISFACTION_DATA.push(flattenSat(_nr));
    importCount++;
  }
  document.getElementById("modal-overlay").classList.add("hidden");
  renderModule("satisfaction");
  alert(`导入完成！共成功导入 ${importCount} 条评估记录。`);
}



// ===== 满意度评估 - 权限设置（弹窗）=====

function showSatisfactionPermission(){

  const ROLE_NAMES = {leader:'上级领导',pm:'项目经理',exec:'执行团队',staff:'项目人员'};

  const canRead = (role) => {

    if(role==='leader') return '全部项目（只读 + 评定打分）';

    if(role==='pm') return '负责项目（读写）+ 跨职场同类（只读）';

    if(role==='exec') return '负责项目（读写），其他同部门（只读）';

    if(role==='staff') return '所参与项目（只读）';

    return '';

  };

  const body = document.getElementById("modal-body");

  document.getElementById("modal-title").textContent = "🔐 满意度评估 - 权限设置";

  body.innerHTML = `

    <div style="font-size:13px;color:var(--c-text-2);margin-bottom:16px;line-height:1.8;">

      <div>📋 <b>模块权限说明：</b></div>

      <div>满意度评估模块涉及<b>项目方感受（对外）</b>与<b>上级评定（对内）</b>，权限需严格区分。</div>

    </div>



    <div class="card" style="margin-bottom:14px;padding:14px 16px;">

      <div style="font-size:13px;font-weight:500;margin-bottom:10px;">角色权限明细</div>

      <table class="data-table">

        <thead><tr><th>角色</th><th>查看范围</th><th>操作权限</th></tr></thead>

        <tbody>

          <tr>

            <td><span class="archive-tag archive-tag-tp">上级领导</span></td>

            <td>全部项目评估记录</td>

            <td>新增评估 · 评定打分 · 编辑评语 · 导出 · 导入 · 权限管理</td>

          </tr>

          <tr>

            <td><span class="archive-tag archive-tag-dp">项目经理</span></td>

            <td>负责项目 + 跨职场同类项目</td>

            <td>新增评估（填写项目感受）· 查看评定结果 · 导出</td>

          </tr>

          <tr>

            <td><span class="badge badge-yellow">执行团队</span></td>

            <td>负责项目</td>

            <td>查看负责项目的评定结果和评语 · 导出</td>

          </tr>

          <tr>

            <td><span class="badge badge-gray">项目人员</span></td>

            <td>所参与项目</td>

            <td>查看本人参与项目的评定结果（仅查看）</td>

          </tr>

        </tbody>

      </table>

    </div>



    <div class="card" style="margin-bottom:14px;padding:14px 16px;background:var(--c-yellow-bg);">

      <div style="font-size:13px;font-weight:500;margin-bottom:8px;color:var(--c-yellow);">⚠️ 数据安全提醒</div>

      <div style="font-size:12px;color:var(--c-text-2);line-height:2;">

        <div>• 项目方感受内容<b>不对外展示分值</b>，仅上级可查看完整评定结果</div>

        <div>• 项目人员（未来开放）仅可查看本人参与项目的评定结果，<b>不可查看其他项目</b></div>

        <div>• 导出文件包含完整评定意见，请注意文件分发范围</div>

        <div>• 建议定期备份评估数据（使用导出功能）</div>

      </div>

    </div>



    <div class="form-actions">

      <button class="btn" onclick="document.getElementById('modal-overlay').classList.add('hidden')">关闭</button>

    </div>`;

  document.getElementById("modal-overlay").classList.remove("hidden");

}



// ===== 系统用户管理（用户审批管理） =====

let notificationFilter = "all";

