'use strict';

angular.module('wanderlustApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('leaderboard', {
        url: '/leaderboard',
        templateUrl: 'app/leaderboard/leaderboard.html',
        controller: 'LeaderboardCtrl'
      });
  });