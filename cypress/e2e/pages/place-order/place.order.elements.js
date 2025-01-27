export class PlaceOrderElements {
  static get textbox_name() {
    return cy.get('input#name');
  }

  static get textbox_country() {
    return cy.get('input#country');
  }

  static get textbox_city() {
    return cy.get('input#city');
  }

  static get textbox_credit_card() {
    return cy.get('input#card');
  }

  static get textbox_month() {
    return cy.get('input#month');
  }

  static get textbox_year() {
    return cy.get('input#year');
  }

  static get button_close() {
    return cy.get("button[text()='Close']");
  }

  static get button_purchase() {
    return cy.contains('button', 'Purchase');
  }
}