/// <reference types='Cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Nueva sección checkbox', () => { 

    it("Select uno", () => {
        cy.visit('https://demoqa.com/select-menu');
        cy.title().should('eq', 'ToolsQA');
        cy.wait(500);
    })
})