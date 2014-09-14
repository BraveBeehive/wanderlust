'use strict';

angular.module('wanderlustApp')
  .controller('SignupCtrl', function ($scope, $location, $window, Auth) {
    $scope.signup = function(){
        $location.path('/');
    };
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      console.log('submitted form:', form);
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
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
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
