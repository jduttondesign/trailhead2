app.controller('ListController', ['$scope', '$http', function ($scope, $http) {
    $scope.myHikeList = [];
    $scope.newhike = {};

$http.get('/api/hike')
          .then(function (res) {
             
              //console.log("hikelist", res);

              $scope.hikelist = res.data;
              console.log("hikelist", $scope.hikelist);

              //$scope.apply();

          });

}]);