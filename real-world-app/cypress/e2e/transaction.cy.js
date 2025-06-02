import transactionPage from "../pages/transactionPage.js"

import '../support/commands.js'

const transactionPageInstance = new transactionPage()


describe('Transaction with enough balance',()=>{
    
                beforeEach(() => {

                    cy.login()

                })

       
               it('create a bank account',()=>{

                
                 transactionPageInstance.initialNextButton()
               const userData = transactionPageInstance.getUserData().createAccount
               transactionPageInstance.createBankAccount(userData.bankName,userData.routingNumber,userData.accountNumber)


                })


              it('Transaction Positive Balance',()=>{

                      transactionPageInstance.acessBankAccountPage()
                      transactionPageInstance.findButtonNew()
                      transactionPageInstance.searchSelect()
                      const userData = transactionPageInstance.getUserData().transaction
                      transactionPageInstance.transactionEnoughBalance(userData.amount,userData.addNote)
                      transactionPageInstance.makePayment()
       

                })


                it('Transaction Negative Balance',()=>{

                    transactionPageInstance.acessBankAccountPage()
                    transactionPageInstance.findButtonNew()
                    transactionPageInstance.searchSelect()
                    const userData = transactionPageInstance.getUserData().negativeBalance
                    transactionPageInstance.transactionEnoughBalance(userData.amount,userData.addNote)
                    transactionPageInstance.makePayment()
     
                })


              
})


