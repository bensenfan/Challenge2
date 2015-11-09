'use strict';

/**
 * @ngdoc function
 * @name challenge2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the challenge2App
 */
angular.module('challenge2App')
  .controller('MainCtrl', function ($scope, $rootScope, localStorageService) {
    /*if (localStorageService.get('products')){
    	$rootScope.products = localStorageService.get('products');
    } else {
    	ProductService.query('bender');
    }*/

    $rootScope.products = localStorageService.get('products');
    $rootScope.visitedProducts = localStorageService.get('visitedProducts') || [];
    $rootScope.searchTerm = localStorageService.get('searchTerm') || '';

    /*$rootScope.$watch('products', function(){
    	// Changing local storage of products to new search
    	localStorageService.set('products', $rootScope.products);
    });*/
  });
