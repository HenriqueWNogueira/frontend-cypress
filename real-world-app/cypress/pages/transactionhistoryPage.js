class transanctionhistoryPage {

   selectorList() {
  
      const selectors = {
                      
          headSelect:"[role='tab']",
          transactions:".TransactionTitle-title",
          homeSection:"[data-test='sidenav-home']"

           };return selectors;
   } 

   checkPage () {
    
         cy.visit('http://localhost:3000/')
         cy.get(this.selectorList().homeSection).click()

   }

   atListOneTransaction () {

         cy.get(this.selectorList().transactions).should('have.length.greaterThan', 0)


   }

   verifyTransactionHistory () {
   
             
         cy.get(this.selectorList().headSelect).eq(0).click()
         cy.get(this.selectorList().transactions).eq(0).should('be.visible').and('contain','Ted Parisian')
         

   }
}


export default transanctionhistoryPage
