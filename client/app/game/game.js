angular.module('superfight.game', [])

.factory('Cards', function($http) {
  var getHand = function() {
    return $http({
      method: 'GET',
      url: '/api/draw'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  return {
    getHand: getHand
  };

});