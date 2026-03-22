Feature: orange hrm login Feature

Scenario: user should be able to login using valid credentials
  Given visit orange hrm website
  When user provide username
  When user provide password
  Then click on login button
