/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')

describe("eventos mouse", () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it.skip("drag and drop", () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
        cy.title().should('eq', 'The Internet');
        cy.wait(1000);
        cy.get("#column-a").drag("#column-b", {force:true});
    })

    it.skip("drag and drop 2", () => {
        cy.visit("https://web.archive.org/web/20180926132852/http://www.seleniumeasy.com/test/drag-and-drop-demo.html");
        cy.title().should('eq', 'Selenium Easy Demo - Drag and Drop Demo');
        cy.wait(1000);
        cy.get("#todrag > :nth-child(2)").drag("#mydropzone", {force:true});
    })
})