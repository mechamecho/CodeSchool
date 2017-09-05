var express= require('express');

//instance of express
var app=express();

//define endpoint:root route
app.get('/', function(request, response){
  response.sendFile(__dirname+ "/index.html");
});
app.listen(8080);
