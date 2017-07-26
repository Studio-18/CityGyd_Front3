(function (module) {
  'use strict'
  //TODO:
  var signupController;
  signupController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'loaderService', 'languagereadService', 'CATEGORY', 'expertiseNameService'];

  function signupController($state, $scope, $http, exploreService, LANGUAGE, loaderService, languagereadService, CATEGORY, expertiseNameService) {
    var vm = this;
    vm.formisValid ="";
    vm.formStep = 1;
    vm.formValid = false;
    vm.tourData = {};
    vm.register = function(){
    console.log("from valid status", vm.formValid);
      // if(vm.formValid){
          vm.formisValid ="";
          vm.formStep = 2;

      // }else{
          // vm.formisValid ="Please fill the form again properly";
      // }

    }



  }
  module.controller('signupController', signupController);
})(angular.module('Citygyd.Controllers'));
