import {Given,Then,When,And} from 'cypress-cucumber-preprocessor/steps'
import registration from '../classautomationExercise/register'
//import loginUser from '../classautomationExercise/login'
//import loginWithValidCredentials from '../classautomationExercise/login'
import {contactUsForm} from '../classautomationExercise/contactUs'
import productDetails from '../classautomationExercise/productPage'

import { loginUser, loginWithInvalidCredentials } from '../classautomationExercise/login';


Given("open a url",()=>{
    registration.webVisit()
})
When("validate a home page",()=>{
    registration.validateLogo()
})
Then("user signup",()=>{
    registration.newUserSignUP()
})
And("fill details",()=>{
    registration.fillDetails()
})

When("user click on login or signup button",()=>{
loginUser.clickOnLogin()
loginUser.loginWithValidCredentials()
})
Then("validation-user should logged in as a username",()=>{
    loginUser.validation()
})
And("logout user",()=>{
    loginUser.logOut()
})

When("click on login button",()=>{
    loginWithInvalidCredentials.loginClick()
})

Then("fill Invalid Credentials",()=>{
    loginWithInvalidCredentials.fillupInvalidDetails()
})
And("validation message",()=>{
    loginWithInvalidCredentials.validationIncorrectCredentialMsg()
})

When("user click on contact us",()=>{
    contactUsForm.clickOnContactUs()

})
Then("page validation",()=>{
    contactUsForm.pageValidation()
})
And("fill all details",()=>{
    contactUsForm.fillDetails()
})
Then("validation",()=>{
    contactUsForm.submitValidation()
})
And("Back to home page",()=>{
    contactUsForm.backToHomePage()
})
When("Click on 'Products' button",()=>{
    productDetails.clickOnProduct()

})
Then("Click on 'View Product' of first product",()=>{
    productDetails.ViewProduct()
   // productDetails.prodInformationPage()
})

And("Increase quantity of the product",()=>{
    productDetails.increaseQuantity()
})
Then("add product to the cart",()=>{
    productDetails.addToCart()
})
And("confirmation msg should be visible",()=>{
    productDetails.confirmationMsg()
})