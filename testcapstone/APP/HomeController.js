//$scope.empty Object
//ng-model name of obj.name


//once i have ojb 
//make call to backend controller to push to db


<script async defer
src="https://maps.googleapis.com/maps/api/js?key= AIzaSyAjsdysL9H1DocDrwqPa8vdeWAYIN4beLEcallback=initMap">
</script>

app.controller("HomeController", function($scope, $rootScope){
    $scope.Hikes = {};
   
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 36.4703° N, lng: 86.6514° W},
            zoom: 8
        });
    
});
    