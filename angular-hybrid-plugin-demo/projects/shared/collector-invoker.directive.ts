import {UpgradeComponent} from "@angular/upgrade/static";
import {Directive, ElementRef, Injector, Input} from "@angular/core";

@Directive({
  selector: 'app-collector-invoker'
})
export class CollectorInvokerDirective extends UpgradeComponent {
  constructor(
    el: ElementRef,
    injector: Injector
  ) {
    super('collectorInvoker', el, injector);
  }

  @Input() from!: string;
  @Input() message!: string;
}
