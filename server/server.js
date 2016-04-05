var express = require('express');
var mongoose = require('mongoose');
var game = require('./game/game-handler');
var Cards = require('./db/cards.js');
var app = express();


var databaseLoc =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/cardfight';

mongoose.connect(databaseLoc);

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Server now listening at port: ', port);
});

app.use(express.static(__dirname + '/../client'));

app.get('/api/draw', game.drawHand);
app.get('/api/drawwhite', game.drawWhite);
app.get('/api/drawblack', game.drawBlack);


// app.get('/*', function(req, res) {
//   res.send('Hello world!');
// });

module.exports = app;