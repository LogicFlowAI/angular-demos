function AppRootCtrl() {
  this.title = 'Hybrid app plugins example'
}

angular.module('hostApp').directive('appRoot', () => ({
  restrict: 'E',
  scope: {},
  controller: AppRootCtrl,
  controllerAs: 'appRoot',
  templateUrl: '/directives/app-root/app-root.html'
}));
