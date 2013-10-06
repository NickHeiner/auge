'use strict';

angular.module('augeApp')
    .controller('WriteCtrl', function($scope, startFirebase, $routeParams) {
        startFirebase($routeParams.sessionId, $scope, 'sensor');

        window.addEventListener('deviceorientation', function(eventData) {
            $scope.$apply(function() {

                // for some reason _.merge or _.assign won't work here, and I don't know why.
                ['alpha', 'beta', 'gamma'].forEach(function(prop) {
                   $scope.sensor[prop] = eventData[prop];
                });
            });
        });

    });
