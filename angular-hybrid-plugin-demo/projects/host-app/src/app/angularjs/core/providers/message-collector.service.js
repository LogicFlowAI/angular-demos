function MessageCollectorService() {
  this.messages = [];
  this.addMessage = (from, message) => {
    this.messages.unshift(`${from}; ${message}`);
  }
}

angular.module('core').service('messageCollector', MessageCollectorService);
