import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {UpgradeModule} from "@angular/upgrade/static";
import {PluginModule, pluginHybrid} from "./modules/plugin/plugin.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PluginModule,
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(
    private _upgrade: UpgradeModule
  ) {
  }

  ngDoBootstrap(): void {
    this._upgrade.bootstrap(document.body, [pluginHybrid.name]);
  }
}
