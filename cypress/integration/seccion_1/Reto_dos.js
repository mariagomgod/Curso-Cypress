/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Probando la aplicación", () => {
    
    it("Segundo reto", () => {
        cy.visit("https://computer-database.gatling.io/computers");
        cy.title().should('eq', 'Computers database');
        cy.wait(1000);

        // Buscando
        cy.xpath("//input[@id='searchbox']").should("be.visible").type("ACE");
        cy.get("#searchsubmit").should("be.visible").click();

        // Añadir
        cy.get("#add").should("be.visible").click();
    })

})