(function (module) {
  'use strict';
  var tokenSigningService;
  tokenSigningService.$inject = ['$window', '$log', 'urlFactory'];

  function tokenSigningService($window, $log, urlFactory) {
    function request(config) {
      if ($window.localStorage.getItem('TOKEN_KEY')) {
        if (config.url.indexOf(urlFactory) > -1) {
          config.headers['Authorization'] = $window.localStorage.getItem('TOKEN_KEY');
        } else {}
      }
      return config;
    }
    return {
      request: request
    };
  }
  module.factory('tokenSigningService', tokenSigningService);
}(angular.module('Citygyd.Services')));
