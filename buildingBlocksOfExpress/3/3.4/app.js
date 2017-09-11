var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};

app.get('/cities/:name', function (request, response) {

  /*Inside of our dynamic route, grab the name submitted by the user, lookup the city information on the cities object and assign it to the cityInfo variable.*/
  var cityInfo=cities[request.params.name];

  //Check to see if cityInfo exists and if so, respond with the cityInfo in JSON format.
  if(cityInfo){
    response.json(cityInfo);
/*If cityInfo does not exist, respond with a 404 HTTP status code and a JSON message that says "City not found".*/
  }else{
    response.status(404).json("City not found");
  }
});

app.listen(3000);
