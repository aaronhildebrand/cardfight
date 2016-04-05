var mongoose = require('mongoose');
var Cards = require('../db/cards.js');

function drawCards(indexes) {
  var promise = Cards.find({'index': { $in: indexes}}).exec();
  return promise;
}

var cardIndexes = function(indexes, countWhite, countBlack) {
  if(countWhite) {
    for(var i = 0; i < countWhite; i++) {
      indexes.push(Math.ceil(Math.random()*178));
    }
  }
  if(countBlack) {
    for(var j = 0; j < countBlack; j++) {
      indexes.push(Math.ceil(Math.random()*322)+178);
    }
  }
};

exports.drawHand = function(req, res) {
  var indexes = [];
  cardIndexes(indexes, 3, 3);

  var cards = drawCards(indexes);

  cards.then(function(hand) {
    res.send(hand);
  })
  .catch(function(error) {
    console.log('Error', error);
  });
};

exports.drawWhite = function(req, res) {
  var indexes = [];
  cardIndexes(indexes, 1, 0);

  var cards = drawCards(indexes);

  cards.then(function(hand) {
    res.send(hand);
  })
  .catch(function(error) {
    console.log('Error', error);
  });
};

exports.drawBlack = function(req, res) {
  var indexes = [];
  cardIndexes(indexes, 0, 1);

  var cards = drawCards(indexes);

  cards.then(function(hand) {
    res.send(hand);
  })
  .catch(function(error) {
    console.log('Error', error);
  });
};