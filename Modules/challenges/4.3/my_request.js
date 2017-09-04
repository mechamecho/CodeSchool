//Move the myRequest function and the http require into my_request.js

var http = require('http');

var myRequest = function(message) {
  var request = http.request('http://codeschool.com', function(response) {
    response.pipe(process.stdout, { end: false });
  });

  request.write(message);
  request.end();
};
//Export the myRequest function.
module.exports=myRequest;
