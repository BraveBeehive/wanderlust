'use strict';

angular.module('wanderlustApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('showtour', {
        url: '/tours/showtour/:id',
        templateUrl: '/app/tours/showtour/showtour.html',
        controller: 'ShowtourCtrl'
      });
  });
