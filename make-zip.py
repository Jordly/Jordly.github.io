import zipfile
import os

output = 'cloudbase-api-v3.zip'

with zipfile.ZipFile(output, 'w', zipfile.ZIP_DEFLATED) as zf:
    # 添加单个文件
    zf.write('cloudbase-api/index.js', 'index.js')
    zf.write('cloudbase-api/package.json', 'package.json')
    zf.write('cloudbase-api/scf_bootstrap', 'scf_bootstrap')
    
    # 递归添加 node_modules
    for root, dirs, files in os.walk('cloudbase-api/node_modules'):
        for file in files:
            full_path = os.path.join(root, file)
            arcname = os.path.relpath(full_path, 'cloudbase-api').replace('\\', '/')
            zf.write(full_path, arcname)

print(f'Zip created: {output}')
