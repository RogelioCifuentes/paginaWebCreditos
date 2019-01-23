var app = angular.module('AppAdministrador', [])

app.controller('ctrlAdministrador',function($scope,$http,$sce,$timeout){


    $scope.mostrarFormularioEjecutivo = false;
    $scope.mostrarFormularioEjecutivo = false;
    $scope.mostrarMensaje = false;
    $scope.mostrarMensaje1 = false;
    $scope.mostrarMensaje2 = false;
    $scope.mensaje = "";
    $scope.mensaje2= "";
    $scope.mensaje3= "";
    $scope.cae = 0;
    $scope.gastosAsociados = 0;
    $scope.tasaInteresMensual = 0;



    $scope.trustSrc = function(src){
        return $sce.trustAsResourceUrl(src);
    }


    var header_config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

/*
    $scope.cargarRoles = function(){

        return $timeout(function(){

            $scope.roles = $scope.roles || [
                {idRol : 1, descripcion : 'hola', nombre : 'Administrador'},
                {idRol : 2, descripcion : 'hola', nombre : 'Ejecutivo'},
                {idRol : 3, descripcion : 'hola', nombre : 'Usuario'}
            ];
        }, 650);
    }
    

    $scope.consultarRoles = function(){
        $scope.i = 0;
        $http({
            method : 'GET',
            url : $scope.trustSrc("http://localhost:8080/roles/encontrarRolPorId"+i),
            config : header_config  
        }).then(
            function(response){
                console.log(response);
                $scope.rol = response.data;
             
            },function(error){

            });

        */

        
    $scope.crearUsuario = function(){

    var form_data = ({
        rut : $scope.rutUs,
        password : $scope.passwordUs,
        nombre : $scope.nombreUs,
        apellido : $scope.apellidoUs,
        correo : $scope.correoUs
    });

    $http({
        method : 'POST',
        url : $scope.trustSrc("http://localhost:8080/usuarios/registrar"),
        data : JSON.stringify(form_data),
        config : header_config  
    }).then(
        function(response){
            console.log(response);
            if(response.data){
                $scope.mensaje = "Usuario registrado exitosamente";
                $scope.mostrarMensaje = true;
            }
        },function(error){

        });
    }

    $scope.crearUsuarioEjecutivo = function(){

        var form_data = ({
            rut : $scope.rut,
            password : $scope.password,
            nombre : $scope.nombre,
            apellido : $scope.apellido,
            correo : $scope.correo
        });

        $http({
            method : 'PUT',
            url : $scope.trustSrc("http://localhost:8080/usuarios/registrarEjecutivo"),
            data : JSON.stringify(form_data),
            config : header_config  
        }).then(
            function(response){
                console.log(response);
                if(response.data){
                    $scope.mensaje1 = "Ejecutivo registrado exitosamente";
                    $scope.mostrarMensaje1 = true;
                }
                

            },function(error){

            });
        }

        $scope.actualizarDatos = function(){

            var form_data = ({
                idNombre : $scope.idNombre,
                cae : $scope.cae,
                tasaInteresMensual : $scope.tasaInteresMensual,
                gastosAsociados : $scope.gastosAsociados
            });
    
            //METODO PUT PARA ACTUALIZAR CAE, TASA INTERES Y GASTOS ASOCIADOS SEGUN UN ID
            $http({
                method : 'PUT',
                url : $scope.trustSrc("http://localhost:8080/bancos/setear"),
                data : JSON.stringify(form_data),
                config : header_config  
            }).then(
                function(response){
                    console.log(response);
                    if(response.data){
                        $scope.mensaje2 = "Datos actualizados correctamente";
                        $scope.mostrarMensaje2 = true;
                        console.log($scope.cae);
                        console.log($scope.gastosAsociados);
                        console.log($scope.tasaInteresMensual)
                        console.log($scope.idNombre);
                        
                    }
                    
    
                },function(error){
                    console.log(error);
    
                });
            }
    
});