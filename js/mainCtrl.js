var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService) {
	$scope.test = mainService.getUsers();
});