/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')

describe("Configuración y uso de los Snippets", () => { 

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it("Snippet", () => {
        
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);
        cy.get("#userName").should("be.visible").type("Rodrigo");
        cy.wait(1000);
        cy.get("#userEmail").should("be.visible").type("rodrigo@gmail.com");
    })
})