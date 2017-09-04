var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};

//In the logger.js file, export the info function so we can use
// it in app.js by assigning it to the exports object.
exports.warn=warn;
exports.info=info;
exports.error=error;
