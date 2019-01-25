
var app = angular.module('AppLogin', [])

app.controller('ctrlLogin',function($scope,$http,$sce){
    $scope.user = JSON.parse(localStorage.getItem("user"));
    $scope.rut = "";
    $scope.password ="";
    $scope.mostrarError = false;
    $scope.mostrarErrorBANEADO = false;
    $scope.mostrarLogin = true;
    $scope.mensaje = "";
    $scope.botonInicio = true;
    $scope.botonRegistrarse = true;
    
    if($scope.user){
        window.location.href="paginaTablaRegistrado.html"
    }
    
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
        }).then(function(response){
                localStorage.setItem("user",JSON.stringify(response.data));
                $scope.usuario = response.data
                
                if(response.data){
                    
                    if($scope.usuario.activo!=1){
                        $scope.mostrarErrorBANEADO = true;
                        $scope.mensaje = "**USUARIO BANEADO**";
                        $scope.botonInicio = false;
                        $scope.botonRegistrarse = false;
                       
                    return false;
                    }

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

