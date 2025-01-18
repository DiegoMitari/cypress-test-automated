import { SignupElements } from "./signup.elements";
import { CommonPageMethods } from "../common-page/common-page.methods";

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

  static verifySignUpSuccessfulIsDisplayed() {
    CommonPageMethods.verifyAlert('Sign up successful.');
  }

  static verifyThisUserAlreadyExistIsDisplayed() {
    CommonPageMethods.verifyAlert('This user already exist.');
  }
}