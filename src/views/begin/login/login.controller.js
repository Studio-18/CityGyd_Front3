(function (module) {
  'use strict'
  var loginController;
  loginController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'loaderService', 'languagereadService', 'CATEGORY', 'expertiseNameService'];

  function loginController($state, $scope, $http, exploreService, LANGUAGE, loaderService, languagereadService, CATEGORY, expertiseNameService) {
    var vm = this;
    vm.formisValid = "";
    vm.formValid = false;
    vm.email = '';
    vm.password = '';

    vm.authenticate = function () {

    };
  }
  module.controller('loginController', loginController);
})(angular.module('Citygyd.Controllers'));
