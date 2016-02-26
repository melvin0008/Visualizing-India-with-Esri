'use strict';

/**
 * @ngdoc function
 * @name locarcgisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the locarcgisApp
 */
angular.module('locarcgisApp')
  .controller('MainCtrl', function ($scope) {
         $scope.map = {
            center: {
                lng: 78,
                lat: 24
            },
            zoom: 4,
        };
    });
