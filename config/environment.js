/* eslint-env node */

module.exports = function (environment) {
  'use strict'
  const ENV = {
    modulePrefix: 'mechanic-mate',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true
    // ENV.APP.LOG_ACTIVE_GENERATION = true
    // ENV.APP.LOG_TRANSITIONS = true
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true
    // ENV.APP.LOG_VIEW_LOOKUPS = true
    const port = +('GA'.split('').reduce((p, c) =>
      p + c.charCodeAt().toString(16), '')
    )
    ENV.apiHost = `http://localhost:${port}`
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootUrl = '/'
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {
    ENV.rootURL = '/capstone-client'
    ENV.locationType = 'hash'
    ENV.apiHost = 'https://jal90-capstone-api.herokuapp.com'
  }

  return ENV
}
