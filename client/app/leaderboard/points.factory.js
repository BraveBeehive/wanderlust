'use strict';

angular.module('wanderlustApp')
  .factory('Points', function Points() {
  	var user = {
      points: 0
    };

  	var addPoints = function() {
  		user.points += 5;
  	};

  	return {
  		user: user,
  		addPoints: addPoints
  	};
  });
