var myApp = angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl: 'home'
	});
	$routeProvider.otherwise({redirectTo:'/home'});
}]);