/// <reference types="Cypress" /> 

/**
 * @class
 * @description This class contains operations for Cart page
 */

class Cart {
    /**
  * @method
  * @description Verify the sum of subTotal equals to Total
  * @param {string} source - The column name, which is subTotal in this case, in the table
  * @param {string} target - The text of Total element
  * @param {string} selector - The selector of table
  */
    assertSumOfSubTotalEqualTotal(source, target, selector){
        let sumOfSubTotal = 0;
        cy.get(`table.${selector}`).should('be.visible').then(() => {
            cy.contains(`table.${selector} thead > tr > th`, source).invoke('index').then((ColumnIndex) => {
                cy.get(`table.${selector} tbody > tr > td:nth-child(${ColumnIndex + 1})`).each(($td) => {
                    sumOfSubTotal += Number.parseFloat($td.text().trim().substring(1));
                }).then(() => {
                    cy.contains(target).then(($ele) => {
                        expect(Number.parseFloat($ele.text().match(/\d+\.?\d+/)?.[0])).to.equal(sumOfSubTotal);
                    })
                })
            })
        })
    }
}

export default new Cart();