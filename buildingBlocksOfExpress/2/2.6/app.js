var express= require('express');
var app = express();

//require and use our module
var logger= require('./logger');
// ./ means it a local module and not an
//npm module

app.use(logger);
// replaced by app.use
/*the app.use function adds middleware to the application stack*/
// app.get('/', function(request, response){
//   // response.sendFile(__dirname+'/public/index.html');
//
// });
// app.use(express.static('public'));
//static middleware serving files from the public folder

app.get('/blocks', function(request, response){
  var blocks=['Fixed', 'Movable', 'Rotating'];
  response.json(blocks);
});
app.listen(8080, function(){
  console.log('listening on 8080');
});
