/// <reference types="cypress" />

describe('Report Disabled Test Suite', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Report Disabled', { defaultCommandTimeout: 15000 }, () => {
        // cy.checkAccessibility(context, options)
        
        cy.checkAccessibility(null, { generateReport: false })
    });
});

