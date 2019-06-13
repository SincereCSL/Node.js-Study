//文件重命名
//异步方式
// fs.rename(oldPath, newPath, callback)

// var fs = require('fs');
// fs.rename('input.txt', 'newInput.txt', (err) => {
//     if (err) throw err;
//     console.log('重命名完成');
// });

//同步方式
//fs.renameSync(oldPath, newPath);
var fs = require('fs');
fs.renameSync('newInput.txt', 'input.txt');
console.log('同步方式重命名文件');

