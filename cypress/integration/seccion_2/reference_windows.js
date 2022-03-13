/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Referencias a windows", () => {
    
    it.skip("Windows propiedad charset", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html");
        cy.title().should("eq", "The Number Game");
        cy.wait(1000);
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
    })

    it("Windows validar una URL", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html");
        cy.title().should("eq", "The Number Game");
        cy.wait(1000);

        // con include no hace falta que pongamos toda la url para validar, sino 
        // solamente un fragmento
        cy.url().should("include", "random-number.html");

        // con eq sí tenemos que validar la url al completo 
        cy.url().should("eq", "https://testsheepnz.github.io/random-number.html");
    })

})