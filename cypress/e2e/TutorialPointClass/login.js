class login{
    login(){
        cy.get("div[id='collapseTwo'] li:nth-child(2)").click()// click on login
        cy.get("#email").type('DD123gmail.com')
        cy.get("#password").type('demo')
        cy.get('input.btn').click()
    }
}
export default new login()