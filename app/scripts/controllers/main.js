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
            center: [78,24],
            zoom: 4,
            basemap:'topo'
            //webappId : "a06407c84eb3414588ac40a5eec3716a",  Double binding of webappId to the webmapid attribute didn't work.
        };
});
