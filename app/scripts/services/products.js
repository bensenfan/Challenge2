'use strict';

// Set up Products model service
angular.module('challenge2App').service('ProductService', ['$http', '$rootScope', function($http, $rootScope){
	var productService = {};

	productService.query = function(searchTerm){
		$rootScope.searchTerm = searchTerm;

		var query = 'http://api.vip.supplyhub.com:19000/products?search='+searchTerm+'&limit=10';
				
		$http.get(query).success(function(data /*, status, headers, config*/) {
      $rootScope.products = data;
    });
	};
	
	return productService;
}]);