var kramnorth = angular.module('kramnorth', [
  'ngRoute',
  'kramnorthControllers'
]);

kramnorth.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
  	delete $httpProvider.defaults.headers.common["X-Requested-With"];
  	
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
        controller: 'HomeCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      }).
      when('/blog', {
        templateUrl: 'partials/blog.html',
        controller: 'BlogCtrl'
      }).
      otherwise({
      	redirectTo: '/'
      });
  }]);