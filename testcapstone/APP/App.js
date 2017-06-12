var app = angular.module('HikeApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
    })

    .when('/add', {
        templateUrl: 'pages/add.html',
        controller: 'AddController'
    })

    .when('/get', {
        templateUrl: 'pages/get.html',
        controller: 'GetController'
    })

     .when('/update', {
         templateUrl: 'pages/update.html',
         controller: 'UpdateController'
     })

     .when('/delete', {
         templateUrl: 'pages/delete.html',
         controller: 'DeleteController'
     })

    .otherwise({ redirectTo: '/' });
});

app.controller('HomeController', function ($scope) {
    $scope.message = 'Hello from HomeController';
});

app.controller('AddController', function ($scope) {
    $scope.message = 'Hello from AddController';
});

app.controller('GetController', function ($scope) {
    $scope.message = 'Hello from GetController';
});

app.controller('UpdateController', function ($scope) {
    $scope.message = 'Hello from UpdateController';
});

app.controller('DeleteController', function ($scope) {
    $scope.message = 'Hello from DeleteController';
});



