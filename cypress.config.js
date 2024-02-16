const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  fixturesFolder: 'fixtures',
  screenshotsFolder: 'screenshots',
  defaultCommandTimeout: 10000,
  responseTimeout: 35000,
  requestTimeout: 30000,
  pageLoadTimeout: 60000,
  video: false,
  numTestsKeptInMemory: 2,
  trashAssetsBeforeRuns: true,
  experimentalMemoryManagement: true,
  e2e: {
    baseUrl: 'https://jupiter.cloud.planittesting.com/',
    specPattern: 'cypress/e2e/FeatureFiles/**/*.feature',
    async setupNodeEvents(cypressOn, config) {
      const on = require('cypress-on-fix')(cypressOn)
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },
  },
});
