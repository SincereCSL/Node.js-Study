// node.js post请求

//获取post请求内容
// var http = require('http');
// var querystring = require('querystring');
// var util = require('util');
//
// http.createServer((req,res)=>{
//     //定义了一个post变量，用于暂存请求体信息
//     var post = '';
//
//     //通过req的data事件监听函数，每当接受请求体的数据，就累加到post变量中
//     req.on('end',(chunk)=>{
//         post += chunk;
//     });
//
//     //在end事件触发后，通过querystring.parse将post解析微真正的post请求格式，然后向客户端返回。
//     req.on('end',()=>{
//         post += querystring.parse(post);
//         res.end(util.inspect(post));
//     });
// }).listen(3000);

//表单通过post提交数据并输出数据
var http = require('http');
var querystring = require('querystring');
var postHTML = '<html>'
    + '<meta charset="utf-8">'
    + '<title></title>'
    + '<head></head>'
    +'<body>'
    +'<form method="post">'
    +'网站名:<input name="name"><br>'
    +'网站URL:<input name="url"><br>'
    +'<input type="submit">'
    +'</form>'
    + '</body>'
    +'</html>';


http.createServer((req,res)=>{
    var body ="";
    req.on('data',(chunk)=>{
        body += chunk;
    });
    req.on('end',()=>{
        //解析参数
        body = querystring.parse(body);
        //设置相应头部信息编码
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        if(body.name && body.url){
            //输出提交的数据
            res.write("网站名称："+body.name);
            res.write("<br>");
            res.write("网站url:"+body.url);
        }else{
            //输出表单
            res.write(postHTML);
        }
        //
        res.end();
    });
}).listen(3000);