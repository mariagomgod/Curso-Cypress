/// <reference types='Cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Métodos de carga por Randoms', () => { 

    let numero_pruebas = 5;

    it("mi primer test -> Hola mundo", () => {
        cy.log("Hola mundo");
        cy.wait(1000);
    })

    it("Test random", () => {
        for (let num = 1; num <= numero_pruebas; num++) {

            let estado_arr = ["Rodrigo", "Rosa", "Carlos"];
            let random_estado = estado_arr[Math.floor(Math.random() * estado_arr.length)];
            let cantidad = Math.floor(Math.random() * 3000);

            cy.visit('https://demoqa.com/text-box');
            cy.title().should('eq', 'ToolsQA');
            cy.xpath('//input[contains(@id,"userName")]').should('be.visible').type('Name ' + random_estado);
            cy.wait(500);
            cy.xpath('//input[contains(@id,"userEmail")]').should('be.visible').type('email' + cantidad + 'gmail.com');
            cy.wait(500);
        }
    })
})