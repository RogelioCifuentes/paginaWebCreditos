var app = angular.module('AppAdministrador', [])

app.controller('ctrlAdministrador',function($scope,$http,$sce,$timeout){

    $scope.user = JSON.parse(localStorage.getItem("user"));
    $scope.mostrarMensaje = false;
    $scope.mostrarMensaje1 = false;
    $scope.mostrarMensaje2 = false;
    $scope.mensaje = "";
    $scope.mensaje2= "";
    $scope.mensaje3= "";

    if($scope.user.rol.idRol!=1){
        window.location.href="PortadaRegistrado.html";
    }else if(!$scope.user){
        window.location.href="Portada.html"
    }

    $scope.ngMostrarOcultarEje = false;
    $scope.ngMostrarOcultarFunEje = function(ver){
        if(ver){
            $scope.ngMostrarOcultarEje = false;
        }else{
            $scope.ngMostrarOcultarEje = true;
            $scope.ngMostrarOcultarBanc = false;
            $scope.ngMostrarOcultarUsu = false;
            $scope.ngMostrarOcultarBan = false;
            $scope.ngMostrarOcultarBancCrear = false;
        }
    }

    $scope.ngMostrarOcultarUsu = false;
    $scope.ngMostrarOcultarFunUsu = function(ver){
        if(ver){
            $scope.ngMostrarOcultarUsu = false;
        }else{
            $scope.ngMostrarOcultarUsu = true;
            $scope.ngMostrarOcultarEje = false;
            $scope.ngMostrarOcultarBanc = false;
            $scope.ngMostrarOcultarBan = false;
            $scope.ngMostrarOcultarBancCrear = false;
        }
    }

    $scope.ngMostrarOcultarBanc = false;
    $scope.ngMostrarOcultarFunBanc = function(ver){
        if(ver){
            $scope.ngMostrarOcultarBanc = false;
        }else{
            $scope.ngMostrarOcultarBanc = true;
            $scope.ngMostrarOcultarEje = false;
            $scope.ngMostrarOcultarUsu = false;
            $scope.ngMostrarOcultarBan = false;
            $scope.ngMostrarOcultarBancCrear = false;
        }
    }
    $scope.ngMostrarOcultarBan = false;
    $scope.ngMostrarOcultarFunBan = function(ver){
        if(ver){
            $scope.ngMostrarOcultarBan = false;
        }else{
            $scope.ngMostrarOcultarBan = true;
            $scope.ngMostrarOcultarEje = false;
            $scope.ngMostrarOcultarBanc = false;
            $scope.ngMostrarOcultarUsu = false;
            $scope.ngMostrarOcultarBancCrear = false;
        }
    }
    $scope.ngMostrarOcultarBancCrear = false;
    $scope.ngMostrarOcultarFunBancCrear = function(ver){
        if(ver){
            $scope.ngMostrarOcultarBancCrear = false;
        }else{
            $scope.ngMostrarOcultarBancCrear = true;
            $scope.ngMostrarOcultarBanc = false;
            $scope.ngMostrarOcultarUsu = false;
            $scope.ngMostrarOcultarBan = false;
            $scope.ngMostrarOcultarEje = false;
        }
    }

    $scope.trustSrc = function(src){
        return $sce.trustAsResourceUrl(src);
    }

    var header_config = {
        headers: {
            'Content-Type' : 'application/json'
    }};

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
        }).then(function(response){
            console.log(response)
            if(response.data){
                $scope.mensaje = "Usuario registrado exitosamente";
                $scope.mostrarMensaje = true;
            }
        },function(error){
            console.log(error)
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
            idNombre : $scope.idNombreBanco,
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
        }).then(function(response){
                console.log(response);
                if(response.data){
                    $scope.mensaje2 = "Datos actualizados correctamente";
                    $scope.mostrarMensaje2 = true;
                    }
        },function(error){
                console.log(error);
                });
        }

    $scope.crearBanco = function(){

        var form_data = ({
            idNombre : $scope.idNombreCREAR,
            cae : $scope.caeCREAR,
            tasaInteresMensual : $scope.tasaInteresMensualCREAR,
            gastosAsociados : $scope.gastosAsociadosCREAR
        });
    
        //METODO PUT PARA AÑADIR BANCO
        $http({
            method : 'PUT',
            url : $scope.trustSrc("http://localhost:8080/bancos/add"),
            data : JSON.stringify(form_data),
            config : header_config  
        }).then(function(response){
                console.log(response);
                if(response.data){
                    $scope.mensajeAdd = "Banco añadido exitosamente.";
                    $scope.mostrarMensajeAdd = true;          
                }
        },function(error){
                console.log(error)
        })};


        $scope.eliminarUsuario = function(){

            var form_data = ({
                rut : $scope.rutDELETE,
            });
        
            $http({
                method : 'PUT',
                url : $scope.trustSrc("http://localhost:8080/usuarios/banear"),
                data : JSON.stringify(form_data),
                config : header_config  
            }).then(
                function(response){
                    console.log(response);
                    if(response.data){
                        $scope.mensajeDEL = "Usuario baneado.";
                        $scope.mostrarMensajeDEL = true;
                    }
                },function(error){
                    console.log(error)
                })}
    
         $scope.logOut = function(){
              localStorage.clear();
        }

});