//创建第一个node.js 程序
var http =require("http");

http.createServer(function(request,response){
    // 发送 HTTP 头部
    // HTTP 状态值：200 ok
    // 内容类型：text/plain
    response.writeHead(200,{'Content-type':'text/plain'});

    //发送响应数据"hello world"
    response.end('hello wolrd');
}).listen(8888);

//终端打印输出信息
console.log('第一个node.js程序');