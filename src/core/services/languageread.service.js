(function (module) {
  'use strict';
  var gideService;
  languagereadService.$inject = ['$log', '$http', 'urlFactory'];

  function languagereadService($log, $http, urlFactory) {
    var service = {
      getLanguageName: getLanguageName
    }
    return service;

    function getLanguageName(obj, language) {
      function locate(arg) {
        if (typeof arg === 'object') {
          var words = [];
          var last = Object.keys(arg).length;
          var idx = 1;
          for (var key in arg) {
            words.push(findlanguageName(key));
            idx = idx + 1;
            words.push(idx > last ? ' ' : ', ');
          }
          var sentence = words.join('');
          return sentence;
        } else {
          if (typeof arg === 'string') return findlanguageName(arg);
        }

        function findlanguageName(lan) {
          for (var key in obj) {
            if (lan === key) {
              return obj[key];
            }
          }
        }
      }
      return locate(language)
    };
  }
  module.factory('languagereadService', languagereadService);
}(angular.module('Citygyd.Services')));
