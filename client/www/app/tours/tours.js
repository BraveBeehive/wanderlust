'use strict';

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tours', {
        url: '/tours',
        templateUrl: 'app/tours/tours.html',
        controller: 'ToursCtrl'
      });
  });
