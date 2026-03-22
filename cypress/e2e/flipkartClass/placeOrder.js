class placeOrder{
    clickOnPlaceOrder(){
        cy.get('form > .QqFHMw').click()
    }
    loginData(){
        cy.get('.r4vIwl').type('704043748644')//login with mobile number
        cy.get('.QqFHMw').click()//click on submitt button
    }
}

export default new placeOrder()