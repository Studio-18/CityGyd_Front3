(function (module) {
  'use strict';
  var tokenService;
  tokenService.$inject = ['$log', '$http', 'urlFactory', '$window'];

  function tokenService($log, $http, urlFactory, $window) {


    function storeToken(token) {

      $window.localStorage.removeItem('TOKEN_KEY');
      $window.localStorage.setItem('TOKEN_KEY', token);
//      return token;
    }


    var service = {
      storeToken: storeToken
    }
    return service;
  }
  module.factory('tokenService', tokenService);
}(angular.module('Citygyd.Services')));
