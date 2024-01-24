/// <reference types="Cypress" />

export class ClientPage {
  fullPlan = '[alt="Full plan"]'

  // Basic Info
  firstNameTxtBx = "//div[text()='First name']/ancestor::label//input"
  lastNameTxtBx = "//div[text()='Last name']/ancestor::label//input"
  emailTxtBx = "//div[text()='E-mail (optional)']/ancestor::label//input"
  postlCodeTxtBx = "//div[text()='Postcode (optional)']/ancestor::label//input"
  checkboxWithTxt = "//div[@role='radio']//div[text()='name']"
  dayOfAnnualReviewTxtBx = '[aria-label="day of annual review"]'
  monthOfAnnualReviewTxtBx = '[aria-label="month of annual review"]'
  dayOfDOBTxtBx = '[aria-label="day of birth"]'
  monthOfDOBTxtBx = '[aria-label="month of birth"]'
  yearOfDOBTxtBx = '[aria-label="year of birth"]'
  saveAndContinueBtn = '#btn-save--continue'
  retirementYearDropdown = "//div[text()='Retirement year']/parent::div/parent::div/following-sibling::div/select"

  // Investment Accounts
  accountNameTxtBx = "//div[text()='Account name']/ancestor::label//input"
  accountBalanceTxtBx = "#investment-account-balance"
  portfolioDroddown = "#portfolio-select"
  fixedFeesTxtBx = '#investment-account-fixed-fee'
  varaibleFeesTxtBx = '#investment-account-variable-fee'
  adjustByInflationCheckBox = "//div[text()='Adjust by inflation']"
  addAccountBtn = "#btn-add-account"
  skipBtn = '#btn-skip'

  cardNumberTxtBx = 'input[name="cardnumber"]'
  expiryDateTxtBx = 'input[name="exp-date"]'
  cvcTxtBx = 'input[name="cvc"]'
  payBtn = '#btn-pay-100'
  zipCodeTxtBx = 'input[name="postal"]'

  // Actions
  typeInFirstNameTxtBx(firstName){
    cy.xpath(this.firstNameTxtBx).clear().type(firstName).should('have.value', firstName);
  }

  typeInLastNameTxtBx(lastName){
    cy.xpath(this.lastNameTxtBx).clear().type(lastName).should('have.value', lastName);
  }

  typeInEmailTxtBx(email){
    cy.xpath(this.firstNameTxtBx).clear().type(firstName).should('have.value', email);
  }

  typeInPostalCodeTxtBx(postalCode){
    cy.xpath(this.postlCodeTxtBx).clear().type(postalCode).should('have.value', postalCode);
  }

  selectHealthStatus(status){
    cy.xpath(this.checkboxWithTxt.replace('name', status)).click()
    cy.xpath(this.checkboxWithTxt.replace('name', status)).should('have.attr', 'aria-checked', 'true')
  }

  typeInDateOfAnnualReview(day, month){
    cy.get(this.dayOfAnnualReviewTxtBx).clear().type(day).should('have.value', day);
    cy.get(this.monthOfAnnualReviewTxtBx).clear().type(month).should('have.value', month);
  }

  typeInDOB(day, month, year){
    cy.get(this.dayOfDOBTxtBx).clear().type(day).should('have.value', day);
    cy.get(this.monthOfDOBTxtBx).clear().type(month).should('have.value', month);
    cy.get(this.yearOfDOBTxtBx).clear().type(year).should('have.value', year);
  }

  selectSex(sex){
    cy.xpath(this.checkboxWithTxt.replace('name', sex)).click()
    cy.xpath(this.checkboxWithTxt.replace('name', sex)).should('have.attr', 'aria-checked', 'true')
  }

  clickOnSaveAndContinueBtn(){
    cy.get(this.saveAndContinueBtn).click();
  }

  verifyBasicInfoScreenUI(){
    cy.get('div').contains('Basic info of your client').should('exist');
    cy.get('div').contains('~ 4 minutes remaining...').should('exist');
    cy.get('div').contains('Basic info').should('exist');
    cy.get('p').contains('Or skip all this by auto-importing your client’s plan if you have Intelliflo, Transact, Nucleus, 7IM or Iress Xplan.').should('exist');
    cy.xpath(this.firstNameTxtBx).should('exist');
    cy.xpath(this.lastNameTxtBx).should('exist');
    cy.xpath(this.emailTxtBx).should('exist');
    cy.xpath(this.postlCodeTxtBx).should('exist');
    cy.get(this.dayOfAnnualReviewTxtBx).should('exist');
    cy.get(this.monthOfAnnualReviewTxtBx).should('exist');
    cy.get(this.dayOfDOBTxtBx).should('exist');
    cy.get(this.monthOfDOBTxtBx).should('exist');
    cy.get(this.yearOfDOBTxtBx).should('exist');
    cy.xpath(this.retirementYearDropdown).should('exist');
    cy.get(this.saveAndContinueBtn).should('exist');
    cy.xpath(this.checkboxWithTxt.replace('name', 'Healthy')).should('exist');
    cy.xpath(this.checkboxWithTxt.replace('name', 'Average health')).should('exist');
    cy.xpath(this.checkboxWithTxt.replace('name', 'Poor health')).should('exist');
    cy.xpath(this.checkboxWithTxt.replace('name', 'Male')).should('exist');
    cy.xpath(this.checkboxWithTxt.replace('name', 'Female')).should('exist');
    cy.xpath(this.checkboxWithTxt.replace('name', 'Yes')).should('exist');
    cy.xpath(this.checkboxWithTxt.replace('name', 'No')).should('exist');
  }

  verifyAccountInvestmentsScreenUI(firstName){
    cy.get('div').contains(`${firstName}'s investment accounts`).should('exist');
    cy.get('div').contains('~ 3 minutes remaining...').should('exist');
    cy.xpath(this.accountNameTxtBx).should('exist');
    cy.get(this.accountBalanceTxtBx).should('exist');
    cy.get(this.portfolioDroddown).should('exist');
    cy.get(this.fixedFeesTxtBx).should('exist');
    cy.get(this.varaibleFeesTxtBx).should('exist');
    cy.xpath(this.adjustByInflationCheckBox).should('exist');
    cy.get(this.addAccountBtn).should('exist');
  }

  selectAccountType(type){
    cy.xpath(this.checkboxWithTxt.replace('name', type)).click()
    // cy.xpath(this.checkboxWithTxt.replace('name', type)).should('have.attr', 'aria-checked', 'true')
  }

  typeInAccountBalanceTxtBx(accountBalance){
    cy.get(this.accountBalanceTxtBx).clear().type(accountBalance);
  }

  typeInAccountNameTxtBx(accountName){
    cy.xpath(this.accountNameTxtBx).clear().type(accountName).should('have.value', accountName);
  }

  selectPortifolio(portfolio){
    cy.get(this.portfolioDroddown).click()
    cy.get('div').contains(portfolio).click()
   // cy.get(this.portfolioDroddown).should('have.value', portfolio)
  }

  typeInFixedFeesTxtBx(fees){
    cy.get(this.fixedFeesTxtBx).type(fees)
  }

  typeInVaraibleFeesTxtBx(fees){
    cy.get(this.varaibleFeesTxtBx).type(fees)
  }

  checkAdjustByInflationCheckBox(){
    cy.xpath(this.adjustByInflationCheckBox).click()
  }

  clickOnAddAccountBtn(){
    cy.get(this.addAccountBtn).click()
  }

  clickOnSkipBtn(){
    cy.get(this.skipBtn).click()
  }

  typeCardDetails(cardNumber, expiryDate, cvc, zipCode){
    cy.getIframeBody('[title="Secure card payment input frame"]').find(this.cardNumberTxtBx).type(cardNumber)
    cy.getIframeBody('[title="Secure card payment input frame"]').find(this.expiryDateTxtBx).type(expiryDate)
    cy.getIframeBody('[title="Secure card payment input frame"]').find(this.cvcTxtBx).type(cvc)
    cy.getIframeBody('[title="Secure card payment input frame"]').find(this.zipCodeTxtBx).type(zipCode)
  }

  checkAuthoriseCheckBox(){
    cy.get('div').contains('I authorise Timelineapp Tech Ltd. to send instructions to the financial institution that issued my card to take payments from my card in accordance with the terms of agreement.').click()
  }

  clickOnPayBtn(){
    cy.get(this.payBtn).click()
  }

  verifySubscriptionSuccessMsgToastMessage(){
    cy.get('p').contains('Subscription successfully created').should('exist');
  }

  selectFullPlan(){
    cy.get(this.fullPlan).click()
  }

  clickOnBackToClientsLink(){
    cy.get('a[href="/clients"]').contains('Back to clients').should('exist');
  }

}