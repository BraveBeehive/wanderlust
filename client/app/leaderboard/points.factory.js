'use strict';

app.module('wanderlustApp')
  .factory('Points', function() {
  	var user = {};
  	var addPoints = function() {
  		user.points += 5;
  	};

  	return {
  		user: user,
  		addPoints: addPoints
  	};
  });
  