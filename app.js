var app=angular.module("temperatureApp",[]);

	app.controller("temperatureController",	function($scope,$http){
		var absoluteTemp=273.16;
		$scope.getTemperature=function(cityName){			
			$http.get("http://api.openweathermap.org/data/2.5/weather?q="+cityName+",&APPID=012581a1cd5d98c0b591970c753d2a12")
				.then(function(response){
					$scope.lat=response.data.coord.lat;
					$scope.long=response.data.coord.lon;
					$scope.temp=response.data.main.temp-absoluteTemp;
					$scope.temp_max=response.data.main.temp_max-absoluteTemp;
					$scope.temp_min=response.data.main.temp_min-absoluteTemp;
					$scope.humidity=response.data.main.humidity;
					$scope.pressure=response.data.main.pressure;
					$scope.sunrise=response.data.sys.sunrise;
					$scope.sunset=response.data.sys.sunset;
					$scope.visibility=response.data.visibility;	
					$scope.wind_degree=response.data.wind.deg;
					$scope.wind_speed=response.data.wind.speed;
					$scope.weather_description=response.data.weather["0"].description;
					$scope.weather_icon=response.data.weather.icon;
					$scope.city_name=cityName;
					// $scope.=response.data.;
				},function(response){
					$scope.temperatures="Some Error Occured";
				});
		}
	})		