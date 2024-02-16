import { When } from "@badeball/cypress-cucumber-preprocessor";
import contactInstace from "../POM/ContactPage/Contact";

/**
 * This file contains all step definitions related to Contact
 */

//Verify the visibility of error msg besides mandatory fields
When('I {string} error message displayed besides {string} field contains {string}', (checkcase, idVal, text) => {
  switch (checkcase) {
    case "should see":
    case "see":
      contactInstace.assertErrorEleWithTextVisible(idVal, text, true);
      break;
    default:
      console.log('Please use correct checkcase');
  }
})

//Verify the existence of error msg besides mandatory fields
When('I {string} error message existed besides {string} field', (checkcase, idVal) => {
  switch (checkcase) {
    case "should not see":
    case "will not see":
      contactInstace.assertErrorEleExistence(idVal, false);
      break;
    default:
      console.log('Please use correct checkcase');
  }
})

//Verify the style of mandatory fields when errors happen
When('I {string} the {string} field displayed with {string} style', (checkcase, fieldName, css) => {
  switch (checkcase) {
    case "should see":
    case "see":
      contactInstace.assertTextErrorStyleInForm(fieldName, css, true);
      break;
    case "should not see":
    case "will not see":
      contactInstace.assertTextErrorStyleInForm(fieldName, css, false);
      break;
    default:
      console.log('Please use correct checkcase');
  }
})

// Verify the content of header msg
When('I {string} the header message contains {string}', (checkcase, text) => {
  switch (checkcase) {
    case "should see":
    case "see":
      contactInstace.assertHeaderMessageContent(text);
      break;
    default:
      console.log('Please use correct checkcase');
  }
})

// Verify the style of header msg
When('I {string} the header message displayed with {string} style', (checkcase, css) => {
  switch (checkcase) {
    case "should see":
    case "see":
      contactInstace.assertHeaderMessageErrorStyle(css, true);
      break;
    case "should not see":
    case "will not see":
      contactInstace.assertHeaderMessageErrorStyle(css, false);
      break;
    default:
      console.log('Please use correct checkcase');
  }
})

// Type unique val into a input field
When('I type unique val {string} in the {string} field', (inputText, idVal) => {
  contactInstace.typeUniqueValIntoField(idVal, inputText);
});

//Verify the content and style of successful submit msg
When('I {string} successful submit message displayed with {string} style contains {string}', (checkcase, css, text) => {
  switch (checkcase) {
    case "should see":
    case "see":
      contactInstace.assertSuccessfulMessageAndStyle(text, css);
      break;
    default:
      console.log('Please use correct checkcase');
  }
})