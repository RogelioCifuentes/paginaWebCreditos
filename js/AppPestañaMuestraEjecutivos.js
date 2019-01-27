var app = angular.module('AppPagEjecutivos', [])

app.controller('ctrlPagEjecutivos',function($scope,$http,$sce){

    $scope.user = JSON.parse(localStorage.getItem("user"));

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
     
    var header_config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    $scope.logOut = function(){
        localStorage.clear();
    }
    //TRAE UNA LISTA DE TODOS LOS EJECUTIVOS
    $scope.traerEjecutivos = function(){

        $http({
            method : 'GET',
            url : $scope.trustSrc('http://localhost:8080/usuarios/ejecutivos'),
            config : header_config})
        
        .then(function(response){  
                console.log(response);     
                $scope.ejecutivos = response.data;
                for(i in ejecutivos){
                    if(ejecutivos[i].nombre === localStorage.getItem("username")){
                        $scope.nombreEjecutivo = ejecutivos[i].nombre;
                    }    
                }                           
            }),function(error){
                console.log(error)
            };
    }



})