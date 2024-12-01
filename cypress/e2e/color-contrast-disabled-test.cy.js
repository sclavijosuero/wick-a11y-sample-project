/// <reference types="cypress" />

describe('Color Contrast Disabled Test Suite', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Color Contrast Disabled', { defaultCommandTimeout: 15000 }, () => {
        // cy.checkAccessibility(context, options)
        
        cy.checkAccessibility(null, { rules: { 'color-contrast': { enabled: false } } });
    });
});

