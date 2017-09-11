var express = require('express');
var app = express();

var logger = require('./logger');

//TODO: mount middleware
app.use(logger);

app.listen(3000);
