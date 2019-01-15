var app = angular.module('AppLogin', [])

app.controller('ctrlLogin', function($scope,$http){
    $scope.mostrarError = false;
    $scope.mostrarLogin = true;
    $scope.comentarios = [];

    $http.get("http://localhost:8080/comentarios/")
        .then(function(data){
            console.log(data.data);
            $scope.comentarios = data.data;
        
    },function(err){
            });




    $scope.user = {                               //Creando un objeto
        nombre: $scope.rut,
        password: $scope.pass,
    };  

    $scope.validarLogin = function(){
        if($scope.rut == "19.090.388-5" & $scope.pass == "12345"){
            $scope.mostrarError = false;
            $scope.mostrarLogin = false;
        }else{
            $scope.mostrarError = true;
            $scope.mostrarLogin = true;
        }};

});

