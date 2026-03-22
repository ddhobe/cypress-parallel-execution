class searchProduct{
    visit(){
        cy.visit("https://www.amazon.in/")
    }
    search(){
        cy.get("#twotabsearchtextbox").type('iphone 16 pro max').type('{enter}')
        //cy.get('#p_123\/110955 > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').check()// ticked on brand'iphone'
        cy.get("a[aria-label='Apply the filter 128 GB to narrow results'] i[class='a-icon a-icon-checkbox']")
        .click({force: true})//select GB
        
    }
    selectProduct(){
        cy.get("h2[aria-label='iPhone 16 Pro 128 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Natural Titanium'] span")
        cy.get('a[target="_blank"]', { timeout: 10000 }) // wait up to 10s
        .should('exist') // or .should('be.visible')
        .first()
        .invoke('removeAttr', 'target')
        .click()
    
    }
    addToCart(){
        cy.get('#buy-now-button').click()
        
        
    }
}

export default new searchProduct()