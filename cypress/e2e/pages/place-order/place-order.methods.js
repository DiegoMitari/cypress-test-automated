import { PlaceOrderElements } from "./place.order.elements";

export class PlaceOrderMethods {
  static insertName(name) {
    PlaceOrderElements.textbox_name.invoke('val', name);
  }

  static insertCountry(country) {
    PlaceOrderElements.textbox_country.invoke('val', country);
  }

  static insertCity(city) {
    PlaceOrderElements.textbox_city.invoke('val', city);
  }

  static insertCreditCard(creditCard) {
    PlaceOrderElements.textbox_credit_card.invoke('val', creditCard);
  }

  static insertMonth(month) {
    PlaceOrderElements.textbox_month.invoke('val', month);
  }

  static insertYear(year) {
    PlaceOrderElements.textbox_year.invoke('val', year);
  }

  //Accediendo a los botones
  static clickOnPurchaseButton() {
    PlaceOrderElements.button_purchase.invoke('click');
  }

  static clickOnCloseButton() {
    PlaceOrderElements.button_close.invoke('click');
  }

  static insertOrderInformation(data) {
    this.insertName(data.name);
    this.insertCountry(data.country);
    this.insertCity(data.city);
    this.insertCreditCard(data.creditCardNumber);
    this.insertMonth(data.month);
    this.insertYear(data.year);
  }
}