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



