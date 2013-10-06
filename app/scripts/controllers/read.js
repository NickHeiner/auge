'use strict';

angular.module('augeApp')
    .controller('ReadCtrl', function($scope, startFirebase, $routeParams) {
        startFirebase($routeParams.sessionId, $scope, 'sensor');
    });
