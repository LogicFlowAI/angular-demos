import {ComponentFactory, ComponentFactoryResolver, Type} from "@angular/core";

export abstract class PluginBaseModule<PLUGIN_COMPONENT> {
  protected constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _componentType: Type<PLUGIN_COMPONENT>
  ) {
  }

  resolveComponent(): ComponentFactory<PLUGIN_COMPONENT> {
    return this._componentFactoryResolver.resolveComponentFactory(this._componentType);
  }

}
