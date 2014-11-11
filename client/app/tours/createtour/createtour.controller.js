'use strict';

angular.module('wanderlustApp')
  .controller('CreatetourCtrl', function ($scope, $http) {
    $scope.spots = [{}];
    $scope.tour = {spots: $scope.spots};
    $scope.address;
    $scope.neighborhoods = ['Bayview', 'Bernal Heights', 'Castro', 'Chinatown', 'Crocker Amazon', 'Dogpatch', 'Downtown', 'Excelsior', 'Financial District', 'Glen Park', 'Golden Gate Park', 'Haight-Ashbury', 'Inner Richmond', 'Inner Sunset', 'Lakeshore', 'Marina', 'Mission', 'Nob Hill', 'Noe Valley', 'North Beach', 'Ocean View', 'Outer Mission', 'Outer Richmond', 'Outer Sunset', 'Pacific Heights', 'Parkside', 'Portola', 'Potrero Hill', 'Russian Hill', 'South of Market', 'Tenderloin', 'Visitacion Valley', 'West of Twin Peaks', 'Western Addition'];

    $scope.addSpot = function() {
      $scope.spots.push({});
    };

    $scope.createTour = function() {
      // uncomment to populate map upon create tour
      // $scope.getLatLong();
      console.log('Trying to POST ', $scope.tour);
      $http.post('/api/tours', $scope.tour)
      .success(function(data) {
        console.log('Post successful!', data);
      })
      .error(function(data) {
        console.log('Error sending post request', data);
      });
    };

        // add map centered on test location (using Jonathan Warrick fake tour data)
    $scope.map = {
        center: {
          latitude: 37.7836377,
          longitude: -122.4146064
        },
        zoom: 12
    };

    // add markers for each location on the loaded tour
    $scope.markers = [];

    // function to create an individual marker
    $scope.createMarker = function(location) {
      console.log('in createMarker');
      var marker = {
        idKey: location.number,
        coords: {
          latitude: location.k,
          longitude: location.B
        }
      };
      return marker;
    };

    // create a google maps geocoder object
    var geocoder = new google.maps.Geocoder();
    
    $scope.getLatLong = function() {
      for (var j = 0; j < $scope.tour.spots.length; j++) {
        var address = $scope.tour.spots[j].address;
        geocoder.geocode({'address': address}, function(results, status) {
            if(status === google.maps.GeocoderStatus.OK) { 
              var markerPosition = new google.maps.LatLng(results[0].geometry.location.k, results[0].geometry.location.B);
              markerPosition.number = j;
              $scope.markers.push($scope.createMarker(markerPosition));
            }
          });
      }
      console.log($scope.markers);
    };
  });


// test data
// 973 Market Street, San Francisco, CA
// 944 Market Street, San Francisco, CA
// 560 Larkin Street, San Francisco, CA