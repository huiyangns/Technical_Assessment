/// <reference types="Cypress" /> 

/**
 * @class
 * @description This class contains locators and operation for Shop page
 */
class Shop {
    /**
   * @member {object}
   * @description Store locators for Shop page UI elements
   */
    elements = {
        getBuyBn: (itemName) => cy.contains(itemName).parent('div').find('a')
    }
    
    /**
  * @method
  * @description Click Buy button and purchase certain amount of toys
  * @param {string} itemName - The name of target toy 
  * @param {number} quantity - The number of toys to buy
  */
    buyItems(itemName, quantity){
        Cypress._.times(quantity, () => {
            this.elements.getBuyBn(itemName).click();
        })
    }
}

export default new Shop();