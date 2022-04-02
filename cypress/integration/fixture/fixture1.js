/// <reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Carga por Fixture', () => { 

/*     before(function() {
        cy.fixture('datos2').then(function(data) {
            globalThis.data = data;
        })
    }) */

    before(function() {
        cy.fixture("datos2").as("datos_json"); // el alias
    })

    it('test uno cargando desde json', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);

        cy.get("@datos_json").then((data) => {
            cy.get('#userName').should('be.visible').type(data.nombre);
            cy.wait(1000);
            cy.get('#userEmail').should('be.visible').type(data.email);
            cy.wait(1000);
            cy.get('#currentAddress').should('be.visible').type(data.dir1);
            cy.wait(1000);
            cy.get('#permanentAddress').should('be.visible').type(data.dir2);
            cy.wait(1000);
            cy.get('#submit').should('be.visible').click({force:true});
            cy.wait(1000);
        })
    })
})