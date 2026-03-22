class loginUserClass{
    clickOnLogin(){
        cy.get("a[href='/login']").click()// click on login/signup
        cy.get('.login-form').should('be.visible')//valiadte login form
    }
    loginWithValidCredentials(){
        cy.get('[data-qa="login-email"]').type('dd1234@gmail.com')
        cy.get('[data-qa="login-password"]').type('1234')
        cy.get('[data-qa="login-button"]').click()
    }
    validation(){
        cy.get(':nth-child(10) > a').should('have.text',' Logged in as DD')
    }
    logOut(){
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    }
}

class loginWithInvalidCredentialsClass{
    loginClick(){
        cy.get("a[href='/login']").click()// click on login/signup
        cy.get('.login-form').should('be.visible')//valiadte login form
    }
    fillupInvalidDetails(){
        cy.get('[data-qa="login-email"]').type('dddd1234@gmail.com')//invalid email
        cy.get('[data-qa="login-password"]').type('1111')
        cy.get('[data-qa="login-button"]').click()

    }
    validationIncorrectCredentialMsg(){
        cy.get('.login-form > form > p').contain('Your email or password is incorrect!')
    }

}

export const loginUser = new loginUserClass();
export const loginWithInvalidCredentials = new loginWithInvalidCredentialsClass();
