export class ProductDetailsElements {
  static get buttonAddToCart() {
    return cy.contains('a', 'Add to cart');
  }
}