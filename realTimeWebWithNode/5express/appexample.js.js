var express= require('express');

//instance of express
var app=express();

//define endpoint:root route
app.get('/', function(request, response){
  response.sendFile(__5express+ "/index.html");
});
app.listen(8090);
