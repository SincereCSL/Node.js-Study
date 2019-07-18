//node.js 文件系统 添加文件

// var fs = require('fs');
// fs.appendFile('message.txt','node.js添加文件',(err) => {
//    if (err) throw err;
//    console.log('文件添加成功');
// });

//同步方法实现 添加文件
var fs = require('fs');
try {
    fs.appendFileSync('nodeAppendFile.txt','node.js同步方式添加文件');
    console.log('添加文件成功!');
}catch (err) {
    console.log('添加文件失败:'+err);
}


