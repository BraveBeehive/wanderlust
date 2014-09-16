'use strict';

angular.module('wanderlustApp')
  .controller('LeaderboardCtrl', function ($scope, Points, currentUser) {
    Points.getPointsForAllUsers(function(users) {
    	$scope.users = users;
    });
    console.log('users in controller',$scope.users);
  });
