import {Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'
import userRegistration from '../AmazonClass/register'
import searchProduct from '../AmazonClass/searchProduct'



// Given("visit to a Official website",()=>{
//     userRegistration.webVisit()
// })
// When("validate LOGO",()=>{
//    userRegistration.validateLogo()
// })
// Then("create Account",()=>{    
//    userRegistration.createAccount()
// })


Given("visit to a web",()=>{
    searchProduct.visit()
})

When("search product",()=>{
    searchProduct.search()
})
Then("click on first product in the list",()=>{
   searchProduct.selectProduct() 
})
And("Add Product to the cart",()=>{
    searchProduct.addToCart()
})

