/// <reference types="Cypress" />

describe("Ejemplo de Type pageUpd, pageDown", () => {

    it("Type pageUp", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);
        cy.get('#userName').type('{pageup}');
        cy.wait(1000);
    })

    it("Type pageDown", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);
        cy.get('#userName').type('{pagedown}');
        cy.wait(1000);
    })

}) 