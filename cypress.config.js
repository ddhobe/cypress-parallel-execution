const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter=require('@shelex/cypress-allure-plugin/writer')

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      allureWriter(on,config);
      
      return config;
      
      // implement node event listeners here

    },
    specPattern: "cypress/e2e/*.feature",
  },
});

// import { defineConfig } from 'cypress'

// export default defineConfig({
//   e2e: {
//     experimentalSessionAndOrigin: true,
//     setupNodeEvents(on, config) {
//       // node events if needed
//     },
//   },
// })

