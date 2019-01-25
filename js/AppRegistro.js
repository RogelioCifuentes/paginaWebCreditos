var app = angular.module('AppRegistro',[])

app.controller('ctrlRegistro',function($scope,$http,$sce){

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    $scope.mostrarError = false;
    $scope.mensaje = " ";


    var header_config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

   
    $scope.registrar = function(){
        if($scope.password != $scope.validacionPassword){
            console.log("Las contraseñas no coinciden");
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

                if(response.data){
                    window.location.href="login.html"
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