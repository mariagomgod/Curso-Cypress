/// <reference types="Cypress" />

require('cypress-plugin-tab')
require('cypress-xpath')

describe("Asserts", () => {
    
    it.skip("Assert contains", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.title().should("eq", "My Store");
        cy.wait(1000);
        cy.get("#block_top_menu").contains("Women").click();
    })

    it.skip("Assert find, eq", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.title().should("eq", "My Store");
        cy.wait(1000);
        cy.get(".product-container").find(".product-image-container").eq(2).click();
    })

    it("Assert find, eq, validando que el vestido sea nuevo y el precio", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.title().should("eq", "My Store");
        cy.wait(1000);
        cy.get(".product-container").find(".product-image-container").eq(3).click();
        cy.get("#product_condition .editable").then((e) => {
            let estado = e.text();
            
            if (estado == "New") {
                cy.log("El vestido es nuevo");
            }
        });

        cy.get("#our_price_display").then((e) => {
            let precio = e.text();
            precio = precio.slice(1, 3);
            cy.log(precio);

            if (precio > 30) {
                cy.log("El vestido no está dentro de nuestro presupuesto. No lo podemos comprar");
                cy.xpath("//*[@id='columns']/div[1]/a[2]").click();
                cy.wait(1000);
            } else {
                cy.log("El vestido está dentro de nuestro presupuesto. Continua con la compra");
                cy.get("#add_to_cart").click();
                cy.wait(1000);
            }
        });
    })


})