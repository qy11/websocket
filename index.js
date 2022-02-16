//
var express = require('express'),
  socket = require('socket.io')

const app = express(),
  server = app.listen(7000, function () {
    console.log('正在监听7000~');
  });

// 静态文件
app.use(express.static('public'))

//socket
var io = socket(server)

io.on('connection', function (socket) {
  console.log('连接已建立', socket.id);
})