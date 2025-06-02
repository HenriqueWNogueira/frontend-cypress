import transanctionhistoryPage from "../pages/transactionhistoryPage"

import '../support/commands.js'

const transactionhistoryPageInstance = new transanctionhistoryPage()


describe('Transaction history',()=>{

        beforeEach(() => {

                 cy.login()

         })


         it('should have at least one transaction',()=>{

         
                 transactionhistoryPageInstance.checkPage()
                 transactionhistoryPageInstance.atListOneTransaction()
                 transactionhistoryPageInstance.verifyTransactionHistory()
        

         })


})
