// cypress/support/pageObjects/homePage.js
import './commands'

class HomePage {
  
    getBtnLogin() {return cy.contains('a', 'Masuk')}

    // section login
    getTxtMasuk(){return cy.contains('h4', 'Masuk')}
    getFieldHP() { return cy.get('#page-login__tabs-number__input-number')}
    getPassword() { return cy.get('#page-login__tabs-email__input-password')}
    getBtnMasuk(){ return cy.get('#page-login__button-login')}

    login(email, password) {
      this.getBtnLogin().click()
      this.verifyAfterClickLogin()
      this.getFieldHP().type(email)
      this.getPassword().type(password)
      this.getBtnMasuk().click()
    }

    verifyAfterClickLogin(){
        this.getTxtMasuk().should('be.visible')
        this.getPassword().should('be.visible')
        this.getBtnMasuk().should('be.visible')
    }
  }
  
  export const homePage = new HomePage()
  