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
}