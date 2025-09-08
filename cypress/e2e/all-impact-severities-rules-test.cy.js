/// <reference types="cypress" />

describe('All Impact Severities Test Suite', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('All Impact Severities abd Rules Test', { defaultCommandTimeout: 15000 }, () => {
        cy.checkAccessibility(null, { includedImpacts: ['critical', 'serious', 'moderate', 'minor'], runOnly:['wcag2a', 'wcag2aa', 'wcag2aaa', 'wcag21a', 'wcag21aa', 'wcag21aaa', 'wcag22a', 'wcag22aa',, 'wcag22aaa', 'best-practice'] })
    });
});

