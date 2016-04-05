angular.module('superfight.cards', [])

.controller('CardsController', function($scope, Cards) {
  $scope.data = {};
  $scope.showsubmit = false;
  $scope.data.cards = [];

  $scope.getHand = function() {
    Cards.getHand()
      .then(function(data) {
        data.forEach(function(obj) {
          obj.selected = false;
        });
        $scope.data.cards = $scope.data.cards.concat(data);
      })
      .catch(function(err) {
        console.error('Error: ', err);
      });
  };

  $scope.getOneBlack = function() {
    Cards.getOneBlack()
      .then(function(data) {
        $scope.data.cards = $scope.data.cards.concat(data);
      })
      .catch(function(err) {
        console.error('Error: ', err);
      });
  };

  $scope.getOneWhite = function() {
    Cards.getOneWhite() 
      .then(function(data) {
        $scope.data.cards = $scope.data.cards.concat(data);
      })
      .catch(function(err) {
        console.error('Error: ', err);
      });
  };

  $scope.toggleCard = function(idx) {
    var white = 0;
    var black = 0;
    $scope.data.cards.forEach(function(card) {
      if(card.index === idx) {
        card.selected = !card.selected;
      }
      if(card.selected && card.color === 'Black') {
        black += 1;
      } else if (card.selected && card.color === 'White') {
        white += 1;
      }
    });
    if(white === 1 && black === 1) {
      $scope.showsubmit = true;
    } else {
      $scope.showsubmit = false;
    }
  };

  $scope.submitCards = function() {

  };
});