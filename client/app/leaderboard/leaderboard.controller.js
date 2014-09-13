'use strict';

angular.module('wanderlustApp')
  .controller('LeaderboardCtrl', function ($scope, Points, User) {
    $scope.getCurrentUser = function() {
      User.get()
          .$promise
          .then(function(user) {
            return user.name;
          });
    };
    $scope.currentUsername = $scope.getCurrentUser();
    $scope.users = [{
        // test user 1
        name: 'Jonathan',
        points: 100
      },
      {
        // test user 2
        name: 'Collin',
        points: 10
      },
      {
        // test user 3
        name: 'Tommy',
        points: 75
      },
      {
        // test user 4
        name: 'Luby',
        points: -100
      },
      {
        // test user 5
        name: 'Test User',
        points: Points.user.points
      }
    ];
  });
