var app = angular.module("app", []);

app.controller("usersController", function ($scope, $http) {
    $http.get('/users')
        .success(function (usersList) {
            $scope.usersList = usersList
        })
});