class userRegistration{
    webVisit(){
        cy.visit("https://www.amazon.in/")
        }
    // validateLogo(){
    //     cy.get('#nav-logo-sprites').should ('be.visible')
    // }
    
    // createAccount(){
    //     cy.get("#nav-link-accountList-nav-line-1").click()// click on 'Hello,sign in'
    //     cy.get('#ap_email_login').type('9876543210')
    //     cy.get('.a-button-input').click() //click on 'continue'
    // }


}
export default new userRegistration()