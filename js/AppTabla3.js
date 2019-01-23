var app = angular.module('AppTabla',[])

app.controller('ctrlTabla', function($scope,$http,$sce,$log){

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    var header_config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

            
    $scope.llamarDatos = function(){

        //SOLICITUD DE DATOS
        $http({
            method : 'GET',
            url : $scope.trustSrc('http://localhost:8080/bancos/listar'),header_config})
        
        .then(function(response){  
                console.log(response);
                $scope.bancos = response.data;
               // $scope.tasaInteresMensual = 
                console.log(response.data.tasaInteresMensual);
                $scope.generarTabla();
                                    
            }),function(error){
                console.log(error)
            };
    }


    $scope.generarTabla = function(){

        for( var i in $scope.bancos  ){

            var tasaInteres = $scope.bancos[i].tasaInteresMensual; 
            var gastosAsociados = $scope.bancos[i].gastosAsociados;

            var NumCuotas = $scope.numeroCuotas;
            //MONTO BRUTO CREDITO
            $scope.bancos[i].montoBrutoCredito = (gastosAsociados + parseInt($scope.montoSolicitado));
             //FORMULA PARA GENERAR CUOTAS MENSUALES, COSTO TOTAL Y TOTAL DE INTERESES
            var ti = tasaInteres/100;

            var primero = Math.pow(1+ti,$scope.numeroCuotas)*ti;

            var segundo = Math.pow(1+ti,$scope.numeroCuotas)-1;   

            //CUOTA MENSUAL
            //La formula devuelve el valor de cada cuota
            $scope.bancos[i].cuota = parseInt($scope.montoSolicitado * (primero/segundo));     

            //COSTO TOTAL
            $scope.bancos[i].costoTotal = parseInt(($scope.bancos[i].cuota * NumCuotas) + $scope.bancos[i].gastosAsociados);
            //TOTAL DE INTERESES    
            $scope.bancos[i].totalIntereses = parseInt($scope.bancos[i].costoTotal - $scope.bancos[i].montoBrutoCredito);

        
            console.log($scope.numeroCuotas);
            console.log(ti + "Tasa Interes");
            console.log(primero + "Primero");
            console.log(segundo+ "Segundo");
            console.log($scope.bancos[i].tasaInteresMensual+" Tasa interes mensual");
            console.log($scope.numeroCuotas+ " Numero de cuotas");
            
        }

       
        

    
    }

    $scope.Mostrar = true;
    $scope.Ocultar = false;
    $scope.MostrarOtros = function(param){
        if(param == "show"){
            $scope.Mostrar = true;
            $scope.Ocultar = true;
        }else if(param == "hide"){
            $scope.Mostrar = false;
            $scope.Ocultar = false;
        }else{
            $scope.Mostrar = true;
            $scope.Ocultar = false;
        }
    }
});
        

