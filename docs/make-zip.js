const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const output = fs.createWriteStream('cloudbase-api-v3.zip');
const archive = new archiver.Archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log('Zip created: ' + archive.pointer() + ' bytes');
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// 添加单个文件
archive.file('cloudbase-api/index.js', { name: 'index.js' });
archive.file('cloudbase-api/package.json', { name: 'package.json' });
archive.file('cloudbase-api/scf_bootstrap', { name: 'scf_bootstrap' });

// 递归添加 node_modules
function addDir(srcPath, zipPath) {
  const files = fs.readdirSync(srcPath);
  for (const file of files) {
    const fullPath = path.join(srcPath, file);
    const stat = fs.statSync(fullPath);
    const zipName = zipPath ? zipPath + '/' + file : file;
    if (stat.isDirectory()) {
      addDir(fullPath, zipName);
    } else {
      archive.file(fullPath, { name: zipName });
    }
  }
}

addDir('cloudbase-api/node_modules', 'node_modules');

archive.finalize();
