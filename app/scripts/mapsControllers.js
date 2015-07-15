'use strict';

/* Controllers */

// http://angular-ui.github.io/angular-google-maps

//angular.module('myApp.controllers', [])
angular.module('myApp.controllers')

.controller('MapsController', 
            ['$scope', '$ionicLoading', '$compile', '$log', 'uiGmapGoogleMapApi', '$timeout',
    function($scope,    $ionicLoading,   $compile,   $log,   uiGmapGoogleMapApi,   $timeout) {

      $scope.staticMarker = [];
      $scope.randomMarkers = [];


      uiGmapGoogleMapApi.then(function(maps) {
        $log.log('uiGmapGoogleMapApi then . ...');


        $scope.map = { center: { latitude: 44.0357100000, longitude: 12.5573200000 }, zoom: 12 };

$scope.randomMarkers = [
        {
          id: 1,
          //icon: 'assets/images/blue_marker.png',
          latitude: 44.0668100000,
          longitude: 12.5173200000,
          showWindow: false,
          options: {
            labelContent: '0152',
            labelAnchor: "22 0",
            labelClass: "marker-labels",
            draggable: false
          }
        },
        {
          id: 2,
          //icon: 'assets/images/blue_marker.png',
          latitude: 44.0768100000,
          longitude: 12.5473200000,
          showWindow: false,
          options: {
            labelContent: '0022',
            labelAnchor: "22 0",
            labelClass: "marker-labels",
            draggable: false
          }
        },
        {
          id: 3,
          //icon: 'assets/images/blue_marker.png',
          latitude: 44.0358300000,
          longitude: 12.5573500000,
          showWindow: false,
          options: {
            labelContent: '0025',
            labelAnchor: "22 0",
            labelClass: "marker-labels",
            draggable: false
          }
        }
        
      ];

/*

        $scope.staticMarker = {
          id: 0,
          title : 'Title',
          coords: {
            latitude: 44.0358300000,
            longitude: 12.5573500000
          },
          options: { 
            draggable: true,
            labelContent: 'Markers id 3',
            labelAnchor: "26 0",
            labelClass: "marker-labels"
          },
          events: {
            dragend: function (marker, eventName, args) {
              $log.log('marker dragend');
              $log.log(marker.getPosition().lat());
              $log.log(marker.getPosition().lng());
            }
          }
        };

*/


      });

      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };


      $scope.refreshMap = function () {

        $log.log('refreshMap ...');

    $ionicLoading.show({template: 'Aggiornamento dati'});


$timeout(function () {
    $ionicLoading.hide();
    


        var lt1 = 44.09 + (Math.floor(Math.random() * 9) + 1) * 0.01;
        var ln1 = 12.59 + (Math.floor(Math.random() * 9) + 1) * 0.01;

        $log.log('refreshMap ... ' + lt1 + ' # ' + ln1 );

        //optional param if you want to refresh you can pass null undefined or false or empty arg
        $scope.randomMarkers = [
        {
          id: 1,
          //icon: 'assets/images/blue_marker.png',
          latitude: 44.0357100000,
          longitude: 12.5763200000,
          showWindow: false,
          options: {
            labelContent: '00012',
            labelAnchor: "22 0",
            labelClass: "marker-labels",
            draggable: false
          }
        },
        {
          id: 2,
          //icon: 'assets/images/blue_marker.png',
          latitude: 44.0798100000,
          longitude: 12.5173200000,
          showWindow: false,
          options: {
            labelContent: '00024',
            labelAnchor: "22 0",
            labelClass: "marker-labels",
            draggable: false
          }
        },
        {
          id: 3,
          //icon: 'assets/images/blue_marker.png',
          latitude: 44.0358300000,
          longitude: 12.5573500000,
          showWindow: false,
          options: {
            labelContent: '00025',
            labelAnchor: "22 0",
            labelClass: "marker-labels",
            draggable: false
          }
        },
        {
          id: 4,
          //icon: 'assets/images/blue_marker.png',
          latitude: 44.0903500000,
          longitude: 12.5343200000,
          showWindow: false,
          options: {
            labelContent: '00027',
            labelAnchor: "22 0",
            labelClass: "marker-labels",
            draggable: false
          }
        },
        {
          id: 5,
          //icon: 'assets/images/blue_marker.png',
          latitude: 44.0381100000,
          longitude: 12.5593900000,
          showWindow: false,
          options: {
            labelContent: '00044',
            labelAnchor: "22 0",
            labelClass: "marker-labels",
            draggable: false
          }
        }

      ];


  }, 2000);
    


    };

    }]);   
      