(function (module) {
  'use strict'
  //TODO:
  var bookingController;
  bookingController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'tourService', '$stateParams', 'loaderService', 'CATEGORY', 'languagereadService', 'expertiseNameService', 'timeavailabityService', 'gideService'];

  function bookingController($state, $scope, $http, exploreService, LANGUAGE, tourService, $stateParams, loaderService, CATEGORY, languagereadService, expertiseNameService, timeavailabityService, gideService) {
    var vm = this;
    vm.id = $stateParams.id ? $stateParams.id : null;
    vm.bookingPrice = 0;
    vm.bookinghours = '';
    vm.numberofhours = [];
    vm.currentDate = new Date().toDateString();
    loaderService.showLoader();
    loaderService.hideLoader();
    vm.isOpen = false;
    vm.isDateOpen = false;
    vm.openCalendar = function (e) {
      e.preventDefault();
      e.stopPropagation();
      vm.isOpen = true;
    };
    vm.openDateCalendar = function (e) {
      e.preventDefault();
      e.stopPropagation();
      vm.isDateOpen = true;
    }
    vm.tourData = function (id) {
      tourService.get(id).then(function (response) {
        vm.tourData = response.data.data.tour;
      }).catch(function (error) {});
    };
    var initNumbofHours = function () {
      for (var i = 1; i < 9; i++) {
        vm.numberofhours.push(i);
      }
    };
    var init = function () {
      vm.tourData(vm.id);
      initNumbofHours();
    };
    init();
  }
  module.controller('Booking.controller', bookingController);
})(angular.module('Citygyd.Controllers'));
