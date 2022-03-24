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

    it.skip("Elemento Find", () => {

        cy.visit("https://web.archive.org/web/20180920012603/http://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.wait(1500);
        cy.get(".btn-group").find(".btn-danger").should("contain", "Red").click();
        cy.wait(1500);
        cy.get(".btn-group").contains("Orange").click();
       
    })

    it.skip("Elementos First y Last", () => {

        cy.visit("https://web.archive.org/web/20180920012603/http://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.wait(1500);
        cy.get(".btn-group").find("button").first().click({force:true});
        cy.wait(1500);
        cy.get(".btn-group").find("button").last().click({force:true});

    })

    it.skip("Elemento NextAll", () => {

        cy.visit("https://web.archive.org/web/20180920012603/http://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.wait(1500);
        cy.get("[type='button']").should("contain", "Green");
        cy.wait(1500);
        cy.get("[type='button']").should("contain", "Green").nextAll().should("have.length", 4);
    })

    it.skip("Elemento parent", () => {

        cy.visit("https://web.archive.org/web/20180920012603/http://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.wait(1500);
        cy.get("[type='button']").parent().should("have.class", "btn-group");
    })

    it.skip("Reto de las tablas", () => {

        cy.visit("https://web.archive.org/web/20180920012603/http://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.wait(1500);
        cy.get("[type='button']").eq(4).should("contain", "All").click({force:true});
        cy.wait(1500);
        cy.get("[type='checkbox']").check({force:true});
    })

    it.skip("Reto de las tablas con for", () => {

        cy.visit("https://web.archive.org/web/20180920012603/http://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.wait(1500);

        for (let x = 1; x <= 4; x++) {
            cy.get("[type='button']").eq(x).click({force:true});
            cy.wait(1500);
            cy.get("[type='checkbox']").check({force:true});
            cy.wait(1500);
        }
        
    })

    it.skip("Reto de las tablas con for y asserts", () => {

        cy.visit("https://web.archive.org/web/20180920012603/http://www.seleniumeasy.com/test/table-records-filter-demo.html");
        cy.title().should('eq', 'Selenium Easy - Table Data Filter Demo');
        cy.wait(1500);

        for (let x = 1; x <= 4; x++) {

            let nombreBoton = "";

            if (x == 1) {
                nombreBoton = "Green";
            } else if (x == 2) {
                nombreBoton = "Orange";
            } else if (x == 3) {
                nombreBoton = "Red";
            } else {
                nombreBoton = "All";
            }

            cy.get("[type='button']").eq(x).should("contain", nombreBoton).click({force:true});
            cy.wait(1500);
            cy.get("[type='checkbox']").check({force:true});
            cy.wait(1500);
        }
        
    })

    it.skip("Reto mostrando los campos de las tablas", () => {

        cy.visit("https://web.archive.org/web/20180920023230/http://www.seleniumeasy.com/test/table-sort-search-demo.html");
        cy.title().should('eq', 'Selenium Easy - Tabel Sort and Search Demo');
        cy.wait(1500);
        
        const datos = [];

        cy.get(".odd td").each(($el, index, $list) => {

            datos[index] = $el.text();

        }).then(() => {

            for (let i = 0; i <= datos.length; i++) {

                cy.log(datos[i]);

            }

        })
    })

    it.skip("Sumando los valores de los campos de la tabla con la clase .odd", () => {

        cy.visit("https://web.archive.org/web/20180920023230/http://www.seleniumeasy.com/test/table-sort-search-demo.html");
        cy.title().should('eq', 'Selenium Easy - Tabel Sort and Search Demo');
        cy.wait(1500);
        
        const datos = [];
        let cantidadOdd = 0;

        cy.get("[role='row'] td").each(($el, index, $list) => {

            datos[index] = $el.text();

        }).then(() => {

            for (let i = 0; i <= datos.length; i++) {

                cy.log(datos[i]);
                // Number para datos de tipo numérico
                if (Number(datos[i])) {

                    cantidadOdd += Number(datos[i]);

                }
            }

            cy.log("La cantidad total de edades de la página es: " + cantidadOdd);
            expect(cantidadOdd).eq(394);

        })
    })

    it("Valor de un campo en específico", () => {

        cy.visit("https://web.archive.org/web/20180920023230/http://www.seleniumeasy.com/test/table-sort-search-demo.html");
        cy.title().should('eq', 'Selenium Easy - Tabel Sort and Search Demo');
        cy.wait(1000);
        
        const campo = cy.get("tbody > :nth-child(7) > :nth-child(2)");

        campo.each(($el, index, $list) => {
            const dato = $el.text();
            cy.log(dato);

            if (dato.includes("Javascript Developer")) {
                campo.eq(index).next().next().then((age) => {
                    const edad = age.text();
                    cy.log(edad);
                    cy.log("La edad de Javascript Developer es: " + edad);
                    expect(edad).to.equal('39');
                })
            }
        })
        
    })
})