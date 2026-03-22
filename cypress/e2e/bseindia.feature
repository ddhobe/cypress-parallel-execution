Feature:stock purchase

Scenario:visit tata steel ltd
Given visit BSEINDIA website and search Tata steel Ltd
Then check current stock value
#Then get stock data
And Archieve jun 2024 month data
Then search MRF LTD and fetch all data
And mutual fund
When  provide customer's details
Then do payment to BSEINDIA