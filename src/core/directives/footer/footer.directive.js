(function (module) {
  function footerTour() {

    return {
      templateUrl: 'core/directives/footer/footer.html',
      scope: {
        gide: '='
      },
      link: function (scope) {}
    };
  }
  module.directive('footerTour', footerTour);
})(angular.module('Citygyd.Directives'));
