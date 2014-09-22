'use strict';

angular.module('wanderlustApp')
  .controller('MainCtrl', function ($scope, $state) {
    $scope.navToToursByLocation = function(city) {
      // Value of $scope.location can be found in tours' $stateParams
      city = city || '';
      console.log('going to /tours/' + city);
      $state.go('tours', {city: city});
    };
  });


// user clicks on explore:
  // navToToursByLocation is sent off in main.html
  // passed a parameter of the text in the searchbar
// controller handles function
  // controller hosts function, which takes in city (text from above)
  // uses $state.go to go to tours controller/html and passes city parameter
// tour controller gets and handles function WITH city parameter
  // calls get data upon load and sets tour/city
  // ***replace $scope.tours with $scope.tour in my case***



// for me:
// user clicks on a tour
  // navToTour is sent off in tours.html
  // pass a parameter of the clicked tour id
// tour controller handles function by calling $state.go('showtour', {tourid: tourid})
// showtour controller gets and handles function WITH tour parameter
	// calls get data upon load and sets tour