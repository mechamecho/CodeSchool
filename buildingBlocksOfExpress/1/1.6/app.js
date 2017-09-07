var express = require('express');
var app = express();
//First, change our existing route from /locations to /cities.
app.get('/cities', function (request, response) {
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});
//Now create a new route for /locations.
app.get('/locations', function(request, response){
  /*Now redirect from /locations to /cities path using the Moved Permanently
  HTTP status code (free hint for you, the code for that is 301).*/
  response.redirect(301, '/cities');
});


app.listen(3001, function () {
  console.log("Running Express");
});
