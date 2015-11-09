'use strict';

/**
 * @ngdoc function
 * @name challenge2App.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the challenge2App
 */
angular.module('challenge2App')
  .controller('ProductsCtrl', function ($scope, $rootScope, $routeParams, localStorageService, CartService) {
    
    //Find product details
    var products = localStorageService.get('visitedProducts').concat($rootScope.products)

    $scope.product = products.find(function(el){
    	return el.product.upc.toString() === $routeParams.upc.toString();
    });

    // Adding product to cart
    $scope.addToCart = function(){
    	CartService.add($scope.product);
    };

    // Adding product to list of 10 most recently visted products

    if ($rootScope.visitedProducts){
    	//Check first if product is already visited
    	var alreadyVisited = $rootScope.visitedProducts.find(function(el){
    		return el.product.upc === $scope.product.product.upc;
    	});

    	if (!alreadyVisited) {
    		if ($rootScope.visitedProducts.length === 10){
	    		// we only keep the last 10 most visited page
	    		$rootScope.visitedProducts.pop(); 
	    	}
	    	$rootScope.visitedProducts.unshift($scope.product);
    	}
    } else {
    	$rootScope.visitedProducts = [];
    	$rootScope.visitedProducts.push($scope.product);
    }

    $rootScope.$watch('visitedProducts', function(){
    	localStorageService.set('visitedProducts', $rootScope.visitedProducts);
    })
  });
