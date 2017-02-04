angular
  .module('angularWeather', ['ui.router', 'ngMessages', 'chart.js'])
  .config(['$urlRouterProvider', '$stateProvider', '$sceDelegateProvider', function($urlRouterProvider, $stateProvider){
    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainController as mainCtrl',
        templateUrl: 'app/features/main/main.html'
      })
    $urlRouterProvider.otherwise('/');
  }]);
