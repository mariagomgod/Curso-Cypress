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

    it('Test API GET método 2', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then((response) => {
            let datos;
            datos = JSON.parse(JSON.stringify(response.body));

            cy.log(datos);

            expect(datos[0]).has.property("title", "Cypress ");
            expect(datos[0]).has.property("author", "Rodrigo");
        })
    })
})