angular.module('augeApp')
    .factory('startFirebase', function(angularFire, FIREBASE_ROOT_URL) {
        return function(sessionId, $scope, property) {

            $scope[property] = $scope[property] || {};

            var ref = new Firebase(FIREBASE_ROOT_URL + '/session/' + sessionId);
            angularFire(ref, $scope, property);
        };
    });
