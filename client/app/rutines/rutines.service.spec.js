'use strict';

describe('Service: rutines', function () {

  // load the service's module
  beforeEach(module('roodApp'));

  // instantiate service
  var rutines;
  beforeEach(inject(function (_rutines_) {
    rutines = _rutines_;
  }));

  it('should do something', function () {
    expect(!!rutines).toBe(true);
  });

});
