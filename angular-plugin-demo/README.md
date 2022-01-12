# Angular Plugin Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

The plugin approach is base on [module-federation-plugin](https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/README.md)
The workspace contains:
- plugin-core - a shared library with some basic plugin's functionality
- plugin-one - a standalone angular app, that contains an exportable plugin's module with component
- plugin-two - a standalone angular app, that contains another exportable plugin's module with component
- host-app - the main application, that preloads the scripts of plugin-one and plugin-two and renders plugin's components on user's demands


## Development mode
`npm run start` - It serves both plugin apps and the host app on different ports. Host app will load plugins from 'http://localhost:5001/remoteEntry.js' and 'http://localhost:5002/remoteEntry.js' urls.

## Production mode
`npm run start:prod` - It builds the app into dist folder and lounches the simple standalone server. Plugins are built as host application's assets. It will load plugin from '/assets/plugins/plugin-one/remoteEntry.js' and '/assets/plugins/plugin-two/remoteEntry.js' urls.
Each plugin can be changed and build independently, without stopping and rebuilding the host app. 
To rebuild the single plugin the command `npm run build:plugin-one` or `npm run build:plugin-two` can be used. 
After the plugin is rebuilded, the user needs to refresh the host app in the browser.


