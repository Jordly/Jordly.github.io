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

def collect():
    files = []
    # 顶层 html / css / js
    for f in os.listdir(ROOT):
        if f.startswith("."):
            continue
        if f.endswith((".html", ".css")):
            files.append(f)
        elif f.endswith(".js") and f not in EXCLUDE:
            files.append(f)
    # modules/*.js
    mod_dir = os.path.join(ROOT, "modules")
    if os.path.isdir(mod_dir):
        for f in os.listdir(mod_dir):
            if f.endswith(".js"):
                files.append(os.path.join("modules", f))
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
