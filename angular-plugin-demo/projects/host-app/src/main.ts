import { environment } from "./environments/environment";
import {preloadPlugins} from "./shared/preload-plugins";
import {initFederation} from '@angular-architects/native-federation';

initFederation()
  .then(() => preloadPlugins(environment.PLUGIN_LIST))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));


