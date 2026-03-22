class registration{
    visitWeb(){
        cy.visit("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
    }

    fillDetails(){
        cy.get("#name").type("DD")//enter name
        cy.get("input[type='email' i]").type ('DD123gmail.com')//Enter email
        cy.get("#gender").click()//choose male radio button
        cy.get("#mobile").type('9876543210')// enter mobile number
        cy.get("#dob").type('2011-11-11')//DOB
        cy.get("#subjects").type('cypress automation')// enter subject
        cy.get("#hobbies").click()//click checkbox
        cy.get("#picture").click()// click on choose file
        cy.get("body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(10) > div:nth-child(2) > textarea:nth-child(1)")
        .type("pune")//address
        cy.get("#state").select('Haryana')//select state
        cy.get("#city").select("Agra")//select city
        cy.get("input[type='submit']").click()//login
    }
}
export default new registration()