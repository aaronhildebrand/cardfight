var express = require('express');
var mongoose = require('mongoose');
var handler = ('./lib/request-handler');
var app = express();

var databaseLoc =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/shortlydb';

mongoose.connect(databaseLoc);

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Server now listening at port: ', port);
});

app.get('/*', function(req, res) {
  res.send('Hello world!');
});

module.exports = app;