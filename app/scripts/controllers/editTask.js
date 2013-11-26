'use strict';

angular.module('TaskManagerApp')
    .controller('EditTaskCtrl', function ($scope, taskService, $routeParams, $location) {

        $scope.$emit("activated", "Tasks");
        $scope.title = "Edit Task";

        var taskId = $routeParams.id;

        taskService.getTask(taskId)
            .success(function (task) {
                $scope.task = task;
            })
            .error(function (error) {
                console.log(error);
            });


        $scope.save = function () {

            //make sure this is valid
            sanitizeTask($scope.task);

            taskService.updateTask($scope.task)
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
