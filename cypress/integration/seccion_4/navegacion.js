/// <reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Navegación entre las páginas', () => { 
    it.skip('Back, forward', () => {
        let time = 1000;
        cy.visit('https://demoqa.com/');
        cy.title().should('eq', 'ToolsQA');
        cy.wait(time);
        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should('be.visible').click({force:true});
        cy.wait(1000);
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should('be.visible').click({force:true});
        cy.wait(1000);
        cy.go("back");
        cy.go("back");
        cy.go("forward");
        cy.go("forward");
    })

    it('Reload', () => {
        let time = 1000;
        cy.visit('https://demoqa.com/');
        cy.title().should('eq', 'ToolsQA');
        cy.wait(time);
        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should('be.visible').click({force:true});
        cy.wait(time);
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should('be.visible').click({force:true});
        cy.wait(time);
        cy.get('#userName').should('be.visible').type('Juan');
        cy.wait(time);
        cy.get('#userEmail').should('be.visible').type('juan@gmail.com');
        cy.wait(time);
        cy.reload();
        cy.wait(time);
        cy.go("back");
    })
})