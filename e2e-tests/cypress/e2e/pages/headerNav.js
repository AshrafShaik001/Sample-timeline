/// <reference types="Cypress" />
export class HeaderNav {
  commonLink = 'a.auth__nav-link__text'
  findHelpLink = '#find-help-menu'
  accountMenuLink = '.auth__dropdown--account'

  verifyHeaderLinks(){
    cy.get(this.commonLink).contains('My Clients').first().should('exist');
    cy.get(this.commonLink).contains('Fact-Finds').first().should('exist');
    cy.get(this.commonLink).contains('Risk Profiles').first().should('exist');
    cy.get(this.commonLink).contains('Oversight').first().should('exist');
    cy.get(this.commonLink).contains('Investment').first().should('exist');
    cy.get(this.findHelpLink).should('exist');
    cy.get(this.accountMenuLink).should('exist');
  }

  clickOnAccountMenu(){
    // cy.get(this.accountMenuLink).click();
  }

  clickOnLogoutBtn(){
    // cy.get('a').contains('Logout').click();
  }

  clickOnRiskProfilesLink(){
    cy.get(this.commonLink).contains('Risk Profiles').first().click()
  }
}