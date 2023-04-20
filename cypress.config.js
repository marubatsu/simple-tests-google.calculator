const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '3irvni',
  viewportHeight: 720,
  viewportWidth: 1280,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
      require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-grep/src/plugin')(config);
      return config;
    },
    baseUrl: 'https://www.google.com/',
    spectPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    videoUploadOnPasses: true,
    video: true,
    retries: {
      runMode: 1,
    },
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    pageLoadTimeout: 120000,
  },
});
