(function (module) {
  gideCard.$inject = ['CATEGORIES', 'LANGUAGE'];

  function gideCard(CATEGORIES, LANGUAGE) {
    console.log("tours");
    return {
      templateUrl: 'core/directives/gideCards/gideCard.html',
      scope: {
        gide: '='
      },
      link: function (scope) {

      }
    };
  }
  module.directive('gideCard', gideCard);
})(angular.module('Citygyd.Directives'));
