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
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.lexisnexis.com/uk/lexispsl/pslhome')
    cy.get('#userAccname').then((userAccname) => {
      if(userAccname[0].innerHTML.includes('Sign-in')){
        cy.get('#signIn_id').type(username)
        cy.get('#signIn_pass').type(password + '{enter}')
      }
    })
})

Cypress.Commands.add('logout', () => {
  cy.get('#siteheader .lexUserDropdown a').contains('Sign Out').click({force: true})
})

Cypress.Commands.add('search', (searchterm) => {
  cy.get('#query').type(searchterm + '{enter}')
  cy.wait(10000)
})

Cypress.Commands.add('clickTopicOverlay', () => {
  cy.get('#changeTopic').click()
})
