//node.js 修改文件权限操作

//fs.chmod() or fs.fchmod() 两者的区别在于，前面传的是文件路径，后面传的的文件句柄
//fs.chmod()  fs.lchmod()   区别：传的是文件路径还是文件句柄

//
// var fs = require('fs');
// fs.chmod('./fileForChown.txt','777',function(err){
//    if(err) console.log(err);
//    console.log('权限修改成功');
// });

//同步方式实现
// var fs =require('fs');
// fs.chmodSync('./fileForChown.txt','555');

//获取文件状态
//区别
//fs.stat() or fs.fstat() 传文件路径 or 文件句柄
//fs.stat() or fs.lstat() 如果文件是软链接，那么fs.stat()返回目标文件的状态，fs.lstat()返回链接本身的状态

//  stats.isFile()  是否是文件
//  stats.isDirectory() 是否是目录
//  stats.isBlockDevice() 对象描述块设备
//  stats.isChartcterDevice() 描述字符设备
//  stats.isSymbolicLink()
//  stats.isFIFO()
//  stats.isSocket()

// var  fs = require('fs');
//
// var  getTimeDesc = function(d){
//     return [d.getFullYear(),d.getMonth()+1,d.getDate()].join('-')+' '+[d.getHours(),d.getMinutes(),d.getSeconds()].join(':');
// };
//
// fs.stat('./fileForRead.txt',function(err,stats){
//     console.log('文件大小:'+ stats.size);
//     console.log('文件创建时间:'+getTimeDesc(stats.birthtime));
//     console.log('文件访问时间:'+getTimeDesc(stats.atime));
//     console.log('文件修改时间:'+getTimeDesc(stats.mtime));
// });

//同步方法实现
var  fs = require('fs');

var  getTimeDesc = function(d){
    return [d.getFullYear(),d.getMonth()+1,d.getDate()].join('-')+' '+[d.getHours(),d.getMinutes(),d.getSeconds()].join(':');
};

var stats = fs.statSync('./fileForRead.txt');
console.log('文件大小:'+stats.size);
console.log('文件创建时间:'+getTimeDesc(stats.birthtime));
console.log('文件访问时间:'+getTimeDesc(stats.atime));
console.log('文件修改时间:'+getTimeDesc(stats.mtime));
console.log('同步方法执行完成');







