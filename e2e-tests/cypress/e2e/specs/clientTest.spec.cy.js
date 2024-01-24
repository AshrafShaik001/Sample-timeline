/// <reference types="Cypress" />

const { ClientPage } = require("../pages/clientPage");
const { LoginPage } = require("../pages/loginPage");
const { MyClientsPage } = require("../pages/myClientsPage");
const { SignupPage } = require("../pages/signupPage");
import { faker } from "@faker-js/faker"

describe('Login Test Cases', () =>{
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();
  const clientPage = new ClientPage();
  const myclientsPage = new MyClientsPage();

  beforeEach(()=>{
    cy.visit('');
    loginPage.loginWith();
  })

  it.only("Add client by filling only required fields", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const fullName = firstName + " " + lastName;
    const email = `test.qualitlabs${new Date().getTime()}@timelineapp.co`;
    const FCANumber = "12345";
    const password = "Qualit@2023";

    // Signup with details
    myclientsPage.clickOnAddClientBtn();
    clientPage.selectFullPlan();

    // Fill client information
    clientPage.verifyBasicInfoScreenUI();
    clientPage.typeInFirstNameTxtBx(firstName);
    clientPage.typeInLastNameTxtBx(lastName);
    clientPage.typeInDOB("31", "03", "1996");
    clientPage.clickOnSaveAndContinueBtn();

    clientPage.verifyAccountInvestmentsScreenUI(firstName);
    clientPage.typeInAccountNameTxtBx(fullName);
    clientPage.typeInAccountBalanceTxtBx(30000);
    clientPage.selectAccountType("GIA");
    clientPage.selectPortifolio("Timeline Classic 0");
    clientPage.typeInFixedFeesTxtBx(2000);
    clientPage.typeInVaraibleFeesTxtBx(20);
    clientPage.checkAdjustByInflationCheckBox();
    clientPage.clickOnAddAccountBtn();

    clientPage.clickOnSaveAndContinueBtn();
    clientPage.clickOnSkipBtn();
    clientPage.clickOnSkipBtn();
    clientPage.clickOnSkipBtn();
    clientPage.clickOnSkipBtn();

    clientPage.clickOnBackToClientsLink();
    cy.visit('/clients');

    myclientsPage.searchWithClientName(fullName);
    myclientsPage.verifyTheClientDetails(fullName, "Complete", "0%", "Ashraf Shaik");
  });
})