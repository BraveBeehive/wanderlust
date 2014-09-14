'use strict';

angular.module('wanderlustApp')

.factory('getCityName', function() {
	var cityName;
	function set(location) {
		// console.log('in here');
		cityName = location;
		// console.log(cityName);
	}
	function get() {
		return cityName;
	}
	return {
		set: set,
		get: get,
		cityName: cityName
	};
})

.controller('MainCtrl', function ($scope, $state, getCityName) {

  $scope.navToToursByLocation = function() {
  	// console.log($scope.location);
  	getCityName.set($scope.location);
  	// console.log($scope.location);
     // Value of $scope.location can be found in tours' $stateParams
    $state.go('tours', $scope.location);
  };
});
