"use strict";angular.module("locarcgisApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","esri.map"]).config(["$routeProvider",function(a){a.when("/india",{templateUrl:"views/india.html"}).when("/languages",{templateUrl:"views/languages.html"}).when("/accidents",{templateUrl:"views/accidents.html"}).otherwise({redirectTo:"/india"})}]),angular.module("locarcgisApp").controller("MainCtrl",["$scope",function(a){a.map={center:[78,24],zoom:4,basemap:"topo"}}]);