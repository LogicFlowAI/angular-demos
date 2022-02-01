function MenuCtrl (screens) {
  this.screens = [...screens.registeredScreens];
  debugger;
  this.screens.sort((a, b) => b.order - a.order);
}

MenuCtrl.$inject = ['screens'];

angular.module('core').directive('menu', () => ({
  restrict: 'E',
  scope: {},
  controller: MenuCtrl,
  controllerAs: 'menu',
  templateUrl: '/core/directives/menu/menu.html'
}))
