var app = angular.module('AppUsuario', [])

app.controller('ctrlUsuario',function($scope,$http,$sce){

    $scope.mostrarMensaje = false;
    $scope.mensaje = "";
    $scope.user = JSON.parse(localStorage.getItem("user"));
    $scope.mostrarMensajeValidacion = false;
    $scope.mostrarCambiosExitosos = false;

    $scope.trustSrc = function(src){
        return $sce.trustAsResourceUrl(src);
    }


    var header_config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

    $scope.actualizarDatos = function(){

        if ($scope.nuevaPassword != $scope.validacionNuevaPassword){
            $scope.mostrarMensajeValidacion = true;
            $scope.mensaje="Las contraseñas no coinciden."
            return false;
        }
        var form_data = ({
            rut : $scope.rut,
            correo : $scope.correo,
            password : $scope.password,
            nombre : $scope.nuevaPassword //Envio la nuevaPassword escondida en el atributo nombre.
        });

        //METODO PUT PARA ACTUALIZAR correo y password USUARIO
        $http({
            method : 'PUT',
            url : $scope.trustSrc("http://localhost:8080/usuarios/setear"),
            data : JSON.stringify(form_data),
            config : header_config  
        }).then(
            function(response){
                $scope.mostrarCambiosExitosos = true;
            },function(error){
                console.log(error);
            });
        }

        
        $scope.logOut = function(){
            localStorage.clear();
        }
    
    })

