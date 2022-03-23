/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')

describe("Elementos de una tabla", () => { 

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it.skip("Children", () => {

        cy.visit("https://web.archive.org/web/20180920012603/http://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.wait(1500);
        cy.get(".btn-group").children(".btn-success");
        cy.wait(1500);
        cy.get(".btn-group").children(".btn-success").should("contain", "Green").click({force:true});
        cy.wait(1500);
        cy.get(".btn-group").children(".btn-danger").should("contain", "Red").click({force:true});
        
    })

    it.skip("Elemento EQ", () => {

        cy.visit("https://web.archive.org/web/20180920012603/http://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.wait(1500);
        cy.get("[type='button']").eq(2).should("contain", "Orange").click({force:true});
        cy.wait(1500);
        cy.get("[type='button']").eq(4).should("contain", "All").click({force:true});
    })

    it.skip("Elemento Filter", () => {

        cy.visit("https://web.archive.org/web/20180920012603/http://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.wait(1500);
        cy.get("[type='button']").filter(".btn-warning");
        cy.get("[type='button']").filter(".btn-success");
        cy.wait(1500);
        cy.get("[type='button']").filter(".btn-success").click();
        cy.get("[type='button']").filter(".btn-warning").should("contain", "Orange").click();
    })

    it("Elemento Find", () => {

        cy.visit("https://web.archive.org/web/20180920012603/http://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.wait(1500);
        cy.get(".btn-group").find(".btn-danger").should("contain", "Red").click();
        cy.wait(1500);
        cy.get(".btn-group").contains("Orange").click();
       
    })
})