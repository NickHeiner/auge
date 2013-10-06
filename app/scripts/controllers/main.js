'use strict';

angular.module('augeApp')
    .constant('FIREBASE_URL', 'https://auge.firebaseio.com/people')
    .controller('MainCtrl', function($scope, angularFire, FIREBASE_URL) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var ref = new Firebase(FIREBASE_URL);
        angularFire(ref, $scope, 'people.count');
        $scope.people = {
            count: 0
        };

        $scope.incrPeople = function() {
            $scope.people.count += 1;
        }
    });
