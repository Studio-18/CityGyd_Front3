(function (module) {
  httpInterceptor.$inject = ['$httpProvider'];

  function httpInterceptor($httpProvider) {
    $httpProvider.interceptors.push('tokenSigningService');
  }
  module.config(httpInterceptor);
}(angular.module('Citygyd.Configs')));
