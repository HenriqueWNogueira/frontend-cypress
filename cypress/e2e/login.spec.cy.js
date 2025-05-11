describe('Orange HRM Tests', () => {

  const selectorsList = {

    usernameField: "[placeholder='Username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-text--h6",
    wrongCredetionAlert: "[role='alert']"

  }


  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.selectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin1234')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredetionAlert)
    
})
})

// pular teste -> colocar it.skip(....)