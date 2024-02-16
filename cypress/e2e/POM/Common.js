/// <reference types="Cypress" /> 
import utilityInstance from "./Utility";

/**
 * @class
 * @description This class contains common operations for all UI pages
 */
class Common {
    /**
  * @method
  * @description Click an action button
  * @param {string} text - The text of action button
  */
    clickActionButton(text) {
        cy.contains('a', text).click();
    }

    /**
  * @method
  * @description Click an item in navigator bar
  * @param {string} idVal - Selector id.
  */
    clickNavItem(idVal) {
        cy.get(utilityInstance.composeIdForNavItem(idVal)).click();
    }

    /**
  * @method
  * @description Assert values displayed in a table
  * @param {string} selector - Selector for a table.
  * @param {Array} dataTable - Array of objects and an object in the array represents a row in the table.
  */
    assertValuesInTable(selector, dataTable) {
        cy.get(`table.${selector}`).should('be.visible').then(() => {
            //Deal with dataTable row, an object {'Item': 'Stuffed Frog', '	Price': '$10.99'...}, one by one
            for (const row of dataTable) {
                let rowIndex = -1;
                for (let [key, value] of Object.entries(row)) {
                    if ("" === value) continue;
                    //unique value identify a row and get the index of that row in the table
                    if (rowIndex === -1) {
                        rowIndex = Cypress.$(`table.${selector} tbody tr:contains(${value})`).index();
                    }
                    cy.contains(`table.${selector} thead > tr > th`, key).invoke('index')
                        .then((columnIndex) => {
                            cy.get(`table.${selector} tbody > tr:nth-child(` + (rowIndex + 1) + ') > td:nth-child(' + (columnIndex + 1) + ')').as('target');
                            switch (key) {
                                case "Quantity":
                                    cy.get('@target').find('input:visible').should('have.value', value);
                                    break;
                                default:
                                    cy.get('@target').invoke('text').should((text) => {
                                        expect(text.trim()).to.eq(value);
                                    });
                            }
                        })
                }
            }
        })
    }
}

export default new Common();