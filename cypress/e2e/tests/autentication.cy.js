import { CommonPageData } from '../pages/common-page/common-page.data'
import { CommonPageMethods } from '../pages/common-page/common-page.methods';
import { LoginData } from '../pages/login/login.data';
import { LoginMethods } from '../pages/login/login.methods';
import { Logger } from '../utils/logger';

describe(CommonPageData.testSuites.autenticacion, () => {

  beforeEach(() => {
    cy.clearCookies(); // Limpia las cookies
    cy.clearLocalStorage(); // Limpia el almacenamiento local
  });

  it('Inicio de sesión válido', () => {
    Logger.stepNumber(1);
    Logger.stepDescription('Navegar a la página de inicio');
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.stepDescription('Hacer clic en "Log in" en la barra de navegación');
    CommonPageMethods.clickOnLoginOption();

    Logger.stepNumber(3);
    Logger.stepDescription('Ingresar un nombre de usuario y contraseña válidos.');
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);

    Logger.stepNumber(4);
    Logger.stepDescription('Hacer clic en "Log in" para iniciar sesión.');
    LoginMethods.clickOnLoginButton();
    Logger.verification('Verificar que se redirige al usuario a la página de inicio.');
    CommonPageMethods.verifySignedUser(LoginData.validCredentials.username);

    Logger.postCondition('Log Out');
    CommonPageMethods.clickOnLogOut();
    cy.wait(10000);

  });

  it('Inicio de sesión inválido', () => {
    Logger.stepNumber(1);
    Logger.stepDescription('Navegar a la página de inicio');
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.stepDescription('Hacer clic en "Log in" en la barra de navegación');
    CommonPageMethods.clickOnLoginOption();

    Logger.stepNumber(3);
    Logger.stepDescription('Ingresar un nombre de usuario y/o contraseña inválidos.');
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword('errorpassword'); //Contraseña Invalida

    Logger.stepNumber(4);
    Logger.stepDescription('Hacer clic en "Log in" para iniciar sesión.');
    LoginMethods.clickOnLoginButton();
    Logger.verification('Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado.');
    LoginMethods.verifyWrongPasswordMessage();
  });
})