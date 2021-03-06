/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Tipos de Selectores", () => {
    
    it("Selector por id", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);

        cy.get("#userName").should("be.visible").type("Carlos");
        cy.get("#userEmail").should("be.visible").type("demo@gmail.com");
    })

    it("Selector por atributo", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);

        cy.get("[placeholder='Full Name']").should("be.visible").type("Juan Perez Chavez");
    })

    it("Selector por Xpath", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);

        cy.xpath("//*[@id='userName']").should("be.visible", {timeout:5000}).type("Juan Perez");
        cy.xpath("//input[@id='userEmail']").should("be.visible").type("juan@gmail.com");
        cy.xpath("//textarea[@id='currentAddress']").should("be.visible").type("Demo de la dirección");
    })

    it("Selector por Contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);

        cy.get(".custom-control-label").contains("Female").click();
        cy.get(".custom-control-label").contains("Other").click();
    })

    it.only("Selector por copySelector", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);

        cy.get("#userNumber").should("be.visible").type("123456789");
    })

})