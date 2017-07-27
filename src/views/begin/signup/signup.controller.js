(function (module) {
  'use strict'
  //TODO:
  var signupController;
  signupController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'loaderService', 'languagereadService', 'CATEGORY', 'expertiseNameService'];

  function signupController($state, $scope, $http, exploreService, LANGUAGE, loaderService, languagereadService, CATEGORY, expertiseNameService) {
    var vm = this;
    vm.formisValid = "";
    vm.formStep = 1;
    vm.formValid = false;
    vm.checkboxChecked = true;
    vm.password = '';
    vm.cnfmpassword = '';
    vm.comparepassword = false;
    vm.tourData = {};
    vm.formValid_sec = false
    vm.register = function () {
      console.log("from valid status", vm.formValid);
      if (vm.formValid) {
        vm.formisValid = "";
        console.log(vm.password, vm.cnfmpassword);
        if (vm.password !== vm.cnfmpassword) {
          vm.comparepassword = true;
        }
        if (vm.terms) {
          vm.checkboxChecked = false;
          vm.formStep = 2;
        }
      } else {
        vm.formisValid = "Please fill the form again properly";
      }
    };
    vm.updatebasic= function(){
      if(vm.formValid_sec){
        vm.formisValiderror = '';
      }else{
        vm.formisValiderror = 'Please fill the form again. ';
      }

    };
  }
  module.controller('signupController', signupController);
})(angular.module('Citygyd.Controllers'));
