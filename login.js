'use strict';

//可以用来创建一个HTTP服务器
var http = require('http');

var server = http.createServer(function (request,response) {
    var requestUrl = request.url;
    switch (requestUrl){
        case '/signin':
            //请求登录
            singin(request,response);
            break;
        case '/post':
            post(request,response);
            break;

        default:
            response.writeHead(404,{});
            response.end();
            break;
    }
});

//启动服务
server.listen(8080,function (error) {
    console.log('成功监听8080端口');
});

function singin (request,response) {

    response.writeHead(200,{'Content-Type':'text/html'});
    response.write(' <!DOCTYPE html>');
    response.write(' <html lang="en">');
    response.write(' <head>');
    response.write('     <meta charset="UTF-8">');
    response.write('     <title>登录</title>');
    response.write(' </head>');
    response.write(' <body>');
    response.write(' <form action="/post" method="post">');
    response.write('     <table border=1>');
    response.write('         <tr>');
    response.write('             <td>姓名</td>');
    response.write('             <td><input type="text" name="username"></td>');
    response.write('         </tr>');
    response.write('         <tr>');
    response.write('             <td>密码</td>');
    response.write('             <td><input type="password" name="password"></td>');
    response.write('         </tr>');
    response.write('         <tr>');

    response.write('            <td><input type="submit" value="提交"></td> ');
    response.write('         </tr>');
    response.write('     </table>');
    response.write(' </form>');
    response.write(' </body>');
    response.write(' </html>');
    console.log('登录');
    response.end();
}

function post(request,response) {
   // console.log('提交表单');
    //先定义变量接受数据
    var postData = '';
    //注册一个事件
    request.on('data',function (part) {
        postData += part;
    })
    request.on('end',function () {
        console.log(postData);
    })
    response.end();
}