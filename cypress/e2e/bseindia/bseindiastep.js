import {Given,Then,And, When} from "cypress-cucumber-preprocessor/steps"
import visitandsearch from '../bseindiaClass/bsevisit'
//import getData from '../bseindiaClass/bseData'
import dataArchieve from '../bseindiaClass/archiveData'
import MRFLTD from '../bseindiaClass/MRF'
import mutualfundss from "../bseindiaClass/bsemutualfunds"
import InterestedTOBuy from '../bseindiaClass/BuyGold'
import BSEPayment from '../bseindiaClass/payment'

Given("visit BSEINDIA website and search Tata steel Ltd",()=>{
    visitandsearch.visit()
    visitandsearch.search()
})

Then("check current stock value",()=>{
    visitandsearch.stockValue()
})
// Then("get stock data",()=>{
//     getData.getAllrowsData()
//     getData.singleRowData()
// })
And("Archieve jun 2024 month data",()=>{
    dataArchieve.archieve()
    })
Then("search MRF LTD and fetch all data",()=>{
    MRFLTD.mrfData()
    MRFLTD.numofRows()
    MRFLTD.numOFColumn()
    //MRFLTD.getColumn3Data()
})
And("mutual fund",()=>{
    mutualfundss.visitwebsitelocator()

})

When("provide customer's details",()=>{
    InterestedTOBuy.buyGoldandETF()

})
Then("do payment to BSEINDIA",()=>{
    BSEPayment.visitPaymentPage()

})