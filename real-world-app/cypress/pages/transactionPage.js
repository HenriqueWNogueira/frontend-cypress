class transactionPage { 

    getUserData() {

          return {

                transaction:{amount:'$1000' , addNote:'Rent'},
                createAccount:{bankName:'12345' , routingNumber:"000000000" , accountNumber:"111111111"},
                contactName:{searchName:'Ted parisian'},
                negativeBalance:{amount:'$5000' , addNote:'saldo Insuficiente'}

                 }

     }

    selectorsList() {
             
          const selectors = {
                               

               bankName:"[name='bankName']",
               routingNumber:"[name='routingNumber']",
               accountNumber:"[name='accountNumber']",
               saveAccount:"[type='submit']",
               bankAccounts: "[data-test='sidenav-bankaccounts']", 
               newButton: "[data-test='nav-top-new-transaction']" ,
               search:"[data-test='user-list-search-input']",
               selectAccount:'[data-test="user-list-item-uBmeaz5pX"]',
               amountSelect:"[data-test='transaction-create-amount-input']",
               addNote:"[placeholder='Add a note']",
               pay:"[data-test='transaction-create-submit-payment']",
               doneButton:"[data-test='user-onboarding-next']",
               nextButtonDown:"[data-test='user-onboarding-next']",
               returnToTransactions: '[data-test="new-transaction-return-to-transactions"]'
               

          }; return selectors ;
     } 


     initialNextButton () {

               cy.get(this.selectorsList().nextButtonDown).click()

     }


    createBankAccount (bankName,routingNumber,accountNumber) {
               
               
               cy.get(this.selectorsList().bankName).type(bankName)
               cy.get(this.selectorsList().routingNumber).type(routingNumber)
               cy.get(this.selectorsList().accountNumber).type(accountNumber)
               cy.get(this.selectorsList().saveAccount).click()
               cy.get(this.selectorsList().doneButton).click()
     
     }

    acessBankAccountPage() {

        
              cy.get(this.selectorsList().bankAccounts).click({force: true})

                        
     }
                     
    findButtonNew() {


            cy.get(this.selectorsList().newButton).click()
    }


    searchSelect() {
         
            
            cy.get(this.selectorsList().selectAccount).click({force: true})
               
        

    }

    transactionEnoughBalance(amount,addNote) {


              cy.get(this.selectorsList().amountSelect).type(amount)
              cy.get(this.selectorsList().addNote).type(addNote)

    }
    
    makePayment() {


              cy.get(this.selectorsList().pay).click({force: true})
              cy.get(this.selectorsList().returnToTransactions).click()

    }

   }



export default transactionPage
