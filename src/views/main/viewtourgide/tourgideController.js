(function (module) {
  'use strict'
  //TODO:
  var tourgideController;
  tourgideController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'loaderService'];

  function tourgideController($state, $scope, $http, exploreService, LANGUAGE, loaderService) {
    var vm = this;
    // console.log("CONST LANG", LANGUAGE);
    $scope.$route = $state;
    loaderService.showLoader();
    console.log("state", $scope.$route);
    vm.tourData = {};
    vm.gideData = {};
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
         loaderService.hideLoader();
        }
      });
    };
    vm.getGides = function () {
      exploreService.getGides().then(function (response) {
        if (response) {
          var data = response.data.data.gides;
          // console.log("Gide response Recd", response);
          vm.gideData = data;
          vm.gideData.ratings = 5;
          var languages = [];
          console.log("gide data here", vm.gideData);
         loaderService.hideLoader();
        }
      });
    };
    var init = function () {
      vm.getTours();
      vm.getGides();
    }
    init();
  }
  module.controller('tourgideController', tourgideController);
})(angular.module('Citygyd.Controllers'));
