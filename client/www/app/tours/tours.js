'use strict';

angular.module('wanderlustApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('nakedTours', {
        url: '/tours/',
        templateUrl: 'app/tours/tours.html',
        controller: 'ToursCtrl'
      })
      .state('tours', {
        url: '/tours/:city',
        templateUrl: 'app/tours/tours.html',
        controller: 'ToursCtrl',
      });
  });
