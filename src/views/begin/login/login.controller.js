(function (module) {
  'use strict'
  var loginController;
  loginController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'loaderService', 'languagereadService', 'CATEGORY', 'expertiseNameService', 'loginService'];

  function loginController($state, $scope, $http, exploreService, LANGUAGE, loaderService, languagereadService, CATEGORY, expertiseNameService, loginService) {
    var vm = this;
    vm.formisValid = "";
    vm.formValid = false;
    vm.formData = {
      email: '',
      password: ''
    };
    vm.error = '';
    vm.email = '';
    vm.password = '';
    vm.authenticate = function () {
      loginService.authenticate().then(function (response) {
        if (response) {}
      }).catch(function (error) {
        vm.error = " Unable to process because of " + error;
      });
    };
  }
  module.controller('loginController', loginController);
})(angular.module('Citygyd.Controllers'));
