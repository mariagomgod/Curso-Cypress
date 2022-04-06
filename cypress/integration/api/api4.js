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

    it('Test API método POST', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                "id": 4,
                "title": "Insertando un valor en cypress api",
                "author": "Juan Pérez"
            }
        }).then((response) => {
            expect(response.status).to.eql(201);
        })
    })

    it('Test API método PUT', () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/1",
            body: {
                "id": 1,
                "title": "Modificando un valor desde cypress en la api",
                "author": "Rodrigo Villanueva"
            }
        }).then((response) => {
            expect(response.status).to.eql(200);
        })
    })

    it('Insertar múltiples valores en la API', () => {

        for (let x = 1 ; x <= 10; x++) {

            let tx = Math.random().toString(10);

            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",
                body: {
                    "id": 8 + x,
                    "title": tx,
                    "author": "Author " + tx
                }
            }).then((response) => {
                expect(response.status).to.eql(201);
            })
        }
        
    })
})