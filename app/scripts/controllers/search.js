'use strict';

/**
 * @ngdoc function
 * @name challenge2App.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the challenge2App
 */
angular.module('challenge2App')
  .controller('SearchCtrl', function ($scope, $rootScope, $location, $routeParams, localStorageService, ProductService) {
    $scope.search = function(){
    	//ProductService.query($scope.searchTerm);
    	$location.path('/search/'+$scope.searchTerm);
    };

    if ($routeParams.searchTerm){
    	//$scope.products = ProductService.query($routeParams.searchTerm);
	    ProductService.query($routeParams.searchTerm); //ProductService.query() sets $rootScope.products
	    localStorageService.set('searchTerm', $routeParams.searchTerm); //storing last search term

	    $rootScope.$watch('products', function(){
	    	// Changing local storage of products to new search
	    	localStorageService.set('products', $rootScope.products);
	    });
    }
  });
