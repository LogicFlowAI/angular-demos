import {loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import {Compiler, Injectable, Injector, Type, ViewContainerRef} from '@angular/core';
import {PluginBaseModule} from "./plugin-base-module";

interface PluginModuleDeclaration {
  PluginModule: Type<PluginBaseModule<unknown>>
}

@Injectable({
  providedIn: 'root'
})
export class PluginCoreService {

  constructor(
    private _compiler: Compiler,
    private _injector: Injector
  ) {
  }

  private async renderPlugin(module: PluginModuleDeclaration, view: ViewContainerRef, injector: Injector): Promise<unknown> {
    const moduleFactory = await this._compiler.compileModuleAsync(module.PluginModule);
    const moduleRef = moduleFactory.create(this._injector);
    const componentFactory = moduleRef.instance.resolveComponent();
    const {instance} = view.createComponent(componentFactory, undefined, injector);
    return instance;
  }

  async renderPlugins(pluginUrls: ReadonlyArray<string>, view: ViewContainerRef, injector?: Injector): Promise<unknown> {
    const inj = injector || this._injector;

    const options: LoadRemoteModuleOptions[] = pluginUrls.map(remoteEntry => ({
      type: 'module',
      exposedModule: './Module',
      remoteEntry
    }));

    const modules = await Promise.all(options.map(o => loadRemoteModule<PluginModuleDeclaration>(o)));

    await Promise.all(modules.map(m => this.renderPlugin(m, view, inj)));

    return undefined;
  }
}
