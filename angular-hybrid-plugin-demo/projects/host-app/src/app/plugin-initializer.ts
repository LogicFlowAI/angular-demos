import { APP_INITIALIZER, ValueProvider } from '@angular/core';
import { getAngularJSGlobal } from '@angular/upgrade/static';

export interface PluginDefinition {
  module: string;
  script: string;
}

const PLUGINS: PluginDefinition[] = [
  {module: 'pluginC', script: '/assets/plugins/plugin-c/plugin-c.js'},
  {module: 'pluginD', script: '/assets/plugins/plugin-d/plugin-d.js'},
]

const loadScript = (fileName: string): Promise<unknown> =>
  new Promise<unknown>((resolve) => {
    const callback = () => {
      console.log(`Loaded plugin script ${fileName}`);
      resolve(true);
    };
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', fileName);
    //@ts-ignore
    script.onreadystatechange = callback;
    script.onload = callback;
    document.querySelector('head')!.appendChild(script);
  });

const loadSinglePlugin = async (pluginDefinition: PluginDefinition): Promise<string> => {
  try {
    await loadScript(pluginDefinition.script);
  } catch (e) {
    console.log(`Module ${pluginDefinition.module} load fail`, e);
    return '';
  }
  return pluginDefinition.module;
};

const loadPlugins = async () => {
  console.log('Load plugins');
  const pluginsLoad = PLUGINS.map((def) => loadSinglePlugin(def));
  const angularModules = (await Promise.all(pluginsLoad)).filter(x => !!x);
  console.log('Plugins script created');

  getAngularJSGlobal()
    .module('hostApp')
    .requires.push(...angularModules);
  console.log('angularJS plugins added');
};

export const PLUGINS_INITIALIZER: ValueProvider = {
  provide: APP_INITIALIZER,
  useValue: loadPlugins,
  multi: true,
};
