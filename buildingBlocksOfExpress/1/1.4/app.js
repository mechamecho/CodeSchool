var express = require('express');
var app = express();

app.get('/locations', function (request, response) {
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});

app.listen(3001, function () {
  console.log("Running Express");
});
//When we run our previous code and issue a GET request to the /locations endpoint, what will the Content-Type header for the response be set to?
application/json
