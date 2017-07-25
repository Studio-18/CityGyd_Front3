(function (module) {
  'use strict';
  var tourService;
  tourService.$inject = ['$log', '$http', 'urlFactory'];

  function tourService($log, $http, urlFactory) {
    function get(id) {
      return $http({
        method: 'GET',
        url: urlFactory + '/tours?_id=' + id
      });
    }

    function getByGide(id) {
      return $http({
        method: 'GET',
        url: urlFactory + '/tours?_gide=' + id
      });
    }

    function edit(data) {
      return $http({
        method: 'PUT',
        url: urlFactory + '/tours/',
        data: {
          id: data._id,
          updates: data
        }
      });
    }

    function create(data) {
      return $http({
        method: 'POST',
        url: urlFactory + '/tours/',
        data: data
      });
    }
    var service = {
      get: get,
      getByGide: getByGide,
      edit: edit,
      create: create
    }
    return service;
  }
  module.factory('tourService', tourService);
}(angular.module('Citygyd.Services')));
