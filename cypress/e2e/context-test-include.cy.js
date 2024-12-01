/// <reference types="cypress" />

describe('Context Include Test Suite', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Context Include Test', { defaultCommandTimeout: 15000 }, () => {
        // cy.checkAccessibility(context, options)
        
        cy.checkAccessibility({ include: '#leftPanel' });
    });
});

