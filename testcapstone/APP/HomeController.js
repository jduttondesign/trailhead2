

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
        $http.get('/api/hike')
               .then(function (res) {
                  

                   //console.log("hikelist", res);

                   $scope.hikelist = res.data;
                   console.log("hikelist", $scope.hikelist);

                   //$scope.apply();
               });
    }

    updatelist();


   //RouteProvider.state('/api/hike', {
       // url: '/:id',
        //templateUrl: 'App/partials/Home.html',
        //controller: 'HomeController'
  // })



}]);





  
        