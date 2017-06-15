//$scope.empty Object
//ng-model name of obj.name

//once i have ojb 
//make call to backend controller to push to db

//app.controller("HomeController", function($scope, $rootScope) {
    //$scope.Home = {};//was $scope.Hikes = {};
        //$scope.map = new google.maps.Map(document.getElementById('map'), {
            //center: {lat: 36.4703, lng: 86.6514},
            //zoom: 8
       // })
//});

app.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
    $scope.myHikeList = [];
    $scope.newhike = {};
    
    //This function sends an HTTP POST request to our api.
    //https://docs.angularjs.org/api/ng/service/$http
    $scope.submit = function (hike) {
        /*
            Sometimes the $http functionality is abstracted out
            into a service or factory. 
        */
        $http.post('/api/hike', hike)
            .then(function (res) {
                //Redirects to list page
                //$location.path('/list');
            });

        console.log($scope.newhike);
    }
     
    $http.get('/api/hike')
           .then(function (res) {
               //Redirects to list page
               //$location.path('/list');
               
               
               console.log("hikelist", res);
           });


    }]);