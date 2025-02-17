export class CommonPageElements {
  static get option_home() {
    return cy.contains('a', 'Home');
  }

  static get option_contact() {
    return cy.contains('a', 'Contact');
  }

  static get option_about_us() {
    return cy.contains('a', 'About us');
  }

  static get option_cart() {
    return cy.contains('a', 'Cart')
  }

  static get option_Logout() {
    return cy.get('#logout2');
  }

  static get option_login() {
    return cy.contains('a', 'Log in')
  }

  static get option_signup() {
    return cy.contains('a', 'Sign up')
  }

  static get signedUser() {
    return cy.get('a#nameofuser');
  }
}