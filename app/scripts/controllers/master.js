'use strict';

angular.module('TaskManagerApp')
    .controller('MasterCtrl', function ($scope) {

        $scope.isHomeSelected = true;
        $scope.isTasksSelected = false;

        $scope.$on("activated", function (event, data) {
            if (data === "Home") {
                $scope.isHomeSelected = true;
                $scope.isTasksSelected = false;
            } else {
                $scope.isHomeSelected = false;
                $scope.isTasksSelected = true;
            }
        });
    });