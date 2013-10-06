angular.module('augeApp')
    .factory('startFirebase', function(angularFire, FIREBASE_ROOT_URL) {
        return function(sessionId, $scope, property) {
            var ref = new Firebase(FIREBASE_ROOT_URL + '/' + sessionId);
            angularFire(ref, $scope, property);
        };
    });
