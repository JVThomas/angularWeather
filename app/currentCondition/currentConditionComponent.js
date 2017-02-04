var currentConditionComponent = {
  bindings: {
    condition: '='
  },
  templateUrl: 'app/currentCondition/currentCondition.html',
  controllerAs: 'currentCtrl',
  controller: function () {
    var ctrl = this;
    ctrl.showExtra = false;
    ctrl.toggleExtra = function () {
      ctrl.showExtra = !ctrl.showExtra;
    }
  }
}

angular
  .module('angularWeather')
  .component('currentConditionComponent', currentConditionComponent)
