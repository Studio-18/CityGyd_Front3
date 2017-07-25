(function (module) {
  'use strict'
  //TODO:
  var GideController;
  GideController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'gideService', 'GIDE', '$stateParams'];

  function GideController($state, $scope, $http, exploreService, LANGUAGE, gideService, GIDE, $stateParams) {
    var vm = this;
    vm.gidename=  $stateParams.gidename;
    vm.id=  $stateParams.id ? $stateParams.id : null;
    console.log("gidename", vm.gidename);
    vm.gideData = {};
    console.log("Language", LANGUAGE);
    vm.gideData = GIDE
      ? GIDE
      : {
        expertise: [],
        languages: {}
      };
    console.log("eplore control", vm.gideData);
    vm.getGideData = function(name, id){
      if(!vm.gideData){


      gideService.get(name,id).then(function(response){
        vm.gideData = response.data.data;

      }).catch(function(error){
        console.log("error found...", error);
      });
    }else{

    }


    };

    var init = function () {
      vm.getGideData(vm.gidename,vm.id);

    };
    init();
  }
  module.controller('Gide.controller', GideController);
})(angular.module('Citygyd.Controllers'));
