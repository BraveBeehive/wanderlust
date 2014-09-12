// angular.module('starter.controllers', [])

// .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
//   // Form data for the login modal
//   $scope.loginData = {};

//   // Create the login modal that we will use later
//   $ionicModal.fromTemplateUrl('templates/login.html', {
//     scope: $scope
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });

//   // Triggered in the login modal to close it
//   $scope.closeLogin = function() {
//     $scope.modal.hide();
//   };

//   // Open the login modal
//   $scope.login = function() {
//     $scope.modal.show();
//   };

//   // Perform the login action when the user submits the login form
//   $scope.doLogin = function() {
//     console.log('Doing login', $scope.loginData);

//     // Simulate a login delay. Remove this and replace with your login
//     // code if using a login system
//     $timeout(function() {
//       $scope.closeLogin();
//     }, 1000);
//   };
// })

// .controller('PlaylistsCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'Lobster', id: 1 },
//     { title: 'Chili', id: 2 },
//     { title: 'Corndogs', id: 3 },
//   ];
// })

// .controller('PlaylistCtrl', function($scope, $stateParams) {
// })

// // .controller('MainCtrl', function($scope, $state) {

// //   $scope.navToToursByLocation = function() {
// //     // Value of $scope.location can be found in tours' $stateParams
// //     $state.go('tours', $scope.location);
// //   };
// // })

// .directive('starRating', function(){
//   return {
//     restrict: 'E',
//     template: '<span class="glyphicon glyphicon-star"></span>'
//   };
// })

// .directive('tagPrice', function(){
//   return {
//     restrict: 'E',
//     template: '<span class="glyphicon glyphicon-usd"></span>'
//   };
// })

// .directive('tagCamera', function(){
//   return {
//     restrict: 'E',
//     template: '<span class="glyphicon glyphicon-camera"></span>'
//   };
// })

// .directive('tagTree', function(){
//   return {
//     restrict: 'E',
//     template: '<span class="glyphicon glyphicon-tree-conifer"></span>'
//   };
// })

// .factory('httpGET', function($http){
//   return {
//     getData: function(callback){
//       return $http({
//         method: 'GET',
//         url: '/api/tours'
//         }).success(function(data){
//           callback(data);
//         });
//     }
//   };
// })

// .controller('ToursCtrl', function ($scope, $location, $http, httpGET) {
  
//   httpGET.getData(function(data){
//     $scope.tours = data;
//     console.log($scope.tours);
//   });

//   //route to tour on click
//   $scope.selectedTour = function(){
//       $location.path('/tours/showtour');
//   };

//   $scope.myInterval = 5000;
// });
