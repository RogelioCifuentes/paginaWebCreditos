var app = angular.module('AppTabla',[])

app.controller('ctrlTabla', function($scope,$http,$sce){

   
    $scope.montoSolicitado = 0;
    $scope.numeroCuotas = 0;


    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    var header_config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };


    $http.get($scope.trustSrc('http://localhost:8080/bancos/listar'),header_config)
        
        .then(function(response){  
                console.log(response);
                $scope.bancos = response.data;        
                                    
            }),function(error){
                console.log(error)
                console.log("Soy un error :D")
            };

            
    $scope.formula = function(){

        var ti = $scope.tasaInteresMensual/100;     

        var primero = Math.pow(1+ti,$scope.numeroCuotas)*ti;

        var segundo = Math.pow(1+ti,$scope.numeroCuotas)-1;

        console.log(ti);
        console.log(primero);
        console.log(segundo);
        $scope.cuota = $scope.montoSolicitado * (primero/segundo);

        return $scope.cuota;
    }
});
        

