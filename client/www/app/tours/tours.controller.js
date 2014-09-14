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

  .controller('ToursCtrl', function ($scope, $location, $http, getTours) {
    
    // httpGET.getData(function(data){
    //   $scope.tours = data;
    //   console.log($scope.tours);
    // });

    $scope.tours = getTours.tours;
    console.log($scope.tours, "this is $scope.tours");
    console.log(getTours, "this is getTours");

    // $scope.tours = [{
    //     name: 'Defeat the Elite Four',
    //     author: 'Ash Ketchum',
    //     length: '2-3 Hours',
    //     description: 'Note all clues hitherto are bounded by the following streets: 16th and 26th and Dolores and one after Balmy (referred to as The Mission). Hint: a majority of the spots lie on or very close to Valencia. The attendees of the scavenger hunt will be referred to as the “Scavengers”. DISCLAIMER: once The Hunt has begun, the use of any smartphone technology for navigational purposes will be frowned upon.',
    //     spots: [
    //       {
    //         number: 1,
    //         info: 'Obtain a wooden sword from a pirate shop',
    //         points: '10',
    //       },
    //       {
    //         number: 2,
    //         info: 'Find the following graffiti',
    //         points: '5'
    //       },
    //       {
    //         number: 3,
    //         info: 'Catch Pikachu',
    //         points: '20'
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Places I Have Eaten',
    //     author: 'Jonathan Warrick',
    //     length: 'All day',
    //     description: 'A few places I have eaten at during the last month.',
    //     spots: [
    //       {
    //         number: 1,
    //         info: 'Eat some banh mi.',
    //         points: 5,
    //         address: '560 Larkin St, San Francisco, CA 94102',
    //         latitude: 37.7836377,
    //         longitude: -122.4132168
    //       },
    //       {
    //         number: 2,
    //         info: 'Eat some Indian.',
    //         points: 10,
    //         address: '336 O\'Farrell St, San Francisco, CA 94102',
    //         latitude: 37.7850504,
    //         longitude: -122.4146064
    //       },
    //       {
    //         number: 3,
    //         info: 'Eat the best fast-food burger ever!',
    //         points: 10,
    //         address: '333 Jefferson St, San Francisco, CA 94133',
    //         latitude: 37.807735,
    //         longitude: -122.418553
    //       }
    //     ]
    //   }
    // ];

    //route to tour on click
    $scope.selectedTour = function(){
        $location.path('/showtour');
    };

    $scope.navToCreateTour = function(){
      $location.path('/createtour');
    };

    $scope.myInterval = 5000;
  });
