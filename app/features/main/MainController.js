function MainController(WorldWeatherService){
  var ctrl = this;
  ctrl.query = "New York, NY";
  ctrl.displayResult = false;

  ctrl.getForecast = function() {
    ctrl.displayResult = false;
    WorldWeatherService.getForecast(ctrl.query)
      .then(function(result) {

        var currentWeather = result.data.data.current_condition[0];
        currentWeather.high = result.data.data.weather[0].maxtempF;
        currentWeather.low = result.data.data.weather[0].mintempF;

        ctrl.currentCondition = {
          weather: currentWeather,
          sunrise: result.data.data.weather[0].astronomy[0].sunrise,
          sunset: result.data.data.weather[0].astronomy[0].sunset
        };
        ctrl.forecast = result.data.data.weather;
        ctrl.displayResult = true;
      }).catch(function(error) {
        ctrl.displayResult = false;
        alert('Query has returned 0 results. Please try again');
      });
  }
}

MainController.$inject = ['WorldWeatherService'];

angular
  .module('angularWeather')
  .controller('MainController', MainController);
