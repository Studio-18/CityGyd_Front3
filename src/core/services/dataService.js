(function (module) {
  'use strict';
  var dataService;
  dataService.$inject = ['$log', '$http', 'urlFactory', '$window'];

  function dataService($log, $http, urlFactory, $window) {


    function store(key,data) {
      $window.localStorage.removeItem(key);
      $window.localStorage.setItem(key, JSON.stringify(data));
      return JSON.stringify(data);
    }


    var service = {
      store: store
    }
    return service;
  }
  module.factory('dataService', dataService);
}(angular.module('Citygyd.Services')));
