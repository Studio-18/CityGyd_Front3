(function (module) {
  navView.$inject = ['CATEGORIES', 'LANGUAGE'];

  function navView(CATEGORIES, LANGUAGE) {
    console.log("tours");
    return {
      templateUrl: 'core/directives/nav/nav.html',
      scope: {

      },
      link: function (scope) {

      }
    };
  }
  module.directive('navView', navView);
})(angular.module('Citygyd.Directives'));
