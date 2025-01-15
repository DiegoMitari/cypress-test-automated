import { ThanksForYourPurcharseElements } from "./thanks-for-you-purcharse.element"

export class ThanksForYourPurcharseMethods {
  static clickOnOkButton() {
    ThanksForYourPurcharseElements.button_ok.click();
  }

  static verifyCheckMarkIsDisplayed() {
    ThanksForYourPurcharseElements.greenCheckMark.should('exist');
  }
}