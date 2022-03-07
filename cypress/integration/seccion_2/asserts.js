/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Asserts", () => {
    
    it.skip("Assert contains", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.title().should("eq", "My Store");
        cy.wait(1000);
        cy.get("#block_top_menu").contains("Women").click();
    })

    it.skip("Assert find, eq", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.title().should("eq", "My Store");
        cy.wait(1000);
        cy.get(".product-container").find(".product-image-container").eq(2).click();
    })

    it("Assert find, eq, validando que el vestido sea nuevo", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.title().should("eq", "My Store");
        cy.wait(1000);
        cy.get(".product-container").find(".product-image-container").eq(2).click();
        cy.get("#product_condition .editable").then((e) => {

            let estado = e.text();
            
            if(estado == "New") {
                cy.log("El vestido es nuevo");
            }
        });
    })


})