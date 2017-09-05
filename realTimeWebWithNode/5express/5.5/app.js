var url = require('url');

options = {
  // add URL options here
  //Add the protocol attribute to options.
  protocol:"http",
  //Add the host attribute to options.
  host:"search.twitter.com",
  //Add the pathname attribute to options.
  pathname:"search.json",
  //Add an attribute which takes an object of query parameters, 
  in this case we only need q to search Twitter.
  query:{
    q:"codeschool"
  }

};

var searchURL = url.format(options);
console.log(searchURL);
