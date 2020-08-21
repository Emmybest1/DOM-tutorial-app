describe('===Testing AfricLite DOM Tutorial===', () => {
  it('Visits the AfricLite DOM Tutorial Website and Click the Shop Now button', () => {
    cy.visit('http://localhost:3000/');

    cy.get('button[role="button"]').click();
  });
});
