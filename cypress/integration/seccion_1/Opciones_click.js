/// <reference types="Cypress" />

describe("Opciones de click", () => {
    
    it("Click sencillo", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq', 'OrangeHRM');
        cy.wait(1000);
        cy.get("#txtUsername").should("be.visible").type("Admin");
        cy.wait(1000);
        cy.get("#txtPassword").should("be.visible").type("admin123");
        cy.wait(1000);
        cy.get("#btnLogin").should("be.visible").click();
        cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click();
        cy.get("#menu_admin_Job").should("not.be.visible").click({force: true});
    })

    it.only("Click por coordenadas (x,y)", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq', 'OrangeHRM');
        cy.wait(1000);
        cy.get("#txtUsername").should("be.visible").type("Admin");
        cy.wait(1000);
        cy.get("#txtPassword").should("be.visible").type("admin123");
        cy.wait(1000);
        cy.get("#btnLogin").should("be.visible").click();
        cy.get("#menu_dashboard_index > b").should("be.visible").click(50,5);
    })

})