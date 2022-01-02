
describe("Bienvenido al curso de Cypress sección 1", () => {
    
    it("mi primer test -> Hola mundo", () => {
        cy.log("Hola mundo");
        cy.wait(1000);
    })

    it("Segundo test -> campo name", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get("#userName").type("Rodrigo");
        cy.wait(1000);
    })

})