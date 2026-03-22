class secondRegistration{
    clickOnRegistration(){
        cy.get("a[href='register.php']").click()//click on register
        cy.get("#firstname").type("dd")//firstname
        cy.get("#lastname").type('dd')
        cy.get("#username").type('ddhobe')
        cy.get("#password").type('12345')
        cy.get('input.btn')// click on Register
   }
}
export default new secondRegistration()