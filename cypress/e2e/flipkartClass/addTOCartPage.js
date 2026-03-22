class addToCartPage{
    cartPage() {
        cy.get('.p2uyH2 .LcLcvv') // selects all round buttons inside the quantity control area
          .eq(1) // usually: .eq(0) = minus, .eq(1) = plus
          .click();
      }
      removeOtherItems(){
        cy.get(':nth-child(3) > .eGXlor').contains("Remove").click()//click on remove
        cy.get('.A0MXnh').click()//confirmation popup to remove
        cy.get(':nth-child(2) > .eGXlor').contains("Remove").click()
        cy.get('.A0MXnh').click()
      }
      comparePrice(priceText){
        cy.get("div[class='PWd9A7 xvz6eC'] span").invoke('text').then(($sellPrice)=>{
            let finalPrice=parseFloat($sellPrice.replace(/[^\d.]/g, ''));//$sellPrice.text()
            cy.log("final Price=",finalPrice)
            if(finalPrice===priceText){
                cy.log("Ready to Buy")
            } 
            else{
                cy.log("cancel to Buy")
            }
        })
       
      }
      
      
}
export default new addToCartPage()