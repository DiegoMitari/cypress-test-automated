import { LoginMethods } from "../pages/login/login.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { CartMethods } from "../pages/cart/cart.methods";

describe("Navegando en demoblaze.com", () => {
  it("Deberia navegar a la pagina de demoblaze", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.wait(45000);

    CartMethods.clickOnDeleteLink('Nokia lumia 1520');
    cy.wait(30000);
  })
})