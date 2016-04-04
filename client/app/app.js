angular.module('superfight', ['superfight.game','superfight.cards', 'ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/cards', {
      templateUrl: 'app/cards/cards.html',
      controller: 'CardsController'
    })
    .otherwise({ redirectTo: '/cards' });
});