class BSEPayment {
    visitPaymentPage() {
      // Step 1: Remove target and click the payment link on BSE main site
      cy.visit('https://www.bseindia.com');
      cy.get("a[href='https://listing.bseindia.com/Payments/PaymentDetails.aspx']")
        .should('be.visible').first()
        .invoke('removeAttr', 'target')
        .click({force: true});
  
      // Step 2: Switch to new origin and validate
      cy.origin('https://listing.bseindia.com', () => {
        cy.contains('Payment Details', { timeout: 10000 }).should('be.visible');
      });
      cy.get('#txtPayingEntity').type("dd")
    }
  }
  
  export default new BSEPayment();
  