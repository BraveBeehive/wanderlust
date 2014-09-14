'use strict';

angular.module('wanderlustApp')
  .controller('LoginCtrl', function ($scope,  $location, $window, Auth) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      console.log('/login: Attempting to log in.');
      $scope.submitted = true;

      if(form.$valid) {
        console.log('/login: form is valid.')
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          console.log('/login: Logged in, redirecting to \'/\'');
          $location.path('/');
        }, function(error){        
          console.log('/login: rejected by server',error);
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      } else {
        console.log('/login: form not valid');
      }

    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
