  'use strict';

angular.module('wanderlustApp')
  .factory('Points', function Points($http) {
    var getPointsForAllUsers = function() {
      // need to align paths for routing
      $http.get('/leaderboard').success(function(users) {
        return users;
      });
    };







  	var user = {
      points: 0
    };

  	var addPoints = function(activity) {
  		user.points += activity;
  	};

  	return {
      getPointsForAllUsers,
  		user: user,
  		addPoints: addPoints
  	};
  });
