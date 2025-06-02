class registerPage {

    getUserData () {

        return {

            signUp: {

                firstName: 'testFirstName',
                lastName: 'testLastName',
                userName: 'testUserName',
                passWord: '1234',
                confirmPassword: '1234'},

            invalidSignUp: {

                firstName: 'invalidFirstName',
                lastName: 'invalidLastName',
                userName: 'invalidUserName',
                passWord: 'test',
                confirmPassword: 'testt'},


            } 
        }

    selectorsList () {
        
        const selectors = { 

            firstName:"[name='firstName']",
            lastName:"[name='lastName']",
            userName:"[name='username']",
            passWord:"[name='password']",
            confirmPassword:"[name='confirmPassword']",
            signUpButton:"[type='submit']",
            failRegister: "#confirmPassword-helper-text",
                        
                            
            } 
            
            return selectors 
    }

    acessSignUp () {
        
        cy.visit('http://localhost:3000/signup')}
     

    signUpForm (firstName,lastName,userName ,passWord ,confirmPassword) {

                   cy.get(this.selectorsList().firstName).type(firstName)
                   cy.get(this.selectorsList().lastName).type(lastName)
                   cy.get(this.selectorsList().userName).type(userName)
                   cy.get(this.selectorsList().passWord).type(passWord)
                   cy.get(this.selectorsList().confirmPassword).type(confirmPassword)
    
    }

    saveSignUp () {
                   
                   cy.get(this.selectorsList().signUpButton).click()
    }

    invalidRegister () {
                      
                   cy.get(this.selectorsList().failRegister).should('be.visible').and('contain','Password does not match')       
    }


}

export default registerPage


