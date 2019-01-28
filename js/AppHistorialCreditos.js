var app = angular.module('AppHistorialCreditos', [])

app.controller('ctrlHistorialCreditos',function($scope,$http,$sce){

    $scope.mostrarMensaje = false;
    $scope.mensaje = "";
    $scope.user = JSON.parse(localStorage.getItem("user"));


    $scope.trustSrc = function(src){
        return $sce.trustAsResourceUrl(src);
    }


    var header_config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }; 
      
        //METODO PUT PARA ACTUALIZAR correo y password USUARIO
        $http({
            method : 'PUT',
            url : $scope.trustSrc("http://localhost:8080/creditosGenerados/traerCreditos"),
            data : JSON.stringify({rut : $scope.user.rut}),
            config : header_config  
        }).then(
            function(response){
                $scope.creditos = response.data;
                console.log(response.fechaCredito);
                $scope.mostrarMensaje = true;
                $scope.mensaje = "Datos actualizados.";
               
            },function(error){
                console.log(error);
            });
    


        

        
        $scope.logOut = function(){
            localStorage.clear();
        }
    
    })

