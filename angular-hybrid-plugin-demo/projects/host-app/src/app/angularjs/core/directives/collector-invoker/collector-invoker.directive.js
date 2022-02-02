function CollectorInvokerCtr(messageCollector) {
  this.messageCollector = messageCollector;

  this.from = '';
  this.message = '';

  this.invoke = () => {
    if (!this.message) {
      alert('Please provide a message');
      return;
    }
    this.messageCollector.addMessage(this.from, this.message);
  }
}
CollectorInvokerCtr.$inject = ['messageCollector'];

angular.module('core').directive('collectorInvoker', () => ({
  restrict: 'E',
  scope: {
    from: '@',
    message: '='
  },
  controller: CollectorInvokerCtr,
  controllerAs: 'collectorInvoker',
  bindToController: true,
  templateUrl: '/core/directives/collector-invoker/collector-invoker.html'
}));
