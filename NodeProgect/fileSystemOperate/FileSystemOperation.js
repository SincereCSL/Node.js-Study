//文件系统操作 fs(file system)

//文件读取

//同步读取
var fs = require('fs');
var data;

try {
    data = fs.readFileSync('./input.txt', 'utf-8');
    console.log('文件内容:' + data);
} catch (err) {
    console.log('读取文件出错:' + err.message);
}

console.log('=======================');

//异步读取
var fs = require('fs');

fs.readFile('./input.txt','utf-8',function(err,data){
    if(err){
        return console.error('文件读取出错:'+err.message);
    }
    console.log('文件内容:'+data);
});

console.log('=================通过文件流读取=============');
//通过文件流读
//适合读取大文件

var fs = require('fs');
var readStream = fs.createReadStream('./fileForRead.txt','utf-8');

readStream.on('data',function(chunk){
    console.log('读取文件：'+chunk);
}).on('err',function(err){
    console.log('读取文件出错：'+err);
}).on('end',function(){
    console.log('数据读取完成没有数据了');
}).on('close',function () {
   console.log('已经关闭');
});

//文件写入

//异步写入

// var fs = require('fs');
//
// fs.writeFile('./input.txt','我使用node.js成功写入在input.txt里写入内容','utf-8',function (err) {
//     if(err) throw err;
//     console.log('文件写入成功');
// })

console.log('*******************同步写入*****************');

//同步写入
var fs = require('fs');

try {
    fs.writeFileSync('./input.txt', '使用node.js同步方式写入文件内容', 'utf-8');
    console.log('同步方式文件写入成功');
}catch (err) {
    throw err;
}

//通过文件流写入
var fs = require('fs');
var writeStream = fs.createWriteStream('./input.txt','utf-8');

writeStream
    .on('close',function () {
        console.log('已经关闭了');
    });

writeStream.write('你好');
writeStream.write('node.js');
writeStream.end('');
