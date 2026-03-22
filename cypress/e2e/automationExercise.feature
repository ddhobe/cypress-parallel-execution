Feature:Automation Exercise

Background:
Given open a url

Scenario:registration
When validate a home page
Then user signup
And fill details


Scenario: login user with correct email and password
When user click on login or signup button
Then validation-user should logged in as a username
And logout user


Scenario:login with invalide credentials
When click on login button
Then fill Invalid Credentials
And validation message


Scenario:contact Us page
When user click on contact us
Then page validation
And fill all details
Then validation
And Back to home page

@only
Scenario:Verify All Products and product detail page
When Click on 'Products' button
Then Click on 'View Product' of first product
And Increase quantity of the product
Then add product to the cart
And confirmation msg should be visible