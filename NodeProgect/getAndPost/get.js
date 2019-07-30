//node.js get请求

//获取get请求内容
// var http = require('http');
// var url = require('url');
// var util = require('util');
//
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
//     res.end(util.inspect(url.parse(req.url,true)));
// }).listen(3000);

//获取url参数

var http = require('http');
var url = require('url');
var util =require('util');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});

    //解析 url 参数
    var params = url.parse(req.url,true).query;
    res.write('网站名:'+params.name);
    res.write('\n');
    res.write('网站url'+params.url);
    res.end();
}).listen(3000);