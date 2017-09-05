//Let's create an express route that accepts
// GET requests on '/tweets' and
//responds by sending back a static HTML file.
var express = require('express');
var app = express();

app.get('/tweets', function(request, response){
  response.sendFile(__dirname+"/tweets.html");
}).listen(8080);
