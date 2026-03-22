// import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

// Given("open newtours application",()=>{
//     cy.visit("https://demo.guru99.com/test/newtours/")
// })
// When("provide valid username and password",()=>{
//     cy.get("input[name='userName']").type('mercury')
//     cy.get("input[name='password']").type('mercury')
// })
// Then("click on submit button",()=>{
//     cy.get("input[value='Submit']").click()
// })
// And("verify title of the page",()=>{
//     cy.title().should('eq','Login: Mercury Tours')
// })


//  // case 1 --- taking parameter as a string

//  import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

// Given("open newtours application",()=>{
//     cy.visit("https://demo.guru99.com/test/newtours/")
// })
// When("provide valid {string} and {string}",(userName,password)=>{
//     cy.get("input[name='userName']").type(userName)
//     cy.get("input[name='password']").type(password)
// })
// Then("click on submit button",()=>{
//     cy.get("input[value='Submit']").click()
// })
// And("verify title should be {string}",(title)=>{
//     cy.title().should('eq',title)
// })



// // case 1 --- using Datatable

import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given("open newtours application",()=>{
    cy.visit("https://demo.guru99.com/test/newtours/")
})
When("I log in as following",(Datatable)=>{
    Datatable.hashes().forEach(element => {

        cy.get("input[name='userName']").clear().type(element.username)
        cy.get("input[name='password']").clear().type(element.password)
        
    });
  
})
Then("click on submit button",()=>{
    cy.get("input[value='Submit']").click()
})
And("verify title should be {string}",(title)=>{
    cy.title().should('eq',title)
})





// // hooks in cucumber

// import {Given,When,Then,And, Before, After} from "cypress-cucumber-preprocessor/steps"

// Before(()=>{
//     cy.reload()
// })

// After(()=>{
//     cy.reload()
// })

// Given("open newtours application",()=>{
//     cy.visit("https://demo.guru99.com/test/newtours/")
// })
// When("I log in as following",(Datatable)=>{
//     Datatable.hashes().forEach(element => {

//         cy.get("input[name='userName']").type(element.username)
//         cy.get("input[name='password']").type(element.password)
        
//     });
  
// })
// Then("click on submit button",()=>{
//     cy.get("input[value='Submit']").click()
// })
// And("verify title should be {string}",(title)=>{
//     cy.title().should('eq',title)
// })




// tags in cucumber

// import {Given,When,Then,And, Before, After} from "cypress-cucumber-preprocessor/steps"

// Before(()=>{
//     cy.reload()
// })

// After(()=>{
//     cy.reload()
// })

// Given("open newtours application",()=>{
//     cy.visit("https://demo.guru99.com/test/newtours/")
// })
// When("I log in as following",(Datatable)=>{
//     Datatable.hashes().forEach(element => {

//         cy.get("input[name='userName']").type(element.username)
//         cy.get("input[name='password']").type(element.password)
        
//     });
  
// })
// Then("click on submit button",()=>{
//     cy.get("input[value='Submit']").click()
// })
// And("verify title should be {string}",(title)=>{
//     cy.title().should('eq',title)
// })    
