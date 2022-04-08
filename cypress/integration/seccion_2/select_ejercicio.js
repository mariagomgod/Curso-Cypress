/// <reference types='Cypress' />

import 'cypress-file-upload';
require('cypress-plugin-tab')
require('cypress-xpath')
require('cypress-file-upload')
require('@4tw/cypress-drag-drop')


describe('Nueva sección checkbox', () => { 

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it("Select uno", () => {
        cy.visit('https://demoqa.com/select-menu');
        cy.title().should('eq', 'ToolsQA');
        cy.wait(500);
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#withOptGroup > .css-yk16xz-control > .css-1hwfws3').click();
        cy.get('#react-select-2-option-0-1').click();
        cy.get('#selectOne > .css-yk16xz-control').click();
        cy.get('#react-select-3-option-0-4').click();
        cy.get('#oldSelectMenu').select('2');
        cy.get('#selectMenuContainer > :nth-child(7)').click();
        cy.get(':nth-child(7) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
        cy.get('#react-select-4-option-1').click();
        cy.get('#selectMenuContainer > :nth-child(8)').click();
        cy.get('#cars').select(['saab']);
        cy.get('#cars').select(['saab', 'opel']);
        /* ==== End Cypress Studio ==== */
    })

    it.only("Select dos", () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.title().should('eq', 'ToolsQA');
        cy.wait(500);


        /* ==== Generated with Cypress Studio ==== */
        cy.get('#firstName').clear();
        cy.get('#firstName').type('Maria');
        cy.get('#lastName').clear();
        cy.get('#lastName').type('Gomez');
        cy.get('#userEmail').clear();
        cy.get('#userEmail').type('maria@test.com');
        cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
        cy.get('#gender-radio-2').check();
        cy.get('#userNumber').clear();
        cy.get('#userNumber').type('648900000');
        cy.get('#dateOfBirthInput').click();
        cy.get('#dateOfBirth').click();
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
        cy.get('#hobbies-checkbox-1').check();
        cy.get('#close-fixedban > img').click();
        cy.get('#state').click();
        cy.get('#react-select-3-option-0').click();
        cy.get('#city').click();
        cy.get('#react-select-4-option-0').click();
        /* ==== End Cypress Studio ==== */
    })
})