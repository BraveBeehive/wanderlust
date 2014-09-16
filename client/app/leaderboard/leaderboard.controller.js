'use strict';

angular.module('wanderlustApp')
  .controller('LeaderboardCtrl', function ($scope, Points, currentUser) {
    // load points for all users upon initialization
    Points.getPointsForAllUsers();
  });
