'use strict';

angular.module('augeApp')
    .controller('WriteCtrl', function($scope, startFirebase, $routeParams) {
        startFirebase($routeParams.sessionId, $scope, 'sensor');
    });
