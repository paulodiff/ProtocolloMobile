'use strict';

/* Controllers */

// http://angular-ui.github.io/angular-google-maps

//angular.module('myApp.controllers', [])
angular.module('myApp.controllers')

.controller('MapsController', 
            ['$scope', '$ionicLoading', '$compile', '$log',
    function($scope,    $ionicLoading, $compile, $log) {

      
      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };



      function initialize() {

        $log.debug('MapsController:initialize');

        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };



        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }

      /*
      $log.debug('MapsController:initialize:load');

      if (google){
        google.maps.event.addDomListener(window, 'load', initialize);
      } else {
        $log.debug('MapsController:google not ready');
      }
      */
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          $log.debug('MapsController:map not ready');
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {

          $log.debug('Setting map ...')
          $scope.map = {center: {latitude: pos.coords.latitude, longitude: pos.coords.longitude }, zoom: 14 };

          $log.debug('Setting marker ...')
          $scope.marker = {
                id: 0,
                coords: {
                  latitude: pos.coords.latitude,
                  longitude: pos.coords.longitude
                },
                options: { draggable: false }
          }


          //$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $ionicLoading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };

    }]);   
      