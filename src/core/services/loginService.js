(function (module) {
  'use strict';
  var loginService;
  loginService.$inject = ['$log', '$http', 'urlFactory', 'tokenService', 'dataService'];

  function loginService($log, $http, urlFactory, tokenService, dataService) {
    var authenticate = function(data){
      return $http({
        method: 'POST',
        url: urlFactory + '/authenticate',
        data: data
      })
      .then(function(res) {
        console.log(res, 'here')
        if (!res.data.error) {
          console.log("success", res)
          tokenService.storeToken(res.data.data.token);
          dataService.store('USER', res.data.data.user)
          if (res.data.data.gide) {
            dataService.store('GIDE', res.data.data.gide)
          }
        }
        return res;
      })


    };

    var service = {
      authenticate: authenticate
    }
    return service;
  }
  module.factory('loginService', loginService);
}(angular.module('Citygyd.Services')));
