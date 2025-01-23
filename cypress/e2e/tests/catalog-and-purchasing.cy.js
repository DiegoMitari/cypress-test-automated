import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { Logger } from "../utils/logger";

const user = LoginData.validCredentials;

describe(CommonPageData.testSuites.catalogoYCompra, () => {
  it('Navegación por categorías', () => {
    Logger.stepNumber(1);
    Logger.stepDescription('Iniciar sesión como un usuario registrado');
    Logger.subStep('Navegar a la página de Demoblaze application');
    CommonPageMethods.navigateToDemoBlaze();
    Logger.subStep('Click on Login Link');
    CommonPageMethods.clickOnLoginOption();

    LoginMethods.login(user.username, user.password);
    Logger.stepNumber(2);
    Logger.stepDescription('Navegar a la página de Inicio');
    CommonPageMethods.clickOnHometOption();

    Logger.stepNumber(3);
    Logger.stepDescription('Seleccionar una categoría de productos en el menú de navegación');
    HomeMethods.clickOnMonitorsOption();
    Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada');
    HomeMethods.verifyProductDisplayed('Apple monitor 24');
    //HomeMethods.verifyProductDisplayed('ASUS Full HD');
  });

  it('Agregar productos al carrito', () => {
    Logger.stepNumber(1);
    CommonPageMethods.navigateToDemoBlaze();
    CommonPageMethods.clickOnLoginOption();
    LoginMethods.login(user.username, user.password);

    Logger.stepNumber(2);
    CommonPageMethods.clickOnHometOption();

    Logger.stepNumber(3);
    HomeMethods.clickOnMonitorsOption();
    HomeMethods.verifyProductDisplayed('Apple monitor 24');
    HomeMethods.clickOnProductLink('Apple monitor 24');

    Logger.stepNumber(4);
    Logger.stepDescription('Verificar que se muestra la página de detalles del producto');
    ProductDetailsMethods.verifyButtonAddToCartDisplayed();

    Logger.stepNumber(5);
    Logger.stepDescription('Hacer Click en el botón Add to Cart');
    ProductDetailsMethods.clickOnAddToCartButton();

    Logger.stepNumber(6);
    Logger.stepDescription('Verificar que se muestra el mensaje de confirmación de agregado al carrito');
    ProductDetailsMethods.verifyProductAddedMessage();
    CommonPageMethods.clickOnCartOption();
    CartMethods.verifyProductAdded('Apple monitor 24');

    cy.wait(10000);
  })
})