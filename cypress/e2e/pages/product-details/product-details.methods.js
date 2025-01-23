import { ProductDetailsElements } from "./product-details.element";
import { CommonPageMethods } from "../common-page/common-page.methods";
export class ProductDetailsMethods {
  static clickOnAddToCartButton() {
    ProductDetailsElements.buttonAddToCart.click();
  }

  static verifyButtonAddToCartDisplayed() {
    ProductDetailsElements.buttonAddToCart.should('be.visible');
  }

  //verifica que haya un alert que diga que el producto fue añadido 
  static verifyProductAddedMessage() {
    CommonPageMethods.verifyAlert('Product added.');
  }
}