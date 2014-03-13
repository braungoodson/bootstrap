var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/actions',{
		templateUrl: 'actions'
	});
	$routeProvider.otherwise({redirectTo:'/actions'});
}]);

myApp.factory('$actionsFactory',function(){
	var actions = []
	, i
	, j
	, k = irDgm.responses
	, l
	;
	for (i in k) {
		l = k[i].Action;
		for (j in l) {
			actions.push(new Action(l[j]));
		}
	}
	return {
		getactions: function () {
			return actions;
		}
	};
});

myApp.controller('ActionsController',['$scope','$actionsFactory',function($scope,$actionsFactory){
	$scope.actions = $actionsFactory.getactions();
}]);

function Action (a) {
	this.status = a.Status;
	this.state = a.State;
	this.lockedStatus = a.LockedStatus;
	this.payout = a.Payout;
	this.deltaPayout = a.DeltaPayout;
	this.intendedPayout = a.IntendedPayout;
	this.amount = a.Amount;
	this.deltaAmount = a.DeltaAmount;
	this.intendedAmount = a.IntendedAmount;
}