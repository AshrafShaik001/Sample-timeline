export class SignupPage {
  emailTxtBx = 'input[name="email"]'
  passwordTxtBx = 'input[name="password"]'
  firstNameTxtBx = 'input[name="given_name"]'
  lastNameTxtBx = 'input[name="family_name"]'
  fcaNumberTxtBx = 'input[name="fca_number"]'
  submitBtn = 'button[name="submit"]'

  typeInEmailTxtBx(email){
    cy.get(this.emailTxtBx).clear().type(email).should('have.value', email);
  }

  typeInPasswordTxtBx(password){
    cy.get(this.passwordTxtBx).clear().type(password).should('have.value', password);
  }

  clickOnSubmitBtn(){
      cy.get(this.submitBtn).click();
  }

  typeInFirstNameTxtBx(firstName){
    cy.get(this.firstNameTxtBx).clear().type(firstName).should('have.value', firstName);
  }

  typeInLastNameTxtBx(lastName){
    cy.get(this.lastNameTxtBx).clear().type(lastName).should('have.value', lastName);
  }

  typeInFCANumberTxtBx(fcaNumber){
    cy.get(this.fcaNumberTxtBx).clear().type(fcaNumber).should('have.value', fcaNumber);
  }

  verifyErrorMessage(message){
    cy.contains(message).should('exist');
  }
}