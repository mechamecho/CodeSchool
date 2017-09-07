var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");
//In the server, listen for 'question' events from clients.
  client.on('question', function(data){
    //In the server, listen for 'question' events from clients.
    client.broadcast.emit("question", data);
  });

});

server.listen(8080);
