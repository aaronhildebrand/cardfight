var mongoose = require('mongoose');
var csv = require('fast-csv');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
  color: String,
  contents: String,
  available: {
    type: Boolean,
    default: true
  }
});

cardSchema.methods.draw = function(numCards, colorCard) {
};
mongoose.model('Card', cardSchema);
var Cards = mongoose.model('Card');

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Error: ', err.stack);
});

db.on('disconnected', function() {
  console.log('Disconnected from database.');
});

db.on('connected', function() {
  console.log('Connected to database!');
csv.fromPath('../../Cards/cardlist.csv', {headers : true})
  .on('data', function(data) {
    var record = new Cards(data);
    record.save(function(err, result) {
      if(!err) {
        console.log('Card saved');
      } else {
        console.log('Error saving card: ', err);
      }
    });
  })
  .on('end', function() {
    console.log('Finished loading cards');
  });
});

module.exports = Cards;