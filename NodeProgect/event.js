//EventEmitter 类 核心就是事件触发与事件监听器功能的封装。

//写一个简单的 EventEmitter例子

var EventEmitter = require('events').EventEmitter;
var event =new EventEmitter();
event.on('some_event',function(){
    console.log('some_event 事件触发');
});

setTimeout(function () {
    event.emit('some_event');
},1000);

