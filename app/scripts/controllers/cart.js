'use strict';

/**
 * @ngdoc function
 * @name challenge2App.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the challenge2App
 */
angular.module('challenge2App')
  .controller('CartCtrl', function ($scope, $rootScope, localStorageService) {
  	$rootScope.cart = localStorageService.get('cart') || [];
    $scope.products = $rootScope.cart;

    $rootScope.$watch('cart', function(){
    	console.log('cart change');
    	localStorageService.set('cart', $rootScope.cart);
    }, true);
  });
