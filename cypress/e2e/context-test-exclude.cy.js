/// <reference types="cypress" />

describe('Context Exclude Test Suite', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Context Exclude Test', { defaultCommandTimeout: 15000 }, () => {
        // cy.checkAccessibility(context, options)
        
        cy.checkAccessibility({ exclude: '#leftPanel' });
    });
});

