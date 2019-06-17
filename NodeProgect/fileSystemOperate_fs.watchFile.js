//监听文件修改
//fs.watch()比fs.watchFile()高效很多

//fs.watchFile()
var fs = require('fs');

var options = {
    persistent: true,//默认是true
    interval: 2000//多久检查一次
};

// curr, prev 是被监听文件的状态，fs.Stat实例
//可以通过fs.unwatch()移除监听
fs.watchFile('./input.txt', options, function (curr, prev) {
    console.log('修改时间为:' + curr.mtime);
});

//fs.watch()
var fs = require('fs');

var options = {
    persistent: true,
    recursive:true,
    encoding:'utf8'
};

fs.watch('./input.txt',options,function (event,filename) {
    console.log('触发事件:'+event);
    if(filename){
        console.log('文件名:'+filename);
    }else {
        console.log('文件名没有提供');
    }
});