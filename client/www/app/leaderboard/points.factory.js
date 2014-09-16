'use strict';

angular.module('wanderlustApp')
  .factory('Points', function($http, currentUser) {
    var getPointsForAllUsers = function(callback) {
      // need to align paths for routing
      console.log('getPointsForAllUsers called within factory');
      $http.get('/api/users/leaderboard')
      .success(function(users) {
        console.log('got users', users);
        callback(users);
      }).error(function(err) {
        console.log('Error sending get request', err);
      });
    };

    var addPoints = function(pointValue) {
      $http.post('/api/users/addPoints', pointValue)
      .success(function(data) {
        console.log('Post successful!', data)  
      }).error(function(data) {
        console.log('Error sending post request', data);
      });
    };

    var removePoints = function(pointValue) {
      $http.post('/api/users/removePoints')
      .success(function(data) {
        console.log('Post successful!', data)  
      }).error(function(data) {
        console.log('Error sending post request', data);
      });
    };

  	return {
      getPointsForAllUsers: getPointsForAllUsers,
  		addPoints: addPoints,
      removePoints: removePoints
  	};
  });
