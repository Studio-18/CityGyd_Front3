(function (module) {
  meetupCard.$inject = ['CATEGORIES', 'LANGUAGE'];

  function meetupCard(CATEGORIES, LANGUAGE) {
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
