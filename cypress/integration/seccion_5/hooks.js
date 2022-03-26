/// <reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Hooks', () => {

    before(() => {
        cy.log("Principio de todo, solo una vez");
        cy.wait(1000);
    })

    beforeEach(() => {
        cy.log("Esto se repite en cada uno de los tests");
        cy.wait(1000);
    })

    afterEach(() => {
        cy.log("Esto se hace al final de todos los tests");
        cy.wait(1000);
    })

    after(() => {
        cy.log("Final de todo: último ciclo");
        cy.wait(1000);
        cy.visit("https://demoqa.com/");
    })

    it("Test uno", () => {
        cy.log("Test uno");
        cy.wait(1000);
    })

    it("Test dos", () => {
        cy.log("Test dos");
        cy.wait(1000);
    })

    it("Test tres", () => {
        cy.log("Test tres");
        cy.wait(1000);
    })

    it("Test cuatro", () => {
        cy.log("Test cuatro");
        cy.wait(1000);
    })

    it("Test cinco", () => {
        cy.log("Test cinco");
        cy.wait(1000);
    })
})