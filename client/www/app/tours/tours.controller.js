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
    $stateParams.city = $stateParams.city || '';
    console.log('$stateParams', $stateParams);
    httpGET.getData($stateParams.city, function(data){
      $scope.tours = data.tours;
      $scope.city = data.city;
      console.log('$scope.tours',$scope.tours);
    });

    //route to tour on click
    $scope.selectedTour = function(){
        $location.path('/showtour');
    };

    $scope.navToCreateTour = function(){
      $location.path('/createtour');
    };

    $scope.myInterval = 5000;
  });
