//遍历目录
//fs.readdirSync()只会读一层，所以需要判断文件类型是否目录，如果是，则进行递归遍历。
var fs = require('fs');
var path = require('path');

var getFilesInDir = function (dir) {

    var results = [path.resolve(dir)];
    var files = fs.readdirSync(dir,'utf8');

    files.forEach(function(file){

        file = path.resolve(dir,file);

        var stats = fs.statSync(file);

        if(stats.isFile()){
            results.push(file);
        }else if(stats.isDirectory()){
            results = results.concat(getFilesInDir(dir));
        }
    });
    return results;
};
var  files = getFilesInDir('./public');
console.log(files);