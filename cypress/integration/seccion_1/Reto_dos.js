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
        cy.get("#name").should("be.visible").type("cypress");
        cy.get("#introduced").should("be.visible").type("2021-03-15");
        cy.get("#discontinued").should("be.visible").type("2025-03-15");

        // Combo
        cy.get("#company").should("be.visible").select("IBM").should("have.value", "13");
        cy.get(".primary").should("be.visible").click();
        cy.xpath("//input[@id='searchbox']").should("be.visible").type("cypress");
        cy.get("#searchsubmit").should("be.visible").click();
    })

})