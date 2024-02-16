import {When} from "@badeball/cypress-cucumber-preprocessor";
import homePageInstance from "../POM/Homepage/HomePage";

/**
 * This file contains all step definitions related to Home Page
 */

// Visit home page
When('I navigate to the website home page', () => {
  homePageInstance.visitHomePage();
})

