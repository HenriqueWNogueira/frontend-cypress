import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js' 
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()


describe('Orange HRM Tests', () => {

  const selectorsList = {

    
    selectionTitleTopBar: ".oxd-text--h6",
    wrongCredetionAlert: "[role='alert']",
    
    firstNameField: "[name='firstName']",
    nickNameTest:':nth-child(2) > :nth-child(2) > .oxd-input',
    lastNamefield: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genericCamboBox: ".oxd-select-text--arrow",
    Nationality: ".oxd-select-dropdown > :nth-child(27)",
    MaritalStatus:".oxd-select-dropdown > :nth-child(2)",
    

  }

  
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
   
    cy.get(selectorsList.firstNameField).clear().type('firstNameTest')
    cy.get(selectorsList.nickNameTest).clear()
    cy.get(selectorsList.lastNamefield).clear().type('lastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('empIdTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('otherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('driversLicenseNumberTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-05-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCamboBox).eq(0).click()
    cy.get(selectorsList.Nationality).click()
    cy.get(selectorsList.genericCamboBox).eq(1).click()
    cy.get(selectorsList.MaritalStatus).click()
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

