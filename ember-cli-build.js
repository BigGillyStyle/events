/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot', {destDir: '/fonts/bootstrap'});
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.svg', {destDir: '/fonts/bootstrap'});
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf', {destDir: '/fonts/bootstrap'});
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff', {destDir: '/fonts/bootstrap'});
  app.import('bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2', {destDir: '/fonts/bootstrap'});
  app.import('bower_components/leaflet/dist/leaflet.js');
  app.import('bower_components/leaflet/dist/images/layers-2x.png');
  app.import('bower_components/leaflet/dist/images/layers.png');
  app.import('bower_components/leaflet/dist/images/marker-icon-2x.png');
  app.import('bower_components/leaflet/dist/images/marker-icon.png');
  app.import('bower_components/leaflet/dist/images/marker-shadow.png');
  app.import('bower_components/Geolib/dist/geolib.js');

  return app.toTree();
};
