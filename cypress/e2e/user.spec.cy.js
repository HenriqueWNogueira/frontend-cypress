import userData from '../fixtures/userData.json'


describe('Orange HRM Tests', () => {

  const selectorsList = {

    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-text--h6",
    wrongCredetionAlert: "[role='alert']",
    myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
    firstNameField: "[name='firstName']",
    nickNameTest:':nth-child(2) > :nth-child(2) > .oxd-input',
    lastNamefield: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"

  }

  


  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.visit('/dashboard/index')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('firstNameTest')
    cy.get(selectorsList.nickNameTest).clear()
    cy.get(selectorsList.lastNamefield).clear().type('lastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('empIdTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('otherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('driversLicenseNumberTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-05-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

  })


  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredetionAlert)
    
})
})

