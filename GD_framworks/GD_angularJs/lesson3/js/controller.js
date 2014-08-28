var myapp = angular.module("myapp", []);
myapp.controller("HelloController", function($scope) {
	$scope.helloTo = {};
	$scope.helloTo.title = "World, AngularJS";
	$scope.helloTo.showIt = true;
	$scope.helloTo.swit = "3";
	
});