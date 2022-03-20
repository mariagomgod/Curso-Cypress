/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')

describe("Bucles For - Each", () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it.skip("For uno", () => {
        
        for(let i = 1; i <= 100; i = i + 10) {
            cy.log("Número: " + i);
        }

    })

    it.skip("For dos", () => {
        
        for(let i = 1; i <= 100; i++) {
            let t = 5
            cy.log(t + " x " + i + " = " + t * i);
        }
        
    })

    
    it.skip("Each uno", () => {

        cy.visit("http://automationpractice.com/index.php");
        cy.title().should('eq', 'My Store');
        cy.wait(1000);
        cy.get(".product-name").each(($el, index, $list) => {
            
           //cy.log($el.text());

            let vestido = $el.text();

            cy.log(vestido);

        })
        
    })

    it.skip("Each dos", () => {

        cy.visit("http://automationpractice.com/index.php");
        cy.title().should('eq', 'My Store');
        cy.wait(1000);
        cy.get(".product-name").each(($el, index, $list) => {

            let vestido = $el.text();

            if(vestido.includes("Printed Summer Dress")) {
                // wrap envuelve la promesa devuelta por el código de la aplicación
                cy.wrap($el).click();
            }

        })
        
    })

    it("Each reto", () => {

        cy.visit("http://automationpractice.com/index.php");
        cy.title().should('eq', 'My Store');
        cy.wait(200);
        const datos = [];

        cy.get("#center_column .product-name").each(($el, index, $list) => {

            datos[index] = $el.text();

        }).then(() => {

            for(let x = 0; x <= datos.length; x++) {
                cy.get("#center_column .product-name").eq(x).click({force:true});
                cy.wait(200);
                cy.get("#quantity_wanted").should("be.visible").clear().type("4");
                cy.get("#group_1").select("M").should("have.value", "2");
                cy.wait(200);
                cy.get(".exclusive > span").should("be.visible").click({force:true});
                cy.wait(200);
                cy.xpath("//span[contains(., 'Proceed to checkout')]").click({force:true});
                cy.wait(200);
                cy.get(".icon-home").should("be.visible").click({force:true});
            }
        })
        
    })

})