// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Texto_visible', (selector, texto) => { 
    cy.get(selector).should('be.visible').type(texto);
    cy.wait(1000);
})

Cypress.Commands.add('Texto_visible_xpath', (selector, texto) => { 
    cy.xpath(selector).should('be.visible').type(texto);
    cy.wait(1000);
})

Cypress.Commands.add('Click', (selector) => { 
    cy.get(selector).should('be.visible').click();
    cy.wait(1000);
})

Cypress.Commands.add('Click_force', (selector) => { 
    cy.get(selector).should('be.visible').click({force:true});
    cy.wait(1000);
})

Cypress.Commands.add('Click_force_xpath', (selector) => { 
    cy.xpath(selector).should('be.visible').click({force:true});
    cy.wait(1000);
})

// Funciones por conjunto o completas

// Función web ToolsQA

Cypress.Commands.add('Bloque_ToolsQA', (name, email, dir1, dir2) => { 
    cy.get('#userName').should('be.visible').type(name);
    cy.wait(1000);
    cy.get('#userEmail').should('be.visible').type(email);
    cy.wait(1000);
    cy.get('#currentAddress').should('be.visible').type(dir1);
    cy.wait(1000);
    cy.get('#permanentAddress').should('be.visible').type(dir2);
    cy.wait(1000);
    cy.get('#submit').should('be.visible').click({force:true});
    cy.wait(1000);
})

Cypress.Commands.add('Bloque_ToolsQA_Dos', (name, email, dir1, dir2) => { 
    cy.Texto_visible("#userName", name);
    cy.Texto_visible("#userEmail", email);
    cy.Texto_visible_xpath("//textarea[contains(@id,'currentAddress')]", dir1);
    cy.Texto_visible_xpath("//textarea[contains(@id,'permanentAddress')]", dir2);
    cy.Click_force_xpath("//button[contains(@id,'submit')]");
})

Cypress.Commands.add('Bloque_Reto_Form', (name, last_name, email,phone, address, city, state, zip, website, form) => { 
    cy.xpath('//input[contains(@name,"first_name")]').should('be.visible').type(name, {force:true});
    cy.wait(1000);
    cy.xpath('//input[contains(@name,"last_name")]').should('be.visible').type(last_name, {force:true});
    cy.wait(1000);
    cy.xpath('//input[contains(@name,"email")]').should('be.visible').type(email, {force:true});
    cy.wait(1000);
    cy.xpath('//input[contains(@name,"phone")]').should('be.visible').type(phone, {force:true});
    cy.wait(1000);
    cy.xpath('//input[contains(@name,"address")]').should('be.visible').type(address, {force:true});
    cy.wait(1000);
    cy.xpath('//input[contains(@name,"city")]').should('be.visible').type(city, {force:true});
    cy.wait(1000);
    cy.xpath('//select[contains(@name,"state")]').select(state, {force:true});
    cy.wait(1000);
    cy.xpath('//input[contains(@name,"zip")]').should('be.visible').type(zip, {force:true});
    cy.wait(1000);
    cy.xpath('//input[contains(@name,"website")]').should('be.visible').type(website, {force:true});
    cy.wait(1000);
    cy.xpath('//input[contains(@value,"yes")]').check().should('be.checked');
    cy.wait(1000);
    cy.xpath('//textarea[contains(@class,"form-control")]').should('be.visible').type(form, {force:true});
    cy.wait(1000);
    cy.xpath('//button[@type="submit"][contains(.,"Send")]').should('be.visible').click({force:true});
    cy.wait(1000);
})

Cypress.Commands.add('Validar_campo', (selector, men, nombre_campo) => { 
    cy.xpath(selector).should('be.visible').then((val) => {
        let dato = val.text();
        let mensaje = men;
        cy.log(dato)
        expect(dato).to.eq(mensaje)

        if(dato == mensaje) {
            cy.log("The " + nombre_campo + " is not valid" );
        }
    })
})



