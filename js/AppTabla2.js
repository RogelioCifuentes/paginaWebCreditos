var app = angular.module('AppTabla',[])

app.controller('ctrlTabla', function($scope,$http,$sce){

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    var header_config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };


        $http.get($scope.trustSrc('http://localhost:8080/bancos/listar'),header_config)
            .then(
            function(data){
                console.log(data);
                $scope.listaBancos = data;
                console.log("Hola");
                                
            }),function(error){
                console.log(error)
                console.log("Soy un error :D")

            };
        })
       
    
