var app = angular.module('AppLogin', []);

app.controller('ctrlLogin', function($scope, $http)
{    
    $http.get( "https://restcountries.eu/rest/v1/alpha/cl" )
    .then(function(respuestaPhotos){
            $scope.photos = respuestaPhotos;
    });
    $scope.mostrarLogin = true;
    $scope.mostrarError = false;
    $scope.mensaje = "";

    $scope.iniciarSesion = function(){

        if( $scope.modelUsuario == "" &&  $scope.modelPassword=="" ){
            $scope.mensaje = "Ingrese datos";
            return ;
        }
        
        if( $scope.modelUsuario == "admin" &&  $scope.modelPassword=="123456" ){
            $scope.mostrarError = false;
            $scope.mostrarLogin = false;
            //
        }else{
            $scope.mostrarError = true;
            $scope.mostrarLogin = true;
            $scope.mensaje = "Usuario y/o Clave incorrectos";
        }
        
    };
});