class InterestedTOBuy{
    buyGoldandETF(){
        cy.get('#ContentPlaceHolder1_txtname').type("DD")//name
        cy.get('#ContentPlaceHolder1_txtFromDt').click()//DOB
        cy.get('.ui-datepicker-month').select('May')//month of DOB
        cy.get('.ui-datepicker-year').select('2025')//year of DOB
        cy.get(':nth-child(1) > :nth-child(6) > .ui-state-default').click()//Date Of DOB
        cy.get('#ContentPlaceHolder1_RadioButtonList1_0').click()//gender
        cy.get('#ContentPlaceHolder1_txtemail').type('asdf12@gmail.com')//email
        cy.get('#ContentPlaceHolder1_txtmob').type('9876543210')//mobile no
        cy.get('#ContentPlaceHolder1_txtState').type("Maharashtra")//state
        cy.get('#ContentPlaceHolder1_txtCity').type('Pune')//city
        cy.get('#ContentPlaceHolder1_txtpin').type('414141')//pincode
        cy.get('#ContentPlaceHolder1_txtBrokerName').type("dd")//brokerName
        cy.get('#ContentPlaceHolder1_Button1').click()//submit button
        cy.get('#ContentPlaceHolder1_lblMgs').contains('Data submitted successfully')//validation
        

    }
}
export default new InterestedTOBuy()