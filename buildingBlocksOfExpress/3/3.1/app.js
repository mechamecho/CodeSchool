var express= require('express');
var app = express();
// replaced by app.use
/*the app.use function adds middleware to the application stack*/
// app.get('/', function(request, response){
//   // response.sendFile(__dirname+'/public/index.html');
//
// });
// app.use(express.static('public'));
//static middleware serving files from the public folder
var blocks={'Fixed':'Fastened securely in position',
 'Movable':'Capable of being moved',
  'Rotating':'Moving in a circle around its center'};

app.get('/blocks', function(request, response){

  //true when a numeric value for limit is part of the URL
  if(request.query.limit>=0){
    response.json(blocks.slice(0, request.query.limit));
  }else{
    response.json(blocks);
  }
  response.json(blocks);
});

//creates name property on the request.params object
app.get('/blocks/:name', function(request, response){
  //returns undefined when no property is found for a given block name
  var description=blocks[request.params.name];
  //returns true when the value is undefined, since undefined evaluates as false
  if(!description){
    response.status(404).json('No description was found for '+ request.params.name);
  }else{
    //defaults to 200 success
    response.json(description);
  }

});
app.listen(8080);
