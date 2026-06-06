#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
deploy.py - 将本地 prototype 文件部署到 GitHub Pages
用法: python deploy.py
"""

import urllib.request
import urllib.parse
import json
import base64
import os
import sys
from datetime import datetime

REPO = "Jordly/Jordly.github.io"
BRANCH = "main"
PROTOTYPE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "prototype")
TOKEN_FILE = os.path.join(PROTOTYPE_DIR, "token.txt")

# 读取 Token
if not os.path.exists(TOKEN_FILE):
    print("ERROR: token.txt not found at " + TOKEN_FILE)
    sys.exit(1)

with open(TOKEN_FILE, "r") as f:
    TOKEN = f.read().strip()

if not TOKEN:
    print("ERROR: token.txt is empty")
    sys.exit(1)

print("Token loaded, length=" + str(len(TOKEN)))

AUTH = base64.b64encode((":" + TOKEN).encode("utf-8")).decode("utf-8")

def get_sha_with_retry(repo_path, max_retries=3):
    """获取文件 SHA，带重试机制"""
    url = "https://api.github.com/repos/" + REPO + "/contents/" + repo_path + "?ref=" + BRANCH
    for attempt in range(max_retries):
        try:
            req = urllib.request.Request(url, headers={
                "Authorization": "Basic " + AUTH,
                "Accept": "application/vnd.github.v3+json",
            })
            resp = urllib.request.urlopen(req, timeout=30 + attempt * 15)
            data = json.loads(resp.read())
            sha = data.get("sha")
            print("  Existing file found, SHA=" + sha[:8])
            return sha
        except urllib.error.HTTPError as e:
            if e.code == 404:
                print("  New file (404 Not Found)")
                return None
            print("  SHA fetch attempt " + str(attempt+1) + " failed: " + str(e.code) + " " + str(e.reason))
            if attempt < max_retries - 1:
                import time
                time.sleep(2 * (attempt + 1))
        except Exception as e:
            print("  SHA fetch attempt " + str(attempt+1) + " failed: " + str(e))
            if attempt < max_retries - 1:
                import time
                time.sleep(2 * (attempt + 1))
    print("  Failed to get SHA after " + str(max_retries) + " attempts, treating as new file")
    return None

def upload_file(local_path, repo_path):
    """上传单个文件到 GitHub，带重试机制"""
    with open(local_path, "rb") as f:
        content_bytes = f.read()
    content_b64 = base64.b64encode(content_bytes).decode("utf-8")
    
    # 获取文件当前的 SHA（带重试）
    sha = get_sha_with_retry(repo_path)
    
    # 构建请求体
    body = {
        "message": "Deploy: " + repo_path,
        "content": content_b64,
        "branch": BRANCH,
    }
    if sha:
        body["sha"] = sha
    
    url = "https://api.github.com/repos/" + REPO + "/contents/" + repo_path
    data = json.dumps(body).encode("utf-8")
    
    # 上传重试
    max_upload_retries = 3
    for attempt in range(max_upload_retries):
        try:
            req = urllib.request.Request(url, data=data, headers={
                "Authorization": "Basic " + AUTH,
                "Accept": "application/vnd.github.v3+json",
                "Content-Type": "application/json",
            }, method="PUT")
            resp = urllib.request.urlopen(req, timeout=60)
            result = json.loads(resp.read())
            print("  SUCCESS: " + repo_path + " -> " + result["content"]["html_url"])
            return True
        except urllib.error.HTTPError as e:
            err_body = e.read().decode("utf-8")
            print("  Upload attempt " + str(attempt+1) + " failed: " + str(e.code) + " " + str(e.reason))
            print("  Response: " + err_body[:300])
            if attempt < max_upload_retries - 1:
                import time
                time.sleep(2 * (attempt + 1))
        except Exception as e:
            print("  Upload attempt " + str(attempt+1) + " failed: " + str(e))
            if attempt < max_upload_retries - 1:
                import time
                time.sleep(2 * (attempt + 1))
    
    print("  ERROR: Failed to upload " + repo_path + " after " + str(max_upload_retries) + " attempts")
    return False

def main():
    files = ["index.html", "style.css", "app.js", "robots.txt", "sitemap.xml"]
    success = 0

    build_time = datetime.now().strftime("%Y%m%d%H%M%S")
    print("Build time: " + build_time)

    for fname in files:
        local_path = os.path.join(PROTOTYPE_DIR, fname)
        print("Uploading " + fname + " ...")
        if not os.path.exists(local_path):
            print("  SKIP: " + local_path + " not found")
            continue

        # 若是 index.html，替换 BUILD_TIME 占位符为真实时间戳
        if fname == "index.html":
            with open(local_path, "r", encoding="utf-8") as f:
                content = f.read()
            content = content.replace("{{BUILD_TIME}}", build_time)
            tmp_path = os.path.join(PROTOTYPE_DIR, ".index_tmp.html")
            with open(tmp_path, "w", encoding="utf-8") as f:
                f.write(content)
            if upload_file(tmp_path, fname):
                success += 1
            os.remove(tmp_path)
        else:
            if upload_file(local_path, fname):
                success += 1
    
    print("\n" + "=" * 40)
    print("Deployed: " + str(success) + "/" + str(len(files)) + " files")
    print("URL: https://jordly.github.io/")

if __name__ == "__main__":
    main()
