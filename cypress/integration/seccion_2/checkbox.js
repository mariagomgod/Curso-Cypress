/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Nueva seccion Checkbox", () => {
    
    it("check uno", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html");
        cy.title().should("eq", "Selenium Easy - Checkbox demo for automation using selenium");
        cy.wait(1000);
        cy.get("[type='checkbox']").check().should("be.checked");
        cy.wait(1000);
        cy.get("[type='checkbox']").uncheck().should("not.be.checked");
    })

    it("check por selección", () => {
        cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html");
        cy.title().should("eq", "Selenium Easy - Checkbox demo for automation using selenium");
        cy.wait(1000);
        //cy.get("#isAgeSelected").check().should("be.checked");
        //cy.xpath("(//input[contains(@type, 'checkbox')])[5]").check().should("be.checked");
        cy.get("#isAgeSelected").click();
        cy.xpath("(//input[contains(@type, 'checkbox')])[5]").click();
    })

})

