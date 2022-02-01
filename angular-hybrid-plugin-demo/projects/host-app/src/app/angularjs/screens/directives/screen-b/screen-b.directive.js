function ScreenBCtrl(notifier) {
  this.notifier = notifier;

  this.title = 'Screen B';

  this.notify = () => {
    this.notifier.notify('Hello from screen B');
  }
}
ScreenBCtrl.$inject = ['notifier']

angular.module('appScreens').directive('screenB', () => ({
  restrict: 'E',
  scope: {},
  controller: ScreenBCtrl,
  controllerAs: 'screenB',
  templateUrl: '/screens/directives/screen-b/screen-b.html'
}));
