class loginPage {
  
    getUserData() {
        return{  

           userSucess:{username:'henriquewn' , password:'Rwapp'} ,
           userFail:{username:'henriquewn' , password:'rwapp'}
          
        } }

    selectorsList () {
    
         const selectors = {

                userNameField:"[name='username']" ,
                passwordField:"[name='password']",
                signInField:"[type='submit']",
                invalidAcess:"[role='alert']"


         }; return selectors;}    
       
    
    acessLoginPage () {
        
        cy.visit('http://localhost:3000/signin')}  

    
    loginWithUser(username,password) {

           cy.get(this.selectorsList().userNameField).type(username)
           cy.get(this.selectorsList().passwordField).type(password)
           cy.get(this.selectorsList().signInField).click()
    }

    
    loginFail () {
        
           cy.get(this.selectorsList().invalidAcess).should('be.visible').and('contain','Username or password is invalid')

    }

}

export default loginPage
