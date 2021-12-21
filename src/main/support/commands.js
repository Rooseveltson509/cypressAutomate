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

Cypress.Commands.add("mappingList", (xpath, positionElement) => {
    cy.get(xpath).should('be.visible')
    cy.get(xpath).as("options")
    cy.get("@options")
        .its('length')
        .then(() => {
            cy.get("@options").eq(positionElement).click()
        })
})

Cypress.Commands.add('addPet', (petCategoryName, petName, petStatus) => {
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet',
        body: {
            "id": 0,
            "category": {
                "id": 0,
                "name": petCategoryName
            },
            "name": petName,
            "status": petStatus
        },
    }).then(response => {
        cy.log(response.status)
        cy.log(JSON.stringify(response.body))
    })
})

Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
    // Wait until the iframe (Google reCAPTCHA) is totally loaded
    cy.wait(500);
    cy.get('#g-recaptcha *> iframe')
      .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('.recaptcha-checkbox-border')
          .should('be.visible')
          .click();
      });
  });