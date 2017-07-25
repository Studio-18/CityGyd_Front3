(function (module) {
  meetupCard.$inject = ['CATEGORIES', 'LANGUAGE'];

  function meetupCard(CATEGORIES, LANGUAGE) {
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
  module.directive('meetupCard', meetupCard);
})(angular.module('Citygyd.Directives'));
