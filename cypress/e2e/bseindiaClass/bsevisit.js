class visitandsearch{
    visit(){
        cy.visit("https://www.bseindia.com/");
    }

    search(){
          // Wait for 10 sec, then close it
      cy.get('#myimg', { timeout: 10000 }).should('be.visible');
      
      //close popup
      cy.get('#myimg').find('.btn-close').click();
      // validation
      cy.get('#myimg').should('not.be.visible');
  
      // get css locator for search input
      cy.get('#getquotesearch')
        .should('be.visible')
        .click()
        .type('tata steel');
        // get locator for 1st suggestion and click .
        cy.get('#ulSearchQuote > :nth-child(1)').click() // tata steel ltd
      //validation
        cy.get("div[class='col-lg-8 eqvaluefloat'] h1[class='stockreach_title ng-binding']")
              .should('have.text','Tata Steel Ltd')
    }

    stockValue(){
        cy.get("#idcrval ").invoke('text')
          .then((text)=>{
        const price=parseFloat(text.replace(/[^\d.]/g, ''))
          console.log(price);
          if(price<=100){
            console.log("stock value is down");
          }     
          else{
            console.log("stock value is up");
          }
          })
    }
}
export default new visitandsearch ()