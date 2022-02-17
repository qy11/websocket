/**
 * 1建立连接
 */

const socket = io.connect('http://localhost:7000');

const message = document.getElementById('message'),
  username = document.getElementById('username'),
  sendBtn = document.getElementById('sendBtn'),
  outputArea = document.getElementById('outputArea'),
  feedbackArea = document.getElementById('feedbackArea');

sendBtn.addEventListener('click', function () {
  console.log('sendBtn');
  socket.emit('chat', {
    message: message.value,
    username: username.value
  })
})

message.addEventListener('compositionstart', function () {  // keydown 前一种更适合拼音 compositionstart
  console.log('ing');
  socket.emit('typing', username.value)
})

// 监听
socket.on('chat', function (data) {
  console.log("chat");
  message.value = ''
  feedbackArea.innerHTML = ''
  outputArea.innerHTML += '<p><strong>' + data.username + ': </strong>' + data.message + '</p>'
})

socket.on('typing', function (data) {
  console.log('监听', data);
  feedbackArea.innerHTML = '<p><em>' + data + ':</em></p>'
})