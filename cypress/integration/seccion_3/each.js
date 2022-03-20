/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')

describe("Bucles For - Each", () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it.skip("For uno", () => {
        
        for(let i = 1; i <= 100; i = i + 10) {
            cy.log("Número: " + i);
        }

    })

    it.skip("For dos", () => {
        
        for(let i = 1; i <= 100; i++) {
            let t = 5
            cy.log(t + " x " + i + " = " + t * i);
        }
        
    })

    
    it("Each uno", () => {

        cy.visit("http://automationpractice.com/index.php");
        cy.title().should('eq', 'My Store');
        cy.wait(1000);
        cy.get(".product-name").each(($el, index, $list) => {
            
           //cy.log($el.text());

            let vestido = $el.text();

            cy.log(vestido);

        })
        
    })

})