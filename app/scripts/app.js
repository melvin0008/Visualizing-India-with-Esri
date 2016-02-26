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
      .when('/languages', {
        templateUrl: 'views/languages.html'
      })
      .when('/accidents', {
        templateUrl: 'views/accidents.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
