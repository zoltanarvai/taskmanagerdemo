'use strict';

angular.module('TaskManagerApp')
    .controller('AddTaskCtrl', function ($scope, taskService, $location) {

        $scope.$emit("activated", "Tasks");
        $scope.title = "Create New Task";

        $scope.task = {
            priority: 1,
            deadline: new Date()
        };

        $scope.save = function () {

            //make sure this is valid
            sanitizeTask($scope.task);

            taskService.createTask($scope.task)
                .success(function () {
                    $location.path("/tasks");
                })
                .error(function (error) {
                    console.log("error");
                })

        }

        function sanitizeTask(task) {
            task.deadline = new Date(task.deadline);
            task.priority = Number(task.priority);
        }
    });
