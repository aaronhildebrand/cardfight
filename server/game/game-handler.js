var mongoose = require('mongoose');
var Cards = require('../db/cards.js');
// var Promise = require('bluebird');

// Promise.promisifyAll(mongoose);
// mongoose.Promise = Promise;

function drawCard(idx) {
  var promise = Cards.find({index: idx}).exec();
  return promise;
}

var whiteCard = function() {
  var idx =  Math.ceil(Math.random()*178);
  var card = drawCard(idx);

  // Cards.find({'index': idx}).exec()
  // // , function(err, card) {
  //   // if(err) {
  //   //   console.log('Error finding card', err);
  //   // } else {
  //   //   return card;
  //   // }
  // // })
  card.then(function(result) {
    console.log(result);
    return result;
  })
  .catch(function(error) {
    console.log('error', error);
  });
  // console.log(card);
};

var blackCard = function() {
  var idx = Math.ceil(Math.random()*322)+178;

  var card = Cards.find({'index': idx}, 'index', function(err, result) {
    if(err) {
      console.log('Error finding card', err);
    }
    else {
      console.log(err);
      return result;
    }
  });
};

exports.drawHand = function() {
  var hand = [];
  hand.push(whiteCard());
  hand.push(blackCard());
  hand.push(blackCard());
  // hand.push(blackCard(function(data) {
  //   return(data);
  // }));
  // hand.push(blackCard(function(data) {
  //   return(data);
  // }));
  // var card2 = blackCard(function(data) {
  //   return(data);
  // });
  // var card3 = blackCard(function(data) {
  //   return(data);
  // });

  console.log(data);

  return hand;
};