/// <reference types="cypress"/>
import 'cypress-file-upload';
import "cypress-real-events/support"
//import 'cypress-arrows'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I open the register page', () => {
    cy.visit('/register')
})
When(/I register with "([^"]*)" and "([^"]*)" and "([^"]*)" and "([^"]*)"/, function (name, firstname,identifier,phoneNumber) {
    cy.get('#lastname').type(name)
    cy.get('#firstname').type(firstname)
    cy.get('#username').type(identifier)
    cy.get('#phone').type(phoneNumber)
    
})
And(/I write my "([^"]*)" and "([^"]*)" and "([^"]*)"/, function (email, password, confirmPassword) {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#confirmPassword').type(confirmPassword)
})

And("I accept the CPU andvalidate the recapcha", () => {
    cy.get('.MuiIconButton-label > #CGU').click()
    //cy.solveGoogleReCAPTCHA()
})