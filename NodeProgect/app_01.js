//创建第一个node.js 程序

//引入required 模块
var http = require('http');

http.createServer(function(request,response){

    //发送Http头部
    //Http 状态值： 200 ：ok
    //内容类型： text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    //发送响应数据  learn node.js
    response.end('learn node.js')

}).listen(8888);

//输出
console.log('node.js程序');