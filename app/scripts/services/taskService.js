'use strict';

angular.module('TaskManagerApp')
    .service('taskService', function taskService($http) {

        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];

        function getTasks() {
            return $http.get("http://localhost:3000/tasks");
        }

        function deleteTask(taskId) {
            return $http.delete("http://localhost:3000/tasks/" + taskId);
        }

        function createTask(task) {
            return $http.post("http://localhost:3000/tasks", task);
        }

        function updateTask(task) {
            return $http.put("http://localhost:3000/tasks/" + task.id, task);
        }

        function getTask(taskId) {
            return $http.get("http://localhost:3000/tasks/" + taskId);
        }

        return {
            getTasks: getTasks,
            deleteTask: deleteTask,
            createTask: createTask,
            updateTask: updateTask,
            getTask: getTask
        }
    });
