import {loadRemoteEntry, LoadRemoteEntryOptions } from "@angular-architects/module-federation";

export function preloadPlugins(pluginUrls: ReadonlyArray<string>): Promise<any> {
  const type = 'module';
  const options: LoadRemoteEntryOptions[] = pluginUrls.map(remoteEntry => ({type, remoteEntry}));
  return Promise.all(options.map(opt => loadRemoteEntry(opt)))
}
