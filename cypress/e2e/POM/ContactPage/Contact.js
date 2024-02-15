/// <reference types="Cypress" /> 
import utilityInstance from "../Utility";

/**
 * @class
 * @description This class contains locators and operations in Contact page
 */

class Contact {
    /**
   * @member {object}
   * @description Store locators for Contact page UI elements
   */
    elements = {
        headerMessageAlertSelector: '#header-message > div',
        formFieldSelector: 'div.control-group',
    }

    /**
  * @method
  * @description Type unique string based on parameter text
  * @param {string} idVal - Selector id.
  * @param {string} text - The content to enter
  */
    typeUniqueValIntoField(idVal, text){
        cy.get(utilityInstance.composeIdForInput(idVal)).clear();
        cy.get(utilityInstance.composeIdForInput(idVal)).type(utilityInstance.generateUniqueString(text));
    }

    /**
  * @method
  * @description Verify the visibility of error msg in the Form
  * @param {string} idVal - Selector id.
  * @param {string} text - The content of error msg
  * @param {boolean} flag - true represents the error msg is visible and vice versa
  */
    assertErrorEleWithTextVisible(idVal, text, flag){
      flag ?
        cy.contains(utilityInstance.composeIdForErr(idVal), text).should('be.visible')
        :
        cy.contains(utilityInstance.composeIdForErr(idVal), text).should('not.be.visible');
    }

    /**
  * @method
  * @description Verify the existence of error msg in the Form
  * @param {string} idVal - Selector id.
  * @param {boolean} flag - true represents the element exists and vice versa.
  */
    assertErrorEleExistence(idVal, flag){
      flag ?
        cy.get(utilityInstance.composeIdForErr(idVal)).should('exist')
        :
        cy.get(utilityInstance.composeIdForErr(idVal)).should('not.exist');
    }

    /**
  * @method
  * @description Verify error style when a mandatory field has no valid input
  * @param {string} text - The text of the element.
  * @param {string} css - The style of the element.
  * @param {boolean} flag - true represents the element has error style and vice versa.
  */
    assertTextErrorStyleInForm(text, css, flag){
      flag ?
        cy.contains(this.elements.formFieldSelector, text).should('have.class', css)
        :
        cy.contains(this.elements.formFieldSelector, text).should('not.have.class', css);
    }

    /**
  * @method
  * @description Verify the content of header message
  * @param {string} text - The text of the element.
  */
    assertHeaderMessageContent(text){
        cy.get(this.elements.headerMessageAlertSelector).invoke('text').should('match', new RegExp(`\\s*${text}\\s*`));
    }

    /**
  * @method
  * @description Verify error style for header message
  * @param {string} css - The style of the element.
  * @param {boolean} flag - true represents the header message has error style and vice versa.
  */
    assertHeaderMessageErrorStyle(css, flag){
      flag ?
        cy.get(this.elements.headerMessageAlertSelector).should("have.class", css)
        :
        cy.get(this.elements.headerMessageAlertSelector).should("not.have.class", css);
    }

     /**
  * @method
  * @description Validate successful submission message
  * @param {string} text - The text of the element.
  * @param {string} css - The style of the element.
  */
    assertSuccessfulMessageAndStyle(text, css){
        cy.contains(`div.${css}`, utilityInstance.parseDataShareVal(text), {timeout: 60000}).should('be.visible');
    }
}

export default new Contact();