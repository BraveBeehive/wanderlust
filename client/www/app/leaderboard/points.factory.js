'use strict';

angular.module('wanderlustApp')
  .factory('Points', function($http, currentUser) {
    var getPointsForAllUsers = function(callback) {
      // need to align paths for routing
      console.log('getPointsForAllUsers called within factory');
      $http.get('/api/users/leaderboard').success(function(users) {
        console.log('got a users', users);
        callback(users);
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
