
export class Logger {
  static stepNumber(number) {
    const text = `Step # ${number}`;
    cy.allure().step(text);
    //cy.log(text);
  }

  static stepDescription(description) {
    const text = `Step - ${description}`;
    cy.allure().step(text);
    //cy.log(text);
  }

  static verification(description) {
    const text = `Verification - ${description}`;
    cy.allure().step(text);
    //cy.log(text);
  }

  static subStep(description) {
    const text = `Substep - ${description}`;
    cy.allure().step(text);
    //cy.log(text);
  }

  static subVerification(description) {
    const text = `Substep - ${description}`;
    cy.allure().step(text);
    //cy.log(text);
  }

  static postCondition(description) {
    const text = `POSTCONDITION - ${description}`;
    cy.allure().step(text);
  }
}