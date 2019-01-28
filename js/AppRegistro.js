var app = angular.module('AppRegistro',[])

app.controller('ctrlRegistro',function($scope,$http,$sce,$timeout){

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    $scope.mostrarError = false;
    $scope.mensaje = " ";
    $scope.mostrarBievenida = false;
    $scope.mostrarErrorPassword = false;

    var header_config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

   
    $scope.registrar = function(){
        if($scope.password != $scope.validacionPassword){
            $scope.mostrarError = true;
            $scope.mensaje = "Las password no coinciden."
            return false;
        }
        if($scope.nombre==null){
            $scope.mostrarError=true;
            $scope.mensaje = "Todos los campos deben ser completados."
            return false;
        }
        if($scope.password==null){
            $scope.mostrarError=true;
            $scope.mensaje = "Todos los campos deben ser completados."
            return false;
        }
        if($scope.apellido==null){
            $scope.mostrarError=true;
            $scope.mensaje = "Todos los campos deben ser completados."
            return false;
        }
        if($scope.correo==null){
            $scope.mostrarError=true;
            $scope.mensaje = "Todos los campos deben ser completados."
            return false;
        }
        if($scope.validacionPassword==null){
            $scope.mostrarError=true;
            $scope.mensaje = "Todos los campos deben ser completados."
            return false
            
        }else{

        var form_data = ({
            rut : $scope.rut,
            nombre : $scope.nombre,
            apellido : $scope.apellido,
            password : $scope.password,
            correo : $scope.correo
        })

        $http({
            method : 'POST',
            url : $scope.trustSrc("http://localhost:8080/usuarios/registrar"),
            data : JSON.stringify(form_data),
            config : header_config
        }).then(
            function(response){
                //Condicion por si el usuario se equivoca de contraseña, se desvanezca a la hora de ponerla bien.
                if($scope.mostrarErrorPassword=true){
                    $scope.mostrarErrorPassword=false;
                }
                if(response.data){
                    $scope.mostrarBienvenida=true;
                    
                }else{
                    $scope.mostrarError = true;
                    $scope.mensaje = "Rut o Correo actualmente en uso."
                }
                console.log(response);              
                
               
         
            },function(error){
                console.log(error)
            });
        
        }};


});