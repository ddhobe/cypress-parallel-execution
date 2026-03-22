 import {Given,Then,And,When} from "cypress-cucumber-preprocessor/steps"
 import visitandlogin from '../flipkartClass/visitandlogin'
 import productPage from "../flipkartClass/productPage"
import addToCartPage from '../flipkartClass/addTOCartPage'
import placeOrder from '../flipkartClass/placeOrder'

 Given ("visit and login to flipkart page",()=>{
    visitandlogin.visit()
    visitandlogin.searchProduct()

 })
 Then("select Brand",()=>{
   productPage.selectBrand()
   productPage.selectProduct()
   productPage.getProductPrice()
   productPage.addToCart()
 })
 And("product in add to cart",()=>{
   addToCartPage.cartPage()
   addToCartPage.removeOtherItems()
   const priceText="₹74,900"
   addToCartPage.comparePrice(priceText)

 })
 Then("place order",()=>{
   placeOrder.clickOnPlaceOrder()
   placeOrder.loginData()
 })