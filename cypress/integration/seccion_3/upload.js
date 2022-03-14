/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')

describe("Cargando archivos", () => {
    
    it("Cargando archivos", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);

        const ruta = "img1.jpg";

        cy.get("[type='file']").attachFile(ruta);
        cy.wait(1000);
    })

})