import {When} from "@badeball/cypress-cucumber-preprocessor";
import shopInstance from "../POM/ShopPage/Shop";

/**
 * This file contains all step definitions related to Shop Page
 */

// click button to buy several toys
When('I buy {int} {string} toys', (quantity, itemName) => {
  shopInstance.buyItems(itemName, quantity);
  })
