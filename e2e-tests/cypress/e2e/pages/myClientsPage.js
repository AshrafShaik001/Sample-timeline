export class MyClientsPage {
  addClientBtn = '#btn-add-client'
  searchBoxTxtBx = '#search-box'

  clickOnAddClientBtn(){
    cy.get(this.addClientBtn).click()
  }

  searchWithClientName(clientName){
    cy.get(this.searchBoxTxtBx).type(clientName).should('have.value', clientName);
  }

  verifyTheClientDetails(clientName, status, successRate, adviser){
    cy.get('div').contains(clientName).should('exist');
    cy.get('div').contains(status).should('exist');
    cy.get('div').contains(successRate).should('exist');
    cy.get('div').contains(adviser).should('exist');
  }
  
}