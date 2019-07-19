//文件访问/权限检测

//fs.access(path[,mode],callback)
// var fs = require('fs');
// fs.access('./fileForRead.txt',function(err){
//    if (err) throw err;
//    console.log('可以访问');
// });

//fs.access(path[,mode])
var fs = require('fs');
//同步方法:
try {
    fs.accessSync('./fileForRead.txt');
    console.log('同步方法访问文件成功!');
}catch (err) {
    console.log('同步方法访问文件失败!'+err);
}
