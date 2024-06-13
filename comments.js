//Create web server
var express = require('express');
var app = express();
//Set up the server
app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});