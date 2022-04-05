/// <reference types='Cypress' />

import "cypress-file-upload";
require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Demo de una Rest API', () => { 

    it('Test uno', () => {

        const datos = {
            "Nombre": "Rodrigo",
            "Ap": "Villanueva",
            "Am": "Nieto",
            "Tel": "654783452",
            "Dir": "Dirección 1"
        };

        cy.log(datos["Nombre"]);
        cy.log(datos["Ap"]);
        cy.log(datos["Am"]);
        cy.log(datos["Tel"]);
        cy.log(datos["Dir"]);
    })
})