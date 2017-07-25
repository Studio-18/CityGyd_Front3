(function (module) {
  function footerTour() {

    return {
      templateUrl: 'core/directives/footer/footer.html',
      scope: {

      },
      link: function (scope) {}
    };
  }
  module.directive('footerTour', footerTour);
})(angular.module('Citygyd.Directives'));
