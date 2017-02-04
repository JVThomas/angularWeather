function WorldWeatherService($http){
  var service = this;

  service.getForecast = function (location) {
      return $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?key=466afb6f50d44213988144509170402&q="
      +location 
      +"&num_of_days=7&tp=24&format=json");
  }
}

WorldWeatherService.$inject = ['$http'];

angular
  .module('angularWeather')
  .service('WorldWeatherService', WorldWeatherService);
