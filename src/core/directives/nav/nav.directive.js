(function (module) {
  navView.$inject = ['CATEGORIES', 'LANGUAGE'];

  function navView(CATEGORIES, LANGUAGE) {
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
