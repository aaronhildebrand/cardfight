angular.module('superfight.game', [])

.factory('Cards', function($http) {
  var getHand = function(a,b) {
    return $http({
      method: 'GET',
      url: '/api/draw/'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var getOneBlack = function() {
    return $http({
      method: 'GET',
      url: '/api/drawblack'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var getOneWhite = function() {
    return $http({
      method: 'GET',
      url: '/api/drawwhite'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  return {
    getHand: getHand,
    getOneBlack: getOneBlack,
    getOneWhite: getOneWhite
  };
});