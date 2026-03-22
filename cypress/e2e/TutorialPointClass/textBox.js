class textBoxElement{
    visit(){
        cy.visit("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
        cy.get('#headingOne > .accordion-button').click()// click on elements
        cy.get("a[href='text-box.php']").click()// click on textbox

    }
    textBox(){
        cy.get("#fullname").type('DD')// full name
        cy.get("#email").type('DD123gmail.com')
        cy.get('#address').type('A/P PUNE')
        cy.get("#password").type('demo')
        cy.get("input[type='submit']").click()

     }
    //  checkBoxes(){
    //     cy.get('#navMenus > :nth-child(2) > a').click()//click on check box
    //     cy.get('#bs_1 > :nth-child(1)').click()// click on + symbol
    //     cy.get("#c_bf_1").click()// sub-checkbox
    //     cy.get('#c_bs_2').click()//click second checkbox

    //  }
    //  radioButtons(){
    //     cy.get("a[href='radio-button.php']").click()//click on radiobuttons title
    //     cy.get('.mb-3').contains('Radio Button')//validationS
    //     cy.get("input[value='igottwo']").click()//click on'yes' radiobutton
    //     cy.get('#check > b').should('have.text','Yes')
    //  }
    // buttons(){
    //     cy.get('#navMenus > :nth-child(5) > a').click()//click on buttons title
    //     cy.get("button[class='btn btn-primary']").click()//click on 'click me'.
    //     //validation
    //     cy.get('#welcomeDiv').should('have.text', '\n\t\t\t\t\tYou have done a dynamic click\n\t\t\t\t')
    //     cy.reload()//to remove the validation text
    //     cy.get('.btn-secondary').rightclick()//rightclick
    //     cy.get('.btn-success').dblclick()
    // }
    // webtable(){
    //     cy.get("a[href='webtables.php']").click()//click on web Table
    //     cy.get("button[class='btn btn-primary']").click()//click on add button to add new entry
    //     cy.get("#firstname").type("dd")
    //     cy.get("#lastname").type('dd')
    //     cy.get("#email").type("dd@gmail.com")
    //     cy.get("#age").type('1000')
    //     cy.get("#salary").type(10000000000000000000)
    //     cy.get("#deparment").type("support")
    //     cy.get('#staticBackdropLive > .modal-dialog > .modal-content > #RegisterForm > .modal-footer > .btn').click()

    //     //to get number of rows
    //     cy.get('body > main > div > div > div.col-md-8.col-lg-8.col-xl-8 > form > div.bd-example.table-responsive > table > tbody >tr').should('have.length','05')
    //     cy.get('body > main > div > div > div.col-md-8.col-lg-8.col-xl-8 > form > div.bd-example.table-responsive > table > thead >tr>th').should('have.length','07')
        
    // }
    alerts(){
        cy.get("button[data-bs-target='#collapseThree']").click()//click on  frames,alerts&windows
        cy.get("a[href='alerts.php']").click()//clck on Alerts
        cy.get("button[onclick='showAlert()']").click()
        cy.get(':nth-child(3) > .btn').click()
        cy.get(':nth-child(4) > .btn').click()
        cy.get('#desk').contains('You pressed OK!')
        //cy.get(':nth-child(5) > .btn').click()
    }

}
export default new textBoxElement()