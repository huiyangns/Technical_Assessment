@regression
@contact

Feature: Verify the display of error messages under different input scenarios

  @retries(1)
  Scenario: Verify error messages without any input
    Given I navigate to the website home page
    And I click on "Contact" in navigation bar
    And I "see" the header message contains "We welcome your feedback - tell it how it is."
    And I "will not see" the header message displayed with "alert-error" style
    When I click action button "Submit"
    Then I "should see" error message displayed besides "Forename" field contains "Forename is required"
    And I "should see" error message displayed besides "Email" field contains "Email is required"
    And I "should see" error message displayed besides "Message" field contains "Message is required"
    And I "should see" the "Forename" field displayed with "error" style
    And I "should see" the "Email" field displayed with "error" style
    And I "should see" the "Message" field displayed with "error" style
    And I "should see" the header message contains "We welcome your feedback - but we won't get it unless you complete the form correctly."
    And I "should see" the header message displayed with "alert-error" style

  @retries(1)
  Scenario: Verify error messages gone after populating mandatory fields
    Given I navigate to the website home page
    And I click on "Contact" in navigation bar
    When I click action button "Submit"
    And I type unique val "forename" in the "Forename" field
    And I "will not see" error message existed besides "Forename" field
    And I "will not see" the "Forename" field displayed with "error" style
    And I "see" the header message contains "We welcome your feedback - but we won't get it unless you complete the form correctly."
    And I type unique val "test" in the "Email" field
    And I "see" error message displayed besides "Email" field contains "Please enter a valid email"
    And I "see" the "Email" field displayed with "error" style
    And I type unique val "test@gmail.comcom" in the "Email" field
    And I "see" error message displayed besides "Email" field contains "Please enter a valid email"
    And I "see" the "Email" field displayed with "error" style
    And I type unique val "test@gmail.com" in the "Email" field
    And I "will not see" error message existed besides "Email" field
    And I "will not see" the "Email" field displayed with "error" style
    And I "see" the header message contains "We welcome your feedback - but we won't get it unless you complete the form correctly."
    And I type unique val "random message" in the "Message" field
    And I "will not see" error message existed besides "Message" field
    And I "will not see" the "Message" field displayed with "error" style
    Then I "should see" the header message contains "We welcome your feedback - tell it how it is."
    And I "should not see" the header message displayed with "alert-error" style