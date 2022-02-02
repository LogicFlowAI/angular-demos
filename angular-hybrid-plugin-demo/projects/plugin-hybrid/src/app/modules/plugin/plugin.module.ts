import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {getAngularJSGlobal, UpgradeModule} from "@angular/upgrade/static";
import {ShareModule} from "@shared";
import {pluginHybrid} from "./share";

import { UtilityDirective } from './components/utility/utility.directive';

// double import because of https://github.com/angular/angular/issues/37102
import { PluginComponent } from './components/plugin/plugin.component';
import './components/plugin/plugin.component';



@NgModule({
  declarations: [
    PluginComponent,
    UtilityDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    UpgradeModule,
    ShareModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    UpgradeModule,
    PluginComponent,
    UtilityDirective,
    ShareModule
  ]
})
export class PluginModule {
  registerPluginDependency(hostModuleName: string): void {
    getAngularJSGlobal()
      .module(hostModuleName)
      .requires.push(pluginHybrid.name)
  }
}

export * from './share';
