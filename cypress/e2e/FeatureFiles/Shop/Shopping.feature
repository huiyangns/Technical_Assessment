@regression
@shop

Feature: Users can purchase toys, and the corresponding product prices are correct

    @retries(1)
    Scenario: Verify prices after purchasing a certain quantity of toys
        Given I navigate to the website home page
        And I click action button "Start Shopping »"
        And I buy 2 "Stuffed Frog" toys
        And I buy 5 "Fluffy Bunny" toys
        And I buy 3 "Valentine Bear" toys
        And I click on "Cart" in navigation bar
        Then I should see the following results in the "cart-items" table
            | Item           | Price  | Quantity | Subtotal |
            | Stuffed Frog   | $10.99 | 2        | $21.98   |
            | Fluffy Bunny   | $9.99  | 5        | $49.95   |
            | Valentine Bear | $14.99 | 3        | $44.97   |
        And I should see the sum of "Subtotal" equals to "Total" in the "cart-items" table