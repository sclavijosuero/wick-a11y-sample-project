/// <reference types="cypress" />

describe('Only Critical Severity Test Suite', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Only Critical Severity Test', { defaultCommandTimeout: 15000 }, () => {
        // cy.checkAccessibility(context, options)
        
        cy.checkAccessibility(null, { includedImpacts: ['critical'] });
    });
});


