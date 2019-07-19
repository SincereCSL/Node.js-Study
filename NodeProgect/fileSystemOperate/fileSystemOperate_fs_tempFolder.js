//node.js 创建临时目录

//fs.mkdtemp(prefix,callback)
//fs.mkdtempSync(prefix)

var fs = require('fs');
fs.mkdtemp('/folder/foo-',(err,folder) => {
    if(err) throw  err;
    console.log(folder);
});
//找出软连接指向的真实路径

// var fs = require('fs');
// var randomFileName = './fileSystemOperate/fileForReadLink-' + String(Math.random()).slice(2,6) + '.txt';
//
// fs.symlinkSync('./fileSystemOperate/fileForReadLink.txt',randomFileName);
// fs.readLink(randomFileName,'utf8',function (err,linkString) {
//     if(err) throw err;
//     console.log('链接文件内容:' + linkString);
// });


