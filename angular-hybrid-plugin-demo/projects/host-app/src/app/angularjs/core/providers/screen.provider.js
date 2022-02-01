function ScreensService(registeredScreens) {
  this.registeredScreens = registeredScreens;
}


function ScreensProvider($routeProvider) {

  console.log($routeProvider);

  this._registeredScreens = [];

  this.registerScreen = ({name, path, template, templateUrl, isDefault, order}) => {
    order = typeof order === "undefined" ? -1 : order;
    this._registeredScreens.push({name, path, template, templateUrl, isDefault, order});

    $routeProvider.when(path, {
      template,
      templateUrl
    });

    if (isDefault) {
      $routeProvider.otherwise(path);
    }

    return this;
  }

  this.$get = () => new ScreensService(this._registeredScreens);

}
console.log('Screen provider registered');
angular.module('core').provider('screens', ['$routeProvider', ScreensProvider]);
