'use strict';

angular.module('wanderlustApp')

.factory('getTours', function($http, $location) {
  var tours = {};

  tours.getTours = function(querystr) {
  	console.log("getTours' querystr", querystr);
  	return $http({
  		method: 'GET',
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
    console.log('fetchTourData called', querystr);
  	console.log(querystr, "this is querystr");
  	getTours.getTours(querystr);
  	$state.go('tours', $scope.location);
  };

});
