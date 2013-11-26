'use strict';

angular.module('TaskManagerApp')
    .controller('TasksCtrl', function ($scope, taskService) {

        $scope.$emit("activated", "Tasks");

        //Return all tasks -- initialization
        taskService.getTasks()
            .success(function (tasks) {
                $scope.tasks = tasks;
            })
            .error(function (error) {
                console.log(error);
            });

        //Remove a task
        $scope.remove = function (task) {
            taskService.deleteTask(task.id)
                .success(function(){

                    var indexToDelete = $scope.tasks.indexOf(task);
                    $scope.tasks.splice(indexToDelete, 1);

                })
                .error(function(error){
                    console.log(error);
                })
        }
    });
