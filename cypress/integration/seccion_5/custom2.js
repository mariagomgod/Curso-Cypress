/// <reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('descripcion', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    before(() => {

        cy.visit('https://web.archive.org/web/20180924141731/http://www.seleniumeasy.com/test/input-form-demo.html');
        cy.title().should('eq', 'Selenium Easy - Input Form Demo with Validations');
        cy.wait(2000);
    })

    
    it('test', () => {
        cy.Bloque_Reto_Form('Carlos', 'Rodríguez', 'carlos@gmail.com', '699991234', 'Dirección uno', 'Málaga', 'Alabama', '1234', 'demo.com', 'Proyecto demo uno');
    })
})