class productPage{
    selectBrand(){
        cy.get('[title="Apple"] > .QCKZip > .tJjCVx > .XqNaEv').click()//select Apple
        cy.get('[title="SAMSUNG"] > .QCKZip > .tJjCVx > .XqNaEv').click()//select sansung
    }
    selectProduct() {
        cy.get('[data-id="MOBH4DQFG8NKFRDY"]')
          .find('a')//Searches inside the matched element for all <a> (anchor/link) tags.
          .first()//From the list of <a> elements found, it picks only the first one.
          .invoke('removeAttr', 'target')
          .click();
      }
      getProductPrice() {
        // Select the product and get its price
        cy.get('.UOCQB1 > .hl05eU > .Nx9bqj').invoke('text').then(($price) => {      //locator of price
         const priceText =parseFloat($price.replace(/[^\d.]/g, ''));// $price.text();
            cy.log('Product Price:', priceText); 
            
          });
      }
      addToCart(){
        cy.get('.QqFHMw > :nth-child(1) > span').click({force: true})
        // force:true because skip to check referrence error
      }
      
      
}
export default new productPage()