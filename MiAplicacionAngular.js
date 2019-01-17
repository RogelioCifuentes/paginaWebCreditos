
var app = angular.module('AppLogin', [])

app.controller('ctrlLogin',function($scope,$http,$sce){

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    $scope.mostrarError = false;
    $scope.mostrarLogin = true;


    var header_config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
   
        $scope.login = function(){
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
                function(data){
                 console.log(data);
                
   
                },function(error){
                    console.log($scope.rut);
                    console.log($scope.password);
                    console.log("error");
                    console.log(error);
                   
   
                });
               
            };  
});

