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

### 筛选栏设计
- 使用**药丸式按钮组**（rounded pill buttons）
- 选中状态：`#2563eb` 背景 + 白色文字
- 未选中：`#fff` 背景 + `#64748b` 文字 + `#e2e8f0` 边框
- 已选标签：右侧显示蓝色药丸标签，带 × 清除按钮

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
