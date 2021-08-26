Feature: Practice functions of the application

    As a user i want to register and use the travel website functions.

    Scenario: As a user i want to register on the website
    Given I open the mercury tours website
    When  I enter username as "admin"
    And   I enter password as "admin"
    And   I click on submit button
    Then  I should be able to successfully login to website.

    Scenario: As a user i want to log off after sucessful login
    When I click on signoff link
    Then I should be redirected successfully

