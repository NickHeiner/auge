'use strict';

angular.module('augeApp')
    .directive('render', function() {
        return {
            templateUrl: 'views/render.html',
            scope: {
                sensorData: '='
            },
            link: function($scope, $element, $attr) {
                var canvas = $element.find('canvas')[0];
                var engine = new window.BABYLON.Engine(canvas, true);

                var scene = new BABYLON.Scene(engine);

                // Creating a camera looking to the zero point (0,0,0) and a light
                new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
                new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 10), scene);

                var box = BABYLON.Mesh.CreateTorus("Box", 5, 1, 10, scene, true);

                // Attach the camera to the scene
                scene.activeCamera.attachControl(canvas);

                // Once the scene is loaded, just register a render loop to render it
                engine.runRenderLoop(function() {
                    scene.render();
                });

                $scope.$watch('sensorData', function(sensor) {
                    var requiredKeys = ['alpha', 'beta', 'gamma'];

                    if (_.any(requiredKeys, function(key) {
                        return angular.isUndefined(sensor[key]);
                    })) {
                        return;
                    }

                    box.rotation.x = sensor.alpha;
                    box.rotation.y = sensor.beta;
                    box.rotation.z = sensor.gamma;
                });

            }
        };
    });