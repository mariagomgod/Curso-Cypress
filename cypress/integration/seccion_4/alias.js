/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')

describe("Alias", () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it("Alias uno", () => {
        
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should('eq', 'Input Validation');
        cy.wait(1000);
        cy.get("#firstname").should("be.visible").as("name");
        cy.get("@name").type("Pedro");
        cy.get("#surname").should("be.visible").as("sn");
        cy.get("@sn").type("Martínez Ojeda");
        cy.get("#age").should("be.visible").as("ag");
        cy.get("@ag").type("30");
        cy.get("#country").should("be.visible").as("cn");
        cy.get("@cn").select("Spain").should("have.value", "Spain");
        cy.get("#notes").should("be.visible").as("nt");
        cy.get("@nt").type("Demo del contenido");
        cy.get("[type='submit']").click({force:true});

    })
})