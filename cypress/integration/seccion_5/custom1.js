/// <reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('comandos personalizados', () => { 

    before(() => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);
    })

    it('Demo 1', () => {
        cy.Texto_visible("#userName", "Juan");
        cy.Texto_visible("#userEmail", "juan@gmail.com");
        cy.Texto_visible_xpath("//textarea[contains(@id,'currentAddress')]", "Dirección uno");
        cy.Texto_visible_xpath("//textarea[contains(@id,'permanentAddress')]", "Dirección dos");
        cy.Click_force_xpath("//button[contains(@id,'submit')]");
    })
})