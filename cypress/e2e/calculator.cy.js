describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });

  it("should do math operations and update the display with the result of the operation", () => {
    cy.get("#number1").click();
    cy.get("#operator-add").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "3");
  });

  it("should let multiple operations be chained together", () => {
    cy.get("#number3").click();
    cy.get("#operator-add").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get("#operator-add").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get("#running-total").should("contain", "12");
  });

  describe("should be able to handle a range of numbers ex: positive, negative, decimals, very large", () => {
    it("should be able to output a positive number from an operation", () => {
      cy.get("#number3").click();
      cy.get("#operator-add").click();
      cy.get("#number4").click();
      cy.get("#operator-equals").click();
      cy.get("#running-total").should("contain", "7");
    });

    it("should be able to output a negative number from an operation", () => {
      cy.get("#number3").click();
      cy.get("#operator-subtract").click();
      cy.get("#number4").click();
      cy.get("#operator-equals").click();
      cy.get("#running-total").should("contain", "-1");
    });

    it("should be able to output a decimal number from an operation", () => {
      cy.get("#number5").click();
      cy.get("#operator-divide").click();
      cy.get("#number2").click();
      cy.get("#operator-equals").click();
      cy.get("#running-total").should("contain", "2.5");
    });

    it("should be able to output very large numbers from an operation", () => {
      cy.get("#number1").click();
      cy.get("#number0").click();
      cy.get("#number0").click();
      cy.get("#number0").click();
      cy.get("#number0").click();
      cy.get("#operator-multiply").click();
      cy.get("#number1").click();
      cy.get("#number0").click();
      cy.get("#number0").click();
      cy.get("#operator-equals").click();
      cy.get("#running-total").should("contain", "1000000");
    });
  });

  it("should output an ERROR message if divided by zero", () => {
    cy.get("#number5").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get("#running-total").should("contain", "ERROR");
  });
});
