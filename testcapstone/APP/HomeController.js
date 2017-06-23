﻿


app.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
    $scope.myHikeList = [];
    $scope.newhike = {};
    // $scope.HikesId = $routeParams.id;
    
    
    //This function sends an HTTP POST request to our api.
    //https://docs.angularjs.org/api/ng/service/$http
    $scope.submit = function (hike) {
      
        console.log(hike);

        $http.post('/api/hike', hike)
            .then(function (res) {
                $scope.newhike = {};
                //$location.path('/home');
                updatelist();
            });
        console.log($scope.newhike.miles);
    }
     
    function updatelist() {
        console.log("test");
        $http.get('/api/hike')
               .then(function (res) {
                  

                   //console.log("hikelist", res);

                   $scope.hikelist = res.data;
                   console.log("hikelist", $scope.hikelist);

                   //$scope.apply();
               });
    }

    updatelist();
   
    function map() {
        var uluru = { lat: 36.4703232, lng: -86.6513845}; 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
   
    map();

    //marker();

    //scope.marker = [];
    //pushing every marker users places
    //to a location


}]);





  
        