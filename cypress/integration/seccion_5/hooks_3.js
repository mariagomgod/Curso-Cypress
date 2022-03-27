/// <reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Reto de la función Hooks', () => { 

    before(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
        cy.title().should('eq', 'OrangeHRM');
        cy.wait(2000);
        cy.get('#txtUsername').should('be.visible').clear().type('Admin');
        cy.wait(2000);
        cy.get('#txtPassword').should('be.visible').clear().type('admin123');
        cy.wait(2000);
        cy.get('#btnLogin').should('be.visible').click({force:true});
        cy.wait(2000);
    })

    after(() => {
        cy.xpath('//a[contains(@class,"panelTrigger activated-welcome")]').should('have.class', 'activated-welcome').click({force:true});
        cy.wait(2000);
        cy.xpath('//a[@href="/index.php/auth/logout"][contains(.,"Logout")]').should('be.visible').click({force:true});
        cy.wait(2000);
    })

    it('test uno', () => {
        cy.xpath('//b[contains(.,"Admin")]').should('be.visible').click({force:true});
        cy.wait(3000);
    })

    it('test dos', () => {
        cy.xpath('//b[contains(.,"Leave")]').should('be.visible').click({force:true});
        cy.wait(3000);
    })

    it('test tres', () => {
        cy.xpath('//b[contains(.,"Performance")]').should('be.visible').click({force:true});
        cy.wait(3000);
    })

})