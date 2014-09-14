'use strict';

angular.module('wanderlustApp')
  .config(function ($stateProvider) {
    console.log('/tours/createtour: CreatetourCtrl is going to start.');
    $stateProvider
      .state('createtour', {
        url: '/tours/createtour',
        templateUrl: '/app/tours/createtour/createtour.html',
        controller: 'CreatetourCtrl'
      });
  })
  .directive('wdlSpot', function() {
    return {
      restrict: 'E',
      controller: function($scope, $upload) {
        // Define tags
        $scope.tags = ['free', 'paid', 'indoors', 'outside', 'photograph', 'adventure', 'food', 'drink'];

        // Add upload pictures to imgur
        $scope.onFileSelect = function($files) {
          var onload = function(e) {
            $upload.http({
              url: 'https://api.imgur.com/3/image',
              headers: {
                'Authorization': 'Client-ID 2b28684e6b6d23c',
                // 'Content-Type': file.type // used to be file.type
              },
              data: e.target.result
            }).progress(function(evt) {
              $scope.spot.progress = parseInt(100.0 * evt.loaded / evt.total);
              // console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
              // file is uploaded successfully
              console.log('upload successful!', data, status, headers, config);
              // Add data.link to $scope.spot[$index].imgurl
              $scope.spot.imgurl = data.data.link;
            }).error(function(data) {
              console.error(data);
            });
          };
          //$files: an array of files selected, each file has name, size, and type.
          for (var i = 0; i < $files.length; i++) {
            var file = $files[i];
            var fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = onload;
            console.log('image content-type', file.type);
          }
        };
      },
      templateUrl: 'app/tours/createtour/wdlSpot.directive.html'
    };
  });
