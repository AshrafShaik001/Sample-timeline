/// <reference types="Cypress" />

const { HeaderNav } = require("../pages/headerNav");
const { LoginPage } = require("../pages/loginPage");

describe('Login Test Cases', () =>{
  const loginPage = new LoginPage();
  const headerNav = new HeaderNav();

  beforeEach(()=>{
    cy.visit('');
  })

  it('Verify Login Page UI', () =>{
    loginPage.verifyLoginPageUI()
  })

  it('Verify mandatory fields in Login Page', () =>{
    loginPage.clickOnLoginBtn();

    loginPage.verifyErrorMessageForBlankEmail();
    loginPage.verifyErrorMessageForBlankPassword();
  })

  it('Login with invalid credentials', () =>{
    loginPage.typeInEmailTxtBx('user.new@timelineapp.co')
    loginPage.typeInPasswordTxtBx('Shaik@1998');
    loginPage.clickOnLoginBtn();

    loginPage.verifyErrorMsgForInvalidLogin();
  })

  it('Login with valid credentials and logout', () =>{
    loginPage.typeInEmailTxtBx(Cypress.env('email'))
    loginPage.typeInPasswordTxtBx(Cypress.env('password'));
    loginPage.clickOnLoginBtn();

    headerNav.verifyHeaderLinks();
    headerNav.clickOnAccountMenu();
    headerNav.clickOnLogoutBtn();
  })
})