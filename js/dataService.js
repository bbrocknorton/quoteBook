var app = angular.module('quoteBook');

app.service('mainService', function($http) {
	var quotes = [];

	this.getUsers = function() {
		return quotes;
	}
	this.getData = function() {
		return (quotes.text);
	}
	this.addData = function() {
		if (quotes.text === true && quotes.author === true) {
			quotes.push[i].length;
		}
	}
	this.removeData = function(arr) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === arr) {
				splice.quotes(0, 1);
			}
		}
	}

});