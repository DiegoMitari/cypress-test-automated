import { LoginData } from "../login/login.data";
import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods {
  static navigateToDemoBlaze() {
    cy.visit(CommonPageData.url);
  }

  static clickOnHometOption() {
    CommonPageElements.option_home.click();
  }

  static clickOnContactOption() {
    CommonPageElements.option_contact.click();
  }

  static clickOnAboutUsOption() {
    CommonPageElements.option_about_us.click();
  }

  static clickOnCartOption() {
    CommonPageElements.option_cart.click();
  }

  static clickOnLoginOption() {
    CommonPageElements.option_login.click();
  }

  static clickOnSingUpOption() {
    CommonPageElements.option_signup.click();
  }

  static verifyAlert(expectedMessage) {
    // Intercepta el alert y verifica su texto
    cy.on('window:alert', (str) => {
      expect(str).to.equal(expectedMessage);
    });
  }

  //genera strings randoms
  static generateRandomString(length = 10) {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  //verificamos que el usuario se haya logueado bien
  static verifySignedUser(username) {
    CommonPageElements.signedUser.should('have.text', `Welcome ${username}`);
  }
}