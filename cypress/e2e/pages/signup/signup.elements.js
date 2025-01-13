export class SignupElements {
  static get signup_username() {
    return cy.get('input#sign-username');
  }

  static get signup_password() {
    return cy.get('input#sign-password')
  }

  static get buttonSingUp() {
    return cy.contains('button', 'Sign up');
  }

  static get buttonClose() {
    return cy.contains('button', 'Close');
  }
}