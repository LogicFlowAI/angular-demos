import {preloadPlugins} from "./shared/preload-plugins";
import {environment} from "./environments/environment";

preloadPlugins(environment.HYBRID_PLUGIN_LIST)
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));
