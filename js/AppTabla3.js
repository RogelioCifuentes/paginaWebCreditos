var app = angular.module('AppTabla',[])

app.controller('ctrlTabla', function($scope,$http,$sce){

    $scope.montoSolicitado = 0;
    $scope.numeroCuotas = 0;
    $scope.gastosAsociados = 0;
    $scope.montoBrutoCredito = 0;
    $scope.bancos = {};
    $scope.tasaInteresMensual = 0;
    

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    var header_config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

            
    $scope.generarTabla = function(){

        //SOLICITUD DE DATOS
        $http.get($scope.trustSrc('http://localhost:8080/bancos/listar'),header_config)
        
        .then(function(response){  
                console.log(response);
                $scope.bancos = response.data;
               
                                    
            }),function(error){
                console.log(error)
                console.log("Soy un error :D")
            };



        //FORMULA PARA GENERAR CUOTAS MENSUALES, COSTO TOTAL Y TOTAL DE INTERESES
        
        var ti = $scope.tasaInteresMensual/100;

        var primero = Math.pow(1+ti,$scope.numeroCuotas)*ti;

        var segundo = Math.pow(1+ti,$scope.numeroCuotas)-1;   

        //CUOTA MENSUAL
        //La formula devuelve el valor de cada cuota
        $scope.cuota = $scope.montoSolicitado * (primero/segundo);     

        //TOTAL DE INTERESES
        //Se resta el montoBrutoCredito del costoTotal para obtener el total de intereses.
        $scope.totalIntereses = $scope.costoTotal - $scope.montoBrutoCredito;

        //COSTO TOTAL
         //Se le da un valor a la variable costoTotal, para ser asignada a su simulacion.
         $scope.costoTotal =  $scope.gastosAsociados + $scope.montoBrutoCredito;


        console.log(ti);
        console.log(primero);
        console.log(segundo);
        console.log($scope.tasaInteresMensual+" Tasa interes mensual");
        console.log($scope.numeroCuotas+ " Numero de cuotas");
    }

  

});
        

