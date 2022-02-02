import {Directive, ElementRef, Injector} from '@angular/core';
import {UpgradeComponent} from "@angular/upgrade/static";

@Directive({
  selector: 'plg-utility'
})
export class UtilityDirective extends UpgradeComponent {
  constructor(el: ElementRef, injector: Injector) {
    super('utility', el, injector);
  }
}
