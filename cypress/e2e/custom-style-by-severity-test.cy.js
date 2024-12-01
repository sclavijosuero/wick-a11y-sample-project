/// <reference types="cypress" />

describe('Custom Style by Severity Test Suite', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    const customImpactStyling = {
        critical: { icon: '🔴', style: 'fill: #DE071B; fill-opacity: 0; stroke: #DE071B; stroke-width: 10;' },
        serious:  { icon: '🟢', style: 'fill: #42C600; fill-opacity: 0; stroke: #42C600; stroke-width: 7;' },
        moderate: { icon: '🟣', style: 'fill: #886DE7; fill-opacity: 0.3; stroke: #886DE7; stroke-width: 6; stroke-dasharray: 5,3;' },
        minor:    { icon: '🔵', style: 'fill: #4598FF; fill-opacity: 0; stroke: #4598FF; stroke-width: 14; ' },
        fixme:    { icon: '🪓' }
    }

    it('Custom Style by Severity', { defaultCommandTimeout: 15000 }, () => {
        // cy.checkAccessibility(context, options)
        
        cy.checkAccessibility(
            null,
            {
                impactStyling: customImpactStyling,
                includedImpacts: ['critical', 'serious', 'moderate', 'minor']
            }
        )
    });
});

