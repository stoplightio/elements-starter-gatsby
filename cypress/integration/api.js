describe('API component', () => {
   beforeEach(() => {
       cy.visit("http://localhost:4200/");
   });

   it('Loads correctly', () => {
       cy.get("h1:contains('Introduction')").should('exist');
   })
});