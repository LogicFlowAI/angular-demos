import {UtilityDirective} from "./directives/utility/utility.directive";

export const pluginHybrid = angular
  .module('pluginHybrid', ['core'])
  .config(['screensProvider', (screensProvider) => {
    screensProvider.
      registerScreen({
        name: 'Hybrid Plugin',
        path: '/hybrid-plugin',
        template: '<plg-plugin-downgraded></plg-plugin-downgraded>'
      })
  }])
  .directive('utility', UtilityDirective);
