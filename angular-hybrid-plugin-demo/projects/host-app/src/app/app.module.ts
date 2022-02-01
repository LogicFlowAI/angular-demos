import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UpgradeModule} from "@angular/upgrade/static";
import {PLUGINS_INITIALIZER} from "./plugin-initializer";


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
    PLUGINS_INITIALIZER
  ],
  bootstrap: []
})
export class AppModule {
  constructor(
    private _upgrade: UpgradeModule
  ) {
  }

  ngDoBootstrap(): void {
    this._upgrade.bootstrap(document.body, ['hostApp']);
  }
}
