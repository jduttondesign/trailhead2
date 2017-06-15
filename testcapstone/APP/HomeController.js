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

app.controller('HomeController', ['$scope', function ($scope) {
    $scope.myHikeList = [];
    $scope.newhike = {};
    

    console.log($scope.newhike);

     

}]);