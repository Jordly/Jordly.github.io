const fs = require('fs');
const filePath = 'app.js';

let content = fs.readFileSync(filePath, 'utf8');

// 找到函数的起始和结束位置
const startMarker = '// ===== 问题与课题协作 =====';
const funcStart = content.indexOf(startMarker);
if (funcStart === -1) {
  console.error('找不到开始标记');
  process.exit(1);
}

// 找到函数结束位置（下一个 // =====）
const nextSection = content.indexOf('// =====', funcStart + startMarker.length);
if (nextSection === -1) {
  console.error('找不到结束位置');
  process.exit(1);
}

console.log('找到函数：开始位置', funcStart, '结束位置', nextSection);

// 读取新函数内容
const newFunction = fs.readFileSync('new-renderIssue.js', 'utf8');

// 替换
const newContent = content.substring(0, funcStart) + newFunction + content.substring(nextSection);

// 写回文件
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('替换完成！');
