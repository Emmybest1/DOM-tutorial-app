describe('===Testing AfricLite DOM Tutorial===', () => {
  it('visits the AfricLite DOM Tutorial Website and Click the Shop Now button', () => {
    cy.visit('/');
    cy.get('button[role="button"]').click();
  });

  it('clicks each the image element', () => {
    cy.get('img[alt=""]').click();
  });
});
