'use strict';

angular.module('wanderlustApp')
  .controller('MainCtrl', function ($scope, $state) {

    $scope.navToToursByLocation = function() {
      // Value of $scope.location can be found in tours' $stateParams
      $state.go('tours', $scope.location);
    };
  });