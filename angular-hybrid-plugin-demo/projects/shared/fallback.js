// fallback core module is required to be able to run the plugins standalone

angular.module('core', [])
  .provider('screens', [function () {
    this.registerScreen = () => {};
    this.$get = () => ({});
  }])
  .service('messageCollector', function(){
    this.addMessage = () => {};
  })
  .directive('collectorInvoker', function (){
    return {
      restrict: 'E',
      scope: false,
      template: '<span></span>'
    }
  });

