var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var userController = require('./controllers/userController');

var app = express();
var port = process.env.PORT || 5000
// setup template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
userController(app);

// listen to port
app.listen(port, function() {
  console.log('listening to port...');
});
