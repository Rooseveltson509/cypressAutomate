/// <reference types="cypress"/>
import 'cypress-file-upload';
import "cypress-real-events/support"
//import 'cypress-arrows'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('i am on the home page', () => {
    cy.visit('/login')
})
When(/I am login with "([^"]*)" and "([^"]*)"/, function (login, password) {
    cy.get('#user-login').type(login)
    cy.get('#password-login').type(password)
    cy.get(".jss58 > button").click()
})
Then('i should be able to connect', function () {
    cy.get(".jss12 > .MuiAvatar-root").click()

    cy.get('#primary-search-account-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded a > li > p')
        .should('have.length', 2)
        .then(($els) => {
            return (
                Cypress.$.makeArray($els)
                    // extract inner text from each element
                    .map((el) => el.innerText)
            )
        })
        .should('be.an', 'array')

    cy.get('body').click(0, 0)
})

When("I click to open the vertical menu", () => {
    let els = cy.get('.MuiIconButton-edgeStart', {
        timeout: 5000
    }).should('be.visible')

    if (els.should('be.visible')) {
        console.log("that's true: ...")
        els.click()
    }
})

And("I click to the bug link", () => {
    cy.mappingList(".jss21 > .MuiList-root > div > a", 1)
})

And("I click to the create bug button", () => {
    cy.get('a > .MuiButtonBase-root > .MuiButton-label').click()

})

And("I choose to report a bug", () => {
    cy.get('.jss137 > .jss139 > img').click()

})

And(/I choose a Dekstop Device with "([^"]*)" and "([^"]*)" and "([^"]*)"/, function (websiteName, websiteUrl, websiteDescription) {
    cy.mappingList(".MuiGrid-root > .MuiGrid-item", 0)
    cy.get('#name-website').type(websiteName)
    cy.get('#address-website').type(websiteUrl)
    cy.get('.notranslate').type(websiteDescription)
    cy.wait(3000)
    const filepath = 'laptop-debug.jpg'
    cy.get('input[type="file"]').attachFile(filepath)

})
When(/I create bugs with "([^"]*)"/, function (createCompany) {
    cy.get('#mui-component-select-os').click()

    cy.mappingList('#menu-os > .MuiPaper-root > .MuiList-root > li', 0)

    cy.get('#mui-component-select-browser').click()
    cy.mappingList('#menu-browser > .MuiPaper-root > .MuiList-root > li', 0)

    cy.get(':nth-child(5) > :nth-child(2) > .MuiButtonBase-root').click()

    cy.get('form > .MuiFormControl-root').then((el) => {
        cy.get(el).type(createCompany)
        cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
        cy.wait(3000)

        let error = cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogContent-root > section > section > form > div > div')
            .should('have.class', 'Mui-error')
        if (error) {
            cy.log("il ya une erreur")
            cy.get('.MuiButton-text').click()
        }
    })

    //severity
    cy.get('#bug-validate-severity').click()
    cy.mappingList('#menu-severity > .MuiPaper-root > .MuiList-root > li', 1)

    //category
    cy.get('input[name="category"]').click().invoke("show");
    cy.contains("Non fonctionnelle").click();
    // confirm the selected value
    cy.get('input[name="category"]').should('have.value', 'Non fonctionnelle')

    //tester
    cy.get('#bug-validate-tester').click()
    cy.mappingList('#menu-tester > .MuiPaper-root > .MuiList-root > li', 0)

    //enterprise
    cy.get('#bug-validate-enterprise').click().invoke("show");
    cy.contains("demoTes").click();

    //project name
    cy.get('#bug-validate-project')
        .click()
        .type("herokuApp debug{enter}")
        cy.wait(3000)
})

Then("I submit the informations", () => {
    cy.log("Bugs created ...")
})
