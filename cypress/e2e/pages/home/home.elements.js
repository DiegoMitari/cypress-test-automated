export class HomeElements {
  static get categories_phones() {
    return cy.contains("a", "Phones");
  }

  static get categories_laptops() {
    return cy.contains("a", "Laptops");
  }

  static get categories_monitors() {
    return cy.contains("a", "Monitors");
  }

  static product(productname) {
    return cy.contains("a", productname, { timeout: 10000 });
  }
}