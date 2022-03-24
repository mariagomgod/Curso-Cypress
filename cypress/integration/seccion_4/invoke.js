/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')

describe("Invoke", () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it.skip("Invoke text", () => {

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should('eq', 'Input Validation');
        cy.wait(1000);
        // Invoke prueba un contenido HTML
        cy.get(".page-body > :nth-child(5)").invoke("text").as("info");
        cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.");
        cy.get("[for='firstname']").invoke("text").as("title_name");
        cy.get("@title_name").should("contain", "First name:").then(() => {
            cy.get("#firstname").type("Pedro");
        })
    })

    it("Invoke style", () => {

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should('eq', 'Input Validation');
        cy.wait(1000);
        cy.get("[for='firstname']").invoke("attr", "style", "color: blue; font-size: 50px");
    })
})