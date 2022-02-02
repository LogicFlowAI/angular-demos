export function UtilityCtrl() {
  this.doSomeImportantWork = () => {
    console.log('Do some important work');
    setTimeout(() => {
      alert('Utility request completed');
    }, 1000);
  }
}
UtilityCtrl.$inject = [];

export const UtilityDirective = () => ({
  restrict: 'E',
  scope: {},
  controller: UtilityCtrl,
  controllerAs: 'utility',
  template: `
     <div>
       <label>Make utility request:</label>
       <button type="button" ng-click="utility.doSomeImportantWork()">Invoke</button>
     </div>
  `
});
