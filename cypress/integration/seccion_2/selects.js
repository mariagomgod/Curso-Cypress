/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Selects", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it("selects", () => {
        cy.visit("https://web.archive.org/web/20180920020915/http://www.seleniumeasy.com/test/basic-select-dropdown-demo.html");
        cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios");
        cy.wait(1000);
        cy.get("#select-demo").should("be.visible").select("Friday", {force: true}).should("have.value", "Friday");
        cy.wait(1000);
        cy.get("#select-demo").should("be.visible").select("Saturday", {force: true}).should("have.value", "Saturday");

    })

    it.only("selects", () => {
        cy.visit("https://www.google.com");
        cy.title().should("eq", "Google");
        cy.wait(1000);
        cy.get("[name='q']").should("be.visible").type("Ferrari");
        cy.wait(1000);
        cy.get("#voiceSearchButton").should("be.visible").click();
    })

})