describe('the search page', () => {
  it('should show the page header', () => {
    cy.visit('/search');

    cy.get('header').should('exist');
  });
});
