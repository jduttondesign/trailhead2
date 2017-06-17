var app = angular.module('HikeApp', ['ngRoute']);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
     templateUrl: 'App/partials/Home.html',
     controller: 'HomeController'
     })

    //.when('/home', {
      //  templateUrl: 'App/partials/Home.html',
        //controller: 'HomeController'
    //})

    .when('/add', {
        templateUrl: 'partials/Add.html',
        controller: 'AddController'
    })

    .when('/get', {
        templateUrl: 'partials/Get.html',
        controller: 'GetController'
    })

     .when('/update', {
         templateUrl: 'partials/Update.html',
         controller: 'UpdateController'
     })

     .when('/delete', {
         templateUrl: 'partials/Delete.html',
         controller: 'DeleteController'
     })

    .otherwise({ redirectTo: '/' });

    //$locationProvider.html5Mode(true);

    }
]);









