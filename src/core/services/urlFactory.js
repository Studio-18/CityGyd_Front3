(function (module) {
  var urlFactory;
  urlFactory.$inject = [];

  function urlFactory() {
    return 'http://138.68.42.95/api'
  }
  module.factory('urlFactory', urlFactory);
}(angular.module('Citygyd.Services')));
