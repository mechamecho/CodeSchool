var express = require('express');
var app = express();
//Using the http module, create an new http server and pass the express app as
//the listener for that new server.
var server=require('http').createServer(app);
// Using the socket.io module, listen for requests on the http server. Store the return
//object of this operation in a variable called io.
var io= require('socket.io')(server);
//Use the object stored in io to listen for client 'connection' events. Remember, the callback function takes one argument,
// which is the client object that has connected.
io.on('connection', function(client){
  //When a new client connects, log a message using console.log().
  console.log('hello ');

});
// Finally, we want to tell our http server to listen to
// requests on port 8080.
server.listen(8080);
