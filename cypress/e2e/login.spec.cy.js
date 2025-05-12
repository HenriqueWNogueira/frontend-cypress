import userData from '../fixtures/userData.json'


describe('Orange HRM Tests', () => {

  const selectorsList = {

    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-text--h6",
    wrongCredetionAlert: "[role='alert']"

  }

  


  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    
  })


  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredetionAlert)
    
})
})

// pular teste -> colocar it.skip(....)