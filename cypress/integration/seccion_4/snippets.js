/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')

describe("", () => { 

    it("", () => {
        
        let time = 500;
        cy.visit("");
        cy.title().should('eq', '');
        cy.wait(time);
        
    })
})