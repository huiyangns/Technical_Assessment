/// <reference types="Cypress" /> 

/**
 * @class
 * @description This class contains operations in Home page
 */
class HomePage {
    /**
  * @method
  * @description Visit home page
  */
    visitHomePage(){
        cy.visit("/");
    }

}

export default new HomePage();
