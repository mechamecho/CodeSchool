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

app.get('/blocks', function(request, response){
  var blocks=['Fixed', 'Movable', 'Rotating'];
  response.json(blocks);
});
app.listen(8080);
