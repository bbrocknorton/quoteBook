var app = angular.module('quoteBook');

app.service('mainService', function($http) {
  var data = 'dallas is the shit';

  this.getUsers = function() {
    return data;
  }

});