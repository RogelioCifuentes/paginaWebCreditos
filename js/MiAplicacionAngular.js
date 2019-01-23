
var app = angular.module('AppLogin', [])

app.controller('ctrlLogin',function($scope,$http,$sce){


    
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
    $scope.rut = "";
    $scope.password ="";
    $scope.mostrarError = false;
    $scope.mostrarLogin = true;
    $scope.mensaje = "";
    $scope.nombreUsuario ="";
    


     
    var header_config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
   
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
                 console.log(response.nombre);
                 $scope.usuario = response.data
                 if(response.data){
                     //SI ES USUARIO NORMAL LO REDIRIGE A LA TABLA PARA SIMULAR
                     
                     if($scope.usuario.rol.idRol == 3){
                        window.location.href='paginaTabla.html'
                        console.log(response);
                       
                        //SI ES USUARIO EJECUTIVO LO REDIRIGE A SU PAG
                     }else if($scope.usuario.rol.idRol == 2){
                        window.location.href='inicioSesion.html'

                        var nombreUsuario2 = $scope.usuario.nombre;
                        $scope.nombreUsuario = response.data.nombre;
                        console.log(response.data.nombre);
                        console.log(nombreUsuario2);
                        console.log($scope.nombreUsuario);

                        //SI ES ADMINISTRADOR LO ENVIA A SU PAG
                        console.log(response);
                     }else if($scope.usuario.rol.idRol == 1){
                        window.location.href='menuAdministrador.html'
                        console.log(response);
                     }
                     
                 }else{
                     $scope.mostrarError = true;
                     $scope.mensaje = "Usuario y/o contraseña incorrectos."
                 }
                
   
                },function(error){
                    console.log($scope.rut);
                    console.log($scope.password);
                    console.log("error");
                    console.log(error);
                   
   
                });
               
            }};  
});

