angular.module('hostApp', ['core', 'appScreens'])
  .config(['screensProvider', (screensProvider) => {

    screensProvider
      .registerScreen({
        name: 'Screen A',
        path: '/screen-a',
        template: '<screen-a></screen-a>',
        order: 0,
        isDefault: true
      })
      .registerScreen({
        name: 'Screen B',
        path: '/screen-b',
        order: 0,
        template: '<screen-b></screen-b>'
      });

  }]);
