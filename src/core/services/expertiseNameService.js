(function (module) {
  'use strict';
  var gideService;
  expertiseNameService.$inject = ['$log', '$http', 'urlFactory'];

  function expertiseNameService($log, $http, urlFactory) {
    var service = {
      getExpertiseName: getExpertiseName
    }
    return service;

    function getExpertiseName(obj, expertise) {
      function locate(arg) {
        if (typeof arg === 'object') {
          var words = [];
          var last = Object.keys(arg).length - 2;
          var idx = 0;
          for (var key in arg) {
            words.push(findexpetiseName(arg[key]));
            words.push(idx > last ? ' ' : ', ');
            idx = idx + 1;
          }
          var sentence = words.join('');
          return sentence;
        } else {
          if (typeof arg === 'string') return findexpetiseName(arg);
          if (typeof arg === 'array') {
            var words = [];
            var last = arg.length;
            for (var i = 0; i < arg.length; i++) {
              words.push(findexpetiseName(arg[i]));
              words.push(i > last ? ' ' : ', ');
            }
            var sentence = words.join('');
            return sentence;
          }
        }

        function findexpetiseName(expertise) {
          for (var key in obj) {
            if (expertise == key) {
              return obj[key];
            }
          }
        }
      }
      return locate(expertise)
    };
  }
  module.factory('expertiseNameService', expertiseNameService);
}(angular.module('Citygyd.Services')));
