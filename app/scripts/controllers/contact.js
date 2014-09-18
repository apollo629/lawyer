'use strict';

/**
 * @ngdoc function
 * @name lawyerApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the lawyerApp
 */
angular.module('lawyerApp')
  .controller('ContactCtrl', function ($scope,$timeout) {
    $scope.placeMap = function() {
        $timeout(function(){
          var map = new ymaps.Map("map",{center:[38.920822,27.837794], zoom: 15, type: "yandex#map"});
          map.controls.add("zoomControl");
          map.geoObjects.add(new ymaps.Placemark([38.920822,27.837794], {balloonContent: "Ofis"}, {preset: "twirl#redIcon"}));
        },5000);
      }
  });
