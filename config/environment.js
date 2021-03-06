/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'events',
    environment: environment,
    contentSecurityPolicy: {
      'script-src': "'self' https://maxcdn.bootstrapcdn.com https://*.firebaseio.com",
      'font-src': "'self' https://fonts.gstatic.com https://maxcdn.bootstrapcdn.com",
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com http://nominatim.openstreetmap.org",
      'style-src': "'self' https://fonts.googleapis.com https://maxcdn.bootstrapcdn.com https://cdn.jsdelivr.net",
      'img-src': "'self' http://*.openstreetmap.org"
    },
    firebase: 'https://blistering-fire-1344.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
