import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { SignupMethods } from "../pages/signup/signup.methods";
import { Logger } from "../utils/logger";

const user = LoginData.validCredentials.username;
const password = LoginData.validCredentials.password;

describe(CommonPageData.testSuites.registro, () => {
  it('Registro de usuario válido', () => {
    Logger.stepNumber(1);
    Logger.stepDescription('Navegar a la página de inicio');
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.stepDescription("Hacer click en 'Sign up' en la barra de navegación");
    CommonPageMethods.clickOnSingUpOption();

    Logger.stepNumber(3);
    Logger.stepDescription("Completar todos los campos obligatorios con información válida");
    SignupMethods.insertUsername(user);
    SignupMethods.insertPassword(password);

    Logger.stepNumber(4);
    Logger.stepDescription("Hacer clic en 'Sign Up' para registrar al usuario");
    SignupMethods.clickSignUpButton();

    Logger.verification("Verificar que se muestre el mensaje 'Sign up successful'");
    SignupMethods.verifySignUpSuccessfulIsDisplayed();
  });

  it('Registro de usuario inválido', () => {
    Logger.stepNumber(1);
    Logger.stepDescription('Navegar a la página de inicio');
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.stepDescription("Hacer click en 'Sign up' en la barra de navegación");
    CommonPageMethods.clickOnSingUpOption();

    Logger.stepNumber(3);
    Logger.stepDescription("Completar algunos campos con información inválida");
    SignupMethods.insertUsername('      ');
    SignupMethods.insertPassword('      ');

    Logger.stepNumber(4);
    Logger.stepDescription("Hacer clic en 'Sign Up' para registrar al usuario");
    SignupMethods.clickSignUpButton();

    Logger.verification("Verificar que se muestre un mensaje de error indicando los campos");
    SignupMethods.verifyThisUserAlreadyExistIsDisplayed();
  });
})
