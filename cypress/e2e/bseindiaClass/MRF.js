class MRFLTD {
    mrfData(){
        cy.get("#ContentPlaceHolder1_smartSearch").clear().type("MRF")
         cy.get('.quotemenu > a').click()
         cy.get('#ContentPlaceHolder1_btnSubmit').click()
         //validation
         cy.get('.tablebluelink').should('have.text','MRF Ltd')
    }
     numofRows(){
        cy.get('#ContentPlaceHolder1_spnStkData > table > tbody > tr')
                 .should('have.length','21')

    }
    numOFColumn() {
        cy.get('#ContentPlaceHolder1_spnStkData > table > tbody > tr')
          .first()
          .find('td, th')
          .then($cols => {
              cy.log(`Total columns: ${$cols.length}`);
          });
    }
    // getColumn3Data() {
    //     cy.get('#ContentPlaceHolder1_spnStkData > table > tbody > tr') 
    //        .each(($row) => {
    //         cy.wrap($row)
    //           .find('td')
    //           .eq("Low")      // column 3 (0-based index)
    //           .then($cell => {
    //               cy.log($cell.text().trim()); // or use for assersion
    //           });
    //     });
    // }
    
    
}

export default new MRFLTD()