class registration{
    webVisit(){
        cy.visit('http://automationexercise.com')
    }
    validateLogo(){
        cy.get('a > img').should('exist')
    }
    newUserSignUP(){
        cy.get("a[href='/login']").click()// click on signin/signup
        cy.get('.signup-form').should('be.visible')//validate signup page should be visible
        cy.get('[data-qa="signup-name"]').type('DD')
        cy.get('[data-qa="signup-email"]').type('dd1234@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
    }
    fillDetails(){
        cy.get("#id_gender1").click()
        cy.get("#password").type('1234')
        cy.get('#first_name').type('DD')
        cy.get('#last_name').type('DD')
        cy.get("#address1").type('201,pune')
        cy.get("#country").select('India')
        cy.get('[data-qa="state"]').type('Maharashtra')
        cy.get("#city").type("pune")
        cy.get("#zipcode").type('123123')
        cy.get("#mobile_number").type('9876543210')
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()//account created msg


    }
}
export default new registration()