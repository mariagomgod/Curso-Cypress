/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Tipos de Selectores", () => {
    
    it("Selector por id", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);

        cy.get("#userName").should("be.visible").type("Carlos");
        cy.get("#userEmail").should("be.visible").type("demo@gmail.com");
    })

})