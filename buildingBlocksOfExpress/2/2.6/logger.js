module.exports = function (request, response, next) {
  var start= +new Date();
  var stream = process.stdout;
  var url = request.url;
  var method = request.method;
  //response object is an event emitter, it emits finish when the response was handed to the client
  response.on('finish', function(){
    var duration= +new Date()- start;
    var message= method+ ' to '+ url+ '\ntook '+duration+ ' ms \n \n';
    stream.write(message); //console.logs the message
  });

  next();
};
