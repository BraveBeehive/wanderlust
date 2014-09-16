'use strict';

angular.module('wanderlustApp')
  .factory('Points', function($http, currentUser) {
    var getPointsForAllUsers = function() {
      // need to align paths for routing
      $http.get('/leaderboard').success(function(users) {
        return users;
      });
    };

    var addPoints = function(pointValue) {
      var currentUser = currentUser.getCurrentUser();
      currentUser.points += pointValue;
      // need to align paths for routing
      $http.post('/users', currentUser).success(function(response) {
        // what to do with the response again?
        console.log(response);
      });
    };

    var removePoints = function(pointValue) {
      var currentUser = currentUser.getCurrentUser();
      currentUser.points -= pointValue;
      // need to align paths for routing
      $http.post('/users', currentUser).success(function(response) {
        // what to do with the response again?
        console.log(response);
      });
    };

  	return {
      getPointsForAllUsers: getPointsForAllUsers,
  		addPoints: addPoints,
      removePoints: removePoints
  	};
  });
