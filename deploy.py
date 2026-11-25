#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CS CloudHub 部署同步脚本
─────────────────────────
痛点：之前每次改代码都要手动 cp 到 docs/ + 手动改两处 index.html 的 ?v= 版本号，
      曾两次漏同步导致线上「改了不生效」。

本脚本一次性解决：
  1) 将根目录的部署文件（index.html / 所有 .css / 所有 .js）同步到 docs/ 生产目录
  2) 统一所有 ?v= 版本号为当天日期（根治 9 种版本号碎片化 + 强制 CDN 刷新）

用法：python3 deploy.py
依赖：仅 Python 标准库（os/re/shutil/datetime）
"""
import os, re, shutil, datetime

ROOT = os.path.dirname(os.path.abspath(__file__))
DOCS = os.path.join(ROOT, "docs")
TODAY = datetime.date.today().strftime("%Y%m%d")
VERSION = TODAY  # 如 20260814（?v= 已含 v 前缀，避免双 v）

EXCLUDE = {"deploy.py"}  # 脚本自身不进生产目录

# 不应进入生产目录的本地文档（内部报告、诊断输出等）
EXCLUDE_KEYWORDS = ("体检报告", "诊断报告")

# 无扩展名、但必须随部署一起同步到 docs/ 的特殊文件
# _headers：Cloudflare Pages 安全响应头配置（2026-11-25 安全整改新增）
SPECIAL_FILES = {"_headers", "_redirects", "robots.txt", "sitemap.xml"}

def collect():
    files = []
    # 顶层 html / css / js
    for f in os.listdir(ROOT):
        if f.startswith("."):
            continue
        if any(k in f for k in EXCLUDE_KEYWORDS):
            continue
        if f in SPECIAL_FILES:
            files.append(f)
        elif f.endswith((".html", ".css")):
            files.append(f)
        elif f.endswith(".js") and f not in EXCLUDE:
            files.append(f)
        elif f.endswith((".png", ".ico", ".svg", ".webp")):
            # 站点图标与社交分享图（favicon.png / og-image.png 等，2026-11-25 新增）
            files.append(f)
    # assets/ 下的大图（如大促作战大图）体量大，且目前仅存于 docs/，此处仅在根存在时才同步，
    # 绝不反向删除 docs/assets 已有文件。
    # modules/*.js
    mod_dir = os.path.join(ROOT, "modules")
    if os.path.isdir(mod_dir):
        for f in os.listdir(mod_dir):
            if f.endswith(".js"):
                files.append(os.path.join("modules", f))
    # vendor/*.js（第三方库自托管目录，2026-11-25 安全整改新增）
    # 注意：vendor 下是固定版本第三方库，文件名不带 ?v= 版本号（其内容本身即版本锚点）
    ven_dir = os.path.join(ROOT, "vendor")
    if os.path.isdir(ven_dir):
        for f in os.listdir(ven_dir):
            if f.endswith((".js", ".css")):
                files.append(os.path.join("vendor", f))
    return files

def main():
    files = collect()
    # 1) 先统一根 index.html 的所有 ?v= 版本号
    idx = os.path.join(ROOT, "index.html")
    if os.path.exists(idx):
        t = open(idx, encoding="utf-8").read()
        t2 = re.sub(r'([?&]v=)[^"\'&]+', r'\g<1>' + VERSION, t)
        if t2 != t:
            open(idx, "w", encoding="utf-8").write(t2)
            print("  · 根 index.html 版本号已统一为 ?v=" + VERSION)
        else:
            print("  · 根 index.html 版本号已是最新 ?v=" + VERSION)
    # 2) 同步所有文件到 docs/
    n = 0
    for rel in files:
        src = os.path.join(ROOT, rel)
        dst = os.path.join(DOCS, rel)
        if not os.path.isfile(src):
            continue
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copy2(src, dst)
        n += 1
    print(f"  · 已同步 {n} 个文件到 docs/ 生产目录")
    print(f"完成。CDN 约 25 秒生效，浏览器 Ctrl+Shift+R 强刷即可。")

if __name__ == "__main__":
    main()
