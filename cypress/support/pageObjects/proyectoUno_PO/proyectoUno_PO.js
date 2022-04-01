class ProyectoUno_Po {

    visitHome() {
        before(() => {
            cy.visit('https://web.archive.org/web/20180924141731/http://www.seleniumeasy.com/test/input-form-demo.html');
            cy.title().should('eq', 'Selenium Easy - Input Form Demo with Validations');
            cy.wait(2000);
        })
    }

    seccionUno(name, last_name, email) {
        cy.xpath('//input[contains(@name,"first_name")]').should('be.visible').type(name, {force:true});
        cy.wait(1000);
        cy.screenshot("Campo nombre");
        cy.xpath('//input[contains(@name,"last_name")]').should('be.visible').type(last_name, {force:true});
        cy.wait(1000);
        cy.screenshot("Campo apellido");
        cy.xpath('//input[contains(@name,"email")]').should('be.visible').type(email, {force:true});
        cy.wait(1000);
    }

    seccionDos(phone, address, city, state) {
        cy.xpath('//input[contains(@name,"phone")]').should('be.visible').type(phone, {force:true});
        cy.wait(1000);
        cy.xpath('//input[contains(@name,"address")]').should('be.visible').type(address, {force:true});
        cy.wait(1000);
        cy.xpath('//input[contains(@name,"city")]').should('be.visible').type(city, {force:true});
        cy.wait(1000);
        cy.xpath('//select[contains(@name,"state")]').select(state, {force:true});
        cy.wait(1000);
    }

    seccionTres(zip, website, form) {
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
    }
} // final

export default ProyectoUno_Po;