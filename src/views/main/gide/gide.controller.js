(function (module) {
  'use strict'
  //TODO:
  var GideController;
  GideController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'gideService', 'GIDE', '$stateParams', 'loaderService', 'CATEGORY', 'languagereadService', 'expertiseNameService', 'timeavailabityService'];

  function GideController($state, $scope, $http, exploreService, LANGUAGE, gideService, GIDE, $stateParams, loaderService, CATEGORY, languagereadService, expertiseNameService, timeavailabityService) {
    var vm = this;
    vm.gidename = $stateParams.gidename;
    vm.id = $stateParams.id ? $stateParams.id : null;
    vm.gideData = {};
    // vm.gideData = GIDE ? GIDE : {
    //   expertise: [],
    //   languages: {}
    // };
    loaderService.showLoader();

    vm.getGideData = function (name, id) {
      //if (vm.gideData) {
        gideService.get(name, id).then(function (response) {
          vm.gideData = response.data.data.gide;

          loaderService.hideLoader();
          vm.gideData.aboutme = vm.gideData.languages.en;

          var sentence = languagereadService.getLanguageName(LANGUAGE, vm.gideData.languages);
          vm.gideData.languages = sentence;
         var expertise = expertiseNameService.getExpertiseName(CATEGORY, vm.gideData.expertise);
         vm.gideData.expertise = expertise;

         var timesAvail = timeavailabityService.getTimeAvailable(vm.gideData.availability);

         vm.gideData.availability = timesAvail;

        }).catch(function (error) {

        });
      // } else {
      //   loaderService.hideLoader();
      // }
    };
    var init = function () {
      vm.getGideData(vm.gidename, vm.id);
    };
    init();
  }
  module.controller('Gide.controller', GideController);
})(angular.module('Citygyd.Controllers'));
