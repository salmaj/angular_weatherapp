var myControllers = (function () {
    'use strict';
    var ctrls = angular.module('myControllers', []); 
   
    /* This data cannot be changed */
    var weather = [{"high":"53","low":"45","text":"Showers","cityName":"Vancouver"},
     {"high":"76","low":"61","text":"Partly Cloudy", "cityName":"Havana Cuba"},
     {"high":"77","low":"56","text":"Clear","cityName":"San Diego"}, 
     {"high":"82","low":"70","text":"Partly Cloudy","cityName":"Honolulu"}];
    

    
    // Parent controller
    ctrls.controller('AppCtrl', ['$scope', function ($scope) {
        $scope.title = "Travel Destinations";
         
        // Execute some JavaScript
        $scope.update = function (input, order) { 
            $scope.orderProp = input;
            var alternate;
            if (order === "ascend") {
                alternate = "descend";
            }
            else {
                alternate = "ascend";
            }
            document.getElementById(order).style.border = "2px solid #008B8B";
            document.getElementById(alternate).style.border = "none";
            
        };
        
        $scope.getAllWeather = function() {
            return  weather;
        } 
    
        // Return weather to application.
        $scope.forecast = $scope.getAllWeather();
        
        $scope.showAlert = function(city)  {
            
        }
    
        $scope.cityWeather = weather;
    
    }]);
    

    // Child controller - Inject scope and $routeParams service.
    ctrls.controller('DetailCtrl',
        ['$scope', '$routeParams', function ($scope, $routeParams) {
            $scope.temp = "farenheit";
            // Define empty object.
            $scope.cityWeather = {};
            
 
            // Find weather that matches the parameter and assign it to city.
            for (var i = 0; i < weather.length; i++) {
                if (weather[i].cityName == $routeParams.cityName) {
                    $scope.cityWeather = weather[i];
                    break;
                }
            }
            
            // default values are Farenheit
            $scope.high = $scope.cityWeather.high;
            $scope.low = $scope.cityWeather.low;
            
            // switch back to Farenheit
            $scope.toFarenheit = function () {
                $scope.high = $scope.cityWeather.high;
                $scope.low = $scope.cityWeather.low;
            }
            
             // convert highs and lows to Celsius
            $scope.toCelsius = function () { 
                $scope.high = Math.round((parseInt($scope.cityWeather.high) - 32) / 1.8);
                $scope.low = Math.round((parseInt($scope.cityWeather.low) - 32) / 1.8);
            };
        
            //cornered divs
            $('#detail').corner("30px");    
            
            
        }]);
    

    return ctrls;
     
}());
