'use strict';

angular.module('wanderlustApp')
  .controller('LeaderboardCtrl', function ($scope, Points, currentUser) {
    $scope.loadUsers = function() {
      $scope.currentUser = currentUser.getCurrentUser();
    };
    $scope.loadUsers();
    $scope.users = currentUser.users;
  });
