'use strict';

angular.module('TaskManagerApp')
    .controller('MainCtrl', function ($scope) {
        $scope.$emit("activated", "Home");
    });
