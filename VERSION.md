# CS CloudHub 版本记录

> 维护说明：本文件记录系统当前部署版本与回退保障锚点，每次重大发布后更新。

## 当前版本（2026-11-25 三阶段安全整改后最新）

| 项 | 值 |
|---|---|
| 统一版本号 | `?v=20261125`（全站 36 个资源一致，含 vendor 自托管库） |
| 提交哈希（HEAD） | 见 `git log -1`（文档文件自身无法写入自身哈希） |
| 分支 | `main` |
| 仓库 | `Jordly/Jordly.github.io`（GitHub） |
| 部署地址 | https://chanseen.pages.dev |
| CDN 生效 | 推送后约 25 秒 |
| 冒烟结果 | 18/18 模块渲染通过、JS 运行错误 0（浏览器实测） |

## 本轮已部署功能 / 修复（时间线）

| commit | 内容 |
|---|---|
| `040f2a8` | 人才盘点 KPI 字段 2022/2023 → 2026/2027 + 去重、合并人员结构概览 |
| `20a919c` | 统计区压缩为快照面板 + 九宫格说明合并（修复 v6 漏同步 docs） |
| `7243326` | 九宫格 + 快照统计可筛选（职场/组别/状态/人才标签/职级/职位等级） |
| `68fcff6` | 人才盘点 UI 青绿主色优化（筛选栏/卡片/头像/标签） |
| `6cdc0f2` | 修复：系统数据管理编辑保存后表格未自动刷新（`_saveSystemData` 改用 `safeSetItem`） |
| `dbdf728` | 人才盘点花名册支持手动添加单个人员（按钮+加号卡片+录入表单） |
| `a4356fa` | P0 修复：roster.js 内部 `sel`→`rstrSel`（修复问题管理筛选崩溃）；assessment.js 删除冗余 `canViewModule` |
| `6f35161` | P1/P2 四件套：`exportSystemData`→`exportBizTables`、删 `hasPermission`/`exportSystemData` 死代码、更新代码地图、清理 profile 重复函数、新增 `deploy.py` 统一版本号并自动同步 docs |
| `d9b9ffe` | 清理 docs/ 下 4 个历史遗留杂散文件（无功能影响） |
| `83c9835` | 优化：成本与利润管理 → 项目利润明细表头样式（去横线/去排序箭头/浅灰背景） |
| `b7c01a4` | 重构：系统权限管理模块框架同步为侧边栏新框架（新增 assessment、roster 模块） |
| `4706ea2` | 修复：系统权限管理页面崩溃（groupOrder 同步新框架 + 防御性兜底） |
| `a9ae1d2` | **三阶段安全整改（2026-11-25）**：见下方专项说明 |

## 2026-11-25 三阶段安全整改明细（`a9ae1d2`）

依据《CSCloudHub 体检报告 2026-11-25》（综合健康度 5.9/10，安全 3.0 为最短板）。

### 阶段一 · 堵后门
- 下线 `demoLogin()` 演示登录（免密直通超管，P0-1）+ 移除首页入口按钮
- 清除登录态 4 处 `USERS[0]` 提权兜底与 token 内角色回退（P0-3）
- `role` 缺省值由「超级管理员」改为「项目伙伴」（最小权限）
- 新增 `_headers`：nosniff / X-Frame-Options / Referrer-Policy / Permissions-Policy
- 用户管理密码框 `type=text` → `password`
- 修复批量删除按钮重复 class（危险操作红色警示此前从未生效）

### 阶段二 · 数据与转义
- **GOALS 收敛为单一数据源**（P0-5）：删除 goal-management.js 重复 `var GOALS`，
  `deleteGoal` 改 `splice` 原地删除，解除与 systemData 的互相覆盖
- 修复 4 类 XSS（P1-1）：导入预览、花名册 `infoItem`、满意度详情 12 处、注册姓名/角色名
- xlsx：浮动 CDN `xlsx-latest` → 本地自托管 **0.20.3** + SRI 校验（`vendor/`）
- 解除登录时强制复位密码逻辑（P0-2），改密后不再被改回

### 阶段三 · 体验与技术债
- 大促预案接入侧边栏「项目运营」+ 模块清单/权限/渲染分发（老用户权限自动补全）
- 补 `favicon.png`、`og-image.png`（原 og:image 指向不存在文件 404）
- `robots.txt` 改 `Disallow: /`（内部系统不被搜索引擎收录）
- 49 处 `alert` 收敛为 `showToast`（只替换"提示后立即 return"的安全点位，余 27 处保留）
- 清理 9 个冗余/损坏文件共 **13MB**（app_recovered_v2.js、filterBarNew.js、
  cloudbase.full.js、3 个 cloudbase-api zip、make-zip.*、check_cloudbase.js）
- `deploy.py` 支持 `_headers`/`vendor`/png/robots/sitemap 同步，排除内部报告上线

## 回退保障

- **旧锚点**：`dbdf728`（roster-v9，2026-08-14 10:37）—— 作为历史保留，不再作为回退目标。
- **当前回退锚点标签**：`rollback-anchor` → **`a9ae1d2`（2026-11-25 三阶段安全整改后）**。
- **上一个稳定版（整改前）**：`17bb9db`（2026-08-18）—— 如需回退到整改前状态用此哈希。
- **说明**：git 提交不可改写；新建 annotated tag 作为最新回退锚点，功能上等价于"将回退保障更新到当前版本"。

### 一键回退命令（如需）
```bash
# 方式一：临时查看该版本
git checkout rollback-anchor

# 方式二：将 main 强回退到该版本（docs 同仓会一并还原）
git reset --hard rollback-anchor
git push --force origin main
```
> 注意：回退仅影响代码；浏览器 localStorage 中的业务数据不受 git 操作影响。

## 红线约束（持续生效）
- 所有改动只在用户确认影响范围后执行，单文件/单模块隔离，不动其他版块。
- 真实客户数据仅存浏览器 localStorage，绝不硬编码入代码。
- 每次修改后 `node --check` 语法校验 + docs 副本同步 + 升 `?v=` 版本号 + 立即 push。
