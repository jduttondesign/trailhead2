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