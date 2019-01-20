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
            id_nombre : $scope.nombre,
            cae : $scope.cae,
            gastos_asociados : $scope.gastosAsociados,
            tasa_interes_mensual : $scope.tasaInteresMensual
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
                                
            },function(error){
                console.log(error)
                console.log("Soy un error :D")

            });
        
       
    }
});