(function () {
  'use strict';
  angular.module('Citygyd', ['Citygyd.Controllers', 'Citygyd.Configs', 'Citygyd.Directives', 'Citygyd.Services', 'Citygyd.Filters', 'Citygyd.Constants', 'ui.router', 'ui.bootstrap', 'oc.lazyLoad', 'slickCarousel']).run(["$rootScope", '$anchorScroll', function($rootScope, $anchorScroll){
    $rootScope.$on("$locationChangeSuccess", function(){
      $anchorScroll();

    });

  }]);
})();
