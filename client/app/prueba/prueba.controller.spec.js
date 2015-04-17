'use strict';

describe('Controller: PruebaCtrl', function () {

  // load the controller's module
  beforeEach(module('roodApp'));

  var PruebaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PruebaCtrl = $controller('PruebaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
