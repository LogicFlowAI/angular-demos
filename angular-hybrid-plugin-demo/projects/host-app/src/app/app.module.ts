import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {FormsModule} from '@angular/forms';
import {ShareModule} from '@shared';
import {PLUGINS_INITIALIZER} from './plugin-initializer';
import {HYBRID_PLUGIN_INITIALIZER} from './hybrid-plugin-initalizer';

// double import because of https://github.com/angular/angular/issues/37102
import {MessageListComponent} from './components/message-list/message-list.component';
import './components/message-list/message-list.component';

import {ScreenComponent} from './components/screen/screen.component';
import './components/screen/screen.component';


@NgModule({
  declarations: [
    MessageListComponent,
    ScreenComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    UpgradeModule,
    ShareModule
  ],
  providers: [
    PLUGINS_INITIALIZER,
    HYBRID_PLUGIN_INITIALIZER
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
