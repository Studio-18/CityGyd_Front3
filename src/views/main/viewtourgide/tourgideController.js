(function (module) {
  'use strict'
  //TODO:
  var tourgideController;
  tourgideController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE'];

  function tourgideController($state, $scope, $http, exploreService, LANGUAGE) {
    var vm = this;
    // console.log("CONST LANG", LANGUAGE);
    vm.tourData = {};
    vm.getTours = function () {
      exploreService.getTours().then(function (response) {
        if (response) {
          console.log("Response Recd for explore service..", response);
          var data = response.data.data.tours;
          vm.tourData = data;
          for (var i = 0; i < vm.tourData.length; i++) {
            vm.tourData[i].ratings = 3;
            vm.tourData[i].reviewNumbers = 83;
          }

        }
      });
    };
    var init = function(){
      vm.getTours();
    }
    init();
  }
  module.controller('tourgideController', tourgideController);
})(angular.module('Citygyd.Controllers'));
