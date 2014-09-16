'use strict';

angular.module('wanderlustApp')
  .controller('LeaderboardCtrl', function ($scope, Points, currentUser) {
    Points.getPointsForAllUsers(function(users) {
    	$scope.users = users;
    });
    $scope.testUser = {
	    name: 'Test User',
	    email: 'test@test.com',
	    password: 'test',
	    points: 100
    };
    console.log('users in controller',$scope.users);
    $scope.testAdd = function() {
    	Points.addPoints({points: 10});
    	Points.getPointsForAllUsers(function(users) {
    		$scope.users = users;
    	});
    };
    $scope.testRemove = function() {
    	Points.removePoints({points: 10});
    	Points.getPointsForAllUsers(function(users) {
    		$scope.users = users;
    	});
    };
  });
