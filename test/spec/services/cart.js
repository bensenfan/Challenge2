'use strict';

describe('Service: cart', function () {

  // load the service's module
  beforeEach(module('challenge2App'));

  // instantiate service
  var cart;
  beforeEach(inject(function (_cart_) {
    cart = _cart_;
  }));

  it('should do something', function () {
    expect(!!cart).toBe(true);
  });

});
