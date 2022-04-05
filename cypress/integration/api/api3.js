/// <reference types='Cypress' />

import "cypress-file-upload";
require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Demo de una Rest API', () => { 

    it('Test tres', () => {

        const datos = {
            "Nombre": "Rodrigo",
            "Ap": "Villanueva",
            "Am": "Nieto",
            "Tel": "654783452",
            "Dir": "Dirección 1",
            "Cursos": [
                {
                    "Nombre": "PHP",
                    "Descripcion": "Lenguaje de programación PHP"
                },
                {
                    "Nombre": "Java",
                    "Descripcion": "Lenguaje de programación Java"
                },
                {
                    "Nombre": "Python",
                    "Descripcion": "Lenguaje de programación Python"
                }
            ]
        };

        cy.log(datos.Nombre);
        cy.log(datos.Dir);
        cy.log(datos.Cursos);
        cy.log(datos.Cursos[1]);
        cy.log(datos.Cursos[2].Nombre);
        cy.log(datos.Cursos[2].Descripcion);
    })
})