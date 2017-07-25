(function (module) {
  'use strict';
  var exploreService;
  exploreService.$inject = ['$log', '$http', 'urlFactory'];

  function exploreService($log, $http, urlFactory) {
    var service = {
    getTours: getTours,
    getGides: getGides
  }

  return service;


  function getTours(params) {
    var lang = ''
    return $http({
      method: 'GET',
      url: urlFactory + '/tours' + lang
    });
  }


  function getGides(params) {
    var lang = ''
    if ( params ) {

    }
    return $http({
      method: 'GET',
      url: urlFactory + '/gides' + lang
    });
  }

  function langCheck( params ) {
    if (userLang) {
      var tempLang = holdLang.concat(userLang)
      var uniqueArr = unique(tempLang)
      for (var i in uniqueArr) {
        holdLang.push(searchType == 'tours' ? 'language[]=${uniqueArr[i]}' : 'languages[]=${uniqueArr[i]}' )
      }
    }
    var params = holdLang.join('&').length ? { languages : holdLang.join('&') } : null
    return params
  }


  }
  module.factory('exploreService', exploreService);
}(angular.module('Citygyd.Services')));
