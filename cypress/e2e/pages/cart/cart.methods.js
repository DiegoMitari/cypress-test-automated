import { CartElements } from "./cart.elements";

export class CartMethods {
  static clickOnDeleteLink(productName) {
    CartElements.delete_link_item(productName).click();
  }

  static verifyProductAdded(productName) {
    CartElements.delete_link_item(productName).should('be.visible');
  }
}