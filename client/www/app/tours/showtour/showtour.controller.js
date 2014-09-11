'use strict';

angular.module('wanderlustApp')

  .factory('GoExplore', function(){
    //this function activates on ng-click for the button "Go Exploring!"
    return {
      glhf: function(){
        window.alert('good luck, have fun!');
      }
    };
  })

  .controller('ShowtourCtrl', function ($scope, GoExplore) {

    $scope.glhf = GoExplore.glhf;

    //Temp data for a tour
    // $scope.tours = {
    //   name: 'The Mission Mission',
    //   author: 'Ash Ketchum',
    //   length: 'all day',
    //   description: 'Note all clues hitherto are bounded by the following streets: 16th and 26th and Dolores and one after Balmy (referred to as The Mission). Hint: a majority of the spots lie on or very close to Valencia. The attendees of the scavenger hunt will be referred to as the “Scavengers”. DISCLAIMER: once The Hunt has begun, the use of any smartphone technology for navigational purposes will be frowned upon.',
    //   spots: {
    //     1: {
    //       number: 1,
    //       info: 'Obtain a wooden sword from a pirate shop',
    //       points: '10',
    //     },
    //     2: {
    //       number: 2,
    //       info: 'Find the following graffiti',
    //       points: '5'
    //     },
    //     3: {
    //       number: 3,
    //       info: 'Catch Pikachu',
    //       points: '20'
    //     }
    //   }

    // };

    $scope.tours = {
      name: 'Places I Have Eaten',
      author: 'Jonathan Warrick',
      length: 'all day',
      description: 'A few places I have eaten at during the last month.',
      spots: [
        {
          number: 1,
          info: 'Eat some banh mi.',
          points: 5,
          address: '560 Larkin St, San Francisco, CA 94102',
          latitude: 37.7836377,
          longitude: -122.4132168
        },
        {
          number: 2,
          info: 'Eat some Indian.',
          points: 10,
          address: '336 O\'Farrell St, San Francisco, CA 94102',
          latitude: 37.7850504,
          longitude: -122.4146064
        },
        {
          number: 3,
          info: 'Eat the best fast-food burger there is!',
          points: 10,
          address: '333 Jefferson St, San Francisco, CA 94133',
          latitude: 37.807735,
          longitude: -122.418553
        }
      ]
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
      var marker = {
        idKey: location.number,
        coords: {
          latitude: location.latitude,
          longitude: location.longitude
        }
      };
      return marker;
    };

    // function to fill array of markers
    $scope.createMarkers = function() {
      for (var i = 0; i < $scope.tours.spots.length; i++) {
        var marker = $scope.createMarker($scope.tours.spots[i]);
        $scope.markers.push(marker);
      }
    };

    // call upon controller initialization
    $scope.createMarkers();

    // add paths from each stop in the loaded tour to the next
    $scope.paths = {
      path: [],
      stroke: {
        color: '#6060FB',
        weight: 3
      }, 
      geodesic: true
    };

    // function to create the paths
    $scope.createPaths = function() {
      for (var i = 0; i < $scope.tours.spots.length; i++) {
        $scope.paths.path.push({
          latitude: $scope.tours.spots[i].latitude,
          longitude: $scope.tours.spots[i].longitude
        });
      }
    };

    // call upon controller initialization
    $scope.createPaths();
  });