/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Referencias a windows", () => {
    
    it("Windows propiedad charset", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html");
        cy.title().should("eq", "The Number Game");
        cy.wait(1000);
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
    })

})