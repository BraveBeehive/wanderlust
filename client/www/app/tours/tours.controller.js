'use strict';

angular.module('wanderlustApp')

  /*
  .directive('starRating', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-star"></span>'
    };
  })

  .directive('tagPrice', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-usd"></span>'
    };
  })

  .directive('tagCamera', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-camera"></span>'
    };
  })

  .directive('tagTree', function(){
    return {
      restrict: 'E',
      template: '<span class="glyphicon glyphicon-tree-conifer"></span>'
    };
  })
  */

  .factory('httpGET', function($http){
    return {
      getData: function(city, callback){
        return $http({
          method: 'GET',
          url: '/api/city/' + city,
          }).success(function(data){
            callback(data);
          });
      }
    };
  })

  .controller('ToursCtrl', function ($scope, $location, $http, httpGET, $stateParams, $state) {
    $stateParams.city = $stateParams.city || '';
    console.log('$stateParams', $stateParams);
    
    httpGET.getData($stateParams.city, function(data){
      $scope.tours = data.tours;
      $scope.city = data.city;
      console.log('$scope.tours',$scope.tours);
    });

    //route to tour on click
    $scope.navToTourByID = function(tourID) {
      // Value of $scope.location can be found in tours' $stateParams
      console.log('going to /tours/showtour/' + tourID);
      $state.go('showtour', {id: tourID});
    };

    // $scope.selectedTour = function(tour) {
    //   console.log('getSelectedTour');
    //   console.log('this is the id', tour);
    //   $state.go('showtour', {tourID: tourID});

    //   // return $http({
    //   //   method: 'GET',
    //   //   url: '/api/tours/' + id
    //   // }).success(function(tour) {
    //   //   console.log('got this tour', tour);
    //   // })
    //   // .error(function(error) {
    //   //   console.log(error);
    //   // });
    // };

    $scope.navToCreateTour = function(){
      $location.path('/createtour');
    };

    // for carousel
    $scope.myInterval = 5000;
  });
