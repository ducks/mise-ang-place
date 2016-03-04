'use strict';

module.exports = function($httpProvider, $stateProvider, $urlRouterProvider) {

  // CORS stuff http://better-inter.net/enabling-cors-in-angular-js/
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $stateProvider.
    state('home', {
    url: '/',
    views: {
      '@': {
        controller: 'homeCtrl',
        templateUrl: 'app/home/index.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}
