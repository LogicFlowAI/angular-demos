import { environment } from "./environments/environment";
import {preloadPlugins} from "./shared/preload-plugins";

/*
import { loadRemoteEntry } from '@angular-architects/module-federation';
Promise.all([
  loadRemoteEntry({type: 'module', remoteEntry: '/assets/plugins/plugin-one/remoteEntry.js'})
])
*/

preloadPlugins(environment.PLUGIN_LIST)
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));
