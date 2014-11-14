'use strict';

angular.module('wanderlustApp')
  .controller('MainCtrl', function ($scope, $state) {
    $scope.navToToursByLocation = function(city) {
      // Value of $scope.location can be found in tours' $stateParams
      console.log('going to /tours/'+city);
      $state.go('tours', {city: city});
    };
  });
