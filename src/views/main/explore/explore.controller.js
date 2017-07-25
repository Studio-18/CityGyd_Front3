(function (module) {
  'use strict'
  //TODO:
  var ExploreController;
  ExploreController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE'];

  function ExploreController($state, $scope, $http, exploreService, LANGUAGE) {
    var vm = this;
    // console.log("CONST LANG", LANGUAGE);
    vm.tourData = {};
    vm.gideData = {};
    // console.log("eplore control");
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
          // console.log("Gide response Recd", response);
          vm.gideData = data;
          vm.gideData.ratings = 5;
          var languages = [];
          for (var i = 1; i < data.length; i++) {
            for (var key in data[i].languages) {
              console.log("key", key);
              for (var a in LANGUAGE) {
//                console.log("a", a);
                if (a === key) {
                  // console.log("aa", a, key);
                  // console.log("aaaa", LANGUAGE[a]);
                  languages.push(LANGUAGE[a]);
                }
              }
            }
            vm.gideData[i].languagesa = languages;
          }
          // console.log("ddddd", vm.gideData);
        }
      });
    }
    var init = function () {
      vm.getTours();
      vm.getGides();
    };
    init();
  }
  module.controller('Explore.controller', ExploreController);
})(angular.module('Citygyd.Controllers'));
