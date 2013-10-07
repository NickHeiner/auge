'use strict';

angular.module('augeApp')
    .factory('degreesToRadians', function() {
        return function(degrees) {
            return degrees * Math.PI / 180;
        };
    })
    .factory('sensorHasRequiredKeys', function() {
        var requiredKeys = ['alpha', 'beta', 'gamma'];

        return function(sensor) {
            return _.all(requiredKeys, function(key) {
                return angular.isDefined(sensor[key]);
            });
        };
    })
    .directive('render', function(sensorHasRequiredKeys, degreesToRadians) {
        return {
            templateUrl: 'views/render.html',
            scope: {
                sensorData: '='
            },
            link: function($scope, $element) {
                var canvas = $element.find('canvas')[0];
                var engine = new window.BABYLON.Engine(canvas, true);

                var scene = new BABYLON.Scene(engine);

                // Creating a camera looking to the zero point (0,0,0) and a light
                new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
                new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 10), scene);

                var box = BABYLON.Mesh.CreateBox("Box", 5, scene, true);

                // Attach the camera to the scene
                scene.activeCamera.attachControl(canvas);

                // Once the scene is loaded, just register a render loop to render it
                engine.runRenderLoop(function() {
                    scene.render();
                });

                $scope.$watch('sensorData', function(sensor) {

                    if (!sensorHasRequiredKeys(sensor)) {
                        return;
                    }

                    box.rotation.y = degreesToRadians(sensor.alpha);
                    box.rotation.x = degreesToRadians(sensor.beta);
                    box.rotation.z = degreesToRadians(sensor.gamma);
                });

                $scope.shouldShowCanvas = function() {
                    return sensorHasRequiredKeys($scope.sensorData);
                }

            }
        };
    });