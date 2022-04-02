/// <reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Carga por Fixture', () => { 

    before(function() {
        cy.fixture('datos2').then(function(data) {
            globalThis.data = data;
        });
    })

    it('test uno cargando desde json', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);
        
    })
})