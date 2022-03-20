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

    it("For dos", () => {
        
        for(let i = 1; i <= 100; i++) {
            let t = 5
            cy.log(t + " x " + i + " = " + t * i);
        }
        
    })

})