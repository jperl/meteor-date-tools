Package.describe({
  name: 'dispatch:date-tools',
  summary: 'Timezone aware date helpers.',
  version: '1.0.0',
  git: 'https://github.com/DispatchMe/meteor-date-tools.git'
});

Package.onUse(function (api) {
  api.use([
    'tracker',
    'mrt:moment-timezone@0.2.1'
  ], 'web');

  api.addFiles([
    'date_tools.js',
    'timezone_map.js',
    'timezone.js',
    'formatters.js'
  ], 'web');

  api.export('DateTools', 'web');
});

// XXX make this dependency configurable. Right now we are
// using a fork to support our backend request structure.
Cordova.depends({
  'org.apache.cordova.globalization': '0.3.3'
});

Package.onTest(function (api) {
  api.use([
    'tinytest',
    'dispatch:date-tools'
  ], 'web');

  api.addFiles([
    'date_tools_test.js'
  ], 'web');
});
