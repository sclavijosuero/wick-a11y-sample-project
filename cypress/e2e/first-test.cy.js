describe('First Test Suite', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('First Test', { defaultCommandTimeout: 15000 }, () => {
    // Default configuration:
    // - Full page analysis
    // - Violations with impact severity: critical and serious
    // - Rules executed: WCAG 2.0 A & AA, WCAG 2.1 A & AA, Best Practices
    // - Run axe within the iframes
    // - Generate automatically HTML report with violations details and screenshot
    cy.checkAccessibility();
  });
});

