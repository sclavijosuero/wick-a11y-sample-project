/// <reference types="cypress" />

describe('All Impact Severities Test Suite', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('All Impact Severities Test', { defaultCommandTimeout: 15000 }, () => {
        // cy.checkAccessibility(context, options)
        
        cy.checkAccessibility(null, { includedImpacts: ['critical', 'serious', 'moderate', 'minor'] });
    });
});

