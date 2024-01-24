const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

     baseUrl: 'http://planning-staging.timeline.co/',
    chromeWebSecurity: false,
    watchForFileChanges: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    specPattern: '**/*.spec.cy.js',
    env: {
      'email': 'ashrafvali.shaik@timelineapp.co',
      'password': 'Shaik@1996'
    },
    // experimentalSessionAndOrigin: true
  },
});
