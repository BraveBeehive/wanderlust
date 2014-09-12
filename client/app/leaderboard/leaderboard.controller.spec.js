'use strict';

describe('Controller: LeaderboardCtrl', function () {

  // load the controller's module
  beforeEach(module('wanderlustApp'));

  var LeaderboardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeaderboardCtrl = $controller('LeaderboardCtrl', {
      $scope: scope
    });
  }));

  // it('should ...', function () {
  //   console.log(scope.tours);
  //   expect(1).toEqual(1);
  // });
});
