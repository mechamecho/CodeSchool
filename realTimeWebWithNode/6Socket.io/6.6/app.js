var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");

  client.on('question', function(question) {

  // Finally, when a client emits a 'question' event, check to make
  // sure question_asked is not already set to true. We only want to
  // allow one question per user, so make sure that we only set the
  // value of question_asked and broadcast the question to other clients
  // when the value of question_asked is not already true.


    if(!client.question_asked){
      //First, when a client emits a 'question' event,
      //we want to set the value of question_asked to true.
      client.broadcast.emit('question', question);
      //Second, when a client emits a 'question' event,
      // we want to broadcast that question to the other clients.
     client.question_asked=true;
    }




  });
});

server.listen(8080);
