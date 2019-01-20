var app = angular.module('AppTabla',[])

app.controller('ctrlTabla', function($scope,$http,$sce){

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    $scope.nombre="";
    $scope.cae= 0;
    $scope.gastosAsociados = 0;
    $scope.tasaInteresMensual = 0;
    $scope.listaBancos=[];

    var header_config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

    $scope.generarTabla = function(){

        var form_data = ({
            idNombre : $scope.nombre,
            cae : $scope.cae,
            gastosAsociados : $scope.gastosAsociados,
            tasaInteresMensual : $scope.tasaInteresMensual
        })

        $http({
            method : 'GET',
            url : $scope.trustSrc("http://localhost:8080/bancos/listar"),
            data : JSON.stringify(form_data),
            config : header_config
        }).then(
            function(data){
                console.log(data);
                $scope.listaBancos = data.records;
                console.log("Hola");
                                
            },function(error){
                console.log(error)
                console.log("Soy un error :D")

            });
        
       
    }
});