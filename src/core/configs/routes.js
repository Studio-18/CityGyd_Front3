(function () {
  'use strict';
  angular.module('Citygyd.Configs').config(routesProvider);

  function routesProvider($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state('app', {
      url: '^',
      abstract: true,
      templateUrl: 'templates/home.html',
      controller: 'static.controller',
      controllerAs: 'static'
    }).state('app.explore-tours', {
      url: '/home',
      templateUrl: 'views/main/explore/tours.html',
      controller: 'Explore.controller',
      controllerAs: 'explore'
    }).state('app.gide', {
      url: '/gide/:gidename',
      params: {
        id: '',
        gidename: ''
      },
      resolve: {
        GIDE: function (gideService, $stateParams) {
          return gideService.get($stateParams.gidename, null).then(function (res) {
            console.log(res)
            return res.data.data.gide
          })
        }
      },
      templateUrl: 'views/main/gide/gide.html',
      controller: 'Gide.controller',
      controllerAs: 'gide'
    })
    .state('app.tour', {
      url: '/tour/:id',
      params: {
        id: '',

      },
      resolve: {
        // GIDE: function (gideService, $stateParams) {
        //   return gideService.get($stateParams.gidename, null).then(function (res) {
        //     console.log(res)
        //     return res.data.data.gide
        //   })
        // }
      },
      templateUrl: 'views/main/tour/tour.html',
      controller: 'Tour.controller',
      controllerAs: 'tour'
    })
    .state('app.test', {
      url: '/test',
      templateUrl: '/templates/test.html',
      controller: 'testController',
      controllerAs: 'testCtrl',
      params: {
        referer: null
      },
    }).state('app.tourgide', {
      url: '/explore',
      abstract: true,
      templateUrl: 'views/main/viewtourgide/tourgide.html',
      controller: 'tourgideController',
      controllerAs: 'tourgide',

      params: {
        referer: null
      },
    }).state('app.tourgide.tours', {
       url: '/tours',
      // abstract: true,
      templateUrl: '/views/main/viewtourgide/tour.html',
      controller: 'tourgideController',
      controllerAs: 'tourgide',
      activeTab: 'tours',
      params: {
        referer: null
      },
    }).state('app.tourgide.gides', {
       url: '/gides',
      // abstract: true,
      templateUrl: '/views/main/viewtourgide/gide.html',
      controller: 'tourgideController',
      controllerAs: 'tourgide',
      activeTab: 'gides',
      params: {
        referer: null
      },
    });
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('home');
  }
})();
