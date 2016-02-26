'use strict';

/**
 * @ngdoc function
 * @name locarcgisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the locarcgisApp
 */
angular.module('locarcgisApp')
  .controller('MainCtrl', function () {
         var self=this;
         self.map = {
            center: {
                lng: 78,
                lat: 24
            },
            zoom: 4,
            //webappId : "a06407c84eb3414588ac40a5eec3716a",  Double binding of webappId to the webmapid attribute didn't work.
        };

});
