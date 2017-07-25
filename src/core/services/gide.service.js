(function (module) {
  'use strict';
  var gideService;
  gideService.$inject = ['$log', '$http', 'urlFactory'];

  function gideService($log, $http, urlFactory) {
    var service = {
      get: get
    }
    return service;

    function get(gide_name, gide_id) {
      if (gide_id != null) {
        return $http({
          method: 'GET',
          url: urlFactory + '/gides?_id=' + gide_id
        });
      } else if (gide_name != null) {
        return $http({
          method: 'GET',
          url: urlFactory + '/gides?gidename=' + gide_name
        });
      }
    };
  }
  module.factory('gideService', gideService);
}(angular.module('Citygyd.Services')));
