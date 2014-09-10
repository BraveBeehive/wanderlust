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

  .factory('httpGET', function($http){
    return {
      getData: function(callback){
        return $http({
          method: 'GET',
          url: '/api/tours'
          }).success(function(data){
            callback(data);
          });
      }
    };
  })

  .controller('ToursCtrl', function ($scope, $location, $http, httpGET) {
    
    httpGET.getData(function(data){
      $scope.tours = data;
      console.log($scope.tours);
    });

    //route to tour on click
    $scope.selectedTour = function(){
        $location.path('/tours/showtour');
    };

    $scope.myInterval = 5000;
      var slides = $scope.slides = [];
      $scope.addSlide = function() {
        var newWidth = 600 + slides.length;
        slides.push({
          image: 'http://placekitten.com/' + newWidth + '/300',
          text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
      };
      for (var i=0; i<4; i++) {
        $scope.addSlide();
      }
  });
