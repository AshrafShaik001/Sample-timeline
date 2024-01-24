/// <reference types="Cypress" />

const { ClientPage } = require("../pages/clientPage");
const { LoginPage } = require("../pages/loginPage");
const { SignupPage } = require("../pages/signupPage");

describe('Login Test Cases', () =>{
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();
  const clientPage = new ClientPage();

  beforeEach(()=>{
    cy.visit('');
  })

  it('Signup with valid details by filling only required fields', () =>{
   const firstName = "Test"
   const lastName = "User"
   const fullName = firstName +' '+lastName
   const email = `test.qualitlabs${new Date().getTime()}@timelineapp.co`
   const FCANumber = '12345'
   const password = 'Qualit@2023'
   
   // Signup with details
   loginPage.clickOnSignupTab();
   signupPage.typeInEmailTxtBx(email);
   signupPage.typeInPasswordTxtBx(password);
   signupPage.typeInFirstNameTxtBx(firstName);
   signupPage.typeInLastNameTxtBx(lastName);
   signupPage.typeInFCANumberTxtBx(FCANumber);
   signupPage.clickOnSubmitBtn();

   // Fill client information 
   clientPage.verifyBasicInfoScreenUI();
   clientPage.typeInFirstNameTxtBx(firstName);
   clientPage.typeInLastNameTxtBx(lastName);
   clientPage.typeInDOB("31", "03", "1996");
   clientPage.clickOnSaveAndContinueBtn();

   clientPage.verifyAccountInvestmentsScreenUI(firstName);
   clientPage.typeInAccountNameTxtBx(fullName)
   clientPage.typeInAccountBalanceTxtBx(30000)
   clientPage.selectAccountType("GIA")
   clientPage.selectPortifolio("Timeline Classic 0")
   clientPage.typeInFixedFeesTxtBx(2000)
   clientPage.typeInVaraibleFeesTxtBx(20)
   clientPage.checkAdjustByInflationCheckBox()
   clientPage.clickOnAddAccountBtn()

   clientPage.clickOnSaveAndContinueBtn()
   clientPage.clickOnSkipBtn()
   clientPage.clickOnSkipBtn()
   clientPage.clickOnSkipBtn()
   clientPage.clickOnSkipBtn()

   clientPage.typeCardDetails("4242424242424242", "12/34", "123", "77494")
   clientPage.checkAuthoriseCheckBox()
   clientPage.clickOnPayBtn()
   clientPage.verifySubscriptionSuccessMsgToastMessage()
  })

  it('Try to signup with existing email id', () =>{
    loginPage.clickOnSignupTab();

    signupPage.typeInEmailTxtBx('ashrafvali.shaik@timelineapp.co');
    signupPage.typeInPasswordTxtBx('Shaik@1996');
    signupPage.typeInFirstNameTxtBx('User');
    signupPage.typeInLastNameTxtBx('Test');
    signupPage.typeInFCANumberTxtBx('12345');
    signupPage.clickOnSubmitBtn();

    signupPage.verifyErrorMessage("We're sorry, something went wrong when attempting to sign up.");
  })

  it('Verify required fields in signup page', () =>{
    loginPage.clickOnSignupTab();

    signupPage.clickOnSubmitBtn();

    signupPage.verifyErrorMessage("Email can't be blank");
    signupPage.verifyErrorMessage("Password can't be blank");
    signupPage.verifyErrorMessage("Firstname can't be blank");
    signupPage.verifyErrorMessage("Lastname can't be blank");
  })
})