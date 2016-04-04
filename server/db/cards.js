var mongoose = require('mongoose');
var csv = require('fast-csv');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
  index: {
    type: Number,
    unique: true
  },
  color: String,
  content: String,
  available: {
    type: Boolean,
    default: true
  }
});

cardSchema.methods.draw = function(numCards, colorCard) {
};
mongoose.model('Card', cardSchema);
var Cards = mongoose.model('Card');

var conn = mongoose.connection;

conn.on('error', function(err) {
  console.log('Error: ', err.stack);
});

conn.on('disconnected', function() {
  console.log('Disconnected from database.');
});

conn.on('connected', function() {
  console.log('Connected to database!');
  conn.db.listCollections({name: 'cards'})
    .next(function(err, info) {
      if(!info) {
        csv.fromPath('../Cards/cardlist.csv', {headers : true})
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
            console.log('Finished loading cards!');
          });
      } else {
        console.log('Cards already loaded.');
      }
    });
});

module.exports = Cards;