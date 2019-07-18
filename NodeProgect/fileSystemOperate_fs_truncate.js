//node.js 文件内容截取

var fs = require('fs');
fs.truncate('./fileForRead.txt',6,function(err){
   if (err) throw err;
   console.log('文件内容截取成功');
});