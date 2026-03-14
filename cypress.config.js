const { defineConfig } = require("cypress");

const addAccessibilityTasks = require('wick-a11y/accessibility-tasks');

module.exports = defineConfig({
  allowCypressEnv: false,
  // Both configurations work (env or expose) but env will override expose
  // env: {
  //   enableAccessibilityVoice: true,
  //   generateReport: 'basic',
  // },
  // expose: {
  //   enableAccessibilityVoice: true,
  //   generateReport: 'basic',
  // },

  retries: {
    openMode: 1,
    runMode: 0,
  },

  env: {
    enableAccessibilityVoice: true
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Add accessibility tasks
      addAccessibilityTasks(on);
    },

    baseUrl: "https://parabank.parasoft.com/parabank",
  },
    
  accessibilityFolder: 'cypress/reports/accessibility',
});

