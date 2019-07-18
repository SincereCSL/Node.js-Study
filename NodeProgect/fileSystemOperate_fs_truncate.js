//node.js 文件内容截取

// var fs = require('fs');
// fs.truncate('./fileForRead.txt',6,function(err){
//    if (err) throw err;
//    console.log('文件内容截取成功');
// });

// 同步方法 文件内容截取
var fs = require('fs');
try {
 fs.truncateSync('./fileForRead.txt',3);
 console.log('node.js 同步方法文件内容截取成功!')
}catch (err) {
    console.log('node.js 同步方法文件内容截取失败:'+err);
}