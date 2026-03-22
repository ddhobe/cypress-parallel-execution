import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"
import registration from "../TutorialPointClass/registration"
import secondRegistration from '../TutorialPointClass/secondRegistration'
import login from "../TutorialPointClass/login"
import textBoxElement from '../TutorialPointClass/textBox'

Given("visit web",()=>{
    registration.visitWeb()
    registration.fillDetails()
})
Then("register a user",()=>{
secondRegistration.clickOnRegistration()
})
When("user login",()=>{
    login.login()

})
Given("website visiting",()=>{
    textBoxElement.visit()
    textBoxElement.textBox()
})
When("checkboxes",()=>{
    textBoxElement.checkBoxes()
})
Then("Radiobuttons",()=>{
    textBoxElement.radioButtons()
})
And("Buttons",()=>{
    textBoxElement.buttons()

})
Then("web tables",()=>{
    textBoxElement.webtable()
})
And ("Alerts",()=>{
    textBoxElement.alerts()
})