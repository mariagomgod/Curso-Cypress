/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Primer reto", () => {
    
    it(" ", () => {
        cy.visit("https://demoqa.com/webtables");
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);

        cy.get("#searchBox").should("be.visible").type("Cierra");
        cy.wait(1000);
        cy.get("#searchBox").should("be.visible").clear();

        //Agregando campo
        cy.get("#addNewRecordButton").should("be.visible").click();
        cy.wait(1000);
        cy.get("#firstName").should("be.visible").type("Juan").tab().type("Perez").tab().
        type("juan@gmail.com").tab().type("35").tab().type("30000").tab().type("Sistemas");
        cy.get("#submit").should("be.visible").click();

        cy.get("#searchBox").should("be.visible").type("Cierra");
        cy.wait(1000);
        cy.get("#searchBox").should("be.visible").clear();
    })

})