(function (module) {
  meetUpCard.$inject = ['CATEGORIES', 'LANGUAGE'];

  function meetUpCard(CATEGORIES, LANGUAGE) {
    console.log("tours");
    return {
      templateUrl: 'core/directives/meetUpCards/meetUpCard.html',
      scope: {
        tour: '='
      },
      link: function (scope) {

      }
    };
  }
  module.directive('meetUpCard', meetUpCard);
})(angular.module('Citygyd.Directives'));
