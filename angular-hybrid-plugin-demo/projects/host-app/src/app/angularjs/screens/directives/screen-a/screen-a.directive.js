function ScreenACtrl(notifier) {

  this.notifier = notifier;

  this.title = 'Screen A';

  this.message = '';

  this.notify = () => {
    this.notifier.notify('Hello from screen A');
  }
}

ScreenACtrl.$inject = ['notifier'];

angular.module('appScreens').directive('screenA', () => ({
  restrict: 'E',
  scope: {},
  controller: ScreenACtrl,
  controllerAs: 'screenA',
  templateUrl: '/screens/directives/screen-a/screen-a.html'
}));
