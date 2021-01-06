describe("Stoplight component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
    // wait until we perform the full redirect to the first page to avoid flake
    cy.get("h1").contains("Introduction").should("exist");
  });

  it("loads correctly", () => {
    cy.get("h1").contains("Introduction").should("exist");
  });

  it("navigates via table of contents", () => {
    cy.get("span").contains("pets").click();
    cy.get("span").contains("Create a pet").click();
    cy.get("h2").contains("post").should("exist");
    cy.get("h2").contains("/pets").should("exist");
  });

  it("navigates via url", () => {
    cy.visit(
      "http://localhost:4200/elements/reference/petstore/openapi.v1.yaml/paths/~1pets/post"
    );
    cy.get("h2").contains("post").should("exist");
    cy.get("h2").contains("/pets").should("exist");
  });
});
