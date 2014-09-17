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





  // .value('TourPoints',{value: 0})
  // .controller('SpotCtrl', function ($scope, TourPoints) {
  //   $scope.toggleTask = function(points, isCompleted){
  //     if(!$scope.isCompleted){ //complete
  //       $scope.isCompleted = true;
  //       TourPoints.value += points;
  //     } else { //uncomplete
  //       $scope.isCompleted = false;
  //       TourPoints.value -= points;
  //     }
  //   }
  // })

  // ***************** NEED TO ADD BACK POINTS AND MAP *****************
  // ***************** NEED TO ADD BACK POINTS AND MAP *****************
  // ***************** NEED TO ADD BACK POINTS AND MAP *****************
  // ***************** NEED TO ADD BACK POINTS AND MAP *****************
  // ***************** NEED TO ADD BACK POINTS AND MAP *****************
  .controller('ShowtourCtrl', function ($scope, GoExplore, httpGETTour, Maps, $stateParams) {
    $scope.glhf = GoExplore.glhf;
    
    // console.log('stateParams in showtourctrl is', $stateParams);
    
    $scope.tourPoints = 0;
    console.log('tourPoints at beginning', $scope.tourPoints);
    
    httpGETTour.getData($stateParams.id, function(data){
      // console.log('data in httpGET.getData', data);
      $scope.tours = data;

      $scope.map = Maps.createMap($scope.tours.spots);
      console.log('this is scope map', $scope.map);
      $scope.markers = Maps.markers;
      console.log('this is scope map', $scope.map);
      $scope.paths = Maps.paths;

      Maps.createMarkers($scope.tours.spots);
      Maps.createPaths($scope.tours.spots);
      console.log('$scope.tours', $scope.tours);
    });

    $scope.toggleTask = function(points, isCompleted) {
      if(!$scope.isCompleted){ //complete
        $scope.isCompleted = true;
        console.log('tourPoints before increase', $scope.tourPoints);
        $scope.tourPoints += +points;
        console.log('tourPoints after increase', $scope.tourPoints);
      } else { //uncomplete
        $scope.isCompleted = false;
        console.log('tourPoints before decrease', $scope.tourPoints);
        $scope.tourPoints -= +points;
        console.log('tourPoints after decrease', $scope.tourPoints);
      }
    };
    console.log('$scope.tours right before maps = ', $scope.tours);

$scope.map = {
    center: {
        latitude: 45,
        longitude: -73
    },
    zoom: 8
};

    // if ($scope.isCompleted) {
    //   $scope.updatePoints = Points.addPoints;
    // } else {
    //   $scope.updatePoints = Points.removePoints;
    // }
  });
