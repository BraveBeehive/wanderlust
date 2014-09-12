'use strict';

angular.module('wanderlustApp')

.service('getCityName', function($scope) {
	this.location = $scope.location;
})


.controller('MainCtrl', function ($scope, $state, getCityName) {

  $scope.navToToursByLocation = function() {
  	// console.log($scope.location);
  	getCityName.getLocation();
  	// $scope.location = getCityName.getLocation();
     // Value of $scope.location can be found in tours' $stateParams
    $state.go('tours', $scope.location);
  };
});
