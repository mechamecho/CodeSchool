//creating an api that accepts https requests and
//responds with hello
var express= require('express');
//application instance
var app= express();
var response= require('response');
//creates a route that accpets http GET requests
// '/' is the route path, the path the requests are
//accepted for
app.get('/', function(request, response){
  // response.send('Hello world');
  //node functions
  response.write('Hello world');
  response.end();
});
//optional callback function for listen that will run
//once the server is ready to accept requests
app.listen(3000, function(request, response){
  console.log('listening on port 3000');


});
//The send function converts Objects and Arrays to JSON
app.get('/blocks', function(request, response){
  // var blocks = ['Fixed', 'Movable', 'Rotating'];
  // response.send(blocks);
  //response.json(blocks); behaves the same as response.send for objects and arrays, not for strings
  //with response.send(string), it returns the string as is and detects if it is html
  //301 is the response header to change from moved temporarily to moved permanently
  response.redirect(301,'/parts');
});


//built in functions named after http verbs
//app.post app.put app.patch app.delete
//start server with node app.js
//Request with curl
//Hello world is the server response to the request
//CTRl C interrupts the current process
//Express inherits from(extends) Node HTTP objects
//this inheritance gives us the ability to call node functions from express apps
// curl -i http://localhost:3000/blocks i prints the reponse headers
