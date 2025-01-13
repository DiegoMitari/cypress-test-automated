import { HomeElements } from "./home.elements"

export class HomeMethods {
  static clickOnPhonesOption() {
    return HomeElements.categories_phones.click();
  }

  static clickOnLaptopsOption() {
    return HomeElements.categories_laptops.click();
  }

  static clickOnMonitorsOption() {
    return HomeElements.categories_monitors.click();
  }

  static clickOnProductLink(productName) {
    return HomeElements.product(productName).click();
  }
}