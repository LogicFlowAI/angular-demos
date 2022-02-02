function PluginCCtrl(notifier) {
  this.notifier = notifier;
  this.title = 'Plugin C';
  this.notify = () => {
    this.notifier.notify('Hello from plugin C');
  }
}
PluginCCtrl.$inject = ['notifier'];

angular.module('pluginC', ['core'])
  .config(['screensProvider', (screensProvider) => {
    screensProvider.registerScreen({
      name: 'Plugin C',
      path: '/plugin-c',
      template: '<plugin-c></plugin-c>'
    })
  }])
  .directive('pluginC', () => ({
    restrict: 'E',
    scope: {},
    controller: PluginCCtrl,
    controllerAs: 'pluginC',
    templateUrl: '/assets/plugins/plugin-c/plugin-c.html'
  }));
