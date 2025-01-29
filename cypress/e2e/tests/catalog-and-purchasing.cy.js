import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { PlaceOrderData } from "../pages/place-order/place-order.data";
import { Logger } from "../utils/logger";
import { PlaceOrderMethods } from "../pages/place-order/place-order.methods";
import { ThanksForYourPurcharseMethods } from "../pages/thanks-for-you-purcharse/thanks-for-you-purcharse.methods";

const user = LoginData.validCredentials;

describe(CommonPageData.testSuites.catalogoYCompra, () => {

  beforeEach(() => {
    cy.clearCookies(); // Limpia las cookies
    cy.clearLocalStorage(); // Limpia el almacenamiento local
  });

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
  });

  it('Realizar una compra', () => {
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
    cy.wait(5000);
    Logger.stepNumber(4);
    Logger.stepDescription('Verificar que se muestra la página de detalles del producto');
    ProductDetailsMethods.verifyButtonAddToCartDisplayed();
    cy.wait(5000);
    Logger.stepNumber(5);
    Logger.stepDescription('Hacer Click en el botón Add to Cart');
    ProductDetailsMethods.clickOnAddToCartButton();
    cy.wait(5000);
    Logger.stepNumber(6);
    Logger.stepDescription('Verificar que se muestra el mensaje de confirmación de agregado al carrito');
    ProductDetailsMethods.verifyProductAddedMessage();
    CommonPageMethods.clickOnCartOption();
    CartMethods.verifyProductAdded('Apple monitor 24');
    cy.wait(5000);

    Logger.stepNumber(7);
    Logger.stepDescription('Verificar que estamos dentro de la página del carrito');
    CartMethods.verifyCartPageVisibled();
    cy.wait(5000);

    Logger.stepNumber(8);
    Logger.stepDescription('Hacer Click en el botón Place Order');
    CartMethods.ClickOnPlaceOrderButton();
    cy.wait(5000);

    Logger.stepNumber(9);
    Logger.stepDescription('Completar los campos obligatorios del modal de información de envio');
    PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData);
    cy.wait(5000);

    Logger.stepNumber(10);
    Logger.stepDescription('Hacer click en el botón Purchase');
    PlaceOrderMethods.clickOnPurchaseButton();
    cy.wait(5000);

    Logger.stepNumber(11);
    Logger.stepDescription('Verificar que se muestra un mensaje de confirmación y se redirige a la página de inicio');
    ThanksForYourPurcharseMethods.verifyCheckMarkIsDisplayed();
    ThanksForYourPurcharseMethods.clickOnOkButton();
    HomeMethods.verifyIndexURL();
    cy.wait(5000);
  })
})