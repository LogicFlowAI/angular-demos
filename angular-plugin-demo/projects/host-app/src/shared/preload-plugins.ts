import {loadRemoteModule, LoadRemoteModuleOptions } from "@angular-architects/native-federation";

export function preloadPlugins(pluginUrls: ReadonlyArray<string>): Promise<any> {
  const options: LoadRemoteModuleOptions[] = pluginUrls.map(remoteEntry => ({remoteEntry, exposedModule: './Module'}));
  return Promise.all(options.map(opt => loadRemoteModule(opt)))
}
