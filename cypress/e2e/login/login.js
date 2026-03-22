

import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"  //import feature file

import { loginPageElements } from "../PageElement/loginPageelement"  //import class

const login_ele=new loginPageElements     //object creation

const passELE=require('../PageElement/element.json')  //import json file

Given("visit orange hrm website",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

When("user provide username",()=>{
    login_ele.userName(passELE.keyvalue.userkey)
     return
})

When("user provide password",()=>{
    login_ele.password(passELE.keyvalue.passkey)
    return
})

Then("click on login button",()=>{
    login_ele.Loginbutton()
    return
})


