# Angular Hybrid Plugin Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

The project demonstrates how [module-federation-plugin](https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/README.md) work with hybrid angularjs/Angular apps.
The workspace contains:

###host-app
The main hybrid application. 

angular.js code is places in `src/app/angularjs` folder. These scripts are included in the main app bundle, through the scripts section in `angular.json` file.

Also in the assets main app has two pure angular.js plugins - some directives and scripts that are loaded dynamically.

###plugin-hybrid
A standalone hybrid application, that contains an exportable module, which can be loaded by module-federation approach

###shared
Folder that contains some functionality, that is shared between the other projects in the workspace. In production case it should be formed a separate library.

## Development mode
`npm run start` - It serves both plugin hybrid app and the host hybrid app on different ports.

Host app will load plugin from `http://localhost:5001/remoteEntry.js` url.

## Production mode
`npm run start:prod` - It builds the app into dist folder and launches the simple standalone server. Plugin is built as host application's assets.
