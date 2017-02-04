var weatherForecastComponent = {
  bindings:{
    forecast: '='
  },
    templateUrl: 'app/features/weatherForecast/weatherForecast.html',
    controllerAs: 'forecastCtrl',
    controller: function () {
      var ctrl = this;
      ctrl.labels = [];
      ctrl.conditions = [];
      ctrl.series = ['High', 'Low'];
      ctrl.data = [[],[]];

      ctrl.forecast.forEach(function (day) {
        ctrl.labels.push(day.date);
        ctrl.conditions.push(day.hourly[0].weatherDesc[0].value);
        ctrl.data[0].push(day.maxtempF);
        ctrl.data[1].push(day.mintempF);
      });

      ctrl.options = {
        responsive: true,
        tooltips:{
          callbacks: {
            beforeBody: function(tooltipItem, data){
              return "Condition: " + ctrl.conditions[tooltipItem[0].index];
            }
          }
        },
        scales: {
          yAxes: [{
            scaleLabel:{
              display: true,
              labelString: 'Temperature (F)'
            },
            ticks:{
              suggestedMin: 0
            },
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          }],
          xAxes: [{
            scaleLabel:{
              display: true,
              labelString: 'Date'
            }
          }]
        }
      }
    }
}

angular
  .module('angularWeather')
  .component('weatherForecastComponent', weatherForecastComponent);
