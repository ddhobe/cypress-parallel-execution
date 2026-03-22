class mutualfundss{
    visitwebsitelocator() {
        cy.get(':nth-child(9) > .nav-link').click();
    
        cy.contains('Interested to Buy Gold ETF', { timeout: 5000 }) // wait up to 5 seconds
          .should('be.visible')
          .click();
    }
    
}
export default new mutualfundss()