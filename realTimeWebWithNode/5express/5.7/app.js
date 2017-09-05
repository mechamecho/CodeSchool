var url = require('url');
var request = require('request');
//Require the express module.
var express=require('express');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);
//Create the Express server and name it app.
var app=express(); // Create server here
//Create a route for GET requests to / (root path). Remember, the callback function
//takes two arguments: a request req and a response res.
app.get('/', function(req, res){
  //In our new route, issue a request to searchURL and pipe the results into the response.
  request(searchURL).pipe(res);
//  Finally, tell app to listen on port 8080.
}).listen(8080);
