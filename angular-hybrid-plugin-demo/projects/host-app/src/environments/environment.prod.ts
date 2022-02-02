export const environment = {
  production: true,
  ANGULAR_JS_PLUGIN_LIST: [
    {module: 'pluginC', script: '/assets/plugins/plugin-c/plugin-c.js'},
    {module: 'pluginD', script: '/assets/plugins/plugin-d/plugin-d.js'},
  ],
  HYBRID_PLUGIN_LIST: [
    '/assets/plugins/plugin-hybrid/remoteEntry.js'
  ]
};
