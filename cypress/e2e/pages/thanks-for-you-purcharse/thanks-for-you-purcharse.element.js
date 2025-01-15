export class ThanksForYourPurcharseElements {
  static get button_ok() {
    return cy.contains('button', 'OK');
  }

  //Icon Green Check
  static get greenCheckMark() {
    return cy.get('.sa-success');
  }
}