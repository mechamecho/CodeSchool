var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);
//To start, require the request module and assign the return function to a variable.
var request=require('request');
//Next, issue a request to searchURL. Remember, the callback function for the request
//function takes three arguments: error, response and body.
request(searchURL, function(error, response, body){
  //Finally, log the response body to the console using console.log().
  console.log(body);
});
