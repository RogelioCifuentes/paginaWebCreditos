var app = angular.module('AppLogin', [])

app.controller('ctrlLogin', function($scope)
{
    $scope.mostrarError = false;
    $scope.mostrarLogin = true;

$scope.user = {
    nombre: $scope.rut,
    password: $scope.pass,
};  //Creando un objeto

$scope.validarLogin = function(){
    if($scope.rut == "19.090.388-5" & $scope.pass == "12345"){
        $scope.mostrarError = false;
        $scope.mostrarLogin = false;
    }else{
        $scope.mostrarError = true;
        $scope.mostrarLogin = true;

    }

};

        


});

