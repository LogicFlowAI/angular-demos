import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UpgradeModule} from "@angular/upgrade/static";
import {CollectorInvokerDirective} from "./collector-invoker.directive";
import {FormsModule} from "@angular/forms";
import {messageCollectorProvider} from "./message-collector.provider";

@NgModule({
  imports: [
    CommonModule,
    UpgradeModule,
    FormsModule
  ],
  declarations: [CollectorInvokerDirective],
  exports: [CollectorInvokerDirective],
  providers: [
    messageCollectorProvider
  ]
})
export class ShareModule {
}
