@regression
@contact

Feature: User can submit feedback after populating all mandatory fields

    @retries(1)
    Scenario: Verify normal submit workflow
        Given I navigate to the website home page
        And I click on "Contact" in navigation bar
        When I type unique val "forename" in the "Forename" field
        And I type unique val "test@gmail.com" in the "Email" field
        And I type unique val "random message" in the "Message" field
        And I click action button "Submit"
        Then I "should see" successful submit message displayed with "alert-success" style contains "Thanks dataShare[forename], we appreciate your feedback."