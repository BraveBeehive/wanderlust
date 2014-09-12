// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', [
  'ionic'
  ])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        url: "/",
        templateUrl: "app/main/main.html",
        controller: 'MainCtrl'
      })
      .state('tours', {
        url: "/tours",
        templateUrl: "app/tours/tours.html",
        controller: 'ToursCtrl'
      })
      .state('createtour', {
        url: "/createtour",
        templateUrl: "app/tours/createtour/createtour.html"
      })
      .state('explore', {
        url: "/tours",
        templateUrl: "app/tours/tours.html"
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

  })
  .controller('ExploreCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.test = "Hello World";
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  })

  .controller('MainCtrl', function($scope, $state) {

    $scope.navToToursByLocation = function() {
      // Value of $scope.location can be found in tours' $stateParams
      console.log("this click works");
      console.log($scope.location, "this is $scope.location");
      $state.go('explore', $scope.location);
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

  .controller('ToursCtrl', ['$scope', '$location', '$state', '$http', 'httpGET', function($scope, $location, $state, $http, httpGET) {
    
    httpGET.getData(function(data){
      $scope.tours = data;
      console.log($scope.tours);
    });

    //route to tour on click
    $scope.selectedTour = function(){
        $location.path('/tours/showtour');
    };

    $scope.myInterval = 5000;

    $scope.navToCreateTour = function() {
      console.log($scope.location, "this is $scope.location");
      $state.go('createtour', $scope.location);
    }

  }]);

