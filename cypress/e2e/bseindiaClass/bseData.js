class getData{
    getAllrowsData(){
        cy.get("div[class='whitebox'] >table>tbody>tr")
        .each(($row)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col)=>{
                    cy.log($col.text())
                })
            })
        })
    }

    singleRowData(){
        cy.get('.col-lg-12 > table.ng-scope > :nth-child(3) > :nth-child(1) > [align="left"]')
        .contains("Net Profit")
    }
}
export default new getData()