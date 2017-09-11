var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};

app.param('name', function (request, response, next) {
  request.cityName = parseCityName(request.params.name);
});

/*Create a DELETE route that takes the city name as its first argument, followed by a callback that takes a request and response objects as arguments.*/
 app.delete('/cities/:name', function(request, response){

   /*Add an if block that checks whether the cityName provided from app.param() has a valid entry before attempting to delete it from the cities object. If a valid city is not found, then respond with a 404 HTTP status code using the sendStatus() function.*/
   if(cities[request.cityName]){
     /*Use the built-in JavaScript operator delete (see MDN docs) to remove the property for the city passed as an argument. Don't forget to use the attribute set in app.param() to look the city up.*/
     delete(cities[request.cityName]);
     //Use sendStatus() to respond back with a status code of 200.
   response.sendStatus(200);
   }else{
     response.sendStatus(404);
   }

 });


app.listen(3000);

function parseCityName(name) {
  var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return parsedName;
}
