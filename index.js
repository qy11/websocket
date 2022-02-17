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
var io = socket(server);

io.on('connection', function (socket) {

  socket.on('chat', function (data) {
    console.log('chat');
    io.sockets.emit('chat', data)
  });

  socket.on('typing', function (data) {
    console.log('typing', data);
    socket.broadcast.emit('typing', data)  // 广播
  })
})