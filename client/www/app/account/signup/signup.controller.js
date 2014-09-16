'use strict';

angular.module('wanderlustApp')
  .controller('SignupCtrl', function ($scope, $location, $window, Auth) {
    $scope.signup = function(){
        $location.path('/');
    };
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      console.log('/signup: form submitted');
      $scope.submitted = true;

      if(form.$valid) {
        console.log('/signup: form is valid');
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          console.log('/signup: account created; redirecting to \'/\'');
          $location.path('/search');
        }, function(error){
          console.log('/signup: rejected by server:', error);
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      } else {
        console.log('/signup: form not valid');
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
