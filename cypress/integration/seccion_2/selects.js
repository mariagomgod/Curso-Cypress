/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Selects", () => {
    
    it("selects", () => {
        cy.visit("https://web.archive.org/web/20180920020915/http://www.seleniumeasy.com/test/basic-select-dropdown-demo.html");
        cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios");
        cy.wait(1000);
        cy.get("#select-demo").should("be.visible").select("Friday");
        cy.wait(1000);
        cy.get("#select-demo").should("be.visible").select("Saturday");
    })

})