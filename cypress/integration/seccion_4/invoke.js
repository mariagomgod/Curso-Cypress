/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')

describe("Invoke", () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it.skip("Invoke text", () => {

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should('eq', 'Input Validation');
        cy.wait(1000);
        // Invoke prueba un contenido HTML
        cy.get(".page-body > :nth-child(5)").invoke("text").as("info");
        cy.get("@info").should("contain", "The information will be submitted to the server if it passes client side validation.");
        cy.get("[for='firstname']").invoke("text").as("title_name");
        cy.get("@title_name").should("contain", "First name:").then(() => {
            cy.get("#firstname").type("Pedro");
        })
    })

    it.skip("Invoke style", () => {

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should('eq', 'Input Validation');
        cy.wait(1000);
        cy.get("[for='firstname']").invoke("attr", "style", "color: blue; font-size: 50px");
    })

    it.skip("Invoke ocultar y mostrar", () => {

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should('eq', 'Input Validation');
        cy.wait(1000);
        cy.get("[for='firstname']").invoke("hide");
        cy.get("#firstname").invoke("hide");
        cy.wait(1000);
        cy.get("[for='firstname']").invoke("show", "3s");
        cy.get("#firstname").invoke("show", "6s");
    })

    it.skip("Invoke reto ocultar campos, rellenar un campo y mostrar campos", () => {

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html");
        cy.title().should('eq', 'Input Validation');
        cy.wait(1000);
        cy.get("[for='surname']").invoke("hide");
        cy.get("#surname").invoke("hide");
        cy.wait(1000);
        cy.get("[for='firstname']").invoke("text").as("title_name");
        cy.get("@title_name").should("contain", "First name:").then(() => {
            cy.get("#firstname").type("Rosa");
            cy.get("[for='surname']").invoke("show", "3s");
            cy.get("#surname").invoke("show", "6s");
            cy.wait(1000);
            cy.get("#surname").type("Olivares Sánchez");
        })
        
    })

    it.skip("Invoke src", () => {

        cy.visit("https://web.archive.org/web/20180920011703/http://www.seleniumeasy.com/test/bootstrap-modal-demo.html");
        cy.title().should('eq', 'Selenium Easy Demo - Bootstrap Modal Demo to Automate');
        cy.wait(1000);
        cy.xpath("//img[contains(@class,'cbt')]").invoke("attr", "src").should("include", "cbt-sponsor-banner_2x.png");
    })

    it("Invoke target", () => {

        cy.visit("https://dvwa.co.uk/");
        cy.title().should('eq', 'DVWA - Damn Vulnerable Web Application');
        cy.wait(1000);
        cy.xpath("//*[@id='pagewidth']/div/div[5]/a[2]").invoke("removeAttr", "target").click({force:true});
    })
})