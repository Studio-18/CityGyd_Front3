(function (module) {
    'use strict'
    var signupController;
    signupController.$inject = ['$state', '$scope', '$http', 'exploreService', 'LANGUAGE', 'gideService', 'GIDE', '$stateParams', 'loaderService', 'CATEGORY', 'languagereadService', 'expertiseNameService', 'timeavailabityService'];

    function signupController($state, $scope, $http, exploreService, LANGUAGE, gideService, GIDE, $stateParams, loaderService, CATEGORY, languagereadService, expertiseNameService, timeavailabityService) {
      var vm = this;
    };
    var init = function () {};
    init();
  }
  module.controller('Gide.controller', signupController);
})(angular.module('Citygyd.Controllers'));
