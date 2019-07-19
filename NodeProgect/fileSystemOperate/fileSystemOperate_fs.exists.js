//fs.exists()已经是deprecated状态，现在可以通过下面代码判断文件是否存在。
//fs.access()除了判断文件是否存在（默认模式），还可以用来判断文件的权限。
var fs = require('fs');

fs.access('./fileForRead.txt',function(err){
   if(err) throw err;
   console.log('fileForRead.txt存在');
});

//文件不存在
// fs.access('./fileForRead2.txt',function(err){
//    if(err) throw err;
//    console.log('fileForRead2.txt存在');
// });

//创建文件目录
//异步版本
var  fs = require('fs');

fs.mkdir('./hello',function (err) {
    if(err) throw err;
    console.log('目录创建成功');
});

//同步版本
var fs = require('fs');
try {
    fs.mkdirSync('./helloWorld');
    console.log('创建目录成功');
}catch (e) {
    throw e;
}


//删除文件
 var fs = require('fs');

 fs.unlink('./delete.txt',function(err){
     if(err) throw err;
     console.log('文件删除成功');
 });

 // var fs = require('fs');
 // fs.unlinkSync('./delete.txt');


