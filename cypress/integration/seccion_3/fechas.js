/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')

describe("Campos de tipo fecha", () => { 

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it("Fecha uno", () => {
        cy.visit("https://web.archive.org/web/20180920012603/http://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html");
        cy.title().should('eq', 'Selenium Easy - Best Demo website for Bootstrap Date picker');
        cy.wait(1000);
        cy.get("#sandbox-container1 > .input-group > .form-control").should("be.visible").type("09/10/2021");
    })
    
})