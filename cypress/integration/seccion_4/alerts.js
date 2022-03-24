/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')

describe("Alerts", () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it("Alerta uno", () => {
        
        cy.visit("https://web.archive.org/web/20180920011703/http://www.seleniumeasy.com/test/bootstrap-modal-demo.html");
        cy.title().should('eq', 'Selenium Easy Demo - Bootstrap Modal Demo to Automate');
        cy.wait(1000);
        cy.xpath("//a[@href='#myModal0']").click();
        cy.wait(1000);
        cy.xpath("(//a[@href='#'][contains(., 'Save changes')])[1]").click();
        cy.xpath("//a[@href='#myModal0']").click();
        cy.wait(1000);
        cy.xpath("(//a[@href='#'][contains(., 'Close')])[1]").click();

    })
})