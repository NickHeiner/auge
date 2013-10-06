angular.module('augeApp')
    .directive('sensor', function() {
       return {
           templateUrl: 'views/sensor.html',
           scope: {
               sensor: '='
           }
       };
    });