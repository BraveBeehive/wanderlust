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
      .state('main', {
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
        templateUrl: "app/tours/createtour/createtour.html",
        controller: 'CreatetourCtrl'
      })
      .state('tour', {
        url: "/showtour",
        templateUrl: "app/tours/showtour/showtour.html",
        controller: 'ShowtourCtrl'
      })
      .state('signup', {
        url: "/signup",
        templateUrl: "app/account/signup/signup.html",
        controller: 'SignupCtrl'
      })
      .state('login', {
        url: "/login",
        templateUrl: "app/account/login/login.html",
        controller: 'LoginCtrl'
      })
      .state('logout', {
        abstract: true,
        url: "/logout"
      })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

  })
  .controller('MenuCtrl', function($scope, $location) {
    $scope.menuWidth = 200;
    $scope.goto = function(redirectURI){
      $location.path(redirectURI);
    };
  })
  .controller('ContentCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  });
