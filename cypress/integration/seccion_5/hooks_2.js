/// <reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Hooks ejemplos', () => { 

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    before(() => {
        cy.visit('https://web.archive.org/web/20180920011703/http://www.seleniumeasy.com/test/basic-checkbox-demo.html');
        cy.title().should('eq', 'Selenium Easy - Checkbox demo for automation using selenium');
        cy.wait(1000);
    })

    it('Test uno', () => {
        cy.get('[type="checkbox"]').check().should('be.checked');
        cy.wait(1000);
    })

    it('Test dos', () => {
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked');
        cy.wait(1000);
    })

    it('Test tres', () => {
        cy.get(':nth-child(5) > label > .cb1-element').check().should('be.checked');
        cy.wait(1000);
    })
})