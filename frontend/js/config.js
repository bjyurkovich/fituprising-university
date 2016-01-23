var fitupU = angular.module('fitupU', ['ngRoute', 'ngCookies'], function(){

});

var serviceHost = {
   
    host: 'http://localhost:9000/api/' //for test server
};

fitupU.value('config', serviceHost);


fitupU.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/landing.html'
            //templateUrl : 'views/course.html'
        })
        .when('/course', {
            templateUrl : 'views/course.html'
            
        })
        .when('/login', {
            templateUrl : 'views/login.html',
        
        })
        .when('/payment', {
            templateUrl : 'views/payment.html',
        
        });
        

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});


fitupU.config(function ($httpProvider) {
  $httpProvider.defaults.withCredentials = true;

  $httpProvider.interceptors.push(function ($q, $injector, $cookies, $window) {
    return {
      request: function (config) {
        if ($cookies.get('token') != undefined) {
          config.headers['x-access-token'] = `${$cookies.get('token')}`;
        }

        return config;
      },

      responseError: function (rejection) {
        if (rejection.status === 401 || rejection.status === 403) {
          $window.sessionStorage.setItem('redirectPath', $window.location.href);

          $cookies.remove('token');
          $cookies.remove('permissions');

          $injector.get('$state').go('login');
        }

        return $q.reject(rejection);
      }
    };
  });
});