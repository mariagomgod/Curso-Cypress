import ProyectoUno_Po from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO';
/// <reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Page objects models', () => { 

    const master = new ProyectoUno_Po();

    master.visitHome();

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it('test sección uno', () => {
        master.seccionUno("Carlos", "Olmo", "carlos@gmail.com");
    })

    it('test sección dos', () => {
        master.seccionDos("689686868", "Calle Pontón, 15", "Estados Unidos", "Colorado");
    })

    it('test sección tres', () => {
        master.seccionTres("1234", "demo.com", "Proyecto Uno Demo");
    })
})