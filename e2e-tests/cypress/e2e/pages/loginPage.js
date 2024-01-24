/// <reference types="Cypress" />

export class LoginPage {

  timelineLogo = 'div.auth0-lock-header-welcome img'
  emailTxtBx = 'input[name="email"]'
  passwordTxtBx = 'input[name="password"]'
  loginBtn = 'button[name="submit"]'
  emailRequiredErrorMsg = '#auth0-lock-error-msg-email div'
  passwordRequiredErrorMsg = '#auth0-lock-error-msg-password div'
  tabLink = "ul.auth0-lock-tabs *"
  dontRememberPasswordLink = 'a.auth0-lock-alternative-link'

  typeInEmailTxtBx(email){
    cy.get(this.emailTxtBx).clear().type(email).should('have.value', email);
  }

  typeInPasswordTxtBx(password){
    cy.get(this.passwordTxtBx).clear().type(password).should('have.value', password);
  }

  clickOnLoginBtn(){
    cy.get(this.loginBtn).click();    
  }

  verifyLoginPageUI(){
    cy.get('div').contains('Timeline is limited to financial advisors only.').should('exist');
    cy.get(this.timelineLogo).should('exist');
    cy.get(this.emailTxtBx).should('exist');
    cy.get(this.passwordTxtBx).should('exist');
    cy.get(this.dontRememberPasswordLink).should('exist');
    cy.get(this.tabLink).contains('Sign Up').should('exist');
    cy.get(this.tabLink).contains('Log In').should('exist');
    cy.get(this.loginBtn).should('exist');
  }

  loginWith(email = Cypress.env('email'), password = Cypress.env('password')){
    this.typeInEmailTxtBx(email)
    this.typeInPasswordTxtBx(password)
    this.clickOnLoginBtn()
  }

  verifyErrorMessageForBlankEmail(){
    cy.get(this.emailRequiredErrorMsg).should('have.text', "Email can't be blank");
  }

  verifyErrorMessageForBlankPassword(){
    cy.get(this.passwordRequiredErrorMsg).should('have.text', "Password can't be blank");
  }

  verifyErrorMsgForInvalidLogin(){
    cy.get('div.auth0-global-message-error span').first().should('have.text', "Wrong email or password.");
  }

  clickOnSignupTab(){
    cy.get(this.tabLink).contains('Sign Up').click();
  }

}