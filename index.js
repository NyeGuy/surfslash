var express = require('express');
var app = express();

//this is the base route
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//for the server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});