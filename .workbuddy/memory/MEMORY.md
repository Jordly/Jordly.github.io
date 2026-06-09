# CS CloudHub 项目长期记忆

## 关键信息（每次操作前必须核对）

### 部署地址
- **用户实际访问地址**：`https://chanseen.pages.dev/`（Cloudflare Pages）
- **部署方式**：通过 GitHub 仓库 `Jordly/Jordly.github.io` 自动部署
- **仓库路径**：根目录（非 docs/ 子目录）
- **核心文件**：`index.html`、`app.js`、`style.css`（均在仓库根目录）

### 用户信息
- 用户名：Jordly
- 公司：长信公司
- 岗位：电商客服 / 客服总监

## 技术规范

### ⚠️ 操作确认规范（2026-06-08 新增，最高优先级）
**任何可能影响系统UI界面或功能的操作，必须先提醒用户，得到用户明确确认后才能执行。**

包括但不限于：
- 修改 `app.js`、`style.css`、`index.html` 等核心文件
- 修改 `cloudbase-sync.js` 等同步逻辑文件
- 启用/禁用任何功能（如云端同步）
- 修改版本号
- 推送代码到 GitHub
- 任何可能导致页面显示变化、功能异常、数据丢失的操作

**执行流程**：
1. 分析操作内容和影响范围
2. 向用户说明：要做什么、为什么、可能影响什么
3. 等待用户明确确认（"可以执行"、"执行吧"等）
4. 得到确认后再执行

**禁止行为**：
- 先执行再报告（"我已修复了..."）
- 猜测用户意图直接操作
- 以"测试"为名义直接修改线上代码

### 版本号管理
- `index.html` 中 `app.js?v=` 必须每次手动更新时间戳
- 不要使用 `{{BUILD_TIME}}` 占位符（不会自动替换）
- 格式示例：`app.js?v=20260605171947`

### 代码修改规范
1. 每次 Edit 操作后，用 `node --check app.js` 验证语法
2. 修改后 diff 检查，确认没有残留旧代码
3. 修改持久化相关逻辑时，先画数据流图：
   `登录 → currentUser → USERS → localStorage → 刷新 → checkLogin`

### 部署前检查清单
- [ ] 语法检查通过（node --check）
- [ ] index.html 版本号已更新
- [ ] 本地验证通过（清缓存 + 强制刷新 + 完整流程测试）
- [ ] 推送到正确的仓库（Jordly/Jordly.github.io）
- [ ] Cloudflare Pages 部署状态确认
- [ ] **检查 TaskList，所有已完成任务标记为 completed（强制！已漏5次+）**

## Git 推送规范（2026-06-06 更新）

### SSH 推送配置（已彻底解决推送失败问题）
- **问题根因**：git credential.helper 指向 WorkBuddy 自带 PortableGit，HTTPS 推送不稳定
- **解决方案**：配置 SSH 密钥（一劳永逸）
- **已生成密钥**：`~/.ssh/id_ed25519`（公钥已添加到 Jordly GitHub 账号）
- **仓库远程地址**：已切换为 `git@github.com:Jordly/Jordly.github.io.git`
- **验证**：`ssh -T git@github.com` 返回 `Hi Jordly! You've successfully authenticated` ✅
- **推送命令**：`cd prototype && git push origin main`（无需密码，永久生效）

### 推送失败时的替代方案
1. **首选**：确认 SSH 配置正确，直接 `git push`
2. **备选**：GitHub 网页 → Add file → Upload files（需登录）
3. **禁止**：不要反复重试 HTTPS 推送，浪费时间

## 设计风格规范（2026-06-06 确立）

### 筛选栏设计（v5 已升级视觉风格）
- **第一行**（普通下拉，渐变背景+实心边框）：时间 / 职场 / 类型 / 状态 / 健康度
  - 状态选项固定4项：优质健康店、平稳常规店、风险预警店、高危问题店
- **第二行**（搜索多选下拉，渐变背景+虚线边框）：平台 / 品类 / 品牌 / 项目PM / 客服管理
  - 搜索下拉：支持输入关键字过滤、多选复选框、清空/确定按钮
  - 面板使用 `position: fixed` + JS动态定位，避免被父容器截断
- 已选标签：筛选栏上方显示蓝色渐变药丸标签，带 × 清除按钮
- 视觉风格：
  - 触发按钮：微渐变背景 + hover光晕（蓝色阴影）
  - 下拉面板：12px圆角 + 强阴影 + 缩放淡入动画
  - 选项列表：左侧3px蓝色边高亮选中态
  - 确定按钮：渐变背景 + 阴影

### KPI 迷你卡片设计
- 渐变背景：`#1e40af → #2563eb → #3b82f6`（145deg 方向）
- 右上角：半透明装饰圆（rgba 透明度 0.12-0.15）
- 数值字体：22px，font-weight:700，letter-spacing:-0.5px
- 趋势文字格式：`+12.3% 较上月`
- 趋势图：SVG 面积图，viewBox 高度 50px，线条 2px

### 饼图设计规范
- 使用平面饼图 + SVG 阴影滤镜（非 3D）
- 中心留白圆显示总计数字
- 配色方案：深色→浅色渐变（#312e81 → #a5b4fc）
- 图例：2列网格，左对齐名称，右对齐数字+百分比

## 每日复盘规范（2026-06-06 确立）

### 复盘触发条件
1. **每次用户指出问题后**，立即复盘并记录到 `memory/retrospectives.md`
2. **每次对话结束前**，主动做当日总结复盘，不需要用户提醒
3. **同样的错误重复出现时**，必须回溯 retrospectives.md 确认是否已有记录

### 复盘内容模板
- 用户原话（引用，不意译）
- 我的做法（实际做了什么）
- 根因（为什么会发生）
- 改进措施（具体、可执行、可核查）

### 记录位置
`C:\Users\OseasyVM\WorkBuddy\2026-05-29-17-12-21\.workbuddy\memory\retrospectives.md`

---

## CloudBase 云端同步配置（2026-06-07 确立）

### 云函数配置
- **环境ID**：`cscloudhub-d0g983jba5ad192ca`
- **HTTP访问域名**：`cscloudhub-d0g983jba5ad192ca-1440977102.ap-shanghai.app.tcloudbase.com`
- **HTTP路由**：`/api` → 云函数 `csCloudHubAPI`
- **云函数名**：`csCloudHubAPI`
- **函数类型**：HTTP 函数（非事件函数）
- **运行环境**：Node.js 16.13
- **身份认证**：已关闭（免鉴权）
- **API鉴权Token**：`cscloudhub-2026-secret-key`（前端 cloudbase-sync.js 与云函数共享）

### 数据库集合
- `projects` — 项目数据（singleton 文档）
- `users` — 用户数据（singleton 文档）
- `goals` — 目标数据（singleton 文档）

### 同步机制
- **页面加载**：`onPageLoad()` → `loadAll()` 从云端拉取数据写入 localStorage
- **数据保存**：`saveAll()` → 先写 localStorage，再调用云函数保存
- **防止无限刷新**：用 `sessionStorage.getItem('cb_loaded')` 判断，首次加载后设置标志
- **首次使用**：云端无数据时 `loadAll()` 返回 false，不触发刷新

### 重要注意事项
- **免费版 CloudBase 不支持安全域名配置**，无法使用 JS SDK 匿名登录
- **解决方案**：使用 HTTP 云函数模式，前端通过 fetch 调用云函数
- **清空浏览器数据后**：sessionStorage 同步被清除，下次访问会自动从云端重新拉取
- **云函数 save 逻辑**：先 `update()`，失败后再 `add()`（处理文档不存在场景）

---

## 历史问题记录

### 2026-06-05 数据持久化问题
- **现象**：修改昵称/头像/品牌后刷新恢复初始状态
- **根因**：`doLogin()` 只拷贝 `{id,name,username,role,status}` 5个字段
- **修复**：浅拷贝完整对象（排除 password）
- **教训**：不要凭直觉打补丁，先追根溯源

### 2026-06-05 localStorage quota 超限
- **现象**：头像上传后控制台报错 `QuotaExceededError`
- **根因**：头像 base64 数据太大（几 MB）
- **修复**：Canvas 压缩为 JPEG 0.8 质量，最大边 200px
- **教训**：大文件不要直接存 localStorage

### 2026-06-06 筛选栏v5升级
- **现象**：v4筛选栏已推送但用户仍看到旧版 + 搜索下拉面板不弹出
- **根因1**：依赖filterBarNew.js运行时覆盖`renderFilterBar()`，覆盖未生效
- **修复1**：直接把v4/v5筛选栏实现内联到app.js中，删除filterBarNew.js依赖
- **根因2**：CSS中`.fb-search-panel { display: none !important }`优先级高于JS的`style.display='block'`
- **修复2**：改为`.fb-search-panel.show` class控制显示（display:flex + opacity/transform动画）
- **v5新增**：状态改为4项固定值（优质健康店/平稳常规店/风险预警店/高危问题店）
- **v5视觉升级**：触发按钮微渐变+hover光晕、面板更强阴影+动画、已选标签蓝色渐变
- **教训**：核心UI组件不要依赖运行时函数覆盖；CSS的`!important`会阻止JS控制，应用class切换代替
