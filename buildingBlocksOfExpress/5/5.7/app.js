var express = require('express');
var app = express();

/*Our cities routes module is now ready to be used from app.js. Require the new routes/cities module from app.js and assign it to a variable called router;*/
var router=require('routes/cities');

app.use('/cities', router);
app.listen(3000);
