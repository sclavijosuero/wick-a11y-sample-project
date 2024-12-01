/// <reference types="cypress" />

describe('Only Rule Tag wcag20aa Test Suite', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Only Rule Tag wcag20aa Test', { defaultCommandTimeout: 15000 }, () => {
        // cy.checkAccessibility(context, options)
        
        cy.checkAccessibility(null, { runOnly: ['wcag2aa'] });
    });
});


