import {ComponentFactoryResolver, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginComponent } from './components/plugin/plugin.component';
import {PluginBaseModule} from "plugin-core";

@NgModule({
  declarations: [
    PluginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PluginComponent
  ]
})
export class PluginModule extends PluginBaseModule<PluginComponent>{
  constructor(
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(componentFactoryResolver, PluginComponent);
  }
}
