export class CartElements {
  static get buttonPlaceOrder() {
    return cy.get('button[data-toggle="modal"]')
  }

  static delete_link_item(productName) {
    //return cy.get(`//tbody[@id='tbodyid']//td[text()=${productName}]//ancestor::tr//a`);
    return cy.get('tbody#tbodyid').contains('td', productName).closest('tr').find('a');
  }
}