'use strict';

/**
 * @ngdoc service
 * @name challenge2App.cart
 * @description
 * # cart
 * Service in the challenge2App.
 */
angular.module('challenge2App')
  .service('CartService', ['$rootScope', function ($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var cartService = {};

    cartService.add = function(product){
    	$rootScope.cart.push(product);
    };

    return cartService;
  }]);
