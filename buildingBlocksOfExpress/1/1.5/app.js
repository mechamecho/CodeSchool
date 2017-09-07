app.get('/locations', function(request, response) {
  var cities = '<ul><li>Caspiana</li><li>Indigo</li></ul>';
  response.send(cities);
});
//If we were to craft a response sending a string of text with the response.send() function, just like the following code, what would Express set this Content-Type to?
text/html
