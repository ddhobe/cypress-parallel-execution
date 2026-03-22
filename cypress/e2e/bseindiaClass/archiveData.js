class dataArchieve{
    archieve(){

         // archieve
         cy.get('a > .btn').click()
        
         //select monthly text    
         cy.get('#ContentPlaceHolder1_rdbMonthly').click()
         cy.get('#ContentPlaceHolder1_cmbMonthly')
         .select('Jun').should("have.value","06")

         cy.get('#ContentPlaceHolder1_cmbMYear').select('2024')
         .should("have.value","2024")

         cy.get('#ContentPlaceHolder1_btnSubmit').click()

         
         
    }
}

export default new dataArchieve()