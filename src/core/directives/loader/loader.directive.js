(function (module) {
  'use strict';
  loader.$inject = ['loaderService'];

  function loader(loaderService) {
    return {
      restrict: 'E',
      templateUrl: 'core/directives/loader/loader.html',
      link: function (scope, element, attributes) {
        var shownType = element.css('display');

        function hideElement() {
          element.css('display', 'none');
        }
        scope.$on('loaderHide', hideElement);
        scope.$on('loaderShow', function () {
          element.css('display', shownType);
        });
        hideElement();
      }
    };
  }
  module.directive('loader', loader);
})(angular.module('Citygyd.Directives'));
