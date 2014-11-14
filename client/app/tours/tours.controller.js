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
          url: '/api/city/'+city,
          }).success(function(data){
            callback(data);
          });
      }
    };
  })

  .controller('ToursCtrl', function ($scope, $location, $http, httpGET, $stateParams) {
    console.log('ToursCtrl');
    $stateParams.city = $stateParams.city || '';
    console.log('$stateParams', $stateParams);
    httpGET.getData($stateParams.city, function(data){
      $scope.tours = data.tours;
      $scope.city = data.city;
      console.log('$scope.tours',$scope.tours);
    });
    $scope.selectedTour = function(tour_id){
        console.log('tour_id',tour_id);
        $location.path('/tours/showtour');
    };
    $scope.navToCreateTour = function(){
      $location.path('/createtour');
    };
  });
