import { SignupElements } from "./signup.elements";

export class SignupMethods {
  static insertUsername(username) {
    SignupElements.signup_username.invoke('val', username);
  }

  static insertPassword(password) {
    SignupElements.signup_password.invoke('val', password);
  }

  static clickSignUpButton() {
    SignupElements.buttonSingUp.click();
  }

  static signup(username, password) {
    this.insertUsername(username);
    this.insertPassword(password);
    this.clickSignUpButton();
  }
}