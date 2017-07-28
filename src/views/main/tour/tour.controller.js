(function (module) {
  'use strict'
  //TODO:
  var tourController;
  tourController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'tourService', '$stateParams', 'loaderService', 'CATEGORY', 'languagereadService', 'expertiseNameService', 'timeavailabityService', 'gideService'];

  function tourController($state, $scope, $http, exploreService, LANGUAGE, tourService, $stateParams, loaderService, CATEGORY, languagereadService, expertiseNameService, timeavailabityService, gideService) {
    var vm = this;
    vm.id = $stateParams.id ? $stateParams.id : null;
    vm.tourData = {};
    vm.gideData = {};
    loaderService.showLoader();
    vm.tourData = function (id) {
      //if (vm.gideData) {
      tourService.get(id).then(function (response) {
        vm.tourData = response.data.data.tour;
        var name = vm.tourData.gide.user.firstName + vm.tourData.gide.user.lastName;
        gideService.get(name, vm.tourData.gide._id).then(function (response) {
          vm.gideData = response.data.data.gide;
          loaderService.hideLoader();
          vm.gideData.aboutme = vm.gideData.languages.en;
          var sentence = languagereadService.getLanguageName(LANGUAGE, vm.gideData.languages);
          vm.gideData.languages = sentence;
          var expertise = expertiseNameService.getExpertiseName(CATEGORY, vm.gideData.expertise);
          vm.gideData.expertise = expertise;
          var timesAvail = timeavailabityService.getTimeAvailable(vm.gideData.availability);
          vm.gideData.availability = timesAvail;
        }).catch(function (error) {});
      }).catch(function (error) {});
    };
    var init = function () {
      vm.tourData(vm.id);
    };
    init();
  }
  module.controller('Tour.controller', tourController);
})(angular.module('Citygyd.Controllers'));
