app.controller('DetailController', ['$scope', '$http','$routeParams', function ($scope, $http, $routeParams) {
    $scope.myHikeList = [];
    $scope.newhike = {};

    function gethike() {
    	$http.get(`/api/hike/${$routeParams.id}`)
               .then(function (res) {
               	console.log(res);
               	$scope.newhike = res.data;
                   //console.log("hikelist", res);

                   //$scope.hikelist = res.data;
                   //console.log("hikelist", $scope.hikelist);

                   //$scope.apply();
               });
    }

    gethike();
	
}

]);

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(45.434046, 12.340284),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}