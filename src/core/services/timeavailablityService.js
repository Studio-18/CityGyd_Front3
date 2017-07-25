(function (module) {
  'use strict';
  var gideService;
  timeavailabityService.$inject = ['$log', '$http', 'urlFactory'];

  function timeavailabityService($log, $http, urlFactory) {
    var service = {
      getTimeAvailable: getTimeAvailable
    }
    return service;

    function getTimeAvailable(times) {
      function locate(arg) {
        if (typeof arg === 'object') {
          var words = [];
          var last = Object.keys(arg).length - 2;
          var idx = 1;
          for (var key in arg) {
            var dayname = isAvailable(key, arg[key])
            if (dayname) {
              words.push(dayname);
              words.push(idx > last ? ' ' : ', ');
            }
            idx = idx + 1;
          }
          var sentence = words.join(' ');
          return sentence;
        }
      };

      function isAvailable(day, avail) {

        if (avail.am && avail.pm) {
          return day.toUpperCase();
        }
      }
      return locate(times);
    };
  }
  module.factory('timeavailabityService', timeavailabityService);
}(angular.module('Citygyd.Services')));
