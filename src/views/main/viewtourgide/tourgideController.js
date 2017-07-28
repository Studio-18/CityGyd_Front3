(function (module) {
  'use strict'
  //TODO:
  var tourgideController;
  tourgideController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'loaderService', 'expertiseNameService', 'languagereadService', 'CATEGORY'];

  function tourgideController($state, $scope, $http, exploreService, LANGUAGE, loaderService, expertiseNameService, languagereadService, CATEGORY) {
    var vm = this;
    $scope.$route = $state;
    loaderService.showLoader();
    vm.tourData = {};
    vm.gideData = {};
    vm.getTours = function () {
      exploreService.getTours().then(function (response) {
        if (response) {
          var data = response.data.data.tours;
          vm.tourData = data;
          for (var i = 0; i < vm.tourData.length; i++) {
            vm.tourData[i].ratings = 3;
            vm.tourData[i].reviewNumbers = 83;
            var sentence = languagereadService.getLanguageName(LANGUAGE, vm.tourData[i].language);
            vm.tourData[i].language = sentence;
          }
          loaderService.hideLoader();
        }
      });
    };
    vm.getGides = function () {
      exploreService.getGides().then(function (response) {
        if (response) {
          var data = response.data.data.gides;
          vm.gideData = data;
          vm.gideData.ratings = 5;
          var languages = [];
          for (var i = 0; i < data.length; i++) {
            var sentence = languagereadService.getLanguageName(LANGUAGE, vm.gideData[i].languages);
            vm.gideData[i].languages = sentence;
            var expertise = expertiseNameService.getExpertiseName(CATEGORY, vm.gideData[i].expertise);
            vm.gideData[i].expertise = expertise;
          }
          loaderService.hideLoader();
        }
      });
    };
    var init = function () {
      if ($state.current.name === 'app.tourgide.tours') vm.getTours();
      else vm.getGides();
    }
    init();
  }
  module.controller('tourgideController', tourgideController);
})(angular.module('Citygyd.Controllers'));
