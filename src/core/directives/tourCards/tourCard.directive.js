(function (module) {
  tourCard.$inject = ['CATEGORIES', 'LANGUAGE'];

  function tourCard(CATEGORIES, LANGUAGE) {
    console.log("tours");
    return {
      templateUrl: 'core/directives/tourCards/tourCard.html',
      scope: {
        tour: '='
      },
      link: function (scope) {

      }
    };
  }
  module.directive('tourCard', tourCard);
})(angular.module('Citygyd.Directives'));
