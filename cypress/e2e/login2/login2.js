import {Given,When,Then,And,Before} from "cypress-cucumber-preprocessor/steps"

// Given("open newtours application",()=>{
//      cy.visit("https://demo.guru99.com/test/newtours/")
//  })
//  When("provide valid username and password",()=>{
//      cy.get("input[name='userName']").type('mercury')
//      cy.get("input[name='password']").type('mercury')
//  })
//  Then("click on submit button",()=>{
//      cy.get("input[value='Submit']").click()
//  })
//  And("verify title of the page",()=>{
//     cy.title().should('eq','Login: Mercury Tours')
 //})

// taking parameter as a string
//  Given("open newtours application",()=>{
//     cy.visit("https://demo.guru99.com/test/newtours/")
// })
// When("provide valid {string} and {string}",(username,password)=>{
//     cy.get("input[name='userName']").type('mercury')
//     cy.get("input[name='password']").type('mercury')
// })
// Then("click on submit button",()=>{
//     cy.get("input[value='Submit']").click()
// })
// And("verify title should be {string}",(title)=>{
//    cy.title().should('eq','title')
// })



// taking parameter as a string

Before(()=>{
    cy.reload()

})

Given("open newtours application",()=>{
    cy.visit("https://demo.guru99.com/test/newtours/")

})

   When ("login as following",(datatable)=>{
        let users=datatable.hashes();//it convert datatable into array

     users.forEach((singleuser)=>{

 
 
     cy.get(':nth-child(2) > [width="112"] > input').type(singleuser.username)
     cy.get(':nth-child(3) > [width="112"] > input').type(singleuser.password)

    })

     
     })
     
     Then("click on submit button",()=>{
        cy.get('div > input').click()
     
     })
     And("verify logo should be visible",()=>{
        cy.get('[valign="top"] > :nth-child(1) > :nth-child(1) > img').should('be.visible')
  })
