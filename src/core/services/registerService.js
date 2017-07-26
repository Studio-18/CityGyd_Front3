(function (module) {
  'use strict';
  var registerService;
  registerService.$inject = ['$log', '$http', 'urlFactory'];

  function registerService($log, $http, urlFactory) {
    var service = {
      getTours: getTours

    }
    return service;

    function getTours(params) {
      var lang = ''
      return $http({
        method: 'GET',
        url: urlFactory + '/tours' + lang
      });
    }
  }
  module.factory('registerService', registerService);
}(angular.module('Citygyd.Services')));
