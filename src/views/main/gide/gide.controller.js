(function (module) {
  'use strict'
  //TODO:
  var GideController;
  GideController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'gideService', 'GIDE', '$stateParams', 'loaderService'];

  function GideController($state, $scope, $http, exploreService, LANGUAGE, gideService, GIDE, $stateParams, loaderService) {
    var vm = this;
    vm.gidename = $stateParams.gidename;
    vm.id = $stateParams.id ? $stateParams.id : null;
    console.log("gidename", vm.gidename);
    vm.gideData = {};
    console.log("Language", LANGUAGE);
    vm.gideData = GIDE ? GIDE : {
      expertise: [],
      languages: {}
    };
    loaderService.showLoader();
    console.log("eplore control", vm.gideData);
    vm.getGideData = function (name, id) {
      if (!vm.gideData) {
        gideService.get(name, id).then(function (response) {
          vm.gideData = response.data.data;
          alert("aaa");
          loaderService.hideLoader();
        }).catch(function (error) {
          console.log("error found...", error);
        });
      } else {
        loaderService.hideLoader();
      }
    };
    var init = function () {
      vm.getGideData(vm.gidename, vm.id);
    };
    init();
  }
  module.controller('Gide.controller', GideController);
})(angular.module('Citygyd.Controllers'));
