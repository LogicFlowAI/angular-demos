import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PluginModule} from "./plugin/plugin.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
