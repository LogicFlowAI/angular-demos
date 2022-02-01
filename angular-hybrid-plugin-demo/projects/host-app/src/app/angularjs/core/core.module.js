angular.module('core', ['ngRoute'])
  .config(['$locationProvider', $locationProvider => {
    $locationProvider.html5Mode(true);
  }]);
