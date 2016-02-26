'use strict';

/**
 * @ngdoc overview
 * @name locarcgisApp
 * @description
 * # locarcgisApp
 *
 * Main module of the application.
 */
angular
  .module('locarcgisApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'esri.map'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
