import { HomeElements } from "./home.elements"

export class HomeMethods {
  static clickOnPhonesOption() {
    HomeElements.categories_phones.click();
  }

  static clickOnLaptopsOption() {
    HomeElements.categories_laptops.click();
  }

  static clickOnMonitorsOption() {
    HomeElements.categories_monitors.click();
  }

  static clickOnProductLink(productName) {
    HomeElements.product(productName).click();
  }

  //Verifica que un producto con nombre productName sea visible
  static verifyProductDisplayed(productName) {
    HomeElements.product(productName).should('be.visible');
  }

  //Verifica que estemos en la página de index.html
  static verifyIndexURL() {
    cy.url().should('include', 'index.html');
  }
}