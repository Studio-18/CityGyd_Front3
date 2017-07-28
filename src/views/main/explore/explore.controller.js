(function (module) {
  'use strict'
  //TODO:
  var ExploreController;
  ExploreController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'loaderService', 'languagereadService', 'CATEGORY', 'expertiseNameService', '$translate'];

  function ExploreController($state, $scope, $http, exploreService, LANGUAGE, loaderService, languagereadService, CATEGORY, expertiseNameService, $translate) {
    var vm = this;
    vm.tourData = {};
    console.log($translate.use('en'));
        $translate.use('zh');
    vm.gideData = {};
    loaderService.showLoader();
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
                  $translate.use('ko');
          loaderService.hideLoader();
          $scope.slickConfig = {
            enabled: true,
            autoplay: false,
            draggable: true,
            autoplaySpeed: 3000,
            slidesToShow: 5,
            method: {},
            arrows: true,
            responsive: [{
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                // dots: true
              }
            }, {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }, {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1
              }
            }],
            event: {
              beforeChange: function (event, slick, currentSlide, nextSlide) {},
              afterChange: function (event, slick, currentSlide, nextSlide) {}
            }
          };
        }
      });
    };
    vm.getGides = function () {
      exploreService.getGides().then(function (response) {
        if (response) {
          var data = response.data.data.gides;
          loaderService.hideLoader();
          vm.gideData = data;
          vm.gideData.ratings = 5;
          var languages = [];
          for (var i = 0; i < data.length; i++) {
            var sentence = languagereadService.getLanguageName(LANGUAGE, vm.gideData[i].languages);
            vm.gideData[i].languages = sentence;
           var expertise = expertiseNameService.getExpertiseName(CATEGORY, vm.gideData[i].expertise);
           vm.gideData[i].expertise = expertise;

          }
        }
      });
    };
    var init = function () {
      vm.getTours();
      vm.getGides();
    };
    init();
  }
  module.controller('Explore.controller', ExploreController);
})(angular.module('Citygyd.Controllers'));
