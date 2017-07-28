(function (module) {
  'use strict'
  var loginController;
  loginController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'loaderService', 'languagereadService', 'CATEGORY', 'expertiseNameService', 'loginService'];

  function loginController($state, $scope, $http, exploreService, LANGUAGE, loaderService, languagereadService, CATEGORY, expertiseNameService, loginService) {
    var vm = this;
    vm.formisValid = "";
    vm.formValid = false;
    vm.formData = {
      email: 'pmcochrane@gmail.com',
      password: 'studio18'
    };
    vm.error = '';
    vm.authenticate = function () {
           loaderService.showLoader();
      loginService.authenticate(vm.formData).then(function (response) {
        console.log("response recd", response);
        //                loaderService.hideLoader();
        if (response) {
          console.log("response recd", response);
          loaderService.hideLoader();
          $state.go('app.explore-tours');
        }
      }).catch(function (error) {
        vm.error = " Unable to process because of " + error;
      });
    };
  }
  module.controller('loginController', loginController);
})(angular.module('Citygyd.Controllers'));
