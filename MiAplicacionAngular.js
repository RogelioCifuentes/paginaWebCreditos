
var app = angular.module('AppLogin', [])

app.controller('ctrlLogin',function($scope,$http){

   

    $scope.mostrarError = false;
    $scope.mostrarLogin = true;
    $scope.comentarios = [];
    $scope.login = {};


    
    var form_data = $.param({
        rut: $scope.rut,
        password : $scope.password
    })
    var header_config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    };
   
        $scope.login = function(){
            $http({
                method : 'GET',
                url : "http://localhost:8080/usuarios/login?",
                data : form_data,
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

