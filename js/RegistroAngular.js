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
            function(data){
                console.log(data);
                
                if(data.status!=500){
                    window.location.href="login.html"        
                }
         
            },function(error){
                console.log(error)
                $scope.mostrarError=true;
                    $scope.mensaje = "Rellene todos los campos."
            });
        
        }};


});