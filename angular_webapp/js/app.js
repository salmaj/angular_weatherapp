var weatherApp = angular.module('weatherApp', ['ngRoute', 'myControllers']).config(function ($routeProvider) {
     
    /***************************************** 
    * Define routes.
    *****************************************/
    // For the 'detail' page.
    $routeProvider.when('/:cityName', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
    })
    // For the 'default' page.
    .otherwise({ redirectTo: '/' });
});