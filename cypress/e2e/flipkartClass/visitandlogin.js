class visitandlogin{
    visit(){
        cy.visit("https://www.flipkart.com/")
    
    }
    searchProduct(){
        cy.get('.Pke_EE').type('mobile')// locator of search bar and type product
        cy.get('._2iLD__').click()// click on search icon
    }
}
export default new visitandlogin()