import {loadRemoteModule, LoadRemoteModuleOptions} from "@angular-architects/module-federation";
import {environment} from "../environments/environment";
import {APP_INITIALIZER, Compiler, FactoryProvider, Injector, Type} from "@angular/core";

abstract class PluginModule {
  abstract registerPluginDependency(hostName: string): void;
}

interface PluginModuleDeclaration {
  PluginModule: Type<PluginModule>;
}

const compileModule = async (compiler: Compiler, injector: Injector, module: PluginModuleDeclaration): Promise<PluginModule> => {
  const moduleFactory = await compiler.compileModuleAsync(module.PluginModule);
  const moduleRef = moduleFactory.create(injector);
  return moduleRef.instance;
}

const loadPluginsFactory = (compiler: Compiler, injector: Injector) => {
  return async () => {
    const pluginsList = environment.HYBRID_PLUGIN_LIST;
    const options: LoadRemoteModuleOptions[] = pluginsList.map(remoteEntry => ({
      type: 'module',
      exposedModule: './Module',
      remoteEntry
    }));

    const moduleDeclarations = await Promise.all(options.map(o => loadRemoteModule<PluginModuleDeclaration>(o)));
    const modules = await Promise.all(moduleDeclarations.map(md => compileModule(compiler, injector, md)))
    modules.forEach(m => m.registerPluginDependency('hostApp'));

    return undefined;
  }
};

export const HYBRID_PLUGIN_INITIALIZER: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: loadPluginsFactory,
  deps: [Compiler, Injector],
  multi: true
}
