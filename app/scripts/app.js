'use strict';

angular.module('TaskManagerApp', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/tasks', {
                templateUrl: 'views/tasks.html',
                controller: 'TasksCtrl'
            })
            .when('/tasks/add', {
                templateUrl: 'views/editTask.html',
                controller: 'AddTaskCtrl'
            })
            .when('/tasks/edit/:id', {
                templateUrl: 'views/editTask.html',
                controller: 'EditTaskCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
