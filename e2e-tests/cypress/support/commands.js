// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@cypress/xpath');

Cypress.Commands.add('getIframeBody', (iFrameLocator) => {
  
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy.get(iFrameLocator)
  .its('0.contentDocument.body').should('not.be.empty')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  // https://on.cypress.io/wrap
  .then(cy.wrap)
})