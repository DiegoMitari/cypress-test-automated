import { LoginMethods } from "../pages/login/login.methods";
import { HomeMethods } from "../pages/home/home.methods";

describe("Navegando en demoblaze.com", () => {
  it("Deberia navegar a la pagina de demoblaze", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.wait(4000);
    cy.get('a[data-target="#logInModal"]').click();
    cy.wait(4000);

    LoginMethods.login('username', 'password');
    cy.wait(4000);
  })
})