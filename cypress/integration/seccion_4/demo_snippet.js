/// <reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Demo del primer snippet', () => { 
    it('Demo uno', () => {
        let time = 1000;
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'ToolsQA');
        cy.wait(time);
        cy.get('#userName').should('be.visible').type('Rodrigo');
        cy.wait(1000);
    })
})