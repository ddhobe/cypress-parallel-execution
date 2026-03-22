class contactUS{
    clickOnContactUs(){
        cy.get('.shop-menu > .nav > :nth-child(8)').click()// click on 'contact us'
    }
    pageValidation(){
        cy.get('div.contact-form > .title').should('have.text','Get In Touch')
    }
    fillDetails(){
        cy.get('[name="name"]').type('DD')
        cy.get('[data-qa="email"]').type('dd1234@gmail.com')
        cy.get('[data-qa="subject"]').type('Page Loading issue')
        cy.get('[data-qa="message"]').type('page stucked after few seconds')
        cy.get('[data-qa="submit-button"]').click()
    }
    submitValidation(){
        cy.get('.status').contains('Success! Your details have been submitted successfully.')
    }
    backToHomePage(){
        cy.get('#form-section > .btn').click()
    }
}
export const contactUsForm=new contactUS()