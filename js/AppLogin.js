
var app = angular.module('AppLogin', [])

app.controller('ctrlLogin',function($scope,$http,$sce){

    $scope.rut = "";
    $scope.password ="";
    $scope.mostrarError = false;
    $scope.mostrarLogin = true;
    $scope.mensaje = "";
    
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
     
    var header_config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
   
    $scope.login = function(){
        if($scope.rut=="" || $scope.password==""){
            $scope.mensaje = "Ingrese datos";
            $scope.mostrarError = true;
            return;

        }else{

        var form_data = ({
            rut: $scope.rut,
            password : $scope.password
        });

        $http({
            method : 'POST',
            url : $scope.trustSrc("http://localhost:8080/usuarios/login"),
            data : JSON.stringify(form_data),
            config : header_config
        }).then(
            function(response){
                $scope.usuario = response.data
                if(response.data){
                    
                    if($scope.usuario.rol.idRol == 3){                           //Rol Usuario comun, redirige a la tabla de simulacion.
                    window.location.href='paginaTablaRegistrado.html'
                    
                    }else if($scope.usuario.rol.idRol == 2){                     //Rol Ejecutivo, redirige a nada en especial aun.
                    window.location.href='pagEjecutivos.html'
                    
                    }else if($scope.usuario.rol.idRol == 1){                     //Rol Admin, se redirige a su panel de control.
                    window.location.href='menuAdministrador.html'
                    }
                    
                }else{
                    $scope.mostrarError = true;
                    $scope.mensaje = "Usuario y/o contraseña incorrectos."
                }  
            },function(error){
                console.log(error);
            }); 
        }};
              
});

