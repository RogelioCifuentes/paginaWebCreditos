
var app = angular.module('AppLogin', [])

app.controller('ctrlLogin', function($scope,$http){
    $scope.mostrarError = false;
    $scope.mostrarLogin = true;
    $scope.comentarios = [];

    $scope.obtenerComentarios = function(){
    $http.get("http://localhost:8080/comentarios/")
        .then(function(data){
           // console.log(data.data);
            $scope.comentarios = data;
        
    },function(err){
        console.log(err);
            });
        }




    $scope.user = {                               //Creando un objeto
        nombre: $scope.rut,
        password: $scope.pass,
    };  

    $scope.validarLogin = function(){
        if($scope.rut == "11.111.111-1" & $scope.pass == "12345"){
            $scope.mostrarError = false;
            $scope.mostrarLogin = false;
            $scope.obtenerComentarios();
        }else{
            $scope.mostrarError = true;
            $scope.mostrarLogin = true;
        }};

});

