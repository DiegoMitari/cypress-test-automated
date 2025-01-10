import { LoginElements } from "./login.elements";

export class LoginMethods {
  static insertUsername(username) {
    LoginElements.username.type(username);
  }

  static insertPassword(password) {
    LoginElements.password.type(password);
  }

  static clickOnLoginButton() {
    LoginElements.buttonLogin.click();
  }

  //Metodo que hace todo el proceso de login:
  //inserta username, password y clickea el boton de login
  static login(username, password) {
    this.insertUsername(username)
    this.insertPassword(password)
    this.clickOnLoginButton()
  }
}