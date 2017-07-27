(function (module) {
  'use strict';
  var loginService;
  loginService.$inject = ['$log', '$http', 'urlFactory'];

  function loginService($log, $http, urlFactory) {
    var authenticate = function(){

    };
    
    var service = {
      authenticate: authenticate
    }
    return service;
  }
  module.factory('loginService', loginService);
}(angular.module('Citygyd.Services')));
