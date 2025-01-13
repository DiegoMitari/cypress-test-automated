// export class LoginElements {
//   static get textboxes() {
//     return {
//       get username() {
//         return cy.get("input#loginusername");
//       },
//       get password() {
//         return cy.get("input#loginpassword");
//       }
//     }
//   }
// }

export class LoginElements {
  static get username() {
    return cy.get("input#loginusername");
  }

  static get password() {
    return cy.get("input#loginpassword");
  }

  static get buttonLogin() {
    return cy.get("button[onclick='logIn()']");
  }

  static get buttonClose() {
    return cy.get("button[text()='Close']");
  }
}