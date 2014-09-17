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

  .factory('httpGETTour', function($http){
    return {
      getData: function(tour, callback){
        return $http({
          method: 'GET',
          url: '/api/tours/' + tour,
          }).success(function(data){
            callback(data);
          });
      }
    };
  })





  .value('TourPoints',{value: 0})
  .controller('SpotCtrl', function ($scope, TourPoints) {
    $scope.toggleTask = function(points, isCompleted){
      if(!$scope.isCompleted){ //complete
        $scope.isCompleted = true;
        TourPoints.value += points;
      } else { //uncomplete
        $scope.isCompleted = false;
        TourPoints.value -= points;
      }
    }
  })

  // ***************** NEED TO ADD BACK POINTS AND MAP *****************
  // ***************** NEED TO ADD BACK POINTS AND MAP *****************
  // ***************** NEED TO ADD BACK POINTS AND MAP *****************
  // ***************** NEED TO ADD BACK POINTS AND MAP *****************
  // ***************** NEED TO ADD BACK POINTS AND MAP *****************
  .controller('ShowtourCtrl', function ($scope, GoExplore, httpGETTour, $stateParams) {
    $scope.glhf = GoExplore.glhf;
    console.log('stateParams in showtourctrl is', $stateParams);
    
    httpGETTour.getData($stateParams.id, function(data){
      console.log('data in httpGET.getData', data);
      $scope.tours = data;
      console.log('$scope.tours',$scope.tours);
    });


  // .controller('ToursCtrl', function ($scope, $location, $http, httpGET, $stateParams, $state) {
  //   $stateParams.city = $stateParams.city || '';
  //   console.log('$stateParams', $stateParams);
    
  //   httpGET.getData($stateParams.city, function(data){
  //     $scope.tours = data.tours;
  //     $scope.city = data.city;
  //     console.log('$scope.tours',$scope.tours);
  //   });
    
    // $scope.tours = {
    //   name: 'Places I Have Eaten',
    //   author: 'Jonathan Warrick',
    //   length: 'all day',
    //   description: 'A few places I have eaten at during the last month.',
    //   spots: [
    //     {
    //       number: 1,
    //       info: 'Eat some banh mi.',
    //       points: 5,
    //       address: '560 Larkin St, San Francisco, CA 94102',
    //       latitude: 37.7836377,
    //       longitude: -122.4132168
    //     },
    //     {
    //       number: 2,
    //       info: 'Eat some Indian.',
    //       points: 10,
    //       address: '336 O\'Farrell St, San Francisco, CA 94102',
    //       latitude: 37.7850504,
    //       longitude: -122.4146064
    //     },
    //     {
    //       number: 3,
    //       info: 'Eat the best fast-food burger ever!',
    //       points: 10,
    //       address: '333 Jefferson St, San Francisco, CA 94133',
    //       latitude: 37.807735,
    //       longitude: -122.418553
    //     }
    //   ]
    // };

    // $scope.map = Maps.createMap($scope.tours.spots);
    // $scope.markers = Maps.markers;
    // $scope.paths = Maps.paths;

    // Maps.createMarkers($scope.tours.spots);
    // Maps.createPaths($scope.tours.spots);

    // if ($scope.isCompleted) {
    //   $scope.updatePoints = Points.addPoints;
    // } else {
    //   $scope.updatePoints = Points.removePoints;
    // }
  });
