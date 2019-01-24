var app = angular.module('AppEjecutivos', [])

app.controller('ctrlEjecutivos',function($scope,$http,$sce){

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
     
    var header_config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    //TRAE UNA LISTA DE TODOS LOS EJECUTIVOS
    $scope.traerEjecutivos = function(){

        $http({
            method : 'GET',
            url : $scope.trustSrc('http://localhost:8080/usuarios/ejecutivos'),
            config : header_config})
        
        .then(function(response){  
                console.log(response);                                 
            }),function(error){
                console.log(error)
            };
    }



})