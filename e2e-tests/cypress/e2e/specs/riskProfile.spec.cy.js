/// <reference types="Cypress" />

const { LoginPage } = require("../pages/loginPage");
import { faker } from "@faker-js/faker"
import { HeaderNav } from "../pages/headerNav";
import { RiskProfiles } from "../pages/riskProfiles";

describe('Risk Profile Test Cases', () =>{
  const loginPage = new LoginPage();
  const headersNav = new HeaderNav();
  const riskProfile = new RiskProfiles();

  beforeEach(()=>{
    cy.visit('');
    loginPage.loginWith();
  })

  it('Verify the UI in the Risk profile screen', () =>{
   const clientFirstName = faker.person.firstName()
   const clientLastName = faker.person.lastName()
   const clientEmail = `${clientFirstName}.${clientLastName}@domain.co`
   const partnerFirstName = faker.person.firstName()
   const partnerLastName = faker.person.lastName()
   const partnerEmail = `${partnerFirstName}.${partnerLastName}@domain.co`

   headersNav.clickOnRiskProfilesLink();
  //  riskProfile.verifyLetsStartScreen();
  riskProfile.clickOnSendRiskQuestionnarieBtn();

   riskProfile.clickOnHowItWorks();
   riskProfile.verifyHowItWorksScreen();
   riskProfile.clickOnGotItBtn();

   riskProfile.verifySendRiskQuestionnarieScreen();
  })

  it('Send the questioneer to the client ', () =>{
    const clientFirstName = faker.person.firstName()
    const clientLastName = faker.person.lastName()
    const clientEmail = `${clientFirstName}.${clientLastName}@domain.co`
    const partnerFirstName = faker.person.firstName()
    const partnerLastName = faker.person.lastName()
    const partnerEmail = `${partnerFirstName}.${partnerLastName}@domain.co`
 
    headersNav.clickOnRiskProfilesLink();
    riskProfile.clickOnSendRiskQuestionnarieBtn();
 
    riskProfile.selectTheClient("Add new client");
    riskProfile.typeInClientsFirstNameTxtBx(clientFirstName)
    riskProfile.typeInClientsLastNameTxtBx(clientLastName)
    riskProfile.typeInClientsEmailTxtBx(clientEmail)
    riskProfile.selectYesOption()
    riskProfile.typeInPartnersFirstNameTxtBx(partnerFirstName)
    riskProfile.typeInPartnersLastNameTxtBx(partnerLastName)
    riskProfile.typeInPartnersEmailTxtBx(partnerEmail)
    riskProfile.clickOnSendRiskQuestionnarieMainBtn()

    riskProfile.verifySuccessScreen(clientEmail.toLowerCase(), partnerEmail.toLowerCase());
   })
})