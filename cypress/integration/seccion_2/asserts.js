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

    it.skip("Assert find, eq, validando que el vestido sea nuevo y el precio", () => {
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

    it.skip("Assert contain.text y have.text", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq", "ToolsQA");
        cy.wait(1000);
        cy.get("#userName").should("be.visible").type("Ramon Sanz");
        cy.get("#userEmail").should("be.visible").type("ramon@gmail.com");
        cy.get("#submit").should("be.visible").click();

        // have.text tiene que tener el texto a validar tal cuál (exacto)
        cy.get("#name").should("have.text", "Name:Ramon Sanz");

        // contain.text basta con tener una parte del texto a validar (no todo el texto exacto)
        cy.get("#name").should("contain.text", "Ramon Sanz");
    })

    it("Assert have.value y then", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq", "ToolsQA");
        cy.wait(1000);
        cy.get("#userName").should("be.visible").type("Ramon Sanz");
        cy.get("#userName").should("have.value", "Ramon Sanz").then(() => {
            cy.get("#userEmail").should("be.visible").type("ramon@gmail.com");
            cy.get("#submit").should("be.visible").click();
        });
        

    })

})