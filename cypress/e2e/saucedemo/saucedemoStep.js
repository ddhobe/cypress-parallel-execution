import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given("visit a website",()=>{
    cy.visit("https://www.saucedemo.com/")
})
When("provide valid credentials",()=>{
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
})
Then("add product to cart",()=>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()//click on add to cart
    cy.get('[data-test="shopping-cart-link"]').click() //click on add to cart icon
    cy.get('[data-test="checkout"]').click()//checkout
    
})
And("fill details",()=>{
    cy.get('[data-test="firstName"]').type('DD')
    cy.get('[data-test="lastName"]').type('DD')
    cy.get('[data-test="postalCode"]').type('1234')
    cy.get('[data-test="continue"]').click()// click on continue
    cy.get('[data-test="finish"]').click()// click on finish
    cy.get('[data-test="back-to-products"]').click()// back to home page
    cy.get('#react-burger-menu-btn').click()//menu button
    cy.get('[data-test="logout-sidebar-link"]').click()//logout
})