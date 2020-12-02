describe('API component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/zoom-api');
  });

  it('loads correctly', () => {
    cy.get('h1').contains('Zoom').should('exist');
  });

  it('navigates via table of contents', () => {  
    cy.get('span').contains('Groups').click();
    cy.get('span').contains('Create a group').click();
    cy.get('p').contains('Create a group under your account').should('exist');
  });
  
  it('navigates via url', () => {
    cy.visit('http://localhost:4200/zoom-api/paths/~1groups/post'); 
    cy.get('p').contains('Create a group under your account').should('exist');
  });
});