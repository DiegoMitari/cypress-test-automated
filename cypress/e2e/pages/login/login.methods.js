import { Logger } from "../../utils/logger";
import { LoginElements } from "./login.elements";

export class LoginMethods {
  static insertUsername(username) {
    LoginElements.username.invoke('val', username);
  }

  static insertPassword(password) {
    LoginElements.password.invoke('val', password);
  }

  static clickOnLoginButton() {
    LoginElements.buttonLogin.click();
  }

  //Metodo que hace todo el proceso de login:
  //inserta username, password y clickea el boton de login
  static login(username, password) {
    Logger.subStep('Insert username');
    this.insertUsername(username);
    Logger.subStep('Insert password');
    this.insertPassword(password);
    Logger.subStep('Click on Login Button');
    this.clickOnLoginButton();
  }
}