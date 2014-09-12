// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic'])
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
      .state('search', {
        url: "/",
        templateUrl: "app/main/main.html"
      })
      .state('explore', {
        url: "/tours",
        templateUrl: "app/tours/tours.html"
      })
      .state('tour', {
        url: "/showtour",
        templateUrl: "app/tours/showtour/showtour.html"
      })
      .state('create', {
        url: "/createtour",
        templateUrl: "app/tours/createtour/createtour.html"
      })
      .state('register', {
        abstract: true,
        url: "/",
        templateUrl: "app/main/main.html"
      })
      .state('login', {
        abstract: true,
        url: "/",
        templateUrl: "app/main/main.html"
      })
      .state('logout', {
        abstract: true,
        url: "/",
        templateUrl: "app/main/main.html"
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
  })
  .controller('MenuCtrl', function($scope, $ionicSideMenuDelegate, $location) {
    $scope.goto = function(redirectURI){
      $location.path(redirectURI);
    };
  })
  .controller('ContentCtrl', function($scope, $ionicSideMenuDelegate, $location) {
    $scope.test = function(param){
      window.alert(param);
    }
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  });

