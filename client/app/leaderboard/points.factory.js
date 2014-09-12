'use strict';

angular.module('wanderlustApp')
  .factory('Points', function Points() {
  	var user = {
      points: 0
    };

  	var addPoints = function(activity) {
  		user.points += activity;
  	};

  	return {
  		user: user,
  		addPoints: addPoints
  	};
  });
