import { When } from "@badeball/cypress-cucumber-preprocessor";
import cartInstance from "../POM/CartPage/Cart";

/**
 * This file contains all step definitions related to Cart Page
 */

//verify the sum of subTotal equals to Total
When('I should see the sum of {string} equals to {string} in the {string} table', (source, target, selector) => {
    cartInstance.assertSumOfSubTotalEqualTotal(source, target, selector);
})