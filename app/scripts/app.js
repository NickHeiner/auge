'use strict';

angular.module('augeApp', ['firebase'])
  .constant('FIREBASE_ROOT_URL', 'https://auge.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/read/:sessionId', {
        templateUrl: 'views/read.html',
        controller: 'ReadCtrl'
      })
      .when('/write/:sessionId', {
        templateUrl: 'views/write.html',
        controller: 'WriteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
