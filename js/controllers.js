/**
 * Kramnorth: Controllers
 * 
 * @author Mark Harding
 * @copyright Kramnorth Limited 2014
 * @license Apache License V.2
 */
var kramnorthControllers = angular.module('kramnorthControllers', []);

kramnorthControllers.controller('globalCtrl', ['$scope', 'page',
  function ($scope, page) {
  	$scope.page = page;
  	page.setPage('default');
  }
]);

/**
 * The main homepage controller
 */
kramnorthControllers.controller('HomeCtrl', ['$scope', '$http', 'page',
  function ($scope, $http, page) {
  	page.setPage('home');
    /*$http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';*/
  }
]);

/**
 * The about page controller
 */
kramnorthControllers.controller('AboutCtrl', ['$scope', 'page',
  function($scope, page) {
	page.page = 'about', 
	page.title = 'About';
  }
]);

/**
 * The contact page controller
 */
kramnorthControllers.controller('ContactCtrl', ['$scope', 'page',
  function($scope, page) {
	page.page = 'contact', 
	page.title = 'Contact';
  }
]);

/**
 * The contact page controller
 */
kramnorthControllers.controller('BlogCtrl', ['$scope', '$http', 'page',
  function($scope, $http, page) {
	page.page = 'blog',
	page.title = 'Blog';
	
	$http.get('https://www.minds.com/mark/blog/?view=json&2').success(function(data) {
		$scope.blogs = data.object.blog;
    });
    
  }
]);
