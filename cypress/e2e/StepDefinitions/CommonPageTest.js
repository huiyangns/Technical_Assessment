import { When } from "@badeball/cypress-cucumber-preprocessor";
import commonInstance from "../POM/Common";

/**
 * This file contains common step definitions for all UI pages
 */

//Click action link button
When('I click action button {string}', (text) => {
  commonInstance.clickActionButton(text);
})

//Click an item in navigation bar
When('I click on {string} in navigation bar', (text) => {
  commonInstance.clickNavItem(text);
})

//Verify Table values
When('I should see the following results in the {string} table', (tableSelector, dataTable) => {
  commonInstance.assertValuesInTable(tableSelector, dataTable.hashes());
})