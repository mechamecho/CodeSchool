var express=require('express');
var app=express();
var server=require('http').createServer(app);
//dispatching request to express
var io = require('socket.io')(server);
//allowing the socket.io to use the http server to listen to a request
//socket io and express are sharing the same http server
io.on('connection', function(client){
  console.log('Client connected ...');
  //to listen to messages typed into the browser
  client.on('messages', function(data){
    console.log(data); 
  })
  //emitting the messages event on the client
  client.emit('messages', {hello: 'world'});
});
app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

server.listen(8080);
