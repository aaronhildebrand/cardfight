angular.module('superfight.game', [])

.factory('Cards', function($http) {
  var getHand = function() {
    return $http({
      method: 'GET',
      url: '/api/draw'
    })
    .then(function(resp) {
      console.log('in factory getHand!');
      return resp.data;
    });
  };

  return {
    getHand: getHand
  };

});