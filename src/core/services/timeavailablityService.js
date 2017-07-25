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
          console.log("last", last);
          var idx = 1;
          for (var key in arg) {
            var dayname = isAvailable(key, arg[key])
            console.log("dayname", dayname);
            if (dayname) {
              words.push(dayname);
              words.push(idx > last ? ' ' : ', ');
            }
            idx = idx + 1;
          }
          var sentence = words.join(' ');
          console.log('sent', sentence);
          return sentence;
        }
      };

      function isAvailable(day, avail) {
        console.log(day, avail);
        if (avail.am && avail.pm) {
          return day;
        }
      }
      return locate(times);
    };
  }
  module.factory('timeavailabityService', timeavailabityService);
}(angular.module('Citygyd.Services')));
