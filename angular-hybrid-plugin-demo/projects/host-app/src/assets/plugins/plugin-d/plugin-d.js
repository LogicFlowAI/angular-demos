function PluginDCtrl(notifier) {
  this.notifier = notifier;
  this.title = 'Plugin D';
  this.notify = () => {
    this.notifier.notify('Hello from plugin D');
  }
}
PluginDCtrl.$inject = ['notifier'];

angular.module('pluginD', ['core'])
  .config(['screensProvider', (screensProvider) => {
    screensProvider.registerScreen({
      name: 'Plugin D',
      path: '/plugin-d',
      template: '<plugin-d></plugin-d>'
    })
  }])
  .directive('pluginD', () => ({
    restrict: 'E',
    scope: {},
    controller: PluginDCtrl,
    controllerAs: 'pluginD',
    templateUrl: '/assets/plugins/plugin-d/plugin-d.html'
  }));
