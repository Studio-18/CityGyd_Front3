(function () {
  'use strict';
  angular.module('Citygyd', ['Citygyd.Controllers', 'Citygyd.Configs', 'Citygyd.Directives', 'Citygyd.Services', 'Citygyd.Filters', 'Citygyd.Constants', 'ui.router', 'ui.bootstrap', 'oc.lazyLoad', 'slickCarousel', '720kb.datepicker', 'ui.bootstrap', 'google.places', 'ui.bootstrap.datetimepicker', 'pascalprecht.translate']).run(function ($rootScope, $anchorScroll, $state, loginService) {
    $rootScope.$on("$locationChangeSuccess", function () {
      $anchorScroll();
      console.log("current state", $state.current.name);
      var CurrentState = $state.current.name;
      console.log("current app",loginService.isLoggedIn());
      switch (CurrentState) {

      case 'app.booking':
        alert("current state", CurrentState)
        if (!loginService.isLoggedIn()) {
          $state.go('app.login');
        }
        break;
      default:

      }
    });
  });
})();
