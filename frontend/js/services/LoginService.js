fitupU.factory('LoginService', function(config, $q, $http){
	factory = {};
  
 	// login post   
    factory.getLatest = function () {
        var recordsPromise = $q.defer();

    	$http.get(serviceHost.host + 'unit/1/energy/latest')
    	.success(function (data, status, headers, config) {        	
            recordsPromise.resolve(data);
        })
        .error(function (data){
        	// resolve with a reject and the error message
            recordsPromise.reject("error");
        });

        return recordsPromise.promise;
    };

    return factory;
})