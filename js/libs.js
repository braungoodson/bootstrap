var myApp = angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl: 'home'
	});
	$routeProvider.otherwise({redirectTo:'/home'});
}]);
myApp.controller('MasterController',['$scope','$http',function($scope,$http){
	console.log("MasterController");
	/*

		$http({method: 'GET', url: '/someUrl'}).
	    success(function(data, status, headers, config) {
	      // this callback will be called asynchronously
	      // when the response is available
	    }).
	    error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	    });

	*/

	$http({method:'GET',url:'http://localhost:30000'})
		.success(function(d,s,h,c){
			console.log(d);
		})
}]);