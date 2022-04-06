/// <reference types='Cypress' />

import "cypress-file-upload";
require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('API consulta GET', () => { 

    let datos;

    it('Test API GET', () => {

        datos = cy.request("http://localhost:3000/posts");
        datos.its("status").should("equal", 200);
    })

    it('Test API GET2', () => {

        datos = cy.request("http://localhost:3000/posts")
        .should((response) => {
            expect(response.status).to.eq(200);
        })
    })
})