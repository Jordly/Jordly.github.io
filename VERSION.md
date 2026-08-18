# CS CloudHub 版本记录

> 维护说明：本文件记录系统当前部署版本与回退保障锚点，每次重大发布后更新。

## 当前版本（2026-08-18 11:51 最新）

| 项 | 值 |
|---|---|
| 统一版本号 | `?v=20260818`（全站 35 个 JS/CSS 资源一致） |
| 提交哈希（HEAD） | `00b8194` |
| 分支 | `main` |
| 仓库 | `Jordly/Jordly.github.io`（GitHub） |
| 部署地址 | https://chanseen.pages.dev |
| CDN 生效 | 推送后约 25 秒 |

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

## 回退保障

- **旧锚点**：`dbdf728`（roster-v9，2026-08-14 10:37）—— 作为历史保留，不再作为回退目标。
- **当前回退锚点标签**：`rollback-anchor` → 指向 `938185e`（2026-08-18 11:51）。
- **说明**：git 提交不可改写，`dbdf728` 内容已固化；新建 annotated tag 作为最新回退锚点，在功能上等价于"将回退保障更新到当前版本"。

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
