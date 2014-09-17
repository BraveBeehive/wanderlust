'use strict';

angular.module('wanderlustApp')
  .controller('LeaderboardCtrl', function ($scope, Points, currentUser) {
    Points.getPointsForAllUsers(function(users) {
    	$scope.users = users;
    });
  });
