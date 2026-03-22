class  productDetails{
    clickOnProduct(){
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    }
    ViewProduct(){
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
    }
    // prodInformationPage(){
    //     cy.get('.product-information').should('have.text',('Availability','Condition','Brand'))
    // }

    increaseQuantity(){
        cy.get('#quantity').clear()
        .type('3')
    }
    addToCart(){
        cy.get(':nth-child(5) > .btn').click()
    }
    confirmationMsg(){
        cy.get('.modal-body > :nth-child(1)').should('have.text','Your product has been added to cart.')
    }
}
export default new productDetails()