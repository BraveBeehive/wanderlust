'use strict';

angular.module('wanderlustApp')

// .factory('getCityName', function() {
// 	var cityName;
// 	function set(location) {
// 		// console.log('in here');
// 		cityName = location;
// 		// console.log(cityName);
// 	}
// 	function get() {
// 		return cityName;
// 	}
// 	return {
// 		set: set,
// 		get: get,
// 		cityName: cityName
// 	};
// })

.factory('getTours', function($http, $location) {
  var tours = {};

  tours.getTours = function(querystr) {
  	console.log("getTours' querystr", querystr);
  	return $http({
  		method: 'POST',
  		url: 'api/city',
  		data: {city: querystr}
  	})
  	.then(function(resp) {
  		console.log("sever responded querystr: ", resp);
  	  // Figure out what data does mongoose/mongodb returns
  	  tours.tours = resp;
  	  console.log(tours.tours, "this is tours data");
  	  // $location.path('/tours/showtour');
  	});
  }

  return tours;
})

.controller('MainCtrl', function ($scope, $state, getTours) {

  $scope.navToToursByLocation = function() {
  	// console.log($scope.location);
  	// console.log($scope.location);
     // Value of $scope.location can be found in tours' $stateParams
    $state.go('tours', $scope.location);
  };

  $scope.searchQuery = {};

  $scope.fetchToursData = function(querystr) {
  	console.log(querystr, "this is querystr");
  	getTours.getTours(querystr)
  	.then(function() {
  		$state.go('tours', $scope.location);
  	});
  };

});
