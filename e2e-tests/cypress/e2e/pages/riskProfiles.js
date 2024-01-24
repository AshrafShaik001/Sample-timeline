/// <reference types="Cypress" />

export class RiskProfiles {
  sendRiskQuestionnarieBtn = '#btn-send-risk-questionnaire'
  clientDropdown = '#client-selector'
  clientFirstNameTxtBx = '#client-first-name-input'
  clientLastNameTxtBx = '#client-last-name-input'
  clientEmailTxtBx = '#client-email-input'
  partnerFirstNameTxtBx = '#partner-first-name-input'
  partnerLastNameTxtBx = '#partner-last-name-input'
  partnerEmailTxtBx = '#partner-email-input'
  howItWorksLink = '#-btn--how-it-works'
  checkboxWithTxt = "//div[@role='radio']//div[text()='name']"
  cancelBtn = '#-btn--cancel'
  gotitBtn = '#-btn--got-it'
  sendRiskQuestionnarieMainBtn = '#btn-send-risk-questionnaires'
  downloadSampleRiskDocumentBtn = '#-btn--download-a-sample-risk-report'
  clientsQuestionnarieLink = '#client-questionnaire-link-input'
  partnersQuestionnarieLink = '#partner-questionnaire-link-input'


  clickOnSendRiskQuestionnarieBtn(){
    cy.get(this.sendRiskQuestionnarieBtn).click();
  }

  clickOnSendRiskQuestionnarieMainBtn(){
    cy.get(this.sendRiskQuestionnarieMainBtn).click();
  }

  selectTheClient(client){
    cy.get(this.clientDropdown).click();
    cy.get('div').contains(client).click()
    // cy.get(this.clientDropdown).should('have.text', client);
  }

  verifyLetsStartScreen(){
    cy.get('div').contains("Let's start!").should('exist');
    cy.get('div').contains("Send risk questionnaires to your clients, receive a risk score and start calculating the retirement income strategy").should('exist');
    cy.get(this.sendRiskQuestionnarieBtn).should('exist');
  }

  verifySendRiskQuestionnarieScreen(){
    cy.get('div').contains("Send the questionnaire").should('exist');
    cy.get('div').contains("Send risk questionnaire").should('exist');
    cy.get(this.howItWorksLink).should('exist');
    // cy.get(this.sendRiskQuestionnarieMainBtn).should('exist');
    cy.get(this.clientDropdown).should('exist');
    cy.get(this.clientFirstNameTxtBx).should('exist');
    cy.get(this.clientLastNameTxtBx).should('exist');
    cy.get(this.clientEmailTxtBx).should('exist');
    cy.xpath(this.checkboxWithTxt.replace('name', 'No')).should('exist');
    cy.xpath(this.checkboxWithTxt.replace('name', 'Yes')).should('exist');
    this.selectYesOption()
    cy.get(this.partnerFirstNameTxtBx).should('exist');
    cy.get(this.partnerLastNameTxtBx).should('exist');
    cy.get(this.partnerEmailTxtBx).should('exist');
    this.selectNoOption()
    cy.get(this.partnerFirstNameTxtBx).should('not.exist');
    cy.get(this.partnerLastNameTxtBx).should('not.exist');
    cy.get(this.partnerEmailTxtBx).should('not.exist');
  }

  selectYesOption(){
    cy.xpath(this.checkboxWithTxt.replace('name', 'Yes')).click()
  }

  selectNoOption(){
    cy.xpath(this.checkboxWithTxt.replace('name', 'No')).click()
  }

  clickOnHowItWorks(){
    cy.get(this.howItWorksLink).click()
  }

  verifyHowItWorksScreen(){
    cy.get('div').contains("How risk questionnaire works?").should('exist');
    cy.get('div').contains("Enter your client's name and email below").should('exist');
    cy.get('div').contains("Your client receives the risk questionnaire from you").should('exist');
    cy.get('div').contains("Once done, we will provide the risk profile data on this page").should('exist');
    cy.get('a div').contains('(Download PDF)').should('exist');
    cy.get('a div').contains('(Preview sample)').should('exist');
    cy.get(this.cancelBtn).should('exist');
    cy.get(this.gotitBtn).should('exist');
  }

  clickOnGotItBtn(){
    cy.get(this.gotitBtn).click({force: true})
  }

  typeInClientsFirstNameTxtBx(firstName){
    cy.get(this.clientFirstNameTxtBx).type(firstName).should('have.value', firstName);
  }

  typeInClientsLastNameTxtBx(lastName){
    cy.get(this.clientLastNameTxtBx).type(lastName).should('have.value', lastName);
  }

  typeInClientsEmailTxtBx(email){
    cy.get(this.clientEmailTxtBx).type(email).should('have.value', email);
  }

  typeInPartnersFirstNameTxtBx(firstName){
    cy.get(this.partnerFirstNameTxtBx).type(firstName).should('have.value', firstName);
  }

  typeInPartnersLastNameTxtBx(lastName){
    cy.get(this.partnerLastNameTxtBx).type(lastName).should('have.value', lastName);
  }

  typeInPartnersEmailTxtBx(email){
    cy.get(this.partnerEmailTxtBx).type(email).should('have.value', email);
  }

  verifySuccessScreen(clientsEmail, partnersEmail){
    cy.get('div').contains('Make suitable recommendations with Timeline’s risk score').should('exist');
    cy.get('div').contains('Our fully compliant FCA risk score takes into account: attitude to risk, capacity for loss and experience & knowledge.').should('exist');
    cy.get(this.downloadSampleRiskDocumentBtn).should('exist');

    cy.get('div').contains(`The risk questionnaire was successfully sent to ${clientsEmail} and ${partnersEmail}.`).should('exist');
    cy.get('div').contains('The result will appear when your client answers all the questions.').should('exist');
    cy.get('div').contains('Would you like to ').should('exist');
    cy.get('div').contains('send it to another email or send it again?').should('exist');

    cy.get(this.clientsQuestionnarieLink).invoke('val').should('not.be.empty')
    cy.get(this.partnersQuestionnarieLink).invoke('val').should('not.be.empty')
  }


}