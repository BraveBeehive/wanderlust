'use strict';

angular.module('wanderlustApp')


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



  .service('httpGET', function($http, getCityName){
    this.count = 0;
    this.getData = function(callback){
      return $http({
        method: 'GET',
        url: '/api/tours'
        }).success(function(data){
          callback(data);
        });
    };

    this.getToursCountByCity = function() {
      var self = this;
      $http({
        method: 'GET',
        url: '/api/tours'
      }).success(function(data) {
        for(var i = 0; i < data.length; i++) {
          if(data[i].city === getCityName.get()) {
            console.log('INSIDE SERVICE: ', getCityName.get());
          self.count++;
          }
        }
      });
    };

    this.resetCount = function() {
      this.count = 0;
    };
  })

  // .factory('httpGET', function($http, $location){
  //   var results = {};
  //   // results.count = 0;
  //   results.getData = function(callback){
  //     return $http({
  //       method: 'GET',
  //       url: '/api/tours'
  //     }).success(function(data) {
  //       callback(data);
  //     });
  //   };
  //   results.getToursCountByCity = function(){
  //     return $http({
  //       method: 'GET',
  //       url: '/api/tours'
  //     }).success(function(data) {
  //       console.log(data);
  //     });
  //   };
  //   return results;
  // })

  .controller('ToursCtrl', function ($scope, $location, $http, httpGET, getCityName) {

    httpGET.getData(function(data){
      $scope.tours = data;
      // console.log('LOCATION HERE', $location);
      console.log('DATA HERE: ', $scope.tours);
    });
    $scope.city = getCityName.get();
    $scope.toursCount = httpGET;
    $scope.toursCount.getToursCountByCity();
    httpGET.resetCount();

    //route to tour on click
    $scope.selectedTour = function(){
      console.log('clicked');
        $location.path('/tours/showtour');
    };
    $scope.myInterval = 5000;
  });

