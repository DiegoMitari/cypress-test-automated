import { CartElements } from "./cart.elements";

export class CartMethods {
  static clickOnDeleteLink(productName) {
    CartElements.delete_link_item(productName).click();
  }

  static verifyProductAdded(productName) {
    CartElements.delete_link_item(productName).should('be.visible');
  }

  static ClickOnPlaceOrderButton() {
    CartElements.buttonPlaceOrder.click();
  }
  //Verifica que existe un titulo dentro de la página del carrito
  static verifyCartPageVisibled() {
    cy.contains('h2', 'Products').should('be.visible');
  }
}