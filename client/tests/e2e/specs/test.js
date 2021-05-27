// https://docs.cypress.io/api/introduction/api.html

describe("Pages visiting", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h3", "Select start destination");
  });
  // it("visit the about page", () => {
  //   cy.visit("/");
  //   cy.contains("h1", "About page");
  // })
});

describe("Items selecting and deselecting", () => {
  it("Select first planet", () => {
    cy.get("#mercury").click();
  });
  it("Select second planet", () => {
    cy.get("#venus").click();
  });
  it("Should deselect second planet", () => {
    cy.get("span")
      .contains("venus")
      .children("button")
      .click();
  });
  it("Select second planet again", () => {
    cy.get("#venus").click();
  });

});
