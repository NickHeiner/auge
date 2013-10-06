'use strict';

angular.module('augeApp')
    .controller('WriteCtrl', function($scope, startFirebase, $routeParams) {
        startFirebase($routeParams.sessionId, $scope, 'sensor');

        $scope.update = {
            count: 0
        };

        window.addEventListener('deviceorientation', function(eventData) {
            $scope.$apply(function() {
                ['alpha', 'beta', 'gamma'].forEach(function(prop) {
                   $scope.sensor[prop] = eventData[prop];
                });
//                $scope.sensor.alpha = eventData.alpha;
//                _.assign($scope.sensor, eventData);
                $scope.update.count++;
            });
        });

    });
