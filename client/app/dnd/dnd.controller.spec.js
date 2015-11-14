'use strict';

describe('Controller: DndCtrl', function () {

  // load the controller's module
  beforeEach(module('roodApp'));

  var DndCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DndCtrl = $controller('DndCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
