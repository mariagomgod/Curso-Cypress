/// <reference types="Cypress" />

describe("Sección 1. Validando el título", () => {
    
    it("Test validar el título", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'ToolsQA');
        cy.log("Ok la función title funcionó bien");
    })

})