var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/orders',{
		templateUrl: 'orders'
	});
	$routeProvider.otherwise({redirectTo:'/orders'});
}]);

myApp.factory('$ordersFactory',function(){
	var orders = []
	, i
	, j = groupon.orders.records
	;
	for (i in j) {
		orders.push(new Order(j[i]));
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
	this.ledgerCredit = m.LedgerCredit;
	this.ledgerDebit = m.LedgerDebit;
	this.ledger = m.LedgerAmount;
	this.sale = m.SaleGrossAmount;
	this.status = i.Status;
}