var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/orders',{
		templateUrl: 'orders'
	});
	$routeProvider.otherwise({redirectTo:'/orders'});
}]);

myApp.factory('$ordersFactory',function(){
	var orders = []
	, names = []
	, i
	, j = groupon.orders.records
	;
	for (i in j) {
		orders.push(new Order(j[i]));
		if (!names[Name(j[i])]) {
			names[Name(j[i])] = 1;
			console.log(Name(j[i]));
		} else {
			names[Name(j[i])]++;
		}
	}
	return {
		getOrders: function () {
			return orders;
		}
	};
});

myApp.controller('OrdersController',['$scope','$ordersFactory',function($scope,$ordersFactory){
	$scope.orders = $ordersFactory.getOrders();
}]);

function Order (o) {
	var i = o.group[0].informations;
	var m = o.measures;
	this.oid = i.BillingId;
	this.sid = i.Sid || 'unknown';
	this.name = i.DealListName;
	this.credit = m.LedgerCredit;
	this.debit = m.LedgerDebit;
	this.sale = m.LedgerAmount;
	this.status = i.Status;
}

function Name (n) {
	return n.group[0].informations.DealListName;
}